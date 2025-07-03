=============
Multi-company
=============

.. seealso::
   :ref:`Branches <general/companies/branches>`

.. |mcd| replace:: multi-company database

In Odoo, multiple companies can be configured under one database. This allows some data to be shared
among companies while maintaining some separation between entities.

There are several factors to consider before deciding to use the multi-company feature.

.. important::
   Multi-company is **only** available in *One App Free* databases or with `Custom
   <https://www.odoo.com/pricing-plan>`_ plans.

A centralized management environment allows an administrator to select multiple companies
simultaneously and set their specific warehouses, customers, equipment, and contacts. It also
generates reports of aggregated figures without switching interfaces, facilitating daily tasks and
enhancing the overall management process.

.. warning::
   Enabling multi-company functionality in an Odoo database on a *Standard* plan automatically
   triggers an upsell to the *Custom* plan. This does not apply to databases on the *One-App Free*
   plan.

   - **For yearly or multi-year contracts**: An upsell order is created with a 30-day limit.
   - **For monthly contracts**: The subscription automatically switches to the *Custom* plan and
     the new rate is applied when the next bill is generated.

   For more information, refer to `Odoo's pricing page <https://www.odoo.com/pricing-plan>`_ or
   contact your account manager.

.. _general/multi-company/configuration:

Configuration
=============

.. _general/multi-company/configuration-companies:

Companies
---------

Open the Settings app, navigate to the :guilabel:`Companies` section, and click
:icon:`oi-arrow-right` :guilabel:`Manage Companies`. Then, click :guilabel:`New` and :ref:`fill in
the form with the company's information <general/companies/company>` or select a pre-existing
company to edit it.

.. note::
   Alternatively, it is possible to create a company in :menuselection:`Settings --> Users &
   Companies --> Companies`.

.. tip::
   To archive a company, follow these steps:

   #. In the Settings app, navigate to the :guilabel:`Companies` section and click
      :icon:`oi-arrow-right` :guilabel:`Manage Companies`.
   #. In the :guilabel:`Companies` list view, select the company to be archived.
   #. Click the :icon:`fa-cog` :guilabel:`Actions` menu and select :guilabel:`Archive`.
   #. Click :guilabel:`Archive` to confirm.

   To ensure all records related to the archived company are archived, contact Odoo's `Support Team
   <https://www.odoo.com/help>`_. Should a record not be archived, there is a risk of reactivating
   the archived company and creating the upsell again.

.. _general/multi-company/configuration-data:

Data
----

When creating a record, the company associated with it is determined as follows:

- either the currently selected company (highlighted in the company selector at the top-right of the
  screen);
- or no company is set (for example, no company is set on :ref:`products
  <general/multi-company/products>` and :ref:`contacts <general/multi-company/contacts>`);
- or the company linked to the document (as is when editing an existing record).

If multiple companies are activated on the database when editing a record, the edit is performed on
the company associated with that record.

.. example::
   If editing a sale order issued under `JS Store US` while working on the `JS Store Belgium`
   environment, the changes are applied under `JS Store US` (the company from which the sale order
   was issued).

.. _general/multi-company/multi-company-environment:

Multi-company environment
=========================

In a multi-company environment, :ref:`user access
<general/multi-company/accessing-multiple-companies>` is managed carefully, and :ref:`data
<general/multi-company/share-records>` is created or modified based on its intended use within that
structure.

.. _general/multi-company/accessing-multiple-companies:

Access multiple companies
-------------------------

A multi-company environment allows flexible control over :ref:`user access <users/multi-companies>`
and :doc:`access rights <../users/access_rights>` that can be granted or restricted as needed.

To check available access, use :ref:`the list of companies <general/multi-company/switch>` located
at the top-right of the main menu bar.

.. _general/multi-company/switch:

Switch between companies
------------------------

To switch between (or select) multiple companies, follow these steps

#. Click the company name in the top-right corner of the header menu to reveal a list of all allowed
   companies.
#. In the drop-down list, select the checkboxes next to the desired companies to activate them.
#. The highlighted company indicates the current active environment.
#. To switch to another company, click its name from the list of activated companies.

.. example::
   In the example below, the user can access six companies, two of which are activated. The current
   active company is *My Company (San Francisco)*.

   .. image:: multi_company/multi-companies-menu-dashboard.png
      :alt: View of the companies menu through the main dashboard in Odoo.

.. _general/multi-company/share-records:

Share records
-------------

Data (such as products, contacts, and equipment) can be shared or set to be shown for a specific
company only. To do so, on their forms, choose to:

- either leave the field blank to make it accessible to all companies;
- or select the company to make it visible to users logged in to that specific company.

Records specifically linked to a particular company are accessible only within that entity. For
instance, quotations, invoices, and vendor bills associated with a company are visible only when
logged into that company, and the corresponding company is automatically selected by default and
displayed in the :guilabel:`Company` field.

.. _general/multi-company/products:

Products
~~~~~~~~

In a |mcd|, new products are created with the :ref:`Company field
<general/multi-company/share-records>` blank by default. If the field remains blank, the product is
shared across all companies.

.. _general/multi-company/contacts:

Contacts
~~~~~~~~

Similar to :ref:`products <general/multi-company/products>`, contact records are shared across
companies by default. To limit access to a single company, click the :ref:`Company field
<general/multi-company/share-records>` on a contact form and select a company to assign the
contact to.

.. _general/multi-company/inter-company-transactions:

Inter-company transactions
==========================

The :guilabel:`Inter-Company Transactions` feature allows one company in the database to sell or
purchase goods and services from another company within the same database. Depending on the
configuration settings, counterpart documents for orders and invoices can be automatically generated
and synchronized.

.. warning::
   To ensure inter-company transactions are handled appropriately, specific configurations, such as
   :doc:`fiscal positions <../../finance/accounting/taxes/fiscal_positions>` and :doc:`localizations
   <../../finance/fiscal_localizations>`, must be accurately assigned.

To activate inter-company transactions, open the Settings app of the selected
company, navigate to the :guilabel:`Companies` section, enable the :guilabel:`Inter-Company
Transactions`, and :guilabel:`Save`. Then, choose one of the following :guilabel:`Rule` options to
create a counterpart for the selected company:

- :guilabel:`Do not synchronize`: Do not synchronize any inter-company transactions.
- :guilabel:`Synchronized invoice/bills`: Generate a bill/invoice when a company confirms a
  bill/invoice for the selected company.
- :guilabel:`Synchronize Sales Order`: Generate a quotation (drafted sales order) when a sales order
  is confirmed for the selected company. To generate a validated sales order instead of a quotation,
  enable :guilabel:`Automatic Validation`.\*
- :guilabel:`Synchronize Purchase Order`: Generate a request for quotation (drafted purchase order)
  using the selected company warehouse in the :guilabel:`Use Warehouse` field when a purchase order
  is confirmed for the selected company. To generate a validated purchase order instead of a request
  for quotation, enable :guilabel:`Automatic Validation`.\*
- :guilabel:`Synchronize Sales and Purchase Order`: Generate a drafted purchase/sales order using
  the selected company warehouse in the :guilabel:`Use Warehouse` field when a sales/purchase order
  is confirmed for the selected company. To generate a validated purchase/sales order instead of a
  draft one, enable :guilabel:`Automatic Validation`.\*

  \* This rule option needs to be selected for :guilabel:`Automatic Validation` to appear in the
  configuration.

.. note::
   For inter-company transactions, the :ref:`products must be shared
   <general/multi-company/products>` among the involved companies.

.. example::
   :guilabel:`Synchronize invoices/bills`: when an invoice for :guilabel:`Customer` `JS Store US` is
   posted on `JS Store Belgium`, a vendor bill is automatically created in `JS Store US`.

   :guilabel:`Synchronize sales/purchase order`: when a sale order for :guilabel:`Customer` `JS
   Store US` is confirmed on `JS Store Belgium`, a purchase order on `JS Store US` is automatically
   created (and confirmed if the :guilabel:`Automatic Validation` feature was enabled).

.. seealso::
   - :doc:`Multi-company Guidelines <../../../developer/howtos/company>`
   - :doc:`../../finance/accounting/get_started/multi_currency`

.. _general/multi-company/use-cases:

Use cases
=========

.. _general/multi-company/use-cases-multinational-companies:

Multinational companies
-----------------------

A multinational retail chain operating in the United States and Canada must manage transactions in
USD and CAD.

Since each country has its own tax laws and regulations, using Odoo’s multi-company feature is
highly beneficial.

This setup allows for inter-company transactions, which is essential for managing cross-border
inventory transfers. It also simplifies the sales process by enabling customers transactions in
their local currency.

.. _general/multi-company/use-cases-seperate-processes:

Separate processes
------------------

A small furniture company is launching a new product line that requires separate procurement,
inventory, and manufacturing workflows. These new products differ significantly from the existing
catalog. To manage this efficiently, the company is considering using the multi-company feature to
manage the new line as a separate business entity.

However, creating a completely new company might add unnecessary complexity to the database.
Instead, the company can leverage existing features such as :doc:`analytic accounting
<../../finance/accounting/reporting/analytic_accounting>` and multiple warehouses to manage the new
product line without complicating overall operations.

.. _general/multi-company/limitations:

Limitations
===========

In some cases, using a |mcd| may not be ideal due to certain limitations:

.. _general/multi-company/limitations-access-rights:

Access rights
-------------

User access rights are defined at the database level. If a user can access multiple companies within
the same |mcd|, those access rights will apply uniformly across all companies.

.. _general/multi-company/limitations-shared-records:

Shared records
--------------

Some records are either :ref:`shared <general/multi-company/share-records>` across all companies or
assigned to a specific company.

.. _general/multi-company/limitations-pdf-reports:

PDF Reports
-----------

Customizations, made specifically to PDF reports, apply to all companies. It is not always possible
to separate reports for individual companies.
