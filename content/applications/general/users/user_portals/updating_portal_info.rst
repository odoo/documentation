====================
Updating portal info
====================

There may be times when a user would like to make changes to their contact, security, or payment
information connected to their portal account. Portal users can update most information by logging
into their account and making the changes themselves, but some updates may require a user with
administrator access rights.

Updating user information begins with logging into the user portal. Once a user has logged in and is
on the portal dashboard, they can begin making changes to their information.

.. note::
   Passwords for portal users and Odoo.com users remain separate, even if the same email address is
   used.

User-driven updates
===================

Update contact info
-------------------

From the portal dashboard, click the :icon:`fa-pencil` :guilabel:`Edit information` button under the
user contact information. This brings up a new page where contact information can be updated.

On this screen, users can update their:

- :guilabel:`Your name`
- :guilabel:`Email`
- :guilabel:`Phone`
- Company name
- Mailing address
- Invoice delivery preference

Additonal fields and descriptions may appear depending on the user's location and the location of
the company that created the portal.

Once users have updated their information, they can click :guilabel:`Save Address` to save any
changes they've made or :guilabel:`Discard` to return to the portal dashboard. By default, the only
fields that need to be filled out to save users' information are their names, emails, phone numbers,
and addresses.

.. important::
   Once the system has generated any documents for a user's account, their country **cannot** be
   updated. If users need to update their country at that point, they must reach out to a user with
   administrator access rights.

.. _users-portal-payment-methods:

Update payment info
-------------------

From the portal dashboard, click the :guilabel:`Payment methods` button. This brings up a new page
that shows any saved payment methods.

To add a new payment option, choose from the available payment methods, enter the new payment
information, and click :guilabel:`Save` to save the details. To remove a payment option, click the
:icon:`fa-trash` :guilabel:`(Delete payment method)` icon, then click the :guilabel:`Confirm
Deletion` button.

.. important::
   Users that need to update payment information **must** delete any existing information and enter
   their new or updated info. Payment information **cannot** be edited and must be re-entered.

Update passwords and manage security
------------------------------------

From the portal dashboard, click the :guilabel:`Connection & Security` button. This brings up a new
page with five sections. The following sections can each be edited and updated.

Change Password
~~~~~~~~~~~~~~~

Here the user can enter their current password and a new password they wish to change to. The new
password can be saved by clicking :guilabel:`Change Password`.

Two-factor authentication
~~~~~~~~~~~~~~~~~~~~~~~~~

The user's currrent 2FA status is shownn as an alert. If 2FA is not enabled, an :guilabel:`Enable
two-factor authentication` link appears. If it is enabled, a link reading :guilabel:`Disable
two-factor authentication` appears instead.

.. tip::
   Clicking the :icon:`fa-info-circle` :guilabel:`(Documentation)` icon opens a page that explains
   how two-factor authentication (2FA) works.

Passkeys
~~~~~~~~

Click :guilabel:`Add Passkey` to create a passkey that simplifies the login process. Any previously
created passkeys are shown here, alongside information on when they were created and when they were
last used. When creating a passkey, Odoo asks for a password to confirm account ownership before
allowing a passkey to be set. Once account ownership has been confirmed, the passkey must be named
to differentiate it from other passkeys. Clicking :guilabel:`Create` brings up a browser prompt to
create the passkey. Complete the passkey creation process in the browser. They can be renamed by
clicking the :icon:`fa-pencil` :guilabel:`(pencil)` button or deleted by clicking their
:icon:`fa-trash` :guilabel:`(trash can)` button.

Revoke All Sessions
~~~~~~~~~~~~~~~~~~~

Clicking the :guilabel:`Log out from all devices` button brings up a pop-up prompting the user to
enter their password. Once they do so and click :guilabel:`Confirm Password`, the system logs them
out of all sessions except for the current one.

Delete Account
~~~~~~~~~~~~~~

Clicking the :guilabel:`Delete Account` button brings up a pop-up to completely and irrevocably
delete the user's account. Users must enter their password and their login name to complete the
process. They can also choose to have their email address and phone number added to an internal
block list to prevent any future communication.

Administrator-driven updates
============================

Accessing user information as an administrator
----------------------------------------------

First, navigate to :menuselection:`Settings app --> Users` and click :icon:`oi-arrow-right`
:guilabel:`Manage Users` Then, click the :icon:`fa-times` :guilabel:`(Remove)` icon to clear the
:guilabel:`Internal Users` search filter and use the :icon:`fa-sort-desc` :guilabel:`(Toggle Search
Panel)` button to add :guilabel:`Portal Users` as a filter. After making this selection, search for
and open the portal user that needs to be edited.

Update email address
~~~~~~~~~~~~~~~~~~~~

The :icon:`fa-envelope` :guilabel:`(Email)` field shows the email address the user uses to log into
the Odoo database. A user with administrator access rights can make any necessary changes by
clicking into the field and updating the user's email address.

.. note::
   Users **cannot** change their own login usernames. Changing the :icon:`fa-key`
   :guilabel:`(Login)` only changes the *username* on the user's portal login. Users' email
   addresses can be changed in the :guilabel:`Manage Users` module, the **Contacts** app, or by the
   users themselves in the portal.

Update passwords
~~~~~~~~~~~~~~~~

Users' security settings can be adjusted under the :guilabel:`Security` tab on their Contact form.
Under the :guilabel:`Security` tab, there are options to:

- :guilabel:`Change password` Click the :guilabel:`Change password` button to bring up a form that
  shows what logins the user has access to and enter a new password. Click :guilabel:`Change
  Password` to save the password or click :guilabel:`Cancel` to return to the previous screen.
- :guilabel:`Invite to use 2FA`. Click the :guilabel:`Invite to use 2FA` button to bring up a pop-up
  notification that an invitation to use two-factor authentication was sent.

.. seealso::
   - :doc:`Access rights </applications/general/users/access_rights>`
   - :doc:`Portal access documentation <portal_access>`
