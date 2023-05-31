=============
Portal access
=============

.. _portal/main:

Portal access is given to users who need the ability to view certain documents or information within
an Odoo database.

Some common use cases for providing portal access include allowing customers to read/view any or all
of the following in Odoo:

- leads/opportunities
- quotations/sales orders
- purchase orders
- invoices & bills
- projects
- tasks
- timesheets
- tickets
- signatures
- subscriptions

.. note::
   Portal users only have read/view access, and will not be able to edit any documents in the
   database.

Provide portal access to customers
==================================

From the main Odoo dashboard, select the :guilabel:`Contacts` application. If the contact is not yet
created in the database, click on the :guilabel:`Create` button, enter the details of the contact,
and then click :guilabel:`Save`. Otherwise, choose an existing contact, and then click on the
:guilabel:`Action` drop-down menu located at the top-center of the interface.

.. image:: portal/grant-portal-access.png
   :align: center
   :alt: Use the Contacts application to give portal access to users.

Then select :guilabel:`Grant portal access`. A pop-up window appears, listing three fields:

- :guilabel:`Contact`: the recorded name of the contact in the Odoo database
- :guilabel:`Email`: the contact's email address that they will use to log into the portal
- :guilabel:`In Portal`: whether or not the user has portal access

To grant portal access, first enter the contact's :guilabel:`Email` they will use to log into the
portal. Then, check the box under the :guilabel:`In Portal` column. Optionally, add text to the
invitation message the contact will receive. Then click :guilabel:`Apply` to finish.

.. image:: portal/add-contact-to-portal.png
   :align: center
   :alt: An email address and corresponding checkbox for the contact need to be filled in before
         sending a portal invitation.

An email will be sent to the specified email address, indicating that the contact is now a portal
user for that Odoo database.

.. tip::
   To grant portal access to multiple users at once, navigate to a company contact, then click
   :menuselection:`Action --> Grant portal access` to view a list of all of the company's related
   contacts. Check the box under the :guilabel:`In Portal` column for all the contacts that need
   portal access, then click :guilabel:`Apply`.

.. note::
   At any time, portal access can be revoked by navigating to the contact, clicking
   :menuselection:`Action --> Grant portal access`, and then unselecting the checkbox under the
   :guilabel:`In Portal` column and clicking :guilabel:`Apply`.

.. _portal/login:

Change portal username
======================

There may be times when a portal user wants to change their user login. This can be done by any user
in the database with administrator access rights. The following process outlines the necessary steps
to change the portal user login.

.. seealso::
   :doc:`See the documentation on setting access rights
   </applications/general/users/access_rights>`.

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

There may be times when the customer would like to make changes to their contact information,
password/security, or payment information attached to the portal account. This can be performed by
the customer from their portal. The following process is how a customer can change their contact
information.

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

Change payment info
-------------------

First enter the username and password (login) into the database login page to access the portal user
account. A portal dashboard will appear upon successfully logging in.

If the customer would like to manage payment options, navigate to the :guilabel:`Manage payment
methods` in the menu on the right. Then, add the new payment information, and select :guilabel:`Add
new card`.
