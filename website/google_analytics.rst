:banner: banners/getting_started.jpg

================
Google Analytics
================

To setup the signin process with Google, first you have to perform the following steps:


-   Connect on your google account and go to https://console.developers.google.com

-   Click on **Create Project** and enter a project name

    .. image:: media/GC_create_project.png
        :align: center

    .. image:: media/GC_new_project.png
        :align: center

-   In the menu on left side, select the sub menu APIs (from menu APIs and auth) and activate **"Analytics API"** by clicking on button "OFF".
    When it's done, check that the button of **"Calendar API"** is well in green and with text "ON"

    .. image:: media/GC_API.png
        :align: center

    .. image:: media/GC_off_api.png
        :align: center

    .. image:: media/GC_on_api.png
        :align: center

-   In the menu on left side, select the sub menu **"Credentials"** (from menu APIs and auth) and click on button **"Create New Client ID"**

    .. image:: media/GC_credentials.png
        :align: center

    .. image:: media/GC_create_new_client_id.png
        :align: center

-   Fill in the Name of application and check that the platform is well on **"Web Application"**.
    You should now configure the allowed pages on which you will be redirected. To do it, you need to complete the field **"Redirect RI"**
    and set as value (your own domain followed by ``/google_account/authentication``) :
    You can now click on **"Create Client ID"**

    .. image:: media/GC_client_id.png
        :align: center

-   Once done, you will have the both informations (**Client ID** and **Client Secret**) that you need to insert in the 2 fields below !

    .. image:: media/GC_copy.png
        :align: center

-   Click on **Apply**
