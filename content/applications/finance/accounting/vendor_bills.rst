:show-content:

============
Vendor bills
============

Vendor bills can be registered either **manually** or **automatically** in Odoo. The
:ref:`Aged Payable report <accounting/vendor_bills/age-payable-report>` provides an overview of all
outstanding bills to help ensure timely payment of the correct amounts.

.. seealso::
   - Tutorial `Registering a vendor bill <https://www.odoo.com/fr_FR/slides/slide/register-a-vendor-bill-6582>`_
   - :doc:`/applications/inventory_and_mrp/purchase/manage_deals/manage`

.. _accounting/vendor_bills/creation:

Bill creation
=============

.. _accounting/vendor_bills/creation-manual:

Manually
--------

To create a vendor bill manually, go to :menuselection:`Accounting --> Vendors --> Bills` and
click :guilabel:`Create`.

.. _accounting/vendor_bills/automatic:

Automatically
-------------

Vendor bills can be automatically created by **sending an email** to an :ref:`email alias
<invoice-digitization/email-alias>` associated with the purchase journal, or by **uploading a PDF**
in :menuselection:`Accounting --> Vendors --> Bills` and then clicking :guilabel:`Upload`.

.. _accounting/vendor_bills/bill-completion:

Bill completion
===============

Whether the bill is created manually or automatically, make sure the following fields are
appropriately completed:

- :guilabel:`Vendor`: Odoo automatically fills in some information based on the vendor's registered
  information, previous purchase orders, or bills.
- :guilabel:`Bill Reference`: Add the sales order reference provided by the vendor, and is used to
  :ref:`match <accounting/payments/matching>` the products when they are received.
- :guilabel:`Auto-Complete`: Select a past bill/purchase order to complete the document
  automatically. The :guilabel:`Vendor` field should be completed before completing this field.
- :guilabel:`Bill Date`: Select the document's issuance date.
- :guilabel:`Accounting Date`: Update the document's accounting registration date if needed.
- :guilabel:`Payment Reference`: Automatically indicated in the :guilabel:`Memo` field when
   registering the payment.
- :guilabel:`Recipient Bank`: Indicates the account number to make the payment.
- :guilabel:`Due Date` or :guilabel:`Terms` for paying the bill.
- :guilabel:`Journal`: Select which journal should record the bill and in which :doc:`Currency
  <get_started/multi_currency>`.

.. image:: vendor_bills/bill-completion.png
   :alt: filling the vendor bill

.. note::
   - Bills can be :doc:`digitized <vendor_bills/invoice_digitization>` for
     automatic completion by clicking :guilabel:`Send for Digitization`.
   - Once the bill is uploaded, the PDF document appears on the right side of the screen, making it
     easy to fill in the bill information.

.. _accounting/vendor_bills/bill-confirmation:

Bill confirmation
=================

Click :guilabel:`Confirm` when the document is completed. The status changes to :guilabel:`Posted`,
and a journal entry is generated based on the vendor bill configuration.

.. note::
   Once confirmed, it can no longer be updated. Click :guilabel:`Reset to draft` if
   changes are required.

.. _accounting/vendor_bills/bill-payment:

Payment and reconciliation
==========================

To register a payment, click on :guilabel:`Register Payment`. In the :guilabel:`Register Payment`
window, select the :guilabel:`Journal`, the :guilabel:`Payment Method`, the :guilabel:`Amount`, and
the :guilabel:`Currency`.

When the :guilabel:`Amount` paid is less than the total remaining amount on the vendor bill, the
payment is :ref:`partial <accounting/payments/partial-payment>`, and the :guilabel:`Payment
Difference` field displays the outstanding balance.

The :guilabel:`Memo` field is filled automatically if the :guilabel:`Payment Reference` has been set
correctly in the vendor bill. If the field is empty, select the vendor invoice number as a
reference.

Then click :guilabel:`Create payment`. An :guilabel:`In Payment`/:guilabel:`Partial` banner appears
on the bill until it is :doc:`reconciled <bank/reconciliation>`.

.. seealso::
   - :doc:`payments`
   - :doc:`bank/reconciliation`

.. _accounting/vendor_bills/age-payable-report:

Aged payable report
===================

To get an overview of the open vendor bills and related due dates, go to :menuselection:`Accounting
--> Reporting --> Aged payable`.

Click the :icon:`fa-caret-right` :guilabel:`(right arrow)` icon next to a vendor to view the details
of all outstanding bills, including the due dates and amounts.

.. Note::
   - To export and save the information as a PDF or XLSX file, click :guilabel:`Save`.
   - Multiple bills for the same purchase order may be issued if the vendor is on back-order and
     sends invoices as products are shipped or if the vendor sends partial bills or requests a
     deposit.

.. toctree::
   :titlesonly:

   vendor_bills/invoice_digitization
   vendor_bills/assets
   vendor_bills/deferred_expenses
