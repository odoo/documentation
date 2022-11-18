============================
Fiscal localization packages
============================

**Fiscal Localization Packages** are country-specific modules that install pre-configured taxes,
fiscal positions, chart of accounts, and legal statements on your database. Some additional features,
such as the configuration of specific certificates, are also added to your Accounting app, following
your fiscal administration requirements.

.. note::
   Odoo continuously adds new localizations and improves the existing packages.

Configuration
=============

Odoo automatically installs the appropriate package for your company, according to the country
selected at the creation of the database.

.. important::
   As long as you haven't posted any entry, you can still add and select another package.

To install a new package, go to :menuselection:`Accounting --> Configuration --> Fiscal
Localization`, click on **Install More Packages**, and install your country's module.

Once done, select your country's package, and click on *Save*.

.. image:: fiscal_localization_packages/fiscal_localization_packages_selection.png
   :align: center
   :alt: Select your country's fiscal localization package in Odoo Accounting.

Use
===

These packages require you to fine-tune your chart of accounts according to your needs, activate the
taxes you use, and configure your country-specific statements and certifications.

Please refer to the documentation listed below for more information.

.. seealso::
   - :doc:`localizations_list`
   - :doc:`../../getting_started/initial_configuration/chart_of_accounts`
   - :doc:`../../taxation/taxes/taxes`

.. todo:: update list of linked docs, and link with the future one about country-specific statements.
