# Vale

emnify uses [Vale](https://vale.sh/) to enforce consistency in the documentation.

Vale is an open source command-line tool to provide English language linting.
Vale enables spell checking, writing improvements, and style guide enforcement in files across text and code.

Vale uses packages, also known as [Styles](#styles), to define the set of rules for writing to follow.

## Install Vale

Follow the instructions on the Vale website to [install the Vale command-line tool](https://vale.sh/docs/vale-cli/installation/).

## Run Vale

Once you have Vale installed, you can run it locally using `vale <path to document>`.

For example, if you run the following example at the project root, it lints this file:

```shell
vale .github/vale/README.md
```

### Alerts

Vale has three alert options: `suggestion`, `warning`, and `error`.
By default, the minimum alert level in the project configuration is set to `warning`.

Vale is run via a [CI pipeline](.github/workflows/vale.yml).
This pipeline fails on `error` and doesn't report warnings or suggestions.

> **Warning**
> The 'Validate content with Vale' pipeline must pass for approval.

## Styles

emnify uses the following [Vale Styles](https://vale.sh/docs/topics/styles/):

- [Vale](https://vale.sh/docs/topics/styles/#extension-points) (default linting)
- Google (for the [Google developer documentation style guide](https://developers.google.com/style))
- emnify (customized styles)
  - `Condescending.yml`, based on `alex.Condescending` from [alex](https://alexjs.com/) to catch condescending language
  - `FixMe.yml`, custom rule to ensure annotations are removed
  - `Race.yml`, based on `alex.Race` from [alex](https://alexjs.com/) to flag polarizing race-related phrasing
  - `spelling-exceptions.txt`, used in `Spelling.yml`
  - `Spelling.yml`, which extends `Vale.Spelling` to include emnify-specific spelling exceptions

<details>
<summary>Why not use the alex package?</summary>
The emnify Documentation only requires two of the 10 rules in the alex package for Vale.
These two rules are also further customized (more terms added, altered severity levels, etc.), so it makes more sense to maintain an emnify-specific version of the rules.
</details>

> **Note** 
> emnify has made some modifications to these packages to remove duplicates or add emnify-specific terms.

## Vocabularies

Vale uses [Vocabularies](https://vale.sh/docs/topics/vocab/) to define term lists to further customize styles.
emnify uses this to define company or industry-specific terminology (see [`accept.txt`](./styles/Vocab/emnify/accept.txt) for the full list). 

## Ignore Vale rules

Vale can turn off [specific rules](#ignore-specific-rules) or [all rules](#ignore-all-rules) inside a document.
All ignored rules should include a justification for why they’re ignored.

> **Warning** 
> Vale ignores rules not turned back on for the rest of the document.
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

> **Note** 
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
