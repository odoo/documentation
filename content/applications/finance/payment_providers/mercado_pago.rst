============
Mercado Pago
============

`Mercado Pago <https://www.mercadopago.com/>`_ is an online payment provider covering several
countries, currencies and payment methods in Latin America.

.. _payment_providers/mercado_pago/configure_dashboard:

Configuration on Mercado Pago Dashboard
=======================================

#. Log into the `Mercado Pago Dashboard <https://www.mercadopago.com.mx/developers/panel>`_.
#. Select your application or create a new one either for the `Checkout Pro <https://www.
   mercadopago.com.mx/developers/en/docs/checkout-pro/overview>`_ or `Checkout Bricks 
   <https://www.mercadopago.com.mx/developers/en/docs/checkout-bricks/overview>`_ solutions.
#. Select :guilabel:`Production Credentials` in the left part of the application page, 
   then select the industry, optionally enter your domain, and click :guilabel:`Generate
   production credentials`

.. tip::
   If you are trying Mercado Pago as a test, follow the `Test accounts <https://www.mercadopago
   .com.ar/developers/es/docs/your-integrations/test/accounts>`_ documentation to be able to 
   generate seller and buyer testing accounts. 

.. image::mercado_pago/mp-production-credentials.png
   :align: center 
   :alt: Production credentials in Mercado Pago Dashboard

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Mercado Pago <payment_providers/add_new>`.
#. In the :guilabel:`Credentials` tab, enter the country where you will be using Mercado Pago.
#. Click on the :guilabel:`Connect` button.
#. Follow the OAuth connection steps in the Mercado Pago portal.

Odoo will automatically :guilabel:`Enable` the payment provider and assign the generated 
:guilabel:`Access Token`.

In the :guilabel:`Configuration` tab, click on the :ref:`Enable Payment Methods 
<payment_providers/payment_methods>` button to activate preferred methods for the database.

- :guilabel:`Card:` Enables the embedded payment card brick.
- :guilabel:`Mercado Pago Wallet:` Enables the redirect payment portal.

Mercado Pago does support :ref:`Tokenization <payment_providers/tokenization>` features.

.. seealso::
   - :doc:`../payment_providers`
   - `Mercado Pago Odoo webinar <https://www.youtube.com/watch?v=CX8vPHMb1ic>`_
