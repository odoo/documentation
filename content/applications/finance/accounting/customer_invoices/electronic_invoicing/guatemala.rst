:orphan:

======================================
Odoo electronic invoicing in Guatemala
======================================

The Odoo **Invoicing** and **Accounting** applications offer legally compliant e-invoicing solutions
tailored to meet Guatemala's regulatory requirements, including those established by the
`Superintendencia de Administración Tributaria (SAT) <https://portal.sat.gob.gt/>`_.

Legal framework for e-invoicing in Guatemala
============================================

Guatemala has mandated electronic invoicing under the :abbr:`FEL (Factura Electrónica en Línea)`
system, which applies to most businesses to enhance fiscal control and modernize tax administration.
Key elements include:

- **Factura Electrónica en Línea (FEL)**: A mandatory e-invoicing system required for B2B, B2C, and
  :abbr:`B2G (business-to-government)` transactions, regulated by the :abbr:`SAT (Superintendencia
  de Administración Tributaria)`. Each authorized document must be digitally signed and contain a
  unique certification code.
- **Integration with SAT**: All electronic documents must be issued through a certified certifier
  `(Proveedor de Certificación)` and validated by the :abbr:`SAT (Superintendencia de Administración
  Tributaria)` before being delivered to the customer. Once validated, the document receives a
  certification date and unique UUID.
- **XML Format**: Guatemala mandates the use of XML for electronic documents, following SAT's
  official XSD schema to ensure interoperability and traceability.
- **Adoption Timeline**: The transition to FEL has been implemented gradually by economic activity
  and taxpayer profile, but it is now mandatory for most business sectors in the country.

Compliance with Guatemalan e-invoicing regulations
==================================================

Odoo Invoicing simplifies compliance with Guatemala's e-invoicing requirements by offering native
FEL integration and automation features:

- **Supported formats**: Odoo supports most mandatory FEL document types in SAT-compliant XML,
  including invoices (:abbr:`FACT`), credit notes (:abbr:`NCRE`), and debit notes (:abbr:`NDEB`).
  Each document is automatically submitted to a certified certifier (Infile), digitally signed, and
  validated by the SAT in real time.
- **Secure storage and retrieval**: In accordance with Guatemalan regulations, Odoo provides
  centralized and secure storage of certified documents, including their XML and PDF graphical
  representations, with full access for audits and control processes.
- **Automatic tax calculation and reporting**: Odoo automates VAT (IVA) and applicable tax
  computations, ensuring compliance with local tax rates, exemption rules, and reporting structures
  as defined by the SAT.

.. seealso::
   :doc:`Guatemalan fiscal localization documentation <../../../fiscal_localizations/guatemala>`

.. admonition:: Disclaimer

   This page provides a general overview of Guatemalan e-invoicing regulations and how Odoo supports
   compliance with SAT requirements. It is not intended as legal or tax advice. We recommend
   consulting with a tax advisor or legal professional familiar with Guatemala's e-invoicing
   regulations to ensure full compliance tailored to your specific business requirements.
