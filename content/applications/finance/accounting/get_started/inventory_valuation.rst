===================
Inventory valuation
===================

.. |GRNI| replace:: :abbr:`GRNI (goods received not invoiced)`

A company's inventory valuation should include all stock on hand. Accurately recording this value
in the accounting records ensures a true representation of the company's current asset value.

The :doc:`Inventory <../../../inventory_and_mrp/inventory>` app maintains real-time stock valuation
based on physical item movement. In contrast, the Accounting app updates accounting inventory
valuation only when specifically requested, most often for closing or (when using perpetual
accounting) when vendor bills or customer invoices are posted.

.. seealso::
   Use the :doc:`../../../inventory_and_mrp/inventory/inventory_valuation/cheat_sheet` for guidance.

.. _accounting/inventory-valuation/accounting-standards:

Accounting standards
====================

In accounting, the timing of inventory expense recognition and its impact on :ref:`journal entries
<accounting-entries>` differ based on the accounting standard used:

- **Continental** accounting: the cost of goods is recorded as an expense when the vendor bill is
  posted, typically upon receipt into stock, regardless of when the goods are sold.
- **Anglo-Saxon** accounting: the cost of goods sold (COGS) is recognized as an expense when the
  customer invoice is posted, typically when products are sold.

.. _accounting/inventory-valuation/configuration:

Configuration
=============

Go to :menuselection:`Accounting --> Configuration --> Settings`, then scroll to the
:guilabel:`Inventory Valuation` section to set the following company-level options:

- :ref:`Inventory Valuation <accounting/inventory-valuation/valuation-method>`: Set the valuation
  method as :guilabel:`Perpetual (at invoicing)` or :guilabel:`Periodic (at closing)`.
- :guilabel:`Periodic Valuation`: Set the :ref:`closing entry
  <accounting/inventory-valuation/closing-entry>` process to :guilabel:`Manual`, :guilabel:`Daily`,
  or :guilabel:`Monthly` to automate it, if needed.
- :ref:`Inventory Cost Method <costing-methods>`: Choose :guilabel:`Standard Price`,
  :guilabel:`First in First Out (FIFO)`, or :guilabel:`Average Cost (AVCO)`.
- :ref:`Valuation Account <accounting/inventory-valuation/valuation-account>`: Set the asset account
  used to record the financial value of physical stock. Then, click the :icon:`oi-arrow-right`
  :guilabel:`(internal link)` next to the :guilabel:`Valuation Account` field to open the
  :guilabel:`Stock Valuation` account and update the :ref:`Variation Account
  <accounting/inventory-valuation/variation-account>`.
- :guilabel:`Journal`: Set the journal to post inventory valuation entries in.
- :guilabel:`Other accounts can be defined on "Inventory Loss" and "Production" on dedicated
  locations`: If needed, click :guilabel:`locations` and set the :ref:`Inventory Loss
  <accounting/inventory-valuation/inventory-loss>` or the :ref:`Cost of Production
  <accounting/inventory-valuation/cost-of-production>` accounts.

.. tip::
   Default accounts, inventory valuation methods, and costing methods can be overridden by setting
   them on the product category form.

.. _accounting/inventory-valuation/valuation-method:

Valuation methods
-----------------

The timing and manner of maintaining inventory records vary based on the inventory valuation method:

- :guilabel:`Periodic (at closing)`: Inventory valuation is updated only when generating entries
  during the :ref:`stock closing process <accounting/inventory-valuation/closing-entry>`. While
  inventory movements are tracked physically via the :doc:`Inventory Stock
  <../../../inventory_and_mrp/inventory/warehouses_storage/reporting/stock>` report, they are not
  automatically synchronized with financial records. When using the :guilabel:`Periodic` inventory
  valuation method, the expense account is debited when vendor bills are posted.
- :guilabel:`Perpetual (at invoicing)`: Inventory valuation is updated when bills or invoices are
  posted. The expense account (:abbr:`COGS (Cost of goods sold)`) is debited when invoices are
  posted. Combined with the :ref:`stock closing process
  <accounting/inventory-valuation/closing-entry>`, :guilabel:`Perpetual (at invoicing)` inventory
  valuation is updated for deliveries and receipts, even if there is no invoice or vendor bill yet.

.. note::
   - The periodic valuation method is often associated with Continental standards, while the
     perpetual method is commonly used with Anglo-Saxon standards. However, companies may choose a
     different inventory valuation method based on their specific needs.
   - In :guilabel:`Perpetual` valuation, it is more common to set the :guilabel:`Periodic Valuation`
     to :guilabel:`Manual` and generate closing entries only when a fiscal period closes, or when
     accounting reports require synchronization with inventory stock, unless an automatic update of
     accounting inventory value is needed.

.. tip::
   When using the :guilabel:`Perpetual (at invoicing)` valuation method with the :guilabel:`Standard
   Price` costing method, a :guilabel:`Price Difference Account` can be set for the
   :guilabel:`Product Category`. This account records the difference between the product's standard
   price, as specified on the product form, and the actual billed price, helping track pricing
   fluctuations.

.. _accounting/inventory-valuation/valuation-account:

Valuation account
-----------------

The :guilabel:`Valuation account` records the inventory value listed as a current asset on the
balance sheet. The :guilabel:`Valuation Account` tracks inventory asset value differently depending
on the selected :ref:`valuation method <accounting/inventory-valuation/valuation-method>`.

.. _accounting/inventory-valuation/variation-account:

Variation account
~~~~~~~~~~~~~~~~~

The :guilabel:`Variation account` is used to record inventory variations for the period covered by
the :ref:`stock closing process <accounting/inventory-valuation/closing-entry>` and can be updated
during :ref:`configuration <accounting/inventory-valuation/configuration>`:

- Continental :guilabel:`Periodic (at closing)`: Expense account (specific for variation recording).
- Anglo-Saxon :guilabel:`Perpetual (at invoicing)`: Current asset account (recommended for interim
  tracking) or expense account (optional).

  .. note::
     - Stock variations resulting from product receipts and deliveries are displayed in the
       :guilabel:`Stock Variation` section of the :ref:`Inventory Valuation report
       <accounting/inventory-valuation/inventory-valuation-report>`.
     - When using the :guilabel:`Perpetual (at invoicing)` inventory valuation, if no bill or
       invoice has been posted for these moves yet, it allows their impact on inventory value to be
       recorded in the accounting. The :guilabel:`Variation account` serves as a buffer account
       until the :ref:`accrual entries <accounting/inventory-valuation/accrual-entries>` are
       recorded.

.. _accounting/inventory-valuation/other-accounts:

Other accounts
--------------

.. _accounting/inventory-valuation/inventory-loss:

Inventory Loss
~~~~~~~~~~~~~~

To exclude :doc:`inventory adjustments
<../../../inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products>` from
the :guilabel:`Variation account` at closing, configure an :guilabel:`Inventory Adjustment` location
account (:guilabel:`Inventory Loss` location type) appropriately:

#. In the :ref:`Inventory Valuation section of the Accounting settings
   <accounting/inventory-valuation/configuration>`, click :guilabel:`locations` in
   :guilabel:`Other accounts can be defined on "Inventory Loss" and "Production" on dedicated
   locations`.
#. In the :guilabel:`Locations` list view, open any locations with the :guilabel:`Inventory Loss`
   location type.
#. Set the :guilabel:`Loss Account` in the :guilabel:`Accounting` information section.

.. note::
   - When using the Continental accounting standard in combination with the :guilabel:`Periodic (at
     closing)` valuation method, the update is displayed in the :guilabel:`Inventory Loss` section
     of the :ref:`Inventory Valuation report
     <accounting/inventory-valuation/inventory-valuation-report>`.
   - When using the Anglo-Saxon accounting standard in combination with the :guilabel:`Perpetual (at
     invoicing)` valuation method, the :ref:`valuation account
     <accounting/inventory-valuation/valuation-account>` updates immediately in real time once the
     move is completed.

.. _accounting/inventory-valuation/cost-of-production:

Cost of Production
~~~~~~~~~~~~~~~~~~

To record production costs for both the finished product and the components in an account other than
the default :guilabel:`Variation Account`, set up a :guilabel:`Production` location account
(:guilabel:`Production` location type):

#. In the :ref:`Inventory Valuation section of the Accounting settings
   <accounting/inventory-valuation/configuration>`, click :guilabel:`locations` in :guilabel:`Other
   accounts can be defined on "Inventory Loss" and "Production" on dedicated locations`.
#. In the :guilabel:`Locations` list view, open any locations with the :guilabel:`Production`
   location types.
#. Set the :guilabel:`Cost of Production` in the :guilabel:`Accounting` information section.

.. note::
   - When using the Anglo-Saxon accounting standard in combination with the :guilabel:`Perpetual (at
     invoicing)` inventory valuation, the :guilabel:`Valuation account` for finished products and
     components is updated when a manufacturing order is validated, and the :guilabel:`Cost of
     Production` account serves as the counterpart account for both.
   - When using the Continental accounting standard in combination with the :guilabel:`Periodic (at
     closing)` inventory valuation, inventory variations from production (for both finished products
     and components) are recorded separately from general inventory variations recorded at closing,
     isolating production-related changes from receipts and deliveries. However, this account is not
     commonly used when combining the Continental accounting standard with the :guilabel:`Periodic
     (at closing)` inventory valuation.

.. _accounting/inventory-valuation/inventory-valuation-report:

Inventory valuation report
==========================

The :guilabel:`Inventory Valuation` report provides an accurate valuation of inventory. To access
it, go to :menuselection:`Accounting --> Review --> Inventory Valuation`. The report includes
the following sections:

- :guilabel:`Initial Balance`: Current accounting inventory value. Click :guilabel:`Initial Balance`
  to display the stock valuation journal entries.
- :guilabel:`Inventory Loss` (:guilabel:`Periodic (at closing)` only): Only if the :ref:`Loss
  Account <accounting/inventory-valuation/inventory-loss>` was filled in during configuration.
- :guilabel:`Cost of Production` (:guilabel:`Periodic (at closing)` only, even if using this account
  is not common for this valuation method): Only if the :ref:`Cost of Production
  <accounting/inventory-valuation/cost-of-production>` account was entered during configuration.
- :guilabel:`Stock Variation` displays the difference between the posted inventory value and the
  stock valuation recorded in the Inventory app (i.e., the remaining quantity in stock moves).
- :guilabel:`Ending Stock`: Future accounting inventory value when the :ref:`closing entry
  <accounting/inventory-valuation/closing-entry>` is completed. Click :guilabel:`Ending Stock` to
  access the :doc:`Inventory Stock
  <../../../inventory_and_mrp/inventory/warehouses_storage/reporting/stock>` report.

.. note::
   Stock variation is automatically recorded with a stock closing entry at the end of the period set
   during :ref:`configuration <accounting/inventory-valuation/configuration>`, or manually when
   :ref:`generating an entry <accounting/inventory-valuation/closing-entry>`.

.. _accounting/inventory-valuation/closing-entry:

Stock closing entry
-------------------

To create an inventory valuation entry that synchronizes accounting records with stock value, follow
these steps:

#. Open the :ref:`Inventory Valuation <accounting/inventory-valuation/inventory-valuation-report>`
   report.
#. By default, the closing date is set to the end of the fiscal period. If needed, click
   :icon:`fa-calendar` :guilabel:`As of` to select a different inventory valuation date.
#. Click :guilabel:`Generate Entry`.
#. Review the draft :guilabel:`Stock Closing` entry if needed, and click :guilabel:`Post`.

.. note::
   The :guilabel:`Stock Valuation` and :guilabel:`Stock Variation` accounts are then updated in the
   :ref:`general ledger <accounting/reporting/general-ledger>`.

.. _accounting/inventory-valuation/accrual-entries:

Accrual entries
===============

Revenue and expenses are recognized when goods or services are delivered or received, not when
invoiced. Accrual entries are required when the delivery timing differs from invoicing, especially
when a closing is needed.

To check for pending transactions requiring accrual entries:

#. Go to :menuselection:`Accounting --> Review` and select the relevant report: :guilabel:`Bill To
   Receive`, :guilabel:`Invoices To Be Issued`, :guilabel:`Billed Not Received`, and
   :guilabel:`Invoiced Not Delivered`.
#. Click :icon:`fa-calendar` :guilabel:`As of` to change the date, if needed.
#. Select the relevant lines and click :guilabel:`Create Accrual Entries`.
#. In the :guilabel:`Accrued Revenue/Expense Entry` popup, set the :guilabel:`Accrual Account` and
   review the :guilabel:`Reversal Date`, if needed. Then, click :guilabel:`Create Entry`.

.. note::
   Both valuation methods (periodic and perpetual) use accrual entries to update revenues and
   expenses. However, when using the Anglo-Saxon accounting standard in combination with the
   :guilabel:`Perpetual (at invoicing)` inventory valuation, these entries also take value from the
   buffer :guilabel:`Variation account` and allocate it to the appropriate accounts, such as Bill
   to Receive or |GRNI|.

.. _accounting/inventory-valuation/upgrade-process:

Upgrade process for Anglo-Saxon Perpetual
=========================================

In Odoo 19, the stock input/output accounts are no longer used. Any non-zero balances in stock
interim accounts must be transferred to the :ref:`stock valuation account
<accounting/inventory-valuation/valuation-account>` via journal entry to maintain accurate inventory
values after migration. This rebalancing can be performed :ref:`before
<accounting/inventory-valuation/upgrade-process-server-action>` or :ref:`after
<accounting/inventory-valuation/upgrade-process-manual>` upgrading to Odoo 19.

Before upgrading, review received purchase or sales orders that are not yet linked to vendor bills
or invoices, and post any existing draft bills/invoices to reduce the open balance.

.. tip::
   It is recommended to implement the change **after** upgrading to Odoo 19, because a server action
   identifies the open balance in the :guilabel:`Stock Interim` accounts and automatically applies
   the change.

.. important::
   Account structures and valuation scenarios differ across companies. Review these steps with an
   accountant or an Odoo inventory valuation expert to ensure the setup aligns with the company's
   specific setup.

.. _accounting/inventory-valuation/upgrade-process-server-action:

Option 1: Server action journal entry
-------------------------------------

.. important::
   Use a test database created during the upgrade process first, and verify the :doc:`Stock report
   <../../../inventory_and_mrp/inventory/warehouses_storage/reporting/stock>`, accounts, and
   :ref:`Inventory Valuation report <accounting/inventory-valuation/inventory-valuation-report>` to
   ensure accuracy.

After upgrading to Odoo 19, the server action must be applied to each company to balance any
non-zero :guilabel:`Stock Interim` accounts:

#. Go to :menuselection:`Settings --> Users & Companies --> Companies` and click the relevant
   company.
#. Click the :icon:`fa-cog` :guilabel:`(gear)` icon and select :guilabel:`Stock Valuation rebalance
   interim Accounts`. A draft journal entry is automatically generated to balance the open amount.
#. Review the draft journal entry amounts, edit them if necessary, then click :guilabel:`Post`.
#. Check the General Ledger to confirm that the :guilabel:`Stock Interim` accounts are balanced to
   zero and that the remaining amount is recorded in the :guilabel:`Stock valuation` account.
#. Go to :menuselection:`Accounting --> Review --> Inventory Valuation` and :ref:`generate an
   inventory variation entry <accounting/inventory-valuation/closing-entry>`. The increased value on
   the :ref:`Valuation account <accounting/inventory-valuation/valuation-account>` is then
   transferred to the :ref:`Variation account <accounting/inventory-valuation/variation-account>`,
   which is a new type of interim account.
#. Optionally, generate :ref:`accrual entries <accounting/inventory-valuation/accrual-entries>` if
   an accounting closing is required and the Bill to Receive or |GRNI| account, etc., needs
   updating.

.. tip::
   Journal entries can also be created manually if needed, using the same process for
   balancing :guilabel:`Stock Interim` accounts :ref:`before upgrading to Odoo 19
   <accounting/inventory-valuation/upgrade-process-manual>`.

.. _accounting/inventory-valuation/upgrade-process-manual:

Option 2: Manual journal entry
------------------------------

To create the manual journal entry, follow these steps:

#. If all vendor bills or invoices can't be created for all the received purchase/sales orders
   before the upgrade, follow these steps:

   a. Go to :menuselection:`Accounting --> Reporting --> General Ledger`.
   #. Identify the open balance in the :guilabel:`Stock Interim` accounts and create a journal
      entry that debits/credits:

      - The :guilabel:`Stock Interim` account(s) containing the open balance
      - The :guilabel:`Stock Valuation` account

   #. Check the General Ledger to confirm that the :guilabel:`Stock Interim` accounts are balanced to
      zero and that the remaining amount is recorded in the :guilabel:`Stock valuation` account.

#. After upgrading to Odoo 19, go to :menuselection:`Accounting --> Review --> Inventory Valuation`
   and :ref:`generate an inventory variation entry <accounting/inventory-valuation/closing-entry>`.
   The increased value on the :ref:`Valuation account
   <accounting/inventory-valuation/valuation-account>` is then transferred to the :ref:`Variation
   account <accounting/inventory-valuation/variation-account>`, which is a new type of interim
   account.
#. Optionally, generate :ref:`accrual entries <accounting/inventory-valuation/accrual-entries>`
   if an accounting closing is needed and the Bill to Receive or |GRNI| account, etc., must be
   up to date.
