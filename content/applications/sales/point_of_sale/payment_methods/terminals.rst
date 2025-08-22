:show-content:

=================
Payment terminals
=================

Connect and integrate a payment terminal to a :ref:`POS system <pos/session-start>` to accept
multiple payment options, including credit and debit cards.

.. _pos/terminals/configuration:

Configuration
=============

To activate a payment terminal and allow processing payments, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings` and scroll down to the
   :guilabel:`Payment Terminals` section.
#. Select the preferred terminal from the options below:

   - :doc:`Adyen <terminals/adyen>`
   - :doc:`Ingenico <terminals/ingenico>`
   - :doc:`Mercado Pago <terminals/mercado_pago>`
   - :doc:`Razorpay <terminals/razorpay>`
   - :doc:`SIX <terminals/six>`
   - :doc:`Stripe <terminals/stripe>`
   - :doc:`Tyro <terminals/tyro>`
   - :doc:`Viva.com <terminals/viva_com>`
   - :doc:`Worldline <terminals/worldline>`
#. Click :guilabel:`Save`.

The terminal is now available as a payment method in all points of sale. To configure a terminal and
process payments, create the :doc:`corresponding payment method <../payment_methods>`, then add it
to a POS.

.. _pos/terminals/terminal-use:

Terminal use
============

To process a payment with a :ref:`configured terminal <pos/terminals/configuration>`, open the POS
register, and follow these steps:

#. On the :guilabel:`Payment` screen, select the terminal's :doc:`payment method
   <../payment_methods>`.
#. Follow the instructions on the terminal device and validate the payment.

Odoo integrates the payment in POS and changes the payment status to :guilabel:`Payment Successful`.

.. note::
   - Connection issues between Odoo and the payment terminal result in transaction cancellation.
   - To cancel the payment request sent mistakenly, click :guilabel:`Cancel`.

.. toctree::
   :titlesonly:

   terminals/adyen
   terminals/ingenico
   terminals/mercado_pago
   terminals/razorpay
   terminals/six
   terminals/stripe
   terminals/tyro
   terminals/viva_com
   terminals/worldline
