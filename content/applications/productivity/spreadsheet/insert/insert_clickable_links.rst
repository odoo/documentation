======================
Insert clickable links
======================

Adding links to related or supporting information can make your report or dashboard more
user-friendly and effective.

You can :ref:`insert a clickable link from any spreadsheet cell
<spreadsheet/insert/clickable-links-cell>` to:

- an Odoo menu item
- another sheet inside the same spreadsheet
- an external URL

You can :ref:`insert a clickable link from any chart <spreadsheet/insert/clickable-links-chart>` to
an Odoo menu item.

.. note::
   - Clicking a link to a menu item provides the same result as navigating via the Odoo menu within
     an app, e.g., the menu item :guilabel:`Sales/Orders/Quotations` corresponds to the default view
     when navigating to :menuselection:`Sales --> Orders --> Quotations`.
   - It is also possible to insert a clickable link to a specific view of a model in a spreadsheet
     starting from the view itself. However, as this method inserts each new link in a new sheet, it
     is more efficient to create links to specific views starting from the spreadsheet.

.. tip::
   Use the middle mouse button or `Ctrl` + left-click (Microsoft/Linux), or `Command` + left-click
   (Mac OS) to open clickable links in a new browser tab.

.. _spreadsheet/insert/clickable-links-cell:

Insert a clickable link from a cell
-----------------------------------

To insert a clickable link from a cell:

#. Click :menuselection:`Insert -->` :icon:`fa-link` :menuselection:`Link` from the menu bar or
   right-click on the cell, then click :icon:`fa-link` :guilabel:`Insert link`. Next, depending on
   the desired outcome, perform one of the following actions:

   - Click the :icon:`fa-bars` :guilabel:`(menu)` icon, then :guilabel:`Link an Odoo menu`. Select
     the relevant menu item from the list or click :guilabel:`Search more` to choose from a list of
     all menu items. Click :guilabel:`Confirm`.
   - Click the :icon:`fa-bars` :guilabel:`(menu)` icon, then :guilabel:`Link sheet`, then choose the
     relevant sheet from the current spreadsheet.
   - Under :guilabel:`Link`, type a URL.

#. Enter or edit the label for the link in the :guilabel:`Text` field.
#. Click :guilabel:`Confirm`.

.. _spreadsheet/insert/clickable-links-chart:

Insert a clickable link from a chart
------------------------------------

To insert a clickable link from a chart to an Odoo menu item:

#. Hover over the top right of the chart's box, then click the :icon:`fa-bars` :guilabel:`(menu)`
   icon, then :icon:`fa-pencil-square-o` :guilabel:`Edit`. The chart properties appear at the right
   of the screen.
#. At the bottom of the :icon:`fa-sliders` :guilabel:`Configuration` tab of the chart properties
   panel, click under :guilabel:`Link to Odoo menu`, then select a menu.

Hover over the top right of the chart's box to see that a new :icon:`fa-external-link`
:guilabel:`(external link)` icon has been added.
