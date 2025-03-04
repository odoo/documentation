.. _text-editor:

=====================
Odoo rich-text editor
=====================

The Odoo rich-text editor enables content creation across various fields in different apps. Whether
in the :guilabel:`Internal Notes` or :guilabel:`Description` fields, adding a text requires
using the :ref:`text editor toolbar <toolbar>` and :ref:`commands <essentials/commands>`. The
toolbar provides formatting tools, while typing commands opens the **powerbox**, offering a
selection of content structuring options.

.. _toolbar:

Text editor toolbar
===================

To edit a word, sentence, or paragraph, select or double-click it to display the text editor
toolbar, and apply any of the following formatting options:

- :guilabel:`Paragraph`: change the style using various options, such as :guilabel:`Header 1 to 6,
  Normal, Paragraph, Code`, and :guilabel:`Quote`.
- :guilabel:`B`: put the text in bold.
- :guilabel:`I`: put the text in italics.
- :guilabel:`U`: underline the text.
- :guilabel:`S`: strike through the text.
- :guilabel:`A` and :icon:`fa-paint-brush` :guilabel:`(paintbrush)` to customize the font and
  background colors respectively:

  - :guilabel:`Solid`: select the preferred color from the predefined palette.
  - :guilabel:`Custom`: customize the color palette using the wheel or by configuring the
    :guilabel:`hex` code and :guilabel:`RGBA` values.
  - :guilabel:`Gradient`: select a predefined gradient or customize it by choosing
    between :guilabel:`Linear` or :guilabel:`Radial` and adjusting the wheel.

- **Font size**: adjust the size of the text.
- :icon:`fa-list-ul`: turn the text into a bulleted list.
- :icon:`fa-list-ol`: turn the text into a numbered list.
- :icon:`fa-check-square-o`: turn the text into a checklist.
- :icon:`fa-link`: insert or edit a URL link to a selected text, and optionally upload an image
  using its file URL.
- :guilabel:`Translate`: translate the content in the
  :doc:`installed languages </applications/general/users/language>`.
- :icon:`fa-magic` :guilabel:`AI`: get AI-generated suggestions and adjust the tone by clicking
  buttons such as :guilabel:`Correct, Shorten, Lengthen, Friendly, Professional`, and
  :guilabel:`Persuasive`.

.. image:: text_editor/style-and-colors.png
   :alt: Text editor's toolbox

.. note::
   - :icon:`fa-commenting` :guilabel:`Comment`: add a comment to the selected text (only in
     Knowledge).
   - Before starting a paragraph, there are shortcut icons in the tooltip to quickly access certain
     content structuring options, such as :guilabel:`Media, Upload File, Table, Bulleted list,
     Numbered list, Checklist, Link`, or :guilabel:`More options`. Clicking :guilabel:`More options`
     opens the powerbox to display all structuring options.

.. tip::
   There a shortcuts to perform some formatting tools:
      - **Emphasis**: press `CTRL`/`CMD` + `B`, `CTRL`/`CMD` + `I`, or `CTRL`/`CMD` + `U` to apply
        the bold, italics, or underlined effect.
      - **Numbered list**: type `1.`, `1)`, `A.`, or `A)` to start a numbered list.
      - **Bulleted list**: type `*` or `-` to start a bulleted list.

.. _insert-media:

Insert media
------------

To insert media, type `/Media` or click the :icon:`fa-file-image-o` :guilabel:`(Media)` icon in the
tooltip to open the modal window, and select between the following tabs:

- :guilabel:`Images`

   - Search the :doc:`Unsplash </applications/general/integrations/unsplash>` database to find a
     suitable image.
   - :guilabel:`Add URL`: copy-paste the **image address**.
   - :guilabel:`Upload an image`: upload an image into the library.

- :guilabel:`Documents`

   - Search for a document in the database.
   - :guilabel:`Add URL`: copy-paste a valid URL that is reachable on the Internet.
   - :guilabel:`Upload a document`: upload a document from a local drive.

- :guilabel:`Icons`

   - Search an icon from the selection in the database.

Media editor toolbar
~~~~~~~~~~~~~~~~~~~~

After :ref:`inserting an image <insert-media>`, click it to display the media editor toolbar, and
apply any of the following formatting options:

- :icon:`fa-search-plus`: preview the image, zoom in or out, print it or download it. Exit the
  preview by clicking the :icon:`fa-times` :guilabel:`(close)` icon in the top right corner.
- :guilabel:`Description`: edit the image description and tooltip, then click :guilabel:`Save`.
- :icon:`fa-square`: apply a rounded shape to the corners of the image.
- :icon:`fa-circle-o`: apply a circular shape to the image.
- :icon:`fa-sun-o`: apply a shadow effect to the image.
- :icon:`fa-picture-o`: apply a boarder to the image.
- :icon:`fa-plus-square-o`: add an image padding and choose from small, medium, large, or extra
  large sizes.
- :guilabel:`Default`: restore the image to its default size.
- :guilabel:`100%`: set the image to full size.
- :guilabel:`50%`: set the image to half its size.
- :guilabel:`25%`: set the image to a quarter of its size.
- :icon:`fa-object-ungroup`: resize and rotate the image. Click the :icon:`fa-object-ungroup`
  :guilabel:`(object)` icon a second time to reset the transformation.
- :icon:`fa-crop`: crop the image manually or apply the following options:

   - choose from the `Flexible`, `16:9`, `4:3`, `1:1`, or `2:3` aspect ratios.
   - zoom in or out.
   - rotate left or right.
   - flip horizontal or vertical.
   - reset the image.

- :guilabel:`Replace`: replace the image by searching in the Unsplash database, adding a URL, or
  uploading a different one.
- :icon:`fa-link`: insert a link to the image, type the URL, then click :guilabel:`Apply`. To
  remove the link, click the :icon:`fa-chain-broken` :guilabel:`(unlink)` icon.
- :icon:`fa-trash`: remove the image.

.. _essentials/commands:

Commands
========

To use a command, type `/` to open the powerbox, then enter the command's name or select from
multiple features to insert tables, images, banners, etc. There are commands specific to the
Knowledge app. To know more about them, please refer to :ref:`Articles creation and editing
<knowledge/commands>`.

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
         * - :guilabel:`Quote`
           - Add a blockquote section.
         * - :guilabel:`Code`
           - Add a code section.

      .. note::
         To manage a table, hover over a column or row to reveal the table menu. Click the
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
           - Paragraph block: insert a paragraph.
         * - :guilabel:`Switch direction`
           - Switch the text's direction.

   .. tab:: Media

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Media`
           - :ref:`Insert image <insert-media>` or icon: search or upload images, documents, or
             icons.
         * - :guilabel:`Clipboard`
           - Add a clipboard section to store content and reuse it in other apps.
         * - :guilabel:`Upload a file`
           - Add a download box: share images, recordings, or documents that internal users can
             download.

      .. note::
         To associate **Unsplash** with your database to get image suggestions after typing
         `/Media`, please refer to :doc:`/applications/general/integrations/unsplash`.

   .. tab:: Navigation

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Link`
           - Add a link: type the link label and URL, then click :guilabel:`Apply`.
         * - :guilabel:`Button`
           - Add a button: type the label and URL, select the button type and size, then click
             :guilabel:`Apply`.
         * - :guilabel:`Article`
           - Insert an Article shortcut: select an article to insert to the content.
         * - :guilabel:`Appointment`
           - Add a specific appointment: select appointment types and insert a link.
         * - :guilabel:`Drawing Board`
           - Insert an Excalidraw Board: copy-paste the link of a drawing board.
         * - :guilabel:`Table Of Content`
           - Highlight the structure (headings): create a table of content based on the headings.
         * - :guilabel:`Video Link`
           - Insert a video: copy-paste the video URL (Youtube, Vimeo, Dailymotion, and Youku only).

      .. note::
         Typing `/Link` or `/Button` allows for uploading a file as an alternative to entering a
         URL.

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

   .. tab:: AI Tools

     .. list-table::
       :widths: 20 80
       :header-rows: 1
       :stub-columns: 1

       * - Command
         - Use
       * - :guilabel:`ChatGPT`
         - Generate content with AI.

   .. tab:: Basic Bloc

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Signature`
           - Insert your signature.

.. tip::
   Hover over any element in the text (header, table, clipboard, etc.) to reveal the
   :icon:`fa-sort` :guilabel:`(drag)` icon. Click and hold the icon to drag and drop the element
   elsewhere in the text.
