========
Services
========

Services are long lived pieces of code that provide a feature. They may be
imported by components (with ``useService``) or by other services. Also, they
can declare a set of dependencies. In that sense, services are basically a
DI :dfn:`dependency injection` system. For example, the ``notification`` service
provides a way to display a notification, or the ``rpc`` service is the proper
way to perform a request to the Odoo server.

The following example registers a simple service that displays a notification
every 5 seconds:

.. code-block:: javascript

    import { registry } from "./core/registry";

    const myService = {
        dependencies: ["notification"],
        start(env, { notification }) {
            let counter = 1;
            setInterval(() => {
                notification.add(`Tick Tock ${counter++}`);
            }, 5000);
        }
    };

    serviceRegistry.add("myService", myService);


.. note::

   Most code that is not a component should be *packaged* in a service, in
   particular if it performs some side effect.  This is very useful for testing
   purposes: tests can choose which services are active, so there are less chance
   for unwanted side effects interfering with the code being tested.

Service API
===========

A service needs to implement the following interface:

dependencies (optional, string[])
    The list of all dependencies that this service needs

start(env, deps)
    .. code-block:: text

       @param {Environment} env
       @param {{[key: string]: any}} deps all requested dependencies
       @returns {value of service or Promise<value of service>}
       
    This is the main definition for the service. It can return either a value or
    a promise. In that case, the service loader simply waits for the promise to
    resolve to a value, which is then the value of the service.

    Some services do not export any value. They may just do their work without a
    need to be directly called by other code. In that case, their value will be
    set to ``null`` in ``env.services``.

async (optional, true or string[])
    Some services need to provide an asynchronous API. For example, the `rpc`
    service is an asynchronous function, or the `orm` service provides a set of
    functions to call the Odoo server.

    In that case, it is possible for components that use a service to be
    destroyed before the end of an asynchronous function call. Most of the time,
    the asynchronous function call needs to be ignored. Doing otherwise is
    potentially very risky, because the underlying component is no longer active.
    The `async` flag is a way to do just that: it signals to the service creator
    that all asynchronous calls coming from components should be left pending if
    the component is destroyed.


At startup, the web client starts all services present in the `services`
registry. Note that the name used in the registry is the name of the service.

Using a service
===============

A service that depends on other services and has properly declared its
``dependencies`` simply receives a reference to the corresponding services
in the second argument of the ``start`` method.

The ``useService`` hook is the proper way to use a service in a component. It
simply returns a reference to the service value, that can then be used by the
component later. For example:

.. code-block:: javascript

    import { useService } from "@web/core/utils/hooks";

    class MyComponent extends Component {
      setup() {
        const rpc = useService("rpc");

        onWillStart(async () => {
          this.someValue = await rpc(...);
        });
      }
    }

The `rpc` service
=================

The `rpc` service provides a single asynchronous function to send requests to
the server. It has the following signature:

rpc(route, params, settings)
    .. code-block:: text

       @param {string} route
       @param {Object} [params] parameters sent to the server
       @param {Object} [settings] optional settings (see below)
    
    The ``settings`` object can contain:
    
    - ``xhr``, which should be a ``XMLHTTPRequest`` object. In that case,
      the ``rpc`` method will simply use it instead of creating a new one. This
      is useful when one access to advanced features of the `XMLHTTPRequest` API.
    - ``silent (boolean)`` If set to ``true``, the web client will not provide
      a feedback that there is a pending rpc.

.. note::
    
    Note that the ``rpc`` service is considered a low-level service. It should
    only be used to interact with Odoo controllers. To work with models (which
    is by far the most important usecase), one should use the ``orm`` service
    instead.

Calling a controller is very simple: the route should be the first argument, and
optionally, a ``params`` object can be given as a second argument.

.. code-block:: javascript

   const result = await this.rpc("/my/route", { some: "value" });


The ``rpc`` service communicates with the server by using a ``XMLHTTPRequest``
object, configured to work with the ``application/json`` content type. So clearly
the content of the request should be JSON serializable. Each request done by
this service uses the ``POST`` http method.

Server errors actually return the response with an http code 200. But the ``rpc``
service will treat them as error.

Error Handling
--------------

An rpc can fail for two main reasons:

* either the odoo server returns an error (so, we call this a ``server`` error).
  In that case the http request will return with an http code 200 BUT with a
  response object containing an ``error`` key.

* or there is some other kind of network error

When a rpc fails, then:

* the promise representing the rpc is rejected, so the calling code will crash,
  unless it handles the situation
* 
  an event ``RPC_ERROR`` is triggered on the main application bus. The event payload
  contains a description of the cause of the error:

  If it is a server error (the server code threw an exception). In that case
  the event payload will be an object with the following keys:


  * ``type = 'server'``
  * ``message(string)``
  * 
    ``code(number)``

  * 
    ``name(string)`` (optional, used by the error service to look for an appropriate
    dialog to use when handling the error)

  * ``subType(string)`` (optional, often used to determine the dialog title)
  * ``data(object)`` (optional object that can contain various keys among which
    ``debug`` : the main debug information, with the call stack)

  If it is a network error, then the error description is simply an object
  ``{type: 'network'}``.
  When a network error occurs, a notification is displayed and the server is regularly
  contacted until it responds. The notification is closed as soon as the server responds.

The `user` service
==================

Overview
--------

* Technical name: `user`
* Dependencies: `rpc` 

The `user` service provides a bunch of data and a few helper functions concerning 
the connected user.


API
----

.. list-table::
    :widths: 25 25 50
    :header-rows: 1

    * - Name 
      - Type
      - Description
    * - ``context``
      - ``Object``
      - The :ref:`user context<javascript/user-context>`
    * - ``db``
      - ``Object``
      - Info about the database
    * - ``home_action_id``
      - ``(number | false)``
      - Id of the action used as home for the user
    * - ``isAdmin``
      - ``boolean``
      - Whether the user is an admin (group `base.group_erp_manager` or superuser)
    * - ``isSystem``
      - ``boolean``
      - Whether the user is part of the system group (`base.group_system`)
    * - ``lang``
      - ``string``
      - language used 
    * - ``name``
      - ``string``
      - Name of the user
    * - ``partnerId``
      - ``number``
      - Id of the partner instance of the user
    * - ``tz``
      - ``string``
      - The timezone of the user
    * - ``userId``
      - ``number``
      - Id of the user
    * - ``userName``
      - ``string``
      - Alternative nick name of the user


.. js:function:: updateContext(update)

    :param object update: the object to update the context with

    update the :ref:`user context<javascript/user-context>` with the given object.

    .. code-block:: javascript

      userService.updateContext({ isFriend: true })

.. js:function:: removeFromContext(key)

    :param string key: the key of the targeted attribute

    remove the value with the given key from the :ref:`user context<javascript/user-context>`

    .. code-block:: js

      userService.removeFromContext("isFriend")

.. js:function:: hasGroup(group)

    :param string group: the xml_id of the group to look for

    :returns: `Promise<boolean>` is the user in the group

    check if the user is part of a group

    .. code-block:: js

      const isInSalesGroup = await userService.hasGroup("sale.group_sales")



