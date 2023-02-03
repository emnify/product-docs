# Using developer tools for contributing to the emnify documentation

If you are already familiar with software development tools, we will take a look at what you need to do to set up your Docusaurus working environment.

Some of the advantages of using developer tools are:

- Offline functionality:  
With a local clone of the Git repository, you can use your IDE to develop any part of the existing documentation, create new content, preview the entire site in you browser, commit changes, rebase, merge, etc.
- An IDE enables you to more easily navigate through the folder structure.
- You can work on or view multiple files simultaneously.
- Resolving merge conflicts is easier in an IDE.

## Software requirements

- See the Docusaurus [installation instructions](CONTRIBUTING.md#installation) for:
  - Git
  - Node.js
  - yarn
- Your favorite IDE  
If you don't have one yet, here are the top 3 [IDEs by market share](https://pypl.github.io/IDE.html):  
  1. [Visual Studio Code](https://code.visualstudio.com/) (commonly referred to as "VS Code")
  1. [Eclipse](https://www.eclipse.org/downloads/)
  1. [PyCharm](https://www.jetbrains.com/pycharm/)

## Set up your working directory

**If you are an internal emnify contributor, see our [notice for internal contributors](CONTRIBUTING.md#notice-for-internal-contributors) before continuing with this guide.**

If you don't already have a GitHub account, you will need to [sign up](https://github.com/signup) for one.

You can either install [GitHub CLI](https://cli.github.com/) for working with your Git repository, or use the generic SSH key method that works with all of the leading Git-based source-code-hosting facilities (forges), i.e., GitHub, GitLab, Bitbucket, etc.
In this guide we will use SSH.

### Add your SSH public key to your GitHub account.

Make sure you have an SSH public key available under [GitHub SSH keys](https://github.com/settings/keys).
If not, follow GitHub's [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?tool=webui&platform=windows) guide.

---

### For internal emnify team members


Clone this repository:

```
git clone git@github.com:EMnify/product-docs.git
```

---

### For external contributors

1. After logging in with your GitHub credentials, [Fork](https://docs.github.com/github/getting-started-with-github/fork-a-repo) this repository.
1. Clone your forked repository from GitHub to you local workstation by replacing `yourGitHubUsername` in the following command and running it:

```
git clone git@github.com:yourGitHubUsername/product-docs.git
```

---


## Workflow

### Editing/creating content

1. Use your IDE to edit/create content, then save your work.
1. Preview your work

```
yarn start
```

### Tracking changes in Git

1. Create a branch (using Jira for internal contributors) 

```
git commit -am "Enter your Git commit title/description here"
git push origin
```

### Creating a PR

### Review

## Best practices

In order to maintain consistency within the project, please follow these guidelines for all files.

- **UTF-8** encoding
- **Lines** must be terminated with [UNIX newline](https://en.wikipedia.org/wiki/Newline#Representation) (`\n`) characters, *not* Windows CRLF (`\r\n`)
- **Filenames** should *not* contain uppercase letters, spaces, or special characters.  
They should be lowercase alphanumeric with words separated by a single hyphen (`-`). For example: `3-methods-for-sending-data.png`
