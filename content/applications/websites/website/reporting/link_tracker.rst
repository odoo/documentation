============
Link tracker
============

The link tracker allow you to create tracked links to measure your marketing campaigns'
effectiveness. They let you determine which channels bring you the most visitors and make informed
decisions.

Configuration
=============

The :guilabel:`Link Tracker` module is not installed by default. You need to enable the
:guilabel:`Email Marketing` option by going to :menuselection:`Website --> Configuration -->
Settings.` Alternatively, you can :doc:`install <../../../general/apps_modules>` the :guilabel:`Link
Tracker` module itself or one of the marketing apps.

Create a traceable URL
======================

To create and manage tracked links, navigate to :menuselection:`Website --> Site --> Link Tracker`.
Fill in the following information and click :guilabel:`Get tracked link` to generate a tracking URL.

#. :guilabel:`URL`: The URL which is the target of the campaign. It is automatically populated with
   the URL from where you access the menu.

#. :guilabel:`Campaign`: The specific campaign the link should be associated with. This parameter is
   used to distinguish the different campaigns.

#. :guilabel:`Medium`: The medium describes the category or method through which the visitor arrives
   at your site, such as organic search, paid search, social media ad, email, etc.

#. :guilabel:`Source`: The source identifies the precise platform or website that referred the
   visitor, such as a search engine, a newsletter, or a website.

.. image:: link_tracker/create-link-tracker.png
   :alt: Create a link tracker URL

The :guilabel:`Campaign`, :guilabel:`Medium`, and :guilabel:`Source` are called :abbr:`UTM (Urchin
Tracking Module)` parameters. They are incorporated in the tracked URL.

  .. tip::
     You can customize the :ref:`visibility <website/visibility/conditions>` of building blocks
     using the :abbr:`UTM (Urchin Tracking Module)` parameters, amongst other conditions.

Tracked links overview
======================

To get an overview of your tracked links, go to :menuselection:`Website --> Site --> Link Tracker`
and scroll down to :guilabel:`Your tracked links` section.

.. image:: link_tracker/your-tracked-links.png
   :alt: Get an overview of all the links you track.

Statistics
----------

To measure the performance of tracked links, click the :guilabel:`Stats` button.

.. image:: link_tracker/statistics.png
   :alt: View the statistics related to a specific tracked link.

Scroll down to the :guilabel:`Statistics` section to get an overview of the number of clicks of your
tracked links. You can display information for a specific period by clicking the
:guilabel:`All Time`, :guilabel:`Last Month`, or :guilabel:`Last Week` options.
