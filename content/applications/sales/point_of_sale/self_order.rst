=============
Self-ordering
=============

The self-ordering mode allows customers to browse the menu or product catalog, place an order,
and complete payment using their mobile device or a self-ordering kiosk.

.. _pos/self_order/configuration:

Configuration
=============

To enable the self-ordering mode, access the :ref:`POS settings <configuration/settings>`, scroll
down to the :guilabel:`Mobile self-order & Kiosk` section, and, in
the :guilabel:`QR menu & Kiosk activation` section, select a :guilabel:`Self Ordering` type from the
dropdown list.

You can choose between :guilabel:`QR menu`, :guilabel:`QR menu + Ordering`, and :guilabel:`Kiosk`.

.. tabs::

   .. group-tab:: QR menu

      Select :guilabel:`QR menu` or :guilabel:`QR menu + Ordering` to give customers access to the
      menu or product catalog by scanning a QR code on their personal device. The latter also
      allows them to place an order and make a payment. Then:

      - Click :icon:`fa-arrow-right` :guilabel:`Print QR Codes` to download a .pdf document with the
        generated QR codes.
      - Click :icon:`fa-arrow-right` :guilabel:`Download QR Codes` to download a compressed file
        with the generated QR codes.
      - Click :icon:`fa-arrow-right` :guilabel:`Free Metal / Wood Stands` to `order QR code stands
        from Odoo <https://www.odoo.com/app/point-of-sale-restaurant-qr-code>`_.

      .. note::
         In **restaurants**, printing or downloading QR codes generates as many QR codes as the
         number of available tables. In **shops**, it generates only one generic QR code.

      To customize QR codes, scan the relevant QR code to acquire its URL, then use a QR code
      generator (e.g., `QR code monkey <https://www.qrcode-monkey.com>`_ or `QR code generator
      <https://www.qr-code-generator.com>`_) to create a custom QR code.

   .. group-tab:: Kiosk

      Select :guilabel:`Kiosk` to let customers browse the menu or product catalog, place orders,
      and pay directly at a self-ordering kiosk.

Once a self-ordering type is selected, click :icon:`fa-arrow-right` :guilabel:`Preview Web
interface` under the :guilabel:`Self  Ordering` field to ensure all :ref:`additional settings
<pos/self_order/additional-settings>` are correctly applied.

.. _pos/self_order/additional-settings:

Additional settings
-------------------

To further configure the self-ordering options, use the settings in the :guilabel:`Mobile self-order
& Kiosk` section.

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
         - The :guilabel:`Preview` column automatically updates to show the button's appearance for
           the selected :guilabel:`Style`.

   .. tab:: Service location and payment options

      In the :guilabel:`Service at` field, specify where the service takes place by selecting
      :guilabel:`Table` or :guilabel:`Pickup zone`. Then, in the :guilabel:`Pay after` field, define
      when customers pay. Depending on the self-ordering type, service location, and POS type,
      customers can pay after their :guilabel:`Meal` or after :guilabel:`Each order` and choose from
      different payment options.

      .. tabs::

         .. group-tab:: QR menu

            - **Restaurants**: Customers can be served at their :guilabel:`Table` or at the
              :guilabel:`Pickup zone`.

              - For :guilabel:`Table` service, they can pay after their :guilabel:`Meal` or after
                :guilabel:`Each order`.
              - For :guilabel:`Pickup zone` service, they can only pay after :guilabel:`Each order`.

            - **Shops**: Customers can only be served at the :guilabel:`Pickup zone` and pay after
              :guilabel:`Each order`.
            - Customers can pay :doc:`online </applications/finance/payment_providers>` or using any
              configured :doc:`payment method <payment_methods>`. If the :guilabel:`Online Payment`
              field is left empty, customers pay at the cashier.

         .. group-tab:: Kiosk

            - Customers can be served at their :guilabel:`Table` or at the :guilabel:`Pickup zone`,
              but they must pay after :guilabel:`Each order`.
            - Payment via a terminal is only possible with :doc:`Adyen
              <payment_methods/terminals/adyen>` or :doc:`Stripe <payment_methods/terminals/stripe>`
              terminals.
            - To pay :doc:`online </applications/finance/payment_providers>`, customers must scan
              the displayed QR code.
            - :guilabel:`Cash` payments are not supported.

      .. note::
         Regardless of the self-ordering configuration, only one :guilabel:`Online Payment` method
         can be added.

      .. tip::
         Click :icon:`fa-arrow-right` :guilabel:`Payment Methods` to :ref:`create or edit payment
         methods <pos/qr_code_payment/create-method>`.

      .. seealso::
         - :doc:`../../finance/payment_providers`
         - :doc:`payment_methods`

   .. tab:: Language

      Enable multiple languages for the self-ordering interface. The suggested languages are those
      already installed in Odoo. When several languages are installed, select a :guilabel:`Default`
      language and, if desired, additional :guilabel:`Available` languages. To add more languages,
      follow these steps:

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

   .. tab:: Header

      Add a custom image to the self-ordering header to give it a branded look. To do so, go to the
      :guilabel:`Customize Header` section and click :guilabel:`Upload your file`.

.. _pos/self_order/use:

Using the self-ordering mode
============================

Once the self-ordering mode configuration is completed, make it accessible to customers by either
displaying printed QR codes or installing a self-service kiosk.

.. important::
   A POS session must be open for customers to place an order.

.. tabs::

   .. group-tab:: QR menu

      On the POS user's end, access the self-ordering interface by

      - Scanning a downloaded or printed QR code; or
      - Clicking the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) icon on the POS card,
        then :guilabel:`Mobile Menu`.

      On the customers' end,

      #. Access the self-ordering interface by scanning a downloaded or printed QR code.
      #. Click the :ref:`home button <pos/self_order/additional-settings>` to reach the menu or
         catalog.
      #. Select the items, then click :guilabel:`Order` to place an order.
      #. Follow the instructions on-screen to assign a table and pay for the order.

   .. group-tab:: Kiosk

      On the POS user's end,

      #. Click :guilabel:`Start Kiosk`.
      #. Open the provided URL on the self-ordering kiosk(s).

         - Click the provided URL to open the kiosk in a new tab;
         - Click :guilabel:`Install App` to install the kiosk module on your self-ordering kiosk; or
         - Click :guilabel:`Open on IoT Box` if your kiosk is :doc:`connected to an IoT system
           <../../general/iot/connect>`.

      .. note::
         - Once a session is open, :guilabel:`Start Kiosk` switches to :guilabel:`Open Kiosk` on the
           POS card.
         - Click :guilabel:`Open Kiosk` on the POS card to reopen the popover and access the
           self-ordering interface.

      On the customers' end,

      #. Press the :ref:`home button <pos/self_order/additional-settings>` on the self-ordering
         kiosk to open the menu or product catalog.
      #. Select the items, then click :guilabel:`Order` to place an order.
      #. Follow the instructions on-screen to assign a table, if relevant, and pay for the order.

.. note::
   Once an order is placed, it is automatically sent to :doc:`the preparation screen <preparation>`
   and added to the list of POS orders.
