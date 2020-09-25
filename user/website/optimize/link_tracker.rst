=============================================
Track clicks and visitors using Link Trackers
=============================================

Link Trackers allow you to track your marketing campaigns (emails, banner ads, blog posts, social
media posts, affiliate links, etc.). This way, you are able to identify your best traffic sources
and make informed decisions about the distribution of your marketing budget.

Configuration
=============

Go to :menuselection:`Website --> Configuration --> Settings` and activate *Link Trackers*.

.. image:: media/enable_link_tracker.png
   :align: center
   :alt: View of Website settings page emphasizing the link trackers field in Odoo Website

Set up traceable URLs
---------------------

Go to :menuselection:`Website --> Go to website --> Promote --> Track this page`. Here, you are able
to get a specific tracked URL based on the campaign, medium, and source being used.

.. image:: media/link_tracker_fields.png
   :align: center
   :alt: View of the link traker fields for Odoo Website

- **URL**: url of the page you want to track (e.g. the home page or a product's page).
- **Campaign**: context of your link (e.g. a special promotion).
- **Medium**: channel used to share (deliver) your link (e.g. an email or a Facebook ad).
- **Source**: platform where the traffic originates (e.g. Google or Twitter).

Now, click on *Get tracked link* to generate a URL that you can post or send by the source you have
decided on.

Follow-up on tracked links
==========================

To look at statistics of your links, go to :menuselection:`Website --> Go to website --> Promote
--> Track this page`. Besides being able to see the *Most Clicked* and *Recently Used* links, click
on *Stats* to see complete statistics about the number of clicks and the country of origin of those
clicks.

.. image:: media/links_statistics.png
   :align: center
   :alt: View of the tracked list emphasizing the statistics buttons in Odoo Website

.. tip::

   #. You can also access the link tracker by typing *odoo.com/r* on your browser.
   #. Activate the developer mode (:menuselection:`Settings --> Activate the developer mode`) and
      get access to the *Link Tracker* module and its back-end functionalities.
   #. Integrated with :doc:`Google Analytics <google_analytics>`, those trackers allow you to see
      the number of clicks and visitors to keep you on top of your marketing campaigns.
   #. The integration with the :doc:`CRM <../../crm/track_leads/prospect_visits>` application allows
      you to understand where your leads and opportunities are coming from.