==========
Uzbekistan
==========

.. |IFRS| replace:: :abbr:`IFRS (international financial reporting standards)`

.. _localizations/uz/modules:

Modules
=======

The following modules are installed automatically with the Uzbek localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - Uzbekistan - Accounting
     - l10n_uz
     - Default fiscal localization package for Uzbekistan. Includes the chart of accounts and core
       accounting configuration aligned with local requirements.
   * - Uzbekistan - Accounting Reports
     - l10n_uz_reports
     - Provides localized financial reports, including the balance sheet and profit and loss
       statement based on an |IFRS|-style structure.

.. _localizations/uz/overview:

Localization overview
=====================

The Uzbekistan localization assists companies in meeting local accounting requirements by providing
a structured and compliant accounting setup. It contains the following core components:

- :ref:`Taxes <localizations/uz/taxes>`: preconfigured tax rates, including standard 12% VAT,
  zero-rated export, and exempt options
- :ref:`Chart of accounts <localizations/uz/coa>`: preconfigured structure aligned with Uzbek
  standards
- :ref:`Financial reports <localizations/uz/taxes>`: |IFRS|-style balance sheet and
  profit and loss reports with a tag-based linking of accounts to report lines

.. _localizations/uz/taxes:

Taxes
-----

The Uzbek localization includes preconfigured sales and purchase taxes:

- **Standard VAT (12%):** This standard VAT is applied to most goods and services. The supplier
  charges 12% VAT on the sale (VAT output) and is generally entitled to deduct the VAT
  paid on business purchases (VAT input).

  .. example::
     Most commercial sales and general supply of goods and services within Uzbekistan use the
     **Standard VAT (12%)** tax.

- **Export VAT (0%):** The export tax is applied on taxable supplies where the VAT rate applied is
  0%. The supplier does not charge VAT on the sale.

  .. example::
     Exports of goods and services to customers outside Uzbekistan use the **Export VAT (0%)** tax.

- **Exempt transactions (0%):** The exempt tax applies to transactions that fall outside the scope
  of VAT and are not subject to tax.

  .. example::
     Transactions that are legally exempt from VAT under local regulations, such as essential food
     products (meat, fish, potatoes, rice), pharmaceuticals, and financial/insurance services, use
     the **Exempt transactions (0%)** tax.

.. _localizations/uz/coa:

Chart of accounts
-----------------

The Uzbek :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>` is preconfigured
according to Uzbek accounting standards and requirements. When :ref:`creating new accounts
<chart-of-account/create>`, it is important to use :ref:`account tags <localizations/uz/tags>`.

.. _localizations/uz/tags:

Account tags
~~~~~~~~~~~~

The Uzbek localization uses account tags to determine where accounts appear in :ref:`financial
reports <localizations/uz/financial-reports>`. Each tag links the account to a specific report line.

.. example::
   Accounts that use the tag :guilabel:`BS Line 0120: Right-of-Use Assets` appear on the balance
   sheet on the :guilabel:`[0120] - Right-of-Use Assets` line.

.. important::
   If no tag is assigned, the account behaves as an off-balance sheet account and does not appear on
   the balance sheet or the profit and loss statement.

.. _localizations/uz/financial-reports:

Financial reports
-----------------

The following reports have been tailored to meet the needs of businesses using the Uzbek
localization:

- Balance sheet
- Profit and loss statement

These reports follow an |IFRS|-style structure, as per the Uzbek reporting requirements. They are
built using a :ref:`tag <localizations/uz/tags>`-based mapping system:

- Each account is assigned a tag.
- Tags correspond to specific lines in the reports.
- Report values are calculated for each line by aggregating the journal items of the accounts with
  the line's corresponding account tag.
