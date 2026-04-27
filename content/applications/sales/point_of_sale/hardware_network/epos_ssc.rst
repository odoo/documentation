.. _epos_ssc/ePOS printers:

=========================================
Self-signed certificate for ePOS printers
=========================================

.. important::
   Since the `Chromium 142 update <https://developer.chrome.com/release-notes/142>`_, using a
   self-signed certificate is no longer required. The recommended approach is to use the
   :doc:`Local Network Access <pos_lna>` method instead.

To work with Odoo, some printer models that can be used without an :doc:`IoT system
</applications/general/iot>` may require the HTTPS protocol to establish a secure connection
between the browser and the printer. However, trying to reach the printer's IP address using HTTPS
results in a warning page in most web browsers. Force the connection to establish an HTTPS link and
enable the printer in Odoo.

.. _pos/epos-ssc/certificate:

Generation, export, and import of self-signed certificates
==========================================================

Printers that operate without an :doc:`IoT system </applications/general/iot>` still require secure
communication, which can be achieved by :ref:`generating <pos/epos-ssc/certificate-generation>`,
:ref:`exporting <pos/epos-ssc/certificate-export>`, and/or :ref:`importing
<pos/epos-ssc/certificate-import>` a self-signed certificate.

.. important::
   - Generating a self-signed certificate should only be done **once**. Creating another
     certificate causes devices using the previous one to lose HTTPS access.
   - Printers that use an :doc:`IoT system </applications/general/iot>` do not need a
     self-signed certificate, as the IoT box generates it automatically.
   - For stable results, it is strongly recommended to use the Google Chrome browser to generate
     the self-signed certificate.

.. note::
   To export self-signed certificates from an operating system or a web browser that is not
   mentioned in this documentation, search for `export SSL certificate` and the name of your
   browser or operating system in the preferred search engine. Similarly, to import self-signed
   certificates, search for `import SSL certificate root authority` in the preferred search engine.

.. _pos/epos-ssc/certificate-generation:

Self-signed certificate generation
----------------------------------

The generation process depends on the :abbr:`OS (Operating System)` and the browser.

.. tabs::

   .. group-tab:: Windows 10 & Linux

      To generate a self-signed certificate on **Google Chrome**, follow the next steps:

      #. Open the browser, type the printer's IP address in the search bar (e.g.,
         `https://192.168.1.25`), and press `Enter`.
      #. On the security warning page, click :guilabel:`Advanced`, then :guilabel:`Proceed to
         [IP address] (unsafe)` to force the connection.
      #. On the EPSON platform, click :guilabel:`Advanced Settings`, then :guilabel:`Administrator
         Login` to log in to the printer's homepage.
      #. Type the initial password located at the back of the printer in the :guilabel:`Current
         Password` field, then press `Enter`.
      #. Go to :menuselection:`Network Security --> SSL/TLS --> Certificate`.
      #. On the :guilabel:`Certificate` page, click :guilabel:`Update` under the
         :guilabel:`Self-signed Certificate` section.
      #. Adapt the :guilabel:`Common Name` field to retain only the IP address, then click
         :guilabel:`Next`, then :guilabel:`OK`. Wait for the printer's lights to stop blinking.

      .. image:: epos_ssc/browser-https-insecure.png
         :alt: Warning page about the connection privacy on Google Chrome
         :scale: 75 %

      .. note::
         The Epson homepage may vary depending on the printer model used. For the Epson TM-m30 ii,
         log in to the Epson homepage by typing `epson` as the username and the printer's serial
         number as the password.

   .. group-tab:: Mac OS

      To generate a self-signed certificate using the `Keychain Access
      <https://support.apple.com/en-gb/guide/keychain-access/kyca8916/mac>`_ app on Mac, follow the
      next steps:

      #. Access the :guilabel:`Keychain Access` app on Mac.
      #. From the menu bar, go to :menuselection:`Keychain Access --> Certificate Assistant -->
         Create a Certificate...`.
      #. Enter a name for the certificate.
      #. Select an identity type, then the type of certificate.
      #. Click :guilabel:`Create`.
      #. Review the certificate, then click :guilabel:`Done`.

.. _pos/epos-ssc/certificate-export:

Self-signed certificate export
------------------------------

The export process depends on the :abbr:`OS (Operating System)` and the browser.

.. tabs::

   .. group-tab:: Windows 10 & Linux

      .. tabs::

         .. tab:: Google Chrome

            To export the certificate, follow the next steps:

            #. Once the printer's lights are solid, hover the mouse over the browser's search bar
               and click :guilabel:`Not secure`, then :guilabel:`Certificate details`.
            #. Click the :guilabel:`Details` tab in the :guilabel:`Certificate Viewer` popover, then
               click :guilabel:`Export`.
            #. Add `.crt` next to the IP address in the :guilabel:`File name` field.
            #. Set the :guilabel:`Save as type` field to `Base64-encoded ASCII, single certificate`.
            #. Click :guilabel:`Save`.

         .. tab:: Mozilla Firefox

            To export the certificate, follow the next steps:

            #. Click :guilabel:`Not secure` next to the search bar.
            #. Go to :menuselection:`Connection not secure --> More information`.
            #. Click :guilabel:`View certificate` in the :guilabel:`Security` tab, then
               :guilabel:`Details`.
            #. Select the certificate, click :guilabel:`Export`, then select a folder in your local
               drive.
            #. Click :guilabel:`Close`.

   .. group-tab:: Mac OS

      .. tabs::

         .. tab:: Google Chrome

            To export the certificate, follow the next steps:

            #. Open the browser, type the printer's IP address in the search bar (e.g.,
               `https://192.168.1.25`), and press `Enter`.
            #. On the security warning page, click :guilabel:`Advanced`, then :guilabel:`Proceed
               to [IP address] (unsafe)` to force the connection.
            #. Click :guilabel:`Not secure` next to the search bar, then :guilabel:`Certificate is
               not valid`.
            #. Go to the :guilabel:`Details` tab and click :guilabel:`Export`.
            #. Add `.crt` at the end of the file name to ensure it has the correct extension.
            #. Select `Base64-encoded ASCII, single certificate`, at the bottom of the
               popover.
            #. Click :guilabel:`Save`.

         .. tab:: Mozilla Firefox

            To export the certificate, follow the next steps:

            #. Open the browser, type the printer's IP address in the search bar (e.g.,
               `https://192.168.1.25`), and press `Enter`.
            #. Click :guilabel:`Not secure` next to the search bar.
            #. Go to :menuselection:`Connection not secure --> More information`.
            #. Click :guilabel:`View certificate` in the :guilabel:`Security` tab, then
               :guilabel:`Details`.
            #. Select the certificate, click :guilabel:`Export`, then select a folder in your local
               drive.
            #. Click :guilabel:`Close`.

.. _pos/epos-ssc/certificate-import:

Self-signed certificate import
------------------------------

The import process depends on the :abbr:`OS (Operating System)` and the browser.

.. tabs::

   .. group-tab:: Windows 10

      To import a self-signed certificate from **Google Chrome**:

      #. Open the browser.
      #. Go to :menuselection:`Settings --> Privacy and security --> Security`, and click
         :guilabel:`Manage certificates`.
      #. Click :guilabel:`Manage imported certificates from Windows` on the :guilabel:`Certificate
         Manager` page.
      #. Click :guilabel:`Import` in the :guilabel:`Certificates` popover.
      #. In the :guilabel:`Certificate Import Wizard`, click :guilabel:`Next`, then
         :guilabel:`Browse` to select the certificate, and click :guilabel:`Next` again.
      #. Select the :guilabel:`Place all certificates in the following store` option.
      #. Click :guilabel:`Browse`, select the :guilabel:`Trusted Root Certification Authorities`
         folder, and click :guilabel:`OK`.
      #. Click :guilabel:`Next`, then :guilabel:`Finish`.
      #. Click :guilabel:`Yes` in the :guilabel:`Security Warning` popover.

      .. note::
         To import a self-signed certificate using **Mozilla Firefox** on Windows, see the steps in
         the :guilabel:`Linux` tab.

   .. group-tab:: Linux

      .. tabs::

         .. tab:: Google Chrome

            To import a self-signed certificate, follow the next steps:

            #. Open the browser.
            #. Go to :menuselection:`Settings --> Privacy and security --> Security`, and click
               :guilabel:`Manage certificates`.
            #. Click :guilabel:`Installed by you` under the :guilabel:`Custom` section on the
               :guilabel:`Local certificates` tab.
            #. Click :guilabel:`Import` next to :guilabel:`Trusted Certificates`, and select the
               exported certification file from your local drive.
            #. Accept all warnings.
            #. Click :guilabel:`ok`.

         .. tab:: Mozilla Firefox

            To import a self-signed certificate, follow the next steps:

            #. Open the browser.
            #. Go to :menuselection:`Settings --> Privacy & Security --> Security --> View
               Certificates`.
            #. In the :guilabel:`Certificate Manager` popover, click the :guilabel:`Your
               Certificates` tab, then :guilabel:`Import`, and select the certificate in your local
               drive.
            #. Click the :guilabel:`Servers` tab in the :guilabel:`Certificate Manager` popover.
            #. Click :guilabel:`Add Exception`.
            #. Enter the printer's IP address in the :guilabel:`Location` field, then click
               :guilabel:`Get Certificate`.
            #. Enable the :guilabel:`Permanently store this exception` option and confirm.

   .. group-tab:: Android OS

      .. important::
         The specific steps for installing a certificate may vary depending on the Android version
         and the device manufacturer.

      To import a self-signed certificate into an Android device, first create and export it from a
      computer. Then, transfer the `.crt` file to the device via email, Bluetooth, or USB. Once
      the file is on the device, install the EPSON ePOS SDK for JavaScript if required, then follow
      the next steps:

      #. Go to the device settings.
      #. Type `certificate` in the search bar.
      #. Click :guilabel:`Certificate AC`, then :guilabel:`Install from device storage`.
      #. Select the certificate file to install it on the device.

      .. note::
         Download the certificate on a computer if the tablet restricts direct downloads. Forward
         the file via email, then open it directly from the tablet to complete the installation.

   .. group-tab:: iOS

      To import a self-signed certificate into an iOS device, first create and export it from a
      computer. Then, transfer the `.crt` file to the device via email, Bluetooth, or any
      file-sharing service.

      Downloading this file triggers a warning popover. Click :guilabel:`Allow` to download the
      configuration profile, and close the second popover. Then follow the next steps:

      #. Go to the **Settings** app on the iOS device.
      #. Click :guilabel:`Profile Downloaded` under the user's details box.
      #. Locate the downloaded `.crt` file and select it.
      #. Click :guilabel:`Install` in the top-right corner.
      #. Enter a passcode if needed.
      #. Click :guilabel:`Install` in the top-right corner of the certificate warning screen and
         the popover.
      #. Click :guilabel:`Done`.

      Once the certificate is installed, authenticate it as follows:

      #. Go to :menuselection:`Settings --> General --> About > Certificate Trust Settings`.
      #. Enable the installed certificate using the :icon:`fa-toggle-on` (switch) toggle.
      #. Click :guilabel:`Continue` in the popover.

Certificate import verification
===============================

To confirm the printer's connection is secure, connect to its IP address using HTTPS. For example,
navigate to `https://192.168.1.25` in a browser. If the self-signed certificate has been applied
correctly, no warning page appears, and the address bar should display a padlock icon, indicating a
secure connection.
