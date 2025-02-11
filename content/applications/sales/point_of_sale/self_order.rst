=============
Self-ordering
=============

The self-ordering feature allows customers to browse your menu or product catalog, place an order,
and complete payment using their mobile device or a self-ordering kiosk.

Configuration
=============

To enable this feature, access the :ref:`POS settings <configuration/settings>`, scroll down to the
:guilabel:`Mobile self-order & Kiosk` section, and select a :guilabel:`Self Ordering` type under the
:guilabel:`QR menu & Kiosk activation` section. You can choose from:

.. tabs::

   .. group-tab:: QR menu

      When a :guilabel:`QR menu` is set, customers can access the menu by scanning a QR code. When a
      :guilabel:`Qr menu + ordering` is set, customers can also place an order and pay.  Once a
      self-ordering type is selected, the setup form alters to fit the selected type's needs.

      .. image:: self_order/qr-activation.png
         :alt: QR menu and kiosk setting activation

      - Click :icon:`fa-arrow-right` :guilabel:`Print QR Codes` to download a .pdf document with the
        generated QR codes.
      - Click :icon:`fa-arrow-right` :guilabel:`Download QR Codes` to download a compressed file with
        the generated QR codes.

      .. note::
         In restaurants, printing or downloading QR codes generates as many QR codes as the number
         of available tables. In shops, it generates only one generic QR code.

      .. tip::
         To customize QR codes,

         #. Scan the relevant QR code to acquire its URL.
         #. Using a QR code generator like `QR code monkey <https://www.qrcode-monkey.com>`_ or `QR
            code generator <https://www.qr-code-generator.com>`_, generate a customized QR code that
            redirects to this URL.

   .. group-tab:: Kiosk

      When :guilabel:`Kiosk` is set, customers can access the menu, place orders and pay from a
      self-ordering kiosk. Once a self-ordering type is selected, the setup form alters to fit the
      selected type's needs.

      .. image:: self_order/kiosk-activation.png
         :alt: QR menu and kiosk setting activation

Sub-settings
------------

Once the self-ordering type is selected, set it up:

.. tabs::

   .. tab:: Home buttons

      To set up the buttons available on-screen, click :icon:`fa-arrow-right` :guilabel:`Home buttons`.
      Then,

      #. Click :guilabel:`New` to add a new button.
      #. Set the :guilabel:`Label`.
      #. Enter a :guilabel:`URL` preceded by :guilabel:`https://` to redirect customers to a specific
         URL when clicking this button.

         - To redirect them to the product menu, enter `/products` in that column.
      #. Select the :guilabel:`Points of Sale` to ensure this button only appear on the selected POS.
      #. :guilabel:`Style` from the dropdown menu.

      .. note::
         - Leaving the :guilabel:`Points of Sale` field empty means that button is automatically shared
           by all POS.
         - The button is automatically updated in the :guilabel:`Preview` column.

   .. tab:: Service location and payment options

      - Set where the service takes place by selecting :guilabel:`Table` or :guilabel:`Pickup zone`
        under the :guilabel:`Service` field.
      - Set when and how customers can pay in the :guilabel:`Pay after` field. Customers can either
        pay after :guilabel:`Each meal` or :guilabel:`Each order`.
      - Depending on the type of POS and the type of self-ordering service, the service location and
        payment options slightly differs:

      .. tabs::

         .. tab:: QR menu
            - **Restaurants**: customers can be served at their table or at the pickup zone.

              - When served at their table, they can either pay after each meal or each order.
              - When served at the pickup zone, they can only pay after each order.
            - **Shops**: customers can only be served at pickup zone and pay after each order
            - Regardless of the type of POS, customers can also pay using any configured payment
              method or online.

         .. tab:: Kiosk
            - Regardless of the type of POS, customers can either be served at their table or the
              pickup zone, but they have to pay after each order.
            - The kiosk self-ordering only works with Adyen & Stripe terminals.
            - :guilabel:`Online Payment` are not supported.

      .. seealso::
         - :doc:`../../finance/payment_providers`
         - :doc:`payment_methods`

   .. tab:: Language
      This option allows you to enable multiple language options for the
      self-ordering interface. The suggested languages are the languages already installed in Odoo. To
      add more languages to choose from, click :icon:`fa-arrow-right` :guilabel:`Add Languages`.

   .. tab:: Splash screens

      Splash screens are introductory screens displayed when the self-ordering interface or kiosk is launched.
      They typically contain branding, welcome messages,
      or usage instructions.

   .. tab:: Eat in/ Take out

      Set it up to :doc:`use multiple fiscal positions <pricing/fiscal_position>` depending on
      whether the customers eat in or take their order to go.

      .. seealso::
         :doc:`pricing/fiscal_position`

   .. tab:: Preview
      Click :icon:`fa-arrow-right` :guilabel:`Preview Web interface` under the :guilabel:`Self Ordering`
      field to ensure the interface fits your needs.

Practical application
=====================

.. tabs::

   .. group-tab:: QR menu

      On the POS user's end,

      #. Open a POS session for the feature to be available to customers.
      #. To access the self-ordering interface, scan a downloaded or printed QR code, or click the
         vertical ellipsis (:icon:`fa-ellipsis-v`) on the POS card and :guilabel:`Mobile Menu`.

      On the customers' end,

      #. To access the self-ordering interface, scan a downloaded or printed QR code.
      #. Click the configured home button to reach the menu or catalog.
      #. Select the items and click :guilabel:`Order` to place an order.
      #. Follow the instructions on-screen to assign a table and pay for the order.

      Once an order is placed, it is automatically sent to the preparation screen, and added to the
      list of POS orders.

      .. important::
         A POS session must be open for customers to place an order.

   .. group-tab:: Kiosk

      On the POS user's end,

      #. Click :guilabel:`Start kiosk` for the feature to be available to customers.
      #. To access the self-ordering interface, click and :guilabel:`Open Kiosk` on the POS card.
      #. Open the provided URL on your self-ordering kiosk.

      On the customers' end,

      #. From a configured self-ordering kiosk, click the configured home button to reach the menu
         or catalog.
      #. Select the items and click :guilabel:`Order` to place an order.
      #. Follow the instructions on-screen to assign a table and pay for the order.

      Once open, the kiosk is ready to be used by customers.

      Once an order is placed, it is automatically sent to the preparation screen, and added to the
      list of POS orders.

      .. important::
         A POS session must be open for customers to place an order.
