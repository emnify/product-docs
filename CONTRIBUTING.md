# Welcome to the emnify documentation contributing guide

Your interest in contributing to the emnify product documentation is greatly appreciated.
By helping maintain and grow our documentation, your efforts will not only benefit your organization but the greater emnify community as well.

Please read our [Code of Conduct](https://github.com/EMnify/.github/blob/add-code-of-conduct/CODE_OF_CONDUCT.md#code-of-conduct) in order to help us maintain a professional, respectful, and inclusive environment for all contributors.

## Table of contents

- [The basics](#the-basics)
- [Updating the documentation](#updating-the-documentation)
  - [Navigate to the file you wish to edit](#navigate-to-the-file-you-wish-to-edit)
  - [GitHub will fork the repository for you](#github-will-fork-the-repository-for-you)
  - [Editing the page](#editing-the-page)
  - [Propose changes](#propose-changes)
  - [Comparing changes](#comparing-changes)
  - [Open a pull request](#open-a-pull-request)
  - [Pull request page](#pull-request-page)
- [Creating new content](#creating-new-content)
  - [Navigate to the containing directory](#navigate-to-the-containing-directory)
  - [Name your file](#name-your-file)
  - [Propose new file](#propose-new-file)
- [Previewing the documentation site](#previewing-the-documentation-site)
  - [Git](git)
  - [Clone the repository](#clone-the-repository)
  - [Node.js](#nodejs)
  - [yarn](#yarn)
  - [Preview the site](#preview-the-site)
---

## The basics

[GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) provides the essentials for collaborating on projects hosted in GitHub.

If you haven't worked with [Markdown](https://daringfireball.net/projects/markdown/) before, here are some resources to help you get started:

- [Basic syntax](https://www.markdownguide.org/basic-syntax/)
- [Extended syntax](https://www.markdownguide.org/extended-syntax/)
- [Markup reference for GitHub Docs](https://github.com/github/docs/blob/main/contributing/content-markup-reference.md) used in GitHub documents and comments
- [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features) used in creating content for the emnify Documentation site

## Updating the documentation

If you don't already have a GitHub account, you will need to [sign up](https://github.com/signup) for one.
Once you have a GitHub account and have logged in, you will be able to contribute.

### Navigate to the file you wish to edit

Starting from the emnify Documentation [document root](https://github.com/EMnify/product-docs/tree/main/docs) directory, find the file you wish to edit.

![github-select-edit](https://user-images.githubusercontent.com/49970529/215493212-f4694f5a-7d7f-4d65-a77d-761225d9a3e4.png)

### GitHub will fork the repository for you

If you haven't already forked the [emnify/product-docs](https://github.com/EMnify/product-docs) repository, GitHub will do it for you as soon as you select the edit icon.

![github-fork-created](https://user-images.githubusercontent.com/49970529/215493193-6e805d85-e647-41d4-8867-91032bc45a9b.png)

Viewing your forked repository isn't necessary at this point in the process, but if you are curious, you can confirm that you now have a forked **product-docs** repository:

![github-your-repos](https://user-images.githubusercontent.com/49970529/215493214-1c265b19-8f99-404c-a472-740e50df3799.png)

![github-forked-repo](https://user-images.githubusercontent.com/49970529/215493196-f9a9945d-c51f-433a-ab89-b6bd24536616.png)

### Editing the page

Immediately after GitHub [forks the repository](#github-will-fork-the-repository-for-you), you are able to edit the file.
Now you can scroll down to find the text you wish to edit.

In this example below, we have edited the Glossary entry for _Dynamic IP_ to have more detail and to include a reference to the Glossary entry for _Static IP_.

![github-edit-file](https://user-images.githubusercontent.com/49970529/215493191-bad58e16-b8e7-415e-9821-64f2cd414043.png)

### Propose changes

Once you are satisfied with the changes you have made, scroll to the bottom of the file.
There you will find an input field where you can provide a description or summary of your changes.
Then you can select **Propose changes** if you would like submit your changes.

![github-scroll-to-propose-changes](https://user-images.githubusercontent.com/123376330/215520270-954324f8-5445-4669-99bc-8bd59a785c6f.png)

### Comparing changes

After proposing your changes, the next step is to formally create a pull request (PR).
First, you will be presented a **Comparing changes** page that shows you the file(s) you have changed, your forked repository, and the name of your branch containing the changes.
In this example, GitHub automatically created the branch name **patch-1** for us.
Select **Create pull request** to continue.

![github-comparing-changes](https://user-images.githubusercontent.com/123376330/215520267-02cb74ab-0877-4ba0-98a1-3411728bb5e5.png)
### Open a pull request

Once you select **Create pull request**, you will be presented with the **Open a pull request** page.
Here you will have the opportunity to edit the name of the PR to something more descriptive.
In this example, we see it defaulted to the name of the file that was changed.

The input field below enables you to update the summary/description you previously provided.

Normally we will not edit your changes during our review.
However, you can enforce this by unchecking the **Allow edits by maintainers**.
If you want us to edit your changes as needed during our review, then please state this explicitly in the PR description and leave this option checked.

Once you select **Create pull request**, we will see your PR in our queue of [open PRs](https://github.com/EMnify/product-docs/pulls). 

We recommend that you remove the commented lines between `<!--` and `-->` and make use of the template below them, especially the **Description** heading.
There is an **Additional Context** heading you can use as well.
Feel free to add any other headings, screenshots, images, diagrams, etc., that may help in explaining your contribution.

![github-open-a-pull-request](https://user-images.githubusercontent.com/123376330/215520265-e462ab79-47c8-465b-bc30-16f4c6950038.png)


### Pull request page

Immediately after creating the PR, GitHub takes you to the pull request details page.
You may want to bookmark this page since it is where you can read comments from reviewers and provide any additional information we might request.

Please note the tabs on this page:

- **Conversation**: Where all feedback, review comments, and general communication takes place
- **Commits**: Each time you update your changes, they can be viewed here.
- **Checks**: If there are any syntax errors that would break the documentation build, they can be see here.
- **Files changed**: Very useful for PRs that involve changes needed in multiple files

![github-opened-pull-request](https://user-images.githubusercontent.com/123376330/215520259-9f02110b-579c-4353-a9cb-6a54e7d22232.png)
## Creating new content

The process for creating new content is almost the same as [updating the documentation](#updating-the-documentation).

For adding a new page to the documentation, find the appropriate containing directory and choose **Add file**.
In the following example, we want to add a new device to the Quickstart guide.

### Navigate to the containing directory

From the [document root](https://github.com/EMnify/product-docs/tree/main/docs), search for a directory that matches the category of the content you wish to create.

Once you have found the best fit, navigate to that directory and select **Add file**.
In this example, we want to add a new device under `quickstart/devices/`.

If you expand the list of options for the **Add file** button, you can see that it is also possible to upload multiple files.

![github-add-file](https://user-images.githubusercontent.com/49970529/215493168-91fc2b2c-6939-43a0-a3de-a6eae6487a5a.png)

### Name your file

If you did not choose the **Upload files** option, you will be prompted to provide a name for your new file.

![github-create-file](https://user-images.githubusercontent.com/49970529/215493184-00ff9bdc-2783-4b7d-9fcb-d7d2b9b7179c.png)

In this example, we supplied `device-x.md` for the name of the new file and created some content using the **Edit new file** interface.

### Propose new file

When your new contribution is ready, scroll to the bottom to provide a description and select **Propose new file**.

![github-propose-new-file](https://user-images.githubusercontent.com/49970529/215493209-a8800b84-39df-474e-96df-c1fc230a1cf8.png)

From the **Comparing changes** page, you will select **Create pull request** and follow the same steps in the "Updating the documentation" section starting with [Open a pull request](#open-a-pull-request).

![github-comparing-changes-new](https://user-images.githubusercontent.com/49970529/215493175-d5c10247-7be1-4ecb-9173-773f3c06f1fa.png)

## Previewing the documentation site

For larger contributions, especially when adding new pages, it becomes necessary to preview how the new content will look when rendered as HTML, and how it will fit it in with the existing documentation.

Since the documentation site is built using [Docusaurus](https://docusaurus.io/) which requires Node.js as well as a clone of this repository, there are a few steps needed to set up your environment.

**Although the following steps may seem overwhelming at first, they only need to be performed once!**

### Git

If you do not already have Git installed, please follow the installation steps specific to your platform.

- **Windows**: Follow these [instructions](https://www.atlassian.com/git/tutorials/install-git#windows).
- **macOS**:
    - Via [homebrew](https://brew.sh/index) if you already have it installed, or
    - Via [Xcode](https://apps.apple.com/de/app/xcode/) from the App Store.
- **Linux**: Preinstalled

### Clone the repository

Clone your forked `product-docs` repository

- Open your terminal (or PowerShell).
- Navigate to the location where you want the repository to reside.
- Issue the following command after you have replaced `yourUsername` with your actual GitHub username:

```
git clone https://github.com/yourUsername/product-docs.git
```
Then navigate to the repository using

```
cd product-docs
```

Change this Git configuration setting to avoid problems on macOS and Windows platforms:

```
git config core.ignorecase false
```

### Node.js

Install [Node.js](https://nodejs.org/en/about/).

### yarn

Follow yarn's [installation instructions](https://classic.yarnpkg.com/en/docs/install) for your platform.

After yarn is installed, you can install Docusaurus by navigating to your cloned repository in your terminal window (or PowerShell) and running yarn:

```
yarn
```

### Preview the site

It is important that you have the desired branch checked out when you want to preview your work.
The default branch `main` is the public-facing version and doesn't contain your changes (yet)! 
You will mainly be interested in previewing your work from your PR branches.
These need to be explicitly checked out using Git.

You will need to use your terminal (or PowerShell), for starting your local Docusaurus server for previewing.
You can issue the necessary Git commands using the command line.

**Get recently created branches**

```
git fetch origin
```
 
 **Checkout my PR branch `patch-2`**

 ```
 git checkout patch-2
 ```

 **Get the most recent changes to my current branch**

```
git pull
```

**Start previewing**

Run the following and follow the instructions for opening the site in your web browser.

```
yarn start
```