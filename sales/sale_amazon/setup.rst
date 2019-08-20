======================================
Configure Amazon MWS Connector in Odoo
======================================

Get your Amazon MWS Credentials
===============================

In order to integrate Amazon with Odoo, a seller account on professional selling plan is required.

.. Anchor should be one paragraph below but is placed here to fix wrongly adjusted display
.. _developer-form:

Visit the `Amazon Marketplace Web Service documentation
<http://docs.developer.amazonservices.com/en_US/dev_guide/DG_Registering.html>`_ and follow the
instructions to register as a developer.

Fill the Developer Registration and Assessment form as suggested below and provide your own contact
information in the **Developer contact information** section. For the other sections, take care to
adapt your responses accordingly to your business case. In particular, select the correct region of
your seller account and uncheck the **Merchant Fulfilled Shipping** function if you plan to sell
exclusively with the Fulfillment by Amazon service.

.. warning :: If you select the **Merchant Fulfilled Shipping** function (i.e. you request access to
              Personally Identifiable Information (PII) of your customers), Amazon may request you
              to fill out a second form, depending on the data protection policy in the region of
              your seller account (e.g. GDPR in Europe).

.. image:: ./media/dev_form.png


Register your Amazon account in Odoo
====================================

To register your seller account in Odoo, navigate to :menuselection:`Sales --> Configuration
--> Settings --> Connectors --> Amazon Sync --> Amazon Accounts` and click on **CREATE**.

The **Seller ID** can be found in Seller Central under the link **Your Merchant Token** on the
**Seller Account Information** page. The **Access Key** and the **Secret Key** can be found in
Developer Central (where the Developer Registration and Assessment form was located).

Once the account is registered, the marketplaces available to this account are synchronized and
listed under the **Marketplaces** tab. If you wish, you can remove some from the list of
synchronized marketplaces to disable their synchronization.

Match database products in Amazon orders
========================================

.. Anchor should be one paragraph below but is placed here to fix wrongly adjusted display
.. _matching:

When an Amazon order is synchronized, up to three sales order items are created in Odoo for each
product sold on Amazon: one for the marketplace product, one for the shipping charges (if any) and
one for the gift wrapping charges (if any).

The selection of a database product for a sales order item is done by matching its
**internal reference** with the **SKU** for marketplace items, the **shipping code** for delivery
charges, and the **gift wrapping** code for gift wrapping charges.

For marketplace products, matchings are saved as **Amazon Offers** which are listed under the
**Offers** stat button on the account form. Offers are automatically created when the matching is
established and are used for subsequent orders to lookup SKUs. If no offer with a matching SKU is
found, :ref:`the internal reference is used instead <matching>`.

.. tip :: It is possible to force the matching of a marketplace item with a specific product by
          changing either the product or the SKU of an offer. The offer can be manually created if
          it was not automatically done yet. This is useful if you do not use the internal
          reference as the SKU or if you sell the product under different conditions.

If no database product with a matching internal reference is found for a given SKU or gift wrapping
code, a default database product **Amazon Sale** is used. The same is done with the default product
**Amazon Shipping** and the shipping code.

.. note :: To modify the default products, activate the **Developer mode** and navigate to
           :menuselection:`Sales --> Configuration --> Settings --> Connectors --> Amazon Sync -->
           Default Products`.

Configure taxes of products
===========================

To allow for tax reporting of Amazon sales with Odoo, the taxes applied to the sales order items are
those set on the product or determined by the fiscal position. Make sure to have set the correct
taxes on your products in Odoo or to have it done by a fiscal position, to avoid discrepancies in
the subtotals between Seller Central and Odoo.

.. note :: As Amazon does not necessarily apply the same taxes as those configured in Odoo, it may
           happen that order totals differ by a few cents from that on Seller Central. Those
           differences can be resolved with a write-off when reconciling the payments in Odoo.