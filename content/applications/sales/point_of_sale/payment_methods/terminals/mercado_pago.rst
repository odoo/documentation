============
Mercado Pago
============

Connecting a payment terminal allows you to offer a fluid payment flow to your customers and ease
the work of your cashiers.

.. important::
   - Odoo only supports **Point Smart** payment terminals. They can be purchased on
     `Mercado Pago's website <https://www.mercadopago.com.mx/herramientas-para-vender/lectores-point>`_.
   - Point Smart can only be used in the following :abbr:`LATAM (Latin America)` countries:

     - Argentina
     - Brazil
     - Chile
     - Colombia
     - México
     - Perú
     - Uruguay

.. seealso::
   `Mercado Pago online payment <https://www.mercadopago.com.mx/herramientas-para-vender/check-out#benefits-checkout>`_

Configuration
=============

#. Create your `Mercado Pago account <https://www.mercadopago.com.mx/>`_.
#. Associate your terminal with a :guilabel:`store` and a :guilabel:`cash drawer` by following
   `Mercado Pago's documentation <https://www.mercadopago.com.mx/developers/en/docs>`_.

   .. note::
      All the purchased terminals are automatically available on your Mercado dashboard.
#. Set your Point Smart terminal to the :guilabel:`Point of Sale` operation mode.

   .. warning::
      Odoo does not support the Point Smart :guilabel:`Standalone` operation mode.
#. :ref:`Generate your credentials <mercado_pago/credentials>`
#. :ref:`Create and configure the related payment method <mercado_pago/method>`

.. _mercado_pago/credentials:

Generate your credentials
-------------------------

To configure your Point Smart terminal, you need three credentials:

- An access token that Odoo uses to call Mercado Pago.
- A webhook secret key that Odoo uses to authenticate notifications sent by Mercado Pago.
- The **terminal serial number**. It is used to identify the terminal and is found at the back of
  your terminal.

Retrieve the first two credentials by following `Mercado Pago's documentation page related to
credentials <https://www.mercadopago.com.mx/developers/en/docs/your-integrations/credentials>`_.
Then, copy and save the keys to paste them into the Odoo :guilabel:`Production user token`,
:guilabel:`Production secret key`, and :guilabel:`Terminal S/N` fields when :ref:`creating the
payment method <mercado_pago/method>`.

.. _mercado_pago/method:

Configure the payment method
----------------------------

#. :doc:`Activate the POS Mercado Pago module <../../../../general/apps_modules>` to enable the
   payment terminal.
#. :doc:`Create the related payment method <../../payment_methods>` by going to
   :menuselection:`Point of Sale --> Configuration --> Payment Methods`.
#. Set the journal type as :guilabel:`Bank`
#. Select :guilabel:`Mercado Pago` in the :guilabel:`Use a Payment Terminal` field.
#. Fill in the mandatory fields with the :ref:`previously generated credentials
   <mercado_pago/credentials>`:

   - Fill in the :guilabel:`Production user token` field using the access token.
   - Fill in the :guilabel:`Production secret key` field using the webhook secret key.
   - Fill in the :guilabel:`Terminal S/N` field using the terminal serial number. You can find it at
     the back of your terminal.

.. image:: mercado_pago/payment-method.png
   :alt: form to create a new payment method

You can select the payment method in your POS settings once the payment method is created. To do so,
go to the :ref:`POS' settings <configuration/settings>` and add the payment method under the
:guilabel:`Payment Methods` field of the :guilabel:`Payment` section.

Pay with a payment terminal
===========================

When processing a payment, select your Mercado Pago payment method, check the amount and click
:guilabel:`Send`. Once the payment is successful, the status changes to :guilabel:`Payment
Successful`.

.. note::
   - | In case of connection issues between Odoo and the payment terminal, force the payment by
       clicking on :guilabel:`Force Done`, which allows you to validate the order.
     | This option is only available after receiving an error message informing you that the
       connection failed.
   - To cancel the payment request, click on :guilabel:`cancel`.

.. important::
   Any action made on the terminal should trigger a notification on the POS interface. If you are
   not notified, ensure the :ref:`webhook secret key <mercado_pago/credentials>` is correctly
   configured.
