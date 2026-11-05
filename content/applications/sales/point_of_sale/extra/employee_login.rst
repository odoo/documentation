=========================
Multi-employee management
=========================

Odoo Point of Sale allows you to :ref:`configure different access levels
<pos/employee_login/configuration>` for employees and define which ones are authorized to log in to
the :ref:`POS register <pos/use/open-register>` and switch between employees :ref:`using a
PIN code or an employee badge <pos/employee-login/user-login>`.

.. _pos/employee_login/configuration:

Configuration
=============

To configure access levels for a point of sale, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings` and select the relevant
   :guilabel:`Point of Sale`.
#. Scroll down to the :guilabel:`PoS Interface` section.
#. Enable :guilabel:`Log in with Employees` and add employees to the following categories, ordered
   from least rights to most rights:

   - :guilabel:`Supervised`
   - :guilabel:`Restrictive`
   - :guilabel:`Cashier`
   - :guilabel:`Manager`

#. Click :guilabel:`Save`.

.. note::
   - When :guilabel:`Log in with Employees` is enabled, only employees added to the
     :guilabel:`Supervised`, :guilabel:`Restrictive`, :guilabel:`Cashier`, or :guilabel:`Manager`
     categories can log in to the POS register.
   - :ref:`POS managers <pos/use/access-rights>` can only be added to the :guilabel:`Manager`
     category.

Permissions by employee category
--------------------------------

.. |yes| raw:: html

   <span class="text-success" role="img" aria-label="Yes" style="font-size: 28px; font-weight: bold; line-height: 28px; display: inline-block; vertical-align: middle;">✓</span>

.. |no| raw:: html

   <span class="text-danger" role="img" aria-label="No" style="font-size: 28px; font-weight: bold; line-height: 28px; display: inline-block; vertical-align: middle;">✕</span>

Register management
~~~~~~~~~~~~~~~~~~~

The following table lists actions that are performed in the POS header or in the POS launch screen:

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 36 16 16 16 16

   * - Action
     - Supervised
     - Restrictive
     - Cashier
     - Manager
   * - Lock and unlock an open POS register
     - |yes|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Open the POS register <pos/use/open-register>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Perform cash-in and cash-out operations <pos/use/cash-register>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Close the current POS register <pos/use/register-close>`
     - |no|
     - |no|
     - |no|
     - |yes|
   * - :ref:`Access the orders overview to search and filter orders <pos/use/orders>`
     - |yes|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Print or reprint invoices and receipts in the orders overview <pos/use/orders>`
     - |no|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Edit the payments of paid orders in the orders overview <pos/use/orders>`
     - |no|
     - |no|
     - |no|
     - |yes|
   * - Reload data
     - |yes|
     - |yes|
     - |yes|
     - |yes|
   * - :doc:`Enable Local Network Access <../hardware_network/pos_lna>`
     - |yes|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Open the customer display <pos/hardware_network/open-display>`
     - |no|
     - |yes|
     - |yes|
     - |yes|
   * - Install the POS Progressive Web App
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Create products <pos/products/creation>`
     - |no|
     - |no|
     - |no|
     - |yes|
   * - Print POS session reports
     - |no|
     - |no|
     - |no|
     - |yes|
   * - Access the Odoo backend interface
     - |no|
     - |no|
     - |no|
     - |yes|

.. note::
   Only the logged-in :ref:`database user <pos/use/access-rights>` can go to the backend from the
   POS register.

Sales transactions
~~~~~~~~~~~~~~~~~~

The following table lists actions related to sales transactions that are performed in the POS
register:

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 36 16 16 16 16

   * - Action
     - Supervised
     - Restrictive
     - Cashier
     - Manager
   * - :ref:`Apply presets to orders <extra/presets/apply-presets>`
     - |yes|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Add products to orders and set product quantities <pos/use/sell>`
     - |yes|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Add notes to orders <pos/use/notes>`
     - |yes|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Process standard sales transactions <pos/use/sell>`
     - |no|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Assign customers <pos/use/customers>`
     - |no|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Create and edit customers <pos/use/customers>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`View product information <pos/products/information-display>`
     - |yes|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Favorite products and view product margins and costs
       <pos/products/information-display>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Reorganize the product selector <pos/use/open-register>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Edit products <pos/products/information-display>`
     - |no|
     - |no|
     - |no|
     - |yes|
   * - :doc:`Update restaurant orders that have been sent to the kitchen <../restaurant>`
     - |no|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Process refunds <pos/use/refund>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Settle sales orders from the POS interface <pos/shop/so>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - Cancel orders
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Generate invoices from the POS register <pos/invoices/generate-payment>`
     - |no|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Split bills <pos/restaurant/bills/splitting>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :doc:`Use the Customer Account payment method <../payment_methods/customer_credit>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Scan barcodes <pos/shop/barcodes>`
     - |yes|
     - |yes|
     - |yes|
     - |yes|

Pricing and discounts
~~~~~~~~~~~~~~~~~~~~~

The following table lists pricing-related actions that are performed in the POS register:

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 36 16 16 16 16

   * - Action
     - Supervised
     - Restrictive
     - Cashier
     - Manager
   * - :ref:`Select a pricelist <pos/pricing/pricelists>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Apply discounts <pos/pricing/discounts>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Change a product's price <pos/use/sell>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Switch between fiscal positions <pos/pricing/taxes>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Give loyalty program's rewards <pos/pricing/loyalty>`
     - |no|
     - |no|
     - |yes|
     - |yes|
   * - :ref:`Use gift cards and eWallets <pos/pricing/giftcards_ewallet>`
     - |no|
     - |no|
     - |yes|
     - |yes|

.. note::
   :ref:`Activate the Price Control setting <pos/use/sell>` to allow only :ref:`POS Managers
   <pos/use/access-rights>` to change the price.

Bookings
~~~~~~~~

The following table lists actions related to bookings that are performed in the :guilabel:`Booking`
POS interface:

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 36 16 16 16 16

   * - Action
     - Supervised
     - Restrictive
     - Cashier
     - Manager
   * - :ref:`Reschedule bookings and update booking stages
       <pos/restaurant/floors/booking/management>`
     - |yes|
     - |yes|
     - |yes|
     - |yes|
   * - :ref:`Create, edit, and cancel bookings <pos/restaurant/floors/booking/management>`
     - |no|
     - |no|
     - |yes|
     - |yes|

.. seealso::
   :doc:`/applications/general/users/access_rights`

.. _pos/employee_login/badge-configuration:

Badge configuration
-------------------

Employees can :ref:`log in using a badge <pos/employee-login/user-login>`. To configure
badge-based login, assign a unique badge ID to the employee's profile in the :guilabel:`Employees`
app:

#. Open the :guilabel:`Employees` app and select the relevant employee.
#. Go to the :guilabel:`Settings` tab.
#. The :guilabel:`Attendance/Point of Sale/Manufacturing` category offers two options:

   - Manually enter any badge ID in the :guilabel:`Badge ID` field.
   - Click :guilabel:`Generate` to automatically generate a unique badge ID.

#. Click :guilabel:`Print Badge` to generate a barcode representation of the assigned badge ID.

.. _pos/employee_login/pin:

PIN code setup
--------------

For enhanced security, employees can be required to enter a PIN code each time they log in to the
POS register. To set up a PIN code for an employee:

#. Open the **Employees** app and select the relevant employee.
#. Go to the :guilabel:`Settings` tab.
#. Enter a numerical code in the :guilabel:`PIN Code` field of the :guilabel:`Attendance/Point of
   Sale/Manufacturing` category.

.. _pos/employee-login/user-login:

Employee login
==============

Once the :guilabel:`Log in with Employees` setting is enabled, employees must log in to :ref:`access
the POS register <pos/use/open-register>`. They can :ref:`scan their employee badge
<pos/employee-login/user-login>`, click the :icon:`fa-users` icon (:guilabel:`users`) to select
their name from the list of authorized employees, or enter :ref:`their PIN code
<pos/employee_login/pin>` in the :guilabel:`Enter your PIN` field.

.. image:: employee_login/log-in.png
   :alt: Login window to access the register when the multiple cashiers feature is active

To switch between employees from the :ref:`POS register <pos/use/open-register>`, click the
currently logged-in employee's name at the top right of the POS interface and select the employee to
switch to. Alternatively, click the :icon:`fa-unlock` (:guilabel:`Lock`) icon in the upper-right
corner to lock the register, allowing the next employee to log in.

.. note::
   If a PIN code is associated with an employee, they will be asked to enter it even after scanning
   the badge or selecting their name.

.. tip::
   In the absence of a scanner, click the :icon:`fa-barcode` icon (:guilabel:`barcode`) to scan
   barcodes using your device's webcam.
