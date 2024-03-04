======
Brazil
======

.. |IAP| replace:: :abbr:`IAP (In-app-purchase)`
.. |SO| replace:: :abbr:`SO (Sales order)`

Introduction
============

With the Brazilian localization you can automatically compute sales taxes for goods using AvaTax
(Avalara) through API calls, also configure taxes for services.

For the goods tax computation part, you need to configure the :ref:`contacts <brazil/contacts>`,
:ref:`company <brazil/company>`, :ref:`products <brazil/products>`, and :ref:`create an account in
Avatax <brazil/avatax-account>` from the Odoo general settings.

For the services taxes, you can create and configure them from Odoo directly without computing them
with AvaTax.

The localization also includes taxes and a chart of accounts template that can be modified if
needed.

Configuration
=============

Modules installation
--------------------

:ref:`Install <general/install>` the following modules to get all the features of the Brazilian
localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Brazilian - Accounting`
     - `l10n_br`
     - Default :ref:`fiscal localization package <fiscal_localizations/packages>` - adds accounting
       characteristics for the Brazilian localization, which represent the minimum configuration
       required for a company to operate in Brazil. The module's installation automatically loads:
       the chart of accounts, taxes, and required fields to properly configure the contact.
   * - :guilabel:`Brazil - Accounting Reports`
     - `l10n_br_reports`
     - Adds a simple tax report that helps check the tax amount per tax group in a given period of
       time. Also adds the P&L and BS adapted for the Brazilian market.
   * - :guilabel:`Avatax Brazil`
     - `l10n_br_avatax`
     - Add Brazilian tax calculation via Avatax and all necessary fields needed to configure Odoo in
       order to properly use Avatax and send the needed fiscal information to retrieve the correct
       taxes.
   * - :guilabel:`Avatax for SOs in Brazil`
     - `l10n_br_avatax_sale`
     - Same as the `l10n_br_avatax` module with the extension to the sales order module.

.. _brazil/company:

Configure your company
----------------------

To configure your company information, go to the :menuselection:`Contacts` app and search the name
given to your company.

#. Select the :guilabel:`Company` option at the top of the page. Then, configure the following
   fields:

   - :guilabel:`Name`
   - :guilabel:`Address` (add :guilabel:`City`, :guilabel:`State`, :guilabel:`Zip Code`,
     :guilabel:`Country`)
   - Tax ID (:guilabel:`CNPJ`)
   - :guilabel:`IE` (State Registration)
   - :guilabel:`IM` (Municipal Registration)
   - :guilabel:`SUFRAMA code` (Superintendence of the Manaus Free Trade Zone - add if applicable)
   - :guilabel:`Phone`
   - :guilabel:`Email`

   .. image:: brazil/company-configuration.png
      :alt: Company configuration.

#. Configure the :guilabel:`Fiscal Information` within the :guilabel:`Sales and Purchase` tab:

   - Add the :guilabel:`Fiscal Position` for :ref:`Avatax Brazil <brazil/fiscal-positions>`.
   - :guilabel:`Tax Regime` (Federal Tax Regime)
   - :guilabel:`ICMS Taxpayer Type` (indicates ICMS regime, Exempt status, or Non-Taxpayer.)
   - :guilabel:`Main Activity Sector`

   .. image:: brazil/contact-fiscal-configuration.png
     :alt: Company fiscal configuration.

#. Finally, upload a company logo and save the contact.

.. note::
   If you are a simplified regime, you need to configure the ICMS rate under
   :menuselection:`Accounting --> Configuration --> Settings --> Taxes --> Avatax Brazil`.

.. _brazil/avatax-account:

Configure AvaTax integration
----------------------------

Avalara AvaTax is a tax calculation provider that can be integrated in Odoo to automatically compute
taxes by taking into account the company, contact (customer), product, and transaction information
to retrieve the correct tax to be used.

Odoo is a certified partner of Avalara Brazil, which means that Avalara experts reviewed workflows
covered within the scope of the integration.

Using this integration requires :doc:`In-App-Purchases (IAPs)
</applications/essentials/in_app_purchase>` to compute taxes. Every time you compute taxes, an API
call is made, using credits from your |IAP| credits balance.

Credential configuration
~~~~~~~~~~~~~~~~~~~~~~~~

To activate AvaTax in Odoo, you need to create an account. To do so, go to
:menuselection:`Accounting --> Configuration --> Settings --> Taxes`, and, in the :guilabel:`AvaTax
Brazil` section, add the email address you want to use to log in to the AvaTax portal, and click on
:guilabel:`Create account`. This email is used as the administrator email address in AvaTax.

After you create the account from Odoo, you need to go to the Avalara Portal to set up your
password:

#. Access the `Avalara portal <https://portal.avalarabrasil.com.br/Login>`_
#. Click on :guilabel:`Meu primeiro acesso`
#. Add the email address you used in Odoo to create the Avalara/Avatax account, and then click
   :guilabel:`Solicitar Senha`
#. You will receive an email with a token and a link to create your password. Click on this link and
   copy-paste the token to allocate your desired password.

.. warning::
   If you intend first to try the integration on a testing or sandbox database, using an alternate
   email address is recommended, as you won't be able to re-use the same email address on your
   production database.

.. tip::
   You can start using AvaTax in Odoo without creating a password and accessing the Avalara Portal;
   for Odoo, the only requirement to start using the Avalara Tax Computation Engine is to create an
   account from the settings page.

.. image:: brazil/avatax-account-configuration.png
   :alt: Avatax account configuration.

.. note::
   You can transfer API credentials. Use this only when you have already created an account in
   another Odoo instance and wish to reuse it.

Configure master data
---------------------

Chart of accounts
~~~~~~~~~~~~~~~~~

The :doc:`chart of accounts </applications/finance/accounting/get_started/chart_of_accounts>` is
installed by default as part of the data set included in the localization module. The accounts are
mapped automatically in their corresponding taxes, and the default account payable and account
receivable fields.

.. note::
   The chart of accounts for Brazil is based on the SPED CoA, which gives a baseline of the accounts
   needed in Brazil.

   You can add or delete accounts according to the company's needs.

Taxes
~~~~~

Taxes are automatically created when installing the Brazilian localization. Taxes are already
configured, and some of them are used by Avalara when computing taxes on the sales order or invoice.

Taxes can be edited, or more taxes can be added. For example, some taxes used for services need to
be manually added and configured, as the rate may differ depending on the city where you are
offering the service.

.. important::
   Taxes attached to services are not computed by AvaTax. Only goods taxes are computed.

When configuring a tax used for a service that is included in the final price (when the tax is not
added or subtracted on top of the product price), set the :guilabel:`Tax Computation` to
:guilabel:`Percentage of Price Tax Included`, and, on the :guilabel:`Advanced Options` tab, check
the :guilabel:`Included in Price` option.

For more information on configuring taxes to fit your needs better, please go to the :doc:`taxes
functional documentation </applications/finance/accounting/taxes>`.

.. image:: brazil/tax-configuration.png
   :alt: Tax configuration.

.. warning::
   Do not delete taxes, as they are used for the AvaTax tax computation. If deleted, Odoo creates
   them again when used in an |SO| or invoice and computing taxes with AvaTax, but the account used
   to register the tax needs to be re-configured in the tax's :guilabel:`Definition` tab, under the
   :guilabel:`Distribution for invoices` and :guilabel:`Distribution for refunds` sections.

.. _brazil/products:

Products
~~~~~~~~

To use the AvaTax integration on sale orders and invoices, first specify the following information
on the product:

- :guilabel:`CEST Code` (Code for products subject to ICMS tax substitution)
- :guilabel:`Mercosul NCM Code` (Mercosur Common Nomenclature Product Code)
- :guilabel:`Source of Origin` (Indicates the origin of the product, which can be foreign or
  domestic, among other possible options depending on the specific use case)
- :guilabel:`SPED Fiscal Product Type` (Fiscal product type according to SPED list table)
- :guilabel:`Purpose of Use` (Specify the intended purpose of use for this product)

.. image:: brazil/product-configuration.png
   :alt: Product configuration.

.. note::
   Odoo automatically creates three products to be used for transportation costs associated with
   sales. These are named `Freight`, `Insurance`, and `Other Costs`. They are already configured, if
   more need to be created, duplicate and use the same configuration (configuration needed:
   :guilabel:`Product Type` `Service`, :guilabel:`Transportation Cost Type` `Insurance`, `Freight`,
   or `Other Costs`)

.. _brazil/contacts:

Contacts
~~~~~~~~

Before using the integration, specify the following information on the contact:

#. General information about the contact:

   - Select the :guilabel:`Company` option for a contact with a tax ID (CNPJ), or check
     :guilabel:`Individual` for a contact with a CPF.
   - :guilabel:`Name`
   - :guilabel:`Address`: :guilabel:`Zip Code` is a required field to compute taxes properly.
   - :guilabel:`Tax ID` or :guilabel:`CPF`: Use CPF for individuals and Tax ID (CNPJ) for companies
   - :guilabel:`IE`: state tax identification number
   - :guilabel:`IM`: municipa tax identification number
   - :guilabel:`SUFRAMA code`: SUFRAMA registration number
   - :guilabel:`Phone`
   - :guilabel:`Email`

   .. image:: brazil/contact-configuration.png
     :alt: Contact configuration.

   .. note::
      The :guilabel:`CPF`, :guilabel:`IE`, :guilabel:`IM`, and :guilabel:`SUFRAMA code` fields are
      are hidden until the :guilabel:`Country` is set to `Brazil`.

#. Fiscal information about the contact under the :guilabel:`Sales & Purchase` tab:

   - :guilabel:`Fiscal Position`: add the AvaTax fiscal position to automatically compute taxes on
     sale orders and invoices automatically.
   - :guilabel:`Tax Regime`: federal tax regime
   - :guilabel:`ICMS Taxpayer Type`: taxpayer type determines if the contact is within the ICMS
     regime, if it is exempt, or if it is a non-taxpayer.
   - :guilabel:`Main Activity Sector`: list of main activity sectors of the contact

   .. image:: brazil/contact-fiscal-configuration.png
     :alt: Contact fiscal configuration.

.. _brazil/fiscal-positions:

Fiscal positions
~~~~~~~~~~~~~~~~

To compute taxes on sale orders and invoices, it is necessary to have a :guilabel:`Fiscal Position`
with the :guilabel:`Detect Automatically` and the :guilabel:`Use AvaTax API` options enabled.

The :guilabel:`Fiscal Position` can be configured on the contact or selected when creating a sales
order or an invoice.

.. image:: brazil/fiscal-position-configuration.png
   :alt: Fiscal position configuration

Workflows
=========

This section provides an overview of the actions that trigger API calls for tax computation.

.. warning::
   Please note that each API call incurs a cost. Be mindful of the actions that trigger these calls
   to manage costs effectively.

Tax calculations on quotation / sales orders
--------------------------------------------

Trigger an API call to calculate taxes on a quotation or sales order automatically with AvaTax in
any of the following ways:

- **Quotation confirmation**
    Confirm a quotation into a sales order.
- **Manual trigger**
    Click on :guilabel:`Compute Taxes Using Avatax`.
- **Preview**
    Click on the :guilabel:`Preview` button.
- **Email a quotation / sales order**
    Send a quotation or sales order to a customer via email.
- **Online quotation access**
    When a customer accesses the quotation online (via the portal view), the API call is triggered.

Tax calculations on invoices
----------------------------

Trigger an API call to calculate taxes on a customer invoice automatically with AvaTax any of the
following ways:

- **Manual trigger**
    Click on :guilabel:`Compute Taxes Using AvaTax`.
- **Preview**
    Click on the :guilabel:`Preview` button.
- **Online invoice access**
    When a customer accesses the invoice online (via the portal view), the API call is triggered.

.. note::
   The :guilabel:`Fiscal Position` must be set to `Automatic Tax Mapping (Avalara Brazil)` for any
   of these actions to compute taxes automatically.

.. seealso::
   :doc:`Fiscal positions (tax and account mapping)
   </applications/finance/accounting/taxes/fiscal_positions>`
