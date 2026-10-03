.. meta::
   :description: This page describes the *Rental Orders* dashboard, the landing page of the
                 **Rental** app, covering its available views and the status, invoice, and search
                 bar filters used to organize rental orders.

=======================
Rental Orders dashboard
=======================

The *Rental Orders* dashboard serves as the landing page for the **Rental** app. It provides a
high-level view of all rental orders, with smart buttons to navigate to filtered lists of rentals.
This includes :guilabel:`Pickups`, :guilabel:`Returns`, :guilabel:`Late` returns, rentals
:guilabel:`To Confirm`, :guilabel:`To Invoice`, and any action items for :guilabel:`Today`.

To view the *Rental Orders* dashboard, open the **Rental** app or go to :menuselection:`Rental app
--> Orders --> Orders`, and the dashboard loads in the default :icon:`fa-list` :guilabel:`(List)`
view. Other available views are: :icon:`oi-view-kanban` :guilabel:`(Kanban)`, :icon:`fa-calendar`
:guilabel:`(Calendar)`, :icon:`oi-view-pivot` :guilabel:`(Pivot)`, :icon:`fa-area-chart`
:guilabel:`(Graph)`, and :icon:`fa-clock-o` :guilabel:`(Activity)`.

.. image:: rental_order_dashboard/rental-order-dashboard.png
   :alt: Example of the Rental Order Dashboard in the Rental app.

At the top of the dashboard there are six smart buttons:

- :guilabel:`Today`: Filters the dashboard to show rental orders whose :guilabel:`Pick up Date` or
  :guilabel:`Return Date` is the present date. These are rental orders with the status of
  :guilabel:`Reserved` or :guilabel:`Pickedup`. It also includes orders with late pickup or return
  dates. This filter is the default filter for the *Rental Orders* dashboard.
- :guilabel:`Pickups`: Filters the dashboard to show only rental orders with the
  :guilabel:`Reserved` status that are waiting to be picked up by the customer.
- :guilabel:`Returns`: Filters the dashboard to show only rental orders with the
  :guilabel:`Pickedup` status, and have not been returned yet. This includes both on-time and
  past-due returns.
- :guilabel:`Late`: Filters the dashboard to show only rental orders whose :guilabel:`Pick up Date`
  or :guilabel:`Return Date` is overdue.
- :guilabel:`To Confirm`: Filters the dashboard to show only unconfirmed rental quotations.
- :guilabel:`To Invoice`: Filters the dashboard to show all rental orders without an invoice
  created. This includes both :guilabel:`Reserved` and :guilabel:`Pickedup` rentals.

Every smart button displays the number of rental orders or quotations within its category. Click the
smart button to apply the filter to the search bar. Click it again to remove the filter. Multiple
smart buttons can be applied at the same time, further filtering the results.

The :icon:`fa-list` :guilabel:`(List)` view has the following columns:

- :guilabel:`Order Reference`: The unique number Odoo gives to rental quotes and orders.
- :guilabel:`Customer`: The name of the customer who requested the rental quote or order.
- :guilabel:`Status`: Displays the progression of the rental order using one of the following
  options:

  + :guilabel:`Quotation`: The rental quote is not confirmed.
  + :guilabel:`Reserved`: The rental order is confirmed, and the rental products have been scheduled
    for pickup.
  + :guilabel:`Pickedup`: The rental order is confirmed, and the rental products have been picked
    up.
  + :guilabel:`Returned`: The rental order is confirmed, and the rental products have been picked up
    and returned.
  + :guilabel:`Cancelled`: The rental quote or order is terminated.

- :guilabel:`Pick up Date`: The scheduled date on the rental order for the rental product to be
  picked up.
- :guilabel:`Return Date`: The scheduled date on the rental order for the rental product to be
  returned.
- :guilabel:`Total`: The rental quote or order's total amount with tax.
- :guilabel:`Invoice Status`: Displays the invoice stage using one of the following options:

  + :guilabel:`To invoice`: The rental order has no associated invoice.
  + :guilabel:`Fully invoiced`: The rental order either has a drafted or posted invoice. However,
    the filter doesn't include invoice payment status.
  + :guilabel:`Nothing to invoice`: The rental quote has not been confirmed yet, and thus the
    invoice amount is not finalized.

The following columns can be applied using the :icon:`oi-settings-adjust` :guilabel:`(adjust
settings)` icon: :guilabel:`Salesperson`, :guilabel:`Order Date`, :guilabel:`Sales Team`,
:guilabel:`Tags`, and :guilabel:`Activities`.

Rental orders that are late for their specified :guilabel:`Pick up Date` or :guilabel:`Return Date`
columns display in red. Rental orders without an invoice display in blue in the :guilabel:`Total`
column. At the bottom of the :guilabel:`Total` column, the total amount of all the rental quotations
and orders together is shown.


Another way to filter the dashboard is using the search bar filters. Click the search bar to view
the preconfigured filters.

Filters
=======

Refine the results using the following :guilabel:`Filters`:

- :guilabel:`My Orders`: Only shows rental quotations and orders created by the user.
- :guilabel:`Rentals` (default): Only shows rental orders.

  .. important::
     When this filter is removed from the search bar, the dashboard lists sales orders. Therefore,
     always keep the *Rentals* filter as the default one.

- :guilabel:`Today`: Shows rental orders that have the current date as the *Pickup* or *Return*
  date. It also includes orders with late pickup or return dates.
- :guilabel:`Late`: Shows rental orders with the *Pickedup* status and a past *Return* date.
- :guilabel:`Pickup Date`: Shows rental orders that have the *Reserved* status.
- :guilabel:`Return Date`: Shows rental orders that have the *Pickedup* status.

Group by
========

Group orders using any of the following options in the :guilabel:`Group By` menu:

- :guilabel:`Status`: Creates and sorts rental quotations and orders by three different stages:
  *Quotation*, *Reserved*, and *Pickedup*.
- :guilabel:`Salesperson`: Creates and sorts rental quotations and orders by the user who created
  them.
- :guilabel:`Customer`: Creates and sorts rental quotations and orders by the listed customer on the
  rental quotation and order.
- :guilabel:`Custom Group`: Creates and sorts rental quotations and orders by customized groups
  created in Odoo.

.. _rental/rental_order_dashboard/use-cases:

Use cases
=========

- :ref:`Managing a sales team <rental/rental_order_dashboard/sales-team>`
- :ref:`Managing priority rental orders for the day
  <rental/rental_order_dashboard/user-rental-orders>`

.. _rental/rental_order_dashboard/sales-team:

Managing a sales team use case
------------------------------

A manager wants to view all the rental quotes and orders from their sales team. To view their sales
team rental orders on the *Rental Orders* dashboard:

1. Click into the search bar.
#. Select :guilabel:`Salesperson` in the *Group By* section of the drop-down menu.
#. Click the :icon:`fa-setting-adjust` :guilabel:`(setting adjust)` icon and enable :guilabel:`Sales
   Team`.

Now the manager can group rental orders using the :guilabel:`Sales Team` column and see all the
rental quotes and orders each team member has done.

.. _rental/rental_order_dashboard/user-rental-orders:

Managing priority rental orders for the day use case
----------------------------------------------------

A rental store employee wants to check all rental quotes and orders that are due today or overdue.
To view all rental orders with actions due today or have overdue pickups or returns by the user:

1. Click into the search bar.
#. From the :guilabel:`Filters` section, select :guilabel:`My Orders`, :guilabel:`Today`, and
   :guilabel:`Late`.

The *Rental Orders* dashboard filters rental orders with a pickup or return date for the current day
or an overdue date.

.. seealso::
   - :doc:`create_rental_order`
   - :doc:`pickup_return`
   - :doc:`manage_deposits`
