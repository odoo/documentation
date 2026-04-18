======
Taiwan
======

.. _localizations/taiwan/modules:

Modules
=======

The following modules related to Taiwan localization are available:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Taiwan - Accounting`
     - `l10n_tw`
     - This is the base module to manage the accounting chart for Taiwan.
   * - :guilabel:`Taiwan - E-invoicing`
     - `l10n_tw_edi_ecpay`
     - This module allows the user to send their invoices to the Ecpay system.
   * - :guilabel:`Taiwan - E-invoicing Ecommerce`
     - `l10n_tw_edi_ecpay_website_sale`
     - This module allows the user to input Ecpay information in ecommerce for sending their invoices to the Ecpay system.
   * - :guilabel:`Taiwan - Accounting Reports`
     - `l10n_tw_reports`
     - This module includes the accounting reports for Taiwan.

.. note::
   In some cases, such as when upgrading to a version with additional modules, modules may not be
   installed automatically. Any missing modules can be manually :ref:`installed <general/install>`.

.. _localizations/taiwan/loc-review:

Localization overview
=====================

The Taiwanese localization package ensures compliance with Taiwanese fiscal and accounting
regulations. It includes tools for managing taxes, fiscal positions, reporting, and a predefined
chart of accounts tailored to Taiwan's standards.

The Taiwanese localization package provides the following key features to ensure compliance with
local fiscal and accounting regulations:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure tailored to Taiwanese
  accounting standards.
- :ref:`Taxes <localizations/taiwan/taxes>`: pre-configured tax rates.
- :doc:`Reporting <../accounting/reporting>`
- :ref:`E-invoicing (ECPay) <localizations/taiwan/ecpay-integration>`: integration for electronic
  invoicing in line with Taiwanese government requirements.

.. _localizations/taiwan/taxes:

Taxes
-----

The standard tax rate in Taiwan is 5%, though special tax rates apply to specific industries. To
configure special taxes for the :abbr:`GBRT (Gross Business Receipts Tax)`, go to
:menuselection:`Accounting --> Configuration --> Taxes`, click :guilabel:`New`, and configure the
following:

#. Fill in the :ref:`standard fields <taxes/configuration/back-end>` and
   :doc:`tax computation <../accounting/taxes/tax_computation>`.
#. In the :guilabel:`Ecpay Tax Type` field, select :guilabel:`Taxable (special tax rate)`.
#. In the new :guilabel:`Ecpay Special Tax Type` field that appears, select the applicable
   industry.

.. example::
   If :guilabel:`Saloons and tea rooms, coffee shops and bars offering companionship services:`
   :guilabel:`Tax rate is 25%` is selected, enter `25` in the :guilabel:`Amount` field.
.. _localizations/taiwan/contacts:

Contacts
========

To manage the distinction between :abbr:`B2C (Business-to-Consumer)` and
:abbr:`B2B (Business-to-Business)` invoices, configure the following fields in their
:doc:`contact <../../essentials/contacts>` form:

- :guilabel:`Individual` (B2C): Select the :doc:`contact <../../essentials/contacts>` type and
  provide the :guilabel:`Email` or :guilabel:`Phone` number.
- :guilabel:`Company` (B2B): Select the :doc:`contact <../../essentials/contacts>` type, enter the
  :guilabel:`Tax ID`, and provide the :guilabel:`Email` or :guilabel:`Phone` number.

.. note::
   - Invoices sent to individuals not linked to a :guilabel:`Company` contact are treated as a
     **B2C invoice**.
   - Invoices sent to individuals belonging to a :guilabel:`Company` contact are treated as a **B2B
     invoice** (to the parent Company).

.. _localizations/taiwan/accounting:

Accounting
==========

.. _localizations/taiwan/ecpay-integration:

ECPay integration
-----------------

.. note::
   Make sure to :ref:`install <general/install>` the :guilabel:`Taiwan - E-invoicing`
   (`l10n_tw_edi_ecpay`) module.

Odoo supports integration with ECPay to submit generated invoices directly to their system.

.. _localizations/taiwan/ecpay-setup:

Set-up
~~~~~~

To configure the integration, valid credentials must be retrieved from the
`ECPay vendor backend <https://vendor.ecpay.com.tw/User/LogOn_Step1>`_. Go to
:menuselection:`System Settings --> System Integration Settings --> Integration Information` to get
the required information:

- :guilabel:`MerchantID`
- :guilabel:`Hashkey`
- :guilabel:`HashIV`

.. _localizations/taiwan/odoo-configuration:

Configuration in Odoo
*********************

Go to :menuselection:`Accounting --> Configuration --> Settings`, scroll down to the
:guilabel:`Taiwan Electronic Invoicing` section, and fill in the :guilabel:`MerchantID`,
:guilabel:`HashKey`, and :guilabel:`HashIV` fields, retrieved from the
:ref:`ECPay vendor backend <localizations/taiwan/ecpay-setup>`.

.. note::
   For testing purposes, do not use real credentials. Instead, enable the :guilabel:`Staging mode`
   option and use the `Staging information <https://developers.ecpay.com.tw/?p=24174>`_ provided by
   ECPay.

.. _localizations/taiwan/workflow:

Workflow
~~~~~~~~

.. _localizations/taiwan/send-invoices:

Send invoices to ECPay
**********************

.. _localizations/taiwan/B2C-send-invoices:

B2C invoice (individual)
^^^^^^^^^^^^^^^^^^^^^^^^

To send a B2C invoice, follow these steps:

#. Navigate to :menuselection:`Accounting --> Customers --> Invoices` and :ref:`create a new
   invoice <accounting/invoice/creation>`.
#. Select a :ref:`customer <localizations/taiwan/contacts>` of the type :guilabel:`Individual`.
#. In the :guilabel:`Ecpay` tab, configure delivery options:

   - :guilabel:`Get Printed Version`: Check this to allow the customer to receive a printable ECPay
     invoice.
   - :guilabel:`Love Code`: Enter the Love Code if the customer wishes to donate the invoice to a
     charity.
   - :guilabel:`Carrier Type`: Select the carrier type if the customer uses a cloud-based carrier,
     and enter the :guilabel:`Carrier Number` (and :guilabel:`Carrier Number 2`) if required.

#. :guilabel:`Confirm` the invoice, and click :guilabel:`Send`. Then, ensure the
   :guilabel:`Send to Ecpay` checkbox is selected, and click :guilabel:`Send`.
#. The :guilabel:`Invoice Status`, :guilabel:`Ecpay Invoice Number`, and :guilabel:`Creation Date`
   in the :guilabel:`Ecpay` tab will update automatically upon successful submission.

.. note::
   To print or download the ECpay invoice, follow these steps:

   #. Make sure the :guilabel:`Get Printed Version` option is checked in the :guilabel:`Ecpay` tab.
   #. Click the :icon:`fa-cog` (gear) icon and select :guilabel:`Print Ecpay invoice`.
   #. In the :guilabel:`Print Ecpay Invoice` window, select a :guilabel:`Print Format (B2C)` and
      click :guilabel:`Print Invoice`.

.. _localizations/taiwan/B2B-send-invoices:

B2B invoice (company)
^^^^^^^^^^^^^^^^^^^^^

To send a B2B invoice, follow these steps:

#. Navigate to :menuselection:`Accounting --> Customers --> Invoices` and :ref:`create a new
   invoice <accounting/invoice/creation>`.
#. Select a :ref:`customer <localizations/taiwan/contacts>` who is either a :guilabel:`Company` or
   an :guilabel:`Individual` belonging to a :guilabel:`Company`.
#. :guilabel:`Confirm` the invoice, and click :guilabel:`Send`. Then, ensure the
   :guilabel:`Send to Ecpay` checkbox is selected, and click :guilabel:`Send`.
#. The :guilabel:`Invoice Status`, :guilabel:`Ecpay Invoice Number`, and :guilabel:`Creation Date`
   in the :guilabel:`Ecpay` tab will update automatically upon successful submission.

.. important::
   Ensure the :guilabel:`Tax ID` field  of the :ref:`customer <localizations/taiwan/contacts>` is
   filled in with the Tax Identification Number.

.. note::
   By default, B2B ECpay invoices are available to print or download. Please follow these steps:

   #. Click the :icon:`fa-cog` (gear) icon and select :guilabel:`Print Ecpay invoice`.
   #. In the :guilabel:`Print Ecpay Invoice` window, select a :guilabel:`Print Format (B2B)` and
      click :guilabel:`Print Invoice`.

.. tip::
   Check the invoice's :guilabel:`Log Note` for ECPay submission details. Failed attempts display
   error messages, while successful submissions record the :guilabel:`Ecpay invoice number` and
   :guilabel:`Invoice status`.

.. _localizations/taiwan/invoice-cancellation:

Invoice Cancellation
********************

To cancel a submitted invoice:

#. Open the relevant invoice and click :guilabel:`Request Cancel`.
#. In the pop-up window, provide a cancellation :guilabel:`Reason`, then click
   :guilabel:`Cancel Invoice`.
#. The :guilabel:`Invoice Status` changes to :guilabel:`Invalid`, and the
   :guilabel:`Invalidate Reason` is filled in with the cancellation :guilabel:`Reason`.

   .. image:: taiwan/ECPay-invoice-cancellation.png
       :alt: ECPay invoice cancellation

.. _localizations/taiwan/send-credit-notes:

Send credit notes to ECPay
**************************

Before sending a credit note, the original invoice must be successfully submitted to ECPay.

.. note::
   The credit note amount cannot exceed the original invoice amount.

.. _localizations/taiwan/B2C-credit-notes:

B2C Credit Notes
^^^^^^^^^^^^^^^^

To send a B2C credit note to ECPay, follow these steps:

#. Click :guilabel:`Credit Note` on the relevant invoice and enter the
   :guilabel:`Reason displayed on Credit Note`.
#. Select the :guilabel:`Agreement Type` and the :guilabel:`Allowance Notify Way`, and click
   :guilabel:`Reverse`.
#. Click :guilabel:`Confirm`, then :guilabel:`Send`, ensuring
   :guilabel:`Send to Ecpay (Issue Allowance)` is selected.

Then, The :guilabel:`Refund State` updates to :guilabel:`Agreed`
(for :guilabel:`Offline agreements`) or :guilabel:`To be agreed`
(for :guilabel:`Online agreements`). Additionally, the :guilabel:`Refund Invoice Number`,
:guilabel:`Refund invoice Agreement Type` and :guilabel:`Allowance Notify Way` updates accordingly
in the :guilabel:`Ecpay` tab.

.. _localizations/taiwan/B2B-credit-notes:

B2B credit notes
^^^^^^^^^^^^^^^^

To send a B2B credit note to ECPay, follow these steps:

#. Click :guilabel:`Credit Note` on the relevant invoice, enter the
   :guilabel:`Reason displayed on Credit Note`, then click :guilabel:`Reverse`.
#. Click :guilabel:`Confirm`, then :guilabel:`Send`, ensuring
   :guilabel:`Send to Ecpay (Issue Allowance)` is selected.

Then the :guilabel:`Refund Invoice Number` is updated automatically in the :guilabel:`Ecpay` tab.

.. _localizations/taiwan/ecommerce:

eCommerce
=========

.. _localizations/taiwan/ecommerce-setup:

Set-up
------

To enable direct invoice submission via eCommerce:

#. Go to :menuselection:`Website --> Configuration --> Settings`.
#. In the :guilabel:`Invoicing` section, enable :guilabel:`Automatic Invoice`.

This ensures invoices are generated and sent to ECPay automatically once the online payment is
confirmed.

.. _localizations/taiwan/ecommerce-checkout:

Checkout Process
----------------

- **B2C Customers**: During checkout, customers must indicate whether they want to receive a
  physical invoice using the :guilabel:`Request a paper copy` field

  - :guilabel:`No`: No copy is provided.
  - :guilabel:`Yes`: The invoice can be downloaded from the invoice view.

- **B2B Customers**: An :guilabel:`Invoicing Info` page appears after delivery confirmation.
  Customers can either select the :guilabel:`Donate` checkbox to donate the invoice, or choose an
  :guilabel:`Ecpay e-invoice carrier` from the following options, and provide the
  :guilabel:`Carrier Number` and :guilabel:`Carrier Number 2` where applicable.

  - :guilabel:`Member Account`
  - :guilabel:`Citizen Digital Certificate`
  - :guilabel:`Mobile Barcode`
  - :guilabel:`EasyCard`
  - :guilabel:`iPass`

  .. note::
   If no option has been selected, a :guilabel:`Print Ecpay invoice` can still be downloaded from
   the invoice view.
