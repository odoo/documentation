======
Yodlee
======

`Yodlee <https://www.yodlee.com/>`_ is a free third-party provider that securely connects a user's
bank to Odoo, automating financial data import. It supports over 9,000 institutions across more than
20 countries. Odoo uses Yodlee to synchronize with supported banks automatically and import all bank
transactions into its database.

.. seealso::
   - :doc:`../bank_synchronization`
   - :ref:`Bank synchronization troubleshooting <accounting/bank-synchronization/troubleshooting>`

.. _accounting/bank-synchronization/yodlee/configuration:

Configuration
=============

.. _accounting/bank-synchronization/yodlee/odoo-connection:

Connection with Odoo
--------------------

When :ref:`connecting a bank to Odoo <accounting/bank-synchronization/first-synchronization>`,
verify that the third-party provider is Yodlee and follow the steps from the bank's login page.

.. tip::
   - Make sure to check the consent checkbox to allow information to be shared with Odoo.
   - Select all accounts that need access and synchronization, including those from other banking
     institutions.

.. seealso::
   :ref:`Update synchronization credentials <accounting/bank-synchronization/update-credentials>`
