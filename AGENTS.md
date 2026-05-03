# Agent Guidelines

This file guides AI coding agents and automation tools working on OpenLife.

## Project Goal

OpenLife is an open-source productivity, time tracking, habit reflection, and workflow analysis app. Changes should make the app more useful, easier to contribute to, or safer to maintain.

## Work Principles

- Keep changes small and focused.
- Prefer existing project patterns over new abstractions.
- Do not rewrite large parts of the app without an issue and maintainer approval.
- Keep beginner contributors in mind when editing docs or issue descriptions.
- Avoid adding new dependencies unless the benefit is clear.
- Do not commit secrets, tokens, `.env` files, logs, or generated build output.

## Repository Structure

- `frontend/`: React, Vite, Tailwind CSS.
- `backend/`: Express, Mongoose, JWT auth, Swagger docs.
- `.github/`: workflows, templates, CODEOWNERS, Dependabot config.
- Root docs: README, roadmap, contributor onboarding, maintainer review, security policy.

## Required Checks

For frontend changes:

```bash
cd frontend
npm run lint
npm run build
```

For backend changes:

```bash
cd backend
npm test
```

For dependency changes:

```bash
cd frontend
npm audit --omit=dev

cd ../backend
npm audit --omit=dev
```

## Production-Ready Expectations

Before marking production-readiness work complete, verify:

- CI passes.
- No known production dependency vulnerabilities.
- Environment variables are documented in `.env.example`.
- Errors are handled consistently.
- Sensitive values are never logged.
- User-facing routes have useful empty/error states.
- Backend routes have validation and predictable responses.
- Documentation explains how to run and verify the change.

## Pull Request Guidance

Every PR should include:

- What changed.
- Why it matters.
- How it was tested.
- Screenshots for UI changes.
- Linked issue when available.

Good maintainer merge message:

> Thanks for the focused contribution. This is relevant, small, and checks pass, so I am merging it.

## Suggested Agent Roles

These are not runtime app agents. They are maintainer workflows that humans or AI tools can follow.

### Triage Agent

Reviews new issues and PRs, checks scope, applies labels, and asks for missing details.

### CI Agent

Checks failed workflows, reproduces failures locally, and opens focused fixes.

### Docs Agent

Keeps README, setup docs, roadmap, API examples, and contributor docs accurate.

### Frontend QA Agent

Checks routes, responsive layout, empty states, accessibility basics, and screenshots.

### Backend QA Agent

Checks validation, auth, error responses, API examples, and tests.

### Security Agent

Checks dependency alerts, secret leaks, unsafe logging, CORS settings, and auth risks.

## Out of Scope Without Maintainer Approval

- Database schema rewrites.
- Large UI redesigns.
- Authentication redesign.
- New paid services.
- Runtime AI agent features inside the product.
- Changes that make the app harder for beginners to run locally.
