# emnify product documentation

Welcome to the emnify product documentation repository!
Here you will find the content source for generating the [emnify Documentation](https://emnify.github.io/product-docs/) site.
If you have any suggestions, questions, or feedback, don't hesitate to [contact our documentation team](mailto:docs@emnify.com).
For anything that might require an update or additional content, please [open a GitHub issue](https://github.com/emnify/product-docs/issues/new).


## How to contribute to the emnify Product Documentation

It is assumed that contributors, both internal and external, have some experience with [Git](https://git-scm.com/) and [Markdown](https://daringfireball.net/projects/markdown/).
If not, here are some resources to help you get started:

- **Git**
  - [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
  - [An Intro to Git and GitHub for Beginners](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
- **Markdown**
  - [Basic syntax](https://www.markdownguide.org/basic-syntax/)
  - [Extended syntax](https://www.markdownguide.org/extended-syntax/)

### Software requirements

Most of the software you will need to install is free and uses only nominal system resources.

#### Git

If you are using Git for the first time, you will probably need to install it unless your are using 
Linux.

##### Windows

Follow these [instructions](https://www.atlassian.com/git/tutorials/install-git#windows).

##### macOS

Open **App Store** from the Dock and search for **Xcode**.
This is an extensive package.
Before installing **Xcode**, plan for a required reboot and at least 30 minutes of downtime.

#### Node.js

The emnify Developer Documentation site uses [Docusaurus](https://docusaurus.io/showcase?tags=meta) for its layout, style, and navigation.
For building the docs with Docusaurus you will need [Node.js](https://nodejs.org/en/about/).

#### yarn

Follow yarn's [installation instructions](https://classic.yarnpkg.com/en/docs/install) for your platform.

#### An IDE

Although you could use a simple text editor like TextEdit or Windows Notepad, you will miss out on many features that an [Integrated Development Environment](https://www.codecademy.com/article/what-is-an-ide) (IDE) has to offer, e.g., [syntax highlighting](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide), Git integration, etc.
Most have a built-in previewer for Markdown that shows how the text will look (more or less) once it is rendered as a web page.
These are the top 3 [IDEs by market share](https://pypl.github.io/IDE.html):


1. [Visual Studio Code](https://code.visualstudio.com/) (commonly referred to as "VS Code")
1. [Eclipse](https://www.eclipse.org/downloads/)
1. [PyCharm](https://www.jetbrains.com/pycharm/)


### Set up your working directory

Technically, there are a couple of methods of contributing content, each with its pros and cons.
The first method may seem like the easiest.
However, there are many advantages to using the second method, namely the comfort of using an IDE, which enables you to easily navigate through the directory structure, work on or view multiple files simultaneously, edit content when offline, resolve merge conflicts, etc.

The most compelling reason for using developer tools is that you will be able to run [Docusaurus](https://docusaurus.io/) for viewing the site on your local workstation.
Having a preview of how your content will look when it is integrated into the documentation site prior to creating a [Pull Request](https://docs.github.com/en/pull-requests) (PR) is invaluable.
See [Previewing the documentation site](#previewing the-documentation-site) for how to install and run Docusaurus.

#### The workflow

1. Directly via this GitHub repository
    - [Browse to the folder](https://github.com/EMnify/product-docs/tree/main/docs) where you would like to upload a file containing your changes or new content.
    - Select **Upload Files** and browse to your file.
    - Create a [new branch](https://help.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work).
    - Submit the Pull Request (PR).  
1. Using developer tools, i.e., an IDE and either Git or [GitHub Desktop](https://help.github.com/en/desktop/getting-started-with-github-desktop)
    - [Fork](https://docs.github.com/github/getting-started-with-github/fork-a-repo) this repository (emnify squads can skip this step)
    - [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository.
    - Create your [new branch](https://help.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work).
    - Within your new branch, apply your changes or create your new content
    - [Commit](https://docs.github.com/en/pull-requests/committing-changes-to-your-project) your changes.
    - [Push](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-and-pushing-changes) your changes.
    - Create a PR and submit it for review.

### File requirements

In order to maintain consistency within the project, please follow these guidelines for all files.

- **UTF-8** encoding
- **Lines** must be terminated with [UNIX newline](https://en.wikipedia.org/wiki/Newline#Representation) (`\n`) characters, *not* Windows CRLF (`\r\n`)
- **Filenames** should *not* contain uppercase letters, spaces, or special characters.  
They should be lowercase alphanumeric with words separated by a single hyphen (`-`). For example: `3-methods-for-sending-data.png`

### Previewing the documentation site

Since the documentation site is built using [Docusaurus](https://docusaurus.io/showcase?tags=meta), we need to install it from a location within your cloned repository:

```
yarn add docusaurus
```

To preview the site run the following:

```
yarn start
```