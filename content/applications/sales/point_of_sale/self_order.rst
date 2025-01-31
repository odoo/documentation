=============
Self-ordering
=============

The self-ordering feature allows customers to browse your menu or product catalog, place an order,
and complete payment using their mobile device or a self-ordering kiosk.

Configuration
=============

Feature activation
------------------

To enable this feature and select a self-ordering type, access the :ref:`POS settings
<configuration/settings>`, scroll down to the :guilabel:`Mobile self-order & Kiosk` section, and
select a :guilabel:`Self Ordering` type under the :guilabel:`QR menu & Kiosk activation` section.

You can choose from:

.. tabs::

   .. group-tab:: QR menu

      Select :guilabel:`QR menu` or :guilabel:`QR menu + Ordering` to give customers access to your
      menu or product catalog by scanning a QR code on their personal device. The latter also
      allows them to place an order and make a payment.

      .. image:: self_order/qr-activation.png
         :alt: QR menu and kiosk setting activation

      - Click :icon:`fa-arrow-right` :guilabel:`Print QR Codes` to download a .pdf document with the
        generated QR codes.
      - Click :icon:`fa-arrow-right` :guilabel:`Download QR Codes` to download a compressed file
        with the generated QR codes.

      .. note::
         In **restaurants**, printing or downloading QR codes generates as many QR codes as the
         number of available tables. In **shops**, it generates only one generic QR code.

      .. tip::
         To customize QR codes,

         #. Scan the relevant QR code to acquire its URL.
         #. Use a QR code generator (e.g., `QR code monkey <https://www.qrcode-monkey.com>`_ or `QR
            code generator <https://www.qr-code-generator.com>`_) to create a custom QR code.

   .. group-tab:: Kiosk

      When :guilabel:`Kiosk` is selected, customers can access the menu or product catalog, place
      orders, and pay from a self-ordering kiosk.

      .. image:: self_order/kiosk-activation.png
         :alt: QR menu and kiosk setting activation

Once a self-ordering type is selected, the :ref:`additional settings <pos/self_order/add-settings>`
update to fit the selected type's needs.

.. _pos/self_order/add-settings:

Additional settings
-------------------

.. tabs::

   .. tab:: Home buttons

      The :guilabel:`Home buttons` are displayed on the kiosk or mobile device interfaces when
      customers are self-ordering. To set them up, click :icon:`fa-arrow-right` :guilabel:`Home
      buttons`. Then,

      #. Click :guilabel:`New` to add a new button.
      #. Set the :guilabel:`Label`.
      #. Enter a :guilabel:`URL` preceded by `https://` to redirect customers to a specific URL when
         clicking the button. For instance, you might want to redirect them to a campaign video for
         a new product or to a contest page.
      #. In the same :guilabel:`URL` column, enter `/products` to create a button that redirects
         customers to the product catalog.
      #. Select the :guilabel:`Points of Sale` to ensure this button only appears on the selected
         POS' self-ordering interface.
      #. Select a predefined :guilabel:`Style` from the dropdown menu.

      .. note::
         - Leaving the :guilabel:`Points of Sale` field empty shares the button with all POS.
         - The :guilabel:`Preview` column automatically updates,  giving you a glimpse of the
           button's appearance based on its configuration.

   .. tab:: Service location and payment options

      - Set where the service occurs by selecting :guilabel:`Table` or :guilabel:`Pickup zone`
        under the :guilabel:`Service` field.
      - Define when and how customers pay in the :guilabel:`Pay after` field. Customers can pay
        after :guilabel:`Each meal` or for :guilabel:`Each order`.
      - The service location and payment options available depend on the type of self-ordering
        service and POS:

        - **QR menu + Ordering**:

          - **Restaurants**: Customers can be served at their table or the pickup zone.

            - When served at their table, they can pay after each meal or each order.
            - When served at the pickup zone, they can only pay after each order.
          - **Shops**: Customers can only be served at the pickup zone and pay after each order.
          - Regardless of the type of POS, customers can pay :doc:`online
            </applications/finance/payment_providers>` or using any configured :doc:`payment
            method <payment_methods>`.

        - **Kiosk**:

          - Regardless of the type of POS, customers can either be served at their table or in the
            pickup zone, but they must pay after each order.
          - The kiosk self-ordering only works with :doc:`Adyen <payment_methods/terminals/adyen>`
            and :doc:`Stripe <payment_methods/terminals/stripe>` terminals.
          - The :guilabel:`Online Payment` feature is not supported.

      .. seealso::
         - :doc:`../../finance/payment_providers`
         - :doc:`payment_methods`

   .. tab:: Language

      This option allows you to enable multiple languages for the self-ordering interface. The
      suggested languages are those already installed in Odoo. To expand the selection, add more
      languages:

      #. Click :icon:`fa-arrow-right` :guilabel:`Add Languages`.
      #. Add as many languages as needed to the :guilabel:`Languages` field.
      #. Click :guilabel:`Add`.
      #. Add those languages to the :guilabel:`Available` field.

      .. seealso::
         :doc:`../../general/users/language`

   .. tab:: Splash screens

      Splash screens are introductory screens displayed when the self-ordering interface or kiosk is
      launched. They typically contain branding, welcome messages, or usage instructions.

      - To add a splash screen image, click :icon:`fa-paperclip` :guilabel:`Add images`, select and
        open an image.
      - To remove a splash screen image, hover over the image and click :icon:`fa-times`
        (:guilabel:`Delete`).

      .. note::
         You can add multiple splash screen images at once.

   .. tab:: Eat in/ Take out

      Activate this setting to :doc:`adjust the tax rate <pricing/fiscal_position>` based on whether
      customers dine in or take their order to go. Then,

      - Fill in the field with an existing :guilabel:`Alternative Fiscal Position`;
      - Create and set up a new fiscal position by filling in the field and clicking
        :guilabel:`Create & Edit`; or
      - Create and set up a new fiscal position by clicking :icon:`fa-arrow-right` :guilabel:`Fiscal
        Positions`.

      .. seealso::
         :doc:`pricing/fiscal_position`

Preview
-------

Review the interface before making the self-ordering feature available to customers to ensure all
settings are applied correctly. Click :icon:`fa-arrow-right` :guilabel:`Preview Web interface`
under the :guilabel:`Self  Ordering` field to ensure all :ref:`additional settings
<pos/self_order/add-settings>` are correctly applied.

Usage guidelines
================

.. tabs::

   .. group-tab:: QR menu

      On the POS user's end, access the self-ordering interface by

      - Scanning a downloaded or printed QR code; or
      - Clicking the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) icon on the POS card,
        then :guilabel:`Mobile Menu`.

      On the customers' end,

      #. Access the self-ordering interface by scanning a downloaded or printed QR code.
      #. Click the :ref:`home button <pos/self_order/add-settings>` to reach the menu or catalog.
      #. Select the items and click :guilabel:`Order` to place an order.
      #. Follow the instructions on-screen to assign a table and pay for the order.

   .. group-tab:: Kiosk

      On the POS user's end,

      #. Click :guilabel:`Start Kiosk`.
      #. Open the provided URL on the self-ordering kiosk(s).

         - Copy and paste it; or
         - Click :guilabel:`Open in New Tab`.

      .. note::
         - Once a session is open, :guilabel:`Start Kiosk` switches to :guilabel:`Open Kiosk` on the
           POS card.
         - Click :guilabel:`Open Kiosk` on the POS card to reopen the popup window and access the
           self-ordering interface.

      On the customers' end,

      #. Click the :ref:`home button <pos/self_order/add-settings>` from a self-ordering kiosk to
         reach the menu or product catalog.
      #. Select the items and click :guilabel:`Order` to place an order.
      #. Follow the instructions on-screen to assign a table and pay for the order.

      .. image:: self_order/kiosk-endscreen.png
         :alt: kiosk end-screen for customers
         :scale: 65 %

.. important::
   - A POS session must be open for customers to place an order.
   - Once an order is placed, it is automatically sent to :doc:`the preparation screen
     <preparation>` and added to the list of POS orders.
