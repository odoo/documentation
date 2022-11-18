===============
Getting started
===============

When working with a Point of Sale application, employees want a
simple, and user-friendly solution. A solution that works online or
offline and with any device.

A Point of Sale system is a fully integrated application that allows any transaction,
automatically registers product moves in your stock, and gives you
real-time statistics and consolidations across all shops.

Configuration
=============

Make products available in the PoS
----------------------------------

To make products available for sale, go to :menuselection:`Point of
Sale --> Products --> Products` and open a product. In the *Point of Sale*
tab, enable *Available in Point of Sale*.

.. image:: getting_started/getting_started_01.png
    :align: center
    :alt: Product form. Making the product available in PoS.

.. note::
   You can also define if the product has to be weighted or not.

Configure your payment methods
------------------------------

To add a payment method, you first need to create it. Go to
:menuselection:`Point of Sale --> Configuration --> Payment Methods`
and click on create. Then, you can name your payment method and set it
up.

.. image:: getting_started/getting_started_02.png
    :align: center
    :alt: Creating a new payment method for a Point of Sale.

.. note::
   Don’t forget your credentials for methods using a payment terminal.

Now, you can select the payment method in your PoS settings. To do so,
go to :menuselection:`Point of Sale --> Configuration --> Point of
Sale` and open the PoS in which you want to include the payment method. Then, add the
payment method.

.. image:: getting_started/getting_started_03.png
    :align: center
    :alt: Making the payment method available in a point of sale.

.. note::
   *Configuration* is the menu where you can edit all your point of sale settings.
   Some more features are available for restaurants.

Your first PoS session
======================

Your first order
----------------

Open a new session from the dashboard by clicking on *New Session*.

.. image:: getting_started/getting_started_04.png
    :align: center
    :alt: Launching a new session.

After the loading screen, you arrive on the PoS interface.

.. image:: getting_started/getting_started_05.png
    :align: center
    :alt: Point of sale dashboard.

Once an order is completed, you can register the payment. All the
available payment methods appear on the left of the screen. Select the payment
method and enter the received amount. Then, you can validate the
payment.

.. tip::
   You can use both `,` and `.` on your keyboard as decimal separators.

Return and refund products
--------------------------

Having a well-thought-out return policy is key to keep customers satisfied and make the process
of accepting returns and refunds easy for you.

To do that, from the PoS interface, select the product and quantity (with the +/- button) that the
customer wants to return. For multiple products, repeat the process individually.

.. image:: getting_started/getting_started_06.png
    :align: center
    :alt: Refunding a product with the point of sale app.

When on the payment interface, the total is negative. To end the refund,
process the payment and validate it.

.. image:: getting_started/getting_started_07.png
    :align: center
    :alt: Giving back money to customer in Odoo Point of Sale.

Close the PoS session
---------------------

To close your session at the end of the day, click on the close button on the upper right corner
of your screen and confirm. Now, close the session on the dashboard view.

.. image:: getting_started/getting_started_08.png
    :align: center
    :alt: How to close a point of sale session.

.. tip::
   It’s strongly advised to close your PoS session at the end of each day.

Once a session is closed, you can see a summary of all transactions per payment method.
Then, click on a line to see all orders that were paid during your PoS session.
If everything is correct, validate the session and post the closing entries.

.. image:: getting_started/getting_started_09.png
    :align: center
    :alt: Point of sale sales report before closing the session.

.. tip::
   To connect the PoS hardware with an Odoo IoT Box, please refer to these
   docs: :doc:`Connect an IoT Box to your database
   </applications/productivity/iot/config/connect>` and :doc:`Use the IoT Box for the PoS
   </applications/productivity/iot/config/pos>`.

View your statistics
====================

Keeping track of your sales is essential to get meaningful statistics. That’s why Odoo
provides analyzes about your sales.

To access your statistics, go to :menuselection:`Point of Sales -->
Reporting --> Orders`. There, you can see various statistics in graph
or pivot form.

.. image:: getting_started/getting_started_10.png
    :align: center
    :alt: Orders analysis with pivot view of the point of sale reporting feature.

You can also access them through the dashboard.

.. image:: getting_started/getting_started_11.png
    :align: center
    :alt: Accessing orders analysis via the point of sale dashboard. Reporting feature on the PoS form.
