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
