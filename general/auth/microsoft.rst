============================================================
How to allow users to sign in with their Microsoft account
============================================================

- Connect to your azure Microsoft and go to `https://apps.dev.microsoft.com/ <https://apps.dev.microsoft.com/>`_.

- Click on **Add an app**.

.. image:: media/microsoft01.png
    :align: center

- Name your new app and click **Create**.

.. image:: media/microsoft02.png
    :align: center

- On the Registration page that follows, copy the **Application Id**. This is your **client_id**.

.. image:: media/microsoft03.png
    :align: center

- Click **Generate New Password**. Copy your password. This is your **client_secret**.

.. image:: media/microsoft04.png
    :align: center

- Click **Add Platform**, then select **Web**.

.. image:: media/microsoft05.png
    :align: center

- Enter the following under **Redirect URLs**. URL: **https://mydomain.odoo.com/auth_oauth/signin** (you can replace 'mydomain.odoo.com' part with your actual domain)

.. image:: media/microsoft06.png
    :align: center

- Click **Save**

- Once done, you receive two information (your Client ID and Client Secret). You have to insert your Client ID and Client Secret in the General Settings.
