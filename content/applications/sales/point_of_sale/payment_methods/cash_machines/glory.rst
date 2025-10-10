=====
Glory
=====

Connecting a **Glory** :doc:`cash machine <../cash_machines>` allows you to offer
cash payments that are contactless with automatic counting and change return.

.. note::
   The integration with the Glory cash machine currently only supports basic operations, such
   as making payments and checking the current cash counts.

   To perform administrative tasks such as filling and emptying the machine, you will have to
   directly use the interface on the cash machine itself. Your Glory integration partner can
   show you how to do this.

.. _pos/glory/configuration:

Configuration
=============

Configure the cash machine settings
-----------------------------------

.. important::
   This section requires knowledge of the Glory hardware - your Glory integration partner should be able to configure these settings for you.

#. Note down the cash machine's IP address, and ensure it is configured to be static. For this example we will use the IP `192.168.0.25`.

#. Navigate to the cash machine homepage at `https://192.168.0.25`, and login with your credentials.

#. Go to :menuselection:`SSL Configuration -> HTTPS Server Setting`.
   You must upload a self-signed SSL certificate and key pair that is using the same static IP that
   is configured on the cash machine. To generate such a certificate (using `openssl`), you can the following command, making sure to use the correct IP address:

   .. code-block:: bash

     openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 3650 -nodes -subj "/CN=192.168.0.25" -addext "subjectAltName = IP:192.168.0.25"

   Once the files are generated, upload `cert.pem` as the :guilabel:`Certificate` and `key.pem` as the :guilabel:`Private Key`.

#. Ensure the following settings are correct:

   - :menuselection:`WebApp Configuration -> Interface` must be enabled.

   - If mutliple Odoo POS will connect to the same cash machine, also set the following:

      - :menuselection:`App Configuration -> SOAP IF Setting -> Session mode` must be enabled.
      - :menuselection:`App Configuration -> SOAP IF Setting -> Occupy mode` must be enabled.

   - If a dedicated user has been setup on the cash machine for Odoo, also set the following:

      - :menuselection:`App Configuration -> SOAP IF Setting -> User check` must be enabled.

#. Restart the cash machine to apply the new settings.

Configure the payment method
----------------------------

#. Install the :ref:`POS Glory Cash Machines module <general/install>`.
#. :doc:`Create a new payment method <../../payment_methods>`:

   - Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods`. You can either create a new :guilabel:`Cash` payment method,
     or modify an existing one for the desired Point of Sale.

   - Select :guilabel:`Cash Machine (Glory)` in the :guilabel:`Integration` field.

   - Fill in the :guilabel:`Cash Machine IP` with the IP of the cash machine, for example `192.168.0.25`.

   - If your cash machine was configured to use :menuselection:`User check` in the previous section, you must
     also fill in the correct :guilabel:`Cash Machine Username` and :guilabel:`Cash Machine Password`.

Configure certificate settings
------------------------------

At this point the cash machine payment method is configured, but for it to work properly the
HTTPS certificate that was generated earlier must be added to the configuration of the machine
that will be using the Point of Sale. You can refer to the **Export** and **Import** sections of the
:ref:`ePOS documentation <epos_ssc/instructions>` for specific instructions.

