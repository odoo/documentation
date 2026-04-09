.. _pos/invoices/invoices:

========
Invoices
========

Point of Sale allows for :ref:`creating <pos/invoices/generate>` invoices for :ref:`registered
customers <pos/use/customers>`, :ref:`retrieving <pos/invoices/retrieve>` all past invoiced orders,
and :ref:`accessing and downloading <pos/invoices/qr-codes>` an invoice using a QR code or URL.

.. seealso::
   - :doc:`/applications/finance/accounting/customer_invoices`
   - `Receipts and Invoices (video tutorial) <https://youtu.be/w_DKgHcIV0U?si=Gnf6untzAz2zvNku>`_

.. _pos/invoices/generate:

Invoice creation
================

Invoices can be created :ref:`during the ordering process <pos/invoices/generate-payment>`,
:ref:`after the ordering process <pos/invoices/generate-overview>`, or :ref:`by consolidating
multiple sales orders from the same customer <pos/invoices/generate-global>`.

.. important::
   Creating an invoice requires :ref:`assigning the customer to the order <pos/use/customers>`. To
   ensure the customer is identified on the invoice, click :guilabel:`Customer` in the :ref:`POS
   register <pos/use/open-register>`, then select or create one.

.. note::
   - An invoice created in a POS creates an entry into the corresponding :ref:`accounting journal
     <cheat_sheet/journals>` configured in the :ref:`POS settings <pos/use/settings>`. To modify the
     default journals for orders and invoices, go to :menuselection:`Point of Sale --> Configuration
     --> Settings`, scroll down to the :guilabel:`Accounting` section, and select the appropriate
     journals in the :guilabel:`Orders` and :guilabel:`Invoices` fields under :guilabel:`Default
     Journals`.
   - Specific journals can also be defined for each :doc:`payment method <../payment_methods>`.

From the frontend
-----------------

.. _pos/invoices/generate-payment:

During the ordering process
~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create and issue an invoice to the customer upon :ref:`payment <pos/use/sell>`, enable the
:icon:`fa-file-text-o` :guilabel:`Invoice` checkbox, select a :doc:`payment method
<../payment_methods>`, then click :guilabel:`Validate`.

The invoice is automatically issued and downloaded. To simultaneously send the receipt and the
invoice from the :ref:`Receipt <pos/configuration/receipts>` screen, click the
:icon:`fa-paper-plane` (:guilabel:`send`) button next to the customer's email address.

.. note::
   If the registered customer's :ref:`contact type <essentials/contacts/type>` is set to
   :guilabel:`Company`, the :icon:`fa-file-text-o` :guilabel:`Invoice` checkbox is automatically
   enabled.

.. seealso::
   :doc:`receipts`

.. _pos/invoices/generate-overview:

After the ordering process
~~~~~~~~~~~~~~~~~~~~~~~~~~

To create and issue an invoice to the customer from the POS register after an order is processed,
follow these steps:

#. Click :guilabel:`Orders` in the POS interface.
#. Set the :guilabel:`Active` dropdown menu to :guilabel:`Paid`.
#. Select the relevant order and click :icon:`fa-file-pdf-o` :guilabel:`Invoice` above the numpad.

.. tip::
   To reprint the invoice, select the relevant order and click :icon:`fa-file-pdf-o`
   :guilabel:`Reprint Invoice` above the numpad.

From the backend
----------------

.. _pos/invoices/backend:

Backend invoice creation
~~~~~~~~~~~~~~~~~~~~~~~~

To create and issue an invoice from the backend, follow these steps:

#. Go to :menuselection:`Point of Sale --> Orders --> Orders`.
#. Select the relevant order.
#. Add the :guilabel:`Customer` if needed, then click :guilabel:`Invoice`.

.. _pos/invoices/generate-global:

Consolidated customer invoice
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create a consolidated invoice for all orders linked to the same customer that are not yet
invoiced (i.e., invoices with an :guilabel:`Invoice Status` set to :guilabel:`To Invoice`), follow
these steps:

#. Go to :menuselection:`Point of Sale --> Orders --> Orders`.
#. Click the search bar and :guilabel:`Group By` :guilabel:`Customer`.
#. Click the :icon:`fa-caret-right` (:guilabel:`caret`) icon next to the relevant customer and
   enable :guilabel:`Order Ref` in the column header or select the relevant orders.
#. Click :guilabel:`Create Invoices`, keep the :guilabel:`Consolidated Billing` option enabled,
   then click :guilabel:`Create`.

.. tip::
   - Alternatively, go to :menuselection:`Point of Sale --> Orders --> Customers`, select the
     relevant customer, click the :icon:`fa-shopping-bag` :guilabel:`PoS Orders` smart button on
     the customer form, select the relevant orders, click :guilabel:`Create Invoices`, then
     :guilabel:`Create`.
   - To create an individual invoice for each sales order, disable the :guilabel:`Consolidated
     Billing` option.

.. _pos/invoices/retrieve:

Invoice retrieval
=================

Retrieving invoices is useful for customer requests and accounting purposes, for example. To view,
download, reprint, or send past transactions, follow these steps:

#. Go to :menuselection:`Point of Sale --> Orders --> Orders`.
#. Click the relevant order in the list.
#. Click the :guilabel:`Invoice` smart button on the order form.
#. Click the following buttons to manage the invoice:

   - :guilabel:`Send`: Send or resend the invoice.
   - :guilabel:`Print`: Open the browser's print function or download the invoice.
   - :guilabel:`Preview`: Preview and download the invoice.
   - :guilabel:`Credit Note`: Issue a :ref:`credit note <accounting/credit_notes/issue-credit-note>`
     to the customer.
   - :guilabel:`Reset to Draft`: Reset the invoice to draft if changes are needed.

.. _pos/invoices/qr-codes:

Invoice generation via QR code and URL
======================================

To allow customers to request an invoice by scanning a QR code printed on their :ref:`receipt
<pos/configuration/receipts>`, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`.
#. Scroll down to the :guilabel:`Bills & Receipts` section.
#. Enable the :guilabel:`Self-service invoicing` setting.
#. Set the :guilabel:`Print` field to :guilabel:`QR code`, :guilabel:`URL`, or :guilabel:`QR code +
   URL` to determine how customers can access their invoice (e.g., by scanning the QR code or by
   typing the URL in a browser).

Upon scanning the QR code or typing the URL in a browser, customers must fill in a form with the
information on the receipt (i.e., the :guilabel:`Ticket Number`, :guilabel:`Date`, and
:guilabel:`Unique code`) and click :guilabel:`Request Invoice`. Then, they must enter their billing
information or sign in and click :guilabel:`Get my invoice`. The invoice is then generated and
available for download, and the order status is updated to :guilabel:`Fully Invoiced`.
