# Development guide for the emnify Product Documentation

Your interest in contributing to the emnify Product Documentation is greatly appreciated, and hopefully, this development guide helps you get started 🚀

If you think something is missing, [open an issue](https://github.com/emnify/product-docs/issues/new/choose).

> [!NOTE]
> This guide focuses on setting up a local development environment and code standards for this repository.
> Refer to the [contributing guide](CONTRIBUTING.md) if you're looking for guidelines for contributing content.

Please note that this project is governed by [emnify's Code of Conduct](https://github.com/emnify/.github/blob/add-code-of-conduct/CODE_OF_CONDUCT.md#code-of-conduct) to ensure a professional, respectful, and inclusive environment for all contributors.
By participating, you agree to abide by its terms.

## Prerequisites

The emnify Product Documentation website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
To run it locally, you'll need the following:

- [Node.js](https://nodejs.org/en/download/) ([version 18.0](https://docusaurus.io/docs/installation#requirements) or higher)
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

> [!NOTE]
> If you're an internal emnify contributor, please contact the docs team to ensure you have the appropriate rights.

## Local development

First, install the dependencies:

```shell
yarn install
```

Then, start a local developer server:

```shell
yarn start
```

> [!WARNING]
> You need to [set the environment variables](#set-the-environment-variables) or else this fails.

Running the preceding command opens up a browser window.
Most changes are reflected live without having to restart the server.

> [!NOTE]
> Runs on <http://localhost:3000> by default.

### Set the environment variables

First, create an `.env` file at the root of the project:

```shell
touch .env
```

Then, paste the following into your `.env` file:

```yml
ALGOLIA_APP_ID=<APP_ID>
ALGOLIA_SEARCH_API_KEY=<SEARCH_API_KEY>
```

This should be enough for you to [run a local server](#local-development).

> [!IMPORTANT]
> The actual values are necessary for working on the Algolia DocSearch implementation.
> If you're an emnify employee and need these keys, contact the docs team.
> Otherwise, please [open an issue](https://github.com/emnify/product-docs/issues/new/choose).

## Linting

### Code

All JavaScript, JSON, and JSX files are linted using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/docs/en/).
This is done automatically via a [pre-commit hook](./.husky/pre-commit), but you can also run the commands locally:

```shell
# Runs ESLint and Prettier without modifying
yarn lint

# Runs ESLint and Prettier and modifies code where possible
yarn lint:fix 
```

For troubleshooting purposes, you can run each linter individually.
These follow a similar protocol to the general `lint` command:

```shell
# ESLint
yarn eslint
yarn eslint:fix

# Prettier
yarn prettier
yarn prettier:fix
```

### Content

All Markdown and MDX files are linted using [Vale](https://vale.sh/) and [markdownlint](https://github.com/DavidAnson/markdownlint).
There's also an [EditorConfig](https://editorconfig.org/) file at the root of this repository to enforce consistent spacing and formatting.

markdownlint is run automatically via a [pre-commit hook](./.husky/pre-commit), but you can also run the commands locally:

```shell
# Runs markdownlint without modifying
yarn markdownlint

# Runs markdownlint and modifies content where possible
yarn markdownlint:fix 
```

Vale is run via a [CI pipeline](.github/workflows/content.yml) and [pre-commit hook](./.husky/pre-commit) that fail on errors.
See the [Vale README](.github/vale/README.md) for more information.

## Update design tokens

To pull the latest version of the [emnify design tokens](https://github.com/emnify/design-tokens) and import them into this repository, run:

```shell
yarn import-design-tokens
```

This upgrades the `eui-design-tokens` package and runs the [`importDesignTokens.js`](./config/importDesignTokens.js) script.
This script copies the prepared tokens for the emnify brand into the `src` directory and changes the CSS selectors to match the site structure (when applicable).

> [!NOTE]
> Not all token files are imported into the site CSS by default.
> Check [`custom.css`](./src/css/custom.css) to make sure the tokens you want to use are imported.

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

Where possible, prefix the branch name with the ID of the Zendesk ticket, Jira ticket, or GitHub issue and include a short description of the intended changes.

For example:

- `ZD-12345-SIM-deletion-for-resellers` for Zendesk ticket #12345
- `DOCS-300-create-contributing-guide` for Documentation Jira ticket #300 
- `GH-44-delete-endpoint-typo` for GitHub issue #44

## Pull requests

Opening a pull request is required for all proposed changes.
Every pull request must be reviewed and approved by at least one [code owner](./.github/CODEOWNERS).

> [!NOTE]
> Members of emnify's documentation team can bypass these restrictions.

Please follow the [pull request template](https://github.com/emnify/product-docs/blob/main/.github/PULL_REQUEST_TEMPLATE.md) and be as descriptive as possible.
All [CI pipelines](https://github.com/emnify/product-docs/blob/main/.github/workflows) must also pass before merging.

### Preview content

Any changes to files that affect the site trigger a [preview workflow](./.github/workflows/preview.yml).
When this workflow runs successfully, you'll see a comment on your pull request with a link to the deployed preview.
Previews are automatically removed when the pull request is closed.

## Deployment

### GitHub Pages

The emnify Documentation is hosted directly from this repository using [GitHub Pages](https://pages.github.com/).
Every push to the `main` branch automatically triggers a [GitHub Action](https://github.com/emnify/product-docs/blob/main/.github/workflows/deploy.yml) that deploys the website.

### Manually

Because the site uses GitHub Pages for hosting, the following commands are another way to build the website and push to the [`gh-pages` branch](https://github.com/emnify/product-docs/tree/gh-pages).

> [!WARNING]
> You need administrator rights to deploy the emnify Documentation manually.

Using SSH:

```shell
USE_SSH=true yarn deploy
```

Not using SSH:

```shell
GIT_USER=<Your GitHub username> yarn deploy
```
