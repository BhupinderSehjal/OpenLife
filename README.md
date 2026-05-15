# OpenLife

OpenLife is an open-source productivity, time tracking, habit reflection, and workflow analysis platform. It helps people understand where their time goes, reflect on daily habits, and improve their workflow through small, consistent changes.

[![CI](https://github.com/BhupinderSehjal/OpenLife/actions/workflows/ci.yml/badge.svg)](https://github.com/BhupinderSehjal/OpenLife/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Good first issues](https://img.shields.io/github/issues/BhupinderSehjal/OpenLife/good%20first%20issue?label=good%20first%20issues)](https://github.com/BhupinderSehjal/OpenLife/labels/good%20first%20issue)
[![Contributors welcome](https://img.shields.io/badge/contributors-welcome-blue.svg)](CONTRIBUTOR_ONBOARDING.md)

Live frontend: [openlife-nine.vercel.app](https://openlife-nine.vercel.app)

## Why OpenLife

Most productivity apps answer: "What did you complete?"

OpenLife asks better daily questions:

- Where did your time actually go?
- What patterns repeat in your workflow?
- Which habits help or hurt your focus?
- What small change would make tomorrow better?

The project is also built as a beginner-friendly open-source learning space for contributors working with React, Node.js, ASP.NET Core, APIs, documentation, testing, and project maintenance.

## Project Status

| Area | Status | Notes |
| --- | --- | --- |
| Frontend | Live | Deployed on Vercel |
| Node backend | In progress | Express/Mongoose API exists but is not deployed yet |
| ASP.NET Core backend | Starter added | Additional backend in `backend-dotnet/` for C# contributors |
| Tests | Basic | Frontend lint/build, Node test command, ASP.NET smoke tests |
| Production readiness | In progress | See `BACKEND_READINESS.md` and open issues |

## Quick Links

| Link | Purpose |
| --- | --- |
| [Live demo](https://openlife-nine.vercel.app) | Try the current frontend |
| [Contributor onboarding](CONTRIBUTOR_ONBOARDING.md) | First steps for new contributors |
| [Good first issues](GOOD_FIRST_ISSUES.md) | Beginner-friendly work |
| [Roadmap](ROADMAP.md) | Maintainer and product direction |
| [Backend readiness](BACKEND_READINESS.md) | Backend gaps and production checklist |
| [ASP.NET backend](backend-dotnet/README.md) | C#/.NET backend starter |
| [Maintainer review](MAINTAINER_REVIEW.md) | Current repo assessment |
| [Repo SEO checklist](REPO_SEO_CHECKLIST.md) | GitHub topics and visibility checklist |
| [Security policy](SECURITY.md) | Report vulnerabilities |

## Features

Current and in progress:

- Task management UI and backend API work.
- Daily time usage tracking UI.
- Dashboard and reflection-oriented UI components.
- Static chatbot/help UI components.
- Node/Express backend with users, auth, tasks, JWT middleware, and Swagger wiring.
- ASP.NET Core backend starter with health/info/task endpoints and tests.
- Beginner-friendly contribution flow, issue templates, PR template, and roadmap docs.

Planned:

- Learning goals and reminders.
- Daily and weekly workflow analysis.
- Habit and goal improvement cycles.
- Backend deployment.
- More route tests, API examples, and production hardening.
- Screenshots and stronger product documentation.

## Tech Stack

Frontend:

- React
- Vite
- Tailwind CSS
- React Router

Node backend:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT authentication
- Swagger docs

ASP.NET Core backend:

- ASP.NET Core
- Minimal APIs
- OpenAPI
- xUnit smoke tests
- In-memory task store for starter contribution work

Tooling:

- GitHub Actions CI
- Dependabot
- GitHub Issues and Pull Requests
- MIT license

## Repository Structure

```text
OpenLife/
  frontend/             React + Vite app
  backend/              Node + Express backend
  backend-dotnet/       ASP.NET Core backend starter
  .github/              Workflows, templates, CODEOWNERS, Dependabot
  README.md             Project overview
  ROADMAP.md            Project direction
  BACKEND_READINESS.md  Backend production-readiness guide
```

## Local Setup

Clone the repository:

```bash
git clone https://github.com/BhupinderSehjal/OpenLife.git
cd OpenLife
```

### Frontend

```bash
cd frontend
npm ci
npm run dev
```

Open `http://localhost:5173`.

### Node Backend

```bash
cd backend
npm ci
cp .env.example .env.development
npm run dev
```

Create `backend/.env.development` with:

```env
PORT=3001
DATABASE_URL=mongodb://localhost:27017
DATABASE_NAME=openlife
JWT_SECRET=replace-with-a-local-secret
JWT_ACCESS_EXPIRATION_TTL=3600
```

#### Backend environment variables

The Node backend loads environment variables from `.env.${NODE_ENV}`. If `NODE_ENV` is not set, it defaults to `development`, so local development uses `backend/.env.development`.

| Variable | Purpose | Production notes |
| --- | --- | --- |
| `PORT` | Port used by the Express server. Defaults to `3001` if unset. | Let the hosting provider set this when it provides a port automatically. |
| `DATABASE_URL` | MongoDB connection string used by Mongoose. | Use a production MongoDB connection string from your database provider. |
| `DATABASE_NAME` | MongoDB database name passed to the connection. | Use the production database name for the deployed backend. |
| `JWT_SECRET` | Secret used to sign and verify JWT access tokens. | Use a strong, unique value. Changing it invalidates existing tokens. |
| `JWT_ACCESS_EXPIRATION_TTL` | Access token lifetime in seconds. `3600` means one hour. | Choose a TTL that matches the production security requirements. |
| `NODE_ENV` | Selects the runtime environment and `.env.${NODE_ENV}` file name. | Set this to `production` for deployed backend runs. |

Production secrets should be configured in the deployment provider's environment variable settings. Do not commit real `.env` files, database credentials, JWT secrets, tokens, or production connection strings.

### ASP.NET Core Backend

```bash
cd backend-dotnet/OpenLife.Api
dotnet run
```

Run ASP.NET tests:

```bash
dotnet test backend-dotnet/OpenLife.DotNet.slnx
```

## Checks Before Pull Request

Frontend:

```bash
cd frontend
npm run lint
npm run build
```

Node backend:

```bash
cd backend
npm test
```

ASP.NET Core backend:

```bash
dotnet test backend-dotnet/OpenLife.DotNet.slnx
```

## New Contributors

New contributors are welcome. The best first pull request is small, focused, and easy to review.

Start here:

1. Read [CONTRIBUTOR_ONBOARDING.md](CONTRIBUTOR_ONBOARDING.md).
2. Pick an issue from [GOOD_FIRST_ISSUES.md](GOOD_FIRST_ISSUES.md) or the [`good first issue`](https://github.com/BhupinderSehjal/OpenLife/labels/good%20first%20issue) label.
3. Comment on the issue before starting.
4. Keep the pull request focused on one change.
5. Include what changed, why it matters, and how you tested it.

Good beginner areas:

- Documentation improvements.
- Empty states and accessibility improvements.
- Small frontend UI fixes.
- API examples.
- Backend smoke tests.
- ASP.NET Core starter endpoints.

## Maintainer Notes

Maintainers should prioritize:

- Keeping `main` green.
- Reviewing small PRs quickly.
- Labeling issues clearly.
- Closing or updating completed issues.
- Keeping beginner issues genuinely beginner-friendly.
- Avoiding large rewrites unless they are broken into planned tasks.

Suggested merge message for good PRs:

> Thanks for the focused contribution. This is relevant, small, and checks pass, so I am merging it.

## Troubleshooting

`npm ci` fails:

- Make sure you are inside `frontend/` or `backend/`.
- Delete `node_modules` and rerun `npm ci`.
- Use the committed lockfile instead of running random package updates.

Backend cannot connect to MongoDB:

- Confirm MongoDB is running.
- Confirm `DATABASE_URL` and `DATABASE_NAME` exist in `backend/.env.development`.

Port already in use:

- Change `PORT` in the backend env file.
- For Vite, run `npm run dev -- --port 5174`.

.NET command not found:

- Install the .NET SDK.
- Run `dotnet --info` to confirm it is available.

## SEO Keywords

`open-source productivity app`, `time tracking`, `habit tracker`, `daily reflection`, `workflow analysis`, `React`, `Vite`, `Node.js`, `Express`, `MongoDB`, `ASP.NET Core`, `C#`, `beginner-friendly open source`, `good first issue`

## Community

OpenLife values respectful communication, beginner-friendly reviews, practical improvements, and learning in public.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

OpenLife is released under the [MIT License](LICENSE).
