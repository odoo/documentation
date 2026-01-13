============
Mercado Pago
============

Mercado Pago offers payment solutions through :doc:`payment terminals <../terminals>` to handle
customer transactions.

.. important::
   - Odoo is compatible with Point Smart 1 or Point Smart 2 payment terminals, which can be
     purchased on the Mercado Pago website in `Argentina
     <https://www.mercadopago.com.ar/herramientas-para-vender/lectores-point>`_, `Brazil
     <https://www.mercadopago.com.br/ferramentas-para-vender/maquininhas-point>`_, and `Mexico
     <https://www.mercadopago.com.mx/herramientas-para-vender/lectores-point>`_.
   - Mercado Pago payment terminals do not require an :doc:`IoT Box </applications/general/iot>` to
     operate.

.. seealso::
   - :doc:`Mercado Pago online payments </applications/finance/payment_providers/mercado_pago>`
   - `Mercado Pago tutorial video (Spanish only) <https://www.youtube.com/watch?v=dpbexfTc4VQ>`_

.. _pos/mercado-pago/configuration:

Mercado Pago configuration
==========================

The Mercado Pago configuration requires creating an account, if needed, and :ref:`connecting it
to your payment terminal and store <pos/mercado-pago/terminal>`. Then, create a :ref:`Point Smart
application <pos/mercado-pago/point-smart>` for technical setup and acquiring :ref:`credentials
<pos/mercado-pago/credentials>` to complete the integration.

.. _pos/mercado-pago/terminal:

Terminal and store connection
-----------------------------

#. Create a Mercado Pago account if needed:

   - `Mercado Pago for Mexico <https://www.mercadopago.com.mx/>`_
   - `Mercado Pago for Argentina <https://www.mercadopago.com.ar/>`_
   - `Mercado Pago for Brazil <https://www.mercadopago.com.br/>`_
#. Turn on the Point Smart terminal. Follow the on-screen instructions until prompted to link the
   terminal with your Mercado Pago account.
#. Click :guilabel:`Soy responsable del negocio` to get a pairing QR code.
#. Connect to your Mercado Pago account with a mobile device.
#. Scan the QR code with the mobile device and complete the connection in your Mercado Pago account.
#. Ensure the terminal is correctly linked to your store:

   #. Type your Mercado Pago account email address or phone number, then click
      :guilabel:`Continuar`.
   #. In the popover, click :guilabel:`Continuar`.
   #. On the :guilabel:`Configura el lector para tu cuenta [account name]` screen, click
      :guilabel:`Empezar configuración`.
   #. Click :guilabel:`Crear nueva sucursal` to add a new point of sale.
   #. Type the point of sale's name and address. Add more information if needed, then click
      :guilabel:`Crear sucursal`.
   #. Type your register's name and click :guilabel:`Confirmar sucursal y caja`.
   #. Click :guilabel:`Crear clave` to create a security key and protect the point of sale.

.. _pos/mercado-pago/point-smart:

Point Smart application
-----------------------

#. Log in to the `Mercado Pago Developer <https://www.mercadopago.com/developers>`_ portal.
#. Click :guilabel:`Tus integraciones`, then click `Crear aplicación
   <https://www.mercadopago.com.mx/ayuda/20152>`_.
#. In the :guilabel:`Configuraciones básicas` section, type the application name, select
   :guilabel:`Pagos presencial` and :guilabel:`PointdeMercadoPago`, then click :guilabel:`Crear
   aplicación` to receive the application number.

.. _pos/mercado-pago/credentials:

Credentials generation
----------------------

There are three credentials to generate and collect from the `Mercado Pago Developer dashboard
<https://www.mercadopago.com/developers>`_: a **webhook secret key**, an **access token**, and the
**terminal serial number**.

#. Generate the webhook secret key:

   #. Click :guilabel:`Webhooks` under the :guilabel:`Notificaciones` section, then
      :guilabel:`Modo productivo`.
   #. Paste your Odoo database's URL followed by `/pos_mercado_pago/notification`. For example:
      `https://mycompany.odoo.com/pos_mercado_pago/notification`.
   #. Copy the generated webhook secret key and save it for the
      :ref:`pos/mercado-pago/payment-method` step.
#. Generate the access token:

   #. Click :guilabel:`Credenciales de producción` under the :guilabel:`Producción` section,
      then :guilabel:`Activar credenciales de producción`.
   #. Copy the generated access token and save it for the :ref:`pos/mercado-pago/payment-method`
      step.
#. Locate the terminal serial number on the back of the terminal and write it down for the
   :ref:`pos/mercado-pago/payment-method` step.

Once the Mercado Pago configuration is complete, log in to your Odoo database to create a
:ref:`payment method <pos/mercado-pago/payment-method>` using the collected credentials.

.. warning::
   Odoo does not support the :guilabel:`Standalone` operation mode.

.. note::
   All terminals purchased with your Mercado Pago account are automatically displayed on the
   Mercado Pago dashboard.

.. _pos/mercado-pago/payment-method:

Odoo POS configuration
======================

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`, scroll down to the
   :guilabel:`Payment Terminals` section, enable :guilabel:`Mercado Pago`, and click
   :guilabel:`Save`.
#. Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and :doc:`create the
   related payment method <../../payment_methods>`.
#. Fill in the mandatory fields using the :ref:`previously generated credentials
   <pos/mercado-pago/configuration>`:

   - Paste the access token in the :guilabel:`Production user token` field.
   - Paste the webhook secret key in the :guilabel:`Production secret key` field.
   - Type the terminal serial number in the :guilabel:`Terminal S/N` field.
#. Save the payment method.

.. note::
   Actions on the terminal should trigger a notification on the Odoo POS interface. If not, ensure
   the webhook secret key is correct.
