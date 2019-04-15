:banner: banners/mobile.jpg

======
Mobile
======

Setup your Firebase Cloud Messaging
===================================

Odoo is perfectly integrated with Google Notification so that you can see & manage 
your notifications coming from your Odoo instance in your mobile.

If it is not automatically configured (for instance for On-premise or
Odoo.sh) please follow these steps below to get an API key for the
android app.

.. danger::
   The iOS app doesn't support mobile notifications for Odoo
   versions < 12.

Firebase Settings
=================

Create a new project
--------------------

First, make sure you sign in with the Google Account linked to your Odoo instance. Then, go to
`https://console.firebase.google.com <https://console.firebase.google.com/>`__
and create a new project.

.. image:: media/firebase01.png
   :align: center

Choose a project name, click on **Continue**, then click on **Create
project**.

When you project is ready, click on **Continue**.

You will be redirected to the overview project page (see next
screenshot).

Add an app
----------

In the overview page, click on the Android icon.

.. image:: media/firebase02.png
   :align: center

You must use "com.odoo.com" as Android package name. Otherwise, it will
not work.

.. image:: media/firebase03.png
   :align: center

No need to download the config file, you can click on **Next** twice and
skip the fourth step.


Settings in Odoo
================

Simply select the Odoo Cloud Notifications (OCN) in the General Settings.

.. image:: media/firebase06.png
   :align: center