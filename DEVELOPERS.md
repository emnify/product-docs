# Using developer tools for contributing to the emnify documentation

If you are already familiar with software development tools, we will take a look at what you need to do to set up your Docusaurus working environment.

Some of the advantages of using developer tools are:

- Offline functionality:  
With a local clone of the Git repository, you can use your IDE to develop any part of the existing documentation, create new content, preview the entire site in you browser, commit changes, rebase, merge, etc.
- An IDE enables you to more easily navigate through the folder structure.
- You can work on or view multiple files simultaneously.
- Resolving merge conflicts is easier in an IDE.

## Software requirements

- For working with GitHub and previewing your contributions
  - Git
  - Node.js
  - yarn
- Your favorite IDE  
If you don't have one yet, here are the top 3 [IDEs by market share](https://pypl.github.io/IDE.html):  
  1. [Visual Studio Code](https://code.visualstudio.com/) (commonly referred to as "VS Code")
  1. [Eclipse](https://www.eclipse.org/downloads/)
  1. [PyCharm](https://www.jetbrains.com/pycharm/)

## Setting up SSH

Using SSH for authenticating with remote repositories is the preferred method since it works with any Git service (GitHub, GitLab, Bitbucket, etc.) as well as any Git repository on a remote host where you have your SSH public key installed.
For a step-by-step guide, see GitHub's [About SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh) tutorial.

## Set up your working directory

Open a terminal window and navigate to your preferred folder for your local Git repositories.

The next step is to determine if you need to *clone* or *fork* the [emnify/product-docs](https://github.com/emnify/product-docs) repository.


### For internal emnify contributors

Please contact Squad Docs with your GitHub username or email address so that we can add you as a member with direct access.
Once you have been added as a direct contributor, use the SSH method to [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository).

### For external contributors

Follow the steps in the GitHub Docs [Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) article.

## GitHub flow

The process of creating a branch, making changes, pushing changes, creating a pull request (PR), etc., is the same for any GitHub repository, whether it is a code project or a documentation project.

If you are new to this process, please consult the [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) article in the **Quickstart** chapter of the GitHub Docs [Get started](https://docs.github.com/en/get-started) guide.

## Previewing your work

To create a local working copy of the emnify Documentation, follow the steps in the [Previewing the documentation site](CONTRIBUTING.md#previewing-the-documentation-site) section of the [Contributing](CONTRIBUTING.md) guide.

## Additional resources

For any GitHub or Git topics not covered here, please consult the GitHub Docs [Get started](https://docs.github.com/en/get-started) guide.