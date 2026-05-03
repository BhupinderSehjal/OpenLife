# OpenLife

OpenLife is an open-source productivity, time-tracking, habit reflection, and workflow analysis platform for people who want to understand how they spend their day and improve it through small, consistent changes.

[![CI](https://github.com/BhupinderSehjal/OpenLife/actions/workflows/ci.yml/badge.svg)](https://github.com/BhupinderSehjal/OpenLife/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Good first issues](https://img.shields.io/github/issues/BhupinderSehjal/OpenLife/good%20first%20issue?label=good%20first%20issues)](https://github.com/BhupinderSehjal/OpenLife/labels/good%20first%20issue)
[![Contributors welcome](https://img.shields.io/badge/contributors-welcome-blue.svg)](CONTRIBUTOR_ONBOARDING.md)

Live demo: [openlife-nine.vercel.app](https://openlife-nine.vercel.app)

## What OpenLife Does

Most productivity tools focus only on completed tasks. OpenLife focuses on daily reflection:

- Track tasks and daily workflow.
- Understand where time goes.
- Reflect on habits and productivity patterns.
- Build a beginner-friendly open-source product in public.

OpenLife is useful for productivity users, students, beginner contributors, React developers, backend developers, and anyone learning open-source collaboration.

## Keywords

`open-source productivity app`, `time tracking`, `habit tracker`, `workflow analysis`, `daily reflection`, `React`, `Vite`, `Node.js`, `Express`, `MongoDB`, `beginner friendly open source`, `good first issue`

## Quick Links

| Link | Purpose |
| --- | --- |
| [Live demo](https://openlife-nine.vercel.app) | Try the app |
| [Contributor onboarding](CONTRIBUTOR_ONBOARDING.md) | Start your first contribution |
| [Good first issues](GOOD_FIRST_ISSUES.md) | Find beginner-friendly work |
| [Roadmap](ROADMAP.md) | See planned project direction |
| [Maintainer review](MAINTAINER_REVIEW.md) | Current maintainer assessment |
| [Contributing guide](CONTRIBUTING.md) | Contribution rules and setup |
| [Security policy](SECURITY.md) | Report vulnerabilities |

## Features

Current and in-progress:

- Task management UI and backend API work.
- Daily time usage tracking UI.
- Dashboard and reflection-oriented UI components.
- Static chatbot/help UI components.
- Beginner-friendly contribution flow.
- Express/Mongoose backend structure.

Planned:

- Learning goals and reminders.
- Daily and weekly workflow analytics.
- Habit and goal improvement cycles.
- More complete API documentation and route tests.
- Better onboarding for first-time contributors.

## Tech Stack

Frontend:

- React
- Vite
- Tailwind CSS
- React Router

Backend:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT authentication
- Swagger docs

Tooling:

- GitHub Actions CI
- Dependabot
- GitHub Issues and Pull Requests

## Local Setup

Clone the repository:

```bash
git clone https://github.com/BhupinderSehjal/OpenLife.git
cd OpenLife
```

Run the frontend:

```bash
cd frontend
npm ci
npm run dev
```

Open `http://localhost:5173`.

Run the backend:

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

## Checks

Frontend:

```bash
cd frontend
npm run lint
npm run build
```

Backend:

```bash
cd backend
npm test
```

## Contributing

New contributors are welcome. The best first pull request is small, focused, and easy to review.

Start here:

1. Read [CONTRIBUTOR_ONBOARDING.md](CONTRIBUTOR_ONBOARDING.md).
2. Pick an issue from [GOOD_FIRST_ISSUES.md](GOOD_FIRST_ISSUES.md) or the `good first issue` label.
3. Comment on the issue before starting.
4. Open a focused pull request with a clear summary and screenshots for UI changes.

Maintainers should merge relevant PRs when the change is focused, useful, and checks pass.

## Repository SEO Checklist

Maintainers can use [REPO_SEO_CHECKLIST.md](REPO_SEO_CHECKLIST.md) to configure GitHub topics, description, pinned issues, and social preview settings.

## Community

OpenLife values respectful communication, beginner-friendly reviews, practical improvements, and learning in public.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

OpenLife is released under the [MIT License](LICENSE).
