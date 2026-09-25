======
Stripe
======

`Stripe <https://stripe.com/>`_ offers payment solutions for both online and in-person transactions.
For point-of-sale setups, Stripe can be used with a choice of `proprietary and third-party terminals
<https://stripe.com/terminal/devices>`_. Additionally, it integrates with `Tap to Pay
<https://stripe.com/en-be/terminal/tap-to-pay>`_ to accept contactless payments directly on
compatible Android and iOS devices.

.. important::
   Stripe payment terminals do not require an Odoo :doc:`IoT system </applications/general/iot>`.

.. seealso::
   - :doc:`Stripe as a payment provider <../../../../finance/payment_providers/stripe>`
   - `Countries where Stripe is supported for use with a terminal <https://docs.stripe.com/terminal/payments/collect-card-payment/supported-card-brands>`_
   - `List of payment methods supported by Stripe <https://docs.stripe.com/terminal/payments/collect-card-payment/supported-card-brands#payment-method-availability>`_

Configuration
=============

To use a Stripe-supported terminal with Odoo, you need to:

- :ref:`Configure a payment method and link it to the physical device. <pos/stripe/method>`
- :ref:`Connect your Stripe account to your Odoo database using the API keys.
  <pos/stripe/stripe_config>`
- :ref:`Pair your physical device to your Stripe account. <pos/stripe/stripe_terminal>`

.. _pos/stripe/method:

Configure the payment method
----------------------------

To configure Stripe for Odoo, :ref:`enable Stripe and create a new payment method
<pos/terminals/configuration>` integrated with a terminal.

Next, on the Stripe payment method form, enter your payment terminal's serial number in the
:guilabel:`Stripe Serial Number` field, then click :icon:`oi-arrow-right` :guilabel:`Don't forget to
complete Stripe connect before using this payment method` to access the :ref:`Stripe configuration
form <pos/stripe/stripe_config>`.

.. note::
   - The payment terminal serial number can be found on the back of the physical device or on the
     Stripe dashboard.
   - If you are already using Stripe for online payments, create the payment method and skip to the
     :ref:`Pair the payment terminal to your Stripe account<pos/stripe/stripe_terminal>` section
     since Stripe is already configured as a payment provider.

.. _pos/stripe/stripe_config:

Connect your Stripe account to Odoo
-----------------------------------

.. important::
   The automated **Connect Stripe** button is only available for **SaaS** databases. On-premise
   databases must always use the manual connection process.

SaaS databases
~~~~~~~~~~~~~~

Option 1: I do not have a Stripe account yet
********************************************

This automated path creates your account and connects it directly to Odoo:

#. From the Stripe configuration form, click :guilabel:`Connect Stripe` and follow the steps to set
   up your Stripe account.
#. Once the form is complete, you are automatically redirected back to the Stripe configuration
   form.
#. Click :guilabel:`Get your Secret and Publishable keys` to open the Stripe dashboard.
#. Copy your :guilabel:`Publishable key` and :guilabel:`Secret key` from the :guilabel:`Token`
   column and save the values.
#. Return to the Stripe configuration form and paste them into the appropriate fields.
#. Set the :guilabel:`State` to :guilabel:`Enabled`.

.. tip::
   Set the :guilabel:`State` to :guilabel:`Test Mode` to test transaction processes with a device.

Option 2: I already have a Stripe account
*****************************************

#. Log in to the `Stripe dashboard <https://dashboard.stripe.com/>`_.
#. Navigate to :menuselection:`Stripe dashboard --> Developers --> API keys`.
#. Click on the :guilabel:`Publishable key` and :guilabel:`Secret key` under the :guilabel:`Token`
   column to copy the keys and save the values.
#. Return to the Stripe configuration form and paste them into the appropriate fields.
#. Set the :guilabel:`State` to :guilabel:`Enabled`.

.. tip::
   Set the :guilabel:`State` to :guilabel:`Test Mode` to test transaction processes with a device.

On-premise databases
~~~~~~~~~~~~~~~~~~~~

If you host Odoo on-premise, you must retrieve your API keys manually, whether you already have a
Stripe account or need to create a new one:

#. If you do not have an account, create one directly on Stripe.
#. Log in to the `Stripe dashboard <https://dashboard.stripe.com/>`_.
#. Navigate to :menuselection:`Stripe dashboard --> Developers --> API keys`.
#. Click on the :guilabel:`Publishable key` and :guilabel:`Secret key` under the :guilabel:`Token`
   column to copy the keys and save the values.
#. Return to the Stripe configuration form and paste them into the appropriate fields.
#. Set the :guilabel:`State` to :guilabel:`Enabled`.

.. tip::
   Set the :guilabel:`State` to :guilabel:`Test Mode` to test transaction processes with a device.

.. _pos/stripe/stripe_terminal:

Pair the payment terminal to your Stripe account
------------------------------------------------

To pair your device to your Stripe account, follow these steps:

#. Log in to the Stripe dashboard and navigate to :menuselection:`Payments --> Terminal -->
   Locations`.
#. Click the :guilabel:`+ Create Location` button to add a new location, or select an existing one.
#. Enter the store address and click :guilabel:`Done`. You are redirected back to the list of
   locations.
#. Select your location, click :guilabel:`+ Register reader`, and choose one of the pairing methods:

   - :guilabel:`Pairing code`: Swipe right on your terminal screen, tap :guilabel:`Settings`, enter
     the admin PIN code (by default: `07139`), and tap :guilabel:`Generate pairing code`. Then,
     enter the generated code in the :guilabel:`Enter a pairing code` field, and click
     :guilabel:`Next`.
   - :guilabel:`Serial number`: Locate the number printed on the back of the physical terminal.
     Enter the number in the :guilabel:`Enter serial numbers` field, and click :guilabel:`Next`.
   - :guilabel:`Order number`: Go to the Stripe dashboard and navigate to :menuselection:`Payments
     --> Terminal --> Hardware orders`. Locate a hardware order marked as :guilabel:`Shipped` or
     :guilabel:`Delivered`, click the action menu at the end of the line, and select
     :guilabel:`Register`.

Once the reader is paired, all point-of-sale transactions appear in your Stripe dashboard. To view
them, go to :menuselection:`Stripe Dashboard --> Payments --> Terminal --> Readers`, select the
reader, and scroll down to the :guilabel:`Recent payments` section. Click :guilabel:`View all` to
see the full list, or select any transaction to view its details.

.. note::
   - The user's device and the terminal must share the same network.
   - If using Wi-Fi, the network must be secured.

.. seealso::
   `Stripe documentation on how to connect a terminal <https://docs.stripe.com/terminal/payments/connect-reader?terminal-sdk-platform=server-driven&reader-type=internet>`_
