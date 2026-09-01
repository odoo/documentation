:orphan:

====================================
Odoo electronic invoicing in Denmark
====================================

Odoo Invoicing is your trusted partner for safe, efficient, and legally compliant e-invoicing
solutions tailored to Denmark's regulatory standards, and compatible with the European `Peppol
<https://peppol.org/about/>`_ framework.

Legal framework for e-invoicing in Denmark
==========================================

In Denmark, businesses must adhere to e-invoicing laws that ensure secure, authentic, and storable
transactions. The primary regulations governing e-invoicing requirements in Denmark are the `Danish
Executive Order on Electronic Invoicing <https://retsinformation.dk>`_ and the `Danish Bookkeeping
Act (Bogføringsloven) <https://erhvervsstyrelsen.dk>`_, which align with `EU Directive 2014/55/EU <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014L0055>`_.
These laws mandate that all businesses engaged in :abbr:`B2G (business-to-government)` transactions
must use e-invoicing via NemHandel, Denmark's official electronic invoicing platform for public
procurement transactions. Additionally, Denmark's NemHandel network is integrated with the Peppol
framework, transitioning to the unified NemHandel BIS 4 standard to provide an interoperable
framework for domestic and cross-border e-invoicing. Under the Danish Bookkeeping Act, e-invoicing
and digital record-keeping are also systematically mandated for B2B transactions based on a phased
rollout timeline to enhance financial transparency.

Odoo electronic bookkeeping in Denmark
======================================

The Danish Bookkeeping Act (DBA) outlines the `requirements for digital bookkeping systems
<https://danishbusinessauthority.dk/requirements-digital-bookkeeping-systems>`_:

**Retain transactional data and receipts:** Store all recorded transactions and receipts covered by
  § 3 for a minimum of five years from the end of the financial year to which they pertain.

**Ensure data integrity:** Prevent the customer from changing, backdating, or deleting recorded
  transactions.

**Maintain data accessibility:** Store all recorded transactions in a structured and
  machine-readable format for the required five-year period, regardless of customer relationship
  status, bankruptcy, or dissolution.

**Provide decryption capabilities:** Ensure that encrypted bookkeeping data and receipts can be
  decrypted into a structured and readable format.

Odoo's registration (number `fob585505` and `fob441967`) as a digital standard bookkeeping system
with the Danish Business Authority confirms that Odoo meets the applicable criteria for digital
bookkeeping systems in Denmark, in accordance with the requirements of the :abbr:`DBA (Danish
Bookkeeping Act)`.

However, to benefit from all the required guarantees for digital bookkeeping systems in Denmark,
customers must meet a few conditions.

.. _electronic_invoicing/denmark/dba-compliance:

Key requirements of the Danish bookkeeping act (DBA)

- The customer uses Odoo Accounting on the Odoo SaaS platform (Odoo Online);
- The customer has an active Odoo subscription (e.g., Standard or Custom Plan), or their database is
  managed by an officially registered `Odoo Accounting Firm
  <https://www.odoo.com/accounting-firms>`_;
- The customer refrains from customizations or actions intended to undermine the system’s
  immutability, traceability, or security controls.

.. note::
   Customers using Odoo products outside these conditions are responsible for ensuring their own
   compliance with the DBA.

When the above conditions are met, the requirements of the DBA are fulfilled through features and
processes described in the following sections.

Immutable transaction records
-----------------------------

- Once transactions are recorded in Odoo, they cannot be deleted through the user interface.
- All modifications are logged in Odoo, providing a complete audit trail.
- While historically dated entries can be made, Odoo records the creation date and time of the
  entry.

Secure document storage
-----------------------

- Receipts and digital vouchers are stored in Odoo as attachments and integrated into the database,
  ensuring they are included in backups.
- Posted documents cannot be deleted.
- Odoo fully supports the storage of mandatory digital vouchers as defined by Danish regulations.

Continuous data availability
----------------------------

- Customers with active subscriptions can access all transactions and digital vouchers through Odoo.
- Regardless of customer relations, bankruptcy, or dissolution, Odoo can provide access to
  transaction and digital voucher details to former clients for six years
  (see :ref:`electronic_invoicing/denmark/data-lifecycle`).

Automated data export and secure storage
----------------------------------------

- Odoo implements no automatic deletion or archival of recorded transactions, so if a customer has
  been recording transactions for six years, the six years of history are preserved in the Odoo
  database.
- As described in the `Odoo Cloud Hosting SLA <https://www.odoo.com/cloud-sla>`_ and `Odoo Privacy
  Policy <https://www.odoo.com/privacy>`_, the Odoo Cloud relies on immutable daily snapshot
  backups, which cannot be individually altered or deleted, even at the customer's request, ensuring
  their integrity.
- All documents and receipts stored in an Odoo database backup are available as a standard ZIP
  archive accompanying the SQL dump.

.. _electronic_invoicing/denmark/data-lifecycle:

Data lifecycle management
-------------------------

- Odoo database backups are available in standard SQL dump formats at all times and include all
  recorded transactions.
- The `Odoo Cloud Hosting SLA <https://www.odoo.com/cloud-sla>`_ guarantees three months of backup
  history to all active customers. As a special guarantee for Danish customers subject to the DBA
  and meeting the conditions highlighted above, the last Odoo Cloud backup retention gets increased
  to six years as soon as they decide to terminate their Odoo Cloud subscription, in order to comply
  with the requirements of Annex 1, 4 of Executive Order 97.

Decryption
----------

Odoo customer data on the Odoo Cloud is always stored in encrypted form (encryption at rest at
storage level). When backups are retrieved, they are automatically decrypted and provided in
decrypted form in standard formats for the user: SQL dumps + ZIP archive of all attached documents
(file store).

.. seealso::
  :doc:`Danish fiscal localization documentation <../../../fiscal_localizations/denmark>`

.. admonition:: Disclaimer

  This page provides an overview of Danish e-invoicing laws and how Odoo Invoicing/Accounting
  supports compliance with the Danish VAT Code, Peppol standards, and related regulations. It does
  not constitute legal advice. We recommend consulting with a tax advisor or legal professional
  familiar with Danish e-invoicing regulations to ensure full compliance tailored to your specific
  business requirements.
