=========================
Search and filter records
=========================

Odoo uses filters to include only the most relevant records depending on the purpose of the view you
are on. However, you can edit the default filter or search for specific values.

.. _search/preconfigured-filters:

Preconfigured filters
=====================

You can modify the default selection of records by clicking :guilabel:`Filters` and selecting one or
several **preconfigured filters**.

.. example::
   On the Sales Analysis report, only records at the sales order stage are selected by default.
   However, you could *also* include records at the quotation stage by selecting
   :guilabel:`Quotations`. Furthermore, you could *only* include records from a specific year, for
   example *2022*, by selecting :menuselection:`Order Date --> 2022`.

   .. image:: search/preconfigured-filters.png
      :align: center
      :alt: Using preconfigured filters on the Sales Analysis report

.. note::
   If you select preconfigured filters from the same group (i.e., that are *not* separated by an
   horizontal line), the records can match *any* condition to be included. However, if you select
   filters from different groups, the records have to match *all* condition to be included.

.. _search/custom-filters:

Custom filters
==============

You can create custom filters using most fields present on the model by clicking
:menuselection:`Filters --> Add Custom Filter`, selecting a field, an operator, a value, and
clicking :guilabel:`Apply`.

.. example::
   You could *only* include records from a single salesperson on the Sales Analysis report, for
   example *Mitchell Admin*, by selecting :guilabel:`Salesperson` as the field, :guilabel:`is equal
   to` as the operator, and typing `Mitchell Admin` as the value.

   .. image:: search/custom-filter.png
      :align: center
      :alt: Using a custom filter on the Sales Analysis report

.. note::
   If the records should *only* match one of several conditions, click :guilabel:`Add a condition`
   before applying a custom filter. If the records should match *all* conditions, add new custom
   filters instead.

.. _search/values:

Search for values
=================

You can use the search field to quickly look for specific values and add them as a filter. Either
type the full value you are searching for and select the desired field, or type a part of the
value, click the dropdown button (:guilabel:`⏵`) before the chosen field, and select the exact
value you are looking for.

.. example::
   Instead of adding a custom filter to select records where *Mitchell Admin* is the salesperson on
   the Sales Analysis report, you could search for `Mitch`, click the dropdown button
   (:guilabel:`⏵`) next to :guilabel:`Search Salesperson for: Mitch`, and select
   :guilabel:`Mitchell Admin`.

   .. image:: search/search-values.png
      :align: center
      :alt: Searching for a specific value on the Sales Analysis report

.. note::
   Using the search field is equivalent to using the *contains* operator when adding a custom
   filter. If you enter a partial value and directly select the desired field, *all* records
   containing the characters you typed for the selected field will be included.

.. _search/group:

Group records
=============

You can click :guilabel:`Group By` below the search field to cluster records together according to
one of the **preconfigured groups**.

.. example::
   You could group the records by salesperson on the Sales Analysis report by clicking
   :guilabel:`Group By` and selecting :guilabel:`Salesperson`. No records are filtered out.

   .. image:: search/group.png
      :align: center
      :alt: Grouping records on the Sales Analysis report

You can **customize groups** by using a wide selection of fields present on the model. To do so,
click :menuselection:`Group By --> Add Custom Group`, select a field, and click :guilabel:`Apply`.

.. note::
   You can use several groups at the same time. The first group you select is the main cluster, the
   next one you add further divides the main group's categories, and so on.
