=========
Worldline
=========

Connecting a payment terminal allows you to offer a fluid payment flow to your customers and ease
the work of your cashiers.

.. note::
   Please note that Worldline is currently only available in the Benelux.

Configuration
=============

Connect an IoT Box
------------------

Connecting a Worldline Payment Terminal to Odoo is a feature that requires an IoT Box. For more
information on how to connect one to your database, please refer to the
:doc:`IoT documentation </applications/productivity/iot/config/connect>`.

Configure the protocol
----------------------

From your terminal, click on :menuselection:`"." --> 3 --> stop --> 3 --> 0 --> 9`. Enter the
technician password **"1235789"** and click on :menuselection:`OK --> 4 --> 2`. Then, click on
:menuselection:`Change --> CTEP (as Protocole ECR) --> OK`. Click on **OK** thrice on the subsequent
screens (*CTEP ticket ECR*, *ECR ticket width*, and *Character set*). Finally, press **Stop** three
times; the terminal automatically restarts.

Set the IP address
------------------

From your terminal, click on :menuselection:`"." --> 3 --> stop --> 3 --> 0 --> 9`. Enter the
technician password **"1235789"** and click on :menuselection:`OK --> 4 --> 9`. Then, click on
:menuselection:`Change --> TCP/IP` (*TCP physical configuration* screen) :menuselection:`--> OK -->
OK` (*TCP Configuration client* screen).

Finally, set up the hostname and port number.

Hostname
~~~~~~~~

| To set up the hostname, enter your IoT box's IP address' sequence numbers and press **OK** at each
  "." until you reach the colon symbol.
| Then, press **OK** twice.

.. example::
   | Here's an IP address sequence: `10.30.19.4:8069`.
   | On the *Hostname screen*, type :menuselection:`10 --> OK --> 30 --> OK --> 19 --> OK --> 4
     --> OK --> OK`.

.. note::
   Your IoT box's IP address is available in your IoT Box application's database.

Port number
~~~~~~~~~~~

On the *Port number* screen, enter **9001** (or **9050** for Windows) and click on
:menuselection:`OK` (*ECR protocol SSL no*) :menuselection:`--> OK`. Click on **Stop** three times;
the terminal automatically restarts.

Configure the payment method
----------------------------

Enable the payment terminal :ref:`in the application settings <configuration/settings>` and
:doc:`create the related payment method <../../payment_methods>`. Set the journal type as
:guilabel:`Bank` and select :guilabel:`Worldline` in the :guilabel:`Use a Payment Terminal` field.
Then, select your terminal device in the :guilabel:`Payment Terminal Device` field.

.. image:: worldline/worldline-payment-terminals.png

Once the payment method is created, you can select it in your POS settings. To do so, go to the
:ref:`POS' settings <configuration/settings>`, click :guilabel:`Edit`, and add the payment method
under the :guilabel:`Payments` section.

.. _worldline/yomani-info:

.. tip::
   - Technician password: `1235789`
   - To reach Wordline's technical assistance, call `02 727 61 11` and choose "merchant". Your call
     is automatically transferred to the desired service.
   - Configure the cashier terminal if you have both a customer and a cashier terminal.
   - To avoid blocking the terminal, check the initial configuration beforehand.
   - Set a fixed IP to your IoT Box’s router to prevent losing the connexion.

Pay with a payment terminal
===========================

When processing a payment, select *Worldline* as payment method. Check the amount and click on
*Send*. Once the payment is successful, the status changes to *Payment Successful*.

Once your payment is processed, the type of card used and the transaction ID appear on the payment
record.

.. image:: worldline/worldline-payment.png
   :align: center

.. note::
   * In case of connexion issues between Odoo and the payment terminal, force the payment by
     clicking on *Force Done*, which allows you to validate the order. This option is only available
     after receiving an error message informing you that the connection failed.
   * To cancel the payment request, click on **cancel**.
