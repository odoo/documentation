======
Mollie
======

**Mollie** is a payment service that offers payment solutions through physical :doc:`payment
terminals <../terminals>`, tap terminals, and terminal apps for Android and iOS devices.

.. note::
   Mollie payment terminals do not require an IoT Box to operate.

.. seealso::
   `List of supported countries
   <https://help.mollie.com/hc/en-us/articles/33911501243154-In-person-payments-supported-countries>`_

.. _pos/mollie/mollie_configuration:

Mollie configuration
====================

To configure a Mollie terminal, create a `Mollie account <https://my.mollie.com>`_, then follow
these steps:

#. In the left menu, go to :menuselection:`In-person payments`.
#. Select the desired payment terminal from the list.
#. Click :guilabel:`Terminal information` in the top menu.
#. Copy the :guilabel:`Terminal ID`; it is required for the :ref:`Odoo POS configuration
   <pos/mollie/pos_configuration>` process.
#. Click the :guilabel:`Developers` icon in the bottom left corner.
#. Copy the :guilabel:`Live API key`; it is required for the :ref:`Odoo POS configuration
   <pos/mollie/pos_configuration>` process.

.. important::
    The :guilabel:`Live API key` provides access to the Mollie account and must be kept secure.

.. note::
   Refer to the `Mollie website <https://www.mollie.com/products/pos-payments>`_ for a full list of
   supported terminals and their setup instructions.

.. _pos/mollie/pos_configuration:

Odoo POS configuration
======================

To connect the Mollie terminal with Odoo Point of Sale, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and :doc:`create a
   payment method <../../payment_methods>`.
#. Set the :guilabel:`Journal` field to :guilabel:`Bank`.
#. Select the desired point of sale in the :guilabel:`Point of Sale` field.
#. Set the :guilabel:`Integration` field to :guilabel:`Terminal`.
#. Click :guilabel:`Activate` or :guilabel:`Setup` under the Mollie integration from the list of
   providers if needed.
#. Optionally, set the :guilabel:`Integrate with` field to :guilabel:`Mollie`.
#. Set the :guilabel:`Mollie Payment Provider` field to :guilabel:`Mollie`.
#. Paste the :ref:`terminal ID <pos/mollie/mollie_configuration>` into the :guilabel:`Mollie
   Terminal ID` field.
#. Hover over the :guilabel:`Mollie Payment Provider` field and click the :icon:`fa-arrow-right`
   (:guilabel:`Internal link`) icon.
#. Paste the :ref:`API key <pos/mollie/mollie_configuration>` into the :guilabel:`API Key` field.
   Leave the :guilabel:`State` field on :guilabel:`Disabled` if the Mollie payment provider is not
   used for :doc:`online payments </applications/finance/payment_providers/mollie>`.
#. Save the payment provider form.
