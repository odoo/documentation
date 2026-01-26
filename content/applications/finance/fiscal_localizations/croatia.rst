=======
Croatia
=======

E-invoicing via mojeRačun
=========================

Odoo can connect to the national eRačun platform via third-party provider `mojeRačun
<https://moj-eracun.hr>`_ to send and receive e-invoices.

To make use of this integration, an account and `invoice package
<https://portal.moj-eracun.hr/podrska/cjenik/>`_ from mojeRačun are needed. The rest of this
documentation assumes that one has already been obtained.

.. _croatia/configuration:

Configuration
-------------

Follow these steps to set up e-invoicing via mojeRačun in Odoo.

.. _croatia/configuration/company:

Company configuration
~~~~~~~~~~~~~~~~~~~~~

Go to :menuselection:`Accounting --> Configuration --> Settings` and scroll down to
:guilabel:`MojEracun E-invoicing`. Fill the :guilabel:`Username` and :guilabel:`Password` fields
with the credentials provided by mojeRačun.

Ensure that the :guilabel:`Company ID (OIB or GIN)` and :guilabel:`Company Business Unit (PJ)`
fields are correctly filled in.

Optionally, specify the :guilabel:`Incoming E-Invoices Journal` where invoices received via MER
should be created. If left unset, the default purchase journal will be used.

Set the :guilabel:`MojEracun Operating Mode` to :guilabel:`Production` to send and receive invoices
on the production network.

Then click :guilabel:`Activate` to activate the connection with mojeRačun.

.. _croatia/configuration/journal:

Journal configuration
~~~~~~~~~~~~~~~~~~~~~

Go to :menuselection:`Accounting --> Configuration --> Journal` and click the :guilabel:`Customer
Invoices` journal to open its configuration.

In the :guilabel:`Fiscalization (HR)` section, fill the :guilabel:`Business premises label`,
:guilabel:`Issuing device label`, :guilabel:`Business premises label (refund approval)`, and
:guilabel:`Issuing device label (refund approval)` fields.

These fields are used along with the journal's :guilabel:`Short Code` to generate the invoice name
in accordance with :ref:`Croatian standards <croatia/sending/invoice-name>`. The :guilabel:`Business
premises label` and :guilabel:`Issuing device label` fields are for invoices; the
:guilabel:`Business premises label (refund approval)` and :guilabel:`Issuing device label (refund
approval)` fields are for credit notes.

.. _croatia/sending:

Sending an e-invoice
--------------------

When creating an invoice, the following configuration is needed before sending the invoice via
mojeRačun.

.. _croatia/sending/invoice-name:

Invoice name
~~~~~~~~~~~~

The invoice name must be in the form `{Journal code}-{Year}-{Sequence}/{Business premises label}/
{Issuing device label}`. To have this format suggested to you automatically when creating your first
invoice, perform the :ref:`journal configuration <croatia/configuration/journal>` as explained
above.

Product configuration
~~~~~~~~~~~~~~~~~~~~~

The :guilabel:`KPD category` must be set on the product.

.. seealso::
   :ref:`accounting/e-invoicing/generation`

Fetching status updates
~~~~~~~~~~~~~~~~~~~~~~~

Once an invoice has been sent, Odoo will periodically check for any updates to the invoice's status
(e.g. rejection by MER, the eRačun system, or by the recipient). To manually check for updates,
click the :guilabel:`MER: Fetch status` button.

Reporting a payment
~~~~~~~~~~~~~~~~~~~

The Croatian government expects to be notified once payment has been received for an invoice. To
send this notification, click the :guilabel:`MER: Report payments` button on the invoice view.

.. _croatia/receiving:

Receiving e-invoices
--------------------

Odoo periodically checks for new invoices received via mojeRačun. New invoices received via
mojeRačun appear in the :guilabel:`Incoming E-Invoices Journal` specified in the :ref:`settings
<croatia/configuration/company>`.

Rejecting an invoice
~~~~~~~~~~~~~~~~~~~~

To reject an incoming invoice, click the :guilabel:`MER: Reject eRacun` button on the invoice view.
This notifies the eRačun system and the sender that the invoice is rejected.

.. seealso::
   :doc:`Odoo electronic invoicing in Croatia
   <../accounting/customer_invoices/electronic_invoicing/croatia>`

