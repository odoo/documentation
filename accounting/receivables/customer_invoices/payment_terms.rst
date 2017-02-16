==================================
How to setup and use payment terms
==================================

Payment terms define the conditions to pay an invoice. They apply on
both customer invoices and supplier bills.

Example, for a specific invoice:

-  Pay 50% within 10 days

-  Pay the remaining balance within 30 days

.. note::   Payment terms are different from invoicing in several areas. If,
            for a specific order, you invoice the customer in two parts, that's not
            a payment term but invoice conditions.

Configuration
=============

Configure your usual payment terms from the Configuration menu of the
Account application. The description of the payment term is the one that
appear on the invoice or the sale order.

A payment term may have one line (ex: 21 days) or several lines (10%
within 3 days and the balance within 21 days). If you create a payment
term with several lines, be sure the latest one is the balance. (avoid
doing 50% in 10 days and 50% in 21 days because, with the rounding, it
may not do exactly 100%)

.. todo:: screenshot payment term forms, after QDP have commited the change
          planned on this object

Using Payment Terms
===================

Payment terms for customers
---------------------------

Payment terms can be set on:

- **a customer**: to apply this payment term automatically on new
  sale orders or invoices for this customer. Set payment terms on
  customers if you grant this payment term for all future orders of
  this customer.

- **a quotation**: to apply this payment term on all invoices
  created from this quotation or sale order, but not on other
  quotations

- **an invoice**: to apply the payment term on this invoice only

If an invoice has a payment term, the journal entry related to the
invoice is different. Without payment term or tax, an invoice of $100
will produce this journal entry:

+----------------------+------------+---------+----------+
| Account              | Due date   | Debit   | Credit   |
+======================+============+=========+==========+
| Account Receivable   |            | 100     |          |
+----------------------+------------+---------+----------+
| Income               |            |         | 100      |
+----------------------+------------+---------+----------+

If you do an invoice the 1st of January with a payment term of 10%
within 3 days and the balance within 30 days, you get the following
journal entry:

+----------------------+------------+---------+----------+
| Account              | Due date   | Debit   | Credit   |
+======================+============+=========+==========+
| Account Receivable   | Jan 03     | 10      |          |
+----------------------+------------+---------+----------+
| Account Receivable   | Jan 30     | 90      |          |
+----------------------+------------+---------+----------+
| Income               |            |         | 100      |
+----------------------+------------+---------+----------+

In the customer statement, you will see two lines with different due
dates.

Payment terms for vendor bills
------------------------------

The easiest way to manage payment terms for vendor bills is to record a
due date on the bill. You don't need to assign a payment term, just the
due date is enough.

But if you need to manage vendor terms with several installments, you
can still use payment terms, exactly like in customer invoices. If you
set a payment term on the vendor bill, you don't need to set a due date.
The exact due date for all installments will be automatically created.

.. seealso:: 

    :doc:`cash_discounts`
