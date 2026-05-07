=====
ECPay
=====

`ECPay <https://www.ecpay.com.tw/>`_ is a Taiwanese payment solution provider.
It allows businesses to accept a wide variety of local payment methods.

.. _payment_providers/ecpay/configure_dashboard:

Configuration on the ECPay vendor portal
========================================

#. `Create an account <https://vendor.ecpay.com.tw/User/LogOn_Step1>`_ on the ECPay vendor portal.
#. `Apply for services <https://support.ecpay.com.tw/26291/>`_ during the seller account setup.
   Choose the appropriate membership level for your desired payment methods.
#. Upload the required documents for `account verification
   <https://support.ecpay.com.tw/4862/#verify>`_.
#. Once verified, log into the Vendor Portal and navigate to :menuselection:`System Settings -->
   System Interface Settings --> Interface Information`.
#. Copy the :guilabel:`Merchant ID`, :guilabel:`Hash Key`, and :guilabel:`Hash IV`, and
   save them for the :ref:`Odoo configuration step <payment_providers/ecpay/configure_odoo>`.

.. _payment_providers/ecpay/configure_odoo:

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider ECPay <payment_providers/add_new>`.
#. Fill in the :guilabel:`Merchant ID`, :guilabel:`Hash Key`, and :guilabel:`Hash IV` fields with
   the information saved at the step :ref:`payment_providers/ecpay/configure_dashboard`.
#. Configure the remaining options as needed.
#. Set the :guilabel:`State` field to :guilabel:`Enabled` (or :guilabel:`Test Mode` if you
   are trying ECPay as a :ref:`test <payment_providers/test-mode>`).

.. seealso::
   :doc:`../payment_providers`
