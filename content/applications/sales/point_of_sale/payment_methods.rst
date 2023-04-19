:show-content:

===============
Payment methods
===============

Configuration
=============

To add a payment method, you first need to create it. Go to :menuselection:`Point of Sale -->
Configuration --> Payment Methods --> New`, and set a name. Check :guilabel:`Identify Customer`
to allow this payment method *exclusively* for registered customers.

Then, select the :guilabel:`Journal`. Choose :guilabel:`Cash` to use this payment method for cash
payments, or :guilabel:`Bank` to use it for card payments.

.. image:: payment_methods/payment-method.png
   :align: center
   :alt: Creating a new payment method for a POS.

.. note::
   - Selecting a :guilabel:`bank` journal automatically adds the :guilabel:`Use a Payment Terminal`
     field in which you can add your terminal's information.
   - Credentials are mandatory to use a payment terminal. To learn how to configure the different
     terminals, check out the following documentation pages:

     - :doc:`Adyen configuration <payment_methods/payment/adyen>`
     - :doc:`Ingenico configuration <payment_methods/payment/ingenico>`
     - :doc:`Six configuration <payment_methods/payment/six>`
     - :doc:`Stripe configuration <payment_methods/payment/stripe>`
     - :doc:`Vantiv configuration <payment_methods/payment/vantiv>`
     - :doc:`Worldline configuration <payment_methods/payment/worldline>`

Once the payment method is created, you can select it to be used in your POS. To do so, go to the
:ref:`POS settings <general/settings>`, select the POS for which you wish to make the payment
method available in the :guilabel:`Point of Sale` field, and add the payment method(s) under the
:guilabel:`Payment` section.

.. toctree::
   :titlesonly:

   payment_methods/payment
