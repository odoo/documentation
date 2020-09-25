===================================
Payment Terms and Installment Plans
===================================

**Payment Terms** regroup all the conditions under which a sale is completed and paid. They can be
applied to sales orders, customer invoices, and supplier bills, mostly to ensure that they will be
correctly paid, and on time. These conditions cover:

- The due date
- Some discounts
- Any other condition on the payment

Defining Payment Terms automates the computation of payments due dates, both for invoices and bills.
This is particularly helpful in managing installment plans.

An **installment plan** allows the customers to pay an invoice in parts, with the amounts and
payment dates defined beforehand by the seller.

**Examples of Payment Terms:**

- | **Immediate Payment**
  | The full payment is due on the day of the invoice's issuance.
- | **15 Days** (or **Net 15**)
  | The full payment is due 15 days after the invoice date.
- | **21 MFI**
  | The full payment is due by the 21st of the month following the invoice date.
- | **2% 10, Net 30 EOM**
  | 2% :doc:`cash discount <cash_discounts>` if the payment is received within ten days. Otherwise,
    the full payment is due at the end of the month following the invoice date.

.. note::
   Payment terms are not to be confused with payment in several parts. If, for a specific order, you
   invoice the customer in two parts, that is nor a payment term nor an installment plan, but an
   invoicing policy.

Configuration
=============

Go to :menuselection:`Accounting --> Configuration --> Payment Terms` and click on *Create*.

The **Description on the Invoice** is the displayed text on a sale order, invoice, or bill.

In the **Terms** section, you can add a set of rules, that we call *terms*, to define what needs to
be paid, and by which due date.

To add a term, click on *Add a line*, and define its *Type*, *Value*, and *Due Date Computation*.

.. important::
   - Terms are computed in the order they are set up.
   - The **balance** should always be used for the last line.

In the following example, 30% of the invoice is due on the day of issuance of the invoice, and the
balance is due at the end of the following month.

.. image:: media/payment_terms_configuration.png
   :align: center
   :alt: Example of payment terms. The last line is the balance due the 31st of the following month.

Using Payment Terms
===================

Payment Terms can be defined with the **Payment Terms** field on:

- | **Contacts**
  | To set specific payment terms automatically on new sales orders, invoices, and bills of a
    contact. This can be modified in the contact’s *Form View*, under the *Sales & Purchase* tab.
- | **Quotations**
  | To set specific payment terms automatically on all invoices generated from a quotation.
- | **Customer Invoices**
  | To set specific payment terms on an invoice.
- | **Vendor Bills**
  | To set specific payment terms on a bill. This is mostly useful when you need to manage vendor
    terms with several installments. Otherwise, setting the *Due Date* is enough.

Journal Entries
===============
Invoices with specific Payment Terms generate different *Journal Entries*, with one *Journal Item*
for each different *Due Date* computed.

This makes for easier *Follow-ups* and *Reconciliation* since Odoo takes each due date into account,
rather than just the balance due date.

In the following example, an invoice of $1000 has been issued with the following payment terms:
30% of the invoice is due on the day of issuance of the invoice, and the balance is due at the end
of the following month.

.. image:: media/payment_terms_journal_entry.png
   :align: center
   :alt: Example of an invoice with specific Payment Terms. The amount debited on the Account
         Receivable is split in several Journal Items.

The $1000 debited on the Account Receivable is split into two distinct *Journal Items*. Both of
them have their own **Due Date**.

+----------------------+-------------+---------+---------+
| Account              | Due date    | Debit   | Credit  |
+======================+=============+=========+=========+
| Account Receivable   | February 21 | 300     |         |
+----------------------+-------------+---------+---------+
| Account Receivable   | March 31    | 700     |         |
+----------------------+-------------+---------+---------+
| Product Sales        |             |         | 1000    |
+----------------------+-------------+---------+---------+

This allows for easier reconciliation and to accurately follow up late payments.

.. seealso:: 
   - :doc:`cash_discounts`
   - `Odoo Learn: Terms and Conditions (T&C) and Payment Terms <https://www.odoo.com/r/fpv>`_