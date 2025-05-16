:show-content:

=========
Companies
=========

In Odoo, a company is an individual business entity that operates independently, with its own legal
identity, financial records, and specific operational settings.

.. seealso::
   - :ref:`general/companies/branches`
   - :doc:`Multi-company <companies/multi_company>`

.. _general/companies/configuration:

Configuration
=============

To set up a company, follow these steps:

#. :ref:`Configure the company details <general/companies/company>`.
#. :ref:`Manage users and their access rights <general/companies/users>`.
#. :ref:`Customize the document layout <general/companies/document-layout>`.

.. _general/companies/company:

Company
-------

To create a company, open the Settings app, navigate to the :guilabel:`Companies` section, and click
:icon:`oi-arrow-right` :guilabel:`Manage Companies`. In the :guilabel:`Companies` list view, click
:guilabel:`New` and configure the following fields:

- :guilabel:`Company Name`
- :guilabel:`Address`
- :guilabel:`Tax ID`: tax identification number.
- :guilabel:`LEI`: legal entity identifier.
- :guilabel:`Company ID`: company's registry number, if different from :guilabel:`Tax ID`
- :ref:`Currency <multi-currency/config-main-currency>`
- :guilabel:`Phone` and :guilabel:`Mobile`
- :guilabel:`Email`
- :guilabel:`Website`
- :guilabel:`Email Domain`
- :guilabel:`Color`

Upload the company's logo and :guilabel:`Save`.

.. note::
   - Alternatively, it is possible to create a company in :menuselection:`Settings --> Users &
     Companies --> Companies`
   - Company's :guilabel:`General information` may vary based on the :doc:`fiscal localization
     <../finance/fiscal_localizations>`.

.. _general/companies/users:

Users
-----

After setting up a company, add :doc:`users <users>` and configure their :ref:`access
<users/add-individual>` and :doc:`access rights <users/access_rights>`.

.. seealso::
   :ref:`Users in multi-company environment <users/multi-companies>`

.. _general/companies/document-layout:

Document layout
---------------

Configure the :ref:`default layout <studio/pdf-reports/default-layout>` for all company documents.

.. _general/companies/branches:

Branches
========

Branches represent subdivisions within a company, such as regional offices or departments, that
operate under a common parent company. They support hierarchical company structures through
:ref:`configurable settings <general/companies/branches/configuration>`, enabling
:ref:`comprehensive or branch-specific views <general/companies/branches/consolidated-view>` with
flexible :ref:`access control <general/companies/branches/user-access>`, :ref:`entity-specific or
shared record visibility <general/companies/branches/shared-records>`, and customizable
:ref:`reporting <general/companies/branches/reporting>`.

.. note::
   - Independent subsidiaries should be created as additional companies, not branches.
   - The parent company and all branches must be located in the same country to ensure accounting
     consistency.

.. seealso::
   - :doc:`Multi-company </applications/general/companies/multi_company>`
   - :ref:`Branches accounting <accounting/branches>`

.. _general/companies/branches/configuration:

Configuration
-------------

Each branch is linked to its parent company but may contain different or specific information, such
as its address or logo. A branch can be a parent company of branches at a lower level to create a
multi-level architecture.

.. important::
   - Clarify the company's structure and hierarchy before creating companies and branches in Odoo. A
     company defined as a parent cannot be converted into a branch later, as doing so may result in
     :doc:`access rights <users/access_rights>` issues.
   - Always create the parent company first.

To create a branch, follow these steps in the Settings app:

#. Navigate to the :guilabel:`Companies` section, click :icon:`oi-arrow-right` :guilabel:`Manage
   Companies`, or go to :menuselection:`Settings --> Users & Companies --> Companies`.
#. In the :guilabel:`Companies` list view, open the desired parent company form.
#. In the :guilabel:`Branches` tab, click :guilabel:`Add a line` and fill in the :guilabel:`Create
   Branches` window :ref:`information <general/companies/company>`.

To create branches from a branch and create a multi-level architecture, click :guilabel:`Add a line`
in the new branch's :guilabel:`Branches` tab.

.. tip::
   Activate the :ref:`developer mode <developer-mode>` to set :doc:`social media accounts
   <../marketing/social_marketing>` and company-specific :doc:`email <email_communication>` system
   parameters.

.. warning::
   Adding a branch to a :doc:`company <../general/companies>` enables multi-company functions.

.. _general/companies/branches/consolidated-view:

Comprehensive or branch-specific view
-------------------------------------

.. note::
   - Switching between branches is like :ref:`switching between companies
     <general/multi-company/switch>`.
   - Selecting the parent company automatically links all its branches, while selecting only one
     branch connects to that branch.

:ref:`Accessing <general/multi-company/accessing-multiple-companies>` the parent company
automatically connects all associated branches by default.

Except for :ref:`accounting <accounting/branches>` settings inherited from the parent company, other
configurations must be created or adjusted individually in each branch. This allows for
branch-specific setups such as :doc:`loyalty programs <../sales/point_of_sale/pricing/loyalty>`,
:doc:`price lists <../sales/point_of_sale/pricing/pricelists>`, or :doc:`inventory locations
<../inventory_and_mrp/inventory/warehouses_storage/inventory_management/use_locations>`.

.. _general/companies/branches/user-access:

User Access
~~~~~~~~~~~

Like in a multi-company environment, parent companies and branches support flexible :ref:`user
access <users/multi-companies>` control and :doc:`access rights <users/access_rights>`. User access
can be granted or restricted at the parent company level, the branch level, or both. For example, a
user can be limited to a specific shop (branch), while an administrator with access to the parent
company can manage all associated shops (branches).

.. _general/companies/branches/shared-records:

Shared records
~~~~~~~~~~~~~~

In Odoo, some records are, by default, either specific to a single entity or shared across the
parent company and all its branches.

When creating a quotation, invoice, or vendor bill, the active company or branch is automatically
selected and displayed in the :guilabel:`Company` field. If the active company is the parent company
or one of its branches, then records specifically linked to that entity, whether the parent or a
branch, are accessible only within that entity and will only be visible when it's the active
company.

In contrast, some records, such as :ref:`products <general/multi-company/products>` or
:ref:`contacts <general/multi-company/contacts>`, are not tied to any particular entity and are
shared by default across the parent company and all its branches. However, they can be restricted to
a single entity by setting the appropriate value in the :guilabel:`Company` field, if needed.

.. seealso::
   :ref:`Branches accounting <accounting/branches>`

.. _general/companies/branches/reporting:

Reporting
~~~~~~~~~

All :doc:`reports <../finance/accounting/reporting>` can be generated for the parent company alone
or with its branches based on :ref:`user access
<general/multi-company/accessing-multiple-companies>`.

.. toctree::
   :titlesonly:

   companies/multi_company
   companies/digest_emails
   companies/email_template
