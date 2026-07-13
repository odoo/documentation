===================
Starshipit shipping
===================

Starshipit is a shipping service operator that facilitates the integration of Australasian shipping
couriers with Odoo. Once integrated, users can create shipping methods that will automatically
calculate rates from specific couriers (such as Australia Post, NZ Post, DHL, etc.) based on
predefined conditions.

.. seealso::
   - :doc:`Automatically calculate shipping <../setup_configuration>`
   - :doc:`Integrate other third-party couriers <third_party_shipper>`

Starshipit setup
================

To get started, go to `Starshipit's platform <https://starshipit.com/>`_ to configure the account
and generate the connector credentials. Log in with the Starshipit account, or create a new one if
needed.

Configure the following in Starshipit:

- Pickup address
- Couriers
- Checkout rates
- Starshipit API key
- Starshipit subscription key

To learn how to configure each of these, see the Starshipit documentation on `Integrating with Odoo
<https://support.starshipit.com/articles/9226374129295-integrating-with-odoo>`_.

Setup in Odoo
=============

Install
-------

After the Starshipit account is set up, integrate it with the Odoo database. To do that, go to
Odoo's :menuselection:`Apps` module, search for `Starshipit Shipping`, and click
:guilabel:`Activate` to install it.

.. image:: starshipit_shipping/starshipit-app.png
   :alt: Starshipit Shipping module in the Odoo Apps module.

Configuration
-------------

After the module is installed, create a new shipping method by navigating to
:menuselection:`Inventory app --> Configuration --> Shipping Methods` and clicking :guilabel:`New`.

Configure Starshipit in Odoo by filling out the fields on the :guilabel:`Shipping Methods` form as
follows:

- :guilabel:`Shipping Method`: Enter `Starshipit` in this field.
- :guilabel:`Provider`: Select :guilabel:`Starshipit` from the drop-down menu.
- :guilabel:`Delivery Product`: Assign or create the delivery product that will appear on the sales
  order line when the cost of shipping is computed.

.. note::
   The fields discussed in this section are specific to configuring Starshipit. For more information
   about the other fields, refer to :doc:`../setup_configuration`.

In the *Starshipit Configuration* tab, fill out these fields:

- :guilabel:`Starshipit API Key`: Enter the :abbr:`API (Application Programming Interface)` key
  obtained from Starshipit.
- :guilabel:`Starshipit Subscription Key`: Enter the subscription key obtained from the same place
  as the API key.
- :guilabel:`Origin Address`: Enter the address where products are shipped from. This field is
  crucial for calculating shipping rates and :ref:`generating shipping labels
  <inventory/shipping_receiving/star-label>`.
- :guilabel:`Default Package Type`: Set a default package type to include the weight of the empty
  package when automatically calculating shipping rates.

.. important::
   To set a default package type, the :guilabel:`Packages` feature **must** be enabled in
   :menuselection:`Inventory --> Configuration --> Settings`.

Manually save the form by clicking the :icon:`fa-cloud-upload` :guilabel:`(Save manually)` button.

To load the newly configured shipping products, click the :guilabel:`Select a service linked to the
Starshipit account` link at the bottom of the *Starshipit Configuration* tab.

Doing so opens the *Choose Starshipit Shipping Service* pop-up window. In the :guilabel:`Delivery
Service` field, choose the desired shipping service for deliveries and returns from the drop-down
menu. Finally, click :guilabel:`Confirm`.

The chosen delivery service will populate the :guilabel:`Service Name` field.

.. example::
   Sample of a Starshipit shipping product configured in Odoo:

   - :guilabel:`Sendle: Sendle drop off`
   - :guilabel:`Shipping Product`: `Sendle Delivery`
   - :guilabel:`Starshipit Service Code`: `STANDARD-DROPOFF`

.. image:: starshipit_shipping/starshipit-configuration.png
   :alt: Example of shipping products configured in Odoo.

.. important::
   Starshipit does not provide test keys when a company tests the sending of a package in Odoo. This
   means that if a package is created, the account may be charged.

   Odoo has a built-in layer of protection against unwanted charges when using test environments.
   Within a test environment, if a shipping method is used to create labels, then those labels are
   automatically canceled after creation. Depending on the shipping provider being used, the account
   might be charged for printing a label, unless the order is canceled manually on the courier's
   portal.

   Switch between the test and production environments by clicking the :guilabel:`Environment` smart
   button at the top of the shipping method form.

.. _inventory/shipping_receiving/star-label:

Generate a label with Starshipit
================================

When creating a quotation in Odoo, add the Starshipit shipping method by clicking the :guilabel:`Add
shipping` button.

In the *Add a shipping method* pop-up window, select :guilabel:`Starshipit` in the
:guilabel:`Shipping Method` field.

Calculate the shipping rate by clicking :guilabel:`Get rate`.

Finally, click :guilabel:`Add` to add the cost of shipping to the sales order line, labeled as the
*delivery product*.

.. tip::
   Odoo automatically calculates shipping costs for Starshipit in *both* the **Sales** and
   **eCommerce** applications.

Then, :guilabel:`Validate` the delivery. Shipping label documents are automatically generated in the
chatter, which include the following:

#. **Shipping labels**, depending on the number of packages
#. **Tracking numbers**, if the selected courier supports it
#. **Return labels**, if the Starshipit connector is configured for returns

.. image:: starshipit_shipping/starshipit-shipping.png
   :alt: Example of a shipped order in Odoo.

.. important::
   Package weight in Odoo is calculated by adding the weights of the products plus the empty package
   saved in the database. Ensure the correct shipping option is selected, as the package weight is
   not automatically verified.

   Verify the destination address, as Starshipit checks it when the order is created.

   Finally, some couriers may require other information, such as an email address or phone number.
   Ensure that all necessary information is set upon sending a shipping order.

Returns
-------

Starshipit allows returns with the following couriers:

- Australia Post eParcel
- TNT
- Couriers Please
- Aramex
- StarTrack
- DHL Express
- NZ Post Domestic

To return products, click the :guilabel:`Return` smart button on the intended delivery order. If the
selected courier supports returns, the :guilabel:`Print Return Label` button is available.

Cancellations
-------------

If a delivery order is canceled in Odoo, it will be automatically archived in Starshipit. However,
the cancellation will not be sent to the courier itself, so make sure to log in to the courier's
platform to handle the cancellation manually.
