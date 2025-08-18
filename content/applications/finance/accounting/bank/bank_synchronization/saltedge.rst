=========
Salt Edge
=========

`Salt Edge <https://www.saltedge.com/>`_ is a free third-party provider that aggregates banking data
from various financial institutions. It supports around 5,000 institutions across more than 50
countries. Odoo uses Salt Edge to synchronize with supported banks automatically and import all bank
transactions into its database.

.. seealso::
   - :doc:`../bank_synchronization`
   - `Countries and connected banks with Salt Edge
     <https://www.saltedge.com/products/account_information/coverage>`_

.. _accounting/bank-synchronization/saltedge/configuration:

Configuration
=============

.. _accounting/bank-synchronization/saltedge/odoo-connection:

Connection with Odoo
--------------------

When :ref:`connecting a bank to Odoo <accounting/bank-synchronization/first-synchronization>`,
verify that the third-party provider is Salt Edge and follow the steps from the bank's login page.

.. tip::
   - Make sure the consent checkbox is enabled so Odoo can access your information.
   - Select all accounts that need access and synchronization, including those from other banking
     institutions.

.. seealso::
   :ref:`Update synchronization credentials <accounting/bank-synchronization/update-credentials>`

.. _accounting/bank-synchronization/saltedge/troubleshooting:

Troubleshooting
===============

.. seealso::
   :ref:`Bank synchronization troubleshooting <accounting/bank-synchronization/troubleshooting>`

.. _accounting/bank-synchronization/saltedge/troubleshooting/deleting-error:

Why is there an error when deleting a synchronization in Odoo?
--------------------------------------------------------------

Odoo can't permanently delete the connection established with the banking institution. However,
it revokes consent, which prevents Odoo from accessing the account. The error message indicates that
the consent has been revoked, but the record could not be deleted as it remains in Salt Edge.

To delete the connection, connect to the `Salt Edge account <https://www.saltedge.com/dashboard>`_
and manually remove the synchronization. Once this is done, the record can be deleted in Odoo.

.. _accounting/bank-synchronization/saltedge/troubleshooting/account-already-synchronized:

I have an error saying that this account has already been synchronized
----------------------------------------------------------------------

The bank account has already been synchronized with Salt Edge. Access the Salt Edge `dashboard
<https://www.saltedge.com/dashboard>`_ to check if a connection with the same credentials exists.
There are two options:

- If a connection with the same credentials exists in Salt Edge but has not been synchronized with
  Odoo, delete the existing connection and create a new one from the Odoo database.
- If a connection with the same credentials exists in Salt Edge and has already been synchronized
  with Odoo, activate the :ref:`developer mode <developer-mode>`, go to :menuselection:`Accounting
  --> Configuration --> Online Synchronization`, and click :guilabel:`Update Credentials` to
  reactivate the connection.
