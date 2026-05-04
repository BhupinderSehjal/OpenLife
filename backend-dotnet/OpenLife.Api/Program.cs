using System.Collections.Concurrent;

var builder = WebApplication.CreateBuilder(args);

const string CorsPolicy = "OpenLifeCors";

builder.Services.AddOpenApi();
builder.Services.AddSingleton<TaskStore>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(CorsPolicy, policy =>
    {
        var configuredOrigins = builder.Configuration
            .GetSection("Cors:AllowedOrigins")
            .Get<string[]>();

        if (configuredOrigins is { Length: > 0 })
        {
            policy.WithOrigins(configuredOrigins)
                .AllowAnyHeader()
                .AllowAnyMethod();
        }
        else
        {
            policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        }
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors(CorsPolicy);

app.MapGet("/health", () => new HealthResponse(
    "ok",
    "OpenLife.Api",
    DateTimeOffset.UtcNow));

app.MapGet("/api/info", () => new InfoResponse(
    "OpenLife",
    "ASP.NET Core",
    "starter",
    "Additional backend API for OpenLife contributors and production-readiness work."));

var tasks = app.MapGroup("/api/tasks");

tasks.MapGet("/", (TaskStore store) => Results.Ok(store.GetAll()));

tasks.MapGet("/{id:guid}", (Guid id, TaskStore store) =>
{
    var task = store.Get(id);
    return task is null ? Results.NotFound(new ErrorResponse("Task not found.")) : Results.Ok(task);
});

tasks.MapPost("/", (CreateTaskRequest request, TaskStore store) =>
{
    var validationError = ValidateCreateTask(request);
if (validationError is not null)
{
    return Results.BadRequest(new ErrorResponse(validationError));
}

    var task = store.Create(request);
    return Results.Created($"/api/tasks/{task.Id}", task);
});

tasks.MapPatch("/{id:guid}", (Guid id, CreateTaskRequest request, TaskStore store) =>
{
    var existingTask = store.Get(id);

    if (existingTask is null)
    {
        return Results.NotFound(new ErrorResponse("Task not found."));
    }

    var updatedTask = new TaskResponse(
        id,
        request.Title.Trim(),
        request.Description.Trim(),
        existingTask.Status,
        request.Priority,
        request.Period,
        request.DueDate,
        existingTask.CreatedAtUtc
    );

    store.Update(id, updatedTask);

    return Results.Ok(updatedTask);
});

tasks.MapDelete("/{id:guid}", (Guid id, TaskStore store) =>
{
    var existingTask = store.Get(id);

    if (existingTask is null)
    {
        return Results.NotFound(new ErrorResponse("Task not found."));
    }

    store.Delete(id);

    return Results.Ok();
});



app.Run();

static string? ValidateCreateTask(CreateTaskRequest request)
{
    if (string.IsNullOrWhiteSpace(request.Title))
    {
        return "Title is required.";
    }

    if (request.Title.Length > 100)
    {
        return "Title must be 100 characters or fewer.";
    }

    if (string.IsNullOrWhiteSpace(request.Description))
    {
        return "Description is required.";
    }

    if (request.Description.Length > 500)
    {
        return "Description must be 500 characters or fewer.";
    }

    if (!AllowedValues.Priorities.Contains(request.Priority))
    {
        return "Priority must be one of: low, normal, high.";
    }

    if (!AllowedValues.Periods.Contains(request.Period))
    {
        return "Period must be one of: daily, weekly, monthly, yearly.";
    }

    return null;
}

internal static class AllowedValues
{
    public static readonly string[] Priorities = ["low", "normal", "high"];
    public static readonly string[] Periods = ["daily", "weekly", "monthly", "yearly"];
}

internal sealed class TaskStore
{
    public void Update(Guid id, TaskResponse task)
{
    _tasks[id] = task;
}

public void Delete(Guid id)
{
    _tasks.TryRemove(id, out _);
}
    private readonly ConcurrentDictionary<Guid, TaskResponse> _tasks = new();

    public IReadOnlyCollection<TaskResponse> GetAll()
    {
        return _tasks.Values
            .OrderByDescending(task => task.CreatedAtUtc)
            .ToArray();
    }

    public TaskResponse? Get(Guid id)
    {
        return _tasks.GetValueOrDefault(id);
    }

    public TaskResponse Create(CreateTaskRequest request)
    {
        var task = new TaskResponse(
            Guid.NewGuid(),
            request.Title.Trim(),
            request.Description.Trim(),
            "todo",
            request.Priority,
            request.Period,
            request.DueDate,
            DateTimeOffset.UtcNow);

        _tasks[task.Id] = task;
        return task;
    }
}

internal sealed record HealthResponse(string Status, string Service, DateTimeOffset TimestampUtc);
internal sealed record InfoResponse(string Name, string Backend, string Status, string Purpose);
internal sealed record CreateTaskRequest(string Title, string Description, string Priority, string Period, DateTimeOffset DueDate);
internal sealed record TaskResponse(Guid Id, string Title, string Description, string Status, string Priority, string Period, DateTimeOffset DueDate, DateTimeOffset CreatedAtUtc);
internal sealed record ErrorResponse(string Message);

public partial class Program;
