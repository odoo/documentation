=========================================================
Request for Quotation, Purchase Tender or Purchase Order?
=========================================================

Although they are intimately related, Requests for Quotation, Purchase
Tenders and Purchase Orders are not the same.

A **Request for Quotation** (RfQ) is used when you plan to purchase
some products and you would like to receive a quote for those
products. In Odoo, the Request for Quotation is used to send your list
of desired products to your supplier. Once your supplier has answered
your request, you can choose to go ahead with the offer and purchase
or to turn down the offer.

A **Purchase Tender** (PT), also known as Call for Bids, is used to
drive competition between several suppliers in order to get the best
offer for a list of products. In comparison to the RfQ, a Purchase
Tender is sent to multiple suppliers, stating each are competing with
one another, and that the best offer will win. The main interest is that
it usually leads to better offers.

The **Purchase Order** (PO) is the actual order that you place to the
supplier that you chose, either through a RfQ, a Purchase Tender, or
simply when you already know which supplier to order from.

When to use?
============

A **RfQ** is interesting when you have never purchased the products with
that supplier before and therefore don't know their price. It is also
useful if you want to challenge your suppliers once you have a
well-established relationship with them. You can also use it to assess
the cost of a project and see if it makes it feasible.

A **Purchase Tender** is used for public offers that require an open
offering from several suppliers. It is also useful when you need to make
a one-off order for a product and you would like to get the best offer,
no matter which supplier it is. It may be used when your supplier has
not been up to your standards and you would like to either push them to
deliver a better service, or find a replacement in their competitors.

When not to use?
================

**RfQ**\ s become unnecessary once you have established your favorite
supplier for each item, and will only increase the delay in the delivery
of your items. In that case, the process will be simpler by starting
straight from a Purchase Order.

**Purchase Tenders** are a long and tedious process that will likely
take more than several weeks in the best cases. If you need a quick
delivery, this is not the way to go. Also, if you have a
well-established relationship with one supplier, think twice before you
initiate a PT with them as it might tear the relationship and finally
lead to less interesting deals.

Example
=======

My company builds wooden furniture. For the new series of table we are
designing, we need some screws, metal frames and rubber protections.

I create a Request for Quotation in Odoo with those products to my usual
supplier, and send it by email. He answers back with an offer. However,
I am not convinced by the offer, and I want to see if anyone can give a
better one.

I decide to push competition a bit and set up a Purchase Tender, that
Odoo will send to a list of suppliers I specified. Out of the 8 offers I
receive, one gets my attention and I decide to go ahead with that one.

I confirm the order to the supplier by creating a Purchase Order from
the PT, and Odoo automatically asks delivery of the items to the
supplier.

Configuration
=============

If you want to know how to create a **Purchase Order**, read the
documentation on :doc:`from_po_to_invoice`

If you want to know how to create a **RfQ**, read the documentation
on :doc:`../../purchases/rfq/create`

If you want to know how to create a **Purchase Tender**, read the
documentation on :doc:`../../purchases/tender/manage_multiple_offers`
