=========================================
How to manage Blanket Purchase Agreements
=========================================

A **Blanket Purchase Order** (BPO), also known as Blanket Purchase Agreement or Call-Off Order, is a contract between you (the customer) and your supplier.  It is used to negotiate a discounted price.  The supplier is benefited by the economies of scale inherent in a large order.  You are benefited by being allowed to take multiple smaller deliveries over a period of time, at a lower price, without paying for the large order immediately.  Each small periodic delivery is called a release or call-off.

As the BPO is a contract, it will have some prearranged conditions.  These usually include:

-   Total quantity of each product to be delivered

-   Completion deadline, by which you must take delivery of the total quantity

-   Unit price for each product

-   Delivery lead time in days for each release

Activate the Purchase Tender function
-------------------------------------

The Blanket Purchase Order function is provided by the Purchase Tender function.  By default, the Purchase Tender is not activated. To be able to use BPOs,
you must first activate the option.

In the Purchases module, open the Configuration menu and click on
Settings. In the Purchase Order section, locate the **Calls for
Tenders** and tick the box Allow using call for tenders... (advanced),
then click on **Apply**.

.. image:: media/manage_multiple_offers00.png
	:align: center

Set Product Supplier and Lead Time
----------------------------------

Set up the supplier on the products that will be added to this blanket order.  Be sure to specify the prearranged **Delivery Lead Time**.

For instructions, please read the chapter `How to set several suppliers on a product? <https://www.odoo.com/documentation/user/10.0/purchase/purchases/master/suppliers.html>`__

Create a Blanket Purchase Order
-------------------------------

To create a new Blanket Purchase Order, open :menuselection:`Purchase --> Purchase Agreements
(PA)`.

.. image:: media/manage_multiple_offers01.png
	:align: center

In the Purchase Agreements window, click on **Create**. A new Purchase
Agreement window opens.

In the **Agreement Type** field, choose Blanket Order.

Choose the **Vendor** with whom you will make the agreement.

Set the **Agreement Deadline** as per the conditions of the agreement.

Set the **Ordering Date** to the starting date of the contract.

Leave the **Delivery Date** empty because we will have different delivery dates with each release.

In the **Products** section, click on **Add an item**. Select products
in the Product list, then insert **Quantity**. You can add as many
products as you wish.

.. image:: media/manage_multiple_offers02.png
	:align: center

Click on **Confirm**.

Now click on the button **New Quotation**. A RfQ is created for this vendor, with the
products chosen on the PT. Repeat this operation for each release.

The RFQ product lines are generated with the **Scheduled Date** set to today.  You will need to change the date manually to add the delivery lead time.  Future versions of Odoo may handle the delivery lead time automatically.

You will probably need to change the **Order Date** on the RFQ to today.  Odoo Version 10 sets the RFQ **Order Date** equal to the BPO **Agreement Deadline** date.  Future versions of Odoo may set the default **Order Date** as today, for blanket orders.

Be careful to change the **Quantity** field on the RFQ.  By default, the RFQ quantity will be for the entire remaining quantity.  Your individual releases should be for some smaller quantity.

.. image:: media/manage_multiple_offers03.png
	:align: center

When all of the releases (purchase orders) have been delivered and paid, you can click on **Validate** and **Done**.

View `Purchase Agreements <https://demo.odoo.com/?module=purchase_requisition.action_purchase_requisition>`__
in our Online Demonstration.

.. seealso:: 

	:doc:`../../overview/process/from_po_to_invoice`

	:doc:`../../overview/process/difference`
