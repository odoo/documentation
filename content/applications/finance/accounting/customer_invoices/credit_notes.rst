========================
Credit notes and refunds
========================

A **credit/debit note**, or **credit/debit memo**, is a document send to a customer to inform them
that they have been *credited/debited* a certain amount.

Several use cases can lead to a credit note, such as:

 - a mistake in the invoice
 - a return of the goods, or a rejection of the services
 - the goods delivered are damaged

Debit notes are less common but are most frequently used to track debts owed by customers or to
vendors because of modifications to confirmed customer invoices or vendor bills.

.. note::
   Issuing a credit/debit note is the only legal method for canceling, refunding, or modifying a
   validated invoice. Make sure to **register the payment** afterward if money is being refunded to
   the customer and/or validate the
   :doc:`return </applications/sales/sales/products_prices/returns>` if a storable product is being
   returned.

.. _accounting/issue-credit-note:

Issue a credit note
===================

To create a credit note from scratch, go to :menuselection:`Accounting --> Customers --> Credit
Notes`, and click :guilabel:`New`. Filling out a credit note is the same process as completing an
:ref:`invoice <accounting/invoice/creation>`.

In most cases, credit notes are created directly from the corresponding invoices. To do so,
go to :menuselection:`Accounting --> Customers --> Invoices`, open the relevant :guilabel:`Invoice`,
and click on :guilabel:`Credit Note`.

In the :guilabel:`Credit Note` window, fill in the :guilabel:`Reason displayed on Credit Note`.
Update the :guilabel:`Journal` and :guilabel:`Reversal date` if needed.
There are two options:

- Click :guilabel:`Reverse`: Odoo opens a draft credit note prefilled with the exact details from
  the original invoice. Update :guilabel:`Product` and :guilabel:`Quantity` and click
  :guilabel:`Confirm`. This option enables a partial refund or modification of any details in the
  credit note.
- Click :guilabel:`Reverse and Create invoice`: Odoo creates a credit note, automatically validates
  it, reconciles it with the related invoice, and opens a new draft invoice prefilled with the exact
  details from the original invoice.

.. note::
   A credit note sequence starts with `R` and is followed by the related document number (e.g.,
   RINV/2025/0004 is associated with the invoice INV/2025/0004).

.. _accounting/issue-debit-note:

Issue a debit note
==================

To create a debit note, go to :menuselection:`Accounting --> Customers --> Invoices` and select the
related invoice to issue a debit note in the :guilabel:`Invoices` list view. Click :icon:`fa-cog`
:guilabel:`Actions` and select :guilabel:`Create Debit Note`.

In the :guilabel:`Create Debit Note` window, fill in the :guilabel:`Reason` and update the
:guilabel:`Use Specific Journal` and :guilabel:`Debit Note Date` if needed. Enable the
:guilabel:`Copy Lines` option to copy the invoice lines. Then, click :guilabel:`Create Debit Lines`.
Update :guilabel:`Product` and :guilabel:`Quantity` and click :guilabel:`Confirm`.

.. _accounting/record-vendor-refund:

Record a vendor refund
======================

**Vendor refunds** or **vendor credit notes** are recorded the same way as :ref:`credit notes
<accounting/issue-credit-note>`.

To record a vendor refund or a vendor credit note from scratch, go to :menuselection:`Accounting -->
Vendors --> Refund`, and click on :guilabel:`New`.

To record it directly from the corresponding **vendor bill**, go to :menuselection:`Accounting -->
Vendors --> Bills`, open the relevant vendor bill, and click :guilabel:`Credit Note`.

.. _accounting/record-debit-note:

Record a debit note
===================

**Debit notes** from vendors are recorded the same way :ref:`debit notes are issued to customers
<accounting/issue-debit-note>`.

To record a debit note, go to :menuselection:`Accounting --> Customers --> Bills` and
select the related bill to issue a debit note in the :guilabel:`Bills` list view. Click
:icon:`fa-cog` :guilabel:`Actions` and select :guilabel:`Create Debit Note`.

.. _accounting/credit-notes-journal-entries:

Journal entries
===============

Creating a credit/debit note from an invoice/bill generates a **reverse entry** that cancels out the
journal items from the original invoice.

.. example::
   The journal entry of an invoice:

   .. image:: credit_notes/credit_notes03.png
      :alt: Invoice journal entry.

   The credit note’s journal entry generated to reverse the original invoice above:

   .. image:: credit_notes/credit_notes04.png
      :alt: Credit note journal entry reverses the invoice journal entry.
