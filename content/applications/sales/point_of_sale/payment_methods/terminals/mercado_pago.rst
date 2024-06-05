============
Mercado Pago
============

Connecting a payment terminal allows you to offer a fluid payment flow to your customers and ease
the work of your cashiers.

.. important::
   - We support only the **Point Smart** payment terminal from Mercado Pago
   - Point Smart do not require an :doc:`IoT Box </applications/general/iot>`
   - Point Smart can only be used in LATAM (Latin America) countries. For more informations check the `Mercado Pago website <https://www.mercadopago.com.mx/>`_
   - Point Smart can be bought from Mercado Pago website `Point page <https://www.mercadopago.com.mx/herramientas-para-vender/lectores-point>`_
.. seealso::
   - `Mercado Pago online payment <https://www.mercadopago.com.mx/herramientas-para-vender/check-out#benefits-checkout>`_

Configuration
=============

Start by creating your Mercado Pago account on `Mercado Pago's website <https://www.mercadopago.com.mx/>`_. Then buy a Point Smart terminal from the website. Each terminal buyed appears on your dashboard. Follow Mercado Pago documentation to associate your terminal with a *store* and a *cash drawer*.

.. warning::
   - Odoo doesn't use the Mercado Pago *store* and *cash drawer* associated with your terminal, these functionallities are provided by Mercado Pago for their system management
   - Point Smart terminal has two modes of operation: "Standalone" and "Point of Sale". Be sure your terminal is configured on the "Point of Sale" mode, Odoo doesn't support the "Standalone" mode.

.. _generate_credentials:

Generate your credentials
-------------------------

To configure your Point Smart terminal with the Odoo system you'll need three fields:

   - An **access token** (used by Odoo to call Mercado Pago)
   - A **webhook secret key** (used by Odoo to authenticate notifications sent by Mercado Pago)
   - The **terminal serial number**, you'll find it at the terminal's back

To retreive the two first fields, you'll need to go to the `Mercado Pago developers website <https://www.mercadopago.com.mx/developers/en>`_, and click on :menuselection:`Your integrations` in the menu bar. Then select the integration you've created beforehand or create one.

**The access token**
   Once on your integration, on the left bar click on :menuselection:`Production credentials` then reveals the access token by clicking on the eye icon. Copy it you'll need it when configuring the payment terminal in the Odoo system

**The webhook secret key**
   On your integration, on the left bar click on :menuselection:`Webhook`, then select the tab "production mode" and reveals the secret key by clicking on the eye icon. Copy it you'll need it when configuring the payment terminal in the Odoo system

   On the same page, **Set the production URL field**: enter in this field your domain name followed by /pos_mercado_pago/notification

   Examples:
        https://www.myshop.com/pos_mercado_pago/notification
        https://www.sombrerosbaratos.com.mx/pos_mercado_pago/notification
        https://www.bodegas.cl/pos_mercado_pago/notification
        https://paz.cl/pos_mercado_pago/notification

That's all on the Mercado Pago side

Configure the Payment Method
----------------------------

If your Odoo version is before 17.3, skip the first step.

On the Point of Sale module:

1. Go to :menuselection:`Configuration --> Settings --> Payment Terminals` and check Mercado Pago
2. Go to :menuselection:`Configuration --> Payments methods` and click **New**

   * Fill the field *Method* with a name at your best convenience (example: Mercado Pago)
   * On the *Journal* field select **Bank**, then the field *Use a Payment Terminal* appears
   * On the *Use a Payment Terminal* select **Mercado Pago**, then three fields appear
   * Fill the *Production user token* with the **access token** you retreive beforehand (see :ref:`generate_credentials`)
   * Fill the *Production secret key* with the **webhook secret key** you retreive beforehand (see :ref:`generate_credentials`)
   * Fill the *Terminal S/N* with the one you'll find at the back of the Point Smart terminal, enter only the numbers (skip the "S/N:"). Warning: Use the serial number found on the terminal itself, not the one that is on the terminal charger.
   * Save
3. Go to :menuselection:`Configuration --> Settings --> Payment` and add the payment method you just created to the *Payment Methods* field and save

Pay with a payment terminal
===========================

1. In your Point of Sale (PoS) interface, on Payment, select your Mercado Pago payment method
2. Send the payment
3. Proceed with the payment on the terminal, whatever the action taken on the terminal you **MUST** receive a notification on the PoS interface, see Troubleshooting section in case of missing notification

Troubleshooting
===============

1. When configuring the payment method, on save you get the message:

* **Invalid Operation** Please verify your production user token as it was rejected"

   You mispelled the token or you took the wrong one

* **Invalid Operation** The terminal serial number is not registered on Mercado Pago"

   You mispelled the terminal serial number or you took the wrong one, a serial number is only composed of digits

2. Can't add your payment method in :menuselection:`Configuration --> Settings --> Payment`:

   Please close all open sessions before trying to add/delete a payment method

3. No notifications received on the PoS interface:

   This is likely a mispelled webhook secret key entered in your payment method configuration or the **Set the production URL field** in :ref:`generate_credentials` doesn't contains the right url

