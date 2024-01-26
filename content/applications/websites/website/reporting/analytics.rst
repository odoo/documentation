=================
Website analytics
=================

Website analytics helps website owners monitor how people use their site. It provides data on
visitor demographics, behavior, and interactions, helping improve websites and marketing strategies.

You can track your Odoo website's traffic using :ref:`website/analytics/plausible` or
:ref:`website/analytics/GA`. We recommend using Plausible.io as it is privacy-friendly, lightweight,
and easy to use.

The Plausible analytics dashboard is also integrated into Odoo and can be accessed
via :menuselection:`Website --> Reporting --> Analytics`.

.. _website/analytics/plausible:

Plausible.io
============

Odoo hosts its own Plausible.io server and provides a free and ready-to-work Plausible.io
solution for **Odoo Online** databases. Odoo automatically creates and sets up your account. You can
start using it by going to :menuselection:`Website --> Reporting --> Analytics`.

.. note::
   **If you already have a Plausible.io account** and you want to connect it to your Odoo Online
   database, you must create two `ir.config.parameters` to use Plausible.io's servers. To do so,
   enable the :ref:`developer mode <developer-mode>` and go to :menuselection:`General Settings -->
   Technical -- System Parameters`. Click :guilabel:`New` and fill in the following :guilabel:`Key`
   and :guilabel:`Value` fields:

   .. list-table::
      :header-rows: 1

      * - Key
        - Value
      * - `website.plausible_script`
        - `https://plausible.io/js/plausible.js`
      * - `website.plausible_server`
        - `https://plausible.io`

   Then, follow the steps below to connect your existing account with Plausible.io servers.

If your database is hosted on **Odoo.sh** or **On-premise**, or if you wish to use your own
Plausible.io account, proceed as follows:

#. Create or sign in to a Plausible account using the following link: `<https://plausible.io/register>`_.
#. If you are creating a new account, go through the registration and activation steps. When asked
   to provide your website details, add its :guilabel:`Domain` without including `www` (e.g.,
   `example.odoo.com`) and change the :guilabel:`Reporting Timezone` if necessary. Click
   :guilabel:`Add snippet` to proceed to the next step. Ignore the :guilabel:`Add JavaScript snippet`
   instructions and click :guilabel:`Start collecting data`.
#. Once done, click the Plausible logo in the upper-left part of the page to access your `list of
   websites <https://plausible.io/sites>`_, then click the gear icon next to the website.

   .. image:: analytics/plausible-gear-icon.png
      :alt: Click the gear icon in the list of websites.

#. In the sidebar, select :guilabel:`Visibility`, then click :guilabel:`+ New link`.
#. Enter a :guilabel:`Name`, leave the :guilabel:`Password` field empty, as the Plausible analytics
   dashboard integration in Odoo doesn't support it, then click :guilabel:`Create shared link`.

   .. image:: analytics/plausible-create-sharedlink.png
      :alt: Credentials creation for the new shared link

#. Copy the shared link.

   .. image:: analytics/plausible-copy-sharedlink.png
      :alt: Copy the shared link URL from Plausible.io

#. In Odoo, go to :menuselection:`Website --> Configuration --> Settings`.
#. In the :guilabel:`SEO` section, enable :guilabel:`Plausible Analytics`, then paste the
   :guilabel:`Shared Link` and click :guilabel:`Save`.

.. tip::
   If you have :doc:`multiple websites <../configuration/multi_website>`, add your websites to your
   Plausible.io account by going to `<https://plausible.io/sites>`_ and clicking :guilabel:`+ Add
   website`. In Odoo, in the **Website settings**, make sure to select the website in the
   :guilabel:`Settings of Website` field before pasting the :guilabel:`Shared link`.

.. note::
   Odoo automatically pushes two custom goals: `Lead Generation` and `Shop`.

.. seealso::
   `Plausible Analytics documentation <https://plausible.io/docs>`_

.. _website/analytics/GA:

Google Analytics
================

To follow your Odoo website's traffic with Google Analytics:

#. Create or sign in to a Google account using the following link: `<https://analytics.google.com>`_.
#. - If you are setting up Google Analytics for the first time, click :guilabel:`Start measuring`
     and go through the account creation step.
   - If you already have a Google Analytics account, sign in and click the gear icon in the
     bottom-left corner of the page to access the **Admin** page. Then, click :guilabel:`+ Create
     Property`.

     .. image:: analytics/GA-add-property.png
        :alt: Measurement ID in Google Analytics.

#. Complete the next steps: `property creation <https://support.google.com/analytics/answer/9304153?hl=en/&visit_id=638278591144564289-3612494643&rd=2#property>`_,
   business details, and business objectives.
#. When you reach the **Data collection** step, choose the :guilabel:`Web` platform.

   .. image:: analytics/GA-platform.png
      :alt: Choose a platform for your Google Analytics property.

#. Set up your data stream: Specify your :guilabel:`Website URL` and a :guilabel:`Stream name`, then
   click :guilabel:`Create stream`.
#. Copy the :guilabel:`Measurement ID`.

   .. image:: analytics/GA-measurement-id.png
      :alt: Measurement ID in Google Analytics.

#. In Odoo, go to :menuselection:`Website --> Configuration --> Settings`.
#. In the :guilabel:`SEO` section, enable :guilabel:`Google Analytics`, then paste the
   :guilabel:`Measurement ID` and click :guilabel:`Save`.

.. tip::
   If you have :doc:`multiple websites <../configuration/multi_website>` with separate domains, it
   is recommended to create `one property <https://support.google.com/analytics/answer/9304153?hl=en/&visit_id=638278591144564289-3612494643&rd=2#property>`_
   per domain. In Odoo, in the **Website settings**, make sure to select the website in the
   :guilabel:`Settings of Website` field before pasting the :guilabel:`Measurement ID`.

.. seealso::
   `Google documentation on setting up Analytics for a website <https://support.google.com/analytics/answer/1008015?hl=en/>`_

Google Tag Manager
==================

:abbr:`GTM (Google Tag Manager)` is a tag management system that allows you to easily update
measurement codes and related code fragments, collectively known as tags on your website or mobile
app, directly through the code injector. To use GTM, proceed as follows:

#. Create or sign in to a Google account by going to https://tagmanager.google.com/.

#. In the :guilabel:`Accounts` tab, click :guilabel:`Create account`.

#. Enter an :guilabel:`Account Name` and select the account's :guilabel:`Country`.

#. Enter your website's URL in the :guilabel:`Container name` field and select the :guilabel:`Target
   platform`.

#. Click :guilabel:`Create` and agree to the Terms of Service.

#. Copy the `<head>` and `<body>` codes from the popup window. Then, go to your website, click
   :guilabel:`Edit`, go to the :guilabel:`Themes` tab, scroll down to the
   :guilabel:`Website Settings` section, then click :guilabel:`<head>` and :guilabel:`</body>` to
   paste the codes.

   .. image:: analytics/gtm-codes.png
      :alt: Install Google Tag Manager

.. note::
   The data is collected in the marketing tools used to monitor the website (e.g., Google Analytics,
   Plausible, Facebook Pixel), not in Odoo.
