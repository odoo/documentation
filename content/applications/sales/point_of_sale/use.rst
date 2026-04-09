:show-content:

===
Use
===

This section covers the essential daily operations of the Point of Sale, from initial setup and
configuration to managing sales transactions, customer records, and receipt/invoice handling.

.. cards::

   .. card:: Receipts
      :target: use/receipts
      :large:

      Set up automatic printing, customize headers and footers, and learn how to reprint
      past receipts.

   .. card:: Invoices
      :target: use/pos_invoices
      :large:

      Configure default invoicing parameters, issue invoices during checkout, and manage
      reprinting or emailing them later.

.. _pos/use/create-pos:

Create a POS
============

If no point of sale exists yet in the database, a set of POS cards is displayed on the Point of Sale
:guilabel:`Dashboard`. Each card represents a business type. Click a card to create a POS with
preconfigured settings tailored to that type. These settings can be adjusted later as needed.

To create additional POS or to create one from scratch, go to :menuselection:`Point of Sale -->
Configuration --> Point of Sales` and click :guilabel:`New`. Then, configure the :ref:`POS settings
<pos/use/settings>` to meet your specific business requirements.

.. note::
   Click :guilabel:`Configurations > Settings` to access more settings.

.. important::
   - To prevent the POS app tab from slowing down, disable the `Memory Saver
     <https://support.google.com/chrome/answer/12929150?hl=en#zippy=%2Cturn-memory-saver-on-or-off>`_
     setting in Google Chrome.
   - Assign a dedicated :doc:`cash payment method <../point_of_sale/payment_methods>` and :ref:`cash
     journal <accounting/journals/cash>` to each POS. This ensures that accounting entries are
     separated and traceable to specific points of sale.

.. _pos/use/settings:

Access the POS settings
=======================

To access the general POS settings, go to :menuselection:`Point of Sale --> Configuration -->
Settings`. Then, open the :guilabel:`Point of Sale` dropdown menu and select the POS to configure.

.. image:: use/select-pos-dropdown.png
   :alt: Dropdown menu to select the POS in the app settings

.. tip::
   To configure basic settings, access the POS dashboard, click the :icon:`fa-ellipsis-v`
   (:guilabel:`vertical ellipsis`) icon on the relevant POS card, then select :guilabel:`Edit`.
   In the popup window, you can:

   - :doc:`Enable multiple employees to log in. <extra/employee_login>`
   - :doc:`Connect and set up an IoT sytem. <hardware_network/pos_iot>`
   - :doc:`Connect and set up an ePOS printer. <hardware_network/epos_ssc>`

.. _pos/use/open-register:

Open the POS register
=====================

Once the POS is fully :doc:`configured <hardware_network>`, access the POS interface by opening the
register. Navigate to :menuselection:`Point of Sale --> Dashboard` and:

#. On the relevant POS card, click :guilabel:`Open Register`.
#. In the :guilabel:`Opening Control` popup, ensure the :guilabel:`Opening cash` amount is correct.
#. Click :guilabel:`Open Register`.

.. note::
   - Once the register is open, :guilabel:`Open Register` is replaced by :guilabel:`Continue
     Selling` on the POS card.
   - You can switch between :doc:`multiple users <extra/employee_login>` from an open POS register,
     provided :ref:`multi-employee management is enabled <pos/employee_login/use>`.

From the POS interface header:

- Click :guilabel:`Register` to access the register for daily POS actions such as :ref:`sales
  <pos/use/sell>`, :ref:`refunds <pos/use/refund>`, etc.
- Click :guilabel:`Orders` to access the POS :ref:`orders <pos/use/orders>` overview screen and
  retrieve past or ongoing orders.
- Click the :icon:`fa-plus-circle` :guilabel:`(plus)` icon to put the current order aside and start
  a new one.
- Click the order numbers to switch between ongoing orders.
- Search for products using the search bar.
- Click the :icon:`fa-barcode` (:guilabel:`barcode`) icon to use a webcam as a barcode scanner.
- Click the user's avatar to switch between employees, provided :ref:`multi-employee management is
  enabled <pos/employee_login/use>`.
- Click the :icon:`fa-bars` (:guilabel:`hamburger menu`) icon to access more advanced options, such
  as :ref:`closing the register <pos/use/register-close>`.

.. _pos/use/sell:

Sell products
=============

The POS register can be divided into three sections: the cart, a pad to adjust cart items, apply
discounts, set customers, etc., and the list of products. To make sales:

#. Click on products to add them to the cart.

   - To change the **quantity**, click :guilabel:`Qty` and enter the number of products using the
     keypad.
   - To add a **discount**, click :guilabel:`%` and enter the discount value using the keypad.
   - To modify the product **price**, click :guilabel:`Price` and enter the new amount using the
     keypad.
#. Once the order is completed, click :guilabel:`Payment` to proceed to checkout.
#. Select the :doc:`payment method <payment_methods>`.
#. Enter the received amount, then click :guilabel:`Validate`.
#. Click :guilabel:`New Order` to move on to the next order.

.. image:: use/pos-register.png
   :alt: POS register

.. note::
   After clicking :guilabel:`Validate`, the order :ref:`receipt
   <pos/configuration/receipt-configuration>` can be sent via email, SMS, or WhatsApp from the
   :guilabel:`Receipt` screen.

.. tip::
   - You can use both `,` and `.` on the keyboard as decimal separators.
   - **Cash** is selected by default if no :doc:`payment method <payment_methods>` is manually
     selected.

.. _pos/use/customers:

Set customers
=============

Registering customers is necessary to :ref:`collect their loyalty points and grant them rewards
<pos/pricing/loyalty>`, automatically apply an :ref:`attributed pricelist
<pos/pricing/pricelists>`, or :ref:`generate and print invoices <pos/invoices/invoices>`.

To create customers from :ref:`the POS register <pos/use/open-register>`:

#. Click :guilabel:`Customer`.
#. Click :guilabel:`Create`.
#. Complete the customer form information and save.

To create customers from the backend:

#. Go to :menuselection:`Point of Sale --> Orders --> Customers`.
#. Click :guilabel:`New`.
#. Fill in the customer form information.

To assign a customer to an order, click :guilabel:`Customer` to open the :guilabel:`Choose customer`
pop-up on the POS register or the payment screen, and select the desired customer. To change the
customer, click their name in the pad, then select another one.

.. tip::
   To edit the customer's details, click the customer's name in the pad, then click the
   :icon:`fa-bars` (:guilabel:`hamburger menu`) icon next to the relevant customer and select
   :guilabel:`Edit Details`.

.. note::
   Creating a new customer from the POS register or the payment screen assigns them automatically to
   the current order upon saving.

Send marketing messages
-----------------------

Customers' contact details, such as their phone number or email addresses, are stored
automatically when sending :doc:`receipts <use/receipts>` by email, SMS or Whatsapp. They can then
be used, for example, for :doc:`marketing <../../marketing>` purposes.

To send marketing messages manually from the POS application, go to :menuselection:`Point of Sale
--> Orders --> Orders`, open a POS order form, navigate to the :guilabel:`Contact Info` category
under the :guilabel:`Extra Info` tab, then click the :icon:`fa-envelope` (:guilabel:`email`) icon or
:icon:`fa-whatsapp` (:guilabel:`whatsapp`) icon.

.. seealso::
   - :doc:`../../marketing/email_marketing`
   - :doc:`../../marketing/sms_marketing`
   - :doc:`../../productivity/whatsapp`

.. _pos/use/orders:

Orders overview
===============

The :guilabel:`Orders` overview allows for viewing, searching, and retrieving orders from the POS
interface. To access it, click :guilabel:`Orders` in the header.

Then, search for orders in the search bar using their:

- :guilabel:`Reference`
- :guilabel:`Receipt Number`
- :guilabel:`Date`
- :guilabel:`Customer`
- :guilabel:`Delivery Channel`
- :guilabel:`Delivery Order Status`

To filter orders based on their status, click the :guilabel:`Active` dropdown menu and select one of
the following options:

- :guilabel:`Active`: Orders currently in progress. This includes orders marked as
  :guilabel:`Ongoing`, as well as those in the :guilabel:`Payment` or the :guilabel:`Receipt` stages
  (i.e., orders for which the receipt has been emailed to the customer).
- :guilabel:`Paid`: Paid orders.

To navigate between pages, click the :icon:`fa-caret-left` or :icon:`fa-caret-right`
(:guilabel:`caret`) icon.

To access an order in the register, click it, then click :guilabel:`Load Order`.

.. note::
   Paid orders can be :ref:`refunded <pos/use/refund>`.

.. tip::
   - To define the number of orders visible on a page, click `1-x / x`. Enter a number lower than
     the total number of pages, and click :guilabel:`Ok`.
   - Click the :icon:`fa-trash` (:guilabel:`trash`) icon next to an :guilabel:`Active` order to
     delete it.
   - If using :doc:`presets <extra/presets>`, click one to view the related orders. Click it again
     to return to the main overview.

.. _pos/use/refund:

Return and refund products
==========================

To refund a returned product, follow these steps:

#. :ref:`Open or access the register <pos/use/open-register>` from the POS dashboard.
#. Click the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) button, then :icon:`fa-undo`
   :guilabel:`Refund`.

   .. note::
      Alternatively, you can refund orders from the :ref:`orders overview <pos/use/orders>` screen.
      Access the list of orders and filter them by status to display only :guilabel:`Paid` orders.

#. Select the relevant order from the order list.
#. Select the items and use the keypad to set the refund quantity, then click :guilabel:`Refund`.
#. Choose how to handle the refund:

   - To reimburse the customer, select a payment method on the payment screen, then click
     :guilabel:`Validate`.
   - To issue a :ref:`gift card <ewallet_gift/gift-cards>` for the refund amount, click
     :guilabel:`Back`. A new order containing the returned items (with negative quantities) is
     created automatically. Then, add the gift card from the product list to the order; its value
     is set automatically to match the total refund amount. Click :guilabel:`Payment`, then
     :guilabel:`Validate` the refund.

.. note::
   - You cannot add other products to the cart until the refund has been validated.
   - Alternatively, refunds can be processed by:

      - Selecting the returned product(s) from the POS register and setting a negative quantity
        equal to the number of returned items. To do so, click :guilabel:`Qty` and :guilabel:`+/-`,
        and update the quantity accordingly.
      - Selecting the returned product(s) from the POS register and a :doc:`preset
        <extra/presets>` set up for the return mode.
      - Accessing the POS dashboard, navigating to :menuselection:`Point of Sale --> Orders -->
        Orders`, selecting an order, and clicking :guilabel:`Return Products`.

Once the return is validated, a corresponding credit note is generated, referencing the original
:doc:`receipt <use/receipts>` or :doc:`invoice <use/pos_invoices>`.

.. seealso::
   :doc:`/applications/finance/accounting/customer_invoices/credit_notes`

.. _pos/use/notes:

Notes
=====

Notes allow you to attach extra information to specific products in an order. There are two types of
notes: internal notes and customer notes.

.. note::
   Any notes added to a product from the :ref:`POS register <pos/use/open-register>` are displayed
   on the :doc:`customer display <../point_of_sale/hardware_network/customer_display>`.

Internal notes
--------------

Internal notes provide information meant for staff (e.g., `no tomato` for the kitchen). These notes
do not appear on the customer’s receipt. To add a note to an order, ensure no item is selected and
click :guilabel:`Note`. Likewise, to add a note to one specific item, select it from the cart and
click :guilabel:`Note`. Then, add or modify the note's content in the popup that opens:

     - Type the note directly into the window, or
     - Use a configured note model to save time if the same content is frequently used. Click on the
       desired note model to insert its text.

To create or edit note models, navigate to :menuselection:`Point of Sale --> Configuration -->
Note Models`, click :guilabel:`New` or the relevant note model, then complete or edit the
:guilabel:`Name` column.

Customer notes
--------------

Notes for customers appear on :doc:`receipts <use/receipts>` and :doc:`invoices <use/pos_invoices>`.
They can be used, for example, to provide warranty details for a high-value item or specific care
instructions, such as `Dry clean only`.

To add a **customer note** from the :ref:`POS register <pos/use/open-register>` to a specific item,
select a product from the cart and click the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`)
button. Click :guilabel:`Customer Note`, then add the note's content in the popup window.

.. note::
   - If no item is selected, the note applies for the whole order.
   - Product notes from an :ref:`imported SO <pos/shop/so>` are displayed identically in
     the cart.

.. image:: use/customer-notes.png
   :alt: Customer note button and notes (SO and POS register) on products in the cart

.. _pos/use/cash-register:

Manage the cash register
========================

Odoo POS allows you to determine which coins and bills are accepted. To set up the allowed coins and
bills:

#. Navigate to :menuselection:`Point of Sale --> Configuration --> Coins/Bills`.
#. Click :guilabel:`New` to add a new value.
#. Select the POS where this value is available in the :guilabel:`Point of Sale` column or leave the
   field empty to make it available for all POS.

To record a cash in or cash out transaction not associated with a sale:

#. Click the :icon:`fa-bars` (:guilabel:`hamburger menu`) icon on the POS interface.
#. Click :guilabel:`Cash In/Out`.
#. In the popup that opens, select :guilabel:`Cash In` or :guilabel:`Cash Out`.
#. Enter the amount.
#. Specify the reason for the addition or removal of cash, and :guilabel:`Confirm`.

.. note::
   Only employees with :ref:`basic or advanced access rights <pos/employee_login/configuration>`
   are allowed to perform cash in/out actions.

.. _pos/use/register-close:

Close the POS register
======================

To close the POS register, click the :icon:`fa-bars` (:guilabel:`hamburger menu`) icon, then
:guilabel:`Close Register`.

In the :guilabel:`Closing Register` pop-up that opens, you can view:

- The number of orders and the total amount made during the session.
- The expected amounts grouped by payment method.

#. Click :icon:`fa-money` (:guilabel:`money`) to specify the number of each coin and bill.
#. Click :guilabel:`Confirm` to return to the previous pop-up window. The computed amount is set in
   the :guilabel:`Cash Count` field, and the :guilabel:`Closing Details` are specified in the
   :guilabel:`Closing Note` section.
#. Click :guilabel:`Close Register` to close the register and post accounting entries.

.. tip::
   Click :icon:`fa-clone` (:guilabel:`clone`) to automatically fill in the field with the expected
   cash amount.

.. note::
   - When the money counted does **not** match the expected amount, a :guilabel:`Payments
     Difference` window automatically pops up. Selecting :guilabel:`Proceed Anyway` validates the
     session and automatically posts the discrepancy to the designated cash difference journal.
   - Closing the register of a :doc:`restaurant <restaurant>` POS when orders are still in draft
     and not scheduled for later is not allowed and opens a pop-up window on which you can either
     :guilabel:`Review Orders` or :guilabel:`Cancel Orders`.
   - It is strongly advised to close the POS register at the end of each day.

.. seealso::
   - :doc:`shop`
   - :doc:`restaurant`

.. toctree::
   :titlesonly:

   use/receipts
   use/pos_invoices
