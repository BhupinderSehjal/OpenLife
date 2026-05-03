# Maintainer Review

Review date: 2026-05-03

## Current State

OpenLife is a small full-stack JavaScript project:

- `frontend/`: React 19, Vite, Tailwind CSS, React Router.
- `backend/`: Express 5, Mongoose, JWT auth, Swagger docs.
- `.github/workflows/`: community automation plus CI.
- Root docs: README, contributing guide, code of conduct, license, security policy.

The repository is beginner-friendly and active enough to attract contribution, but it needs tighter maintainer guardrails before accepting larger feature work.

## Issues Found

- Frontend lockfile was out of sync with `package.json`, so `npm ci` failed.
- Backend `npm test` intentionally failed with the default placeholder script.
- Existing GitHub Actions did not run install, lint, build, or test checks.
- Backend package metadata pointed to `0bit-0/OpenLife` instead of `BhupinderSehjal/OpenLife`.
- README documented MongoDB as planned even though backend Mongoose schemas already exist.
- No issue templates, PR template, Dependabot config, CODEOWNERS, security policy, or root MIT license file.
- `summary.yml` interpolated AI output directly into a shell command, which is fragile for quotes and multiline output.
- `Dashboard.jsx` exists but is not currently routed from `frontend/src/App.jsx`.
- Backend startup logs environment/debug values and Swagger specs to stdout.
- Backend app bootstrapping is hard to test because `src/index.js` creates the Express app, connects to MongoDB, and starts listening in one file.

## GitHub Triage Snapshot

Open pull requests: none found through the GitHub API.

Open issues:

- `#58` Implement Reminder Scheduling Engine: high priority backend/API/database work. Keep blocked until learning-goal CRUD is designed.
- `#57` Mark Learning Goal as Completed API: backend API task. Depends on learning-goal model.
- `#56` Delete Learning Goal API: backend API task. Good follow-up after create/get/update.
- `#55` Update Learning Goal API: needs discussion on allowed mutable fields and validation.
- `#54` Get Learning Goals API: backend/API docs task. Should not be labeled documentation only.
- `#53` Create Learning Goal API: best first backend task for this feature set.
- `#52` Learning Reminder Module: parent feature; should become an epic tracking smaller issues.
- `#40` Improve Dashboard UI: likely partially done by PR `#51`; verify current UI and close or narrow.
- `#38` Feature Ideas & Enhancements: move broad discussion to GitHub Discussions.
- `#37` Project Roadmap & Contribution Entry Point: keep as pinned meta issue or convert into this roadmap.
- `#8` Add Help Bot: likely completed by ChatBot components; verify and close if satisfied.

## Recommended Labels

Core type labels:

- `type: bug`
- `type: feature`
- `type: docs`
- `type: maintenance`
- `type: refactor`

Area labels:

- `area: frontend`
- `area: backend`
- `area: ci`
- `area: docs`
- `area: community`

Triage labels:

- `needs-triage`
- `needs-design`
- `needs-reproduction`
- `blocked`
- `good first issue`
- `help wanted`

Priority labels:

- `priority: high`
- `priority: medium`
- `priority: low`

Prefer one naming style. Avoid mixing emoji labels with plain labels unless the project intentionally wants a visual label system.

## Maintainer Roadmap

### P0: Keep Main Green

- Require the new CI workflow on pull requests.
- Fix or close issues that are already completed by merged PRs.
- Keep `npm audit --omit=dev` clean for frontend and backend.
- Protect `main` with required checks once CI passes on GitHub.

### P1: Stabilize Backend

- Split Express app creation from server startup so routes can be tested without MongoDB.
- Add basic Node test coverage for validators, auth token generation, and one route.
- Remove startup debug logs.
- Add request validation and consistent error handling for auth and task routes.

### P2: Clarify Product Scope

- Decide whether Dashboard, time tracking, learning goals, and reminders are all first-class modules.
- Turn `#52` into an epic and make `#53` to `#58` small implementation issues.
- Route or remove unused UI pages so the live app matches the repo.

### P3: Contributor Experience

- Add screenshots to README.
- Add architecture notes for frontend routes and backend modules.
- Add seed/sample data or API examples for local development.
- Add beginner-friendly issues only when they are genuinely small and reviewable.

## First Implementation Steps Completed

- Added CI for frontend and backend.
- Added Dependabot for frontend, backend, and GitHub Actions.
- Added issue templates, PR template, CODEOWNERS, SECURITY.md, and LICENSE.
- Added backend `.env.example`.
- Updated setup docs.
- Fixed frontend lockfile, backend lockfile, and the frontend lint warning.
- Replaced the backend placeholder failing test script with `node --test`.
- Hardened the issue-summary workflow shell command.
