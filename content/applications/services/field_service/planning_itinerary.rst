=====================
Planning an itinerary
=====================

The :ref:`Map <studio/views/multiple-records/map>` view is available in the **Field Service** app
by default. It shows a static map where all task locations for the day are pinned. To make it more
useful for the field service workers, it is possible to display an itinerary on the map using the
:ref:`MapBox integration <general/integrations/geolocation-routes>`.

.. important::
   For a field service task to be featured on the map, a **valid address** must be provided for the
   customer.

To display your tasks on a map, go to :menuselection:`Field Service --> My Tasks --> Map`. To create
your itinerary, Odoo sorts out your field service tasks based on their :guilabel:`Planned Date` to
show the way from one location to the next.

To open your itinerary on the Google Maps website or app, click :guilabel:`View in Google Maps`.
Google Maps includes your current location as a starting point for your itinerary.

.. tip::
   - By default, the map shows today’s tasks. Remove the :guilabel:`Today` filter in the search bar
     to display all tasks. Your tasks are then sorted by date in the left column.
   - Click your task in the left column or the map pin to display the task's details. From there,
     you can :guilabel:`Open` the task or click :guilabel:`Navigate to` to get an itinerary from
     your current location to this specific task's location.
