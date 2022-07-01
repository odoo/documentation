============================
Manage Amazon orders in Odoo
============================

Synchronization of orders
=========================

Orders are automatically fetched from Amazon and synchronized in Odoo at regular intervals.
The synchronization is based on the Amazon status: only orders whose status has changed since the
last synchronization are fetched from Amazon. For **FBA** (Fulfilled by Amazon), only **Shipped**
and **Canceled** orders are fetched. For **FBM** (Fulfilled by Merchant), the same is done for
**Unshipped** and **Canceled** orders. For each synchronized order, a sales order and a customer are
created in Odoo if they are not yet registered.

When an order is canceled in Amazon and was already synchronized in Odoo, the corresponding sales
order is automatically canceled in Odoo.

.. note::
   To force the synchronization of an order whose status has not changed since the last
   synchronization, activate the :ref:`developer mode <developer-mode>`, navigate to your Amazon
   account and modify the date under :menuselection:`Orders Follow-up --> Last Order Sync`. Pick a
   date anterior to the last status change of the order that you wish to synchronize and save.

.. tip::
   To synchronize immediately the orders of your Amazon account switch to :ref:`developer mode
   <developer-mode>`, head to your Amazon account and click on **SYNC ORDERS**. The same can be done
   with pickings by clicking on **SYNC PICKINGS**.

Manage deliveries in FBM
========================

When a **FBM** (Fulfilled by Merchant) order is synchronized in Odoo, a picking is created along
with the sales order and the customer. You can either ship all the ordered products to your customer
at once or ship products partially by using backorders.

When a picking related to the order is confirmed, a notification is sent to Amazon who will, in
turn, notify the customer that the order (or a part of it) is on its way.

.. important::
   Amazon requires to provide a tracking reference with each delivery. You'll need to assign a
   carrier. If the carrier doesn't automatically provide a tracking reference, you'll need to set
   one manually. This concerns all marketplaces.

.. tip::
   - If your chosen carrier isn't one supported by Odoo, you can still create a carrier bearing its
     name (e.g. create a carrier named `Colissimo`). This name is case insensitive, but be careful
     about typos, as Amazon won't recognize them.
   - Create a delivery carrier named `Self Delivery` to inform Amazon that you make your own
     deliveries. You still have to enter a tracking reference.
   - Keep in mind that the customer is notified by email about the delivery, and the carrier and
     tracking reference are displayed in the email to the customer.

.. seealso::
   - :doc:`../../../inventory_and_mrp/inventory/shipping/setup/third_party_shipper`

Follow deliveries in FBA
========================

When a **FBA** (Fulfilled by Amazon) order is synchronized in Odoo, a stock move is recorded for
each sales order item so that it is saved in your system. Inventory managers can find such moves
in :menuselection:`Inventory --> Reporting --> Product Moves`. They pick up products in a specific
inventory location called **Amazon**. This location represents your stock in Amazon's warehouses
and allows you to manage the stock of your products under the FBA program.

.. tip::
   To follow your Amazon (FBA) stock in Odoo, you can make an inventory adjustment after
   replenishing it. You can also trigger an automated replenishment from reordering rules on the
   Amazon location.

.. tip::
   The Amazon location is configurable by Amazon account managed in Odoo. All accounts of the same
   company use the same location by default. It is however possible to follow the stock by
   marketplace. First, remove the marketplace for which you want to follow the stock separately from
   the list of synchronized marketplaces. Then, create another registration for this account and
   remove all marketplaces, except the one to isolate from the others. Finally, assign another stock
   location to the second registration of your account.

Issue invoices and register payments
====================================

You can issue invoices for Amazon orders in Odoo. Click **Create Invoice** in the sales order to do
so. You can also do it in batch from the list view of orders. Then, confirm and send the invoices to
your customers.

.. tip::
   To display only Amazon-related orders on the list view, you can filter orders based on the sales
   team.

As the customer has paid Amazon as an intermediary, you should register invoice payments in a
payment journal dedicated to Amazon (e.g. Amazon Payments, with a dedicated intermediary account).
You can do the same with the vendor bill received from Amazon and dedicated to commissions. When you
receive the balance on your bank account at the end of the month and record your bank statements in
Odoo, you simply credit the Amazon intermediary account by the amount received.

Follow your Amazon sales in sales reporting
===========================================

As a sales team is set on your account under the tab **Order Follow-up**, this helps you give quick
glances at the figures in just a few clicks in Sales reporting. By default, your account's sales
team is shared between all of your company's accounts.

If you wish, you can change the sales team on your account for another to perform a separate
reporting for the sales of this account.

.. tip::
   It is also possible to perform reporting on a per-marketplace basis in a similar fashion. First,
   remove the marketplace you wish to track separately from the list of synchronized marketplaces.
   Then, create another registration for this account and remove all marketplaces, except the one to
   isolate from the others. Finally, assign another sales team to one of the two registrations of
   your account.

.. seealso::
   - :doc:`features`
   - :doc:`setup`
