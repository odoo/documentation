:show-content:

====================
Fiscal localizations
====================

.. _fiscal_localizations/packages:

Fiscal localization packages
============================

**Fiscal Localization Packages** are country-specific modules that install pre-configured taxes,
fiscal positions, chart of accounts, and legal statements on your database. Some additional features,
such as the configuration of specific certificates, are also added to your Accounting app, following
your fiscal administration requirements.

.. note::
   Odoo continuously adds new localizations and improves the existing packages.

Configuration
-------------

Odoo automatically installs the appropriate package for your company, according to the country
selected at the creation of the database.

.. important::
   As long as you haven't posted any entry, you can still add and select another package.

To install a new package, go to :menuselection:`Accounting --> Configuration --> Fiscal
Localization`, click on **Install More Packages**, and install your country's module.

.. image:: fiscal_localizations/packages_modules.png
   :align: center
   :alt: Install the appropriate module as fiscal localization package in Odoo Accounting.

Once done, select your country's package, and click on *Save*.

.. image:: fiscal_localizations/packages_selection.png
   :align: center
   :alt: Select your country's fiscal localization package in Odoo Accounting.

Use
---

These packages require you to fine-tune your chart of accounts according to your needs, activate the
taxes you use, and configure your country-specific statements and certifications.

.. seealso::
   - :doc:`accounting/getting_started/initial_configuration/chart_of_accounts`
   - :doc:`accounting/taxation/taxes/taxes`

.. _fiscal_localizations/countries-list:

List of supported countries
===========================

Odoo Accounting can be used in many countries out of the box by installing the appropriate module.
Here is a list of all :ref:`fiscal localization package <fiscal_localizations/packages>` that are
available on Odoo.

- Algeria - Accounting
- :doc:`Argentina - Accounting <fiscal_localizations/argentina>`
- :doc:`Australian - Accounting <fiscal_localizations/australia>`
- Austria - Accounting
- :doc:`Belgium - Accounting <fiscal_localizations/belgium>`
- Bolivia - Accounting
- Brazilian - Accounting
- Canada - Accounting
- :doc:`Chile - Accounting <fiscal_localizations/chile>`
- China - Accounting
- :doc:`Colombia - Accounting <fiscal_localizations/colombia>` (:doc:`doc in Spanish
  <fiscal_localizations/colombia_ES>`)
- Costa Rica - Accounting
- Croatia - Accounting (RRIF 2012)
- Denmark - Accounting
- Dominican Republic - Accounting
- Ecuador - Accounting
- Ethiopia - Accounting
- Finnish Localization
- :doc:`France - Accounting <fiscal_localizations/france>`
- Generic - Accounting
- :doc:`Germany <fiscal_localizations/germany>`

  - Germany SKR03 - Accounting
  - Germany SKR04 - Accounting

- Greece - Accounting
- Guatemala - Accounting
- Honduras - Accounting
- Hong Kong - Accounting
- Hungarian - Accounting
- Indian - Accounting
- :doc:`Indonesian - Accounting <fiscal_localizations/indonesia>`
- Ireland - Accounting
- Israel - Accounting
- :doc:`Italy - Accounting <fiscal_localizations/italy>`
- Japan - Accounting
- Lithuania - Accounting
- :doc:`Luxembourg - Accounting <fiscal_localizations/luxembourg>`
- Maroc - Accounting
- :doc:`Mexico - Accounting <fiscal_localizations/mexico>`
- Mongolia - Accounting
- :doc:`Netherlands - Accounting <fiscal_localizations/netherlands>`
- New Zealand - Accounting
- Norway - Accounting
- OHADA - Accounting
- Panama - Accounting
- :doc:`Peru - Accounting <fiscal_localizations/peru>`
- Poland - Accounting
- Portugal - Accounting
- Romania - Accounting
- Saudi Arabia - Accounting
- Singapore - Accounting
- Slovak - Accounting
- Slovenian - Accounting
- South Africa - Accounting
- :doc:`Spain - Accounting (PGCE 2008) <fiscal_localizations/spain>`
- Swedish - Accounting
- :doc:`Switzerland - Accounting <fiscal_localizations/switzerland>`
- Thailand - Accounting
- Turkey - Accounting
- U.A.E. - Accounting
- :doc:`UK - Accounting <fiscal_localizations/united_kingdom>`
- Ukraine - Accounting
- United States - Accounting
- Uruguay - Accounting
- Venezuela - Accounting
- Vietnam - Accounting

.. toctree::
   :titlesonly:

   fiscal_localizations/argentina
   fiscal_localizations/australia
   fiscal_localizations/belgium
   fiscal_localizations/chile
   fiscal_localizations/colombia
   fiscal_localizations/colombia_ES
   fiscal_localizations/france
   fiscal_localizations/germany
   fiscal_localizations/indonesia
   fiscal_localizations/italy
   fiscal_localizations/luxembourg
   fiscal_localizations/mexico
   fiscal_localizations/netherlands
   fiscal_localizations/peru
   fiscal_localizations/spain
   fiscal_localizations/switzerland
   fiscal_localizations/united_kingdom
