===============
Sign a document
===============

When you are asked to sign a document, this typically involves adding your name, date, and signature
to a document. Depending on how the document has been shared with you, you can sign the document
electronically in Odoo:

- from the Sign app
- from a record's chatter
- from the Documents app

.. note::
   To be able to sign documents via the Documents app, the :guilabel:`Sign` action :ref:`must be
   enabled <sign/sign-document/enable-sign-option>` for the folder or sub-folder in which the
   document is stored.

To sign a document in Odoo:

#. Open the document:

   - From the Sign app: In :menuselection:`Sign --> Documents --> My Documents` or
     :menuselection:`--> All Documents`, click :guilabel:`Upload PDF`, select the relevant `.pdf`
     document(s), then click :guilabel:`Open`.
   - From a record's chatter or from the Documents app: Click on the `.pdf` document to open it.

#. :ref:`Add the relevant fields <sign/prepare-document/add-fields>` to the document, then click
   :guilabel:`Sign Now`.
#. In the :guilabel:`New Signature Request` window, ensure you are selected as the signer.
   Optionally:

   - to add the reference of the :ref:`certificate of completion
     <sign/security/certificate-of-completion>` to each page of the document(s), enable
     :guilabel:`Add certificate on each page`
   - to have one or more parties notified when the document is fully signed, add the relevant
     contact(s) or email address(es) in the :guilabel:`CC` field

#. Click :guilabel:`Sign Now`.

   .. tip::
      When signing a document that contains only :ref:`auto-completed fields
      <sign/fields/auto-fill>`, e.g., name, email, etc., click :guilabel:`Download` to immediately
      download a fully signed version, without having to complete the fields manually.

#. Complete and sign the document, then click :guilabel:`Validate & Send Completed Document`.

The signed document and the certificate of completion is sent to you, and to any contacts mentioned
in the :guilabel:`CC` field, via email; to download the signed document immediately, click
:guilabel:`Download`.

.. note::
   - After fully signing a document, an internal user is shown a list of any other documents
     awaiting their signature. They can then :guilabel:`Sign` or :guilabel:`View` the documents, if
     desired.
   - If the document was signed from a record's chatter, the signed document and the related
     certificate of completion are added to the chatter.

     .. image:: sign_received_document/chatter.png
        :alt: Signed document and certificate of completion added to Chatter

.. _sign/sign-document/enable-sign-option:

Enable the sign option in Documents
===================================

Enabling the :guilabel:`Sign` option for a folder or sub-folder in the Documents app allows any
document stored in that folder to be signed without having to leave the Documents app.

To enable the :guilabel:`Sign` option:

   #. In the Documents app, with the relevant folder or sub-folder open, click the :icon:`fa-cog`
      :guilabel:`(Actions)` icon beside the name of the folder.
   #. Click :icon:`fa-cog` :menuselection:`Actions on Select -->` :icon:`fa-caret-right`
      :menuselection:`Sign`.

     .. image:: sign_received_document/enable-sign-documents.png
        :alt: Signed document and certificate of completion added to Chatter
        :scale: 80%

.. seealso::
   :ref:`Folder-specific email aliases in the Documents app <documents/email-aliases>`
