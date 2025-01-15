============================
Article creation and editing
============================

Article creation
================

There are three possibilities to create an article in Knowledge: by clicking :guilabel:`New`,
through the sidebar tree, and by browsing a preconfigured template. The sidebar tree has :ref:`four
categories <management/structure>`: :guilabel:`Private, Shared, Workspace`, and
:guilabel:`Favorites`. Templates have preconfigured content and are organized between the following
categories: :guilabel:`Productivity, Sales, Marketing, Company Organization`, and
:guilabel:`Product Management`.

Creating an article
-------------------

Click :guilabel:`New` in the top right corner or hover over the :guilabel:`Private` or
:guilabel:`Workspace` category in the sidebar tree, then click the :icon:`fa-plus`
:guilabel:`(plus)` icon. Use the following optional column to create views or generate content, or
simply start writing the header and the content from scratch:

- :guilabel:`Load a Template`: select a preconfigured template and click :guilabel:`Load Template`.
- :guilabel:`Build an Item Kanban`: create items to visualize and manage them in a Kanban view.
- :guilabel:`Build an Item List`: create a structured list of items to centralize them in a single
  article.
- :guilabel:`Build an Item Calendar`: create a calendar view to manage and track items by date.
- :guilabel:`Generate an Article with AI`: generate content based on a prompt.

.. tip::
   After writing the header, click or hover over :guilabel:`Untitled` in the top bar to
   automatically name the article after the header. This does not apply if the article is already
   titled.

Browsing a template
-------------------

  #. Click :icon:`fa-paint-brush` :guilabel:`Browse Templates` at the bottom of the sidebar tree.
  #. Select a preferred template.
  #. Click :guilabel:`Load Template`.

Article editing
===============

Click the desired article in the sidebar tree, then edit the content by using the
:ref:`text editor toolbar <knowledge/text-editor>`, adding a :ref:`cover picture <knowledge/cover>`
with an :ref:`emoji <knowledge/emoji>`, and typing :ref:`commands <knowledge/commands>`.

.. _knowledge/text-editor:

Odoo rich-text editor
---------------------

To edit a word, sentence, or paragraph, select or double-click it to display the text editor
toolbar, and apply the desired :doc:`formatting options </applications/essentials/text_editor>`.

.. _knowledge/cover:

Cover pictures
--------------

To add a cover picture, click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon, then
:guilabel:`Add Cover`. The following options enable selecting and inserting pictures from different
sources:

- Search the :doc:`Unsplash </applications/general/integrations/unsplash>` database to find a
  suitable picture. If your database and your **Unsplash** account are associated, the cover
  picture is automatically selected based on the article's name.
- :guilabel:`Add URL`: copy-paste the **image address**.
- :guilabel:`Upload an image`: upload the file into the image library.

To manage the cover picture, hover the mouse over it, and select the following options:

- :guilabel:`Replace Cover` and search from the database, library, or add a different URL.

- :guilabel:`Reposition` and adjust the picture before clicking :guilabel:`Save Position`.

- :guilabel:`Remove Cover`.

.. _knowledge/emoji:

Emojis
------

To add an emoji to the article's name and header:

- Click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon, then :guilabel:`Add Icon` to
  generate a random emoji. Click the emoji to select a different one.

- Alternatively, click the :icon:`fa-file-text-o` :guilabel:`(page)` icon next to the article's
  name in the sidebar or the top bar and select the desired emoji.

.. _knowledge/commands:

Commands
--------

Type `/` to use a command and open the **powerbox**. Some :ref:`commands <essentials/commands>`,
such as `/Media` or `/Article`, are common to all apps, but the following ones are exclusive to the
Knowledge app:

.. tabs::

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Command
           - Use
         * - :guilabel:`Index`
           - Show nested articles: display the child pages of the parent article.
         * - :guilabel:`Item Kanban`
           - Insert a Kanban view and create items.
         * - :guilabel:`Item Cards`
           - Insert a Card view and create items.
         * - :guilabel:`Item List`
           - Insert a List view and create items.
         * - :guilabel:`Item Calendar`
           - Insert a Calendar view and create items.

Knowledge and Odoo apps
=======================

Knowledge articles can be retrieved and accessed from certain apps. Additionally, a content
:ref:`view <studio/views/general>` or a link to a view from some apps can be inserted into
Knowledge articles.

Retrieve Knowledge articles
---------------------------

From any :ref:`form view <studio/views/general/form>`, click the :icon:`fa-bookmark`
:guilabel:`(Knowledge)` icon in the top right corner to open the command palette, then perform one
of the following methods:

- :guilabel:`Search for an article`: start typing `?` before the text to execute a semantic search
  that identifies relevant information in articles.

.. example::
   Typing `? Sales` highlights matching titles, articles, and nearby text.

- :icon:`fa-arrows-alt` :guilabel:`Advanced Search`: perform a parametric search with options to
  filter, group, or save articles as favorites.

.. note::
   The :icon:`fa-bookmark` :guilabel:`(Knowledge)` icon is only visible if the Knowledge app is
   installed.

.. tip::
   Press `CTRL`/`CMD` + `K` to open the command palette from certain apps, then type `?` to search
   for articles.

Insert views and links
----------------------

To insert a view or a view link into an article, follow these steps:

     #. Go to the desired app and select the preferred view.
     #. Click the :icon:`fa-cog` :guilabel:`(cog)` icon, then choose :menuselection:`Knowledge -->
        Insert view in article` or :guilabel:`Insert link in article`.
     #. Select the article to insert the view or link to.

.. note::
   Once the view or link is inserted:

   - Users without access to the view cannot see it in Knowledge, even if they can access the
     article containing it.
   - Clicking the inserted link opens a pop-up with the view title next to copy, edit, and remove
     options. Clicking the title inside the pop-up opens the linked view.
