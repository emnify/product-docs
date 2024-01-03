# Contribute content to the emnify Product Documentation

Your interest in contributing to the emnify Product Documentation is greatly appreciated.
By helping maintain and grow our documentation, your efforts won't only benefit your organization but the greater emnify community as well 💖

> [!NOTE]
> This page includes guidelines for contributing content.
> Refer to the [development guide](DEVELOPMENT.md) for setting up a local environment.

Please note that this project is governed by [emnify's Code of Conduct](https://github.com/emnify/.github/blob/add-code-of-conduct/CODE_OF_CONDUCT.md#code-of-conduct) to ensure a professional, respectful, and inclusive environment for all contributors.
By participating, you agree to abide by its terms.

## Style guide

All technical documentation at emnify follows the [Google developer documentation style guide](https://developers.google.com/style).
When in doubt, refer to this style guide as a resource.

> [!IMPORTANT]
> This repository uses [Vale](.github/vale/README.md) to lint and enforce this style guide.

## File structure

- Names should be written in [kebab case](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/#kebab-case) format with all lowercase characters.
- Use the `.mdx` extension whenever you use JSX or other MDX features (for example, `import` or `export`) inside a Markdown file.

> ![IMPORTANT]
> According to [Docusaurus](https://docusaurus.io/blog/preparing-your-site-for-docusaurus-v3), future versions will parse `.md` files as standard [CommonMark](https://commonmark.org/), which doesn't support these features.

## Admonitions

Admonitions (often called alerts) are an extension of the Markdown syntax used to emphasize critical information.
There are five types, each with a distinct purpose.

Inspired by [GitHub alerts](https://github.com/orgs/community/discussions/16925), here's how emnify uses each admonition type:

- **Note**: Highlights information that users should take into account, even when skimming.
- **Tip**: Optional information to help a user be more successful.
- **Info**: Crucial information necessary for users to succeed.
- **Caution**: Critical content demanding immediate user attention due to potential risks.
- **Danger**: Negative potential consequences of an action.

> ![TIP]
> See [Admonitions in the Docusaurus documentation](https://docusaurus.io/docs/markdown-features/admonitions) for more information about formatting and syntax.

## Images

Each category within the [`docs` directory](./docs/) has an `assets` directory containing all the infographics, screenshots, or other images used on those pages.

### File management tips

- Images shouldn’t be larger than 100 KB.
- Filenames should be written in [kebab case](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/#kebab-case) format with all lowercase characters.
  - Infographics should begin with `infographic-`
  - Screenshots should describe the part of the system represented from least to most specific (for example, a screenshot of the Data Streams section of the Integrations page in the emnify Portal should be named `portal-integrations-data-streams`)

### Annotate screenshots

Use a square or rectangle to indicate a specific area of interest within a screenshot.
For consistency, follow these guidelines:

- **Color**: 
  - Design token: `--eui-sys-support-primary-information` 
  - Current hex value: `#4377cd`
- **Corners**: Sharp, not rounded (`border-radius: 0;`)
- **Line thickness**: Roughly `8px`

![Example screenshot showing one row from the Connected Devices table in the emnify Portal. The "Details" button is outlined in a thick, sharp, information blue colored rectangle.](https://github.com/emnify/product-docs/assets/26869552/acc6cec1-9639-4345-a934-41f55e8d75a2)
