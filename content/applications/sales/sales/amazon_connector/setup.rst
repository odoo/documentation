==================================
Configure Amazon Connector in Odoo
==================================

Register your Amazon account in Odoo
====================================

.. _amazon/setup:

To register your seller account in Odoo, navigate to :menuselection:`Sales --> Configuration
--> Settings --> Connectors --> Amazon Sync --> Amazon Accounts` and click on :guilabel:`CREATE`.

#. Choose a meaningful name for your account (e.g. `Europe`), and select your :guilabel:`Sign-up
   Marketplace`. This is the original sign-up marketplace of your seller account (e.g. if you
   created your account on Amazon Germany, your sign-up marketplace will be `amazon.de`)

#. Upon saving, a button to :guilabel:`link with Amazon` appears. Click on it to be redirected to
   the Amazon login page, or directly to the consent page if you are already logged in. There,
   confirm that you want Amazon to give Odoo access to your account and related data.

#. Amazon redirects you to Odoo, with your account registered.

Once the account is registered, the marketplaces available to this account are synchronized and
listed under the :guilabel:`Marketplaces` tab. If you wish, you can remove some items from the list
of synchronized marketplaces to disable their synchronization.

Match database products in Amazon
=================================

When an Amazon order is synchronized, up to three sales order items are created in Odoo for each
product sold on Amazon: one for the marketplace product, one for the shipping charges (if any) and
one for the gift wrapping charges (if any).

.. _amazon/matching:

The selection of a database product for a sales order item is done by matching its
**internal reference** with the **SKU** for marketplace items, the **shipping code** for delivery
charges, and the **gift wrapping** code for gift wrapping charges.

For marketplace products, pairings are saved as **Amazon Offers** which are listed under the
**Offers** stat button on the account form. Offers are automatically created when the pairing is
established and are used for subsequent orders to lookup SKUs. If no offer with a matching SKU is
found, :ref:`the internal reference is used instead <amazon/matching>`.

.. tip::
   It is possible to force the pairing of a marketplace item with a specific product by changing
   either the product or the SKU of an offer. The offer can be manually created if it was not
   automatically done yet. This is useful if you do not use the internal reference as the SKU or if
   you sell the product under different conditions.

If no database product with a matching internal reference is found for a given SKU or gift wrapping
code, a default database product **Amazon Sale** is used. The same is done with the default product
**Amazon Shipping** and the shipping code.

.. note::
   To modify the default products, activate the :ref:`developer mode <developer-mode>` and navigate
   to :menuselection:`Sales --> Configuration --> Settings --> Connectors --> Amazon Sync -->
   Default Products`.

Configure taxes of products
===========================

To allow for tax reporting of Amazon sales with Odoo, the taxes applied to the sales order items are
those set on the product or determined by the fiscal position. Make sure to have set the correct
taxes on your products in Odoo or to have it done by a fiscal position, to avoid discrepancies in
the subtotals between Seller Central and Odoo.

.. note::
   As Amazon does not necessarily apply the same taxes as those configured in Odoo, it may happen
   that order totals differ by a few cents from that on Seller Central. Those differences can be
   resolved with a write-off when reconciling the payments in Odoo.

.. _amazon/add-new-marketplace:

Add a new marketplace
=====================

:ref:`All marketplaces are supported by the Amazon Connector <amazon/supported-marketplaces>`, but
recently created ones might be missing from your database. To add a new marketplace, proceed as
follows:

#. Activate the :ref:`developer mode <developer-mode>`.
#. Go to :menuselection:`Sales --> Configuration --> Settings --> Connectors --> Amazon Sync -->
   Amazon Marketplaces`.
#. Create a new marketplace record. Enter the :guilabel:`Marketplace ID` and select the
   :guilabel:`Amazon Region` for your marketplace as described in the `Amazon Documentation for
   marketplace IDs and regions
   <https://developer-docs.amazon.com/amazon-shipping/docs/marketplace-ids>`_, and the
   :guilabel:`Seller Central URL` as described in the `Amazon Documentation for seller central URLs
   <https://developer-docs.amazon.com/amazon-shipping/docs/seller-central-urls>`_.
#. Set the name of the record to `Amazon.<country code>` to easily retrieve it (e.g.:
   **Amazon.se**). The :guilabel:`API Identifier`, the :guilabel:`Region` and the :guilabel:`Seller
   Central URL` fields should respectively hold the *MarketplaceId*, the selected Amazon region and
   the *Seller Central URL* values from the Amazon Documentation.
#. Once the marketplace is saved, update the Amazon Account configuration by going to
   :menuselection:`Sales --> Configuration --> Settings --> Connectors --> Amazon Sync -->
   Amazon Accounts`. Open the account on which you wish to use the new marketplace, go to the
   :guilabel:`Marketplaces` tab and click on :guilabel:`Update available marketplaces` (an animation
   should confirm the success of the operation). Newly added marketplaces are automatically added to
   the list of synchronized marketplaces. If the new marketplace is not added to the list, it means
   that it is either incompatible or unavailable for your seller account.

.. seealso::
   - :doc:`features`
   - :doc:`manage`
