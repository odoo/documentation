:show-content:

===================
Restaurant features
===================

Managing a restaurant or a bar comes with specific needs. The Point of Sale application provides
various features that allow performing all the required tasks in such businesses.

Once the POS is set to be used in a restaurant or a bar, you can:

- :doc:`organize your floors and tables to reflect your interior <restaurant/floors_tables>`;
- :ref:`take orders <restaurant/orders>`;
- :doc:`communicate with the kitchen or the bar through the POS <restaurant/kitchen_printing>`;
- :doc:`print bills in advance and split them <restaurant/bill_printing>`;
- :doc:`collect tips <restaurant/tips>`; and
- :doc:`set different taxes for takeaway food <pricing/fiscal_position>`.

.. _restaurant/configuration:

Configuration
=============

To enable the restaurant and bar-specific features, go to :menuselection:`Point of Sale -->
Configuration --> Settings`, select the POS, and activate :guilabel:`Is a Bar/Restaurant`.

These features are displayed in the :guilabel:`Restaurant & Bar` section.

.. image:: restaurant/restaurant-bar-section.png
   :align: center
   :alt: restaurant and bar-specific features

.. _restaurant/orders:

Take orders
===========

Click a table to access the POS interface and start taking your customer's order. The system
automatically associates the orders and the table, allowing you to add more items later and generate
a bill specifically for that table's orders.

Once you have taken an order, click :guilabel:`Change table` to return to the floor plan view.

.. note::
   As soon as you click a table, the number of guests is automatically set to one. If you
   mistakenly select a table, click :guilabel:`Release table` to free it or :ref:`transfer the
   customer <pos/floors_tables/transfer>` to another table.

.. toctree::
   :titlesonly:

   restaurant/floors_tables
   restaurant/kitchen_printing
   restaurant/bill_printing
   restaurant/tips
