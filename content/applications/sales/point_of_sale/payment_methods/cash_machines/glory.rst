=====
Glory
=====

**Glory** :doc:`cash machines <../cash_machines>` enable the automation of cash transactions.

.. note::
   - The integration with the Glory cash machine only supports basic functions, such as cash
     transactions and cash count checks.
   - Tasks like filling and emptying the machine must be performed directly through the cash machine
     interface.

.. _pos/glory/configuration:

Configuration
=============

Cash machine settings
---------------------

#. Power on the cash machine, which briefly displays its IP address at the bottom of the screen.
   Note it down for later.

   .. note::
      The IP address should be formatted as `###.###.#.##` (e.g., `192.168.0.25`).
#. Navigate to the cash machine's homepage by entering its IP address as the URL in `HTTPS` (e.g.,
   `https://192.168.0.25`), and log in with your Glory credentials.
#. As long as the certificate is not imported, a warning page is displayed when attempting to access
   the machine's homepage. Force the connection by clicking :guilabel:`Advanced` and
   :guilabel:`Proceed to [IP address] (unsafe)`.
#. As long as the certificate is not imported, a warning page appears when trying to access the
   machine's homepage. Bypass it by clicking :guilabel:`Advanced` and then :guilabel:`Proceed to
   [IP address] (unsafe)`.
#. From the Glory homepage, go to :guilabel:`Host Configuration` and ensure the :guilabel:`Network`
   setting is set to :guilabel:`MANUAL`, meaning the IP address is static.
#. Then, navigate to :guilabel:`SSL Configuration` and scroll down to the :guilabel:`HTTPS Server
   Setting` section.

   #. In parallel, open the terminal and verify that *OpenSSL* is installed. Type `openssl` and
      press enter. If installed, this command displays a `help` menu listing all available OpenSSL
      commands. `Install it if nothing happens <https://openssl-library.org/source/>`_.
   #. Then, paste the following command and press `Enter` to generate and download the certificate
      and private key. Ensure to replace the demo IP address with the cash machine’s IP address.

      .. code-block:: bash

         openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 3650 -nodes -subj "/CN=192.168.0.25" -addext "subjectAltName = IP:192.168.0.25"

      .. important::
         The self-signed SSL certificate and key pair must use the same static IP address as the
         cash machine.

#. Once the files are generated, from the :guilabel:`HTTPS Server Setting` section, upload
   `cert.pem` as the :guilabel:`Certificate` and `key.pem` as the :guilabel:`Private Key`.
#. Go to :guilabel:`WebApp Configuration` and ensure the :guilabel:`Interface` setting from the
   :guilabel:`A: Nodejs Setting` section is set to :guilabel:`Enable`.
#. Then, adjust the following settings depending on the POS setup:

   - If **multiple POS** are connected to the same cash machine, set the following:

     #. Go to :guilabel:`App Configuration` and scroll down to the :guilabel:`SOAP IF Setting`
        section.
     #. Ensure :guilabel:`Session mode` and :guilabel:`Occupy mode` are both set to
        :guilabel:`Enable`
   - In addition, if **a dedicated user** has been set up on the cash machine for Odoo, set the
     following:

      #. Go to :guilabel:`App Configuration` and scroll down to the :guilabel:`SOAP IF Setting`
         section.
      #. :guilabel:`Enable` the :guilabel:`User check` setting.
#. Restart the cash machine to apply the new settings.

.. note::
   As this setup is complex and may involve advanced knowledge of Glory hardware, it is advisable to
   consult the Glory integration partner for configuration if there is any uncertainty.

Import self-signed certificates
-------------------------------

For a long-term solution, the generated certificates must be imported into the device running the
POS. The import process is heavily dependent on the :abbr:`OS (Operating System)` and the browser.

.. tabs::

   .. tab:: Windows 10 OS

      Windows 10 manages certificates, which means that self-signed certificates must be imported
      from the certification files rather than the browser. To do so,

      #. Open the Windows File Explorer and locate the downloaded certification files.
      #. Right-click on the certification files and select :guilabel:`Install Certificate`.
      #. Specify the certificate location and select the installation scope: either the
         :guilabel:`Current User` only or all users (:guilabel:`Local Machine`). Then, click
         :guilabel:`Next`.
      #. On the `Certificate Store` screen, tick :guilabel:`Place all certificates in the following
         store`, click :guilabel:`Browse...`, and select :guilabel:`Trusted Root Certification
         Authorities`.
      #. Click :guilabel:`Finish` and accept the pop-up security window.
      #. Restart the computer to make sure that the changes are applied.

   .. tab:: Linux OS

      When using **Google Chrome**,

      #. Open the web browser.
      #. Navigate to :menuselection:`Settings --> Privacy and security --> Security --> Manage
         certificates`.
      #. Go to the :guilabel:`Authorities` tab, click :guilabel:`Import`, and select the exported
         certification files.
      #. Accept all warnings and click :guilabel:`ok`.
      #. Restart the web browser.

      When using **Mozilla Firefox**,

      #. Open the web browser.
      #. Navigate to :menuselection:`Settings --> Privacy & Security --> Security --> View
         Certificates... --> Import`.
      #. Select the exported certification files.
      #. Tick the checkboxes and validate.
      #. Restart the web browser.

Payment method
--------------

#. Install the :ref:`POS Glory Cash Machines module <general/install>`.
#. :doc:`Associate a cash payment method <../../payment_methods>`:

   - Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods`. Create a new
     :guilabel:`Cash` payment method or update an existing payment method.
   - Selected the associated POS in the :guilabel:`Point of Sale` field.
   - Select :guilabel:`Cash Machine (Glory)` in the :guilabel:`Integration` field.
   - Fill in the :guilabel:`Cash Machine IP` field with the IP address of the cash machine.
   - If the cash machine was configured to use :guilabel:`User check` in the previous section, fill
     in the :guilabel:`Cash Machine Username` and :guilabel:`Cash Machine Password`.
