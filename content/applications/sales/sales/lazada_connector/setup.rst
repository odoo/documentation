==============================
Lazada Connector configuration
==============================

This guide explains how to set up the **Lazada Connector** in Odoo to integrate your Lazada Seller
account(s) and manage multiple marketplaces efficiently in Southeast Asia. Follow these steps to
configure your account, synchronize your product catalog, and prepare your shop for go-live.

Prerequisites
=============


Before configuring the **Lazada Connector**, ensure you have:

- A Lazada Seller account
  (:guilabel:`Personal Self-Developed` or :guilabel:`Enterprise Self-Developed`).
- A valid email address and phone number for verification.
- A digital copy of your business license (for :guilabel:`Enterprise Self-Developed` accounts).
- A brief description of your integration purpose (e.g., "Connecting Odoo ERP to our Lazada store
  for order and inventory synchronization").

.. note::
   The *Lazada Open Platform* account for API access is separate from your *Lazada Seller account*.

Create a Lazada Open Platform account
=====================================

1. Open `Lazada Open Platform <https://open.lazada.com/>`_ and click :guilabel:`Create Account` or
   :guilabel:`Sign Up`.
2. Navigate to the profile and in the :guilabel:`Basic information`, begin filling in the fields to
   start the registration process.

   Under account information, select one of the following selections for :guilabel:`Partner type`:

   - :guilabel:`Personal Self-Developed`: For individuals without a business license.
   - :guilabel:`Enterprise Self-Developed`: For businesses with a registered license.

.. important::

   Do **not** select other service provider types, as they are not applicable for Odoo integration.

3. Continuing on the same page, fill out the following information to complete registration under
   the **Personal information** section:

   - Enter your phone number, email, and address. Complete any verification steps (e.g.,
     :abbr:`OTP (One-Time Password)` via SMS).
   - For :guilabel:`Enterprise Self-Developed` accounts, upload your business license.
   - Provide a brief introduction (e.g., "Integration for Odoo ERP to sync orders, inventory, and
     fees with Lazada").

4. After completing the details, click :guilabel:`Submit` to submit your profile details. Approval
   typically takes a few hours to a couple of business days. Check your registered email for
   confirmation or requests for additional information.
5. If approval status is rejected, review the reason in the notification email or on the
   *Lazada Open Platform Console*. Edit and resubmit as needed.

.. tip::
   Ensure profile details are accurate to avoid delays. Common issues include incorrect account
   type selection or missing business license documents.

Create an app on Lazada Open Platform
=====================================

To obtain the :guilabel:`App Key` and :guilabel:`App Secret` for Odoo integration:

1. Log in to the `Lazada Open Platform Console <https://open.lazada.com/>`_, navigate to
   :menuselection:`App Console`, :menuselection:`App Management`, and click :guilabel:`Create App`.

   .. image:: setup/lazada-open-platform-app-console.png
   .. image:: setup/lazada-create-app.png

2. For :guilabel:`App Category`, select :guilabel:`Seller In-house APP`.
3. Fill out the rest of the application form:

   - Provide your Odoo database URL and tester account credentials (name and password).
   - For :guilabel:`APP IP Address Management`, select :guilabel:`IP address(es) unavailable`
     and enter "The application is cloud-hosted."

4. Click :guilabel:`Submit` to process the application. The app creation takes approximately 24
   hours. Once approved, note the :guilabel:`App Key` and :guilabel:`App Secret`.

Connect Lazada Seller account to Odoo
=====================================

1. To connect a Lazada Seller account in Odoo, navigate to :guilabel:`App` from your Database,
   search for Lazada, and click :guilabel:`Activate`.

   .. image:: setup/lazada-connector-odoo-app.png

2. Enable :guilabel:`Lazada Sync` by navigating to :menuselection:`Sales app --> Configuration`.

   .. image:: setup/lazada-odoo-sales-menu.png

3. Connect a Lazada Seller account:

   - Go to :menuselection:`Sales --> Configuration --> Lazada --> Shops` and click
     :guilabel:`Create New Shop`.
   - Enter a name (e.g., "Lazada Malaysia"), :guilabel:`App Key`, :guilabel:`App Secret`, and
     select the marketplace (e.g., Lazada.com.my).

   .. image:: setup/lazada-connect-new-shop-odoo.png

4. Link the account by doing the following:

   - Click :guilabel:`Create Shop & Authorize`.
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

Configure the shop before go-live
=================================

1. Set up warehouses:

   - Navigate to :menuselection:`Sales app --> Configuration --> Settings --> Connectors --> Lazada
     --> Lazada Shops`.
   - Select the Lazada shop and configure the :guilabel:`FBM Warehouse` field to limit stock
     fetching to specific warehouses.
   - By default, all accounts use the same Lazada stock location. To isolate stock for a specific
     marketplace, create a separate account registration and assign a unique stock location.

.. tip::
   To manually trigger re-initialization of the catalog, clear the
   :guilabel:`Last Catalog Synchronization` before clicking :guilabel:`Sync Catalog`.

2. Synchronize the product catalog:

   The product catalog is automatically matched during the first synchronization. However, it is
   recommended to synchronize the product catalog in the following scenarios:

   - Use the :guilabel:`Sync Catalog` button in Odoo to automatically fetch active Lazada products
     daily.
   - For new Odoo databases, export the Lazada catalog from *Lazada Seller Center* (including
     SKUs). Import into Odoo via :menuselection:`Inventory app --> Products --> Import`, mapping SKUs
     to the :guilabel:`Internal Reference` field.
   - For existing Odoo products, export both Lazada and Odoo catalogs, map SKUs to
     :guilabel:`Internal References` in a spreadsheet, and import the updated mappings back into
     Odoo.

.. tip::
   Test catalog synchronization with a small product set to verify SKU mappings before full import.

.. seealso::
   - :doc:`features`
   - :doc:`manage`
