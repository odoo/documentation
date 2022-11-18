=================================================================
How to choose the right inventory flow to handle delivery orders?
=================================================================

Depending on factors such as the type of items you sell, the size of
your warehouse, the number of orders you register everyday... the way you
handle deliveries to your customers can vary a lot.

Odoo allows you to handle shipping from your warehouse in 3 different
ways:

-  **One step (shipping)**: Ship directly from stock

-  **Two steps (pick + ship)**: Bring goods to output location before
   shipping

-  **Three steps (pick + pack + ship)**: Make packages into a dedicated
   location, then bring them to the output location for shipping

For companies having a rather small warehouse and that do not require
high stock of items or don't sell perishable items, a one step shipping
is the simplest solution, as it does not require a lot of configuration
and allows to handle orders very quickly.

Using inventory methods such as FIFO, LIFO and FEFO require to have at
least two steps to handle a shipment. The picking method will be
determined by the removal strategy, and the items removed will then be
shipped to the customer. This method is also interesting if you hold
larger stocks and especially when the items you stock are big in size.

The three steps system becomes useful in more specific situations, the
main one being for handling very large stocks. The items are transferred
to a packing area, where they will be assembled by area of destination,
and then set to outbound trucks for final delivery to the customers.

Configuration
=============

One step flow
-------------

Please read documentation on :doc:`one_step`

Two steps flow
--------------

Please read documentation on :doc:`two_steps`

Three steps flow
----------------

Please read documentation on :doc:`three_steps`
