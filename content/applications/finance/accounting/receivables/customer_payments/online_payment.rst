======================
Invoice Online Payment
======================

To make it more convenient for your customers to pay the invoices you issue, you can activate the
**Invoice Online Payment** feature, which adds a *Pay Now* button on their **Customer Portal**. This
allows your customers to see their invoices online and pay directly with their favorite payment
method, making the payment process much easier.

.. image:: media/online-payment-acquirers.png
   :align: center
   :alt: Payment acquirer choice after having clicked on "Pay Now"

Configuration
=============

Make sure your :ref:`Payment Acquirers are correctly configured <payment_acquirers/configuration>`.

.. note::
   By default, ":doc:`Wire Transfer </applications/general/payment_acquirers/wire_transfer>`" is the only
   Payment Acquirer activated, but you still have to fill out the payment details.

To activate the Invoice Online Payment, go to :menuselection:`Accounting --> Configuration --> 
Settings --> Customer Payments`, enable **Invoice Online Payment**, and click on *Save*.

Customer Portal
===============

After issuing the invoice, click on *Send & Print* and send the invoice by email to the customer.
They will receive an email with a link that redirects them to the invoice on their **Customer
Portal**.

.. image:: media/online-payment-view-invoice.png
   :align: center
   :alt: Email with a link to view the invoice online on the Customer Portal.

They can choose which Payment Acquirer to use by clicking on *Pay Now*.

.. image:: media/online-payment-pay-now.png
   :align: center
   :alt: "Pay now" button on an invoice in the Customer Portal.

.. seealso::

   - :doc:`/applications/general/payment_acquirers`
