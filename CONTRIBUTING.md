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

## Notice for internal contributors

If you are part of our internal emnify team, please request access to the emnify GitHub organization via Sharepoint.

**Notify us when your account is active before taking any further action.**

Once you are added to our team, you can work directly with the repository without any need to fork it.
Consequently, please disregard any references in this guide to "your forked repository".

## Updating the documentation

After logging in to your GitHub account, you can start contributing.

### Navigate to the file you wish to edit

Starting from the emnify Documentation [document root](https://github.com/emnify/product-docs/tree/main/docs) folder, find the file you wish to edit.

![github-select-edit](https://user-images.githubusercontent.com/49970529/215493212-f4694f5a-7d7f-4d65-a77d-761225d9a3e4.png)

### GitHub will fork the repository for you

If you haven't already [forked](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) the [emnify/product-docs](https://github.com/emnify/product-docs) repository, GitHub will do it for you as soon as you select the edit icon.

![github-fork-created](https://user-images.githubusercontent.com/49970529/215493193-6e805d85-e647-41d4-8867-91032bc45a9b.png)


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

The input field below enables you to update the summary/description you previously provided.

Normally we will not edit your changes during our review.
However, you can enforce this by unchecking the **Allow edits by maintainers**.
If you want us to edit your changes as needed during our review, then please state this explicitly in the PR description and leave this option checked.

Once you select **Create pull request**, we will see your PR in our queue of [open PRs](https://github.com/emnify/product-docs/pulls). 

We recommend make use of the template that includes the **Description** heading and an **Additional Context** heading if needed.
`<!--` and `-->` serve as block comment tags, hiding any text between them. 
Feel free to add any other headings, screenshots, images, diagrams, etc., that may help in explaining your contribution.

![github-open-a-pull-request](https://user-images.githubusercontent.com/123376330/215520265-e462ab79-47c8-465b-bc30-16f4c6950038.png)


### Pull request page

Immediately after creating the PR, GitHub takes you to its details page.
This is where you will receive feedback from reviewers and find status updates.

Please note the 4 tabs on this page:

![github-pr-tabs](https://user-images.githubusercontent.com/49970529/216594159-9477ff15-701a-4d54-a927-b0fd3727d293.png)

#### Conversation

- PR description
- Activity log, including each new commit
- Communication, i.e., conversations between the reviewer(s) and the PR assignee(s)

![github-opened-pull-request](https://user-images.githubusercontent.com/123376330/215520259-9f02110b-579c-4353-a9cb-6a54e7d22232.png)

#### Commits

This tab provides an uncluttered view of commits ordered from oldest to newest with all other information filtered out.
Commit details are collapsed by default.

![github-pr-commits-tab-detail](https://user-images.githubusercontent.com/49970529/216596552-26756c50-c9d5-4498-9d95-451eaafb2b63.png)

#### Checks
The [Test deployment](https://github.com/emnify/product-docs/actions/workflows/test-deploy.yml) GitHub action is triggered when your changes are pushed.
If there are any syntax errors that would break the documentation build, you will find details about what went wrong by following the most recent link associated with your PR's name in the [workflow runs](https://github.com/emnify/product-docs/actions/workflows/test-deploy.yml) table. 

#### Files changed

This is very useful for PRs that involve changes needed in multiple files.

![github-pr-files-changed-tab](https://user-images.githubusercontent.com/49970529/216598552-8e6b5a88-d503-4c19-aee9-61678e0cfef4.png)

## Creating new content

The process for creating new content is almost the same as [updating the documentation](#updating-the-documentation).

For adding a new page to the documentation, find the appropriate containing folder and choose **Add file**.
In the following example, we want to add a new device to the Quickstart guide.

### Navigate to the containing folder

From the [document root](https://github.com/emnify/product-docs/tree/main/docs), search for a folder that matches the category of the content you wish to create.

Once you have found the best fit, navigate to that folder and select **Add file**.
In this example, we want to add a new device under `quickstart/devices/`.

If you expand the list of options for the **Add file** button, you can see that it is also possible to upload multiple files.

![github-add-file](https://user-images.githubusercontent.com/49970529/215493168-91fc2b2c-6939-43a0-a3de-a6eae6487a5a.png)

### Name your file

If you did not choose the **Upload files** option, you will be prompted to provide a name for your new file.

**Note**: Please use [kebab case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case) when naming your files.

![github-create-file](https://user-images.githubusercontent.com/49970529/215493184-00ff9bdc-2783-4b7d-9fcb-d7d2b9b7179c.png)

In this example, we supplied `device-x.md` for the name of the new file and created some content using the **Edit new file** interface.

### Propose new file

When your new contribution is ready, scroll to the bottom to provide a description and select **Propose new file**.

![github-propose-new-file](https://user-images.githubusercontent.com/49970529/215493209-a8800b84-39df-474e-96df-c1fc230a1cf8.png)

From the **Comparing changes** page, you will select **Create pull request** and follow the same steps in the "Updating the documentation" section starting with [Open a pull request](#open-a-pull-request).

![github-comparing-changes-new](https://user-images.githubusercontent.com/49970529/215493175-d5c10247-7be1-4ecb-9173-773f3c06f1fa.png)

## The review process

After you have created your PR, the workflow is driven by cycles of content updates and reviews.

### Ready for review

If you encounter an unanticipated need to make extensive changes to the PR branch that will likely delay the start of the review, please choose **Convert to draft**:

![github-convert-to-draft](https://user-images.githubusercontent.com/49970529/215772000-384e6ea2-bf31-4107-aa41-3496236048be.png)

In draft mode, the PR will be prominently labeled accordingly.
When you have concluded your work, just select **Ready for review**. 

![git-pr-wip](https://user-images.githubusercontent.com/49970529/215799785-66620827-c3fa-4a5f-8bf7-511c345da91e.png)

### Maintainers and reviewers

A member of our documentation team will need to run the Test deployment script to verify that your changes will not break the build process.

![github-need-maintainer](https://user-images.githubusercontent.com/49970529/215772424-af3720d3-15d9-455f-aaed-e653cbec6c37.png)

Since we closely monitor the queue of PRs, it won't be long before a reviewer is assigned to your PR and has run the **Test deployment** script.

![github-maintainer-approved-action](https://user-images.githubusercontent.com/49970529/215775389-ab26caac-c05f-4b4e-ba9a-796ae7873e87.png)

### Submitting additional changes

If you are working from a forked repository on an existing PR branch, navigate to *your* GitHub repository and find the branch assigned to your PR.
In this example, the branch is **patch-3**: 

![github-new-changes](https://user-images.githubusercontent.com/49970529/215782505-d323ec93-2ad2-4235-91b6-cae9761338a2.png)

After navigating to the desired file, apply your changes, then scroll to the bottom of the GitHub page to add the commit title and details.
When finished, choose **Commit changes**.

Note: If you want to confirm which repository/branch you are on without having to scroll to the top of the page, this information can be found in the URL.

![github-commit-new-changes](https://user-images.githubusercontent.com/49970529/215787839-7f19cbbb-3912-42cb-935e-b43be2462823.png)

### Resolving open conversations

The reviewer may ask you to make additional changes before we can merge your PR.
If the reviewer supplied suggestions that can be applied, you can easily choose **Apply suggestion** directly through the UI.
This will automatically commit the change and [resolve](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#resolving-conversations) the conversation.
If there are several suggestions, they can be batched and applied all at once.

If the reviewer has requested changes in the form of a comment, you will need to follow the instructions supplied when applying the changes.
See [Submitting additional changes](#submitting-additional-changes) above for how to add changes to the current PR branch.

**It is important that you [resolve](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#resolving-conversations) all open conversations before requesting another review.**

In the following example, the reviewer opened a comment on line 65 of the text.
You should always assume the last line shown in the right column of line numbers is the line of interest when changes are requested, unless the comment states something to the contrary. 

![github-changes-requested](https://user-images.githubusercontent.com/49970529/215818630-41594c79-104d-4a58-aeea-2512b761fc69.png)

Regarding the example above, the next steps would be:

1. Choose which one of the tasks to work on.
1. Edit the text to complete the task (see [Submitting additional changes](#submitting-additional-changes))
1. Reply to the reviewer's comment with which choice you made.
1. Select **Resolve conversation**.
1. Resubmit it for review.

### Approval

Once all open conversations have been resolved, it is still possible that the reviewer might come across something else that needs to be changed, in which case the process will repeat itself again.

If the PR has made it to the stage of **Review**, typically it is only a matter of time before you will see your PR in the list of PRs with a status of **Approved**.

After it has been approved, it is likely to be merged without delay, in which case the changes will be publicly visible.

## Previewing the documentation site

For larger contributions, especially when adding new pages, it becomes necessary to preview how the new content will look when rendered as HTML, and how it will fit it in with the existing documentation.

Since the documentation site is built using [Docusaurus](https://docusaurus.io/) which requires Node.js as well as a clone of this repository, there are a few steps needed to set up your environment.

### Set up your working environment

Although the following steps may seem overwhelming at first, they only need to be performed once!

#### Software requirements

- [Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [Node.js](https://nodejs.org/en/download/): After installation, confirm that your Node.js version meets the [Docusaurus requirements](https://docusaurus.io/docs/installation#requirements).
- [yarn](https://classic.yarnpkg.com/en/docs/install) 

#### Clone the repository

Clone your forked `product-docs` repository.

**Note**: If you are an internal emnify contributor, you do not need to fork the repository.

1. Open your terminal (or PowerShell).
1. Navigate to the location where you want the repository to reside.
1. Issue the following command after you have replaced `yourUsername` with your actual GitHub username:

**Note**: Internal emnify contributors should replace `yourUsername` with `emnify`.

```
git clone https://github.com/yourUsername/product-docs.git
```

Then navigate to the repository using:

```
cd product-docs
```

Change this Git configuration setting to avoid problems on macOS and Windows platforms:

```
git config core.ignoreCase false
```

After yarn is installed, you can run yarn to install all the required Node.js applications you need to run your local documentation site on your workstation.
Docusaurus, including all of its dependencies, will be installed in this step.
Navigate to your cloned repository in your terminal window (or PowerShell) and start yarn:

```
yarn
```

This concludes the first-time installation steps for setting up your new environment.
However, you might need to run yarn occasionally  when new versions of your Node.js apps are released. 

### Preview the site

It is important that you have the desired branch checked out when you want to preview your work.
The default branch `main` is the public-facing version and doesn't contain your changes (yet)! 
You will mainly be interested in previewing your work from your PR branches.
These need to be explicitly checked out using Git.

You will need to use your terminal (or PowerShell), for starting your local Docusaurus server for previewing.
You can issue the necessary Git commands using the command line.

#### Frequently used git commands

**Get recently created branches**

```
git fetch origin
```
 
 **Checkout my PR branch `patch-3`**

 ```
 git checkout patch-3
 ```

 **Get the most recent changes to my current branch**

```
git pull
```

#### Start previewing

Run the following yarn command to have your browser open a new tab displaying the documentation site.

```
yarn start
```

Any errors or warnings will be displayed both in the browser as well as in the terminal window.