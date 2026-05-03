# OpenLife ASP.NET Core Backend

This is an additional backend for OpenLife. It does not replace the existing Node/Express backend.

## Purpose

The ASP.NET Core backend gives C#/.NET contributors a clean API surface to build on while the existing Node backend remains available.

Current starter features:

- `GET /health`
- `GET /api/info`
- `GET /api/tasks`
- `GET /api/tasks/{id}`
- `POST /api/tasks`
- OpenAPI document in development
- CORS configuration
- xUnit smoke tests

The task API currently uses an in-memory store. It is intentionally simple so contributors can add persistence, authentication, and richer validation in focused PRs.

## Requirements

- .NET SDK 10 or newer

Check your SDK:

```bash
dotnet --info
```

## Run Locally

```bash
cd backend-dotnet/OpenLife.Api
dotnet run
```

Default local URLs are printed by `dotnet run`.

## Run Tests

```bash
dotnet test backend-dotnet/OpenLife.Api.Tests/OpenLife.Api.Tests.csproj
```

## Configuration

CORS can be configured in `appsettings.json` or environment-specific settings:

```json
{
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:5173",
      "https://openlife-nine.vercel.app"
    ]
  }
}
```

If no allowed origins are configured, the starter allows any origin to keep local contributor setup simple. Production deployments should configure explicit origins.

## Contributor Roadmap

Good next issues:

- Add persistence with MongoDB or PostgreSQL.
- Add JWT authentication compatible with OpenLife users.
- Add update and delete task endpoints.
- Add validation tests.
- Add deployment guide for Render, Railway, or Azure App Service.
