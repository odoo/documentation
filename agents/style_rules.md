# Odoo documentation style guide for LLMs

This file defines the US team's style rules for Odoo user documentation. It applies only to
US-scope files (see `agents/docs_ownership.md`). Follow it when you draft, edit, or review one of
those `.rst` files.

## How to use this guide

- **Published guidelines first:** `content/contributing/documentation/content_guidelines.rst` and
  `rst_guidelines.rst` apply to every file in this repository. Read them first. This guide does not
  repeat them. It lists only the rules the US team adds, and the rules where the US team currently
  differs from them.
- **Temporary layer:** this guide is a temporary layer until the US rules and the published
  guidelines are merged into one set. When the teams agree on a difference, update the published
  guidelines, and remove the rule from this file. The merge is tracked in
  [odoo/documentation#21071](https://github.com/odoo/documentation/issues/21071).
- **Precedence:** for US-scope files, when a rule here conflicts with the published guidelines or
  with patterns in existing pages, follow this guide. These rules are marked **Override** and are
  listed in [Differences from the published guidelines](#differences-from-the-published-guidelines).
  Do not copy a pattern from an existing page if it breaks a rule here.
- **Scope:** edit only what you are asked to edit. Existing content that breaks a rule (for example,
  old anchor names) does not need to be fixed unless the task asks for it. New content must follow
  every rule.

### Differences from the published guidelines

These are the **Override** rules. They are also the list of points to agree on when the US rules
and the published guidelines are merged.

| Topic | Published guidelines or existing pages | US rule |
|---|---|---|
| UI names in headings | Sentence case for the whole heading | Match the UI capitalization of the name ([Headings](#headings)) |
| Addressing the reader | Avoid *you* where possible | *You* is allowed ([Person and voice](#person-and-voice)) |
| Procedures | Inline text is fine for three or fewer items | Never write procedures as narrative paragraphs ([Lists](#4-lists)) |
| Field and option lists | Lowercase description, no period | Capital letter and period ([Field and option lists](#field-and-option-lists)) |
| Menu paths | Start with the app name (`Sales -->`) | Start with the app name followed by *app* (`Sales app -->`) ([Menu paths](#menu-paths)) |
| Section titles on a form | `:guilabel:` | Italics ([Decision rule](#decision-rule)) |
| Icon descriptor | Parentheses outside `:guilabel:` | Parentheses inside `:guilabel:` ([Icons](#icons)) |
| Custom anchors | On every heading | Only where a section is linked ([Custom anchors](#custom-anchors)) |
| Version references | Never | Allowed inside an admonition when requested ([Version references](#10-version-references)) |
| Image alignment | `:align:` is allowed | Never use `:align:` ([Screenshot rules](#screenshot-rules)) |

---

## 1. Page structure

- Keep the `.. meta::` `:description:` block at the top of the file. It is used for generative
  engine optimization (GEO) and LLM summaries. Never delete it, and never rewrite or tweak it in
  passing while editing other parts of the page.
- To add, fix, or regenerate a meta description, use the `rst-meta-description` skill from the
  [rst-meta-description-plugin](https://github.com/Felicious/odoo-tech-writer-team-skills/tree/master/plugins/rst-meta-description-plugin)
  (`/rst-meta-description-plugin:rst-meta-description`). Do not write the description by hand. If
  the skill is not installed, leave the description unchanged and tell the person you are working
  with that it needs an update.
- On a parent page, list child pages in a `toctree`, not in a long `seealso` list.

### Headings

- **Override:** headings use sentence case, but if a heading includes the name of a UI field, label,
  or window that uses title case, match the UI capitalization for that name. The rest of the heading
  stays in sentence case.

  ✅ `Scrap Products pop-up window` (*Scrap Products* is the pop-up's title in the UI)
  ❌ `Scrap products pop-up window`
  ❌ `Scrap Products Pop-Up Window`

  ALL-CAPS UI labels still become sentence case.
- Use the simple present or imperative, not the gerund: `Create a quotation`, not
  `Creating a quotation`. A gerund is acceptable case by case when it reads more naturally (for
  example, *Meeting deadlines*).

---

## 2. Voice, tone, and grammar

### Person and voice

- **Override:** you **may** address the reader as *you*. Keep sentences concise. Prefer the
  imperative mood when it reads naturally.
- Never refer to the reader as "the user" or write instructions in the third person.

  ✅ `Select the appropriate option from the drop-down menu.`
  ✅ `If you manage several warehouses, enable the Storage Locations setting.`
  ❌ `The user should select the appropriate option from the drop-down menu.`

### Tense

- If avoiding *will* forces awkward phrasing, use it.
- Avoid *would* (hypothetical): ❌ `This would remove the user from the list.`
- Use the simple present, not the present continuous: *Create*, not *Creating*.

### Sentence structure

- State the condition, circumstance, or goal **before** the instruction, so readers can skim to the
  steps that apply to them.

  ✅ `To delete the document, click Delete.`
  ❌ `Click Delete to delete the document.`

- Do not start a paragraph with *But*.
- Ending a sentence with a preposition is fine. Put it where the sentence reads most easily.
- Avoid repeating a word in the same sentence (for example, *navigate* twice, or "specify the
  specific").
- Use *because*, not *since*, to express a cause.

### Words and phrases to avoid

- Idioms and colloquialisms: *start off*, *just*, *a couple*, *on the fly*. They translate badly.
- Words that imply ease: *simply*, *just*, *obviously*, *quickly*, *easily*.
- Marketing or sales language. Teach the product; do not sell it.
- Jargon, unless it appears in the UI or is essential to the instructions.
- Slashes for "and/or". Write *and* or *or*.
- Optional plurals such as *product(s)*, *checkbox(es)*, *customer(s)*. Use the plural form; it does
  not exclude the singular.

  ✅ `Select one or more topics.` / `Select the products.`
  ❌ `Select an appropriate topic(s).`

### Tone

Aim for professional and approachable, but accuracy and clarity come first.

---

## 3. Capitalization

- Match the UI capitalization for labels even if the UI has a spelling or grammar error. (Writers
  report UI errors to R&D separately.)
- In headings, UI names keep their UI capitalization (see [Headings](#headings)).
- Do not capitalize conceptual terms in `example`, `note`, or other blocks just because they share a
  name with a UI field.
- In lists, capitalize the first word after a colon (see [Lists](#4-lists)).

---

## 4. Lists

### Numbered lists for procedures

- **Override:** use numbered lists for procedural content (steps that must be done in order). Do not
  write procedural instructions as narrative paragraphs.
- Mark optional steps with a lowercase *optional* in parentheses at the start of the step:

  ```rst
  #. Click :guilabel:`New`.
  #. (optional) Add a :guilabel:`Description`.
  #. Click :guilabel:`Save`.
  ```

  ❌ `Optional: Add a description.` ❌ `**Optional:** Add a description.`
  ❌ `Add a description (optional).`

### Field and option lists

**Override:** when describing form fields or options, use a bulleted list of `label: description`
items:

- List the items **in the order they appear in the UI**.
- Format the label with `:guilabel:`.
- Start the description with a **capital letter**.
- End the description with a **period**. If an item has no description, it has no period.
- Keep the wording parallel across items.

```rst
- :guilabel:`Product`: The product that requires replenishment.
- :guilabel:`Location`: The location where the product is stored.
- :guilabel:`Warehouse`: The warehouse where the product is stored.
```

❌ `- :guilabel:`Product`: the product that requires replenishment` (lowercase, no period)

---

## 5. Formatting UI elements and text

### Decision rule

**If clicking it changes something on the screen, use `:guilabel:`.** This applies even when the
element is not visible on the current screen. **Exception:** tabs use italics, even though clicking
a tab changes the screen.

| Element | Format | Example |
|---|---|---|
| Buttons, fields, links, options, checkboxes, toggle labels, smart buttons | `:guilabel:` | `click :guilabel:`Save`` |
| Column titles in a list or table view (clicking reorders the table) | `:guilabel:` | `the :guilabel:`Scheduled Date` column` |
| Tabs | *italic* | `open the *Other Info* tab` |
| Page, window, pop-up, and pop-over titles | *italic* | `the *Create Invoice* pop-up window` |
| Reports | *italic* | `the *Replenishment* report` |
| Section titles on a form or settings page (**Override:** italic, not `:guilabel:`) | *italic* | `scroll to the *Invoicing* section` |
| Odoo-specific terms used conceptually | plain text or *italic* | `a credit note`, never `:guilabel:` |
| Full navigation through real menus | `:menuselection:` | see [Menu paths](#menu-paths) |
| App names | **bold** | `the **Inventory** app` |
| Text the reader types or copies, code, values | single backticks | ``enter `4` in the field`` |
| File names and paths | `:file:` | `:file:`redirects/20.0.txt`` |
| Commands | `:command:` | `:command:`make html`` |

Additional rules:

- Never use single backticks for UI element names.
- Keep trailing punctuation out of `:guilabel:`. Drop ellipses and end punctuation copied from UI
  strings: `:guilabel:`Add a line``, not `:guilabel:`Add a line...``.
- For toggles, format the field label, not the surrounding phrase:
  `go to the :guilabel:`eCommerce` field, and enable it.`

### Bold

Use bold only for:

- App names: the **Sales** app. Do **not** bold or format the word *Odoo*: `the Odoo **Phone** app`.
- Rare emphasis where the meaning changes: **not**, **never**, **only**.

### Italics

Besides the cases in the table, use italics for light emphasis and for terms used descriptively
(for example, a feature name that you mention but do not interact with).

### Menu paths

Follow the published guidelines for `:menuselection:`, with one difference.

**Override:** start the path with the app name followed by *app*:

```rst
Go to :menuselection:`Sales app --> Configuration --> Settings`.
```

### Checkboxes

Use *select* and *clear*, not *check*, *tick*, or *untick*.

### Screen location

- Do not use *left* or *right* (including *top-right*, *bottom-left*). They are reversed in
  right-to-left (RTL) languages.
- *Top* and *bottom* are acceptable: `in the top corner`, `at the bottom of the page`.
- If you need left or right to explain where something is, add an image instead.
- Prefer referencing the section, field, or label directly.

### Icons

To find an icon name, right-click the icon in Odoo, and select *Inspect*. The name is in the
`data-icon` attribute (for example, `data-icon="schedule"`).

- Use the Material Symbols name without a prefix (`schedule`, `settings`). Check that it is on the
  [Material Symbols subset](../content/developer/reference/user_interface/icons/material_symbols_odoo_subset.rst)
  page. Use `oi-*` or `os-*` only for icons that are not Material Symbols.
- Do not add new `fa-*` icons. The theme maps existing `fa-*` and `oi-*` names to Material Symbols
  in `extensions/odoo_theme/static/scss/icons_mappings/` (`_fa_to_ms.scss`, `_oi_to_ms.scss`).
- When you edit a page that uses an `fa-*` icon, look up its Material Symbols name in
  `_fa_to_ms.scss`, and compare that icon with the one in the UI:
  - If they match, replace the `fa-*` name with the Material Symbols name.
  - If they do not match (a mismapping), use the Material Symbols name that matches the UI.
  - If the `fa-*` name is not in the map, it renders with the old Font Awesome 4.7 font. The list
    of unmapped names is at the top of `_fa_to_ms.scss`. Find the matching Material Symbols name in
    the UI instead.
- Report a mismapping to the author in the handoff, so it can be fixed in the mapping file.

**Override:** write the icon, then the descriptor in `:guilabel:` with the parentheses **inside**
the `:guilabel:`, then the word *icon*.

✅ `:icon:`schedule` :guilabel:`(clock)` icon`
❌ `:icon:`bug_report` (:guilabel:`bug`) icon` (published format, parentheses outside)

---

## 6. Numbers and dates

Spell out:

- Ordinals (*first*, *fifth*).
- Zero through nine. Exceptions: version numbers, page numbers, prices.
- A number that starts a sentence.
- A number followed by a numeral: *fifteen 100,000-byte files* (but *15 of the 100,000-byte files*).
- Indefinite numbers (*thousands*, *millions*).

Use numerals for:

- 10 and greater (*40-hour week*).
- Negative numbers, most fractions, percentages, dimensions, measurements, and ranges.

Dates match the UI format. To avoid DD-MM/MM-DD confusion, write the month out when possible.

---

## 7. Abbreviations and substitutions

- Use `:abbr:` the first time an abbreviation appears. Abbreviations give keyword relevance to
  search engines and LLMs.
- Never use an abbreviation without the `:abbr:` markup, unless it is universal (HTML, URL, PDF).
- Use substitutions only for abbreviations or long text that saves real space, not to format a
  single word.

---

## 8. Links and anchors

### Internal links

Do not write vague back-references such as *earlier* or *above*. Link to the section with `:ref:`.

### Custom anchors

- Format: `app_name/file_name/custom-anchor`. Use hyphens in the last part.

  ```rst
  .. _inventory/use_locations/storage-locations:
  ```

- New anchors must follow this format. Do not rename existing anchors only to fix the format.
- **Override:** short pages do not need an anchor on every heading. Add anchors where a section is
  (or will likely be) linked.

### External links

- Link outside Odoo when the workflow depends on third-party configuration, when troubleshooting
  needs external content, or when the link reduces the support burden.
- Link titles for Odoo video tutorials use the format `Odoo Tutorials: <title>`:

  ```rst
  `Odoo Tutorials: Studio <https://www.odoo.com/slides/studio-31>`_
  ```

---

## 9. Admonitions (alert blocks)

### Choosing a type

| Directive | Use for |
|---|---|
| `.. note::` | Context or clarifying information. |
| `.. tip::` | Optional, useful advice. |
| `.. example::` | A scenario that illustrates the content. |
| `.. important::` | Only when skipping the information **breaks** something. Otherwise, use `note`. |
| `.. warning::` / `.. danger::` | Risk of data loss or serious problems. |
| `.. seealso::` | Related links (see below). |

### Placement and quantity

- Avoid two admonitions back to back when possible. `important` and `warning` share a color, so never
  stack those.
- **Never** place three admonitions back to back.
- **Never** nest admonitions.
- Do not place an admonition directly after a heading or directly next to an `example` block.
- Place an admonition next to the content it belongs to, not far below it.
- If an admonition applies to an image, place it before the image.
- If one inline sentence or a `:ref:` is enough, use that instead of an admonition. Admonitions add
  visual weight.

### See also

- Use `.. seealso::` only for related features, or for topics an earlier paragraph mentions without
  explaining.
- If the text already links to the page inline, do not repeat the link in a `seealso`.
- Keep it short: no introductory sentence, and use the link itself as the item (not "see this doc"
  followed by a link).

---

## 10. Version references

**Override:** avoid version references, as the published guidelines require. If the person asking
for the content insists on one, it must:

- Appear **only inside an admonition block**.
- Have a good reason, for example a major change that affects workflows and is not covered in the
  release notes.

Do not add version references for minor changes.

---

## 11. Images and screenshots

### When to use an image

- Use images for context, or to show what the UI looks like or what to click.
- Remove images that do not add information: very wide images, images that distort on small
  screens, images that do not show the element the text refers to, or images that repeat what an
  icon already makes clear.
- Avoid several images in a row with no text between them. If several images form one step, use a
  `figure` with a caption.

### Screenshot rules

These rules apply to **customer-facing** screenshots: images added to the documentation. Proof
screenshots that only go in a PR for reviewers are covered in `agents/pr_checklist.md` and do not
need to follow them.

- Take screenshots at **120% browser zoom**.
- Crop to the element the text refers to, with a small, even margin around it (about 16–24 px). Do
  not leave large empty areas, such as blank form space or empty columns. Before taking the
  screenshot, resize the browser window or columns so the content fills the frame.
- To highlight required fields without markups, save a blank record so the required labels turn red.
- **Override:** do not use `:align:` on images. Left alignment is the default.
- Use a `figure` with a caption to add context without markup.

### Alt text

- Every image needs `:alt:` text.
- **No formatting** in alt text: no `:guilabel:`, no backticks, no quotes.
- Field names in alt text match the UI capitalization.

  ✅ `:alt: The Storage Locations setting in Inventory settings.`
  ❌ `:alt: The :guilabel:`Storage Locations` setting.`
  ❌ `:alt: The "Storage Locations" setting.`

### Files

Follow the published guidelines for file names, media folders, and compression. `make test`
enforces the size limits (`tests/checkers/resource_files.py`).

---

## 12. RST mechanics

Follow the published RST guidelines. In addition, use the full line up to the 100-character limit.
Do not break lines early.

### Source substitutions

`conf.py` replaces these placeholders at build time. Use them instead of hard-coding a version or
a GitHub link that changes with each version:

| Placeholder | Becomes |
|---|---|
| `{BRANCH}` | The docs branch (for example, `20.0`) |
| `{CURRENT_VERSION}`, `{CURRENT_MAJOR_VERSION}` | The current version, and its major version |
| `{CURRENT_MAJOR_BRANCH}` | The branch of the current major version |
| `{GITHUB_PATH}` | A link to `odoo/odoo` at the current version |
| `{GITHUB_ENT_PATH}` | A link to `odoo/enterprise` at the current version |

---

## 13. Commits

Follow `commit_template.txt`. The US team uses these tags more narrowly:

- `[ADD]`: only when a new `.rst` file is added.
- `[IMP]`: improvements to existing files, including updates for UI changes.
- `[FIX]`: corrections of errors in the docs (not UI-change updates).
- `[REM]`, `[REF]`, `[MOV]`: removal, restructuring, move or rename.

---

## 14. Word list

| Use | Not |
|---|---|
| drop-down | dropdown |
| checkbox | check box |
| drag and drop | drag-and-drop |
| submenu | sub-menu |
| chatter | Chatter |
| pop-over | popover |
| quotation (to match the UI) | quote |
| click | click on |
| select / clear (checkboxes) | check / tick / untick |
| because (cause) | since |
| and, or | and/or |

---

## 15. Review checklist

Before you finish, check that the content:

- [ ] Uses numbered `#.` lists for procedures and `(optional)` for optional steps.
- [ ] Addresses the reader directly or uses the imperative, never "the user".
- [ ] Uses the present tense and puts conditions before instructions.
- [ ] Applies the `:guilabel:` decision rule (column titles: `:guilabel:`; tabs, windows,
      reports, and section titles: italics).
- [ ] Starts menu paths with the app name followed by *app* (`Sales app -->`).
- [ ] Bolds app names, and does not format *Odoo*.
- [ ] Formats icons as `:icon:` + `:guilabel:`(Tooltip)`` + *icon*, with no descriptor before
      button text.
- [ ] Has no *left*/*right* screen directions.
- [ ] Uses `:abbr:` plus substitutions for abbreviations.
- [ ] Has no more than two admonitions in a row, none nested, and no version references outside an
      admonition.
- [ ] Has field lists in UI order, with capitalized descriptions ending in a period.
- [ ] Has images without `:align:` or markups, with plain-text alt text, and no unused image files.
- [ ] Keeps the `.. meta::` description.
- [ ] Uses anchors in the `app_name/file_name/custom-anchor` format.
- [ ] Has lines that use the full 100 characters, and passes `make test`.
