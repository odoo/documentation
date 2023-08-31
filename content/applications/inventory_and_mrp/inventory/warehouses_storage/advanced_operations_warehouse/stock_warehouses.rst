===========================================================
Sell stock from multiple warehouses using virtual locations
===========================================================

While keeping stock and selling inventory from one warehouse might work for smaller companies,
bigger companies might need to keep stock in, or sell from, multiple warehouses in multiple
locations.

In Odoo, sometimes products included in a single sales order might take stock from two (or more)
warehouses. In Odoo, pulling products from multiple warehouses to satisfy sales demands can be done
by using *virtual locations*.

.. note::
   In order to create virtual locations in warehouses and proceed to the following steps,
   the :guilabel:`Storage Locations` and :guilabel:`Multi-Step Routes` features will need to be
   enabled in the :menuselection:`Settings` app.

   To do so, go to :menuselection:`Inventory --> Configuration --> Settings`, scroll down to the
   :guilabel:`Warehouse` section, and click the checkboxes next to :guilabel:`Storage Locations`
   and :guilabel:`Multi-Step Routes`. Then, :guilabel:`Save` the changes to finish.

Create and configure a virtual parent location
==============================================

Before creating any virtual stock locations, a new warehouse will need to be created. This new
warehouse will act as a *virtual* warehouse, and will be the *parent* location of other physical
warehouses.

.. spoiler:: Why a "virtual" warehouse?

   Virtual warehouses are great for companies with multiple physical warehouses. This is because
   a situation might arise when one warehouse runs out of stock of a particular product, but
   another warehouse still has stock on-hand. In this case, stock from these two (or more)
   warehouses could be used to fulfill a single sales order.

   The "virtual" warehouse acts as a single aggregator of all the inventory stored in a company's
   physical warehouses, and is used (for traceability purposes) to create a hierarchy of locations
   in Odoo.

Create a new warehouse
----------------------

To create a new warehouse, go to :menuselection:`Inventory --> Configuration --> Warehouses`, and
click :guilabel:`Create`. From here, the warehouse :guilabel:`Name` and :guilabel:`Short Name` can
be changed, and other warehouse details can be changed under the :guilabel:`Warehouse Configuration`
tab.

Under the :guilabel:`Shipments` heading, set the number of steps used to process :guilabel:`Incoming
Shipments` and :guilabel:`Outgoing Shipments` by selecting between the :guilabel:`1 step`,
:guilabel:`2 steps`, and :guilabel:`3 steps` radio buttons. The desired option for
:guilabel:`Incoming Shipments` and :guilabel:`Outgoing Shipments` will depend on the warehouse's
procurement process, and might differ for individual products or product categories.

.. seealso::
   - :doc:`How to choose the right flow to handle receipts and deliveries?
     </applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/shipments_deliveries>`

Under the :guilabel:`Resupply` heading, configure the method(s) for how the warehouse resupplies
its inventory:

- :guilabel:`Resupply Subcontractors`: resupply subcontractors with components from this warehouse.
- :guilabel:`Manufacture to Resupply`: when products are manufactured, they can be manufactured in
  this warehouse.
- :guilabel:`Manufacture`: to produce right away, move the components to the production location
  directly and start the manufacturing process; to pick first and then produce, unload the
  components from the stock to input location first, and then transfer it to the production
  location.
- :guilabel:`Buy to Resupply`: when products are bought, they can be delivered to this warehouse.
- :guilabel:`Resupply From`: automatically create routes to resupply this warehouse from another
  chosen warehouse

.. tip::
   *Routes* can be set and configured directly from the :guilabel:`Warehouse` form, by clicking on
   the :guilabel:`Routes` smart button. Once the warehouse is configured, virtual *Locations* can be
   created.

.. image:: stock_warehouses/stock-warehouses-create-warehouse.png
   :align: center
   :alt: The edit screen for creating a new warehouse.

In order to apply this virtual warehouse as the *parent* location of two *child* location
warehouses, there need to be two warehouses configured with physical stock locations.

.. example::

   | **Parent Warehouse**
   | :guilabel:`Warehouse`: `Virtual Warehouse`
   | :guilabel:`Location`: `VWH`

   | **Child Warehouses**
   | :guilabel:`Warehouses`: `Warehouse A` and `Warehouse B`
   | :guilabel:`Locations`: `WHA/Stock` and `WHB/Stock`

Create a virtual parent location
--------------------------------

.. important::
   In order to take stock from multiple warehouses to fulfill a sales order, there need to be at
   least **two** warehouses acting as *child locations* of the *virtual parent location* warehouse.

To create and edit *Locations*, go to :menuselection:`Inventory --> Configuration --> Locations`.
All :guilabel:`Locations` are listed here, including the *Stock* :guilabel:`Location` of the virtual
warehouse that was created. Click into the *Stock* :guilabel:`Location` for the virtual warehouse
that was previously created (:dfn:`Warehouse Name/Stock`).

Then, under the :guilabel:`Additional Information` section, change the :guilabel:`Location Type`
from :guilabel:`Internal Location` to :guilabel:`View`. :guilabel:`Save` the changes.

This identifies this :guilabel:`Location` as a *virtual location*, which is used to create a
hierarchical structure for a warehouse and aggregate its *child locations*.

.. note::
   Products can *not* be stored in a :guilabel:`View` :guilabel:`Location Type`.

.. image:: stock_warehouses/stock-warehouses-location-types.png
   :align: center
   :alt: Warehouse location types in location creation screen.

Configure physical warehouse locations
======================================

Navigate back to the :guilabel:`Locations` overview (via the breadcrumbs), and remove any filters
in the :guilabel:`Search Bar`. Then, click into the first physical warehouse :guilabel:`Location`
that was previously created to be a *child location*, and click :guilabel:`Edit`.

Under :guilabel:`Parent Location`, select the virtual warehouse from the drop-down menu, and
:guilabel:`Save` changes. Then, navigate back to the :guilabel:`Locations` overview, and repeat this
step for the second physical warehouse stock location. Be sure to :guilabel:`Save` changes again.

Both locations are now *child locations* of the virtual warehouse *parent location*. This allows
stock to be taken from multiple locations to fulfill a single sales order, if there is not enough
stock in any one location (provided they are both tied to the same virtual warehouse *parent
location*).

Example flow: Sell a product from a virtual warehouse
=====================================================

.. note::
   To sell products from multiple warehouses using a virtual *parent* location in this flow, there
   must be at least **two** products and at least **two** warehouses configured - with at least
   **one** product with quantity on-hand in each warehouse, respectively.

To create a new request for quotation, or RFQ, navigate to the :menuselection:`Sales` app, and
click :guilabel:`Create` from the :guilabel:`Quotations` overview. Fill out the information on the
new quotation by adding a :guilabel:`Customer`, and click :guilabel:`Add a product` to add the two
products stored in the two warehouses.

Then, click the :guilabel:`Other Info` tab on the sales order form. Under the :guilabel:`Delivery`
section, change the :guilabel:`Warehouse` field value listed to the virtual warehouse that was
previously created. Once the warehouse has been changed, click :guilabel:`Confirm` to convert the
quotation into a sales order.

Now that the quotation has been confirmed as a sales order, click the :guilabel:`Delivery` smart
button. From the warehouse delivery form, confirm that the :guilabel:`Source Location` value matches
the :guilabel:`Warehouse` field value from the sales order. Both should list the virtual warehouse
location.

.. important::
   The :guilabel:`Source Location` on the warehouse delivery form and the :guilabel:`Warehouse`
   under the :guilabel:`Other Info` tab on the sales order form *must* match in order for the
   products included in the sales order to be pulled from different warehouses.

  - If the virtual warehouse is not the value in the :guilabel:`Source Location` field on the
    warehouse delivery form, then click :guilabel:`Edit`, make the change, and click
    :guilabel:`Save`.
  - If the virtual warehouse is not the value in the :guilabel:`Warehouse` field on the sales order,
    then a new quotation may need to be generated.
  - If the :guilabel:`Warehouse` field is missing on the sales order form, then the virtual
    warehouse (and its children warehouses) may not have been set up correctly, in which case,
    review the documentation above again to make sure all settings/configuration were done properly.

.. image:: stock_warehouses/stock-warehouses-delivery-order.png
   :align: center
   :alt: Delivery order with matching source and child locations.

Finally, on the warehouse delivery form, under the :guilabel:`Detailed Operations` tab, confirm
that the *Locations* values under the :guilabel:`From` column for each product matches to the *child
locations* that are tied to the virtual *parent location*.

.. note::
   To view which *Locations* the products are coming from on the drop-down menus, click the
   :guilabel:`internal link (arrow)` icon to expand the *Location* information. If needed, it can be
   changed from here (granted there is quantity on hand for the product in that location).

Once everything has been properly set, click :guilabel:`Validate` and then :guilabel:`Apply` to
validate the delivery. Then, navigate back to the sales order form (via the breadcrumbs), and
click :guilabel:`Create Invoice` to invoice for the sales order.

.. tip::
   To use a virtual *parent* location as the default warehouse for sales orders, each salesperson
   can have the virtual warehouse assigned to them from the drop-down menu next to
   :guilabel:`Default Warehouse` on their employee form.

.. image:: stock_warehouses/stock-warehouses-employee-form.png
   :align: center
   :alt: Default warehouse location on employee form.
