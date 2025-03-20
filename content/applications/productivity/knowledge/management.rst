===================
Articles management
===================

Knowledge allows for managing articles, which consists of :ref:`structuring
<knowledge/management/structure>`, :ref:`sharing <knowledge/management/share>`,
:ref:`exporting/importing <knowledge/management/export>`, :ref:`removing
<knowledge/management/remove>`, and :ref:`retrieving <knowledge/management/retrieve>` them.

Click the :icon:`fa-ellipsis-v` (:guilabel:`ellipsis`) icon and select one of the generic tools
to manage articles:

- :guilabel:`Move To`: To move an article to a different category, select its position, then click
  :guilabel:`Move Article`.
- :guilabel:`Lock Content`: Lock an article to prevent it from being edited. Click :guilabel:`Unlock` to
  allow for editing once again.
- :guilabel:`Create a Copy`: Create a copy of an article in the :guilabel:`Private` section.
- :guilabel:`Export`: Print an article or save it as PDF.
- :guilabel:`Send to Trash`: Delete an article.

.. tip::
   - Hold-click an article in the sidebar tree to drag and drop it under a preferred article or
     category. Dragging and dropping an article to the :guilabel:`Favorites` category is not
     possible.
   - Press `CTRL` + `K` to open the command palette, then type `?` to search for visible articles
     or `$` for hidden articles.

.. _knowledge/management/structure:

Article structuring
===================

The article structure follows a hierarchy with parent and nested articles and is reflected in the
sidebar tree categories:

- :guilabel:`Favorites`: Personal bookmarks for quick access.
- :guilabel:`Workspace`: Articles accessible to all internal users.
- :guilabel:`Shared`: A shared space for users with specific access rights.
- :guilabel:`Private`: Personal drafts.

.. note::
   - To mark an article as a favorite and display the :guilabel:`Favorites` category, click the
     :icon:`fa-star-o` (:guilabel:`star`) icon in the top-right menu. This action is user-specific
     and does not affect other users.
   - Every :ref:`created article <knowledge/articles_editing/create-article>` automatically appears
     in the :guilabel:`Private` category.

.. _knowledge/management/share:

Article sharing
===============

Sharing an article involves configuring :ref:`access rights <knowledge/management/rights>`,
inviting :ref:`users <knowledge/management/invite>`, providing :ref:`online access
<knowledge/management/share-online>`, and determining its visibility in the :ref:`sidebar tree
<knowledge/management/structure>` and search availability in the :doc:`command palette
</applications/essentials/keyboard_shortcuts>`.

.. _knowledge/management/rights:

Configure access rights
-----------------------

To open the **Share** menu and configure access rights, click :guilabel:`Share` in the top-right
menu.

.. tabs::
   .. tab:: Default Access Rights

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Setting
           - Use
         * - :guilabel:`Can edit`
           - Allow users to edit an article.
         * - :guilabel:`Can read`
           - Allow users to read an article only.
         * - :guilabel:`No access`
           - Prevent specific users from accessing an article whether in the sidebar tree or
             searching in the command palette.

   .. tab:: Visibility

      .. list-table::
         :widths: 20 80
         :header-rows: 1
         :stub-columns: 1

         * - Setting
           - Use
         * - :guilabel:`Everyone`
           - All users can edit or read a selected article :guilabel:`Workspace` category depending
             on the :guilabel:`Default Access Rights`
         * - :guilabel:`Members`
           - Grant invited users direct access to an article, while allowing other members to find
             it through a hidden article search.

.. note::
   - An article requires at least two invited users to share.
   - To display the :guilabel:`Shared` category in the sidebar tree, select `No access` in the
     :guilabel:`Default Access Rights`, invite users, add their specific access rights
     (permissions), and click :guilabel:`Invite`. Specific access rights override default access
     rights.
   - To display the :guilabel:`Visibility` setting in the **Share** menu, select the `Can edit` or
     `Can read` access right in the :guilabel:`Default Access Rights`.

.. _knowledge/management/invite:

Share with users
----------------

To share an article with internal or external users, follow the next steps:

#. Click :guilabel:`Share` in the top-right menu to open the **Share** menu.
#. Configure the :ref:`access rights <knowledge/management/rights>`, then click :guilabel:`Invite`.
#. Select the preferred :guilabel:`Permission` and add users in the :guilabel:`Recipients` field.
#. Click :guilabel:`Invite`.

.. example::
   When sharing an article with users, select `Can read` in the :guilabel:`Default Access Rights`
   and `Members` in the :guilabel:`Visibility`. Invite users and select `Can edit` as their
   specific access right. The invited users can access and edit the article in the
   :guilabel:`Workspace` category. Other members must hover over the :guilabel:`Workspace`
   category, click the :icon:`fa-eye` (:guilabel:`eye`) icon to search for it in the hidden
   articles, and click :guilabel:`Join` to edit the article.

.. _knowledge/management/share-online:

Share online
------------

To share an article online, click :guilabel:`Share` and activate the :guilabel:`Share to web`
button to generate a URL link. Click the :icon:`fa-clone` (:guilabel:`copy`) icon to copy the link
and share it with external users.

.. note::
   If an article contains :ref:`inserted views <knowledge/articles_editing/views>`, users with the
   link will not see them unless they can access the inserted content.

.. _knowledge/management/remove:

Article removal
===============

Removing an article involves deleting or archiving it:

- **Delete an article**

Select an article in the sidebar tree, and click the :icon:`fa-ellipsis-v` (:guilabel:`ellipsis`)
icon, then :guilabel:`Send to Trash`. The article is moved to the trash for 30 days before being
permanently deleted.

Alternatively, click :guilabel:`Search` in the top-left menu. Select an article and click
:menuselection:`Actions --> Delete --> Delete` to remove the article permanently.

- **Archive an article**

Click :guilabel:`Search`, select an article, and click :menuselection:`Actions --> Archive -->
Archive`.

.. note::
   - By default, archived articles have a 30-day expiration date before being permanently deleted.
   - Archived articles are hidden in the search menu.

.. _knowledge/management/export:

Article export/import
=====================

Click :guilabel:`Search` to access the list of all articles. Select an article, then click
:menuselection:`Actions --> Export` to :ref:`export <essentials/export_import_data/export-data>` it.
Otherwise, click the :icon:`fa-cog` (:guilabel:`gear`) icon and :guilabel:`Import records` to
:ref:`import <essentials/export_import_data/import-data>` an article.

.. note::
   - Only exported Knowledge articles are importable into Knowledge.
   - Imported articles become hidden articles. Once retrieved, they appear in the
     :guilabel:`Workspace` by default and retain their previously configured access rights.

.. _knowledge/management/retrieve:

Article retrieval
=================

Retrieving Knowledge articles consists of :ref:`restoring <knowledge/management/restore>` or
:ref:`accessing <knowledge/management/access>` them from various Odoo apps.

.. _knowledge/management/restore:

Restore articles
----------------

Deleted articles
~~~~~~~~~~~~~~~~

To restore a deleted article, click :guilabel:`Open the Trash` at the bottom of the sidebar tree,
select an article, and click :guilabel:`Restore`.

Alternatively, click :guilabel:`Search` in the top-left menu. In the search bar, click
:menuselection:`Filters --> Trashed`. Click the article, then :guilabel:`Restore`.

Archived articles
~~~~~~~~~~~~~~~~~

To restore an archived article, click :guilabel:`Search`. In the search bar, click
:menuselection:`Filters --> Archived`. Select an article and go to :menuselection:`Action -->
Unarchive`.

Version history
~~~~~~~~~~~~~~~

To restore a previous version of an article, select it in the sidebar tree and click the
:icon:`fa-history` (:guilabel:`history`) icon in the top-right menu to open the version history.
Select a version and click :guilabel:`Restore history`.

.. note::
   In the version history, the :guilabel:`Content` tab shows the selected version, while the
   :guilabel:`Comparison` tab displays the differences between an article's previous and current
   version.

.. _knowledge/management/access:

Access articles from various apps
---------------------------------

Knowledge articles are accessible from the :ref:`form view <studio/views/general/form>` of various
apps. Click the :icon:`fa-bookmark` :guilabel:`(Knowledge)` icon in the top right corner to open
the command palette, then perform one of the following methods:

- :guilabel:`Search for an article`: start typing the text to execute a semantic search that
  identifies relevant article information.
- :icon:`fa-arrows-alt` :guilabel:`Advanced Search`: after typing the text in the search bar, click
  :guilabel:`Advanced Search` to perform a parametric search with options to filter, group, or save
  articles as favorites.

.. note::
  The :icon:`fa-bookmark` :guilabel:`(Knowledge)` icon is only visible if the Knowledge app is
  installed.
