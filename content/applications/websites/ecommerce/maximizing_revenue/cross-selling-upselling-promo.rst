===============================================
Cross-selling, upselling, and promotional codes
===============================================

Cross-selling, upselling, and promotional codes are great ways to boost your sales and enhance the
overall shopping experience for your customers.

First, let's take a look at how to properly "cross-sell" products (or services) with Odoo.

Cross-selling
=============

Let's say, you sell computers. Wouldn't it be smart to entice your customers to buy a top-notch
screen or an extra-warranty to go along with their purchase? That tactic is known as
"cross-selling."

Cross-selling is typically used with the following:

* *Accessory* products on the checkout page
* *Optional* products on a new *Add to Cart* screen.

Accessory products
~~~~~~~~~~~~~~~~~~

Accessory products show up when the customer reviews their cart before paying for their
transaction. Accessories can be anything that would go with the main product.

For example, if the customer bought a desk, some accessories could be a lamp or a chair.

.. image:: cross-selling-upselling-promo/cross-sell-accessory-frontend-desk.png
   :align: center
   :alt: ecommerce cross-selling accessories

Select your *Accessory Products* in the *eCommerce* tab of the product detail page.

.. image:: cross-selling-upselling-promo/cross-sell-accessory-ecommerce-tab.png
   :align: center
   :alt: ecommerce accessory products in product detail form

.. note::
    In the case that several items are added to a cart, there's an algorithm to figure out the best
    accessories to display. If any item is the accessory of several products added to the cart,
    it'll likely be atop the list of suggested accessories.

Optional products
~~~~~~~~~~~~~~~~~

Optional products are items that are directly related to the product that was added to cart. You
can configure your optional products on the detail form of a product, under the *Sales* tab.

.. image:: cross-selling-upselling-promo/optional-products-sales-tab.png
   :align: center
   :alt: ecommerce optional products sales tab

For example, if a customer put a conference desk in their cart, some optional products could be a
conference chair, a warranty, or anything else of this nature.

Whenever the main product is added to cart, a pop-up will appear as an extra step.

.. image:: cross-selling-upselling-promo/optional-products-pop-up.png
   :align: center
   :alt: ecommerce optional products pop up

Upselling
=========

Upselling is when you suggest more expensive alternative products, as customers look at basic
items. That way, your customer will spend more time browsing your catalog, and potentially
purchase an even pricier item.

Upselling your customers with alternative products (at higher prices) is the *best* way to
*maximize* your revenue.

To start upselling:
~~~~~~~~~~~~~~~~~~~

* Choose what products you want to upsell by selecting *Alternative Products* in the *eCommerce* tab
  of the product detail form.

.. image:: cross-selling-upselling-promo/upsell-alt-products-backend.png
   :align: center
   :alt: ecommerce alternative products ecommerce tab

* Turn on *Alternative Products* from the *Customize* menu of the product web page.

.. image:: cross-selling-upselling-promo/upsell-customize-alt-products.png
   :align: center
   :alt: ecommerce customize dropdown alternative products

Now, your customers will be presented with pricier alternative products to consider at the
bottom of the product page, as they check out a more "basic" item.

.. image:: cross-selling-upselling-promo/upsell-alternative-products.png
   :align: center
   :alt: ecommerce upsell suggested alternative products

Promotional codes
=================

Promotional codes are a great way to boost your sales. Creating your own Promotional
Programs will entice and encourage customers to purchase goods (or services) from you because of
a specific deal or discount.

Customers access these deals by entering in a promotional code as they checkout.

Setup
~~~~~

* Go to :menuselection:`Website --> Configuration --> Settings` and activate *Pricelists*

* Then, activate *Advanced price rules (discounts, formulas)*.

* Activate *Coupons & Promotions* here, as well.

* Click *Save*.

.. image:: cross-selling-upselling-promo/promo-pricelist-coupon-setting.png
   :align: center
   :alt: ecommerce pricelist coupon setting

* Go to :menuselection:`Products --> Pricelists` to create a new
  Pricelist with your desired discount rule.

.. image:: cross-selling-upselling-promo/pricelists-dropdown.png
   :align: center
   :alt: pricelists products drop-down menu

.. image:: cross-selling-upselling-promo/pricelists-create-button.png
   :align: center
   :alt: pricelists create button

*  Give the Pricelist an appropriate title, before clicking on *Add a line* in the *Price Rules*
   tab.

.. image:: cross-selling-upselling-promo/pricelist-title-template.png
   :align: center
   :alt: pricelist template with title

*  A pop-up appears, in which you can configure your promotional program in multiple ways.

.. image:: cross-selling-upselling-promo/pricelist-config-pop-up.png
   :align: center
   :alt: pricelist configuration pop-up

On this pop-up, you will be able to configure the following:

-  What the promotion will apply on: All Products, Product Category, Product, or Product Variant
-  The minimum quantity a customer would have to purchase in order to qualify for the promotion
-  The start and end date of the specific promotion
-  How the price will be computed: Fixed Price, Percentage (discount), or Formula

.. note::
   If Percentage (discount) is selected, you will be asked to enter in a discount amount in the
   *Percentage Price* field.

To create your promo code, click the *Configuration* tab and enter in your custom promotional
code in the *E-commerce Promotional Code* field. Then, hit *Save*.

.. image:: cross-selling-upselling-promo/promo-code-field.png
   :align: center
   :alt: promotional code field configuration tab

On your website
~~~~~~~~~~~~~~~

You'll need to activate the promo code feature on the frontend of your website. To do that,
simply navigate to your "Review Order" page on your website, and select
:menuselection:`Customize --> Promo Code`

.. image:: cross-selling-upselling-promo/customize-promo-code.png
   :align: center
   :alt: promo code feature in the customize drop-down menu

Once that's activated an "I have a promo code" option will appear beneath the total.

.. image:: cross-selling-upselling-promo/promo-code-under-total.png
   :align: center
   :alt: promo code field under total

When clicked, a promo code field will appear. Customers enter their promo code in this field and
hit *Apply*.

.. image:: cross-selling-upselling-promo/apply-promo-code-total.png
   :align: center
   :alt: promo code apply under total checkout

Upon clicking *Apply*, the discount will instantly apply itself to the total.

You will be able to see what promotional Pricelist (if any) was used during any transaction by
accessing the Sales Order, found on the main dashboard on the *Sales* app (or if you go to
:menuselection:`Website --> Orders --> Orders`.)

.. image:: cross-selling-upselling-promo/promo-code-pricelist-sales-order.png
   :align: center
   :alt: promo code pricelist on sales order

Analysis
~~~~~~~~

Every promo code used by the customer is stored in Odoo's system, so you can analyze the
performance of your marketing campaigns with ease, efficiency, and accuracy.

Go to :menuselection:`Sales --> Reporting --> Sales` and group data by *Pricelist*. Once, you've
grouped by *Pricelist*, you will see color-coated Pricelists at the top of your analytics.

.. image:: cross-selling-upselling-promo/sales-analytics-pricelists.png
   :align: center
   :alt: sales analytics grouped by pricelists

For a clearer view, you can click on certain Pricelists that you want to block out, to make data
easier to analyze.

.. image:: cross-selling-upselling-promo/sales-analytics-block-pricelist.png
   :align: center
   :alt: sales analytics blocked pricelists results

.. note::
   Promotion Programs can be created and configured *without* a Pricelist. However, Pricelists make
   it easier to analyze and track the effectiveness of the promotion. Coupons are similar to
   Promotional Programs, but you can assign them to a specific number of customers.
