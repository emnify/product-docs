# Contributing to the emnify Documentation

Your interest in contributing to the emnify product documentation is greatly appreciated.
By helping maintain and grow our documentation, your efforts will not only benefit your organization but the greater emnify community as well.

Please read our [Code of Conduct](https://github.com/emnify/.github/blob/add-code-of-conduct/CODE_OF_CONDUCT.md#code-of-conduct) in order to help us maintain a professional, respectful, and inclusive environment for all contributors.

## The basics

[GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) provides the essentials for collaborating on projects hosted in GitHub.

Our documentation is written in Markdown.
[Docusaurus](https://docusaurus.io/) renders the Markdown to HTML as well as providing a theme and navigational components.
If you haven't worked with [Markdown](https://daringfireball.net/projects/markdown/) before, here are some resources to help you get started:

- [Basic syntax](https://www.markdownguide.org/basic-syntax/)
- [Extended syntax](https://www.markdownguide.org/extended-syntax/)
- [Markup reference for GitHub Docs](https://github.com/github/docs/blob/main/contributing/content-markup-reference.md) used in GitHub documents and comments
- [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features) used in creating content for the emnify Documentation site

## Notice for internal emnify contributors

Please contact Squad Docs with your GitHub username or email so that we can give you direct access to the repository.
Then, you can work directly with the repository without any need to fork it.

## Updating the documentation

After logging in to your GitHub account, you can start contributing.

### Navigate to the file you wish to edit

Starting from the emnify Documentation [document root](https://github.com/emnify/product-docs/tree/main/docs) folder, find the file you wish to edit.

### GitHub will fork the repository for you

If you haven't already [forked](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) the [emnify/product-docs](https://github.com/emnify/product-docs) repository, GitHub will do it for you as soon as you select the edit icon.

![](https://user-images.githubusercontent.com/49970529/225024094-3405c758-844f-4069-9dff-e7b0d64f67b5.png)

![](https://user-images.githubusercontent.com/49970529/225024903-67b819d6-42db-4e5f-b116-e5693fbe6ddd.png)

### Editing the page

Immediately after GitHub [forks the repository](#github-will-fork-the-repository-for-you), you are able to edit the file.
Now you can scroll down to find the text you wish to edit.

### Propose changes

In this example below, we have edited the Glossary entry for _Dynamic IP_ to have more detail and to include a reference to the Glossary entry for _Static IP_.

Once you are satisfied with the changes you have made, scroll to the bottom of the file.
There you will find an input field where you can provide a description or summary of your changes.
Then you can select **Propose changes** if you would like submit your changes.

![](https://user-images.githubusercontent.com/49970529/225023731-7ffbb999-a7d3-4f37-8cea-5d78b64ce78f.png)

### Comparing changes

After proposing your changes, the next step is to formally create a pull request (PR).
First, you will be presented a **Comparing changes** page that shows you the file(s) you have changed, your forked repository, and the name of your branch containing the changes.
In this example, GitHub automatically created the branch name **patch-1** for us.
Select **Create pull request** to continue.

![](https://user-images.githubusercontent.com/49970529/225023442-e277dd1e-94f8-4dcc-929b-01c728a5632b.png)

### Open a pull request

Once you select **Create pull request**, you will be presented with the **Open a pull request** page.
Here you will have the opportunity to edit the name of the PR to something more descriptive.

![](https://user-images.githubusercontent.com/49970529/225023289-cb453221-a972-4ccc-a7d8-b4b9982c6a94.png)

The input field below enables you to update the summary/description you previously provided.

Normally we will not edit your changes during our review.
However, you can enforce this by unchecking the **Allow edits by maintainers**.
If you want us to edit your changes as needed during our review, then please state this explicitly in the PR description and leave this option checked.

Once you select **Create pull request**, we will see your PR in our queue of [open PRs](https://github.com/emnify/product-docs/pulls). 

We recommend make use of the template that includes the **Description** heading and an **Additional Context** heading if needed.

![](https://user-images.githubusercontent.com/49970529/225023081-7709305f-93ee-41f6-89f7-c4881358eac8.png)

`<!--` and `-->` serve as block comment tags, hiding any text between them. 
Feel free to add any other headings, screenshots, images, diagrams, etc., that may help in explaining your contribution.

Select the **Preview** tab to see how it will appear after it is created.

![](https://user-images.githubusercontent.com/49970529/225022693-2c984066-30db-4f85-bbef-fe74a5e4ff0a.png)
### Pull request page

Immediately after creating the PR, GitHub takes you to its details page.
This is where you will receive feedback from reviewers and find status updates.

Please note the 4 tabs on this page:

![](https://user-images.githubusercontent.com/49970529/225022525-9f494255-915a-4c43-b073-8303032007f4.png)

#### Conversation

- PR description
- Activity log, including each new commit
- Communication, i.e., conversations between the reviewer(s) and the PR assignee(s)

![](https://user-images.githubusercontent.com/49970529/225022154-c23a30ec-a5d4-46c4-be0d-0495a314521a.png)

#### Commits

This tab provides an uncluttered view of commits ordered from oldest to newest with all other information filtered out.
Commit details are collapsed by default.

![](https://user-images.githubusercontent.com/49970529/225019240-e1311168-e77f-4c59-a226-70b44d4baf51.png)

#### Checks
The [Test deployment](https://github.com/emnify/product-docs/actions/workflows/test-deploy.yml) GitHub action is triggered when your changes are pushed.
If there are any syntax errors that would break the documentation build, you will find details about what went wrong by following the most recent link associated with your PR's name in the [workflow runs](https://github.com/emnify/product-docs/actions/workflows/test-deploy.yml) table. 

#### Files changed

This is very useful for PRs that involve changes needed in multiple files.

![](https://user-images.githubusercontent.com/49970529/225032027-4884ae23-ea83-4099-a751-0af5a5b8263c.png)

## Creating new content

The process for creating new content is almost the same as [updating the documentation](#updating-the-documentation).

For adding a new page to the documentation, find the appropriate containing folder and choose **Add file**.
In the following example, we want to add a new device to the Quickstart guide.

### Navigate to the containing folder

From the [document root](https://github.com/emnify/product-docs/tree/main/docs), search for a folder that matches the category of the content you wish to create.

Once you have found the best fit, navigate to that folder and select **Add file**.
In this example, we want to add a new device under `quickstart/devices/`.

If you expand the list of options for the **Add file** button, you can see that it is also possible to upload multiple files.

![](https://user-images.githubusercontent.com/49970529/225018839-b295ff65-214e-49c9-bca3-c4fce721fd0f.png)
### Name your file

If you did not choose the **Upload files** option, you will be prompted to provide a name for your new file.

**Note**: Please use [kebab case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case) when naming your files.

![](https://user-images.githubusercontent.com/49970529/225018533-2a3e8cfb-bf9b-4e73-b7ce-9b7b854d7e91.png)

In this example, we supplied `device-x.md` for the name of the new file and created some content using the **Edit new file** interface.

### Propose new file

When your new contribution is ready, scroll to the bottom to provide a description and select **Propose new file**.

![](https://user-images.githubusercontent.com/49970529/225033500-9eaa2d4f-2414-4785-a767-64495f33a929.png)

From the **Comparing changes** page, you will select **Create pull request** and follow the same steps in the "Updating the documentation" section starting with [Open a pull request](#open-a-pull-request).

![](https://user-images.githubusercontent.com/49970529/225033773-1ad921f0-825d-4c8f-98ab-2cad57f9e05b.png)

### Update the site navigation

Adding a new page to the documentation will require you to update [`sidebars.js`](https://github.com/emnify/product-docs/blob/main/sidebars.js) so that visitors will be able to navigate to it.
If the existing `sidebars.js` configuration doesn't provide enough information on how to add your new content to the navigation, see the Docusaurus [Sidebar items](https://docusaurus.io/docs/sidebar/items) documentation.

## The review process

After you have created your PR, the workflow is driven by cycles of content updates and reviews.

### Reviewers

Although we monitor the queue of PRs regularly, you can also [request a review of your PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) if your PR is ready and it seems to have not been noticed.

![](https://user-images.githubusercontent.com/49970529/225034684-3ac3532b-af09-406f-8daa-c31988705817.png)

### Submitting additional changes

If you are working from a forked repository on an existing PR branch, navigate to *your* GitHub repository and find the branch assigned to your PR.
In the previous examples, the branch is **patch-1**.
However, **main** is the default branch, so we need to navigate to our branches and select **patch-1**:

![](https://user-images.githubusercontent.com/49970529/225035936-33523feb-9b73-4a76-938f-306a9416abfe.png)

Selecting the **Yours** view of branches is recommended:

![](https://user-images.githubusercontent.com/49970529/225036466-94a8231c-520f-48a7-8bd0-6055a201cbc8.png)

Navigate to your file and select **Edit**:

![](https://user-images.githubusercontent.com/49970529/225037205-4cd6ab9b-6619-4abd-b2af-005bf947ee4f.png)


Apply your changes, then scroll to the bottom of the GitHub page to add the commit title and details.
When finished, choose **Commit changes**.

![](https://user-images.githubusercontent.com/49970529/225038499-77befd87-cbdb-481b-9db3-29bda0618584.png)

### Resolving open conversations

The reviewer may ask you to make additional changes before we can merge your PR.
If the reviewer supplied suggestions that can be applied, you can choose **Apply suggestion** directly through the UI.
This will automatically commit the change and [resolve](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#resolving-conversations) the conversation.
If there are several suggestions, they can be [batched](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request#applying-suggested-changes) and applied all at once.

If the reviewer has requested changes in the form of a comment, you will need to follow the instructions supplied when applying the changes.
See [Submitting additional changes](#submitting-additional-changes) above for how to add changes to the current PR branch.

**It is important that you [resolve](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#resolving-conversations) all open conversations before requesting another review.**

**Note**: If you are not sure what needs to be done to resolve the matter described in a conversation or you need our assistance with any aspect of the PR, please reply in the conversation and let us know how we can help.

In the following example, the reviewer opened a comment on line 65 of the text.
You should always assume the last line shown in the right column of line numbers is the line of interest when changes are requested, unless the comment states something to the contrary. 

![](https://user-images.githubusercontent.com/49970529/225039003-ec4195a5-7c8d-43d1-be06-fdd7a3fa5536.png)

## Previewing the documentation site

You can preview how the new content will look when rendered as HTML, and how it will fit it in with the existing documentation.

Since the documentation site is built using [Docusaurus](https://docusaurus.io/) which requires Node.js as well as a clone of this repository, there are a few steps needed to set up your environment.

### Set up your working environment

Although the following steps may seem overwhelming at first, they only need to be performed once!

#### Software requirements

- [Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [Node.js](https://nodejs.org/en/download/) ([version 16.14](https://docusaurus.io/docs/installation#requirements) or above)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) 

#### Clone the repository

Clone your `product-docs` repository.

1. Open your terminal.
1. Navigate to the location where you want the repository to reside.
1. Issue the following command after you have replaced `yourUsername` with your actual GitHub username:

**Note**: Internal emnify contributors should replace `yourUsername` with `emnify`.

```bash
git clone https://github.com/yourUsername/product-docs.git
```

Then navigate to the repository using:

```bash
cd product-docs
```

Change this Git configuration setting to avoid problems on macOS and Windows platforms:

```bash
git config core.ignoreCase false
```

Run Yarn to install Docusaurus:

```bash
yarn
```

This concludes the first-time installation steps for setting up your new environment.

### Preview the site

It is important that you have the desired branch checked out when you want to preview your work.
The default branch `main` which only contains content that has already been approved and merged! 
You will be mainly interested in previewing the content from your PR branches.
See [Checking out pull requests locally](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally?platform=linux) for how to do this in a terminal.
You will need to use a terminal for starting your local Docusaurus server.

#### Start previewing

Run the following Yarn command to have your browser open a new tab displaying the documentation site.

```bash
yarn start
```

#### Troubleshooting

If new Node.js dependencies have been added, `yarn start` may fail.
Enter `yarn` without any additional arguments to install missing dependencies.