==============
United Kingdom
==============

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

.. image:: united_kingdom/uk.png
   :align: center
   :alt: Odoo uk packages

.. note::
   - Only UK-based companies can submit reports to HMRC.
   - Installing the module :guilabel:`UK - Accounting Reports` installs all two modules at once.

.. seealso::
   - `HM Revenue & Customs <https://www.gov.uk/government/organisations/hm-revenue-customs/>`_
   - `Overview of Making Tax Digital
     <https://www.gov.uk/government/publications/making-tax-digital/overview-of-making-tax-digital/>`_

Chart of accounts
=================

The UK chart of accounts is included in the :guilabel:`UK - Accounting` module. Go to
:menuselection:`Accounting --> Configuration --> Accounting: Chart of Accounts` to access it.

Setup your :abbr:`CoA (chart of accounts)` by going to :menuselection:`Accounting --> Configuration
--> Settings --> Accounting Import section` and choose to :guilabel:`Review Manually` or
:guilabel:`Import (recommended)` your initial balances.

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

.. _uk_localization/hmrc-registration:

Register your company to HMRC before the first submission
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Go to :menuselection:`Accounting --> Reporting --> Tax report` and click on
:guilabel:`Connect to HMRC`. Enter your company information on the HMRC platform. You only need to
do it once.

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
#. You can now :ref:`register your company to HMRC <uk_localization/hmrc-registration>` and submit
   the tax report for this company.
#. Repeat the steps for other companies' HMRC submissions.

.. note::
   During this process, the :guilabel:`Connect to HMRC` button no longer appears for other UK-based
   companies.

.. _united-kingdom/employment-hero:

BACS files
==========

:abbr:`BACS (Bankers' Automated Clearing Services)` files are electronic files used in the UK to
process payments and transfers between bank accounts.

To enable the use of BACS files, open the **Settings** app and search for `BACS` in the search bar.
Enter your :abbr:`SUN (Service User Number)` in the :guilabel:`Service User Number` field, and
manually save.

Next, open the **Accounting** app, go to :menuselection:`Configuration --> Journals`, and select
your **bank** journal. In the :guilabel:`Journal Entries` tab, configure the
:guilabel:`Account Number` field and the :guilabel:`Bank` field. Check that the BACS payment method
is enabled in the :guilabel:`Outgoing Payments` and :guilabel:`Incoming Payments` tab.

If you have any contacts for whom you wish to use BACS files, open the **Contacts** app, click on
their contact card, and in the :guilabel:`Accounting` tab, fill in the :guilabel:`Bank` and
:guilabel:`Account Number` fields.

Bill payments
-------------

To generate BACS files for bill payments, go to :menuselection:`Accounting --> Vendors --> Payments`
and create a :guilabel:`New` payment. Change the :guilabel:`Payment Method` to
:guilabel:`BACS Direct Debit`, select a :guilabel:`Vendor`, an :guilabel:`Amount`, and a
:guilabel:`Vendor Bank Account` if it is not set automatically after choosing a vendor.
:guilabel:`Confirm` when done, repeat this action as many times as necessary.

Next, go to :menuselection:`Accounting --> Vendors --> Batch Payments`, and create a :guilabel:`New`
batch payment order. Select the **bank journal** in the :guilabel:`Bank` field, then set the
:guilabel:`Payment Method` to :guilabel:`BACS Direct Credit` and select a
:guilabel:`BACS Processing Date`. Optionally, you can also select a :guilabel:`BACS Expiry Date` and
tick :guilabel:`BACS Multi Mode` (payments in batch get individually processed).

Click :guilabel:`Add a line` and :guilabel:`Select` the payments created earlier. Click
:guilabel:`Validate` when done. Once validated, the BACS file is available in the chatter. You can
also :guilabel:`Re-generate Export File` if you need a new BACS file for that batch payment order.

.. note::
   The BACS Direct Credit payment method is also available when **registering a payment** from
   a bill.

.. image:: united_kingdom/bacs-files.png
   :alt: Vendor Batch Payment view with generated BACS file.

Invoice payments
----------------

To generate BACS files for invoice payments, you must first generate a **BACS Direct Debit
Instructions** by going to :menuselection:`Accounting --> Customers --> BACS Direct Debit
Instructions`. Click :guilabel:`New`, select a :guilabel:`Customer`, their :guilabel:`IBAN`, and the
:guilabel:`Journal` you wish to use.

To generate BACS files for invoice payments, go to :menuselection:`Accounting --> Customers -->
Payments` and create a :guilabel:`New` payment. Change the :guilabel:`Payment Method` to
:guilabel:`BACS Direct Debit`, select a :guilabel:`Customer`, an :guilabel:`Amount`, and a
:guilabel:`Customer Bank Account` if it is not set automatically after choosing a customer. You can
also select a :guilabel:`BACS Payment Type` from:

- :guilabel:`Direct debit-first collection of a series`;
- :guilabel:`Direct debit single collection`;
- :guilabel:`Direct debit repeating collection in a series`;
- :guilabel:`Direct debit-final collection of a series`.

:guilabel:`Confirm` when done, repeat this action as many times as necessary.

Next, go to :menuselection:`Accounting --> Customers --> Batch Payments`, and create a
:guilabel:`New` batch payment order. Select the **bank journal** in the :guilabel:`Bank` field, then
set the :guilabel:`Payment Method` to :guilabel:`BACS Direct Debit` and select a
:guilabel:`BACS Processing Date`. Optionally, you can also select a :guilabel:`BACS Expiry Date` and
tick :guilabel:`BACS Multi Mode` (payments in batch get individually processed).

Click :guilabel:`Add a line` and :guilabel:`Select` the payments created earlier. Click
:guilabel:`Validate` when done. Once validated, the BACS file is available in the chatter. You can
also :guilabel:`Re-generate Export File` if you need a new BACS file for that batch payment order.

Employment Hero payroll
=======================

If your business is already up and running with :doc:`Employment Hero <employment_hero>`, you can
use our connector as an alternative payroll solution.

.. important::
   To :ref:`configure the Employment Hero API <employment_hero/configuration>` for **United
   Kingdom**, use the following value as :guilabel:`Payroll URL`: `https://api.yourpayroll.co.uk/`.
