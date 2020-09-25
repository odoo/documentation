================
Plan Work Orders
================

In some cases, companies need to schedule their work orders. Doing so,
they can organize the work for the whole day and be sure everything goes
well. It helps to avoid scheduling multiple work orders at the same time
when you don’t have the capacity to do so.

With Odoo, companies can schedule the planned start date for their
manufacturing orders. No possible duplication, no potential issues with
the planning. And, if you plan two work orders at the same work center,
at the same hour, the second one will be scheduled right after the first
one, avoiding work superposition.

Create the Work Orders
======================

The first thing you need to do is to open the *Manufacturing* app.
Then, Go to the settings and enable the *Work Orders* feature.

.. image:: media/plan_work_order_01.png
    :align: center

Now, go to the *Manufacturing Orders* menu and hit *Create*. Choose
your product and add a *Planned Start Date*.

.. image:: media/plan_work_order_02.png
    :align: center

.. note::
   The “Deadline Start” field is informative. It shows you until when you
   can launch the manufacturing order to fulfill the initial demand.

Mark your *Manufacturing Order* as todo and plan it. By going to the
*Planning* menu, you can access to the scheduled orders. Here is the
one we just created:

.. image:: media/plan_work_order_03.png
    :align: center

.. note:: 
   If you plan two work orders at the same hour, the second one will be
   scheduled after the first one if the jobs need to be done at the same
   work center. The start date will, then, be automatically updated
   considering the first free slot on the work center.

If you overrun the planned date and begin the job later, you will have a
track of it in the *Time Tracking* tab of your work order.

.. image:: media/plan_work_order_04.png
    :align: center