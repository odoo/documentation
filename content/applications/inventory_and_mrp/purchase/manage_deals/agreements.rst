=========================================================
Purchase agreements: blanket orders and calls for tenders
=========================================================

There are two main types of purchase agreements preconfigured in Odoo: blanket orders and call for
tenders.

#. Blanket orders are long-term agreements between a company and a vendor to deliver products on a
   recurring basis with predetermined pricing. Your company should consider using them when you
   frequently purchase the same products from the same vendor in varying quantities and/or at
   different times. Among their many benefits, you can save time as the ordering process is
   simplified, and money thanks to more advantageous bulk pricing.

#. Calls for tenders use a special procedure to request offers from multiple vendors at the same
   time. While public sector organizations are often legally bound to release calls for tenders when
   they want to purchase goods or services, private organizations can also use them to get the best
   deal among several vendors.

Enable purchase agreements
==========================

From the Purchase app, go to :menuselection:`Configuration --> Settings` and activate *Purchase
Agreements*.

.. image:: agreements/agreements-enable-purchase-agreements.png
   :align: center
   :alt: Enable purchase agreements in Odoo Purchase

Configure or create new types of purchase agreements
====================================================

Before you start using purchase agreements, make sure they are configured the way you want by going
to :menuselection:`Configuration --> Purchase Agreement Types`. From there, you can edit the way
blanket orders and calls for tenders or *Create* a new type of purchase agreement. You can configure
the:

#. Agreement Type: the name you want to give to the agreement.

#. Agreement Selection Type: you can either select multiple offers using *Select multiple RFQ
   (non-exclusive)*, which is the default setting for both blanket orders and calls for tenders, or
   a single offer using *Select only one RFQ (exclusive)*, which is sometimes needed for calls for
   tenders where you only want to select a single vendor.

#. Lines: generally, you would always want to select *Use lines of agreement*, which are the
   different product lines you can configure when you set up your purchase agreement. However, you
   can select *Do not create RfQ lines automatically* if you don't want your requests for quotations
   to be pre-filled in with that information.

#. Quantities: if you use lines of agreements, you can also specify independently if the products'
   quantities should be used to pre-fill new requests for quotations. The default option for blanket
   orders is *Set quantities manually*, while for calls for tenders are set to *Use quantities of
   agreement*.

.. image:: agreements/agreements-configure-types.png
   :align: center
   :alt: Configure purchase agreements types in Odoo Purchase

Set up a blanket order
======================

Go to :menuselection:`Orders --> Purchase Agreements` and click on *Create*. Select *Blanket Order*
as your *Agreement Type*. Next, select the vendor. The other fields aren't mandatory.

Next, add the products you want to order and their price. Note that you can also add a *Quantity*
for each product, for example, if you have agreed with your vendor to order a specific minimum
quantity each time or in total. If you have configured your blanket order to *Set quantities
manually*, this is only used for informational purposes.

.. image:: agreements/agreements-set-blanket-order.png
   :align: center
   :alt: Set up a blanket order in Odoo Purchase

You can also write any *Terms and Conditions* at the bottom of the agreement. Once you are satisfied
with your blanket order, click on *Confirm*. Its status then changes from *Draft* to *Ongoing* and
it's ready to be used.

Create requests for quotation from the blanket order
----------------------------------------------------

You can now create new quotations from the blanket order whenever you need it by clicking on *New
Quotation*. Odoo automatically fills in requests for quotation with the information initially
defined when you set up the blanket order. Depending on the way you configured the *Purchase
Agreement Type*, product lines can also be pre-filled.

From here, you can quickly view all the requests for quotations made under that blanket order by
clicking on *RFQs/Orders*.

.. image:: agreements/agreements-ongoing-blanket-order.png
   :align: center
   :alt: Create new quotations for an ongoing blanket order in Odoo Purchase

.. tip::
   You can also create a *Request for Quotation* the usual way and then link it to an existing
   *Blanket Order*.

Blanket orders and replenishment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Blanket orders can be used for :doc:`automated replenishment <../../purchase/products/reordering>`,
as once a blanket order is confirmed, a new vendor line is added to your product. Make sure the
related vendor is in the first position if you have several vendors linked to your product.

.. image:: agreements/agreements-blanket-order-replenishment.png
   :align: center
   :alt: Blanket order added to product configuration in Odoo Purchase

Set up a call for tenders
=========================

Go to :menuselection:`Orders --> Purchase Agreements` and click on *Create*. Select *Call for
Tenders* as your *Agreement Type*. The other fields aren't mandatory, but you can add the date you
want to be delivered and set an agreement deadline. You usually don't want to select a vendor for
calls for tenders as you are looking to get quotations from multiple vendors.

Next, add the products you want to order and in what quantity. For calls for tenders, you typically
don't add a price, as the vendors should give you their best quote.

You can also write any *Terms and Conditions* at the bottom of the agreement. Once you are ready,
click on *Confirm*.

.. image:: agreements/agreements-set-call-for-tenders.png
   :align: center
   :alt: Set up a call for tenders in Odoo Purchase

Requests quotations from the call for tenders
---------------------------------------------

You can now request new quotations from the call for tenders. Click on *New Quotation* and select
one of your vendors you want to invite to the call for tenders. Product lines should also be
pre-filled in, depending on how you configured the *Purchase Agreement Type*. Click on *Send by
email* to send it to the vendor. Go back to the call for tenders and repeat this process for each
vendor.

.. image:: agreements/agreements-request-quotation.png
   :align: center
   :alt: Request a quotation from a call for tenders in Odoo Purchase

Once you have sent a request for quotation to every vendor and receiving their quotes, click on
*Validate* to proceed to the bid selection. Next, click on the RFQs/Orders smart button to view all
your vendors' quotations.

.. image:: agreements/agreements-validate-call-for-tenders.png
   :align: center
   :alt: Validate a call for tenders and view all quotations in Odoo Purchase

Click on each request for quotation to add the price communicated by your vendors manually. When
that's done, select the most advantageous offer and click on *Confirm Order*. This automatically
closes the call for tenders. You can now proceed with the purchase order as you would for a regular
one.

.. image:: agreements/agreements-confirm-order.png
   :align: center
   :alt: Confirm an order in Odoo Purchase
