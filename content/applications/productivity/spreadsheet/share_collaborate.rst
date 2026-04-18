=====================
Share and collaborate
=====================

Odoo Spreadsheet offers various features that allow for efficient real-time collaboration while
ensuring the appropriate level of control and traceability, including:

- :ref:`permission-based sharing <spreadsheet/collaboration/access-sharing>`
- :ref:`version history <spreadsheet/get-started/manage-spreadsheets-versioning>`
- discussions via :ref:`comments and the spreadsheet's chatter thread
  <spreadsheet/collaboration/chatter>`

.. _spreadsheet/collaboration/access-sharing:

Access and sharing
==================

In principle, the rights to access Odoo spreadsheets are handled like :ref:`any other file in the
Documents app <documents/access-rights>`. :ref:`Roles and permissions
<spreadsheet/collaboration/roles-permissions>` are either inherited from the folder a spreadsheet is
saved in or controlled at the level of the spreadsheet itself.

However, there are important differences to consider between :ref:`spreadsheets that contain only
static data <spreadsheet/collaboration/static-spreadsheet>` and :ref:`spreadsheets that contain
dynamic Odoo data <spreadsheet/collaboration/dynamic-spreadsheet>`, in terms of both access and data
visibility.

.. tip::

   - Access to a folder or spreadsheet can be managed by its owner or any user with
     :guilabel:`Editor` rights.
   - A user with :guilabel:`Viewer` rights cannot share a spreadsheet with a specific user
     directly, but can copy a link to the spreadsheet.
   - Any user with access to a spreadsheet can download it as an `.xlsx` file by clicking
     :menuselection:`File -->` :icon:`os-download` :menuselection:`Download`  from the menu bar. If
     the spreadsheet contained dynamic data, the values are frozen at the moment of download.

.. _spreadsheet/collaboration/roles-permissions:

Roles and permissions
---------------------

Permissions are managed using the following roles:

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 5 5 5 5 5 5 5 5 5

   * - Role
     - View
     - Edit
     - Delete
     - Download .xlsx
     - Share
     - Manage roles
     - Use comments
     - Use chatter
   * - Owner
     - :icon:`fa-check`
     - :icon:`fa-check`
     - :icon:`fa-check`
     - :icon:`fa-check`
     - :icon:`fa-check` with specific people or via link
     - :icon:`fa-check` including changing owner
     - :icon:`fa-check`
     - :icon:`fa-check`
   * - Editor
     - :icon:`fa-check`
     - :icon:`fa-check`
     - :icon:`fa-check`
     - :icon:`fa-check`
     - :icon:`fa-check` with specific people or via link
     - :icon:`fa-check` but cannot change owner
     - :icon:`fa-check`
     - :icon:`fa-check`
   * - Viewer
     - :icon:`fa-check`
     - :icon:`oi-close`
     - :icon:`oi-close`
     - :icon:`fa-check`
     - :icon:`fa-check` only via link
     - :icon:`oi-close`
     - :icon:`oi-close`
     - :icon:`fa-check`

.. _spreadsheet/collaboration/static-spreadsheet:

Share a static spreadsheet
--------------------------

Spreadsheets containing only static data can be shared internally or externally by the owner of the
spreadsheet or any user with :guilabel:`Editor` rights.

To do so, click :icon:`fa-share-alt` :guilabel:`Share` in the upper-right corner above the
spreadsheet, then :ref:`configure access as appropriate <documents/access-rights>`.

.. _spreadsheet/collaboration/dynamic-spreadsheet:

Share a dynamic spreadsheet
---------------------------

A spreadsheet is considered a *dynamic spreadsheet* if it contains any of the following:

- formulas that retrieve live data from an Odoo database, e.g., in a :doc:`list or pivot table that
  has been inserted into the spreadsheet <insert>`
- a linked :ref:`data source <spreadsheet/insert/data-sources>`, even if the corresponding list or
  pivot table has been deleted from the spreadsheet
- links to Odoo menu items

Internal sharing
~~~~~~~~~~~~~~~~

Spreadsheets containing dynamic Odoo data can be shared *with internal users only* by the owner of
the spreadsheet or any user with :guilabel:`Editor` rights.

However, having access to a spreadsheet does not necessarily mean an internal user *sees* all the
data in the original spreadsheet. The visibility of dynamic Odoo data is based on an internal user’s
access rights to the model from which the data has been retrieved, and takes into account any record
rules that may restrict access.

.. important::
   Permissions to view data are taken into account when an internal user opens a spreadsheet, with
   the spreadsheet only being populated with data the user is authorized to see.

  .. example::
     A sales manager creates a spreadsheet that includes sales data for all the salespeople in their
     team. Users with the permission `Sales / User: Own Documents Only` only see data related to
     their own sales.

To share a spreadsheet containing dynamic Odoo data, click :icon:`fa-share-alt` :guilabel:`Share` in
the upper-right corner above the spreadsheet, then :ref:`configure access as appropriate
<documents/access-rights>`.

External sharing
~~~~~~~~~~~~~~~~

Spreadsheets containing dynamic Odoo data *cannot be accessed by external users*.

.. note::
   If an external user attempts to access a dynamic spreadsheet via a link, an error message is
   shown.

If a spreadsheet containing Odoo data needs to be shared with an external user, the owner of the
spreadsheet or a user with :guilabel:`Editor` rights can create a frozen, read-only version. In this
version, all Odoo formulas are converted to their value at the moment the frozen version is created,
and any links to Odoo menus are removed.

To create a frozen version of a spreadsheet that contains dynamic Odoo data, click
:icon:`fa-share-alt` :guilabel:`Freeze and share` in the upper-right corner above the spreadsheet,
then :ref:`configure access as appropriate <documents/access-rights>`.

.. tip::
   It is also possible to download a frozen version of a spreadsheet that contains Odoo data as an
   `.xlsx` file by clicking :menuselection:`File -->` :icon:`os-download` :menuselection:`Download`
   from the menu bar. The values of any dynamic data are frozen at the moment of download.

.. _spreadsheet/collaboration/comments-chatter:

Comments and chatter
====================

Odoo Spreadsheet offers two ways to communicate with other users who have access to the same
spreadsheet, namely by using:

- :ref:`comments <spreadsheet/collaboration/comments>`
- the spreadsheet's :ref:`chatter thread <spreadsheet/collaboration/chatter>`

.. _spreadsheet/collaboration/comments:

Use comments in a spreadsheet
-----------------------------

Comments, which are added to individual spreadsheet cells, are useful for discussing specific
elements of a spreadsheet. Other collaborators can be notified by typing `@` followed by their
name.

.. important::
   Only the spreadsheet's owner or users with :guilabel:`Editor` rights can use comments in a
   spreadsheet; both roles can perform the same actions. Comments are not visible to users with
   :guilabel:`Viewer` rights.

.. _spreadsheet/collaboration/comments-add-react:

Add or react to comments
~~~~~~~~~~~~~~~~~~~~~~~~

To add or react to a comment:

#. If the comment is:

   - the first comment being added to the cell, right-click the cell then click :icon:`os-comments`
     :guilabel:`Insert comment` or click :menuselection:`Insert -->` :icon:`os-comments`
     :menuselection:`Insert comment` from the menu bar.
   - a reaction to an existing comment thread on a cell, click on the relevant cell or on the
     comment thread to open the thread.

#. Type a comment in the text box.

   .. tip::
      Type `@` to tag users, or add emojis or GIFs by clicking :icon:`oi-smile-add` :guilabel:`Add a
      Reaction`.

#. Click :guilabel:`Send` or press `Ctrl` + `Enter`.

Click anywhere else in the spreadsheet to close the comment thread.

.. tip::
   To react to an individual comment with only an emoji, hover over the comment, click the
   :icon:`oi-smile-add` :guilabel:`(Add a Reaction)` icon, then select the desired emoji.

.. _spreadsheet/collaboration/comments-view:

View comments
~~~~~~~~~~~~~

When a comment has been added to a cell, a small yellow triangle appears in the top right corner of
the cell.

To view a comment thread on a single cell, hover over the cell; click the cell or the comment
thread to open the thread to be able to add a comment.

To view all comments on a spreadsheet, click :menuselection:`View -->` :icon:`os-comments`
:menuselection:`All comments` from the menu bar. Alternatively, after opening a comment thread,
click :guilabel:`Open all comments`.

The :guilabel:`Comments` panel opens on the right side of the spreadsheet. By default, comment
threads for :guilabel:`All sheets` of the spreadsheet are shown, grouped by sheet. To see only the
comment threads for the current sheet, select :guilabel:`This sheet` in the :guilabel:`Filter
comments` field.

Click on a comment thread in the :guilabel:`Comments` panel to open it.

.. _spreadsheet/collaboration/comments-edit-delete:

Edit or delete comments
~~~~~~~~~~~~~~~~~~~~~~~

.. note::
   A spreadsheet's owner or users with :guilabel:`Editor` rights can edit or delete any comment.

To edit a comment:

#. Hover over the comment, then click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon.
#. Click :icon:`fa-pencil` :guilabel:`Edit`.
#. Make the desired changes, then click :guilabel:`Save` or press `Enter`. To abort the edit, click
   :guilabel:`Cancel` or press `Escape`.

.. tip::
   A comment that has been modified has *(edited)* added to the end of the text.

To delete a comment:

#. Hover over the comment, then click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon.
#. Click :icon:`fa-trash` :guilabel:`Delete`.
#. Click :guilabel:`Confirm` to confirm the deletion.

.. _spreadsheet/collaboration/comments-resolve:

Resolve comment threads
~~~~~~~~~~~~~~~~~~~~~~~

To resolve a comment thread:

#. Access the :guilabel:`Comments` panel by clicking :menuselection:`View -->` :icon:`os-comments`
   :menuselection:`All comments` from the menu bar. Alternatively, with a comment thread open, click
   :guilabel:`Open all comments`.
#. Click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon for the relevant comment thread, then
   click :guilabel:`Resolve this thread`.

Once resolved, the comment thread is no longer accessible directly on the spreadsheet, but remains
visible in the :guilabel:`Comments` panel; resolved threads are identified by a :icon:`fa-check`
:guilabel:`(check)` icon.

To reopen a resolved comment thread, from the :guilabel:`Comments` panel, click the
:icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon for the relevant comment thread, then click
:guilabel:`Re-open this thread`.

.. _spreadsheet/collaboration/chatter:

Use a spreadsheet's chatter thread
----------------------------------

Whereas :ref:`comments <spreadsheet/collaboration/comments>` on specific spreadsheet cells are
suited for discussions about specific elements of a spreadsheet, a spreadsheet’s :doc:`chatter
thread <../discuss/chatter>` allows for a more general discussion.

To access the chatter thread of a spreadsheet:

#. With the **Documents** app open, navigate to the folder or section where the spreadsheet is
   saved.
#. Select the :icon:`oi-view-list` :guilabel:`(List)` view in the upper-right corner.
#. Select the relevant spreadsheet, then click the :icon:`fa-info-circle` :guilabel:`(Info & tags)`
   button in the upper-right corner next to the view selector. Alternatively, with the spreadsheet
   selected, click the :icon:`fa-cog` :guilabel:`Action` button, then select :icon:`fa-info-circle`
   :guilabel:`(Info & tags)`.

The spreadsheet’s chatter thread opens on the right of the screen, below the spreadsheet's
:ref:`details panel <documents/details-panel>`.
