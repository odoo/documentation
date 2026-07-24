======
Stripe
======

`Stripe <https://stripe.com/>`_ is available `globally for terminal setups
<https://support.stripe.com/questions/global-availability-for-stripe-terminal>`_ and supports both
online and in-person payment processing. For point-of-sale setups, Stripe offers a selection of
first-party and third-party `terminals <https://stripe.com/terminal/devices>`_. Additionally, it
integrates with Tap to Pay to accept contactless payments directly on compatible Android and iOS
devices.

.. important::
   Stripe payment terminals do not require an Odoo :doc:`IoT system </applications/general/iot>`.

.. seealso::
   - :doc:`Stripe as a payment provider <../../../../finance/payment_providers/stripe>`
   - `List of payment methods supported by Stripe <https://stripe.com/payments/payment-methods>`_

Configuration
=============

To use a Stripe terminal with Odoo, you need:

- :ref:`A payment method directly connected to the physical device. <pos/stripe/method>`
- :ref:`A Stripe account connected to your Odoo database using the API keys.
  <pos/stripe/stripe_config>`
- :ref:`A physical device connected to your Stripe account. <pos/stripe/stripe_terminal>`

.. _pos/stripe/method:

Configure the payment method
----------------------------

To configure Stripe for Odoo, :ref:`enable Stripe <pos/terminals/configuration>`, and :doc:`create a
new payment method <../../payment_methods>` integrated with a terminal.

Next, enter your payment terminal's serial number in the :guilabel:`Stripe Serial Number` field and
click :icon:`oi-arrow-right` :guilabel:`Don't forget to complete Stripe connect before using this
payment method.` to access the Stripe configuration form.

.. note::
   The payment terminal serial number can be found on the back of the physical device or on the
   Stripe dashboard.

.. _pos/stripe/stripe_config:

Connect Stripe to Odoo
----------------------

From the Stripe configuration form,

#. Click the :guilabel:`Connect Stripe` button, and fill in the form to create your Stripe account.
#. Once the form is complete, you are automatically redirected back to the Stripe configuration
   form.
#. Click :guilabel:`Get your Secret and Publishable keys` to be redirected to the Stripe dashboard.
#. Click on the :guilabel:`Publishable key` and :guilabel:`Secret key` under the :guilabel:`Token`
   column to copy the keys.
#. Return to the Stripe configuration form and paste them into the appropriate fields.
#. Change the :guilabel:`State` to :guilabel:`Enabled` once you are ready to go.

Alternatively, if you already have a Stripe account or if your database is hosted **On-Premise**,
you can retrieve the API keys manually from the `Stripe dashboard <https://dashboard.stripe.com/>`_:

#. Navigate to :menuselection:`Stripe dashboard --> Developers --> API keys`.
#. Click on the :guilabel:`Publishable key` and :guilabel:`Secret key` under the :guilabel:`Token`
   column to copy the keys.
#. Return to the Stripe configuration form and paste them into the appropriate fields.
#. Change the :guilabel:`State` to :guilabel:`Enabled` once you are ready to go.

.. tip::
   Set the :guilabel:`State` to :guilabel:`Test Mode` to test transaction processes with a device.

.. _pos/stripe/stripe_terminal:

Configure the payment terminal
------------------------------

Start by adding the physical location of your store to your Stripe account:

#. Log in to the Stripe dashboard and navigate to :menuselection:`Payments --> Terminal -->
   Locations`.
#. Click the :guilabel:`+ Create Location` button to add a new location, or select an existing one.
#. Fill in the form with the store address and click :guilabel:`Done`. You are redirected back to
   the list of locations.
#. Select your location, click :guilabel:`+ Register reader`, and choose one of the three pairing
   methods:

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

Once the reader is paired, all Point of Sale transactions appear in your Stripe dashboard. To view
them, go to :menuselection:`Stripe Dashboard --> Payments --> Terminal --> Readers`, select the
reader, and scroll down to the :guilabel:`Recent payments` section. Click :guilabel:`View all` to
see the full list, or select any transaction to view its details.

.. note::
   - The user's device and the terminal must share the same network.
   - In case of a Wi-Fi connection, the network must be secured.

.. seealso::
   `Stripe documentation on how to connect a terminal <https://docs.stripe.com/terminal/payments/connect-reader?terminal-sdk-platform=server-driven&reader-type=internet>`_
