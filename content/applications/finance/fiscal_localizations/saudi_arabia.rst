============
Saudi Arabia
============

Configuration
=============

:ref:`Install <general/install>` the following modules to get all the features of the Saudi Arabian
localization:

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name
     - Technical name
     - Description
   * - Saudi Arabia - Accounting
     - `l10n_sa`
     - Default :ref:`fiscal localization package <fiscal_localizations/packages>`
   * - Saudi Arabia - E-invoicing
     - `l10n_sa_edi`
     - ZATCA e-invoices implementation
   * - Saudi Arabia - Point of Sale
     - `l10n_sa_pos`
     - Point of Sale compliance

ZATCA e-invoices
================

The ZATCA e-invoicing system is designed to streamline and digitize the invoicing process for
businesses operating in Saudi Arabia.

.. seealso::
   `ZATCA e-invoicing page <https://zatca.gov.sa/en/E-Invoicing/Pages/default.aspx>`_

Company information
-------------------

Go to :menuselection:`Settings --> General Settings --> Companies`, click :guilabel:`Update info`,
and ensure the following company information is complete and up-to-date.

- The full :guilabel:`Company Name`.
- All relevant :guilabel:`Address` fields, including the :guilabel:`Building Number` and
  :guilabel:`Plot Identification` (four digits each).
- Select an enterprise :guilabel:`Identification Scheme`. It is recommended to use the
  :guilabel:`Commercial Registration Number`.
- Enter the :guilabel:`Identification Number` for the selected :guilabel:`Identification Scheme`.
- The :guilabel:`VAT` number.
- Ensure the :guilabel:`Currency` is set to :guilabel:`SAR`.

.. note::
   It is also necessary to fill out similar information for partner companies.

Simulation mode
---------------

.. important::
   It is strongly recommended to thoroughly test all invoicing workflows using the Fatoora
   **simulation** portal first, as **any** invoice submitted to the regular Fatoora portal will be
   accounted for, which could lead to fines and penalties.

Fatoora simulation portal
~~~~~~~~~~~~~~~~~~~~~~~~~

Log in on the `Fatoora portal <https://fatoora.zatca.gov.sa/>`_ using the company's ZATCA
credentials. Then, click the :guilabel:`Fatoora Simulation Portal` button to switch to the
simulation portal.

.. seealso::
   `ZACTA Fatoora portal user manual version 3 (May 2023) <https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/Fatoora_Portal_User_Manual_English.pdf>`_

.. _saudi-arabia/api-mode:

ZATCA API integration
~~~~~~~~~~~~~~~~~~~~~

On Odoo, go to :menuselection:`Accounting --> Configuration --> Settings`. Under :guilabel:`ZATCA
API Integration`, select the :guilabel:`Simulation (Pre-Production)` :guilabel:`API mode` and click
:guilabel:`Save`.

.. _saudi-arabia/journals:

Sales journals
~~~~~~~~~~~~~~

Each sales journal on Odoo needs to be configured. To do so, go to :menuselection:`Accounting -->
Configuration --> Journals`, open any sales journal (e.g., Customer Invoices), and go to the
:guilabel:`ZATCA` tab. Once there, enter any :guilabel:`Serial Number` to identify the journal.

.. note::
   The same serial number can be used for all of the company's sales journals.

Next, click :guilabel:`Onboard Journal`. In the dialog box, providing an :abbr:`OTP (one-time
password)` code is required. To retrieve it, open the `Fatoora simulation portal
<https://fatoora.zatca.gov.sa/>`_, click :guilabel:`Onboard New Solution Unit/Device`, choose the
number of OTP codes to generate (one per journal to configure), and click :guilabel:`Generate OTP
Code`. Copy an OTP code, it into the dialog box on Odoo, and click :guilabel:`Request`.

.. note::
   OTP codes expire after one hour.

.. tip::
   If any issue occurs during onboarding, click :guilabel:`Regenerate CSR` to start again.

Testing
~~~~~~~

When confirming an invoice, there is now an option to process the invoice, sending it directly the
Fatoora simulation portal. Odoo displays the portal's response after each submission. Only rejected
invoices can be reset to draft and edited on Odoo. Furthermore, at the end of each day, Odoo sends
all unprocessed invoices to the portal.

.. tip::
   - Testing all invoicing workflows, preferably with real invoices and for a reasonable amount of
     time, is recommended.
   - Compare the invoices received statistics page on the Fatoora simulation portal with the list of
     invoices on Odoo to ensure both align.

Taxes
~~~~~

When using a **0% tax** in a customer invoice, it is necessary to specify the reason behind such a
rate. To configure taxes, go to :menuselection:`Accounting --> Configuration --> Settings -->
Taxes`, and open the tax to edit. Under the :guilabel:`Advanced Options`, select an
:guilabel:`Exemption Reason Code` and click :guilabel:`Save`.

When using **retention** or **withholding an amount** in a customer invoice, the tax used to retain
the amount needs to be specified.

Production mode
---------------

When ready for production, change the :ref:`API mode <saudi-arabia/api-mode>` to
:guilabel:`Production` and click :guilabel:`Save`.

.. warning::
   Setting the :guilabel:`API mode` to :guilabel:`Production` is **irreversible**.

The sales journals initially linked to the simulation portal now needs to be linked to the regular
portal. To do so, :ref:`onboard the journals <saudi-arabia/journals>` again, ensuring to use the
regular `Fatoora portal <https://fatoora.zatca.gov.sa/>`_ this time.
