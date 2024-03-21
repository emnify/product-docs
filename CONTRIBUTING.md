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

## Components

### Admonitions

Admonitions (often called alerts) are an extension of the Markdown syntax used to emphasize critical information.
There are five types, each with a distinct purpose.

Inspired by [GitHub alerts](https://github.com/orgs/community/discussions/16925), here's how emnify uses each admonition type:

- **Note**: Highlights information that users should take into account, even when skimming.
- **Tip**: Optional information to help a user be more successful.
- **Info**: Crucial information necessary for users to succeed.
- **Warning**: Critical content demanding immediate user attention due to potential risks.
- **Danger**: Negative potential consequences of an action.

> ![TIP]
> See [Admonitions in the Docusaurus documentation](https://docusaurus.io/docs/markdown-features/admonitions) for more information about formatting and syntax.

### Code blocks

The `react-prism-render` library is used for code block syntax highlighting.
From v2.0+, [less languages are included by default](https://github.com/FormidableLabs/prism-react-renderer/blob/prism-react-renderer%402.1.0/packages/generate-prism-languages/index.ts#L9).
If the language you need isn't listed, check the [Docusaurus configuration](https://github.com/emnify/product-docs/blob/main/docusaurus.config.js#L171) and add it if necessary.

### Partials

When pages contain repetitive content, you can extract the content into a "partial" and import it into other documents.

Each category with the [`docs` directory](./docs/) that uses partials has a `partials` directory containing the source files.
These files must use the `_` filename prefix (for example, `_config-instructions.mdx`) to bypass page creation and linting.
The imported component name should end with `Partial` (for example, `ConfigInstructionsPartial`).

> [!TIP]
> Learn more about [partials in Docusaurus](https://docusaurus.io/docs/markdown-features/react#importing-markdown).

## Assets

Each category within the [`docs` directory](./docs/) has a co-located `assets` directory containing all the images and icons used on those pages.

> [!TIP]
> Learn more about [assets in Docusaurus](https://docusaurus.io/docs/markdown-features/assets).

### Images

Images are screenshots, infographics, and other diagrams shown in the main documentation content.
[Icons](#icons) have a separate workflow.

To display images in the emnify documentation, use the custom [`Image`](./src/components/Image.jsx).

> [!IMPORTANT]
> The `srcPath` value should use the [inline CommonJS `require`](https://docusaurus.io/docs/markdown-features/assets#images) (unless the image source is an external URL).

```jsx
<Image
  srcPath={require('./path/to/name-of-image.png').default}
  alt="Optional descriptive alt text for the image. Defaults to an empty attribute."
  modifiers="img--some-mod img--another-mod"
/>
```

#### SVGs

To apply the [docusaurus-plugin-image-zoom](https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom) feature to an SVG file, you need to add `!!url-loader!` at the beginning of the asset path—otherwise, the [webpack `svg-loader` kicks in](https://github.com/facebook/docusaurus/issues/8398#issuecomment-1331694452).

```jsx
<Image
  srcPath={require('!!url-loader!./assets/graphiql-logo.svg').default}
  alt="GraphiQL"
/>
```

### Icons

In most cases, use an [ES import statement](https://docusaurus.io/docs/markdown-features/assets#images) to display icons in the emnify Documentation.

> [!IMPORTANT]
> Because of the [markdownlint configuration](./.markdownlint.jsonc), any import statements must be _after_ the top-level header.

Example of how to display images using ES `import` syntax and [inline SVGs](https://docusaurus.io/docs/markdown-features/assets#inline-svgs):

```jsx
import Check from '../assets/check.svg';

<Check alt="Yes" />
```

### File management tips

- Images shouldn’t be larger than 100 KB.
- Filenames should be written in [kebab case](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/#kebab-case) format with all lowercase characters.
  - Infographics should begin with `infographic-`
  - Screenshots should describe the part of the system represented from least to most specific (for example, a screenshot of the Data Streams section of the Integrations page in the emnify Portal should be named `portal-integrations-data-streams`)

Depending on your operating system, you may run into an issue where your Git configuration doesn't catch subtle filename changes, resulting in a failing build.
To avoid this problem, update this setting:

```shell
git config core.ignoreCase false
```

### Annotate screenshots

Use a square or rectangle to indicate a specific area of interest within a screenshot.
For consistency, follow these guidelines:

- **Color**: 
  - Design token: `--eui-sys-support-primary-information` 
  - Current hex value: `#4377cd`
- **Corners**: Sharp, not rounded (`border-radius: 0;`)
- **Line thickness**: Roughly `8px`

![Example screenshot showing one row from the Connected Devices table in the emnify Portal. The "Details" button is outlined in a thick, sharp, information blue colored rectangle.](https://github.com/emnify/product-docs/assets/26869552/acc6cec1-9639-4345-a934-41f55e8d75a2)

## Validate MDX files

Docusaurus provides a [docusaurus-mdx-checker](https://github.com/slorber/docusaurus-mdx-checker) CLI to help spot problematic content that'll result in compilation errors.
To see what files fail to compile under MDX v3, run:

```bash
npx docusaurus-mdx-checker
```
