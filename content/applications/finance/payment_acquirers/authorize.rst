=============
Authorize.Net
=============

`Authorize.Net <https://www.authorize.net>`_ is a United States-based online payment solution
provider allowing businesses to accept **credit cards**. Among others, it offers the ability to
process customer payments after delivery.

Authorize.Net account
=====================

First, choose a plan and `create an Authorize.Net account
<https://www.authorize.net/sign-up/pricing.html>`_.

Odoo needs the Authorize.Net account's **API credentials and keys** to connect to it, which
comprises the:

- API login ID,
- Transaction key, and
- Signature key.

To retrieve them, log in to Authorize.Net and go to :menuselection:`Account --> Security Settings:
API Credentials & Keys`. While the :guilabel:`API Login ID` is displayed, both keys need to be
generated.

To do so, select :guilabel:`New Transaction Key` and click :guilabel:`Submit`. Copy the key and
store it somewhere secure as it will not be displayed afterward. Repeat the same process for the
:guilabel:`Signature Key`.

.. image:: authorize/authorize-api-keys.png
   :alt: Generating the transaction and signature keys on Authorize.Net

.. seealso::
   `Authorize.Net Getting Started Guide
   <https://support.authorize.net/knowledgebase/Knowledgearticle/?code=000002939>`_

Configuration
=============

.. seealso::
   Refer to the :doc:`payment acquirers documentation <../payment_acquirers>` for more information
   about general configuration options.

To activate Authorize.Net as a payment acquirer in Odoo, go to :menuselection:`Accounting -->
Configuration --> Payment Acquirers`. Find :guilabel:`Authorize.Net`, click the :guilabel:`Activate`
button, and change the :guilabel:`State` to :guilabel:`Enabled`.

Credentials
-----------

Fill in the :guilabel:`API Login Id`, :guilabel:`API Transaction Key`, and :guilabel:`API Signature
Key` fields with the values displayed or generated on Authorize.Net's :guilabel:`API Credentials &
Keys` page, and :guilabel:`Save`.

.. note::
   An :guilabel:`API Client Key` is only necessary if the :guilabel:`Payment from Odoo` option is
   selected as :ref:`Payment Flow <payment_acquirers/payment_flow>`.

.. important::
   To test Authorize.Net with a **sandbox account**, first change the :guilabel:`State` field to
   :guilabel:`Test Mode`. It is recommended to do so on a test Odoo database, rather than on a
   production database.

   .. note::
      If the :guilabel:`Test Mode` is used with the credentials of a non-sandbox account, it will
      result in the following error: *The merchant login ID or password is invalid or the account is
      inactive*.

Payment flow
------------

It is possible either to redirect users to Authorize.Net's portal to authenticate the payment or to
keep users on the current page and authenticate the payment from Odoo.

To configure the payment flow, go to :menuselection:`Accounting --> Configuration --> Payment
Acquirers --> Authorize.Net --> Configuration tab`. Under :guilabel:`Payment Flow`, select
:guilabel:`Redirection to the acquirer website` or :guilabel:`Payment from Odoo` and
:guilabel:`Save`.

Payment from Odoo
~~~~~~~~~~~~~~~~~

If :guilabel:`Payment from Odoo` is selected, an :guilabel:`API Client Key` is needed. To generate
one, go to :menuselection:`Accounting --> Configuration --> Payment Acquirers --> Authorize.Net -->
Credentials tab`. Click :guilabel:`Generate Client Key` to automatically fill in the :guilabel:`API
Client Key` field and :guilabel:`Save`.

Redirection to the acquirer website
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If :guilabel:`Redirection to the acquirer website` is selected, a :guilabel:`Default Receipt URL`
and :guilabel:`Default Relay Response URL` should be added to the Authorize.Net account.

To do so, log in to Authorize.Net, and go to :menuselection:`Account --> Transaction Format
Settings: Response/Receipt URLs`. Click :guilabel:`Add URL`, enter the URL following the format
below, and click :guilabel:`Submit`:

- :guilabel:`Default Receipt URL`: add `/payment/authorize/return` after the main website URL.

  .. example::
     `https://example.odoo.com/payment/authorize/return`

- :guilabel:`Default Relay Response URL`: add `/shop/confirmation` after the main website URL.

  .. example::
     `https://example.odoo.com/shop/confirmation`

.. image:: authorize/authorize-redirect-urls.png
   :alt: Adding the response and receipt URLs on Authorize.Net

.. note::
   Failing to complete this step results in the following error: *The referrer, relay response or
   receipt link URL is invalid*.

Capture payments after delivery
-------------------------------

To reserve funds for 30 days on the customer's card without charging them yet, go to
:menuselection:`Accounting --> Configuration --> Payment Acquirers --> Authorize.Net -->
Configuration tab`, enable :guilabel:`Capture Amount Manually`, and :guilabel:`Save`.

To capture the payment, go to the related sales order and click :guilabel:`Capture Transaction`. If
the order is canceled, click :guilabel:`Void Transaction` to unlock the funds from the customer's
card.

.. image:: authorize/authorize-capture.png
   :alt: Capturing the payment manually

.. warning::
   After **30 days**, transactions are **voided automatically** by Authorize.Net.

.. seealso::
   - `Authorize.Net: Getting Started Guide
     <https://support.authorize.net/s/article/Authorize-Net-Getting-Started-Guide>`_
   - :doc:`../payment_acquirers`
   - :doc:`../../websites/ecommerce/shopper_experience/payment_acquirer`
