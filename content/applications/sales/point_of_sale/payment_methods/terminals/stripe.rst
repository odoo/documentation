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

Next, link the Stripe payment method to the physical terminal by entering its serial number in the
:guilabel:`Stripe Serial Number` field.

.. note::
   - The payment terminal serial number can be found on the back of the physical device or on the
     Stripe dashboard.
   - If you already use Stripe for online payments, create the payment method and skip directly
     to :ref:`Pair the payment terminal to your Stripe account <pos/stripe/stripe_terminal>`,
     as Stripe is already configured as a payment provider.

.. _pos/stripe/stripe_config:

Create your Stripe account
--------------------------

You can create a Stripe account either from the Stripe configuration form in Odoo or directly
from the `Stripe loging screen <https://dashboard.stripe.com/login>`_.

To create a Stripe account from the Stripe configuration form:

#. Access the :ref:`Stripe payment terminal form <pos/stripe/method>` and click
   :icon:`oi-arrow-right` :guilabel:`Don't forget to complete Stripe connect before using
   this payment method` to open the :ref:`Stripe configuration form <pos/stripe/stripe_config>`.
#. Click :guilabel:`Connect Stripe` and follow the steps to set up your Stripe account.
#. Once completed, you are automatically redirected back to the Stripe configuration form.

.. important::
   The **Connect Stripe** button does not work for On-Premise databases. On-premise databases must
   always use the manual connection process.

Connect your Stripe account to Odoo
-----------------------------------

To connect your Stripe account to Odoo, retrieve your API keys from Stripe and add them to the
:ref:`Stripe configuration form <pos/stripe/stripe_config>`.

To access the Stripe dashboard, click :guilabel:`Get your Secret and Publishable keys` on the Stripe
configuration form, or access it directly from its `URL <https://dashboard.stripe.com/>`_. Then,
follow these steps:

#. Navigate to :menuselection:`Stripe dashboard --> Developers --> API keys`.
#. Click on the :guilabel:`Publishable key` and :guilabel:`Secret key` under the :guilabel:`API
   keys` section to copy the keys and save the values.
#. Return to the Stripe configuration form in Odoo and paste them into the appropriate fields.
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
