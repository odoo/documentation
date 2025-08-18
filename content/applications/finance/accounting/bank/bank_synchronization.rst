:show-content:

====================
Bank synchronization
====================

Odoo synchronizes directly with your bank institution to automatically import all bank transactions
into the database. It supports over 26,000 financial institutions worldwide and relies on multiple
:ref:`third-party providers <accounting/bank-synchronization/third-party-providers>` to connect with
banks.

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

To synchronize the database with a bank, go to the Accounting Dashboard, click :guilabel:`New`, and
select the :guilabel:`Bank` card. In the :guilabel:`Add a Bank Account` window, select the relevant
bank and click :guilabel:`Connect`.

.. tip::
   - Alternatively, click the :icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)` icon of the
     :guilabel:`Bank` journal, and :guilabel:`Connect bank`, or click :guilabel:`Search over 26000
     banks` in the Accounting dashboard.
   - Depending on your bank and country, you can select the :guilabel:`Type of account` and/or
     choose another :ref:`third-party provider <accounting/bank-synchronization/third-party-providers>`
     to connect with the bank if needed before clicking :guilabel:`Connect`.
   - If your bank is not listed in the :guilabel:`Search for an institution` window, scroll down the
     list and click :icon:`fa-plus` :guilabel:`Add new bank` to create a bank account manually. Fill
     in the :guilabel:`Account Number`, :guilabel:`Bank`, and :guilabel:`SWIFT Code`, and click
     :guilabel:`Connect`. A bank journal is then created and named using the account number. Note
     that in this case, the bank is not synchronized.
   - If issues occur during the first synchronization, check that no firewall or proxy is blocking
     the address https://production.odoofin.com/. Make sure your web browser allows pop-ups and that
     any ad-blocker is disabled.

.. important::
   When setting up bank synchronization, accounting transactions are automatically recorded from the
   date of the last transaction +1 day (e.g., if the last transaction date is 31/12/2025, the
   recording starts on 01/01/2026). If the journal contains no transactions, all available past
   transactions are retrieved. To limit the retrieval period, go to :menuselection:`Accounting -->
   Accounting --> Lock Dates`, and set a date in the :guilabel:`Lock Everything` field.

.. note::
   - Some banks are in a :guilabel:`Beta` status, meaning they're not yet fully supported by
     third-party providers. This may lead to bugs or other issues. Although they can be used, Odoo
     does not provide technical support in this case.
   - The :ref:`third-party provider <accounting/bank-synchronization/third-party-providers>` may
     request more information to connect with a bank. This information is not stored on Odoo's
     servers.
   - To view all past synchronizations, activate the :ref:`developer mode <developer-mode>` and go to
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
     automatic synchronization. This message is also logged in the chatter of the online
     synchronization. In such cases, disable the :guilabel:`Automatic synchronization` option in the
     corresponding bank's :guilabel:`Online Synchronization` and make sure to perform manual
     synchronizations by clicking :guilabel:`Fetch Transactions` on the relevant bank journal.
   - For some bank institutions, transactions can only be fetched up to three months in the past. If
     older transactions are needed, they can be :ref:`imported <accounting/transactions/import>`.

.. _accounting/bank-synchronization/update-credentials:

Update synchronization credentials
----------------------------------

To update bank credentials, activate the :ref:`developer mode <developer-mode>`, and go to
:menuselection:`Accounting --> Configuration --> Online Synchronization`. Open the connection that
needs to be updated, click :guilabel:`Update Credentials`, and follow the steps.

.. note::
   - The steps may vary depending on the third-party provider, as each provider follows its own
     process.
   - When updating bank credentials, make sure all accounts are selected for synchronization,
     including those from other banking institutions if applicable.

.. _accounting/bank-synchronization/third-party-providers:

Third-party providers
---------------------

Odoo relies on third-party providers to securely connect to your bank accounts and automatically
import transactions and financial data into the database. The following providers are used:

- `Plaid <https://plaid.com/discover-apps/>`_ (supported in the `United States of America and Canada
  <https://plaid.com/docs/institutions/>`_)
- `Yodlee <https://www.yodlee.com/>`_ (supported in Europe)
- `Salt Edge <https://www.saltedge.com/>`_ (supported `worldwide
  <https://www.saltedge.com/products/account_information/coverage>`_)
- :doc:`Ponto <bank_synchronization/ponto>` (supported in Europe)
- `Enable Banking <https://enablebanking.com/>`_ (supported in `Scandinavian countries
  <https://enablebanking.com/open-banking-apis>`_)

.. tip::
   When :ref:`connecting a bank to Odoo <accounting/bank-synchronization/first-synchronization>`:

   - Depending on your bank and country, change the default third-party provider when selecting the
     bank, if necessary.
   - Make sure to check the consent checkbox to allow information to be shared with Odoo.
   - Select all accounts that need access and synchronization, including those from other banking
     institutions.

.. seealso::
   - :ref:`Bank synchronization troubleshooting <accounting/bank-synchronization/troubleshooting>`
   - :ref:`Salt Edge bank synchronization troubleshooting
     <accounting/bank-synchronization/troubleshooting-saltedge>`
   - :ref:`Ponto bank synchronization troubleshooting
     <accounting/bank-synchronization/ponto/troubleshooting>`

.. _accounting/bank-synchronization/duplicate-transactions:

Duplicate transactions
======================

When importing transactions, some may appear :ref:`duplicated <accounting/transactions/duplicate>`
due to the same online transaction identifier or the same currency, amount, account number, and
date.

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
   :ref:`Bank synchronization troubleshooting - Ponto
   <accounting/bank-synchronization/ponto/troubleshooting>`

.. _accounting/bank-synchronization/troubleshooting/synchronization:

Synchronization errors or disconnections
----------------------------------------

To report a connection error to `Odoo support <https://www.odoo.com/help>`_, activate the
:ref:`developer mode <developer-mode>`, go to :menuselection:`Accounting --> Configuration -->
Online Synchronization`, select the failed connection, and copy the error description and the
reference.

If the connection with the proxy is lost and reconnection using the :guilabel:`Reconnect` option
isn't successful, contact `support <https://www.odoo.com/help>`_ directly. Provide the client ID or
the error reference from the chatter.

.. _accounting/bank-synchronization/troubleshooting/real-time:

Why is the synchronization not working in real-time?
----------------------------------------------------

Synchronization is not designed to work in real time, as third-party providers synchronize accounts
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
the third-party provider cannot retrieve transactions until the security code is provided.

.. _accounting/bank-synchronization/troubleshooting/visible-transactions:

Why are no transactions visible?
--------------------------------

There are a few possible reasons for this issue:

- No bank accounts were synchronized during the :ref:`first synchronization
  <accounting/bank-synchronization/first-synchronization>`.
- There may be no new transactions available to fetch.

If the bank account is correctly linked to a journal, but posted transactions still aren't visible
in the database, contact `support <https://www.odoo.com/help>`_.

.. _accounting/bank-synchronization/troubleshooting/no-account-appearing:

Why are no accounts shown after synchronization?
------------------------------------------------

During the synchronization process, a bank institution was selected, but no bank accounts from this
institution were authorized during the :ref:`first synchronization
<accounting/bank-synchronization/first-synchronization>`.

.. _accounting/bank-synchronization/troubleshooting-saltedge:

Saltedge troubleshooting
------------------------

.. _accounting/bank-synchronization/troubleshooting/saltedge/deleting-error:

Why is there an error when deleting a synchronization in Odoo?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Odoo can't permanently delete the connection established with the banking institution. However,
it revokes consent, which prevents Odoo from accessing the account. The error message indicates that
the consent has been revoked, but the record could not be deleted as it remains in Salt Edge.

To delete the connection, connect to the `Salt Edge account <https://www.saltedge.com/dashboard>`_
and manually remove the synchronization. Once this is done, the record can be deleted in Odoo.

.. _accounting/bank-synchronization/troubleshooting/saltedge/account-already-synchronized:

I have an error saying that this account has already been synchronized
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The bank account has already been synchronized with Salt Edge. Access the Salt Edge `dashboard
<https://www.saltedge.com/dashboard>`_ to check if a connection with the same credentials exists.
There are two options:

- If a connection with the same credentials exists in Salt Edge but has not been synchronized with
  Odoo, delete the existing connection and create a new one from the Odoo database.
- If a connection with the same credentials exists in Salt Edge and has already been synchronized
  with Odoo, :ref:`update the synchronization credentials
  <accounting/bank-synchronization/update-credentials>` to reactivate the connection.


.. toctree::
   :titlesonly:

   bank_synchronization/ponto
