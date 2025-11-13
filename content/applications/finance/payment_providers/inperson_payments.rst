==================
In-person payments
==================

.. note::
   Sales orders are automatically confirmed when paid using an in-person payment method.

.. _payment_providers/inperson_payments/pay_on_site:

Pay on site
===========

To allow customers to reserve products online and pay when collecting them in-store, enable and
configure the :ref:`Click & Collect feature <ecommerce/shipping/instore-pickup>`. The **Pay on
Site** payment provider is automatically enabled and published. To edit the default instructions
shown to customers, :ref:`access the payment provider form <payment_providers/supported_providers>`
and go to the :guilabel:`Messages` tab.

.. note::
   The method is only available at checkout for customers who select the **Pick up in store**
   delivery method.

.. _payment_providers/inperson_payments/cash_on_delivery:

Cash on delivery
================

The **Cash on Delivery** payment method allows customers to pay for their order at the time of
delivery. To make it available to customers, :doc:`navigate to the relevant delivery method form
</applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/new_delivery_method>`
and enable :guilabel:`Cash on Delivery`. The **Cash on Delivery** payment provider is automatically
enabled and published. To edit the default instructions shown to customers, :ref:`access the payment
provider form <payment_providers/supported_providers>` and go to the :guilabel:`Messages` tab.

.. note::
   This method is only available at checkout for customers who select a delivery method with the
   :guilabel:`Cash on Delivery` feature enabled.

.. seealso::
   :doc:`../payment_providers`
