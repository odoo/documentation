=====
India
=====

.. _india/installation:

Installation
============

:ref:`Install <general/install>` the following modules to get all the features of the Indian
localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Indian - Accounting`
     - `l10n_in`
     - Default :ref:`fiscal localization package <fiscal_localizations/packages>`
   * - :guilabel:`Indian E-invoicing`
     - `l10n_in_edi`
     - :ref:`Indian e-invoicing integration <india/e-invoicing>`
   * - :guilabel:`Indian E-waybill`
     - `l10n_in_ewaybill`
     - :ref:`Indian E-way bill integration <india/e-waybill>`
   * - :guilabel:`Indian E-waybill Stock`
     - `l10n_in_ewaybill_stock`
     - :ref:`E-waybill creation from the Inventory app <india/e-waybill-stock>`
   * - :guilabel:`Indian - Accounting Reports`
     - `l10n_in_reports`
     - Adds the :ref:`Indian GST Return filing <india/gstr>` and the :ref:`Indian
       Tax reports <india/gstr_reports>`.

.. _india/company:

Company
-------

To configure your company information, open the **Settings** app, scroll down to the
:guilabel:`Companies` section, click :guilabel:`Update Info`, and configure the following:

- :guilabel:`Company Name`
- :guilabel:`Address`, including the :guilabel:`Street`, :guilabel:`City`, :guilabel:`State`,
  :guilabel:`ZIP`, and :guilabel:`Country`
- :guilabel:`PAN`: essential for determining the type of taxpayer.
- :guilabel:`GSTIN`: necessary for generating e-Invoices, E-waybills and filing GST returns.

.. _india/indian-configuration:

Indian Configuration
====================

The **Indian Integration** section provides essential taxation and compliance features to simplify
financial operations. To enable these features, navigate to :menuselection:`Accounting -->
Configuration --> Settings` and scroll down to the :guilabel:`Indian Integration` section.

.. image:: india/indian-integration.png
   :alt: Indian Integration Section

- :guilabel:`TDS/TCS`: Activate this to enable :ref:`TDS/TCS <india/tds-tcs-threshold>`
  functionality along with account-based TDS/TCS section suggestions.
- :guilabel:`Registered Under GST`: Select this if your business is registered under GST to access
  GST-related features, including e-invoice, e-waybill, GST e-filing, fetch vendor e-invoiced
  document and check GST number status.
- :guilabel:`E-Invoicing`: Connects to the :ref:`e-invoice <india/e-invoicing>` :abbr:`NIC
  (National Informatics Center)` portal to submit invoices.
- :guilabel:`E-Way bill`: Connects to the :ref:`e-waybill <india/e-waybill>` :abbr:`NIC
  (National Informatics Center)` portal to generate e-waybills.
- :guilabel:`GST E-Filing & Matching`: Enable the feature to facilitate :ref:`GST return filing
  <india/gstr>` and connect with the GST portal to submit GSTR-1 and retrieve GSTR-2B.
- :guilabel:`Check GST Number Status`: Enable to verify :ref:`GSTIN Status <india/gstin_status>`.
- :guilabel:`Fetch Vendor E-Invoiced Document`: Helps in creating draft vendor bills using
  e-invoice data submitted by vendors on GST portal.

.. important::
   Check the :guilabel:`Production Environment` checkbox to start using Indian services in the
   production environment. If you want to use the testing environment then keep the checkbox
   unchecked.

.. _india/e-invoicing:

e-Invoice system
================

Odoo is compliant with the **Indian Goods and Services Tax (GST) e-Invoice system** requirements.

Setup
-----

.. _india/e-invoicing-api:

NIC e-Invoice registration
~~~~~~~~~~~~~~~~~~~~~~~~~~

You must register on the :abbr:`NIC (National Informatics Centre)` e-Invoice portal to get your
**API credentials**. You need these credentials to :ref:`configure your Odoo Accounting app
<india/e-invoicing-configuration>`.

#. Log in to the `NIC e-Invoice portal <https://einvoice1.gst.gov.in/>`_ by clicking
   :guilabel:`Login` and entering your :guilabel:`Username` and :guilabel:`Password`;

   .. note::
      If you are already registered on the NIC portal, you can use the same login credentials.

   .. image:: india/e-invoice-system-login.png
      :alt: Register Odoo ERP system on e-invoice web portal

#. From the dashboard, go to :menuselection:`API Registration --> User Credentials --> Create API
   User`;
#. After that, you should receive an :abbr:`OTP (one-time password)` code on your registered mobile
   number. Enter the OTP code and click :guilabel:`Verify OTP`;
#. Select :guilabel:`Through GSP` for the API interface, set :guilabel:`Tera Software Limited` as
   GSP, and type in a :guilabel:`Username` and :guilabel:`Password` for your API. Once it is done,
   click :guilabel:`Submit`.

   .. image:: india/submit-api-registration-details.png
      :alt: Submit API specific Username and Password

.. _india/e-invoicing-configuration:

Configuration in Odoo
~~~~~~~~~~~~~~~~~~~~~

To enable the e-Invoice service in Odoo, :ref:`activate <india/indian-configuration>` the
:guilabel:`E-Invoicing` feature and enter the :guilabel:`Username` and :guilabel:`Password`
previously set for the API.

.. _india/e-invoicing-workflow:

Workflow
--------

.. _india/generate-e-invoice:

Generate e-Invoice
~~~~~~~~~~~~~~~~~~

Once an invoice is confirmed, click the :guilabel:`Send` button to open the wizard. Select
:guilabel:`E-Invoicing`, then click the :guilabel:`Generate` button. Odoo will upload the
JSON-signed file of the invoice to the NIC e-Invoice portal.

.. image:: india/generate-e-invoice.png
   :alt: Generate e-Invoice

.. note::
   - You can find the JSON-signed file and check the e-Invoicing status in the chatter.

.. _india/invoice-pdf-report:

Invoice PDF report
~~~~~~~~~~~~~~~~~~

Once an invoice is validated and submitted, the invoice PDF report can be printed. The report
includes the :abbr:`IRN (Invoice Reference Number)`, :guilabel:`Acknowledgement` (number and date)
and QR code. These certify that the invoice is a valid fiscal document.

.. image:: india/invoice-report.png
   :alt: IRN and QR code

.. _india/edi-cancellation:

e-Invoice cancellation
~~~~~~~~~~~~~~~~~~~~~~

To cancel an e-Invoice, click the :guilabel:`Request Cancel` button on the related invoice. In the
:guilabel:`Cancel E-Invoice` window, fill out the :guilabel:`Cancel Reason` and :guilabel:`Cancel
Remarks`.

.. note::
   - You can find the e-Invoicing status in the chatter.

.. _india/e-invoice-negative-lines:

Management of negative lines in e-Invoices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Negative lines are typically used to represent discounts or adjustments associated with specific
products or global discounts. The government portal prohibits the submission of data with negative
lines, which means they need to be converted based on the HSN code and GST rate. This is done
automatically by Odoo.

.. example::

   Consider the following example:

   +---------------------------------------------------------------------------------------------------+
   |                                     **Product Details**                                           |
   +=======================+==============+==================+==============+==============+===========+
   | **Product Name**      | **HSN Code** | **Tax Excluded** | **Quantity** | **GST Rate** | **Total** |
   +-----------------------+--------------+------------------+--------------+--------------+-----------+
   | Product A             |  123456      |  1,000           |  1           |  18%         |  1,180    |
   +-----------------------+--------------+------------------+--------------+--------------+-----------+
   | Product B             |  239345      |  1,500           |  2           |  5%          |  3,150    |
   +-----------------------+--------------+------------------+--------------+--------------+-----------+
   | Discount on Product A |  123456      |  -100            |  1           |  18%         |  -118     |
   +-----------------------+--------------+------------------+--------------+--------------+-----------+

   Here's the transformed representation:

   +-------------------------------------------------------------------------------------------------------------+
   |                                         **Product Details**                                                 |
   +==================+==============+==================+==============+==============+==============+===========+
   | **Product Name** | **HSN Code** | **Tax Excluded** | **Quantity** | **Discount** | **GST Rate** | **Total** |
   +------------------+--------------+------------------+--------------+--------------+--------------+-----------+
   | Product A        |  123456      |  1,000           |  1           |  100         |  18%         |  1,062    |
   +------------------+--------------+------------------+--------------+--------------+--------------+-----------+
   | Product B        |  239345      |  1,500           |  2           |  0           |  5%          |  3,150    |
   +------------------+--------------+------------------+--------------+--------------+--------------+-----------+

   In this conversion, negative lines have been transformed into positive discounts, maintaining
   accurate calculations based on the HSN Code and GST rate. This ensures a more straightforward and
   standardized representation in the E-invoice records.

.. _india/verify-e-invoice:

GST e-Invoice verification
~~~~~~~~~~~~~~~~~~~~~~~~~~

After submitting an e-Invoice, you can verify if the invoice is signed from the GST e-Invoice system
website itself.

#. Download the JSON file from the attached files. It can be found in the chatter of the related
   invoice;
#. Open the `NIC e-Invoice portal <https://einvoice1.gst.gov.in/>`_ and go to
   :menuselection:`Search --> Verify Signed Invoice`;
#. Select the JSON file and submit it;

   .. image:: india/verify-invoice.png
      :alt: select the JSON file for verify invoice

   If the file is signed, a confirmation message is displayed.

   .. image:: india/signed-invoice.png
      :alt: verified e-invoice

.. _india/e-waybill:

E-Way bill
==========

.. _india/e-waybill-setup:

Setup
-----

Odoo is compliant with the **Indian Goods and Services Tax (GST) E-waybill system** requirements.

.. _india/e-waybill-api:

API registration on NIC E-Way bill
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You must register on the :abbr:`NIC (National Informatics Centre)` E-Way bill portal to create your
**API credentials**. You need these credentials to :ref:`configure your Odoo Accounting app
<india/e-waybill-configuration>`.

#. Log in to the `NIC E-Way bill portal <https://ewaybillgst.gov.in/>`_ by clicking
   :guilabel:`Login` and entering your :guilabel:`Username` and :guilabel:`Password`;
#. From your dashboard, go to :menuselection:`Registration --> For GSP`;
#. Click :guilabel:`Send OTP`. Once you have received the code on your registered mobile number,
   enter it and click :guilabel:`Verify OTP`;
#. Check if :guilabel:`Tera Software Limited` is already on the registered GSP/ERP list. If so, use
   the username and password used to log in to the NIC portal. Otherwise, follow the next steps;

   .. image:: india/e-waybill-gsp-list.png
      :alt: E-Way bill list of registered GSP/ERP

#. Select :guilabel:`Add/New`, select :guilabel:`Tera Software Limited` as your GSP Name, create a
   :guilabel:`Username` and a :guilabel:`Password` for your API, and click :guilabel:`Add`.

   .. image:: india/e-waybill-registration-details.png
      :alt: Submit GSP API registration details

.. _india/e-waybill-configuration:

Configuration in Odoo
~~~~~~~~~~~~~~~~~~~~~

To enable the E-Way bill service in Odoo, :ref:`activate <india/indian-configuration>` the
:guilabel:`E-Way bill` feature and enter the :guilabel:`Username` and :guilabel:`Password`.

.. _india/e-waybill-workflow:

Workflow
--------

.. _india/generate-e-waybill:

Generate E-Way bill
~~~~~~~~~~~~~~~~~~~

To generate an E-Way bill, confirm the customer invoice/vendor bill and click :guilabel:`Create
e-Waybill`. Enter the necessary details and click :guilabel:`Generate e-Waybill` to proceed.

.. note::
   - You can find the JSON-signed file in the attached files in the chatter.

Invoice PDF report
~~~~~~~~~~~~~~~~~~

You can print the invoice PDF report once you have submitted the E-Way bill. The report includes the
**E-Way bill number** and the **E-Way bill validity date**.

.. image:: india/e-waybill-invoice-report.png
   :alt: E-way bill acknowledgment number and date

.. _india/e-waybill-cancellation:

E-Way bill cancellation
~~~~~~~~~~~~~~~~~~~~~~~

To cancel an E-Way bill, click :guilabel:`e-Waybill` on the related invoice/bill, then
:guilabel:`Cancel e-Waybill`. In the :guilabel:`Cancel Ewaybill` window, fill out the
:guilabel:`Cancel Reason` and :guilabel:`Cancel Remarks`.

.. image:: india/e-waybill-cancellation.png
   :alt: Cancel reason and remarks

.. note::
   - Once you request to cancel the E-Way bill, Odoo automatically submits the JSON-signed file to
     the government portal. You can check the JSON file in the chatter.

.. _india/e-waybill-stock:

E-waybill creation from receipts and delivery orders
----------------------------------------------------

.. note::
   Make sure the **E-Way bill Stock** module is :ref:`installed <general/install>` and
   the :ref:`E-Way bill setup <india/e-waybill-setup>` is complete.

To create E-Way bills from :doc:`receipts and deliveries
</applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations>` in the Inventory
app, follow these steps:

#. Go to :menuselection:`Inventory --> Operations --> Deliveries` or :menuselection:`Inventory -->
   Operations --> Receipts` and select an existing delivery order/receipt or create a new one.

#. Click :guilabel:`Create E-waybill/Challan`.

   .. note::
      To create an E-way bill:

      - A delivery order must be in the :guilabel:`Done` state (i.e., validated)
      - A receipt must have the :guilabel:`Ready` or :guilabel:`Done` state.

#. Click :guilabel:`Generate e-Waybill` to validate the E-Way bill and send it to the NIC E-Way
   bill portal.

   .. tip::
      To use the E-Way bill as a challan for goods deliveries without sending it to the NIC
      E-Waybill portal, click :guilabel:`Use as Challan`.

To print the E-waybill or the challan, click the :icon:`fa-cog` :guilabel:`(gear)` icon and select
:icon:`fa-print` :guilabel:`Ewaybill / Delivery Challan`.

.. _india/gstin_status:

Indian Check GSTIN Status
=========================

The :guilabel:`Indian - Check GST Number Status` allows you to verify the status of a
:abbr:`GSTIN (Goods and Services Tax Identification Number)` directly from Odoo.

To verify the status of a contact's GST number, access the customer's/vendor's form and click
:guilabel:`Check GSTIN Status` next to the :guilabel:`GSTIN` field.

To verify the status of a GST number entered on an invoice/bill, access the invoice/bill and click
the :icon:`fa-refresh` (:guilabel:`refresh`) button next to the :guilabel:`GST Status` field.

.. image:: india/gstin-status-invoice.png
   :alt: Check GSTIN status of an invoice

A notification is displayed to confirm the status update and the GSTIN status and verification date
are logged in the contact's chatter.

.. _india/gstr:

Indian GST Return filing
========================

.. _india/gstr_api:

Enable API access
-----------------

To file GST Returns in Odoo, you must first enable API access on the GST portal.

#. Log into the `GST portal <https://services.gst.gov.in/services/login>`_ by entering your
   :guilabel:`Username` and :guilabel:`Password`, and go to :guilabel:`My Profile` on your **profile
   menu**;

   .. image:: india/gst-portal-my-profile.png
      :alt: Click On the My Profile from profile

#. Select :guilabel:`Manage API Access`, and click :guilabel:`Yes` to enable API access;

   .. image:: india/gst-portal-api-yes.png
      :alt: Click Yes

.. note::
   It is recommended to set the :guilabel:`Duration` to :guilabel:`30 days` to avoid the need for
   frequent token reauthentication.

#. Doing so enables a :guilabel:`Duration` drop-down menu. Select the :guilabel:`Duration` of your
   preference, and click :guilabel:`Confirm`.

.. _india/gstr_configuration:

Indian GST Service In Odoo
--------------------------

Once you have enabled the :ref:`API access <india/gstr_api>` on the GST portal, :ref:`activate
<india/indian-configuration>` the :guilabel:`GST E-Filing & Matching Feature` to start using GST
Service. Then, in the :guilabel:`Registered Under GST` section, fill in the required :guilabel:`GST
Username`.

   .. image:: india/gst-setup.png
      :alt: Please enter your GST portal Username as Username

.. _india/gstr_workflow:

File-in GST Return
------------------

When the :guilabel:`GST E-Filing & Matching Feature` is enabled, you can file your GST return.
To do so, go to :menuselection:`Accounting --> Reporting --> Tax Report`.
Select the relevant report (e.g., :guilabel:`GSTR-1`, :guilabel:`GSTR-2`) and click
:guilabel:`Returns`.

.. image:: india/gst-gstr-report-selection.png
   :alt: GST GSTR report selection view

This opens a wizard :guilabel:`Accounting Periods`, where the following parameters
must be defined:

- :guilabel:`Opening Date`: the date from which accounting is managed in Odoo.
- :guilabel:`Fiscal Year End`: the end date of the fiscal year (e.g., :guilabel:`31 March`).
- :guilabel:`GSTIN Periodicity`: the frequency of return filing (e.g., :guilabel:`Monthly`).

.. note::
   The tax return periodicity can be
   :doc:`configured <../accounting/reporting/tax_returns>` according to the company's needs.

.. _india/gstr-1:

Filing GSTR-1
~~~~~~~~~~~~~

#. Click :guilabel:`Review` to perform validation checks before submitting to the
   :guilabel:`GST portal`.

   .. image:: india/gst-gstr-1-review.png
      :alt: GSTR-1 Review

   .. note::
      The system performs basic validations to ensure compliance with GST portal requirements.
      Possible issues include:

      - **Incorrect Tax Application**: The tax type does not match the :guilabel:`Fiscal Position`
        (:guilabel:`CGST/SGST` used instead of :guilabel:`IGST` for interstate transactions, or
        vice versa).
      - **Missing HSN Code**: No HSN code defined for the product.
      - **Invalid HSN Code for Services**: HSN code for a service must start with "99".
      - **Non-compliant UQC**: The Unit Quantity Code (UQC) does not meet Indian GST standards.

      After clicking the :guilabel:`Review`, the system displays a notification where you can see
      validation checks by clicking :guilabel:`See checks`.

      .. image:: india/gst-gstr-1-validation-checks.png
         :alt: GSTR-1 Validation Checks


#. Click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon next to the :guilabel:`Submit` button
   to display additional options for GSTR-1.

   The dropdown includes the following actions:

   - :guilabel:`View Checks`: Opens a window listing all GST compliance checks, such as invalid HSN
     codes or incorrect tax mappings. Click on each item to view the related invoice or correction.
   - :guilabel:`Generate`: Downloads the GSTR-1 report as an :file:`.xlsx` file.
   - :guilabel:`Reset`: Clears the current state and reverts the return to the initial stage.
     This is useful if major corrections are required before submission.

   .. tip::
      Use these tools before submission to verify data accuracy and maintain GST compliance.

#. When selecting :guilabel:`View Checks`, a list of validation messages appears.
   Each line includes contextual buttons to help resolve or manage the issue.

   .. image:: india/gst-gstr-1-view-checks.png
      :alt: GSTR-1 validation checks

   The following actions are available for each check:

   - :icon:`fa-user-plus` :guilabel:`Approve`: Marks the validation check as acknowledged.
     This confirms that the discrepancy has been reviewed and accepted.
   - :icon:`fa-pencil-square-o` :guilabel:`Open form view`: Opens the related invoice, bill, or
     record in form view for immediate editing or review.
   - :icon:`fa-clock-o` :guilabel:`Schedule activity`: Schedules an activity on the related record
     to follow up or assign it for approval.

#. If the report passes validation, click :guilabel:`Submit` to send it to the GST portal.
   The status changes to :guilabel:`Sending`.

   .. image:: india/gst-gstr-1-sending.png
      :alt: GSTR-1 status: sending

#. After submission, the status changes to :guilabel:`Waiting for Status`.
   The progress bar updates, and the :guilabel:`Sent` step turns green.

   .. image:: india/gst-gstr-1-waiting-for-status.png
      :alt: GSTR-1 status: waiting for status

   .. note::
      You can also see the json and status in the chatter by clicking on the filing

#. The final status is either:
   - :guilabel:`Sent`: the report has been successfully uploaded and accepted by the GST portal.

     .. image:: india/gst-gstr-1-sent.png
        :alt: GSTR-1 status: sent

   - :guilabel:`Error in Invoice`: one or more invoices failed validation on the GST portal.

     .. image:: india/gst-gstr-1-error-in-invoice.png
        :alt: Error in invoice after GSTR-1 submission

     Review the chatter messages for detailed error descriptions. After corrections, click
     :guilabel:`Push to GSTN` to resubmit.

#. Click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon and select :guilabel:`Mark as filed`.
   The report status updates to :guilabel:`Filed`.

   .. image:: india/gst-gstr-1-filed.png
      :alt: GSTR-1 marked as filed

.. _india/gstr-2b:

Recieve GSTR-2B
---------------

Odoo allows users to retrieve and reconcile the **GSTR-2B report** directly from the **GST portal**.

To do so, go to :menuselection:`Accounting --> Reporting --> Tax Report`, select :guilabel:`GSTR-2B`
, and click :guilabel:`Reconcile` to open the GST reconciliation view.

#. Click :guilabel:`Get E-Invoice` to retrieve raw e-invoices uploaded by vendors.
   .. image:: india/gst-gstr-2b-get-e-invoice.png
      :alt: GSTR-2B Get E-Invoice

#. After fetching the e-invoices, click :guilabel:`Fetch GSTR-2B` to retrieve the GSTR-2B summary
   from the GSTN portal.

   - The status changes to :guilabel:`Waiting for Reception`, indicating Odoo is retrieving the
     report.

     .. image:: india/gst-gstr-2b-waiting-for-reception.png
        :alt: GSTR-2B status: Waiting for Reception

#. Once the data is received, the status changes to :guilabel:`Being Processed`.
   This indicates that Odoo is reconciling the GSTR-2B with both e-invoice data and
   the purchase bills.

   .. image:: india/gst-gstr-2b-being-processed.png
      :alt: GSTR-2B status: Being Processed

#. After processing, the status updates to one of the following:

   - :guilabel:`Matched`: All invoices in GSTR-2B match with e-invoice data and Odoo bills.

     .. image:: india/gst-gstr-2b-matched.png
        :alt: GSTR-2B status: Matched

   - :guilabel:`Partially Matched`: Some discrepancies exist between GSTR-2B, e-invoices.

     .. image:: india/gst-gstr-2b-partially-matched.png
        :alt: GSTR-2B status: Partially Matched

     Click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon and select
     :guilabel:`View Reconciled Bills` to review unmatched entries. Discrepancies may include:

     - Invoices missing in Odoo.
     - Invoices missing in the GSTR-2B report.
     - Differences in tax values or invoice references.

     .. image:: india/gst-gstr-2b-view-reconciled-bills.png
        :alt: GSTR-2B View Reconciled Bills

     After correcting the issues, click :guilabel:`Re-match` from the same menu to re-run
     the reconciliation process.

#. Once the reconciliation is complete and accurate, click :guilabel:`Mark Complete` to
   finalize the report. The progress bar updates to the final stage: :guilabel:`Completed`.

.. _india/gstr-3:

GSTR-3 report
~~~~~~~~~~~~~

The :ref:`GSTR-3 <india/gstr-3_report>` report is a monthly summary of **sales** and **purchases**.
This return is auto-generated by extracting information from **GSTR-1** and **GSTR-2**.

#. Users can compare the **GSTR-3** report with the **GSTR-3** report available on the
   **GST portal** to verify if they match by clicking :guilabel:`GSTR-3 Report`;

#. Once the **GSTR-3** report has been verified by the user and the tax amount on the **GST portal**
   has been paid. Once paid, the report can be **closed** by clicking :guilabel:`Closing Entry`;

   .. image:: india/gst-gstr-3-not_filed.png
      :alt: GSTR-3

#. In :guilabel:`Closing Entry`, add the tax amount paid on the **GST portal** using challan, and
   click :guilabel:`POST` to post the :guilabel:`Closing Entry`;

   .. image:: india/gst-gstr-3-post.png
      :alt: GSTR-3 Post Entry

#. Once posted, the **GSTR-3** report status changes to :guilabel:`Filed`.

   .. image:: india/gst-gstr-3-filed.png
      :alt: GSTR-3 Filed

.. _india/gstr_reports:

Tax reports
===========

.. _india/gstr-1_report:

GSTR-1 report
-------------

The :guilabel:`GSTR-1` report is divided into sections. It displays the :guilabel:`Base` amount,
:abbr:`CGST (Central Goods and Services Tax)`, :abbr:`SGST (State Goods and Service Tax)`,
:abbr:`IGST (Integrated Goods and Services Tax)`, and :guilabel:`CESS` for each section.

   .. image:: india/gst-gstr-1-sale-report.png
      :alt: GSTR-1 Report

.. _india/gstr-3_report:

GSTR-3 report
-------------

The :guilabel:`GSTR-3` report contains different sections:

- Details of inward and outward supply subject to a **reverse charge**;
- Eligible :abbr:`ITC (Income Tax Credit)`;
- Values of **exempt**, **Nil-rated**, and **non-GST** inward supply;
- Details of inter-state supplies made to **unregistered** persons.

   .. image:: india/gst-gstr-3-report.png
      :alt: GSTR-3 Report

Profit and Loss (IN) report
---------------------------

This is a :guilabel:`Profit and Loss` report that displays the balances for **Opening Stock** and
**Closing Stock**. It helps users using Continental accounting to accurately determine the cost of
goods (i.e :guilabel:`Opening Stock` + purchases during the period - :guilabel:`Closing Stock`).

   .. image:: india/profit-and-loss-report.png
      :alt: Profit and Loss report

.. _india/tds-tcs-threshold:

TDS/TCS threshold alert
=======================

:abbr:`TDS (tax deducted at source)` and :abbr:`TCS (tax collected at source)` are tax provisions
under Indian law, triggered when transaction amounts exceed specified thresholds. This alert
notifies users when the value of invoices or bills surpasses these limits, prompting the application
of the appropriate TDS/TCS.

To configure Odoo to advise you on when to apply TDS/TCS, set the :guilabel:`TDS/TCS section`
field on the corresponding account in the chart of accounts. Odoo will display a banner suggesting
the TDS/TCS section under which tax might be applicable when recording an invoice or bill.

Configuration
-------------

#. Navigate to :menuselection:`Accounting --> Configuration --> Settings`
#. In the :guilabel:`Indian Integration` section, enable the :guilabel:`TDS` or :guilabel:`TCS`
   feature as required.
#. Navigate to :menuselection:`Accounting --> Configuration --> Chart of Accounts`.
#. Click :guilabel:`View` on the desired account, and set the :guilabel:`TDS/TCS Section` field.

.. note::
   The TDS/TCS sections are pre-configured with threshold limits. If you need to modify these
   limits, go to :menuselection:`Accounting --> Configuration --> Taxes`. In the :guilabel:`Advanced
   Options` tab, click on the  :icon:`fa-arrow-right` :guilabel:`(internal link)` icon of the
   :guilabel:`Section` field.

   .. image:: india/tds-tcs-section-modify.png
      :alt: TDS/TCS section modify

Applying TCS/TDS on invoices and bills
--------------------------------------

Based on the account used on the customer invoice or vendor bill, Odoo checks the TCS/TDS threshold
limit. If the limit specified in the :guilabel:`TCS/TDS Section` of the account is exceeded, Odoo
displays an alert that suggests applying the appropriate TCS/TDS. The alert will disappear once the
TCS/TDS is applied.

.. image:: india/tcs-warning.png
   :alt: TCS advice

**TCS** is directly applicable in the tax on the invoice lines. To apply **TDS**, click the
:guilabel:`TDS Entry` smart button on the vendor bill/payment. The popup window allows specifying
the TDS details. Confirm the entry to apply the TDS.

.. image:: india/tds-apply.png
   :alt: TDS application

In Odoo, the aggregate total is calculated for partners sharing the same PAN number, across all company branches.

.. example::

   .. list-table::
      :header-rows: 1
      :widths: 10 20 10 20 15

      * - **Branch**
        - **Customer**
        - **Invoice**
        - **Transaction Amount (₹)**
        - **PAN Number**
      * - IN - MH
        - XYZ Enterprise - GJ
        - Invoice 1
        - ₹50,000
        - ABCPX1234E
      * - IN - MH
        - XYZ Enterprise - GJ
        - Invoice 2
        - ₹30,000
        - ABCPX1234E
      * - IN - MH
        - XYZ Enterprise - MH
        - Invoice 3
        - ₹40,000
        - ABCPX1234E
      * - IN - DL
        - XYZ Enterprise - GJ
        - Invoice 4
        - ₹20,000
        - ABCPX1234E
      * - IN - GJ
        - XYZ Enterprise - MH
        - Invoice 5
        - ₹60,000
        - ABCPX1234E

   -  **Aggregate total** = 50,000 + 30,000 + 40,000 + 20,000 + 60,000 = ₹200,000
   -  The aggregate total for all customers (XYZ Enterprise - GJ, MH, DL) sharing the PAN number
      ABCPX1234E across all branches is ₹200,000.
