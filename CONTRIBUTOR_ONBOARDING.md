# Contributor Onboarding

Welcome to OpenLife. The best first contribution is small, focused, and easy to review.

## New Contributor Path

Use this path if you are new to open source:

1. Open [GOOD_FIRST_ISSUES.md](GOOD_FIRST_ISSUES.md).
2. Choose one task that matches your skill level.
3. Comment on the related issue before starting.
4. Make one focused change.
5. Run the relevant checks.
6. Open a pull request and explain what changed.

## Start Here

1. Read `README.md` and `CONTRIBUTING.md`.
2. Pick an issue labeled `good first issue`, `help wanted`, or `needs-triage`.
3. Comment on the issue before starting so maintainers can confirm scope.
4. Keep your pull request focused on one change.
5. Include a short summary, screenshots for UI changes, and the checks you ran.

## Good First PR Ideas

- Fix a typo or unclear setup instruction.
- Improve an existing UI component without changing unrelated pages.
- Add a small loading, empty, or error state.
- Add a focused backend test for one helper or validator.
- Improve API examples in docs.

## Before Opening a PR

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

For documentation-only changes, explain what file changed and why.

## Maintainer Review Promise

Maintainers should respond with a clear next step:

- Approved and merged when the change is relevant, focused, and checks pass.
- Requested changes when the idea is good but the implementation needs work.
- Closed with a short reason when the PR is unrelated, too broad, or duplicates existing work.

## PR Message Examples

Approved:

> Thanks for the focused contribution. This is relevant, small, and checks pass, so I am merging it.

Changes requested:

> Thanks for the PR. The idea fits OpenLife, but please keep this limited to the issue scope and address the review notes before merge.

Closed:

> Thanks for taking time to contribute. I am closing this because it is outside the current roadmap; please open an issue first so we can agree on scope.
