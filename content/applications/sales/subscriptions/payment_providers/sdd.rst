=================
SEPA Direct Debit
=================

.. |sdd| replace:: :abbr:`SDD (SEPA Direct Debit)`

*SEPA*, or Single Euro Payments Area, is a payment-integration initiative of the European Union for
simplifying bank transfers denominated in euros.

*SEPA Direct Debit (|sdd|)* is a payment provider that allows future payments to be collected from
customers' bank accounts by signing a mandate. This allows recurring payments to be automatically
gathered and processed using |sdd|.

.. important::
   To create :ref:`direct debit mandates <subscriptions/sepa-sdd-payment>`, the **Accounting** app
   **must** be installed.

.. _subscriptions/sepa-sdd-configuration:

Configuration
-------------

.. important::
   Before using |sdd|, the database must be configured to allow the use of Euros on sales orders. To
   do so, a :doc:`pricelist <../../point_of_sale/pricing/pricelists>` must be created for Euros.

   This can be done using the **Sales** or **Point of Sales** apps. From either app, navigate to
   :menuselection:`Configuration --> Settings`.

   In the :guilabel:`Pricing` section, underneath the :guilabel:`Pricelists` feature, click
   :icon:`fa-arrow-right` :guilabel:`Pricelists`. Then, click the :guilabel:`New` button to open a
   new pricelist form. Add a name for the pricelist in the top field, then set the drop-down menu
   next to :guilabel:`Currency` to :guilabel:`EUR`.

To use the wire transfer payment method, first ensure the |sdd| payment method is enabled. To do so,
navigate to :menuselection:`Accounting app --> Configuration --> Settings`, scroll to the
:guilabel:`Customer Payments` section, and tick the :guilabel:`SEPA Direct Deposit (SDD)` checkbox.
Then, set a creditor identifier number in the field labeled, :guilabel:`Creditor Identifier`. Then,
click :guilabel:`Save`.

.. tip::
   The company using |sdd| must have a creditor identifier to issue a SEPA Direct Debit payment
   request. If using :ref:`test mode <subscriptions/sepa-sdd-test-mode>`, use the test creditor
   identifier number: `DE98ZZZ09999999999`, and click :guilabel:`Save`.

Next, enable SEPA Direct Debit from the *Payment Providers* page in either the **Accounting**,
**Website**, or **Sales** apps.

For example, navigate to :menuselection:`Accounting app --> Configuration --> Payment Providers`,
then click the :guilabel:`SEPA Direct Debit` card.

.. tip::
   The *SEPA Direct Debit* form can also be reached by navigating to :menuselection:`Website app -->
   Configuration --> Payment Providers`, or :menuselection:`Sales app --> Configuration --> Payment
   Providers`.

Next, set the :guilabel:`State` to :guilabel:`Enabled` to enable |sdd|. Use the drop-down menus next
to the :guilabel:`Company` and :guilabel:`Website` fields to set where |sdd| can be used.

The options in the :guilabel:`Configuration` tab can be configured to customize how |sdd| is used.
Optionally, tick the checkbox next to :guilabel:`Enable QR Codes` to enable the use of QR codes when
paying by |sdd|, if desired.

Use the drop-down menu next to the :guilabel:`Communication` field to select the communication type
used on sales orders. Choose :guilabel:`Based on Document Reference` to use the sales order (or
invoice number), or :guilabel:`Based on Customer ID` to use the customer identifier. With either
method selected, communication is given to the customer, once they choose the |sdd| payment method.

The configuration options listed under the :guilabel:`Availability` section are used to set payment
restrictions, and are optional. Use the :guilabel:`Maximum Amount` field to set a maximum payment
value, and the :guilabel:`Countries` field to restrict payment from any particular countries, if
desired.

.. important::
   The :guilabel:`Currencies` field should be left with the default :guilabel:`EUR` tag to ensure
   |sdd| is only accessible when customers pay with Euros.

The :guilabel:`Payment Journal` field in the :guilabel:`Payment followup` section can be used to
select the journal in which the successful transactions are posted.

In the :guilabel:`Messages` tab, the :guilabel:`Pending Message` field can be used to add a message
that is displayed, if the order remains pending after the payment is processed. By default,
this field contains the message: :guilabel:`Please make an unique payment transfer to
confirm the SEPA mandate.`

.. image:: sdd/sdd-payment-provider.png
   :align: center
   :alt: The SEPA Direct Debit Payment Provider form.

Once all necessary configuration settings are complete, the :icon:`fa-eye-slash`
:guilabel:`Unpublished` smart button, located at the top of the page automatically changes to
:icon:`fa-globe` :guilabel:`Published` to show the |sdd| payment option is now visible to customers.
Only keep the payment method published if payments are ready to be received.

.. tip::
   It is possible to keep the payment method enabled, but **not** visible to customers, until
   payments are ready to be received. To do this, set the smart button to :icon:`fa-eye-slash`
   :guilabel:`Unpublished` after setting the :guilabel:`State` to :guilabel:`Enabled`.

.. note::
   The |sdd| configuration menu can also be accessed by navigating to :menuselection:`Settings app
   --> Website`, and in the :guilabel:`Shop - Payment` section, click the :icon:`fa-arrow-right`
   :guilabel:`View other providers` button. Then, click the |sdd| card. Alternatively, navigate to
   :menuselection:`Website app --> Configuration --> Settings` to access the same button.

.. _subscriptions/sepa-sdd-test-mode:

Test mode
~~~~~~~~~

The |sdd| payment method can be tested before it is accessed by customers. First, ensure the test
creditor identifier is :ref:`configured <subscriptions/sepa-sdd-configuration>` before continuing.

.. warning::
   It is recommended to use the :guilabel:`Test Mode` setting on a duplicate (or test) database to
   avoid potential issues with invoice numbering.

Next, select the :guilabel:`Test Mode` option in the :guilabel:`State` field on the form. Upon
selecting :guilabel:`Test Mode`, an orange :guilabel:`Test mode` banner appears in the upper-right
corner of the form.

.. note::
   By default, the payment provider remains :guilabel:`Unpublished` in :guilabel:`Test Mode`, so it
   is not visible to visitors.

Navigate to :menuselection:`Sales app --> Orders --> Quotations`, and click the :guilabel:`New`
button to create a new sales order.

Select a :guilabel:`Customer`. Select any pay period in the drop-down menu next to
:guilabel:`Recurring Plan` and select the pricelist using EUR in the drop-down menu next to
:guilabel:`Pricelist`.

Finally, select a subscription product in the :guilabel:`Order Lines` tab of the sales order.

Next, confirm the sales order by clicking the :guilabel:`Confirm` button, then click the
:guilabel:`Preview` button to open a preview of the customer invoice. Scroll down to the
:guilabel:`Anticipate payment` section to find the SEPA Direct Debit payment method.

.. tip::
   It can be confirmed that test mode is still enabled if the :icon:`fa-eye-slash` (unpublished) and
   :icon:`fa-exclamation-triangle` (test mode) icons are present next to SEPA Direct Debit.

   .. image:: sdd/sdd-anticipated.png
      :align: center
      :alt: The view of the SEPA Direct Debit payment method presented to customers at checkout.

Next, enter a test IBAN number, such as `GB33BUKB20201555555555`, and click :guilabel:`Pay`. Return
to the sales order in the **Sales** app, and confirm the :guilabel:`In Progress` tag is present on
the sales order form. At this point, the flow is complete.

To re-enable normal function after testing, navigate back to the *SEPA Direct Debit* form, and
change the *State* setting to :guilabel:`Enabled`.

.. _subscriptions/sepa-sdd-payment:

Pay by SEPA Direct Debit
------------------------

Once |sdd| has been :ref:`configured <subscriptions/sepa-sdd-configuration>` and enabled, |sdd|
appears as a payment method during checkout in **eCommerce**, and as a payment method on invoices in
the **Sales** app. The option is presented to customers, and prompts them to enter their IBAN
number.

Once a customer clicks *Pay*, the sales order is marked with a *In Progress* tag until the mandate
has been closed.

Mandates automatically close after the end date is reached. If the *End date* field is not set, the
mandate remains in an *Active* state until it is *Closed* or *Revoked*.

|sdd| payments can also be registered manually by navigating to the desired invoice and clicking the
:guilabel:`Register Payment` button. Next, select :guilabel:`SEPA Direct Debit` as the
:guilabel:`Payment Method` and click the :guilabel:`Create Payment` button. The invoice now displays
a green :guilabel:`In Payment` banner.

.. tip::
   To validate a successful |sdd| payment, navigate to :menuselection:`Accounting app --> Customers
   --> Payments`, and look for the entry in the list, along with a :guilabel:`Posted` tag in the
   :guilabel:`Status` column.

Submit payments
---------------

All |sdd| payments can be processed at once by uploading an `.xml` file containing a batch of all
posted |sdd| payments to an online banking interface. To generate this file, navigate to
:menuselection:`Accounting app --> Customers --> Batch Payments`. A list of all posted |sdd|
payments appears. Tick the checkbox next to every payment to be included in the batch, or tick the
checkbox at the top of the list to select all entries at once.

Next, click :guilabel:`Create Batch`. A new batch payment form appears with the selected payments
added to the list in the :guilabel:`Batch Content` tab.

.. image:: sdd/batch-payment-form.png
   :align: center
   :alt: The batch payment form containing the selected payments.

This form also contains optional fields to customize the batch payment:

- :guilabel:`Bank`: Select the bank the payment is sent to.
- :guilabel:`Date`: Set the current date.
- :guilabel:`Reference`: Set a custom reference number for the payment.
- :guilabel:`Required collection date`: Set a date when the company expects to receive the payment
  of this batch.
- :guilabel:`Batch Booking`: Request batch booking from the bank for the related bank statements.
- :guilabel:`SDD Scheme`: The B2B scheme is an optional scheme, offered exclusively to business
  payers. Some banks/businesses might not accept B2B |sdd|.

Once the payment is configured, click :guilabel:`Validate` to generate the `.xml` file, which
appears in the chatter. Finally, click the :icon:`fa-download` :guilabel:`(download)` icon next to
the file in the chatter to download the file.

This file can now be uploaded to the desired online banking interface to process the payments.

.. note::
   The files generated by Odoo follow the SEPA Direct Debit **PAIN.008.001.02** specifications, as
   required by the SEPA customer-to-bank `implementation guidelines
   <https://www.europeanpaymentscouncil.eu/document-library/implementation-guidelines/sepa-credit-transfer-customer-psp-implementation>`_,
   which ensures compatibility with the banks.

.. seealso::
   - :doc:`../../../finance/accounting/payments/batch_sdd`
   - :doc:`../../../finance/accounting/payments/online`
