=============================
Chapter 2: Odoo Web Framework
=============================

The first part of this tutorial introduced you to most of Owl ideas. It is now time to learn
about the Odoo JavaScript framework in its entirety, as used by the web client.

.. graph TD
..     subgraph "Owl"
..         C[Component]
..         T[Template]
..         H[Hook]
..         S[Slot]
..         E[Event]
..     end

..     odoo[Odoo JavaScript framework] --> Owl

.. figure:: 02_web_framework/previously_learned.svg
   :align: center
   :width: 50%

For this chapter, we will start from the empty dashboard provided by the `awesome_tshirt`
addon. We will progressively add features to it, using the Odoo JavaScript framework.

.. admonition:: Goal

   .. image:: 02_web_framework/overview_02.png
      :align: center

.. spoiler:: Solutions

   The solutions for each exercise of the chapter are hosted on the
   `official Odoo tutorials repository
   <https://github.com/odoo/tutorials/commits/{CURRENT_MAJOR_BRANCH}-solutions/awesome_tshirt>`_.

1. A new Layout
===============

Most screens in the Odoo web client uses a common layout: a control panel on top, with some buttons,
and a main content zone just below. This is done using the `Layout component
<{GITHUB_PATH}/addons/web/static/src/search/layout.js>`_, available in `@web/search/layout`.

.. exercise::

   Update the `AwesomeDashboard` component located in :file:`awesome_tshirt/static/src/` to use the
   `Layout` component. You can use
   :code:`{controlPanel: { "top-right": false, "bottom-right": false } }` for the `display` props of
   the `Layout` component.

   Open http://localhost:8069/web, then open the :guilabel:`Awesome T-Shirts` app, and see the
   result.

.. image:: 02_web_framework/new_layout.png
   :align: center

.. seealso::

   - `Example: use of Layout in client action
     <{GITHUB_PATH}/addons/web/static/src/webclient/actions/reports/report_action.js>`_ and
     `template <{GITHUB_PATH}/addons/web/static/src/webclient/actions/reports/report_action.xml>`_
   - `Example: use of Layout in kanban view
     <{GITHUB_PATH}/addons/web/static/src/views/kanban/kanban_controller.xml>`_

2. Add some buttons for quick navigation
========================================

Let us now use the action service for an easy access to the common views in Odoo.

:ref:`Services <frontend/services>` is a notion defined by the Odoo JavaScript framework; it is a
persistent piece of code that exports a state and/or functions. Each service can depend on other
services, and components can import a service with the `useService()` hook.

.. example::

   This shows how to open the settings view from a component using the action service.

   .. code-block:: js

      import { useService } from "@web/core/utils/hooks";
      ...
      setup() {
          this.action = useService("action");
      }
      openSettings() {
          this.action.doAction("base_setup.action_general_configuration");
      }
      ...

.. exercise::

   Let us add three buttons in the control panel bottom left zone.

   #. A button `Customers`, which opens a kanban view with all customers (this action already
      exists, so you should use `its xml id
      <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
      odoo/addons/base/views/res_partner_views.xml#L525>`_).
   #. A button `New Orders`, which opens a list view with all orders created in the last 7 days. Use
      the `Domain <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
      odoo/addons/web/static/src/core/domain.js#L19>`_ helper class to represent the domain.

      .. tip::
         One way to represent the desired domain could be
         :code:`[('create_date','>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d'))]`

   #. A button `Cancelled Order`, which opens a list of all orders created in the last 7 days, but
      already cancelled. Rather than defining the action twice, factorize it in a new `openOrders`
      method.

.. image:: 02_web_framework/navigation_buttons.png
   :align: center

.. seealso::
   - `Example: doAction use
     <{GITHUB_PATH}/addons/account/static/src/components/journal_dashboard_activity
     /journal_dashboard_activity.js#L35>`_
   - `Code: action service
     <{GITHUB_PATH}/addons/web/static/src/webclient/actions/action_service.js>`_

3. Call the server, add some statistics
=======================================

Let's improve the dashboard by adding a few cards (see the `Card` component :ref:`made in the
previous chapter <tutorials/discover_js_framework/generic_card>`) containing a few statistics. There
is a route `/awesome_tshirt/statistics` that performs some computations and returns an object
containing some useful information.

Whenever we need to call a specific controller, we need to use the :ref:`rpc service
<frontend/services/rpc>`. It only exports a single function that perform the request:
:code:`rpc(route, params, settings)`

Here is a short explanation on the various arguments:

- `route` is the target route, as a string. For example `/myroute/`.
- `params` is an object that contains all data that will be given to the controller. (optional)
- `settings` are for advanced controls on the request. Make it silent, or using a specific xhr
  instance. (optional)

.. example::

   A basic request could look like this:

   .. code-block:: js

      setup() {
          this.rpc = useService("rpc");
          onWillStart(async () => {
              const result = await this.rpc("/my/controller", {a: 1, b: 2});
              // ...
          });
      }

.. exercise::
   #. Change `Dashboard` so that it uses the `rpc` service.
   #. Call the statistics route `/awesome_tshirt/statistics` in the `onWillStart` hook.
   #. Display a few cards in the dashboard containing:

      - Number of new orders this month
      - Total amount of new orders this month
      - Average amount of t-shirt by order this month
      - Number of cancelled orders this month
      - Average time for an order to go from 'new' to 'sent' or 'cancelled'

.. image:: 02_web_framework/statistics.png
   :align: center

.. seealso::

   - `Code: rpc service <{GITHUB_PATH}/addons/web/static/src/core/network/rpc_service.js>`_
   - `Example: calling a route in onWillStart
     <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
     addons/lunch/static/src/views/search_model.js#L21>`_

4. Cache network calls, create a service
========================================

If you open the :guilabel:`Network` tab of your browser's dev tools, you will see that the call to
`/awesome_tshirt/statistics` is done every time the client action is displayed. This is because the
`onWillStart` hook is called each time the `Dashboard` component is mounted. But in this case, we
would prefer to do it only the first time, so we actually need to maintain some state outside of the
`Dashboard` component. This is a nice use case for a service!

.. example::

   The following example registers a simple service that displays a notification every 5 seconds.

   .. code-block:: js

      import { registry } from "@web/core/registry";
      const myService = {
          dependencies: ["notification"],
          start(env, { notification }) {
              let counter = 1;
              setInterval(() => {
                  notification.add(`Tick Tock ${counter++}`);
              }, 5000);
          },
      };
      registry.category("services").add("myService", myService);

.. exercise::

   #. Register and import a new `awesome_tshirt.statistics` service.
   #. It should provide a function `loadStatistics` that, once called, performs the actual rpc, and
      always return the same information.
   #. Use the `memoize <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
      addons/web/static/src/core/utils/functions.js#L11>`_ utility function from
      `@web/core/utils/functions` that will allow caching the statistics.
   #. Use this service in the `Dashboard` component.
   #. Check that it works as expected

.. seealso::
   - `Example: simple service <{GITHUB_PATH}/addons/web/static/src/core/network/http_service.js>`_
   - `Example: service with a dependency
     <{GITHUB_PATH}/addons/web/static/src/core/user_service.js>`_

5. Display a pie chart
======================

Everyone likes charts (!), so let us add a pie chart in our dashboard. It will display the
proportions of t-shirts sold for each size: S/M/L/XL/XXL.

For this exercise, we will use `Chart.js <https://www.chartjs.org/>`_. It is the chart library used
by the graph view. However, it is not loaded by default, so we will need to either add it to our
assets bundle, or lazy load it. Lazy loading is usually better since our users will not have to load
the chartjs code every time if they don't need it.

.. exercise::
   #. Load chartjs, you can use the `loadJs
      <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
      addons/web/static/src/core/assets.js#L23>`_ function to load
      :file:`/web/static/lib/Chart/Chart.js`.
   #. In a `Card` (from previous exercises), display a `pie chart
      <https://www.chartjs.org/docs/2.8.0/charts/doughnut.html>`_ in the dashboard that displays the
      correct quantity for each sold t-shirts in each size (that information is available in the
      statistics route).

.. image:: 02_web_framework/pie_chart.png
   :align: center
   :scale: 50%

.. seealso::
   - `Example: lazy loading a js file
     <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
     addons/web/static/src/views/graph/graph_renderer.js#L57>`_
   - `Example: rendering a chart in a component
     <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
     addons/web/static/src/views/graph/graph_renderer.js#L618>`_

6. Going further
================

Here is a list of some small improvements you could try to do if you have the time:

.. exercise::

   #. Make sure your application can be :ref:`translated <reference/translations>` (with
      `env._t`).
   #. Clicking on a section of the pie chart should open a list view of all orders which have the
      corresponding size.
   #. Add a SCSS file and see if you can change the background color of the dashboard action.

   .. image:: 02_web_framework/misc.png
      :align: center
      :scale: 50%

.. seealso::
   - `Example: use of env._t function
     <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
     addons/account/static/src/components/bills_upload/bills_upload.js#L64>`_
   - `Code: translation code in web/
     <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
     addons/web/static/src/core/l10n/translation.js#L16>`_
