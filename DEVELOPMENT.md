# Development guide for the emnify Product Documentation 

Your interest in contributing to the emnify Product Documentation is greatly appreciated, and hopefully, this development guide will help you get started 🚀

If you think something is missing, [open an issue](https://github.com/emnify/product-docs/issues/new/choose).

> **Note**
> This guide focuses on setting up a local development environment and code standards for this repository. 
> Refer to the [contributing guide](CONTRIBUTING.md) if you're looking for guidelines for contributing content.

Please note that this project is governed by [emnify's Code of Conduct](https://github.com/emnify/.github/blob/add-code-of-conduct/CODE_OF_CONDUCT.md#code-of-conduct) to ensure a professional, respectful, and inclusive environment for all contributors.
By participating, you agree to abide by its terms.

## Prerequisites

The emnify Product Documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 
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

Running the preceding command opens up a browser window. 
Most changes are reflected live without having to restart the server.

> **Note**
> Runs on http://localhost:3000 by default.

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

All Markdown and MDX files are linted using [Vale](.github/vale/README.md).
There's also an [EditorConfig](.editorconfig) file at the root of this repository to enforce consistent spacing and formatting.

## Display images

> **Note**
> For image guidelines, including file naming and formatting, refer to the [contributing guide](CONTRIBUTING.md#images).

With [Docusaurus](https://docusaurus.io/docs/markdown-features/assets#images), you can display images in three ways: [Markdown syntax](#markdown-syntax), [CommonJS require](#commonjs-require), or [ES import statement](#es-import-statement).
The following are suggestions of when to use each format.

### Markdown syntax

- Non-decorative images that require `alt` text
- No additional attributes are needed.

Example of how to display images using Markdown syntax:

```markdown
![Portal screenshot from the Integrations page. The featured integration reads, "Enable devices and send SMS via emnify from newly caught webhooks. emnify + Webhooks by Zapier". Next to the text, there's a "Use this Zap" button.](assets/portal-integrations-sms-webhooks-zapier.png)
```

### CommonJS require
- Additional attributes are needed (for example, custom width)
- Appears only once on a page
- Empty `alt` value for decorative images

Example of how to display images using inline CommonJS `require` in JSX image tag:

```jsx
<img
  src={require('./assets/graphiql-sidebar-show-documentation-explorer-button.png').default}
  alt=""
  style={{ width:350 }}
/>
```

### ES import statement
- Image is used multiple times on a page (for example, a checkmark icon used within a table column)

Example of how to display images using ES `import` syntax and [inline SVGs](https://docusaurus.io/docs/markdown-features/assets#inline-svgs):

```jsx
import Check from '../assets/check-simple.svg';

<Check alt="Yes" />
```

> **Note**
> Learn more about [assets in Docusaurus](https://docusaurus.io/docs/markdown-features/assets).

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

Where possible, prefix the branch name with the ID of the Zendesk ticket, Jira ticket, or GitHub issue and include a short description of the intended changes. 

For example:

- `ZD-12345-SIM-deletion-for-resellers` for Zendesk ticket #12345
- `DOCS-300-create-contributing-guide` for Documentation Jira ticket #300 
- `GH-44-delete-endpoint-typo` for GitHub issue #44

## Pull requests

Opening a pull request is required for all proposed changes.
Every pull request must be reviewed and approved by at least one [code owner](./.github/CODEOWNERS).

> **Note**
> Members of emnify's documentation team can bypass these restrictions.

Please follow the [pull request template](https://github.com/emnify/product-docs/blob/main/.github/PULL_REQUEST_TEMPLATE.md) and be as descriptive as possible.
All [CI pipelines](https://github.com/emnify/product-docs/blob/main/.github/workflows) must also pass before merging.

## Deployment

### GitHub Pages

The emnify Documentation is hosted directly from this repository using [GitHub Pages](https://pages.github.com/).
Every push to the `main` branch automatically triggers a [GitHub Action](https://github.com/emnify/product-docs/blob/main/.github/workflows/deploy.yml) that deploys the website.

### Manually

Because the site uses GitHub Pages for hosting, the following commands are another way to build the website and push to the [`gh-pages` branch](https://github.com/emnify/product-docs/tree/gh-pages).

> **Warning**
> You need administrator rights to deploy the emnify Documentation manually.

Using SSH:

```shell
USE_SSH=true yarn deploy
```

Not using SSH:

```shell
GIT_USER=<Your GitHub username> yarn deploy
```
