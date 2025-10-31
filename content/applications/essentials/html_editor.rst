.. _text-editor:

=====================
Odoo rich-text editor
=====================

The Odoo rich-text editor allows for creating and editing rich-text content in HTML fields, such as
the :guilabel:`Internal Notes` and :guilabel:`Description` fields, as well as in the :ref:`Knowledge
articles <knowledge/articles_editing/edit-article>` and the :ref:`Studio report editor
<studio/pdf-reports/report-editor>`, among others. Start typing or use the :ref:`toolbar
<essentials/html_editor/toolbar>` or :ref:`powerbox <essentials/html_editor/commands>` for
formatting and structuring text.

.. tip::
   Hover over any element in the text (header, table, clipboard, etc.) to reveal the
   :icon:`fa-sort` :guilabel:`(drag)` icon. Click and hold the icon to drag and drop the element
   elsewhere in the text.

.. _essentials/html_editor/toolbar:

Text editor toolbar
===================

To edit a word, sentence, or paragraph, select or double-click it to display the text editor
toolbar and apply any of the following formatting options:

- **Font style**: Define the font style using various options, such as :guilabel:`Header 1 to 6,
  Normal, Paragraph, Code`, and :guilabel:`Quote`.
- **Font family**: Use the :guilabel:`Default system font` or select a preferred font family for
  the text.
- **Font size**: Select the preferred font size.
- :guilabel:`B`: Put the text in bold.
- :guilabel:`I`: Put the text in italics.
- :guilabel:`U`: Underline the text.
- :guilabel:`S`: Strike through the text.
- :guilabel:`A` and :icon:`fa-paint-brush` :guilabel:`(paintbrush)` to customize the font and
  background colors, respectively:

  - :guilabel:`Solid`: Select the preferred color from the predefined palette.
  - :guilabel:`Custom`: Customize the color palette using the wheel or by configuring the
    :guilabel:`hex` code and :guilabel:`RGBA` values.
  - :guilabel:`Gradient`: Select a predefined gradient or customize it by choosing
    between :guilabel:`Linear` or :guilabel:`Radial` and adjusting the wheel.

- :icon:`fa-eraser` (:guilabel:`Remove Format`): Remove all formatting applied to a selected text.
- :icon:`fa-list-ul` (:guilabel:`Bulleted list`): Turn the text into a bulleted list.
- :icon:`fa-list-ol` (:guilabel:`Numbered list`): Turn the text into a numbered list.
- :icon:`fa-check-square-o` (:guilabel:`Checklist`): Turn the text into a checklist.
- :icon:`fa-link` (:guilabel:`Add a link`): Insert or edit a URL link to a selected text, and
  optionally upload an image using its file URL.
- :guilabel:`Translate with AI`: Translate the content in the :doc:`installed languages
  </applications/general/users/language>` with AI.
- :guilabel:`Odoo AI`: Write a prompt and get AI-generated content. Optionally, click the
  AI suggestions instead of writing a prompt.

.. image:: html_editor/style-and-colors.png
   :alt: Text editor's toolbox


.. tip::
   Use the following keyboard shortcuts to apply formatting:
      - **Emphasis**: Press `CTRL`/`CMD` + `B`, `CTRL`/`CMD` + `I`, or `CTRL`/`CMD` + `U` to apply
        the bold, italics, or underlined effect.
      - **Numbered list**: Type `1.`, `1)`, `A.`, or `A)` to start a numbered list.
      - **Bulleted list**: Type `*` or `-` to start a bulleted list.

.. _essentials/html_editor/commands:

Powerbox commands
=================

Commands enable editing and managing various types of features within the text, such as tables,
banners, headers, and more.

To use a command, type `/` to open the powerbox, then enter the command's name or select from
multiple features to insert tables, images, banners, etc.

.. tip::
   Starting a new paragraph displays a tooltip with command shortcut icons. Click an icon to add
   the command, or click the :icon:`fa-ellipsis-v` (:guilabel:`ellipsis`) icon to open the
   powerbox for all commands.

.. note::
   Commands specific to particular apps are excluded from this description.

.. tabs::
   .. tab:: Structure

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Separator`
           - Insert a horizontal rule separator.
         * - :guilabel:`2 columns`
           - Convert into 2 columns.
         * - :guilabel:`3 columns`
           - Convert into 3 columns.
         * - :guilabel:`4 columns`
           - Convert into 4 columns.
         * - :guilabel:`Table`
           - Insert a table.
         * - :guilabel:`Bulleted list`
           - Create a bulleted list.
         * - :guilabel:`Numbered list`
           - Create a numbered list.
         * - :guilabel:`Checklist`
           - Create a checklist.
         * - :guilabel:`Toggle list`
           - Hide a group of text under a foldable toggle.

      .. note::
         To organize a table, hover over a column or row to reveal the table menu. Click the
         :icon:`fa-ellipsis-h` :guilabel:`(ellipsis)` icon to move, insert, or delete a column or
         row.

   .. tab:: Banner

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Banner Info`
           - Insert an info banner.
         * - :guilabel:`Banner Success`
           - Insert a success banner.
         * - :guilabel:`Banner Warning`
           - Insert a warning banner.
         * - :guilabel:`Banner Danger`
           - Insert a danger banner.

   .. tab:: Format

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Heading 1`
           - Big section heading.
         * - :guilabel:`Heading 2`
           - Medium section heading.
         * - :guilabel:`Heading 3`
           - Small section heading.
         * - :guilabel:`Text`
           - Paragraph block: Insert a paragraph.
         * - :guilabel:`Switch direction`
           - Switch the text's direction.
         * - :guilabel:`Quote`
           - Add a blockquote section.
         * - :guilabel:`Code`
           - Add a code section.

   .. tab:: Media

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Media`
           - :ref:`Insert an image <insert-media>` or icon: :doc:`Search the Unsplash database
             </applications/general/integrations/unsplash>` or upload images, documents, or icons.
         * - :guilabel:`Upload a file`
           - Add a download box: share images, recordings, or documents that internal users can
             download.

   .. tab:: Navigation

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Link`
           - Add a link: Type the label and enter a URL or upload a file, then click
             :guilabel:`Apply`.
         * - :guilabel:`Button`
           - Add a button: Type the label,git  enter a URL or upload a file, select the button style,
             type, and size, then click :guilabel:`Apply`.
         * - :guilabel:`Table Of Contents`
           - Highlight the structure (headings): Create a table of content based on the headings.

   .. tab:: Widget

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Emoji`
           - Add an emoji: search for the desired emoji.
         * - :guilabel:`3 Stars`
           - Insert a rating of up to 3 stars.
         * - :guilabel:`5 Stars`
           - Insert a rating of up to 5 stars.


.. _insert-media:

Insert media
------------

To insert media, type `/Media` or click the :icon:`fa-file-image-o` :guilabel:`(media)` icon in the
tooltip, then choose from the following tabs:

- :guilabel:`Images`

   - Search the :doc:`Unsplash </applications/general/integrations/unsplash>` database to find a
     suitable image.
   - :guilabel:`Add URL`: Copy-paste the **image address**.
   - :guilabel:`Upload an image`: Upload an image into the library.

- :guilabel:`Documents`

   - Search for a document in the database.
   - :guilabel:`Add URL`: Copy-paste a valid URL.
   - :guilabel:`Upload a document`: Upload a document from a local drive.

- :guilabel:`Icons`: Search for an icon in the database selection.
- :guilabel:`Videos`: Paste a video URL of the following sources: YouTube, Vimeo, Dailymotion, and
  Youku. Alternatively, type code to embed a video.

Media editor toolbar
~~~~~~~~~~~~~~~~~~~~

After :ref:`inserting an image <insert-media>`, click it to display the media editor toolbar, and
apply any of the following formatting options:

- :icon:`fa-search-plus` (:guilabel:`Preview`): Preview the image, zoom in or out, rotate it, print
  it, or download it. Exit the preview by clicking the :icon:`fa-times` :guilabel:`(close)` icon in
  the top right corner.
- :guilabel:`Description`: Edit the image description and tooltip, then click :guilabel:`Apply`.
- :guilabel:`Caption`: Write a caption under 100 characters below the image.
- :icon:`fa-square` (:guilabel:`Rounded`): Apply a rounded shape to the corners of the image.
- :icon:`fa-circle-o` (:guilabel:`Circle`): Apply a circular shape to the image.
- :icon:`fa-sun-o` (:guilabel:`Shadow`): Apply a shadow effect to the image.
- :icon:`fa-picture-o` (:guilabel:`Thumbnail`): Apply a border to the image.
- :icon:`fa-plus-square-o` (:guilabel:`Padding`): Add an image padding and choose from
  :guilabel:`Small`, :guilabel:`Medium`, :guilabel:`Large`, or :guilabel:`XL` sizes.
- :guilabel:`Resize`: Restore the image to its default size or set its size to :guilabel:`25%`,
  :guilabel:`50%`, or :guilabel:`100%`.
- :icon:`fa-object-ungroup` (:guilabel:`object`): Resize and rotate the image. Click the
  :icon:`fa-object-ungroup` :guilabel:`(object)` icon a second time to reset the transformation.
- :icon:`fa-crop` (:guilabel:`Crop image`): Crop the image manually or apply the following options:

   - Choose from the `Flexible`, `16:9`, `4:3`, `1:1`, or `2:3` aspect ratios.
   - Zoom in or out.
   - Rotate left or right.
   - Flip horizontally or vertically.
   - Reset the image.

- :icon:`fa-link` (:guilabel:`Add a link`): Add a link to the image, type the URL, then click
  :guilabel:`Apply`. To remove the link, click :icon:`fa-unlink` (:guilabel:`Remove Link`).
- :icon:`fa-exchange` (:guilabel:`Replace`): Replace the image by searching in the :doc:`Unsplash
  </applications/general/integrations/unsplash>` database, adding a URL, or uploading a different
  one.
- :icon:`fa-trash` (:guilabel:`Delete`): Delete the image.
