:show-content:

====================
Fiscal localizations
====================

Fiscal localizations are country-specific modules that allow you to be compliant with a country's
fiscal requirements. Most of these modules are related to the :ref:`Accounting
<fiscal_localizations/accounting>` or :ref:`Payroll <fiscal_localizations/payroll>` app, but they
can also be necessary for other apps such as Point of Sale, eCommerce, etc., depending on a
country's fiscal requirements.

.. _fiscal_localizations/packages:

Configuration
=============

Odoo should automatically install the required fiscal localization modules based on the company's
country when the related app is installed. Refer to the :ref:`list of countries
<fiscal_localizations/countries-list>` to view the currently supported countries and access their
specific documentation.

.. note::
   Each company in a multi-company environment can use different fiscal localization modules.

.. _fiscal_localizations/accounting:

Accounting
----------

Verify the right package of modules is installed by going to :menuselection:`Accounting -->
Configuration --> Settings` and checking the :guilabel:`Package` field under the :guilabel:`Fiscal
Localization` section. Select another one if necessary.

.. warning::
   Selecting another package is only possible if no entry has been posted.

These packages require fine-tuning the chart of accounts, activating the taxes to be used,
configuring the country-specific statements and certifications, and sometimes more.

.. _fiscal_localizations/payroll:

Payroll
-------

Localization settings can be accessed by going to :menuselection:`Payroll --> Configuration -->
Settings` and searching for the country's **Localization** section.

.. _fiscal_localizations/countries-list:

List of countries
=================

Fiscal localization modules are available for the countries listed below.

.. note::
   New countries are frequently added to this list and Odoo keeps expanding and improving existing
   localizations and the related documentation.

- Algeria
- :doc:`Argentina <fiscal_localizations/argentina>`
- :doc:`Australia <fiscal_localizations/australia>`
- :doc:`Austria <fiscal_localizations/austria>`
- Bangladesh
- :doc:`Belgium <fiscal_localizations/belgium>`
- Benin
- Bolivia
- :doc:`Brazil <fiscal_localizations/brazil>`
- Burkina Faso
- Bulgaria
- Cameroon
- :doc:`Canada <fiscal_localizations/canada>`
- Central African Republic
- Chad
- :doc:`Chile <fiscal_localizations/chile>`
- China
- :doc:`Colombia <fiscal_localizations/colombia>`
- Comoros
- Congo
- Costa Rica
- Croatia
- Cyprus
- Czech Republic
- Democratic Republic of the Congo
- Denmark
- Dominican Republic
- :doc:`Ecuador <fiscal_localizations/ecuador>`
- :doc:`Egypt <fiscal_localizations/egypt>`
- Equatorial Guinea
- Estonia
- Ethiopia
- Finland
- :doc:`France <fiscal_localizations/france>`
- Gabon
- :doc:`Germany <fiscal_localizations/germany>`
- Guinea
- Greece
- Guatemala
- Guinea-Bissau
- Honduras
- :doc:`Hong Kong <fiscal_localizations/hong_kong>`
- Hungary
- :doc:`India <fiscal_localizations/india>`
- :doc:`Indonesia <fiscal_localizations/indonesia>`
- :doc:`Italy <fiscal_localizations/italy>`
- Ivory Coast
- Japan
- Jordan
- Kazakhstan
- :doc:`Kenya <fiscal_localizations/kenya>`
- Kuwait
- Latvia
- Lithuania
- :doc:`Luxembourg <fiscal_localizations/luxembourg>`
- Mali
- Malta
- Mauritius
- :doc:`Malaysia <fiscal_localizations/malaysia>`
- :doc:`Mexico <fiscal_localizations/mexico>`
- Mongolia
- Morocco
- Mozambique
- :doc:`Netherlands <fiscal_localizations/netherlands>`
- :doc:`New Zealand <fiscal_localizations/new_zealand>`
- Niger
- Nigeria
- Norway
- Pakistan
- Panama
- :doc:`Peru <fiscal_localizations/peru>`
- :doc:`Philippines <fiscal_localizations/philippines>`
- Poland
- Portugal
- Qatar
- :doc:`Romania <fiscal_localizations/romania>`
- Rwanda
- :doc:`Saudi Arabia <fiscal_localizations/saudi_arabia>`
- Senegal
- Serbia
- :doc:`Singapore <fiscal_localizations/singapore>`
- Slovakia
- Slovenia
- South Africa
- :doc:`Spain <fiscal_localizations/spain>`
- Sweden
- :doc:`Switzerland <fiscal_localizations/switzerland>`
- Taiwan
- Tanzania
- :doc:`Thailand <fiscal_localizations/thailand>`
- Tunisia
- Türkiye
- Uganda
- Ukraine
- :doc:`United Arab Emirates <fiscal_localizations/united_arab_emirates>`
- :doc:`United Kingdom <fiscal_localizations/united_kingdom>`
- :doc:`United States of America <fiscal_localizations/united_states>`
- :doc:`Uruguay <fiscal_localizations/uruguay>`
- Venezuela
- :doc:`Vietnam <fiscal_localizations/vietnam>`
- Zambia

<<<<<<< 18.0
.. seealso::
   :doc:`Employment Hero Payroll documentation <fiscal_localizations/employment_hero>`
||||||| 062b4c80049afae61129d24f7920975756999d0b
  - Germany SKR03 - Accounting
  - Germany SKR04 - Accounting

- Greece - Accounting
- Guatemala - Accounting
- Honduras - Accounting
- :doc:`Hong Kong - Accounting <fiscal_localizations/hong_kong>`
- Hungarian - Accounting
- :doc:`Indian - Accounting <fiscal_localizations/india>`
- :doc:`Indonesian - Accounting <fiscal_localizations/indonesia>`
- Ireland - Accounting
- Israel - Accounting
- :doc:`Italy - Accounting <fiscal_localizations/italy>`
- Japan - Accounting
- :doc:`Kenya - Accounting <fiscal_localizations/kenya>`
- Lithuania - Accounting
- :doc:`Luxembourg - Accounting <fiscal_localizations/luxembourg>`
- :doc:`Malaysia - Accounting <fiscal_localizations/malaysia>`
- Maroc - Accounting
- :doc:`Mexico - Accounting <fiscal_localizations/mexico>`
- Mongolia - Accounting
- :doc:`Netherlands - Accounting <fiscal_localizations/netherlands>`
- New Zealand - Accounting
- Norway - Accounting
- OHADA - Accounting
- Pakistan - Accounting
- Panama - Accounting
- :doc:`Peru - Accounting <fiscal_localizations/peru>`
- :doc:`Philippines - Accounting <fiscal_localizations/philippines>`
- Poland - Accounting
- Portugal - Accounting
- :doc:`Romania - Accounting <fiscal_localizations/romania>`
- :doc:`Saudi Arabia - Accounting <fiscal_localizations/saudi_arabia>`
- :doc:`Singapore - Accounting <fiscal_localizations/singapore>`
- Slovak - Accounting
- Slovenian - Accounting
- South Africa - Accounting
- :doc:`Spain - Accounting (PGCE 2008) <fiscal_localizations/spain>`
- Sweden - Accounting
- :doc:`Switzerland - Accounting <fiscal_localizations/switzerland>`
- Taiwan - Accounting
- :doc:`Thailand - Accounting <fiscal_localizations/thailand>`
- Turkey - Accounting
- :doc:`United Arab Emirates - Accounting <fiscal_localizations/united_arab_emirates>`
- :doc:`UK - Accounting <fiscal_localizations/united_kingdom>`
- Ukraine - Accounting
- :doc:`United States - Accounting <fiscal_localizations/united_states>`
- :doc:`Uruguay - Accounting <fiscal_localizations/uruguay>`
- Venezuela - Accounting
- :doc:`Vietnam - Accounting <fiscal_localizations/vietnam>`
=======
  - Germany SKR03 - Accounting
  - Germany SKR04 - Accounting

- Greece - Accounting
- Guatemala - Accounting
- Honduras - Accounting
- :doc:`Hong Kong - Accounting <fiscal_localizations/hong_kong>`
- Hungarian - Accounting
- :doc:`Indian - Accounting <fiscal_localizations/india>`
- :doc:`Indonesian - Accounting <fiscal_localizations/indonesia>`
- Ireland - Accounting
- Israel - Accounting
- :doc:`Italy - Accounting <fiscal_localizations/italy>`
- Japan - Accounting
- :doc:`Jordan - Accounting <fiscal_localizations/jordan>`
- :doc:`Kenya - Accounting <fiscal_localizations/kenya>`
- Lithuania - Accounting
- :doc:`Luxembourg - Accounting <fiscal_localizations/luxembourg>`
- :doc:`Malaysia - Accounting <fiscal_localizations/malaysia>`
- Maroc - Accounting
- :doc:`Mexico - Accounting <fiscal_localizations/mexico>`
- Mongolia - Accounting
- :doc:`Netherlands - Accounting <fiscal_localizations/netherlands>`
- New Zealand - Accounting
- Norway - Accounting
- OHADA - Accounting
- Pakistan - Accounting
- Panama - Accounting
- :doc:`Peru - Accounting <fiscal_localizations/peru>`
- :doc:`Philippines - Accounting <fiscal_localizations/philippines>`
- Poland - Accounting
- Portugal - Accounting
- :doc:`Romania - Accounting <fiscal_localizations/romania>`
- :doc:`Saudi Arabia - Accounting <fiscal_localizations/saudi_arabia>`
- :doc:`Singapore - Accounting <fiscal_localizations/singapore>`
- Slovak - Accounting
- Slovenian - Accounting
- South Africa - Accounting
- :doc:`Spain - Accounting (PGCE 2008) <fiscal_localizations/spain>`
- Sweden - Accounting
- :doc:`Switzerland - Accounting <fiscal_localizations/switzerland>`
- Taiwan - Accounting
- :doc:`Thailand - Accounting <fiscal_localizations/thailand>`
- Turkey - Accounting
- :doc:`United Arab Emirates - Accounting <fiscal_localizations/united_arab_emirates>`
- :doc:`UK - Accounting <fiscal_localizations/united_kingdom>`
- Ukraine - Accounting
- :doc:`United States - Accounting <fiscal_localizations/united_states>`
- :doc:`Uruguay - Accounting <fiscal_localizations/uruguay>`
- Venezuela - Accounting
- :doc:`Vietnam - Accounting <fiscal_localizations/vietnam>`
>>>>>>> c749ee1e7d05bbc0b9d558d3514f6913d9f92e51

.. toctree::
   :titlesonly:

   fiscal_localizations/argentina
   fiscal_localizations/australia
   fiscal_localizations/austria
   fiscal_localizations/belgium
   fiscal_localizations/brazil
   fiscal_localizations/canada
   fiscal_localizations/chile
   fiscal_localizations/colombia
   fiscal_localizations/ecuador
   fiscal_localizations/egypt
   fiscal_localizations/france
   fiscal_localizations/germany
   fiscal_localizations/hong_kong
   fiscal_localizations/india
   fiscal_localizations/indonesia
   fiscal_localizations/italy
   fiscal_localizations/jordan
   fiscal_localizations/kenya
   fiscal_localizations/luxembourg
   fiscal_localizations/malaysia
   fiscal_localizations/mexico
   fiscal_localizations/netherlands
   fiscal_localizations/new_zealand
   fiscal_localizations/peru
   fiscal_localizations/philippines
   fiscal_localizations/romania
   fiscal_localizations/saudi_arabia
   fiscal_localizations/singapore
   fiscal_localizations/spain
   fiscal_localizations/switzerland
   fiscal_localizations/thailand
   fiscal_localizations/united_arab_emirates
   fiscal_localizations/united_kingdom
   fiscal_localizations/united_states
   fiscal_localizations/uruguay
   fiscal_localizations/vietnam
   fiscal_localizations/employment_hero
