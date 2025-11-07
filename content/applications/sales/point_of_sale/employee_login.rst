=========================
Multi-employee management
=========================

Odoo Point of Sale (POS) offers a **Log in with Employees** feature, allowing multiple users to
:ref:`log into a POS session <pos/employee_login/use>`. Activating this feature enables the
following actions:

- Select specific users who can :ref:`log into the POS <pos/employee_login/use>`.
- :ref:`Assign minimal, basic or advanced permissions <pos/employee_login/configuration>` to these
  users.
- :ref:`Track the employees involved in each order for enhanced analytics <pos/analytics>`.

.. _pos/employee_login/configuration:

Configuration
=============

Access the multi-employee setting from the :guilabel:`PoS Interface` section of the :ref:`POS
settings <configuration/settings>`. Then,

#. Activate the :guilabel:`Log in with Employees` feature.
#. Add the employees with **basic POS functionality** access in the :guilabel:`Basic rights` field.
#. Add the employees with **extended POS functionalities** in the :guilabel:`Advanced rights` field.
#. Add the employees with **minimal POS functionality** access in the :guilabel:`Minimal rights`
   field.

.. image:: employee_login/activate-setting.png
   :alt: setting to enable multiple cashiers in POS

.. note::
   - Leaving the :guilabel:`Minimal rights` and :guilabel:`Basic rights` field empty allows all
     employees to log in.
   - Leaving the :guilabel:`Advanced rights` field empty grants extended rights to Odoo users only.

.. tip::
   Click the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) button on the top right corner of
   a POS card and :guilabel:`Edit` to access the setting from the main POS dashboard.

.. seealso::
   :doc:`../../general/users/access_rights`

.. tabs::
   .. tab:: Minimal rights

      Employees with minimal rights can perform the following actions within the POS:

      **Session management:**

      - Lock and unlock an open POS session.
      - Reload data.

      **Sales transactions:**

      - :ref:`Process standard sales transactions <pos/sell>`.
      - :ref:`Set customers <pos/customers>`.
      - :ref:`Add notes to orders <pos/customer-notes>`.

      **Pricing and discounts:**

      - Enter promotional codes.

   .. tab:: Basic rights

      In addition to the minimal rights, employees with basic rights can also:

      **Session management:**

      - :ref:`Open a POS session <pos/session-start>`.
      - :ref:`Perform cash-in and cash-out operations <pos/cash-register>`.

      **Sales transactions:**

      - :ref:`Create customers <pos/customers>`.
      - :ref:`Process refunds <pos/refund>`.
      - :doc:`Access and handle sales orders <shop/sales_order>`.
      - Access past and current order history.
      - Cancel orders.

      **Pricing and discounts:**

      - Manually select another :doc:`pricelist <pricing/pricelists>`.
      - :doc:`Manually apply discounts <pricing/discounts>`.
      - Manually :ref:`change a product's price <pos/sell>`.
      - Give loyalty program's rewards.
      - Switch between :doc:`fiscal positions <pricing/fiscal_position>`.

   .. tab:: Advanced rights

      In addition to the minimal and basic rights, employees with advanced rights can also:

      - Create products.
      - Access the Odoo backend interface.
      - :ref:`Close the current POS session <pos/session-close>`.

      .. note::
         An employee with advanced POS rights who is not a database user cannot access the backend.

.. _pos/employee_login/use:

Usage guidelines
================

Logging in
----------

Once the **Log in with Employees** feature is enabled, employees must log in to :ref:`open a POS
session <pos/session-start>` and access the POS interface. They can :ref:`scan their employee badge
<pos/employee_login/badge>`, click the :icon:`fa-users` icon (:guilabel:`users`) to select their
name from the list of authorized users, or by entering :ref:`their PIN code
<pos/employee_login/pin>` in the :guilabel:`Enter your PIN` field.

.. image:: employee_login/log-in.png
   :alt: Login window to open a session when the multiple cashiers feature is active

To switch between users during an :ref:`active session <pos/session-start>`, click on the currently
logged-in employee's name at the top right of the POS screen and select the user to switch to.

.. tip::
   In the absence of a scanner, click the :icon:`fa-barcode` icon (:guilabel:`barcode`) to scan
   barcodes using the webcam.

.. _pos/employee_login/badge:

Logging in with badges
----------------------

Employees can log in using their badge. To configure badge-based login, assign a unique badge ID to
the employee's profile in the **Employees** module:

#. Navigate to the **Employees** module.
#. Open the form view of the specific employee.
#. Go to the :guilabel:`Settings` tab.
#. The :guilabel:`Attendance/Point of Sale/Manufacturing` category offers two options:

   - Manually enter any badge ID in the :guilabel:`Badge ID` field.
   - Click :guilabel:`Generate` to create a unique badge ID automatically.
#. Click :guilabel:`Print Badge` to generate a barcode representation of the assigned badge ID.

To switch users within an open POS session using a badge, you must first lock the session. To do so,
click the :icon:`fa-lg fa-lock` icon (:guilabel:`lock`) to return to the login screen. Then, the new
employee can scan their badge to log in.

.. _pos/employee_login/pin:

Adding a PIN Code
-----------------

For enhanced security, employees may be forced to enter a PIN code each time they log into a POS
session. To set up a PIN code for an employee:

#. Navigate to the **Employees** module.
#. Open the form view of the relevant employee.
#. Go to the :guilabel:`Settings` tab.
#. Enter a desired numerical code in the :guilabel:`PIN Code` field of the
   :guilabel:`Attendance/Point of Sale/Manufacturing` category.

.. note::
   The PIN code must consist of a sequence of digits only.
