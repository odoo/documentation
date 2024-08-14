:show-content:
:hide-page-toc:
:show-toc:

=====
Sales
=====

The Odoo **Sales** application is built to manage the entire sales process (from quotation to sales
order), including delivery and invoicing.

.. seealso::
   - `Odoo Tutorials: Sales Tutorials <https://www.odoo.com/slides/sales-17>`_

.. cards::

   .. card:: Send quotations
      :target: sales/send_quotations

      Learn everything there is know about quotations in Odoo.

   .. card:: Invoicing Method
      :target: sales/invoicing

      Discover the various invoicing methods Odoo has to offer.

   .. card:: Products & Prices
      :target: sales/products_prices

      Explore all the ways to create and manage custom products, pricelists, discounts, and so much
      more.

   .. card:: Amazon Connector
      :target: sales/amazon_connector

      Find out how to configure, connect, and manage sales with Odoo's Amazon Connector.

   .. card:: eBay Connector
      :target: sales/ebay_connector

      See how set up and link existing listings with Odoo's eBay Connector.

Sales dashboard
===============

After installing the Odoo **Sales** application, click the icon from the main dashboard to reveal
the :guilabel:`Quotations` page, which is the main dashboard of the **Sales** app.

This dashboard can be viewed in different ways: :icon:`oi-view-list` :guilabel:`List` (default),
:icon:`oi-view-kanban` :guilabel:`Kanban`, :icon:`fa-calendar` :guilabel:`Calendar`,
:icon:`oi-view-pivot` :guilabel:`Pivot`, :icon:`fa-area-chart` :guilabel:`Graph`, and
:icon:`fa-clock-o` :guilabel:`Activity`.

The views can be changed by clicking the corresponding view icon in the upper-right corner.

.. tabs::

   .. tab:: List

      The :icon:`oi-view-list` :guilabel:`List` view is the default view of the **Sales** dashboard.
      It displays all the quotations and sales orders in the database, along with their pertinent
      information and status.

      .. image:: sales/dashboard-list.png
         :align: center
         :alt: The main Sales app dashboard in the default list view.

   .. tab:: Kanban

      The :icon:`oi-view-kanban` :guilabel:`Kanban` view organizes each individual sales order or
      quotation into its own Kanban card, showcasing its vital details.

      .. image:: sales/dashboard-kanban.png
         :align: center
         :alt: The main Sales app dashboard in the Kanban view.

   .. tab:: Calendar

      The :icon:`fa-calendar` :guilabel:`Calendar` displays a customizable calendar, complete with
      sales orders and quotations placed on the days they were created.

      .. image:: sales/dashboard-calendar.png
         :align: center
         :alt: The main Sales app dashboard in the Calendar view.

   .. tab:: Pivot

      The :icon:`oi-view-pivot` :guilabel:`Pivot` view provides a configurable table, with various
      data and metric displays, allowing for detailed sales analysis.

      .. image:: sales/dashboard-pivot.png
         :align: center
         :alt: The main Sales app dashboard in the Pivot view.

   .. tab:: Graph

      The :icon:`fa-area-chart` :guilabel:`Graph` view offers multiple types of graph options, each
      with its own array of configurable :guilabel:`Measures` and metrics.

      .. image:: sales/dashboard-graph.png
         :align: center
         :alt: The main Sales app dashboard in the Graph view.

   .. tab:: Activity

      The :icon:`fa-clock-o` :guilabel:`Activity` view reveals an organized chart, showing the
      various activities associated with different salespeople, categorized by sales order and
      activity type.

      .. image:: sales/dashboard-activity.png
         :align: center
         :alt: The main Sales app dashboard in the Activity view.

.. toctree::
   :titlesonly:

   sales/send_quotations
   sales/invoicing
   sales/products_prices
   sales/amazon_connector
   sales/ebay_connector
