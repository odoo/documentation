================================
Cash discounts and tax reduction
================================

**Cash discounts** are reductions in the amount a customer must pay for goods or services offered as
an incentive for paying their invoice promptly. These discounts are typically a percentage of the
total invoice amount and are applied if the customer pays within a specified time. Cash discounts
can help a company maintain a steady cash flow.

.. example::
   You issue a €100 invoice on the 1st of January. The full payment is due within 30 days, and you
   also offer a 2% discount if your customer pays you within seven days.

   The customer can pay €98 up to the 8th of January. After that date, they would have to pay €100
   by the 31st of January.

A :ref:`tax reduction <cash-discounts/tax-reductions>` can also be applied depending on the country
or region.

.. seealso::
   - :doc:`payment_terms`
   - :doc:`../payments`

.. _cash-discounts/configuration:

Configuration
=============

To grant cash discounts to customers, you must first verify the :ref:`gain and loss accounts
<cash-discounts/gain-loss-accounts>`. Then, configure :ref:`payment terms
<cash-discounts/payment-terms>` and add a cash discount by checking the :guilabel:`Early Discount`
checkbox and filling in the discount percentage, discount days, and :ref:`tax
reduction <cash-discounts/tax-reductions>` fields.

.. _cash-discounts/gain-loss-accounts:

Cash discount gain/loss accounts
--------------------------------

With a cash discount, the amount you earn depends on whether the customer benefits from the cash
discount or not. This inevitably leads to gains and losses, which are recorded on default accounts.

To modify these accounts, go to :menuselection:`Accounting --> Configuration --> Settings`, and, in
the :guilabel:`Default Accounts` section, select the accounts you want to use for the
:guilabel:`Cash Discount Gain account` and :guilabel:`Cash Discount Loss account`.

.. _cash-discounts/payment-terms:

Payment terms
-------------

Cash discounts are defined on :doc:`payment terms <payment_terms>`. Configure them to your liking by
going to :menuselection:`Accounting --> Configuration --> Payment Terms`, and make sure to fill out
the discount percentage, discount days, and :ref:`tax reduction <cash-discounts/tax-reductions>`
fields.

.. image:: cash_discounts/payment-terms.png
   :alt: Configuration of payment terms named "2/7 Net 30". The field "Description on Invoices"
         reads: "Payment terms: 30 Days, 2% Early Payment Discount under 7 days".

.. _cash-discounts/tax-reductions:

Tax reductions
--------------

Depending on the country or region, the base amount used to compute the tax can vary, which can lead
to a **tax reduction**. Since tax reductions are set on individual payment terms, each term can use
a specific tax reduction.

To configure how the tax reduction is applied, go to a payment term with the :guilabel:`Early
Discount` checkbox enabled, and select one of the three following options:

- Always (upon invoice)
    The tax is always reduced. The base amount used to compute the tax is the discounted amount,
    whether the customer benefits from the discount or not.

- On early payment
    The tax is reduced only if the customer pays early. The base amount used to compute the tax is the
    same as the sale: if the customer benefits from the reduction, then the tax is reduced. This means
    that, depending on the customer, the tax amount can vary after the invoice is issued.

- Never
    The tax is never reduced. The base amount used to compute the tax is the full amount, whether the
    customer benefits from the discount or not.

.. example::

   You issue a €100 invoice (tax-excluded) on the 1st of January, with a 21% tax rate. The full
   payment is due within 30 days, and you also offer a 2% discount if your customer pays you within
   seven days.

   .. tabs::

      .. tab:: Always (upon invoice)

         .. list-table::
            :header-rows: 1

            * - Due date
              - Total amount due
              - Computation
            * - 8th of January
              - €118.58
              - €98 + (21% of €98)
            * - 31st of January
              - €120.58
              - €100 + (21% of €98)

      .. tab:: On early payment

         .. list-table::
            :header-rows: 1

            * - Due date
              - Total amount due
              - Computation
            * - 8th of January
              - €118.58
              - €98 + (21% of €98)
            * - 31st of January
              - €121.00
              - €100 + (21% of €100)

      .. tab:: Never

         .. list-table::
            :header-rows: 1

            * - Due date
              - Total amount due
              - Computation
            * - 8th of January
              - €119.00
              - €98 + (21% of €100)
            * - 31st of January
              - €121.00
              - €100 + (21% of €100)

.. note::
   - :ref:`Tax grids <tax-returns/tax-grids>`, which are used for the tax report, are correctly
     computed according to the :ref:`type of tax reduction <cash-discounts/tax-reductions>` you
     configured.
   - The **type of cash discount tax reduction** may be correctly pre-configured, depending on your
     :ref:`fiscal localization package <fiscal_localizations/packages>`.

.. _cash-discounts/customer-invoice:

Apply a cash discount to a customer invoice
===========================================

On a customer invoice, apply a cash discount by selecting the :ref:`payment terms you created
<cash-discounts/payment-terms>`. Odoo automatically computes the correct amounts, tax amounts, due
dates, and accounting records.

Under the :guilabel:`Journal Items` tab, you can display the discount details by clicking on the
"toggle" button and adding the :guilabel:`Discount Date` and :guilabel:`Discount Amount` columns.

.. image:: cash_discounts/invoice-journal-entry.png
   :alt: An invoice of €100.00 with "2/7 Net 30" selected as payment terms. The "Journal Items" tab
         is open, and the "Discount Date" and "Discount Amount" columns are displayed.

The discount amount and due date are also displayed on the generated invoice report sent to the
customer if the :guilabel:`Show installment dates` option is checked on the payment terms.

.. image:: cash_discounts/invoice-print.png
   :alt: An invoice of €100.00 with the following text added to the terms and conditions: "30
         Days, 2% Early Payment Discount under 7 days. 118.58 € due if paid before 01/08/2023."

Payment reconciliation
----------------------

When you record a :doc:`payment <../payments>` or :doc:`reconcile your bank transactions
<../bank/reconciliation>`, Odoo takes the customer payment's date into account to determine if the
customer can benefit from the cash discount or not.

.. note::
   If your customer pays the discount amount *after* the discount date, you can always decide to
   mark the invoice as fully paid with a write-off or as partially paid.
