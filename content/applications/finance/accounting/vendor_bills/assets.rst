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
- No Depreciation

.. _accounting/assets/prerequisites:

Prerequisites
=============

Transactions related to assets must be posted to an **asset account** rather than a standard expense
account. Asset accounts are found in the :doc:`chart of accounts
<../get_started/chart_of_accounts>`.

.. _accounting/assets/account:

Asset account
-------------

- :guilabel:`Type`: Select :guilabel:`Fixed Assets` or :guilabel:`Non-current Assets`.
- :guilabel:`Fiscal Category`: Shows to which account group the account belongs.
- :guilabel:`Currency`: Select a currency to force all journal items in this account to use
  that currency. Leave it empty for no restriction.
- :guilabel:`Payment Reconciliation`: Check the box if the account allows invoices and payments
  matching of journal items.
- :guilabel:`Active`: Activate or deactivate use of the account.
- :guilabel:`Companies`: Select the companies in which the account is available.
- :guilabel:`Depreciation`: The default :ref:`depreciation model
  <accounting/assets/depreciation-models>` to use on a vendor bill or a refund (fixed assets).

  - :guilabel:`Accumulated Deprecation`: Account used in the depreciation entries to decrease the
    asset value.
  - :guilabel:`Depreciation Expense`: Account used in the periodical entries to record a part of the
    asset as expense.

.. tip::
   To automatically post purchases of a specific product to an asset account, set the default asset
   account directly on the product form:

   - Open the product form and go to the :guilabel:`Accounting` tab.
   - Set the desired asset account in the :guilabel:`Expense Account` field.
   - Click :guilabel:`Save`.

.. seealso::
   :doc:`Chart of accounts <../get_started/chart_of_accounts>`

.. _accounting/assets/creation:

Asset creation
==============

There are multiple methods to create assets in Odoo. Regardless of the method used, :ref:`these
settings <accounting/assets/creation-settings>` apply to all methods.

.. note::
   Upon creation of an asset, depreciation journal entries are instantly generated across the entire
   asset's lifecycle. Entries are set to draft and are automatically posted by the end of each
   period (month or year).

.. tip::
   While manual and imported assets require confirmation from draft status, assets created from
   vendor bills or journal items are posted and running immediately.

.. _accounting/assets/creation-methods:

Creation methods
----------------

.. _accounting/assets/creation-manual:

Manual creation
~~~~~~~~~~~~~~~

To create a new entry, go to :menuselection:`Accounting --> Accounting --> Assets`, click
:guilabel:`New`, and fill out the :ref:`form <accounting/assets/creation-settings>`.

.. tip::
   In the :guilabel:`Bills` tab, a link to the bill that financed or acquired the asset can be
   :ref:`configured <accounting/assets/creation-settings>` to populate the asset fields
   automatically.

Then, click :guilabel:`Compute Depreciation` to generate all the values in the
:guilabel:`Depreciation Board` tab. This board shows you all the entries that will be posted to
depreciate your asset, and at which date. Click :guilabel:`Set to Draft` to modify the model.

.. _accounting/assets/creation-journal:

Creation from a journal item
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create an asset entry from a specific journal item entry, follow these steps:

#. Go to :menuselection:`Accounting --> Review --> Journal Items`.
#. In the :guilabel:`Journal Items` list view, select the entry to create an asset from.
#. Click :guilabel:`Create Asset`.
#. Fill out the form the same way as when :ref:`creating a new entry
   <accounting/assets/creation>`.

.. note::
   Make sure the item is posted to the :ref:`correct account <accounting/assets/account>`.

Creation from a vendor bill
~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Open or create a vendor bill.
#. On the invoice line, set the :guilabel:`Account` to a **fixed assets** type.
#. Select a :ref:`depreciation model <accounting/assets/depreciation-models>` from the menu that
   appears beneath it.
#. Click :guilabel:`Confirm` to validate the bill and generate the asset entry.

Assets or depreciation models import
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To :doc:`import </applications/essentials/export_import_data>` assets or depreciation models in
Odoo:

.. tabs::

   .. tab:: Assets

      #. For assets, go to :menuselection:`Accounting --> Accounting --> Assets`.
      #. Click the :icon:`fa-cog` :guilabel:`(Actions)` button, and click
         :guilabel:`Import`.
      #. Click :guilabel:`Upload` and :guilabel:`Select` the file(s) to import.

   .. tab:: Depreciation Models

      #. For depreciation models, go to :menuselection:`Accounting --> Configuration -->
         Depreciation Models`.
      #. Click the :icon:`fa-cog` :guilabel:`(Actions)` button, and click
         :guilabel:`Import`.
      #. Click :guilabel:`Upload` and :guilabel:`Select` the file(s) to import.

.. _accounting/assets/creation-settings:

Settings
--------

When creating or editing an asset, complete the following fields across the relevant sections:

.. tabs::

   .. tab:: :guilabel:`Asset`

        :guilabel:`Asset Name`: The name of the asset to be depreciated.

    **Asset Values**

      - :guilabel:`Asset Value`: The acquisition cost of the asset.
      - :guilabel:`Date`: The date the asset was purchased.
      - :guilabel:`Fixed Asset Account`: The account used to record the purchase of the asset at its
        original price.
      - :guilabel:`Asset Group`: Group up other assets into a single group.

      **Current Values**

      - :guilabel:`Not Depreciable Value`: The amount planned that cannot depreciate.
      - :guilabel:`Book Value`: Sum of the depreciable value, the salvage value, and the book value
        of all value increase items.
      - :guilabel:`Depreciated at import`: If applicable, input the asset's amount that has been
        depreciated before importing it in Odoo.

      **Depreciation Method**

      - :guilabel:`Depreciation Model`: Select a :ref:`depreciation model
        <accounting/assets/depreciation-models>` to populate default settings automatically
        (optional).
      - :guilabel:`Computation`:  The computation method to calculate the depreciation rate.

        - :guilabel:`No Prorata`: The start date is implicitly set to the first day of the fiscal
          year, recognizing a full year of depreciation regardless of the actual acquisition date.
        - :guilabel:`Constant Periods`: Time is divided into equal, standardized intervals (such as
          12 months of 30 days each), ensuring identical depreciation amounts per period.
        - :guilabel:`Based on days per period`: Depreciation is computed using the exact calendar
          days elapsed in each period, accounting for month-length variations (e.g., 28, 30, or 31
          days) and leap years.

        - :guilabel:`Prorata Date`: Starting date of the period used in the prorata calculation of
          the first depreciation.

          .. tip::
             :guilabel:`Constant Periods` and :guilabel:`Based on days per period` computations
             allow specifying a :guilabel:`Prorata Date` when necessary. A specific computation is
             conveyed by default in specific localizations (e.g., Germany, where the asset
             deprecates from the first day of the month of its acquisition).

      **Accounting**

        - :guilabel:`Company`: The company that owns the asset.
        - :guilabel:`Depreciation Account`: The accumulated depreciation balance sheet account.
        - :guilabel:`Expense Account`: The income statement account where depreciation expense is
          posted.
        - :guilabel:`Journal`: The target journal for depreciation entries.
        - :guilabel:`Analytic`: :doc:`Analytic accounts <../reporting/analytic_accounting>`
          assignments (optional).

        .. tip::
           To change the account of a posted journal item, go to :menuselection:`Accounting -->
           Review --> Journal Items`, then filter by :guilabel:`Purchases`, and tick the journal
           item(s) you wish to modify. Once selected, click the :guilabel:`Account` column related
           to the item(s), then click the :icon:`fa-caret-down` :guilabel:`(down arrow)` icon to
           select a new account from the drop-down menu.

   .. tab:: :guilabel:`Depreciation Board`

      This tab displays all journal entries, both in draft and posted, of the computed depreciations
      over the configured period.

   .. tab:: :guilabel:`Bills`

      If a posted bill exists for that asset, open the :guilabel:`Bills` tab, then click
      :guilabel:`Add a line`, and select the related bill to automatically fill out the asset
      fields.

.. _accounting/assets/depreciation-models:

Depreciation models
===================

.. _accounting/assets/models-configuration:

Configuration
-------------

**Depreciation models** serve as reusable templates for depreciation settings. They streamline entry
creation when regularly purchasing identical types of assets.

To create an depreciation model, go to :menuselection:`Accounting --> Configuration --> Depreciation
Models`. Then, click :guilabel:`New`, and fill out the following fields:

- :guilabel:`Depreciation Model name`: The name of the depreciation model.
- :guilabel:`Method`: Choose the method to use to compute the amount of depreciation lines.

  - :guilabel:`Straight Line`: Divides the depreciable value equally over the lifespan.

    - :guilabel:`Based On`: Select a computation based on :guilabel:`Duration` or :guilabel:`Rate`
      (Straight Line computation).

      .. note::
         This specific use-case is for countries such as Colombia or Italy, which require
         depreciation based on rates.

  - :guilabel:`Duration`: The number of :guilabel:`Month` or :guilabel:`Year` needed to depreciate
    the asset.
  - :guilabel:`Rate`: The :guilabel:`%` (percentage) to depreciate per :guilabel:`Month` or
    :guilabel:`Year`.
  - :guilabel:`Declining`: Multiplies remaining value by a declining factor until reaching salvage
    value.
  - :guilabel:`Declining Then Straight Line`: Uses declining depreciation until straight-line yields
    a higher amount, ensuring faster initial depreciation.

    - :guilabel:`Declining Factor`: For the declining depreciation methods, input a declining
      factor per year.

  - :guilabel:`No Depreciation`: No depreciation is computed.


- :guilabel:`Computation`: The computation method to calculate the depreciation rate.
- :guilabel:`Not Depreciable`: Input the amount planned as non-depreciated.
- :guilabel:`Company`: Which company has access to this model. Leave blank to allow all.
- :guilabel:`Journal`: The journal used to record depreciation entries.

.. _accounting/assets/asset-modification:

Asset modification and disposal
===============================

To adjust an existing asset's values to account for re-evaluations, sale, disposal, or pause, open
the asset that needs modification, and click :guilabel:`Modify Depreciation`. Then, in the
:guilabel:`Modify Asset` window, select one of the following actions:

.. tabs::

   .. tab:: :guilabel:`Dispose`

      - :guilabel:`Date`: Enter the date of the asset disposal.
      - :guilabel:`Loss Account`: Account used to write the journal item in case of loss.
      - :guilabel:`Note`: Write a note regarding the disposal (optional).

      Then, click :guilabel:`Dispose`. The updated asset is then :guilabel:`Closed`, and a new
      disposal journal entry is posted to the loss account.

   .. tab:: :guilabel:`Sell`

      - :guilabel:`Date`: Enter the date of the asset sale.
      - :guilabel:`Customer Invoice`: Select the customer invoice of the asset sale.
      - :guilabel:`Invoice Line`: The invoice line(s) related to the asset sale.
      - :guilabel:`Loss Account`: Account used to write the journal item in case of loss.
      - :guilabel:`Note`: Write a note regarding the sale (optional).

      Then, click :guilabel:`Sell`. The updated asset is then :guilabel:`Closed`.

   .. tab:: :guilabel:`Re-evaluate`

      - :guilabel:`Date`: The date of the asset's re-evaluation.
      - :guilabel:`Duration`: The lifespan of the asset.
      - :guilabel:`Depreciable Amount`: The new residual amount for the asset.
      - :guilabel:`Not Depreciable Amount`: The new salvage amount for the asset.
      - :guilabel:`Gross Increase Account`: The gross increase account for the asset.
      - :guilabel:`Accumulated Depreciation`: Account used in the depreciation entries to decrease
        the asset value.
      - :guilabel:`Depreciation Expense`: Account used in the periodical entries to record a part of
        the asset as an expense.
      - :guilabel:`Note`: Add an internal note, if desired.

      Then, click :guilabel:`Modify`. All future entries will be recomputed to reflect the asset's
      depreciation following the change.

      .. note::
         - A **decrease in value** posts a new journal entry for the **Value Decrease** and modifies
           all the future *unposted* journal entries listed in the :guilabel:`Depreciation Board`.

         - An **increase in value** creates a new asset entry with the **Value Increase**. The gross
           increase asset entry is accessible by clicking the :guilabel:`Gross Increase` smart
           button.

   .. tab:: :guilabel:`Pause`

      - :guilabel:`Date`: The date on which the asset depreciation is paused.
      - :guilabel:`Note:` Add an internal note, if desired.

      Then, click :guilabel:`Pause`. The depreciation is then :guilabel:`On Hold` and can be resumed
      if needed. To resume a depreciation, click :guilabel:`Resume Depreciation`, select a
      :guilabel:`Date`, enter a :guilabel:`Note`, and click :guilabel:`Resume`.
