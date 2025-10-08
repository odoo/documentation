==============================
Lazada Connector Configuration
==============================

This guide explains how to set up the **Lazada Connector** in Odoo to integrate your Lazada Seller
account(s) and manage multiple marketplaces efficiently in Southeast Asia. Follow these steps to
configure your account, synchronize your product catalog, and prepare your shop for go-live.

Prerequisites
=============

Before configuring the **Lazada Connector**, ensure you have:

- A Lazada Seller account (:guilabel:`Personal Self-Developed` or :guilabel:`Enterprise Self-Developed`).
- A valid email address and phone number for verification.
- A digital copy of your business license (for :guilabel:`Enterprise Self-Developed` accounts).
- A brief description of your integration purpose (e.g., "Connecting Odoo ERP to our Lazada store
  for order and inventory synchronization").

.. note::
   The *Lazada Open Platform* account for API access is separate from your *Lazada Seller account*.

Create a Lazada Open Platform Account
=====================================

1. Navigate to :guilabel:`Lazada Open Platform`: Go to https://open.lazada.com/ and click
   :guilabel:`Create Account` or :guilabel:`Sign Up`.
2. Select Account Type: Choose either:

   - :guilabel:`Personal Self-Developed`: For individuals without a business license.
   - :guilabel:`Enterprise Self-Developed`: For businesses with a registered license.

.. important::
   Do **not** select other service provider types, as they are not applicable for Odoo integration.

3. Complete Registration:

   - Enter your email, password, and phone number. Complete any verification steps (e.g.,
     :abbr:`OTP (One-Time Password)` via SMS).
   - For :guilabel:`Enterprise Self-Developed` accounts, upload your business license.
   - Provide a brief introduction (e.g., "Integration for Odoo ERP to sync orders, inventory,
     and fees with Lazada").

4. Submit for Approval: Submit your profile details. Approval typically takes a few hours to
   a couple of business days. Check your registered email for confirmation or requests for
   additional information.
5. Check Approval Status: If rejected, review the reason in the notification email or on the
   *Lazada Open Platform Console*. Edit and resubmit as needed.

.. tip::
   Ensure accurate profile details to avoid delays. Common issues include incorrect account type
   selection or missing business license documents.

Create an App on Lazada Open Platform
=====================================

To obtain the :guilabel:`App Key` and :guilabel:`App Secret` for Odoo integration:

1. Access :guilabel:`App Management`: Log in to the `Lazada Open Platform Console <https://open.lazada.com/>`_, navigate to
   :menuselection:`App Console`,  :menuselection:`App Management`, and click :guilabel:`Create App`.

   .. image:: setup/lazada-open-platform-app-console.png
   .. image:: setup/lazada-create-app.png

2. Select App Category: Choose :guilabel:`Seller In-house APP`.
3. Fill Application Form:

   - Provide your Odoo database URL and tester account credentials (name and password).
   - For :guilabel:`APP IP Address Management`, select :guilabel:`IP address(es) unavailable`
     and enter "The application is cloud-hosted."

4. Submit Application: App creation takes approximately 24 hours. Once approved, note the
   :guilabel:`App Key` and :guilabel:`App Secret`.

Connect Lazada Seller Account to Odoo
=====================================

1. 1. To connect a Lazada Seller account in Odoo, navigate to :guilabel:`App` from your Database and search for Lazada :guilabel:`Activate`.

   .. image:: setup/lazada-connector-odoo-app.png

2. Enable :guilabel:`Lazada Sync`: In Odoo, navigate to :menuselection:`Sales --> Configuration`

   .. image:: setup/lazada-odoo-sales-menu.png

3. Connect a Lazada Account:

   - Go to :menuselection:`Sales --> Configuration --> Lazada --> Shops` and click :guilabel:`Create New Shop`.
   - Enter a name (e.g., "Lazada Malaysia"), :guilabel:`App Key`, :guilabel:`App Secret`, and
     select the marketplace (e.g., Lazada.com.my).

   .. image:: setup/lazada-connect-new-shop-odoo.png

4. Link Account:

   - click :guilabel:`Create Shop & Authorize`
   - Click the button to redirect to the Lazada login or consent page. Log in with your Lazada
     Seller account credentials and grant Odoo access.

     .. image:: setup/lazada-authorize-shop.png

   - Upon successful authorization, Odoo lists available marketplaces under the
     :guilabel:`Lazada Shops` tab.

     .. image:: setup/lazada-odoo-shop-list.png

5. Manage Marketplaces:

   - Newly added marketplaces are automatically synchronized. To disable synchronization for
     specific marketplaces, remove them from the list.
   - Avoid synchronizing the same shop multiple times to prevent duplicate orders.

.. important::

   To maintain data integrity, ensure each shop is synchronized only once. If synchronization
   fails, try manually fetching orders before reconfiguring.

Configure Shop Before Go-Live
=============================

1. Set Up Warehouses:

   - Navigate to :menuselection:`Sales --> Configuration --> Settings --> Connectors -->
     Lazada Sync --> Lazada Accounts`.
   - Select the Lazada account and configure the :guilabel:`FBM Warehouse` field to limit stock
     fetching to specific warehouses.
   - By default, all accounts use the same Lazada stock location. To isolate stock for a specific
     marketplace, create a separate account registration and assign a unique stock location.

2. Synchronize Product Catalog:

The product catalog will be matched automatically from the first synchronization. But in case you do the following:

   - Use the :guilabel:`Sync Product Catalogue` button in Odoo to automatically fetch active
     Lazada products daily.
   - For new Odoo databases, export the Lazada catalog from *Lazada Seller Center* (including
     SKUs). Import into Odoo via :menuselection:`Inventory --> Products --> Import`, mapping SKUs
     to the :guilabel:`Internal Reference` field.
   - For existing Odoo products, export both Lazada and Odoo catalogs, map SKUs to
     :guilabel:`Internal References` in a spreadsheet, and import the updated mappings back into
     Odoo.

.. tip::
   Test catalog synchronization with a small product set to verify SKU mappings before full
   import.

.. seealso::
   - :doc:`features`
   - :doc:`manage`
