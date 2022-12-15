# react-boilerplate

A template to start React projects using Parcel as the bundler.

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

## Extras

-   Eslint configuration extends the [js-standard](https://standardjs.com/).
-   CSS choice is up to you. Parcel is configured to handle nearly anything except CSS-in-JS.
