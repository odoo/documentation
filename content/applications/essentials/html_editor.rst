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
toolbar and apply any of the following standard formatting options:

- **Font style**: Define the font style using various options, such as :guilabel:`Header 1 to 6,
  Normal, Paragraph, Code`, and :guilabel:`Quote`.
- **Font size**: Select the preferred font size.
- :icon:`fa-bold` (:guilabel:`Toggle bold`): Put the text in bold.
- :icon:`fa-italic` (:guilabel:`Toggle italic`): Put the text in italics.
- :icon:`fa-underline` (:guilabel:`Toggle underline`): Underline the text.
- :icon:`fa-font` (:guilabel:`Apply Font Color`): Customize the font colors:

  - :guilabel:`Solid`: Select the preferred color from the predefined palette.
  - :guilabel:`Custom`: Customize the color palette using the wheel or by configuring the
    :guilabel:`hex` code and :guilabel:`RGBA` values.
  - :guilabel:`Gradient`: Select a predefined gradient or customize it by choosing
    between :guilabel:`Linear` or :guilabel:`Radial` and adjusting the wheel.
  - :icon:`fa-trash` (:guilabel:`Reset`): Restore the original font/background color.

- :icon:`fa-link` (:guilabel:`Add a link`): Insert or edit a URL link to a selected text, and
  optionally upload an image using its file URL.
- :guilabel:`Odoo AI`: Write a prompt and get AI-generated content. Optionally, click the
  AI suggestions instead of writing a prompt.

Click the :icon:`fa-ellipsis-v` (:guilabel:`Expand toolbar`) icon to display additional formatting
options:

- **Font family**: Use the :guilabel:`Default system font` or select a preferred font family for
  the text.
- :icon:`fa-strikethrough` (:guilabel:`Toggle strikethrough`): Strike through the text.
- :icon:`fa-paint-brush` :guilabel:`(Apply Background Color)`: Customize the background colors.
- :icon:`fa-eraser` (:guilabel:`Remove Format`): Remove all formatting applied to a selected text.
- :icon:`fa-list-ul` (:guilabel:`Toggle List`): Select the following list options:

  - :icon:`fa-list-ul` (:guilabel:`Bulleted list`): Turn the text into a bulleted list.
  - :icon:`fa-list-ol` (:guilabel:`Numbered list`): Turn the text into a numbered list.
  - :icon:`fa-check-square-o` (:guilabel:`Checklist`): Turn the text into a checklist.

- :icon:`fa-align-left` (:guilabel:`Align text`): Select the following text alignments:

  - :icon:`fa-align-left` (:guilabel:`align left`): Align the text on the left.
  - :icon:`fa-align-center` (:guilabel:`align center`): Align the text in the center.
  - :icon:`fa-align-right` (:guilabel:`align right`): Align the text on the right.
  - :icon:`fa-align-justify` (:guilabel:`justify`): Apply straight edges to both text margins.

- :guilabel:`Translate with AI`: Translate the content in the :doc:`installed languages
  </applications/general/users/language>` with AI.

.. image:: html_editor/style-and-colors.png
   :alt: Text editor's toolbox

.. tip::
   - Use the following keyboard shortcuts to apply formatting:

     - **Emphasis**: Press `CTRL`/`CMD` + `B`, `CTRL`/`CMD` + `I`, or `CTRL`/`CMD` + `U` to apply
       the bold, italics, or underlined effect.
     - **Numbered list**: Type `1.`, `1)`, `A.`, or `A)` to start a numbered list.
     - **Bulleted list**: Type `*` or `-` to start a bulleted list.

   - Click a hyperlinked text and perform one of the following actions: :icon:`fa-clipboard`
     (:guilabel:`Copy Link`), :icon:`fa-pencil-square-o` (:guilabel:`Edit Link`), or
     :icon:`fa-chain-broken` (:guilabel:`Remove Link`).

.. _essentials/html_editor/commands:

Powerbox commands
=================

Commands enable editing and managing various types of features within the text editor, such as
tables, banners, headers, and more.

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
         * - :icon:`fa-minus` :guilabel:`Separator`
           - Insert a horizontal rule separator.
         * - :icon:`fa-columns` :guilabel:`2 columns`
           - Convert into 2 columns.
         * - :icon:`fa-columns` :guilabel:`3 columns`
           - Convert into 3 columns.
         * - :icon:`fa-columns` :guilabel:`4 columns`
           - Convert into 4 columns.
         * - :icon:`fa-table` :guilabel:`Table`
           - Insert a table.
         * - :icon:`fa-list-ul` :guilabel:`Bulleted list`
           - Create a bulleted list.
         * - :icon:`fa-list-ol` :guilabel:`Numbered list`
           - Create a numbered list.
         * - :icon:`fa-check-square-o` :guilabel:`Checklist`
           - Create a checklist.
         * - :icon:`fa-caret-square-o-right` :guilabel:`Toggle list`
           - Hide a group of text under a foldable toggle.

      .. note::
         To organize a table, hover over a column or row to reveal the table menu. Click the
         :icon:`fa-ellipsis-h` :guilabel:`(ellipsis)` icon to move, insert, or delete a column or
         row.

   .. tab:: Banner

      .. list-table::
         :widths: 30 70
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :icon:`fa-info-circle` :guilabel:`Banner Info`
           - Insert an info banner.
         * - :icon:`fa-check-circle` :guilabel:`Banner Success`
           - Insert a success banner.
         * - :icon:`fa-exclamation-triangle` :guilabel:`Banner Warning`
           - Insert a warning banner.
         * - :icon:`fa-exclamation-circle` :guilabel:`Banner Danger`
           - Insert a danger banner.

   .. tab:: Format

      .. list-table::
         :widths: 30 70
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :icon:`fa-header` :guilabel:`Heading 1`
           - Big section heading.
         * - :icon:`fa-header` :guilabel:`Heading 2`
           - Medium section heading.
         * - :icon:`fa-header` :guilabel:`Heading 3`
           - Small section heading.
         * - :icon:`fa-paragraph` :guilabel:`Text`
           - Paragraph block: Insert a paragraph.
         * - :icon:`fa-exchange` :guilabel:`Switch direction`
           - Switch the text's direction.
         * - :icon:`fa-quote-right` :guilabel:`Quote`
           - Add a blockquote section.
         * - :icon:`fa-code` :guilabel:`Code`
           - Add a code section.

   .. tab:: Media

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :icon:`fa-file-image-o` :guilabel:`Media`
           - :ref:`Insert an image <insert-media>` or icon: :doc:`Search the Unsplash database
             </applications/general/integrations/unsplash>` or upload images, documents, or icons.
         * - :icon:`fa-upload` :guilabel:`Upload a file`
           - Add a download box: share images, recordings, or documents that internal users can
             download.

   .. tab:: Navigation

      .. list-table::
         :widths: 30 70
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :icon:`fa-link` :guilabel:`Link`
           - Add a link: Type the label and enter a URL or upload a file, then click
             :guilabel:`Apply`.
         * - :icon:`fa-link` :guilabel:`Button`
           - Add a button: Type the label, enter a URL or upload a file, select the button style,
             type, and size, then click :guilabel:`Apply`.
         * - :icon:`fa-bookmark` :guilabel:`Table Of Contents`
           - Highlight the structure (headings): Create a table of content based on the headings.

   .. tab:: Widget

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :icon:`fa-smile-o` :guilabel:`Emoji`
           - Add an emoji: search for the desired emoji.
         * - :icon:`fa-star-o` :guilabel:`3 Stars`
           - Insert a rating of up to 3 stars.
         * - :icon:`fa-star` :guilabel:`5 Stars`
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

- :guilabel:`Icons`: Search for and select one of the available icons.
- :guilabel:`Videos`: Paste a video URL of the following sources: YouTube, Vimeo, Dailymotion, and
  Youku. Alternatively, type code to embed a video.

.. note::
   When adding a video, use the toggles to enable autoplay or looping, hide player controls or the
   fullscreen button, or set a start time.

Media editor toolbar
~~~~~~~~~~~~~~~~~~~~

After :ref:`inserting an image <insert-media>`, click it to display the media editor toolbar, and
apply any of the following formatting options:

- :icon:`fa-search-plus` (:guilabel:`Preview image`): Preview the image, zoom in or out, rotate it,
  print it, or download it. Exit the preview by clicking the :icon:`fa-times` :guilabel:`(close)`
  icon in the top right corner.
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

Icon editor toolbar
~~~~~~~~~~~~~~~~~~~

After :ref:`inserting an icon <insert-media>`, click it to display the icon editor toolbar, and
apply any of the following formatting options:

- :icon:`fa-font` (:guilabel:`Select Font Color`): Customize the font color.
- :icon:`fa-paint-brush` (:guilabel:`Select Background Color`): Customize the background color.
- :guilabel:`Resize icon`: From :guilabel:`1x` to :guilabel:`5x`.
- :icon:`fa-play` (:guilabel:`Toggle icon spin`): Activate the spin animation.
- :guilabel:`Replace`: Select a different icon.
