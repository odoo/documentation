=================
Payment providers
=================

Odoo supports a multitude of online
:doc:`payment providers </applications/finance/payment_providers>` for your website, allowing your
customers to pay with their preferred payment methods.

Configuration
-------------

To set up payment providers on the eCommerce app, go to :menuselection:`Website --> Configuration
--> Payment Providers`. From here, :guilabel:`Activate` the payment providers you wish to have
available on your shop, and configure them according to your needs.

Alternatively, you can access **payment providers** via :menuselection:`Website --> Configuration
--> Settings`. In the :guilabel:`Shop - Payment` section, you can :guilabel:`Configure SEPA Direct
Debit` if you wish to use it, as well as :guilabel:`View other providers`. If you use the
:guilabel:`Authorize.net` payment provider, the
:ref:`Payment Capture Method <payment_providers/features/manual_capture>` can be configured in that
same menu.

If you are using :doc:`/applications/finance/payment_providers/paypal`, you can also enable and
configure it here.

Checkout payment options
------------------------

Once activated, customers can choose the payment provider of their choice during the **checkout
process**, at the :guilabel:`Confirm Order` step.

.. image:: payments/payments-checkout.png
   :align: center
   :alt: Payment provider selection at checkout
