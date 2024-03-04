=====================
In-App Purchase (IAP)
=====================

In-App Purchases (IAP) gives access to additional services through Odoo. For instance, it allows you
to send SMS Text Messages or to send Invoices by post directly from your database.

Buying Credits
==============

Each IAP Service relies on prepaid credits to work and has its own pricing. To consult your current
balance or to recharge your account, go to :menuselection:`Settings --> Odoo IAP --> View my
Services`.

.. image:: in_app_purchase/image1.png
   :align: center

.. tip::
   If you are on Odoo Online and have the Enterprise version, you benefit from free credits to test our
   IAP features.

IAP accounts
============

Credits to use IAP services are stored on IAP accounts, which are specific to each service.
By default, IAP accounts are common to all companies, but can be restricted to specific
ones. Activate the :ref:`developer mode <developer-mode>`, then go to :menuselection:`Technical
Settings --> IAP Account`.

.. image:: in_app_purchase/image2.png
   :align: center

.. tip::
   An IAP account can be disabled by appending `+disabled` to its token.
   Reverting this change will re-enable the account.

IAP Portal
==========

The IAP Portal is a platform regrouping your IAP Services. It is accessible from
:menuselection:`Settings app --> Odoo IAP --> View my Services`. From there, you can view your current
balance, recharge your credits and set a reminder when your balance falls below a threshold.

.. image:: in_app_purchase/image3.png
   :align: center

Get notified when credits are low
=================================

To be notified when it’s time to recharge your credits, you can go to your IAP Portal through
:menuselection:`Settings app --> Odoo IAP --> View my Services`, unfold a service and check the
Receive threshold warning option. Then, you can provide a minimum amount of credits and email
addresses. Now, every time that the limit is reached, an automatic reminder will be sent by
email!

.. image:: in_app_purchase/image4.png
   :align: center
