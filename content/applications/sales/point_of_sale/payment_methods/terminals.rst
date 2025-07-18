:show-content:

=================
Payment terminals
=================

Connect and integrate a payment terminal to a POS system to accept multiple payment options,
including credit and debit cards.

.. _terminals/configuration:

Configuration
=============

To enable and configure a payment terminal, follow these steps:

#. Go to the :ref:`POS settings <configuration/settings>` and scroll down to the :guilabel:`Payment
   Terminals` section.
#. Tick the desired terminal's checkbox:

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

Configuring a terminal requires :doc:`creating the corresponding payment method to add to a POS
<../payment_methods>`.

Pay with a payment terminal
===========================

To process a payment with a configured terminal, follow these steps:

#. In Odoo, select the terminal's payment method.
#. Follow the terminal's operation and validate the payment. Odoo integrates the payment in POS and
   the status changes to :guilabel:`Payment Successful`.

.. note::
   - | In case of connection issues between Odoo and the payment terminal, force the payment by
       clicking on :guilabel:`Force Done`, which allows you to validate the order.
     | This option is only available after receiving an error message informing you that the
       connection failed.
   - To cancel the payment request, click on :guilabel:`Cancel`.

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
