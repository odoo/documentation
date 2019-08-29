=======================================
How to synchronize Odoo with your bank?
=======================================

Odoo is able to synchronize directly with your bank in order to get all
bank statements imported automatically in Odoo every 4 hours. Before
moving forward in this tutorial, you should check if your bank is
supported. You can find it out from the `Odoo Accounting Features <https://www.odoo.com/page/accounting-features>`__

.. image:: media/synchronize01.png
   :align: center

Search for your bank name in the above page. If your bank appears in the
proposition, it means it is supported by Odoo. The countries which are
fully supported (meaning more than 95% of the banks) include: United
States, Canada, New Zealand, Austria. More than 30 countries are
partially supported, including: Colombia, India, France, Spain, etc.

In order to connect with the banks, Odoo uses two web-services:

-  Plaid: for the main banks in the U.S.

-  Yodlee: for all other banks

Configuration
=============

Odoo Online Users
-----------------

If you we support banks of your country, the bank integration feature
should already been installed. If it's not installed, you can manually
install the module **account_yodlee**.

Odoo Enterprise Users
---------------------

If you plan to use a bank interface with your Odoo Enterprise
subscription, you don't have to do anything special, just make sure that your database is registered with your Odoo Enterprise contract.

.. note::
   you might want to check that you don't have a firewall/proxy blocking the following addresses
   
   * https://onlinesync.odoo.com/
   * https://api.plaid.com/


Sync your bank feeds
====================

Once the Plaid or Yodlee interface is installed, you can connect Odoo to
your bank. To do that, click on **More** on the bank of your
choice from the accounting dashboard. In the menu, click on Settings to
configure this bank account.

.. image:: media/synchronize02.png
   :align: center

In the bank form, from the Bank Account tab, set the bank feeds option
to **Bank Synchronization**.

.. image:: media/synchronize03.png
   :align: center

Once it's done, go back to your accounting dashboard. You should see a
**Online Synchronization** button on your bank card. Click on this button
and fill in your bank credentials.

Once you filled in your credentials, your bank feeds will be
synchronized every 4 hours.

FAQ 
===

The synchronization is not working in real time, is it normal?
--------------------------------------------------------------

Yodlee tries to get the data from a bank account once a day. However, this doesn't
always happen at the same time. And sometimes the process can fail. In that case,
Yodlee retries one hour or two later. This is why in Odoo there is a cron that is
running every 4 hours to fetch the information from Yodlee. 

You can however force this synchronization by clicking on the button "Synchronize now"
from the accounting dashboard. 

Moreover, a transaction can be visible in your bank account but not being fetched
by Yodlee. Indeed, the transaction in your bank account can have the status "pending"
and not the status "posted". In that case, Yodlee won't import it, you will have to
wait till the status changes. 

What is important to remember is that Yodlee is not a service fetching transactions
in real time. This is a service to facilitate the import of the bank statements to the database. 

Is the Yodlee feature included in my contract? 
----------------------------------------------

- Enterprise Version: Yes, if you have a valid enterprise contract linked to your database.
- Community Version: No, this feature is not included in the Community Version.
- Online Version: Yes, even if you benefit from the One App Free contract. 

Some banks have a status "Beta", what does it mean? 
---------------------------------------------------

This means that Yodlee is only currently working on developing the synchronization
with this bank. The synchronization could already work or it may need a bit more time
to have a 100% working synchronization. Unfortunately, there is not much to do about it
except for being patient. 

All my past transactions are not in Odoo, why?
----------------------------------------------

Yodlee only allows to fetch transactions up to 3 months in the past.
