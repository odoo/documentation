:show-content:

=====================
Payroll localizations
=====================

*Localizations* are country-specific settings preconfigured in Odoo at the creation of the database,
which account for all taxes, fees, and allowances for that particular country.

*Payroll localizations* refer to the specific process of adapting payroll systems, policies, and
compliance measures to align with the specific labor laws, tax regulations, and social security
requirements of a particular country or region.

This ensures that employee salaries, benefits, deductions, and contributions are processed
accurately and in full compliance with local legal and financial obligations.

Localization also includes integrating country-specific payroll elements such as benefits, holidays,
termination rules, and reporting requirements, helping businesses avoid legal risks while ensuring
employees receive their correct compensation.

Install localization package
============================

A country-specific localization module :ref:`must be installed <general/install>` to properly
configure and process payroll. To install the required module, first open the **Apps** app.

Clear out the default :icon:`fa-filter` :guilabel:`Apps` filter, then type the name of the desired
country into the search bar. All available modules for that country are presented.

.. example::
   Some countries only have one localization module, while other have multiple modules. This is
   typically when other software is neede to process payroll, and importing and exporting data is
   required.

   For example. when searching for **Payroll** modules for `Egypt`, the following modules appear in
   the search, and must be installed: `Egypt - Payroll` and `Egypt - Payroll with Accounting`.

   Refer to the :ref:`country-specific documentation <payroll_localizations/countries-list>` for a
   complete list of the related **Payroll** modules required for each specific country.

.. tip::
   To see if any localization modules have been installed on the database, navigate to
   :menuselection:`Payroll app --> Configuration --> Settings`. In the :guilabel:`Settings` page, if
   a localization module was installed, a :guilabel:`(Country) Localization` section appears.

.. warning::
   It is **not** recommended to alter the localization settings, unless specifically required.

.. note::
   Odoo can handle a multi-company configuration. This is generally done when there is a main
   company or office location, such as a headquarters, and there are other offices/branches around
   the country or globe, that fall under that main company or headquarters. In Odoo, each company,
   including the headquarters, must be set up as their own company/branch using the multi-company
   method.

   Each individual company can have a different localization setting, since locations can vary
   anywhere in the world, where rules and laws differ.

   For more information on companies, refer to the :doc:`Companies <../../general/companies>`
   documentation, which covers how to set up companies.

.. _payroll_localizations/countries-list:

List of countries
=================

Payroll localization modules are available for the countries listed below.

.. note::
   New countries are frequently added to this list, as Odoo keeps expanding and improving existing
   localizations and related documentation.

- :doc:`Australia <payroll_localizations/australia>`
- :doc:`Belgium <payroll_localizations/belgium>`
- Bangladesh
- :doc:`Egypt <payroll_localizations/egypt>`
- :doc:`Hong Kong <payroll_localizations/hong_kong>`
- India
- Indonesia
- :doc:`Jordan <payroll_localizations/jordan>`
- Kenya
- Lithuania
- Luxembourg
- Malaysia
- :doc:`Mexico <payroll_localizations/mexico>`
- Morocco
- Netherlands
- Pakistan
- Poland
- Romania
- :doc:`Saudi Arabia <payroll_localizations/saudi_arabia>`
- Slovakia
- Switzerland
- :doc:`Türkiye <payroll_localizations/turkey>`
- :doc:`United Arab Emirates <payroll_localizations/united_arab_emirates>`
- :doc:`United States <payroll_localizations/united_states>`

.. toctree::
   :titlesonly:

   payroll_localizations/australia
   payroll_localizations/belgium
   payroll_localizations/egypt
   payroll_localizations/hong_kong
   payroll_localizations/jordan
   payroll_localizations/mexico
   payroll_localizations/saudi_arabia
   payroll_localizations/turkey
   payroll_localizations/united_arab_emirates
   payroll_localizations/united_states
   payroll_localizations/employment_hero
