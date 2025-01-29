========================
Credit notes and refunds
========================

A credit/debit note, or credit/debit memo, is a document sent to a customer to inform them that they
have been *credited/debited* a certain amount.

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

.. _accounting/credit_notes/issue-credit-note:

Issue a customer credit note
============================

In most cases, credit notes are created directly from the corresponding invoices. To do so,
go to :menuselection:`Accounting --> Customers --> Invoices`, open the relevant :guilabel:`Invoice`,
and click :guilabel:`Credit Note`.

In the :guilabel:`Credit Note` window, fill in the :guilabel:`Reason displayed on Credit Note` and
update the :guilabel:`Journal` and :guilabel:`Reversal date` if needed.
There are two options:

- Click :guilabel:`Reverse` to open a draft credit note prefilled with the exact details from the
  original invoice. Update the :guilabel:`Product` and :guilabel:`Quantity` and click
  :guilabel:`Confirm`. This option allows for a partial refund or modifications to the credit note.
- Click :guilabel:`Reverse and Create invoice` to create a credit note, validate it automatically,
  reconcile it with the related invoice, and open a new draft invoice prefilled with the exact
  details from the original invoice.

To create a credit note from scratch, go to :menuselection:`Accounting --> Customers --> Credit
Notes`, and click :guilabel:`New`. Filling out a credit note follows the same process as completing
an :ref:`invoice <accounting/invoice/creation>`.

.. note::
   A credit note sequence starts with `R` and is followed by the related document number (e.g.,
   RINV/2025/0004 is associated with the invoice INV/2025/0004).

.. _accounting/credit_notes/issue-debit-note:

Issue a customer debit note
===========================

To create a debit note, go to :menuselection:`Accounting --> Customers --> Invoices` and follow
these steps:

#. Select the desired invoice(s), click :icon:`fa-cog` :guilabel:`Actions` and select
   :guilabel:`Create Debit Note`.
#. In the :guilabel:`Create Debit Note` window, fill in the :guilabel:`Reason` and update the
   :guilabel:`Use Specific Journal` and :guilabel:`Debit Note Date` fields if needed.
#. Enable the :guilabel:`Copy Lines` option to copy the invoice lines and click :guilabel:`Create
   Debit Note`.
#. In the debit note, update the :guilabel:`Product` and :guilabel:`Quantity` and click
   :guilabel:`Confirm`.

.. tip::
   To create a debit note from the invoice form view, click the :icon:`fa-cog` :guilabel:`(gear)`
   icon and select :guilabel:`Debit Note`.

.. _accounting/credit_notes/record-vendor-refund:

Record a vendor refund
======================

Vendor refunds or vendor credit notes are recorded the same way as :ref:`credit notes
<accounting/credit_notes/issue-credit-note>`:

To record a vendor refund or a vendor credit note directly from the corresponding vendor bill, go to
:menuselection:`Accounting --> Vendors --> Bills`, open the relevant vendor bill, and click
:guilabel:`Credit Note`.

To record it from scratch, go to :menuselection:`Accounting --> Vendors --> Refund`, and click on
:guilabel:`New`.

.. _accounting/credit_notes/record-debit-note:

Record a vendor debit note
==========================

Debit notes from vendors are recorded the same way :ref:`debit notes are issued to customers
<accounting/credit_notes/issue-debit-note>`.

To record a debit note, go to :menuselection:`Accounting --> Vendors --> Bills` and select the
desired bill(s). Click :icon:`fa-cog` :guilabel:`Actions` and select :guilabel:`Create Debit Note`.

.. tip::
   To create a debit note from the vendor bill form view, click the :icon:`fa-cog`
   :guilabel:`(gear)` icon and select :guilabel:`Debit Note`.

.. _accounting/credit_notes/credit-notes-journal-entries:

Journal entries
===============

Creating a credit/debit note from an invoice/bill generates a **reverse entry** that cancels out the
journal items from the original invoice.

.. example::
   The journal entry of an invoice:

   .. image:: credit_notes/journal-entries-invoice.png
      :alt: Invoice journal entry

   The credit note's journal entry generated to reverse the original invoice above:

   .. image:: credit_notes/journal-entries-credit-note.png
      :alt: Credit note journal entry reverses the invoice journal entry
