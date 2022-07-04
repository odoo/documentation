=======================================================
How to track your website's traffic in Google Analytics
=======================================================

.. warning::
  Google deprecated **Universal Analytics** which won't be supported anymore in
  `July 2023 <https://support.google.com/analytics/answer/11583528>`_. They are
  replacing it with **Analytics 4**.

  New accounts are already using it, but accounts created before `October 2020
  <https://support.google.com/analytics/answer/11583832>`_ are most likely still
  using **Universal Analytics**.

  Odoo 15.0 is already adapted and ready for **Analytics 4**. After July 2023,
  if you want to use Google Analytics tracking in versions before 15.0, you will
  need to insert the GA tracker code manually, instead of entering your GA key
  in the Odoo settings.

To follow your website's traffic with Google Analytics:

- `Create a Google Analytics account <https://www.google.com/analytics/>`__ if 
  you don't have any.

- Go through the creation form and accept the conditions to get the tracking ID.  

    .. image:: google_analytics/google_analytics_account.png
        :align: center

- Copy the tracking ID to insert it in Odoo.

    .. image:: google_analytics/google_analytics_tracking_id.png
        :align: center

- Go to the *Configuration* menu of your Odoo's Website app.
  In the settings, turn on Google Analytics and paste the tracking ID.
  Then save the page.

      .. image:: google_analytics/google_analytics_settings.png
        :align: center

To make your first steps in Google Analytics, refer to `Google Documentation
<https://support.google.com/analytics/answer/1008015?hl=en/>`_.

.. seealso::

  * :doc:`google_analytics_dashboard`