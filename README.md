# react-boilerplate

A template to start React projects using Parcel as the bundler.

## Getting Started

Click the green "Use this template" button in the top of this repo. Create a new repository.

Afterwards clone the repo to your local machine. Then run `npm install`, followed by `npm run start`.

Check the scripts in `package.json` for further options.

## Toolchains

includes the following toolchains setup and configured:

-   [parcel](https://parceljs.org/) - Build tool
-   [prettier](https://prettier.io/) - Formatter
-   [eslint](https://eslint.org/) - Linter
-   [jest](https://jestjs.io/) - Unit Testing
-   [babel](https://babeljs.io/) - Compiler
-   [sonarcloud](https://www.sonarsource.com/products/sonarcloud/) - Code Scanner

Note: Babel was included primarily for Jest testing React components. Parcel handles the rest of the project under the hood (with their own Babel configuration). Parcel is setup within this project to stay out of the way when necessary for our configuration.

## Libraries

Aside from the React libraries, this project includes:

-   [Axios](https://axios-http.com/)

Note: Axios is clamped to the latest version before 1.0.0 release. The v1 release had lots of issues early in, so I opted to stay behind until they iron out the problems.

## Github Actions

2 actions are configured in this project:

1.  PR-Checks (audit, format, lint, test, build)
2.  Merge-to-Main (audit, test, build, deploy)

## Deployment

This is setup to deploy for Github Pages. The `Merge-to-main` Github action creates or updates a `gh-pages` branch in the repo with bundled production dist folder. You must configure the repo to point the GH pages deployment to the `gh-pages` branch to finish deploying the site.

Inside the repo, click `Settings`, then under code and automation section click `Pages`. Finally, change the branch dropdown to `gh-pages`. Reference image below.

![github pages setup info](./docs/gh-pages-setup.jpg)

## SonarCloud setup

-   Sign in through [SonarCloud](https://sonarcloud.io) with your Github Account.
-   Follow the setup instructions to link your repository to SonarCloud. Afterwards, follow the Github Actions configuration tutorial.
-   Disable Automatic Analysis in the Sonarcloud dashboard for the project. Administration -> Analysis Method.
-   Update the organization and projectKey fields in the `sonar-project.properties` file.
-   Be sure to add your `SONAR_TOKEN` to the repository secrets for Github Actions.

## Extras

-   Eslint configuration extends the [js-standard](https://standardjs.com/).
-   CSS choice is up to you. Parcel is configured to handle nearly anything except CSS-in-JS.
