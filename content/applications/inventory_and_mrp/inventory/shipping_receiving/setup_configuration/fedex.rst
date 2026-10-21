=================
FedEx integration
=================

Integrating a FedEx account with Odoo's **Inventory** app makes it possible to :doc:`calculate
shipping rates <../setup_configuration>` and :doc:`generate shipping labels <labels>` within Odoo.
This is accomplished by enabling the FedEx *shipping connector*, then configuring at least one
*shipping method*.

.. note::
   This documentation contains configuration details specific to FedEx integration. See the
   documentation on :doc:`third-party shippers <third_party_shipper>` for general shipper
   integration instructions.

Enable shipping connector
=========================

To enable the shipping connector for FedEx, first :doc:`activate developer mode
<../../../../general/developer_mode>`. Then open the :menuselection:`Apps` app and search for
`FedEx`. :guilabel:`Activate` the `delivery_fedex_certified` shipping connector.

.. image:: fedex/correct-module.png
   :alt: The delivery_fedex_certified connector is installed.

.. important::
   Other FedEx modules are out-of-date and should not be installed.

Configure shipping method
=========================

After the FedEx shipping connector is enabled, ensure that *Delivery Methods* is enabled. Navigate
to :menuselection:`Inventory app --> Configuration --> Settings`, and scroll to the *Shipping*
section. Enable :guilabel:`Delivery Methods`, then click :guilabel:`Save` at the top of the
*Settings* page.

After *Delivery Methods* is enabled, it is necessary to configure at least one shipping method.
After doing so, the shipping method can be included in sales orders (SOs), and used to compute
shipping costs and print shipping labels.

To see all shipping methods for every shipper with a connector enabled, navigate to
:menuselection:`Inventory app --> Configuration --> Shipping Methods`.

Select a FedEx shipping method to open its form. Alternatively, click :guilabel:`New` to open a
blank form, and configure a new shipping method.

.. image:: fedex/fedex-form.png
   :alt: The form for a FedEx shipping method.

General information
-------------------

At the very top of a shipping method form are fields used to configure the way the method operates
in Odoo. In the :guilabel:`Provider` field, select :guilabel:`FedEx` from the drop-down menu, if it
is not already selected.

The remaining fields should be completed as outlined in the
:ref:`inventory/setup_configuration/add-shipping-method` section.

FedEx Configuration tab
-----------------------

The options in the *Fedex Configuration* tab of a FedEx shipping method form are used to connect the
method to a FedEx account, and configure the shipping details associated with the method (drop-off
type, package type, etc.).

A FedEx business account is required to obtain the information needed to fill out the fields in this
tab. To create a new account, navigate to FedEx's `Open Account
<https://www.fedex.com/en-us/open-account.html>`_ page, click on :guilabel:`Create Account`, and
follow the instructions.

Register FedEx account in database
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

After registering for a business account through FedEx, register the FedEx account in the database.
Click the :guilabel:`Register FedEx Account` button. The *FedEx Account Registration* window opens.

Accept the end user license agreement (EULA) by selecting the :guilabel:`I acknowledge the reading
of the FedEx End User License Agreement` and :guilabel:`I accept the terms of FedEx EULA to start
shipping` checkboxes, then click :guilabel:`Accept and Continue`.

In the *FedEx Account Registration - Shipper Information* window, enter the :guilabel:`FedEx Account
Number`. Enter the name of the company in the :guilabel:`Customer Name` field and provide the
business address. If products are being shipped from a residential address, select the
:guilabel:`Residential Address` checkbox. Click the :guilabel:`Validate Address` button.

Next, choose a :guilabel:`Validation Option` to verify access to the account. This is a form of
multi-factor authentication (MFA). Two options are available:

- :guilabel:`Invoice Validation`: Use information from a recent invoice (within the past 90 days) to
  validate the account information.
- :guilabel:`Secure Code Validation`: Receive a PIN via :guilabel:`Email`, :guilabel:`SMS`, or
  :guilabel:`Voice Call`.

Click :guilabel:`Continue` to proceed.

If validating via invoice, in the *FedEx Account Registration - Invoice Validation* window, enter a
recent :guilabel:`Invoice Number`, :guilabel:`Invoice Date`, :guilabel:`Invoice Amount`, and the
:guilabel:`Currency` used on the invoice. Click :guilabel:`Validate Invoice`.

.. image:: fedex/invoice-validation.png
   :alt: A completed Invoice Validation form.

If validating via PIN, in the *FedEx Account Registration - PIN Validation* window, select from the
list of :guilabel:`PIN Options`, then click :guilabel:`Send Code`. Enter the :guilabel:`6 digits
secure code`, then click :guilabel:`Validate Code`.

.. image:: fedex/pin-validation.png
   :alt: A completed PIN Validation form.

If successful, the *FedEx Account Registration - Success* window displays, and the account is
available for all companies. To change this setting, click :guilabel:`Open FedEx Account Form` and
modify the company settings.

In the *FedEx Configuration* tab, provide more information about the shipping method:

- :guilabel:`FedEx Service Type`: Select the FedEx service used to ship a package.
- :guilabel:`Drop-Off Type`: Select the method for getting a package into FedEx's possession.
- :guilabel:`Package Type`: Select the type of package used for the shipping method.
- :guilabel:`Package Weight Unit`: Select the unit of measure used to weigh packages.
- :guilabel:`Package Length Unit`: This field changes based on what is selected in the
  :guilabel:`Package Weight Unit` field. If :guilabel:`Pounds` is selected, the length unit updates
  to :guilabel:`Inches`. If :guilabel:`Kilograms` is selected, the length unit updates to
  :guilabel:`Centimeters`.
- :guilabel:`Label Size`: Select the type of shipping label used for packages.
- :guilabel:`Label Format`: Select the file format used by Odoo to generate shipping labels.

.. important::
   The options that should be selected on the *FedEx Configuration* tab of a shipping method depend
   on the negotiated shipping services of the associated FedEx account. To confirm the available
   services for a FedEx account, visit the *Account Management* page after logging in to the FedEx
   website or speak with a customer service representative.

Options section
***************

The :guilabel:`Options` section of the *FedEx Configuration* tab provides a few additional options
to further configure the shipping method:

- :guilabel:`Generate Return Label`: Select this checkbox to automatically generate a return label
  when a delivery is validated.
- :guilabel:`Email Notifications`: Select this checkbox to send updates via email to customers, if
  an email address is configured for the customer.
- :guilabel:`Duties paid by`: Use the drop-down menu to select whether duty charges should be paid
  by the :guilabel:`Sender` or :guilabel:`Recipient`.
- :guilabel:`Residential delivery`: Specify when to mark a recipient's address as residential.
- :guilabel:`Generate invoice`: Specify whether an invoice should be generated as a PDF or sent as
  an electronic trade document. This is typically required when commercial invoices are needed for
  international shipments.

Declared Value section
**********************

Specify the :guilabel:`Declared Value Percentage` for insurance purposes.

Test environment unavailable
============================

At the moment, FedEx does not offer a test environment where testing credentials can be used to
simulate future deliveries.

Use production credentials for testing instead, and cancel the test requests through the FedEx
platform after testing is complete.

.. important::
   FedEx shipments and requests cannot be made from a staging database. You must use a production
   database to create shipments.
