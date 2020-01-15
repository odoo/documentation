================================================
Connect an Ingenico Payment Terminal to your PoS
================================================

Connecting a payment terminal allows you to offer a fluid payment flow
to your customers and ease the work of your cashiers.

Please note that Ingenico is currently only available for customers in the
Benelux.

Configuration
=============

Connect a Payment Terminal
--------------------------

Connecting an Ingenico Payment Terminal to Odoo is a feature that
requires an IoT Box. For more information on how to connect an IoT Box
to your database, please refer to the :doc:`IoT documentation <../../iot/config/connect>`.

Once the IoT Box is up and running, you’ll need to link your payment
terminal to your PoS. Open the *Point of Sale* app and go to
:menuselection:`Configuration --> Point of Sale`. Select a PoS, tick the IoT
Box Device option and select your payment terminal.

.. image:: media/payment_terminal_01.png
   :align: center

Configure the Lane/5000 for Ingenico BENELUX
--------------------------------------------

Click on the F button of the terminal, then go in the
:menuselection:`PoS Menu --> Settings` and enter the settings password.

Now, click on connexion change and TCP/IP. Type the IP of your *IoT
Box* (you can find it on the form view of your IoT Box). Then, enter
9000 as port. The terminal will restart. Once it is done, go on your
*IoT Box* form in Odoo and verify that the terminal has been found.

.. image:: media/payment_terminal_02.png
   :align: center

Configure the payment method
----------------------------

First, go in the general settings of the POS app, and activate the
Ingenico setting.

.. image:: media/payment_terminal_03.png
   :align: center

Go back in :menuselection:`Point of Sale --> Configuration --> Point of Sale`,
go in the payments section and access your payment methods. Create a new
payment method for Ingenico, select the payment terminal option Ingenico, and
select your payment terminal device.

.. image:: media/payment_terminal_04.png
   :align: center

Pay with a payment terminal
===========================

In your *PoS interface*, when processing a payment, select a *Payment
Method* using a payment terminal. Check that the amount in the tendered
column is the one that has to be sent to the payment terminal and click
on *Send*. When the payment is successful, the status will change to
*Payment Successful*.

.. image:: media/payment_terminal_05.png
   :align: center

If you want to cancel the payment request, click on cancel. You can
still retry to send the payment request.

If there is any issue with the payment terminal, you can still force the
payment using the *Force Done*. This will allow you to validate the
order in Odoo even if the connexion between the terminal and Odoo has
issues.

.. note::
   This option will only be available if you received an error message
   telling you the connexion failed.

Once your payment is processed, on the payment record, you’ll find the
type of card that has been used and the transaction ID.

.. image:: media/payment_terminal_06.png
   :align: center
