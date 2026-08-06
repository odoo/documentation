===================================
Non-current assets and fixed assets
===================================

Managing long-term company resources in Odoo involves two main asset categories:

- **Non-current Assets (Long-term Assets):** Investments realized after one year that are
  capitalized on the balance sheet and subject to depreciation.
- **Fixed Assets:** A subset of non-current assets comprising physical productive assets like
  buildings, vehicles, equipment, land, and software.

Odoo Accounting simplifies asset management by automatically creating depreciation entries in
*draft* mode for periodic posting.

Supported **Depreciation Methods**:

- Straight Line
- Declining
- Declining Then Straight Line

Prerequisites
=============

Transactions related to assets must be posted to an **Asset Account** rather than a standard expense
account.

.. _assets/account:

Configure asset account
-----------------------

To create or configure an **assets** account, open the **Accounting** app and navigate to
:menuselection:`Configuration --> Chart of Accounts`. Then, either click :guilabel:`New` to create a
new account, or click an already existing account to modify it. On the account view, fill out the
following fields:

:guilabel:`Account Name`: Input a name for the account.

:guilabel:`Code`: Enter a unique identifying code.

.. tabs::

   .. tab:: Accounting

      - :guilabel:`Type`: Select a type of account. Note that the account must be either of the
        :guilabel:`Fixed Assets` or :guilabel:`Non-current Assets` type.
      - :guilabel:`Default Taxes`: Choose a default tax for the account.
      - :guilabel:`Tags`: Optional tags for custom reporting.
      - :guilabel:`Variation Account`: Optional, select an account to register the inventory
        variation of the period into a specific account. This field is only available if the
        account type is :guilabel:`Current Assets`.
      - :guilabel:`Currency`: Select a currency to force all journal items in this account to use
        that currency. Leave it empty for no restriction.
      - :guilabel:`Allow Reconciliation`: Check the box if the account allows invoices and payments
        matching of journal items.
      - :guilabel:`Active`: Activate or deactivate use of the account.
      - :guilabel:`Companies`: Select the companies in which the account is available.

   .. tab:: Automation

      When you create or edit an account of which the type is either :guilabel:`Non-current Assets`
      or :guilabel:`Fixed Assets`, you can configure it to create assets for the expenses that are
      credited on it automatically.

      - :guilabel:`Automate Asset`:

        - :guilabel:`No`: The draft sheet is manually created by the user when validating a vendor
          bill.
        - :guilabel:`Create in draft`: Odoo automatically creates a depreciation board with draft
          entries. You can verify the draft entries before validating them.
        - :guilabel:`Create and validate`: The asset is created and posted. You can still reset the
          posted entry to draft and modify it.

      - :guilabel:`Manage Items`: If checked, the number of quantities on the invoice line
        determines the number of assets created.

      - :guilabel:`Asset Model`: You can link one model to this account, so the assets booked on
        this account always follow the same structure.

      .. tip::
         You can, for example, select this account as the default **Expense Account** of a product
         to fully automate its purchase.

   .. tab:: Description

      Optional, enter a description of the account.

   .. tab:: Mapping

      Used to map the account to corresponding account codes across different companies within a
      multi-company database.

Product expense accounts
------------------------

To automatically post purchases of a specific product to an asset account, set the default asset
account directly on the product form:

1. Open the product form and go to the :guilabel:`Accounting` tab.
2. Set the desired asset account in the :guilabel:`Expense Account` field.
3. Click :guilabel:`Save`.

.. _assets/creation:

Asset creation
==============

There are two available methods to create assets in Odoo: a :ref:`manual creation
<assets/creation-methods>` method, and a method :ref:`from the Purchase journal
<assets/creation-journal>`. Regardless of the method used, :ref:`these settings
<assets/creation-settings>` must be filled out for either.

.. _assets/creation-methods:

Creation methods
----------------

.. _assets/creation-manual:

Manual creation
~~~~~~~~~~~~~~~

An **Asset entry** automatically generates all journal entries in *draft mode*. They are then posted
one by one over the configured period.

To create a new entry, go to :menuselection:`Accounting --> Assets`, click on :guilabel:`Create`,
and fill out the form.

.. tip::
   If there exists a posted bill for that asset, click the :guilabel:`Bills` tab, then
   :guilabel:`Add a line`, and select the related bill to have the asset creation fields
   automatically filled out.

Once done, you can click on :guilabel:`Compute Depreciation` to generate all the values of the
:guilabel:`Depreciation Board` tab. This board shows you all the entries that Odoo will post to
depreciate your asset, and at which date.

When done, :guilabel:`Confirm` the asset.

.. _assets/creation-journal:

From Purchase journal
~~~~~~~~~~~~~~~~~~~~~

You can create an asset entry from a specific journal item in your **Purchases** journal.

To do so, open your **Purchases** journal by opening the **Accounting** app, going to
:menuselection:`Configuration --> Journals --> Purchases`, and then clicking :guilabel:`Journal
Entries`. Select the journal item you want to record as an asset. Make sure that it is posted in the
right account (see: :ref:`assets/account`).

Then, click the :icon:`fa-cog` :guilabel:`(Actions)` icon, select :guilabel:`Create Asset`, and fill
out the form the same way you would do to :ref:`create a new entry <assets/creation>`.

.. _assets/creation-settings:

Settings
--------

When creating or editing an asset, complete the following fields across the relevant sections:

.. tabs::

   .. tab:: :guilabel:`Asset`

      **Asset Details**

      - :guilabel:`Original Value`: The acquisition cost of the asset.
      - :guilabel:`Acquisition Date`: The date the asset was purchased.
      - :guilabel:`Asset Model`: Select a :ref:`template <assets/models>` to populate default
        settings automatically (optional).
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
           to the item(s) and select a new account from the drop-down menu.

      **Value at Import**

      - :guilabel:`Depreciated Amount`: If applicable, input the asset's amount that has been
        depreciated before importing it in Odoo (requires :doc:`Developer Mode
        <../../../general/developer_mode>` enabled).
      - :guilabel:`Vehicle`: Select the imported vehicle from your fleet to allow for unified cost
        tracking.

   .. tab:: :guilabel:`Depreciation Board`

      This tab allows you to see all journal entries, both in draft and posted, of the computed
      depreciations over the configured period.

   .. tab:: :guilabel:`Bills`

      Used to link the asset to the bill that financed or acquired it.

.. _assets/models:

Asset models
============

Configuration
-------------

**Asset Models** serve as reusable templates for depreciation settings. They streamline entry
creation when regularly purchasing identical types of assets.

To create an asset model, open the **Accounting** app, and go to :menuselection:`Configuration -->
Asset Models`. Then, click :guilabel:`New`, and fill out the following fields:

- :guilabel:`Method`: Choose the method to use to compute the amount of depreciation lines.
- :guilabel:`Declining Factor`: If you chose a declining depreciation method, input a declining
  factor per year.
- :guilabel:`Duration`: The number of depreciation needed to depreciate your asset in
  :guilabel:`Months` or :guilabel:`Years`.
- :guilabel:`Computation`: The computation method to calculate the depreciation rate.
- :guilabel:`Not Depreciable Value Percent`: Input the amount you plan to have that cannot be
  depreciated.
- :guilabel:`Company`: Which company has access to this model. Leave blank to allow all.
- :guilabel:`Depreciation Account`: Account used in the depreciation entries to decrease the asset
  value.
- :guilabel:`Expense Account`: Account use in the periodical entries to record part of the asset as
  expense.
- :guilabel:`Journal`: The journal used to record depreciation entries.

.. tip::
   You can also convert an existing confirmed asset into a model by opening it and clicking
   :guilabel:`Save as Model`.

To apply an asset model to a new entry, select a model from the :guilabel:`Asset Model` field, and
click :guilabel:`Save`.

Asset modification and disposal
===============================

You can adjust an existing asset's values to account for re-evaluations, sale, disposal, or pause.

To do so, open the asset you want to modify, and click :guilabel:`Modify Depreciation`. Then, select

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
