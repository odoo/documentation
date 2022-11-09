===============
Getting started
===============

**Point of Sale** is a fully integrated application that allows you to sell products (online or
offline) with any device. It also automatically registers product moves in your stock, gives you
real-time statistics, and consolidations across all shops.

Configuration
=============

Make products available
-----------------------

To make products available for sale, go to :menuselection:`Point of Sale --> Products --> Products`,
and open a product. In the :guilabel:`Point of Sale` tab, enable :guilabel:`Available in POS`.

.. image:: getting_started/pos-available.png
   :align: center
   :alt: Making a product available in your POS.

Configure payment methods
-------------------------

To add a payment method, you first need to create it. Go to :menuselection:`Point of Sale -->
Configuration --> Payment Methods --> Create`. Set a name and select the **payment terminal** or
check :guilabel:`Cash` for cash payments.

.. image:: getting_started/payment-method.png
   :align: center
   :alt: Creating a new payment method for a POS.

.. note::
   Credentials are mandatory to use a payment terminal. To learn how to configure the different
   terminals, check out the following documentation pages:.

   - :doc:`Adyen configuration <../payment/adyen>`
   - :doc:`Vantiv configuration <../payment/vantiv>`
   - :doc:`Ingenico configuration <../payment/ingenico>`
   - :doc:`Six configuration <../payment/six>`

Now, you can select the payment method in your POS settings. To do so, go to
:menuselection:`Point of Sale --> Configuration --> Point of Sale` and select a POS for which you
wish to make the payment method available. Click :guilabel:`Edit` and add the payment method under
the :guilabel:`Payments` section.


POS sessions
============

Start a session
---------------

From the **POS dashboard**, click :guilabel:`New Session` to start a POS session, or
:guilabel:`Resume` if the session was already open.

.. note::
   Multiple users can be connected to the same session at the same time. However, the session can
   only be open once on the same browser.

Click on products to add them to the cart. To change the **quantity**, click :guilabel:`Qty` and
enter the number of products using the keypad. To add a **discount** or modify the product
**price**, click respectively :guilabel:`Disc` or :guilabel:`Price` and enter the amounts.

Once an order is completed, proceed to checkout by clicking :guilabel:`Payment`. Select the
**payment method**, enter the received amount, and click :guilabel:`Validate`. Click
:guilabel:`New Order` to move on to the next customer.

.. image:: getting_started/pos-interface.png
   :align: center
   :alt: POS session interface.

.. tip::
   - You can use both `,` and `.` on your keyboard as decimal separators.
   - **Cash** is selected by default if you enter the amount without choosing a payment method.


Return and refund products
--------------------------

To return a product and make a refund,

#. from the **POS dashboard**, **open a session** and select the returned product;
#. click :guilabel:`Qty` and :guilabel:`+/-` to enter the quantity of returned products;
#. once the order is completed, click :guilabel:`Payment` to proceed to the refund;
#. click :guilabel:`Validate` and :guilabel:`New Order` to move on to the next customer.

Close the POS session
---------------------

To close your session,

#. go back to the POS dashboard by clicking :guilabel:`Close` and :guilabel:`Confirm` in the upper
   right corner of your screen;
#. then, click :guilabel:`Close` and proceed to the **closing control**;
#. click the :guilabel:`Payments` smart button to know what amount of cash should be in your cash
   drawer;
#. once the control is done, click :guilabel:`Close session & post entries`;
#. the status goes automatically from :guilabel:`In Progress` to :guilabel:`Closed & Posted`.

.. image:: getting_started/close-pos-session.png
   :align: center
   :alt: How to close a POS session.

.. tip::
   - It is strongly advised to close your POS session at the end of each day.
   - To look at all your previous sessions, go to :menuselection:`Point of Sale --> Orders -->
     Sessions`.

View statistics
===============

To access your statistics, go to :menuselection:`Point of Sale --> Reporting --> Orders`. Or, from
the **POS dashboard**, click the vertical ellipsis (:guilabel:`⋮`) button, :guilabel:`Reporting`,
and :guilabel:`Orders`.

These statistics are available in graph or pivot view that you can filter or group depending on your
needs.
