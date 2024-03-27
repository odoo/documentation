=====================
Bill control policies
=====================

.. _purchase/manage_deals/control-bills:

.. |PO| replace:: :abbr:`PO (Purchase Order)`
.. |POs| replace:: :abbr:`POs (Purchase Orders)`

In Odoo's *Purchase* app, the *bill control* policy determines the quantities billed by vendors on
every purchase order (PO), for either ordered or received quantities.

The policy selected in the *Purchase* app settings acts as the default value, and is applied to any
new product created.

Configuration
=============

To configure the *bill control* policy, navigate to :menuselection:`Purchase app --> Configuration
--> Settings`, and scroll down to the :guilabel:`Invoicing` section. Under :guilabel:`Bill Control`,
select either :guilabel:`Ordered quantities` or :guilabel:`Received quantities`. Then, click
:guilabel:`Save`.

.. image:: control_bills/control-bills-selected-policy.png
   :align: center
   :alt: Selected bill control policy in Purchase app settings.

- :guilabel:`Ordered quantities`: creates a vendor bill as soon as a |PO| is confirmed. The products
  and quantities in the |PO| are used to generate a draft bill.
- :guilabel:`Received quantities`: a bill is created only *after* part of the total order has been
  received. The products and quantities received are used to generate a draft bill. An error message
  appears if creation of a vendor bill is attempted without receiving anything.

  .. image:: control_bills/control-bills-error-message-popup.png
     :align: center
     :alt: Bill control policy draft bill error message.

.. note::
   If a specific product should use a different control policy than selected in the *Purchase* app
   settings, the :guilabel:`Bill Control` policy for that product can be changed from its product
   form.

   To do that, navigate to :menuselection:`Purchase app --> Products --> Products`, and select a
   product. From the product form, click the :guilabel:`Purchase` tab. Under the :guilabel:`Vendor
   Bills` section, modify the selection in the :guilabel:`Control Policy` field.

3-way matching
==============

The *3-way matching* feature ensures vendor bills are only paid once some (or all) of the products
included in the |PO| have been received.

To activate *3-way matching*, navigate to :menuselection:`Purchase app --> Configuration -->
Settings`, and scroll down to the :guilabel:`Invoicing` section. Then, tick the checkbox for
:guilabel:`3-way matching` to enable the feature, and click :guilabel:`Save`.

.. image:: control_bills/control-bills-three-way-matching.png
   :align: center
   :alt: Enabled 3-way matching feature in Purchase app settings.

.. important::
   The :guilabel:`3-way matching` feature **only** works with the :guilabel:`Bill Control` policy
   set to :guilabel:`Received quantities`.

Pay vendor bills with 3-way matching
------------------------------------

When *3-way matching* is enabled, vendor bills display a :guilabel:`Should Be Paid` field under the
:guilabel:`Other Info` tab. When a new vendor bill is created, the field is set to :guilabel:`Yes`,
since a bill **cannot** be created until at least some of the products included in a |PO| have been
received.

To create a vendor bill from a |PO|, navigate to :menuselection:`Purchase app --> Orders -->
Purchase Orders`. From the :guilabel:`Purchase Orders` page, select the desired |PO| from the list.
Then, click :guilabel:`Create Bill`. Doing so opens a new draft :guilabel:`Vendor Bill` form, in the
:guilabel:`Draft` stage. Click the :guilabel:`Other Info` tab, and locate the :guilabel:`Should Be
Paid` field.

.. important::
   The |PO| selected from the list **must not** be billed yet, or an :guilabel:`Invalid Operation`
   pop-up window appears. This occurs for |POs| with a :guilabel:`Received quantities` policy, and a
   :guilabel:`Fully Billed` :guilabel:`Billing Status`.

   .. image:: control_bills/control-bills-invalid-operation.png
      :align: center
      :alt: Invalid Operation pop-up window for billed Purchase Order.

Click the drop-down menu next to :guilabel:`Should Be Paid` to view the available options:
:guilabel:`Yes`, :guilabel:`No`, and :guilabel:`Exception`.

.. image:: control_bills/control-bills-should-be-paid.png
   :align: center
   :alt: Should Be Paid field status on draft vendor bill.

.. note::
   If the total quantity of products from a |PO| has not been received, Odoo only includes the
   products that *have* been received in the draft vendor bill.

Draft vendor bills can be edited to increase the billed quantity, change the price of the products
in the bill, and add additional products to the bill.

If the draft bill's information is changed, the :guilabel:`Should Be Paid` field status is set to
:guilabel:`Exception`. This means that Odoo notices the discrepancy, but does not block the changes
or display an error message, since there might be a valid reason for making changes to the draft
bill.

To process the vendor bill, select a date in the :guilabel:`Bill Date` field, and click
:guilabel:`Confirm`, followed by :guilabel:`Register Payment`.

This opens a :guilabel:`Register Payment` pop-up window. From this window, accounting information is
pre-populated based on the database's accounting settings. Click :guilabel:`Create Payment` to
process the vendor bill.

Once payment has been registered for a vendor bill, and the bill displays the green :guilabel:`Paid`
banner, the :guilabel:`Should Be Paid` field status is set to :guilabel:`No`.

.. tip::
   The :guilabel:`Should Be Paid` status on bills is automatically set by Odoo. However, the status
   can be manually changed by clicking the field's drop-down menu inside the :guilabel:`Other Info`
   tab.

View a purchase order's billing status
======================================

Once a |PO| is confirmed, its :guilabel:`Billing Status` can be viewed under the :guilabel:`Other
Information` tab on the |PO| form.

To view the :guilabel:`Billing Status` of a |PO|, navigate to :menuselection:`Purchase app -->
Orders --> Purchase Orders`, and select a |PO| to view.

Click the :guilabel:`Other Information` tab, and locate the :guilabel:`Billing Status` field.

.. image:: control_bills/control-bills-billing-status.png
   :align: center
   :alt: Billing status field on a purchase order form.

The table below details the different values the :guilabel:`Billing Status` field could read, and
when they are displayed, depending on the *Bill Control* policy used.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Billing Status
     - On received quantities
     - On ordered quantities
   * - Nothing to Bill
     - PO confirmed; no products received
     - *Not applicable*
   * - Waiting Bills
     - All/some products received; bill not created
     - PO confirmed
   * - Fully Billed
     - All/some products received; draft bill created
     - Draft bill created

.. seealso::
   :doc:`manage`
