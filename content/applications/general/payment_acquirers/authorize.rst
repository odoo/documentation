=============
Authorize.Net
=============

`Authorize.Net <https://www.authorize.net>`_ is a United States-based online payment solution
provider, allowing businesses to accept **credit cards**.

Configuration
=============

.. seealso::
   - :ref:`payment_acquirers/add_new`

Credentials tab
---------------

Odoo needs your **API Credentials & Keys** to connect with your Authorize.Net account, which
comprise:

- **API Login ID**: The ID solely used to identify the account with Authorize.Net.
- **API Transaction Key**
- **API Signature Key**
- **API Client Key**

To retrieve them, log into your Authorize.Net account, go to :menuselection:`Account --> Settings
--> Security Settings --> API Credentials & Keys`, generate your **Transaction Key** and
**Signature Key**, and paste them on the related fields in Odoo. Then, click on **Generate Client
Key**.

.. important::
   If you are trying Authorize.Net as a test, with a *sandbox account*, change the **State** to
   *Test Mode*. We recommend doing this on a test Odoo database, rather than on your main database.

Configuration tab
-----------------

Place a hold on a card
~~~~~~~~~~~~~~~~~~~~~~

With Authorize.net, you can enable the :ref:`manual capture <payment_acquirers/capture_amount>`. If
enabled, the funds are reserved for 30 days on the customer's card, but not charged yet.

.. warning::
   After **30 days**, the transaction is **voided automatically** by Authorize.net.

.. seealso::
   - :doc:`../payment_acquirers`
