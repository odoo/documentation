# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Codex, Cursor, and others) when working in this repository.

## Which style rules apply

Before writing or reviewing any `.rst` file, find its path in
[agents/docs_ownership.md](agents/docs_ownership.md) and apply the matching rules:

| Scope | Rules to follow |
|---|---|
| **US** | [agents/style_rules.md](agents/style_rules.md). It builds on the published guidelines and overrides them where they conflict. |
| **Not US** | The published guidelines only: `content/contributing/documentation/content_guidelines.rst` and `rst_guidelines.rst`. Do not apply US-only overrides (for example, numbered `(optional)` steps or second-person rules). |
| **Undecided / not listed** | Ask which rules apply before editing. |

- Decide the scope **per file**, not per PR. A PR can touch files in both scopes.
- Mechanical rules (headings, line length, images, redirects, commits) are the same in both scopes
  and are listed below.

## Build commands

Requires Python 3.10–3.14 and dependencies installed in a virtual environment:

```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```

| Command | Purpose |
|---|---|
| `make html` | Full build |
| `make fast` | Build with shallow menu (faster, for local preview) |
| `make clean` | Delete all build files |
| `make test` | Run lint/guideline checks (used by CI) |
| `make review` | Interactive review with line-length checker (manual use only) |

Build output goes to `_build/html/`. Open `_build/html/index.html` to preview.

For language or version builds:
```bash
make html CURRENT_LANG=fr
make html VERSIONS=17.0,18.0,19.0
```

## Tests

`make test` runs sphinxlint with custom checkers against `content/administration`, `content/applications`, `content/contributing`, `content/developer`, and `redirects/`.

Custom checkers live in `tests/checkers/`:
- `rst_style.py` — heading character order (`=`, `-`, `~`, `*`, `^`), spacing, length, git conflict markers
- `resource_files.py` — image size (PNG ≤ 505 KB, GIF ≤ 2.1 MB), 8-bit PNG color depth, hyphen-only filenames, unreferenced resource files

The `check_early_line_breaks` and `check_line_too_long` checkers are only enabled during `make review`, not `make test`.

## Repository structure

```
AGENTS.md           # This file (agent instructions)
CLAUDE.md           # Imports AGENTS.md for Claude Code
agents/             # Reference files for agents
  style_rules.md    # US team style rules (detailed)
  docs_ownership.md # Which content paths are US vs. not US
  pr_checklist.md   # Checklist the author copies into the PR description
  pr_description.md # PR title and description rules
content/          # RST source files (the actual documentation)
  applications/   # User-facing app docs (Finance, Sales, HR, etc.)
  administration/ # Install, upgrade, hosting
  developer/      # Technical/API reference
  contributing/   # Contributor guides
extensions/       # Custom Sphinx extensions
  odoo_theme/     # HTML theme + SCSS
  redirects/      # Extension that generates redirect HTML files
  cards/          # Card grid directives
  custom_admonitions/  # example, exercise, spoiler directives
  embedded_video/ # youtube/vimeo directives
redirects/        # Per-version redirect rule .txt files
tests/            # sphinxlint-based test suite
conf.py           # Sphinx configuration
Makefile          # Build targets
```

## RST conventions

**Heading hierarchy** (must follow this exact order within each file):
```
=====
H1      (page title, `=` above and below, exactly one per file)
=====

H2
==

H3
--

H4
~~

H5
**

H6
^^
```

**Indentation**: spaces only, never tabs. Use 3 spaces for directive content alignment (2 for bullet lists).

**Line length**: break before the 100th character (enforced by `make review`, checked manually).

**Custom directives** (registered in `tests/main.py` so sphinxlint won't flag them):
- `.. card::` / `.. cards::` — card grids
- `.. example::` / `.. exercise::` — custom admonitions
- `.. spoiler::` — collapsible content
- `.. tab::` / `.. tabs::` / `.. group-tab::` / `.. code-tab::` — tabbed content

**Page metadata** (file-level directives, placed before the H1):
- `:nosearch:` — exclude from search
- `:show-content:` — show page body in navigation parent
- `:show-toc:` — show TOC in navigation
- `:hide-page-toc:` — hide the "On this page" sidebar
- `:orphan:` — allow file not in any toctree

**Source substitutions** (resolved at build time, usable in RST):
- `{BRANCH}`, `{CURRENT_VERSION}`, `{CURRENT_MAJOR_BRANCH}`, `{CURRENT_MAJOR_VERSION}`
- `{GITHUB_PATH}` — link to `odoo/odoo` at the current version
- `{GITHUB_ENT_PATH}` — link to `odoo/enterprise`

## Redirects

When moving or renaming an `.rst` file, add a redirect rule to `redirects/<version>.txt` (e.g., `redirects/19.0.txt`):

```
path/to/old/file.rst path/to/new/file.rst  # optional comment
```

Rules must be sorted alphabetically within their block. See `redirects/MANUAL.md` for full details.

## Commit message format

Follow `commit_template.txt` (subject format, tag meanings, and a body that explains *why*).
Team-specific tag rules are in `agents/style_rules.md` § 13. Commits.

- Scope is the app or module in lowercase: `inventory`, `mrp`, `payroll`, not `Payroll -`.
- Examples:
  - `[IMP] inventory: rename customer lead time to delivery time`
  - `[ADD] inventory: how operations affect valuation`
  - `[FIX] attendances: correct overtime ruleset steps`

## Documentation editing workflow

When asked to write, review, or fix a documentation file:

1. **Read context first** — always read the target file AND its parent index file (e.g., if reviewing `use_locations.rst`, also read `inventory_management.rst`) before drawing conclusions about structure or feature relationships.
2. **Propose before editing** — list all proposed corrections (with line numbers and rewrites) and wait for explicit approval before making any file changes.
3. **Stay scoped** — work only on the file(s) explicitly specified. Do not expand to the full branch diff or related files unless asked.
4. **Apply the right rules** — check the file's scope in `agents/docs_ownership.md`, then apply `agents/style_rules.md` (US) or the `content/contributing` guidelines (Not US). Consult `tests/checkers/rst_style.py` and `tests/checkers/resource_files.py` for lint rules in both scopes, so corrections align with project standards rather than generic advice.
5. **Run the checks** — after editing, and before handing the work back, run these on every changed `.rst` file and fix what they flag:

   | Check | Command | Catches |
   |---|---|---|
   | Build | `make fast` | RST and Sphinx errors, broken `:doc:`/`:ref:` links. Read the warnings for the changed files. |
   | Lint | `make test` | The CI guideline checks (headings, images, redirects). |
   | Line review | `REVIEW=1 python tests/main.py --max-line-length=100 content/<path>` | Lines over 100 characters and early line breaks. This is what `make review` runs; call it directly because `make review` prompts for input. |
   | Prose | `vale --config=../odoo-vale-linter/.vale.ini <file>` | Odoo prose rules from [odoo-vale-linter](https://github.com/Felicious/odoo-vale-linter). Fix 🔴 errors; review 🟡 warnings. If a Vale rule contradicts `agents/style_rules.md` for a US-scope file, the style rules win; mention the conflict instead of "fixing" it. |

   If a tool is not installed (for example, Vale or the `odoo-vale-linter` repo next to this one), say so in the handoff instead of skipping it silently.
6. **Verify against the product** — check every UI label, menu path, field, and tooltip in the changed content against a running Odoo instance:
   - Ask the author, in plain text, for the instance URL and the scenario to check. Never guess or reuse a URL from an earlier task. The instance must run the same version as the target branch, with the relevant apps installed. Use a local or test database, never a production database.
   - Use the browser tools available (for example, Playwright) to follow the documented steps and compare each label and path with the UI. Do not create or change records beyond what the scenario needs.
   - Fix mismatches in the text, and take proof screenshots of the verified UI for the PR (see `agents/pr_checklist.md`).
   - If there is no instance or no browser tool, do not guess. List every unverified label in the handoff, and add them to the PR description as open questions.
7. **Self-review** — check the changes against the review checklist: `agents/style_rules.md` § 15. Review checklist for US-scope files, or the `content/contributing` guidelines for Not US files.
8. **Hand over to the author** — do not push or open the PR. Report what changed, the result of each check in step 5 (pass, fixed, or remaining issues), the Odoo version and apps you verified on in step 6 (or the labels you could not verify), and anything that needs the author's judgment. Draft the PR title and description with `agents/pr_description.md`, including the R&D task of the functional change and the `odoo/odoo` or `odoo/enterprise` PR. Then ask the author to copy the checklist in `agents/pr_checklist.md` into the PR description and tick it off before requesting review.

## PR scope

- **Default: one article per PR.** An article is one `.rst` file, plus its media folder and the
  redirect and toctree edits that file needs.
- **If necessary: one app per PR.** A PR can cover several articles only when they belong to the
  same app folder (for example, `content/applications/inventory_and_mrp/inventory/`) and the
  change does not make sense split up.
- **Never more than one app.** If a change reaches beyond one app, split it into one PR per app.
  Link the PRs to each other as a batch (see `agents/pr_description.md`).
- Before you start, tell the author if the request spans more than one article or app, and propose
  how to split it.

## Images and media

- PNG files must be ≤ 505 KB and compressed to 8-bit color depth (use `pngquant`)
- GIF files must be ≤ 2.1 MB
- Resource filenames must use hyphens, not underscores
- Each resource file must be referenced in the `.rst` file with the same name as its parent folder
