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
#. Return to the :guilabel:`Log in with Employees` setting and complete the following fields:

   - :guilabel:`Advanced rights`: Add the employees with **extended POS functionality** access.
   - :guilabel:`Basic rights`: Add the employees with **basic POS functionality** access.
   - :guilabel:`Minimal rights`: Add the employees with **minimal POS functionality** access.

.. note::
   - Leaving the :guilabel:`Minimal rights` and :guilabel:`Basic rights` fields empty allows all
     employees to log in.
   - Leaving the :guilabel:`Advanced rights` field empty grants extended rights to Odoo *users*
     only.

.. tabs::
   .. tab:: Minimal rights

      Employees with minimal rights can perform the following POS-related actions:

      **Register management:**

      - Lock and unlock an open POS register.
      - Reload data.
      - Generate, download and print :ref:`POS reports <pos/analytics>`.
      - Enable :doc:`../hardware_network/pos_lna`.
      - Access the :ref:`orders overview <pos/use/orders>` to search and filter orders.
      - Print or reprint :doc:`invoices <../use/pos_invoices>` and :doc:`receipts <../use/receipts>`
        in the orders overview.

      **Sales transactions:**

      - :ref:`Process standard sales transactions <pos/use/sell>`.
      - :ref:`Assign customers <pos/use/customers>`.
      - :ref:`Add notes to orders <pos/use/notes>`.

      **Pricing and discounts:**

      - :ref:`Enter promotional codes <pos/pricing/loyalty/codes>`.

   .. tab:: Basic rights

      In addition to the minimal rights, employees with basic rights can also:

      **Register management:**

      - :ref:`Open the POS register <pos/use/open-register>`.
      - :ref:`Perform cash-in and cash-out operations <pos/use/cash-register>`.

      **Sales transactions:**

      - :ref:`Create customers <pos/use/customers>`.
      - :ref:`Process refunds <pos/use/refund>`.
      - :ref:`Settle sales orders <pos/shop/so>` from the POS interface.
      - Cancel orders.

      **Pricing and discounts:**

      - Manually select another :ref:`pricelist <pos/pricing/pricelists>`.
      - :ref:`Manually apply discounts <pos/pricing/discounts>`.
      - Manually :ref:`change a product's price <pos/use/sell>`.
      - :ref:`Give loyalty program's rewards <pos/pricing/loyalty>`.
      - Switch between :ref:`fiscal positions <pos/pricing/taxes>`.

   .. tab:: Advanced rights

      In addition to the minimal and basic rights, employees with advanced rights can also:

      - :doc:`Create products <../products>`.
      - Access the Odoo backend interface.
      - :ref:`Close the current POS register <pos/use/register-close>`.

      .. note::
         An employee with advanced POS rights who is not a database user cannot access the backend
         or create products.

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
