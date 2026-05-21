=====
Adyen
=====

Connecting an Adyen payment terminal to **Odoo Point of Sale** allows you to offer customers a
smooth payment experience while simplifying the work of cashiers.

.. important::
   - Adyen payment terminals do not require an :doc:`IoT Box </applications/general/iot>`.
   - Adyen terminals can be used in many countries, but not worldwide. Check the `list of countries
     supported by Adyen <https://docs.adyen.com/point-of-sale/what-we-support/supported-languages/#supported-countries>`_.
   - Adyen is more focused on enterprise customers and may require a minimum number of transactions
     and a minimum processed volume.

.. seealso::
   - :doc:`Online payments with Adyen </applications/finance/payment_providers/adyen>`
   - `List of payment methods supported by Adyen <https://docs.adyen.com/point-of-sale/what-we-support/payment-methods/>`_
   - `List of Adyen terminals <https://docs.adyen.com/point-of-sale/what-we-support/select-your-terminals/>`_

.. _adyen/configuration:

Adyen configuration
===================

.. _adyen-customer-area: https://ca-live.adyen.com

Start by creating an `Adyen account <https://docs.adyen.com/get-started-with-adyen>`_ and ordering
a terminal through the `Adyen Customer Area <adyen-customer-area_>`_.
Once you receive the terminal, set up the physical device by following the instructions displayed on
the terminal screen.

To connect the Adyen terminal to Odoo, you need to:

- :ref:`adyen/api`.
- :ref:`adyen/identifier`.
- :ref:`adyen/merchant-account`.
- :ref:`adyen/event-urls`.

.. tip::
   Log in to your **Test account** to try the integration without charging customers.
   Switch to your **Live account** once you are ready to accept payments.

.. seealso::
   - `Adyen Docs - Payment terminal quickstart guides <https://docs.adyen.com/point-of-sale/user-manuals>`_
   - `Odoo Point of Sale: Adyen tutorial <https://www.youtube.com/watch?v=g5h3rcVjlpw>`_

.. _adyen/api:

Generate an Adyen API key
-------------------------

The Adyen API key is used to authenticate requests from the Adyen terminal. To generate an API key:

#. Go to your `Adyen Customer Area <adyen-customer-area_>`_.
#. Navigate to :menuselection:`Developers --> API credentials` in the left menu.
#. Select existing credentials or create new ones:

   #. Click :icon:`fa-plus-circle` :guilabel:`Create new credential`.
   #. In the :guilabel:`Create API credential` pop-up window, select :guilabel:`Web service user` as
      :guilabel:`Credential type`.
   #. Optionally, enter a :guilabel:`Description`.
   #. Click :guilabel:`Create credential`.

#. In the :guilabel:`Server settings` section of the :guilabel:`Configure API credential` page,
   click :guilabel:`Generate API key` next to the :guilabel:`API key` field.
#. Click the :icon:`fa-copy` (:guilabel:`Copy API key`) icon and save the value for the
   :ref:`adyen/method-creation` step.
#. Click :guilabel:`Save changes`.

.. seealso::
   `Adyen Docs - API credentials
   <https://docs.adyen.com/development-resources/api-credentials#generate-api-key>`_

.. _adyen/identifier:

Locate the Adyen terminal identifier
------------------------------------

The Adyen terminal identifier, also known as the **POIID**, is the terminal's unique string used to
identify the physical payment terminal.

To locate this identifier:

#. Go to your `Adyen Customer Area <adyen-customer-area_>`_.
#. Navigate to :menuselection:`In-person payments --> Payment devices` to view a list of all your
   devices.

   .. tip::
      Active devices are marked with a :icon:`os-green-dot` :guilabel:`(green dot)` icon.

#. Select the terminal to connect.

   .. tip::
      If you have multiple devices, identify your terminal using the serial number printed on
      the back of the device.

#. On the :guilabel:`Settings` page, click the terminal identifier to copy it to the clipboard and
   save the value for the :ref:`adyen/method-creation` step.

   .. image:: adyen/copy-terminal-identifier.png
      :alt: Clicking the identifier's name to copy it to clipboard.

   .. admonition:: Info

      The terminal identifier combines the device model and serial number, e.g.,
      `S1F2L-000158215112256`.

.. _adyen/merchant-account:

Locate the merchant account name
--------------------------------

To locate the merchant account name:

#. Go to your `Adyen Customer Area <adyen-customer-area_>`_.
#. Navigate to :menuselection:`In-person payments --> Payment devices` to view a list of all your
   devices.
#. Select the terminal to connect.
#. In the :ref:`terminal's <adyen/identifier>` settings, click the :guilabel:`Merchant` name.
#. Click the merchant account name to copy it to the clipboard and save the value for the
   :ref:`adyen/method-creation` step.

   .. image:: adyen/adyen-merchant-account.png
      :alt: Clicking the merchant account name to copy it to clipboard.

.. _adyen/event-urls:

Set the event URLs
------------------

To allow Odoo to receive payment notifications, you must configure the terminal :guilabel:`Event
URLs`. To do so,

#. Go to your `Adyen Customer Area <adyen-customer-area_>`_.
#. Navigate to :menuselection:`In-person payments --> Payment devices` to view a list of all your
   devices.
#. Select the :ref:`terminal <adyen/identifier>` to connect.
#. In the terminal settings, select :guilabel:`Integrations` from the left menu.

   .. important::
      Ensure you are configuring the :guilabel:`Terminal level terminal settings`, *not* the
      :guilabel:`Merchant level terminal settings`.

      .. image:: adyen/adyen-settings-level.png
         :alt: Terminal level terminal settings.

#. Set the :guilabel:`Switch to decrypted mode to edit this setting` field to :guilabel:`Decrypted`.
#. Click :guilabel:`Add new` or edit an existing URL by clicking the :icon:`fa-pencil` pencil icon.
#. On the :guilabel:`Add URL` or :guilabel:`Edit URL` pop-up window, paste the :guilabel:`Event URL`
   from Odoo's :ref:`payment method form <adyen/method-creation>`.

   .. admonition:: Info

      The :guilabel:`Event URL` is composed of the server address, followed by
      `/pos_adyen/notification`.

#. If needed, enter a :guilabel:`Username (optional)` and :guilabel:`Password (optional)`, define if
   the URL is :guilabel:`Public` or :guilabel:`Local`, and toggle :guilabel:`Enable encryption`
   on/off.
#. Click :guilabel:`Add URL`, or when editing an existing URL, :guilabel:`Edit URL`.
#. Click :guilabel:`Save` at the bottom of the page.
#. Switch to :guilabel:`Encrypted` mode.

.. _adyen/method-creation:

Odoo configuration
==================

To configure Adyen for Odoo, you first need to :ref:`enable Adyen and create the payment method
<pos/terminals/configuration>`. Then, configure the Adyen-specific settings on the payment method
form:

#. Paste the following values into their corresponding fields:

   - The :ref:`generated API key <adyen/api>` into the :guilabel:`Adyen API key` field.
   - The :ref:`located terminal identifier <adyen/identifier>` into the :guilabel:`Adyen Terminal
     Identifier` field.
   - The :ref:`merchant account name <adyen/merchant-account>` into the :guilabel:`Adyen Merchant
     Account` field.

#. Copy the :guilabel:`Event URL` to the clipboard by clicking the :icon:`fa-clipboard`
   :guilabel:`(copy)` icon, then paste it into your :ref:`Adyen account <adyen/event-urls>`.
#. Enable :guilabel:`Adyen Test Mode` if you are still testing the integration.

.. tip::
   It is possible to let customers add a :ref:`tip <pos/restaurant/tips>` directly on the Adyen
   card terminal, as well as :ref:`after payment in a restaurant point of sale
   <pos/restaurant/tips-after-payment>`.

.. seealso::
   :doc:`../../payment_methods`
