======
Redsys
======

`Redsys <https://redsys.es>`_ is a Spain-based payment service provider that processes online and
in-store payments for businesses across Europe. It allows merchants to accept major credit and debit
cards, as well as other local payment methods supported by Spanish banks.

.. _payment_providers/redsys/configure_redsys:

Redsys account configuration
============================

#. Contact your bank to request activation of an online payment terminal (TPV) with Redsys.
#. `Log into your Redsys account
   <https://sis-t.redsys.es:25443/admincanales-web/index.jsp#/login>`_ using the credentials
   provided by your bank.
#. In the left-hand menu, navigate to :menuselection:`Merchant Configuration`.
#. In the :guilabel:`Merchant Information` section, fill in the :guilabel:`Name`,
   :guilabel:`Merchant URL`, and :guilabel:`Merchant Email` fields.
#. Set the fields in the :guilabel:`Configuration data` section as follows:

   - :guilabel:`Online notification`: :guilabel:`With online notification: HTTP`
   - :guilabel:`Synchronization`: :guilabel:`Synchronous`
   - :guilabel:`Parameters in the URLs`: :guilabel:`Yes`

#. Copy the merchant code and merchant terminal number displayed in the :guilabel:`Merchant
   management` section and save them for :ref:`later <payment_providers/redsys/configure_odoo>`.
#. Click :guilabel:`See key`, enter your user identifier and password to display the key, and save
   it for :ref:`later <payment_providers/redsys/configure_odoo>`.

.. _payment_providers/redsys/configure_odoo:

Configuration in Odoo
=====================

#. :ref:`Navigate to the payment provider Redsys <payment_providers/add_new>`.
#. Fill in the :guilabel:`Merchant Code`, :guilabel:`Merchant Terminal`, and :guilabel:`Secret Key`
   fields with the information saved at the step :ref:`payment_providers/redsys/configure_redsys`.
#. Configure the rest of the options to your liking.
#. Set the :guilabel:`State` field to :guilabel:`Enabled` (or :guilabel:`Test Mode` if you want to
   :ref:`test the integration without affecting live transactions <payment_providers/test-mode>`).

.. seealso::
   :doc:`../payment_providers`
