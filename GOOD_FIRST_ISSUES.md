# Good First Issues

This page helps new contributors find small, useful work in OpenLife.

Before starting, comment on the issue so maintainers can confirm that the scope is still valid.

## Good First Issue Rules

A good first issue should be:

- Small enough for one pull request.
- Clear enough to complete without product redesign.
- Useful to users, contributors, or maintainers.
- Easy to verify with a screenshot, lint/build output, or a short test.

## Suggested Starter Tasks

### Documentation

- Improve README setup wording where beginners may get stuck.
- Add API request examples for auth or task routes.
- Add screenshots to the README once stable screenshots are available.
- Improve troubleshooting notes for MongoDB setup.

Labels: `good first issue`, `📚 documentation`, `Beginner Friendly`

### Frontend

- Add empty states for task, dashboard, or tracker sections.
- Improve accessible labels on buttons and interactive UI.
- Fix small responsive layout issues.
- Add screenshots to PRs for visual changes.

Labels: `good first issue`, `🎨 frontend`, `UI`

### Backend

- Add a focused test for one validator or helper.
- Improve error messages for one route.
- Add a small Swagger example for one endpoint.
- Remove debug logging from startup code.

Labels: `good first issue`, `⚙️ backend`, `🔌 api`

### Maintainer Help

- Triage issues with consistent labels.
- Confirm whether older issues are already completed.
- Improve contributor-facing issue descriptions.

Labels: `help wanted`, `🤝 community`, `🧭 discussion`

## PR Review Message Maintainers Can Use

Approved:

> Thanks for the focused contribution. This is relevant, small, and checks pass, so I am merging it.

Needs changes:

> Thanks for the PR. The idea fits OpenLife, but please keep this limited to the issue scope and address the review notes before merge.

Closed:

> Thanks for contributing. I am closing this because it is outside the current roadmap; please open or join an issue first so we can agree on scope.
