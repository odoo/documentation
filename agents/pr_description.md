# PR description rules

Write the PR description for a documentation change with these rules. They are based on the
team's existing PR descriptions, with R&D task IDs added. When the agent hands work back to the
author (step 8 of the editing workflow in `AGENTS.md`), it drafts the description with this
template. The author reviews it and opens the PR.

## Title

Use the commit subject, followed by the target version:

```text
[IMP] inventory: allocation report update 20.0
[ADD] ai: MCP server documentation saas-19.4
[REF] ai: separate MCP tools reference section saas-19.4
```

- Follow `commit_template.txt` for the tag and the lowercase app or module scope.
- End with the base branch version (`18.0`, `19.0`, `saas-19.4`, `20.0`).
- Do not add a colon after the tag: `[IMP] app:`, not `[IMP]: app:`.

## Template

```markdown
## Description
<What the PR does, and which pages it touches.>

<Why: what changed in the product, and in which version. Or why the docs were wrong, outdated,
or missing.>

R&D task: [task-<ID>](<URL of the R&D task for the functional change>)
Product change PR: [odoo/<repo>#<number>](<URL of the odoo/odoo or odoo/enterprise PR>)

## Changelog
- <Change>
- <Change>

## Version Scope
This `<base version>` PR can be FWP up to `<last version>`.
```

Keep the description within the [length caps](#length-caps). Add these only when they apply:

- A **Note to reviewer** paragraph (see [Notes to the reviewer](#notes-to-the-reviewer)).
- A **batch list** (see [Batches of related PRs](#batches-of-related-prs)).
- The **proof screenshots** and the **checklist** from `agents/pr_checklist.md`, after
  *Version Scope*.

## Length caps

Keep descriptions short, whatever the size of the diff. Reviewers read the diff for details; the
description tells them what changed, why, and where to look.

| Part | Cap |
|---|---|
| Description | **At most 3 sentences**: what the PR does, why (with the version), and optional context. |
| Changelog | **At most 5 bullets**, one line each. |

- Do not scale the length with the number of lines changed. Re-wrapped paragraphs, redirects, and
  toctree edits inflate the line count without adding anything to explain.
- These parts do not count toward the caps: the R&D task and product PR links, *Version Scope*, a
  *Note to reviewer*, a batch list, proof screenshots, and the checklist.
- If the description does not fit, the PR probably does too much: check the
  [PR scope](../AGENTS.md#pr-scope) rule and split it. Otherwise, move the extra detail to a PR
  comment on the relevant line.

## Sections

### Description

- At most three sentences. Start with what the PR does: *This PR updates*, *This PR adds*,
  *This PR removes*, *This PR documents*.
- Name the pages that changed. Use italics or quotes for page titles: *Allocation report*.
- Say **why**, with the version: what changed in the product, or that the page was outdated
  (*outdated since 17.0*) or the feature was undocumented (*This feature was previously
  undocumented.*).
- Put versions in backticks: `20.0`, `saas-19.4`.
- Link related documentation PRs (for example, earlier versions of the same change) with a
  descriptive label, not a bare URL. The product PR goes on its own line, with the R&D task.
- Mention context from R&D or other teams when it shaped the content, and say who it came from.

### Task and product PR links

- **R&D task:** always include the R&D task of the **functional change** the PR documents (the
  product feature or behavior change, not the documentation task). Write it as `task-<ID>`, linked
  to the task. The ID lets readers and tools find the R&D change behind the docs.
- **Product PR:** link the `odoo/odoo` or `odoo/enterprise` PR that made the product change, as
  `odoo/odoo#<number>` or `odoo/enterprise#<number>`. If the change spans both repositories, list
  both PRs on the same line.
- Do not link the documentation task.
- Put each link on its own line, after the description sentences.
- If there is no functional change (for example, a style-only or structural PR), write
  `R&D task: none (<reason>)` and leave out the product PR line, so reviewers know it was not
  forgotten.

### Changelog

- Use the heading **Changelog** (not *Changes* or *What this PR does*).
- At most five bullets, one line each. Write one bullet per change a reviewer should check, not one
  per edit. Do not restate the diff.
- Group minor edits in one bullet: `Style fixes, typos, and updated screenshots.`
- Start each bullet with a past-tense verb: *Added*, *Updated*, *Removed*,
  *Renamed*, *Rewrote*, *Moved*, *Fixed*.
- Be specific. Name the section, field, or button, and put UI names in bold:
  - ✅ `Renamed the toggle column from **Reserved** to **Assigned**.`
  - ❌ `Edits to the article.`
- For removed, moved, or redirected files, give the file paths and the redirect target.

### Version Scope

- State the base version and how far the change forward-ports:
  - `This `19.0` PR can be FWP up to `master`.`
  - `This `18.0` PR can be FWP up to `19.0`. A separate `20.0` PR covers the UI changes.`
  - `This `19.0` PR should **not** be FWP to `master`.`
- If other versions need their own PR, say so here.

## Notes to the reviewer

Add a paragraph that starts with **Note to reviewer** when the PR is narrower than the reader might
expect:

- **Partial update:** the PR covers only one change, and the rest of the page is handled
  separately.
- **Backport or sync:** the PR copies changes from a linked PR, and no other major changes are
  made.
- **Structural only:** content was moved or split, and **no content was added or changed**.

## Batches of related PRs

When the PR is one of several related PRs (for example, a rewrite of an app's docs across several
pages), add a numbered list of all PRs in the batch, and mark the current one:

```markdown
**Note**: This PR is part of a batch of updates to the Marketing Automation documentation.
1. [Update workflows](https://github.com/odoo/documentation/pull/20403)
2. *this PR* -> [Update audience targeting](https://github.com/odoo/documentation/pull/20405)
3. [Update testing and running](https://github.com/odoo/documentation/pull/20406)
```

## Example

```markdown
## Description
This PR updates the *Allocation report* page for `20.0`. Units can now be allocated from the
forecasted report and from Barcode receipts, and sent to a dedicated allocation location.

R&D task: [task-4123456](https://www.odoo.com/odoo/project/49/tasks/4123456)
Product change PR: [odoo/odoo#212345](https://github.com/odoo/odoo/pull/212345)

## Changelog
- Added the *Set allocation location* section for the **Location for allocation** field.
- Added a note that reserved quantities cannot be allocated.
- Renamed the toggle column from **Reserved** to **Assigned**.
- Updated the report screenshot, and fixed style issues.

## Version Scope
This `20.0` PR can be FWP up to `master`.
```

The R&D task ID and the product PR number in the example are placeholders.
