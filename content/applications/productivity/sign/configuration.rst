=============
Configuration
=============

.. _sign/configuration/settings:

Settings
========

Sign's general settings, available via :menuselection:`Sign --> Configuration --> Settings`, offer
possibilties to:

- adding :ref:`default terms and conditions <sign/configuration/settings-t-and-c>` to the signature
  request email
- managing template access by restricting access to specific user groups only; once enabled, access
  is managed when :ref:`creating or editing a template
  <sign/request-signatures/create-manage-templates>`
- enabling additional authentication via:

  - :ref:`Aadhaar eSign <sign/security/authentication-aadhaar>` (available in India), including
    managing the service, and buying credits
  - :ref:`itsme® <sign/security/authentication-itsme>` (available in the EU, the UK, Norway and
    Iceland), including managing the service, and buying credits

- managing authentication via SMS and :ref:`buying credits <in_app_purchase/credits>`

.. _sign/configuration/settings-t-and-c:

Default terms and conditions
----------------------------

Terms and conditions allow a business to standardize the legal relationship with its clients, define
obligations and expectations, manage risk, and protect its interests by setting clear rules for
aspects such as liability and dispute resolution.

To add default terms and conditions to signature requests sent via email:

#. Go to :menuselection:`Sign --> Configuration --> Settings`.
#. Enable :guilabel:`Default Terms & Conditions`. By default, the :guilabel:`Terms in Email`
   option is selected; this option places the terms and conditions at the bottom of the signature
   request email.
#. Add your terms and conditions to the text box.

   .. tip::
      Type `/` to open the :ref:`powerbox <essentials/html_editor/commands>`, then use commands to
      insert headings, bulleted lists, etc.

#. Click :guilabel:`Save`.

Alternatively, to display the terms and conditions on a web page, select :guilabel:`Terms as Web
Page` option, then click :guilabel:`Save`. Click :guilabel:`Update Terms`, edit the
content, and click :guilabel:`Save`. The link to that page is then added as a link in the signature
request email.

.. tip::
   You can also add a `.pdf` version of your terms and conditions manually as an attachment to
   signature requests. Alternatively, for templates, documents can be attached by default in the
   :guilabel:`Communication` section of the template :guilabel:`Configuration` when :ref:`creating
   or editing the template <sign/request-signatures/create-manage-templates>`.

.. _sign/configuration/fields:

Fields
======

Fields are :ref:`added to documents <sign/prepare-document/add-fields>` to indicate what information
must be completed by the signers. Various fields are available by default. These fields can be
:ref:`edited and additional fields can be created <sign/fields/create-edit-fields>` if needed.

Fields are managed in :menuselection:`Sign --> Configuration --> Fields`.

.. _sign/fields/create-edit-fields:

Create and edit fields
----------------------

To create or edit a field:

#. Go to :menuselection:`Sign --> Configuration --> Fields`.
#. Click :guilabel:`New` to create a new field or click on a field to open and edit it.
#. Complete or edit the following fields:

   - :guilabel:`Field Name`: Enter or edit the field name. This is visible in the list of fields in
     the left panel when a document is being prepared for signature.
   - :guilabel:`Type`: Choose the relevant :ref:`field type <sign/fields/field-types>` from the
     dropdown; there are nine possible :ref:`field types <sign/fields/field-types>`.
   - :guilabel:`Placeholder`: Optionally, specify a placeholder text for the field. If this field is
     left blank, the :guilabel:`Field Name` is used as placeholder text.
   - :guilabel:`Tip`: Optionally, add a tip to guide the signer. A tip is displayed inside an arrow
     on the left-hand side of the signer's screen during the signing process to help them understand
     what the step entails (e.g., "Sign here").
   - :guilabel:`Field Size`: By default, the size of new fields is set to :guilabel:`Regular Text`.
     For fields that will contain particularly short or long values, it is possible to change this
     to :guilabel:`Short Text` or `Long Text`, respectively.

     .. tip::
        When adding a field to a document or document envelope, change the size of the field
        manually by hovering over the bottom right of the field until the horizontal, vertical or
        diagonal double arrows appear, then drag the edge of the box until it reaches the desired
        size.

   - :guilabel:`Linked to`: Linking the field to a model, and then defining a :guilabel:`Linked
     field`, allows the field to be :ref:`auto-completed during signing <sign/fields/auto-fill>`.

.. _sign/fields/field-types:

Field types
-----------

- :guilabel:`Signature`: Signers enter their signature either by drawing it, generating an automatic
  signature based on their name, or uploading a local file (usually an image). Each subsequent
  :guilabel:`Signature` field in a document reuses the data entered in the first field.
- :guilabel:`Initial`: Signers enter their initials, in a similar way to the :guilabel:`Signature`
  field.

  .. tip::
     If an :guilabel:`Initials` field is added to a multi-page document, a pop-up message asks if
     you want to add initials to all pages of the document, or if they should only be added once.

- :guilabel:`Text`: Signers can enter text on a single line.
- :guilabel:`Multiline Text`: Signers can enter text on multiple lines.
- :guilabel:`Checkbox`: Signers can tick a box (e.g., to confirm they accept the terms and
  conditions).
- :guilabel:`Radio`: Signers can select a single option from a series of options by clicking the
  radio button beside the desired option.
- :guilabel:`Selection`: Signers can select a single option from a series of options by clicking the
  text of the desired option; the remaining options are crossed out.
- :guilabel:`Strikethrough`: Signers can reject certain phrases by clicking the strikethrough field;
  this adds a visible line through the text. Phrases that have not been struck through are
  considered as accepted by the signer.

  .. tip::
     To use this field type to allow signers to reject certain phrases, place a
     :guilabel:`Strikethrough` field on top of the relevant text. Ensure that the field is neither
     :guilabel:`Mandatory` nor :guilabel:`Read-only` to allow the signer to freely decide which
     phrases to reject.

- :guilabel:`Stamp`: Signers can add a company stamp to the document.

.. _sign/fields/auto-fill:

Auto-completed fields
---------------------

To reduce the need for manual input and ensure accurate and consistent information, it is possible
to have certain fields automatically completed with data from your database during the signing
process. This is done by linking a Sign field to a field from a specific model.

To enable auto-completion for a Sign field:

#. Go to :menuselection:`Sign --> Configuration --> Fields`.
#. Open the relevant field.
#. From the dropdown beside :guilabel:`Linked to` select the model, e.g., *Contact* containing the
   field you want to link to.
#. Click beside :guilabel:`Linked Field`, then use the field selector to select the relevant field
   e.g., Email.

When a document containing this field is being signed, the field is auto-completed. By default,
field can still be edited after auto-completion. However, this can be prevented by editing the
field *after it has been added to the document* and setting it to :guilabel:`Read only`.

.. example::
   In the example, the :icon:`fa-envelope` :guilabel:`Email` field in the Sign app is linked to the
   :guilabel:`Email` field in the *Contact* model. When the contact completes the document, their
   email address, as it appears in their record in the Odoo database, is automatically added to the
   document.

   .. image:: configuration/auto-complete.png
      :alt: Configuring a field to be auto-completed
      :scale: 80%

.. _sign/configuration/tags:

Tags
====

Tags can be used to categorize and organize documents with the Sign app, allowing users to quickly
search for and filter documents based on specific criteria.

Tags are managed in :menuselection:`Sign --> Configuration --> Tags`.

To create a new tag:

#. Go to :menuselection:`Configuration --> Tags`.
#. Click :guilabel:`New`.
#. On the new line that is added at the bottom of the list of tags, type the :guilabel:`Tag Name`
   and select a :guilabel:`Color Index` for your tag.

To duplicate or delete a tag, select the tag, click the :icon:`fa-cog` :guilabel:`Actions` button,
then click :icon:`fa-clone` :guilabel:`Duplicate` or :icon:`fa-trash` :guilabel:`Delete`.
