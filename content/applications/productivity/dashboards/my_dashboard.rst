============
My Dashboard
============

**My Dashboard** allows you to centralize the :doc:`Odoo views <../../studio/views>` you consult
most regularly, making it possible to see critical tasks at a glance without having to first
navigate through multiple apps.

My Dashboard is empty until at least one view has been added.

   .. image:: my_dashboard/my-dashboard.png
      :alt: Example of views added to My Dashboard

Views inserted in My Dashboard are fully dynamic and retain many features of the source view, e.g.,
sorting of lists, changing the measures used for a pivot table or cohort view, changing the chart
type, or clicking on a value or data point to view the underlying record(s).

.. tip::
   - It is not possible to change the domain, i.e., the :doc:`filtering or grouping
     <../../essentials/search>`, of a view that has been added to My Dashboard. To change the
     domain, make the necessary changes in the original view, then re-insert the view in My
     Dashboard and delete the originally inserted view.
   - Unlike other Odoo dashboards, My Dashboard is not based on **Odoo Spreadsheet**.

.. _dashboards/my-dashboard/add-views:

Add views
=========

Most Odoo views can be added to My Dashboard, including:

- :ref:`multiple record views <studio/views/multiple-records>` like list, kanban, and map
- :ref:`timeline views <studio/views/timeline>` like calendar, cohort, and gantt
- :ref:`reporting views <studio/views/reporting>` like pivot and graph

To add a view to My Dashboard:

#. With the relevant view open in your database, click the :icon:`fa-cog` :guilabel:`(Actions)` icon
   beside the name of the view, then :menuselection:`Dashboard`.
#. Under :guilabel:`Add to my Dashboard`, rename the view if desired, then click :guilabel:`Add`.

   .. image:: my_dashboard/add-view.png
      :alt: Adding a view to My Dashboard
      :scale: 80%

#. Refresh the page.

The added view is now visible as a widget in My Dashboard in the Dashboards app.

.. tip::
   If added views are not showing in My Dashboard, refresh the browser page.

.. _dashboards/my-dashboard/layout:

Customize layout
================

When at least one view has been added to My Dashboard, the page can be customized as follows:

- **Change the layout of the page**: Click :guilabel:`Change Layout` in the top-right corner and
  select the desired layout.

  .. tip::
     For multi-column layouts, the column limits are identified by :icon:`fa-caret-left`
     :guilabel:`(left caret)` and :icon:`fa-caret-right` :guilabel:`(right caret)` icons at the
     bottom of the page. If needed, scroll to the bottom of the page to see the column limits.

     .. image:: my_dashboard/column-limits.png
        :alt: Column limits visible at bottom of page

- **Collapse and expand widgets**: By default, an inserted widget is shown fully expanded. To
  collapse, or minimize, a widget, and show only the title, click the :icon:`fa-window-minimize`
  :guilabel:`(minimize)` icon at the top right of the widget. To expand a widget, click the
  :icon:`fa-window-maximize` :guilabel:`(maximize)` icon.
- **Move widgets**: Drag and drop widgets to the desired location in the same column or a different
  column.
- **Remove widgets**: To remove a widget from the page, click the :icon:`fa-times`
  :guilabel:`(remove)` icon.


