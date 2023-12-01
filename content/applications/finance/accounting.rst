:show-content:

========================
Accounting and Invoicing
========================

**Odoo Invoicing** is a standalone invoicing app to create invoices, send them to your customers,
and manage payments.

**Odoo Accounting** is a full featured accounting app. Accountant productivity is at the core of its
development with features such as AI-powered invoice recognition, synchronization with your bank
accounts, smart matching suggestions, etc.

.. seealso::
   `Odoo Tutorials: Accounting <https://www.odoo.com/slides/accounting-19>`_

.. cards::

   .. card:: Get started
      :target: accounting/get_started
      :large:

      Basic concepts of accounting and initial setup of your accounting

   .. card:: Taxes
      :target: accounting/taxes

      Taxes, fiscal positions, and integrations

   .. card:: Customer invoices
      :target: accounting/customer_invoices

      Customer invoices, payment terms, and electronic invoicing

   .. card:: Vendor bills
      :target: accounting/vendor_bills

      Vendor bills, assets, and invoice digitization (OCR)

   .. card:: Payments
      :target: accounting/payments

      Invoices and bills payments (online, checks, batches) and follow-up on invoices

   .. card:: Bank and cash accounts
      :target: accounting/bank

      Bank synchronization, reconciliation, and cash registers

   .. card:: Reporting
      :target: accounting/reporting

      Reporting, declarations, and analytic accounting

Double-entry bookkeeping
========================

Odoo automatically creates all the underlying journal entries for all accounting transactions (e.g.,
customer invoices, vendor bills, point-of-sales orders, expenses, inventory valuations, etc.).

Odoo uses the double-entry bookkeeping system, whereby every entry needs a corresponding and
opposite counterpart in a different account, with one account debited and the other credited.
It ensures that all transactions are recorded accurately and consistently and that the accounts
always balance.

.. seealso::
   :doc:`Accounting Cheat Sheet <accounting/get_started/cheat_sheet>`

Accrual and cash basis
======================

Both accrual and cash basis accounting are supported in Odoo. This allows reporting income and
expense either when the transaction occurs (accrual basis) or when the payment is made or received
(cash basis).

.. seealso::
   :doc:`Cash basis <accounting/taxes/cash_basis>`

Multi-company
=============

Several companies can be managed within the same database. Each company has its :doc:`chart of
accounts <accounting/get_started/chart_of_accounts>`, which is also useful to generate consolidation
reports. Users can access several companies but can only work on a single company's accounting at a
time.

Multi-currency environment
==========================

A :doc:`multi-currency <accounting/get_started/multi_currency>` environment with an automated
exchange rate to ease international transactions is available in Odoo. Every transaction is recorded
in the company's default currency; for transactions occurring in another currency, Odoo stores both
the value in the company's currency and the transactions' currency value. Odoo generates currency
gains and losses after reconciling the journal items.

.. seealso::
   :doc:`Manage a bank in a foreign currency <accounting/bank/foreign_currency>`

Branch management
=================

Multiple branches can be managed thanks to multi-company hierarchies. This allows to post journal
entries on each branch as well as setting up a common lock date managed by the main company.

International standards
=======================

Odoo Accounting supports more than 70 countries. It provides the central standards and mechanisms
common to all nations, and thanks to country-specific modules, local requirements are fulfilled.
Fiscal positions exist to address regional specificities like the chart of accounts, taxes, or any
other requirements.

.. seealso::
   :doc:`Fiscal localization packages <fiscal_localizations>`

Accounts receivable and payable
===============================

By default, there is a single account for the account receivable entries and one for the account
payable entries. As transactions are linked to your **contacts**, you can run a report per customer,
vendor, or supplier.

The **Partner Ledger** report displays the balance of your customers and suppliers. It is available
by going to :menuselection:`Accounting --> Reporting --> Partner Ledger`.

Reporting
=========

The following financial :doc:`reports <accounting/reporting>` are available and updated in
real-time:

+-----------------------------------------------+
|               Financial reports               |
+============+==================================+
| Statement  | Balance sheet                    |
|            +----------------------------------+
|            | Profit and loss                  |
|            +----------------------------------+
|            | Cash flow statement              |
|            +----------------------------------+
|            | Tax report                       |
|            +----------------------------------+
|            | ES sales list                    |
+------------+----------------------------------+
| Audit      | General ledger                   |
|            +----------------------------------+
|            | Trial balance                    |
|            +----------------------------------+
|            | Journal report                   |
|            +----------------------------------+
|            | Intrastat report                 |
|            +----------------------------------+
|            | Check register                   |
+------------+----------------------------------+
| Partner    | Partner ledger                   |
|            +----------------------------------+
|            | Aged receivable                  |
|            +----------------------------------+
|            | Aged payable                     |
+------------+----------------------------------+
| Management | Invoice analysis                 |
|            +----------------------------------+
|            | Unrealized currency gains/losses |
|            +----------------------------------+
|            | Depreciation schedule            |
|            +----------------------------------+
|            | Disallowed expenses              |
|            +----------------------------------+
|            | Budget analysis                  |
|            +----------------------------------+
|            | Product margins                  |
|            +----------------------------------+
|            | 1099 report                      |
+------------+----------------------------------+

.. tip::
   :doc:`Create and customize reports <accounting/reporting/customize>` with Odoo's report engine.

Tax report
----------

Odoo computes all accounting transactions for the specific tax period and uses these totals to
calculate the tax obligation.

.. important::
   Once the tax report has been generated for a period, Odoo locks it and prevents the creation of
   new journal entries involving VAT. Any correction to customer invoices or vendor bills has to
   be recorded in the next period.

.. note::
   Depending on the country's localization, an XML version of the tax report can be generated to be
   uploaded to the VAT platform of the relevant taxation authority.

Bank synchronization
====================

The bank synchronization system directly connects with your bank institution to automatically
import all transactions into your database. It gives an overview of your cash flow without logging
into an online banking system or waiting for paper bank statements.

.. seealso::
   :doc:`Bank synchronization <accounting/bank/bank_synchronization>`

Inventory valuation
===================

Both periodic (manual) and perpetual (automated) inventory valuations are supported in Odoo. The
available methods are standard price, average price, :abbr:`LIFO (Last-In, First-Out)` and
:abbr:`FIFO (First-In, First-Out).`

.. seealso::
   :doc:`../inventory_and_mrp/inventory/warehouses_storage/inventory_valuation/inventory_valuation_config`

Retained earnings
=================

Retained earnings are the portion of income retained by a business. Odoo calculates current year
earnings in real-time, so no year-end journal or rollover is required. The profit
and loss balance is automatically reported on the balance sheet report.

.. seealso::
   :doc:`Accounting Cheat Sheet <accounting/get_started/cheat_sheet>`

.. _fiduciaries:

Fiduciaries
===========

The :guilabel:`Accounting Firms` mode can be activated by going to :menuselection:`Accounting -->
Configuration --> Settings --> Accounting Firms mode`. When enabled:

- The document's sequence becomes editable on all documents;
- The :guilabel:`Total (tax incl.)` field appears to speed up and control the encoding by automating
  line creation with the right account and tax;
- :guilabel:`Invoice Date` and :guilabel:`Bill Date` are pre-filled when encoding a transaction.
- A :guilabel:`Quick encoding` option is available for customer invoices and vendor bills.

.. toctree::
   :titlesonly:

   accounting/get_started
   accounting/taxes
   accounting/customer_invoices
   accounting/vendor_bills
   accounting/payments
   accounting/bank
   accounting/reporting
