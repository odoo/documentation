===================================
How to collect payments with Paypal
===================================

Paypal is the easiest payment method to configure. It is also the only one without any subscription
free.

Setup your Paypal account
=========================

1. Create a business account at Paypal.com (see:
https://www.paypal.com/in/cgi-bin/webscr?cmd=xpt/Marketing/general/how-to-set-up-a-paypal-account-outside)
or upgrade your account to Business account (merchant) if you have a basic account.

2. Log in to your account at Paypal.com and go to
:menuselection:`My Account --> Profile --> My Selling Tools`. There click *PayPal button language
encoding* under *More Selling Tools* section. Then, click *More Options* and replace the two default
encoding formats by *UTF-8*.

3. Open Paypal setup form in Odoo and enter your *Email ID*.

4. The Paypal Merchant ID is not mandatory (extra verification level). It is provided in
Paypal under :menuselection:`My Account --> Overview`.

5. Configure the IPN feedback (Paypal contacting your Odoo instance without needing the
redirection). The setting can be found in
:menuselection:`Profile --> My Selling Tools --> Instant payment notification`.
Activate it and set it to <odoo_instance_url>/payment/paypal/ipn.

6. To test the workflow, you can create sandbox accounts by logging in at
https://developer.paypal.com/webapps/developer/applications/myapps with the same Paypal credentials.
Two default sandbox accounts are automatically generated when you register to Paypal:
one is a buyer, the  other is a shopper.

7. Log in with your buyer sandbox account to https://www.sandbox.paypal.com (same password than real
account) and apply the same format change.

.. tip::
    To automatically redirect your customers when the payment is completed, go to your Website
    Preferences and turn *Auto Return* on. Set *Return URL* to <odoo_instance_url>/shop/confirmation.
    Verify that your *Notify URL* uses the correct protocol (HTTP/HTTPS).
	
.. tip::
    If you want your customers to pay without creating a Paypal account, *Paypal Account
    Optional* needs to be turned on.

Transaction fees
================

You can charge an extra to the customer to cover the transaction fees Paypal charges you.
Once redirected to Paypal, your customer sees an extra applied to the order amount. 

To activate this, go to the *Configuration* tab and check *Add Extra Fees*. Default
fees are the ones charged by Paypal.
