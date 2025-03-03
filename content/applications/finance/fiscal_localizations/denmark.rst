=======
Denmark
=======

Compliance with Danish Bookkeeping Requirements: Data Retention and Integrity
=============================================================================

This page outlines how Odoo complies with the Danish Bookkeeping Act,
specifically regarding the storage and integrity of financial transactions and receipts.
We understand the importance of adhering to Danish regulations and have implemented robust
measures to ensure your data is secure and compliant.

Key Requirements of the Danish Bookkeeping Act
==============================================

The Danish Bookkeeping Act (DBA) mandates that digital standard bookkeeping systems must:

- **Retain Transactional Data and Receipts:** Store all recorded transactions and receipts
  covered by § 3 for a minimum of five years from the end of the financial year to which they pertain.

- **Ensure Data Integrity:** Prevent the company from changing, backdating, or deleting recorded transactions.

- **Maintain Data Accessibility:** Store all recorded transactions in a structured and machine-readable format
  for the required five-year period, regardless of customer relationship status, bankruptcy, or dissolution.

- **Provide Decryption Capabilities:** Ensure that encrypted bookkeeping data and receipts can be decrypted
  into a structured and readable format.

Odoo Compliance Measures
========================

For companies using Odoo on the Odoo Cloud hosting specifically, the system is designed to meet these requirements
through the following features and processes:

- **Immutable Transaction Records:**
    - Once transactions are recorded, they cannot be deleted through the user interface.
    - All modifications are logged, providing a complete audit trail.
    - While historic dated entries can be made, the system records the creation date and time of the entry.

- **Secure Document Storage:**
    - Receipts and digital vouchers are stored as attachments and integrated into the database, ensuring they
      are included in backups.
    - Posted documents cannot be deleted.
    - We fully support the storage of mandatory digital vouchers as defined by Danish regulations.

- **Continuous Data Availability:**
    - During active system usage, authorized personnel can access all transactions and digital vouchers through
      the user interface.
    - Regardless of customer relations, bankruptcy, or dissolution, Odoo can provide access to transaction and
      digital voucher details, during 6 years (see more below)

- **Automated Data Export and Secure Storage:**
    - Odoo Accounting implements no automatic deletion or archival of recorded transactions, so if a company has
      been recording transactions for 6 years, the 6 years of history are preserved in the Odoo Accounting database.
    - As described in the `Odoo SLA <https://www.odoo.com/cloud-sla>`_ and
      `Odoo Privacy Policy <https://www.odoo.com/privacy>`_, the Odoo Cloud relies on immutable daily snapshot
      backups, which cannot be individually altered or deleted, even at the customer's request, ensuring their integrity.
    - All documents and receipts stored in a database backup are available as a standard ZIP archive, accompanying
      the SQL dump.

- **Data Lifecycle Management:**
    - Odoo database backups are available in standard SQL dump formats at all times, and include all recorded
      transactions.
    - The default Odoo Cloud SLA guarantees 3 months of backup history to all active customers. For the avoidance
      of doubt, each such backup contains the complete bookkeeping history of the company. As a special guarantee for
      Denmark companies subject to the DBA and who opt for an Odoo Cloud solution, the backup retention gets increased
      to 6 years as soon as they decide to terminate their Odoo Cloud subscription, in order to comply with the
      requirements of Annex 1, 4 of Executive Order 97.
    - Companies who are using Odoo products outside of the Odoo Cloud are responsible for implementing their
      own compliance with the DBA.

- **Decryption:**
    - Odoo Accounting customer data on the Odoo Cloud is always stored in encrypted form (encryption at rest at
      storage level). When backups are retrieved, they are automatically decrypted and provided in decrypted form in
      standard formats for the user: SQL dumps + ZIP archive of all attached documents (file store)
