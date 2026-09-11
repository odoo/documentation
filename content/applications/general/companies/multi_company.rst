=============
Multi-company
=============

.. seealso::
   :ref:`Branches <general/companies/branches>`

.. |mcd| replace:: multi-company database

In Odoo, multiple companies can be configured under one database. This allows some data to be shared
among companies while maintaining some separation between entities.

A centralized management environment allows authorized users to select multiple companies
simultaneously and set their specific warehouses, customers, equipment, and contacts. It also
generates reports of aggregated figures without switching interfaces, facilitating daily tasks and
enhancing the overall management process.

.. warning::
   Enabling multi-company functionality in an Odoo database on a *Standard* plan automatically
   triggers an upsell to the *Custom* plan. This does not apply to databases on the *One-App Free*
   plan.

   - **For yearly or multi-year contracts**: An upsell order is created with a 30-day limit.
   - **For monthly contracts**: The subscription automatically switches to the *Custom* plan and the
     new rate is applied when the next bill is generated.

   For more information, refer to `Odoo's pricing page <https://www.odoo.com/pricing-plan>`_ or
   contact the account manager.

.. _general/multi-company/configuration:

Configuration
=============

Most *General settings* apply to all companies in the database. *Company-specific settings* are
indicated with the :icon:`fa-building-o` :guilabel:`(Values set here are company-specific)` icon,
and can also be accessed through company records.

Create or edit a company
------------------------

To create or edit a specific company, navigate to :menuselection:`Settings app --> Users & Companies
--> Companies`. Click :guilabel:`New` and :ref:`fill out the form with the company's information
<general/companies/company>` or select an existing company to edit it.


Archive a company
-----------------

To archive a company, follow these steps:

#. In the Settings app, navigate to the :guilabel:`Companies` section and click
   :icon:`oi-arrow-right` :guilabel:`Manage Companies`.
#. In the :guilabel:`Companies` list view, select the company to be archived.
#. Click the :icon:`fa-cog` :guilabel:`Actions` menu and select :guilabel:`Archive`.
#. Click :guilabel:`Archive` to confirm.

.. _general/multi-company/multi-company-environment:

Multi-company environment
=========================

In a multi-company environment, users are granted :ref:`access to one or more companies
<general/multi-company/user-access>`, and :ref:`data
<general/multi-company/shared-and-unshared-records>` is created or modified based on its intended
use within that structure.

.. _general/multi-company/user-access:

User access
-----------

A multi-company environment allows flexible control over :ref:`user access <users/multi-companies>`
and :doc:`access rights <../users/access_rights>` that can be granted or restricted as needed.

.. _general/multi-company/company-selector:

Company selector
----------------

To switch between (or select) multiple companies, follow these steps:

#. Click the company selector in the top-right corner of the header menu.
#. In the drop-down list, select the checkboxes next to the desired companies.
#. The highlighted company indicates the current active environment.
#. To switch to another company, click its name in the list of selected companies.

.. example::
   In the example below, the user can access six companies, two of which are selected. The current
   active company is *My Company (San Francisco)*.

   .. image:: multi_company/multi-companies-menu-dashboard.png
      :alt: View of the companies menu through the main dashboard in Odoo.

.. _general/multi-company/shared-and-unshared-records:

Shared and company-specific records
-----------------------------------

Data, such as products, contacts, and equipment can either be shared across companies or restricted
to a specific company by setting the :guilabel:`Company` field on relevant records:

#. Leave the field blank to make the record accessible to all companies.
#. Select specific companies to make the record visible to users logged in to those companies only.

Records specifically linked to a particular company are accessible only within that entity. For
instance, quotations, invoices, and vendor bills associated with a company are visible only when
logged into that company, and the corresponding company is automatically selected by default and
displayed in the :guilabel:`Company` field.

In a |mcd|, new products and contacts are shared across companies by default. To restrict them to a
specific company, set the :guilabel:`Company` field on the record's form.

.. note::
   Individual properties in a shared record may be shared or company-specific. For example, product
   records share common :guilabel:`Sales Price` and :guilabel:`Reference` values, but the
   :guilabel:`Cost` value is company-specific. This allows for different cost structures across
   companies while maintaining consistent sales pricing and product references.


.. _general/multi-company/inter-company-transactions:

Inter-company transactions
==========================

The :guilabel:`Inter-Company Transactions` feature allows one company in the database to sell or
purchase goods and services from another company within the same database. For inter-company
transactions, :ref:`product records are shared <general/multi-company/shared-and-unshared-records>`
among the involved companies. Depending on the configuration settings, counterpart documents for
orders and invoices can be automatically generated and synchronized.

.. warning::
   To handle inter-company transactions correctly, :doc:`general
   <../../finance/accounting/get_started>` and specific configurations must be set properly,
   including :doc:`fiscal positions <../../finance/accounting/taxes/fiscal_positions>` and
   :doc:`localizations <../../finance/fiscal_localizations>`.

.. _general/multi-company/interco-transactions-enable:

To activate inter-company transactions, select the relevant company in the :ref:`company selector
<general/multi-company/company-selector>`, open the **Settings** app, navigate to the
:guilabel:`Companies` section, enable :guilabel:`Inter-Company Transactions`, and click
:guilabel:`Save`. Then, select the options to create a counterpart for the selected company:

- :guilabel:`Create Vendor Bills`: Automatically create a bill/refund when a company confirms
  an invoice/credit note for the selected company.
- :guilabel:`Create Sales Orders`: Automatically create a quotation (drafted sales order) when a
  purchase order is confirmed for the selected company.
- :guilabel:`Create Purchase Orders`: Automatically create a request for quotation (drafted purchase
  order) using the selected company warehouse in the :guilabel:`Use Warehouse` field when a sales
  order is confirmed for the selected company.
- :guilabel:`Synchronize Stock Moves`: Automatically synchronize stock moves between companies when
  fulfilling or receiving deliveries for the selected company.

To automatically validate the records, select :guilabel:`Validated`. This setting applies to all of
the inter-company transaction options.

.. note::
   The :guilabel:`Use Warehouse` field appears if :guilabel:`Create Sales Orders` or
   :guilabel:`Create Purchase Orders` is selected. However, Odoo does not automatically create
   warehouses for additional companies created after the initial database setup. Warehouses for each
   company must be created manually.

Inter-company transaction settings can also be accessed and modified by going to
:menuselection:`Settings --> Users & Companies --> Companies` and selecting the company. Enable
:doc:`../developer_mode` and the :guilabel:`Inter-Company Transactions` tab appears.

.. example::
   :guilabel:`Create Bills and Refunds`: when an invoice for :guilabel:`Customer` `JS Store US` is
   posted on `JS Store Belgium`, a vendor bill is automatically created in `JS Store US`.

   :guilabel:`Create Purchase Orders`: when a sales order for :guilabel:`Customer` `JS Store US` is
   confirmed on `JS Store Belgium`, a purchase order on `JS Store US` is automatically created (and
   confirmed if the :guilabel:`Create and validate` option is selected).

.. seealso::
   - :doc:`Multi-company Guidelines <../../../developer/howtos/company>`
   - :doc:`../../finance/accounting/get_started/multi_currency`

.. _general/multi-company/interco-clearing:

Inter-company clearing
----------------------

The **Intercompany clearing** feature automates accounting entries when one company receives a
payment for an invoice issued by another company within the same database.

When a payment is processed by a secondary company, the customer's open invoice is reconciled
automatically in the issuing company, and balancing intercompany entries are created between the
two companies. This automation eliminates the need for manual spreadsheet tracking and keeps
intercompany accounts balanced in real time.

.. example::
   **Company A** issues a customer invoice for $100.

   The customer pays through the customer portal of **Company B**.

   Upon receiving the payment:

   #. The customer receivable is settled in **Companies A and B**.
   #. **Company A**'s receivable is reclassified as a claim against **Company B**.
   #. **Company B**'s received funds are recorded as a payable owed to **Company A**.

To configure the accounts and journal used for inter-company clearing, follow these steps:

.. important::
   The :guilabel:`Inter-Company Transactions` feature must be :ref:`enabled
   <general/multi-company/interco-transactions-enable>` **for each company** involved.

#. :ref:`Install <general/install>` the :guilabel:`Intercompany Payment - Account`
   (`account_payment_interco`) module.
#. Go to :menuselection:`Accounting --> Configuration --> Settings`.
#. Scroll down to the :guilabel:`Default Accounts` section.
#. Under :guilabel:`Intercompany Clearing`, define the following fields:

   - :guilabel:`Journal`: The dedicated journal used to log cross-entity clearing transfers.
   - :guilabel:`Account Payable`: The clearing payable account used to record debts owed to other
     companies within the database.
   - :guilabel:`Account Receivable`: The clearing receivable account used to record claims against
     other companies within the database.

#. Switch to the other companies involved using the :ref:`company selector
   <general/multi-company/company-selector>` and repeat the process for each one.

.. note::
   The payment method that is used to register the customer payment must use an :ref:`outstanding
   receipts account <accounting/journals/outstanding-accounts>` so that a journal entry is created.

.. tip::
   To keep these accounts clearly organized across accounting reports, :ref:`create
   <chart-of-account/create>` unique payable and receivable clearing accounts that are separate from
   the payable and receivable accounts used for general transactions, and enable the
   :guilabel:`Non Trade` option on these accounts.

.. _general/multi-company/use-cases:

Use cases
=========

.. _general/multi-company/use-cases-multinational-companies:

Multinational companies
-----------------------

A multinational retail chain operating in the United States and Canada must manage transactions in
USD and CAD.

Since each country has its own tax laws and regulations, using Odoo's multi-company feature is
highly beneficial.

This setup allows for inter-company transactions, which is essential for managing cross-border
inventory transfers. It also simplifies the sales process by enabling customers transactions in
their local currency.

.. _general/multi-company/use-cases-seperate-processes:

Separate processes
------------------

A small furniture company is launching a new product line that requires separate procurement,
inventory, and manufacturing workflows. These new products differ significantly from the existing
catalog. To manage this efficiently, the company is considering using the multi-company feature to
manage the new line as a separate business entity.

However, creating a completely new company might add unnecessary complexity to the database.
Instead, the company can leverage existing features such as :doc:`analytic accounting
<../../finance/accounting/reporting/analytic_accounting>` and multiple warehouses to manage the new
product line without complicating overall operations.
