======
Mollie
======

`Mollie <https://www.mollie.com/>`_ is an online payments platform established in the Netherlands.

.. _payment_providers/mollie/configure_dashboard:

Mollie configuration
====================

#. `Create a Mollie account
   <https://my.mollie.com/dashboard/signup>`_ if necessary
   and log in to the `Mollie Dashboard <https://my.mollie.com/dashboard/login>`_.
#. Go to :menuselection:`Payments` in the top menu, then click :guilabel:`API keys`.
#. :guilabel:`Copy` the :guilabel:`Live API Key` (or the :guilabel:`Test API Key` if you
   wish to test the integration without affecting live transactions) and save it for the
   :ref:`payment_providers/mollie/configure_odoo` step.

.. _payment_providers/mollie/configure_odoo:

Odoo configuration
==================

#. :ref:`Navigate to the payment provider Mollie <payment_providers/add_new>`
#. Fill in the :guilabel:`API Key` with the value :ref:`previously saved
   <payment_providers/mollie/configure_dashboard>`.
#. Configure the remaining options as needed.
#. Set the :guilabel:`State` field to :guilabel:`Enabled` (or :guilabel:`Test Mode` if you
   want to :ref:`test the integration without affecting live transactions <payment_providers/test-mode>`).

.. seealso::
   :doc:`../payment_providers`
