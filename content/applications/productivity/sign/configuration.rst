=============
Configuration
=============

.. _sign/configuration/settings:

Settings
========

Sign's general settings, available via :menuselection:`Sign --> Configuration --> Settings`, allow
you to:

- add :ref:`Default Terms & Conditions <sign/configuration/settings-t-and-c>` to the signature
  request email
- :guilabel:`Manage template access`; once enabled, it is possible to restrict access to a template
  to specific user groups when :ref:`creating or editing the template
  <sign/request-signatures/templates>`
- enable the following additional authentication methods, manage the service, and buy credits:

  - :ref:`Aadhaar eSign <sign/security/authentication-aadhaar>` (available in India)
  - :ref:`itsme® <sign/security/authentication-itsme>` (available in the EU, the UK, Norway, and
    Iceland)

- manage authentication via SMS and :ref:`buy credits <in_app_purchase/credits>`
- upload a `.p12` or `.pfx` file containing a personal digital certificate, allowing you to add a
  :ref:`cryptographic, or digital, signature <sign/security/cryptographic>` to a document

.. _sign/configuration/settings-t-and-c:

Default terms and conditions
----------------------------

Terms and conditions allow a business to standardize the legal relationship with its clients, define
obligations and expectations, manage risk, and protect its interests by setting clear rules for
aspects such as liability and dispute resolution.

To add default terms and conditions to signature requests:

#. Go to :menuselection:`Sign --> Configuration --> Settings` and enable :guilabel:`Sign Default
   Terms & Conditions`.

#. Choose the desired option:

   - :guilabel:`Terms in Email`: This option is selected by default and places the terms and
     conditions at the bottom of the signature request email. Add your terms and conditions to the
     text box.
   - :guilabel:`Terms as Web Page`: This option displays the terms and conditions on a web page; the
     link to that page is then added as a link in the signature request email. Click
     :guilabel:`Save`, then click :guilabel:`Update Terms`. Add your terms and conditions to the
     text box, then click :guilabel:`Save`. Click :guilabel:`Preview` to see how the terms and
     conditions will be displayed.

   .. tip::
      In the text box, type `/` to open the :ref:`powerbox <essentials/html_editor/commands>`, then
      use commands to insert headings, bulleted lists, etc.

#. Click :guilabel:`Save`.

.. note::
   It is also possible to manually attach files, such as terms and conditions, when
   :ref:`configuring a signature request <sign/request-signatures/configure-request>`. For
   :ref:`templates <sign/request-signatures/templates>`, files can be attached by default in the
   :guilabel:`Communication` section of the template :guilabel:`Configuration` when creating or
   editing the template.

.. _sign/configuration/fields:

Fields
======

Fields are :ref:`added to documents <sign/request-signatures/add-fields>` to indicate what
information must be completed by the signers. Various fields are available by default. These fields
can be :ref:`edited and additional fields can be created <sign/configuration/create-edit-fields>`
if needed.

.. _sign/configuration/create-edit-fields:

Create and edit fields
----------------------

To create or edit a field:

#. Go to :menuselection:`Sign --> Configuration --> Fields`.
#. Click :guilabel:`New` to create a new field or click on a field to open and edit it.
#. Choose the relevant :ref:`field type <sign/configuration/field-types>` by clicking the
   corresponding button at the top of the form.
#. Complete or edit the following fields:

   - :guilabel:`Field Name`: Enter or edit the field name. This is visible in the list of fields in
     the left panel when a document is being :ref:`prepared for signature
     <sign/request-signatures/prepare-document>`.
   - :guilabel:`Placeholder`: Optionally, specify a placeholder text that provides the signer with a
     hint or example :ref:`during the signing process <sign/sign-document/signature-request>`. If
     this field is left blank, the :guilabel:`Field Name` is used as placeholder text.
   - :guilabel:`Tip`: Add a tip that will be displayed inside an arrow to the left
     of the document during the signing process to help the signer understand what action to take
     (e.g., "Sign here").
   - :guilabel:`Mandatory`: Enable the checkbox to make the field mandatory by default.
   - :guilabel:`Read Only`: Enable the checkbox to make the field read-only by default.

     .. note::
        The :guilabel:`Mandatory` and :guilabel:`Read Only` attributes of a field can be modified
        manually when :ref:`adding the field to a document <sign/request-signatures/add-fields>`.

   - For :guilabel:`Text`, :guilabel:`Multiline Text`, and :guilabel:`Date` fields only, use the
     :guilabel:`Linked to` field to :ref:`configure auto-completion
     <sign/configuration/auto-fill>` so the field is auto-completed during the signing process.

.. _sign/configuration/field-types:

Field types
~~~~~~~~~~~

- :guilabel:`Signature`: Signers enter their signature either by generating an automatic
  signature based on their name, drawing it using their mouse, or uploading a local file (usually an
  image). Each subsequent :guilabel:`Signature` field in a document reuses the data entered in the
  first field.
- :guilabel:`Initial`: Signers enter their initials, in a similar way to the :guilabel:`Signature`
  field.
- :guilabel:`Text` and :guilabel:`Multiline Text`: Signers can enter text on a single line or on
  multiple lines, respectively. These field types can be :ref:`configured to be auto-completed
  <sign/configuration/auto-fill>` during the signing process.
- :guilabel:`Checkbox`: Signers can tick a box (e.g., to confirm they accept the terms and
  conditions).
- :guilabel:`Radio`: Signers can select a single option from a series of options (defined when the
  field is :ref:`added to the document <sign/request-signatures/add-fields>`) by clicking the radio
  button beside the desired option.
- :guilabel:`Selection`: Signers can select a single option from a series of options (defined when
  the field is :ref:`added to the document <sign/request-signatures/add-fields>`) via a dropdown
  menu.
- :guilabel:`Strikethrough`: Signers can reject certain phrases by clicking the strikethrough field,
  which adds a visible line through the text.
- :guilabel:`Stamp`: Signers can add a company stamp (defined when the
  field is :ref:`added to the document <sign/request-signatures/add-fields>`).
- :guilabel:`Date`: When signers click a date field, today's date is filled in by default. Clicking
  the field again allows a different date to be selected in the date picker. This field type can
  also be :ref:`configured to be auto-completed <sign/configuration/auto-fill>` during the signing
  process.

.. _sign/configuration/auto-fill:

Configure auto-complete fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To reduce the need for manual input and ensure accurate and consistent information, it is possible
to have certain fields automatically completed with data from the database :ref:`during the signing
process <sign/sign-document/signature-request>`. This is done by linking a Sign field to a field
from a specific :doc:`Odoo model </applications/studio/models_modules_apps>`.

To enable auto-completion for a Sign field:

#. Go to :menuselection:`Sign --> Configuration --> Fields`.
#. Open the relevant field.
#. From the :guilabel:`Linked to` dropdown, select the model that contains the field to link to,
   e.g., *Contact*.
#. Click beside :guilabel:`Field`, then use the field selector to select the relevant field, e.g.,
   *Email*.

.. example::
   In the example, the :icon:`fa-envelope` :guilabel:`Email` field in the Sign app is linked to the
   :guilabel:`Email` field in the *Contact* model. When the contact completes the document, their
   email address, as it appears in their record in the Odoo database, is automatically added to the
   document.

   .. image:: configuration/auto-complete.png
      :alt: Configuring a field to be auto-completed

.. _sign/configuration/tags:

Tags
====

Tags can be used to categorize and organize documents and templates within the Sign app, allowing
users to quickly search for and filter documents and templates based on specific criteria.

To create a new tag:

#. Go to :menuselection:`Sign --> Configuration --> Tags`.
#. Click :guilabel:`New`.
#. On the new line that is added at the bottom of the list of tags, type the :guilabel:`Tag Name`
   and select a :guilabel:`Color Index` for your tag.
