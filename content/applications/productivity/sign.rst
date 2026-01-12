:nosearch:
:show-content:
:hide-page-toc:

====
Sign
====

.. toctree::
   :titlesonly:

   sign/request_signatures
   sign/sign_document
   sign/security_authentication
   sign/configuration
   sign/validity

**Odoo Sign** allows you to sign, send, and approve documents online using electronic signatures.

Just like a handwritten signature, an electronic signature represents a person's agreement to the
content of a document. Signatures generated using the Sign app are considered as :doc:`valid
electronic signatures <sign/validity>` in the European Union and the United States of America, and
meet the requirements for electronic signatures in most countries.

With Sign, you can:

- :ref:`prepare documents for signing <sign/prepare-document>` by one or more signers using
  drag-and-drop fields
- send :ref:`one-off documents for signing <sign/request-signatures/one-off>` from the Sign app
  or from an Odoo record
- create and use :ref:`templates <sign/request-signatures/templates>` to
  send frequently used documents for signing from the Sign app or from an Odoo record
- create :ref:`document envelopes <sign/prepare-document/create-envelope>` to send multiple
  documents in a single signature request or sign multiple documents at the same time
- :ref:`sign documents that have been prepared using Odoo Sign
  <sign/sign-document/signature-request>`
- :ref:`sign non-prepared documents <sign/sign-document/pdf-document>` from the Sign app, from
  the chatter of an Odoo record, or from the :doc:`Documents <documents>` app
- configure :ref:`auto-complete fields <sign/fields/auto-fill>` that populate with data from your
  database during signing
- define :ref:`advanced configuration for signers <sign/prepare-document/signer-settings>` to
  require authentication (via SMS, Aadhaar eSign, or itsme®), allow delegation, or, for templates,
  assign a fixed signer

.. seealso::
   - `Odoo Sign: product page <https://www.odoo.com/app/sign>`_
   - `Odoo Tutorials: Sign [video] <https://www.odoo.com/slides/sign-61>`_
