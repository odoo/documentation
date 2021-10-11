
Services
========

Overview
--------

The Odoo web client is organized in *components*. It is common for a component
to have a need to perform tasks or obtain some information outside of itself.

For example:


* performing an RPC
* displaying a notification
* asking the web client to change the current action/view
* ...

These kind of features are represented in the web client under the name *service*.
A service is basically a piece of code that is started with the web client, and
available to the interface (and to other services).

List of all services
--------------------

.. list-table::
   :header-rows: 1

   * - Service
     - Purpose
   * - `\ ``action_manager`` <action_manager.md>`_
     - perform actions following user interactions
   * - `\ ``command`` <../commands/command_service.md>`_
     - manage commands
   * - `\ ``crash_manager`` <crash_manager.md>`_
     - listen errors and open error dialogs
   * - `\ ``dialog_manager`` <dialog_manager.md>`_
     - open dialogs
   * - `\ ``hotkey`` <hotkey.md>`_
     - manage all keyboard shortcuts in a single place
   * - `\ ``menus`` <menus.md>`_
     - keep track of all menu items (app and submenus)
   * - `\ ``model`` <model.md>`_
     - interact with (python) models
   * - `\ ``notifications`` <notifications.md>`_
     - display a notification (or error)
   * - `\ ``popover`` <popover.md>`_
     - add/remove popover
   * - `\ ``router`` <router.md>`_
     - manage the url
   * - `\ ``rpc`` <rpc.md>`_
     - perform a RPC (in other word, call the server)
   * - `\ ``title`` <title.md>`_
     - allow to read/modify the document title
   * - `\ ``ui`` <ui.md>`_
     - miscellaneous ui features: active element, block/unblock
   * - `\ ``user`` <user.md>`_
     - keep track of user main properties (lang, ...) and context
   * - `\ ``view_manager`` <view_manager.md>`_
     - load (and keep in cache) views information


Defining a service
------------------

A service needs to follow the following interface:

.. code-block:: ts

   export interface Service<T = any> {
       dependencies?: string[];
       deploy: (env: OdooEnv, odoo: Odoo) => Promise<T> | T;
   }

It may define some ``dependencies``. In that case, the dependent services will be
started first, and ready when the current service is started.

The ``deploy`` method is the most important: the return value of the ``deploy``
method will be the value of the service. This method can be asynchronous,
in which case the value of the service will be the result of that promise.

Some services do not export any value. They may just do their work without a
need to be directly called by other code. In that case, their value will be
set to ``null`` in ``env.services``.

Once a service is defined, it needs then to be registered to the ``serviceRegistry`` ,
to make sure it is properly deployed when the application is started.

.. code-block:: ts

   serviceRegistry.add(myService.name, myService);

For example, imagine that we want to provide a service that manage a counter.
It could be defined like this:

.. code-block:: js

   const counterService = {
       start(env) {
           let value = 0;
           return {
               getValue() {
                   return value;
               },
               increment() {
                   value++;
               }
           };
       }
   };
   serviceRegistry.add("counter", counterService);

The services listed `above <./#list-of-all-services>`_ are deployed before the web client is mounted but it
is allowed to add a service to the ``serviceRegistry`` after that moment. It will be automatically deployed.

Using a service
---------------

To use a service, a component needs to call the ``useService`` hook. This will
return a reference to the service value, that can then be used by the component.

For example:

.. code-block:: js

   class MyComponent extends Component {
       rpc = useService('rpc');

       async willStart() {
           this.someValue = await this.rpc(...);
       }
   }

Note: If the value of the service is a function (for example, like the ``rpc``
service), then the ``useService`` hook will bind it to the current component. This
means that the code for the service can actually access the component reference.

A service that depends on other services (and having properly declared its ``dependencies`` )
should use the other services by accessing them directly through the environment.
For example, the service ``action_manager`` uses the service ``rpc`` in that way:

.. code-block:: js

   action = await env.services.rpc(...);
