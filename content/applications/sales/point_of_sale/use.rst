:show-content:

===
Use
===

.. _pos/use/create-pos:

Create a POS
============

If no point of sale exists yet in the database, a set of POS cards is displayed on the Point of Sale
:guilabel:`Dashboard`. Each card represents a business type. Click a card to create a POS with
preconfigured settings tailored to that type. These settings can be adjusted later as needed.

To create additional POS or to create one from scratch, go to :menuselection:`Point of Sale -->
Configuration --> Point of Sales` and click :guilabel:`New`. Then, configure the :ref:`POS settings
<pos/use/settings>` to meet your specific business requirements.

.. important::
   Assign a unique :doc:`cash payment method <../point_of_sale/payment_methods>` and :ref:`cash
   journal <accounting/journals/cash>` to each POS. This ensures that accounting entries are
   separated and traceable to specific points of sale.

.. _pos/use/settings:

Access the POS settings
=======================

To access the general POS settings, go to :menuselection:`Point of Sale --> Configuration -->
Settings`. Then, open the dropdown menu in the :guilabel:`Point of Sale` field and select the POS to
configure.

.. image:: use/select-pos-dropdown.png
   :alt: Dropdown menu to select the POS in the app settings

.. tip::
   To configure basic settings from the dashboard, click the :icon:`fa-ellipsis-v`
   (:guilabel:`vertical ellipsis`) icon on a POS card and :guilabel:`Edit`. In the popup window, you
   can:

   - :doc:`Enable multiple employees to log in. <employee_login>`
   - :doc:`Connect and set up an IoT sytem. <configuration/pos_iot>`
   - :doc:`Connect and set up an ePOS printer. <configuration/epos_ssc>`

Daily POS actions
=================

.. _pos/use/open-register:

Open the POS register
---------------------

Once the POS is fully :doc:`configured <configuration>`, access the POS interface by opening the
register. Navigate to :menuselection:`Point of Sale --> Dashboard` and:

#. On the relevant POS card, click :guilabel:`Open Register`.
#. In the :guilabel:`Opening Control` popup, ensure the :guilabel:`Opening cash` amount is correct.
#. Click :guilabel:`Open Register` again.

.. note::
   - Once the register is open, :guilabel:`Open Register` is replaced by :guilabel:`Continue
     Selling` on the POS card.
   - The POS register does not need to be closed to switch between :doc:`multiple users
     <employee_login>`, provided :ref:`multi-employee management is enabled
     <pos/employee_login/use>`.

From the top header of the POS interface:

- Click :guilabel:`Register` to access the register for daily POS actions such as :ref:`sales
  <pos/use/sell>`, :ref:`refunds <pos/use/refund>`, etc.
- Click :guilabel:`Orders` to access the POS :ref:`orders <pos/use/orders>` overview screen to
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
-------------

The POS register can be divided into three sections: the cart, a numpad to adjust cart items, apply
discounts, set customers, etc., and the list of products. To make sales:

#. Click on products to add them to the cart.

   - To change the **quantity**, click :guilabel:`Qty` and enter the number of products using the
     keypad.
   - To add a **discount**, click :guilabel:`% Disc` and enter the discount value using the keypad.
   - To modify the product **price**, click :guilabel:`Price` and enter new product price using the
     keypad.
#. Once an order is completed, proceed to checkout by clicking :guilabel:`Payment`.

   #. Select the **payment method**.
   #. Enter the received amount.
   #. Click :guilabel:`Validate`.
#. Finally, click :guilabel:`New Order` to move on to the next customer.

.. image:: use/pos-register.png
   :alt: POS register
   :scale: 45 %

.. tip::
   - You can use both `,` and `.` on the keyboard as decimal separators.
   - **Cash** is selected by default if no payment method is manually selected.

.. _pos/use/customers:

Set customers
-------------

Registering customers is necessary to :doc:`collect their loyalty points and grant them rewards
<pricing/loyalty>`, automatically apply an :doc:`attributed pricelist
<pricing/pricelists>`, or :ref:`generate and print invoices <pos_invoices/invoices>`.

To create customers from :ref:`the POS register <pos/use/open-register>`:

#. Click :guilabel:`Customer`.
#. Click :guilabel:`Create`.
#. Complete the customer form information and save.

To create customers from the backend:

#. Go to :menuselection:`Point of Sale --> Orders --> Customers`.
#. Click :guilabel:`New`.
#. Fill in the customer form information.

To assign a customer to an order, click :guilabel:`Customer` to access the customer list on the POS
register or the payment screen, and select the desired customer.

.. note::
   Creating a new customer from the POS register or the payment screen assign them automatically to
   the current order upon saving.

Store contact details
---------------------

Customers' contact details, such as their phone number or email addresses, are stored
automatically when sending :doc:`receipts <use/receipts>` by email, SMS or Whatsapp. Once stored,
contact details can be used, for instance, for :doc:`marketing <../../marketing>` purposes.

To send marketing messages manually from the POS application, go to
:menuselection:`Point of Sale --> Orders --> Orders`, open a POS order form, navigate to the
:guilabel:`Contact Info` category under the :guilabel:`Extra Info` tab, then click the email icon or
whatsapp icon.

.. seealso::
   - :doc:`../../marketing/email_marketing`
   - :doc:`../../marketing/sms_marketing`
   - :doc:`../../productivity/whatsapp`

.. _pos/use/refund:

Return and refund products
--------------------------

To refund a returned product, follow these steps:

#. :ref:`Open the register <pos/use/open-register>` from the **POS dashboard**.
#. Click the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) button, then :icon:`fa-undo`
   :guilabel:`Refund`.

   .. note::
      Alternatively, you can refund orders from the :ref:`orders overview <pos/use/orders>` screen.
      Access the list of orders, and filter them based on their status to only display
      :guilabel:`Paid` orders.
#. Select the relevant order from the orders list.
#. Select items and use the keypad to set the quantity to refund, then click :guilabel:`Refund`.
#. Click :guilabel:`Payment` and select the appropriate refund payment method.
#. Click :guilabel:`Validate` and print the receipt if needed.
#. Click :guilabel:`New Order` to proceed to the next customer.

.. tip::
   - To filter the **orders list** by :guilabel:`Order number`, :guilabel:`Receipt Number`,
     :guilabel:`Date`, or :guilabel:`Customer`, enter a value in the search bar and choose the
     relevant filter from the dropdown menu.
   - When the total amount is negative, adding a gift card to the cart automatically adjusts the
     gift card balance to match that amount.

.. note::
   Alternatively, a refund can be processed by:

   - Selecting the returned product(s) from the POS register and setting a negative quantity equal
     to the number of returned items. To do so, click :guilabel:`Qty` and :guilabel:`+/-`, and
     update the quantity accordingly.
   - Selecting the returned product(s) from the POS register and a preset set up for the return
     mode.
   - Starting from the POS dashboard, navigating to :menuselection:`Point of Sale --> Orders -->
     Orders`, selecting an order, and clicking :guilabel:`Return Products`.

Once the return payment is validated, Odoo generates the required credit note, referencing the
original :doc:`receipt <use/receipts>` or :doc:`invoice  <use/pos_invoices>` and partially or fully
canceling the entry.

.. _pos/use/orders:

Orders overview
---------------

The :guilabel:`Orders` overview allows for viewing, searching, and retrieving orders from the POS
interface. To access it, click :guilabel:`Orders` on the interface top header.

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
   - If using :ref:`presets <pos/restaurant/orders/preset>`, click one to view the related orders.
     Click it again to return to the main overview.

.. _pos/use/customer-notes:

Notes
-----

Notes allow you to attach extra information to specific products. There are two types: internal
notes for staff and customer notes for the buyer.

Internal Notes
~~~~~~~~~~~~~~

Internal notes provide information meant for staff (e.g., `no tomato` for the kitchen). These notes
do not appear on the customer’s receipt. To add a note to an item, select it from the cart, click
:guilabel:`Note`, and add or modify the note's content in the popup that opens:

     - Type the note directly into the window, or
     - Use a configured note model to save time if the same content is frequently used. Click on the
       desired note model to insert its text.

To set up note models, navigate to :menuselection:`Point of Sale --> Configuration --> Note Models`,
click :guilabel:`New`, and enter the desired text.

Customer notes
~~~~~~~~~~~~~~

Notes for customers appear on :doc:`receipts <use/receipts>` and :doc:`invoices
<use/pos_invoices>`. These notes are tied to specific products. As an example, they can be used for
providing warranty details for a high-value item or specific care instructions, such as `Dry clean
only`.

To add a **customer note** from the :ref:`POS register <pos/use/open-register>`, select a product
from the cart. Then, click the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) button, and
:guilabel:`Customer Note`. Finally, add or modify the note's content in the popup window.

.. note::
   Product notes from an :doc:`imported SO <shop/sales_order>` are displayed identically in the
   cart.

.. image:: use/customer-notes.png
   :alt: Customer note button and notes (SO and POS register) on products in the cart
   :scale: 50 %

.. _pos/use/cash-register:

Manage the cash register
------------------------

Odoo POS allows you to determine which coins and bills are accepted. To set up the allowed coins and
bills:

#. Navigate to :menuselection:`Point of Sale --> Configuration --> Coins/Bills`.
#. Click :guilabel:`New` to add a new value.
#. Select the POS where this value is available in the :guilabel:`Point of Sale` column.

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
----------------------

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
   - To cancel the operation, click :guilabel:`Discard` on the pop-up window.
   - When the money counted does **not** match the expected amount, a :guilabel:`Payments
     Difference` window automatically pops up. Selecting :guilabel:`Proceed Anyway` validates the
     session and automatically posts the discrepancy to the designated cash difference journal.
   - Closing the register of a :doc:`restaurant <restaurant>` POS when orders are still in draft
     for the day is not allowed and opens a pop-up window on which you can either :guilabel:`Review
     Orders` or :guilabel:`Cancel Orders`.
   - It is strongly advised to close your POS register at the end of each day.

.. toctree::
   :titlesonly:

   use/receipts
   use/pos_invoices
