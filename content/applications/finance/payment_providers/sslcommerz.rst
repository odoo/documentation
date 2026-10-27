==========
SSLCOMMERZ
==========

`SSLCOMMERZ <https://sslcommerz.com/>`_ is an online payment provider covering Bangladesh.

.. _payment_providers/sslcommerz/configure_dashboard:

SSLCOMMERZ configuration
========================

#. `Register for a sandbox account <https://developer.sslcommerz.com/registration/>`_ to try
   SSLCOMMERZ as a :ref:`test <payment_providers/test-mode>`, or `register for a production account
   <https://signup.sslcommerz.com/register>`_ to go live.
#. Once your account is approved, log into the `SSLCOMMERZ merchant panel
   <https://merchant.sslcommerz.com/>`_ and retrieve your :guilabel:`Store ID` and :guilabel:`Store
   Password`, and save them for the :ref:`Odoo configuration step
   <payment_providers/sslcommerz/configure_odoo>`.

.. _payment_providers/sslcommerz/configure_odoo:

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider SSLCOMMERZ <payment_providers/add_new>`.
#. Fill in the :guilabel:`Store ID` and :guilabel:`Store Password` fields with the information saved
   at the step :ref:`payment_providers/sslcommerz/configure_dashboard`.
#. Configure the remaining options as needed.
#. Enable the :guilabel:`Live` field to start accepting payments. Leave it disabled to try
   SSLCOMMERZ as a :ref:`test <payment_providers/test-mode>` with your sandbox credentials.

.. seealso::
   :doc:`../payment_providers`
