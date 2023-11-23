:show-content:

===========
Get started
===========

When you first open your Odoo Accounting app, the *Accounting Overview* page welcomes you with a
step-by-step onboarding banner, a wizard that helps you get started. This onboarding banner is
displayed until you choose to close it.

The settings visible in the onboarding banner can still be modified later by going to
:menuselection:`Accounting --> Configuration --> Settings`.

.. note::
   Odoo Accounting automatically installs the appropriate **Fiscal Localization Package** for your
   company, according to the country selected at the creation of the database. This way, the right
   accounts, reports, and taxes are ready-to-go. :ref:`Click here <fiscal_localizations/packages>`
   for more information about Fiscal Localization Packages.

Accounting onboarding banner
============================

The step-by-step Accounting onboarding banner is composed of four steps:

.. image:: get_started/setup_accounting_onboarding.png
   :alt: Step-by-step onboarding banner in Odoo Accounting

#. :ref:`accounting-setup-company`
#. :ref:`accounting-setup-bank`
#. :ref:`accounting-setup-periods`
#. :ref:`accounting-setup-chart`

.. _accounting-setup-company:

Company Data
------------

This menu allows you to add your company’s details such as the name, address, logo, website, phone
number, email address, and Tax ID, or VAT number. These details are then displayed on your documents,
such as on invoices.

.. image:: get_started/setup_company.png
   :alt: Add your company's details in Odoo Accounting and Odoo Invoicing

.. note::
   You can also change these settings by going to :menuselection:`Settings --> General Settings -->
   Settings --> Companies` and clicking on **Update Info**.

.. _accounting-setup-bank:

Bank Account
------------

Connect your bank account to your database and have your bank statements synced automatically. To do
so, find your bank in the list, click on *Connect*, and follow the instructions on-screen.

.. note::
   :doc:`Click here <bank/bank_synchronization>` for more information about this feature.

If your Bank Institution can’t be synchronized automatically, or if you prefer not to sync it with
your database, you may also configure your bank account manually by clicking on *Create it*, and
filling out the form.

- **Name**: the bank account's name, as displayed on Odoo.
- **Account Number**: your bank account number (IBAN in Europe).
- **Bank**: click on *Create and Edit* to configure the bank's details. Add the bank institution's
  name and its Identifier Code (BIC or SWIFT).
- **Code**: this code is your Journal's *Short Code*, as displayed on Odoo. By default, Odoo creates
  a new Journal with this Short Code.
- **Journal**: This field is displayed if you have an existing Bank Journal that is not linked yet
  to a bank account. If so, then select the *Journal* you want to use to record the financial
  transactions linked to this bank account or create a new one by clicking on *Create and Edit*.

.. note::
   - You can add as many bank accounts as needed with this tool by going to :menuselection:`Accounting
     --> Configuration`, and clicking on *Add a Bank Account*.
   - :doc:`Click here <bank>` for more information about Bank
     Accounts.

.. _accounting-setup-periods:

Accounting Periods
------------------

Define here your **Fiscal Years**’ opening and closing dates, which are used to generate reports
automatically, and your **Tax Return Periodicity**, along with a reminder to never miss a tax return
deadline.

By default, the opening date is set on the 1st of January and the closing date on the 31st of
December, as this is the most common use.

.. note::
   You can also change these settings by going to :menuselection:`Accounting --> Configuration -->
   Settings --> Fiscal Periods` and updating the values.

.. _accounting-setup-chart:

Chart of Accounts
-----------------

With this menu, you can add accounts to your **Chart of Accounts** and indicate their initial
opening balances.

Basic settings are displayed on this page to help you review your Chart of Accounts. To access all
the settings of an account, click on the *double arrow button* at the end of the line.

.. image:: get_started/setup_chart_of_accounts.png
   :alt: Setup of the Chart of Accounts and their opening balances in Odoo Accounting

.. note::
   :doc:`Click here <get_started/chart_of_accounts>` for more information on how to configure your Chart of
   Accounts.

Invoicing onboarding banner
===========================

There is another step-by-step onboarding banner that helps you take advantage of your Odoo Invoicing
and Accounting apps. The *Invoicing onboarding banner* is the one that welcomes you if you use the
Invoicing app rather than the Accounting app.

If you have Odoo Accounting installed on your database, you can reach it by going to
:menuselection:`Accounting --> Customers --> Invoices`.

The Invoicing onboarding banner is composed of four main steps:

.. image:: get_started/setup_invoicing_onboarding.png
   :alt: Step-by-step onboarding banner in Odoo Invoicing

#. :ref:`invoicing-setup-company`
#. :ref:`invoicing-setup-layout`
#. :ref:`invoicing-setup-payment`
#. :ref:`invoicing-setup-sample`

.. _invoicing-setup-company:

Company Data
------------

This form is the same as :ref:`the one presented in the Accounting onboarding banner
<accounting-setup-company>`.

.. _invoicing-setup-layout:

Invoice Layout
--------------

With this tool, you can design the appearance of your documents by selecting which layout template,
paper format, colors, font, and logo you want to use.

You can also add your *Company Tagline* and the content of the documents’ *footer*. Note that Odoo
automatically adds the company's phone number, email, website URL, and Tax ID (or VAT number) to the
footer, according to the values you previously configured in the :ref:`Company Data
<accounting-setup-company>`.

.. image:: get_started/setup_document_layout.png
   :alt: Document layout configuration in Odoo Invoicing

.. tip::
   Add your **bank account number** and a link to your **General Terms & Condition** in the footer.
   This way, your contacts can find the full content of your GT&C online without having to print
   them on the invoices you issue.

.. note::
   These settings can also be modified by going to :menuselection:`Settings --> General Settings`,
   under the *Business Documents* section.

.. _invoicing-setup-payment:

Payment Method
--------------

This menu helps you configure the payment methods with which your customers can pay you.

.. important::
   Configuring a *Payment Provider* with this tool also activates the *Invoice Online Payment*
   option automatically. With this, users can directly pay online, from their Customer Portal.

.. _invoicing-setup-sample:

Sample Invoice
--------------

Send yourself a sample invoice by email to make sure everything is correctly configured.

.. seealso::
   * :doc:`bank`
   * :doc:`get_started/chart_of_accounts`
   * :doc:`bank/bank_synchronization`
   * :doc:`../fiscal_localizations`
   * `Odoo Tutorials: Accounting and Invoicing - Getting started [video]
     <https://www.odoo.com/slides/slide/getting-started-1692>`_

.. toctree::
   :titlesonly:

   get_started/cheat_sheet
   get_started/chart_of_accounts
   get_started/multi_currency
   get_started/avg_price_valuation
   get_started/vat_units
