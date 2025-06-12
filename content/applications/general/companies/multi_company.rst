=============
Multi-company
=============

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

Configuration
=============

Companies
---------

Open the Settings app, navigate to the :guilabel:`Companies` section, and click
:icon:`oi-arrow-right` :guilabel:`Manage Companies`. Then, click :guilabel:`New` and :ref:`fill in
the form with the company's information <general/companies/company>` or select a pre-existing
company to edit it.

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

In multi-company environment, :ref:`user access
<general/multi-company/accessing-multiple-companies>` must be carefully managed and :ref:`data
<general/multi-company/share-records>` should be created or edited based on how must be used in that
structure.

.. _general/multi-company/accessing-multiple-companies:

Access multiple companies
-------------------------

Unlike standalone companies, a multi-company environment allows flexible control over :ref:`user
access <users/multi-companies>` and :doc:`access rights <../users/access_rights>` that can be
granted or restricted as needed.

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
   In the example below, the user has access to six companies, two of which are activated, and the
   current working environment is *My Company (San Francisco)*.

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

The :ref:`Inter-Company Transactions <general/companies/inter-company>` feature allows one
company in the database to sell or purchase goods and services from another company within the same
database. Depending on the configuration settings, counterpart documents for orders and invoices can
be automatically generated and synchronized.

.. warning::
   To ensure :ref:`inter-company transactions <general/companies/inter-company>` are handled
   appropriately, specific configurations, such as :doc:`fiscal positions
   <../../finance/accounting/taxes/fiscal_positions>` and :doc:`localizations
   <../../finance/fiscal_localizations>`, must be accurately assigned.

.. _general/multi-company/use-cases:

Use cases
=========

.. _general/multi-company/use-cases-multinational-companies:

Multinational companies
-----------------------

A multinational retail chain operating in the United States and Canada must manage transactions in
USD and CAD currencies.

Additionally, because both countries have different tax laws and regulations, it is in the
customer's best interest to utilize the multi-company feature.

This allows for inter-company transactions, which is necessary to manage inventory moves across
international borders. It also makes it simple to sell to customers in both countries in their own
currency.

.. _general/multi-company/use-cases-seperate-processes:

Separate processes
------------------

A small furniture company is developing a new product line that requires a separate procurement,
inventory, and manufacturing process. The latest products are drastically different from the
existing catalog. The company is considering utilizing the multi-company feature to treat this new
line as a distinct entity.

The furniture company does not need to add an entirely new company to keep its database from
becoming overly complex. Instead, it can take advantage of existing features, such as :doc:`analytic
accounting <../../finance/accounting/reporting/analytic_accounting>` and multiple warehouses, to
manage the new product line without having to overly complicate transactions.

.. _general/multi-company/limitations:

Limitations
===========

In some instances, a |mcd| may *not* be the best option due to potential limitations.

.. _general/multi-company/limitations-access-rights:

Access rights
-------------

A user's access rights are configured on a database level. If a user has access to multiple
companies in a |mcd|, their access rights are the same across every company.

.. _general/multi-company/limitations-shared-records:

Shared records
--------------

Individual records are :ref:`shared <general/multi-company/share-records>` between all companies or
belong to a single company.

.. _general/multi-company/limitations-pdf-reports:

PDF Reports
-----------

Some customizations, specifically for PDF reports, apply to all companies. It is not always possible
to separate reports for individual companies.
