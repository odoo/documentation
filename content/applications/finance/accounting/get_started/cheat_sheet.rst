:code-column:
:custom-css: accounting.css
:custom-js: accounting-cheat-sheet.js

======================
Accounting cheat sheet
======================

.. h:div:: intro-list

   .. rst-class:: intro-balance

   The **Balance Sheet** is a snapshot of the company's finances at a specific date (as opposed to
   the Profit and Loss, which is an analysis over a period).

   * .. rst-class:: intro-assets

     **Assets** represent the company's wealth and the goods it owns. Fixed assets include buildings
     and offices, while current assets include bank accounts and cash. The money owed by a client is
     an asset. An employee is not an asset.

   * .. rst-class:: intro-liabilities

     **Liabilities** are obligations from past events that the company will have to pay in the
     future (utility bills, debts, unpaid suppliers). Liabilities could also be defined as a source
     of financing which is provided to the company, also called *leverage*.

   * .. rst-class:: intro-equity

     **Equity** is the amount of the funds contributed by the owners of the company (founders or
     shareholders) plus previously retained earnings (or losses). Each year, net profits (or losses)
     may be reported as retained earnings or distributed to the shareholders (as a dividend).

What is owned (an asset) has been financed through debts to reimburse (liabilities) or equity
(profits, capital).

A difference is made between **assets** and **expenses**:
   - An **asset** is a resource with economic value that an individual, corporation, or country owns
     or controls with the expectation that it will provide a future benefit. Assets are reported on
     a company's balance sheet. They are bought or created to increase a firm's value or benefit its
     operations.
   - An **expense** is the costs of operations a company bears to generate revenues.

.. h:div:: intro-list

   .. rst-class:: intro-p-l

   The **profit and loss** (P&L) report shows the company's performance over a specific period of
   time, usually a quarter or a fiscal year.

   * .. rst-class:: intro-gross-profit

     The **revenue** refers to the money earned by the company by selling goods and/or services.

   * .. rst-class:: intro-gross-profit

     The **cost of goods sold** (COGS, or also known as "Cost of Sale") refers to the sale of
     goods' costs (e.g., the cost of the materials and labor used to create the goods).

     * .. rst-class:: intro-gross-profit

       The **Gross profit** equals the revenues from sales minus the cost of goods sold.

     * .. rst-class:: intro-opex

       **Operating expenses** (OPEX) include administration, sales and R&D salaries, rent and
       utilities, miscellaneous costs, insurances, and anything beyond the costs of products sold
       or the cost of sale.

.. h:div:: doc-aside accounts-table

   .. container:: accounts-table-container cheat-sheet

      .. container:: primary-p-l

         .. rubric:: Profit & Loss
            :class: account-title

         .. container:: account-section

            .. rubric:: Net Profit
               :class: account-total secondary-retained

            .. container:: secondary-gross-profit

               .. rubric:: Gross Profit
                  :class: account-total primary-gross-profit

               Revenue
                  Product Sales
               *Less* Cost of Revenue
                  Cost of Goods Sold

            .. container:: primary-opex

               .. rubric:: Operating Income (or Loss)
                  :class: account-total

               *Less* Operating Expenses
                  | R&D
                  | Sales, General & Administrative

            Other Income
               | Foreign Exchange Gains
               | Asset Disposal
            *Less* Other Expenses
               | Interest on Debt
               | Depreciation

      .. container:: primary-balance

         .. rubric:: Balance Sheet
            :class: account-title

         .. container:: account-section

            .. rubric:: Net Assets
               :class: account-total

            .. container:: account-section

               .. rubric:: Total Assets
                  :class: account-total primary-assets

               .. container:: secondary-assets

                  Current Assets
                     | Cash & Bank Accounts
                     | Accounts Receivable
                     | Deferred Tax Assets
                  *Plus* Non-current Assets
                     | Land & Buildings
                     | Intangible Assets

            .. container:: account-section

               .. rubric:: Total Liabilities
                  :class: account-total primary-liabilities

               .. container:: secondary-liabilities

                  *Less* Current Liabilities
                     | Accounts Payable
                     | Deferred Revenue
                     | Deferred Tax Liabilities
                  *Less* Non-current Liabilities
                     Long-term Loans

         .. container:: secondary-equity

            .. rubric:: Total Equity
               :class: account-total primary-equity

            Equity
               Common Stock

            .. rubric:: *Plus* Retained Earnings
               :class: primary-retained

.. rst-class:: doc-aside

.. highlights:: Assets = Liabilities + Equity

Chart of accounts
=================

The **chart of accounts** lists all the company's accounts: both Balance sheet accounts and P&L
accounts. Every transaction is recorded by debiting and crediting multiple accounts in a journal
entry. In a way, a chart of accounts is like a company's DNA!

Every account listed in the chart of accounts belongs to a specific category. In Odoo, each account
has a unique code and belongs to one of these categories:

- **Equity and subordinated debts**

  - **Equity** is the amount of money invested by a company's shareholders to finance the
    company's activities.
  - **Subordinated debts** are the amount of money lent by a third party to a company to finance
    its activities. In the event of the dissolution of a company, these third parties are
    reimbursed before the shareholders.

- **Fixed assets** are tangible (i.e., physical) items or properties that a company purchases and
  uses to produce its goods and services. Fixed assets are long-term assets. This means the assets
  have a useful life of more than one year. They also include properties, plants, and equipments
  (also known as "PP&E") and are recorded on the balance sheet with that classification.
- **Current assets and liabilities**

  - The **current assets** account is a balance sheet line item listed under the Assets section,
    which accounts for all company-owned assets that can be converted to cash within one year.
    Current assets include cash, cash equivalents, accounts receivable, stock inventory,
    marketable securities, prepaid liabilities, and other liquid assets.
  - **Current liabilities** are a company's short-term financial obligations due within one year.
    An example of a current liability is money owed to suppliers in the form of accounts payable.

- **Bank and cash accounts**

  - A **bank account** is a financial account maintained by a bank or other financial institution
    in which the financial transactions between the bank and a customer are recorded.
  - A **cash account**, or cash book, may refer to a ledger in which all cash transactions are
    recorded. The cash account includes both the cash receipts and the cash payment journals.

- **Expenses and income**

  - An **expense** is the costs of operations a company bears to generate revenues. It is simply
    defined as the cost one is required to spend on obtaining something. Common expenses include
    supplier payments, employee wages, factory leases, and equipment depreciation.
  - The term "**income**" generally refers to the amount of money, property, and other transfers
    of value received over a set period of time in exchange for services or products.

Example
-------

.. h:div:: example

   \*: Customer Refund and Customer Payment boxes cannot be simultaneously selected as they are contradictory.

.. h:div:: doc-aside chart-of-accounts-example

   .. highlights:: Balance = Debit - Credit

   .. container:: chart-of-accounts cheat-sheet

      .. container:: chart-controls

         .. rst-class:: operation-incorporation

         Company Incorporation (Initial Capital $1,000)

         .. rst-class:: operation-customer_invoice_shipping

         Customer Invoice ($100 + 9% tax) & Shipping of the Goods

         .. rst-class:: operation-goods_shipment

         Goods Shipment to Customer

         .. rst-class:: operation-refund

         Customer Refund*

         .. rst-class:: operation-customer_payment

         Customer Payment*

         .. rst-class:: operation-vendor_goods_received

         Vendor Goods Received (Purchase Order: $50)

         .. rst-class:: operation-vendor_bill_50

         Vendor Bill (Invoice: $50)

         .. rst-class:: operation-vendor_bill_52

         Vendor Bill (Invoice: $52 but PO $50)

         .. rst-class:: operation-vendor_bill_paid

         Vendor Bill Paid ($52 + 9% tax)

         .. rst-class:: operation-acquire_building

         Acquire a building (purchase contract)

         .. rst-class:: operation-pay_building

         Pay for building

         .. rst-class:: operation-asset_depreciation

         Yearly Asset Depreciation (10% per year)

         .. rst-class:: operation-service_invoice_3y

         Customer Invoice (3 years service contract, $300)

         .. rst-class:: operation-revenue_recognition

         Revenue Recognition (each year, including first)

         .. rst-class:: operation-pay_taxes

         Pay Taxes Due

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm values-table

         * - ..
           - Debit
           - Credit
           - Balance
         * - .. rst-class:: account-1

             1 Assets
           -
           -
           - 0
         * - .. rst-class:: account-11000

             11000 Cash
           -
           -
           - 0
         * - .. rst-class:: account-13100

             13100 Accounts Receivable
           -
           -
           - 0
         * - .. rst-class:: account-14000

             14000 Inventory
           -
           -
           - 0
         * - .. rst-class:: account-14600

             14600 Goods Issued Not Invoiced
           -
           -
           - 0
         * - .. rst-class:: account-17200

             17200 Buildings
           -
           -
           - 0
         * - .. rst-class:: account-17800

             17800 Accumulated Depreciation
           -
           -
           - 0
         * - .. rst-class:: account-19000

             19000 Deferred Tax Assets
           -
           -
           - 0
         * - .. rst-class:: account-2

             2 Liabilities
           -
           -
           - 0
         * - .. rst-class:: account-21000

             21000 Accounts Payable
           -
           -
           - 0
         * - .. rst-class:: account-22300

             22300 Deferred Revenue
           -
           -
           - 0
         * - .. rst-class:: account-23000

             23000 Goods Received Not Purchased
           -
           -
           - 0
         * - .. rst-class:: account-26200

             26200 Deferred Tax Liabilities
           -
           -
           - 0
         * - .. rst-class:: account-3

             3 Equity
           -
           -
           - 0
         * - .. rst-class:: account-31000

             31000 Common Stock
           -
           -
           - 0
         * - .. rst-class:: account-4

             4 Revenue
           -
           -
           - 0
         * - .. rst-class:: account-41000

             41000 Goods
           -
           -
           - 0
         * - .. rst-class:: account-42000

             42000 Services
           -
           -
           - 0
         * - .. rst-class:: account-5

             5 Expenses
           -
           -
           - 0
         * - .. rst-class:: account-51100

             51100 Cost of Goods Sold
           -
           -
           - 0
         * - .. rst-class:: account-52500

             52500 Other Operating Expenses
           -
           -
           - 0
         * - .. rst-class:: account-53000

             53000 Price Difference
           -
           -
           - 0

.. _cheat_sheet/journals:

Journal entries
===============

Every financial document of the company (e.g., an invoice, a bank statement, a pay slip, a capital
increase contract) is recorded as a journal entry, impacting several accounts.

For a journal entry to be balanced, the sum of all its debits must be equal to the sum of all its
credits.

.. h:div:: doc-aside journal-entries

   .. container:: journal-entries-cheat-sheet

      .. container:: entries-panel

         .. rubric:: Company Incorporation
            :class: entry-title

         .. list-table::
            :header-rows: 1
            :widths: 50 25 25
            :class: table-sm d-c-table

            * - Account
              - Debit
              - Credit
            * - Assets: Cash
              - 1000
              -
            * - Equity: Common Stock
              -
              - 1000

         .. container:: entries-listing

            .. rubric:: Explanation

            - The company receives $1,000 in cash
            - Shares worth of $1,000 belong to the founders

            The initial capital can be cash, but could also be intellectual property, goodwill
            from a previous company, licences, know how, etc...

            Sometimes, capital is not released immediately, accounts for "capital to be released"
            may be necessary.

      .. container:: entries-panel

         .. rubric:: Customer Invoice ($100 + 9% tax)
            :class: entry-title

         .. list-table::
            :header-rows: 1
            :widths: 50 25 25
            :class: table-sm d-c-table

            * - Account
              - Debit
              - Credit
            * - Revenue: Goods
              -
              - 100
            * - Liabilities: Deferred Tax Liabilities
              -
              - 9
            * - Assets: Accounts Receivable
              - 109
              -
            * - Assets: Inventory
              -
              - 50
            * - Expenses: Cost of Goods Sold
              - 50
              -

         .. container:: entries-listing

            .. rubric:: Explanation

            - Revenues increase by $100
            - A tax to pay at the end of the month of $9
            - The customer owes $109
            - The inventory is decreased by $50 (shipping of the goods)
            - The cost of goods sold decreases the gross profit by $50

         .. container:: entries-listing

            .. rubric:: Configuration

            - Revenue: defined on the product, or the product category if not on the product,
              field Income Account
            - Deferred Tax Liabilities: defined on the tax used on the invoice line
            - Accounts Receivable: defined on the customer (property)
            - Inventory: defined on the category of the related product (property)
            - Expenses: defined on the product, or the category of product (property)

            The fiscal position used on the invoice may have a rule that replaces the Income
            Account or the tax defined on the product by another one.

      .. container:: entries-panel

         .. rubric:: Customer payment
            :class: entry-title

         .. list-table::
            :header-rows: 1
            :widths: 50 25 25
            :class: table-sm d-c-table

            * - Account
              - Debit
              - Credit
            * - Assets: Cash
              - 109
              -
            * - Assets: Accounts Receivable
              -
              - 109

         .. container:: entries-listing

            .. rubric:: Explanation

            - The company receives $109 in cash
            - The receivable held against the client is reduced by $109

         .. container:: entries-listing

            .. rubric:: Configuration

            - Cash: defined on the journal used when registering the payment, fields Default
              Credit Account and Default Debit Account
            - Accounts Receivable: defined on the customer (property)

      .. container:: entries-panel

         .. rubric:: Supplier Bill (Purchase Order $50 but Invoice $52)
            :class: entry-title

         .. list-table::
            :header-rows: 1
            :widths: 50 25 25
            :class: table-sm d-c-table

            * - Account
              - Debit
              - Credit
            * - Assets: Uninvoiced Inventory
              - 50
              -
            * - Assets: Deferred Tax Assets
              - 4.68
              -
            * - Expenses: Price Difference
              - 2
              -
            * - Liabilities: Accounts Payable
              -
              - 56.68

         .. container:: entries-listing

            .. rubric:: Explanation

            - A temporary account is used to note goods to receive
            - The purchase order provides prices of goods, the actual invoice may include extra
              costs such as shipping
            - The company still needs to pay the vendor (traded an asset against a liability)

         .. container:: entries-listing

            .. rubric:: Configuration

            - Uninvoiced Inventory: defined on the product or the category of related product,
              field: Stock Input Account
            - Deferred Tax Assets: defined on the tax used on the purchase order line
            - Accounts Payable: defined on the supplier related to the bill

            In this scenario, the purchase order was $50 but the company received an invoice for
            $52 as there were extra shipping costs

      .. container:: entries-panel

         .. rubric:: Supplier Goods Received (Purchase Order: $50)
            :class: entry-title

         .. list-table::
            :header-rows: 1
            :widths: 50 25 25
            :class: table-sm d-c-table

            * - Account
              - Debit
              - Credit
            * - Assets: Inventory
              - 50
              -
            * - Assets: Uninvoiced Inventory
              -
              - 50

         .. container:: entries-listing

            .. rubric:: Explanation

            - Inventory is increased by $50, the expected amount coming from the purchase order
            - A temporary account is used for the counterpart and will be cleared when receiving
              the invoice

         .. container:: entries-listing

            .. rubric:: Configuration

            - Uninvoiced Inventory: defined on the product or the category of related product,
              field: Stock Input Account
            - Inventory: defined on the product category, field: Stock Valuation

      .. container:: entries-panel

         .. rubric:: Buy an asset ($300,000 - no tax)
            :class: entry-title

         .. list-table::
            :header-rows: 1
            :widths: 50 25 25
            :class: table-sm d-c-table

            * - Account
              - Debit
              - Credit
            * - Assets: Buildings
              - 300000
              -
            * - Liabilities: Accounts Payable
              -
              - 300000

         .. container:: entries-listing

            .. rubric:: Explanation

            - The company gets an asset worth of $300,000
            - The company needs to pay $300,000 to the vendor (traded an asset against a liability)

         .. container:: entries-listing

            .. rubric:: Configuration

            - Buildings: Defined on the Asset category selected on the supplier bill line
            - Accounts Payable: defined on the supplier related to the bill (property)

      .. container:: entries-panel

         .. rubric:: Pay supplier invoice
            :class: entry-title

         .. list-table::
            :header-rows: 1
            :widths: 50 25 25
            :class: table-sm d-c-table

            * - Account
              - Debit
              - Credit
            * - Liabilities: Accounts Payable
              - 300000
              -
            * - Assets: Cash
              -
              - 300000

         .. container:: entries-listing

            .. rubric:: Explanation

            - The company owns $300,000 less to the supplier (liabilities are settled)
            - The company's cash is reduced by $300,000 (reduction of asset)

         .. container:: entries-listing

            .. rubric:: Configuration

            - Accounts Payable: defined on the supplier you pay (property)
            - Cash: defined on the journal related to the payment method

      .. container:: entries-panel

         .. rubric:: Cash sale (Sales Receipt)
            :class: entry-title

         .. list-table::
            :header-rows: 1
            :widths: 50 25 25
            :class: table-sm d-c-table

            * - Account
              - Debit
              - Credit
            * - Assets: Cash
              - 109
              -
            * - Revenue: Goods
              -
              - 100
            * - Liabilities: Deferred Tax Liabilities
              -
              - 9

         .. container:: entries-listing

            .. rubric:: Explanation

            - Company's cash is increased by $109
            - Revenues increase by $100
            - A tax of $9 has to be paid

         .. container:: entries-listing

            .. rubric:: Configuration

            - Cash: Payment method defined on the Sales Receipt
            - Sales: Defined on the product used in the sales receipt, or the category of product
              if empty
            - Deferred Tax Liabilities: Defined on the tax used in the sales receipt (coming from
              the product)

      .. container:: entries-panel

         .. rubric:: Customer pays invoice, 5% early payment rebate
            :class: entry-title

         .. list-table::
            :header-rows: 1
            :widths: 50 25 25
            :class: table-sm d-c-table

            * - Account
              - Debit
              - Credit
            * - Assets: Cash
              - 950
              -
            * - Revenue: Sales Discount
              - 50
              -
            * - Assets: Accounts Receivable
              -
              - 1000

         .. container:: entries-listing

            .. rubric:: Explanation

            - Company's cash is increased by $950
            - Sales discounts lowering effective revenues by $50
            - The customer owns $1000 less to the company

         .. container:: entries-listing

            .. rubric:: Configuration

            - Cash: is defined on the journal related to the payment / bank statement
            - Sales Discount: is selected during the payment matching process
            - Accounts Receivable: is defined on the customer associated to the payment

      .. container:: entries-panel

         .. rubric:: Fiscal year closing - positive earnings and 50% dividends
            :class: entry-title

         .. list-table::
            :header-rows: 1
            :widths: 50 25 25
            :class: table-sm d-c-table

            * - Account
              - Debit
              - Credit
            * - Net Profit
              - 1000
              -
            * - Equity: Retained Earnings
              -
              - 500
            * - Liabilities: Dividend Payable
              -
              - 500

         .. container:: entries-listing

            .. rubric:: Explanation

            - The P&L is cleared (net profit)
            - 50% is transferred to retained earnings
            - 50% will be paid to shareholders as dividends

         .. container:: entries-listing

            .. rubric:: Configuration

            This transaction is recorded by the advisor before closing the fiscal year,
            depending on how the company uses its net profit.

.. _accounting/reconciliation:

Reconciliation
==============

:doc:`Reconciliation <../../accounting/bank/reconciliation>` is the process of linking
journal items of a specific account and matching credits and debits.

Its primary purpose is to link payments to their related invoices to mark them as paid. This is done
by doing a reconciliation on the accounts receivable account and/or the accounts payable account.

Reconciliation is performed automatically by the system when:

- the payment is registered directly on the invoice
- the links between the payments and the invoices are detected at the bank matching process

.. h:div:: doc-aside reconciliation-example

   .. rubric:: Customer Statement Example

   .. rst-class:: table-sm d-c-table

   +-------------------------+-------------------------+-----------------------+
   |Accounts Receivable      |Debit                    |Credit                 |
   +=========================+=========================+=======================+
   |Invoice 1                |100                      |                       |
   +-------------------------+-------------------------+-----------------------+
   |Partial payment 1/2      |                         |70                     |
   +-------------------------+-------------------------+-----------------------+
   |Invoice 2                |65                       |                       |
   +-------------------------+-------------------------+-----------------------+
   |Partial payment 2/2      |                         |30                     |
   +-------------------------+-------------------------+-----------------------+
   |Payment 2                |                         |65                     |
   +-------------------------+-------------------------+-----------------------+
   |Invoice 3                |50                       |                       |
   +-------------------------+-------------------------+-----------------------+
   |                         |                         |                       |
   +-------------------------+-------------------------+-----------------------+
   |Total to pay             |50                       |                       |
   +-------------------------+-------------------------+-----------------------+

   .. container:: buttons reconciliation-controls

      - Reconcile
      - Reconcile Next
      - Unreconcile

Bank Reconciliation
===================

Bank reconciliation is the matching of bank statement lines (provided by your bank) with
transactions recorded internally (payments to suppliers or from customers). For each line in a bank
statement, it can be:

- **matched with a previously recorded payment**: a payment is registered when a check is received
  from a customer, then matched when checking the bank statement.
- **recorded as a new payment**: the payment's journal entry is created and reconciled with the
  related invoice when processing the bank statement.
- **recorded as another transaction**: bank transfer, direct charge, etc.

Odoo should automatically reconcile most transactions; only a few should need manual review. When
the bank reconciliation process is finished, the balance on the bank account in Odoo should match
the bank statement's balance.

.. rst-class:: checks-handling

Checks Handling
===============

There are two approaches to managing checks and internal wire transfers:

- Two journal entries and a reconciliation
- One journal entry and a bank reconciliation

.. h:div:: doc-aside

   The first journal entry is created by registering the payment on the
   invoice. The second one is created when registering the bank statement.

   .. rst-class:: table-sm d-c-table

   +-------------------------+--------------+------------+---------------+
   |Account                  |Debit         |Credit      |Reconciliation |
   +=========================+==============+============+===============+
   |Account Receivable       |              |100         |Invoice ABC    |
   +-------------------------+--------------+------------+---------------+
   |Undeposited funds        |100           |            |Check 0123     |
   +-------------------------+--------------+------------+---------------+

   .. rst-class:: table-sm d-c-table

   +-------------------------+--------------+------------+---------------+
   |Account                  |Debit         |Credit      |Reconciliation |
   +=========================+==============+============+===============+
   |Undeposited funds        |              |100         |Check 0123     |
   +-------------------------+--------------+------------+---------------+
   |Bank                     |100           |            |               |
   +-------------------------+--------------+------------+---------------+

.. h:div:: doc-aside

   A journal entry is created by registering the payment on the invoice. When
   reconciling the bank statement, the statement line is linked to the
   existing journal entry.

   .. rst-class:: table-sm d-c-table

   +-------------------------+--------------+------------+---------------+---------------+
   |Account                  |Debit         |Credit      |Reconciliation |Bank Statement |
   +=========================+==============+============+===============+===============+
   |Account Receivable       |              |100         |Invoice ABC    |               |
   +-------------------------+--------------+------------+---------------+---------------+
   |Bank                     |100           |            |               |Statement XYZ  |
   +-------------------------+--------------+------------+---------------+---------------+
