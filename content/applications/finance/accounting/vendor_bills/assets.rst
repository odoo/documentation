===================================
Non-current assets and fixed assets
===================================

Managing long-term company resources in Odoo involves two main asset categories:

- **Non-current assets (Long-term assets):** Investments realized after one year that are
  capitalized on the balance sheet and subject to depreciation.
- **Fixed assets:** A subset of non-current assets comprising physical productive assets like
  buildings, vehicles, equipment, land, and software.

Odoo Accounting simplifies asset management by automatically creating depreciation entries in
*draft* mode for periodic posting.

Supported **depreciation methods**:

- Straight Line
- Declining
- Declining Then Straight Line

.. _accounting/assets/prerequisites:

Prerequisites
=============

Transactions related to assets must be posted to an **asset account** rather than a standard expense
account.

.. _accounting/assets/account:

Asset account
-------------

To create or configure an **assets** account, navigate to :menuselection:`Accounting -->
Configuration --> Chart of Accounts`. Then, either click :guilabel:`New` to create a new account, or
click an already existing account to modify it. On the account view, fill out the following fields:

:guilabel:`Account Name`: Input a name for the account.

To :ref:`create or configure <chart-of-account/create>` an assets account, fill out the following
fields that are specific to assets:

.. tabs::

   .. tab:: Accounting

      - :guilabel:`Type`: Select :guilabel:`Fixed Assets` or :guilabel:`Non-current Assets`.
      - :ref:`Variation Account <accounting/inventory-valuation/variation-account>` (optional):
        Select an account to register the inventory variation of the period into a specific account.
        This field is only available if the account type is :guilabel:`Current Assets`.
      - :guilabel:`Currency`: Select a currency to force all journal items in this account to use
        that currency. Leave it empty for no restriction.
      - :guilabel:`Allow Reconciliation`: Check the box if the account allows invoices and payments
        matching of journal items.
      - :guilabel:`Active`: Activate or deactivate use of the account.
      - :guilabel:`Companies`: Select the companies in which the account is available.

   .. tab:: Automation

      When creating or editing an account whose type is either :guilabel:`Non-current Assets` or
      :guilabel:`Fixed Assets`, it can be configured to automatically create assets for the expenses
      that are credited to it.

      - :guilabel:`Automate Asset`:

        - :guilabel:`No`: The draft sheet is manually created by the user when validating a vendor
          bill.
        - :guilabel:`Create in draft`: Odoo automatically creates a depreciation board with draft
          entries. Verify them before validating.
        - :guilabel:`Create and validate`: The asset is created and posted. The posted entry can be
          reset to draft and modified.

      - :guilabel:`Manage Items`: If checked, the quantity on the invoice line determines the number
        of assets created.

      - :ref:`Asset Model <accounting/assets/models>`: This account can be linked to a model, so the
        assets booked on this account always follow the same structure.

      .. tip::
         Select this account as the default **Expense Account** of a product to fully automate its
         purchase.

.. _accounting/assets/product-expense-accounts:

Product expense accounts
------------------------

To automatically post purchases of a specific product to an asset account, set the default asset
account directly on the product form:

1. Open the product form and go to the :guilabel:`Accounting` tab.
2. Set the desired asset account in the :guilabel:`Expense Account` field.
3. Click :guilabel:`Save`.

.. _accounting/assets/creation:

Asset creation
==============

There are two available methods to create assets in Odoo: a :ref:`manual creation
<accounting/assets/creation-methods>` method, and a method :ref:`from the Purchase journal
<accounting/assets/creation-journal>`. Regardless of the method used, :ref:`these settings
<accounting/assets/creation-settings>` must be filled out for either.

.. _accounting/assets/creation-methods:

Creation methods
----------------

.. _accounting/assets/creation-manual:

Manual creation
~~~~~~~~~~~~~~~

An **Asset entry** automatically generates all journal entries in *draft mode*. They are then posted
one by one over the configured period.

To create a new entry, go to :menuselection:`Accounting --> Accounting --> Assets`, click on
:guilabel:`New`, and fill out the :ref:`form <accounting/assets/creation-settings>`.

.. tip::
   In the :guilabel:`Bills` tab, a link to the bill that financed or acquired the asset can be
   :ref:`configured <accounting/assets/creation-settings>` to populate the asset fields
   automatically.

.. _accounting/assets/depreciation:

Depreciation
------------

Click :guilabel:`Compute Depreciation` to generate all the values in the :guilabel:`Depreciation
Board` tab. This board shows you all the entries that Odoo will be posted to depreciate your asset,
and at which date. Then, :guilabel:`Confirm` the asset.

.. _accounting/assets/creation-journal:

From Purchase journal
~~~~~~~~~~~~~~~~~~~~~

You can create an asset entry from a specific journal item in your **Purchases** journal.

To do so, go to :menuselection:`Accounting --> Configuration --> Journals --> Purchases` and then
click :guilabel:`Journal Entries`. Select the journal item you want to record as an asset. Make sure
that it is posted in the right account (see: :ref:`accounting/assets/account`).

Then, click the :icon:`fa-cog` :guilabel:`(Actions)` icon, select :guilabel:`Create Asset`, and fill
out the form the same way you would do to :ref:`create a new entry <accounting/assets/creation>`.

.. _accounting/assets/creation-settings:

Settings
--------

When creating or editing an asset, complete the following fields across the relevant sections:

.. tabs::

   .. tab:: :guilabel:`Asset`

      :guilabel:`Asset Name`: The name of the asset to be depreciated.

      - :guilabel:`Original Value`: The acquisition cost of the asset.
      - :guilabel:`Acquisition Date`: The date the asset was purchased.
      - :guilabel:`Asset Model`: Select a :ref:`template <accounting/assets/models>` to populate
        default settings automatically (optional).
      - :guilabel:`Asset Group`: Group up other assets into a single group.

      **Current Values**

      - :guilabel:`Not Depreciable Value`: The salvage or residual value excluded from depreciation.
      - :guilabel:`Book Value`: The calculated remaining value (*Original Value* minus *Accumulated
        Depreciation*).

      **Depreciation Method**

      - :guilabel:`Method`: Select the computation logic:

        - :guilabel:`Straight Line`: Divides the depreciable value equally over the lifespan.
        - :guilabel:`Declining`: Multiplies remaining value by a declining factor until reaching
          salvage value.
        - :guilabel:`Declining Then Straight Line`: Uses declining depreciation until straight-line
          yields a higher amount, ensuring faster initial depreciation.
      - :guilabel:`Duration`: Set lifespan frequency in :guilabel:`Months` or :guilabel:`Years`.
      - :guilabel:`Computation`: Select timing logic (:guilabel:`No Prorata`,
        :guilabel:`Constant Periods`, or :guilabel:`Based on days per period`).
      - :guilabel:`Prorata Date`: The starting date used when calculating pro-rata depreciation
        for partial first periods.

        .. tip::

           - The **Straight Line Depreciation Method** divides the initial Depreciable Value by the
             number of depreciations planned. All depreciation entries have the same amount.

           - The **Declining Depreciation Method** multiplies the Depreciable Value by the
             **Declining Factor** for each entry. Each depreciation entry has a lower amount than
             the previous entry. The last depreciation entry doesn't use the declining factor but
             instead has an amount corresponding to the balance of the depreciable value so that it
             reaches $0 by the end of the specified duration.

           - The **Declining Then Straight Line Depreciation Method** uses the Declining Method, but
             with a minimum Depreciation equal to the Straight Line Method. This method ensures a
             fast depreciation at the beginning, followed by a constant one afterward.

      **Accounting**

        - :guilabel:`Company`: The company that owns the asset.
        - :guilabel:`Fixed Asset Account`: The asset account storing the initial acquisition value.
        - :guilabel:`Depreciation Account`: The accumulated depreciation balance sheet account.
        - :guilabel:`Expense Account`: The income statement account where depreciation expense is
          posted.
        - :guilabel:`Journal`: The target journal for depreciation entries.
        - :guilabel:`Analytic Distribution`: :doc:`Analytic accounts
          <../reporting/analytic_accounting>` assignments (optional).

        .. tip::
           To change the account of a posted journal item, go to :menuselection:`Accounting -->
           Review --> Journal Items`, then filter by :guilabel:`Purchases`, and tick the journal
           item(s) you wish to modify. Once selected, click the :guilabel:`Account` column related
           to the item(s), then click the :icon:`fa-caret-down` :guilabel:`(down arrow)` icon to
           select a new account from the drop-down menu.

      **Value at Import**

      - :guilabel:`Depreciated Amount`: If applicable, input the asset's amount that has been
        depreciated before importing it in Odoo (requires :doc:`Developer Mode
        <../../../general/developer_mode>` enabled).
      - :guilabel:`Vehicle`: Select the imported vehicle from your fleet to allow for unified cost
        tracking.

   .. tab:: :guilabel:`Depreciation Board`

      This tab displays all journal entries, both in draft and posted, of the computed depreciations
      over the configured period.

   .. tab:: :guilabel:`Bills`

      If a posted bill exists for that asset, open the :guilabel:`Bills` tab, then click
      :guilabel:`Add a line`, and select the related bill to automatically fill out the asset
      fields.

.. _accounting/assets/models:

Asset models
============

.. _accounting/assets/models-configuration:

Configuration
-------------

**Asset models** serve as reusable templates for depreciation settings. They streamline entry
creation when regularly purchasing identical types of assets.

To create an asset model, go to :menuselection:`Accounting --> Configuration --> Asset Models`.
Then, click :guilabel:`New`, and fill out the following fields:

- :guilabel:`Method`: Choose the method to use to compute the amount of depreciation lines.
- :guilabel:`Declining Factor`: For the declining depreciation method, input a declining
  factor per year.
- :guilabel:`Duration`: The number of :guilabel:`Months` or :guilabel:`Years` needed to depreciate
  the asset.
- :guilabel:`Computation`: The computation method to calculate the depreciation rate.
- :guilabel:`Not Depreciable Value Percent`: Input the amount planned as non-depreciated.
- :guilabel:`Company`: Which company has access to this model. Leave blank to allow all.
- :guilabel:`Depreciation Account`: Account used in the depreciation entries to decrease the asset
  value.
- :guilabel:`Expense Account`: Account use in the periodical entries to record part of the asset as
  expense.
- :guilabel:`Journal`: The journal used to record depreciation entries.

.. tip::
   To convert an existing confirmed asset into a model, open it and click :guilabel:`Save as Model`.

To apply an asset model to a new entry, select a model from the :guilabel:`Asset Model` field, and
click :guilabel:`Save`.

.. _accounting/assets/asset-modification:

Asset modification and disposal
===============================

To adjust an existing asset's values to account for re-evaluations, sale, disposal, or pause, open
the asset that needs modification, and click :guilabel:`Modify Depreciation`. Then, in the
:guilabel:`Modify Asset` window, select one of the following actions:

:guilabel:`Dispose`:

- :guilabel:`Date`: Enter the date of the asset disposal.
- :guilabel:`Loss Account`: Account used to write the journal item in case of loss.
- :guilabel:`Note`: Write a note regarding the disposal (optional).

When done, click :guilabel:`Dispose`.

:guilabel:`Sell`:

- :guilabel:`Date`: Enter the date of the asset sale.
- :guilabel:`Customer Invoice`: Select the customer invoice of the asset sale.
- :guilabel:`Invoice Line`: The invoice line(s) related to the asset sale.
- :guilabel:`Loss Account`: Account used to write the journal item in case of loss.
- :guilabel:`Note`: Write a note regarding the sale (optional).

When done, click :guilabel:`Sell`.

:guilabel:`Re-evaluate`:

- :guilabel:`Date`: The date of the asset's re-evaluation.
- :guilabel:`Duration`: The lifespan of the asset.
- :guilabel:`Depreciable Amount`: The new residual amount for the asset.
- :guilabel:`Not Depreciable Amount`: The new salvage amount for the asset.
- :guilabel:`Gross Increase Account`: The gross increase account for the asset.
- :guilabel:`Asset Counterpart Account`: The counterpart account used to balance the journal entry
  created for the value re-evaluation (e.g., Revaluation Surplus or Loss/Gain account).
- :guilabel:`Depreciation Account`: The depreciation account for the asset.
- :guilabel:`Expense Account`: The expense account to use for the asset.
- :guilabel:`Note`: Add an internal note, if desired.

When done, click :guilabel:`Modify`.

.. note::
   - A **decrease in value** posts a new Journal Entry for the **Value Decrease** and modifies
     all the future *unposted* Journal Entries listed in the Depreciation Board.

   - An **increase in value** creates a new asset entry with the **Value Increase**. The gross
     increase asset entry is accessible by clicking the :guilabel:`Gross Increase Asset` smart
     button.

:guilabel:`Pause`:

- :guilabel:`Date`: The date on which the asset depreciation is paused.
- :guilabel:`Note:` Add an internal note, if desired.

When done, click :guilabel:`Pause`.

.. seealso::
   :doc:`Chart of accounts <../get_started/chart_of_accounts>`
