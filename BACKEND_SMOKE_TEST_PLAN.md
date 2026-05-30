# Backend Smoke Test Plan



## Purpose



This checklist helps contributors and maintainers quickly verify that backend routes are functioning correctly before opening or reviewing a pull request.



## Setup



1. Navigate to the backend directory.



2. Install dependencies:



npm install



3. Create a local environment file:



cp .env.example .env.development



4. Configure the required environment variables:



- PORT

- DATABASE_URL

- DATABASE_NAME

- JWT_SECRET

- JWT_ACCESS_EXPIRATION_TTL



Do not use real production credentials or secrets.



5. Start the backend:



npm run dev



## Health Route Checks



- API starts without errors.

- Health endpoint returns a successful response.

- No unexpected server errors appear in the console.



## Authentication Route Checks



- User registration request succeeds.

- User login request succeeds.

- Invalid credentials return an appropriate error response.

- Protected routes require authentication.



## Task Route Checks



- Create a task.

- Retrieve tasks.

- Update a task.

- Delete a task.

- Invalid task IDs return appropriate error responses.



## Environment Variable Checks



- Required environment variables are configured.

- Missing variables produce understandable startup errors.

- No secrets are committed to the repository.



## Completion Checklist



- Backend starts successfully.

- Health routes respond correctly.

- Authentication routes behave as expected.

- Task routes behave as expected.

- No unexpected console errors are present.

- No real credentials or secrets are used.

