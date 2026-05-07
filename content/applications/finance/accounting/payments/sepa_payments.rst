=============
SEPA payments
=============

:abbr:`SEPA (Single Euro Payments Area)` is a payment integration initiative of the European Union
that facilitates standardized, simplified electronic payments in **euro** across SEPA countries.

With :ref:`SEPA Direct Debit (SDD) <accounting/sepa_payments/sdd>`, customers sign a mandate that
authorizes you to collect future payments from their bank accounts. This is particularly useful for
recurring :doc:`subscription <../../../sales/subscriptions>` payments. You can keep records of
these mandates in Odoo and :ref:`generate XML files <accounting/sepa_payments/XML>` indicating to
the bank which payments to collect from customers.

Unlike :abbr:`SDD (SEPA Direct Debit)`, :ref:`SEPA Credit Transfer (SCT)
<accounting/sepa_payments/sct>` is an outgoing payment method where you "push" funds to a recipient.
It is the standard for handling vendor bills, employee salaries, and one-off transfers. These
payments can also be grouped into a :ref:`single XML file <accounting/sepa_payments/XML>` to upload
to your bank.

.. note::
   - `List of all SEPA countries
     <https://www.europeanpaymentscouncil.eu/document-library/other/epc-list-sepa-scheme-countries>`_.
   - Depending on the localization package installed, the **SEPA Direct Debit** and **SEPA Credit
     Transfer** modules may be installed by default. If not, they need to be
     :ref:`installed <general/install>`.

.. important::
   SDD and SCT payment methods are **only valid for transactions in EUR currency**. If your company
   is located in the :abbr:`EFTA (European Free Trade Assocation)` region, a :abbr:`non-EEA
   (non-European Economic Area)` SEPA country, or a :abbr:`non-EEA (non-European Economic Area)`
   SEPA territory, consult the :ref:`ISO20022 <accounting/sepa_payments/iso20022>` section.

.. seealso::
   :doc:`batch`

.. _accounting/sepa_payments/sdd:

SEPA Direct Debit
=================

.. _accounting/sepa_payments/sdd_configuration:

Configuration
-------------

To enable SDD for customer payments, go to :menuselection:`Accounting --> Configuration -->
Settings`, scroll to the :guilabel:`Customer Payments` section, enable :guilabel:`SEPA Direct Debit
(SDD)`, and click :guilabel:`Save`. Then, scroll to the :guilabel:`Customer Payments` section again,
set the company's :guilabel:`Creditor Identifier`, and click :guilabel:`Save`.

.. tip::
   The creditor identifier is provided by your bank or the authority responsible for delivering it
   in your country. For testing purposes, you can use the test creditor identifier
   `DE98ZZZ09999999999`.

.. _accounting/sepa_payments/sdd_mandates:

Mandates
--------

An SDD mandate is a legal document authorizing a company to debit funds from a customer's bank
account. It includes key information, such as the customer's name and IBAN, the mandate's start and
end date, and the mandate's unique identifier. The mandate form must be filled in and signed by the
customer.

Creating mandates
~~~~~~~~~~~~~~~~~

In the **Accounting** app, go to :menuselection:`Customers --> Direct Debit Mandates`, and click
:guilabel:`New`.

#. Fill out:

   - :guilabel:`Account Number`: a valid IBAN must be defined in the :doc:`bank journal <../bank>`
     used to receive SDD payments for the mandate.
   - :guilabel:`SDD Scheme` depends on the type of customer. Select :guilabel:`CORE` for B2C
     customers and :guilabel:`B2B` for B2B customers.
   - :guilabel:`End Date`: select a date after which the mandate is closed automatically. If this is
     left empty, the mandate remains active until it closed or revoked.

   .. note::
      The B2B scheme is an optional scheme, offered exclusively to business payers. Some banks or
      businesses might not accept B2B SDD.

#. Click :guilabel:`Print` to generate a PDF of the mandate form, then send it to the customer for
   signature.
#. Click :guilabel:`Validate` to activate the mandate.

.. tip::
   - To print the mandate form after the mandate has been validated, click the :icon:`fa-cog`
     (:guilabel:`gear`) icon, then select :guilabel:`Mandate form`.

Once an SDD mandate is active, subsequent SDD payments can be generated via Odoo and :ref:`uploaded
to your online banking interface <accounting/sepa_payments/XML>`. Customers with an active SDD
mandate can also use this payment method for :doc:`online purchases <../../payment_providers/sdd>`.

.. _accounting/sepa_payments/close-revoke-mandate:

Closing or revoking a mandate
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To close or revoke a mandate, go to :menuselection:`Accounting --> Customers --> Direct Debit
Mandates`, select the relevant mandate, and click :guilabel:`Close` or :guilabel:`Revoke`.

**Closing** a mandate updates the mandate's end day to the current day. Invoices issued after the
present day will not be processed with an SDD payment. **Revoking** a mandate immediately disables
it. No SDD payment can be registered anymore, regardless of the invoice's date. However,
payments that have already been registered are still included in the next :ref:`SDD XML file
<accounting/sepa_payments/XML>`.

.. warning::
   - Mandates are automatically closed 36 months after the date of the last collection.
   - Closed or revoked mandates cannot be reactivated.

.. _accounting/sepa_payments/XML:

Processing SDD payments
-----------------------

All registered SDD payments can be processed at once by uploading an XML file containing a batch of
all posted SDD payments to your online banking interface. To do so, follow these steps:

#. :ref:`Create a batch payment <accounting/batch/creation>` and include the SDD payments to
   collect.

   .. tip::
      You can filter payments by SDD scheme using the :guilabel:`SDD CORE` and :guilabel:`SDD B2B`
      filters.

#. :guilabel:`Validate` the batch payment. The XML file is generated automatically and available
   for download in the chatter.
#. Download the XML file and upload it to your online banking interface to process the payments.
#. Once the SDD batch payment has been received, :doc:`reconcile the transaction
   <../bank/reconciliation>` with the batch payment to mark the related invoices as
   :guilabel:`Paid`.

.. tip::
   To view the payments and invoices linked to a specific SDD mandate, click the
   :guilabel:`Collections` and :guilabel:`Invoices Paid` smart button on the :ref:`Direct Debit
   Mandate <accounting/sepa_payments/sdd>` form.

.. note::
   The files generated by Odoo comply with the SDD **PAIN.008.001.02** specifications, as required
   by the SEPA customer-to-bank `implementation guidelines <https://www.europeanpaymentscouncil.eu/document-library/implementation-guidelines/sepa-credit-transfer-customer-psp-implementation>`_,
   which ensures compatibility with banks.

.. seealso::
   - :doc:`batch`
   - :doc:`SEPA Direct Debit for online payments <../../payment_providers/sdd>`

SDD rejections
--------------

SDD rejections can occur for several reasons, the most common being insufficient funds in the
customer's account. With SDD, the recipient's account is credited before the funds are actually
debited from the customer's account. As a result, if an SDD payment is later rejected, the bank
automatically withdraws the amount of that payment from the recipient's account, and a new
transaction for a negative amount is created to reflect the SDD rejection.

In this case, you must reverse the journal entry associated with the rejected payment and reconcile
the reversal of the journal entry with the transaction for the SDD rejection. To do so, follow these
steps:

#. Access the invoice linked to the rejected SDD payment.
#. Click the :icon:`fa-info-circle` :guilabel:`(information)` icon in the footer of the
   :guilabel:`Invoice Lines` tab, then click :guilabel:`View` to access the payment associated with
   the invoice.
#. Click the :guilabel:`Journal entry` smart button to access the related journal entry.
#. Click :guilabel:`Reverse entry`, optionally edit the fields in the popup, then click
   :guilabel:`Reverse`. A reversal entry is created with a :guilabel:`Reference` mentioning the
   initial journal entry. As a result, the invoice is marked as :guilabel:`Not paid`.
#. :ref:`Access the bank journal's reconciliation view <accounting/reconciliation/access>` and
   :ref:`reconcile <accounting/reconciliation/reconcile>` the transaction created for the
   SDD rejection with the reversal of the entry related to the payment.

.. _accounting/sepa_payments/sct:

SEPA Credit Transfer
====================

.. _accounting/sepa_payments/sct_configuration:

Configuration
-------------

To pay suppliers with SCT, from the **Accounting** app, go to :menuselection:`Configuration -->
Settings. Under :guilabel:`Vendor Payments`, activate :guilabel:`SEPA Credit Transfer (SCT)`. Next,
fill out your company data:

- :guilabel:`Your Company`: The name of the company to use SCT.
- :guilabel:`Name Identification`: The tax ID of the related company.
- :guilabel:`Issuer`: The name of the entity that issued the tax ID.

After activating SEPA, go to :menuselection:`Configuration --> Journals` and open your
:guilabel:`Bank` journal. Under :guilabel:`Outgoing Payments`, add :guilabel:`SEPA Credit Transfer`
as a :guilabel:`Payment Method` if it's not there. This allows Odoo to use this bank account to
generate XML payment files.

Registering payments
--------------------

To register vendor payments made with SCT, first verify that an :guilabel:`Account Number` and
:guilabel:`Bank` are indicated on the vendor's :doc:`contact form <../../../essentials/contacts>`,
under the :guilabel:`Accounting` tab. Odoo automatically verifies if the IBAN format is respected.

Then, go to :menuselection:`Vendors --> Payments`, and click :guilabel:`New`. When creating your
payment, select :guilabel:`SEPA Credit Transfer` as the :guilabel:`Payment Method`. The
:guilabel:`Vendor Bank Account` is automatically populated based on the :guilabel:`Vendor` selected.
For future payments to this vendor, Odoo will automatically suggest the bank account, but it remains
possible to select a new one from the dropdown menu by clicking the :guilabel:`Vendor Bank Account`
field.

Once your payment is registered, do not forget to confirm it. You can also pay vendor bills from the
bill directly using the :guilabel:`Register Payment` button at the top of a vendor bill. The form is
the same, but the payment is directly linked to the bill and will be automatically reconciled with
it.

.. _accounting/sepa_payments/iso20022:

ISO 20022
=========

ISO 20022 is a global standard for the exchange of payment data between banks. It uses a format that
lets payment details and related documents move together as a single package. This means information
such as invoice numbers, tax details, and who sent the payment is stored in fields that computers
can automatically read. Unlike SEPA, the ISO 20022 standard can be used with any currency worldwide.

In Odoo, the SEPA Payments module acts as the underlying engine for all ISO 20022 transactions (both
domestic SEPA payments in euros and non-euro global transfers are supported by the module).

:doc:`Some countries and regions <sepa_payments>` may use a localized, country-specific version of
ISO 20022, which requires additional configuration. In these cases, we strongly recommend reading the
:ref:`PAIN version <accounting/sepa_payments/pain>` section of this page.

.. _accounting/sepa_payments/pain:

PAIN version
============

.. note::
   - :abbr:`PAIN (PAyment INitiation)` is the specific message protocol within ISO 20022 used to
     send transfer instructions from Odoo to your bank.
   - To enable a country-specific PAIN version, first check that you have the :doc:`fiscal
     localization <../../../finance/fiscal_localizations>` for your country installed in your
     database.

.. important::
   - ISO 20022 **PAIN.001.001.03** is being deprecated in November 2026. Make sure to use the newer
     **PAIN.001.001.09** version or the one required in your country.

To select a specific PAIN version, open the **Accounting** app, go to :menuselection:`Configuration
--> Journals`, and open your :guilabel:`Bank` journal. Click the :guilabel:`Outgoing Payments` tab,
and select the :guilabel:`SEPA Pain Version` that suits your needs.

.. admonition:: Reminder

   The SEPA payments module covers both SEPA payments *and* ISO 20022 payments.

.. _accounting/sepa_payments/exports:

Export XML files
================

To generate a daily XML payment file for upload to the online banking interface, :ref:`create a
batch payment <accounting/batch/creation>`. The XML file is then displayed in the chatter, where it
can be downloaded and submitted to the bank for processing.

By default, the :ref:`SEPA-compliant XML files <accounting/sepa_payments/XML>` generated by Odoo use
the **PAIN.008.001.02** format. If your bank requires the updated 2023 version, go to
:menuselection:`Accounting --> Configuration --> Journals`. Open your :guilabel:`Bank` journal, and
in the :guilabel:`Incoming Payments` tab, set the :guilabel:`SEPA Pain version` field to
:guilabel:`Updated 2023 (Pain 008.001.08)`.

.. seealso::
   :doc:`../bank/bank_synchronization`
