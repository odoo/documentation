======================
Unsplash (free images)
======================

Generate an Unsplash access key
===============================

.. tip::
   **As an Odoo Online user**, you are ready to use Unsplash. You won't need to follow this guide to
   set up Unsplash information since you will use our own Odoo Unsplash key in a transparent way.

Generate an Unsplash access key for non-Odoo Online users
---------------------------------------------------------

- Create an account on `Unsplash.com <https://unsplash.com/join>`_.

- Go to your `applications dashboard <https://unsplash.com/oauth/applications>`_ and click on **New
  Application**.

.. image:: unsplash/create_app.png
   :align: center

- Accept the conditions and click on **Accept terms**.

.. image:: unsplash/accept_terms.png
   :align: center

- You will be prompted to insert an **Application name** and a **Description**. Please prefix your
  application name by "**Odoo:** " so that Unsplash can recognize it as an Odoo instance. Once done,
  click on **Create application**.

.. image:: unsplash/app_infos.png
   :align: center

- You should be redirected to your application details page. Scroll down a bit to find your **access
  key**.

.. image:: unsplash/access_key.png
   :align: center

.. warning::
   **As a non-Odoo Online user**, you won't be able to register for a production Unsplash key and
   will be limited to your test key that has a restriction of 50 Unsplash requests per hour.

Generate an Unsplash application ID
===================================

.. tip::
   You should first create and set up your Unsplash application.

- Go to your `applications dashboard <https://unsplash.com/oauth/applications>`_ and click on your
  newly created Unsplash application under **Your applications**.

.. image:: unsplash/select_app.png
    :align: center

- You will be redirected to your application details page. The **application ID** will be visible in
  your browser's URL. The URL should be something like
  ``https://unsplash.com/oauth/applications/<application_id>``

.. image:: unsplash/app_id_url.png
   :align: center

.. warning::
   **As a non-Odoo Online user**, you won't be able to register for a production Unsplash key and
   will be limited to your test key that has a 50 Unsplash requests per hour restriction.
