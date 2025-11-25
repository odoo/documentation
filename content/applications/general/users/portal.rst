=============
Portal access
=============

.. _portal/main:

Portal access is given to users who need the ability to view certain documents or information within
an Odoo database.

Some common use cases for providing portal access include allowing customers to make partial payment
on an invoice, to add funds to their eWallet, and to read/view any or all of the following in Odoo:

- Following, viewing and paying orders
- Following, downloading or paying invoices
- Managing payment methods
- Managing subscriptions
- Adding, removing or modifying addresses
- Configuring connection parameters

.. note::
   Portal users only have read/view access, and will **not** be able to edit any documents in the
   database.

.. _portal/access:

Provide portal access to customers
==================================

From the main Odoo dashboard, select the :guilabel:`Contacts` application. If the contact is not yet
created in the database, click on the :guilabel:`Create` button, enter the details of the contact,
and then click :guilabel:`Save`. Otherwise, choose an existing contact, and then click on the
:guilabel:`Action` drop-down menu located at the top-center of the interface.

.. image:: portal/grant-portal-access.png
   :alt: Use the Contacts application to give portal access to users.

Then select :guilabel:`Grant portal access`. A pop-up window appears, listing three fields:

- :guilabel:`Contact`: the recorded name of the contact in the Odoo database
- :guilabel:`Email`: the contact's email address used to log into the portal
- :guilabel:`Latest Authentication`: the last time the user accessed the portal

To grant portal access, first enter the contact's :guilabel:`Email` used to log into the portal if
it has not been automatically entered by the system. Then click :guilabel:`Grant Access` to finish.

To grant portal access to multiple users for a company at once, navigate to the company contact,
then click :menuselection:`Action --> Grant portal access` to view a list of the company's related
contacts. Click :guilabel:`Grant Access` for each contact to grant portal access to.

An email is sent to the specified email address, indicating that the contact is now a portal user
for that Odoo database.

Revoking portal access
======================

At any time, portal access can be revoked by navigating to a contact, clicking
:menuselection:`Action --> Grant portal access`, and then clicking :guilabel:`Revoke Access`.

.. _portal/login:

Change portal username
======================

There may be times when a portal user wants to change their user login. This can be done by any user
in the database with administrator access rights. The following process outlines the necessary steps
to change the portal user login.

.. seealso::
   :doc:`Access rights </applications/general/users/access_rights>`.

First, navigate to :menuselection:`Settings app --> Users`. Then, under :guilabel:`Filters`, select
:guilabel:`Portal Users`, or select :guilabel:`Add Custom Filter` and set the following
configuration :guilabel:`Groups` > :guilabel:`contains` > `portal`. After making this selection,
search for (and open) the portal user that needs to be edited.

Next, click :guilabel:`Edit` (if necessary), click into the :guilabel:`Email Address` field, and
proceed to make any necessary changes to this field. The :guilabel:`Email Address` field is used to
log into the Odoo portal.

.. note::
   Changing the :guilabel:`Email Address` (or login) only changes the *username* on the customer's
   portal login.

   In order to change the contact email, this change needs to take place on the contact template in
   the *Contacts* app. Alternatively, the customer can change their email directly from the portal,
   but the login **cannot** be changed. :ref:`See change customer info <portal/custinfo>`.

Customer portal changes
=======================

There may be times when the customer would like to make changes to their contact, security, or
payment information attached to the portal account. This can be performed by the customer from their
portal. The following process is how a customer can change their contact information.

.. _portal/custinfo:

Change customer info
--------------------

First enter the username and password (login) into the database login page to access the portal user
account. A portal dashboard will appear upon successfully logging in. Portal documents from the
various installed Odoo applications will appear with the number count of each.

.. seealso::
   :ref:`Portal access documentation <portal/main>`.

Next, navigate to the upper-right corner of the portal, and click the :guilabel:`Edit` button, next
to the :guilabel:`Details` section. Then, change the pertinent information, and click
:guilabel:`Confirm`.

Change password
---------------

First enter the username and password (login) into the database login page to access the portal user
account. A portal dashboard will appear upon successfully logging in.

If the customer would like to change their password for portal access, click on the :guilabel:`Edit
Security Settings` link, below the :guilabel:`Account Security` section. Then, make the necessary
changes, by typing in the current :guilabel:`Password`, :guilabel:`New Password`, and verify the new
password. Lastly, click on :guilabel:`Change Password` to complete the password change.

.. note::
   If a customer would like to change the login, as documented above, contact the Odoo database
   point-of-contact. :ref:`See above documentation on changing the portal username <portal/login>`.

.. note::
   Passwords for portal users and Odoo.com users remain separate, even if the same email address is
   used.

Add two-factor authentication
-----------------------------

First enter the username and password (login) into the database login page to access the portal user
account. A portal dashboard will appear upon successfully logging in.

If the customer would like to turn on two-factor authentication (2FA) for portal access, click on
the :guilabel:`Edit Security Settings` link, below the :guilabel:`Account Security` section.

Click on :guilabel:`Enable two-factor authentication` to turn on :abbr:`2FA (two-factor
authentication)`. Confirm the current portal password in the :guilabel:`Password` field. Then, click
on :guilabel:`Confirm Password`. Next, activate :abbr:`2FA (two-factor authentication)` in a
:abbr:`2FA (two-factor authentication)` app (Google Authenticator, Authy, etc.), by scanning the
:guilabel:`QR code` or entering a :guilabel:`Verification Code`.

Finally, click :guilabel:`Enable two-factor authentication` to complete the setup.

.. _users-portal-payment-methods:

Change payment info
-------------------

If the customer needs to manage payment options, they click the :guilabel:`Payment methods` button.

* To add a new payment option, choose from the available payment methods, enter the new payment
  information, and click :guilabel:`Save` to save the details.
* To erase a payment option, click the :icon:`fa-trash` :guilabel:`(Trash)` icon, then click the
  :guilabel:`Confirm Deletion` button.

Payment details **cannot** be edited. Customers must delete and re-enter information to update their
details.
