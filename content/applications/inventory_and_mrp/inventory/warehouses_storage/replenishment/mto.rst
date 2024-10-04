========================
Replenish on order (MTO)
========================

.. |SO| replace:: :abbr:`SO (sales order)`
.. |SOs| replace:: :abbr:`SOs (sales orders)`
.. |MO| replace:: :abbr:`MO (manufacturing order)`
.. |PO| replace:: :abbr:`PO (purchase order)`
.. |MTO| replace:: :abbr:`MTO (make to order)`
.. |RFQ| replace:: :abbr:`RFQ (request for quotation)`
.. |BOM| replace:: :abbr:`BOM (bill of materials)`

*Replenish on order*, also known as *MTO* (make to order), is a replenishment strategy that creates
a draft order for a product every time it is required to fulfill a sales order (SO), or when it is
needed as a component in a manufacturing order (MO).

For products that are purchased from a vendor, a request for quotation (RFQ) is created to replenish
the product, while an |MO| is created for products that are manufactured. The creation of an |RFQ|
or |MO| occurs every time an |SO| or |MO| that requires the product is confirmed, regardless of the
current stock level of the product being ordered.

.. important::
   In order to use the |MTO| route, the :guilabel:`Multi-Step Routes` feature must be enabled. To do
   so, navigate to :menuselection:`Inventory app --> Configuration --> Settings`, and tick the
   checkbox next to :guilabel:`Multi-Step Routes`, under the :guilabel:`Warehouse` heading.

   Finally, click :guilabel:`Save` to save the change.

.. _inventory/warehouses_storage/unarchive-mto:

Unarchive MTO route
===================

By default, Odoo sets the |MTO| route as *archived*. This is because |MTO| is a somewhat niche
workflow that is only used by certain companies. However, it is easy to unarchive the route in just
a few simple steps.

To do so, begin by navigating to :menuselection:`Inventory app --> Configuration --> Routes`. On the
:guilabel:`Routes` page, click the :icon:`fa-caret-down` :guilabel:`(down arrow)` icon on the right
side of the search bar, and click the :guilabel:`Archived` filter to enable it.

.. image:: mto/archived-filter.png
   :align: center
   :alt: The archived filter on the Routes page.

After enabling the :guilabel:`Archived` filter, the :guilabel:`Routes` page shows all routes which
are currently archived. Tick the checkbox next to :guilabel:`Replenish on Order (MTO)`, then click
the :icon:`fa-cog` :guilabel:`Actions` button to reveal a drop-down menu. From the drop-down menu,
select :guilabel:`Unarchive`.

.. image:: mto/unarchive-button.png
   :align: center
   :alt: The unarchive action on the Routes page.

Finally, remove the :guilabel:`Archived` filter from the search bar. The :guilabel:`Routes` page now
shows all unarchived routes, including :guilabel:`Replenish on Order (MTO)`, which is selectable on
the *Inventory* tab of each product page.

Configure product for MTO
=========================

With the |MTO| route unarchived, products can now be properly configured to use replenish on order.
To do so, begin by going to :menuselection:`Inventory app --> Products --> Products`, then select an
existing product, or click :guilabel:`New` to configure a new one.

On the product page, select the :guilabel:`Inventory` tab and enable the :guilabel:`Replenish on
Order (MTO)` route in the :guilabel:`Routes` section, along with the :guilabel:`Buy` or
:guilabel:`Manufacture` route.

.. important::
   The :guilabel:`Replenish on Order (MTO)` route **does not** work unless another route is selected
   as well. This is because Odoo needs to know how to replenish the product when an order is placed
   for it (buy or manufacture it).

.. image:: mto/select-routes.png
   :align: center
   :alt: Select the MTO route and a second route on the Inventory tab.

If the product is purchased from a vendor to fulfill |SOs|, enable the :guilabel:`Can be Purchased`
checkbox under the product name. Doing so makes the :guilabel:`Purchase` tab appear alongside the
other tabs below.

Click the :guilabel:`Purchase` tab and specify a :guilabel:`Vendor` and the :guilabel:`Price` they
sell the product for.

.. important::
   Specifying a vendor is essential for this workflow, because Odoo cannot generate an |RFQ| without
   knowing who the product is purchased from.

If the product is manufactured, make sure it has a bill of materials (BOM) configured for it. To do
so, click the :guilabel:`Bill of Materials` smart button at the top of the screen, then click
:guilabel:`New` on the :guilabel:`Bill of Materials` page to configure a new |BOM| for the product.

.. seealso::
   For a full overview of |BOM| creation, see the documentation on :doc:`bills of materials
   <../../../manufacturing/basic_setup/bill_configuration>`.

Replenish using MTO
===================

After configuring a product to use the |MTO| route, a replenishment order is created for it every
time an |SO| or |MO| including the product is confirmed. The type of order created depends on the
second route selected in addition to |MTO|.

For example, if *Buy* was the second route selected, then a |PO| is created upon confirmation of an
|SO|.

.. important::
   When the |MTO| route is enabled for a product, a replenishment order is always created upon
   confirmation of an |SO| or |MO|. This is the case, even if there is enough stock of the product
   on-hand to fulfill the |SO|, without buying or manufacturing additional units of it.

While the |MTO| route can be used in unison with the *Buy* or *Manufacture* routes, the *Buy* route
is used as the example for this workflow. Begin by navigating to the :menuselection:`Sales` app,
then click :guilabel:`New`, which opens a blank quotation form.

On the blank quotation form, add a :guilabel:`Customer`. Then, click :guilabel:`Add a product` under
the :guilabel:`Order Lines` tab, and enter a product configured to use the *MTO* and *Buy* routes.
Click :guilabel:`Confirm`, and the quotation is turned into an |SO|.

A :guilabel:`Purchase` smart button now appears at the top of the page. Clicking it opens the |RFQ|
associated with the |SO|.

Click :guilabel:`Confirm Order` to confirm the |RFQ|, and turn it into a |PO|. A purple
:guilabel:`Receive Products` button now appears above the |PO|. Once the products are received,
click :guilabel:`Receive Products` to open the receipt order, and click :guilabel:`Validate` to
enter the products into inventory.

Return to the |SO| by clicking the :guilabel:`SO` breadcrumb, or by navigating to
:menuselection:`Sales app --> Orders --> Orders`, and selecting the|SO|.

Finally, click the :guilabel:`Delivery` smart button at the top of the order to open the delivery
order. Once the products have been shipped to the customer, click :guilabel:`Validate` to confirm
the delivery.

.. seealso::
   For information on workflows that include the |MTO| route, see the following documentation:

   - :doc:`resupply_warehouses`
   - :doc:`../../../manufacturing/subcontracting/subcontracting_basic`
   - :doc:`../../../manufacturing/advanced_configuration/sub_assemblies`
