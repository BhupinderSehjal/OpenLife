# OpenLife Roadmap

This roadmap keeps the project focused and helps contributors choose useful work.

## Phase 1: Maintainer Foundation

Goal: make every contribution easier to review.

- Keep CI passing on `main`.
- Keep frontend and backend dependency audits clean.
- Use issue templates and pull request templates.
- Apply consistent labels to open issues.
- Close or update issues that are already completed.

## Phase 2: Contributor Experience

Goal: make OpenLife welcoming without accepting unfocused changes.

- Maintain `good first issue` work that is genuinely small.
- Add screenshots and short demo notes to README.
- Add beginner-friendly backend and frontend setup troubleshooting.
- Keep pull requests small and tied to issues.

## Phase 3: Product Core

Goal: make the app clearly useful as a daily reflection tool.

- Stabilize task management flows.
- Route and polish the dashboard experience.
- Improve daily time usage tracking.
- Add helpful empty, loading, and error states.
- Keep the UI simple, readable, and accessible.

## Phase 4: Backend Stability

Goal: make APIs easier to test and extend.

- Follow the backend checklist in [BACKEND_READINESS.md](BACKEND_READINESS.md).
- Split app creation from server startup.
- Add tests for validators, token generation, and core routes.
- Remove startup debug logs.
- Improve Swagger examples.
- Add consistent API error responses.
- Grow the optional ASP.NET Core backend in `backend-dotnet/` through small, tested PRs.

## Phase 5: Learning Goals and Reminders

Goal: implement the learning-goal issues in small steps.

Recommended order:

1. Create Learning Goal API.
2. Get Learning Goals API.
3. Update Learning Goal API.
4. Delete Learning Goal API.
5. Mark Learning Goal as Completed API.
6. Reminder Scheduling Engine.

The reminder engine should wait until the learning-goal model and CRUD routes are stable.
