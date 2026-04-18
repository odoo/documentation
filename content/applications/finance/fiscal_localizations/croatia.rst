=======
Croatia
=======

.. |MER| replace:: :abbr:`MER (Moj-eRačun)`
.. |KPD category| replace:: :abbr:`KPD category (Klasifikacija proizvoda po djelatnostima)`
.. |OIB| replace:: :abbr:`OIB (Osobni identifikacijski broj)`

.. _localizations/croatia/modules:

Modules
=======

The following modules related to the Croatian localization are available:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Croatia - Accounting`
     - `l10n_hr`
     - Default :ref:`fiscal localization package <fiscal_localizations/packages>`
   * - :guilabel:`Croatia - Accounting Reports`
     - `l10n_hr_reports`
     - Country-specific reports
   * - :guilabel:`Croatia - e-invoicing`
     - `l10n_hr_edi`
     - E-invoicing via mojeRačun

.. note::
   The localization's core modules are installed automatically with the localization. The rest can
   be manually :ref:`installed <general/install>`.

.. seealso::
   :doc:`Documentation on e-invoicing’s legality and compliance in Croatia
   <../accounting/customer_invoices/electronic_invoicing/croatia>`

.. _localizations/croatia/mojeracun:

E-invoicing via mojeRačun
=========================

Odoo can connect to the national eRačun platform via the third-party provider `mojeRačun
<https://moj-eracun.hr>`_ to send and receive e-invoices.

.. note::
   The :guilabel:`Croatia - e-invoicing` (`l10n_hr_edi`) module must be :ref:`installed
   <general/install>` to be able to configure e-invoicing via mojeRačun.

.. important::
   To use this integration, an account and `invoice package
   <https://portal.moj-eracun.hr/podrska/cjenik/>`_ from mojeRačun are needed. The rest of this
   documentation assumes that one has already been obtained.

.. _localizations/croatia/configuration:

Configuration
-------------

Follow these steps to set up e-invoicing via mojeRačun in Odoo.

.. _localizations/croatia/configuration/company:

Company configuration
~~~~~~~~~~~~~~~~~~~~~

Go to :menuselection:`Accounting --> Configuration --> Settings` and scroll down to
:guilabel:`MojEracun E-invoicing`. Fill the :guilabel:`Username` field with the numeric username and
the :guilabel:`Password` field with the password provided by mojeRačun.

.. note::
   Alternatively, the :guilabel:`Username` can be set to the e-mail address used to register on
   mojeRačun.

Ensure that the :guilabel:`Company ID (OIB or GIN)` and :guilabel:`Company Business Unit (PJ)`
fields are correctly filled in, matching the data used to register on mojeRačun.

The :guilabel:`Business Software (ERP) ID` should be set to `Saodoo-001`.

Optionally, specify the :guilabel:`Incoming E-Invoices Journal` where invoices received via |MER|
should be created. If left unset, the default purchase journal will be used.

Set the :guilabel:`MojEracun Operating Mode` to :guilabel:`Production` to send and receive invoices
on the production network.

.. note::
   Using the :guilabel:`Test` mode connects to a MER demo server that requires separate credentials
   and is not relevant for most end users.

Then click :guilabel:`Activate` to activate the connection with mojeRačun.

.. _localizations/croatia/configuration/journal:

Journal configuration
~~~~~~~~~~~~~~~~~~~~~

Go to :menuselection:`Accounting --> Configuration --> Journal` and click the :guilabel:`Customer
Invoices` journal to open its configuration.

In the :guilabel:`Fiscalization (HR)` section, complete the :guilabel:`Business premises label`,
:guilabel:`Issuing device label`, :guilabel:`Business premises label (refund approval)`, and
:guilabel:`Issuing device label (refund approval)` fields.

The :guilabel:`Business premises label` and :guilabel:`Issuing device label` are used to generate
invoice names. The :guilabel:`Business premises label (refund approval)` and :guilabel:`Issuing
device label (refund approval)` fields are used to generate credit note names.

.. _localizations/croatia/sending:

Sending an e-invoice
--------------------

To send an e-invoice, follow the :ref:`standard e-invoicing <accounting/e-invoicing/generation>`
workflow. Be sure to select :guilabel:`by MojEracun` when sending the e-invoice.

The following invoice fields must be set before sending to mojeRačun:

- **Invoice sequence:** Ensure the invoice sequence is in the format
  `{Journal code}-{Year}-{Sequence}/{Business premises label}/{Issuing device label}`. If the
  journal is configured :ref:`as instructed above <localizations/croatia/configuration/journal>`,
  Odoo automatically formats invoice names to fit this format.
- :guilabel:`KPD category`: Set the :guilabel:`KPD category` on every invoice line.

  .. tip::
     The |KPD category| can also be set on the product record, which will then automatically apply
     it on invoice lines when the product is used. To do so, go to :menuselection:`Accounting ->
     Customers -> Products`, click the product, and set the :guilabel:`KPD category`.

In the :guilabel:`Croatia: Fiscalization 2.0` tab of invoices:

- :guilabel:`Business process type`: Set the :guilabel:`Business Process Type` as appropriate. If
  :guilabel:`P99: Customer-defined process` is selected, complete the :guilabel:`Custom Process
  Name` field.
- :guilabel:`Fiscal user` and :guilabel:`Operator OIB`: The Croatian government expects the user who
  sends the invoice to be identified via their personal |OIB| number. The fiscal user defaults to
  the user who confirms the invoice and is identified under :guilabel:`Fiscal User`.

    The user's |OIB| can be set on the user's contact record. To do so, follow these steps:

    #. Go to :menuselection:`Settings --> Users & Companies --> Users` and click the user in the
       list view.
    #. Activate the :ref:`developer mode <developer-mode>`.
    #. Click the :guilabel:`Related Partner` link to access the user's :guilabel:`Contact` form.
    #. In the :guilabel:`Sales & Purchase` tab, set the :guilabel:`Personal OIB` in the
       :guilabel:`Misc` section.

Once an invoice has been sent:

- **Invoice fiscalization information:** The :guilabel:`Fiscalization status`,
  :guilabel:`Fiscalization request ID`, :guilabel:`Payment amount already reported to Tax
  Authority`, and :guilabel:`MojeRačun document ElectronicId` can be viewed in the
  :guilabel:`Croatia: Fiscalization 2.0` tab.
- **Fetching status updates:** Odoo periodically checks for any updates to the invoice's status
  (e.g., rejection by |MER|, the eRačun system, or the recipient). To manually check for updates, go
  to the :menuselection:`Accounting` dashboard, and in the :guilabel:`Customer Invoices` (sales)
  journal, click the :guilabel:`MER: Fetch status` button.
- **Reporting a payment:** The Croatian government expects to be notified once payment has been
  received for an invoice. To send this notification, click the :guilabel:`MER: Report payments`
  button on the invoice form view, which appears if the invoice has unreported payments.

  .. tip::
     To report multiple payment notifications at once, select multiple invoices from the invoice list
     view and click the :guilabel:`MER: Report payments` button.

.. _localizations/croatia/receiving:

Receiving e-invoices
--------------------

Odoo periodically checks for new invoices received via mojeRačun. New invoices received via
mojeRačun appear in the :guilabel:`Incoming E-Invoices Journal` specified in the :ref:`settings
<localizations/croatia/configuration/company>`.

Rejecting an invoice
~~~~~~~~~~~~~~~~~~~~

To reject an incoming invoice, click the :guilabel:`MER: Reject eRacun` button on the invoice form
view. This notifies the eRačun system and the sender that the invoice is rejected.
