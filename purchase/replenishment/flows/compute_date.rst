====================================================
How are the order date and scheduled dates computed?
====================================================

Scheduled dates are computed in order to be able to plan deliveries,
receptions and so on. Depending on the habits of your company, Odoo
automatically generates scheduled dates via the scheduler. The Odoo
scheduler computes everything per line, whether it's a manufacturing
order, a delivery order, a sale order, etc. The dates that are computed
are dependent on the different leads times configured in Odoo.

Configuring lead times
======================

Configuring **lead times** is an essential move in order to compute
scheduled dates. Lead times are the delays (in term of delivery,
manufacturing, ...) promised to your different partners and/or clients.
Configuration of the different lead times are made as follows:

On a product level
------------------

Supplier lead time:
~~~~~~~~~~~~~~~~~~~

The supplier lead time is the time needed for the supplier to deliver
your purchased product. To configure the Supplier lead time select a
product (from the Purchase module, go to :menuselection:`Purchase --> Product`),
and go in the **Inventory** tab. You will have to 
add a **Vendor** to your product in order to select a supplier lead time.

.. image:: media/compute_date01.png
    :align: center

.. tip:: 
    It is possible to add more than one vendor per product and thus 
    different delivery lead times depending on the vendor.

Once a vendor is selected, click on it to open its form and indicate its
delivery lead time. 

.. image:: media/compute_date02.png
    :align: center

.. note:: 
    In this case security days have no influence, the scheduled 
    delivery days will be equal to: Date of the purchase order + Delivery Lead Time.

Customer lead time
~~~~~~~~~~~~~~~~~~

The customer lead time is the time needed to get your product from your
store/warehouse to your customer. It can be configured for any
product. Simply select a product (from the **Sales** module, go to 
:menuselection:`Sales --> Product`), 
and go into the **Sales** tab to indicate your customer lead time.

.. image:: media/compute_date03.png
    :align: center

On the company level
--------------------

On company level, it is possible to parameter **security days** in order
to cope with eventual delays and to be sure to meet your engagements.
The idea is to subtract **backup** days from the computed scheduled date
in case of delays.

Sales Safety days
~~~~~~~~~~~~~~~~~

Sales Safety days are **back-up** days to ensure you will be able to
deliver your clients engagements on time. They are margins of errors for
delivery lead times. Security days are the same logic as the early
wristwatch, in order to arrive on time. The idea is to subtract the
numbers of security days from the calculation and thus to compute a
scheduled date earlier than the one you promised to your client. That
way you are sure to be able to keep your commitment.

To set up your security dates, go to the app 
:menuselection:`Settings --> General settings`, 
and click on **Configure your company data**.

.. image:: media/compute_date04.png
    :align: center

Go the **Configuration** tab to indicate the number of safety days

.. image:: media/compute_date05.png
    :align: center

.. tip::
    Note that you can in this menu configure 
    a default **Manufacturing** lead time.

Purchase days
~~~~~~~~~~~~~

Purchase days response to the same logic than sales security days.

They are margins of error for vendor lead times. When the system
generates purchase orders for procuring products, they will be scheduled
in order to cope with unexpected vendor delays. Purchase lead time can
be found in the same menu as the sales safety days (see screenshot
above).

On route level
--------------

The internal transfers due to the movement of stocks can also influence
the computed date.

The delays due to internal transfers can be specified in the **Inventory**
module when creating a new push rule for a new route.

.. note:: 
    Read the documentation 
    :doc:`../../../../inventory/routes/concepts/push_rule`
    to learn more.

.. image:: media/compute_date06.png
    :align: center

On document level:
------------------

Requested date
~~~~~~~~~~~~~~

Odoo offers the possibility to indicate a requested date by the client
straight on the sale order, under the tab **Other information**. If
this date is earlier than the theoretically computed date, Odoo will
automatically display a warning.

.. image:: media/compute_date07.png
    :align: center

Example
=======

As an example, you may sell a car today (January 1st), that is purchased
on order, and you promise to deliver your customer within 20 days
(January 20). In such a scenario, the scheduler may trigger the
following events, based on your configuration:

-   January 19: actual scheduled delivery (1 day of Sales Safety days)

-   January 18: receive the product from your supplier (1 day of Purchase
    days)

-   January 10: deadline to order at your supplier (9 days of supplier
    delivery lead time)

-   January 8: trigger a purchase request to your purchase team, since
    the team needs on average 2 days to find the right supplier and
    order.
