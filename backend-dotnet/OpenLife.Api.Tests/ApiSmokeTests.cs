using System.Net;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Mvc.Testing;

namespace OpenLife.Api.Tests;

public sealed class ApiSmokeTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public ApiSmokeTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task Health_endpoint_returns_ok_status()
    {
        var health = await _client.GetFromJsonAsync<HealthResponse>("/health");

        Assert.NotNull(health);
        Assert.Equal("ok", health.Status);
        Assert.Equal("OpenLife.Api", health.Service);
    }

    [Fact]
    public async Task Info_endpoint_describes_dotnet_backend()
    {
        var info = await _client.GetFromJsonAsync<InfoResponse>("/api/info");

        Assert.NotNull(info);
        Assert.Equal("OpenLife", info.Name);
        Assert.Equal("ASP.NET Core", info.Backend);
    }

    [Fact]
    public async Task Task_endpoint_creates_and_returns_task()
    {
        var request = new CreateTaskRequest(
            $"Write test {Guid.NewGuid():N}",
            "Add a smoke test for the ASP.NET Core backend",
            "normal",
            "daily",
            DateTimeOffset.UtcNow.AddDays(1)
        );

        var createResponse = await _client.PostAsJsonAsync("/api/tasks", request);
        Assert.Equal(HttpStatusCode.Created, createResponse.StatusCode);

        var created = await createResponse.Content.ReadFromJsonAsync<TaskResponse>();
        Assert.NotNull(created);
        Assert.NotEqual(Guid.Empty, created.Id);
        Assert.Equal(request.Title, created.Title);
        Assert.Equal("todo", created.Status);

        var fetched = await _client.GetFromJsonAsync<TaskResponse>($"/api/tasks/{created.Id}");
        Assert.NotNull(fetched);
        Assert.Equal(created.Id, fetched.Id);
    }

    [Fact]
    public async Task Task_endpoint_rejects_blank_title()
    {
        var request = new CreateTaskRequest(
            "",
            "Description",
            "normal",
            "daily",
            DateTimeOffset.UtcNow.AddDays(1)
        );

        var response = await _client.PostAsJsonAsync("/api/tasks", request);

        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }

    [Fact]
    public async Task Task_endpoint_updates_task_successfully()
    {
        // Step 1: Create task
        var request = new CreateTaskRequest(
            "Test Task",
            "Test Description",
            "normal",
            "daily",
            DateTimeOffset.UtcNow.AddDays(1)
        );

        var createResponse = await _client.PostAsJsonAsync("/api/tasks", request);
        var created = await createResponse.Content.ReadFromJsonAsync<TaskResponse>();
        Assert.NotNull(created);

        // Step 2: Update task
        var updateRequest = new CreateTaskRequest(
            "Updated Task",
            "Updated Description",
            "high",
            "weekly",
            DateTimeOffset.UtcNow.AddDays(2)
        );

        var updateResponse = await _client.PatchAsJsonAsync(
            $"/api/tasks/{created.Id}",
            updateRequest
        );

        // Step 3: Check result
        Assert.Equal(HttpStatusCode.OK, updateResponse.StatusCode);

        var updated = await updateResponse.Content.ReadFromJsonAsync<TaskResponse>();
        Assert.NotNull(updated);
        Assert.Equal("Updated Task", updated.Title);
    }

    [Fact]
    public async Task Task_endpoint_update_rejects_empty_title()
    {
        var request = new CreateTaskRequest(
            "Valid Title",
            "Valid Description",
            "normal",
            "daily",
            DateTimeOffset.UtcNow.AddDays(1)
        );

        var createResponse = await _client.PostAsJsonAsync("/api/tasks", request);
        var created = await createResponse.Content.ReadFromJsonAsync<TaskResponse>();
        Assert.NotNull(created);

        var invalidUpdate = new CreateTaskRequest(
            "",
            "Updated Description",
            "normal",
            "daily",
            DateTimeOffset.UtcNow.AddDays(1)
        );

        var response = await _client.PatchAsJsonAsync($"/api/tasks/{created.Id}", invalidUpdate);

        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }

    [Fact]
    public async Task Task_endpoint_update_rejects_invalid_priority()
    {
        var request = new CreateTaskRequest(
            "Valid Title",
            "Valid Description",
            "normal",
            "daily",
            DateTimeOffset.UtcNow.AddDays(1)
        );

        var createResponse = await _client.PostAsJsonAsync("/api/tasks", request);
        var created = await createResponse.Content.ReadFromJsonAsync<TaskResponse>();
        Assert.NotNull(created);

        var invalidUpdate = new CreateTaskRequest(
            "Updated Title",
            "Updated Description",
            "wrong",
            "daily",
            DateTimeOffset.UtcNow.AddDays(1)
        );

        var response = await _client.PatchAsJsonAsync($"/api/tasks/{created.Id}", invalidUpdate);

        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }

    [Fact]
    public async Task Get_nonexistent_task_returns_404()
    {
        var response = await _client.GetAsync("/api/tasks/99999");
        Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }

    [Fact]
    public async Task Patch_nonexistent_task_returns_404()
    {
        var payload = new { };
        var response = await _client.PatchAsJsonAsync("/api/tasks/99999", payload);
        Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }

    [Fact]
    public async Task Delete_nonexistent_task_returns_404()
    {
        var response = await _client.DeleteAsync("/api/tasks/99999");
        Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }

    [Fact]
    public async Task Task_endpoint_deletes_task_successfully()
    {
        var request = new CreateTaskRequest(
            "Test Task",
            "Test Description",
            "normal",
            "daily",
            DateTimeOffset.UtcNow.AddDays(1)
        );

        var createResponse = await _client.PostAsJsonAsync("/api/tasks", request);
        var created = await createResponse.Content.ReadFromJsonAsync<TaskResponse>();
        Assert.NotNull(created);

        var deleteResponse = await _client.DeleteAsync($"/api/tasks/{created.Id}");

        Assert.Equal(HttpStatusCode.OK, deleteResponse.StatusCode);

        var getResponse = await _client.GetAsync($"/api/tasks/{created.Id}");
        Assert.Equal(HttpStatusCode.NotFound, getResponse.StatusCode);
    }

    private sealed record HealthResponse(
        string Status,
        string Service,
        DateTimeOffset TimestampUtc
    );

    private sealed record InfoResponse(string Name, string Backend, string Status, string Purpose);

    private sealed record CreateTaskRequest(
        string Title,
        string Description,
        string Priority,
        string Period,
        DateTimeOffset DueDate
    );

    private sealed record TaskResponse(
        Guid Id,
        string Title,
        string Description,
        string Status,
        string Priority,
        string Period,
        DateTimeOffset DueDate,
        DateTimeOffset CreatedAtUtc
    );
}
