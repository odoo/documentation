:show-content:

===============
Payment methods
===============

To add a payment method, you first need to create it. Go to :menuselection:`Point of Sale -->
Configuration --> Payment Methods --> Create`, and set a name. Check :guilabel:`Identify Customer`
to allow this payment method *exclusively* for registered customers.

Then, select the :guilabel:`Journal`. Choose :guilabel:`Cash` to use this payment method for cash
payments, or :guilabel:`Bank` to use it for card payments.

.. comment:
   when created, add a link to the customeraccount page under advanced_pricing_features

.. image:: payment_methods/payment-method.png
   :alt: Creating a new payment method for a POS.

.. note::
   - Selecting a :guilabel:`bank` journal automatically adds the :guilabel:`Use a Payment Terminal`
     field in which you can add your terminal's information.
   - Credentials are mandatory to use a payment terminal. To learn how to configure the different
     terminals, check out the following documentation pages:

     - :doc:`Adyen configuration <payment_methods/terminals/adyen>`
     - :doc:`Vantiv configuration <payment_methods/terminals/vantiv>`
     - :doc:`Ingenico configuration <payment_methods/terminals/ingenico>`
     - :doc:`Six configuration <payment_methods/terminals/six>`
     - :doc:`Worldline configuration <payment_methods/terminals/worldline>`

Once the payment method is created, you can select it in your POS settings. To do so, go to
:menuselection:`Point of Sale --> Configuration --> Point of Sale` and select a POS for which you
wish to make the payment method available. Click :guilabel:`Edit` and add the payment method under
the :guilabel:`Payments` section.

.. toctree::
   :titlesonly:

   payment_methods/terminals
