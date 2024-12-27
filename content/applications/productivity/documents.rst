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
     communication with internal users and external contacts. Click the :icon:`fa-info-circle`
     (:guilabel:`Info & Tags`) button in the upper-right corner next to the view to access it.

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

Enabling file centralization for a specific app automatically organizes all associated files into
dedicated folders. To do so, go to :menuselection:`Documents --> Configuration --> Settings`. For
example, enabling :guilabel:`Human Resources` makes HR documents automatically available in the
:guilabel:`HR` folder, while documents related to Payroll are automatically available in the
:guilabel:`Payroll` sub-folder. Select the desired folder from the dropdown list and select the
:ref:`Tags <documents/tags>` to be added to the relevant files.

.. tip::
   When centralizing accounting files, click :guilabel:`Journals` to configure specific
   sub-folders for individual journals.

.. note::
   - Changing the folder or tags does not affect existing files; the changes will apply only to
     newly created ones.
   - If file centralization is enabled for an app, deleting a record in that app moves its
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
- :icon:`fa-share-alt` :guilabel:`Share`: :ref:`Share the folder or manage its access rights
  <documents/access-rights>`.
- :icon:`fa-external-link-square` :guilabel:`Add shortcut`: This option is only available for
  sub-folders and allows to create a shortcut to a sub-folder.

  - If you have editing permissions, the shortcut is created in the same folder.
  - If you don't have editing permissions, the shortcut appears in the :icon:`fa-hdd-o`
    :guilabel:`My Drive` section.

  You can then drag and drop it into the desired folder.
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
   Setting up custom actions and automation rules may impact your `pricing plan
   <https://www.odoo.com/pricing>`_.

.. _documents/documents:

Files
=====

To upload a file, select the desired folder in the tree, click :guilabel:`New` and select
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

- the :icon:`fa-cog` :guilabel:`Action` menu, which includes the options described below
- :guilabel:`Share`: to :ref:`share the file or manage its access rights <documents/access-rights>`
- :guilabel:`Download`
- any :ref:`buttons defined for the folder <documents/folders>`

The following options are available in the :icon:`fa-cog` :guilabel:`Action` menu:

- :icon:`fa-files-o` :guilabel:`Duplicate`: Create a copy of the file.
- :icon:`fa-trash` :guilabel:`Move to Trash`: Move the file to the :ref:`trash
  <documents/deletion-delay>`.
- :icon:`fa-pencil-square-o` :guilabel:`Rename`
- :icon:`fa-info-circle` :guilabel:`Info & tags`: View the file's :ref:`details
  <documents/details-panel>` and chatter.
- :icon:`fa-external-link-square` :guilabel:`Create shortcut`: A shortcut is a pointer to a file,
  allowing access from multiple folders without duplicating the file.

  - If you have editing permissions, the shortcut is created in the same folder.
  - If you don't have editing permissions, the shortcut appears in the :icon:`fa-hdd-o`
    :guilabel:`My Drive` section.

  You can then drag and drop it into the desired folder.
- :icon:`fa-history` :guilabel:`Manage versions`: View all versions of the file in upload order,
  download a specific version, or upload a new one as needed.
- :icon:`fa-lock` :guilabel:`Lock`: Protect the file from any modifications.
- :icon:`fa-link` :guilabel:`Copy Links`: Copy the file's URL for sharing. Access is controlled
  based on the file's :ref:`access rights <documents/access-rights>`.
- :icon:`fa-scissors` :guilabel:`Split PDF`: :ref:`Split a PDF file <documents/pdfs>`.

.. tip::
   You can use folder-specific :ref:`email aliases <documents/email-aliases>` to automatically save
   files sent to the alias into the corresponding folder.

.. _documents/pdfs:

Splitting and merging PDFs
--------------------------

To divide a PDF into individual or groups of pages, open the PDF and click :icon:`fa-scissors`
:guilabel:`Split PDF` in the upper-right part of the document preview. Click the
:icon:`fa-scissors` (:guilabel:`scissors`) icon between pages to remove a split if needed, then
click :guilabel:`Split` to confirm.

.. image:: documents/split-pdf.png
   :alt: Split a PDF

To merge PDF files, follow these steps:

#. Navigate to the folder containing the files you want to merge, then switch to the list view and
   select the relevant files.
#. Click the :icon:`fa-cog` :guilabel:`Action` button and select :icon:`fa-scissors`
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
#. If needed, set a :guilabel:`Due Date In`, choose the :guilabel:`Folder` where the file should be
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

To view a folder's or file's information and tags, select the folder or file, then click
the :icon:`fa-info-circle` (:guilabel:`Info & Tags`) button in the upper-right corner next to the
view icons.

The details panel allows the following:

- Change the file's folder or the folder's name.
- View the file's or folder's size and the folder's item count.
- Change the file's or folder's :guilabel:`Owner` and :guilabel:`Contact`. By default, the
  person who creates a file or folder is set as its :guilabel:`Owner` and granted full access
  rights to it. To change it, select the required user from the dropdown list. The
  :guilabel:`Contact` is a person who only has :guilabel:`Viewer` :ref:`access rights
  <documents/access-rights>` to the file or folder, e.g., an existing supplier in the database.

  .. note::
     To view a file from their user profile, a user must be set as the :guilabel:`Contact` and have
     at least :guilabel:`Viewer` :ref:`access <documents/access-rights>`.

.. _documents/email-aliases:

Email aliases
-------------

You can use an email alias to automatically save files sent to the email alias into a specific
folder. To set up an email alias for a folder, follow these steps:

#. Select the folder where files should be saved.
#. Click the :icon:`fa-info-circle` (:guilabel:`Info & Tags`) in the upper-right corner next to the
   view icons.
#. In the details panel, enter the desired :guilabel:`Email` alias and select or create the domain.
#. Optionally, specify an :guilabel:`Activity type` and assignee to create an :doc:`activity
   </applications/essentials/activities>` when a file is received via the alias.
#. Optionally, select the :ref:`Tags <documents/tags>` to automatically apply to the files
   created through the alias.

.. seealso::
   :doc:`/applications/general/email_communication/email_servers_inbound`

.. _documents/tags:

Tags
----

Tags help organize and categorize files, making it easier to search and filter them.
To configure tags for files, go to :menuselection:`Documents --> Configuration --> Tags`. Click
:guilabel:`New` to create a new tag. Enter the :guilabel:`Tag Name`, select a :guilabel:`Color`, and
optionally add a :guilabel:`Tooltip` that appears when hovering over the tag.

To add tags to a file, open the file, click the :icon:`fa-info-circle` (:guilabel:`Info & Tags`) in
the upper-right corner next to the view icons, and then, in the details panel, select a tag from the
dropdown list.

.. note::
  :ref:`Alias tags <documents/email-aliases>` can also be used to automatically apply tags to
  files created through the alias.

.. _documents/access-rights:

Share and access rights
=======================

.. note::
   You can only share folders and files and edit their access rights if you have editing rights.

Access rights can be set on:

- folders: Select the folder, click the :icon:`fa-cog` (:guilabel:`gear`) icon, and select
  :guilabel:`Share`.
- files: Open the file and click :guilabel:`Share` in the top bar.

In the :guilabel:`Share` pop-up, grant access to specific users or contacts by selecting their name
from the dropdown menu or by adding their email address manually, then select :guilabel:`Viewer` or
:guilabel:`Editor`.

.. tip::
   To remove a permission or set an expiration date for it, hover the mouse over the relevant
   contact and click the :icon:`fa-remove` (:guilabel:`remove`) or :icon:`fa-calendar`
   (:guilabel:`calendar`) button, respectively.

   .. image:: documents/remove-permission.png
      :alt: Hover the mouse over a permission to reveal the buttons.

To set :guilabel:`General access` for :guilabel:`Internal users` or :guilabel:`Anyone with the
link`, select :guilabel:`Viewer`, :guilabel:`Editor`, or :guilabel:`None` (to restrict access
completely). For :guilabel:`Anyone with the link`, you can further specify whether the folder or
file should be :guilabel:`Discoverable` (accessible through browsing) or require that users
:guilabel:`Must have the link to access` it.

.. note::
   - Public users :guilabel:`Must have the link to access` a folder or file on the portal when
     connecting for the first time.
   - Each folder and file URL includes the access rights that have been set for it. When you
     share a folder, the person you share it with is directed to a dedicated portal where they can
     view the files in that folder, excluding any with restricted access.

.. tip::
   :doc:`Portal users </applications/general/users/portal>` can access folders and files they have
   permission to view or edit through the customer portal by clicking the :guilabel:`Documents`
   card.

File digitization with AI
=========================

Files available in the Finance folder can be digitized. Select the file, click :guilabel:`Create
Vendor Bill`, :guilabel:`Create Customer Invoice`, or :guilabel:`Create Customer Credit Note`,
then click :guilabel:`Send for Digitization`.

.. seealso::
   :doc:`AI-powered document digitization <../finance/accounting/vendor_bills/invoice_digitization>`
