# How to contribute to the emnify Product Documentation

It is assumed that contributors, both internal and external, have some experience with [Git](https://git-scm.com/) and [Markdown](https://daringfireball.net/projects/markdown/).
If not, here are some resources to help you get started:

- **Git**
  - [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
  - [An Intro to Git and GitHub for Beginners](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
- **Markdown**
  - [Basic syntax](https://www.markdownguide.org/basic-syntax/)
  - [Extended syntax](https://www.markdownguide.org/extended-syntax/)

## Software requirements

Most of the software you will need to install is free and uses only nominal system resources.

### Git

If you are using Git for the first time, you will probably need to install it unless your are using 
Linux.

#### Windows

If your platform is Windows, follow these [instructions](https://www.atlassian.com/git/tutorials/install-git#windows).

#### macOS

Open **App Store** from the Dock and search for **Xcode**.
This is an extensive package.
Before installing **Xcode**, plan for a required reboot and at least 30 minutes of downtime.

### Node.js

The emnify Developer Documentation site uses [Docusaurus](https://docusaurus.io/showcase?tags=meta) for its layout, style, and navigation.
For building the docs with Docusaurus you will need [Node.js](https://nodejs.org/en/about/).

The [Node.js installer](https://nodejs.org/en/download/) includes [npm](https://docs.npmjs.com/about-npm) as the default package manager for installing and managing Node.js packages.

#### Install Docusaurus using npm

```
npm init docusaurus
```
#### Install Docusaurus using yarn

```
yarn create docusaurus
```

#### Create an initial Docusaurus project

```
cd product-docs # Your Git repository's path
npx create-docusaurus@latest
```


### An IDE

Although you can use simple text editor like TextEdit or Windows Notepad, you will miss out on many features that an IDE (Integrated Development Environment) has to offer, e.g., [syntax highlighting](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide) and a built-in previewer that shows how your Markdown will look after it is rendered as HTML.
Some popular IDEs are:

- [Aptana](http://www.aptana.com/)
- [Eclipse](https://www.eclipse.org/downloads/)
- [Sublime Text](https://www.sublimetext.com/blog/articles/sublime-text-4)
- [Visual Studio](https://visualstudio.microsoft.com/) (recommended)

## Contributing

### Fork the 

### Create a topical branch

### Create a pull request

### Content requirements

### File requirements
- **UTF-8** encoding
- **Lines** must be terminated with [UNIX newline](https://en.wikipedia.org/wiki/Newline#Representation) (`\n`) characters, *not* Windows CRLF (`\r\n`)
- **Filenames** should *not* contain uppercase letters, spaces, or special characters.  
They should be lowercase alphanumeric with words separated by a single hyphen (`-`). For example: `3-methods-for-sending-data.png`

### Markdown best practices

- [One sentence per line](https://asciidoctor.org/docs/asciidoc-recommended-practices/#one-sentence-per-line) has many benefits.  
Unless you are have empty lines between sentences, they will all flow together into a single paragraph after the Markdown is rendered to HTML.
- **Indent** using spaces, not tabs.  
Two spaces is enough for creating a nested bulleted list beneath an element of the parent bulleted list.
- **_One_ empty line** is enough.  
  - There should never be a reason for creating a group of 2 or more empty lines.  
  - A single empty line before and after each section heading is highly recommended.
- For extended Markdown syntax, e.g., [tables](https://www.markdownguide.org/extended-syntax/#tables), consult the [MarkdownGuide.org Extended syntax](https://www.markdownguide.org/extended-syntax/) reference.
