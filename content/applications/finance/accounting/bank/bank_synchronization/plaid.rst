=====
Plaid
=====

`Plaid <https://plaid.com/discover-apps/>`_ is a free third-party provider that securely connects a
user's bank to Odoo, automating financial data import. It supports over 12,000 institutions in the
U.S. and 200 in Canada. Odoo uses Plaid to synchronize with supported banks automatically and
import all bank transactions into its database.

.. seealso::
   - :doc:`../bank_synchronization`
   - :ref:`Bank synchronization troubleshooting <accounting/bank-synchronization/troubleshooting>`
   - `Plaid US and Canada Bank Coverage Explorer <https://plaid.com/docs/institutions/>`_

.. _accounting/bank-synchronization/plaid/configuration:

Configuration
=============

.. _accounting/bank-synchronization/plaid/odoo-connection:

Connection with Odoo
--------------------

When :ref:`connecting a bank to Odoo <accounting/bank-synchronization/first-synchronization>`,
verify that the third-party provider is Plaid and follow the steps from the bank's login page.

.. tip::
   - Make sure to check the consent checkbox to allow information to be shared with Odoo.
   - Select all accounts that need access and synchronization, including those from other banking
     institutions.

.. seealso::
   :ref:`Update synchronization credentials <accounting/bank-synchronization/update-credentials>`
