# Vale

emnify uses [Vale](https://vale.sh/) to enforce consistency in the documentation.

Vale is an open source command-line tool to provide English language linting.
Vale enables spell-checking, writing improvements, and style guide enforcement in files across text and code.

Vale uses packages, also known as [Styles](#styles), to define the rules for writing to follow.

## Install Vale

Follow the instructions on the Vale website to [install the Vale command-line tool](https://vale.sh/docs/vale-cli/installation/).

> [!IMPORTANT]
> Make sure your local CLI version is **<=2.30.0** to match the existing directory structure and version running in the CI pipeline.

If you have issues installing an older version of Vale, [run this workaround](https://gist.github.com/codebytere/54b5667e66ed18aeb1158495d95d5a66) for Homebrew.

## Run Vale

Once you have Vale installed, you can run it locally using `vale <path to document>`.

For example, if you run the following example at the project root, it lints this file:

```shell
vale .github/vale/README.md
```

### Alerts

Vale has three alert options: `suggestion`, `warning`, and `error`.
By default, the minimum alert level in the project configuration is set to `warning`.

Vale is run via a [CI pipeline](../workflows/vale.yml) and [pre-commit hook](../../.husky/pre-commit).
These checks fail on `error` and don't report warnings or suggestions.

> [!WARNING]
> The 'Validate content with Vale' pipeline must pass for pull request approval.

## Styles

emnify uses the following [Vale Styles](https://vale.sh/docs/topics/styles/):

- [Vale](https://vale.sh/docs/topics/styles/#extension-points) (default linting)
- Google (for the [Google developer documentation style guide](https://developers.google.com/style))
- emnify (customized styles)

### Customized emnify Styles

- `Condescending.yml`  
Based on `alex.Condescending` from [alex](https://alexjs.com/) to catch condescending language.
- `FixMe.yml`  
Custom rule to ensure annotations are removed.
- `Race.yml`  
Based on `alex.Race` from [alex](https://alexjs.com/) to flag polarizing race-related phrasing.
- `spelling-exceptions.txt`  
Used in `Spelling.yml` to ignore non-dictionary words.
- `Spelling.yml`  
Extends `Vale.Spelling` to include emnify-specific spelling exceptions.

<details>
<summary>Why not use the alex package?</summary>
The emnify Documentation only requires two of the 10 rules in the alex package for Vale.
These two rules are also further customized (more terms added, altered severity levels, etc.), so it makes more sense to maintain an emnify-specific version of the rules.
</details>

> [!NOTE]
> emnify has made some modifications to these packages to remove duplicates or add emnify-specific terms.

## Vocabularies

Vale uses [Vocabularies](https://vale.sh/docs/topics/vocab/) to define term lists to further customize styles.
emnify uses this to define company or industry-specific terminology that a traditional spell check misinterprets.

- [`accept.txt`](./styles/Vocab/emnify/accept.txt) - acceptable formatting and spelling
- [`reject.txt`](./styles/Vocab/emnify/reject.txt) - deprecated company terminology or common mistakes

## Ignore Vale rules

Vale can turn off [specific rules](#ignore-specific-rules) or [all rules](#ignore-all-rules) inside a document.
All ignored rules should include a justification for why they’re ignored.

> [!WARNING]
> Vale ignores rules that aren't turned back on for the rest of the document.
> After the ignored content, turn the rules back on.

## Ignore specific rules

Ignore a specific rule with `<!-- vale <rule name> = NO -->` and turn the rule back on with `<!-- vale <rule name> = YES -->`.

For example:

```markdown
<!-- vale Google.Exclamation = NO -->
<!-- Turn off Google's default exclamation point rule for the example -->
Writing documentation is so fun!
<!-- vale Google.Exclamation = YES -->
```

> [!TIP]
> Vale requires capitalization for `YES` and `NO` and a space around `=`.

### Ignore all rules

Use `<!-- vale off -->` to ignore all Vale rules and `<!-- vale on -->` to turn Vale back on.

For example:

```markdown
<!-- vale off -->
<!-- Turn off vale checking for this example -->
The following example will use passive voice, expansions and exclamation points.
We're also missing an Oxford comma in that sentence!
Do not do this!
<!-- vale on -->
```

## Add a new Vale rule

Every new Vale rule takes effort to create and enforce, so we want to be mindful of what we implement.

In general, follow these guidelines:

- If you add an error-level Vale rule, **you must fix the existing occurrences of the issue** in the documentation before you can add the rule.
- If the number of additional alerts in the Vale output is significant after adding your rule, the rule might be too broad.
- If the rule is too subjective and an author frequently ignores it, it can't be adequately enforced and creates unnecessary additional warnings.
