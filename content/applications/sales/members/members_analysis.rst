================
Members analysis
================

.. |caret| replace:: :icon:`fa-caret-down` :guilabel:`(down)` icon
.. |pivot| replace:: :icon:`oi-view-pivot` :guilabel:`(pivot)` icon
.. |list| replace:: :icon:`oi-view-list` :guilabel:`(list)` icon

The *Members Analysis* report provides a detailed overview of all memberships sold and managed
within the *Members* application.

To access the *Memberships Analysis* report, navigate to :menuselection:`Members app --> Reporting`.

Navigate the report
===================

The default *Members Analysis* report displays a bar chart, measuring the :guilabel:`Quantity` of
memberships against the amount of :guilabel:`Revenue Done`. The data is grouped by the assigned
salesperson, then by the month the membership begins.

.. image:: members_analysis/example-report.png
   :align: center
   :alt: A sample of the members analysis report.

Additional :ref:`Group By <search/group>` options include the following:

- :guilabel:`Salesperson`: the internal user in charge of the contact. This information is managed
  in the *Salesperson* field on the *Sales & Purchase* tab on the contact's record.
- :guilabel:`Associated Partner`: the contact listed as the *Associated Member* on the *Membership*
  tab on the contact's record.
- :guilabel:`Membership Product`: the type of membership assigned to a contact. This includes both
  purchased memberships and free memberships.
- :guilabel:`Current Membership State`: the status of the membership.
- :guilabel:`Company`: the company the membership is purchased through. This option only appears in
  multi-company databases.
- :guilabel:`Month`: the month the membership began.

View results
============

Click the :icon:`fa-area-chart` :guilabel:`(graph)` icon to change to graph view. Then, click the
corresponding icon at the top of the report to switch to a :icon:`fa-bar-chart` :guilabel:`(bar
chart)`, :icon:`fa-line-chart` :guilabel:`(line chart)`, or :icon:`fa-pie-chart` :guilabel:`(pie
chart)`.

Click the |pivot| to change to the pivot view.

.. tip::
   The :ref:`pivot view <reporting/using-pivot>` can be used to view and analyze data in a more
   in-depth manner. Multiple measures can be selected, and data can be viewed by month, and by
   opportunity stage.

.. seealso::
   - :ref:`search/custom-filters`
   - :ref:`search/favorites`
