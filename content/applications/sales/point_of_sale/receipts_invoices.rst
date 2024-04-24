=====================
Receipts and invoices
=====================

Receipts
========

Set up receipts by going to :menuselection:`Point of Sale --> Configuration --> Point of Sale`,
selecting a POS, and scrolling down to the :guilabel:`Bills & Receipts` section.

To **customize** the **header** and **footer**, activate :guilabel:`Header & Footer` and fill in
both fields with the information to be printed on the receipts.

To **print receipts** automatically once the payment is registered, enable the :guilabel:`Automatic
Receipt Printing` setting.

.. image:: receipts_invoices/receipt.png
   :alt: POS receipt

.. seealso::
   - :doc:`restaurant/bill_printing`
   - :doc:`configuration/epos_printers`

Reprint a receipt
-----------------

From the POS interface, click :guilabel:`Orders`, open the dropdown selection menu next to the
search bar, and change the default :guilabel:`All active orders` filter to :guilabel:`Paid`. Then,
select the corresponding order and click :guilabel:`Print Receipt`.

.. image:: receipts_invoices/print-receipt.png
   :alt: Print receipt button from the backend

.. note::
   You can filter the list of orders using the search bar. Type in your reference and click
   :guilabel:`Receipt Number`, :guilabel:`Date`, or :guilabel:`Customer`.

.. _receipts-invoices/invoices:

Invoices
========

Some of your customers might request an invoice when buying from your
Point of Sale, you can easily manage it directly from the PoS interface.

Activate invoicing
------------------

Go to :menuselection:`Point of Sale --> Configuration --> Point of Sale`
and select your Point of Sale:

.. image:: receipts_invoices/invoice01.png

Under the *Bills & Receipts* you will see the invoicing option, tick
it. Don't forget to choose in which journal the invoices should be
created.

.. image:: receipts_invoices/invoice02.png

Select a customer
-----------------

From your session interface, use the customer button

.. image:: receipts_invoices/invoice03.png

You can then either select an existing customer and set it as your
customer or create a new one by using this button.

.. image:: receipts_invoices/invoice04.png

You will be invited to fill out the customer form with its information.

Invoice your customer
---------------------

From the payment screen, you now have an invoice option, use the button
to select it and validate.

.. image:: receipts_invoices/invoice05.png

You can then print the invoice and move on to your next order.

Retrieve invoices
-----------------

Once out of the PoS interface (:menuselection:`Close --> Confirm` on the top right corner)
you will find all your orders in :menuselection:`Point of Sale -->
Orders --> Orders` and under the status tab you will see which ones have
been invoiced. When clicking on a order you can then access the invoice.

.. image:: receipts_invoices/invoice06.png
