:show-content:

=================
Payment terminals
=================

Connect and integrate a payment terminal to a :ref:`POS system <pos/session-start>` to accept
multiple payment options, including credit and debit cards.

.. _pos/terminals/configuration:

Configuration
=============

To activate a payment terminal and allow processing payments with it, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings` and scroll down to the
   :guilabel:`Payment Terminals` section.
#. Enable the relevant terminal.
#. Click :guilabel:`Save`.
#. Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and :doc:`create the
   corresponding payment method <../payment_methods>`.
#. Set the :guilabel:`Integration` field to :guilabel:`Terminal`, select the relevant terminal, and
   complete the terminal-specific configuration:

   - :doc:`Adyen <terminals/adyen>`
   - :doc:`Ingenico <terminals/ingenico>`
   - :doc:`Mercado Pago <terminals/mercado_pago>`
   - :doc:`QFPay configuration <terminals/qfpay>`
   - :doc:`Razorpay <terminals/razorpay>`
   - :doc:`SIX <terminals/six>`
   - :doc:`Stripe <terminals/stripe>`
   - :doc:`Tyro <terminals/tyro>`
   - :doc:`Viva.com <terminals/viva_com>`
   - :doc:`Worldline <terminals/worldline>`
#. Go to :menuselection:`Point of Sale --> Configuration --> Settings` and add the payment method
   to the :guilabel:`Payment Methods` list to make it available in the POS interface.

.. _pos/terminals/terminal-use:

Terminal use
============

To process a :ref:`payment <pos/sell>` with a :ref:`configured terminal
<pos/terminals/configuration>` for an order, select the terminal's :doc:`payment method
<../payment_methods>` on the :guilabel:`Payment` screen, then follow the instructions on the
terminal device.

Once the transaction is successful, the payment is automatically validated in Point of Sale.

.. note::
   - Connection issues between Odoo and the payment terminal result in transaction cancellation.
   - To cancel the payment request, click :guilabel:`Cancel`.

.. toctree::
   :titlesonly:

   terminals/adyen
   terminals/ingenico
   terminals/mercado_pago
   terminals/qfpay
   terminals/razorpay
   terminals/six
   terminals/stripe
   terminals/tyro
   terminals/viva_com
   terminals/worldline
