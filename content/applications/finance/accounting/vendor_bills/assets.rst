===================================
Non-current assets and fixed assets
===================================

**Non-current Assets**, also known as **long-term assets**, are investments that are expected to be
realized after one year. They are capitalized rather than being expensed and appear on the company's
balance sheet. Depending on their nature, they may undergo **depreciation**.

**Fixed Assets** are a type of Non-current Assets and include the properties bought for their
productive aspects, such as buildings, vehicles, equipment, land, and software.

For example, let's say we buy a car for $ 27,000. We plan to amortize it over five years, and we
will sell it for $ 7,000 afterward. Using the linear, or straight-line, depreciation method,
$ 4,000 are expensed each year as **depreciation expenses**. After five years, the **Accumulated
Depreciation** amount reported on the balance sheet equals $ 20,000, leaving us with $ 7,000 of
**Not Depreciable Value**, or Salvage value.

Odoo Accounting handles depreciation by creating all depreciation entries automatically in *draft
mode*. They are then posted periodically.

Odoo supports the following **Depreciation Methods**:

- Straight Line
- Declining
- Declining Then Straight Line

.. note::
   The server checks once a day if an entry must be posted. It might then take up to 24 hours before
   you see a change from *draft* to *posted*.

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

      View all the companies having access to this account.

Product expense accounts
------------------------

To automatically post purchases of a specific product to an asset account, set the default asset
account directly on the product form:

1. Open the product form and go to the :guilabel:`Accounting` tab.
2. Set the desired asset account in the :guilabel:`Expense Account` field.
3. Click :guilabel:`Save`.

.. _assets/creation:

Assets creation
===============

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

Click on **select related purchases** to link an existing journal item to this new entry. Some
fields are then automatically filled out, and the journal item is now listed under the **Related
Purchase** tab.

# Couldn't find how this option nor an alternative

Once done, you can click on :guilabel:`Compute Depreciation` to generate all the values of the
:guilabel:`Depreciation Board` tab. This board shows you all the entries that Odoo will post to
depreciate your asset, and at which date.

When done, make sure to :guilabel:`Confirm` the asset.

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
      - :guilabel:`Asset Group`: (ask PO).

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

        - :guilabel:`Company`: (Ask PO)
        - :guilabel:`Fixed Asset Account`: The asset account storing the initial acquisition value.
        - :guilabel:`Depreciation Account`: The accumulated depreciation balance sheet account.
        - :guilabel:`Expense Account`: The income statement account where depreciation expense is
          posted.
        - :guilabel:`Journal`: The target journal for depreciation entries.
        - :guilabel:`Analytic Distribution`: :doc:`Analytic accounts
          <../reporting/analytic_accounting>` assignments (optional).

      **Value at Import**

      - :guilabel:`Depreciated Amount`: If applicable, input the asset's amount that has been
        depreciated before importing it in Odoo (requires :doc:`Developer Mode
        <../../../general/developer_mode>` enabled).
      - :guilabel:`Vehicle`: (Ask PO)

   .. tab:: :guilabel:`Depreciation Board`

      This tab allows you to see all journal entries, both in draft and posted, of the computed
      depreciations over the configured period.

   .. tab:: :guilabel:`Bills`

      (ask PO - related bills?)

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
- :guilabel:`Company`: (ask PO).
- :guilabel:`Depreciation Account`: Account used in the depreciation entries to decrease the asset
  value.
- :guilabel:`Expense Account`: Account use in the periodical entries to record part of the asset as
  expense.
- :guilabel:`Journal`: The journal used to record depreciation entries (Check with PO).

.. tip::
   You can also convert an existing confirmed asset into a model by opening it and clicking
   :guilabel:`Save as Model`.

To apply an asset model to a new entry, select a model from the :guilabel:`Asset Model` field, and
click :guilabel:`Save`.

Asset modification and disposal
===============================

You can adjust an existing asset's values to account for re-evaluations, sale, disposal, or pause.

To do so, open the asset you want to modify, and click :guilabel:`Modify Depreciation`. Then, select
:guilabel:`Re-evaluate` and fill out the following information:

- :guilabel:`Date`: The date of the asset's re-evaluation.
- :guilabel:`Duration`: The lifespan of the asset.
- :guilabel:`Depreciable Amount`:: The new residual amount for the asset.
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

.. note::
   To record the sale of an asset, you must first post the related Customer Invoice so you can link
   the sale of the asset with it.

.. seealso::
   :doc:`Chart of accounts <../get_started/chart_of_accounts>`
