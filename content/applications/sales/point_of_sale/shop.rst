:show-content:

=============
Shop features
=============

.. _pos/shop/so:

Quotations and sales orders
===========================

When working in retail, you might need to access quotations or sales orders created on the Sales app
from the POS register to finalize a sale.

Select a sales order or quotation
---------------------------------

From the POS register, click the :icon:`oi-ellipsis-v` (:guilabel:`vertical ellipsis`) icon and
:icon:`fa-link` :guilabel:`Quotation/Order` to open the list of quotations and sales orders created
from the sales application. When loaded, the sales order reference number is displayed under
the ordered products, next to the :icon:`fa-shopping-basket` (:guilabel:`shopping basket`) icon.

Apply a down payment or settle the order
----------------------------------------

Select a quotation or sales order, and on the pop-up that opens, choose the desired settlement
method. The customer can either:

- Settle the order **completely**: Click :guilabel:`Settle the order` to pay for the total of the
  quotation or sales order.
- Settle the order **partially**:

  #. Select :guilabel:`Apply a down payment (percentage)` or :guilabel:`Apply a down payment
     (fixed amount)` to make a down payment for the selected quotation or sales order.
  #. Enter the percentage or fixed amount the customer is paying, and click :guilabel:`Apply` to add
     the down payment to the cart.

.. image:: shop/so-settle.png
   :alt: settlement possibilities for an so
   :scale: 85 %

.. note::
   Once a sales order is partially settled, the applied down payment is automatically deducted from
   the order's total.

.. Seealso::
   - :doc:`../sales/sales_quotations`
   - :doc:`../sales/invoicing/down_payment`

.. _pos/shop/ship:

Ship later
==========

The **Ship Later** feature allows you to sell products and schedule delivery at a later date. It is
useful, for example, when a product is out of stock or so voluminous that it requires to be shipped,
or when, for any reason, the customer needs their order shipped later, etc.

Configuration
-------------

:ref:`Go to the POS settings <pos/use/settings>`, scroll down to the :guilabel:`Inventory` section,
and enable :guilabel:`Allow Ship Later`.

Once activated, you can:

- Choose the location from where the products are shipped by selecting a :guilabel:`Warehouse`.
- Define a :guilabel:`Specific route`, or leave this field empty to use the default route.
- Define the :guilabel:`Shipping Policy`; select :guilabel:`As soon as possible` if the products
  can be delivered separately, or :guilabel:`When all products are ready` to ship all the products
  at once.

.. seealso::
   - :doc:`../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration`
   - :doc:`../../inventory_and_mrp/inventory/warehouses_storage/inventory_management/warehouses`

Practical application
---------------------

#. :ref:`Access the POS register <pos/use/open-register>` and make a sale.
#. On the payment screen, set a customer and select :guilabel:`Ship Later`.
#. In the pop-up window, set a shipping date and click :guilabel:`Confirm` to proceed to payment.

The system instantly creates a delivery order from the warehouse to the shipping address.

.. Note::
   The selected customer must have referenced an address in the system for products to be shipped.

Barcodes
========

Using a :doc:`barcode scanner <../../inventory_and_mrp/barcode/setup/hardware>` improves efficiency
and provides quicker customer service. In Point of Sale, scanners are used to add products to a
cart, apply discounts, or log employees into the POS register.

Once enabled in the **Inventory** app, you can use the barcode feature with any product that has a
barcode assigned.

.. seealso::
   - :doc:`Set up a barcode scanner <../../inventory_and_mrp/barcode/setup/hardware>`
   - :doc:`Activate barcode scanners <../../inventory_and_mrp/barcode/setup/software>`

Assign barcodes
---------------

To use this feature, :ref:`assign a barcode to your products <inventory/barcode/set-barcodes>`
following the :doc:`default barcode nomenclature <../../inventory_and_mrp/barcode/setup/software>`.
You can also assign barcodes automatically  using the :doc:`barcode lookup feature and database
</applications/inventory_and_mrp/barcode/setup/barcodelookup>`.

.. note::
   Employees can :ref:`log into the POS by scanning a badge <pos/employee-login/user-login>`. To
   configure this feature, open the **Employees** app, select an employee, then, in the
   :guilabel:`HR Settings` tab, fill in the :guilabel:`PIN Code` or :guilabel:`Badge ID`.

.. _pos/shop/discount-tags:

Discount tags
-------------

Discount tags are specific barcodes used to apply a percentage discount to a product. They follow a
specific discount nomenclature that allows the POS to recognize the barcode as a price reduction
rather than a new product. These are commonly used for items nearing their :doc:`expiration date
</applications/inventory_and_mrp/inventory/product_management/product_tracking/expiration_dates>`.

.. example::
   A carton of milk is expiring tomorrow. By scanning a barcode following the discount nomenclature
   (e.g., a barcode starting with `2250`), Odoo automatically applies the defined price reduction of
   50% to the milk during the current transaction.

Barcode nomenclature
--------------------

Barcode nomenclatures explain how barcodes are identified and classified. When a barcode is scanned,
it is linked to the first rule that matches its pattern. This pattern syntax adheres to a
standardized method of prefix matching; a barcode is considered a match if its prefix aligns with
the pattern.

Patterns also define how numerical values —such as weight, price, or percentage— are encoded into
the barcode. These are indicated by `{NNN}`, where the `N`'s define the position of the digits.

To view or edit these rules, go to the :ref:`POS settings <pos/use/settings>`, scroll to the
:guilabel:`Inventory` section, and click the :icon:`oi-arrow-right` (:guilabel:`Internal Link`) icon
next to :guilabel:`Barcode Nomenclature`.

For discount tags, use the :guilabel:`Discount Barcodes` rule. The default pattern is
:guilabel:`22{NN}`, meaning the barcode must start with `22`, followed by two digits representing
the discount percentage.

.. image:: shop/barcode-nom.png
   :alt: discount tags nomenclature setting form
   :scale: 85%

.. tip::
   To allow for three-digit discounts (such as `100%`), add an extra `N` to the :guilabel:`Barcode
   Pattern` field (e.g., `22{NNN}`).

.. seealso::
   :doc:`/applications/inventory_and_mrp/barcode/operations/barcode_nomenclature`

Use
---

To use discount tags, scan the product barcode or manually add it to the cart. Then, scan the
discount tag. The discount is automatically applied to the last product added to the cart.
