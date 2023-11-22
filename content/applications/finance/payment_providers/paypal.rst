======
PayPal
======

`Paypal <https://www.paypal.com/>`_ is an American online payment provider available worldwide, and
one of the few that does not charge a subscription fee.

.. note::
   While PayPal is available in `over 200 countries/regions
   <https://www.paypal.com/webapps/mpp/country-worldwide>`_, only `a selection of currencies are
   supported <https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies>`_.

Settings in PayPal
==================

To access your PayPal account settings, log into PayPal, open the :guilabel:`Account Settings`, and
open the :guilabel:`Website payments` menu.

.. image:: paypal/paypal-account.png
   :align: center
   :alt: PayPal account menu

.. important::
   Note that for PayPal to work **in Odoo**, the options :ref:`Auto Return <paypal/auto-return>` and
   :ref:`PDT <paypal/pdt>` **must** be enabled.

.. _paypal/auto-return:

Auto Return
-----------

The **Auto Return** feature automatically redirects customers to Odoo once the payment is processed.

From :guilabel:`Website payments`, go to :menuselection:`Website preferences --> Update --> Auto
return for website payments --> Auto return` and select :guilabel:`On`. Enter the address of your
Odoo database (e.g., `https://yourcompany.odoo.com`) in the :guilabel:`Return URL` field, and
:guilabel:`Save`.

.. note::
   Any URL does the job. Odoo only needs the setting to be enabled since it uses another URL.

.. _paypal/pdt:

Payment Data Transfer (PDT)
---------------------------

:abbr:`PDT (Payment Data Transfer)` allows to receive payment confirmations, displays the payment
status to the customers, and verifies the authenticity of the payments. From :menuselection:`Website
preferences --> Update`, scroll down to :guilabel:`Payment data transfer` and select :guilabel:`On`.

.. tip::
   PayPal displays your **PDT Identity Token** as soon as :ref:`Auto return <paypal/auto-return>`
   and :ref:`Payment Data Transfer (PDT) <paypal/pdt>` are enabled. If you need the **PDT Identity
   Token**, disable and re-enable :guilabel:`Payment data transfer` to display the token again.

PayPal Account Optional
-----------------------

We advise not to prompt customers to log in with a PayPal account upon payment. It is better and
more accessible for customers to pay with a debit/credit card. To disable that prompt, go to
:menuselection:`Account Settings --> Website payments --> Update` and select :guilabel:`On` for
:guilabel:`PayPal account optional`.

Payment Messages Format
-----------------------

If you use accented characters (or anything other than primary Latin characters) for customer names
or addresses, then you **must** configure the encoding format of the payment request sent by Odoo to
PayPal. If you do not, some transactions fail without notice.

To do so, go to `your production account <https://www.paypal.com/cgi-bin/customerprofileweb
?cmd=_profile-language-encoding>`_. Then, click :guilabel:`More Options` and set the two default
encoding formats as :guilabel:`UTF-8`.

.. tip::
   - For Encrypted Website Payments & EWP_SETTINGS error, please check the `Paypal documentation
     <https://developer.paypal.com/docs/online/>`_.
   - Configure your :ref:`Paypal Sandbox account <paypal/testing>`, then follow this
     `link <https://sandbox.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-language-encoding>`_
     to configure the encoding format in a test environment.

Settings in Odoo
================

.. seealso::
   :ref:`payment_providers/add_new`

Odoo needs your **API Credentials** to connect with your PayPal account. To do so, go to
:menuselection:`Accounting --> Configuration --> Payment Providers` and :guilabel:`Activate` PayPal.
Then, enter your PayPal account credentials in the :guilabel:`Credentials` tab:

- :guilabel:`Email`: the login email address in Paypal;
- :guilabel:`PDT Identity Token`: the key used to verify the authenticity of transactions.

.. _paypal/testing:

Test environment
================

Configuration
-------------

Thanks to PayPal sandbox accounts, you can test the entire payment flow in Odoo.

Log into the `Paypal Developer Site <https://developer.paypal.com/>`_ using your PayPal credentials,
which creates two sandbox accounts:

-  A business account (to use as merchants, e.g.,
   `pp.merch01-facilitator@example.com <mailto:pp.merch01-facilitator@example.com>`_);
-  A default personal account (to use as shoppers, e.g.,
   `pp.merch01-buyer@example.com <mailto:pp.merch01-buyer@example.com>`_).

Log into PayPal sandbox using the merchant account and follow the same configuration instructions.
Enter your sandbox credentials in Odoo (:menuselection:`Accounting --> Configuration --> Payment
Providers --> PayPal` in the :guilabel:`Credentials` tab, and make sure the status is set on
:guilabel:`Test Mode`.

Run a test transaction from Odoo using the sandbox personal account.

.. seealso::
   - :doc:`../payment_providers`
