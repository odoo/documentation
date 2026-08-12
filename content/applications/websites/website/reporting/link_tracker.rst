=============
Link tracking
=============

Odoo Link Tracker allows you to create shortened, trackable URLs to measure the effectiveness of
:ref:`marketing campaigns <marketing_automation/marketing_automation/campaigns>` or monitor
individual day-to-day interactions such as sending personal offers. By adding tracking parameters to
URLs, you can easily identify exactly which channels, platforms, or specific emails drive traffic to
the website and make more data-driven decisions.

.. note::
   To create and manage tracked links, the :guilabel:`Link Tracker` (`website_links`) module must be
   :ref:`installed <general/install>`.

.. _website/link_tracker/create-urls:

Create trackable URLs
=====================

To create and manage tracked links, navigate to the page you want to track. Then, go to
:menuselection:`Website --> Site --> Link Tracker`. Under :guilabel:`Create a Link tracker`, fill in
the following information:

#. :guilabel:`Target Link`: The destination URL the website visitor is sent to after clicking a
   tracked link. This field is automatically populated with the URL of the page from which the
   :guilabel:`Link Tracker` menu item was accessed.
#. :guilabel:`Campaign`: The specific campaign the link should be associated with.
#. :guilabel:`Medium`: The channel or method through which visitors reach the target link, such as
   organic search, paid search, social media ads, or email.
#. :guilabel:`Source`: The specific platform, website, or channel that directs visitors to your
   website, such as a search engine, newsletter, or referral website.
#. :guilabel:`Name`: A descriptive name for the tracked link, making it easier to identify and
   manage.

.. note::
   The parameters :guilabel:`Campaign`, :guilabel:`Medium`, and :guilabel:`Source` are optional.

.. tip::
   - You can create new campaigns, mediums, and sources in two ways:

     - **On the link tracker creation page**: Enter the desired name and click :guilabel:`Create
       option`.
     - **From the backend**: Enable the :ref:`developer-mode`, navigate to the **Link Tracker app**,
       go to :menuselection:`UTMS`, select the relevant menu item, and click :guilabel:`New`. You
       can also edit existing parameters. In addition, you can assign a :guilabel:`Responsible`
       person and add :guilabel:`Tags` for :guilabel:`Campaigns`.

   - The :guilabel:`Campaign`, :guilabel:`Medium`, and :guilabel:`Source` are :abbr:`UTM (Urchin
     Tracking Module)` :ref:`parameters <crm/marketing_attribution/add-utm-parameters>` embedded in
     the tracked URL. Beyond analytics, Odoo allows you to use these parameters to customize the
     :ref:`visibility <website/visibility/conditions>` of website building blocks.

Once completed, click :guilabel:`Generate Link Tracker` to create a shortened tracking URL. Then,
click the :icon:`fa-files-o` :guilabel:`Copy` button to copy the URL and use it in the relevant
campaign.

.. example::
   To measure the performance of a link directing visitors to a new blog post from the monthly
   newsletter, generate a tracked link directly from the blog post page as follows:

   - Create the :guilabel:`Campaign` and name it `Boost traffic` to identify the campaign's primary
     objective.
   - Set the :guilabel:`Source` to `Newsletter October` to identify the newsletter as the traffic
     source.
   - As the newsletter is distributed by email, set the :guilabel:`Medium` to `Email`.
   - The :guilabel:`Name` is `Blog Post - October Newsletter Blast` to easily identify the tracked
     link in a larger campaign.

   Generate the tracked link and include it in the newsletter to monitor its performance.

   .. image:: link_tracker/link-tracker-example.png
      :alt: Example of a link tracker.
      :scale: 75%

.. _website/link_tracker/tracked-links-overview:

Tracked links overview
======================

To view all tracked links, navigate to :menuselection:`Website --> Site --> Link Tracker` and scroll
down to the :guilabel:`Your tracked links` section.

This dashboard provides a quick overview of the tracked links, including their total number of
:guilabel:`clicks` and the associated campaign, medium, and source parameters.

Additionally, you can perform the following actions:

- :guilabel:`Copy` the link to share it with your audience.
- Click :guilabel:`Visit Link` :icon:`fa-external-link` to open the destination page associated with
  the tracked URL.

.. image:: link_tracker/tracked-links-overview.png
   :alt: Example of the tracked links overview.

.. _website/link_tracker/statistics:

Statistics
----------

To analyze the performance of a tracked link, click the link and scroll down to the
:guilabel:`Statistics` section. The following charts become available once the link has been clicked
at least once:

- A line chart showing the number of clicks over time.
- A pie chart showing the countries from which visitors clicked the tracked link.

Use the options at the top right of the `Statistics` section to display data for the :guilabel:`Last
Month`, the :guilabel:`Last Week`, or :guilabel:`All Time`.

.. seealso::
   - :ref:`Link tracker for Marketing Automation
     <marketing_automation/understanding_metrics/link-statistics>`
   - :doc:`Analyze visitors' behavior <analytics>`
