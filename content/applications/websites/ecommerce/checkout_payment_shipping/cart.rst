===========
Add to cart
===========

The :guilabel:`Add to Cart` button can be customized in multiple ways. You can:

- Choose on which page customers go after clicking the 'Add to Cart' button;
- Hide the 'Add to Cart' button to prevent sales;
- Add a 'Buy Now' button to skip the cart step and lead customers straight to checkout;
- Create additional 'Add to Cart / Buy Now' buttons;
- Add an 'Order Again' button to the customer portal.

.. seealso::
   :doc:`checkout`

'Add to Cart' action customization
==================================

When customers click on the :guilabel:`Add to Cart` button, the product is added to their cart, and
customers remain **by default** on the product's page. However, customers can either immediately be
**redirected** to their cart, or given the choice on what to do through a **dialog box**.

To change the default behavior, go to :menuselection:`Website --> Configuration --> Settings`. Under
the :guilabel:`Shop - Checkout Process` section, look for :guilabel:`Add to Cart` and select one of
the options.

.. note::
   If a product has :doc:`optional products <../managing_products/cross_upselling>`, the **dialog
   box** will always appear.

.. seealso::
   :doc:`../managing_products/catalog`

.. _cart/prevent-sale:

Replace 'Add to Cart' button by 'Contact Us' button
===================================================

You can replace the 'Add to Cart' button with a 'Contact Us' button which redirects users to the URL
of your choice.

.. note::
   Hiding the :guilabel:`Add to Cart` button is often used by B2B eCommerces that need to restrict
   purchases only to :ref:`customers with an account <checkout-sign>`, but still want to
   display an online product catalog for those without.

To do so, go to :menuselection:`Website --> Configuration --> Settings --> Shop - Products` and tick
:guilabel:`Prevent Sale of Zero Priced Product`. This creates a new :guilabel:`Button url` field
where you can enter the **redirect URL** to be used. Then, set the price of the product to `0.00`
either from the **product's template**, or from a
:doc:`pricelist <../../../sales/sales/products_prices/prices/pricing>`.

.. image:: cart/cart-contactus.png
   :align: center
   :alt: Contact us button on product page

.. note::
   The 'Contact Us' button and '*Not Available For Sale*' text can both be modified using the
   **website builder** on the product's page (:menuselection:`Edit --> Customize`) by clicking on
   them.

Customizable 'Add to Cart' button
=================================

You can also create a customizable 'Add to Cart' button and link it to a specific product. The
**customized button** can be added on any page of the website as an **inner content** building
block, and is an *additional* button to the regular :guilabel:`Add to Cart` button.

To add it, go on the :guilabel:`Shop` page of your choice, click :menuselection:`Edit --> Blocks`
and place the building block. Once placed, you have the following options:

- :guilabel:`Product`: select the product to link the button with. Selecting a product renders the
  :guilabel:`Action` field available;
- :guilabel:`Action`: choose if the button should :guilabel:`Add to Cart` or :guilabel:`Buy Now`
  (instant checkout).

.. image:: cart/cart-add.png
   :align: center
   :alt: Customizable 'Add to Cart' button

.. _cart/buy-now:

'Buy Now' button
================

You can enable the 'Buy Now' button to instantly take the customer to **checkout** instead
of adding the product to the cart. The :guilabel:`Buy Now` button is an *additional* button and
does not replace the :guilabel:`Add to Cart` button. To enable it, go to
:menuselection:`Website --> Configuration --> Settings --> Shop - Checkout Process` and tick
:guilabel:`Buy Now`.

.. image:: cart/cart-buy-now.png
   :align: center
   :alt: Buy Now button

Re-order from portal
====================

Customers have the possibility to **re-order** items from **previous sales orders** on the customer
portal. To do so, go to :menuselection:`Website --> Configuration --> Settings --> Shop - Checkout
Process` and enable :guilabel:`Re-order From Portal`. Customers can find the :guilabel:`Order Again`
button on their **sales order** from the **customer portal**.

.. image:: cart/cart-reorder.png
   :align: center
   :alt: Re-order button
