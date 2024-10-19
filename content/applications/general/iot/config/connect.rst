=============================
Connect an IoT System to Odoo
=============================

The IoT system needs to know to which Odoo's instance it should interact. 
This is done by **pairing** the IoT system with the Odoo instance.

Prerequisites
=============

* An Odoo database with the IoT app installed
* An IoT System

  .. seealso::
     :doc:`../iot_system`

* The IoT system connected to the enterprise network

  .. tabs::

   .. group-tab:: IoT Box
      .. seealso::
         :doc:`../iot_system/iot_box/connect`

   .. group-tab:: Windows IoT

      This can be via WiFi or Ethernet connection of the windows Computer

* A computer/mobile/tablet connected to the **same network** as the IoT system

Steps
=====

There is two ways to connect an IoT System to an Odoo database:
 A. :ref:`connect-pairing-code`
 B. :ref:`connect-token`

.. _connect-pairing-code:

Using the pairing code
----------------------
The pairing code is a unique random 6 characters code that is displayed on the IoT System screen when it starts.

.. important::
   By default, the :abbr:`IoT (Internet of Things)` box will display the *pairing code* for a
   maximum of 5 minutes after the unit boots up. After 5 minutes, the *pairing code* will disappear
   for security purposes and the :abbr:`IoT (Internet of Things)` box will need to be rebooted
   manually by unplugging the unit from the power source for ten seconds and re-plugging it back in.

1. Make sure the IoT System is powered on and connected to the network

.. tabs::

   .. group-tab:: IoT Box

      If you have the possibility to connect a screen or a printer to the IoT box (even temporarily), the steps are easier.

      .. warning::
         The screen/printer must be plugged in the IoT box before it boots up. 
         You need to reboot the IoT box if you plug the screen/printer after the boot by unplugging the power source for 10 seconds then replug it.

      .. tabs::

         .. tab:: Screen connected

            If you have a screen connected to the IoT box, the pairing code should be displayed on the screen a few minutes after the IoT box boots up.

            2. Read the pairing code displayed on the IoT box screen

         .. tab:: Printer connected
               
            If you have a printer connected to the IoT box, the pairing code should be printed automatically on boot

            2. Read the pairing code from the printed receipt

         .. tab:: No screen or printer connected

            This will be more complicated and technical as you will need to find the IP address of the IoT box.

            2. Browse to your IoT box IP address in the computer browser, this should display the IoT box homepage with the pairing code value
               
               .. note::
                  The IP address can be accessed by the router admin interface that the IoT box is connected to.
                  You can also install third-party software to scan the network and find the IoT box IP address.


   .. group-tab:: Windows IoT
      
      2. On the Windows IoT computer, make sure the IoT homepage is opened in your browser, this should display the IoT box homepage with the pairing code value

         .. note::
            The IoT homepage is accessible by browsing to `http://localhost:8069` in your browser.
            If not, it means that either there is an error in the IoT app installation or the IoT app is not installed.
            Try to re-install it and contact Odoo's support if the issue persists.


3. Navigate to the IoT app in Odoo and click on the `Connect` button. This will show a connection pop-up
4. Enter the pairing code in the `Pairing Code` field and click on the `Pair` button

   .. TODO: add pop up image once the design is ready

.. _connect-token:

Using the connection token
--------------------------
A manual connection of the :abbr:`IoT (Internet of Things)` system to the :abbr:`IoT (Internet of
Things)` app can be made using the *token*, from a computer. The *token* can be found by navigating
to :menuselection:`IoT app --> IoT Systems` and clicking on :guilabel:`Connect`.

Under the :guilabel:`WiFi Connection` section of the :guilabel:`Connect an IoT Box` page that
appears, click :guilabel:`Copy` to the right of the :guilabel:`Token`. This token will be entered
into the :abbr:`IoT (Internet of Things)` system homepage.

Access the :abbr:`IoT (Internet of Things)` system homepage by entering the :abbr:`IP (Internet
Protocol)` address of the :abbr:`IoT (Internet of Things)` system into a browser window from a computer
on the same network as the :abbr:`IoT (Internet of Things)` system (preferably by ethernet connection).

.. note::
   The :abbr:`IP (Internet Protocol)` address can be accessed by the router admin console that the
   :abbr:`IoT (Internet of Things)` system is connected to, or by connecting a receipt printer to the
   :abbr:`IoT (Internet of Things)` system. A receipt will print out with the :abbr:`IoT (Internet of
   Things)` system's :abbr:`IP (Internet Protocol)` address on it.

On the :abbr:`IoT (Internet of Things)` system homepage, enter the *token* under the :guilabel:`Server`
section by clicking on :guilabel:`Configure`. Then, paste the *token* into the :guilabel:`Server
Token` field and click :guilabel:`Connect`. The :abbr:`IoT (Internet of Things)` system will then link
to the Odoo database.

Successful Connection
=====================

If the connection is successful, the IoT system will be displayed in the IoT app under :menuselection:`IoT app --> IoT Systems`.

FAQ
===

The pairing token does not appear or does not work
--------------------------------------------------

The pairing code should be printed on receipt printers connected to the :abbr:`IoT (Internet of
Things)` box and should also be displayed on connected monitors.

The pairing code does not show under the following circumstances:

- The :abbr:`IoT (Internet of Things)` system is already connected to an Odoo database.
- The :abbr:`IoT (Internet of Things)` system is not connected to the Internet.
- The code is only valid for 5 minutes after the :abbr:`IoT (Internet of Things)` system has started.
  It is automatically removed from connected displays when this time has expired.
- The version of the :abbr:`IoT (Internet of Things)` system image is too old.

  .. seealso::
     :doc:`iot/config/flash`

You can always default to the manual connection using the connection token in case of troubles


IoT system is connected but it is not showing in the database
-------------------------------------------------------------

When an :abbr:`IoT (Internet of Things)` system connects to a database, it may restart. If so, it can
take up to five minutes before appearing in the database. If the :abbr:`IoT (Internet of Things)`
system is still not showing after five minutes, make sure that the :abbr:`IoT (Internet of Things)` system
can reach the database and that the server does not use a multi-database environment.

To access the database from the :abbr:`IoT (Internet of Things)` system, open a browser and type in the
database address.


The IoT system is connected to the Odoo database, but cannot be reached
-----------------------------------------------------------------------

Make sure that the :abbr:`IoT (Internet of Things)` system and the computer running the browser are
located on the same network, as the :abbr:`IoT (Internet of Things)` system cannot be reached from
outside the local network.


I see a yellow box warning me regarding HTTPS, what does it means?
------------------------------------------------------------------

.. seealso::
   :doc:`HTTPS certificate (IoT) <https_certificate_iot>`


The link given in Odoo IoT app redirect me to a page with an error in the browser
---------------------------------------------------------------------------------

.. seealso::
   `<iot/dns-issue-solution>`

Does it work with a on-premise/self-hosted Odoo instance ?
----------------------------------------------------------

Yes on some conditions.

You will have to be careful that your `web.base.url` is correctly set up in the Odoo System Parameter.
You can not use values such as "localhost" or "127.0.0.1" as the IoT system will not be able to connect to your Odoo instance with these values.
If your database is hosted on a local network, you will need to use the local IP address of the server hosting the Odoo instance.

.. important::
   The IoT do assume that it is a "one database" environement. If you are using a multi-database environement, the IoT system will not work.
   If you use multiple databases, you will have to make sure that the URL set target one and only one database.
