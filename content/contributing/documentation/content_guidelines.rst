==================
Content guidelines
==================

To give the community the best documentation possible, we listed here a few guidelines, tips and
tricks that will make your content shine at its brightest! While we encourage you to adopt your own
writing style, some rules still apply to give the reader more clarity and comprehension.

.. note::
   We strongly recommend contributors to carefully read the other documents related to this section
   of the documentation. Good knowledge of the ins and outs of **RST writing** is required to write
   and submit your contribution. Note that it also affects your writing style itself.

   - :doc:`../documentation`
   - :doc:`rst_cheat_sheet`
   - :doc:`rst_guidelines`

.. _contributing/writing-style:

Writing style
=============

**Writing for documentation** isn't the same as writing for a blog or another medium. Readers are
more likely to skim read until they've found the information they are looking for. Keep in mind that
the user documentation is a place to inform and describe, not to convince and promote.

.. _contributing/consistency:

Consistency
-----------

*Consistency is key to everything.*

Make sure that your writing style remains **consistent**. If you modify an existing text, try to
match the existing tone and presentation, or rewrite it to match your own style.

.. _contributing/grammatical-tenses:

Grammatical tenses
------------------

In English, descriptions and instructions require the use of a **Present Tense**, while a *future
tense* is appropriate only when a specific event is to happen ulteriorly. This logic might be
different in other languages.

- | Good example (present):
  | *Screenshots are automatically resized to fit the content block's width.*
- | Bad example (future):
  | *When you take a screenshot, remember that it will be automatically resized to fit the content
     block's width.*

.. _contributing/paragraphing:

Paragraphing
------------

A paragraph comprises several sentences that are linked by a shared idea. They usually are two to
six lines long.

In English, a new idea implies a new paragraph, rather than having a *line break* as it is common to
do in some other languages. *Line breaks* are useful for layout purposes but shouldn't be used as a
grammatical way of separating ideas.

.. seealso::
   - :ref:`RST cheat sheet: Break the line but not the paragraph <contributing/line-break>`

.. _contributing/titles:

Titles and headings
-------------------

To write good titles and headings:

- **Be concise.**

  - **Avoid sentences**, unnecessary verbs, questions, and titles starting with "how to."

- **Don't use pronouns** in your titles, especially 2nd person (*your*).
- Use **sentence case**. This means you capitalize only:

  - the first word of the title or heading
  - the first word after a colon
  - proper nouns (brands, product and service names, etc.)

.. note::
   - Most titles and headings generally refer to a concept and do *not* represent the name of a
     feature or a model.
   - Do not capitalize the words of an acronym if they don't entail a proper noun.
   - Verbs in headings are fine since they often describe an action.

.. example::
   - **Titles** (H1)

     - Quotation templates
     - Lead mining
     - Resupply from another warehouse
     - Synchronize Google Calendar with Odoo
     - Batch payments: SEPA Direct Debit (SDD)
     - Digitize vendor bills with optical character recognition (OCR)

   - **Headings** (H2, H3)

     - Project stages
     - Email alias
     - Confirm the quotation
     - Generate SEPA Direct Debit XML files to submit payments

.. _contributing/document-structure:

Document structure
==================

Use different **heading levels** to organize your text by sections and sub-sections. Your headings
are not only displayed in the document but also on the navigation menu (only the H1) and on the
"On this page" sidebar (all H2 to H6).

+---------------------------------------------------------------------------------------+
| | **H1: Page title**                                                                  |
| | Your *page title* gives your reader a quick and clear understanding of what your    |
|   content is about.                                                                   |
|                                                                                       |
| The *content* in this section describes the upcoming content from a **business point  |
| of view**, and shouldn't put the emphasis on Odoo, as this is documentation and not   |
| marketing.                                                                            |
|                                                                                       |
| Start first with a **lead paragraph**, which helps the reader make sure that they've  |
| found the right page, then explain the **business aspects of this topic** in the      |
| following paragraphs.                                                                 |
+-----+---------------------------------------------------------------------------------+
|     | | **H2: Section title (configuration)**                                         |
|     | | This first H2 section is about the configuration of the feature, or the       |
|     |   prerequisites to achieve a specific goal. To add a path, make sure you        |
|     |   use the ``:menuselection:`` specialized directive (see link below).           |
|     |                                                                                 |
|     | | Example:                                                                      |
|     | | To do so, go to ``:menuselection:`App name --> Menu --> Sub-menu```, and      |
|     |   enable the XYZ feature.                                                       |
+-----+---------------------------------------------------------------------------------+
|     | | **H2: Section title (main sections)**                                         |
|     | | Create as many main sections as you have actions or features to distinguish.  |
|     |   The title can start with a verb, but try to avoid using "Create ...".         |
+-----+-----+---------------------------------------------------------------------------+
|     |     | | **H3: Subsection**                                                      |
|     |     | | Subsections are perfect for assessing very specific points. The title   |
|     |     |   can be in the form of a question, if appropriate.                       |
+-----+-----+---------------------------------------------------------------------------+
|     | **H2: Next Section**                                                            |
+-----+---------------------------------------------------------------------------------+

.. seealso::
   - :ref:`RST cheat sheet: headings <contributing/headings>`
   - :ref:`RST cheat sheet: markups <contributing/markups>`

.. _contributing/organizing-documentation:

Organizing the documentation
============================

When writing documentation about a given topic, try to keep pages within the same folder organized.

For most topics, a single page should do the job. Place it in the appropriate section of the
documentation (e.g., content related to the CRM app go under :menuselection:`Applications
-> Sales -> CRM`) and follow the :ref:`document structure <contributing/document-structure>`
guidelines.

For more complex topics, you may need several pages to cover all their aspects. Usually, you will
find yourself adding documentation to a topic that is already partially covered. In that case,
either create a new page and place it at the same level as other related pages or add new sections
to an existing page. If you are documenting a complex topic from scratch, organize your content
between one parent page (the :abbr:`TOC (Tree Of Contents)` page) and several child pages. Whenever
possible, write content on the parent page and not only on the child pages. Make the parent page
accessible from the navigation menu by using the :ref:`show-content
<contributing/document-metadata>` metadata directive.

.. _contributing/content-images:

Images
======

Adding a few images to illustrate your text helps the readers to understand and memorize your
content. However, avoid adding too many images: it isn't necessary to illustrate all steps and
features, and it may overload your page.

.. important::
   Don't forget to :ref:`compress your PNG files with pngquant
   <contributing/documentation/first-contribution>`.

.. _contributing/screenshots:

Screenshots
-----------

Screenshots are automatically resized to fit the content block's width. This implies that
screenshots can't be too wide, else they would appear very small on-screen. Therefore, we recommend
to avoid to take screenshots of a full screen display of the app, unless it is relevant to do so.

A few tips to improve your screenshots:

#. **Zoom** in your browser. We recommend a 110% zoom for better results.
#. **Resize** your browser's width, either by *resizing the window* itself or by opening the
   *browser's developer tools* (press the ``F12`` key) and resizing the width.
#. **Select** the relevant area, rather than keeping the full window.
#. If necessary, you can **edit** the screenshot to remove unnecessary fields and to narrow even
   more Odoo's display.

.. image:: content_guidelines/screenshot-tips.gif
   :align: center
   :alt: Three tips to take good screenshots for the Odoo documentation.

.. note::
   Resizing the window's width is the most important step to do as Odoo's responsive design
   automatically resizes all fields to match the window's width.

.. _contributing/media-files:

Media files
-----------

A **media filename**:

- is written in **lower-case letters**
- is **relevant** to the media's content. (E.g., :file:`screenshot-tips.gif`.)
- separates its words with a **hyphen** ``-`` (E.g., :file:`awesome-filename.png`.)

Each document has its own folder in which the media files are located. The folder's name must be the
same as the document's filename.

For example, the document :file:`doc_filename.rst` refers to two images that are placed in the
folder ``doc_filename``.

::

  ├── section
  │   └── doc_filename
  │   │   └── screenshot-tips.gif
  │   │   └── awesome-filename.png
  │   └── doc_filename.rst

.. note::
   Previously, image filenames would mostly be named with numbers (e.g., :file:`feature01.png`) and
   placed in a single ``media`` folder. While it is advised not to name your *new* images in that
   fashion, it is also essential **not to rename unchanged files**, as doing this would double the
   weight of renamed image files on the repository. They will eventually all be replaced as the
   content referencing those images is updated.

.. _contributing/alt-tags:

ALT tags
--------

An **ALT tag** is a *text alternative* to an image. This text is displayed if the browser fails to
render the image. It is also helpful for users who are visually impaired. Finally, it helps
search engines, such as Google, to understand what the image is about and index it correctly, which
improves the :abbr:`SEO (Search Engine Optimization)` significantly.

Good ALT tags are:

- **Short** (one line maximum)
- **Not a repetition** of a previous sentence or title
- A **good description** of the action happening on the image
- Easily **understandable** if read aloud

.. seealso::
   - :ref:`RST cheat sheet: image directive <contributing/image>`
