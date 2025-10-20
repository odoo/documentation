===============
Sign a document
===============

Depending on the situation, you may need to sign:

- a single document or :ref:`envelope of multiple documents
  <sign/prepare-document/create-envelope>` that you or another person :ref:`prepared for electronic
  signature using Odoo Sign <sign/sign-document/signature-request>`; or
- one or more `.pdf` documents that have :ref:`not been prepared for electronic signature
  <sign/sign-document/pdf-document>` by the sender

.. _sign/sign-document/signature-request:

Sign a document prepared using Odoo Sign
========================================

Documents prepared using Odoo Sign contain a series of fields to indicate what information must be
completed by the signer(s).

.. note::
   Fields with a colored background are mandatory, while fields with a dotted border and a white
   background are optional. Fields that have been :ref:`auto-completed
   <sign/sign-document/auto-complete>` and set to read-only have a solid border and a white
   background; these fields are populated as soon as the document is opened.

   .. example::
      In the example below, the :guilabel:`Name` and :guilabel:`Signature` fields are mandatory,
      while the :guilabel:`Job title` field is optional. The :guilabel:`Email` field has been
      auto-completed and set to read-only.

      .. image:: sign_document/field-characteristics.png
         :alt: Examples of mandatory, optional, and read-only fields
         :scale: 80%

To sign a document prepared using Odoo Sign:

#. Click on each field to enter the requested information, or, to be guided through the fields in
   order, click the :guilabel:`Click to start` arrow, click on the indicated field to enter the
   requested information, then use the arrows to progress through the document.

   .. note::
      - Fields set to be auto-completed but *not* read-only are populated when clicked or when
        arriving at the field using the navigational arrows; these fields can still be edited.
      - When completing an :guilabel:`Initial` or :guilabel:`Signature` field, you may need to
        :ref:`define the visual representation of your initials/signature
        <sign/sign-document/initials-signature>`.

#. When all required fields have been completed, click :guilabel:`Validate & Send Completed
   Document` at the bottom of the document.

   If there are :ref:`multiple documents <sign/prepare-document/create-envelope>` to sign, click
   :guilabel:`Next` at the bottom of the document, enter the requested information for the next and
   any subsequent documents. Once all documents have been signed, click :guilabel:`Validate & Send
   Completed Document`.

After signing the document:

- If other signers still need to sign the document, a message informs you of this. Click
  :guilabel:`Next signatory`.
- If you are the only or last signer, you can :guilabel:`Download` the document directly.
- If you are an internal user, a list shows any other documents awaiting your signature; you
  can then :guilabel:`Sign` or :guilabel:`View` the documents.

Once a document or document envelope has been fully signed, i.e., signed by all signers, the signed
document(s) and the :ref:`certificate of completion <sign/security/certificate-of-completion>` are
sent via email to the signers and to any other parties defined by the sender.

.. _sign/sign-document/auto-complete:

Auto-completed fields
---------------------

In Odoo Sign, certain field types can be :ref:`configured to be auto-completed
<sign/fields/auto-fill>` using data about the signer, e.g., name or email address, that is stored in
the sender's Odoo database.

Depending on the configuration, these fields can be read-only or can still be edited after
auto-completion.

.. _sign/sign-document/initials-signature:

Define initials and signature
-----------------------------

If you are an:

- **internal user**, the first time you use Odoo Sign to complete an :guilabel:`Initial` or
  :guilabel:`Signature` field, you need to define how your initials or signature appear. Thereafter,
  your initials/signature are stored for future use.

- **external user**, you need to define how your initials or signature appear the first time you
  complete such a field in a document or document envelope prepared using Odoo Sign.

To define how your initials/signature should appear after clicking the relevant field in a document:

#. In the :guilabel:`Adopt Your Signature` window, enter your full name.
#. Choose whether to:

   - use the :guilabel:`Auto`-generated initials/signature, and select your desired font from the
     :icon:`fa-font` :icon:`fa-caret-down` :guilabel:`(font)` dropdown;
   - :guilabel:`Draw` your own initials/signature using your mouse; or
   - :guilabel:`Load` an image file of your initials/signature.

   .. image:: sign_document/hash-frame.png
      :alt: Options for adopting a signature plus hash frame option
      :scale: 80%

   .. tip::
      Internal users can choose to keep or turn off the security :guilabel:`Frame` that contains the
      beginning of the :ref:`signatory hash <sign/security/hash>`, i.e., the unique digital
      signature of the operation.

#. Click :guilabel:`Sign all` to add the initials/signature to all instances in the current document
   or click :guilabel:`Sign` to only add the initials/signature to the current instance in the
   current document.

If there are multiple documents to sign within the same document envelope, the defined
initials/signature can thereafter be added directly by clicking the relevant field.

.. _sign/sign-document/pdf-document:

Sign an unprepared .pdf document
================================

When you are asked to sign a `.pdf` document that has not been prepared for electronic signature,
this typically involves adding your name, date, and signature to the document. Depending on how the
document has been shared with you, you can sign the document electronically in Odoo:

- from the Sign app
- from a record's chatter
- from the :doc:`Documents <../documents>` app

.. tip::
   To be able to sign documents via the Documents app, ensure that :ref:`the Sign action
   is enabled <sign/sign-document/enable-sign-option>` for the folder in which the document is
   stored.

To sign a document in Odoo:

#. Open the document:

   - From the Sign app: Go to :menuselection:`Sign --> Documents --> My Documents` or
     :menuselection:`--> All Documents`, click :guilabel:`Upload PDF`, select the relevant `.pdf`
     document(s), then click :guilabel:`Open`.
   - From a record's chatter or from the Documents app: Click on the `.pdf` document to open it,
     then click :guilabel:`Sign` in the upper-right corner.
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

#. :ref:`Complete and sign the document(s) <sign/sign-document/signature-request>`.

The signed document(s) and the certificate of completion are sent to you, and to any contacts
mentioned in the :guilabel:`CC` field, via email; to download the signed document immediately, click
:guilabel:`Download`.

.. note::
   - After signing, a list of any other documents awaiting your signature is shown. You can then
     :guilabel:`Sign` or :guilabel:`View` the documents.
   - If the document was signed from a record's chatter, the signed document and the related
     certificate of completion are added to the chatter.

.. _sign/sign-document/enable-sign-option:

Enable the Sign option in Documents
===================================

Enabling the :guilabel:`Sign` option for a :ref:`folder or sub-folder in the Documents app
<documents/folders>` allows any document saved in that folder to be signed without having to leave
the Documents app.

.. note::
   This option can be particularly useful if you receive documents directly in Documents folders
   thanks to :ref:`email aliases set on certain folders <documents/email-aliases>`, e.g., sales
   contracts sent to the alias `salescontracts@yourcompany.com`.

To enable the :guilabel:`Sign` option:

   #. In the Documents app, with the relevant folder or sub-folder open, click the :icon:`fa-cog`
      :guilabel:`(Actions)` icon beside the name of the folder.
   #. Click :icon:`fa-cog` :menuselection:`Actions on Select -->` :icon:`fa-caret-right`
      :menuselection:`Sign`.
