===============================================
Enable Banking as bank synchronization provider
===============================================

**Enable Banking** is a third-party provider that fetches account transactions
from your bank accounts. It supports ~350 institutions in more than 20 countries

.. image:: media/enablebanking-logo.png
   :align: center
   :alt: Enable Banking Logo.

Odoo can synchronize directly with your bank to get all bank transactions imported
automatically into your database.

Enable Banking is a free third-party provider.

Configuration
=============

Link your bank accounts with Odoo
---------------------------------

#. Start synchronization by clicking on :menuselection:`Accounting --> Configuration
   --> Add a Bank Account`.
#. Select the institution you want to synchronize. You can see if Enable Banking is the
   third party provider of the institution by selecting it.
#. After giving your phone number, you are redirected to Enable Banking to continue
   the synchronization process.

   .. image:: media/enablebanking-consent.png
      :align: center
      :alt: Enable Banking give consent page.

#. By clicking on "Continue Authentication", you agree with the terms of Enable Banking API.
#. After that, you will be redirected to your bank and you have to select accounts that you
   want to synchronize.

   .. image:: media/enablebanking-select-accounts.png
      :align: center
      :alt: Selection of the accounts you wish to synchronize with Odoo.

#. Complete the synchronization by following the steps.

Update your credentials
-----------------------

You might have to update your Enable Banking credentials or modify the synchronization settings.

To do so, go to :menuselection:`Accouting --> Configuration --> Online Synchronization` and
select the institution you want to update credentials. Click on the *Update Credentials* button
to start the flow and follow the steps.

Fetch new accounts
------------------

You might want to add new online accounts to your connection.

To do so, go to :menuselection:`Accouting --> Configuration --> Online Synchronization` and
select the institution to fetch the new accounts. Click on the *Fetch Accounts* button
to start the flow and follow the steps.

FAQ
===

I get an error message telling me that my authorization has expired
-------------------------------------------------------------------

Every **3 months** (90 days) you must by law re-authorize the connection between your bank 
account and Enable Banking. To do so, go to :menuselection:`Accounting --> Configuration -->
Online Synchronization` and follow the `Update your Credentials`_ flow. If you do not
do this, the synchronization will stop for these accounts.

.. seealso::

   * :doc:`bank_synchronization`
   * :doc:`ponto`
   * :doc:`saltedge`
   * :doc:`bank_statements`
