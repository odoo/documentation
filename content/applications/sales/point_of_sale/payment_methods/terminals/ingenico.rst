========
Ingenico
========

Connecting a payment terminal allows you to offer a fluid payment flow to your customers and ease
the work of your cashiers.

Please note that Ingenico is currently only available for customers in the
Benelux.

Configuration
=============

Connect an IoT Box
------------------

Connecting an Ingenico Payment Terminal to Odoo is a feature that
requires an IoT Box. For more information on how to connect an IoT Box
to your database, please refer to the :doc:`IoT documentation </applications/productivity/iot/config/connect>`.

Configure the Lane/5000 for Ingenico BENELUX
--------------------------------------------

Click on the F button of the terminal, then go in the
:menuselection:`PoS Menu --> Settings` and enter the settings password.

Now, click on connection change and TCP/IP. Type the IP of your *IoT
Box* (you can find it on the form view of your IoT Box). Then, enter
9000 as port. The terminal will restart. Once it is done, go on your
*IoT Box* form in Odoo and verify that the terminal has been found.

.. image:: ingenico/payment_terminal_02.png
   :align: center

Configure the payment method
----------------------------

Enable the payment terminal :ref:`in the application settings <configuration/settings>` and
:doc:`create the related payment method <../../payment_methods>`. Set the journal type as
:guilabel:`Bank` and select :guilabel:`Ingenico` in the :guilabel:`Use a Payment Terminal` field.
Then, select your terminal device in the :guilabel:`Payment Terminal Device` field.

.. image:: ingenico/payment-method.png

Once the payment method is created, you can select it in your POS settings. To do so, go to the
:ref:`POS' settings <configuration/settings>`, click :guilabel:`Edit`, and add the payment method
under the :guilabel:`Payments` section.

Pay with a payment terminal
===========================

In your *PoS interface*, when processing a payment, select a *Payment
Method* using a payment terminal. Check that the amount in the tendered
column is the one that has to be sent to the payment terminal and click
on *Send*. When the payment is successful, the status will change to
*Payment Successful*.

.. image:: ingenico/payment_terminal_05.png
   :align: center

If you want to cancel the payment request, click on cancel. You can
still retry to send the payment request.

If there is any issue with the payment terminal, you can still force the
payment using the *Force Done*. This will allow you to validate the
order in Odoo even if the connection between the terminal and Odoo has
issues.

.. note::
   This option will only be available if you received an error message
   telling you the connection failed.

Once your payment is processed, on the payment record, you’ll find the
type of card that has been used and the transaction ID.

.. image:: ingenico/payment_terminal_06.png
   :align: center
