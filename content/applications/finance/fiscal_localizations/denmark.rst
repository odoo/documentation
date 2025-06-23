=======
Denmark
=======

Compliance with Danish bookkeeping requirements: data retention and integrity
=============================================================================

This page outlines how Odoo complies with the Danish Bookkeeping Act,
specifically regarding the storage and integrity of financial transactions and receipts.
Odoo recognizes the importance of adhering to Danish regulations and has implemented robust
measures to ensure clients' data is secure and compliant.

.. important::
   Odoo’s registration as a digital bookkeeping system has been confirmed by the Danish Business
   Authority under registration numbers `fob585505` and `fob441967`. Customers must meet certain
   conditions to benefit from it, as outlined below.


Key requirements of the Danish Bookkeeping Act
----------------------------------------------

The Danish Bookkeeping Act (DBA) outlines the `requirements for digital bookkeping systems
<https://danishbusinessauthority.dk/requirements-digital-bookkeeping-systems>`_:

- **Retain transactional data and receipts:** Store all recorded transactions and receipts
  covered by § 3 for a minimum of five years from the end of the financial year to which they pertain.

- **Ensure data integrity:** Prevent the customer from changing, backdating, or deleting recorded transactions.

- **Maintain data accessibility:** Store all recorded transactions in a structured and machine-readable format
  for the required five-year period, regardless of customer relationship status, bankruptcy, or dissolution.

- **Provide decryption capabilities:** Ensure that encrypted bookkeeping data and receipts can be decrypted
  into a structured and readable format.

Odoo Compliance
---------------

Odoo's registration as digital standard bookkeeping systems with the Danish Business Authority
confirms that Odoo meets the applicable criteria for digital bookkeeping systems in Denmark,
in accordance with the requirements of the :abbr:`DBA (Danish Bookkeeping Act)`.

However, to benefit from all the required guarantees for digital bookkeeping systems in Denmark,
customers must meet a few conditions.

Conditions for full DBA compliance
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- The customer uses Odoo Accounting on the Odoo SaaS platform (Odoo Online);
- The customer has an active Odoo subscription (e.g., Standard or Custom Plan), or their database is
  managed by an officially registered `Odoo Accounting Firm <https://www.odoo.com/accounting-firms>`_;
- The customer refrains from customizations or actions intended to undermine the system’s immutability,
  traceability, or security controls.

.. note::
  Customers using Odoo products outside these conditions are responsible for ensuring their own
  compliance with the DBA.

When the above conditions are met, the requirements of the DBA are fulfilled through features and
processes described in the following sections.

Immutable transaction records
-----------------------------

- Once transactions are recorded, they cannot be deleted through the user interface.
- All modifications are logged, providing a complete audit trail.
- While historically dated entries can be made, Odoo records the creation date and time of the entry.

Secure document storage
-----------------------

- Receipts and digital vouchers are stored as attachments and integrated into the database, ensuring they
  are included in backups.
- Posted documents cannot be deleted.
- We fully support the storage of mandatory digital vouchers as defined by Danish regulations.

Continuous data availability
----------------------------

- Clients with active subscriptions can access all transactions and digital vouchers through Odoo.
- Regardless of customer relations, bankruptcy, or dissolution, Odoo can provide access to transaction
  and digital voucher details to former clients for six years (see :ref:`localizations/denmark/data-lifecycle`).

Automated data export and secure storage
----------------------------------------

- Odoo Accounting implements no automatic deletion or archival of recorded transactions, so if a customer has
  been recording transactions for six years, the six years of history are preserved in the Odoo Accounting database.
- As described in the `Odoo Cloud Hosting SLA <https://www.odoo.com/cloud-sla>`_ and
  `Odoo Privacy Policy <https://www.odoo.com/privacy>`_, the Odoo Cloud relies on immutable daily snapshot
  backups, which cannot be individually altered or deleted, even at the customer's request, ensuring their integrity.
- All documents and receipts stored in a database backup are available as a standard ZIP archive accompanying
  the SQL dump.

.. _localizations/denmark/data-lifecycle:

Data lifecycle management
-------------------------

- Odoo database backups are available in standard SQL dump formats at all times and include all recorded
  transactions.
- The `Odoo Cloud Hosting SLA <https://www.odoo.com/cloud-sla>`_ guarantees three months of backup history to all
  active customers. As a special guarantee for Danish customers subject to the DBA and meeting the conditions
  highlighted above the last Odoo Cloud backup retention gets increased to six years as soon as they decide to
  terminate their Odoo Cloud subscription, in order to comply with the requirements of Annex 1, 4 of Executive Order 97.

Decryption
----------

Odoo Accounting customer data on the Odoo Cloud is always stored in encrypted form (encryption at rest at
storage level). When backups are retrieved, they are automatically decrypted and provided in decrypted form in
standard formats for the user: SQL dumps + ZIP archive of all attached documents (file store).
