==================
Article management
==================

Knowledge allows for managing articles, which consists of :ref:`structuring
<knowledge/management/structure>`, :ref:`sharing <knowledge/management/share>`, :ref:`removing
<knowledge/management/remove>`, and :ref:`retrieving <knowledge/management/retrieve>` them.

Basic management
================

Click the :icon:`fa-ellipsis-v` (:guilabel:`ellipsis`) icon and select one of the following actions
for basic article management:

- :guilabel:`Move To`: Select the article to move under a category or another article, then click
  :guilabel:`Move Article`.
- :guilabel:`Lock Content`: Lock the article to stop edits. Click :guilabel:`Unlock` to edit again.
- :guilabel:`Create a Copy`: Copy the article under the :guilabel:`Private` section.
- :guilabel:`Export`: Open the browser's print function.
- :guilabel:`Send to Trash`: Move the article to the trash.

.. note::
   The following actions only apply to nested articles and :ref:`article items
   <knowledge/articles_editing/commands>`:

   - :guilabel:`Convert into Article Item`: Convert the nested article into an article item.
   - :guilabel:`Convert into Article`: Convert the article item into a nested article.

.. tip::
   - Move an article directly from the sidebar tree by dragging and dropping it under another
     article or category.
   - Press `CTRL` / `CMD` + `K` to open the command palette, then type `?` to search for visible
     articles or `$` for :ref:`hidden articles <knowledge/management/visibility>`. Alternatively,
     hover over the :guilabel:`Workspace` category and click the :icon:`fa-eye` (:guilabel:`eye`)
     icon to find hidden articles.

.. _knowledge/management/structure:

Structuring
===========

The article structure follows a hierarchy with parent and nested articles organized within the
following categories:

- :guilabel:`Favorites` displays all articles marked as favorites.
- :guilabel:`Workspace` displays articles accessible to all internal users.
- :guilabel:`Shared` displays articles shared with specific users.
- :guilabel:`Private` displays personal articles.

.. note::
   - To mark an article as a favorite and display the :guilabel:`Favorites` category, click the
     :icon:`fa-star-o` (:guilabel:`star`) icon in the top-right menu.
   - Nested articles inherit the access rights of their parent article.

.. _knowledge/management/share:

Sharing
=======

Sharing an article involves configuring :ref:`access rights <knowledge/management/rights>`,
inviting :ref:`users <knowledge/management/invite>`, providing :ref:`online access
<knowledge/management/share-online>`, and determining its visibility in the :ref:`sidebar tree
<knowledge/management/structure>`.

Articles listed under a category in the sidebar tree are visible. Articles that certain users must
search for through the command palette due to restricted access rights are hidden.

.. _knowledge/management/rights:

Configure access rights
-----------------------

Click :guilabel:`Share` in the top-right menu to configure access rights.

Default access rights
~~~~~~~~~~~~~~~~~~~~~

.. tabs::

   .. list-table::
      :widths: 20 80
      :header-rows: 1
      :stub-columns: 1

      * - Setting
        - Use
      * - :guilabel:`Can edit`
        - Allow all internal users to edit the article.
      * - :guilabel:`Can read`
        - Allow all internal users to read the article only.
      * - :guilabel:`No access`
        - Prevent all users from accessing the article in the sidebar tree or searching in the
          command palette.

.. _knowledge/management/visibility:

Visibility
~~~~~~~~~~

.. tabs::

   .. list-table::
      :widths: 20 80
      :header-rows: 1
      :stub-columns: 1

      * - Setting
        - Use
      * - :guilabel:`Everyone`
        - The article is visible in the sidebar tree to all internal users.
      * - :guilabel:`Members`
        - The article is only visible in the sidebar tree to :ref:`invited users
          <knowledge/management/invite>`, while other users can find it using the hidden article
          search by pressing `CTRL` / `CMD` + `K` and typing `$`.

.. note::
   - The :guilabel:`Default Access Rights` apply to all internal users except invited users;
     specific access rights override default access rights.
   - Selecting `Can edit` or `Can read` in the :guilabel:`Default Access Rights` moves the article
     to the :guilabel:`Workspace` category, while selecting `No access` moves it to the
     :guilabel:`Private` category if it is not shared with anyone.
   - The :guilabel:`Visibility` setting only applies to :guilabel:`Workspace` articles.

.. _knowledge/management/invite:

Invite specific users
---------------------

To grant specific internal or portal users access to a private article or to share a
:guilabel:`Workspace` article with a portal user, follow these steps:

#. Click :guilabel:`Share` in the top-right menu.
#. Click :guilabel:`Invite`.
#. Select the preferred :guilabel:`Permission` and add users in the :guilabel:`Recipients` field.
#. Click :guilabel:`Invite`.

.. _knowledge/management/share-online:

Generate article URL
--------------------

Click :guilabel:`Share` and activate the :guilabel:`Share to web` toggle to generate a URL.
Click the :icon:`fa-clone` (:guilabel:`copy`) icon to copy the article's URL.

.. note::
   - If an article contains :ref:`inserted views <knowledge/articles_editing/views>`, users with
     the URL do not see them unless they can access the inserted content.
   - Having the Website app is necessary to share an article's URL.

.. _knowledge/management/remove:

Removal
=======

Removing an article involves deleting or archiving it.

Delete an article
-----------------

Select an article in the sidebar tree and click the :icon:`fa-ellipsis-v` (:guilabel:`ellipsis`)
icon, then :guilabel:`Send to Trash`. The article is moved to the trash for 30 days before being
permanently deleted.

To delete an article directly, click :guilabel:`Search` in the top-left menu, select an article,
and click :menuselection:`Actions --> Delete --> Delete` to remove the article permanently.

.. note::
   To restore a trashed article, click :guilabel:`Open the Trash` at the bottom of the sidebar
   tree, select an article, and click :guilabel:`Restore`. Alternatively, click :guilabel:`Search`
   in the top-left menu. In the search bar, click :menuselection:`Filters --> Trashed`. Click the
   article, then :guilabel:`Restore`.

Archive an article
------------------

Click :guilabel:`Search`, select an article, and click :menuselection:`Actions --> Archive -->
Archive`.

.. note::
   To restore an archived article, click :guilabel:`Search`. In the search bar, click
   :menuselection:`Filters --> Archived`. Select the article and go to :menuselection:`Actions -->
   Unarchive`.

.. _knowledge/management/retrieve:

Retrieval
=========

Retrieving Knowledge articles consists of accessing them from various Odoo apps or restoring
previous versions.

Access articles from various apps
---------------------------------

Knowledge articles are accessible from the :ref:`form view <studio/views/general/form>` of various
apps. Click the :icon:`fa-bookmark` :guilabel:`(Knowledge)` icon in the top right corner to open
the command palette, then choose one of the following search methods:

- :guilabel:`Search for an article`: start typing the text to execute a semantic search that
  identifies relevant article information.
- :guilabel:`Advanced Search`: after typing the text in the search bar, click :guilabel:`Advanced
  Search` to perform a parametric search with options to filter, group, or save articles.

Version history
---------------

To retrieve a previous version of an article, select it in the sidebar tree and click the
:icon:`fa-history` (:guilabel:`history`) icon in the top-right menu to open the version history.
Select a version and click :guilabel:`Restore history`.

.. note::
   In the version history, the :guilabel:`Content` tab shows the selected version, while the
   :guilabel:`Comparison` tab displays the differences between the article's previous and current
   versions.
