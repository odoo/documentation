=====
Adyen
=====

Connecting an **Adyen payment terminal** allows you to offer a fluid payment flow to your customers
and ease the work of your cashiers.

Configuration
=============

Start by creating your Adyen account on `Adyen's website <https://www.adyen.com/>`_. Then, board
your terminal following the steps described on your terminal's screen.

.. seealso::
   - `Adyen Docs - Payment terminal quickstart guides
     <https://docs.adyen.com/point-of-sale/user-manuals>`_.

Configure the payment method
----------------------------

First, go to :menuselection:`Point of Sale --> Configuration --> Settings --> Payment Terminals`,
and enable :guilabel:`Adyen`.
Then, go to :menuselection:`Configuration --> Payment Methods` and create a new payment method.
Select :guilabel:`Adyen` in the :guilabel:`Use a Payment Terminal` field.

.. note::
   The selected journal **must** be a bank journal for the :guilabel:`Use a payment terminal` field
   to appear.

Finally, fill the mandatory fields with an :guilabel:`Adyen API key`, and an :guilabel:`Adyen
Terminal Identifier`.

Generate an Adyen API key
~~~~~~~~~~~~~~~~~~~~~~~~~

The **Adyen API key** is a key used to authenticate your requests. To generate an API key, go to
your **Adyen account**.

Then, go to :menuselection:`Developers --> API credentials`. Create a new credential or click on an
existing one.

Click on :guilabel:`Generate an API key` and copy-paste that key onto the Odoo mandatory field.

.. seealso::
   - `Adyen Docs - API credentials
     <https://docs.adyen.com/development-resources/api-credentials#generate-api-key>`_.

Locate the Adyen terminal identifier
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **Adyen Terminal Identifier** is your terminal's serial number, which is used to identify the
hardware.

To find this number, go to your **Adyen account**. Then, go to :menuselection:`Point of Sale
--> Terminals`, select the terminal to link, and copy-paste its serial number onto the Odoo
mandatory field.

Set the Event URLs
~~~~~~~~~~~~~~~~~~

For Odoo to know when a payment is made, you must set the terminal **Event URLs**. To do so,

#. log in to `Adyen's website <https://www.adyen.com/>`_;
#. go to :menuselection:`Adyen's dashboard --> Point of Sale --> Terminals` and select the connected
   terminal;
#. from the terminal settings, click :guilabel:`Integrations`;
#. set the :guilabel:`Switch to decrypted mode to edit this setting` field as :guilabel:`Decrypted`;
#. click the **pencil icon** button and enter your server address, followed by
   `/pos_adyen/notification` in the :guilabel:`Event URLs` field; and
#. click :guilabel:`Save` at the bottom of the screen to save the changes.

Add a new payment method
========================

To add a new **payment method** to a point of sale, go to :menuselection:`Point of Sale -->
Configuration --> Point of Sale`. Then, select the POS and go to :menuselection:`Payments -->
Payment Methods`, and add your new method for Adyen.

Pay with a payment terminal
===========================

When processing a payment, select :guilabel:`Adyen` as the payment method. Check the amount and
click on :guilabel:`Send`. Once the payment is successful, the status changes to :guilabel:`Payment
Successful`.

.. note::
   - | In case of connexion issues between Odoo and the payment terminal, force the payment by
       clicking on :guilabel:`Force Done`, which allows you to validate the order.
     | This option is only available after receiving an error message informing you that the
       connection failed.
   - To cancel the payment request, click on :guilabel:`cancel`.
