==================================
Sign a document from a third party
==================================

When a third party requests that you sign a document, this typically involves adding your name,
date, and signature to the document. Depending on how the `.pdf` document has been shared with you,
there are various ways to sign the document electronically in Odoo:

- :ref:`from the Sign app <sign/sign-document/sign-app>`
- :ref:`from a record's chatter <sign/sign-document/chatter>`
- :ref:`from the Documents app <sign/sign-document/documents-app>`

.. tip::
   After fully signing a document, an internal user is shown a list of any other documents
   awaiting their signature. They can then :guilabel:`Sign` or :guilabel:`View` the documents.

   .. image:: sign_received_document/awaiting-signature.png
      :alt: List of other documents awaiting signature
      :scale: 80%

.. _sign/sign-document/sign-app:

From the Sign app
-----------------

If you receive a `.pdf` document as an attachment, you can upload it to the Sign app, add the
relevant fields, then download the signed version and share it with the sender.

To sign a document in the Sign app:

#. From :menuselection:`Documents --> My Documents` or :menuselection:`Documents --> All Documents`,
   click :guilabel:`Upload PDF`, select the relevant `.pdf` document(s), then click
   :guilabel:`Open`.
#. Prepare the document for signing by :ref:`adding the relevant fields
   <sign/prepare-document/add-fields>`.
#. Click :guilabel:`Sign Now`.
#. In the :guilabel:`New Signature Request` window, if desired:

   - enable :guilabel:`Add certificate on each page` to add the certificate of completion reference
     to each page of the document
   - to have a copy of the fully signed document emailed to a third party, add the relevant contact
     or enter an email address in the :guilabel:`CC` field

#. Click :guilabel:`Sign Now`.

   .. tip::
      When signing a document that contains only auto-completed fields, e.g., name, signature, etc.,
      click :guilabel:`Download` to directly download a fully signed version, without having to
      complete the fields manually.

#. Complete the fields, then click :guilabel:`Validate & Send Completed Document`.

The signed document is sent to you, and any contacts mentioned in the :guilabel:`CC` field via
email; to download the signed document and the *Certificate of completion* directly, click
:guilabel:`Download`.

.. _sign/sign-document/chatter:

From a record's chatter
-----------------------

If a third party has added a `.pdf` document as an attachment in the chatter of an Odoo record, you
can open it, add the relevant fields, then sign the document directly.

To sign a document from the chatter of an Odoo record:

#. Click on the `.pdf` document to open it.
#. Click :icon:`fa-edit` :guilabel:`Sign` in the top-right corner.
#. Prepare the document for signing by :ref:`adding the relevant fields
   <sign/prepare-document/add-fields>`.
#. Click :guilabel:`Sign Now`.
#. In the :guilabel:`New Signature Request` window, if desired:

   - enable :guilabel:`Add certificate on each page` to add the certificate of completion reference
     to each page of the document
   - to have a copy of the fully signed document emailed to a third party, add the relevant contact
     or enter an email address in the :guilabel:`CC` field

#. Click :guilabel:`Sign Now`.
#. Complete the fields, then click :guilabel:`Validate & Send Completed Document`.

The signed document is sent to you, and any contacts mentioned in the :guilabel:`CC` field via
email; to download it directly, click :guilabel:`Download`. The signed document is also added to the
chatter, along with the *Certificate of completion* in a separate `.pdf` file.

.. _sign/sign-document/documents-app:

From the Documents app
----------------------

.. note::
   In the Documents app, it is possible to set up :ref:`folder-specific email aliases
   <documents/email-aliases>` to have files that are sent to the alias automatically saved in the
   corresponding folder. To be able to sign documents via the Documents app, the :guilabel:`Sign`
   action needs to be enabled for the relevant folder or sub-folder.

   To enable this:

   #. With the relevant folder or sub-folder open, click the :icon:`fa-cog` :guilabel:`(Actions)`
      icon beside the name of the folder.
   #. Click :icon:`fa-cog` :menuselection:`Actions on Select -->` :icon:`fa-caret-right`
      :menuselection:`Sign`.

To sign a `.pdf` document saved in a folder in the Documents app for which :guilabel:`Sign` has been
enabled:

#. Click on the document to open it.
#. Click :guilabel:`Sign` in the top-right corner.
#. Prepare the document for signing by :ref:`adding the relevant fields
   <sign/prepare-document/add-fields>`.
#. Click :guilabel:`Sign Now`.
#. In the :guilabel:`New Signature Request` window, if desired:

   - enable :guilabel:`Add certificate on each page` to add the certificate of completion reference
     to each page of the document
   - to have a copy of the fully signed document emailed to a third party, add the relevant contact
     or enter an email address in the :guilabel:`CC` field

#. Click :guilabel:`Sign Now`.
#. Complete the fields, then click :guilabel:`Validate & Send Completed Document`.

The signed document is sent to you, and any contacts mentioned in the :guilabel:`CC` field via
email; to download the signed document and the *Certificate of completion* directly, click
:guilabel:`Download`.
