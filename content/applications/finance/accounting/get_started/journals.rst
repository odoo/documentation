========
Journals
========

Journal entries are recorded in different **journals** to maintain an organized record of a
company's financial transactions. Odoo uses six different types of journals to organize accounting
records:

- :ref:`Bank <accounting/journals/bank>`
- :ref:`Cash <accounting/journals/cash>`
- :ref:`Credit Card <accounting/journals/credit>`
- :ref:`Sales <accounting/journals/sales>`
- :ref:`Purchase <accounting/journals/purchase>`
- :ref:`Miscellaneous <accounting/journals/misc>`

.. note::
   It is possible to have multiple journals of the same type, such as two separate bank journals,
   each for a unique bank account, or two separate sales journals to track :abbr:`B2B (business to
   business)` versus :abbr:`B2C (business to customer)` income.

.. _accounting/journals/configuration:

Configuration
=============

Each card on the :guilabel:`Accounting Dashboard` represents a journal. To edit the configuration of
a journal, click the :icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)` on the journal card, then
click :guilabel:`Configuration`. Alternatively, go to :menuselection:`Accounting --> Configuration
--> Journals` to select and edit an existing journal or to create a new one.

While different journal types have slightly different fields to configure, some fields are
consistent across all the journal types:

- :guilabel:`Short Code`: Each journal must have a unique code (from 1 to 5 characters long). The
  short code is used as the prefix for all journal entries belonging to this journal.
- :guilabel:`Currency`: If desired, set the currency of this journal. For bank and cash journals,
  this is the currency of the journal's :doc:`transactions <../bank/transactions>`. This field is
  only visible when :doc:`multiple currencies <multi_currency>` are enabled.

The :guilabel:`Advanced Settings` tab contains more technical options:

- :guilabel:`Allowed accounts`: Limit which accounts are available when recording journal entries in
  this journal. Leave this field blank to allow all accounts.
- :guilabel:`Email Alias`: Set an email address to create journal entries by digitizing PDFs sent
  to this address. This is most commonly used to create :ref:`customer invoices and vendor bills
  <accounting/bill-digitization/email-alias>`.
- :guilabel:`Secure Posted Entries with Hash`: Restrict the :doc:`alterability
  <../reporting/data_inalterability>` of this journal's entries to comply with tax authorities in
  certain countries.

.. warning::
   The :guilabel:`Secure Posted Entries with Hash` option cannot be removed from a journal once the
   journal has a posted journal entry.

.. note::
   - Bank and cash journals do not have the :guilabel:`Secure Posted Entries with Hash` or
     :guilabel:`Email Alias` fields.
   - If an :ref:`alias domain <email-inbound-custom-domain>` has not yet been configured, a link to
     :icon:`fa-arrow-right` :guilabel:`Configure Alias Domain` is displayed instead of the
     :guilabel:`Email Alias` field.

.. _accounting/journals/bank-cash-cc:

Bank, cash, and credit card journals
------------------------------------

Bank, cash, and credit card journals share the following features:

- :guilabel:`Suspense Account`: :doc:`../bank/transactions` on this journal are posted on this
  account until they are reconciled, at which point this account is replaced with the account the
  transaction was reconciled against. At any moment, the suspense account's balance in the general
  ledger shows the balance of transactions that have not yet been reconciled.

  .. note::
     When a bank transaction is reconciled, the journal entry is modified to replace the bank
     suspense account with the account of the journal item it is reconciled with. This account is
     usually either:

     - the :ref:`outstanding receipts or payments account
       <accounting/journals/outstanding-accounts>` if reconciling with a registered payment; or
     - the account receivable or payable if reconciling with an invoice or bill directly.

- :guilabel:`Dedicated Payment Sequence`: Tick this field to use separate sequences for payments
  and transactions posted on this journal.

  .. note::
     If the :guilabel:`Dedicated Payment Sequence` field is ticked, payments that use an
     :ref:`outstanding account <accounting/journals/outstanding-accounts>` will have references that
     add :guilabel:`P` before the journal's short code. Otherwise, the references will begin with
     :guilabel:`PAY`.

The :guilabel:`Incoming Payments` and :guilabel:`Outgoing Payments` tabs contain the :ref:`payment
methods <accounting/payments/payment-methods>` of this journal. Different payment methods are
available depending on the journal type. If desired, set :ref:`outstanding accounts
<accounting/journals/outstanding-accounts>` on the payment methods.

.. seealso::
   - :doc:`../bank`
   - :doc:`multi_currency`
   - :doc:`../bank/transactions`
   - `Bank configuration <https://www.youtube.com/watch?v=tVhhXw-VnGE>`_

.. _accounting/journals/outstanding-accounts:

Outstanding accounts
~~~~~~~~~~~~~~~~~~~~

By default, payments in Odoo do not create journal entries, but they can be configured to create
journal entries by using **outstanding accounts** on :ref:`bank <accounting/journals/bank>` and
:ref:`cash <accounting/journals/cash>` journals.

- An **outstanding receipts account** is where incoming payments are posted until they are linked
  with incoming bank transactions.
- An **outstanding payments account** is where outgoing payments are posted until they are linked
  with outgoing bank transactions.

These accounts are usually of :ref:`type <chart-of-account/type>` :guilabel:`Current Assets` and
:guilabel:`Current Liabilities`.

Payments that are registered in Odoo are posted to the outstanding receipts and outstanding accounts
until they are reconciled. At any moment, the outstanding receipts account's balance in the general
ledger shows the balance of registered incoming payments that have not yet been reconciled, and the
outstanding payments account's balance in the general ledger shows the balance of registered
outgoing payments that have not yet been reconciled.

Configuration
*************

To configure outstanding accounts, go to :menuselection:`Accounting --> Configuration --> Journals`
and select or create a bank or cash journal. In the :guilabel:`Incoming Payments` and
:guilabel:`Outgoing Payments` tabs, set :guilabel:`Outstanding Receipts accounts` and
:guilabel:`Outstanding Payments accounts` for each payment method that you want to create journal
entries.

.. note::
   - If the main bank account of the journal is added as an outstanding receipts account or
     outstanding payments account, when a payment is registered, the invoice or bill's status is
     directly set to :guilabel:`Paid`.
   - If the outstanding receipts or outstanding payments account for a payment method is left blank,
     registering a payment with that payment method will not create any journal entry.

.. _accounting/journals/bank:

Bank
~~~~

Bank journals are used to record journal entries related to :doc:`bank transactions
<../bank/transactions>` and incoming and outgoing :doc:`payments <../payments>`. The following
fields are specific to bank journals:

- :guilabel:`Bank Account`: This :guilabel:`Bank and Cash` type account is the default account for
  this bank journal.
- :guilabel:`Account Number`: The bank account's number is used when registering payments and is
  required for generating outgoing payment files, such as :doc:`SEPA <../payments/pay_sepa>` or
  :ref:`NACHA <l10n_us/nacha>`. To edit the bank account details, click on the
  :icon:`oi-arrow-right` :guilabel:`(Internal link)` button next to the :guilabel:`Account Number`
  and update the account information accordingly.
- :guilabel:`Bank`: The bank name is used when registering payments and is required for generating
  outgoing payment files. To edit the bank account details, click on the :icon:`oi-arrow-right`
  :guilabel:`(Internal link)` button next to the :guilabel:`Bank` name and update the account
  information accordingly.
- :guilabel:`Bank Feeds`: Define the method of creating bank :doc:`transactions
  <../bank/transactions>`, whether :guilabel:`Manual` or via :doc:`Online Synchronization
  <../bank/bank_synchronization>`.
- :guilabel:`Split Transactions`: Split collective payments for CODA files.

Multiple payment methods are available for bank journals, as are configurations for generating
outgoing payment files, such as :doc:`SEPA <../payments/pay_sepa>` or :ref:`NACHA <l10n_us/nacha>`.

.. _accounting/journals/cash:

Cash
~~~~

Cash journals are used to record journal entries related to cash :doc:`transactions
<../bank/transactions>`. The following fields are specific to cash journals:

- :guilabel:`Cash Account`: This :guilabel:`Bank and Cash` type account is the default account for
  this cash journal.
- :guilabel:`Profit Account`: This :guilabel:`Income` or :guilabel:`Other Income` type account is
  used to register a profit when the ending balance of a cash register is greater than expected.
- :guilabel:`Loss Account`: This :guilabel:`Expenses` type account is used to register a loss when
  the ending balance of a cash register is less than expected.

Only manual payment methods are available for cash journals.

.. _accounting/journals/credit:

Credit card
~~~~~~~~~~~

Credit card journals are used to record journal entries related to credit cards. The following
fields are specific to credit card journals:

- :guilabel:`Journal Account`: This :guilabel:`Credit Card` type account is the default account for
  this credit card journal.
- :guilabel:`Bank Feeds`: Define the method of creating credit card transactions, whether manual or
  via :doc:`Online Synchronization <../bank/bank_synchronization>`.

Only manual payment methods are available for credit card journals.

.. _accounting/journals/sales-purchase-misc:

Sales, purchase, and miscellaneous journals
-------------------------------------------

.. _accounting/journals/sales:

Sales
~~~~~

Sales journals, also known as income journals, are used to record journal entries related to
:doc:`customer invoices <../customer_invoices>`. The following fields are specific to customer
invoice journals:

- :guilabel:`Default Income Account`: Invoices in this journal use this :guilabel:`Income` or
  :guilabel:`Other Income` type account unless overwritten by another income account set on the
  product category, product, or invoice line itself.
- :guilabel:`Dedicated Credit Note Sequence`: Check this box to use a separate sequence for the
  reference of credit notes that increments separately from the main invoice sequence and adds an
  `R` to the reference before the journal's short code.
- :guilabel:`Dedicated Debit Note Sequence`: Check this box to use a separate sequence for the
  reference of credit notes that increments separately from the main invoice sequence and adds a `D`
  before the journal's short code.

Sales journals have additional fields in the :guilabel:`Advanced Settings` tab that allow you to set
the default communication format that will appear on customer invoices so that the customer can
refer to that particular invoice when making a payment:

- :guilabel:`Communication Type`: Choose if the format of the payment reference communicated to the
  customer should be based on the invoice number or the customer's number.
- :guilabel:`Communication Standard`: Choose the format of the payment reference itself that is
  communicated to the customer.

.. _accounting/journals/purchase:

Purchase
~~~~~~~~

Purchase journals are used to record journal entries related to :doc:`vendor bills
<../vendor_bills>`. The following fields are specific to purchase journals:

- :guilabel:`Default Expense Account`: Vendor bills in this journal use this :guilabel:`Expense`
  type account unless overwritten by another expense account set on the product category, product,
  or expense.
- :guilabel:`Private Part Account`: Select the account to be used to register the private part of
  mixed expenses.
- :guilabel:`Dedicated Credit Note Sequence`: Check this box to use a separate sequence for the
  reference of credit notes that increments separately from the main vendor bill sequence and adds
  an `R` to the reference before the journal's short code.
- :guilabel:`Dedicated Debit Note Sequence`: Check this box to use a separate sequence for the
  reference of credit notes that increments separately from the main invoice sequence and adds a `D`
  before the journal's short code.

.. _accounting/journals/misc:

Miscellaneous
~~~~~~~~~~~~~

Miscellaneous journals are used to record journal entries that are not related to any of the other
journal types such as tax closing journal entries.

.. seealso::
   - `Tax return eLearning <https://www.odoo.com/slides/slide/tax-return-10564>`_
   - :doc:`../reporting/tax_returns`
   - :doc:`../taxes`
