=========================================
SEPA Direct Debit (SDD) customer payments
=========================================

.. |sdd| replace:: :abbr:`SDD (SEPA Direct Debit)`

SEPA (Single Euro Payments Area) is a payment-integration initiative of the European Union that
facilitates standardized and simplified electronic payments in euros across participating countries.
With **SEPA Direct Debit** (SDD), customers sign a mandate that authorizes you to collect future
payments from their bank accounts. This is particularly useful for recurring payments based on a
:doc:`subscription </applications/sales/subscriptions>`.

You can record customer |sdd| mandates in Odoo and generate XML files listing payments to be
collected with the mandates. :ref:`Uploading these files to your bank <accounting/batch_sdd/XML>`
instructs them to collect these payments from your customers.

.. note::
   - |sdd| is supported by all SEPA countries, which includes the 27 member states of the European
     Union as well as additional countries.
   - `List of all SEPA countries
     <https://www.europeanpaymentscouncil.eu/document-library/other/epc-list-sepa-scheme-countries>`_.

.. _accounting/batch_sdd/sepa-configuration:

Configuration
=============

To enable |sdd| for customer payments, go to :menuselection:`Accounting --> Configuration -->
Settings`, scroll to the :guilabel:`Customer Payments` section, enable :guilabel:`SEPA Direct
Deposit (SDD)`, and click :guilabel:`Save`. Then, scroll to the :guilabel:`Customer Payments`
section again, set the company's :guilabel:`Creditor Identifier`, and click :guilabel:`Save`.

.. tip::
   The creditor identifier is provided by your bank or the authority responsible for delivering
   them in your country. For testing purposes, you can use the test creditor identifier
   `DE98ZZZ09999999999`.

.. _accounting/batch_sdd/sdd_mandates:

SEPA Direct Debit Mandates
==========================

An |sdd| mandate is a legal document authorizing a company to debit funds from a customer's bank
account. It includes key information, such as the customer's name and IBAN, the mandate's start
and end date, and the mandate's unique identifier. The mandate form must be filled in and signed by
the customer.

Creating mandates
-----------------

To create an |sdd| mandate:

#. Go to :menuselection:`Accounting --> Customers --> Direct Debit Mandates`.
#. Click :guilabel:`New` and fill out the fields.
#. Click :guilabel:`Print` to generate a PDF of the mandate form, then send it to the customer for
   signature.
#. Click :guilabel:`Validate` to activate the mandate.

.. important::
   A valid IBAN must be defined in the :guilabel:`Account Number` field of the :doc:`bank journal
   <../bank>` used to receive |sdd| payments for the mandate.

.. tip::
   - To print the mandate form after the mandate has been validated, click the :icon:`fa-cog`
     (:guilabel:`gear`) icon, then select :guilabel:`Mandate form`.
   - The :guilabel:`SDD Scheme` depends on the type of customer: Select :guilabel:`CORE` for B2C
     customers and :guilabel:`B2B` for B2B customers.
   - |sdd| mandates are created automatically for :doc:`online payments made with SDD
     <../../payment_providers/sdd>`.

Once an |sdd| mandate is active, subsequent |sdd| payments can be generated via Odoo and
:ref:`uploaded to your online banking interface <accounting/batch_sdd/XML>`. Customers with an
active |sdd| mandate can also use this payment method for :doc:`online purchases
<../../payment_providers/sdd>`.

Closing or revoking a mandate
-----------------------------

|sdd| mandates are closed automatically after their :guilabel:`End Date`. If this field is
left empty, the mandate remains active until it is closed or revoked. To close or revoke a mandate,
go to :menuselection:`Accounting --> Customers --> Direct Debit Mandates`, select the relevant
mandate, and click :guilabel:`Close` or :guilabel:`Revoke`.

**Closing** a mandate updates the mandate's end day to the current day. Invoices issued after the
present day will not be processed with an |sdd| payment. **Revoking** a mandate disables the
mandate immediately. No |sdd| payment can be registered anymore, regardless of the invoice's
date. However, payments that have already been registered are still included in the next :ref:`SDD
XML file <accounting/batch_sdd/XML>`.

.. warning::
   Closed or revoked mandates cannot be reactivated.

.. _accounting/batch_sdd/XML:

Processing |sdd| payments
=========================

All registered |sdd| payments can be processed at once by uploading an XML file containing a batch
of all posted |sdd| payments to your online banking interface. To do so, follow these steps:

#. :ref:`Create a batch payment <accounting/batch/creation>` and include the |sdd| payments to
   collect.

   .. tip::
      You can filter payments by SDD scheme using the :guilabel:`SDD CORE` and :guilabel:`SDD B2B`
      filters.

#. :guilabel:`Validate` the batch payment. The XML file is generated automatically and available
   for download in the chatter.
#. Download the XML file and upload it to your online banking interface to process the payments.
#. Once the |sdd| batch payment has been received, :doc:`reconcile the transaction
   <../bank/reconciliation>` with the batch payment to mark the related invoices as
   :guilabel:`Paid`.

.. tip::
   To view the payments and invoices linked to a specific |sdd| mandate, click the
   :guilabel:`Collections` and :guilabel:`Invoices Paid` smart button on the :ref:`Direct Debit
   Mandate <accounting/batch_sdd/sdd_mandates>` form.

.. note::
   The files generated by Odoo follow the SEPA Direct Debit **PAIN.008.001.02** specifications, as
   required by the SEPA customer-to-bank `implementation guidelines
   <https://www.europeanpaymentscouncil.eu/document-library/implementation-guidelines/sepa-credit-transfer-customer-psp-implementation>`_,
   which ensures compatibility with the banks.

.. seealso::
   - :doc:`batch`
   - :doc:`../payments`
   - :doc:`../bank`
   - :doc:`SEPA Direct Debit for online payments <../../payment_providers/sdd>`
   - `SEPA guidelines
     <https://www.europeanpaymentscouncil.eu/document-library/implementation-guidelines/sepa-credit-transfer-inter-psp-implementation-guidelines>`_

|sdd| rejections
================

|sdd| rejections can occur for several reasons, the most common being insufficient funds in the
customer's account. With |sdd|, the recipient's account is credited before the funds are actually
debited from the customer's account. As a result, if an |sdd| payment is later rejected, the bank
automatically withdraws the amount of that payment from the recipient's account, and a new
transaction for a negative amount is created to reflect the |sdd| rejection.

In this case, you must reverse the journal entry associated with the rejected payment and reconcile
the reversal of the journal entry with the transaction for the |sdd| rejection. To do so, follow
these steps:

#. Access the invoice linked to the rejected |sdd| payment.
#. Click the :icon:`fa-info-circle` :guilabel:`(information)` icon in the footer of the
   :guilabel:`Invoice Lines` tab, then click :guilabel:`View` to access the payment associated with
   the invoice.
#. Click the :guilabel:`Journal entry` smart button to access the related journal entry.
#. Click :guilabel:`Reverse entry`, optionally edit the fields in the popup, then click
   :guilabel:`Reverse`. A reversal entry is created with a :guilabel:`Reference` mentioning the
   initial journal entry. As a result, the invoice is marked as :guilabel:`Not paid`.
#. :ref:`Access the bank journal's reconciliation view <accounting/reconciliation/access>` and
   :ref:`reconcile <accounting/reconciliation/reconcile>` the transaction created for the |sdd|
   rejection with the reversal of the entry related to the payment.
