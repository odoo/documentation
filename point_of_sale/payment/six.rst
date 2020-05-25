====================================================
Connect a SIX/Worldline Payment Terminal to your PoS
====================================================

Connecting a SIX/Worldline payment terminal allows you to offer a fluid
payment flow to your customers and ease the work of your cashiers.

.. note::
   Please note SIX/Worldine is currently only available for UE customers.

Configuration
=============

Configure the Payment Method
----------------------------

First, make sure that the POS Six module is installed. For this, go to *Apps*,
remove the "Apps" filter and search for "POS Six".

.. image:: media/six_01.png
    :align: center

Back in :menuselection:`Point of Sale --> Configuration --> Payment Methods`,
Create a new payment method for SIX, select the payment terminal option
"SIX without IoT Box", and enter your payment terminal IP address.

.. image:: media/six_02.png
    :align: center

Pay with a Payment Terminal
===========================

In your PoS interface, at the moment of the payment, select a payment
method using a payment terminal. Verify that the amount in the tendered
column is the one that has to be sent to the payment terminal and click
on *Send*. If you want to cancel the payment request, click on cancel.

.. image:: media/six_06.png
    :align: center

When the payment is done, the status will change to *Payment
Successful*. You can always reverse the last transaction by clicking on
*Reverse*.

.. image:: media/six_07.png
    :align: center

If there is any issue with the payment terminal, you can still force the
payment using the *Force Done*. This will allow you to validate the
order in Odoo even if the connexion between the terminal and Odoo
encounters issues.
