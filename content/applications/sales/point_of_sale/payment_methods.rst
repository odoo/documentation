:show-content:

===============
Payment methods
===============

To add a payment method, you first need to create it. Go to :menuselection:`Point of Sale -->
Configuration --> Payment Methods --> Create`. Set a name and select the **payment terminal** or
check :guilabel:`Cash` for cash payments.

.. image:: payment_methods/payment-method.png
   :alt: Creating a new payment method for a POS.

.. note::
   Credentials are mandatory to use a payment terminal. To learn how to configure the different
   terminals, check out the following documentation pages:.

   - :doc:`Adyen configuration <payment_methods/terminals/adyen>`
   - :doc:`Ingenico configuration <payment_methods/terminals/ingenico>`
   - :doc:`Six configuration <payment_methods/terminals/six>`
   - :doc:`Vantiv configuration <payment_methods/terminals/vantiv>`

Now, you can select the payment method in your POS settings. To do so, go to
:menuselection:`Point of Sale --> Configuration --> Point of Sale` and select a POS for which you
wish to make the payment method available. Click :guilabel:`Edit` and add the payment method under
the :guilabel:`Payments` section.

.. toctree::
   :titlesonly:

   payment_methods/terminals
