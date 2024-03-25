=============
Link trackers
=============

Link trackers allow you to trace the origins of your website traffic, whether from emails, banner
ads, blog posts, social media posts, affiliate links, or other sources. They let you determine which
channels bring you the most visitors and make informed decisions.

Create a traceable URL
======================

To create and manage link trackers, navigate to :menuselection:`Website --> Site --> Link Tracker`.
Fill in the following information and click :guilabel:`Get tracked link` to generate a URL you can
share.

#. :guilabel:`URL`: This field contains the URL of the page you want to track, such as your home
   page or one of your product’s pages. It is automatically populated with the URL page from which
   you access the menu. I.e., if you go to the link tracker page from one of your product pages, the
   URL will be the one of that page.

#. :guilabel:`Campaign`: The specific campaign the link is associated with. For example, if you run
   multiple campaigns on Facebook simultaneously, you can differentiate between them using this
   parameter.

#. :guilabel:`Medium`: The channel to share your link, such as an email or a social media ad.

#. :guilabel:`Source`: The traffic source, such as a search engine, a newsletter, or a website.

.. image:: link_tracker/create-link-tracker.png
   :alt: Create a link tracker URL

The :guilabel:`Campaign`, :guilabel:`Medium`, and :guilabel:`Source` parameters you set in the
:guilabel:`Link Tracker` define the :abbr:`UTM (Urchin Tracking Module)` by incorporating tags in
your tracked URL. This enables you to monitor your campaigns and gain insights into which ones are
driving traffic and conversions.

Website visibility
------------------

The :abbr:`UTM (Urchin Tracking Module)` parameters allow you to display some site elements only for
specific audiences. To achieve this, click the :guilabel:`Edit` button on your website, select the
building block for which you wish to adjust the visibility, go to the :guilabel:`Customize` tab,
scroll down to :guilabel:`Visibility`, and click :guilabel:`Conditionally`.

.. image:: link_tracker/conditional-visibility.png
   :alt: Use the conditional visibility to display some site elements only for specific audiences.

For each attribute available in the `Visibility <https://www.odoo.com/documentation/17.0/applications/websites/website/web_design/building_blocks.html#visibility>`_ section, you can choose
:guilabel:`Visible for` or :guilabel:`Hidden for` and choose the record you want from the dropdown
list.

Your tracked links
==================

To get an overview of your tracked links, go to :menuselection:`Website --> Site --> Link Tracker`,
and scroll down to :guilabel:`Your tracked links` section.

.. image:: link_tracker/your-tracked-links.png
   :alt: Get an overview of all the links you track.

Statistics
----------

Using tracked links provides the advantage of obtaining statistics to assess the performance of your
campaign, medium, and source. This allows you to determine the number of customers who visited your
website through the tracked link.

Click the yellow :guilabel:`Stats` button to view information and statistics related to a specific
tracked link:

.. image:: link_tracker/statistics.png
   :alt: View the statistics related to a specific tracked link.

Scroll down to the :guilabel:`Statistics` section to get an overview of the number of clicks of your
tracked links. You can display information for a specific period by clicking the
:guilabel:`All Time`, :guilabel:`Last Month`, or :guilabel:`Last Week` options.
