======================
Resupply subcontractor
======================

.. |SO| replace:: :abbr:`SO (Sales Order)`
.. |PO| replace:: :abbr:`PO (Purchase Order)`
.. |POs| replace:: :abbr:`PO (Purchase Orders)`
.. |BoM| replace:: :abbr:`BoM (Bill of Materials)`

In manufacturing, subcontracting is the process of a company engaging a third-party manufacturer, or
subcontractor, to manufacture products that are then sold by the contracting company.

In Odoo, the *Resupply Subcontractor on Order* route is used to deliver the necessary components for
a subcontracted product to the subcontractor, each time a purchase order (PO) for that product is
confirmed.

The subcontractor then uses the components to manufacture the desired product, before shipping it
back to the contracting company, or dropshipping it to the end customer.

.. important::
   It is necessary to understand the differences between the *Resupply Subcontractor on Order* and
   the *Dropship Subcontractor on Order* routes.

   While both routes are used to supply a subcontractor with the components required for
   manufacturing a product, they differ in how the components are sourced.

   When using *Resupply Subcontractor on Order*, components are shipped from the warehouse of the
   contracting company.

   When using *Dropship Subcontractor on Order*, components are purchased from a vendor and shipped
   directly to the subcontractor.

   The choice of which route to use depends upon the specific requirements of the subcontracting
   company and their subcontractors.

   See the :doc:`subcontracting_dropship` documentation for a full overview of the *Dropship
   Subcontractor on Order* route.

Configuration
=============

To use the *Resupply Subcontractor on Order* route, navigate to :menuselection:`Manufacturing app
--> Configuration --> Settings`, and enable the checkbox next to :guilabel:`Subcontracting`, under
the :guilabel:`Operations` heading.

Once the *Subcontracting* setting is enabled, it is also necessary to properly configure the
subcontracted product, the product's bill of materials (BoM), and the components listed on the
|BoM|.

.. _manufacturing/workflows/subcontracting_resupply/product-config:

Configure product
-----------------

To configure a product for the *Resupply Subcontractor on Order* route, navigate to
:menuselection:`Inventory app --> Products --> Products`, and select a product, or create a new one
by clicking :guilabel:`New`.

Select the :guilabel:`Purchase` tab, and add the product's subcontractor as a vendor by clicking
:guilabel:`Add a line`, selecting the subcontractor in the :guilabel:`Vendor` drop-down menu, and
entering a price in the :guilabel:`Price` field.

.. note::
   The value entered in the :guilabel:`Price` field on the :guilabel:`Purchase` tab of the of the
   subcontracted product's page is the amount paid to the subcontractor for the manufacturing of the
   product.

   This does not represent the total cost of the product, which includes other elements, like the
   cost of the product's components.

Then, click on the :guilabel:`Inventory` tab to configure a route that determines what happens to
the finished product, once it has been manufactured by the subcontractor.

If the finished product is shipped back to the contracting company, make sure that the
:guilabel:`Buy` route is selected. In addition, select the :guilabel:`Replenish on Order (MTO)`
route to automatically create a |PO| for the product upon confirmation of a sales order (SO), unless
there is enough stock on-hand to fulfill the |SO|.

If the finished product is shipped directly to the customer by the subcontractor, make sure that
only the :guilabel:`Dropship` route is selected.

Configure BoM
-------------

To configure a |BoM| for the *Resupply Subcontractor on Order* route, click the :guilabel:`Bill of
Materials` smart button on the product's page, and select the |BoM|.

Alternatively, navigate to :menuselection:`Manufacturing app --> Products --> Bills of Materials`,
and select the |BoM| for the subcontracted product.

.. seealso::
   For a full overview of |BoM| configuration, see the :doc:`Bill of materials
   <../basic_setup/bill_configuration>` documentation.

In the :guilabel:`BoM Type` field, select the :guilabel:`Subcontracting` option. Then, add one or
more subcontractors in the :guilabel:`Subcontractors` field that appears below.

.. image:: subcontracting_resupply/bom-type.png
   :align: center
   :alt: The "BoM Type" field on a BoM, configured to manufacture the product using subcontracting.

Finally, make sure that all necessary components are specified on the :guilabel:`Components` tab. To
add a new component, click :guilabel:`Add a line`, select the component in the :guilabel:`Component`
drop-down menu, and specify the required quantity in the :guilabel:`Quantity` field.

Configure components
--------------------

To configure components for the *Resupply Subcontractor on Order* route, navigate to each component
from the |BoM| by selecting the component's name in the :guilabel:`Components` tab, and clicking the
:guilabel:`➡️ (right arrow)` button to the right of the name.

Alternatively, navigate to each component by going to :menuselection:`Inventory app --> Products -->
Products`, and selecting the component.

On the component product form, click on the :guilabel:`Inventory` tab and select the
:guilabel:`Resupply Subcontractor on Order` route in the :guilabel:`Routes` section.

Repeat the process for every component that must be sent to the subcontractor.

Resupply subcontractor on order workflow
========================================

The resupply subcontractor on order workflow consists of up to five steps:

#. Create an |SO| for the subcontracted product; doing so creates a |PO| to purchase the product
   from the subcontractor.
#. Confirm the |PO| created in the previous step, or create a new |PO|; doing so creates a *Resupply
   Subcontractor* order, as well as a receipt order or a dropship order.
#. Process the *Resupply Subcontractor* order once components for the subcontracted product have
   been sent to the subcontractor.
#. Process the receipt once the subcontractor has finished manufacturing the subcontracted product,
   and shipped it back to the contracting company **OR** process the dropship order to ship the
   product directly to the customer.
#. If the workflow was started by creating an |SO|, and the finished product is not dropshipped to
   the end customer, process the delivery order once the product is shipped to the customer.

The specific number of steps depends on the reason that the subcontracted product is being purchased
from the subcontractor.

If the reason is to fulfill a specific customer order, the process starts with creating an |SO|, and
ends with delivering the product to the customer, or having the subcontractor dropship it to them.

If the reason is to increase the quantity of stock on-hand, the process starts with creating a |PO|,
and ends with receiving the product into inventory.

.. important::

   While the *Resupply Subcontractor on Order* route can be used to automatically resupply a
   subcontractor upon confirmation of a |PO|, it is also possible to create a resupply order
   manually. This workflow is useful when it is necessary to resupply the subcontractor without
   creating a |PO|.

   To resupply a subcontractor manually, navigate to the :menuselection:`Inventory` app, and click
   on the :guilabel:`Resupply Subcontractor` card. Create a new *Resupply Subcontractor* order by
   clicking :guilabel:`New`.

   In the :guilabel:`Delivery Address` field, select the subcontractor to whom the components should
   be sent.

   Then, add each component to the :guilabel:`Operations` tab by clicking :guilabel:`Add a line`,
   selecting the component in the :guilabel:`Product` drop-down field, and specifying a quantity in
   the :guilabel:`Demand` field.

   Finally, click :guilabel:`Mark as Todo` to register the order. Once the components have been sent
   to the subcontractor, click :guilabel:`Validate` to confirm that the order has been sent.

Create SO
---------

It is only necessary to complete this step if the product is being purchased from the subcontractor
to fulfill a customer need. If the product is being purchased to increase the quantity of stock
on-hand, move on to the next step.

To create a new |SO|, navigate to :menuselection:`Sales app --> Orders --> Orders`, and click
:guilabel:`New`.

Select the customer in the :guilabel:`Customer` drop-down menu. Then, click :guilabel:`Add a
product` on the :guilabel:`Order Lines` tab, select a subcontracted product in the
:guilabel:`Product` drop-down menu, and enter a quantity in the :guilabel:`Quantity` field.

Click :guilabel:`Confirm` to confirm the |SO|, at which point a :guilabel:`Purchase` smart button
appears at the top of the page. This opens the |PO| created to purchase the subcontracted product
from the subcontractor.

.. note::
   An |SO| for the product only creates a |PO| if the *Replenish on Order (MTO)* route is enabled on
   the product's page, **and** there is not enough stock of the product on-hand to fulfill the |SO|.

   If there is enough stock on-hand, confirming an |SO| for the product instead creates a delivery
   order, because Odoo assumes that the |SO| is fulfilled using the stock in the warehouse.

   This is not the case for subcontracted products that are dropshipped to the end customer. In that
   case, a |PO| is **always** created, even if there is enough stock on-hand.

Process PO
----------

If a |PO| was created in the previous step, navigate to :guilabel:`Purchase app --> Orders -->
Purchase Orders`, and select the |PO|. Then, click :guilabel:`Confirm Order` to confirm it.

If a |PO| was not created in the previous step, do so now by navigating to :menuselection:`Purchase
app --> Orders --> Purchase Orders`, and clicking :guilabel:`New`.

Begin filling out the |PO| by selecting a subcontractor from the :guilabel:`Vendor` drop-down menu.
In the :guilabel:`Products` tab, click :guilabel:`Add a product` to create a new product line.
Select a subcontracted product in the :guilabel:`Product` field, and enter the quantity in the
:guilabel:`Quantity` field. Finally, click :guilabel:`Confirm Order` to confirm the |PO|.

When a |PO| is confirmed for a product that requires resupplying a subcontractor with components, a
receipt or dropship order is automatically created, and can be accessed from the corresponding
:guilabel:`Receipt` or :guilabel:`Dropship` smart button that appears at the top of the |PO|.

In addition, a *Resupply Subcontractor* order is created to ship the required components to the
subcontractor. This order can also be accessed from the |PO|, by clicking the :guilabel:`Resupply`
smart button at the top of the page.

.. figure:: subcontracting_resupply/subcontractor-po.png
   :align: center
   :alt: A PO for a *Resupply Subcontractor on Order* product, with Resupply and Receipt smart
         buttons at the top of the page.

   A PO for a *Resupply Subcontractor on Order* product, with Resupply and Receipt smart buttons at
   the top of the page.

Process Resupply Subcontractor order
------------------------------------

Once the subcontracted product's components have been sent to the subcontractor, navigate to
:menuselection:`Purchase app --> Orders --> Purchase Orders`, and select the |PO|.

Click the :guilabel:`Resupply` smart button at the top of the screen to open the *Resupply
Subcontractor* order, and click :guilabel:`Validate` to confirm that the components have been sent
to the subcontractor.

Alternatively, navigate to the :menuselection:`Inventory` app, click the :guilabel:`# To Process`
button on the :guilabel:`Resupply Subcontractor` card, and select the *Resupply Subcontractor*
order. Then, click :guilabel:`Validate` to confirm that the components have been sent to the
subcontractor.

Process receipt or dropship order
---------------------------------

Once the subcontractor has finished manufacturing the product, they either ship it to the
contracting company, or dropship it to the end customer, depending on how the product was
:ref:`configured <manufacturing/workflows/subcontracting_resupply/product-config>`.

Process receipt
~~~~~~~~~~~~~~~

If the subcontractor ships the finished product to the contracting company, once it has been
received, navigate to :menuselection:`Purchase app --> Orders --> Purchase Orders`, and select the
|PO|.

Click the :guilabel:`Receive Products` button at the top of the |PO|, or the :guilabel:`Receipt`
smart button at the top of the page, to open the receipt. Then, click :guilabel:`Validate` at the
top of the receipt to enter the product into inventory.

Process dropship order
~~~~~~~~~~~~~~~~~~~~~~

If the subcontractor dropships the product, once they have sent it, navigate to
:menuselection:`Purchase app --> Orders --> Purchase Orders`, and select the |PO|.

Select the :guilabel:`Dropship` smart button at the top of the page to open the dropship order, and
click :guilabel:`Validate` at the top of the order to confirm that the product has been sent to the
customer.

Process delivery order
----------------------

If the subcontracting workflow was started by a customer |SO|, and the finished product was **NOT**
dropshipped to the customer, but rather delivered to the contracting company, it is necessary to
ship the product to the customer, and process the delivery order.

Once the product has been shipped to the customer, navigate to the :menuselection:`Sales` app, and
select the |SO|. Select the :guilabel:`Delivery` smart button at the top of the page to open the
delivery order, and click :guilabel:`Validate` on the order to confirm that the product has been
shipped to the customer.
