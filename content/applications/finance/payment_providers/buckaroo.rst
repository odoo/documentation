========
Buckaroo
========

`Buckaroo <https://www.buckaroo.eu/>`_ is a Dutch-based company that offers several online payment
possibilities.

.. _payment_providers/buckaroo/configure_dashboard:

Configuration on Buckaroo Plaza
===============================

#. Log into `Buckaroo Plaza <https://plaza.buckaroo.nl>`_, go to :menuselection:`My Buckaroo -->
   Websites` and select the :guilabel:`Push settings` tab.
#. Tick the :guilabel:`Enable Push Response` check box in the :guilabel:`Delayed and Push responses`
   section.
#. Enter the URL of your Odoo database, followed by `/payment/buckaroo/webhook` in both the
   :guilabel:`Push URI Success/Pending` and :guilabel:`Push URI Failure` text fields. For example:
   `https://yourcompany.odoo.com/payment/buckaroo/webhook`.
#. Leave the other fields as they are and click :guilabel:`Save`.
#. In the :guilabel:`General` tab, copy the website :guilabel:`Key` (i.e., the key used to uniquely
   identify your website with Buckaroo) and save it for later.
#. Go to :menuselection:`Configuration --> Security --> Secret key`, enter or :guilabel:`Generate` a
   :guilabel:`Secret key` and click :guilabel:`Save`. Save the key for later.

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Buckaroo <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled`.
#. In the :guilabel:`Credentials` tab, fill the :guilabel:`Website Key` and :guilabel:`Secret Key`
   fields with the values you saved at the step
   :ref:`payment_providers/buckaroo/configure_dashboard`.
#. Configure the options in the other tabs to your liking.

.. seealso::
   :doc:`../payment_providers`
