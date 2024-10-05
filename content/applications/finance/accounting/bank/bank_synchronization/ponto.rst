=====
Ponto
=====

**Ponto** is a service that allows companies and professionals to aggregate their accounts in one
place and directly see all their transactions within one app. It is a third-party solution that is
continuously expanding the number of bank institutions that can be synchronized with Odoo.

**Odoo** can synchronize directly with your bank to get all bank statements imported automatically
into your database.

Ponto is a paid third-party provider that can handle the synchronization between your bank accounts
and Odoo.

.. seealso::
   - :doc:`../bank_synchronization`
   - :doc:`../transactions`

Configuration
=============

Link your bank accounts with Ponto
----------------------------------

#. Go to `Ponto's website (https://myponto.com) <https://myponto.com>`_.
#. Create an account if you don't have one yet.
#. Once you are logged in, create an *organization*.

   .. image:: ponto/ponto-organization.png
      :alt: Fill out the form to add an organization in Ponto.

#. Go to :menuselection:`Accounts --> Live`, and click :guilabel:`Add account`. You might have to
   add your **Billing Information** first.
#. Select your country, your bank institutions, give your consent to Ponto, and follow the steps
   on-screen to link your bank account with your Ponto account.

   .. image:: ponto/ponto-add-account.png
      :alt: Add bank accounts to your Ponto account.

#. Add all bank accounts you want to synchronize with your Odoo database and move to the next steps.

Link your Ponto account with your Odoo database
-----------------------------------------------

#. Go to :menuselection:`Accounting --> Configuration --> Add a Bank Account`.
#. Search for your institution and select it so you can verify that the third party provider is
   Ponto.
#. Click :guilabel:`Connect` and follow the steps.
#. Select **all accounts** you want to access and synchronize in Odoo, even the ones coming from
   other banking institutions.

   .. image:: ponto/ponto-select-accounts.png
      :alt: Selection of the accounts you wish to synchronize with Odoo.

#. Finish the flow.

.. note::
   You have to authorize all the accounts you want to access in Odoo, but Odoo will filter the
   accounts based on the institution you selected in the second step.

Update your synchronization credentials
---------------------------------------

To update your Ponto credentials or modify the synchronization settings, activate the
:ref:`developer mode <developer-mode>`, go to :menuselection:`Accounting --> Configuration -->
Online Synchronization`, and select the institution from which you want to fetch the other
accounts. Click :guilabel:`Fetch Accounts` to start the flow.

.. note::
   During the update, select **all accounts** you want to synchronize, even the ones coming from
   other banking institutions.

Fetch new accounts
------------------

To add new online accounts to your connection, activate the :ref:`developer mode <developer-mode>`,
go to :menuselection:`Accounting --> Configuration --> Online Synchronization`, and select the
institution from which you want to fetch the other accounts. Click :guilabel:`Fetch Accounts` to
start the flow.

.. note::
   Don't forget to keep authorization for existing accounts (for all institutions that you have
   synchronized with Ponto).

FAQ
===

After my synchronization, no account appears
--------------------------------------------

You selected an institution from the list and did not authorize any accounts from this institution.

I have an error about that my authorization has expired
-------------------------------------------------------

Every **6 months** (180 days) you must re-authorize the connection between your bank account
and Ponto. This must be done from the `Ponto website <https://myponto.com>`_. If you do not
do this, the synchronization will stop for these accounts.

I have some errors with my beta institution
-------------------------------------------

Ponto provides institutions in *beta*, these institutions are not directly supported by Odoo
and we advise you to contact Ponto directly.

.. important::
   Using an institution in beta is beneficial for Ponto, it allows them to have real
   feedback on the connection with the institution.
