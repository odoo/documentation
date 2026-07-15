============
Mercado Pago
============

`Mercado Pago <https://www.mercadopago.com/>`_ is an online payment provider covering several
countries, currencies, and payment methods in Latin America.

.. _payment_providers/mercado_pago/configure_dashboard:

Configuration on Mercado Pago dashboard
=======================================

#. Create a Mercado Pago account if necessary and log into the Mercado Pago dashboard:

   - `Mercado Pago dashboard for Mexico <https://www.mercadopago.com.mx/developers>`_
   - `Mercado Pago dashboard for Argentina <https://www.mercadopago.com.ar/developers>`_
   - `Mercado Pago dashboard for Brazil <https://www.mercadopago.com.br/developers>`_
   - `Mercado Pago dashboard for Chile <https://www.mercadopago.cl/developers>`_
   - `Mercado Pago dashboard for Colombia <https://www.mercadopago.com.co/developers>`_
   - `Mercado Pago dashboard for Peru <https://www.mercadopago.com.pe/developers>`_
   - `Mercado Pago dashboard for Uruguay <https://www.mercadopago.com.uy/developers>`_

#. In the top-right corner, click :guilabel:`Your integrations`, then :guilabel:`View all`.
#. Select the relevant application or `create a new one
   <https://www.mercadopago.com.mx/developers/en/docs/checkout-api-orders/create-application>`_.
#. Select :guilabel:`Production Credentials` in the left menu.
#. Select the relevant industry, optionally enter the domain, and click :guilabel:`Generate
   production credentials`.

.. important::
   The testing environment is not supported; all transactions are generated in the production
   environment.

.. _payment_providers/mercado_pago/odoo-configuration:

Odoo configuration
==================

#. :ref:`Navigate to the payment provider Mercado Pago <payment_providers/add_new>`.
#. In the :guilabel:`Credentials` tab, select the country of your :ref:`Mercado Pago account
   <payment_providers/mercado_pago/configure_dashboard>` in the :guilabel:`Account Country` field.
#. Click :guilabel:`Connect`.
#. Select the relevant country, then go through the sign-in process on the Mercado Pago portal
   using your :ref:`credentials <payment_providers/mercado_pago/configure_dashboard>`.
#. At the end of the process, you are redirected to Odoo, the :guilabel:`Access token` is generated,
   and the payment provider is :guilabel:`Enabled`.
#. Configure the remaining options as needed.

.. tip::
   - Click :guilabel:`Disconnect your Mercado Pago Account` to disconnect the current account and
     connect a different one if needed.
   - :ref:`Tokenization <payment_providers/tokenization>` is supported for credit cards.

.. seealso::
   - :doc:`../payment_providers`
   - `Mercado Pago Odoo webinar <https://www.youtube.com/watch?v=CX8vPHMb1ic>`_
