=======================
shopee order management
=======================

Order synchronization
=====================

Orders are automatically fetched from shopee, and synchronized in Odoo, at **regular intervals**.

The synchronization is based on the shopee status: only orders whose status has changed since the
last synchronization are fetched from shopee. This includes changes on either end (shopee or Odoo).

When an order is canceled on Shopee, it will update in Odoo. On the other hand, if an order is 
canceled on Odoo, the change won’t be reflected on Shopee.

For every synchronized order, Odoo creates a sales order and a customer (contact), as long as the 
customer hasn't been previously imported from Shopee or doesn't already exist in the database.

.. note::
   The principal of the synchronization is: We only fetch orders that needs to be shipped.
   'SHIPPED', 'CANCEL', 'UNPAID', 'COMPLETED' orders do not need to be shipped at the moment we 
   synchronize the order. 


Force synchronization
=====================

In order to force the synchronization of an order, whose status has **not** changed since the
previous synchronization, start by activating the :ref:`developer mode <developer-mode>`. This
includes changes on either end (shopee or Odoo).

Then, navigate to the shopee account in Odoo (:menuselection:`Sales app --> Configuration -->
Settings --> Connectors --> shopee Sync --> shopee Accounts`), and modify the date under
:menuselection:`Orders Follow-up --> Last Order Sync`.

Be sure to pick a date that occurs prior to the last status change of the desired order to
synchronize and save. This will ensure synchronization occurs correctly.


.. tip::
   To immediately synchronize the orders of an shopee account, switch to :ref:`developer mode
   <developer-mode>`, head to the shopee account in Odoo, and click :guilabel:`Sync Orders`. The
   same can be done with pickings by clicking :guilabel:`Sync Pickings`.

Manage deliveries in FBM
========================

Whenever an FBM (Fulfilled by Merchant) order is synchronized in Odoo, a picking is instantly
created in the *Inventory* app, along with a sales order and customer record. 

When a picking related to the order is confirmed, you also have to click on “Arrange Shipment” 
in your Shopee Seller Account in order to be able to generate and fetch the Shipping Label 
and Tracking Number  


.. important::
   shopee requires users to provide a tracking reference with each delivery. This is needed to
   assign a carrier.

   If the carrier doesn't automatically provide a tracking reference, one must be set manually. This
   rule applies to all shopee marketplaces.

.. tip::
   If the chosen carrier isn't supported by Odoo, a carrier with the same name can still be created
   (e.g. create a carrier named `easyship`). The name used is **not** case sensitive, but be mindful
   to avoid typos. If there are typos, shopee will **not** recognize them. Next, create a delivery
   carrier named `Self Delivery` to inform shopee that the user will make the deliveries. Even with
   this route, a tracking reference still **must** be entered. Remember, the customer is notified by
   email about the delivery, and the carrier, along with the tracking reference, are displayed in
   the email to the customer.

.. seealso::
   :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/third_party_shipper`

.. _manage/manage_delivery_errors:

Manage errors when synchronizing deliveries
-------------------------------------------

Sometimes, shopee can fail to correctly process all the information sent by Odoo. In this case, Odoo
sends an email listing all the shipments that failed and the errors shopee sent with them. In
addition, these shipments are flagged with a :guilabel:`Synchronization with shopee failed` tag.

Usually, the error can be corrected directly in the shopee backend or in Odoo. If the problem is
corrected in Odoo, synchronize the shipment again using the :guilabel:`Retry shopee Sync` button.

.. note::
   It might happen that Odoo receives a notification from shopee saying that some delivery
   information was not processed, but without specifying which shipments were affected. In that
   case, all the shipments in an unknown state will be treated as if they failed to synchronize.
   Once Odoo receives a notification from shopee saying that a shipment was processed, its tag will
   change to :guilabel:`Synchronized with shopee`. To speed up this process, on your shopee account,
   click on :guilabel:`Sync Orders` to manually synchronize these orders, or click on
   :guilabel:`Recover Order` and enter the relevant shopee Order Reference.

Follow deliveries in FBA
========================

When an FBA (Fulfilled by shopee) order is synchronized in Odoo, a stock move is recorded in the
*Inventory* app for each sales order item. That way, it's saved in the system.

Inventory managers can access these stock moves by navigating to :menuselection:`Inventory app -->
Reporting --> Moves History`.

For FBA orders, the stock move is automatically created in Odoo by the shopee connector, thanks to
the shipping status of shopee. When sending new products to shopee, the user should manually create
a picking (delivery order) to transfer these products from their warehouse to the shopee location.

.. tip::
   To follow *shopee (FBA)* stock in Odoo, make an inventory adjustment after replenishing stock. An
   automated replenishment from reordering rules can also be triggered on the shopee location.

The shopee location is configurable by accessing the shopee account managed in Odoo. To access
shopee accounts in Odoo navigate to :menuselection:`Sales app --> Configuration --> Settings -->
Connectors --> shopee Sync --> shopee Accounts`.

All accounts of the same company use the same shopee location, by default. However, it is possible
to follow the stock filtered by marketplace.

To do that, first remove the marketplace, where the desired stock to follow separately can be found,
from the list of synchronized marketplaces, which can be found by navigating to
:menuselection:`Sales app --> Configuration --> Settings --> Connectors --> shopee Sync --> shopee
Accounts`.

Next, create another registration for this account, and remove all marketplaces--- **except** the
marketplace this is desired to be isolated from the others.

Lastly, assign another stock location to the second registration of the account.

Invoice and register payments
=============================

Issue invoices
--------------

Due to shopee's policy of not sharing customer email addresses, it is **not** possible to send
invoices directly to shopee customers from Odoo. However, it **is** possible to manually upload the
generated invoices from Odoo to the shopee back-end.

Additionally, for B2B clients, it is currently required to manually retrieve VAT numbers from the
shopee back-end **before** creating an invoice in Odoo.

Register payments
-----------------

Since customers pay shopee as an intermediary, creating a dedicated *Bank* journal (e.g. named
`shopee Payments`), with a dedicated *Bank and Cash* intermediary account is recommended.

Additionally, as shopee makes a single monthly payment, selecting all the invoices linked to a
single payment is necessary when registering payments.

To do that, use the appropriate :guilabel:`Journal` dedicated to shopee payments, and select
:guilabel:`Batch Deposit` as the :guilabel:`Payment Method`.

Then, select all the generated payments, and click :menuselection:`Actions --> Create batch payment
--> Validate`.

.. tip::
   This same action can be performed with vendor bills from shopee dedicated to commissions.

   When the balance is received in the bank account at the end of the month, and the bank statements
   are recorded, credit the shopee intermediary account by the amount received.

Follow shopee sales in sales reporting
======================================

On the shopee account profile in Odoo, a sales team is set under the :guilabel:`Order Follow-up`
tab.

This gives quick access to important metrics related to sales reporting. By default, the shopee
account's sales team is shared between all of the company's accounts.

If desired, the sales team on the account can be changed for another, in order to perform a separate
reporting for the sales of this account.

.. tip::
   It is also possible to perform reporting on a per-marketplace basis.

   First, remove the desired marketplace from the list of synchronized marketplaces.

   To access the list of synchronized marketplaces in Odoo, navigate to :menuselection:`Sales app
   --> Configuration --> Settings --> Connectors --> shopee Sync --> shopee Accounts`.

   Then, create another registration for this account, and remove all other marketplaces **except**
   the one to isolate.

   Lastly, assign another sales team to one of the two registrations of the account.

.. seealso::
   - :doc:`features`
   - :doc:`setup`
