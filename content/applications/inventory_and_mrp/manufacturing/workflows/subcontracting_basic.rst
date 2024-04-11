====================
Basic subcontracting
====================

.. |SO| replace:: :abbr:`SO (Sales Order)`
.. |PO| replace:: :abbr:`PO (Purchase Order)`
.. |POs| replace:: :abbr:`POs (Purchase Orders)`
.. |BoM| replace:: :abbr:`BoM (Bill of Materials)`

In manufacturing, subcontracting is the process of a company engaging a third-party manufacturer, or
subcontractor, to manufacture products that are then sold by the contracting company.

In basic subcontracting, the subcontractor is responsible for acquiring the necessary components.
This means that the contracting company only has to worry about what happens to subcontracted
products once they are produced.

The workflow for purchasing a product manufactured using basic subcontracting is similar to the one
used when purchasing a non-subcontracted product from a vendor. The main differences are the way
that subcontracted products are configured, and the fact that subcontracted products take longer to
be sent from the vendor, since they must first be manufactured by them.

Configuration
=============

To use subcontracting in Odoo, navigate to :menuselection:`Manufacturing app --> Configuration -->
Settings`, and tick the checkbox next to the :guilabel:`Subcontracting` setting, under the
:guilabel:`Operations` heading. Then, click :guilabel:`Save`.

Once the :guilabel:`Subcontracting` setting is enabled, it is also necessary to properly configure
the subcontracted product, and the product's |BoM|.

.. _manufacturing/workflows/subcontracting_basic/product-config:

Configure product
-----------------

To configure a product for basic subcontracting, navigate to :menuselection:`Inventory app -->
Products --> Products`, and select a product, or create a new one by clicking :guilabel:`New`.

On the product form, select the :guilabel:`Purchase` tab, and add the product's subcontractor as a
vendor by clicking :guilabel:`Add a line`, selecting the subcontractor in the :guilabel:`Vendor`
drop-down menu, and entering a price in the :guilabel:`Price` field.

Then, click on the :guilabel:`Inventory` tab, and use the :guilabel:`Routes` field to configure a
route that determines what happens to the finished product once it has been manufactured by the
subcontractor.

If the finished product is shipped back to the contracting company, make sure the :guilabel:`Buy`
route is selected. In addition, select the :guilabel:`Replenish on Order (MTO)` route to
automatically create a |PO| for the product upon confirmation of a sales order (SO), unless there is
enough stock on-hand to fulfill the |SO|.

If the finished product is shipped directly to the customer by the subcontractor, make sure that
**only** the :guilabel:`Dropship` route is selected.

Configure BoM
-------------

To configure a |BoM| for basic subcontracting, click the :guilabel:`Bill of Materials` smart button
on the product form, and select the desired |BoM|.

Alternatively, navigate to :menuselection:`Manufacturing app --> Products --> Bills of Materials`,
and select the |BoM| for the subcontracted product.

.. seealso::
   For a full overview of |BoM| configuration, see the :doc:`Bill of materials
   <../basic_setup/bill_configuration>` documentation.

In the :guilabel:`BoM Type` field, select the :guilabel:`Subcontracting` option. Then, add one or
more subcontractors in the :guilabel:`Subcontractors` field that appears below.

.. image:: subcontracting_basic/bom-type.png
   :align: center
   :alt: The "BoM Type" field on a BoM, configured to manufacture the product using subcontracting.

Finally, click on the :guilabel:`Miscellaneous` tab. In the :guilabel:`Manuf. Lead Time` field,
enter the number of days it takes the subcontractor to manufacture the product. This number is
factored in when calculating the product's expected arrival date.

.. note::
   When using basic subcontracting, there is no need to list components in the
   :guilabel:`Components` tab of the |BoM|, since the components required for manufacturing, and the
   means by which they are acquired, are handled by the subcontractor.

Basic subcontracting workflow
=============================

The basic subcontracting workflow consists of up to four steps:

#. Create a sales order (SO) for the subcontracted product; doing so creates a |PO| to purchase the
   product from the subcontractor.
#. Confirm the |PO| created in the previous step, or create a new |PO|; doing so creates a receipt
   order or a dropship order.
#. Process the receipt once the subcontractor has finished manufacturing the subcontracted product,
   and shipped it back to the contracting company, **OR** process the dropship order to ship the
   product directly to the customer.
#. If the workflow was started by creating an |SO|, and the finished product is not dropshipped to
   the end customer, process the delivery order once the product is shipped to the customer.

The specific number of steps depends on the reason that the subcontracted product is being purchased
from the subcontractor.

If the reason is to fulfill a specific customer order, the process starts with creating an |SO|, and
ends with delivering the product to the customer, or having the subcontractor dropship it to them.

If the reason is to increase the quantity of stock on-hand, the process starts with creating a |PO|,
and ends with receiving the product into inventory.

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
   the product's form, **and** there is not enough stock of the product on-hand to fulfill the |SO|.

   If there is enough stock on-hand, confirming an |SO| for the product creates a delivery order
   instead, because Odoo assumes that the |SO| is fulfilled using the stock in the warehouse.

   This is not the case for subcontracted products that are dropshipped to the end customer. In that
   case, a |PO| is **always** created, even if there is enough stock on-hand.

Process PO
----------

If a |PO| was created in the previous step, navigate to it by clicking the :guilabel:`Purchase`
smart button at the top of the |SO|, or by going to :guilabel:`Purchase app --> Orders --> Purchase
Orders`, and selecting the |PO|. Then, click :guilabel:`Confirm Order` to confirm it, and move on to
the next step.

If a |PO| was not created in the previous step, do so now by navigating to :menuselection:`Purchase
app --> Orders --> Purchase Orders`, and clicking :guilabel:`New`.

Begin filling out the |PO| by selecting a subcontractor from the :guilabel:`Vendor` drop-down menu.
In the :guilabel:`Products` tab, click :guilabel:`Add a product` to create a new product line.
Select a subcontracted product in the :guilabel:`Product` field, and enter the quantity in the
:guilabel:`Quantity` field. Finally, click :guilabel:`Confirm Order` to confirm the |PO|.

When a |PO| is confirmed for a product manufactured using basic subcontracting, a receipt or
dropship order is automatically created, and can be accessed from the corresponding
:guilabel:`Receipt` or :guilabel:`Dropship` smart button that appears at the top of the |PO|.

.. figure:: subcontracting_basic/subcontractor-po.png
   :align: center
   :alt: A PO for a basic subcontracting product, with a Receipt smart button at the top of the page.

   PO for a basic subcontracting product, with a Receipt smart button at the top of the page.

Process receipt or dropship order
---------------------------------

Once the subcontractor has finished manufacturing the product, they either ship it to the
contracting company, or dropship it to the end customer, depending on how the product was
:ref:`configured <manufacturing/workflows/subcontracting_basic/product-config>`.

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

If the subcontracting workflow was started by a customer |SO|, and the finished product was **not**
dropshipped to the customer, but rather delivered to the contracting company, it is necessary to
ship the product to the customer, and process the delivery order.

Once the product has been shipped to the customer, navigate to the :menuselection:`Sales` app, and
select the |SO|. Select the :guilabel:`Delivery` smart button at the top of the page to open the
delivery order, and click :guilabel:`Validate` on the order to confirm that the product has been
shipped.
