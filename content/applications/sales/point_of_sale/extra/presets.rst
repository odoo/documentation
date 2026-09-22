=======
Presets
=======

Presets are preconfigured settings used to quickly apply predefined configurations to POS orders,
such as the fiscal position, pricelist, opening hours, order capacity limit, etc. They are
particularly useful for businesses that need different configurations depending on the type of sale.

.. example::
   - Restaurants can use presets to adjust pricelists and capacities based on the order type, such
     as :guilabel:`Dine In`, :guilabel:`Takeout`, or :guilabel:`Delivery`.

   - Flower shops can use presets to apply different taxes when selling flowers and plants (taxed as
     goods) versus creating arrangements for funerals or weddings (taxed as services). Presets can
     also help streamline returns and apply different pricelists (with discounts) for loyal
     customers and/or members.

.. seealso::
   `Odoo Presets Tutorial <https://www.odoo.com/slides/slide/manage-presets-12827>`_

.. _pos/presets/configuration:

Configuration
=============

.. note::
   If a :doc:`restaurant POS <../../point_of_sale/restaurant>` exists in the database, preconfigured
   presets are automatically available.

To enable and set presets for a POS, follow these steps:

#. Go to the :ref:`POS settings <pos/use/settings>`.
#. Under :guilabel:`Point of Sale`, enable :guilabel:`Take out / Delivery / Members`.
#. In the :guilabel:`Available` field:

    - If preconfigured presets are available, select the relevant one(s) or click :guilabel:`Search
      more`, then :guilabel:`Create New` to create and :ref:`configure <pos/presets/preset-form>` a
      new preset.
    - If no preconfigured presets are available, click :guilabel:`Create ...`, then :ref:`configure
      <pos/presets/preset-form>` the preset.

#. Define a default preset in the :guilabel:`Default` field.
#. Click :guilabel:`Save`.
#. If necessary, click :icon:`oi-arrow-right` :guilabel:`Configure Presets`, then click the desired
   preset to edit it, or click :guilabel:`New` to create a new one.

.. tip::
   - Once presets exist in the database, they can be accessed from :menuselection:`Point of Sale -->
     Configuration --> Presets`.
   - Presets are automatically enabled when creating a new restaurant point of sale :ref:`through the
     onboarding screen <pos/use/create-pos>` and selecting the :guilabel:`Restaurant` card.

.. _pos/presets/preset-form:

On the relevant :guilabel:`Presets` form, apply or edit the following options:

- Enter a preset :guilabel:`Label`.
- If needed, add an image by clicking the :icon:`fa-pencil` (:guilabel:`Edit`) button when hovering
  over the camera image. This image is displayed in :ref:`kiosk mode <extra/presets/apply-presets>`.
- :guilabel:`Pricelist`: Select or :doc:`configure a pricelist
  <../../sales/products_prices/prices/pricing>`.
- :guilabel:`Fiscal Position`: Select or :doc:`configure a fiscal position
  </applications/finance/accounting/taxes/fiscal_positions>`. Fiscal positions are especially
  important in environments where customers must pay different tax rates depending on the type of
  order.
- :guilabel:`Manage orders by time`: Enable this option to define time slots for scheduling orders.
  Then,

  - choose a working time in the :guilabel:`Schedule based on` field;
  - define the :guilabel:`Preparation capacity` to indicate how many orders can be handled in a
    given time frame;
  - configure the working hours in the :guilabel:`Schedule` tab.

- :guilabel:`Identification`: Specify whether order identification details (such as a
  :guilabel:`Name` or an :guilabel:`Address`) are required.
- :guilabel:`Return mode`: Select this mode only to process returns. All items added to the cart
  are entered as negative quantities.
- :guilabel:`Color`: Define the preset button's color in the :ref:`register
  <pos/restaurant/orders>`.
- In the :guilabel:`Self Ordering` tab, enable :guilabel:`Available in self` to display the preset
  in the :doc:`self-order interface <self_order>`, then customize the fields as follows:

  - Select a service zone in the :guilabel:`Service at` field.
  - Select or :doc:`configure an email template </applications/general/companies/email_template>` in
    the :guilabel:`Email Confirmation` field.

- In the :guilabel:`Options` tab:

  - Enable :guilabel:`Service Fee` to add an automatic service fee to orders, then customize the
    fields as follows:

    - :guilabel:`Service Fee Product`: Select a product to :ref:`determine the income account and
      taxes <accounting/get_started/products>` for the service fee.
    - Service fee :guilabel:`Type`: Choose either :guilabel:`Fixed Price` or :guilabel:`Percent` of
      the order total. If set to :guilabel:`Percent`, specify whether the fee is :guilabel:`Based
      on` the order total before or after discounts are applied.

      .. note::
         Discounts are applied through :ref:`discount and loyalty programs <pos/pricing/loyalty>`,
         :ref:`global and line discounts <pos/pricing/discounts>`, and :ref:`pricelists
         <pos/pricing/pricelists>`.

  - Enable :guilabel:`Guest` to prompt users to enter the number of guests when :ref:`taking an
    order <pos/restaurant/orders>`.

.. tip::
   On the preset form, click the :icon:`fa-shopping-cart` :guilabel:`Order(s)` smart button to
   access the list of all orders created with the selected preset.

.. _extra/presets/apply-presets:

Apply presets to POS orders
===========================

Presets are available in both the :ref:`POS register <pos/restaurant/orders>` and the :doc:`kiosk
<self_order>` (provided the :guilabel:`Available in self` feature is :ref:`enabled
<pos/presets/preset-form>`). The workflow varies based on the :ref:`preset configuration
<pos/presets/preset-form>`.

.. tabs::

   .. tab:: POS register

      Presets are displayed in the :ref:`POS register <pos/restaurant/orders>` with the default
      preset selected. To change the preset, click the default preset button and select an available
      alternative. The default preset is automatically restored for the next order.

      .. image:: presets/presets-button.png
         :alt: Default presets "Dine In" button.

      .. image:: presets/register-select-preset.png
         :alt: Select a preset in the POS register.
         :scale: 70%

      The features :ref:`configured for presets <pos/presets/configuration>` trigger specific
      actions in the POS register:

      - If :guilabel:`Identification` is required for the selected preset, you must enter specific
        information (depending on the selected option) before proceeding to checkout:

        - :guilabel:`Name`: Select an order name or enter a new one (only for :doc:`restaurant
          points of sale <../restaurant>`). To modify it, click the :icon:`fa-ellipsis-v`
          (:guilabel:`Actions`) menu and select :icon:`fa-pencil-square-o` :guilabel:`Set Order
          Name`.
        - :guilabel:`Address`: Choose an existing customer or :guilabel:`Create` a new one, and make
          sure they have an address assigned. The customer's name is :ref:`displayed in the pad
          <pos/use/customers>`. Click it to select a different customer or :ref:`edit
          <pos/use/customers>` the :ref:`customer's details <contacts/contact-form>` if needed.

          .. tip::
             Use the :icon:`fa-search` search bar to find a customer.


      - If the :guilabel:`Manage orders by time` option is enabled for the selected preset, select a
        date and time; only available time slots are shown. The selected time is displayed in the
        POS interface header. Click it to modify the time.

      - If the :guilabel:`Guest` feature is enabled for the selected preset, a pop-up appears
        prompting you to enter the number of guests, and the amount per guest is displayed (the
        total amount divided by the number of guests).

        .. image:: presets/guest-count.png
           :alt: Enter the number of guests in the POS register.
           :scale: 70%
      - If the :guilabel:`Service Fee` option is enabled for the selected preset, a service fee is
        automatically added to the order:

        - If the fee :guilabel:`Type` is :guilabel:`Percent`, the service fee order line cannot be
          changed.
        - If the fee :guilabel:`Type` is :guilabel:`Fixed Price`, the :ref:`quantity and price
          <pos/use/sell>` of the service fee order line can be modified, for example, to increase
          the fee if there are several guests.

   .. tab:: Kiosk

      Presets can be used in the :ref:`kiosk of the self-ordering mode
      <pos/self_order/use>`. Once the customer taps the :guilabel:`Order Now` button,
      all available preset options, along with their respective images, are displayed.

      .. image:: presets/kiosk-presets.png
         :alt: Presets in kiosk mode.
         :scale: 60%

      The features :ref:`configured for presets <pos/presets/configuration>` trigger specific
      actions in the kiosk:

      - If the :guilabel:`Manage orders by time` option is enabled, customers must select a date and
        time in the :guilabel:`Select an hour` pop-up.
      - Customers may need to enter specific information in the :guilabel:`We need more info`
        pop-up:

        - If :guilabel:`Identification` is required:

          - :guilabel:`Name`: Customers must enter their :guilabel:`Name` and :guilabel:`Phone`
            number.
          - :guilabel:`Address`: Customers must enter their :guilabel:`Name`, :guilabel:`Phone`
            number, and address details.

        - If the :guilabel:`Email confirmation` field is set: Customers must enter their
          :guilabel:`Email` to proceed.

      - If :guilabel:`Table` is selected in the :guilabel:`Service at` field for :guilabel:`Self
        ordering` mode, customers must enter their tracker number at the end of the ordering
        process.
      - If the :guilabel:`Service Fee` option is enabled, a service fee is automatically added to
        the order, and customers cannot modify it.

.. seealso::
  - :doc:`preparation`
  - :doc:`UrbanPiper order management for food delivery <../restaurant/urban_piper>`
