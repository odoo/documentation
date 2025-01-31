==============
United Kingdom
==============

.. _localization/united-kingdom/modules:

Configuration
=============

:ref:`Install <general/install>` the :guilabel:`UK - Accounting` and the :guilabel:`UK - Accounting
Reports` modules to get all the features of the UK localization.

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`UK - Accounting`
     - `l10n_uk`
     -  - CT600-ready chart of accounts
        - VAT100-ready tax structure
        - Infologic UK counties listing
   * - :guilabel:`UK - Accounting Reports`
     - `l10n_uk_reports`
     -  - Accounting reports for the UK
        - Allows sending the tax report via the MTD-VAT API to HMRC.
   * - :guilabel:`UK BACS Payment Files`
     - `l10n_uk_bacs`
     - Allows generating :ref:`localization/united-kingdom/BACS-files` for bill and invoice payments
   * - :guilabel:`UK - Construction Industry Scheme`
     - `l10n_uk_reports_cis`
     -  - Allows sending the Monthly return to |HMRC|
        - CIS Deduction (GB) report for UK construction industry
   * - :guilabel:`UK - HMRC API`
     - `l10n_uk_hmrc`
     - Includes the |HMRC| basics.

.. note::
   - Only UK-based companies can submit reports to HMRC.
   - Installing the module :guilabel:`UK - Accounting Reports` installs all two modules at once.
   - The :guilabel:`UK - Construction Industry Scheme` module automatically includes the
     :guilabel:`UK - HMRC API` module during installation.

.. seealso::
   - `HM Revenue & Customs <https://www.gov.uk/government/organisations/hm-revenue-customs/>`_
   - `Overview of Making Tax Digital
     <https://www.gov.uk/government/publications/making-tax-digital/overview-of-making-tax-digital/>`_

.. _localization/united-kingdom/chart-of-account:

Chart of accounts
=================

The UK chart of accounts is included in the :guilabel:`UK - Accounting` module. Go to
:menuselection:`Accounting --> Configuration --> Accounting: Chart of Accounts` to access it.

Setup your :abbr:`CoA (chart of accounts)` by going to :menuselection:`Accounting --> Configuration
--> Settings --> Accounting Import section` and choose to :guilabel:`Review Manually` or
:guilabel:`Import (recommended)` your initial balances.

.. _localization/united-kingdom/taxes:

Taxes
=====

As part of the localization module, UK taxes are created automatically with their related financial
accounts and configuration.

Go to :menuselection:`Accounting --> Configuration --> Settings --> Taxes` to update the
:guilabel:`Default Taxes`, the :guilabel:`Tax Return Periodicity` or to :guilabel:`Configure your
tax accounts`.

To edit existing taxes or to :guilabel:`Create` a new tax, go to :menuselection:`Accounting -->
Configuration --> Accounting: Taxes`.

.. seealso::
   - :doc:`taxes <../accounting/taxes>`
   - Tutorial: `Tax report and return
     <https://www.odoo.com/slides/slide/tax-report-and-return-1719?fullscreen=1>`_.

.. _localization/united-kingdom/digital-tax:

Making Tax Digital (MTD)
------------------------

In the UK, all VAT-registered businesses have to follow the MTD rules by using software to submit
their VAT returns.

The **UK - Accounting Reports** module enables you to comply with the `HM Revenue & Customs
<https://www.gov.uk/government/organisations/hm-revenue-customs/>`_ requirements regarding
`Making Tax Digital
<https://www.gov.uk/government/publications/making-tax-digital/overview-of-making-tax-digital/>`_.

.. important::
   If your periodic submission is more than three months late, it is no longer possible to submit
   it through Odoo, as Odoo only retrieves open bonds from the last three months. Your submission
   has to be done manually by contacting HMRC.

.. _localization/united-kingdom/hmrc-registration:

Register your company to HMRC before the first submission
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Go to :menuselection:`Accounting --> Reporting --> Tax report` and click on
:guilabel:`Connect to HMRC`. Enter your company information on the HMRC platform. You only need to
do it once.

.. _localization/united-kingdom/periodic-hmrc-submission:

Periodic submission to HMRC
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Import your obligations HMRC, filter on the period you want to submit, and send your tax report by
clicking :guilabel:`Send to HMRC`.

.. tip::
   You can use dummy credentials to demo the HMRC flow. To do so, activate the
   :ref:`developer mode <developer-mode>` and go to :menuselection:`General Settings -->
   Technical --> System Parameters`. From here, search for `l10n_uk_reports.hmrc_mode` and change
   the value line to `demo`. You can get such credentials from the `HMRC Developer Hub
   <https://developer.service.hmrc.gov.uk/api-test-user>`_.

.. _localization/united-kingdom/periodic-hmrc-submission-multi:

Periodic submission to HMRC for multi-company
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Only one company and one user can connect to HMRC simultaneously. If several UK-based companies are
on the same database, the user who submits the HMRC report must follow these instructions before
each submission:

#. Log into the company for which the submission has to be done.
#. Go to :guilabel:`General Settings`, and in the :guilabel:`Users` section, click
   :guilabel:`Manage Users`. Select the user who is connected to HMRC.
#. Go to the :guilabel:`UK HMRC Integration` tab and click :guilabel:`Reset Authentication
   Credentials` or :guilabel:`Remove Authentication Credentials` button.
#. :ref:`Register your company to HMRC <localization/united-kingdom/hmrc-registration>` and submit
   the company's tax report.
#. Repeat the steps for other companies' HMRC submissions.

.. note::
   During this process, the :guilabel:`Connect to HMRC` button no longer appears for other UK-based
   companies.

.. _localization/united-kingdom/BACS-files:

Bacs files
==========

:abbr:`Bacs (Bankers' Automated Clearing Services)` files are electronic files used in the UK to
process payments and transfers between bank accounts.

To enable the use of Bacs files, make sure the
:ref:`UK BACS Payment Files <localization/united-kingdom/modules>` module is installed, then:

#. Configure your Bacs Service User Number:

   #. Go to :menuselection:`Accounting --> Configuration --> Settings` and scroll down to the
      :guilabel:`Customer Payments` section.
   #. Enter your :guilabel:`Service User Number` under :guilabel:`BACS` and manually save.

#. Configure your **bank** journal:

   #. Go to :menuselection:`Accounting --> Configuration --> Journals` and select your **bank**
      journal.
   #. In the :guilabel:`Journal Entries` tab, configure the :guilabel:`Account Number` and
      :guilabel:`Bank` fields.
   #. In the :guilabel:`Incoming Payments` and :guilabel:`Outgoing Payments` tabs, make sure the
      :guilabel:`BACS Direct Debit` payment method is enabled.

#. Configure the contacts for whom you wish to use Bacs files: Access the contact form and, in
   the :guilabel:`Accounting` tab, click :guilabel:`Add a line` and fill in the
   :guilabel:`Account Number` and :guilabel:`Bank` fields.

.. _localization/united-kingdom/bill-payments:

Bill payments
-------------

To generate Bacs files for bill payments, set the :guilabel:`Payment Method` to
:guilabel:`BACS Direct Debit` when :doc:`registering vendor payments <../accounting/payments>`.

Then, create a vendor batch payment:

#. Go to :menuselection:`Accounting --> Vendors --> Batch Payments`, and click :guilabel:`New`.
#. Select the bank journal in the :guilabel:`Bank` field, set the :guilabel:`Payment Method` to
   :guilabel:`BACS Direct Credit`, and select a :guilabel:`BACS Processing Date`.
#. Optionally, you can also:

   - select a :guilabel:`BACS Expiry Date`;
   - enable :guilabel:`BACS Multi Mode` to process the payments on their individual date.

#. Click :guilabel:`Add a line`, select the payments you want to include, click :guilabel:`Select`,
   then :guilabel:`Validate`.

Once validated, the Bacs file is available in the chatter. You can also :guilabel:`Re-generate
Export File` if you need a new Bacs file for that batch payment.

.. image:: united_kingdom/bacs-files.png
   :alt: Vendor Batch Payment view with generated BACS file.

.. seealso::
   :doc:`../accounting/payments/batch`

.. _localization/united-kingdom/invoice-payments:

Invoice payments
----------------

Before generating Bacs files for invoice payments, you must first create a **BACS Direct Debit
Instruction**: Go to :menuselection:`Accounting --> Customers --> BACS Direct Debit Instructions`
and click :guilabel:`New`. Select a :guilabel:`Customer`, their :guilabel:`IBAN`, and the
:guilabel:`Journal` you wish to use.

To generate Bacs files for invoice payments, set the :guilabel:`Payment Method` to
:guilabel:`BACS Direct Debit` when :doc:`registering invoice payments <../accounting/payments>`.

.. tip::
   If you register the payment for an invoice linked to a subscription or via
   :menuselection:`Accounting --> Customers --> Payments`, you can select the :guilabel:`BACS
   Payment Type`:

   - :guilabel:`Direct debit-first collection of a series`;
   - :guilabel:`Direct debit single collection`;
   - :guilabel:`Direct debit repeating collection in a series`;
   - :guilabel:`Direct debit-final collection of a series`.

Then, create a customer batch payment:

#. Go to :menuselection:`Accounting --> Customers --> Batch Payments`, and click :guilabel:`New`.
#. Select the bank journal in the :guilabel:`Bank` field, set the :guilabel:`Payment Method` to
   :guilabel:`BACS Direct Credit`, and select a :guilabel:`BACS Processing Date`.
#. Optionally, you can also:

   - select a :guilabel:`BACS Expiry Date`;
   - enable :guilabel:`BACS Multi Mode` to process the payments on their individual date.

#. Click :guilabel:`Add a line`, select the payments you want to include, click :guilabel:`Select`,
   then :guilabel:`Validate`.

Once validated, the Bacs file is available in the chatter. You can also :guilabel:`Re-generate
Export File` if you need a new Bacs file for that batch payment.

.. _localization/united-kingdom/employment-hero:

Employment Hero payroll
=======================

If your business is already up and running with :doc:`Employment Hero <employment_hero>`, you can
use our connector as an alternative payroll solution.

.. important::
   To :ref:`configure the Employment Hero API <employment_hero/configuration>` for **United
   Kingdom**, use the following value as :guilabel:`Payroll URL`: `https://api.yourpayroll.co.uk/`.

.. _localization/united-kingdom/cis-deduction:

.. |HMRC| replace:: :abbr:`HMRC (HM Revenue and Customs)`
.. |CIS| replace:: :abbr:`CIS (Construction Industry Scheme)`

CIS deduction
=============

The Construction Industry Scheme deduction (CIS deduction) is a tax deduction system used in the UK
designed specifically for the construction industry. It requires contractors to deduct a percentage
of payments made to subcontractors and forward these deductions to HM Revenue and Customs (HMRC).
These deductions apply only to the labor portion of the payments and serve as advance payments
towards the subcontractor's tax and National Insurance contributions. Contractors are required to
register for the scheme, but subcontractors are not. However, subcontractors who are not registered
face higher payment deductions. Under the |CIS|, contractors must deduct 20% from payments to
registered subcontractors, while the deduction increases to 30% for unregistered ones.

.. seealso::

   - `Construction Industry Scheme (CIS) <https://www.gov.uk/what-is-the-construction-industry-scheme>`_
   - `Guidelines for CIS contractors
     <https://www.gov.uk/what-you-must-do-as-a-cis-contractor>`_
   - `Guidelines for CIS subcontractors
     <https://www.gov.uk/what-you-must-do-as-a-cis-subcontractor>`_

As a contractor, you are required to register with the |CIS| before hiring subcontractors and to
check whether each subcontractor is registered with the |CIS|. You must also maintain records of all
payments and deductions and submit monthly returns to HMRC, including the following details:

- information about the subcontractors
- records of payments made and any deductions applied
- a declaration confirming that the employment status of all subcontractors has been reviewed
- a declaration confirming that all subcontractors requiring verification have been verified

.. note::
   If no payments were made to subcontractors in the previous tax month, contractors must notify
   |HMRC| by the 19th of the month to avoid a penalty.

To submit Monthly Returns to |HMRC|, :ref:`install <general/install>` the
:ref:`UK - Construction Industry Scheme <localization/united-kingdom/modules>` module.

.. tip::
   To enable the :guilabel:`Test` mode and use test credentials, open the Settings app, activate the
   :ref:`developer mode <developer-mode>` and go to :menuselection:`Settings --> Technical -->
   System Parameters`. Search for `l10n_uk_hmrc.api_mode`, select it, and change the
   :guilabel:`Value` from `production` to `test`.

.. _localization/united-kingdom/cis-monthly-returns:

Monthly returns
---------------

Monthly returns only work for vendor bills and vendor refunds. To submit a complete return to
|HMRC|, several steps must be followed to report all payments made to subcontractors under the
scheme during the previous tax month:

- :ref:`localization/united-kingdom/cis-contractor-setup`
- :ref:`localization/united-kingdom/cis-subcontractor-setup`
- :ref:`localization/united-kingdom/cis-vendorbills`
- :ref:`localization/united-kingdom/cis-monthly-return-sending`

.. _localization/united-kingdom/cis-contractor-setup:

Contractor (company) setup
~~~~~~~~~~~~~~~~~~~~~~~~~~

To configure your company's |HMRC| information, go to the Settings app and, in the
:guilabel:`Companies` section, click :guilabel:`Update Info`. Open the :guilabel:`HMRC` tab and
configure the information in the :guilabel:`HMRC Credentials` and the :guilabel:`Contractor details`
sections. All fields are mandatory.

.. _localization/united-kingdom/cis-subcontractor-setup:

Subcontractor setup
~~~~~~~~~~~~~~~~~~~

Access the subcontractor's contact form and select the :guilabel:`Accounting` tab. In the
:guilabel:`HMRC Details` section, enable the :guilabel:`Construction Industry Scheme` option; the
|CIS|-related fields are displayed.

By default, the :guilabel:`Deduction rate` is set to 30%. To modify it, first enter the
:guilabel:`Verification Number` provided by |HMRC| when verifying the subcontractor's status, then
update the :guilabel:`Deduction Rate` accordingly.

.. note::
   The :guilabel:`Forename` and :guilabel:`Surname` fields are mandatory if the contact type is set
   to :guilabel:`Individual`.

.. _localization/united-kingdom/cis-vendorbills:

Vendor bills
~~~~~~~~~~~~

The appropriate |CIS| tax must be applied to **labor items** on vendor bills based on the
subcontractor's :guilabel:`Deduction Rate`: :guilabel:`0% CIS`, :guilabel:`20% CIS` or
:guilabel:`30% CIS`. To apply the rate, go to the :guilabel:`Invoice Lines` section of the vendor
bill and select the appropriate |CIS| tax rate in the :guilabel:`Taxes` column of the **labor**
items.

.. note::
   - The |CIS| tax rate is not necessary for material items on vendor bills.
   - A yellow banner appears at the top of the page if:

     - The :guilabel:`Construction Industry Scheme` option hasn't been enabled in the
       :ref:`subcontractor <localization/united-kingdom/cis-subcontractor-setup>`'s
       :guilabel:`Contact` form when creating a vendor bill.
     - The |CIS| tax used in the vendor bill does not match the expected |CIS| deduction rate for a
       :ref:`subcontractor <localization/united-kingdom/cis-subcontractor-setup>`.

.. _localization/united-kingdom/cis-monthly-return-sending:

Monthly returns sending
~~~~~~~~~~~~~~~~~~~~~~~

On the 6th of each month, Odoo sends a reminder email to submit a monthly return to |HMRC|. The
recipient email address is the one entered in the company :guilabel:`Email` field. To send monthly
returns to |HMRC|, go to :menuselection:`Accounting --> Reporting --> Tax Return` and follow these
steps:

#. Click :icon:`fa-book` :guilabel:`Report:` and select :guilabel:`CIS Deduction (GB)`.
#. In the :icon:`fa-calendar` :guilabel:`(calendar)` date selector, the :guilabel:`Tax Period` is
   automatically adjusted to match the |CIS| deduction period.
#. Click on :guilabel:`Send to HMRC` in the top-left corner.
#. In the :guilabel:`CIS monthly return` window, select the required options in the
   :guilabel:`Declaration` section:

   - :guilabel:`Employment Status`: To declare that the employment status of all subcontractors has
     been reviewed.
   - :guilabel:`Subcontractor Verification`: To declare that all submitted subcontractors requiring
     verification have been verified.
   - :guilabel:`Inactivity Indicator`: To declare temporary inactivity.

#. In the :guilabel:`Information correct declaration` section, confirm the information is true and
   complete by checking the box. Then, enter the :guilabel:`Password` used in the
   :guilabel:`HMRC Credentials` section during
   :ref:`contractor setup <localization/united-kingdom/cis-contractor-setup>`.
#. Click :guilabel:`Send` to prompt Odoo to request |HMRC| to initiate the transaction.

When |HMRC| replies to a transaction, Odoo automatically notifies the user who submitted it by
email. The email informs them that the response is available in the company's chatter with an
attached XML document for download. Both the electronic and paper versions of the |HMRC| receipt
should be retained. If an error is detected, a new submission is required to comply with |HMRC|
requirements.

.. note::
   - Transactions are updated daily. To manually update the |HMRC| request, click the :icon:`fa-cog`
     :guilabel:`(gear)` icon and select :guilabel:`Refresh HMRC request`.
   - |CIS| invoices are included in the :guilabel:`CIS Deduction (GB)` report but are not sent to
     |HMRC|.
