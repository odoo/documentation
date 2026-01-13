=====================
Inventory adjustments
=====================

.. |Ia| replace:: Inventory adjustments
.. |ia| replace:: inventory adjustments

In any warehouse management system, the recorded inventory counts in the database might not always
match the actual inventory counts in the warehouse. Discrepancy between counts can be due to damage,
human error, theft, or other factors. As such, inventory adjustments must be made to reconcile the
differences, and ensure that the recorded counts in the database match the actual counts in the
warehouse.

Physical Inventory page
=======================

To view the :guilabel:`Physical Inventory` page, navigate to :menuselection:`Inventory app -->
Operations --> Physical Inventory`.

The :guilabel:`Physical Inventory` page lists all products that are currently in stock.

.. image:: count_products/physical-inventory-page.png
   :alt: In stock products listed on the Physical Inventory page.

.. note::
   Only products with a quantity greater than zero are listed on the :guilabel:`Physical Inventory`
   page. To view product lines with zero current quantity, go to :menuselection:`Inventory app -->
   Reporting --> Stock`.

For each product line, the following information is listed:

- :guilabel:`Product`: the product whose quantity is listed on the inventory adjustment line.
- :guilabel:`Lot/Serial Number`: the tracking identifier assigned to the specific product listed. It
  can contain letters, numbers, or a combination of both.

   .. note::
      If a specific product has a quantity of more than `1.00` in stock, and more than one serial
      number, or lot number, assigned to it, each uniquely-identified product is displayed on its
      own product line with its own lot/serial number, displayed under the :guilabel:`Lot/Serial
      Number` column.

- :guilabel:`Scheduled`: the date at which a count should be made. If not otherwise specified, this
  date will default to the 31st of December of the current year.
- :guilabel:`User`: the person assigned to the count in the database. This can either be the person
  physically counting the inventory, or applying the count in the database.
- :guilabel:`On Hand`: the quantity of the product currently recorded in the database.
- :guilabel:`Counted`: the real quantity counted during an inventory count. This field is left blank
  by default but can be changed, depending on if it matches the :guilabel:`On Hand` quantity or not.
- :guilabel:`Difference`: the difference between the :guilabel:`On Hand` quantity and
  :guilabel:`Counted` quantity, once an inventory adjustment is made. The difference is
  automatically calculated after every inventory adjustment.

.. tip::
   Some columns are hidden by default. To reveal these columns, click the :icon:`oi-settings-adjust`
   :guilabel:`(adjust)` icon to the far right of the form's top row, and reveal any desired column
   by selecting the checkbox next to that option.

The following additional columns are available, depending on the settings in the database:

- :guilabel:`Location`: the specific location in the warehouse where a product is stored. This
  column is **only** visible if :doc:`Storage Locations <use_locations>` are enabled.
- :guilabel:`Product Category`: the category of the product list on the inventory adjustment line.
- :guilabel:`Last Count Date`: the last time the quantity was updated.
- :guilabel:`Expiration Date`: the date on which the goods with this serial number are due to
  expire. This column is only available if :doc:`Expiration Dates
  <../../product_management/product_tracking/expiration_dates>` is enabled in the *Inventory*
  settings.
- :guilabel:`Package`: the package containing the quantity listed.
- :guilabel:`Unit`: the :doc:`unit of measure <../../product_management/configure/uom>` in which the
  product is measured. Unless otherwise specified (e.g., in :guilabel:`Pounds` or
  :guilabel:`Ounces`), the default :abbr:`UoM (Unit of Measure)` is :guilabel:`Units`.

.. _inventory/create-adjustment:

Create an inventory adjustment
------------------------------

To update an existing physical inventory entry, click into the corresponding field in the
:guilabel:`Counted` column for the product that must be adjusted. Adjust the count, then click
:guilabel:`Apply All`.

To create a new inventory adjustment from the :menuselection:`Physical Inventory` page, click
:guilabel:`New`. Doing so creates a new, blank inventory adjustment line at the bottom of the page.

.. tip::
   |Ia| can also be created from the :guilabel:`Forecasted Report` on an individual product record.
   To open the report, navigate to a product record and click the :guilabel:`Forecasted` smart
   button. Then, at the top of the page, click :guilabel:`Update Quantity`, then :guilabel:`New`.

   .. image:: count_products/forecast-report.png
      :alt: The Update Quantity button on a Forecast report in the Inventory app.

On this blank inventory adjustment line, click the drop-down menu under the :guilabel:`Product`
column, and select a product. If the selected product is tracked using either lots or serial
numbers, the desired lot or serial number must be chosen from the drop-down menu under the
:guilabel:`Lot/Serial Number` column.

.. tip::
   The inventory adjustment line can also be used to create or record lots and serial numbers.

Next, set the value in the :guilabel:`Counted` column to the quantity counted for that product
during the inventory adjustment process.

The :guilabel:`Scheduled` date and :guilabel:`User` can also be changed via their respective
drop-down menus. Changing the :guilabel:`Scheduled` date changes the date that the inventory
adjustment should be processed on, and selecting a responsible :guilabel:`User` assigns a user to
the specific inventory adjustment for traceability purposes.

Once all changes have been made to the new inventory adjustment line, click away from the line.
Doing so saves the adjustment, and moves the line alphabetically with the other products in
inventory.

If the :guilabel:`Counted` quantity is greater than the :guilabel:`On Hand` quantity, the value in
the :guilabel:`Difference` column is *green*. If the :guilabel:`Counted` quantity is less than the
:guilabel:`On Hand` quantity, the value in the :guilabel:`Difference` column is *red* with a
negative value. If the quantities match, and have not been changed at all, `0.00` appears in the
:guilabel:`Difference` column.

.. image:: count_products/difference-column.png
   :alt: Difference column on Physical Inventory page.

At this stage, the count (*inventory adjustment*) is recorded, but not yet applied. This means that
the quantity on hand before the adjustment has not yet been updated to match the new, real counted
quantity.

.. _inventory/apply-adjustment:

Apply adjusted count
--------------------

|Ia| can be completed in three ways.

Apply a single adjustment
~~~~~~~~~~~~~~~~~~~~~~~~~

Some companies do not require adjustment reasons to be recorded. In this circumstance, you can apply
adjustments to a single line at a time by clicking the :guilabel:`Apply` button on the line at the
far right of the page.

Apply multiple adjustments
~~~~~~~~~~~~~~~~~~~~~~~~~~

To apply multiple adjustments at once, or to ensure that reasons for adjustments are recorded, use
one of the following methods to apply multiple adjustments at once:

- Click the :guilabel:`Apply All` button on the top left corner of the page.
- Select the checkbox on the far left of the line. Doing so reveals new button options at the top of
  the page, one of which is an :guilabel:`Apply` button.

.. note::
   It may be necessary to click the :guilabel:`Save` button at the top left of the screen before
   applying the changes.

Clicking these buttons opens a *Physical Inventory* pop-up window.

In the *Physical Inventory* window, a reference or reason can be assigned to the inventory
adjustment. By default, the :guilabel:`Inventory Reason` field is pre-populated with `Physical
Inventory`. Modify this text as necessary. Today's date is populated in the :guilabel:`Counting
Date` field. Once ready, click :guilabel:`Update Quantities` to apply the inventory adjustment.

.. image:: count_products/apply-inventory-adjustment.png
   :alt: Apply All option applies the inventory adjustment once a reason is specified.

.. example::
   An FDA-regulated factory is required by law to trace, log, and explain all inventory adjustments
   to ensure that it remains in compliance with federal law. Any product stock moves and associated
   reasonings would need to be documented thoroughly to ensure that all product is accounted for in
   case of a recall.

.. note::
   Applying an inventory adjustment simultaneously creates a :doc:`stock move record
   <../reporting/moves_history>` in the *Moves History* report for traceability.

Relocate products
=================

|Ia| can also be used to relocate products to different storage locations, or to different packages.
To relocate a product, click on the checkbox at the far left of the line for the desired product. At
the top of the page, click the :icon:`fa-cog` :guilabel:`Actions` button, then select
:guilabel:`Relocate`. Doing so opens a pop-up.

On the resulting pop-up, enter the following information:

- :guilabel:`To Location`: the new location for the products.
- :guilabel:`To Package`: the new package for the products. This field only appears if you have
  :guilabel:`Packages` enabled in the *Inventory* settings.
- :guilabel:`Reason for relocation`: the reason for the move.

Click :guilabel:`Confirm` to confirm the move.

.. image:: count_products/relocate-popup.png
   :alt: The Relocate products pop-up on the Physical Inventory page.

.. important::
   Product relocations **only** work on internal locations. Products **cannot** be moved between
   companies.

   Only users with *Administrator* rights can perform product relocations.

Set to zero
===========

|Ia| can also be used to clear inventory counts by setting the quantity to zero. To do this, select
the checkbox at the far left of the line for the desired product. At the top of the page, click the
:icon:`fa-gear` :guilabel:`Actions` button to open a drop-down menu. Click :guilabel:`Set to 0`.
Once this is complete, :ref:`apply <inventory/apply-adjustment>` the adjusted count.

.. important::
   Setting the quantity to zero for a product that has already been reserved for sales orders will
   set the forecasted quantity to negative. The product will be marked as unavailable for current
   delivery orders.

Count products
==============

Counting products is a recurring activity in a warehouse. Once a count is complete, go to
:menuselection:`Inventory app --> Operations --> Physical Inventory` to update the
:guilabel:`Counted` quantity for each product line.

On each product line, identify whether the value in the :guilabel:`On Hand` column recorded in the
database matches the newly-counted value. If the recorded value and the counted value match, enter
the 'On Hand' quantity in the :guilabel:`Counted` column.

Doing so sets the value of the :guilabel:`Difference` column to `0.00`. Subsequently, once applied,
an inventory move with `0.00` :guilabel:`Done` is recorded in the product's inventory adjustment
history.

.. image:: count_products/zero-move.png
   :alt: Zero count inventory adjustment move.

If the newly-counted value for a given product does **not** match the value in the :guilabel:`On
Hand` column recorded in the database, record the real value in the field in the :guilabel:`Counted`
column.

To do so, click the field in the :guilabel:`Counted` column on the specific inventory adjustment
line for the product whose count is being changed. Specify the updated count in the field.

To change this value, type in a new value that matches the real, newly-counted value. Then, click
away from the line. Doing so saves the adjustment, and automatically adjusts the value in the
:guilabel:`Difference` column.

If the :guilabel:`Counted` quantity is greater than the :guilabel:`On Hand` quantity, the value in
the :guilabel:`Difference` column is *green*. If the :guilabel:`Counted` quantity is less than the
:guilabel:`On Hand` quantity, the value in the :guilabel:`Difference` column is *red* and is a
negative value. If the quantities match, and have not been changed at all, `0.00` appears in the
:guilabel:`Difference` column.

Subsequently, once applied, a move with the difference between the :guilabel:`On Hand` quantity and
the :guilabel:`Counted` quantity is recorded in the product's inventory adjustment history.

.. image:: count_products/history-inventory-adjustments.png
   :alt: Inventory Adjustments History dashboard detailing a list of prior product moves.

The :icon:`fa-cog` :guilabel:`Actions` menu appears when one or more products' checkboxes are
selected. The :icon:`fa-cog` :guilabel:`Actions` menu includes the option to :guilabel:`Set to
quantity on hand`, which sets the selected products' :guilabel:`Counted` quantity to the
:guilabel:`On Hand` quantity.

.. image:: count_products/inventory-adjustment-actions.png
   :alt: Physical Inventory Actions menu.

.. note::
   If other inventory adjustments were created during the count process, click :guilabel:`Save` in
   the top-left corner to save the current entry. Make sure this is done before opening the
   :icon:`fa-cog` :guilabel:`Actions` menu to set the count.

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

Select the checkbox at the far left of the line for the desired product. At the top of the page,
click the :icon:`fa-gear` :guilabel:`Actions` button to open a drop-down menu, and click
:guilabel:`Revert Inventory Adjustment`.

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
   To request a count of **all** products currently in stock, select the checkbox at the top of the
   table, in the header row next to the :guilabel:`Location` label. This selects **all** product
   lines.

Once all desired products have been selected, click the :guilabel:`Request a Count` button at the
top of the page. Doing so opens the :guilabel:`Inventory Request` pop-up window, where the following
information can be filled:

- :guilabel:`Assign to`: the user responsible for the count.
- :guilabel:`Scheduled at`: the planned date of the count.
- :guilabel:`Show Expected Quantity`: whether the assigned user can see the expected quantity.

.. image:: count_products/count-popup.png
   :alt: Request a count pop-up on the Physical Inventory page.

Finally, once ready, click :guilabel:`Confirm` to request the count.

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

An inventory audit can be accessed from the :guilabel:`Physical Inventory` page. This audit includes
an inventory record both before and after a count is completed, to track what changed.

On the :guilabel:`Physical Inventory` page, select the checkbox at the top-left of the page to
select all of the lines. Then click the :guilabel:`Request a Count` button. On the pop-up, click
:guilabel:`Confirm`.

After returning to the :guilabel:`Physical Inventory` page, select all of the lines again. Click
:menuselection:`Print --> Count Sheet`. The :guilabel:`Count Sheet` exports in PDF form.

.. seealso::
   :doc:`cycle_counts`
