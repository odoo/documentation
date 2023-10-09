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

.. Note::
   When entering your VAT number, do not add the GB country code. Only the 9 digits are required.

Periodic submission to HMRC
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Import your obligations HMRC, filter on the period you want to submit, and send your tax report by
clicking :guilabel:`Send to HMRC`.

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
