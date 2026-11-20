# Odoo documentation style guide for LLMs

This file defines how to write and review Odoo user documentation in this repository. Follow it when
you draft, edit, or review any `.rst` file under `content/`.

## How to use this guide

- **Precedence:** this guide combines the US team style guide, the team's style decisions, and the
  published Belgian (BE) guidelines in `content/contributing/documentation/content_guidelines.rst`
  and `rst_guidelines.rst`. When the US rules and the BE guidelines conflict, **follow this guide**.
  When this guide is silent, follow the BE guidelines.
- **Overrides:** older Odoo docs, and the BE guidelines, contain patterns that this guide reverses.
  Do not copy a pattern from an existing page if it breaks a rule here. Rules marked
  **Override** replace an older rule that you may see in existing content.
- **Scope:** edit only what you are asked to edit. Existing content that breaks a rule (for example,
  old anchor names) does not need to be fixed unless the task asks for it. New content must follow
  every rule.

---

## 1. Page structure

- Organize content with the [Diátaxis](https://diataxis.fr/) framework (tutorials, how-to guides,
  reference, explanation). Do not force a fixed heading template on every page.
- Each file has **exactly one H1** (the page title).
- Start with a lead paragraph under the H1 that tells readers they found the right page. Explain the
  business purpose, not Odoo marketing.
- Keep the `.. meta::` `:description:` block at the top of the file. It is used for generative
  engine optimization (GEO) and LLM summaries. Never delete it, and never rewrite or tweak it in
  passing while editing other parts of the page.
- To add, fix, or regenerate a meta description, use the `rst-meta-description` skill from the
  [rst-meta-description-plugin](https://github.com/Felicious/odoo-tech-writer-team-skills/tree/master/plugins/rst-meta-description-plugin)
  (`/rst-meta-description-plugin:rst-meta-description`). Do not write the description by hand. If
  the skill is not installed, leave the description unchanged and tell the person you are working
  with that it needs an update.
- Avoid duplicating content. If a topic is documented elsewhere, link to it instead of repeating it.
  Duplicates increase maintenance.
- On a parent page, use a `toctree` for child pages, not a long `seealso` list. Write content on the
  parent page too, and use the `:show-content:` metadata to make it reachable.

### Headings

- Use sentence case. Capitalize only the first word, the first word after a colon, and proper nouns.
- **Exception (Override):** if a heading includes the name of a UI field, label, or window that
  uses title case, match the UI capitalization for that name. The rest of the heading stays in
  sentence case.

  ✅ `Scrap Products pop-up window` (*Scrap Products* is the pop-up's title in the UI)
  ❌ `Scrap products pop-up window`
  ❌ `Scrap Products Pop-Up Window`

  ALL-CAPS UI labels still become sentence case (see [Capitalization](#3-capitalization)).
- Keep headings concise. No full sentences, no questions, no headings that start with "How to".
- No pronouns in headings, especially *you/your*.
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

- Use the present tense by default.
- Avoid *will*. Use the future tense only for an event that happens later. If avoiding *will* forces
  awkward phrasing, use it.

  ✅ `The number of quotations is listed on the smart button.`
  ✅ `A message is sent that will notify all followers.` (later event)
  ❌ `The number of quotations will be listed on the smart button.`

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

### Spelling

Use American English spelling and grammar.

### Tone

Aim for professional and approachable, but accuracy and clarity come first.

---

## 3. Capitalization

- **Match the UI** for labels (fields, buttons, menus), even if the UI has a spelling or grammar
  error. (Writers report UI errors to R&D separately.)
- **Exception:** if a UI label is in ALL CAPS, convert it to sentence case.
- In headings, UI names keep their UI capitalization (see [Headings](#headings)).
- Do not capitalize common nouns unless you reference a UI label or a model directly.

  ✅ `bill of materials`, `sales order`
  ❌ `Bill of Materials` (in running text that does not reference the label)

- Do not capitalize conceptual terms in `example`, `note`, or other blocks just because they share a
  name with a UI field.
- Capitalize app names: **Sales** app, Odoo **Sales**.
- In lists, capitalize the first word after a colon (see [Lists](#4-lists)).

---

## 4. Lists

### Numbered lists for procedures

- **Override:** use numbered lists for procedural content (steps that must be done in order). Do not
  write procedural instructions as narrative paragraphs.
- Use auto-numbering with `#.`, not `1.`, `2.`.
- Group very simple, related actions in one step: `Go to :menuselection:`Website app --> Site -->
  Pages`, and click :guilabel:`New`.`
- Mark optional steps with a lowercase *optional* in parentheses at the start of the step:

  ```rst
  #. Click :guilabel:`New`.
  #. (optional) Add a :guilabel:`Description`.
  #. Click :guilabel:`Save`.
  ```

  ❌ `Optional: Add a description.` ❌ `**Optional:** Add a description.`
  ❌ `Add a description (optional).`

### Bulleted lists

Use bulleted lists when the order does not matter (features, options, fields).

### Field and option lists

When describing form fields or options, use a bulleted list of `label: description` items:

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

### Nested lists

Add a blank line before nested items, and align sub-items under the first character of the parent
item's text.

---

## 5. Formatting UI elements and text

### Decision rule

**If clicking it changes something on the screen, use `:guilabel:`.** This applies even when the
element is not visible on the current screen.

| Element | Format | Example |
|---|---|---|
| Buttons, fields, links, options, checkboxes, toggle labels, smart buttons | `:guilabel:` | `click :guilabel:`Save`` |
| **Tabs** (**Override:** no longer italic) | `:guilabel:` | `open the :guilabel:`Other Info` tab` |
| Column titles in a list or table view (clicking reorders the table) | `:guilabel:` | `the :guilabel:`Scheduled Date` column` |
| Page, window, pop-up, and pop-over titles | *italic* | `the *Create Invoice* pop-up window` |
| Reports | *italic* | `the *Replenishment* report` |
| Section titles on a form or settings page (**Override:** no longer `:guilabel:`) | *italic* | `scroll to the *Invoicing* section` |
| Odoo-specific terms used conceptually | plain text or *italic* | `a credit note`, never `:guilabel:` |
| Full navigation through real menus | `:menuselection:` | see [Menu paths](#menu-paths) |
| App names | **bold** | `the **Inventory** app` |
| Text the reader types or copies, code, values | single backticks | ``enter `4` in the field`` |
| File names and paths | `:file:` | `:file:`redirects/20.0.txt`` |
| Commands | `:command:` | `:command:`make html`` |

Additional rules:

- Never use single backticks for UI element names.
- Do not use `:guilabel:` for concepts or general terms.

  ✅ `To create a credit note, open the invoice, and click :guilabel:`Credit Note`.`
  ❌ `To create a :guilabel:`Credit Note`, open the :guilabel:`Invoice` ...`

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

- Use `:menuselection:` only for real menu navigation. Start with the app name. Write other
  navigation out in plain text with `:guilabel:`.

  ```rst
  Go to :menuselection:`Sales app --> Configuration --> Settings`.
  ```

- Do not include non-clickable menu **section** names in the path.
- Do not put buttons, tabs, or section titles inside `:menuselection:`.

### Checkboxes

Use *select* and *clear*, not *check*, *tick*, or *untick*.

### Screen location

- Do not use *left* or *right* (including *top-right*, *bottom-left*). They are reversed in
  right-to-left (RTL) languages.
- *Top* and *bottom* are acceptable: `in the top corner`, `at the bottom of the page`.
- If you need left or right to explain where something is, add an image instead.
- Prefer referencing the section, field, or label directly.

### Icons

Use the exact icon from the Odoo UI with the `:icon:` role. Icon sets: Material Symbols (no prefix,
for example `area_chart`), Odoo UI (`oi-*`), Odoo Spreadsheet (`os-*`), FontAwesome 4 (`fa-*`). To
find an icon name, right-click the icon in Odoo, and select *Inspect*.

- **Format:** icon, then the descriptor in `:guilabel:` with the parentheses **inside** the
  `:guilabel:`, then the word *icon*.

  ✅ `:icon:`fa-clock-o` :guilabel:`(clock)` icon`
  ❌ `:icon:`fa-bug` (:guilabel:`bug`) icon` (BE format, parentheses outside)

- **Descriptor text:** if the icon has a tooltip (shown on hover), always use the tooltip text. If it
  has no tooltip, use the icon's name.

  ✅ `Switch to the :icon:`fa-area-chart` :guilabel:`(Graph)` view.`

- **No descriptor** when the icon is directly followed by its button text (common on smart buttons
  and action buttons):

  ✅ `:icon:`fa-print` :guilabel:`Print``
  ✅ `:icon:`fa-cog` :guilabel:`Actions``

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

  ```rst
  Odoo uses :abbr:`OCR (optical character recognition)` to read documents.
  ```

- Never use an abbreviation without the `:abbr:` markup, unless it is universal (HTML, URL, PDF).
- For recurring abbreviations, define a substitution near the top of the file and use it instead of
  rewriting the `:abbr:` markup:

  ```rst
  .. |SDD| replace:: :abbr:`SDD (SEPA Direct Debit)`

  Payments made with the |SDD| payment method ...
  ```

- Use substitutions only for abbreviations or long text that saves real space, not to format a
  single word.

---

## 8. Links and anchors

### Internal links

- Link to existing content instead of repeating it.
- Use `:doc:` with **relative** paths for pages, and `:ref:` for sections.
- Use descriptive link labels. Never "click here" or "see this page".

  ✅ `Refer to the :doc:`Accounting documentation <../../finance/accounting>`.`
  ❌ `Refer to :doc:`this page <../../finance/accounting>`.`

- Do not write vague back-references such as *earlier* or *above*. Link to the section with `:ref:`.

### Custom anchors

- Format: `app_name/file_name/custom-anchor`. Use hyphens in the last part.

  ```rst
  .. _inventory/use_locations/storage-locations:
  ```

- New anchors must follow this format. Do not rename existing anchors only to fix the format.
- **Override:** short pages do not need an anchor on every heading. Add anchors where a section is
  (or will likely be) linked.
- When you change headings or anchors, do not break existing references.

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

- **Avoid** mentioning Odoo versions or comparing them with earlier versions. Document features as
  they exist in the version of the docs you are writing.
- If the person asking for the content insists on a version reference, it must:
  - Appear **only inside an admonition block**.
  - Have a good reason, for example a major change that affects workflows and is not covered in the
    release notes.
- Do not add version references for minor changes.

---

## 11. Images and screenshots

### When to use an image

- Use images for context, or to show what the UI looks like or what to click.
- Text must be complete without the image. The body text must not depend on what the image shows.
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
- Keep images within roughly 768–933 px wide; avoid full-screen screenshots.
- **No markups** (no boxes, arrows, or highlights) on screenshots. To highlight required fields,
  save a blank record so the required labels turn red.
- **Do not use `:align:`** on images. Left alignment is the default.
- Use a `figure` with a caption to add context without markup.

### Alt text

- Every image needs `:alt:` text.
- Keep it short (one line), descriptive of the image it is attached to, and easy to understand when
  read aloud. Do not repeat a nearby sentence or title.
- **No formatting** in alt text: no `:guilabel:`, no backticks, no quotes.
- Field names in alt text match the UI capitalization.

  ✅ `:alt: The Storage Locations setting in Inventory settings.`
  ❌ `:alt: The :guilabel:`Storage Locations` setting.`
  ❌ `:alt: The "Storage Locations" setting.`

### Files

- PNG: compress with `pngquant` to 8-bit color, and keep it ≤ 505 KB. GIF: ≤ 2.1 MB.
- File names: lowercase, descriptive, words separated by hyphens (`create-invoice.png`). No
  underscores.
- Store media in a folder with the same name as the `.rst` file (`use_locations.rst` →
  `use_locations/`).
- Delete images that are no longer referenced. Run `make review` to find them.
- Do not rename unchanged legacy images; renaming doubles their weight in the repository.

---

## 12. RST mechanics

- **Headings:** the H1 has `=` above and below. Lower levels use an underline only, in this order:
  `=`, `-`, `~`, `*`, `^`. The underline has the same length as the heading text.

  ```rst
  ==========
  Page title
  ==========

  Section
  =======

  Subsection
  ----------
  ```

- **Line length:** break lines before the 100th character, and use the full line. Do not break lines
  early. No trailing whitespace. Long external URLs can exceed the limit.
- **Indentation:** spaces only. Align with the first character of the markup above: usually three
  spaces for directives, two for bulleted list continuations.
- Add a blank line between block elements (paragraphs, lists, directives).
- **Page metadata** goes before the H1: `:show-content:`, `:show-toc:`, `:hide-page-toc:`,
  `:nosearch:`, `:orphan:`.
- **Tabs:** `.. tabs::` cannot contain headings or custom anchors, and admonitions cannot contain
  tabs.
- **Moved or deleted files:** add a redirect rule to `redirects/<version>.txt`
  (`old/path.rst new/path.rst`), sorted alphabetically within its block.
- Run `make test` before opening a PR.

---

## 13. Commits

Format: `[TAG] scope: short description` (completes "If merged, this commit will...").

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
- [ ] Applies the `:guilabel:` decision rule (tabs and column titles: `:guilabel:`; windows,
      reports, and section titles: italics).
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
