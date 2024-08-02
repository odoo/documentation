==================
Content guidelines
==================

While we encourage you to adopt your own writing style, some rules still apply to maintain clarity
and ensure readers can easily understand the content.

.. important::
   We strongly recommend to read the :doc:`rst_guidelines` and the main :doc:`../documentation`
   pages before contributing.

.. _contributing/content/organization:

Documentation organization
==========================

When writing documentation about a given topic, keep pages within the same folder organized.

For most topics, a single page should do the job. Place it in the appropriate section of the
documentation (e.g., content related to the CRM app goes under :menuselection:`User Docs --> Sales
--> CRM`) and follow the :ref:`document structure <contributing/content/structure>` guidelines.

For more complex topics, several pages may be needed to cover all their aspects. Usually, you will
find yourself adding documentation to a topic that is already partially covered. In that case,
either create a new page and place it at the same level as other related pages or add new sections
to an existing page. When documenting a complex topic from scratch, organize the content across
several child pages that are referenced on that directory's parent page (the :abbr:`TOC (Table Of
Contents)` page); whenever possible, write content on the parent page and not only on the child
pages. Make the parent page accessible from the navigation menu by using the
:ref:`show-content <contributing/rst/document-metadata>` metadata directive.

.. note::
   Avoid duplicating content whenever possible; if a topic is already documented on another page,
   :ref:`reference <contributing/rst/hyperlinks>` that existing information instead of repeating it.

.. important::
   When deleting or moving a `.rst` file, update the corresponding text file in the
   :file:`redirects` folder based on your branch's version (e.g., :file:`17.0.txt`). To do so, add a
   new line at the bottom of the relevant section (e.g., `# applications/sales`). On this line,
   first, add the redirection entry point with the old file location, followed by a space, and then
   add the exit point with the new or relevant file location. For example, if moving the file
   :file:`unsplash.rst` from :file:`applications/websites/website/configuration` to
   :file:`applications/general/integrations`, add the following entry under the section
   `# applications/websites`:

   .. code-block:: text

      applications/websites/website/configuration/unsplash.rst applications/general/integrations/unsplash.rst

.. _contributing/content/structure:

Document structure
==================

Use different **heading levels** to organize text by sections and sub-sections. Headings are not
only displayed in the document but also on the navigation menu (only the H1) and on the "On this
page" sidebar (all H2 to H6).

+---------------------------------------------------------------------------------------+
| | **H1: Page title**                                                                  |
| | The *page title* gives readers a quick and clear understanding of what the content  |
|   is about.                                                                           |
|                                                                                       |
| The *content* in this section describes the upcoming content from a **business point  |
| of view**, and should not put the emphasis on Odoo, as this is documentation and not  |
| marketing.                                                                            |
|                                                                                       |
| Under the page title (H1), start with a **lead paragraph**, which helps the reader    |
| make sure that they've found the right page, then explain the **business aspects of   |
| this topic** in the following paragraphs.                                             |
+-----+---------------------------------------------------------------------------------+
|     | | **H2: Section title (configuration)**                                         |
|     | | This first H2 section is about the configuration of the feature, or the       |
|     |   prerequisites to achieve a specific goal.                                     |
+-----+---------------------------------------------------------------------------------+
|     | | **H2: Section title (main sections)**                                         |
|     | | Create as many main sections as you have actions or features to distinguish.  |
+-----+-----+---------------------------------------------------------------------------+
|     |     | | **H3: Subsection**                                                      |
|     |     | | Subsections are perfect for assessing very specific points.             |
+-----+-----+---------------------------------------------------------------------------+
|     | **H2: Next Section**                                                            |
+-----+---------------------------------------------------------------------------------+

To write good titles and headings:

- **Be concise**: **avoid sentences**, questions, and titles starting with "how to".
- **Do not use pronouns** in your titles, especially 2nd person (*you/your*).
- Use **sentence case**. This means you capitalize only:

  - the first word of the title or heading;
  - the first word after a colon;
  - proper nouns (brands, product and service names, etc.).

.. note::
   - Most titles and headings generally refer to a concept and do *not* represent the name of a
     feature or a model.
   - Do not capitalize the words of an acronym if they do not entail a proper noun.
   - Verbs in headings are fine since they often describe an action.

.. seealso::
   - :ref:`RST cheat sheet: headings <contributing/rst/headings>`
   - :ref:`RST cheat sheet: markups <contributing/rst/markups>`

.. _contributing/content/writing-style:

Writing style
=============

Writing for documentation is not the same as writing for a blog or another medium. Readers are
more likely to skim through content to find the information they need. Keep in mind that the
documentation is a place to **inform and describe**, not to convince and promote.

.. tip::
   Avoid using *you* as much as possible by opting for the imperative mood where appropriate.
   However, do not complicate sentences just to avoid addressing the reader directly.

   .. example::
      | **Good example:**
      | Select the appropriate option from the dropdown menu.

      | **Bad example:**
      | You can select the appropriate option from the dropdown menu.

.. _contributing/content/spelling:

Spelling
--------

Use American English spelling and grammar throughout the documentation.

.. _contributing/content/consistency:

Consistency
-----------

*Consistency is key to everything.*

Make sure that the writing style remains **consistent**. When modifying existing content, try to
match the existing tone and presentation or rewrite it to match your own style.

.. _contributing/content/capitalization:

Capitalization
--------------

- Use sentence case in :ref:`titles <contributing/content/structure>`.
- Capitalize app names, e.g., **Odoo Sales**, the **Sales** app, etc.
- Capitalize labels (such as fields and buttons) as they appear in Odoo. If a label is in all caps,
  convert it to sentence case.
- Capitalize the first letter after a colon if it is a complete sentence.
- Avoid capitalizing common nouns, such as "sales order" and "bill of materials", unless you
  reference a label or a model.

.. _contributing/content/grammatical-tenses:

Grammatical tenses
------------------

In English, descriptions and instructions usually require the use of the **present tense**, while
the *future tense* is appropriate only when a specific event is to happen ulteriorly.

.. example::

  | **Good example (present):**
  | Screenshots are automatically resized to fit the content block's width.

  | **Bad example (future):**
  | When you take a screenshot, remember that it will be automatically resized to fit the content
    block's width.

.. _contributing/content/lists:

Lists
=====

Lists help organize information in a clear and concise manner and improve readability. They are
used to highlight important details, guide the reader through steps in a systematic way, etc.

Use numbered lists when the sequence matters, e.g., instructions, procedures, or steps that must be
performed in a particular order.

Use bulleted lists when the sequence of items does not matter, e.g., lists of features, fields,
options, etc.

.. tip::
   - Use inline text for explanations or when there are three or fewer list items.
   - Combine bulleted and numbered lists using :ref:`nested lists <contributing/rst/nested-list>`
     where appropriate.
   - Consider grouping simple steps within the same list item, e.g.: Go to :menuselection:`Website
     --> Site --> Pages` and click :guilabel:`New`.
   - Only use a period at the end of the list item if it forms a complete sentence.

.. example::
   **Bulleted list**

   The following fields are available on the :guilabel:`Replenishment` report:

   - :guilabel:`Product`: the product that requires a replenishment
   - :guilabel:`Location`: the specific location where the product is stored
   - :guilabel:`Warehouse`: the warehouse where the product is stored
   - :guilabel:`On Hand`: the amount of product currently available

   **Numbered list**

   To create a new website page, proceed as follows:

   #. - Either open the **Website** app, click :guilabel:`+ New` in the top-right corner, then
        select :guilabel:`Page`;
      - Or go to :menuselection:`Website --> Site --> Pages` and click :guilabel:`New`.

   #. Enter a :guilabel:`Page Title`; this title is used in the menu and the page's URL.
   #. Click :guilabel:`Create`.
   #. Customize the page's content and appearance using the website builder, then click
      :guilabel:`Save`.

.. seealso::
   :ref:`RST cheat sheet: lists <contributing/rst/lists>`

Icons
=====

Use :ref:`icons <contributing/rst/icons>` in instructions to help readers identify user interface
elements and reduce the need for lengthy explanations. Accompany every icon with a descriptor
in brackets.

.. example::
   Once the developer mode is activated, the developer tools can be accessed by clicking the
   :icon:`fa-bug` (:guilabel:`bug`) icon.

.. seealso::
   :ref:`RST cheat sheet: icons <contributing/rst/icons>`

.. _contributing/content/images:

Images
======

Adding a few images to illustrate text helps the readers understand and memorize the content.
However, images should never replace text: written instructions should be complete and clear on
their own, without relying on visual aids. Use images sparingly, for example, to highlight a
particular point or clarify an example.

.. important::
   Do not forget to `compress your PNG files with pngquant <https://pngquant.org>`_.

.. _contributing/content/screenshots:

Screenshots
-----------

Screenshots are automatically resized to fit the content block's width. This implies that if they
are too wide, they are not readable on lower-resolution screens. We recommend avoiding full-screen
screenshots of the app unless absolutely necessary and making sure images are no wider than a range
of 768-933 pixels.

Here are a few tips to improve your screenshots:

#. **Resize** your browser's width, either by *resizing the window* itself or by opening the
   *browser's developer tools* and resizing the width.
#. **Select** the relevant area rather than keeping the entire window.
#. **Remove** unnecessary information and **resize** columns when applicable.

.. important::
   Do not use markups such as rectangles or arrows on screenshots. Instead, crop the image to
   highlight the most relevant information, and ensure that text instructions are clear and
   self-explanatory without relying on images.

.. example::
   **Good example (resized browser, no unnecessary columns, adjusted columns' width, cropped):**

   .. image:: content_guidelines/quotations-list-reduced.png
      :alt: Cropped screenshot

   **Bad example (full-width screenshot):**

   .. image:: content_guidelines/quotations-list-full.png
      :alt: Full-width screenshot

.. _contributing/content/media-files:

Media files
-----------

A **media filename**:

- is written in **lower-case letters**;
- is **relevant** to the media's content. (e.g., :file:`screenshot-tips.gif`);
- separates its words with a **hyphen** `-` (e.g., :file:`awesome-filename.png`).

Each RST file has its own folder for storing media files. The folder's name must be the same as the
RST file's name.

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
   placed in a single :file:`media` folder. While it is advised not to name your *new* images in
   that fashion, it is also essential **not to rename unchanged files**, as doing this would double
   the weight of renamed image files on the repository. They will eventually all be replaced as the
   content referencing those images is updated.

.. _contributing/content/alt-tags:

ALT tags
--------

An **ALT tag** is a *text alternative* to an image. This text is displayed if the browser fails to
render the image. It is also helpful for users who are visually impaired. Finally, it helps
search engines, such as Google, to understand what the image is about and index it correctly, which
improves :abbr:`SEO (Search Engine Optimization)`.

Good ALT tags are:

- **Short** (one line maximum);
- **Not a repetition** of a previous sentence or title;
- A **good description** of the action happening in the image;
- Easily **understandable** if read aloud.

.. example::

   An appropriate ALT tag for the following screenshot would be *Activating the developer mode in
   the Settings app*.

   .. image:: content_guidelines/settings.png
      :alt: Activating the developer mode in the Settings app

.. seealso::
   :ref:`RST cheat sheet: images <contributing/rst/images>`
