===================================
Payment terms and installment plans
===================================

**Payment terms** specify all the conditions of a sale's payment to help ensure customers pay their
invoices correctly and on time.

Payment terms are generally defined on documents such as sales orders, customer invoices, and
vendor bills. Payment terms cover:

- The due date(s)
- Early payment discounts
- Any other conditions on the payment

An **installment plan** allows the customers to pay an invoice in parts, with the amounts and
payment dates defined beforehand by the seller.

.. example::
   Immediate Payment
     The full payment is due on the day of the invoice's issuance.
   15 Days (or Net 15)
     The full payment is due 15 days after the invoice date.
   21 MFI
     The full payment is due by the 21st of the month following the invoice date.
   30% Advance End of Following Month
     30% is due on the day of the invoice's issuance. The remaining balance is due at the end of the
     following month.
   2% 10, Net 30 EOM
     A 2% :doc:`cash discount <cash_discounts>` if the payment is received within ten days.
     Otherwise, the full payment is due at the end of the month following the invoice date.

.. note::
   - Payment terms are not to be confused with :doc:`down payment invoices
     </applications/sales/sales/invoicing/down_payment>`. If, for a specific order, you issue
     multiple invoices to your customer, that is neither a payment term nor an installment plan but
     an invoicing policy.
   - This page is about the *payment terms* feature, not :doc:`terms & conditions
     <terms_conditions>`, which can be used to declare contractual obligations regarding content
     use, return policies, and other policies surrounding the sale of goods and services.

.. seealso::
   - `Odoo Tutorials: payment terms <https://www.odoo.com/slides/slide/payment-terms-1679>`_
   - :doc:`cash_discounts`

Configuration
=============

To create new payment terms, follow these steps:

#. Go to :menuselection:`Accounting --> Configuration --> Payment Terms` and click on
   :guilabel:`New`.
#. Enter a name in the :guilabel:`Payment Terms` field. This field is the name displayed both
   internally and on sales orders.
#. Tick the :guilabel:`Early Discount` checkbox and fill out the discount percentage, discount days,
   and :ref:`tax reduction <cash-discounts/tax-reductions>` fields to add a :doc:`cash discount
   <cash_discounts>`, if desired.
#. In the :guilabel:`Due Terms` section, add a set of rules (terms) to define what needs to be paid
   and by which due date(s). Defining terms automatically calculates the payments' due date(s). This
   is particularly helpful for managing **installment plans** (:dfn:`payment terms with multiple
   terms`).

   To add a term, click on :guilabel:`Add a line`, define the discount's value and type in the
   :guilabel:`Due` fields, then fill out the :guilabel:`After` fields to determine the due date.
#. Enter the text to be displayed on the document (sales order, invoice, etc.) in the gray textbox
   in the :guilabel:`Preview` column.
#. Tick the :guilabel:`Show installment dates` checkbox to display a breakdown of each payment and
   its due date on the invoice report, if desired.

.. tip::
   To instead specify a number of days *before the end of the month*, use a negative value in the
   :guilabel:`After` field.

To test that your payment terms are configured correctly, enter an invoice date on the
:guilabel:`Example` line to generate the payments that would be due and their due dates
using these payment terms.

.. important::
   Terms are computed in the order of their due dates.

.. example::
   In the following example, 30% is due on the day of issuance, and the remaining 70% is due at the
   end of the following month.

   .. image:: payment_terms/configuration.png
      :alt: Example of Payment Terms. The first line is the 30% due immediately. The second line is
            the remaining 70% due at the end of the following month.

Using payment terms
===================

Payment terms can be defined using the :guilabel:`Payment Terms` field on:

- **Contacts:** To automatically set default payment terms on a contact's new sales orders,
  invoices, and bills. This can be modified in the contact form, under the :guilabel:`Sales &
  Purchase` tab.
- **Quotations/Sales Orders:** To set specific payment terms automatically on all invoices generated
  from a quotation or sales order.

Payment terms can be defined using the :guilabel:`Due Date` field, with the :guilabel:`Terms`
drop-down list on:

- **Customer invoices:** To set specific payment terms on an invoice.
- **Vendor bills:** To set specific payment terms on a bill.

.. tip::
   Setting payment terms on a vendor bill is mostly useful for managing vendor terms with multiple
   installments or cash discounts. Otherwise, manually setting the **due date** is enough. If
   payment terms are already defined, empty the field to select a date.

Journal entries
===============

Invoices with specific payment terms generate different *journal entries*, with one *journal item*
for every computed *due date*.

This makes for easier :doc:`follow-ups </applications/finance/accounting/payments/follow_up>` and
:doc:`reconciliation </applications/finance/accounting/bank/reconciliation>` since Odoo takes each
due date into account, rather than just the balance due date. It also helps to get an accurate
:ref:`aged receivable report <customer-invoices/aging-report>`.

.. example::
   .. image:: payment_terms/journal-entry.png
      :alt: The amount debited to the account receivable is split into two journal items with
            distinct due dates

   In this example, an invoice of $1000 has been issued with the following payment terms: *30% is
   due on the day of issuance, and the remaining 70% is due at the end of the following month.*

   +----------------------+-------------+---------+---------+
   | Account              | Due date    | Debit   | Credit  |
   +======================+=============+=========+=========+
   | Account Receivable   | February 21 | 300     |         |
   +----------------------+-------------+---------+---------+
   | Account Receivable   | March 31    | 700     |         |
   +----------------------+-------------+---------+---------+
   | Product Sales        |             |         | 1000    |
   +----------------------+-------------+---------+---------+

   The $1000 debited to the account receivable is split into two distinct journal items. Both of
   them have their own due date.
