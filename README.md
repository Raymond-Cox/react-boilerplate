# react-boilerplate

A template to start React projects from using Parcel as the bundler.

## Toolchains

includes the following toolchains setup and configured:

-   [parcel](https://parceljs.org/) - Build tool
-   [prettier](https://prettier.io/) - Formatter
-   [eslint](https://eslint.org/) - Linter
-   [jest](https://jestjs.io/) - Unit Testing
-   [babel](https://babeljs.io/) - Compiler

Note: Babel was included primarily for Jest testing React components. Parcel handles the rest of the project under the hood (with their own Babel configuration). Parcel is setup within this project to stay out of the way when necessary for our configuration.

## Included Libraries

Aside from the React libraries, this project includes:

-   [Axios](https://axios-http.com/)

Note: Axios is clamped to the latest version before 1.0.0 release. The v1 release had lots of issues early in, so I opted to stay behind until they iron out the problems.

##
