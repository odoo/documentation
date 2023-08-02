=======================================================
How to track your website's traffic in Google Analytics
=======================================================

To follow your website's traffic with Google Analytics:

- `Create a Google Analytics account <https://www.google.com/analytics/>`__ if
  you don't have any.

- Go through the creation form and accept the conditions to get the tracking ID.

    .. image:: google_analytics/google_analytics_account.png
        :align: center

- Copy the tracking ID to insert it in Odoo.

    .. image:: google_analytics/google_analytics_tracking_id.png
        :align: center
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-217266891-1">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-217266891-1');
</script>

- Go to the *Configuration* menu of your Odoo's Website app.
  In the settings, turn on Google Analytics and paste the tracking ID.
  Then save the page.

      .. image:: google_analytics/google_analytics_settings.png
        :align: center

To make your first steps in Google Analytics, refer to `Google Documentation
<https://support.google.com/analytics/answer/1008015?hl=en/>`_.
