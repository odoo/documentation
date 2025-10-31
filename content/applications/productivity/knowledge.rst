=========
Knowledge
=========

**Odoo Knowledge** is a multipurpose productivity app that allows internal users to enrich their
business knowledge base by providing information gathered individually or collaboratively.

The pages on which they gather content are called *articles*. They are mainly composed of a title
and a body. The latter is an HTML field containing text, images, links, records from other models,
templates, etc.

.. seealso::
   `Knowledge product page <https://www.odoo.com/app/knowledge>`_

.. _knowledge/articles_editing/create-article:

Article creation
================

Knowledge articles can be created from scratch or a pre-configured template. When an article
is created under another, the original one is the **parent article**, while the new one is called a
**child** or **nested article**, indicating its subordinate position. This structure helps organize
content by establishing clear relationships between related articles.

.. tip::
   To create a nested article, hover over an article in the sidebar tree and click the
   :icon:`fa-plus` :guilabel:`(plus)` icon.

From scratch
------------

To create an article from scratch, click :icon:`fa-plus` :guilabel:`New Article` in the top-left
corner or hover over the :guilabel:`Private` or :guilabel:`Workspace` category in the sidebar tree,
then click the :icon:`fa-plus` :guilabel:`(plus)` icon. Start typing text or select one of the
suggested options:

- :guilabel:`Load a Template`: Select a preconfigured template and click :guilabel:`Load Template`.
- :guilabel:`Build an Item Kanban`: Create items to visualize and manage them in a Kanban view.
- :guilabel:`Build an Item List`: Create a structured list of items to centralize them in a single
  article.
- :guilabel:`Build an Item Calendar`: Create a calendar view to manage and track items by date.
- :guilabel:`Generate an Article with AI`: Generate content based on a prompt.

.. tip::
   After writing the header, click or hover over :guilabel:`Untitled` in the top bar to
   automatically name the article after the header. This action does not apply if the article is
   already titled.

From a template
---------------

To create an article from a template, follow these steps:

  #. Click :icon:`fa-paint-brush` :guilabel:`Browse Templates` at the bottom of the sidebar tree.
  #. Select a preferred template.
  #. Click :guilabel:`Load Template`.

.. _knowledge/articles_editing/edit-article:

Article editing
===============

To edit an article, select it in the sidebar tree, then edit its content and format it using the
:ref:`text editor toolbar <knowledge/articles_editing/text-editor>`, typing :ref:`powerbox
commands <knowledge/articles_editing/commands>`, and adding a :ref:`cover picture
<knowledge/articles_editing/cover>` with a :ref:`title emoji <knowledge/articles_editing/emoji>`.

.. tip::
   To enlarge or reduce the article's width, click the :icon:`fa-ellipsis-v` (:guilabel:`More
   actions`) icon, then toggle the :icon:`oi-arrows-h` :guilabel:`Full Width` on or off.

.. _knowledge/articles_editing/text-editor:

Text editor toolbar
-------------------

To edit a word, sentence, or paragraph, select or double-click it to display the text editor
toolbar and apply the desired :doc:`formatting options </applications/essentials/html_editor>`.

.. tip::
   Click :icon:`fa-commenting-o` :guilabel:`Comment` to add a comment to the selected text.

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
           - Show :ref:`nested articles <knowledge/articles_editing/create-article>`: Display the
             child pages of the parent article.
         * - :guilabel:`Item Kanban`
           - Insert a Kanban view and create :ref:`article items
             <knowledge/articles_editing/items>`.
         * - :guilabel:`Item Cards`
           - Insert a Card view and create :ref:`article items <knowledge/articles_editing/items>`.
         * - :guilabel:`Item List`
           - Insert a List view and create :ref:`article items <knowledge/articles_editing/items>`.
         * - :guilabel:`Item Calendar`
           - Insert a Calendar view and create :ref:`article items
             <knowledge/articles_editing/items>`.
         * - :guilabel:`Clipboard`
           - Add a clipboard section to store content and reuse it in other apps.
         * - :guilabel:`Foldable Section`
           - Hide the text inside a foldable section.
         * - :guilabel:`Article`
           - Insert a shortcut to an article.

.. _knowledge/articles_editing/items:

Article items
~~~~~~~~~~~~~

Article items are active building blocks within an article, allowing the addition, management, and
viewing of various organized content and data.

Article items within a parent article can contain :ref:`properties
<knowledge/articles_editing/properties>`, which are shared data fields from the parent, ensuring
consistent information across related items and articles.

.. _knowledge/articles_editing/cover:

Cover pictures
--------------

To add a cover picture, click the :icon:`fa-ellipsis-v` (:guilabel:`More actions`) icon, then
:guilabel:`Add Cover`.

To manage the cover picture, hover the mouse over it and select the preferred option:

- :guilabel:`Replace Cover`: Search from the :doc:`Unsplash
  </applications/general/integrations/unsplash>` database library, click :guilabel:`Add URL` and
  paste the **image address**, or click :guilabel:`Upload an image` to upload a file into the image
  library.
- :guilabel:`Reposition`: Adjust the picture, then click :guilabel:`Save Position` or
  :guilabel:`Cancel`.
- :guilabel:`Remove`.

.. note::
   - After clicking :guilabel:`Add Cover`, a cover picture is automatically attributed to the
     article based on the title.
   - A removed cover picture can be retrieved in the database library. To delete it, hover the
     mouse over it and click the :icon:`fa-trash` (:guilabel:`trash`) icon.

.. _knowledge/articles_editing/emoji:

Title emoji
-----------

To add a title emoji to the article's name and header:

- Click the :icon:`fa-ellipsis-v` (:guilabel:`More actions`) icon, then :guilabel:`Add Icon` to
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
     article.
   - Clicking the inserted link opens a pop-up with the view's name next to the
     :icon:`fa-clipboard` (:guilabel:`Copy Link`), :icon:`fa-pencil-square-o` (:guilabel:`Edit
     Link`), and :icon:`fa-chain-broken` (:guilabel:`Remove Link`) icons. Click the name inside the
     pop-up to open the linked view.

Article management
==================

Knowledge allows for managing articles, which consists of :ref:`structuring
<knowledge/articles_editing/structure>`, :ref:`sharing <knowledge/articles_editing/share>`,
:ref:`removing <knowledge/articles_editing/remove>`, and :ref:`retrieving
<knowledge/articles_editing/retrieve>` them.

Basic management
----------------

Click the :icon:`fa-ellipsis-v` (:guilabel:`More actions`) icon and select one of the following
actions for basic article management:

- :guilabel:`Move To`: Select the article to move under a category or another article, then click
  :guilabel:`Move Article`.
- :guilabel:`Lock Content`: Lock the article to stop edits. Click :guilabel:`Unlock` to edit again.
- :guilabel:`Create a Copy`: Copy the article under the :guilabel:`Private` section.
- :guilabel:`Open Version History`: Restore a previous version of the article.
- :guilabel:`Download PDF`: Open the browser's print function.
- :guilabel:`Add to Templates`: Add the article to the list of templates.
- :guilabel:`Send to Trash`: Move the article to the trash.

.. note::
   The following actions only apply to :ref:`nested articles
   <knowledge/articles_editing/create-article>` and :ref:`article items
   <knowledge/articles_editing/items>`:

   - :guilabel:`Convert into Article Item`: Convert the nested article into an :ref:`article item
     <knowledge/articles_editing/items>`.
   - :guilabel:`Convert into Article`: Convert the article item into a :ref:`nested article
     <knowledge/articles_editing/create-article>`.

.. tip::
   - Move an article directly from the sidebar tree by dragging and dropping it under another
     article or category.
   - Click the :icon:`fa-search` (:guilabel:`search`) icon in the top-left corner or press `CTRL` /
     `CMD` + `K` to open the command palette, then type `?` to search for visible articles or `$`
     for :ref:`hidden articles <knowledge/articles_editing/visibility>`. Alternatively, hover over
     the :guilabel:`Workspace` category and click the :icon:`fa-eye` (:guilabel:`eye`) icon to find
     hidden articles.

.. _knowledge/articles_editing/structure:

Structuring
-----------

Sidebar structure
~~~~~~~~~~~~~~~~~

The sidebar structure follows a hierarchy with parent and nested articles organized within the
following categories:

- The :guilabel:`Favorites` category displays all articles marked as favorites.
- The :guilabel:`Workspace` category displays articles accessible to all internal users.
- The :guilabel:`Shared` category displays articles shared with specific users.
- The :guilabel:`Private` category displays personal articles.

.. note::
   - To mark an article as a favorite and display the :guilabel:`Favorites` category, click the
     :icon:`fa-star-o` (:guilabel:`star`) icon in the top-right menu.

Article structure
~~~~~~~~~~~~~~~~~

Nested articles inherit their parent's :ref:`access rights <knowledge/articles_editing/rights>`, and
:ref:`properties <knowledge/articles_editing/properties>` are applied to a group of nested articles
under the same parent.

.. _knowledge/articles_editing/share:

Sharing
-------

Sharing an article involves configuring :ref:`access rights <knowledge/articles_editing/rights>`,
inviting :ref:`users <knowledge/articles_editing/invite>`, providing :ref:`online access
<knowledge/articles_editing/share-online>`, and determining its visibility in the :ref:`sidebar tree
<knowledge/articles_editing/structure>`.

Articles listed under a category in the sidebar tree are **visible**. Articles that certain users
must search for through the command palette due to restricted access rights are **hidden**.

.. tip::
   To copy a specific section of an article, hover over the header (`H1`, `H2`, and `H3`), and click
   the :icon:`fa-link` (:guilabel:`link`) icon. Clicking the shared link leads to the selected
   section of the article.

.. _knowledge/articles_editing/rights:

Configure access rights
~~~~~~~~~~~~~~~~~~~~~~~

Click :guilabel:`Share` in the top-right menu to configure access rights.

General access
**************

.. tabs::

   .. list-table::
      :widths: 20 80
      :header-rows: 1
      :stub-columns: 1

      * - Setting
        - Use
      * - :guilabel:`Can Edit`
        - Allow all internal users to edit the article.
      * - :guilabel:`Can Read`
        - Allow all internal users to read the article only.
      * - :guilabel:`Members only`
        - Allow only members to access the article from the sidebar tree or by searching for it in
          the command palette.

.. _knowledge/articles_editing/visibility:

Show in workspace
*****************

.. tabs::

   .. list-table::
      :widths: 20 80
      :header-rows: 1
      :stub-columns: 1

      * - Setting
        - Use
      * - :guilabel:`Everyone`
        - The article is visible in the sidebar tree to all internal users.
      * - :guilabel:`Members only`
        - The article is only visible in the sidebar tree to :ref:`members
          <knowledge/articles_editing/invite>`, while other users can find it using the hidden
          article search by pressing `CTRL` / `CMD` + `K` and typing `$`.

.. note::
   - The :guilabel:`Default Access Rights` apply to all internal users except invited users;
     specific access rights override default access rights.
   - Selecting `Can edit` or `Can read` in the :guilabel:`Default Access Rights` moves the article
     to the :guilabel:`Workspace` category while selecting `No access` moves it to the
     :guilabel:`Private` category if it is not shared with an invited user.
   - The :guilabel:`Visibility` setting only applies to :guilabel:`Workspace` articles.

.. _knowledge/articles_editing/invite:

Invite specific users
~~~~~~~~~~~~~~~~~~~~~

To grant specific internal or portal users access to a private nested article or to share a
:guilabel:`Workspace` article with a portal user, follow these steps:

#. Click :guilabel:`Share` in the top-right menu.
#. Click :guilabel:`Invite`.
#. Select the preferred :guilabel:`Permission` and add users in the :guilabel:`Recipients` field.
#. Click :guilabel:`Invite`.

.. _knowledge/articles_editing/share-online:

Generate article URL
~~~~~~~~~~~~~~~~~~~~

To generate a URL and share an article, click :guilabel:`Share` and activate the :guilabel:`Share to
web` toggle. Click :guilabel:`Copy Link` to copy the article's URL.

.. note::
   - If an article contains :ref:`inserted views <knowledge/articles_editing/views>`, users with
     the URL do not see them unless they can access the inserted content.
   - Having the Website app is necessary to share an article's URL.

.. _knowledge/articles_editing/remove:

Removal
-------

Removing an article involves deleting or archiving it.

Delete an article
~~~~~~~~~~~~~~~~~

Select an article in the sidebar tree and click the :icon:`fa-ellipsis-v` (:guilabel:`More actions`)
icon, then :guilabel:`Send to Trash`. Alternatively, drag and drop the article under
:guilabel:`Drop here to delete this article` at the bottom left corner. The article is moved to the
trash for 30 days before being permanently deleted.

To permanently delete an article, click :guilabel:`Articles` in the top-left menu, select an article,
and click :menuselection:`Actions --> Delete --> Delete`.

.. note::
   To restore a trashed article, click :guilabel:`Open the Trash` at the bottom of the sidebar
   tree, select an article, and click :guilabel:`Restore`. Alternatively, click :guilabel:`Articles`
   in the top-left menu. In the search bar, click :menuselection:`Filters --> Trashed`. Click the
   article, then :guilabel:`Restore`.

Archive an article
~~~~~~~~~~~~~~~~~~

Click :guilabel:`Articles`, select an article, and click :menuselection:`Actions --> Archive -->
Archive`.

.. note::
   To restore an archived article, click :guilabel:`Articles`. In the search bar, click
   :menuselection:`Filters --> Archived`. Select the article and go to :menuselection:`Actions -->
   Unarchive`.

.. _knowledge/articles_editing/retrieve:

Retrieval
---------

Retrieving Knowledge articles consists of accessing them from Odoo apps or restoring previous
versions.

Access articles from Odoo apps
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Knowledge articles are accessible from the :ref:`form view <studio/views/general/form>` of various
apps. Click the :icon:`fa-bookmark` :guilabel:`(Knowledge)` icon in the top right corner to open
the command palette, then choose one of the following search methods:

- :guilabel:`Search for an article`: start typing the text to execute a semantic search that
  identifies relevant article information.
- :guilabel:`Advanced Search`: after typing the text in the search bar, click :guilabel:`Advanced
  Search` to perform a parametric search with options to filter, group, or save articles.

Version history
~~~~~~~~~~~~~~~

To retrieve a previous version of an article, select it in the sidebar tree and click the
:icon:`fa-ellipsis-v` (:guilabel:`More actions`) icon, then :guilabel:`Open Version History`.
Select a version and click :guilabel:`Restore history`.

.. note::
   In the version history, the :guilabel:`Content` tab shows the selected version, while the
   :guilabel:`Comparison` tab displays the differences between the article's previous and current
   versions.

.. _knowledge/articles_editing/properties:

Properties
==========

Properties are custom fields for storing and managing information that members can add to
:ref:`nested articles <knowledge/articles_editing/create-article>` or :ref:`article items
<knowledge/articles_editing/items>`.

To add a property, click the :icon:`fa-ellipsis-v` (:guilabel:`More actions`) icon, then
:menuselection:`Add Properties --> Add a Property`, enter a :guilabel:`Label`, and select a
:guilabel:`Field Type`.

.. seealso::
   :doc:`/applications/essentials/property_fields`

.. note::
  - Click outside the property field window to save a property.
  - To remove a property, hover over its name, click the :icon:`fa-pencil` (:guilabel:`pencil`)
    icon, then click :menuselection:`Delete --> Delete`. Deleting a property is permanent, and
    deleting all properties removes the property sidebar panel.

.. tip::
  - Hover over the property name and click the :icon:`fa-pencil` (:guilabel:`pencil`) icon to edit
    it or the :icon:`oi-draggable` (:guilabel:`drag handle`) icon to move it above or below another
    property.
  - Tick :guilabel:`Display in Cards` to show the properties in an :ref:`article item's view
    <knowledge/articles_editing/items>` that is visible from a parent article.
  - Click the :icon:`fa-cogs` (:guilabel:`cogs`) icon to hide the property sidebar panel. Exiting
    and returning to the article causes the panel to reappear.
