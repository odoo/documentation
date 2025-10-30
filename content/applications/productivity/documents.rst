=========
Documents
=========

**Odoo Documents** allows you to store, view, and manage files within Odoo.

Folders and documents are organized into sections accessible from the tree on the left. The
following sections are available:

- :guilabel:`All`: displays all folders and files the user has access to.
- :icon:`fa-building` :guilabel:`Company`: contains folders and files shared across the company.
  Access is determined by the :ref:`access rights <documents/access-rights>` defined for the folder
  and file.
- :icon:`fa-hdd-o` :guilabel:`My Drive`: the user's personal workspace for organizing and accessing
  files and folders they own or have uploaded.
- :icon:`fa-users` :guilabel:`Shared with me`: includes files that have been shared with the user
  but are not part of any parent folder they have access to.
- :icon:`fa-clock-o` :guilabel:`Recent`: shows recently modified files the user has permission
  to view or edit.
- :icon:`fa-trash` :guilabel:`Trash`: stores :ref:`deleted files and folders <documents/deletion-delay>`.

Click a section in the tree to view its contents. Select a folder to open it, :ref:`manage it
<documents/folders>`, and access its files.

Click a file to open it and :ref:`take available actions <documents/documents>`. To close the file,
press **Esc** or click the :icon:`fa-remove` (:guilabel:`close`) icon. You can also drag and drop a
file or folder to move it to another folder or section.

.. tip::
   - Use the :ref:`search bar <search/values>` to quickly find specific items.
   - The :doc:`chatter <discuss/chatter>` tracks changes to folders and files and allows
     communication with internal users and external contacts. Open the :ref:`Details panel
     <documents/details-panel>` to access it.

.. seealso::
   :doc:`Sign documentation <sign>`

Configuration
=============

.. _documents/deletion-delay:

Deletion delay
--------------

By default, items moved to the trash remain there for 30 days before being permanently deleted. To
adjust this delay, go to :menuselection:`Documents --> Configuration --> Settings` and edit the
:guilabel:`Deletion delay (days)` field.

.. _documents/file-centralization:

File centralization
-------------------

File centralization allows for automatically organizing all files associated with a specific app
into dedicated folders. It is enabled by default for each app upon installation. To disable file
centralization, modify the default folder, or configure the tags to be added to the app-specific
files, go to :menuselection:`Documents --> Configuration --> Settings`, and edit the relevant
setting under the :guilabel:`File Centralization` section.

.. tip::
   - File centralization cannot be disabled for :guilabel:`Accounting` documents. A sub-folder is
     automatically created for each journal type (e.g., Sales, Purchase, Bank, etc.), and the
     journal name is added as a tag on each document. Click :guilabel:`Journals` to edit the list of
     journals to synchronize and define their corresponding folders and tags.
   - For :guilabel:`Human Resources` files, a sub-folder is automatically created for each employee,
     and specific tags are added to the files based on the document type (e.g.,
     :guilabel:`Contracts`, :guilabel:`Payslips`, etc.). You can also create additional
     :guilabel:`Employee Subfolders` automatically by entering the desired folder names, separated
     by commas.

.. note::
   - Changing the folder or tags only affects new files; existing files remain unchanged.
   - When file centralization is enabled for an app, deleting a record in that app moves its
     attachments to the trash in the Documents app.

.. _documents/folders:

Folders
=======

You can organize files in folders available in the :icon:`fa-building` :guilabel:`Company` or
:icon:`fa-hdd-o` :guilabel:`My Drive` sections.

To create a folder, select the desired section in the tree, click :guilabel:`New`, and select
:guilabel:`Folder`. In the pop-up, enter the folder's :guilabel:`Name` and click :guilabel:`Save`.
To create a sub-folder, select the parent folder first, then follow the same steps.

.. note::
   Some folders and sub-folders are created automatically based on the :ref:`file centralization
   settings <documents/file-centralization>`.

To manage a folder or sub-folder, select it and click the :icon:`fa-cog` (:guilabel:`Actions`)
icon above the tree. The following options are available in the menu:

- :icon:`fa-download` :guilabel:`Download`: Download the folder as a .zip file, including its files
  and sub-folders.
- :icon:`fa-pencil-square-o` :guilabel:`Rename`: Modify the folder's name.
- :icon:`fa-share-alt` :guilabel:`Share`: :ref:`Share the folder and manage its access rights
  <documents/access-rights>`.
- :icon:`fa-star-o` :guilabel:`Add star`: Mark a folder as a favorite for quicker access. This
  setting is user-specific and does not affect other users' workspaces. You can then use the
  :ref:`Starred filter <search/favorites>` to navigate to your favorite folders quickly.
- :icon:`fa-info-circle` :guilabel:`Info & Tags`: View the folder's :ref:`details
  <documents/details-panel>` and chatter.
- :icon:`fa-trash` :guilabel:`Move to trash`: Move the folder and its content to the :ref:`trash
  <documents/deletion-delay>`.
- :icon:`fa-cog` :guilabel:`Actions on Select`: Define the server actions that are available (as
  buttons) for the files in the folder. Click an action to add or remove it. Click
  :guilabel:`Add Custom Action` to :ref:`create a new one <reference/actions/server>`.
- :icon:`fa-cog` :guilabel:`Automations`: Create :doc:`automation rules
  </applications/studio/automated_actions>`.

  .. important::
     Setting up automation rules requires activating :doc:`/applications/studio`, which may impact
     your `pricing plan <https://www.odoo.com/pricing>`_.

- :guilabel:`AI Auto-sort`: Use Odoo AI to automatically organize the files in the folder and
  trigger actions based on the provided AI prompt. Add the corresponding actions for your prompt in
  the lower section of the popup. This option requires the **Odoo AI** app to be installed.

.. tip::
   Switch to the list view to:

   - manage multiple folders at once.
   - :icon:`fa-upload` :guilabel:`Export` or :icon:`oi-view-list` :guilabel:`Insert in spreadsheet`
     one or multiple folders.
   - quickly execute actions such as :guilabel:`Share`, :guilabel:`Download`, :guilabel:`Rename`,
     etc. Hover over a folder line and click the corresponding icon at the end of the line to
     perform the desired action.

.. _documents/documents:

Files
=====

To upload a file, select the desired folder in the tree, click :guilabel:`New`, and select
:guilabel:`Upload`.

.. tip::
   - On Odoo Online databases, each uploaded file must not exceed 64MB.
   - You can also drag and drop a file from your computer to the desired folder within the Documents
     app.

URL links
---------

To add a link to a URL (e.g., a video) and make it accessible from a folder, click :guilabel:`New`
and select :guilabel:`Link`. Enter the :guilabel:`URL`, add a :guilabel:`Name`, and select the
appropriate :guilabel:`Folder`.

.. _documents/spreadsheet:

Spreadsheets
------------

To create a spreadsheet, click :guilabel:`New` and select :guilabel:`Spreadsheet`.

.. seealso::
   :doc:`Spreadsheet documentation <spreadsheet>`

Managing files
--------------

Several buttons are available in the top bar when opening a file:

- the :icon:`fa-cog` :guilabel:`Actions` menu, which includes the options described below
- :guilabel:`Share`: to :ref:`share the file and manage its access rights <documents/access-rights>`
- :guilabel:`Download`
- any :ref:`buttons defined for the folder <documents/folders>`

The following options are available in the :icon:`fa-cog` :guilabel:`Actions` menu:

- :icon:`fa-files-o` :guilabel:`Duplicate`: Create a copy of the file. In the popup, select or
  create the destination folder, then click :guilabel:`Duplicate in` *destination folder's name*.
- :icon:`fa-trash` :guilabel:`Move to Trash`: Move the file to the :ref:`trash
  <documents/deletion-delay>`.
- :icon:`fa-pencil-square-o` :guilabel:`Rename`
- :icon:`fa-info-circle` :guilabel:`Info & tags`: View the file's :ref:`details
  <documents/details-panel>` and chatter.
- :icon:`fa-sign-in` :guilabel:`Move`: Move the file to another folder. In the popup, select or
  create the destination folder, then click :guilabel:`Move to` *destination folder's name*.
- :icon:`fa-external-link-square` :guilabel:`Create shortcut`: A shortcut is a pointer to a file,
  allowing access from multiple folders without duplicating the file. In the popup, select or
  create the destination folder, then click :guilabel:`Create a shortcut in` *destination
  folder's name*.
- :icon:`fa-history` :guilabel:`Manage versions`: View all versions of the file in upload order,
  download a specific version, or upload a new one as needed.
- :icon:`fa-lock` :guilabel:`Lock`: Protect the file from any modifications.
- :icon:`fa-link` :guilabel:`Copy Links`: Copy the file's URL for sharing. Access is controlled
  based on the file's :ref:`access rights <documents/access-rights>`.
- :icon:`fa-scissors` :guilabel:`Split PDF`: :ref:`Split a PDF file <documents/pdfs>`.

.. tip::
   - You can use folder-specific :ref:`email aliases <documents/email-aliases>` to automatically
     save files sent to the alias into the corresponding folder.
   - Switch to the list view to:

     - manage multiple files at once.
     - :icon:`fa-upload` :guilabel:`Export` or :icon:`oi-view-list` :guilabel:`Insert in spreadsheet`
       one or multiple files.
     - quickly perform actions such as :guilabel:`Share`, :guilabel:`Download`, :guilabel:`Rename`,
       etc. Hover over a file line and click the corresponding icon at the end of the line to
       perform the desired action.

.. _documents/pdfs:

Splitting and merging PDFs
--------------------------

To divide a PDF into individual or groups of pages, open the PDF, click the :icon:`fa-cog`
:guilabel:`Actions` button, and select :icon:`fa-scissors` :guilabel:`Split PDF`. Click the
:icon:`fa-scissors` (:guilabel:`scissors`) icon between pages to remove a split if needed, then
click :guilabel:`Split` to confirm.

.. image:: documents/split-pdf.png
   :alt: Split a PDF

To merge PDF files, follow these steps:

#. Navigate to the folder containing the files you want to merge.
#. Hold down **Ctrl** and click the relevant files.
#. Click the :icon:`fa-cog` :guilabel:`Actions` button and select :icon:`fa-scissors`
   :guilabel:`Merge PDFs`.
#. If needed, click :guilabel:`Add file` to browse and select a PDF file from your computer.
#. Click the :icon:`fa-scissors` (:guilabel:`scissors`) icon between the files.
#. Click :guilabel:`Split` to merge them.

.. note::
   The original PDFs are replaced by the merged version.

.. tip::
   - Press **Shift + S** to add or remove all splits between pages.
   - To delete a specific page, select the page, then click :guilabel:`Delete`.

.. _documents/request:

Requesting files
----------------

Request files from users as a reminder for them to upload specific files. To do so, follow these
steps:

#. Click :guilabel:`New` and select :guilabel:`Request`.
#. Enter a :guilabel:`Document Name` and select the person you're requesting it from in the
   :guilabel:`Request To` field.
#. If needed, set a :guilabel:`Due Date In`, edit the :guilabel:`Folder` where the file should be
   added, add :guilabel:`Tags`, and write a :guilabel:`Message`.
#. Click :guilabel:`Request`.

A placeholder for the missing file is created in the selected folder. Once the file is available,
click the placeholder to upload it.

.. tip::
   You can also request a document from the :ref:`list of scheduled activities <activities/all>`.

To see the list of all requested files, switch to the Activity view of the Documents app and go to
the :guilabel:`Requested Document` column. Click a requested file's date to view its details.
You can then:

- Upload a file using the :icon:`fa-upload` (:guilabel:`upload`) button;
- Edit the activity using the :icon:`fa-pencil` (:guilabel:`edit`) button;
- Cancel the activity using the :icon:`fa-remove` (:guilabel:`cancel`) button;
- Send a reminder email. Click :guilabel:`Preview` to preview the content of the reminder email
  if needed, then :guilabel:`Send Now`.

To send a reminder email for all requested files, click the :icon:`fa-ellipsis-v`
(:guilabel:`ellipsis`) icon in the :guilabel:`Requested Document` column and select
:guilabel:`Document Request: Reminder`.

.. image:: documents/reminder-email.png
   :alt: Send a reminder email from the Activity view

.. _documents/details-panel:

Details panel
=============

To view a folder's or file's information and tags, select the folder or file, then click the
:icon:`fa-cog` icon (for folders) or :icon:`fa-cog` :guilabel:`Actions` button (for files) and
select :icon:`fa-info-circle` :guilabel:`Info & Tags`.

.. tip::
   Alternatively, for folders, you can also click the :icon:`fa-info-circle`
   (:guilabel:`Info & Tags`) button in the upper-right corner next to the view icons.

The details panel allows the following:

- Change the file's folder or the folder's name.
- View the file's or folder's size and the folder's item count.
- Change the file's or folder's owner and contact. By default, the person who creates a file or
  folder is set as its owner and granted full access rights to it. To change it, select the
  required user from the dropdown list. The contact is a person who only has :guilabel:`Viewer`
  :ref:`access rights <documents/access-rights>` to the file or folder, e.g., an existing supplier
  in the database.
- Access the :doc:`chatter </applications/essentials/activities>`.

To close the details panel, click the :icon:`fa-remove` (:guilabel:`remove`) button in the
upper-right corner.

  .. note::
     To view a file from their user profile, a user must be set as the contact and have at least
     :guilabel:`Viewer` :ref:`access <documents/access-rights>`.

.. _documents/email-aliases:

Email aliases
-------------

You can use an email alias to automatically save files sent to the email alias into a specific
folder. To set up an email alias for a folder, follow these steps:

#. Make sure a :ref:`custom alias domain <email-inbound-custom-domain>` is configured in the
   :guilabel:`General Settings`.
#. Select the folder where files should be saved.
#. Click the :icon:`fa-info-circle` (:guilabel:`Info & Tags`) in the upper-right corner next to the
   view icons.
#. In the details panel, enter the desired email alias.
#. Optionally, specify an :guilabel:`Activity type` and assignee to create an :doc:`activity
   </applications/essentials/activities>` when a file is received via the alias.
#. Optionally, select the :ref:`Tags <documents/tags>` to automatically apply to the files
   created through the alias.

.. note::
   Emails sent to the alias without attachments are converted into files, using the email subject as
   the file name.

.. seealso::
   :doc:`/applications/general/email_communication/email_servers_inbound`

.. _documents/tags:

Tags
----

Tags help organize and categorize files, making it easier to search and filter them.
To configure tags for files, go to :menuselection:`Documents --> Configuration --> Tags`. Click
:guilabel:`New` to create a new tag. Enter the :guilabel:`Tag Name`, select a :guilabel:`Color`, and
optionally add a :guilabel:`Tooltip` that appears when hovering over the tag.

To add tags to a file, open the file, click the :icon:`fa-cog` :guilabel:`Actions`, select
:icon:`fa-info-circle` :guilabel:`Info & Tags`, and then, in the details panel, select a tag from
the :guilabel:`Tags` dropdown menu (identifiable by its placeholder :guilabel:`Add tags`).

.. note::
  :ref:`Alias tags <documents/email-aliases>` can also be used to automatically apply tags to
  files created through the alias.

Linked records
--------------

To link the file to a specific record, select the appropriate model from the :guilabel:`Linked to`
dropdown menu (identifiable by its placeholder :guilabel:`No linked model`), then select the
desired record.

.. note::
   If :ref:`file centralization <documents/file-centralization>` is enabled for a specific app,
   adding a file to the Documents app by uploading an attachment automatically adds the
   corresponding record in the :guilabel:`Linked to field` of the file.

.. _documents/access-rights:

Sharing and access rights
=========================

.. note::
   You can only share folders and files and edit their access rights if you have editing rights.

Access rights can be set on:

- folders: Select the folder, click the :icon:`fa-cog` (:guilabel:`gear`) icon, and select
  :guilabel:`Share`.
- files: Open the file and click :guilabel:`Share` in the top bar.

.. tip::
   Switch to the list view to share or manage the access rights of multiple filers or folders at
   once.

To grant access to specific users or contacts, follow these steps:

#. In the :icon:`fa-user-plus` (:guilabel:`Invite people`) field, select the users or contacts you
   want to grant access to from the dropdown menu or enter their email address.

   .. note::
      :guilabel:`Access through link` must be enabled first before granting access to external
      contacts.

#. Set the :guilabel:`Role` field to :guilabel:`Viewer` or :guilabel:`Editor`.
#. If desired, toggle the :guilabel:`Notify` switch off to avoid sending a notification email.
#. Click :guilabel:`Share` to grant access (with or without a notification) or :guilabel:`Copy
   Links` to copy the sharing link to the clipboard.

.. tip::
   To remove a permission or set an expiration date for it, hover the mouse over the relevant
   contact and click the :icon:`fa-remove` (:guilabel:`remove`) or :icon:`fa-calendar`
   (:guilabel:`calendar`) button, respectively.

   .. image:: documents/remove-permission.png
      :alt: Hover the mouse over a permission to reveal the buttons.

To configure :guilabel:`General access` for :guilabel:`Internal users` or :guilabel:`Access through
link`, select :guilabel:`Viewer`, :guilabel:`Editor`, or :guilabel:`None` (to completely restrict
access). For :guilabel:`Access through link`, you can also specify whether the folder or file should
be :guilabel:`Discoverable` (i.e., accessible through browsing). Click :guilabel:`Save`
to apply the changes, then :guilabel:`Copy Links` to copy the sharing link to the clipboard.

.. note::
   - Each folder and file URL includes the access rights assigned to it. When you share a link to a
     folder, recipients are directed to a dedicated portal where they can view the files in that
     folder, excluding any with restricted access.
   - :doc:`Portal users </applications/general/users/portal>` can access folders and files they have
     permission to view or edit through the customer portal by clicking the :guilabel:`Documents`
     card.

Managing files across apps
==========================

You can save files to or attach existing files in the Documents app from any record.

- To save an attachment to the Documents app, hover over an attachment in the record's chatter
  and click the :icon:`fa-hdd-o` (:guilabel:`Add to Documents`) icon.

- To attach a file to a record from the record's chatter, click the :guilabel:`Add from Documents`
  icon, select the desired file, and click :guilabel:`Add from Documents` to add the
  raw file, or :guilabel:`Paste Link(s)` to insert a link to the file (and preserve the document's
  :ref:`access rights <documents/access-rights>`).

- To insert a file from Documents into the :doc:`Odoo rich-text editor
  </applications/essentials/html_editor>`, type `/file`, then select the desired file, and click
  :guilabel:`Add from Documents` to add the raw file, or :guilabel:`Paste Link(s)` to insert a link
  to the file (and preserve the document's :ref:`access rights <documents/access-rights>`).

.. _documents/file-digitization:

File digitization with AI
=========================

Files available in the Finance folder can be digitized. Select the file, click :guilabel:`Create
Vendor Bill`, :guilabel:`Create Customer Invoice`, or :guilabel:`Create Customer Credit Note`,
then click :guilabel:`Send for Digitization`.

.. seealso::
   :doc:`AI-powered document digitization <../finance/accounting/vendor_bills/invoice_digitization>`
