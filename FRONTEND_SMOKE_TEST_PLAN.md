\# Frontend Smoke Test Plan



\## Purpose



This checklist helps contributors and maintainers quickly verify that the frontend is functioning correctly before opening or reviewing a pull request.



\## Setup



1\. Navigate to the frontend directory.

2\. Install dependencies with `npm install` or `npm ci`.

3\. Start the development server with `npm run dev`.



\## Route Checks



Verify that the following pages load without visible errors:



\* Home page

\* About page

\* Dashboard (if available)

\* Tracker (if available)

\* Planner (if available)

\* Insights (if available)



\## Navigation Checks



\* Navigation links work correctly.

\* No broken links are present.

\* Navigation works on desktop and mobile layouts.



\## Mobile Layout Checks



Use browser responsive mode and verify:



\* Content is readable.

\* Buttons remain accessible.

\* Navigation remains usable.

\* No overlapping elements are visible.



\## Visual Checks



\* No obvious UI regressions.

\* No missing images or icons.

\* No visible error messages.



\## Browser Console Checks



\* Open Developer Tools.

\* Verify there are no critical console errors.

\* Verify there are no repeated warnings caused by the change.



\## Screenshots



For UI-related pull requests:



\* Include before/after screenshots when applicable.

\* Include mobile screenshots if mobile layouts are affected.



\## Completion Checklist



\* Application starts successfully.

\* Key routes load correctly.

\* Navigation works.

\* Mobile layout looks acceptable.

\* No obvious console errors.

\* Screenshots included when needed.



