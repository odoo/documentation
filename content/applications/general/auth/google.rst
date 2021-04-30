=======================================================
How to allow users to sign in with their Google account
=======================================================

- Connect to your Google account and go to `https://console.developers.google.com/ <https://console.developers.google.com/>`_.

- Click on **Create Project** and enter the project name and other details.

.. image:: media/google01.png
    :align: center

.. image:: media/google02.png
    :align: center

- Click on **Use Google APIs**

.. image:: media/google03.png
    :align: center

- On the left side menu, select the sub menu **Credentials** (from **API Manager**) then select **OAuth consent screen**.

.. image:: media/google04.png
    :align: center

- Fill in your address, email and the product name (for example odoo) and then save.

.. image:: media/google05.png
    :align: center

- Then click on **Add Credentials** and select the second option (OAuth 2.0 Client ID).

.. image:: media/google06.png
    :align: center

.. image:: media/google07.png
    :align: center

- Check that the application type is set on **Web Application**. Now configure the allowed pages on which you will be redirected.

- To achieve this, complete the field **Authorized redirect URIs**. Copy paste the following link in the box: http://mydomain.odoo.com/auth_oauth/signin. Then click on **Create**

.. image:: media/google08.png
    :align: center

.. image:: media/google09.png
    :align: center

- Once done, you receive two information (your Client ID and Client Secret). You have to insert your Client ID in the **General Settings**.
