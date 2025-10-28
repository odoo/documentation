=======
DPO Pay
=======

`DPO Pay <https://dpogroup.com/>`_ is a payment provider based in Africa that operates across
multiple countries on the continent.

.. _payment_providers/dpo/configure_dashboard:

DPO Pay account creation
========================

#. `Fill in the DPO Pay onboarding form <https://dpo-pay-network.odoo.com/form>`_ and upload
   the required documents.
#. Agree to the :guilabel:`Terms and Conditions` and click :guilabel:`Submit`.
#. DPO Pay creates a test account based on the submitted information and sends you an email
   containing your login credentials for the `DPO portal <https://portal.dpopay.com>`_
   and the :ref:`test credentials <payment_providers/test-mode>` to enter in
   :ref:`Odoo <payment_providers/dpo/configure_odoo>` if you want to try DPO Pay without affecting
   live transactions.
#. Once DPO has verified the information and documents, they will transition your test account to a
   live account and send another email containing your live credentials to configure in
   :ref:`Odoo <payment_providers/dpo/configure_odoo>`.

.. _payment_providers/dpo/configure_odoo:

Configuration in Odoo
=====================

#. :ref:`Navigate to the payment provider DPO Pay <payment_providers/add_new>`.
#. Fill in the :guilabel:`Service ID` and :guilabel:`Company Token` fields with the
   :ref:`information received from DPO Pay <payment_providers/dpo/configure_dashboard>`.
#. Configure the remaining options to your liking.
#. Set the :guilabel:`State` field to :guilabel:`Enabled` (or :guilabel:`Test Mode` if you are
   trying DPO Pay as a :ref:`test <payment_providers/test-mode>`).

.. note::
   All `payment methods supported by DPO Pay <https://dpogroup.com/Payment-methods>`_ are grouped
   under the :guilabel:`Card / Mobile` payment method. When they select this payment method,
   customers are redirected to a DPO Pay page where they can select their preferred payment method.
   To enable or disable specific payment options, contact `DPO Pay support
   <https://dpogroup.com/contact-us/>`_.

.. seealso::
   :doc:`../payment_providers`
