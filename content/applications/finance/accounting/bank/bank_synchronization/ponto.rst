=====
Ponto
=====

`Ponto <https://myponto.com/>`_ is a paid third-party service that enables companies and
professionals to connect multiple bank accounts to a single platform. It provides a unified view of
all transactions within a single interface. When integrated with Odoo, it automatically synchronizes
bank transactions directly into its database.

.. note::
   Using Ponto is subject to applicable fees.

.. seealso::
   - :doc:`../bank_synchronization`
   - `Financial institutions connected to Ponto <https://www.isabelgroup.eu/banks>`_

.. _accounting/bank-synchronization/ponto/configuration:

Configuration
=============

To connect a bank with Odoo using Ponto as the third-party provider, follow these steps:

#. Set up your email address: Click the profile icon in the upper-right corner, select
   :guilabel:`My profile`, and fill in the :guilabel:`Email` field.
#. :ref:`Create a Ponto account <accounting/bank-synchronization/ponto/ponto-account-creation>` if
   needed.
#. :ref:`Connect Odoo to your bank <accounting/bank-synchronization/ponto/odoo-connection>`.

.. _accounting/bank-synchronization/ponto/ponto-account-creation:

Ponto account creation
----------------------

#. Access the `Ponto website <https://myponto.com>`_.
#. Click :guilabel:`Login`, then :guilabel:`Not a user yet?` and follow the instructions to create a
   new account.

   .. note::
      Use the same email address as the one :ref:`used for your Odoo profile
      <accounting/bank-synchronization/ponto/configuration>`.

#. After logging in, create an :guilabel:`Organization` and provide the necessary contact details.
#. Give consent to Ponto to access the bank account data.
#. Click :guilabel:`Accounts`, :guilabel:`Add account`, then :guilabel:`Choose your bank`, enter the
   bank account reference, and follow the on-screen steps to complete the linking process.
#. Add all relevant bank accounts that need to be synchronized with Odoo, then proceed to the next
   steps.

.. _accounting/bank-synchronization/ponto/odoo-connection:

Connection with Odoo
--------------------

When :ref:`connecting a bank to Odoo <accounting/bank-synchronization/first-synchronization>` using
Ponto as the third-party provider, follow these steps:

#. When connecting to the desired bank, make sure Ponto is selected as the third-party
   :guilabel:`Provider`.
#. Select the account(s) to grant Ponto access to account balances and transactions, then confirm
   the selection.
#. Authorize Odoo to request account information and initiate payment orders.
#. Select the specific bank account to connect.

.. tip::
   - Make sure to check the consent checkbox to allow information to be shared with Odoo.
   - Select all accounts that need access and synchronization, including those from other banking
     institutions.

.. seealso::
   :ref:`Update synchronization credentials <accounting/bank-synchronization/update-credentials>`

.. _accounting/bank-synchronization/ponto/payments:

Vendor payments with Ponto
==========================

.. important::
   Before managing vendor payments with Ponto, make sure the following steps are completed:

   - :ref:`SEPA Credit Transfer is activated (SCT) <accounting/pay_sepa/activate-sepa>`.
   - :ref:`The SEPA Credit Transfer payment method has been added to the bank journal
     <accounting/pay_sepa/activate-sepa-bank-journal>`.
   - :doc:`The vendor's bank account has been marked as trusted <../../payments/trusted_accounts>`.
   - The :guilabel:`Account Online Payment` (`account_online_payment`) module is :ref:`installed
     <general/install>`.

To register a vendor payment using Ponto, follow these steps:

#. Go to :menuselection:`Accounting --> Vendors --> Payments` and create the payment. Fill in the
   relevant bank :guilabel:`Journal` field, select :ref:`SEPA Credit Transfer
   <accounting/pay_sepa/registering-payments-sepa>` as the :guilabel:`Payment Method`, and enter the
   :guilabel:`Vendor Bank Account`. Then click :guilabel:`Confirm`.
#. Go to :menuselection:`Accounting --> Vendors --> Batch Payments` and :ref:`create a batch
   <accounting/batch/creation>`. Select the same bank :guilabel:`Journal` and :guilabel:`Payment
   Method`, and click :guilabel:`Add a line` to select the payment created in the previous step.
#. Click :guilabel:`Initiate Payment` to connect to Ponto and follow the steps to sign the payment.

.. _accounting/bank-synchronization/ponto/troubleshooting:

Troubleshooting
===============

.. seealso::
   :ref:`Bank synchronization troubleshooting <accounting/bank-synchronization/troubleshooting>`

.. _accounting/bank-synchronization/ponto/troubleshooting/expired-authorization:

Why has the authorization expired?
----------------------------------

Every six months (180 days), the connection between a bank account and Ponto must be re-authorized
via the `Ponto website <https://myponto.com>`_. Failure to do so will result in synchronization
stopping for those accounts.
