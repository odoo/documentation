# PR checklist

At the end of a documentation task, the agent asks the author to copy the checklist below into the
PR description and tick off each item before requesting review. The agent does not tick items for
the author.

## Verifying against the product

- Check every UI label, menu path, field, and tooltip in the changed content on a local Odoo
  instance that runs the same version as the target branch, with the relevant apps installed.
- Take any new or updated screenshots from that instance (see the next section).
- If you cannot access an instance, do not guess. List every unverified label in the PR description
  as an open question.
- In the PR description, state the Odoo version and the apps you verified on.

## Two kinds of screenshots

Take both kinds in a local Odoo instance that runs the **same version as the docs branch** (for
example, a `20.0` docs branch needs Odoo 20.0, and `saas-19.2` needs Odoo saas-19.2).

### Proof screenshots (for reviewers)

Proof screenshots show reviewers that the documented steps match the UI. They live only in the PR
and are never added to the docs, so they do not need to follow the formatting rules for
customer-facing images.

- **Up to three screenshots:** add them to the PR description, under the checklist.
- **More than three:** add each one as a PR comment on the line or section it supports, so reviewers
  see it next to the text it proves.

### Customer-facing screenshots (in the docs)

Customer-facing screenshots are image files added to the documentation. They must follow section
11 of `agents/style_rules.md`: 120% zoom, a tight crop with a small even margin, no markups, no
`:align:`, plain-text alt text, and `pngquant` compression.

## Checklist to copy

```markdown
### Checklist

- [ ] This PR is scoped to one article, or to one app if necessary, and never more than one app.
- [ ] Ran `make fast`, and the changed pages build without new warnings.
- [ ] Ran `make test`, and it passes.
- [ ] Ran `make review` on the changed files (line length and early line breaks).
- [ ] Ran the Vale linter (odoo-vale-linter) and fixed all errors.
- [ ] Self-reviewed against the style rules for this scope (US: `agents/style_rules.md`, Not US:
      `content/contributing` guidelines).
- [ ] Verified every UI label, menu path, field, and tooltip on a local Odoo instance on the same
      version as this branch, with the relevant apps installed.
      Version: ___ · Apps: ___
- [ ] Listed any unverified labels below as open questions (or everything was verified).
- [ ] Added proof screenshots of the tested UI for reviewers (in this description for up to three,
      or as PR comments on the relevant lines for more).
- [ ] Customer-facing screenshots are at 120% zoom, cropped to the relevant element with a small
      even margin and no large empty areas, and follow the rest of section 11 of
      `agents/style_rules.md` (or no new screenshots were added to the docs).
- [ ] Added redirects for moved, renamed, or deleted `.rst` files (or none were moved).
- [ ] Compressed new PNG files with `pngquant`, and deleted images that are no longer referenced.
- [ ] Commit messages follow `commit_template.txt`.
```
