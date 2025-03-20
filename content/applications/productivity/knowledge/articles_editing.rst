============================
Article creation and editing
============================

.. _knowledge/articles_editing/create-article:

Article creation
================

Knowledge articles can be created from scratch or from a preconfigured template.

From scratch
------------

To create an article from scratch, click :guilabel:`New` in the top right corner or hover over the
:guilabel:`Private` or :guilabel:`Workspace` category in the sidebar tree, then click the
:icon:`fa-plus` :guilabel:`(plus)` icon. Start typing text or select one of the suggested options:

- :guilabel:`Load a Template`: Select a preconfigured template and click :guilabel:`Load Template`.
- :guilabel:`Build an Item Kanban`: Create items to visualize and manage them in a Kanban view.
- :guilabel:`Build an Item List`: Create a structured list of items to centralize them in a single
  article.
- :guilabel:`Build an Item Calendar`: Create a calendar view to manage and track items by date.
- :guilabel:`Generate an Article with AI`: Generate content based on a prompt.

.. tip::
   After writing the header, click or hover over :guilabel:`Untitled` in the top bar to
   automatically name the article after the header. This does not apply if the article is already
   titled.

From a template
---------------

To create an article from a template, follow these steps:

  #. Click :icon:`fa-paint-brush` :guilabel:`Browse Templates` at the bottom of the sidebar tree.
  #. Select a preferred template.
  #. Click :guilabel:`Load Template`.

Article editing
===============

To edit an article, select it in the sidebar tree, then edit its content and format it using the
:ref:`text editor toolbar <knowledge/articles_editing/text-editor>`, by typing :ref:`powerbox
commands <knowledge/articles_editing/commands>`, and adding a :ref:`cover picture
<knowledge/articles_editing/cover>` with a :ref:`title emoji <knowledge/articles_editing/emoji>`.

.. _knowledge/articles_editing/text-editor:

Text editor toolbar
-------------------

To edit a word, sentence, or paragraph, select or double-click it to display the text editor
toolbar and apply the desired :doc:`formatting options </applications/essentials/html_editor>`.

.. tip::
   Click :icon:`fa-commenting` :guilabel:`Comment` to add a comment to the selected text.

.. _knowledge/articles_editing/commands:

Commands
--------

Type `/` to open the :ref:`powerbox <essentials/html_editor/commands>` and use a command. The
following commands are exclusive to the Knowledge app:

.. tabs::

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Index`
           - Show nested articles: Display the child pages of the parent article.
         * - :guilabel:`Item Kanban`
           - Insert a Kanban view and create items.
         * - :guilabel:`Item Cards`
           - Insert a Card view and create items.
         * - :guilabel:`Item List`
           - Insert a List view and create items.
         * - :guilabel:`Item Calendar`
           - Insert a Calendar view and create items.

.. _knowledge/articles_editing/cover:

Cover pictures
--------------

To add a cover picture, click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon, then
:guilabel:`Add Cover`. The following options enable selecting and inserting pictures from different
sources:

- Search the :doc:`Unsplash </applications/general/integrations/unsplash>` database to find a
  suitable picture. If your database and your **Unsplash** account are associated, the cover
  picture is automatically selected based on the article's name.
- :guilabel:`Add URL`: Copy-paste the **image address**.
- :guilabel:`Upload an image`: Upload the file into the image library.

To manage the cover picture, hover the mouse over it and select the preferred option:

- :guilabel:`Replace Cover` and search from the database or library, or add a different URL.

- :guilabel:`Reposition` and adjust the picture before clicking :guilabel:`Save Position`.

- :guilabel:`Remove Cover`.

.. _knowledge/articles_editing/emoji:

Title emoji
-----------

To add a title emoji to the article's name and header:

- Click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon, then :guilabel:`Add Icon` to
  generate a random emoji. Click the emoji to select a different one.

- Alternatively, click the :icon:`fa-file-text-o` :guilabel:`(page)` icon next to the article's
  name in the sidebar or the top bar and select the preferred emoji.

.. _knowledge/articles_editing/views:

Views and links from other apps
-------------------------------

To insert a view or a view link into an article, follow these steps:

     #. Go to the desired app and select the preferred view.
     #. Click the :icon:`fa-cog` :guilabel:`(cog)` icon, then select :menuselection:`Knowledge -->
        Insert view in article` or :guilabel:`Insert link in article`.
     #. Choose the article to insert the view or link to.

.. note::
   Once the view or link is inserted:

   - Users without access to the view cannot see it in Knowledge, even if they can access the
     article containing it.
   - Clicking the inserted link opens a pop-up with the view's name next to the
     :icon:`fa-clipboard` (:guilabel:`copy`), :icon:`fa-pencil-square-o` (:guilabel:`edit`), and
     :icon:`fa-chain-broken` (:guilabel:`remove`) icons. Click the name inside the pop-up to open
     the linked view.
