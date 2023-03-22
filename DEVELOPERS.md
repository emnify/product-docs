# emnify Documentation Development Guide

> **Note**
> This guide assumes you're already familiar with software development tools and the [GitHub workflow](https://docs.github.com/en/get-started/quickstart/github-flow).
> If this is new for you, please refer to our [contributing guide](./CONTRIBUTING.md).

Your interest in contributing to our documentation is greatly appreciated.
Please read our [Code of Conduct](https://github.com/emnify/.github/blob/add-code-of-conduct/CODE_OF_CONDUCT.md#code-of-conduct) in order to help us maintain a professional, respectful, and inclusive environment for all contributors.

## Prerequisites

The emnify Documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 
To run it locally, you'll need:

- [Node.js](https://nodejs.org/en/download/) ([version 16.14](https://docusaurus.io/docs/installation#requirements) or above)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) 

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

### Linting

<!-- TODO -->

### Adding images or screenshots

<!-- TODO -->

Change this Git configuration setting to avoid problems on macOS and Windows platforms:

```bash
git config core.ignoreCase false
```

## Building the documentation pages

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

To serve the built website locally, run:

```shell
yarn serve
```

## Pull requests

Opening a pull request is required for all proposed changes.
Every pull request needs one approval from at least one [code owner](CODEOWNERS)

> **Note**
> Members of emnify's documentation team can bypass these restrictions.

## Deployment

### GitHub Pages



### Manually

Because we're using GitHub pages for hosting, the following commands are a convenient way to build the website and push to the `gh-pages` branch.

> **Warning**
> You need admin rights to manually deploy the emnify Documentation.

Using SSH:

```shell
USE_SSH=true yarn deploy
```

Not using SSH:

```shell
GIT_USER=<Your GitHub username> yarn deploy
```

## Additional resources

For any GitHub or Git topics not covered here, please consult the GitHub Docs [Get started](https://docs.github.com/en/get-started) guide.
