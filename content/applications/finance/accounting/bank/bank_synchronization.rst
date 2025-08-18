:show-content:

====================
Bank synchronization
====================

Odoo synchronizes directly with your bank institution to automatically import all bank transactions
into the database. It supports over 26,000 financial institutions worldwide and relies on multiple
third-party providers to connect with banks:

- :doc:`Plaid <bank_synchronization/plaid>`: United States of America and Canada
- :doc:`Yodlee <bank_synchronization/yodlee>`: Europe
- :doc:`Salt Edge <bank_synchronization/saltedge>`: Worldwide
- :doc:`Ponto <bank_synchronization/ponto>`: Europe
- :doc:`Enable Banking <bank_synchronization/enablebanking>`: Scandinavian countries

.. note::
   To use this service, a valid Odoo Enterprise subscription is required.

.. tip::
   To check if your bank is compatible with Odoo, go to `Odoo Accounting Features
   <https://www.odoo.com/app/accounting-features#part_5>`_, and click :guilabel:`See list of
   supported institutions` in the :guilabel:`Bank & Cash` section.

.. seealso::
   :doc:`transactions`

.. _accounting/bank-synchronization/configuration:

Configuration
=============

.. _accounting/bank-synchronization/first-synchronization:

First synchronization
---------------------

To synchronize the database with a bank, go to the Accounting Dashboard, click the
:icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)` icon of the :guilabel:`Bank` journal, and
:guilabel:`Connect bank`. In the :guilabel:`Search for an institution` window, select the relevant
bank and click :guilabel:`Connect`.

.. tip::
   - Alternatively, go to :menuselection:`Accounting --> Configuration --> Add a Bank Account` or
     click :guilabel:`Search over 26000 banks` in the Accounting dashboard.
   - A proxy is used between the database and the third-party provider. If a connection error
     occurs, make sure no firewall or proxy is blocking the following address:
     https://production.odoofin.com/
   - If issues occur during the first synchronization, make sure that the web browser does not block
     pop-ups and that any ad-blocker is disabled.
   - If your bank is not listed in the :guilabel:`Search for an institution` window, scroll down the
     list and click :icon:`fa-plus` :guilabel:`Add new bank` to create a bank account manually. Fill
     in the :guilabel:`Account Number`, :guilabel:`Bank`, and :guilabel:`SWIFT Code` and click
     :guilabel:`Connect`. A bank journal is then created and named using the account number. Note
     that in this case, the bank will not be synchronized.

.. note::
   Some banks are in a :guilabel:`Beta` status, meaning they're not yet fully supported by
   third-party providers. This may lead to bugs or other issues. Although they can be used, Odoo
   does not provide technical support in this case.

.. important::
   When setting up bank transaction synchronization, accounting transactions are automatically
   recorded from the date of the last transaction +1 day (if the last transaction date is
   31/12/2025, the recording starts on 01/01/2026). If the journal contains no transactions, the
   transactions are retrieved as far back as possible. To limit how far back they're retrieved, go
   to :menuselection:`Accounting --> Accounting --> Lock Dates`, and set a date in the
   :guilabel:`Lock Everything` field.

The third-party provider may request more information to connect with a bank. This
information is not stored on Odoo's servers.

.. note::
   To view all past synchronizations, activate the :ref:`developer mode <developer-mode>` and go to
   :menuselection:`Accounting --> Configuration --> Online Synchronization`.

.. _accounting/bank-synchronization/manual-synchronization:

Manual synchronization
----------------------

After the :ref:`first synchronization <accounting/bank-synchronization/first-synchronization>`, bank
journals are synchronized by default every twelve hours. To manually trigger synchronization, go to
the Accounting dashboard and click :guilabel:`Fetch Transactions` on the relevant bank journal.

.. tip::
   Alternatively, activate the :ref:`developer mode <developer-mode>`, go to
   :menuselection:`Accounting --> Configuration --> Online Synchronization`, select the relevant
   bank, and click :guilabel:`Fetch transactions`.

.. note::
   - Some banks do not support automatic transaction fetching. For these institutions, an error
     message appears during the automatic account synchronization, prompting the user to disable the
     automatic synchronization. This message is logged in the chatter of the online synchronization.
     In such cases, disable the :guilabel:`Automatic synchronization` option in the corresponding
     bank's :guilabel:`Online Synchronization` and make sure to perform manual synchronizations by
     clicking :guilabel:`Fetch Transactions` on the relevant bank journal.
   - For some bank institutions, transactions can only be fetched up to three months in the past. If
     older transactions are needed, they can be :ref:`imported <transactions/import>`.

.. _accounting/bank-synchronization/update-credentials:

Update synchronization credentials
----------------------------------

To update bank credentials, activate the :ref:`developer mode <developer-mode>`, and go to
:menuselection:`Accounting --> Configuration --> Online Synchronization`. Open the connection that
needs to be updated and click :guilabel:`Update Credentials` to start the flow, and follow the
steps.

.. note::
   - The steps may vary depending on the third-party provider, as each provider follows its own
     process.
   - During the update, select all accounts that need to be synchronized, including those from other
     banking institutions.

.. _accounting/bank-synchronization/duplicate-transactions:

Duplicate transactions
======================

When importing transactions, some may appear duplicated due to the same online transaction
identifier or the same currency, amount, account number, and date.

To find duplicate transactions, access the :ref:`bank reconciliation view
<accounting/reconciliation/access>`, follow these steps:

#. Click the :icon:`fa-cog` :guilabel:`(gear)` icon, and select :guilabel:`Find Duplicate
   Transactions`.
#. All duplicate transactions from the starting date are displayed in the :guilabel:`Transactions`
   tab. Update the :guilabel:`Starting Date` if needed.
#. To delete a transaction, select it, click :guilabel:`Delete Selected`, and confirm.

.. note::
   Journal entries can only be deleted if they have not been reconciled.

.. _accounting/bank-synchronization/missing-transactions:

Missing transactions
====================

Missing or pending transactions are entries that the bank has not yet validated.

To find missing and pending transactions, access the :ref:`bank reconciliation view
<accounting/reconciliation/access>`, click the :icon:`fa-cog` :guilabel:`(gear)` icon, and select
:guilabel:`Find Missing Transactions`.

To import a posted missing transaction, select it and click :guilabel:`Import Transactions`.

.. note::
   - Make sure the connection with the bank is active to find missing transactions.
   - :guilabel:`Pending` transactions cannot be imported.

.. _accounting/bank-synchronization/troubleshooting:

Troubleshooting
===============

.. seealso::
   - :ref:`Bank synchronization troubleshooting - Salt Edge
     <accounting/bank-synchronization/saltedge/troubleshooting>`
   - :ref:`Bank synchronization troubleshooting - Ponto
     <accounting/bank-synchronization/ponto/troubleshooting>`

.. _accounting/bank-synchronization/troubleshooting/synchronization:

Synchronization errors or disconnections
----------------------------------------

To report a connection error to `Odoo support <https://www.odoo.com/help>`_, activate the
:ref:`developer mode <developer-mode>`, go to :menuselection:`Accounting --> Configuration -->
Online Synchronization`, select the failed connection, and copy the error description and the
reference.

If the connection with the proxy is lost and reconnection using :guilabel:`Reconnect` option isn't
successful, contact `support <https://www.odoo.com/help>`_ directly. Provide the client ID or the
error reference from the chatter.

.. _accounting/bank-synchronization/troubleshooting/real-time:

Why is the synchronization not working in real-time?
----------------------------------------------------

Synchronization is not designed to work in real-time, as third-party providers synchronize accounts
at different intervals. To manually trigger synchronization and retrieve bank transactions, go to
the :guilabel:`Accounting Dashboard`, and click :guilabel:`Fetch Transactions`.

Alternatively, to synchronize and fetch transactions, activate the :ref:`developer mode
<developer-mode>` and go to :menuselection:`Accounting --> Configuration --> Online
Synchronization`.

Some providers restrict refreshes to once per day. If transactions have already been fetched,
clicking :guilabel:`Fetch Transactions` again may not retrieve the latest data.

Transactions may appear on a bank account, but cannot be fetched if they have a :guilabel:`Pending`
status; only transactions with a :guilabel:`Posted` status are retrieved.

.. _accounting/bank-synchronization/troubleshooting/refresh-manually:

Why do my transactions only synchronize when I refresh manually?
----------------------------------------------------------------

Some banks implement additional security measures and require extra steps, such as an SMS or email
authentication code, or another type of :abbr:`MFA (multi-factor authentication)`. As a result,
the integrator cannot retrieve transactions until the security code is provided.

.. _accounting/bank-synchronization/troubleshooting/visible-transactions:

Why are no transactions visible?
--------------------------------

There are a few possible reasons for this issue:

- No bank accounts were synchronized during the :ref:`first synchronization
  <accounting/bank-synchronization/first-synchronization>`.
- There may be no new transactions available to fetch.

If the bank account is correctly linked to a journal, but posted transactions aren't still visible
in the database, contact `support <https://www.odoo.com/help>`_.

.. _accounting/bank-synchronization/troubleshooting/no-account-appearing:

Why do no accounts appear after the synchronization?
----------------------------------------------------

During the synchronization process, a bank institution was selected, but no accounts from this
institution were authorized for connection.

.. toctree::
   :titlesonly:

   bank_synchronization/plaid
   bank_synchronization/yodlee
   bank_synchronization/saltedge
   bank_synchronization/ponto
   bank_synchronization/enablebanking
