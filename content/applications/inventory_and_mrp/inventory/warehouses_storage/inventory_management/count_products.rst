=====================
Inventory adjustments
=====================

.. |Ia| replace:: Inventory adjustments
.. |ia| replace:: inventory adjustments

In any warehouse management system, the recorded inventory counts in the database might not always
match the actual inventory counts in the warehouse. Discrepancy between counts can be due to
damage, human error, theft, or other factors. As such, inventory adjustments must be made to
reconcile the differences, and ensure that the recorded counts in the database match the actual
counts in the warehouse.

Inventory Adjustments page
==========================

To view the :guilabel:`Inventory Adjustments` page, navigate to :menuselection:`Inventory app -->
Operations --> Physical Inventory`.

.. image:: count_products/inventory-adjustments-page.png
   :alt: In stock products listed on the Inventory adjustments page.

The :guilabel:`Inventory Adjustments` page lists all products that are currently in stock.

.. note::
   Only products with a quantity greater than zero are listed on the :guilabel:`Inventory
   Adjustments` page. To view product lines with zero current quantity, go to
   :menuselection:`Inventory app --> Reporting --> Stock`.

For each product line, the following information is listed:

- :guilabel:`Location`: the specific location in the warehouse where a product is stored. This
  column is **only** visible if :doc:`Storage Locations <use_locations>` are enabled.
- :guilabel:`Favorite`: identifies products that have been favorited.
- :guilabel:`Product`: the product whose quantity is listed on the inventory adjustment line.
- :guilabel:`Lot/Serial Number`: the tracking identifier assigned to the specific product listed. It
  can contain letters, numbers, or a combination of both.

.. note::
   If a specific product has a quantity of more than `1.00` in stock, and more than one serial
   number, or lot number, assigned to it, each uniquely-identified product is displayed on its own
   product line with its own lot/serial number, displayed under the :guilabel:`Lot/Serial Number`
   column.

- :guilabel:`Expiration Date`: the date on which the goods with this serial number are due to
  expire.
- :guilabel:`Last Count Date`: the last time the quantity was updated.
- :guilabel:`Package`: the package containing the quantity listed.
- :guilabel:`On Hand Quantity`: the quantity of the product currently recorded in the database.
- :guilabel:`Unit`: the *unit of measure* in which the product is measured. Unless otherwise
  specified (e.g., in :guilabel:`Pounds` or :guilabel:`Ounces`), the default :abbr:`UoM (Unit of
  Measure)` is :guilabel:`Units`.
- :guilabel:`Counted Quantity`: the real quantity counted during an inventory count. This field is
  left blank by default but can be changed, depending on if it matches the :guilabel:`On Hand
  Quantity` or not.
- :guilabel:`Difference`: the difference between the :guilabel:`On Hand Quantity` and
  :guilabel:`Counted Quantity`, once an inventory adjustment is made. The difference is
  automatically calculated after every inventory adjustment.
- :guilabel:`Scheduled Date`: the date at which a count should be made. If not otherwise specified,
  this date will default to the 31st of December of the current year.
- :guilabel:`User`: the person assigned to the count in the database. This can either be the person
  physically counting the inventory, or applying the count in the database.

.. tip::
   Additional columns are hidden by default. To reveal these columns, click the
   :icon:`oi-settings-adjust` :guilabel:`(adjust)` icon to the far right of the form's top row, and
   reveal any desired column by ticking the checkbox next to that option.

.. _inventory/create-adjustment:

Create an inventory adjustment
------------------------------

To create a new inventory adjustment from the :menuselection:`Inventory Adjustments` page, click
:guilabel:`New`. Doing so creates a new, blank inventory adjustment line at the bottom of the page.

.. tip::
   |Ia| can also be created from the :guilabel:`Forecasted Report` on an individual
   product record. To open the report, navigate to a product record and click the
   :guilabel:`Forecasted` smart button. Then, at the top of the page, click :guilabel:`Update
   Quantity`, then :guilabel:`New`.

   .. image:: count_products/forecast-report.png
      :alt: The Update Quantities button on a Forecast report in the Inventory app.

On this blank inventory adjustment line, click the drop-down menu under the :guilabel:`Product`
column, and select a product. If the selected product is tracked using either lots or serial
numbers, the desired lot or serial number needs to be chosen from the drop-down menu under the
:guilabel:`Lot/Serial Number` column.

.. tip::
   The inventory adjustment line can also be used to create or record lots and serial numbers.

Next, set the value in the :guilabel:`Counted Quantity` column to the quantity counted for that
product during the inventory adjustment process.

To the right of the :guilabel:`Counted Quantity` column, the :guilabel:`Scheduled Date` and
:guilabel:`User` can also be changed via their respective drop-down menus. Changing the
:guilabel:`Scheduled Date` changes the date that the inventory adjustment should be processed on,
and selecting a responsible :guilabel:`User` assigns a user to the specific inventory adjustment
for traceability purposes.

Once all changes have been made to the new inventory adjustment line, click away from the line.
Doing so saves the adjustment, and moves the line to the top of the page.

If the :guilabel:`Counted Quantity` is greater than the :guilabel:`On Hand Quantity`, the value in
the :guilabel:`Difference` column is **green**. If the :guilabel:`Counted Quantity` is less than the
:guilabel:`On Hand Quantity`, the value in the :guilabel:`Difference` column is **red**. If the
quantities match, and have not been changed at all, no value appears in the :guilabel:`Difference`
column.

.. image:: count_products/difference-column.png
   :alt: Difference column on inventory adjustments page.

At this stage, the count (:dfn:`inventory adjustment`) is recorded, but not yet applied. This means
that the quantity on hand before the adjustment has not yet been updated to match the new, real
counted quantity.

.. _inventory/apply-adjustment:

Apply adjusted count
--------------------

|Ia| can be completed in several ways. The first way is to click the
:guilabel:`Apply` button on the line at the far right of the page. The second way is to tick the
checkbox on the far left of the line. Doing so reveals new button options at the top of the page,
one of which is an :guilabel:`Apply` button. Clicking this button instead causes an
:guilabel:`Inventory Adjustment` pop-up window to appear.

From this pop-up menu, a reference or reason can be assigned to the inventory adjustment. By
default, the :guilabel:`Inventory Reason` field is pre-populated with today's date, the date the
adjustment is being made on, but can be changed to reflect whatever reference or reason is desired.

Once ready, click :guilabel:`Apply` to apply the inventory adjustment.

.. note::
   Applying an inventory adjustment simultaneously creates a :doc:`stock move line (SML)
   <../reporting/moves_history>` in the *Moves History* report for traceability.

.. image:: count_products/apply-inventory-adjustment.png
   :alt: Apply all option applies the inventory adjustment once a reason is specified.

Relocate products
=================

|Ia| can also be used to relocate products to different storage locations, or to
different packages. To relocate a product, tick the checkbox at the far left of the line for the
desired product. At the top of the page, click the :guilabel:`Relocate` button. Doing so opens a
pop-up.

.. image:: count_products/relocate-popup.png
   :alt: The Relocate products pop-up on the Inventory Adjustments page.

On the resulting pop-up, enter the following information:

- :guilabel:`To Location`: the new location for the products.
- :guilabel:`To Package`: the new package for the products.
- :guilabel:`Reason for relocation`: the reason for the move.

.. important::
   Product relocations **only** work on internal locations. Products **cannot** be moved between
   companies.

   Only users with *Administrator* rights can perform product relocations.

Set to zero
===========

|Ia| can also be used to clear inventory counts by setting the quantity to zero. To do this, tick
the checkbox at the far left of the line for the desired product. At the top of the page, click the
:icon:`fa-gear` :guilabel:`Actions` button to open a drop-down menu. Click :guilabel:`Set to 0`.
Once this is complete, :ref:`apply <inventory/apply-adjustment>` the adjusted count.

Count products
==============

Counting products is a recurring activity in a warehouse. Once a count is complete, go to
:menuselection:`Inventory app --> Operations --> Physical Inventory` to update the
:guilabel:`Counted Quantity` column for each product line.

On each product line, identify whether the value in the :guilabel:`On Hand Quantity` column recorded
in the database matches the newly-counted value. If the recorded value and the counted value do
match, click the :icon:`fa-bullseye` :guilabel:`Set` icon at the far right of the product line.

Doing so copies the value from the :guilabel:`On Hand Quantity` column over to the
:guilabel:`Counted Quantity` column, and sets the value of the :guilabel:`Difference` column to
`0.00`. Subsequently, once applied, an inventory move with `0.00` :guilabel:`Quantity Done` is
recorded in the product's inventory adjustment history.

.. image:: count_products/zero-move.png
   :alt: Zero count inventory adjustment move.

If the newly-counted value for a given product does **not** match the value in the :guilabel:`On
Hand Quantity` recorded in the database, instead of clicking the :icon:`fa-bullseye` :guilabel:`Set`
icon, record the real value in the field in the :guilabel:`Counted Quantity` column.

To do so, click the field in the :guilabel:`Counted Quantity` column on the specific inventory
adjustment line for the product whose count is being changed. This automatically assigns a
:guilabel:`Counted Quantity` of `0.00`.

To change this value, type in a new value that matches the real, newly-counted value. Then, click
away from the line. Doing so saves the adjustment, and automatically adjusts the value in the
:guilabel:`Difference` column.

If the :guilabel:`Counted Quantity` is greater than the :guilabel:`On Hand Quantity`, the value in
the :guilabel:`Difference` column is **green**. If the :guilabel:`Counted Quantity` is less than the
:guilabel:`On Hand Quantity`, the value in the :guilabel:`Difference` column is **red**. If the
quantities match, and have not been changed at all, no value appears in the :guilabel:`Difference`
column.

Subsequently, once applied, a move with the difference between the :guilabel:`On Hand Quantity` and
the :guilabel:`Counted Quantity` is recorded in the product's inventory adjustment history.

.. image:: count_products/history-inventory-adjustments.png
   :alt: Inventory Adjustments History dashboard detailing a list of prior product moves.

The :guilabel:`Actions` menu appears when one or more products' checkboxes are selected. The
:guilabel:`Actions` menu includes the option to :guilabel:`Set to quantity on hand`, which sets the
selected products' :guilabel:`Counted Quantity` to the :guilabel:`On Hand Quantity`, and
:guilabel:`Set to 0`, which sets the selected products' :guilabel:`Counted Quantity` to zero.

.. image:: count_products/inventory-adjustment-actions.png
   :alt: Inventory Adjustments Actions menu.

.. important::
   Sometimes a count occurs, but cannot be applied in the database right away. In the time between
   the actual count and applying the inventory adjustment, product moves can occur. In that case,
   the on-hand quantity in the database can change and no longer be consistent with the counted
   quantity. As an extra precaution, Odoo asks for confirmation before applying the inventory
   adjustment.

Revert an inventory adjustment
==============================

To revert the changes made in an inventory adjustment, navigate to :menuselection:`Inventory -->
Reporting --> Moves History`.

Tick the checkbox at the far left of the line for the desired product. At the top of the page, click
the :icon:`fa-gear` :guilabel:`Actions` button to open a drop-down menu, and click :guilabel:`Revert
Inventory Adjustment`.

.. note::
   After an inventory adjustment is reverted, the line is not removed from the :guilabel:`Moves
   History` report. Instead, an additional line is added, this time with the word `[reverted]` added
   to the :guilabel:`Reference` column.

   .. image:: count_products/reverted-adjustment.png
      :alt: The reference fields on the Moves History report in the Inventory app.

Change inventory count frequency
================================

By default, the *scheduled date* for |ia| are always scheduled for the 31st of December of the
current year. However, for some companies, it is crucial that they have an accurate inventory count
at all times. In such cases, the default scheduled date can be modified.

To modify the default scheduled date, go to :menuselection:`Inventory app --> Configuration -->
Settings`. Then, in the :guilabel:`Operations` section, locate the :guilabel:`Annual Inventory Day
and Month` setting, which includes a drop-down menu that is set to `31 December` by default.

.. image:: count_products/annual-inventory.png
   :alt: Adjust the next inventory count date with the Annual Inventory Day and Month setting.

To change the day, click the `31`, enter a number from `1-31`, depending on the desired month of the
year.

Then, to change the month, click :guilabel:`December` to reveal the drop-down menu, and select the
desired month.

Once all desired changes have been made, click :guilabel:`Save` to save all changes.

.. _inventory/plan-counts:

Plan big inventory counts
-------------------------

To plan big inventory counts, such as a full count of everything currently in stock, first navigate
to :menuselection:`Inventory app --> Operations --> Physical Inventory`.

Then, select the desired products to be counted by ticking the checkbox on the far left of each
product line.

.. tip::
   To request a count of **all** products currently in stock, tick the checkbox at the top of the
   table, in the header row next to the :guilabel:`Location` label. This selects **all** product
   lines.

.. image:: count_products/count-popup.png
   :alt: Request a count pop-up on inventory adjustments page.

Once all desired products have been selected, click the :guilabel:`Request a Count` button at the
top of the page. Doing so opens the :guilabel:`Request a Count` pop-up window, where the following
information can be filled:

- :guilabel:`Inventory Date`: the planned date of the count.
- :guilabel:`User`: the user responsible for the count.
- :guilabel:`Accounting Date`: the date at which the inventory adjustment will be accounted.
- :guilabel:`Count`: to leave the on-hand quantity of each product line blank, select
  :guilabel:`Leave Empty`. To pre-fill the on-hand quantity of each product line with the current
  value recorded in the database, select :guilabel:`Set Current Value`.

.. note::
   The :guilabel:`Leave Empty` option forces the employee conducting the audit to manually type in
   the number they counted, while the :guilabel:`Set Current Value` option only requires the
   employee to *verify* the counted quantity and click :guilabel:`Apply`.

Finally, once ready, click :guilabel:`Confirm` to request the count.

.. image:: count_products/count-popup.png
   :alt: Request a count popup on inventory adjustments page.

.. important::
   In the Odoo **Barcode** app, users can only view inventory counts that are assigned to *them*,
   and are scheduled for *today* or *earlier*.

   Sometimes a count occurs, but cannot be applied in the database right away. In the time between
   the actual count and applying the inventory adjustment, product moves can occur. In that case,
   the on-hand quantity in the database can change and no longer be consistent with the counted
   quantity. As an extra precaution, Odoo asks for confirmation before applying the inventory
   adjustment.

Adjustment history
==================

Details regarding inventory adjustment can be viewed by clicking the :icon:`fa-history`
:guilabel:`History` icon.

The user who performed the count is listed in parenthesis in the :guilabel:`Reference` field, while
the user who applied the count is listed in the :guilabel:`Done By`.

.. image:: count_products/adjustment-history.png
   :alt: The history record for an inventory adjustment.

Inventory audit
---------------

An inventory audit can be accessed from the :guilabel:`Inventory Adjustment` page. This audit
includes an inventory record both before and after a count is completed, to track what changed.

On the :guilabel:`Inventory Adjustment` page, tick the checkbox at the top-left of the page to
select all of the lines. Then click the :guilabel:`Request a Count` button. On the pop-up, set
:guilabel:`Count` to :guilabel:`Set Current Value`, then click :guilabel:`Confirm`.

After returning to the :guilabel:`Inventory Adjustment` page, select all of the lines again. Click
:menuselection:`Print --> Count Sheet`. The :guilabel:`Count Sheet` exports in PDF form.

.. seealso::
   :doc:`cycle_counts`
