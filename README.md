# Bubbler: A Kotlin Full-stack Application Example

This is a work-in-progress application based on project https://github.com/Kotlin/kotlin-fullstack-sample

## Backend

The backend of Bubbler is built using [Ktor](https://github.com/kotlin/ktor), a Web framework built by the Kotlin team.
For data persistence, it uses [H2](http://www.h2database.com), allowing you to run the example without the need to configure
an external SQL server. The HTTP server implementation is provided by [Jetty](http://www.eclipse.org/jetty/).

To run the backend, use `./gradlew backend:run`, or open Bubbler as a project in IntelliJ IDEA and execute the shared
run configuration `Backend :: Jetty`. This will start serving the REST API of the backend on port 9090.

## Frontend

The frontend of Bubbler is built using [React](https://facebook.github.io/react/). To adapt the React APIs to Kotlin,
it incorporates a set of [wrappers](https://github.com/orangy/thinkter/tree/master/frontend/src/org/jetbrains/react), which
you can also use in your projects and adapt to your needs.

The project is built using webpack and the [Kotlin frontend plugin](https://github.com/kotlin/kotlin-frontend-plugin). 

To run the frontend, use `./gradlew frontend:run`. This will start a webpack server on port 8080. Navigate to http://localhost:8080 
to start using the application.

## Tests

An example of a selenium test with Python is located in the selenium-tests folder. Python 3 is required for the test to run,
although no major changes are needed to adjust it for Python 2.