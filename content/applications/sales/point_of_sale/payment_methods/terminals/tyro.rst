====
Tyro
====

Connecting a **Tyro** :doc:`payment terminal <../terminals>` allows you to offer a fluid payment
flow to your customers and ease the work of your cashiers.

.. important::
   **Tyro** payment terminals are only supported in **Australia**.

.. _pos/tyro/configuration:

Configuration
=============

Pair the terminal with your POS system
--------------------------------------

#. Click the :icon:`fa-bars` (hamburger menu) icon and :guilabel:`Payment settings` on your
   terminal.
#. Enter your admin password.
#. Scroll down and click :guilabel:`Pair with POS`.
#. Click the :icon:`fa-plus` :guilabel:`Pair with POS` button.
#. Save the :guilabel:`MID` (Merchant ID) and :guilabel:`TID` (Terminal ID),  which are now
   displayed on the screen.

.. note::
   - The **admin password** is the password that you chose when you configured the terminal.
   - The steps to reach the pairing screen may differ depending on your terminal model. Information
     on configuring the various terminals can be found on `Tyro's website
     <https://www.tyro.com/set-up/>`_.

Configure the payment method
----------------------------

#. Install the :ref:`POS Tyro module <general/install>`.
#. :doc:`Create a new payment method <../../payment_methods>`:

   - Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and click
     :guilabel:`New`.
   - Set the :guilabel:`Journal` as :guilabel:`Bank`
   - Select :guilabel:`Terminal` in the :guilabel:`Integration` field.
   - Select :guilabel:`Tyro` in the :guilabel:`Integrate with` field.
   - Fill in the :guilabel:`Tyro Merchant ID` and :guilabel:`Tyro Terminal ID` with the :abbr:`MID
     (Merchant ID)` and :abbr:`TID (Terminal ID)` displayed on the terminal.
#. To pair the payment method with the terminal, click the :guilabel:`Pair Terminal` button. This
   action sends a pairing request to the terminal, which takes a few seconds to complete.

   .. image:: tyro/create-payment-method.png
      :alt: Form to create a new payment method.

   .. important::
      The :guilabel:`Tyro Mode` field must be set to :guilabel:`Production Mode`.

Add the payment method to a POS
--------------------------------

To add a **payment method** to your point of sale:

#. Go to the :ref:`POS settings <configuration/settings>`.
#. Select the POS in the :guilabel:`Point of Sale` field.
#. Add the payment method under the :guilabel:`Payment Methods` field of the :guilabel:`Payment`
   section.
