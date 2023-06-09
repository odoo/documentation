:show-content:

===============
Payment methods
===============

To add a payment method, you first need to create it. Go to :menuselection:`Point of Sale -->
Configuration --> Payment Methods --> Create`. Set a name and select a :doc:`payment terminal
<payment_methods/terminals>` for card payments or check :guilabel:`Cash` for cash payments.

.. image:: payment_methods/payment-method.png
   :alt: Creating a new payment method for a POS.

.. seealso::
   :doc:`payment_methods/terminals`.

Now, you can select the payment method in your POS settings. To do so, go to
:menuselection:`Point of Sale --> Configuration --> Point of Sale` and select a POS for which you
wish to make the payment method available. Click :guilabel:`Edit` and add the payment method under
the :guilabel:`Payments` section.

.. toctree::
   :titlesonly:

   payment_methods/terminals
