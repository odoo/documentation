:show-content:

=================
Payment terminals
=================

Connecting and integrating a payment terminal with your POS system allows you to accept multiple
payment options, including credit and debit cards, making the payment process more efficient.

.. _terminals/configuration:

Configuration
=============

Go to the :ref:`application settings <configuration/settings>`, scroll down to the
:guilabel:`Payment Terminals` section, and tick your terminal's checkbox.

.. image:: terminals/payment-terminals.png
   :alt: checkbox in the settings to enable a payment terminal

Then, follow the corresponding documentation to configure your device:

- :doc:`Adyen configuration <terminals/adyen>`
- :doc:`Ingenico configuration <terminals/ingenico>`
- :doc:`Mercado Pago configuration <terminals/mercado_pago>`
- :doc:`Razorpay configuration <terminals/razorpay>`
- :doc:`SIX configuration <terminals/six>`
- :doc:`Stripe configuration <terminals/stripe>`
- :doc:`Viva Wallet configuration <terminals/viva_wallet>`
- :doc:`Worldline configuration <terminals/worldline>`

Once the terminal is configured, you can :doc:`create the corresponding payment method and add it to
the POS <../payment_methods>`.

.. toctree::
   :titlesonly:

   terminals/adyen
   terminals/ingenico
   terminals/mercado_pago
   terminals/razorpay
   terminals/six
   terminals/stripe
   terminals/viva_wallet
   terminals/worldline
