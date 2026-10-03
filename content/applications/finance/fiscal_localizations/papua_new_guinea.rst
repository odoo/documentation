================
Papua New Guinea
================

.. |IRC| replace:: :abbr:`IRC (Internal Revenue Commission)`

.. _localizations/papua-new-guinea/modules:

Modules
=======

The following modules are installed automatically with the Papua New Guinea localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Papua New Guinea - Accounting`
     - `l10n_pg`
     - Base Papua New Guinea :ref:`fiscal localization package <fiscal_localizations/packages>`
       complete with the Papua New Guinea chart of accounts, taxes, and fiscal positions
   * - :guilabel:`Papua New Guinea - Accounting Reports`
     - `l10n_pg_reports`
     - Papua New Guinea-specific tax reports, including the GST return, the sales by province
       report, and the sales and supplier listings

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :ref:`installed
   <general/install>`.

.. _localizations/papua-new-guinea/overview:

Localization overview
=====================

The Papua New Guinea localization package ensures compliance with Papua New Guinea fiscal and
accounting regulations. It includes tools for managing taxes, fiscal positions, reporting, and a
predefined chart of accounts tailored to Papua New Guinea standards.

The Papua New Guinea localization package provides the following key features to ensure compliance
with local fiscal and accounting regulations:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure tailored to Papua New Guinea accounting standards
- :ref:`Taxes <localizations/papua-new-guinea/taxes>`: pre-configured tax rates, including goods and
  services tax (GST) and withholding taxes
- :doc:`../accounting/taxes/fiscal_positions`: automated tax mapping for domestic and foreign transactions
- :ref:`Reporting <localizations/papua-new-guinea/reporting>`: GST return (Form G1), sales by province,
  and sales and supplier listings

.. _localizations/papua-new-guinea/taxes:

Taxes
-----

:doc:`Taxes <../accounting/taxes>` are automatically created and configured when the Papua New
Guinea localization is installed. To review them, go to :menuselection:`Accounting --> Configuration
--> Taxes`.

.. warning::
   Do not delete the default taxes, as they are linked to the lines of the :ref:`GST return
   <localizations/papua-new-guinea/gst-return>`. If a new tax is required, map it to an existing
   **tax group**.

.. _localizations/papua-new-guinea/taxes-gst:

Goods and services tax (GST)
----------------------------

The standard **goods and services tax** (GST) rate in Papua New Guinea is 10%. The following GST
taxes are installed:

.. list-table::
   :header-rows: 1
   :widths: 20 20 60

   * - Tax
     - Used on
     - Description
   * - :guilabel:`10%`
     - Sales and purchases
     - Standard GST. On purchases, the GST paid is claimed as an input credit.
   * - :guilabel:`0% Zero Rated`
     - Sales
     - Zero-rated sales.
   * - :guilabel:`0% Exempt`
     - Sales
     - Exempt sales.
   * - :guilabel:`10% NCR`
     - Purchases
     - Non-creditable GST: GST paid on inputs used solely for exempt sales.
   * - :guilabel:`10% GST for Private Purpose`
     - Purchases
     - Non-creditable GST on purchases made for private purposes.
   * - :guilabel:`0% Deferred Import Liabilities`
     - Purchases
     - Postponed GST obligation on imported goods. See :ref:`Deferred import liabilities
       <localizations/papua-new-guinea/taxes-deferred-import>`.

.. _localizations/papua-new-guinea/taxes-wht:

Withholding taxes (WHT)
-----------------------

The following withholding taxes are installed for both sales and purchases. They are negative
taxes, which reduce the amount received or paid.

.. list-table::
   :header-rows: 1
   :widths: 25 15 60

   * - Tax
     - Rate
     - Description
   * - :guilabel:`15% IWT`
     - 15%
     - Withholding tax on interest
   * - :guilabel:`10% RWT`
     - 10%
     - Withholding tax on royalty
   * - :guilabel:`15% DWT`
     - 15%
     - Withholding tax on dividends
   * - :guilabel:`10% BIPWHT`
     - 10%
     - Withholding tax on business income payments

.. _localizations/papua-new-guinea/taxes-s65a:

GST Section 65A (S65A)
----------------------

The :guilabel:`10% GST S65A` tax is used when the customer is an authorized withholder, meaning the
customer withholds the GST and pays it to the |IRC|. A matching tax is installed for purchases.

Select the :guilabel:`10% GST S65A` tax on the invoice line. It is a group of taxes, and the
withheld part is recorded automatically.

.. _localizations/papua-new-guinea/taxes-deferred-import:

Deferred import liabilities
---------------------------

The :guilabel:`0% Deferred Import Liabilities` tax is used to postpone the GST obligations on
imported goods.

- Without deferred import liabilities, the GST must be paid when the goods arrive, and it is claimed
  later during the tax closing.
- With deferred import liabilities, the GST does not need to be paid when the goods arrive. As a
  result, it does not need to be claimed afterward either.

The tax is reported on line 7, :guilabel:`Deferred Import Liabilities`, of the :ref:`GST return
<localizations/papua-new-guinea/gst-return>`.

.. _localizations/papua-new-guinea/company-contacts:

Company and contacts
====================

Before using the Papua New Guinea localization, ensure the following information is correctly
configured in the company's contact record and in the contact record of each customer and vendor.

To configure the company, go to :menuselection:`Settings --> Companies` and click :guilabel:`Update
Info`. To configure a customer or a vendor, open the :doc:`Contacts <../../essentials/contacts>`
app and open the contact form.

- :guilabel:`Name` and :guilabel:`Address`: enter the street name and number in the
  :guilabel:`Street` field, and the :guilabel:`City`, :guilabel:`State`, :guilabel:`ZIP`, and
  :guilabel:`Country`. The :guilabel:`State` field lists the 22 provinces of Papua New Guinea, such
  as :guilabel:`National Capital District` and :guilabel:`Autonomous Region of Bougainville`.
- :guilabel:`TIN`: the :ref:`taxpayer identification number
  <localizations/papua-new-guinea/tin>`.
- :guilabel:`IPA`: the :ref:`Investment Promotion Authority number
  <localizations/papua-new-guinea/ipa>`.

.. note::
   The province of a customer is used to allocate the GST in the :ref:`Sales by province
   <localizations/papua-new-guinea/sales-by-province>` report. Make sure the :guilabel:`State` field
   is filled in on each customer.

.. image:: papua_new_guinea/contact-form.png
   :alt: Contact form with the TIN field and the plus button.

.. _localizations/papua-new-guinea/tin:

Taxpayer identification number (TIN)
------------------------------------

The **taxpayer identification number** (TIN) must have exactly 9 digits, for example `123456789`.
Letters, spaces, dashes, and other symbols are not accepted. If the TIN is not valid, a validation
error is displayed when saving the contact.

.. _localizations/papua-new-guinea/ipa:

Investment Promotion Authority (IPA) number
-------------------------------------------

In Papua New Guinea, the TIN alone cannot tell whether a contact is a company or an individual.
Every company is registered with the **Investment Promotion Authority** (IPA) instead. A contact
with an IPA number is automatically set as a company. A contact without one is set as an
individual.

To enter the IPA number, click the :icon:`fa-plus` :guilabel:`(plus)` icon next to the
:guilabel:`TIN` field and select :guilabel:`IPA`. The other options are :guilabel:`DUNS` and
:guilabel:`Company ID`.

.. _localizations/papua-new-guinea/reporting:

Reporting
=========

The :guilabel:`Papua New Guinea - Accounting Reports` (`l10n_pg_reports`) module provides the
following reports:

- the :ref:`GST return (Form G1) <localizations/papua-new-guinea/gst-return>`, which includes the
  :ref:`Sales by province <localizations/papua-new-guinea/sales-by-province>` report
- the :ref:`Sales and supplier listings <localizations/papua-new-guinea/listings>`

.. _localizations/papua-new-guinea/gst-return:

GST return (Form G1)
--------------------

## TO BE TEST AGAIN LATER ##
The **Form G1** is the GST return filed with the |IRC| under the Goods and Services Tax Act 2003.
It is a monthly return. It has two sections: the :guilabel:`GST Tax Return` and the
:guilabel:`Sales by Province`.

To prepare the return, follow these steps:

#. Go to the Accounting dashboard and click Accounting -> :guilabel:`Tax Returns`
#. Open the :guilabel:`GST Tax Return` of the period or create a new one.
#. Click validate and submit
#. Review the amounts in the following tabs: :guilabel:`Form G1 Lines`, :guilabel:`Sales by
   Province`, and :guilabel:`Adjustments`.
#. Click :guilabel:`Export Worksheet` to generate the worksheet of the return, which is displayed in
   the :guilabel:`Worksheet` tab.
#. After the return is filed with the |IRC|, click :guilabel:`Mark as Filed`.

To modify a return, click :guilabel:`Reset to Draft`.

.. image:: papua_new_guinea/gst-return.png
   :alt: GST return with the Export Worksheet button and the Worksheet tab.

.. _localizations/papua-new-guinea/gst-return-lines:

Form G1 lines
~~~~~~~~~~~~~

The return is divided into three blocks. The amounts come from the :guilabel:`Tax Grid` of the
taxes used on invoices and vendor bills.

**Block 1: calculation of output debits**

.. list-table::
   :header-rows: 1
   :widths: 10 55 35

   * - Line
     - Description
     - Calculation
   * - 1
     - Total sales
     - Sales
   * - 2
     - Less exempt sales
     - Sales with the :guilabel:`0% Exempt` tax
   * - 3
     - Zero-rated sales
     - Sales with the :guilabel:`0% Zero Rated` tax
   * - 4
     - Add lines 2 and 3
     - Line 2 + line 3
   * - 5
     - Total GST taxable sales
     - Line 1 - line 4
   * - 6
     - Output debits
     - Line 5 divided by eleven
   * - 7
     - Deferred import liabilities
     - Purchases with the :guilabel:`0% Deferred Import Liabilities` tax

**Block 2: calculation of input credits**

.. list-table::
   :header-rows: 1
   :widths: 10 55 35

   * - Line
     - Description
     - Calculation
   * - 8
     - GST paid on business inputs bought during the tax period
     - GST on purchases
   * - 9
     - Less GST paid for exempt sales
     - :ref:`Note 5 <localizations/papua-new-guinea/gst-return-note-5>`
   * - 10
     - GST paid for private purposes
     - Purchases with the :guilabel:`10% GST for Private Purpose` tax
   * - 11
     - Add lines 9 and 10
     - Line 9 + line 10
   * - 12
     - Input credits
     - Line 8 - line 11

**Block 3: summary - GST payable or refundable**

.. list-table::
   :header-rows: 1
   :widths: 10 55 35

   * - Line
     - Description
     - Calculation
   * - 13
     - Output debits
     - Line 6 + line 7
   * - 14
     - Deduct input credits
     - Line 12
   * - 15
     - GST payable or refundable
     - Line 13 - line 14
   * - 16
     - GST Section 65A credit allowable, if applicable
     - GST withheld under Section 65A

.. _localizations/papua-new-guinea/gst-return-note-5:

Note 5: GST paid for exempt sales
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

GST cannot be claimed back on expenses used to make exempt sales. For expenses shared between
taxable and exempt sales, the |IRC| provides a calculation to determine how much of the input
credit is lost. The calculation is shown under line 9 of the return, and its result is transferred
to line 9.

The calculation has the following lines:

#. Enter the GST paid on inputs used for both exempt and taxable sales. This amount is entered
   directly under the :guilabel:`Note 5` lines.
#. Divide the amount of line 1 by the total sales (line 1 of the return).
#. Multiply the amount of line 2 by the exempt sales (line 2 of the return).
#. Add the GST paid on inputs used solely for exempt sales.
#. Add lines 3 and 4. The result is the GST paid for exempt sales.

.. example::
   A business has K100,000 in total sales this month. K60,000 are standard taxable sales, and
   K40,000 are exempt sales, which means 40% of the business is exempt. The business paid K1,000
   of GST on general office electricity and internet, which are used by both parts of the
   business, and K200 of GST on supplies bought only for the exempt sales.

   #. The GST paid on inputs used for both sales is K1,000.
   #. K1,000 divided by the total sales of K100,000 is 0.01.
   #. 0.01 multiplied by the exempt sales of K40,000 is K400. Since 40% of the revenue is exempt,
      40% of the GST paid on the shared expenses is lost.
   #. The GST paid on inputs used solely for exempt sales is K200.
   #. K400 + K200 = K600.

   The GST paid for exempt sales is K600. This amount is transferred to line 9 of the return, and it
   is deducted from the input credits.

.. _localizations/papua-new-guinea/sales-by-province:

Sales by province
~~~~~~~~~~~~~~~~~

The :guilabel:`Sales by Province` section shows the GST taxable sales and the GST for each of the 22
provinces of Papua New Guinea. The province is taken from the :guilabel:`State` field of the
customer. Only the sales with the 10% GST are included.

- The taxable sales of a province are the total sales, minus the exempt sales and the zero-rated
  sales, of the customers in that province.
- The GST of a province is allocated proportionally:

  .. code-block:: text

     GST of the province =
         taxable sales of the province x GST payable (line 15) / GST taxable sales (line 5)

The totals match line 5 (total GST taxable sales) and line 15 (GST payable) of the return.

.. example::
   The total GST taxable sales (line 5) are K100,000, and the GST payable (line 15) is K4,000.

   - Province A has taxable sales of K70,000. Its GST is 70,000 x 4,000 / 100,000 = K2,800.
   - Province B has taxable sales of K30,000. Its GST is 30,000 x 4,000 / 100,000 = K1,200.

.. image:: papua_new_guinea/sales-by-province.png
   :alt: Sales by Province tab of the GST return.

.. _localizations/papua-new-guinea/listings:

Sales and supplier listings
---------------------------

The :guilabel:`Sales and Supplies listings` report has two sections: the sales listing and the
supplier listing. The listings include a detail description of each transaction, which is required
for tax invoices under Section 42 of the Goods and Services Tax Act 2003. Both listings show the
totals of the amounts.

.. _localizations/papua-new-guinea/detail-description:

Detail description
~~~~~~~~~~~~~~~~~~

To fill in the description of the sale or the purchase, enter it in the :guilabel:`Detail
Description` field of the invoice or the vendor bill. For example, `30-day dry hire of 20-ton
excavator`.

The :guilabel:`Detail Description` field is not displayed on journal entries.

.. image:: papua_new_guinea/detail-description.png
   :alt: Detail Description field on an invoice.

.. _localizations/papua-new-guinea/sales-listing:

Sales listing
~~~~~~~~~~~~~

The sales listing includes the transactions of the sales journals, with the following columns:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Column
     - Description
   * - :guilabel:`Transaction Date`
     - The invoice date.
   * - :guilabel:`Name of Client`
     - The name of the customer.
   * - :guilabel:`TIN Number`
     - The TIN of the customer.
   * - :guilabel:`Sales Tax Invoice Number`
     - The number of the invoice.
   * - :guilabel:`Total Net Sales (excluding GST)`
     - The amount before tax.
   * - :guilabel:`GST (10) Charged`
     - The tax amount.
   * - :guilabel:`Total Sales (Gross)`
     - The sum of the two previous amounts, which is the total amount of the invoice.
   * - :guilabel:`Detail Description of Sales / Services`
     - The :ref:`detail description <localizations/papua-new-guinea/detail-description>` of the
       invoice.

.. image:: papua_new_guinea/sales-listing.png
   :alt: Sales listing report.

.. _localizations/papua-new-guinea/supplier-listing:

Supplier listing
~~~~~~~~~~~~~~~~

The supplier listing includes the transactions of the purchase journals, with the following
columns:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Column
     - Description
   * - :guilabel:`Transaction Date`
     - The invoice date of the vendor bill.
   * - :guilabel:`Suppliers Name`
     - The name of the vendor.
   * - :guilabel:`TIN Number`
     - The TIN of the vendor.
   * - :guilabel:`Payment/Documents-Reference`
     - The type of document, such as a tax invoice or a payment receipt. It is a text field filled
       in by the user in the :guilabel:`Documents Reference` field of the vendor bill.
   * - :guilabel:`Payment/Documents-Number`
     - The reference of the vendor bill.
   * - :guilabel:`Taxable Amount`
     - The amount before tax.
   * - :guilabel:`GST Amount (10%)`
     - The tax amount.
   * - :guilabel:`Total Amount`
     - The sum of the two previous amounts, which is the total amount of the vendor bill.
   * - :guilabel:`Detail Description of Payment`
     - The :ref:`detail description <localizations/papua-new-guinea/detail-description>` of the
       vendor bill.

.. image:: papua_new_guinea/supplier-listing.png
   :alt: Supplier listing report.