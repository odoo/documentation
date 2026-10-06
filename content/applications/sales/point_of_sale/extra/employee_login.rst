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
#. Enable :guilabel:`Log in with Employees`.
#. Click :guilabel:`Save`.
#. Return to the :guilabel:`Log in with Employees` setting and add employees to the following
   fields:

   - :guilabel:`Supervised`
   - :guilabel:`Restrictive`
   - :guilabel:`Cashier`
   - :guilabel:`Manager`

.. tabs::
   .. tab:: Supervised

      Employees with supervised rights can perform the following POS-related actions:

      **Register management:**

      - Lock and unlock an open POS register.
      - Reload data.
      - Enable :doc:`../hardware_network/pos_lna`.
      - Access the :ref:`orders overview <pos/use/orders>` to search and filter orders.

      **Sales transactions:**

      - :ref:`Add products to orders and set product quantities <pos/use/sell>`.
      - :ref:`Scan barcodes <pos/shop/barcodes>`.
      - :ref:`Add notes to orders <pos/use/notes>`.
      - :ref:`View product information <pos/products/information-display>`.
      - :ref:`Apply presets to orders <extra/presets/apply-presets>`.

      **Bookings:**

      - :ref:`Reschedule bookings and update booking stages
        <pos/restaurant/floors/booking/management>`.

   .. tab:: Restrictive

      In addition to the supervised rights, employees with restrictive rights can also:

      **Register management:**

      - :ref:`Open the customer display <pos/hardware_network/open-display>`.
      - Print or reprint :doc:`invoices <../use/pos_invoices>` and :doc:`receipts <../use/receipts>`
        in the orders overview.

      **Sales transactions:**

      - :ref:`Process standard sales transactions <pos/use/sell>`.
      - :ref:`Assign customers <pos/use/customers>`.
      - :ref:`Generate invoices from the POS register <pos/invoices/generate-payment>`.
      - :doc:`Update restaurant orders that have been sent to the kitchen <../restaurant>`.

   .. tab:: Cashier

      In addition to the restrictive rights, employees with cashier rights can also:

      **Register management:**

      - :ref:`Open the POS register <pos/use/open-register>`.
      - :ref:`Perform cash-in and cash-out operations <pos/use/cash-register>`.
      - Install the POS Progressive Web App.

      **Sales transactions:**

      - :ref:`Create and edit customers <pos/use/customers>`.
      - :doc:`Use the Customer Account payment method <../payment_methods/customer_credit>`.
      - :ref:`Split bills <pos/restaurant/bills/splitting>`.
      - :ref:`Favorite products and view product margins and costs
        <pos/products/information-display>`.
      - :ref:`Reorganize the product selector <pos/use/open-register>`.
      - :ref:`Process refunds <pos/use/refund>`.
      - :ref:`Settle sales orders <pos/shop/so>` from the POS interface.
      - Cancel orders.

      **Pricing and discounts:**

      - Manually select another :ref:`pricelist <pos/pricing/pricelists>`.
      - :ref:`Manually apply discounts <pos/pricing/discounts>`.
      - Manually :ref:`change a product's price <pos/use/sell>`. :ref:`Activate the Price Control
        setting <pos/use/sell>` to allow only :ref:`POS Managers <pos/use/access-rights>` to change
        the price.
      - :ref:`Give loyalty program's rewards <pos/pricing/loyalty>`.
      - :ref:`Use gift cards and eWallets <pos/pricing/giftcards_ewallet>`.
      - Switch between :ref:`fiscal positions <pos/pricing/taxes>`.

      **Bookings:**

      - :ref:`Create, edit, and cancel bookings <pos/restaurant/floors/booking/management>`.

   .. tab:: Manager

      In addition to the cashier rights, employees with manager rights can also:

      - :doc:`Create and edit products <../products>`.
      - Edit the payments of paid orders.
      - Access the Odoo backend interface.
      - :ref:`Close the current POS register <pos/use/register-close>`.
      - Generate, download, and print :ref:`POS reports <pos/analytics>`.

      .. note::
         An employee with :guilabel:`Manager` rights who is not a :ref:`database user
         <pos/use/access-rights>` cannot access the backend, the reports, or create products.

.. note::
   - When :guilabel:`Log in with Employees` is enabled, only employees added to the
     :guilabel:`Supervised`, :guilabel:`Restrictive`, :guilabel:`Cashier`, or :guilabel:`Manager`
     fields can log in to the POS register.
   - :ref:`POS managers <pos/use/access-rights>` can only be added to the :guilabel:`Manager` field.

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
