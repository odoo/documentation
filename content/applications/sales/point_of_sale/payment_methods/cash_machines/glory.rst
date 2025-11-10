=====
Glory
=====

**Glory** :doc:`cash machines <../cash_machines>` enable the automation of cash transactions.

.. note::
   The integration with the Glory cash machine only supports basic functions, such as cash
   transactions and cash count checks.

   Tasks like filling and emptying the machine must be performed directly through the cash machine
   interface.

.. _pos/glory/configuration:

Configuration
=============

Cash machine settings
---------------------

#. Power on the cash machine, which briefly displays its IP address at the bottom of the screen. The
   IP address should be formatted as follows: `###.###.#.##` (e.g., `192.168.0.25`). Note it down
   for later.
#. Navigate to the cash machine's homepage by entering its IP address as the URL in `HTTPS` (e.g.,
   `https://192.168.0.25`), and log in with your credentials.
#. As long as the certificate is not imported, a warning page is displayed when trying to reach the
   machine homepage. Force the connection by clicking :guilabel:`Advanced` and :guilabel:`Proceed to
   [IP address] (unsafe)`.
#. As long as the certificate is not imported, a warning page appears when trying to access the
   machine's homepage. Bypass it by clicking :guilabel:`Advanced` and then :guilabel:`Proceed to
   [IP address] (unsafe)`.
#. Go to :guilabel:`Host Configuration` and ensure the :guilabel:`Network` setting is set to
   :guilabel:`MANUAL`, meaning the IP address is static.
#. Navigate to :guilabel:`SSL Configuration` and scroll down to the :guilabel:`HTTPS Server Setting`
   section.

   #. In parallel, open the terminal and verify that OpenSSL is installed. Type `openssl` and press
      enter. If installed, this command displays a `help` menu listing all available OpenSSL
      commands. Install it if nothing happens.
   #. Then, paste the following command and press `Enter` to generate and download the certificate
      and private key; ensure to replace the demo IP address with the cash machine's IP.

      .. code-block:: bash

         openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 3650 -nodes -subj "/CN=192.168.0.25" -addext "subjectAltName = IP:192.168.0.25"

      .. note::
         The self-signed SSL certificate and key pair must use the same static IP address as the
         cash machine.

#. Once the files are generated, upload `cert.pem` as the :guilabel:`Certificate` and `key.pem` as
   the :guilabel:`Private Key`.
#. Go to :guilabel:`WebApp Configuration` and ensure the :guilabel:`Interface` setting is set to
   :guilabel:`Enable`. Then, adjust some settings depending on the POS setup:

   - If **multiple POS** are connected to the same cash machine, set the following:

      #. Go to :guilabel:`App Configuration` and scroll down to the :guilabel:`SOAP IF Setting`.
      #. Ensure :guilabel:`Session mode` and :guilabel:`Occupy mode` are both set to
         :guilabel:`Enable`
   - If **a dedicated user** has been set up on the cash machine for Odoo, also set the following:

      #. Go to :guilabel:`App Configuration` and scroll down to the :guilabel:`SOAP IF Setting`.
      #. :guilabel:`Enable` the :guilabel:`User check` setting.
#. Restart the cash machine to apply the new settings.

.. note::
   As this setup is complex and may involve knowledge of Glory hardware, it is advisable to consult
   the Glory integration partner for configuration if there is any uncertainty.

Import self-signed certificates
-------------------------------

For a long-term solution, the generated certificates must be imported into the device running the
POS.

.. tabs::

   .. tab:: Windows 10 & Linux OS
      The import process is heavily dependent on the :abbr:`OS (Operating System)` and the browser.

      .. tabs::

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

      .. tabs::

         .. tab:: Export a self-signed certificate

            The export process is heavily dependent on the :abbr:`OS (Operating System)` and the
            browser. Start by accessing your ePOS printer settings on your web browser by navigating
            to its IP address (e.g., `https://192.168.1.25`). Then, force the connection as
            explained in the **Generate a self-signed certificate tab**.

            If you are using **Google Chrome**,

            #. click :guilabel:`Not secure` next to the search bar, and :guilabel:`Certificate is
               not valid`;
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
            #. scroll down to the :guilabel:`Miscellaneous` section;
            #. click :guilabel:`PEM (cert)` in the :guilabel:`Download` section;
            #. save, and the certificate is exported.

Payment method
--------------

#. Install the :ref:`POS Glory Cash Machines module <general/install>`.
#. :doc:`Associate a cash payment method <../../payment_methods>`:

   - Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods`. Create a new
     :guilabel:`Cash` payment method, or modify an existing one for the desired POS.
   - Select :guilabel:`Cash Machine (Glory)` in the :guilabel:`Integration` field.
   - Fill in the :guilabel:`Cash Machine IP` field with the the cash machine IP address.
   - If the cash machine was configured to use :guilabel:`User check` in the previous section, fill
     in the :guilabel:`Cash Machine Username` and :guilabel:`Cash Machine Password`.
