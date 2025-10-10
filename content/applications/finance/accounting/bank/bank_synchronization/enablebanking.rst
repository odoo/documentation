==============
Enable Banking
==============

`Enable Banking <https://enablebanking.com/>`_ is a free third-party provider that aggregates
banking information from multiple bank accounts in one place. It provides non-intrusive access to
:abbr:`ASPSPs (account servicing payment service providers)`' official APIs across Europe without
storing data. Odoo uses Enable Banking to synchronize with supported banks automatically and import
all bank transactions into its database.

.. seealso::
   - :doc:`../bank_synchronization`
   - :ref:`Bank synchronization troubleshooting <accounting/bank-synchronization/troubleshooting>`
   - `Enable Banking coverage <https://enablebanking.com/open-banking-apis>`_

.. _accounting/bank-synchronization/enablebanking/configuration:

Configuration
=============

.. _accounting/bank-synchronization/enablebanking/odoo-connection:

Connection with Odoo
--------------------

When :ref:`connecting a bank to Odoo <accounting/bank-synchronization/first-synchronization>`,
verify that the third-party provider is Enable Banking and follow the steps from the bank's login
page.

.. tip::
   - Make sure to check the consent checkbox to allow information to be shared with Odoo.
   - Select all accounts that need access and synchronization, including those from other banking
     institutions.

.. seealso::
   :ref:`Update synchronization credentials <accounting/bank-synchronization/update-credentials>`
