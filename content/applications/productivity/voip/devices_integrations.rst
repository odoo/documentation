=============================
VoIP devices and integrations
=============================

.. |VOIP| replace:: :abbr:`VoIP (Voice over Internet Protocol)`
.. |SIP| replace:: :abbr:`SIP (Session Initiation Protocol)`

While |VOIP| is available on Odoo's desktop experience, it can also be used through the :doc:`Odoo
mobile app <../../../administration/mobile>` and through third-party apps as well. As long as the
app is compatible with |SIP|, it can be used to make and receive calls with Odoo |VOIP|.

Odoo |VOIP| is fully integrated with the **Contacts**, **CRM**, **Sales**, and **Helpdesk** apps.
While the benefits are most clearly felt when using |VOIP| from the Odoo database, it can also be
used from apps like :ref:`Linphone <voip/linphone>` and :ref:`Zoiper Lite <voip/zoiper>`.

.. seealso::
   Using |VOIP| through the Odoo mobile app or through a third-party tool still requires a |VOIP|
   service provider. Learn more about signing a :doc:`VoIP service provider <../voip>`.

VoIP via the Odoo mobile app
============================

Odoo |VOIP| is available through mobile browsers as well as through the Odoo app (available through
the Apple App Store and Google Play Store). Odoo recommends using a mobile browser to access a
database, rather than the mobile apps.

.. danger::
   Odoo mobile apps available in app stores are no longer supported by Odoo. Learn more about
   :doc:`Odoo's mobile apps <../../../administration/mobile>`.

Make a call through the mobile app
----------------------------------

To make a call through the Odoo mobile app, first tap the :icon:`oi-voip` :guilabel:`VoIP` icon at
the top of the screen. From here, the |VOIP| widget will appear on the screen. After that, the user
can start a call using one of three ways:

- Enter the phone number to be called by clicking the :icon:`fa-keyboard` :guilabel:`(keyboard)`
  icon, and then entering the phone number.
- Click the :icon:`fa-phone` :guilabel:`(phone)` icon to redial the last called contact.
- Search for a specific contact's name or go to the :guilabel:`Contacts` tab. Then, select the
  contact and click the :icon:`fa-phone` :guilabel:`(phone)` icon.

When the first call from the mobile app is made, a prompt to allow the database to use the device's
microphone appears. When this prompt appears, click :guilabel:`Allow` to continue with the call.

.. important::
   Allowing the app to use the device's microphone is **necessary**, regardless of whether the
   mobile Odoo application or web browser is used. If permission is not granted, calls cannot be
   made from the app.

Odoo then asks how to make the call. The two options are to either use |VOIP| or use the phone's
connection. Click the box next to :guilabel:`Remember ?` should this decision be the default moving
forward.

.. _voip/zoiper:

Zoiper Lite
===========

*Zoiper Lite* third-party alternative to Odoo |VOIP|. It is a free |VOIP| |SIP| dialer with voice
and video.

To start, download the *Zoiper Lite* app from either the `Google Play Store
<https://play.google.com/store/apps/details?id=com.zoiper.android.app>`_ or `Apple's App Store
<https://apps.apple.com/us/app/zoiper-lite-voip-soft-phone/id438949960>`_. This section will cover
setting up *Zoiper Lite* for an iOS device while using :doc:`Axivox <axivox/axivox_config>` as the
|VOIP| service provider, so the experience may differ for other operating systems or |VOIP| service
providers.

Once *Zoiper Lite* is installed on the mobile device, open the app and tap :guilabel:`Settings`.
Navigate to :menuselection:`Accounts`, and tap the :guilabel:`+ (plus)` icon to add an account.

If a |VOIP| service provider is signed, then tap :guilabel:`Yes` when the app asks if the user has
an account username and password. From here, tap :guilabel:`Manual configuration` unless the |VOIP|
service provider's country is known (if it is, then tap :guilabel:`Select provider` and find the
provider through the list).

If :guilabel:`Manual configuration` was tapped, tap :guilabel:`SIP account`. From here, under
:guilabel:`SIP OPTIONS`, fill out the fields:

- :guilabel:`Account name`: How this account appears in *Zoiper Lite*. Can be anything.
- :guilabel:`Domain`: The |VOIP| service provider's domain. This is unique to each service provider
  account.
- :guilabel:`Username`: The user's |SIP| username. This is unique to each user account in the
  service provider account.
- :guilabel:`Password`: The user's |SIP| password. This is unique to each user account in the
  service provider account.

.. tip::
   To access this information through the *Axivox* portal, click :guilabel:`Users`, then choose a
   user and click :guilabel:`Edit`, and finally click the :guilabel:`SIP Identifiers` tab.

Once all of this information is entered, tap the green :guilabel:`Register` button at the top of the
screen. *Zoiper* will confirm the information, then show a message saying :guilabel:`Registration
Status: OK` if everything was correct. From here, the *Zoiper Lite* app can now be used to make and
take phone calls using the |VOIP| service.

.. _voip/linphone:

Linphone
========

*Linphone* is a third-party alternative to Odoo |VOIP|. It is a free |VOIP| |SIP| dialer with voice,
video, messaging (direct messages and group chats), and can support conference calls.

To start, download the *Linphone* app from either the `Google's Play Store
<https://play.google.com/store/apps/details?id=org.linphone>`_ or the `Apple App Store
<https://apps.apple.com/us/app/linphone/id360065638>`_. This section will cover setting up
*Linphone* for an iOS device while using :doc:`Axivox <axivox/axivox_config>` as the |VOIP| service
provider, so the experience may differ for other operating systems or |VOIP| service providers.

Once *Linphone* is installed on the mobile device, open the app and tap on :icon:`fa-bars`
:guilabel:`(menu)`. From here, tap :guilabel:`Assistant`, then tap :guilabel:`Use SIP ACCOUNT`. Read
the warning message, then tap :guilabel:`I understand`.

From here, under :guilabel:`SIP OPTIONS`, fill out the fields:

- :guilabel:`USERNAME`: The user's |SIP| username. This is unique to each user account in the
  service provider account.
- :guilabel:`PASSWORD`: The user's |SIP| password. This is unique to each user account in the
  service provider account.
- :guilabel:`DOMAIN`: The |VOIP| service provider's domain. This is
  unique to each service provider account.
- :guilabel:`DISPLAY NAME`: How this account appears in *Linphone*. Can be anything.

.. tip::
   To access this information through the *Axivox* portal, click :guilabel:`Users`, then choose a
   user and click :guilabel:`Edit`, and finally click the :guilabel:`SIP Identifiers` tab.

Tap :guilabel:`UDP` for :guilabel:`TRANSPORT`, then tap :guilabel:`LOGIN`.

From here, *Linphone* can be used to make and take calls once a green banner that says
:guilabel:`Connected` appears at the top of the screen.
