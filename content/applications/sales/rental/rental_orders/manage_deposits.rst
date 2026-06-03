===============
Manage deposits
===============

Requiring fixed deposits is common in many rental scenarios, such as collecting security deposits.
Security deposits are insurance in case of damage, theft, or unpaid fees. It is typically refunded
when the rented product is returned in good condition, and all terms of the rental or service
agreement are met.

This document covers the standard options for :ref:`configuring
<rental/rental_order/manage_deposits/config>`, :ref:`collecting
<rental/rental_orders/manage_deposits/optional-product>`, and :ref:`refunding
<rental/rental_order/manage_deposits/refund>` deposits within the **Rentals** app.

App integration configuration
=============================

The following apps are essential for configuring deposit service products and processing deposit
refunds:

- **Sales**: Enables the *Price* tab on product forms when :doc:`../../sales/products_prices/prices`
  is enabled. Also enables the use of quotation templates.
- **Accounting**: Enables the use of :doc:`Credit Notes
  <../../../finance/accounting/customer_invoices/credit_notes>` on rental orders, which are required
  when returning a deposit.

.. _rental/rental_order/manage_deposits/config:

Configuration
=============

For every rental product that requires a deposit, a second product **must** be configured
specifically for the deposit.

.. example::
   When configuring a digital camera rental that requires a deposit, two products must be
   configured: `Digital Camera Rental` and `Digital Camera Rental Deposit` products.

.. tip::
   Including the product name within the deposit service product name improves organizational
   clarity and simplifies deposit tracking.

Go to :menuselection:`Rental --> Products --> Products`, click :guilabel:`New`, and clearly name the
service product as a deposit.

Next, set the :guilabel:`Product Type` to :guilabel:`Service`, the :guilabel:`Invoicing Policy` to
:guilabel:`Based on Delivered Quantity (Manual)`, and :guilabel:`Sales Price` to the desired deposit
amount, and the unit of measure to :guilabel:`Units`.

Choose whether to include :ref:`Sales Taxes <taxes/product>` for the deposit service product.
Finally, :icon:`fa-cloud-upload` :guilabel:`(save)` the deposit service product.

.. image:: manage_deposits/example-deposit-product-form.png
   :alt: Rental product form configured as a digital camera deposit service in the Rental app.

.. _rental/rental_order/manage_deposit/add-deposit:

Add a deposit to a rental order
===============================

There are several methods to add a deposit service product to a rental order, alongside the related
product:

- :ref:`Optional product menu <rental/rental_orders/manage_deposits/optional-product>`
- :ref:`Quotation template <rental/rental_orders/manage_deposits/use-quotation-template>`
- :doc:`Manually <create_rental_order>`

.. _rental/rental_orders/manage_deposits/optional-product:

Optional product menu
---------------------

To :ref:`configure an optional product <sales/sales_quotations/config-optional-product>` for a
deposit, select the desired product or create one. On the product's form, click the
:guilabel:`Sales` tab and add the product configured as the deposit to the :guilabel:`Optional
Products` field in the *Upsell & Cross-sell* section.

.. note::
   If :ref:`creating a new product <rental/products/physical-products>`, be sure to configure the
   rental product's prices on the :guilabel:`Prices` tab.

.. image:: manage_deposits/sales-tab-optional-product.png
   :alt: A Digital Camera rental product form with an Optional Product field configured to
    its deposit.

Then :doc:`create_rental_order` and add the rental product in the :guilabel:`Order Lines` tab. A
*Configure your product* pop-up window appears. Click :icon:`fa-plus` :guilabel:`Add`, for the
deposit item, then click :guilabel:`Confirm`.

.. tip::
   If :doc:`eCommerce <../../../websites/ecommerce>` is installed, add a :guilabel:`Short
   Description` to the rental product's :guilabel:`Sales` tab stating a deposit is required.

   When a customer adds the rental product to their cart, a *Configure* pop-up window displays the
   deposit service product under :guilabel:`Available options`.

   Once the customer clicks :icon:`fa-shopping-cart` :guilabel:`Add to Cart`, the rental product and
   the deposit service product are added to their cart.

.. image:: manage_deposits/configure-your-product-window.png
   :alt: A Configure your product window for a Digital Camera and its deposit.

.. _rental/rental_orders/manage_deposits/use-quotation-template:

Quotation template
------------------

Using quotation templates helps tailor the product list to the customer while ensuring the necessary
deposits are included in the order. Navigate to :menuselection:`Rental app --> Configuration -->
Quotation Templates` and click :guilabel:`New` to get started.

:ref:`Create a quotation template <sales/send_quotations/create_templates>` that includes both the
rental product and the rental product deposit, and save the template. Next, create a
:doc:`create_rental_order`. Select the desired template in the :guilabel:`Quotation Template` field.

Process a deposit on a rental order
===================================

Once the rental order is confirmed by the customer, the deposit should be invoiced either before or
at the time the customer picks up the rented product.

To do so, change the :guilabel:`Delivered` column for the deposit service product to `1`. The text
color changes from black to blue, indicating that the line is ready for invoicing.

.. image:: manage_deposits/digital-camera-deposit-item-line.png
   :alt: Digital Camera Deposit on a rental order with the Delivered column set to 1.

Click :guilabel:`Create Invoice` and select :guilabel:`Regular invoice` from the *Create invoice(s)*
pop-up window. Click :guilabel:`Create Draft` to generate the invoice. After verifying that the
draft is correct, click :guilabel:`Confirm`, then click :guilabel:`Send` to email the invoice to the
customer.

.. image:: manage_deposits/invoice-for-deposit.png
   :alt: A confirmed invoice for a rental deposit.

For in-person transactions, click :guilabel:`Pay`, verify the *Pay* pop-up window, then click
:guilabel:`Create Payment` and click :guilabel:`Send` to email a copy of the receipt.

.. _rental/rental_order/manage_deposits/refund:

Refund deposits upon return
===========================

To process a deposit return, the **Accounting** app must be installed. After a customer
:ref:`returns the rented item <rental/return-products>`, begin the deposit return by preparing a
:doc:`credit note <../../../finance/accounting/customer_invoices/credit_notes>` against the original
deposit invoice.

First, go to the :menuselection:`Rental app --> Orders --> Orders`, and select the correct rental
order. Click the :icon:`fa-pencil-square-o` :guilabel:`Invoices` smart button, find the invoice for
the deposit, and :ref:`issue a credit note <accounting/credit_notes/issue-credit-note>`.

.. image:: manage_deposits/paid-deposit-invoice.png
   :alt: A paid deposit invoice to show the Credit Note button.

.. example::
   When creating a credit note, enter `Security Deposit Refund` in the :guilabel:`Reason displayed
   on Credit Note` field in the *Credit Note* pop-up window.

   .. image:: manage_deposits/credit-note-pop-up-window.png
      :alt: Credit Note pop-up window with Security Deposit Refund entered in the Reason field.

Return to the rental order using the :icon:`fa-pencil-square-o` :guilabel:`Sales Orders` smart
button. For the deposit order line, change the :guilabel:`Delivered` quantity from `1` to `0`. This
step ensures the deposit is marked as returned.

Then, review any rental refunds due before creating a final invoice for the remaining charges by
clicking :guilabel:`Create Invoice`.

In the draft invoice, the deposit line will appear as a negative amount, which shows the amount to
refund. At the bottom, review the :guilabel:`Outstanding Credits` section for the credit note
created for the deposit refund.

Click :guilabel:`Add` to apply these credits to the invoice. This completes the refund process.

.. image:: manage_deposits/invoice-with-outstanding-credits.png
   :alt: A invoice for a rental order with outstanding credits.

Invoice the remaining rental charges
====================================

On the new invoice draft, the :guilabel:`Total` amount displays the applied credit note amount and
deposit date. After verifying the totals, click :guilabel:`Confirm` to finalize the invoice.

.. image:: manage_deposits/invoice-total-with-applied-credit-note.png
   :alt: Sample of a invoice for a rental order with an applied credit note.

Click :guilabel:`Send` to email the final invoice to the customer. For in-person transactions, click
:guilabel:`Pay` to process the payment.


