:show-content:

===========
Get started
===========

While some companies use Odoo from their first day of business, many companies need to transition to
Odoo from a different legacy accounting software. The process for companies starting directly with
Odoo is much simpler but still requires the following steps:

- :ref:`Validate the fiscal localization <accounting/get_started/db-creation>`
- :ref:`Import accounting <accounting/get_started/master-data>` and :ref:`other master data
  <accounting/get_started/add-master-data>`
- :ref:`Configure the Accounting settings <accounting/get_started/accounting-config>` to meet the
  company's business needs

The process for companies transitioning to Odoo involves the same steps as well as :ref:`importing
opening entries <accounting/get_started/open-entries>`.

.. list-table::
   :header-rows: 1
   :widths: 30 30 40

   * - Time of execution
     - General category
     - Specific to-do item
   * - :ref:`At database/company creation <accounting/get_started/db-creation>`
     - Fiscal localization
     - Verify localization
   * - :ref:`Prior to implementation <accounting/get_started/prior>`
     - :ref:`Accounting master data <accounting/get_started/master-data>`
     - | :ref:`Chart of accounts <accounting/get_started/coa>`
       | :ref:`Currency <accounting/get_started/currency>`
       | :ref:`Journals <accounting/get_started/journals>`
       | :ref:`Fiscal positions <accounting/get_started/fiscal-positions>`
       | :ref:`Taxes <accounting/get_started/taxes>`
       | :ref:`Payment terms <accounting/get_started/payment-terms>`
   * -
     - :ref:`Additional master data <accounting/get_started/add-master-data>`
     - | :ref:`Product categories <accounting/get_started/products>`
       | :ref:`Products <accounting/get_started/products>`
       | :ref:`Contact bank accounts <accounting/get_started/contact-bank>`
       | :ref:`Contacts <accounting/get_started/contacts>`
   * -
     - :ref:`Accounting configurations <accounting/get_started/accounting-config>`
     - | Company information
       | Tax return periodicity
       | Tax rounding and inclusion in prices
       | Default accounts
       | Financial year end date
       | Document sequencing
   * - :ref:`At time of implementation <accounting/get_started/at-implementation>`
     - :ref:`Opening entries <accounting/get_started/open-entries>`
     - | :ref:`Open invoices and bills <accounting/get_started/open-bills>`
       | :ref:`Inventory count <accounting/get_started/open-inventory>`
       | :ref:`Trial balance <accounting/get_started/open-tb>`
       | :ref:`Bank and credit card transactions <accounting/get_started/open-bank>`

.. note::
   The process of transitioning from a legacy software system to Odoo Accounting is complex and can
   vary greatly from one business to another. While these instructions provide the basic steps of
   the process, Odoo's `Success Packs <https://www.odoo.com/pricing-packs>`_ allow you to get
   personalized instructions on how best to adapt the process to your business's needs. Advanced
   users can use these instructions as a guide to transition to Odoo Accounting with the
   understanding that they may have individual needs not covered here.

.. tip::
   It is recommended to practice this process in a test database and work in parallel with your
   prior accounting workflows in case there are any issues.

.. _accounting/get_started/db-creation:

At database/company creation
============================

:doc:`Fiscal localization packages <../fiscal_localizations>` are country-specific modules that
install pre-configured taxes, fiscal positions, charts of accounts, and legal statements on your
database. Some additional features, such as the configuration of specific certificates, are also
added to the Accounting app, following your fiscal administration requirements.

A fiscal localization package is automatically installed based on the country selected when the
database is created. Some countries have multiple fiscal localization packages for different
business types, so be sure to verify that the correct package is installed. To do so, go to
:menuselection:`Accounting --> Configuration --> Settings` and verify the correct localization is
set in the :guilabel:`Package` field in the :guilabel:`Fiscal Localization` section.

.. warning::
   Selecting another package is only possible if no journal entry has been posted yet.

.. _accounting/get_started/prior:

Prior to implementation
=======================

.. _accounting/get_started/master-data:

Accounting master data
----------------------

Master data is data that other records rely on. For example, an invoice requires a customer; the
customer, or contact, is master data. Because other records rely on master data, the order in which
accounting data is transferred into Odoo, whether manually or via import, is crucial.

.. _accounting/get_started/coa:

Chart of accounts
~~~~~~~~~~~~~~~~~

The :doc:`chart of accounts <get_started/chart_of_accounts>` is the foundation of all accounting
records, and as such, it needs to be created before other database records. A standard chart of
accounts is included with each fiscal localization, but most businesses have their own chart of
accounts with its own accounts. Some of these accounts likely serve the same purpose as some of
Odoo's standard accounts, but they may have a different name and/or code. Other accounts may not
have an analogous account in Odoo's standard chart of accounts. These two types of accounts should
be handled differently:

- For accounts in your chart that have an analogous account in Odoo's standard chart of accounts,
  simply edit the account name and/or account code of the standard Odoo account to match your own.
- For accounts in your chart that do not have an analogous account in Odoo's standard chart of
  accounts, create them manually or :ref:`import <essentials/export_import_data/import-data>` them.

.. tip::
   Account codes, if used, must be unique per chart of accounts, so ensure that any newly created or
   imported accounts do not share the same code as an existing account.

.. danger::
   Because certain standard accounts are set as the default accounts for various fields (on
   products, product categories, contacts, and in the Accounting settings), **deleting them or
   changing their account type can break basic processes** like creating an invoice. Instead of
   deleting accounts in Odoo's standard chart of accounts, simply rename and recode them.

.. seealso::
   `Odoo Tutorial: Update your chart of accounts
   <https://www.odoo.com/slides/slide/update-your-chart-of-accounts-6391>`_

.. _accounting/get_started/currency:

Currency
~~~~~~~~

If additional :doc:`currencies <get_started/multi_currency>` are required beyond the default of the
company's fiscal localization, activate them. Currency rates can be set to update automatically in
the :guilabel:`Currencies` section of the Accounting settings.

.. _accounting/get_started/journals:

Journals
~~~~~~~~

Standard :doc:`journals <get_started/journals>` such as a sales journal, a purchase journal, a bank
journal, and more are created by default, but additional journals can be created to manage different
situations, including:

- tracking income through multiple sales journals
- having multiple bank accounts, each with its own journal
- managing loans, tax returns, payroll, and more with miscellaneous journals

Recording payments in bank, cash, and credit card journals can create journal entries or not,
depending on the journal's configuration. By default, no journal entries are created for payments.
To configure a journal to create payments, set :ref:`outstanding payments accounts
<accounting/journals/outstanding-accounts>` on the journal's payment methods.

.. _accounting/get_started/fiscal-positions:

Fiscal positions
~~~~~~~~~~~~~~~~

:doc:`Fiscal positions <taxes/fiscal_positions>` allow you to configure products to use different
income/expense accounts and apply different :doc:`taxes <taxes>` depending on the customer or vendor
purchasing or selling them. They can also be configured to apply automatically based on the
customer's or vendor's location. Default fiscal positions are included when installing a
:doc:`fiscal localization package <../fiscal_localizations>`, but existing fiscal positions can be
adjusted, and new fiscal positions can be created manually.

.. _accounting/get_started/taxes:

Taxes
~~~~~

:doc:`taxes` interact with many different aspects of accounting, including :doc:`fiscal positions
<taxes/fiscal_positions>`, :ref:`accounts <taxes/definition-tab>`, and products. Default taxes are
included when installing a :doc:`fiscal localization package <../fiscal_localizations>`, but
existing taxes can be adjusted, and new taxes can be created manually.

.. _accounting/get_started/payment-terms:

Payment terms
~~~~~~~~~~~~~

:doc:`Payment terms <customer_invoices/payment_terms>` detail the conditions of payment for records
such as sales and purchase orders, customer invoices, and vendor bills. Payment terms also allow you
to define installment plans for when one record's payments should be made in multiple installments.

As they are both used to dictate when payment is due, payment terms and due dates are mutually
exclusive: a record can only have one or the other.

.. _accounting/get_started/add-master-data:

Additional master data
----------------------

.. _accounting/get_started/products:

Products and product categories
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:doc:`Import your products <../../sales/sales/products_prices/products/import>` and product
categories or create them manually. Multiple fields on the product category form relate to
accounting, including:

- :ref:`Costing Method <costing-methods>`
- :ref:`Inventory Valuation <accounting/inventory-valuation/valuation-method>`
- :guilabel:`Income Account`
- :guilabel:`Expense Account`
- :guilabel:`Stock Account`
- :guilabel:`Price Difference Account` (available only on product categories that use
  :guilabel:`Perpetual (at invoicing)` for their :guilabel:`Inventory Valuation`)

By default, products inherit their :guilabel:`Income Account` and :guilabel:`Expense Account` from
their product category, but these accounts can be overridden on each product record. Other fields on
the product form relate to accounting as well, including:

- :guilabel:`Invoicing policy`
- :guilabel:`Sales Taxes`
- :guilabel:`Cost` (which is particularly important for importing the :ref:`opening inventory
  <accounting/get_started/open-inventory>`)
- :guilabel:`Purchase Taxes`

.. tip::
   Import product categories before products so that each product's category can be specified during
   the product import.

.. _accounting/get_started/contact-bank:

Contact banks and bank accounts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To send payments to vendors (such as with :ref:`SEPA credit transfer <accounting/sepa_payments/sct>`
or :doc:`NACHA <../fiscal_localizations/united_states>` files) and collect payments from customers
via :ref:`SEPA direct debit <accounting/sepa_payments/sdd>`, the customer's or vendor's bank account
must be set on their contact record.

:ref:`Import <essentials/export_import_data/import-data>` your contacts' :ref:`banks
<accounting/batch/create-bank>` and :ref:`bank accounts <accounting/batch/create-bank-account>` or
create them manually.

.. _accounting/get_started/contacts:

Contacts
~~~~~~~~

:ref:`Import <essentials/export_import_data/import-data>` your :doc:`contacts
<../../essentials/contacts>` or create them manually. Multiple fields  on the contact form affect
the contact's accounting records, such as invoices and bills, including:

- :doc:`Payment Terms <customer_invoices/payment_terms>` for sales and for purchases
- :doc:`Fiscal Position <taxes/fiscal_positions>`
- :guilabel:`Account Receivable`
- :guilabel:`Account Payable`
- :ref:`Invoice sending <accounting/invoice/sending>` preferences (visible only in :ref:`developer
  mode <developer-mode>`)
- :guilabel:`eInvoice format`
- Peppol e-address (EAS)
- e-invoicing endpoint
- :ref:`Bank accounts <accounting/batch/create-bank-account>`
- Additional e-invoicing fields may be available depending on the :doc:`fiscal localization
  <../fiscal_localizations>`

.. _accounting/get_started/accounting-config:

Accounting configurations
-------------------------

The following primary accounting configurations are crucial to successfully setting up accounting
records. The majority of these are found in the Accounting settings and accessible via
:menuselection:`Accounting --> Configuration --> Settings`.

- :doc:`Company information <../../general/companies>`, such as its name, address, logo, phone, and
  email address
- :ref:`accounting/tax-returns/periodicity`
- :guilabel:`Rounding Method`: Choose whether the total tax amount is rounded per line or per tax
  in the :guilabel:`Taxes` section of the Accounting settings.
- :guilabel:`Prices`: Choose whether prices are :guilabel:`Tax Excluded` or :guilabel:`Tax Included`
  by default in the :guilabel:`Taxes` section of the Accounting settings.
- :doc:`customer_invoices/terms_conditions`
- :guilabel:`Default accounts`: Default accounts can be set in the following two sections of the
  Accounting settings:

  - :guilabel:`Default accounts`: Additional default accounts beyond those configured for each
    journal
  - :guilabel:`Inventory valuation`: Other default accounts regarding both inventory valuation and
    manufacturing accounting

- :ref:`Fiscal year end date <accounting/year-end/fiscal-years>`
- :doc:`customer_invoices/sequence`

.. _accounting/get_started/at-implementation:

At the time of implementation
=============================

.. _accounting/get_started/open-entries:

Opening entries
---------------

Companies transitioning to Odoo with existing account balances, open invoices and bills, and an
opening inventory count need to enter these opening entries in their Odoo database so that they are
accurately represented.

The process of bringing in an :ref:`opening trial balance <accounting/get_started/open-tb>` and
:ref:`open invoices/bills <accounting/get_started/open-bills>` introduces complications because it
can cause duplicated values if done incorrectly.

.. example::
   A company has a current balance of $1000 in its accounts receivable, reflecting the $1000 that it
   is owed for its open invoices.

   If these open invoices and the balance of the accounts receivable are both created in Odoo
   without making any changes, the accounts receivable will mistakenly reflect a balance of $2000:

   - $1000 from the opening trial balance of the accounts receivable
   - $1000 from the creation of the open invoices in Odoo

The same concept applies to open vendor bills and the accounts payable.

To avoid this error, use *clearing accounts*, which are accounts that temporarily hold the value
before being balanced (or "cleared").

.. _accounting/get_started/transition:

When to transition
~~~~~~~~~~~~~~~~~~

There are three options for when to transition your accounting workflows to Odoo:

- At the end of the fiscal year: this is the easiest option because it minimizes the data that needs
  to be transferred.
- At the end of the tax period: with this option, you can choose to post all of the entries from the
  past period or only the balance of each account at the end of the period.
- In the middle of a tax period: this option is not recommended because it causes additional work
  and complications. Splitting a tax period between a legacy software and Odoo complicates the tax
  filing process since the data from the two systems must be combined.

Prepare the following documents from your previous system(s):

- Opening account balances
- Open (unpaid) invoices and credit notes
- Open (unpaid) vendor bills and refunds
- Opening inventory count

.. note::
   If journal entries have been created through the use of the Invoicing app or stock moves in a
   system with an automated inventory valuation, use the :guilabel:`Invoicing Switch Threshold`
   feature in the Accounting settings to cancel all journal entries before the specified date to
   start with a clean general ledger. Additionally, enter the appropriate starting balance on each
   bank journal's first statement so that it matches the current bank account balance.

.. warning::
   Before starting the process of creating opening entries in Odoo, verify that the data meets the
   following requirements:

   - The sum of the opening trial balances of all receivable accounts must equal the sum of the open
     customer invoices minus credit notes.
   - The sum of the opening trial balances of all payable accounts must equal the sum of the open
     vendor bills minus refunds.
   - The sum of the opening trial balance values of all inventory accounts must equal the sum of the
     value of the inventory (calculated by multiplying the product cost by the product quantity for
     each product and summing them together).
   - The opening trial balance itself must be balanced.

.. _accounting/get_started/open-bills:

Open invoices and bills
~~~~~~~~~~~~~~~~~~~~~~~

Companies transitioning to Odoo need to import or manually create their open (i.e., existing but not
yet fully paid) invoices and vendor bills (as well as any credit notes or refunds) in Odoo so that
no invoice or bill is lost in the transition. Importing these records is largely the same process
for both invoices and bills and is done in three steps:

#. :ref:`Preparing invoices/bills <accounting/get_started/prep-bills>`
#. :ref:`Validating invoices/bills <accounting/get_started/validate-bills>`
#. :ref:`Importing invoices/bills <accounting/get_started/import-bills>`

.. note::
   For simplicity's sake, it is recommended to import each invoice/bill with only the total amount
   due, rather than individual invoice/bill lines. This avoids common errors, such as tax accounts
   being affected twice for the same record.

.. _accounting/get_started/prep-bills:

Prepare invoices and bills
**************************

Prepare the open invoices and bills using the import template available in Odoo. To access the
import templates:

- For invoices and credit notes, go to :menuselection:`Accounting --> Customers --> Invoices`, click
  the :icon:`fa-cog` (:guilabel:`Actions`) icon, and click :icon:`fa-download` :guilabel:`Import`.
  Click :icon:`fa-download` :guilabel:`Template for Invoices` to download the template.
- For vendor bills and refunds, go to :menuselection:`Accounting --> Vendors --> Bills`, click the
  :icon:`fa-cog` (:guilabel:`Actions`) icon, and click :icon:`fa-download` :guilabel:`Import`. Click
  :icon:`fa-download` :guilabel:`Template for Bills` to download the template.

Prepare the following fields:

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Field
     - Description
   * - Partner
     - Customer name (must exactly match a contact record in Odoo)
   * - Number
     - Invoice number (e.g., BILL/2026/00001): This number must **not** already exist in this
       database yet; otherwise, it will have to be :doc:`resequenced <customer_invoices/sequence>`
   * - Reference
     - (Optional) Invoice reference (i.e., the name of the document that created this invoice)
   * - Invoice Bill Date
     - Date the invoice was created. Ensure the year in the :guilabel:`Number` and the year in this
       field are the same to prevent errors.
   * - Due Date
     - Date the invoice/bill is due. Each invoice/bill can have either a due date or payment terms,
       but not both.
   * - Payment Terms
     - The :doc:`payment terms <customer_invoices/payment_terms>` of the invoice/bill. Each
       invoice/bill can have either a due date or payment terms, but not both. Payment terms are
       only recommended for open invoices/bills if they are used with payment installments.
   * - Journal
     - (Optional) The journal name, if multiple sales journals or multiple purchase journals exist
   * - Invoice Lines / Label
     - A label for the invoice (e.g., `Open Invoices`)
   * - Invoice Lines / Account
     - The receivable clearing account
   * - Invoice Lines / Unit Price
     - The total amount due on the invoice. If partial payments have been made, this is for the
       remaining amount due (i.e., total minus partial payments).
   * - Currency
     - Currency the invoice was issued in (if different from the company currency). If importing
       open invoices with different currencies, create a :ref:`historical exchange rate
       <multi-currency/manual-update>` for each invoice in a different currency before importing.

.. tip::
   To identify accounts when not using account codes, replace the :guilabel:`Invoice Lines /
   Account` field with :guilabel:`Invoice Lines / Account / External ID` and identify the account
   by its :ref:`external ID <export_import_data/different-ids>`.

.. _accounting/get_started/validate-bills:

Validate invoices and bills
***************************

Validate the following aspects of the open invoices, bills, credit notes, and refunds:

- The sum of open bills minus the sum of open refunds equals the balance of accounts payable on the
  accounts payable of the opening trial balance.
- The sum of open invoices minus the sum of open credit notes equals the balance of the accounts
  receivable on the opening trial balance.
- Check for negative invoices and bills:

  - If any invoices are for negative amounts, they are credit notes and should be imported
    separately as a positive value under the :menuselection:`Accounting --> Customers --> Credit
    Notes` menu. Change the :guilabel:`Number` from `INV/YEAR/NUMBER` to `RINV/YEAR/NUMBER`, and
    (optionally) change the :guilabel:`Reference` to `Reversal of: [INV Number]`.
  - Similarly, if any bills are for negative amounts, they are refunds and should be imported
    separately as a positive value under the :guilabel:`Accounting --> Vendors --> Refunds` menu.
    Change the :guilabel:`Number` from `BILL/YEAR/NUMBER` to `RBILL/YEAR/NUMBER` and (optionally)
    change the :guilabel:`Reference` to `Reversal of: [BILL Number]`.

- Check for different currencies: If importing open invoices/bills with different currencies, create
  a :ref:`historical exchange rate <multi-currency/manual-update>` for the date of creation for each
  invoice or bill in a different currency.

.. _accounting/get_started/import-bills:

Import invoices and bills
*************************

:ref:`Import <essentials/export_import_data/import-data>` the :ref:`prepared fields
<accounting/get_started/prep-bills>` from the appropriate menu:

- For customer invoices, go to :menuselection:`Accounting --> Customers --> Invoices`.
- For vendor bills, go to :menuselection:`Accounting --> Vendors --> Bills`.
- For credit notes, go to :menuselection:`Accounting --> Customers --> Credit Notes`.
- For vendor refunds, go to :menuselection:`Accounting --> Vendors --> Refunds`.

The records are all imported as drafts. From the resulting list view, select the imported draft
records, click :icon:`fa-cog` :guilabel:`Actions`, and click :guilabel:`Confirm Entries`.

Repeat the process for each record type (invoices, bills, credit notes, and refunds).

.. _accounting/get_started/open-inventory:

Opening inventory
~~~~~~~~~~~~~~~~~

.. note::
   The process of creating an opening inventory count and the associated inventory valuation is the
   same regardless of the :ref:`accounting standard
   <accounting/inventory-valuation/accounting-standards>` or :ref:`valuation method
   <accounting/inventory-valuation/configuration>`.

The process of importing an opening inventory is done in three steps:

#. :ref:`Preparing inventory <accounting/get_started/prep-inventory>`
#. :ref:`Validating inventory <accounting/get_started/validate-inventory>`
#. :ref:`Importing inventory <accounting/get_started/import-inventory>`

.. _accounting/get_started/prep-inventory:

Prepare the inventory
*********************

If product costs were not already included when the products were created, update them, either
manually in the :guilabel:`Cost` field on the product form, or via an :ref:`import to update
<essentials/update-data>` it.

.. tip::
   To import products that use a :abbr:`FIFO (first in first out)` costing method with multiple
   quantities at different costs, set the cost on the product form, then import the quantity at that
   cost. Repeat the process as many times as needed, once for each different cost.

Prepare the opening inventory count using the import template available in Odoo. To access the
import template, go to :menuselection:`Inventory --> Operations --> Physical Inventory`, click the
:icon:`fa-cog` (:guilabel:`Actions`) icon, and click :icon:`fa-download` :guilabel:`Import`. Click
:icon:`fa-download` :guilabel:`Template for Inventory Adjustments` to download the template.

Prepare the following fields:

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Field
     - Description
   * - Product
     - The product name or internal reference. If using :doc:`product variants
       <../../sales/sales/products_prices/products/variants>`, identifying the product is more
       complicated as multiple variants could have the same product name. In this case, it is
       recommended to use the :ref:`external ID <export_import_data/different-ids>` to identify the
       product and change the column name to `Product / External ID`.
   * - Counted
     - The quantity of products in the opening inventory count
   * - Location
     - If the :guilabel:`Locations` feature has been enabled in the settings, it is required to
       specify where each line of the opening inventory is located.
   * - Lot/Serial Number
     - If the product is tracked by lot or serial numbers, specify the lot or serial number here.
       Each unique lot or serial number requires its own line.

.. _accounting/get_started/validate-inventory:

Validate the inventory
**********************

Verify that the sum of the opening trial balance values of all inventory accounts equals the sum of
the value of the inventory. The value of the inventory is calculated by multiplying the product cost
by the product quantity for each line and summing them together.

.. example::

   .. list-table::
      :class: table-striped
      :header-rows: 1

      * - Product
        - Counted quantity
        - Product cost
        - Total value
      * - Desk
        - 10
        - $250
        - $2500
      * - Table
        - 8
        - $350
        - $2800
      * - Chair
        - 15
        - $50
        - $750

   The sum of all the inventory is $6050 ($2500 + $2800 + $750). The value of the inventory account
   in the trial balance must equal $6050, or if there are multiple inventory accounts, their sum
   must be $6050.

.. _accounting/get_started/import-inventory:

Import the inventory
********************

:ref:`Import <essentials/export_import_data/import-data>` the :ref:`prepared fields
<accounting/get_started/prep-inventory>`:

#. Go to :menuselection:`Inventory --> Operations --> Physical Inventory`.
#. :ref:`Import <essentials/export_import_data/import-data>` the inventory count.
#. The records are all imported as drafts. From the resulting list view, click :guilabel:`Apply
   All`.
#. Enter an :guilabel:`Inventory Reason` (e.g., `Opening inventory`) and a :guilabel:`Counting
   Date`.
#. Click :guilabel:`Update Quantities`.

.. _accounting/get_started/open-tb:

Opening trial balance
~~~~~~~~~~~~~~~~~~~~~

The trial balance is the complete list of accounts with their current balance. It is crucial to
input this data into Odoo so that accounts have the correct balances going forward.

The process of importing an opening trial balance is done in three steps:

#. :ref:`Preparing the trial balance <accounting/get_started/prep-tb>`
#. :ref:`Validating the trial balance <accounting/get_started/validate-tb>`
#. :ref:`Importing the trial balance <accounting/get_started/import-tb>`

.. _accounting/get_started/prep-tb:

Prepare the opening trial balance
*********************************

Export the trial balance from your legacy software. The trial balance should be a list of all
accounts in the chart of accounts, each with its balance as either a debit or a credit.

Prepare the opening trial balance by inserting the information from your legacy software into the
journal entry import template available in Odoo. To access the import template for journal entries,
go to :menuselection:`Accounting --> Accounting --> Journal Entries`, click the :icon:`fa-cog`
(:guilabel:`Actions`) icon, and click :icon:`fa-download` :guilabel:`Import`. Click
:icon:`fa-download` :guilabel:`Template for Misc. Operations` to download the template.

Insert the data of the trial balance in the template with the following fields:

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Field
     - Description
   * - Reference
     - A reference that identifies this journal entry (e.g., `Opening trial balance` or something
       similar)
   * - Date
     - The date of this journal entry
   * - Journal
     - The journal this journal entry should exist in. The default miscellaneous journal is
       recommended.
   * - Journal Items / Account
     - The account code and/or name
   * - Journal Items / Debit
     - The debit value of the account in the company's main currency. If the line has a credit, this
       field should be left blank. Do not enter `0.00` or a negative value.
   * - Journal Items / Credit
     - The credit value of the account in the company's main currency. If the line has a debit, this
       field should be left blank. Do not enter `0.00` or a negative value.
   * - Journal Items / Label
     - (Optional) A label that identifies this specific line of the trial balance

.. important::
   - The :guilabel:`Reference`, :guilabel:`Date`, and :guilabel:`Journal` columns refer to the
     entire journal entry. As such, they should only be populated for the first line so that one
     journal entry is created containing all of the journal items within it.
   - Each line should have only one value in either the :guilabel:`Journal Items / Debit` or
     :guilabel:`Journal Items / Credit` column, and the other column of the line should remain
     blank. Do not enter `0.00` or a negative value in any column.

.. tip::
   To identify accounts when not using account codes, replace the :guilabel:`Invoice Lines /
   Account` field with :guilabel:`Journal Items / Account / External ID` and identify the account
   by its :ref:`external ID <export_import_data/different-ids>`.

Edit the opening trial balance spreadsheet, replacing the following accounts with clearing accounts:

- Accounts Receivable --> AR Clearing (:guilabel:`Type` = :guilabel:`Current Assets`)
- Accounts Payable --> AP Clearing (:guilabel:`Type` = :guilabel:`Current Assets`)

.. note::

   - In the :ref:`final validation step <accounting/get_started/validation>`, the clearing account
     types are changed to :guilabel:`Off-Balance Sheet`, so the account type is not critical.
   - If you use multiple accounts receivable or multiple accounts payable, they can be merged into a
     single clearing account.

.. example::

   .. list-table::
      :class: table-striped
      :header-rows: 1

      * - Reference
        - Date
        - Journal
        - Journal Items / Account
        - Journal Items / Debit
        - Journal Items / Credit
      * - Opening trial balance
        - 01/01/2026
        - Miscellaneous
        - 101404 Bank
        - 10,000
        -
      * -
        -
        -
        - 110100 Inventory Valuation
        - 30,000
        -
      * -
        -
        -
        - 777777 AR Clearing
        - 5,000
        -
      * -
        -
        -
        - 131000 Tax Paid
        - 2,000
        -
      * -
        -
        -
        - 888888 AP Clearing
        -
        - 4,000
      * -
        -
        -
        - 220000 Credit Card
        -
        - 8,000
      * -
        -
        -
        - 251000 Tax Received
        -
        - 6,000
      * -
        -
        -
        - 400000 Product Sales
        -
        - 24,000
      * -
        -
        -
        - 690000 Miscellaneous Expenses
        -
        - 5,000

.. _accounting/get_started/validate-tb:

Validate the opening trial balance
**********************************

Verify that the trial balance meets the following requirements:

- The sum of the opening trial balances of all receivable accounts must equal the sum of the open
  customer invoices minus credit notes.
- The sum of the opening trial balances of all payable accounts must equal the sum of the open
  vendor bills minus refunds.
- The sum of the opening trial balance values of all inventory accounts must equal the sum of the
  value of the inventory (calculated by multiplying the product cost by the product quantity for
  each product and summing them together).
- The opening trial balance itself must be balanced.

.. _accounting/get_started/import-tb:

Import the opening trial balance
********************************

:ref:`Import <essentials/export_import_data/import-data>` the :ref:`prepared fields
<accounting/get_started/prep-tb>`.

The trial balance is imported as a draft. From the resulting list view, open the draft entry,
review it, and click :guilabel:`Post`.

.. _accounting/get_started/open-bank:

Opening bank and credit card transactions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For bank, credit card, and cash accounts, it is important to verify that the journal's opening
statement's starting balance is updated to reflect the actual value of the account:

Once the first transactions are added (whether manually, via import, or via bank sync), create the
opening :ref:`statement <accounting/transactions/statements>` with as many or few transactions as
desired. Set the :guilabel:`Starting Balance` to the correct balance of the bank account before the
first transaction.

.. note::
   When :doc:`synchronizing <bank/bank_synchronization>` bank and credit card accounts, delete any
   transactions from before the date of the trial balance to ensure the account balance is correct.

Repeat this process for each bank, cash, or credit card journal.

.. _accounting/get_started/validation:

Final validation
~~~~~~~~~~~~~~~~

To complete the transition to Odoo, verify that all clearing accounts are now balanced, and remove
them from reports by changing their :guilabel:`Account Type` to :guilabel:`Off-Balance Sheet` after
the import.

.. toctree::
   :titlesonly:

   get_started/cheat_sheet
   get_started/chart_of_accounts
   get_started/consolidation
   get_started/journals
   get_started/multi_currency
   get_started/avg_price_valuation
   get_started/tax_units
   get_started/inventory_valuation
