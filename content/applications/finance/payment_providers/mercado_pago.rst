============
Mercado Pago
============

`Mercado Pago <https://www.mercadopago.com/>`_ is an online payment provider covering several
countries, currencies and payment methods in Latin America.

.. _payment_providers/mercado_pago/configure_dashboard:

Configuration on Mercado Pago Dashboard
=======================================

#. Log into `Mercado Pago Dashboard <https://www.mercadopago.com.mx/developers/panel>`_ 
   and go to your **Application** or *create* a new one.
#. Go to :menuselection:`Production Credentials` or :menuselection:`Credentials` if your are in
   a *Test* environment and copy your **Access Token**

.. _payment_providers/mercado_pago/configure_odoo:

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Mercado Pago <payment_providers/add_new>` and change its
   state to :guilabel:`Enabled`.
#. In the :guilabel:`Credentials` tab, fill the :guilabel:`Access Token` with the value 
   you saved at the step :ref:`payment_providers/mercado_pago/configure_dashboard`.
#. Configure the rest of the options to your liking.

.. seealso::
   - :doc:`../payment_providers`
