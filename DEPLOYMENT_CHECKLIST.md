# Deployment Checklist



## Purpose



This checklist helps maintainers verify that an application is ready for deployment and that deployments complete successfully.



## Pre-Deployment Checks



* Ensure all required changes are merged.

* Verify that CI checks pass.

* Review open issues related to deployment.

* Confirm that documentation is up to date.



## Environment Variables



Verify that all required environment variables are configured.



Examples:



* PORT

* DATABASE_URL

* DATABASE_NAME

* JWT_SECRET

* JWT_ACCESS_EXPIRATION_TTL



Do not store secrets in the repository.



## Deployment Steps



1. Build the application.

2. Configure deployment settings.

3. Deploy the latest version.

4. Monitor deployment logs.

5. Confirm deployment completes successfully.



## Post-Deployment Verification



* Application loads successfully.

* API endpoints respond correctly.

* Authentication works as expected.

* No critical errors appear in logs.



## Rollback Readiness



* Confirm rollback procedures are available.

* Keep previous deployment information accessible.

* Verify backups exist when applicable.



## Completion Checklist



* Deployment completed successfully.

* Environment variables verified.

* Application functionality confirmed.

* Logs checked for errors.

* Rollback plan available.



