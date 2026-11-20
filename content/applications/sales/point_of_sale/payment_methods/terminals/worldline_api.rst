=============
Worldline API
=============

`Worldline <https://worldline.com/>`_ offers payment solutions through the `Terminal API Cloud
<https://worldline.com/en/home/main-navigation/solutions/merchants/terminal-api-cloud>`_, which
connects to Odoo and allows transactions to be sent directly between the point of sale and the
terminal.

.. seealso::
   To connect a Worldline terminal using the CTEP protocol through an IoT gateway, refer to the
   :doc:`Worldline (IoT Box) <worldline>` documentation.

.. important::
   - Connecting a Worldline API terminal to Odoo does not require an :doc:`IoT gateway
     </applications/general/iot>`.
   - Only the **Castles S1F2** and **Castles S1U2** terminals are currently supported.

.. _pos/worldline-api/credentials:

Worldline account configuration
===============================

`Contact Worldline <https://worldline.com/en/home/main-navigation/solutions/merchants/terminal
-api-cloud#form>`_ to get a terminal enabled for the Worldline Terminal API, and request the
following information:

- the **Merchant ID**;
- the **Terminal ID** of each terminal to connect;
- an **API key** for the Worldline Terminal API.

.. note::
   - Make sure the currency used by the point of sale is activated on the terminal. Otherwise,
     transactions are rejected with an error stating that the currency is not supported by the
     terminal.
   - Worldline provides separate credentials for its test environment. Use them together with the
     :guilabel:`Worldline Test Mode` option to test the payment flow without real transactions.

.. seealso::
   `Worldline Terminal API documentation <https://docs.instore.worldline-solutions
   .com/terminal-api/>`_

.. _pos/worldline-api/odoo-configuration:

Odoo configuration
==================

To connect the Worldline terminal with Odoo Point of Sale, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`, scroll down to the
   :guilabel:`Payment Terminals` section, enable :guilabel:`Worldline API`, and click
   :guilabel:`Save`.
#. Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and :doc:`create a
   payment method <../../payment_methods>`.
#. Set the :guilabel:`Journal` field to :guilabel:`Bank`.
#. Select the desired point of sale in the :guilabel:`Point of Sale` field.
#. Set the :guilabel:`Integration` field to :guilabel:`Terminal`.
#. Set the :guilabel:`Integrate with` field to :guilabel:`Worldline API`.
#. Fill in the following fields with the information :ref:`provided by Worldline
   <pos/worldline-api/credentials>`:

   - :guilabel:`Worldline Merchant ID`
   - :guilabel:`Worldline Terminal ID`
   - :guilabel:`Worldline API Key`

#. Enable :guilabel:`Worldline Test Mode` if needed.
#. Save the payment method.
#. Click :guilabel:`Test` below the payment method's image to check that the Worldline credentials
   are valid and the connection is successful.

.. note::
   Refunds with the Worldline API terminal are *unreferenced*: they are not linked to the
   original payment, and the terminal process them as a standalone negative payment. As a result,
   the customer must come to the point of sale and present their card on the terminal to be
   refunded.
