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

.. _payroll_localizations/countries-list:

List of countries
=================

Payroll localization modules are available for the countries listed below.

.. cards::

   .. card:: Australia
      :target: payroll_localizations/australia
      :image: payroll_localizations/au.png
      :alt: Australia

      Payroll localization

   .. card:: Bangladesh
      :target: payroll_localizations
      :image: payroll_localizations/bd.png
      :alt: Bangladesh

      Payroll localization

   .. card:: Belgium
      :target: payroll_localizations/belgium
      :image: payroll_localizations/be.png
      :alt: Belgium

      Payroll localization

   .. card:: Egypt
      :target: payroll_localizations/egypt
      :image: payroll_localizations/eg.png
      :alt: Egypt

      Payroll localization

   .. card:: Hong Kong
      :target: payroll_localizations/hong_kong
      :image: payroll_localizations/hk.png
      :alt: Hong Kong

      Payroll localization

   .. card:: India
      :target: payroll_localizations/india
      :image: payroll_localizations/in.png
      :alt: India

      Payroll localization

   .. card:: Indonesia
      :target: payroll_localizations
      :image: payroll_localizations/id.png
      :alt: Indonesia

      Payroll localization

   .. card:: Jordan
      :target: payroll_localizations/jordan
      :image: payroll_localizations/jo.png
      :alt: Jordan

      Payroll localization

   .. card:: Kenya
      :target: payroll_localizations/kenya
      :image: payroll_localizations/ke.png
      :alt: Kenya

      Payroll localization

   .. card:: Lithuania
      :target: payroll_localizations
      :image: payroll_localizations/li.png
      :alt: Lithuania

      Payroll localization

   .. card:: Luxembourg
      :target: payroll_localizations
      :image: payroll_localizations/lu.png
      :alt: Luxembourg

      Payroll localization

   .. card:: Mexico
      :target: payroll_localizations/mexico
      :image: payroll_localizations/mx.png
      :alt: Mexico

      Payroll localization

   .. card:: Morocco
      :target: payroll_localizations
      :image: payroll_localizations/mo.png
      :alt: Morocco

      Payroll localization

   .. card:: Netherlands
      :target: payroll_localizations
      :image: payroll_localizations/nl.png
      :alt: Netherlands

      Payroll localization

   .. card:: Pakistan
      :target: payroll_localizations
      :image: payroll_localizations/pk.png
      :alt: Pakistan

      Payroll localization

   .. card:: Poland
      :target: payroll_localizations
      :image: payroll_localizations/po.png
      :alt: Poland

      Payroll localization

   .. card:: Romania
      :target: payroll_localizations
      :image: payroll_localizations/rm.png
      :alt: Romania

      Payroll localization

   .. card:: Saudi Arabia
      :target: payroll_localizations/saudi_arabia
      :image: payroll_localizations/sa.png
      :alt: Saudi Arabia

      Payroll localization

   .. card:: Slovakia
      :target: payroll_localizations
      :image: payroll_localizations/sk.png
      :alt: Slovakia

      Payroll localization

   .. card:: Switzerland
      :target: payroll_localizations
      :image: payroll_localizations/sw.png
      :alt: Switzerland

      Payroll localization

   .. card:: Türkiye
      :target: payroll_localizations/turkey
      :image: payroll_localizations/tk.png
      :alt: Türkiye

      Payroll localization

   .. card:: United Arab Emirates
      :target: payroll_localizations/united_arab_emirates
      :image: payroll_localizations/ae.png
      :alt: United Arab Emirates

      Payroll localization

   .. card:: United States
      :target: payroll_localizations/united_states
      :image: payroll_localizations/us.png
      :alt: United States

      Payroll localization

.. note::
   New countries are frequently added to this list, as Odoo keeps expanding and improving existing
   localizations and related documentation.

Install localization package
============================

A country-specific localization module :ref:`must be installed <general/install>` to configure and
process payroll properly. To install the required module, first open the **Apps** app. Clear out the
default :icon:`fa-filter` :guilabel:`Apps` filter, then type the name of the desired country into
the search bar. All available modules for that country are presented.

Some countries only have one localization module, while others have multiple modules. This is
typically when other software is needed to process payroll, and importing and exporting data is
required. For example, when searching for **Payroll** modules for `Egypt`, the following modules
appear in the search, and must be installed: `Egypt - Payroll` and `Egypt - Payroll with
Accounting`.

Refer to the :ref:`country-specific documentation <payroll_localizations/countries-list>` for a
complete list of the related **Payroll** modules required for each specific country.

Odoo can handle a multi-company configuration. This is generally done when there is a main company
or office location, such as a headquarters, and other offices/branches around the country or the
globe that fall under that main company or headquarters. In Odoo, each company, including the
headquarters, must be set up as its own company/branch using the multi-company method.

Each company can have a different localization setting, since locations can vary worldwide, where
rules and laws differ.

For more information on companies, refer to the :doc:`Companies <../../general/companies>`
documentation, which covers how to set up companies.

.. tip::
   To see if any localization modules have been installed on the database, navigate to
   :menuselection:`Payroll app --> Configuration --> Settings`. In the :guilabel:`Settings` page, if
   a localization module was installed, a :guilabel:`(Country) Localization` section appears.

.. warning::
   It is **not** recommended to alter the localization settings, unless specifically required.

.. toctree::
   :titlesonly:

   payroll_localizations/australia
   payroll_localizations/belgium
   payroll_localizations/egypt
   payroll_localizations/hong_kong
   payroll_localizations/india
   payroll_localizations/jordan
   payroll_localizations/kenya
   payroll_localizations/mexico
   payroll_localizations/saudi_arabia
   payroll_localizations/turkey
   payroll_localizations/united_arab_emirates
   payroll_localizations/united_states
   payroll_localizations/employment_hero
