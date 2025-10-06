:show-content:

========================
Accounting and Invoicing
========================

Odoo Invoicing is a standalone app designed to create invoices, send them to customers, and manage
payments. It also handles flows involving vendor bills. On the other hand, the Accounting app is a
comprehensive accounting solution that allows the same actions and includes additional features such
as standard financial reports, bank reconciliation, budgets, asset management, and more.

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

.. _accounting/double-entry-booking:

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

.. _accounting/accrual-cash:

Accrual and cash basis
======================

Both accrual and cash basis accounting are supported in Odoo. This allows reporting income and
expense either when the transaction occurs (accrual basis) or when the payment is made or received
(cash basis).

.. seealso::
   :doc:`Cash basis <accounting/taxes/cash_basis>`

.. _accounting/multi-company:

Multi-company
=============

:doc:`Multiple companies <../general/companies/multi_company>` can be managed within the same
database. Each company has its own :doc:`chart of accounts
<accounting/get_started/chart_of_accounts>`, but :ref:`accounts can be shared
<consolidation_account_mapping>`, which is useful when viewing consolidation reports. Users can view
records and reports from multiple companies simultaneously but can only work on a single company's
accounting at a time.

.. seealso::
   - :doc:`Multi-company </applications/general/companies/multi_company>`
   - :ref:`Inter-company transactions <general/multi-company/inter-company-transactions>`

.. _accounting/multi-currency:

Multi-currency environment
==========================

A :doc:`multi-currency <accounting/get_started/multi_currency>` environment with an automated
exchange rate to ease international transactions is available in Odoo. Every transaction is recorded
in the company's default currency; for transactions occurring in another currency, Odoo stores both
the value in the company's currency and the transactions' currency value. Odoo generates currency
gains and losses after reconciling the journal items.

.. seealso::
   :doc:`Manage a bank in a foreign currency <accounting/bank/foreign_currency>`

.. _accounting/branches:

Branches
========

Parent :doc:`companies </applications/general/companies>` and their :ref:`branches
<general/companies/branches>` can be managed within a single database, operating under shared
accounting and reporting rules, including the following:

- The parent company’s :doc:`chart of accounts <accounting/get_started/chart_of_accounts>`,
  :doc:`main currency <accounting/get_started/multi_currency>`, and :doc:`taxes <accounting/taxes>`
  apply to all branches.
- Branches can manage their own dedicated journals and related records.
- The parent company manages a common :ref:`fiscal period <year-end/fiscal-years>`, so its
  :ref:`lock and closing dates <year-end/lock-everything-date>` apply across all branches. However,
  branches may set earlier lock dates if needed.
- The parent company can access all :doc:`reports <accounting/reporting>`, :doc:`invoices
  <accounting/customer_invoices>`, :doc:`bills <accounting/vendor_bills>`, etc., from its branches,
  while each branch can only view its own data.

.. note::
   The :doc:`Fiscal localization <fiscal_localizations>` package is set on the parent company.

.. warning::
   Adding a branch to a company enables :doc:`multi-company functions
   <../general/companies/multi_company>`.

   For more information, refer to `Odoo's pricing page <https://www.odoo.com/pricing-plan>`_ or
   contact your Odoo account manager.

.. _accounting/branch/reporting:

Reporting
---------

The parent company consolidates accounting operations from all branches, providing a centralized
view of :doc:`financial reports <accounting/reporting>`, such as profit and loss or balance sheets.

.. _accounting/branch/vat:

VAT
---

Each company and branch must be configured with its own legal information, including a VAT number
when applicable. Depending on the structure, branches may share the parent company's VAT number or
have their own, resulting in a common or separate :doc:`VAT return
<accounting/reporting/tax_returns>`.

This flexible setup allows users to generate individual reports and tax returns for each entity if
needed.

.. _accounting/international-standards:

International standards
=======================

Odoo Accounting supports over 100 countries and provides standardized features and mechanisms
applicable across all regions. Country-specific modules are included to comply with local accounting
regulations. :doc:`Fiscal localizations <fiscal_localizations>` handle regional requirements, such
as charts of accounts, taxes, or any other legal obligations.

.. _accounting/accounts-receivable-payable:

Accounts receivable and payable
===============================

By default, one account is designated for accounts receivable entries and another for accounts
payable entries. As transactions are linked to **contacts**, it is possible to run a report per
customer, vendor, or supplier.

The **Partner Ledger** report displays the balance of customers and suppliers. To access it, go to
:menuselection:`Accounting --> Reporting --> Partner Ledger`.

.. _accounting/reporting:

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
|            | Executive summary                |
|            +----------------------------------+
|            | Tax return                       |
|            +----------------------------------+
|            | EC sales list                    |
+------------+----------------------------------+
| Audit      | General ledger                   |
|            +----------------------------------+
|            | Trial balance                    |
|            +----------------------------------+
|            | Journal audit                    |
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
|            | Analytic report                  |
|            +----------------------------------+
|            | Audit trail                      |
|            +----------------------------------+
|            | Budget report                    |
|            +----------------------------------+
|            | Unrealized currency gains/losses |
|            +----------------------------------+
|            | Deferred revenue                 |
|            +----------------------------------+
|            | Deferred expense                 |
|            +----------------------------------+
|            | Depreciation schedule            |
|            +----------------------------------+
|            | Disallowed expenses              |
|            +----------------------------------+
|            | Loans analysis                   |
|            +----------------------------------+
|            | Product margins                  |
|            +----------------------------------+
|            | 1099 report                      |
+------------+----------------------------------+

.. tip::
   :doc:`Create and customize reports <accounting/reporting/customize>` with Odoo's report engine.

.. _accounting/tax-report:

Tax return
----------

In the :ref:`Tax return <tax-returns/report>`, Odoo computes all accounting transactions for the
specific tax period and uses these totals to calculate the tax obligation.

.. note::
   Depending on the country's localization, an XML version of the tax report can be generated to be
   uploaded to the VAT platform of the relevant taxation authority.

.. _accounting/bank-synchronization:

Bank synchronization
====================

The bank synchronization system directly connects with banking institutions to automatically
import all transactions into the database. It gives an overview of the cash flow without logging
into an online banking system or waiting for paper bank statements.

.. seealso::
   :doc:`Bank synchronization <accounting/bank/bank_synchronization>`

.. _accounting/inventory-valuation:

Inventory valuation
===================

Both periodic (manual) and perpetual (automated) inventory valuations are supported in Odoo. The
available methods are standard price, average price, :abbr:`LIFO (Last-In, First-Out)` and
:abbr:`FIFO (First-In, First-Out).`

.. seealso::
   :doc:`../inventory_and_mrp/inventory/inventory_valuation/cheat_sheet`

.. _accounting/retained-earnings:

Retained earnings
=================

Retained earnings are the portion of income retained by a business. Odoo calculates current year
earnings in real-time, so no year-end journal or rollover is required. The profit
and loss balance is automatically reported on the balance sheet report.

.. seealso::
   :doc:`Accounting Cheat Sheet <accounting/get_started/cheat_sheet>`

.. _accounting/fiduciaries:

Fiduciaries
===========

The :guilabel:`Accounting Firms` mode can be activated by going to :menuselection:`Accounting -->
Configuration --> Settings`. When enabled:

- The document's sequence becomes editable on all documents;
- The :guilabel:`Total (tax incl.)` field appears to speed up and control the encoding by automating
  line creation with the right account and tax;
- :guilabel:`Invoice Date` and :guilabel:`Bill Date` are pre-filled when encoding a transaction.
- A :guilabel:`Quick encoding` option is available for customer invoices and vendor bills.

.. _accounting/accountant-access-rights:

Accountant access rights
========================

To grant access to the company's accountant, :ref:`add the accountant as a new user
<users/add-individual>` and configure the appropriate :doc:`access rights
<../general/users/access_rights>` in the :guilabel:`Accounting` section to enable access to the
company's financial data:

- :guilabel:`Accounting`: Select :guilabel:`Accountant`.
- :guilabel:`Bank`: Allow bank account validation.

.. Note::
   Adding an accountant as a new user in :doc:`Odoo Online <../../administration/odoo_online>` is
   free if the accountant has an Odoo account registered with the same email address as the one
   listed for the company user. However, :doc:`Odoo.sh <../../administration/odoo_sh>` and
   :doc:`Odoo On-premise <../../administration/on_premise>` may involve extra charges for each
   additional user. For more pricing information, see
   `Odoo's pricing <https://www.odoo.com/pricing-plan>`_.

For a multi-company environment, set the appropriate :ref:`access <users/multi-companies>`.

.. toctree::
   :titlesonly:

   accounting/get_started
   accounting/taxes
   accounting/customer_invoices
   accounting/vendor_bills
   accounting/payments
   accounting/bank
   accounting/reporting
