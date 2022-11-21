
=======================
Accounting localization
=======================

.. warning::

    This tutorial requires knowledge about how to build a module in Odoo (see
    :doc:`/developer/howtos/backend`).


Installation procedure
======================

On installing the `account <{GITHUB_PATH}/addons/account>`_ module, the localization module corresponding to the country code of the company is installed automatically.
In case of no country code set or no localization module found, the `l10n_generic_coa <{GITHUB_PATH}/addons/l10n_generic_coa>`_ (US) localization module is installed by default.
Check `post init hook <{GITHUB_PATH}/addons/account/__init__.py>`_ for details.

For example, `l10n_ch <{GITHUB_PATH}/addons/l10n_ch>`_ will be installed if the company has ``Switzerland`` as country.

Building a localization module
==============================

The structure of a basic ``l10n_XX`` module may be described with the following :file:`__manifest__.py` file:

.. code-block:: python

    {
        "name": "COUNTRY - Accounting",
        "version": "1.0.0",
        "category": "Accounting/Localizations/Account Charts",
        "license": "LGPL-3",
        "depends": [
            "account",
            # "l10n_multilang",
        ],
        "data": [
            # Chart of Accounts
            "data/account_chart_template_data.xml",
            "data/account_account_tag_data.xml",
            "data/account.account.template.csv",
            "data/account.group.template.csv",

            # Taxes
            "data/account_tax_group_data.xml",
            "data/account_tax_report_data.xml",
            "data/account_tax_template_data.xml",
            "data/account_fiscal_position_template_data.xml",
            "data/account_account_template_post_data.xml",

            "data/account_chart_post_data.xml",
            "data/account_chart_template_try_loading.xml",

            # Views and others
            "views/xxxmodel_views.xml"
        ],
        "demo": [
            "demo/demo_company.xml",
        ]
    }


In the first file :file:`data/account_chart_template_data.xml`, we set the name for the chart of accounts along with some basic fields.

.. seealso::
   :ref:`Chart Template References <reference/account_chart_template>`

.. example::
  `addons/l10n_ch/data/l10n_ch_chart_data.xml <{GITHUB_PATH}/addons/l10n_ch/data/l10n_ch_chart_data.xml>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_ch/data/l10n_ch_chart_data.xml
    :condition: odoo_dir_in_path
    :language: xml
    :start-at: l10nch_chart_template
    :end-at: </record>


.. note::

  Recommended **xmlid** for the record is `chart_template`.
  If you need many chart of accounts, you can add some suffixes, i.e. `chart_template_XXX`.


Chart of Accounts
=================

Account tags
------------

.. seealso::
   :ref:`Account Tag References <reference/account_account_tag>`

Tags are a way to sort accounts.
For example, imagine you want to create a financial report having multiple lines but you have no way to find a rule to dispatch the accounts according to their ``code``.
The solution is the usage of tags, one for each report line, to filter accounts like you want.

Put the tags in the :file:`data/account_account_tag_data.xml` file.

.. example::
  `addons/l10n_lt/data/account.account.template.csv <{GITHUB_PATH}/addons/l10n_lt/data/account.account.template.csv>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_lt/data/account.account.template.csv
    :condition: odoo_dir_in_path
    :language: csv
    :end-at: account_account_template_1201

.. example::
  `addons/l10n_at/data/account_account_template.xml <{GITHUB_PATH}/addons/l10n_at/data/account_account_template.xml>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_at/data/account_account_template.xml
    :condition: odoo_dir_in_path
    :language: xml
    :start-at: chart_at_template_0010
    :end-at: </record>

.. _howtos/account_localization/accounts:

Accounts
--------

.. seealso::
   - :ref:`Account References <reference/account_account>`
   - :doc:`/applications/finance/accounting/getting_started/initial_configuration/chart_of_accounts`

Obviously, :guilabel:`Chart of Accounts` cannot exist without :guilabel:`Accounts`. You need to specify them in :file:`data/account.account.template.csv`.

.. example::
  `addons/l10n_ch/data/account.account.template.csv <{GITHUB_PATH}/addons/l10n_ch/data/account.account.template.csv>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_ch/data/account.account.template.csv
    :condition: odoo_dir_in_path
    :language: csv
    :end-at: ch_coa_1171

CSV is prefered but you may use XML format instead.

.. example::
  `addons/l10n_at/data/account_account_template.xml <{GITHUB_PATH}/addons/l10n_at/data/account_account_template.xml>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_at/data/account_account_template.xml
    :condition: odoo_dir_in_path
    :language: xml
    :start-at: chart_at_template_0010
    :end-at: </record>

.. warning::

    - Avoid the usage of liquidity ``account.account.type``!
      Indeed, the bank & cash accounts are created directly at the installation of the localization module and then, are linked to an ``account.journal``.
    - Only one account of type payable/receivable is enough for the generic case.  We need to define a PoS receivable account as well however. (linked in the CoA)
    - Don't create too many accounts: 200-300 is enough. But mostly, we try to find a good balance where the CoA needs minimal adapting for most companies afterwards.

Next settings for the chart of accounts are set in a separate file, because we need to provide a :ref:`list of accounts <howtos/account_localization/accounts>` first. In :file:`data/account_chart_post_data.xml`, we set some default accounts:

.. todo add reference to account_id in CoA

.. example::
  `addons/l10n_ch/data/l10n_ch_chart_post_data.xml <{GITHUB_PATH}/addons/l10n_ch/data/l10n_ch_chart_post_data.xml>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_ch/data/l10n_ch_chart_post_data.xml
    :condition: odoo_dir_in_path
    :language: xml
    :start-at: l10nch_chart_template
    :end-at: </record>


Account groups
--------------

.. seealso::
   :ref:`Account Group References <reference/account_group>`

Account groups allow describing the hierarchical structure of the chart of accounts. The filter needs to be activated in the report and then when you decollapse into journal entries it will show the parents of the account.

It works with the prefix *start*/*end*, so every account where the code starts with something between *start* and *end* will have this account.group as the parent group.  Furthermore, the account groups can have a parent account group as well to form the hierarchy.


.. example::
  `addons/l10n_il/data/account.group.template.csv <{GITHUB_PATH}/addons/l10n_il/data/account.group.template.csv>`_

  .. csv-table::
     :condition: odoo_dir_in_path
     :file: {ODOO_RELPATH}/addons/l10n_il/data/account.group.template.csv
     :widths: 20,20,20,20,20
     :header-rows: 1

Taxes
-----

.. seealso::
   - :ref:`Tax References <reference/account_tax>`
   - :doc:`/applications/finance/accounting/taxation/taxes/taxes`

To add taxes you first need to specify tax groups. You normally need just one tax group for every tax rate, except for the 0% as you need to often distinguish between exempt, 0%, not subject, ... taxes.
This model only has two required fields: *name* and *country*. Create the file :file:`data/account_tax_group_data.xml` and list the groups:

.. code-block:: xml

    <odoo>
        <data noupdate="1">
            <record id="tax_group_tva_0" model="account.tax.group">
                <field name="name">TVA 0%</field>
                <field name="country_id" ref="base.ch"/>
            </record>

            ...
        </data>
    </odoo>

.. example::
  `addons/l10n_ch/data/account_tax_group_data.xml <{GITHUB_PATH}/addons/l10n_ch/data/account_tax_group_data.xml>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_ch/data/account_tax_group_data.xml
    :condition: odoo_dir_in_path
    :language: xml
    :start-after: <data
    :end-before: </data>

.. example::
  `addons/l10n_uk/data/account.tax.group.csv <{GITHUB_PATH}/addons/l10n_uk/data/account.tax.group.csv>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_uk/data/account.tax.group.csv
    :condition: odoo_dir_in_path
    :language: csv


Now you can add the taxes via :file:`data/account_tax_template_data.xml` file.  The first tax you define that is purchase/sale also becomes the default purchase/sale tax for your products.


.. example::
  `addons/l10n_ae/data/account_tax_template_data.xml <{GITHUB_PATH}/addons/l10n_ae/data/account_tax_template_data.xml>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_ae/data/account_tax_template_data.xml
    :condition: odoo_dir_in_path
    :language: xml
    :start-at: uae_sale_tax_5_dubai
    :end-at: </record>

If some accounts should use default taxes, you can set them up in :file:`data/account_account_template_post_data.xml`

Tax Report
----------

.. raw:: html

   <div><span class="badge" style="background-color:#AD5E99">Enterprise feature</span><div>

The tax report is declared in the :guilabel:`Invoicing` (`account`) app, but the report is only accessible when :guilabel:`Accounting` (`account_accountant`) is installed.

.. seealso::
   - :doc:`/developer/reference/standard_modules/account/account_report_line`
   - :doc:`/applications/finance/accounting/reporting/declarations/tax_returns`

In the previous section, you noticed the fields `invoice_repartition_line_ids` or `refund_repartition_line_ids` and probably understood nothing about them. Good news: you are not alone on this incomprehension. Bad news: you have to figure it out a bit. The topic is complicated. Indeed:

.. graphviz:: accounting_localization/tax_report.dot
    :class: overflow-auto

The simple version is that, in the tax template, you indicate in the invoice/refund repartition lines whether the base or a percentage of the tax needs to be reported in which report line (through the *minus/plus_report_line_ids* fields).
It becomes clear also when you check the tax configuration in the Odoo interface (or check the docs :ref:`Tax References <reference/account_tax>`, :ref:`Tax Repartition References <reference/account_tax_repartition>`).

So, once you have properly configured taxes, you just need to add the :file:`data/account_tax_report_data.xml` file with a record for your `account.report`. For it to be considered as a tax report, you need to provide it with the right `root_report_id`.

.. code-block:: xml

    <odoo>
        <record id="tax_report" model="account.report">
            <field name="name">Tax Report</field>
            <field name="root_report_id" ref="account.generic_tax_report"/>
            <field name="country_id" ref="base.XX"/>
        </record>

        ...
    </odoo>

... followed by the declaration of its lines, as `account.report.line` records.

.. example::
  `addons/l10n_au/data/account_tax_report_data.xml <{GITHUB_PATH}/addons/l10n_au/data/account_tax_report_data.xml>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_au/data/account_tax_report_data.xml
    :condition: odoo_dir_in_path
    :language: xml
    :start-at: tax_report
    :end-before: account_tax_report_gstrpt_g3



Fiscal positions
----------------

.. seealso::
   - :ref:`Fiscal Position References <reference/account_fiscal_position>`
   - :doc:`/applications/finance/accounting/taxation/taxes/fiscal_positions`

Specify fiscal positions in the :file:`data/account_fiscal_position_template_data.xml` file.

.. example::
  `addons/l10n_es/data/account_fiscal_position_template_data.xml <{GITHUB_PATH}/addons/l10n_es/data/account_fiscal_position_template_data.xml>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_es/data/account_fiscal_position_template_data.xml
    :condition: odoo_dir_in_path
    :language: xml
    :start-at: fp_nacional
    :end-before: fp_intra

Final steps
===========

The last step when installing a localization module is to try to apply its chart of accounts to the current company (if it does not already have one).
The file :file:`data/account_chart_template_try_loading.xml` is responsible for that.

.. example::
  `addons/l10n_ch/data/account_chart_template_data.xml <{GITHUB_PATH}/addons/l10n_ch/data/account_chart_template_data.xml>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_ch/data/account_chart_template_data.xml
    :condition: odoo_dir_in_path
    :language: xml
    :start-at: <function
    :end-at: </function>

Finally, you may add a demo company, so the localization can easily be tested in demo mode.

.. example::
  `addons/l10n_ch/demo/demo_company.xml <{GITHUB_PATH}/addons/l10n_ch/demo/demo_company.xml>`_

  .. literalinclude:: {ODOO_RELPATH}/addons/l10n_ch/demo/demo_company.xml
    :condition: odoo_dir_in_path
    :language: xml
    :start-after: <odoo>
    :end-before: </odoo>

Accounting reports
==================

.. raw:: html

   <div><span class="badge" style="background-color:#AD5E99">Enterprise feature</span><div>

.. seealso::
  :doc:`/applications/finance/accounting/reporting/overview`

Accounting reports should be added via a separate module `l10n_XX_reports` that should go to the `enterprise repository <{GITHUB_ENT_PATH}>`_.

Basic :file:`__manifest__.py` file for such a module looks as following:


.. code-block:: python

    {
        "name": "COUNTRY - Accounting Reports",
        "category": "Accounting/Localizations/Reporting",
        "version": "1.0.0",
        "license": "OEEL-1",
        "depends": [
            "l10n_XX", "account_reports"
        ],
        "data": [
            "data/balance_sheet.xml",
            "data/profit_and_loss.xml",
        ],
        "auto_install": True,
    }


Functional overview of financial reports is here: :doc:`/applications/finance/accounting/reporting/overview/main_reports`.

Some good examples:

* `l10n_ch_reports/data/account_financial_html_report_data.xml <{GITHUB_ENT_PATH}/l10n_ch_reports/data/account_financial_html_report_data.xml>`_
* `l10n_be_reports/data/account_financial_html_report_data.xml <{GITHUB_ENT_PATH}/l10n_be_reports/data/account_financial_html_report_data.xml>`_

You can check the meaning of the fields here:

* :doc:`/developer/reference/standard_modules/account/account_report`
* :doc:`/developer/reference/standard_modules/account/account_report_line`

If you gave a `root_report_id` to your report, it is now available in its variant selector. If not, you still need to add a menu item for it. A default menu item can be created from the form view of the report, by clicking on 'Actions', then 'Create Menu Item'. You'll then need to refresh the page to see it. Alternatively, to create a dedicated section for a totally new report in the :guilabel:`Reporting` menu, you need to create a new `ir.ui.menu` record (usually in the main `l10n_XX` module) and a new `ir.actions.client` (usually in the new report xml file) that calls the `account.report` with  the new report id. Then, set the new menu as `parent_id` field in the action model. Example for the Belgian localization:

* `ir.ui.menu record in l10n_be <{GITHUB_PATH}/addons/l10n_be/data/menuitem_data.xml>`_
* `parent_id field in l10n_be_reports (v16) <https://github.com/odoo/enterprise/blob/a1614d0b1460dc453cbe395efba41573d29e7b7e/l10n_be_reports/data/partner_vat_listing.xml#L55-L65>`_
