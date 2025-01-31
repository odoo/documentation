=================
SEPA Direct Debit
=================

.. |sdd| replace:: :abbr:`SDD (SEPA Direct Debit)`

SEPA (Single Euro Payments Area) is a payment-integration initiative of the European Union that
facilitates standardized and simplified electronic payments in euros across participating countries.

SEPA Direct Debit (SDD) is a payment provider that allows future payments to be collected from
customers' bank accounts based on a signed :ref:`SEPA Direct Debit mandate
<accounting/batch_sdd/sdd_mandates>`. This mandate authorizes the recipient to automatically
initiate one-time or :doc:`recurring </applications/sales/subscriptions>` payments using |sdd|.

.. important::
   To use the SEPA Direct Debit (SDD) payment provider and create :ref:`SEPA Direct Debit mandates
   <accounting/batch_sdd/sdd_mandates>`:

   - The invoice being paid must be for an amount in euros.
   - The :guilabel:`SEPA Direct Deposit (SDD)` feature must be enabled, and the company's
     :guilabel:`Creditor Identifier` must be defined in the :ref:`Accounting or Invoicing settings
     <accounting/batch_sdd/sepa-configuration>`.

To configure **SEPA Direct Debit**:

#. :ref:`Navigate to the SEPA Direct Debit payment provider <payment_providers/supported_providers>`.
#. In the :guilabel:`Configuration` tab, select whether the memo or :guilabel:`Communication` to be
   displayed alongside the payment instructions should be:

   - :guilabel:`Based on Document Reference`: the sales order or invoice number
   - :guilabel:`Based on Customer ID`: the customer identifier

#. Select the :guilabel:`Enable QR codes` check box to activate QR code payments.

   .. note::
      :doc:`Additional accounting setup <../accounting/customer_invoices/epc_qr_code>` is required
      to use QR codes.

#. Edit the default payment instructions in the :guilabel:`Messages` tab to include your **bank
   account number**. These instructions are displayed at the end of the checkout process on your
   ecommerce website or on the customer portal.
#. Set the :guilabel:`State` field to :guilabel:`Enabled`.

.. important::
   - Leave the :guilabel:`Currencies` field set to the default :guilabel:`EUR` tag to ensure |sdd|
     is only available for payments in euros.
   - The :guilabel:`Bank Account` defined for the :guilabel:`Payment Journal` must be a valid IBAN.

.. tip::
   You can also test SEPA direct debit payments using the :ref:`payment_providers/test-mode`.

.. seealso::
   :doc:`../payment_providers`

Online payments with |sdd|
==========================

Customers selecting |sdd| as a payment method are prompted to enter their IBAN to complete the
:ref:`SEPA Direct Debit mandate <accounting/batch_sdd/sdd_mandates>`.

The |sdd| mandate is then automatically created in :guilabel:`Draft` based on the provided IBAN. To
validate the information, customers must confirm each new mandate with a successful bank transfer of
the expected amount **using the specified payment reference (communication)**. Once this initial
payment is received and reconciled, the mandate is automatically validated and updated to the
:guilabel:`Active` status. Once a mandate is active, it is reused for all subsequent payments made
with the |sdd| payment method. You can then collect them by :ref:`uploading them to your online
banking interface <accounting/batch_sdd/XML>`.

.. seealso::
   :doc:`../accounting/payments/batch_sdd`

.. note::
   |sdd| is also available as a payment method through other providers, such as :doc:`stripe`,
   :doc:`adyen`, and :doc:`buckaroo`. In these cases, |sdd| mandates are handled externally by the
   payment provider.
