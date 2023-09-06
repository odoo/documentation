.. _epos_ssc/ePOS printers:

=========================================
Self-signed certificate for ePOS printers
=========================================

ePOS printers are designed to work seamlessly with Point of Sale systems. Once connected, the two
devices automatically share information, enabling the direct printing of tickets from the POS system
to the ePOS printer.

.. note::
   These `Epson ePOS printers
   <https://c4b.epson-biz.com/modules/community/index.php?content_id=91>`_ are compatible with Odoo:

   - TM-H6000IV-DT (Receipt printer only)
   - TM-T70II-DT
   - TM-T88V-DT
   - TM-L90-i
   - TM-T20II-i
   - TM-T70-i
   - TM-T82II-i
   - TM-T83II-i
   - TM-T88V-i
   - TM-U220-i
   - TM-m10
   - TM-m30
   - TM-P20 (Wi-Fi® model)
   - TM-P60II (Receipt: Wi-Fi® model)
   - TM-P60II (Peeler: Wi-Fi® model)
   - TM-P80 (Wi-Fi® model)

To work with Odoo, some models that can be used without an
:doc:`IoT box <../../../productivity/iot/config/connect>` may require :doc:`the HTTPS protocol
<https>` to establish a secure connection between the browser and the printer. However, trying to
reach the printer's IP address using HTTPS leads to a warning page on most web browsers. In that
case, you can temporarily :ref:`force the connection <epos_ssc/instructions>`, which allows you to
reach the page in HTTPS and use the ePOS printer in Odoo as long as the browser window stays open.

.. warning::
   The connection is lost after closing the browser window. Therefore, this method should only be
   used as a **workaround** or as a pre-requisite for the :ref:`following instructions
   <epos_ssc/instructions>`.

.. _epos_ssc/instructions:

Generate, export, and import self-signed certificates
=====================================================

For a long-term solution, you must generate a **self-signed certificate**. Then, export and import
it into your browser.

.. important::
   **Generating** an SSL certificate should only be done **once**. If you create another
   certificate, devices using the previous one will lose HTTPS access.

.. tabs::

   .. tab:: Windows 10 & Linux OS

      .. tabs::

         .. tab:: Generate a self-signed certificate

            Navigate to the ePOS' IP address (e.g., `https://192.168.1.25`) and force the
            connection by clicking :guilabel:`Advanced` and :guilabel:`Proceed to [IP address]
            (unsafe)`.

            .. figure:: epos_ssc/browser-https-insecure.png
               :scale: 75%
               :alt: warning page about the connection privacy on Google Chrome

               Warning page on Google Chrome, Windows 10

            Then, sign in using your printer credentials to access the ePOS printer settings. To
            sign in, enter `epson` in the :guilabel:`ID` field and your printer serial number in the
            :guilabel:`Password` field.

            Click :guilabel:`Certificate List` in the :guilabel:`Authentication` section, and click
            :guilabel:`create` to generate a new **Self-Signed Certificate**. The :guilabel:`Common
            Name` should be automatically filled out. If not, fill it in with the printer IP address
            number. Select the years the certificate will be valid in the :guilabel:`Validity
            Period` field, click :guilabel:`Create`, and :guilabel:`Reset` or manually restart the
            printer.

            The self-signed certificate is generated. Reload the page and click :guilabel:`SSL/TLS`
            in the :guilabel:`Security` section to ensure **Selfsigned Certificate** is correctly
            selected in the :guilabel:`Server Certificate` section.

         .. tab:: Export a self-signed certificate

            The export process is heavily dependent on the :abbr:`OS (Operating System)` and the
            browser. Start by accessing your ePOS printer settings on your web browser by navigating
            to its IP address (e.g., `https://192.168.1.25`). Then, force the connection as
            explained in the **Generate a self-signed certificate tab**.

            If you are using **Google Chrome**,

            #. click :guilabel:`Not secure` next to the search bar, and :guilabel:`Certificate is
               not valid`;

               .. image:: epos_ssc/browser-warning.png
                  :alt: Connection to the printer not secure button in Google Chrome browser.

            #. go to the :guilabel:`Details` tab and click :guilabel:`Export`;
            #. add `.crt` at the end of the file name to ensure it has the correct extension;
            #. select :guilabel:`Base64-encoded ASCII, single certificate`, at the bottom of the
               pop-up window;
            #. save, and the certificate is exported.

            .. warning::
               Make sure that the certificate ends with the extension `.crt`. Otherwise, some
               browsers might not see the file during the import process.

            If you are using **Mozilla Firefox**,

            #. click the **lock-shaped** icon on the left of the address bar;
            #. go to :menuselection:`Connection not secure --> More information --> Security tab
               --> View certificate`;

            .. image:: epos_ssc/mozilla-not-secure.png
               :alt: Connection is not secure button in Mozilla Firefox browser

            #. scroll down to the :guilabel:`Miscellaneous` section;
            #. click :guilabel:`PEM (cert)` in the :guilabel:`Download` section;
            #. save, and the certificate is exported.

         .. tab:: Import a self-signed certificate

            The import process is heavily dependent on the :abbr:`OS (Operating System)` and the
            browser.

            .. tabs::

               .. tab:: Windows 10

                  Windows 10 manages certificates, which means that self-signed certificates must be
                  imported from the certification file rather than the browser. To do so,

                  #. open the Windows File Explorer and locate the downloaded certification file;
                  #. right-click on the certification file and click :guilabel:`Install
                     Certificate`;
                  #. select where to install the certificate and for whom - either for the
                     :guilabel:`Current User` or all users (:guilabel:`Local Machine`). Then, click
                     :guilabel:`Next`;
                  #. on the `Certificate Store` screen, tick :guilabel:`Place all certificates in
                     the following store`, click :guilabel:`Browse...`, and select
                     :guilabel:`Trusted Root Certification Authorities`;

                     .. image:: epos_ssc/win-cert-wizard-store.png

                  #. click :guilabel:`Finish`, accept the pop-up security window;
                  #. restart the computer to make sure that the changes are applied.

               .. tab:: Linux

                  If you are using **Google Chrome**,

                  #. open Chrome;
                  #. go to :menuselection:`Settings --> Privacy and security --> Security -->
                     Manage certificates`;
                  #. go to the :guilabel:`Authorities` tab, click :guilabel:`Import`, and select
                     the exported certification file;
                  #. accept all warnings;
                  #. click :guilabel:`ok`;
                  #. restart your browser.


                  If you are using **Mozilla Firefox**,

                  #. open Firefox;
                  #. go to :menuselection:`Settings --> Privacy & Security --> Security --> View
                     Certificates... --> Import`;
                  #. select the exported certification file;
                  #. tick the checkboxes and validate;
                  #. restart your browser.

   .. tab:: Mac OS

      On Mac OS, you can secure the connection for all browsers by following these steps:

      #. open Safari and navigate to your printer's IP address. Doing so leads to a warning page;
      #. on the warning page,  go to :menuselection:`Show Details --> visit this website --> Visit
         Website`, validate;
      #. reboot the printer so you can use it with any other browser.

      To generate and export an SSL certificate and send it to IOS devices, open **Google Chrome**
      or **Mozilla Firefox**. Then,

      .. tabs::

         .. tab:: Generate a self-signed certificate

            Navigate to the ePOS' IP address (e.g., `https://192.168.1.25`) and force the
            connection by clicking :guilabel:`Advanced` and :guilabel:`Proceed to [IP address]
            (unsafe)`.

            .. figure:: epos_ssc/browser-https-insecure.png
               :scale: 75%
               :alt: Warning page about the connection privacy on Google Chrome

               Warning page on Google Chrome, Windows 10

            Then, sign in using your printer credentials to access the ePOS printer settings. To
            sign in, enter `epson` in the :guilabel:`ID` field and your printer serial number in the
            :guilabel:`Password` field.

            Click :guilabel:`Certificate List` in the :guilabel:`Authentication` section, and click
            :guilabel:`create` to generate a new **Self-Signed Certificate**. The :guilabel:`Common
            Name` should be automatically filled out. If not, fill it in with the printer IP address
            number. Select the years the certificate will be valid in the :guilabel:`Validity
            Period` field, click :guilabel:`Create`, and :guilabel:`Reset` or manually restart the
            printer.

            The self-signed certificate is generated. Reload the page and click :guilabel:`SSL/TLS`
            in the :guilabel:`Security` section to ensure **Selfsigned Certificate** is correctly
            selected in the :guilabel:`Server Certificate` section.

         .. tab:: Export a self-signed certificate

            The export process is heavily dependent on the :abbr:`OS (Operating System)` and the
            browser. Start by accessing your ePOS printer settings on your web browser by navigating
            to its IP address (e.g., `https://192.168.1.25`). Then, force the connection as
            explained in the **Generate a self-signed certificate tab**.

            If you are using **Google Chrome**,

            #. click :guilabel:`Not secure` next to the search bar, and :guilabel:`Certificate is
               not valid`;

               .. image:: epos_ssc/browser-warning.png
                  :alt: Connection to the printer not secure button in Google Chrome

            #. go to the :guilabel:`Details` tab and click :guilabel:`Export`;
            #. add `.crt` at the end of the file name to ensure it has the correct extension;
            #. select :guilabel:`Base64-encoded ASCII, single certificate`, at the bottom of the
               pop-up window;
            #. save, and the certificate is exported.

            .. warning::
               Make sure that the certificate ends with the extension `.crt`. Otherwise, some
               browsers might not find the file during the import process.

            If you are using **Mozilla Firefox**,

            #. click the **lock-shaped** icon on the left of the address bar;
            #. go to :menuselection:`Connection not secure --> More information --> Security tab
               --> View certificate`;

               .. image:: epos_ssc/mozilla-not-secure.png
                  :alt: Connection is not secure button in Mozilla Firefox

            #. scroll down to the :guilabel:`Miscellaneous` section;
            #. click :guilabel:`PEM (cert)` in the :guilabel:`Download` section;
            #. save, and the certificate is exported.

   .. tab:: Android OS

      To import an SSL certificate into an Android device, first create and export it from a
      computer. Next, transfer the `.crt` file to the device using email, Bluetooth, or USB. Once
      the file is on the device,

      #. open the settings and search for `certificate`;
      #. click :guilabel:`Certificate AC` (Install from device storage);
      #. select the certificate file to install it on the device.

      .. Note::
         The specific steps for installing a certificate may vary depending on the version of
         Android and the device manufacturer.

   .. tab:: iOS

      To import an SSL certificate into an iOS device, first create and export it from a computer.
      Then, transfer the `.crt` file to the device using email, Bluetooth, or any file-sharing
      service.

      Downloading this file triggers a warning pop-up window. Click :guilabel:`Allow` to download
      the configuration profile, and close the second pop-up window. Then,

      #. go to the **Settings App** on the iOS device;
      #. click :guilabel:`Profile Downloaded` under the user's details box;
      #. locate the downloaded `.crt` file and select it;
      #. click :guilabel:`Install` on the top right of the screen;
      #. if a passcode is set on the device, enter the passcode;
      #. click :guilabel:`Install` on the top right of the certificate warning screen and the pop-up
         window;
      #. click :guilabel:`Done`.

      .. image:: epos_ssc/ssl-ios-verified.png

      The certificate is installed, but it still needs to be authenticated. To do so,

      #. go to :menuselection:`Settings --> General --> About > Certificate Trust Settings`;
      #. enable the installed certificate using the **slide button**;
      #. click :guilabel:`Continue` on the pop-up window.

.. important::
   - If you need to export SSL certificates from an operating system or web browser that has not
     been mentioned, search for `export SSL certificate` + `the name of your browser or operating
     system` in your preferred search engine.
   - Similarly, to import SSL certificates from an unmentioned OS or browser, search for `import SSL
     certificate root authority` + `the name of your browser or operating system` in your preferred
     search engine.

Check if the certificate was imported correctly
===============================================

To confirm your printer's connection is secure, connect to its IP address using HTTPS. For example,
navigate to `https://192.168.1.25` in your browser. If the SSL certificate has been applied
correctly, you should no longer see a warning page, and the address bar should display a padlock
icon, indicating that the connection is secure.
