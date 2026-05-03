# Backend Readiness Guide

This guide explains what the OpenLife backend already has, what is missing, and how contributors can help without taking on too much at once.

## Current Backend Scope

The backend currently includes:

- Express app setup.
- MongoDB connection through Mongoose.
- User signup.
- User login with JWT.
- Auth middleware for protected routes.
- Task create, read, update, and delete routes.
- Request validators.
- Swagger documentation setup.

This is a useful foundation, but it is not production-ready yet.

There is also an additional ASP.NET Core backend starter in [`backend-dotnet/`](backend-dotnet/README.md). It is intentionally separate from the Node backend so C#/.NET contributors can help without replacing the current API.

## Production-Ready Definition

The backend should not be considered production-ready until:

- Users can only access their own data.
- Auth routes return predictable errors.
- Task routes return correct `404`, `400`, `401`, and `403` responses.
- Startup code does not log secrets or debug-only values.
- CORS is configured for known frontend origins.
- Security headers are enabled.
- A health endpoint exists.
- Real backend tests exist.
- Environment variables are documented.
- Deployment steps are documented and verified.

## Contributor Task Order

Work should happen in this order:

1. Fix auth and task safety issues.
2. Add route-level smoke tests.
3. Improve production middleware and logging.
4. Improve API docs and examples.
5. Deploy backend separately from the frontend.
6. Add new product modules such as learning goals and reminders.

## Beginner-Friendly Backend Work

Good beginner tasks:

- Add or improve docs.
- Add simple examples for existing routes.
- Remove debug logs.
- Add a health check route.
- Add one small validator test.
- Add clear `404` behavior for one provider.

Avoid these as first PRs:

- Full auth redesign.
- Full database redesign.
- Large task API rewrite.
- Reminder engine implementation before learning-goal CRUD is stable.

## Backend Issue Map

| Area | Needed work |
| --- | --- |
| Auth | Handle missing users during login and validate token config |
| Tasks | Ensure users can only read/update/delete their own tasks |
| Validators | Fix query validation bugs and add tests |
| Errors | Return useful `404` and `400` responses |
| Security | Add security headers and production CORS configuration |
| Testing | Add meaningful Node test runner coverage |
| Deployment | Add backend deployment guide and environment checklist |
| Docs | Add API request and error response examples |

## Maintainer Review Checklist

Before merging backend PRs, check:

- Does the PR touch one issue only?
- Does it avoid unrelated formatting churn?
- Does it protect user data?
- Are errors predictable?
- Are docs updated if behavior changed?
- Did the contributor run `npm test` from `backend`?

## Useful Commands

Install backend dependencies:

```bash
cd backend
npm ci
```

Run backend tests:

```bash
cd backend
npm test
```

Run production dependency audit:

```bash
cd backend
npm audit --omit=dev
```
