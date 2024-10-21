========
Ingenico
========

Connecting a payment terminal allows you to offer a fluid payment flow to your customers and ease
the work of your cashiers.

.. important::
   - Ingenico payment terminals require an :doc:`IoT Box </applications/general/iot>`.
   - Ingenico is currently only available in Belgium, the Netherlands and Luxembourg.
   - Odoo works with the Ingenico Lane/, Desk/, and Move/ payment terminals as they support the TLV
     communication protocol through TCP/IP.

Configuration
=============

Connect an IoT Box
------------------

Connecting an Ingenico payment terminal to Odoo is a feature that requires an IoT Box. For more
information on how to connect an IoT Box to your database, please refer to the :doc:`IoT
documentation </applications/general/iot/config/connect>`.

Configure the Lane/Desk/Move 5000 terminals for Ingenico BENELUX
----------------------------------------------------------------

#. Press the function button (:guilabel:`F` on Lane/5000, :guilabel:`⦿` on Desk/5000 and
   Move/5000).
#. Go to :menuselection:`Kassa menu --> Settings Menu` and enter the settings password.
#. Select :guilabel:`Change Connection` and press :guilabel:`OK` on the next screen.
#. Select :guilabel:`TCP/IP` and :guilabel:`IP-address`.
#. On the next screen, enter the IP address of your IoT Box.
#. Enter `9000` as port number and press :guilabel:`OK` on the next screen.

At this point, the terminal restarts and should be displayed in your IoT Box form in Odoo.

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
