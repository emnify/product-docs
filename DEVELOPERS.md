# emnify Documentation Development Guide

> **Note**
> This guide assumes you're already familiar with software development tools and the [GitHub workflow](https://docs.github.com/en/get-started/quickstart/github-flow).
> If this is new to you, please refer to the [contributing guide](./CONTRIBUTING.md).

Your interest in contributing to the emnify Documentation is greatly appreciated.
Please read the [Code of Conduct](https://github.com/emnify/.github/blob/add-code-of-conduct/CODE_OF_CONDUCT.md#code-of-conduct) to help maintain a professional, respectful, and inclusive environment for all contributors.

## Prerequisites

The emnify Documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 
To run it locally, you'll need the following:

- [Node.js](https://nodejs.org/en/download/) ([version 16.14](https://docusaurus.io/docs/installation#requirements) or higher)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) 

To lint the documentation, you'll need to install:

- [Vale](.github/vale/README.md#install-vale)
- [EditorConfig plugin](https://editorconfig.org/#download)
- [Prettier editor integration](https://prettier.io/docs/en/editors.html)

## Set up your working directory

Open a terminal window and navigate to your preferred folder for your local Git repositories.
Next, clone this repository and move into the directory:

```shell
git clone https://github.com/emnify/product-docs.git
cd product-docs
```

> **Note**
> If you're an internal emnify contributor, please contact [Squad Docs](https://emnify.atlassian.net/wiki/spaces/squadDocs/overview) to ensure you have the appropriate rights.

Then, install the dependencies:

```shell
yarn install
```

## Local development

```shell
yarn start
```

> **Note**
> Runs on http://localhost:3000 by default.

This command starts a local development server and opens up a browser window. 
Most changes are reflected live without having to restart the server.

## Linting

### Code

All JavaScript, JSON, and JSX files are linted using [ESLint](https://eslint.org/) and Prettier.
This is done automatically via a [pre-commit hook](./.husky/pre-commit), but you can also run the commands locally:

```shell
# Runs ESLint and Prettier without modifying
yarn lint

# Runs ESLint and Prettier and modifies code where possible
yarn lint:fix 
```

For troubleshooting purposes, each linter can be run individually and follows a similar protocol to the general `lint` command:

```shell
# ESLint
yarn eslint
yarn eslint:fix

# Prettier
yarn prettier
yarn prettier:fix
```

### Markdown files

All Markdown and MDX files are linted using [Vale](.github/vale/README.md).
There's also an [EditorConfig](.editorconfig) file at the root of this repository to enforce consistent spacing and formatting.

## Adding images

Each category within the [`docs` directory](./docs/) has an `assets` directory containing all the infographics, screenshots, or other images used on those pages.

When adding a new image, filenames should be written in [kebab case](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/#kebab-case) format with all lowercase characters.
Infographics should begin with `infographic-` and screenshots should describe the part of the system represented from least to most specific (for example, a screenshot of the Data Streams section of the Integrations page in the emnify Portal should be named `portal-integrations-data-streams`).

### Troubleshooting

Depending on your operating system, you may run into an issue where your Git configuration doesn't catch subtle filename changes, resulting in a failing build.
To avoid this problem, update this setting:

```shell
git config core.ignoreCase false
```

## Build the documentation pages

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

To serve the built website locally, run the following:

```shell
yarn serve
```

## Branch names

Where possible, prefix the branch name with the ID of the Zendesk ticket, Jira issue, or GitHub issue and include a short description of the intended changes. 

For example:

- `ZD-12345-SIM-deletion-for-resellers` for Zendesk ticket #12345
- `SDOCS-300-create-contributing-guide` for Squad Docs Jira ticket #300 
- `GH-44-delete-endpoint-typo` for GitHub issue #44

## Pull requests

Opening a pull request is required for all proposed changes.
Every pull request must be reviewed and approved by at least one [code owner](./.github/CODEOWNERS).

> **Note**
> Members of emnify's documentation team can bypass these restrictions.

Please follow the [pull request template](https://github.com/emnify/product-docs/blob/main/.github/PULL_REQUEST_TEMPLATE.md) and be descriptive as possible.
The [test deployment](https://github.com/emnify/product-docs/blob/main/.github/workflows/test-deploy.yml) must also pass before merging.

## Deployment

### GitHub Pages

The emnify Documentation is hosted directly from this repository using [GitHub Pages](https://pages.github.com/).
Every push to the `main` branch automatically triggers a [GitHub Action](https://github.com/emnify/product-docs/blob/main/.github/workflows/deploy.yml) that deploys the website.

### Manually

Because the site uses GitHub Pages for hosting, the following commands are another way to build the website and push to the [`gh-pages` branch](https://github.com/emnify/product-docs/tree/gh-pages).

> **Warning**
> You need admin rights to deploy the emnify Documentation manually.

Using SSH:

```shell
USE_SSH=true yarn deploy
```

Not using SSH:

```shell
GIT_USER=<Your GitHub username> yarn deploy
```

## Additional resources

Please consult the [GitHub Docs Get started guide](https://docs.github.com/en/get-started) for any GitHub or Git topics not covered here.
