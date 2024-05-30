===================
Manage vendor bills
===================

.. _inventory/purchase/manage_deals/manage:

.. |PO| replace:: :abbr:`PO (Purchase Order)`
.. |POs| replace:: :abbr:`POs (Purchase Orders)`
.. |RfQ| replace:: :abbr:`RfQ (Request for Quotation)`
.. |RfQs| replace:: :abbr:`RfQs (Requests for Quotation)`

A *vendor bill* is an invoice received for products and/or services purchased by a company from a
vendor. Vendor bills record payables as they arrive from vendors, and can include amounts owed for
the goods and/or services purchased, sales taxes, freight and delivery charges, and more.

In Odoo, a vendor bill can be created at different points in the purchasing process, depending on
the *bill control* policy chosen in the *Purchase* app's settings.

Bill control policies
=====================

To configure the default bill control policy, navigate to :menuselection:`Purchase app -->
Configuration --> Settings`, and scroll to the :guilabel:`Invoicing` section.

The :guilabel:`Bill Control` feature lists two policy options: :guilabel:`Ordered quantities` and
:guilabel:`Received quantities`.

The policy selected acts as the default for any new product created. Each policy acts as follows:

- :guilabel:`Ordered quantities`: creates a vendor bill as soon as a purchase order is confirmed.
  The products and quantities in the purchase order are used to generate a draft bill.
- :guilabel:`Received quantities`: a bill is only created **after** all (or part) of the total order
  has been received. The products and quantities received are used to generate a draft bill.

.. image:: manage/manage-configuration-settings.png
   :align: center
   :alt: Bill control policies in purchase app settings.

Once a policy is selected, click :guilabel:`Save` to save the changes.

.. tip::
   If a product needs a different control policy than the one set in the *Purchase* app settings,
   that product's control policy can be overridden by going to the :guilabel:`Purchase` tab on a
   product form, and selecting the desired policy in the :guilabel:`Control Policy` field.

   .. image:: manage/manage-product-form.png
      :align: center
      :alt: Control policy field on product form.

3-way matching
--------------

The *3-way matching* policy ensures vendor bills are only paid once all (or some) products in a
purchase order (PO) have been received.

To activate 3-way matching, navigate to :menuselection:`Purchase app --> Configuration -->
Settings`, and scroll to the :guilabel:`Invoicing` section.

Tick the checkbox next to :guilabel:`3-way matching`, and click :guilabel:`Save`.

.. important::
   The :guilabel:`3-way matching` feature is **only** intended to work with the :guilabel:`Bill
   Control` policy set to :guilabel:`Received quantities`.

Create and manage vendor bills on receipts
==========================================

When products are received into a company's warehouse, receipts are created. Once the company
processes the received quantities, they can choose to create a vendor bill directly from the
warehouse receipt form.

Depending on the bill control policy chosen in the settings, vendor bill creation is completed at
different steps of the procurement process.

Ordered quantities
------------------

To create and manage vendor bills for receipts with the *Bill Control* policy set to *Ordered
Quantities*, first navigate to the :menuselection:`Purchase app`, and click :guilabel:`New` from the
:guilabel:`Requests for Quotation` dashboard.

Doing so opens a new :guilabel:`Request for Quotation` (RfQ) form. On the blank |RfQ| form, add a
:guilabel:`Vendor`, and click :guilabel:`Add a line` under the :guilabel:`Product` tab to add
products to the order.

On the product line, select a product from the drop-down menu in the :guilabel:`Product` field, and
enter the quantity to order in the :guilabel:`Quantity` field.

Once ready, click :guilabel:`Confirm Order` to confirm the |RfQ| into a |PO|.

Then, click :guilabel:`Create Bill` to create a vendor bill. This opens a :guilabel:`Vendor Bill`
form in the :guilabel:`Draft` state. From here, add a billing date in the :guilabel:`Bill Date`
field.

Once ready, confirm the bill by clicking :guilabel:`Confirm` on the :guilabel:`Vendor Bill` page.

.. tip::
   Since the bill control policy is set to *Ordered quantities*, the draft bill can be confirmed as
   soon as it is created, before any products have been received.

Once a payment has been received, click :guilabel:`Register Payment` at the top of the bill to
record it.

Doing so causes a :guilabel:`Register Payment` pop-up window to appear, wherein a payment
:guilabel:`Journal` can be chosen, and a :guilabel:`Payment Method` selected.

Additionally, the bill :guilabel:`Amount`, :guilabel:`Payment Date`, and :guilabel:`Memo`
(:dfn:`Reference Number`) can be edited from this pop-up window, if necessary.

Once ready, click :guilabel:`Create Payment` to finish creating the :guilabel:`Vendor Bill`. Doing
so displays a green :guilabel:`Paid` banner on the |RfQ| form.

.. image:: manage/manage-draft-vendor-bill.png
   :align: center
   :alt: Vendor bill form for ordered quantities control policy.

Received quantities
-------------------

To create and manage vendor bills for receipts with the bill control policy set to *Received
quantities*, first navigate to the :menuselection:`Purchase` app, and click :guilabel:`New`.

Doing so opens a new |RfQ| form. On the blank |RfQ| form, add a :guilabel:`Vendor`, and click
:guilabel:`Add a line` under the :guilabel:`Product` tab to add products to the order.

On the product line, select a product from the drop-down menu in the :guilabel:`Product` field, and
enter the quantity to order in the :guilabel:`Quantity` field.

Once ready, click :guilabel:`Confirm Order` to confirm the |RfQ| into a |PO|.

.. important::
   When using the *Received quantities* control policy, clicking :guilabel:`Create Bill` before any
   products are received causes an :guilabel:`Invalid Operation` pop-up window to appear.

   Odoo requires at least partial quantities of the items included in the |PO| to be received in
   order to create a vendor bill.

   .. image:: manage/manage-user-error-popup.png
      :align: center
      :alt: User error pop-up for received quantities control policy.

On the |PO|, click the :guilabel:`Receipt` smart button to view the warehouse receipt form.

From here, click :guilabel:`Validate` to register the :guilabel:`Done` (received) quantities.

Then, navigate back to the |PO|, via the breadcrumb, and click :guilabel:`Create Bill`.

This opens a :guilabel:`Vendor Bill` form in the :guilabel:`Draft` state. From here, add a billing
date in the :guilabel:`Bill Date` field. Once ready, confirm the bill by clicking
:guilabel:`Confirm` at the top of the draft.

Once a payment has been received, click :guilabel:`Register Payment` at the top of the bill to
record it.

Doing so causes a :guilabel:`Register Payment` pop-up window to appear, wherein a payment
:guilabel:`Journal` can be chosen, and a :guilabel:`Payment Method` selected.

Additionally, the bill :guilabel:`Amount`, :guilabel:`Payment Date`, and :guilabel:`Memo`
(:dfn:`Reference Number`) can be edited from this pop-up window, if necessary.

Once ready, click :guilabel:`Create Payment` to finish creating the :guilabel:`Vendor Bill`. Doing
so displays a green :guilabel:`Paid` banner on the |RfQ| form.

Manage vendor bills in Accounting
=================================

Vendor bills can also be created directly from the *Accounting* app, without having to create a
purchase order first.

Navigate to :menuselection:`Accounting app --> Vendors --> Bills`, and click :guilabel:`New`. Doing
so reveals a blank :guilabel:`Vendor Bill` form.

Add a vendor in the :guilabel:`Vendor` field. Then, in the :guilabel:`Invoice Lines` tab, click
:guilabel:`Add a line` to add products.

Select a product from the drop-down menu in the :guilabel:`Product` field, and enter the quantity to
order in the :guilabel:`Quantity` field.

Select a :guilabel:`Bill Date`, and configure any other necessary information. Finally, click
:guilabel:`Confirm` to confirm the bill.

Once confirmed, click the :guilabel:`Journal Items` tab to view the :guilabel:`Account` journals.
These journals are populated based on the configuration on the corresponding :guilabel:`Vendor` and
:guilabel:`Product` forms.

If necessary, click :guilabel:`Credit Note` to add a credit note to the bill. Additionally, a
:guilabel:`Bill Reference` number can be added.

Once ready, click :guilabel:`Register Payment`, followed by :guilabel:`Create Payment`, to complete
the :guilabel:`Vendor Bill`.

.. tip::
   To link a draft bill to an existing purchase order, click the drop-down menu next to
   :guilabel:`Auto-Complete` *before* clicking :guilabel:`Confirm`, and select a |PO| from the menu.

   The bill auto-populates with the information from the chosen |PO|.

   .. image:: manage/manage-auto-complete.png
      :align: center
      :alt: Auto-complete drop-down list on draft vendor bill.

Batch billing
=============

Vendor bills can be processed and managed in batches in the *Accounting* app.

Navigate to :menuselection:`Accounting app --> Vendors --> Bills`. Then, click the
:guilabel:`checkbox` in the top-left corner, beside the :guilabel:`Number` column, under the
:guilabel:`New` button.

This selects all existing vendor bills with a :guilabel:`Status` of :guilabel:`Posted` or
:guilabel:`Draft`.

Click the :icon:`fa-print` :guilabel:`Print` button to print the selected invoices or bills.

Click :guilabel:`Register Payment` to create and process payments for multiple vendor bills at once.

.. note::
   Only payments with their :guilabel:`Status` listed as :guilabel:`Posted` can be billed in
   batches. Payments in the :guilabel:`Draft` stage **must** be posted before they can be included
   in a batch billing.

Clicking :guilabel:`Register Payment` opens a :guilabel:`Register Payment` pop-up window. From the
pop-up window, select the :guilabel:`Journal` the bills should post to, choose a :guilabel:`Payment
Date`, and select a :guilabel:`Payment Method`.

There is also the option to :guilabel:`Group Payments` together from this pop-up window, as well. If
this checkbox is ticked, only one payment is created, instead of one per bill. This option only
appears if the *Batch Payments* feature is enabled in the settings of the
:menuselection:`Accounting` app.

Once ready, click the :guilabel:`Create Payment` button. This creates a list of journal entries on a
separate page. The journal entries on this list are all tied to their corresponding vendor bills.

.. image:: manage/manage-batch-billing.png
   :align: center
   :alt: Batch billing register payment pop-up window.

.. seealso::
   :doc:`control_bills`
