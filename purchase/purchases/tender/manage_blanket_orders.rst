============================
How to manage Blanket Orders
============================

A **Blanket Order** is a contract between you (the customer) and your supplier. 
It is used to negotiate a discounted price. The supplier is benefited by the
economies of scale inherent in a large order. You are benefited by being allowed
to take multiple smaller deliveries over a period of time, at a lower price,
without paying for the large order immediately. Each small periodic delivery
is called a release or call-off.

As the blanket order is a contract, it will have some prearranged conditions.
These usually include:

-   Total quantity of each product to be delivered

-   Completion deadline, by which you must take delivery of the total quantity

-   Unit price for each product

-   Delivery lead time in days for each release

Activate the Purchase Agreements
--------------------------------

The Blanket Order function is provided by the Purchase Agreements feature. 
By default, the Purchase Agreements is not activated. To be able to use blanket orders,
you must first activate the option.

In the Purchases module, open the Configuration menu and click on
Settings. In the **Orders** section, locate the **Purchase Agreements**
and tick the box, then click on **Save**.

.. image:: media/manage_multiple_offers00.png
	:align: center

Create a Blanket Order
----------------------

To create a new blanket order, open :menuselection:`Purchase --> Purchase Agreements`.

.. image:: media/manage_multiple_offers01.png
	:align: center

In the Purchase Agreements window, click on **Create**. A new Purchase
Agreement window opens.

In the **Agreement Type** field, choose Blanket Order.

Choose the **Vendor** with whom you will make the agreement.

Set the **Agreement Deadline** as per the conditions of the agreement.

Set the **Ordering Date** to the starting date of the contract.

Leave the **Delivery Date** empty because we will have different delivery dates
with each release.

In the **Products** section, click on **Add an item**. Select products
in the Product list, then insert **Quantity**. You can add as many
products as you wish.

.. image:: media/manage_multiple_offers02.png
	:align: center

Click on **Confirm**.

Now click on the button **New Quotation**. A RfQ is created for this vendor, with the
products chosen on the PT. Repeat this operation for each release.

Be careful to change the **Quantity** field on the RFQ.  By default, the RFQ quantity
will be for the entire remaining quantity. Your individual releases should be for some smaller
quantity.

.. image:: media/manage_multiple_offers03.png
	:align: center

When all of the releases (purchase orders) have been delivered and paid, you can click on
**Validate** and **Done**.

View `Purchase Agreements <https://demo.odoo.com/?module=purchase_requisition.action_purchase_requisition>`__
in our Online Demonstration.

.. seealso:: 

	:doc:`../../overview/process/from_po_to_invoice`

	:doc:`../../overview/process/difference`
