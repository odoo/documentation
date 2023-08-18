================
Google Analytics
================

Google Analytics helps website owners understand how people use their site. It provides data on
visitor demographics, behavior, and interactions, helping improve websites and marketing strategies.

To follow your Odoo website's traffic with Google Analytics:

#. Create or sign in to a Google account using the following link: `<https://analytics.google.com>`_.
#. - If you are setting up Google Analytics for the first time, click :guilabel:`Start measuring`
     and go through the account creation step.
   - If you already have a Google Analytics account, sign in and click the gear icon in the
     bottom-left corner of the page to access the **Admin** page. Then, click :guilabel:`+ Create
     Property`.

     .. image:: google_analytics/GA-add-property.png
        :alt: Measurement ID in Google Analytics.

#. Complete the next steps: `property creation <https://support.google.com/analytics/answer/9304153?hl=en/&visit_id=638278591144564289-3612494643&rd=2#property>`_,
   business details, and business objectives.
#. When you reach the **Data collection** step, choose the :guilabel:`Web` platform .

   .. image:: google_analytics/GA-platform.png
      :alt: Choose a platform for your Google Analytics property.

#. Set up your data stream: Specify your :guilabel:`Website URL` and a :guilabel:`Stream name`, then
   click :guilabel:`Create stream`.
#. Copy the :guilabel:`Measurement ID`.

   .. image:: google_analytics/GA-measurement-id.png
      :alt: Measurement ID in Google Analytics.

#. In Odoo, go to :menuselection:`Website --> Configuration --> Settings`.
#. In the :guilabel:`SEO` section, enable :guilabel:`Google Analytics`, then paste the
   :guilabel:`Measurement ID`.

.. tip::
   If you have :doc:`multiple websites <../configuration/multi_website>` with separate domains, it
   is recommended to create `one property <https://support.google.com/analytics/answer/9304153?hl=en/&visit_id=638278591144564289-3612494643&rd=2#property>`_
   per domain. In Odoo, in the **Website settings**, make sure to select the website in the
   :guilabel:`Website` field before pasting the :guilabel:`Measurement ID`.

.. seealso::
   `Google documentation on setting up Analytics for a website <https://support.google.com/analytics/answer/1008015?hl=en/>`_

.. note::
   It is no longer possible for new Google Analytics accounts to integrate their **Google Analytics
   Dashboard** inside their **Odoo Dashboard**. Since `July 2023 <https://support.google.com/analytics/answer/11583528>`_,
   **Universal Analytics** is no longer supported and has been replaced by **Analytics 4**, which
   `doesn't allow <https://issuetracker.google.com/issues/233738709?pli=1>`_ its dashboard to be
   integrated into external websites. You now have to check your Analytics data directly in the
   Google Platform.
