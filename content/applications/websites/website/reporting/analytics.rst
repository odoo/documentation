=================
Website analytics
=================

Website analytics helps website owners monitor how people use their site. It provides data on
visitor demographics, behavior, and interactions, helping improve websites and marketing strategies.

You can track your Odoo website's traffic using :ref:`analytics/plausible` or
:ref:`analytics/google-analytics`. We recommend using Plausible.io as it is privacy-friendly,
lightweight, and easy to use.

.. _analytics/plausible:

Plausible.io
============

Odoo hosts its own Plausible.io server, and the Plausible Analytics dashboard is integrated into
Odoo and can be accessed via :menuselection:`Website --> Reporting --> Analytics`.

Databases hosted on Odoo Online benefit from a free, ready-to-use Plausible.io solution with
automatically generated credentials and a preconfigured Plausible account. To enable it, go to
:menuselection:`Website --> Configuration --> Settings`, then, in the :guilabel:`Tracking & SEO`
section, enable :guilabel:`Plausible Analytics`, and click :guilabel:`Save`. The credentials are
automatically filled in the :guilabel:`Shared Link Auth` and the :guilabel:`Site` fields.

.. tip::
   Click the :icon:`fa-arrow-right` :guilabel:`See Analytics Report` link to open the corresponding
   report.

.. note::
   **If you already have a Plausible.io account** and you want to connect it to your Odoo Online
   database, you must create two `ir.config.parameters` to use Plausible.io's servers. To do so,
   enable the :ref:`developer mode <developer-mode>` and go to :menuselection:`General Settings -->
   Technical --> System Parameters`. Click :guilabel:`New` and fill in the following :guilabel:`Key`
   and :guilabel:`Value` fields:

     .. list-table::
        :header-rows: 1

        * - Key
          - Value
        * - `website.plausible_script`
          - `https://plausible.io/js/plausible.js`
        * - `website.plausible_server`
          - `https://plausible.io`

   Then, go to the Plausible website and follow the steps to :ref:`set up your account
   <analytics/account-setting>` and link it to your Odoo database.

   .. warning::
      Deactivating the free Plausible.io account linked to your **Odoo Online** database
      will also remove the existing keys. As a result, new keys will be generated, while all
      historical data will remain associated with the old keys. If you plan to deactivate the
      account, it is recommended to save the existing keys to preserve access to that data.

If your database is hosted on Odoo.sh or On-premise, you need to create your own Plausible.io
account or use an existing one and link it to your database. To do so, follow these steps:

.. _analytics/account-setting:

#. `Create <https://plausible.io/register>`_ or
   `sign in <https://plausible.io/login>`_ to a Plausible.io account.
#. If you are creating a new account, go through the registration and activation steps.
   On the :guilabel:`Add a website` page, enter your website :guilabel:`Domain` name without
   including `www` or `http` (e.g., `example.com`), and click :guilabel:`Add site`. On the
   :guilabel:`Add tracking to your site` page, follow the instructions to install Plausible on your
   site. Once done, click :guilabel:`I've installed it` to proceed to the next step.
#. Once done, click the Plausible.io logo in the upper-left part of the page to access the `list of
   websites <https://plausible.io/sites>`_, then click the :icon:`fa-ellipsis-v`
   (:guilabel:`ellipsis`) icon next to the website and select :icon:`fa-cog` :guilabel:`Settings`.

   .. image:: analytics/plausible-gear-icon-settings.png
      :alt: Click the gear icon in the list of websites.

#. In the sidebar, select :guilabel:`Visibility`, then click :guilabel:`Add shared link`.
#. Enter a :guilabel:`Name`, keep the :guilabel:`Password protect` option disabled, as the Plausible
   analytics dashboard integration in Odoo does not support it, then click :guilabel:`Create
   shared link`.
#. Click :icon:`fa-files-o` :guilabel:`COPY` to add the shared link to the clipboard.

   .. image:: analytics/plausible-copy-shared-link.png
      :alt: Copy the shared link URL from Plausible.io

#. In Odoo, go to :menuselection:`Website --> Configuration --> Settings`.
#. In the :guilabel:`Tracking & SEO` section, enable :guilabel:`Plausible Analytics`, then paste the
   :guilabel:`Shared Link Auth` and click :guilabel:`Save`.

.. tip::
   - If you have :doc:`multiple websites <../configuration/multi_website>`, add them to your
     Plausible.io account by going to `<https://plausible.io/sites>`_ and clicking :guilabel:`+ Add
     Website`. In the Odoo Website settings, ensure that the correct website is selected from the
     dropdown menu at the top of the page before pasting the shared link.
   - Odoo automatically pushes two custom goals: `Lead Generation` and `Shop`.
     Custom goals can be added via Plausible.io. To do so, click the :icon:`fa-ellipsis-v`
     (:guilabel:`ellipsis`) button on the relevant website card, then navigate to :guilabel:`Goals`
     in the sidebar menu, and click :guilabel:`Add goal` :icon:`fa-caret-down`.

.. seealso::
   `Plausible Analytics documentation <https://plausible.io/docs>`_

.. _analytics/google-analytics:

Google Analytics
================

To follow your Odoo website's traffic with Google Analytics:

#. Create or sign in to a Google account using the following link: `<https://analytics.google.com>`_.
#. - If you are setting up Google Analytics for the first time, click :guilabel:`Start measuring`
     and go through the account creation step.
   - If you already have a Google Analytics account, sign in and click the :icon:`fa-cog` icon
     in the bottom-left corner of the page to access the :guilabel:`Admin` page. Then, click
     :icon:`fa-plus` :guilabel:`Create` :icon:`fa-caret-down` and select :guilabel:`Property` from
     the drop-down menu.
#. Complete the next steps: `property creation <https://support.google.com/analytics/answer/9304153?hl=en/&visit_id=638278591144564289-3612494643&rd=2#property>`_,
   :guilabel:`Business details`, and :guilabel:`Business objectives`, and click :guilabel:`Create`.
#. When you reach the :guilabel:`Data collection` step, choose the :guilabel:`Web` platform.
#. Set up your data stream: Specify your :guilabel:`Website URL` and a :guilabel:`Stream name`, then
   click :guilabel:`Create & continue` in the upper-right corner.
#. Close the :guilabel:`Set up a Google Tag` popover, as no Google Tag is required to link Google
   Analytics to Odoo.
#. In the :guilabel:`Web stream details` popover, copy the :guilabel:`Measurement ID`.

   .. image:: analytics/GA-measurement-id.png
      :alt: Measurement ID in Google Analytics.

#. In Odoo, go to :menuselection:`Website --> Configuration --> Settings`.
#. In the :guilabel:`Tracking & SEO` section, enable :guilabel:`Google Analytics`, then paste the
   measurement ID in the :guilabel:`Measurement ID or Tag` field and click :guilabel:`Save`.

.. tip::
   If you have :doc:`multiple websites <../configuration/multi_website>` with separate domains, it
   is recommended to create `one property <https://support.google.com/analytics/answer/9304153?hl=en/&visit_id=638278591144564289-3612494643&rd=2#property>`_
   per domain. In Odoo, in the **Website** settings, make sure to select the correct website in the
   field next to :icon:`fa-plus` :guilabel:`New website` at the top of the page before pasting the
   :guilabel:`Measurement ID`.

.. seealso::
   `Google documentation on setting up Analytics for a website
   <https://support.google.com/analytics/answer/1008015?hl=en/>`_

.. _analytics/google-tag-manager:

Google Tag Manager
==================

Google Tag Manager is a tag management system that allows you to easily update measurement codes and
related code fragments, collectively known as tags, on your website or mobile app, directly through
the code injector.

.. note::
   :abbr:`GTM (Google Tag Manager)` is not an analytics tool and does not offer reporting features.
   It is used to collect data and works alongside Google Analytics to provide more detailed
   insights. To use GTM properly, it is recommended to configure Google Analytics as well.

   For more information, refer to the `documentation on linking Google Analytics and
   Google Tag Manager <https://support.google.com/tagmanager/answer/9442095?hl=en>`_.

.. warning::
   - Some GTM tags use data layers (e.g., advanced eCommerce tracking data layers) to retrieve
     variables and send them to Google Analytics. Data layers are currently not managed in Odoo.
   - Google Tag Manager may not be compliant with local data protection regulations.

To configure GTM, proceed as follows:

#. Create or sign in to a Google account by going to https://tagmanager.google.com/.
#. In the :guilabel:`Accounts` tab, click :guilabel:`Create Account`.
#. Enter an :guilabel:`Account Name` and select the account's :guilabel:`Country`.
#. Enter your website's URL in the :guilabel:`Container name` field and select the :guilabel:`Target
   platform`.
#. Click :guilabel:`Create` and agree to the Terms of Service.
#. Copy the `<head>` and `<body>` codes from the pop-up window. Then, go to your website, click
   :guilabel:`Edit`, go to the :guilabel:`Theme` tab, scroll down to the :guilabel:`Advanced`
   section, then click :guilabel:`<head> and </body>` next to :guilabel:`Code Injection`
   to paste the codes, then click :guilabel:`Save`.

.. note::
   The data is collected in the marketing tools used to monitor the website (e.g., Google Analytics,
   Plausible, Facebook Pixel), not in Odoo.

.. seealso::
   `Setting up click triggers on Google
   <https://support.google.com/tagmanager/answer/7679320?hl=en&ref_topic=7679108&sjid=17684856364781654579-EU>`_
