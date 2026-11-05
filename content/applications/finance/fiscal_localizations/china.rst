=====
China
=====

.. _localizations/china/modules:

Modules
=======

The following modules are :ref:`installed <general/install>` automatically with the Chinese
localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`China - Accounting`
     - `l10n_cn`
     - This module includes two fiscal localization packages:
       :guilabel:`China - Accounting Standards for Business Enterprises` and
       :guilabel:`China - Accounting Standards for Small Business Enterprises`.
   * - :guilabel:`China - Accounting Reports`
     - `l10n_cn_reports`
     - This module includes the accounting reports for China.

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :doc:`installed
   <../../general/apps_modules>`.

.. _localizations/china/loc-overview:

Localization overview
=====================

The Chinese localization package ensures compliance with Chinese fiscal and accounting regulations.
It includes tools for managing taxes, fiscal positions, reporting, and a predefined chart of
accounts tailored to China's standards.

The Chinese localization package provides the following key features to ensure compliance with local
fiscal and accounting regulations:

- :ref:`Chart of accounts <localizations/china/chart_of_accounts>`: a predefined structure tailored
  to Chinese accounting standards
- :ref:`Reporting <localizations/china/reporting>`
- :ref:`Taxes <localizations/china/taxes>`: pre-configured tax rates, including standard VAT,
  zero-rated, and exempt options
- :doc:`../accounting/taxes/fiscal_positions`: automated tax mapping based on the fapiao type for
  domestic customers and suppliers, and a dedicated fiscal position for foreign ones

.. _localizations/china/chart_of_accounts:

Chart of accounts
-----------------

Two independent :doc:`charts of accounts <../accounting/get_started/chart_of_accounts>` are
available, depending on the selected :ref:`fiscal localization package
<fiscal_localizations/packages>`: :guilabel:`China - Accounting Standards for Business Enterprises`
and :guilabel:`China - Accounting Standards for Small Business Enterprises`.

.. _localizations/china/reporting:

Reporting
---------

Each :ref:`fiscal localization package <fiscal_localizations/packages>` includes dedicated
:ref:`Balance Sheet <accounting/reporting/balance-sheet>` and :ref:`Profit and Loss
<accounting/reporting/profit-and-loss>` reports, based on the corresponding :ref:`chart of accounts
<localizations/china/chart_of_accounts>`.

To access these reports, go to :menuselection:`Accounting --> Reporting` and select
:guilabel:`Balance Sheet` or :guilabel:`Profit and Loss`.

.. _localizations/china/taxes:

Taxes
-----

Both :ref:`packages <fiscal_localizations/packages>` share the same pre-configured
:doc:`taxes <../accounting/taxes>`. To view them, go to :menuselection:`Accounting --> Configuration
--> Taxes`.

The taxes are designed to feed the :ref:`tax report <localizations/china/accounting/tax_report>`.
Most taxes and tax grids are assigned to a line of :guilabel:`Schedule 1 - Sales Details` or
:guilabel:`Schedule 2 - Input Tax Details`, so that amounts are classified and totaled
automatically. The tables below show the schedule line for each tax.

Each tax name follows a pattern that identifies the tax rate or treatment, the type of supply or
purchase, and the supporting document: a **fapiao**
(:dfn:`official invoice issued through the Electronic Tax Bureau`) or a receipt. Understanding
this pattern simplifies the search for the right tax.

.. tip::
   To choose the right tax, first determine whether the transaction is a sale or a purchase:

   - For a sale, identify the rate or treatment, the scope, and the fapiao type.
   - For a purchase, identify the rate and the supporting document received.

.. _localizations/china/taxes/output:

Output VAT (sales)
~~~~~~~~~~~~~~~~~~

Output VAT taxes are named **[Rate or treatment] [Scope] [Fapiao type]**, using the codes below.

.. list-table::
   :header-rows: 1
   :widths: 25 15 60

   * - Category
     - Code
     - Meaning
   * - Rate or treatment
     - :guilabel:`ECR`
     - Exemption, Credit and Refund
   * - Rate or treatment
     - :guilabel:`E`
     - Tax Exemption
   * - Rate or treatment
     - :guilabel:`ER`
     - Exemption and Refund
   * - Rate or treatment
     - :guilabel:`R`
     - 3% levy rate reduced to 2%, 1.5%, or 1%
   * - Scope
     - :guilabel:`G`
     - Goods and processing, repair and replacement services
   * - Scope
     - :guilabel:`S`
     - Service, immovable property and intangible asset
   * - Fapiao type
     - :guilabel:`S`
     - VAT Special Invoice
   * - Fapiao type
     - :guilabel:`O`
     - VAT Other Invoice
   * - Fapiao type
     - :guilabel:`N`
     - No Invoice

.. example::
   :guilabel:`13% G S` is the 13% VAT for goods and processing, repair, and replacement services,
   issued with a VAT Special Invoice.

The tax rate and scope determine the line of :guilabel:`Schedule 1 - Sales Details`, while the
fapiao type determines the column:

- :guilabel:`S` (VAT Special Invoice): columns 1 and 2
- :guilabel:`O` (VAT Other Invoice): columns 3 and 4
- :guilabel:`N` (No Invoice): columns 5 and 6

The general tax calculation method applies tax rates to sales and allows the deduction of input
VAT. The simplified tax calculation method applies levy rates to sales and does not allow the
deduction of input VAT.

The following table shows the available combinations and the corresponding line of
:guilabel:`Schedule 1 - Sales Details`. Where a cell shows two values, the first applies to goods
and the second to services.

.. list-table::
   :header-rows: 1
   :widths: 14 13 19 12 14 14 14

   * - Tax rate or treatment
     - Method
     - Scope
     - Schedule 1 line
     - Special (S)
     - Other (O)
     - No Invoice (N)
   * - 13%
     - General
     - Goods (G) / Service (S)
     - 1 / 2
     - Yes
     - Yes
     - Yes (inactive)
   * - 9%
     - General
     - Goods (G) / Service (S)
     - 3 / 4
     - Yes
     - Yes
     - Yes (inactive)
   * - 6%
     - General
     - Not split by scope
     - 5
     - Yes
     - Yes
     - Yes (inactive)
   * - 5%
     - Simplified
     - Service (S)
     - 9b
     - Yes
     - Yes
     - Yes (inactive)
   * - 3%
     - Simplified
     - Goods (G) / Service (S)
     - 11 / 12
     - Yes
     - Yes
     - Yes (inactive)
   * - 0% ECR
     - Not applicable
     - Goods (G) / Service (S)
     - 16 / 17
     - No
     - Yes
     - Yes (inactive)
   * - E
     - Not applicable
     - Goods (G)
     - 18
     - Yes
     - Yes
     - Yes (inactive)
   * - E
     - Not applicable
     - Service (S)
     - 19
     - No
     - Yes
     - Yes (inactive)
   * - 0% ER
     - Not applicable
     - Goods (G)
     - 18
     - Yes
     - Yes
     - Yes (inactive)
   * - 0% ER
     - Not applicable
     - Service (S)
     - 19
     - No
     - Yes
     - Yes (inactive)

.. note::
   - For 6% taxes, the single letter at the end of the name is the fapiao type, not the scope.
     For example, :guilabel:`6% S` is the 6% VAT issued with a VAT Special Invoice.
   - Taxes with the :guilabel:`N` (No Invoice) type are inactive by default. To use one, activate it
     from the list of taxes.

The following taxes apply to the 3% levy rate reduced to a lower rate. Only the :guilabel:`O`
(VAT Other Invoice) fapiao type is available, so these taxes are not split by fapiao type, and the
amounts are reported in columns 3 and 4 of :guilabel:`Schedule 1 - Sales Details`.

.. list-table::
   :header-rows: 1
   :widths: 20 15 15 35 15

   * - Tax name
     - Scope
     - Reduced levy rate
     - When it applies
     - Schedule 1 line
   * - :guilabel:`3% R 2%`
     - Goods
     - 2%
     - Sale of self-used fixed assets or used goods
     - 11
   * - :guilabel:`3% R 1%`
     - Goods
     - 1%
     - Small-scale taxpayers
     - 11
   * - :guilabel:`3% R 1.5%`
     - Service
     - 1.5%
     - Housing rental by individuals
     - 12

.. _localizations/china/taxes/input:

Input VAT (purchases)
~~~~~~~~~~~~~~~~~~~~~

Input VAT taxes are named **[Rate] I [Document]**. The document code identifies the supporting
document that justifies the tax.

.. list-table::
   :header-rows: 1
   :widths: 12 18 32 20 18

   * - Code
     - Rates
     - Supporting document
     - Deductible
     - Schedule 2 line
   * - :guilabel:`I S`
     - 13%, 9%, 6%, 5%, 3%
     - VAT Special Invoice
     - Yes
     - 2
   * - :guilabel:`I C`
     - 13%, 9%
     - Customs Import VAT Special Payment Receipt
     - Yes
     - 5
   * - :guilabel:`I A`
     - 9%
     - Agricultural product purchasing or sales invoice
     - Yes
     - 6
   * - :guilabel:`I W`
     - 13%, 9%, 6%
     - Withholding Tax Payment Receipt
     - Yes
     - 7
   * - :guilabel:`I ND`
     - 13%, 9%, 6%, 5%, 3%, 0%, Tax Exemption
     - Any (input tax not deductible)
     - No
     - Not applicable

.. note::
   - :guilabel:`I S` taxes only feed line 2 of :guilabel:`Schedule 2 - Input Tax Details`, for VAT
     Special Invoices certified and deducted in the current period.
   - For VAT Special Invoices certified in a previous period and deducted in the current period,
     enter the amounts manually on line 3 of the :ref:`tax report
     <localizations/china/accounting/tax_report>`.

.. _localizations/china/taxes/tax_grids:

Tax grids for specific scenarios
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some VAT scenarios are not configured as taxes. Instead, each scenario is an independent tax grid
defined directly in the formulas of the :ref:`tax report
<localizations/china/accounting/tax_report>`.

To report an amount under a specific grid, open a draft invoice, bill, or journal entry. In the
:guilabel:`Journal Items` tab, select the grid in the :guilabel:`Tax Grids` field of the relevant
journal item. A tax grid can be used alone, without applying a tax rate, or combined with a tax
when the amount also needs to follow a tax rate.

.. note::
   These grids are not taxes and therefore do not appear in the list of taxes under
   :menuselection:`Accounting --> Configuration --> Taxes`.

.. _localizations/china/taxes/tax_grids/refund_upon_collection:

Items subject to refund upon collection
***************************************

.. list-table::
   :header-rows: 1
   :widths: 35 50 15

   * - Tax grid
     - Meaning
     - Schedule 1 line
   * - :guilabel:`一般计税 即征即退货物销售额`
     - General tax calculation method, refund upon collection: sales amount of goods
     - 6
   * - :guilabel:`一般计税 即征即退货物销项税额`
     - General tax calculation method, refund upon collection: output tax amount of goods
     - 6
   * - :guilabel:`一般计税 即征即退服务销售额`
     - General tax calculation method, refund upon collection: sales amount of service
     - 7
   * - :guilabel:`一般计税 即征即退服务销项税额`
     - General tax calculation method, refund upon collection: output tax amount of service
     - 7
   * - :guilabel:`简易计税 即征即退货物销售额`
     - Simplified tax calculation method, refund upon collection: sales amount of goods
     - 14
   * - :guilabel:`简易计税 即征即退货物销项税额`
     - Simplified tax calculation method, refund upon collection: output tax amount of goods
     - 14
   * - :guilabel:`简易计税 即征即退服务销售额`
     - Simplified tax calculation method, refund upon collection: sales amount of service
     - 15
   * - :guilabel:`简易计税 即征即退服务销项税额`
     - Simplified tax calculation method, refund upon collection: output tax amount of service
     - 15

.. _localizations/china/taxes/tax_grids/transferred_out:

Input tax transferred out
*************************

.. list-table::
   :header-rows: 1
   :widths: 35 50 15

   * - Tax grid
     - Meaning
     - Schedule 2 line
   * - :guilabel:`进项税转出 - 免税项目用`
     - Used for tax-exempt items
     - 14
   * - :guilabel:`进项税转出 - 集体福利和个人消费`
     - Collective welfare and personal consumption
     - 15
   * - :guilabel:`进项税转出 - 非正常损失`
     - Abnormal loss
     - 16
   * - :guilabel:`进项税转出 - 简易计税项目用`
     - Used for simplified taxation items
     - 17
   * - :guilabel:`进项税转出 - 免抵退不得抵扣`
     - Non-deductible under the exemption, credit and refund method
     - 18
   * - :guilabel:`进项税转出 - 纳税检查调减`
     - Reduction adjusted by tax inspection
     - 19
   * - :guilabel:`进项税转出 - 红字信息表注明进项税额`
     - Input tax indicated in the red information form
     - 20
   * - :guilabel:`进项税转出 - 上期留抵税额抵减欠税`
     - Prior-period retained tax credited against tax arrears
     - 21
   * - :guilabel:`进项税转出 - 上期留抵税额退税`
     - Prior-period retained tax refunded
     - 22
   * - :guilabel:`进项税转出 - 异常凭证`
     - Abnormal vouchers
     - 23a
   * - :guilabel:`进项税转出 - 其他情形`
     - Other circumstances
     - 23b

.. _localizations/china/contacts:

Contacts
========

To configure contact information, open the :doc:`Contacts <../../essentials/contacts>` app, search
for the contact, and access its form. Then, configure the following fields:

- :guilabel:`Name`
- :guilabel:`Address`, including the :guilabel:`City`, :guilabel:`State`, :guilabel:`Zip Code`,
  and :guilabel:`Country`.

  - In the :guilabel:`Street` field, enter the street name, number, and any additional address
    information.

- :guilabel:`Tax ID`: Tax identification number (Unified social credit code)
- :guilabel:`Phone`
- :guilabel:`Email`

.. _localizations/china/accounting:

Accounting
==========

.. _localizations/china/accounting/tax_report:

Tax report
----------

The following tax report is available in the Chinese localization:

- :guilabel:`VAT Return (General Taxpayer) (CN)`

  This report includes four components:

  - :guilabel:`Main Form`
  - :guilabel:`Schedule 1 - Sales Details`
  - :guilabel:`Schedule 2 - Input Tax Details`
  - :guilabel:`Surtaxes and Surcharges Schedule`

To access the report, go to :menuselection:`Accounting --> Reporting --> Tax Report`.

.. note::
   The report is automatically filled in from the taxes and tax grids applied to transactions, and
   the total lines are calculated. Amounts that cannot be computed must be entered manually by
   clicking the :icon:`fa-pencil` :guilabel:`(pencil)` icon next to the amount.

.. _localizations/china/vat_differential_taxation:

VAT differential taxation
-------------------------

**VAT differential taxation** allows taxpayers to calculate VAT on the balance of the sales
amount after deducting specific amounts paid to third parties, instead of on the full sales
amount. This method applies to businesses where part of the amount received from customers is
passed on to other parties, such as travel agencies, labor dispatch, and agency services.

Deductible amounts are recorded as balance deductions on the customer invoice. An :ref:`output VAT
offset entry <localizations/china/vat_differential_taxation/workflow/output_vat_offset_entry>` is
then automatically posted to reduce the output VAT accordingly. The fapiao can be issued either for
the full amount or for the net amount after deduction.

.. _localizations/china/vat_differential_taxation/configuration:

Configuration
~~~~~~~~~~~~~

To configure :guilabel:`VAT Differential Taxation`, follow these steps:

#. Go to :menuselection:`Accounting --> Configuration --> Settings`.
#. In the :guilabel:`Taxes` section, activate :guilabel:`VAT Differential Taxation`.
#. Update the following fields if needed:

   - :guilabel:`Journal`: Journal in which output VAT offset entries are posted. By default,
     :guilabel:`Miscellaneous Operations` is selected.
   - :guilabel:`Offset Account`: Account used to record the output VAT offset. By default,
     :guilabel:`2221.01.03 Tax Payable - VAT (Offset of Output VAT)` is selected.

#. Click :guilabel:`Save`.

.. _localizations/china/vat_differential_taxation/workflow:

Workflow
~~~~~~~~

.. _localizations/china/vat_differential_taxation/workflow/vat_differential_fapiao:

VAT differential fapiao creation
********************************

#. Go to :menuselection:`Accounting --> Customers --> Invoices` and :ref:`create a new invoice
   <accounting/invoice/creation>`.
#. In the :guilabel:`VAT Differential Taxation Method` field, select :guilabel:`Full Amount Fapiao`
   or :guilabel:`Net Amount Fapiao`.
#. In the :guilabel:`Invoice Lines` tab, add the products.
#. On the relevant invoice line, click :icon:`fa-pencil-square-o` :guilabel:`Deduction` to fill in
   the balance deduction details. These details correspond to the deduction information entered in
   the Electronic Tax Bureau when issuing a net-amount fapiao.
#. In the :guilabel:`Balance Deductions Information` tab, click :guilabel:`Add a line` for each
   voucher that supports a deduction, fill in the following fields, then save:

   - :guilabel:`Voucher Type`: Type of voucher supporting the deduction.
   - :guilabel:`Voucher Total`: Total amount stated on the voucher.
   - :guilabel:`Deduct Amount`: Amount of the voucher deducted from the sales amount of this
     invoice line.
   - :guilabel:`E-Fapiao Number`: The e-fapiao number, if the voucher is an e-fapiao.
   - :guilabel:`Receipt Code`: Code of the voucher, if applicable.
   - :guilabel:`Voucher Number`: The voucher number, if the voucher is not an e-fapiao.
   - :guilabel:`Issue Date`: Date on which the voucher was issued.
   - :guilabel:`Expense Account`: Account in which the cost related to the deduction is recorded.

   .. image:: china/balance-deduction.png
      :alt: Balance Deduction

#. Confirm the invoice.

.. _localizations/china/vat_differential_taxation/workflow/output_vat_offset_entry:

Output VAT offset entry
***********************

Depending on the selected :guilabel:`VAT Differential Taxation Method`, the journal entries are
handled automatically in two different ways:

- :guilabel:`Net Amount Fapiao`: Upon confirmation, an output VAT offset entry is automatically
  posted.

  .. note::
     A :guilabel:`Net Amount Fapiao` invoice cannot be confirmed if the
     :guilabel:`Balance Deduction` details are missing.

- :guilabel:`Full Amount Fapiao`: Filling in the :guilabel:`Balance Deduction` details prior to
  invoice confirmation is optional. The timing of the output VAT offset entry depends on when these
  details are provided:

  - **Before confirmation:** The entry is automatically posted upon invoice confirmation.
  - **After confirmation:** If left blank initially, the entry is automatically posted upon saving
    the balance deduction details later.

If the tax rate of an invoice line is 0%, no output VAT offset entry is posted.

Upon confirmation of a credit note, the output VAT offset entry is automatically reversed.

.. note::
   To ensure data alignment between the balance deduction details and the posted journal entries,
   automatically posted output VAT offset entries cannot be reset to draft or reversed directly
   from :menuselection:`Accounting --> Accounting --> Journal Entries`.

   To correct an entry, open the related invoice and reset the entire invoice to draft (for
   :guilabel:`Net Amount Fapiao`), or reset the specific balance deduction details to draft (for
   :guilabel:`Full Amount Fapiao`).

.. _localizations/china/vat_differential_taxation/workflow/output_vat_offset_entry/calculation_logic:

Calculation logic
^^^^^^^^^^^^^^^^^

The output VAT offset is calculated based on the tax-exclusive amount of the deduction.

The formula applied per invoice line is:

**Output VAT offset** = [Total deduction amount / (1 + Tax rate)] × Tax rate

.. example::
   If the total deduction amount is 113.00 and the tax rate is 13%, the output VAT offset is
   calculated as:

   [113.00 / (1 + 0.13)] × 0.13 = **13.00**

.. _localizations/china/vat_differential_taxation/workflow/balance_deductions_ledger:

Balance deductions ledger
*************************

To cross-check the data between the balance deduction details and the posted output VAT offset
journal entries, go to :menuselection:`Accounting --> Reporting --> Balance Deductions`.

.. note::
   Columns 12 to 14 of :guilabel:`Schedule 1 - Sales Details` in the :ref:`tax report
   <localizations/china/accounting/tax_report>` are not filled in automatically. Use the balance
   deduction data in this report to enter the amounts manually, or to cross-check them with the
   Electronic Tax Bureau.

.. _localizations/china/accounting_voucher:

Accounting voucher
------------------

An **accounting voucher** is a document that records the details of a journal entry, used as a
bookkeeping record in China.

Accounting vouchers are available to download in PDF format from any of the following locations:

- :menuselection:`Accounting --> Customers --> Invoices`
- :menuselection:`Accounting --> Vendors --> Bills`
- :menuselection:`Accounting --> Accounting --> Journal Entries`

To print the voucher of a single record:

#. Open the invoice, bill, or journal entry.
#. Click the :icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)` icon next to the record's name.
#. Select :menuselection:`Print --> Voucher`.

To print the vouchers of multiple records in batch:

#. In the list view, select the relevant records.
#. Click :icon:`fa-print` :guilabel:`Print`.
#. Select :guilabel:`Voucher`.
