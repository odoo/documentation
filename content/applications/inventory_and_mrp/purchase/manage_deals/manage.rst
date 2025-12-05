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
the *bill control* policy selected on the product's settings.

Bill control policies
=====================

To configure a product's bill control policy, navigate to :menuselection:`Purchase app --> Products
Products`, and click on the desired product to open it. Then, click on the :guilabel:`Purchase` tab.
Under the *Vendor Bills* section, the *Control Policy* field lists two policy options:

- :guilabel:`On ordered quantities`: creates a vendor bill as soon as a purchase order is confirmed.
  The products and quantities in the purchase order are used to generate a draft bill.
- :guilabel:`On received quantities`: a bill is only created **after** all (or part) of the total
  order has been received. The products and quantities received are used to generate a draft bill.

.. image:: manage/manage-configuration-settings.png
   :alt: Bill control policies on a product record.

Once a policy is selected, click :guilabel:`Save` to save the changes.

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
