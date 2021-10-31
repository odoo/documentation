
.. _javascript/services:

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

    import { registry } from "@web/core/registry";

    const myService = {
        dependencies: ["notification"],
        start(env, { notification }) {
            let counter = 1;
            setInterval(() => {
                notification.add(`Tick Tock ${counter++}`);
            }, 5000);
        }
    };

    registry.category("services").add("myService", myService);

At startup, the web client starts all services present in the `services`
registry. Note that the name used in the registry is the name of the service.

.. note::

   Most code that is not a component should be *packaged* in a service, in
   particular if it performs some side effect.  This is very useful for testing
   purposes: tests can choose which services are active, so there are less chance
   for unwanted side effects interfering with the code being tested.

Defining a service
==================

A service needs to implement the following interface:

.. js:data:: dependencies
    
    Optional list of strings. It is the list of all dependencies (other services)
    that this service needs

.. js:function:: start(env, deps)

    :param Environment env:
    :param Object deps: all requested dependencies
    :returns: value of service or Promise<value of service>
       
    This is the main definition for the service. It can return either a value or
    a promise. In that case, the service loader simply waits for the promise to
    resolve to a value, which is then the value of the service.

    Some services do not export any value. They may just do their work without a
    need to be directly called by other code. In that case, their value will be
    set to ``null`` in ``env.services``.

.. js:data:: async
  
    Optional value. If given, it should be `true` or a list of strings.

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

Reference List
==============

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Technical Name
     - Short Description
   * - :ref:`rpc <services/rpc>`
     - send requests to the server
   * - :ref:`title <services/title>`
     - read or modify the window title
   * - :ref:`user <services/user>`
     - provides some information related to the current user

.. _services/rpc:

RPC service
-----------

Overview
~~~~~~~~

- Technical name: `rpc`
- Dependencies: none


The `rpc` service provides a single asynchronous function to send requests to
the server. Calling a controller is very simple: the route should be the first
argument and optionally, a ``params`` object can be given as a second argument.

.. code-block:: javascript

   // in setup 
   this.rpc = useService("rpc");

   // somewhere else, in an async function:
   const result = await this.rpc("/my/route", { some: "value" });

.. note::
    
    Note that the ``rpc`` service is considered a low-level service. It should
    only be used to interact with Odoo controllers. To work with models (which
    is by far the most important usecase), one should use the ``orm`` service
    instead.

API
~~~

.. js:function:: rpc(route, params, settings)

    :param string route: route targeted by the request
    :param Object params: parameters sent to the server
    :param Object settings (optional): request settings (see below)
    
    The ``settings`` object can contain:
    
    - ``xhr``, which should be a ``XMLHTTPRequest`` object. In that case,
      the ``rpc`` method will simply use it instead of creating a new one. This
      is useful when one accesses advanced features of the `XMLHTTPRequest` API.
    - ``silent (boolean)`` If set to ``true``, the web client will not provide
      a feedback that there is a pending rpc.

The ``rpc`` service communicates with the server by using a ``XMLHTTPRequest``
object, configured to work with the ``application/json`` content type. So clearly
the content of the request should be JSON serializable. Each request done by
this service uses the ``POST`` http method.

Server errors actually return the response with an http code 200. But the ``rpc``
service will treat them as error.

Error Handling
~~~~~~~~~~~~~~

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

.. _services/title:

Title Service
-------------

Overview
~~~~~~~~

- Technical name: `title`
- Dependencies: none

The `title` service offers a simple API that allows to read/modify the document
title. For example, if the current document title is "Odoo", we can change it
to "Odoo 15 - Apple" by using the following command:

.. code-block:: javascript

   // in some component setup method
   const titleService = useService("title");

   titleService.setParts({ odoo: "Odoo 15", fruit: "Apple" });

API
~~~


The ``title`` service manipulates the following interface:

.. code-block:: ts

   interface Parts {
       [key: string]: string | null;
   }

Each key represents the identity of a part of the title, and each value is the
string that is displayed, or `null` if it has been removed.

Its API is:

.. js:data:: current

   This is a string representing the current title. It is structured in the
   following way: ``value_1 - ... - value_n`` where each `value_i` is a (non null)
   value found in the `Parts` object (returned by the `getParts` function)
  
.. js:function:: getParts

   :returns: Parts the current `Parts` object maintained by the title service

.. js:function:: setParts(parts)

   :param Parts parts: object representing the required change

   The ``setParts`` method allows to add/replace/delete several parts of the title.
   Delete a part (a value) is done by setting the associated key value to `null`.

   Note that one can only modify a single part without affecting the other
   parts. For example, if the title is composed of the following parts:

   .. code-block:: javascript

      { odoo: "Odoo", action: "Import" }

   with ``current`` value being ``Odoo - Import`` , then

   .. code-block:: javascript

      setParts({
        action: null,
      });

   will change the title to ``Odoo``.


.. _services/user:

User service
------------

Overview
~~~~~~~~

* Technical name: `user`
* Dependencies: `rpc` 

The `user` service provides a bunch of data and a few helper functions concerning 
the connected user.


API
~~~

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

The `notification` service
--------------------------

Overview
~~~~~~~~

* Technical name: `notification`
* Dependencies: None

The `notification` service allows to display notifications on the screen.
  
.. code-block:: javascript

  const notificationService = useService("notification");
  notificationService.add("I'm a very simple notification"); 
  
API
~~~

.. js:function:: add(message, options?)
  
    :param string message: the notification message to display
    :param object options: the options of the notification
    :returns: a function to close the notification

    Show a notification.

The options are defined by:

.. code-block:: ts 

   @typedef {Object} NotificationOptions
   @property {string} [title]
   // Add a title to the notification
   @property {"warning" | "danger" | "success" | "info"} [type]
   // Change the background color
   @property {boolean} [sticky=false]
   // Whether or not the notification shouldn't be dismissed
   @property {string} [className]
   // Add a class name of the notification for css targetting
   @property {function(): void} [onClose]
   // Provide a callback to be executed when the notification closes
   @property {NotificationButton[]} [buttons]
   // Add buttons to the notifications. 

   @typedef {Object} NotificationButton
   @property {string} name
   // The button text
   @property {function(): void} onClick
   // The callback to execute when the button is clicked
   @property {string} [icon]
   // A font-awesome string to add an icon
   @property {boolean} [primary=false]
   // Wheter the button has the primary button style

Examples
~~~~~~~~

A notification for when a sale deal is made with a button to go some kind of commission page.

.. code-block:: javascript
    
  // in setup
  this.notificationService = useService("notification");
  this.actionService = useService("actionService");

  // later
  this.notificationService.add("You closed a deal!", {
    title: "Congrats",
    type: "success",
    buttons: [
        {
            name: "See your Commission",
            onClick: () => {
                this.actionService.doAction("commission_action");
            },
        },
    ],
  });

.. image:: images/notification_service.png
  :width: 600 px
  :alt: Example of notification
  :align: center

A notification that closes after a second

.. code-block:: javascript

  const notificationService = useService("notification");
  const close = notificationService.add("I'll will be quickly closed");
  setTimeout(close, 1000);
