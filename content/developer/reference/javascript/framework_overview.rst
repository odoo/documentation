==================
Framework Overview
==================

Introduction
============

The Odoo Javascript framework is a set of features/building blocks provided by
the ``web/`` addon to help build odoo applications running in the browser. At
the same time, the Odoo Javascript framework is a single page application,
usually known as the *web client* (available at the url ``/web``).

The web client started as an application made with a custom class and widget
system, but it is now transitioning to using native javascript classes instead,
and Owl as a component system. This explains why both systems are currently in
use in the codebase.

From a high-level perspective, the web client is a single-page application: it
does not need to request a full page from the server each time the user performs
an action. Instead, it only requests what it needs and then replaces/updates the
current screen accordingly. Also, it manages the url to keep it in sync with
the current state.

The javascript framework (all or some parts) is also used in other situations,
such as the Odoo website or the point of sale. This reference is mostly focused
on the web client.

.. note::

    It is common in the Odoo ecosystem to see the words *frontend* and *backend*
    as synonyms for the odoo website (public) and the web client, respectively.
    This terminology is not to be confused with the more common use of
    browser-code (frontend) and server (backend).

.. note::

    In this documentation, the word *component* always refers to new Owl
    components, and *widget* refers to old Odoo widgets.

.. note::

    All new development should be done in Owl, if possible!

Code structure
==============

The ``web/static/src`` folder contains all the ``web/`` javascript (and css and 
templates) codebase. Here is a list of the most important folders:

- ``core/`` most of the low level features
- ``fields/`` all field components           
- ``views/`` all javascript views components (``form``, ``list``, ...)
- ``search/`` control panel, search bar, search panel, ...
- ``webclient/`` the web client specific code: navbar, user menu, action service, ...

The ``web/static/src`` is the root folder. Everything inside can simply be
imported by using the ``@web`` prefix. For example, here is how one can import
the ``memoize`` function located in ``web/static/src/core/utils/functions``:

.. code-block:: javascript 

    import { memoize } from "@web/core/utils/functions";

WebClient Architecture
======================

As mentioned above, the web client is an owl application. Here is a slightly
simplified version of its template:

.. code-block:: xml

    <t t-name="web.WebClient" owl="1">
        <body class="o_web_client">
            <NavBar/>
            <ActionContainer/>
            <MainComponentsContainer/>
        </body>
    </t>

As we can see, it basically is a wrapper for a navbar, the current action and
some additional components. The ``ActionContainer`` is a higher order component
that will display the current action controller (so, a client action, or a
specific view in the case of actions of type ``act_window``). Managing actions
is a huge part of its work: the action service keeps in memory a stack of
all active actions (represented in the breadcrumbs), and coordinates each
change.

Another interesting thing to note is the ``MainComponentsContainer``: it is
simply a component that displays all components registered in the 
``main_components`` registry. This is how other parts of the system can extend
the web client.

Building Blocks
===============

Most of the web client is built with a few types of abstractions: registries,
services, components and hooks.

Registries
----------

Registries are basically a simple key/value mapping that stores some specific
kind of objects. They are an important part of the extensibility of the UI:
once some object is registered, the rest of the web client can use it. For
example, the field registry contains all field components (or widgets) that
can be used in views.

.. code-block:: javascript

    import { registry } from "./core/registry";

    class MyFieldChar extends owl.Component {
        // some code
    }

    registry.category("fields").add("my_field_char", MyFieldChar);

Note that we import the main registry from ``@web/core/registry`` then open the
sub registry ``fields``.

Services
--------

Services are long lived pieces of code that provide a feature. They may be
imported by components (with ``useService``) or by other services. Also, they
can declare a set of dependencies. In that sense, services are basically a DI
(dependency injection) system. For example, the ``notification`` service
provides a way to display a notification, or the ``rpc`` service is the proper
way to perform a request to the Odoo server.

The following example registers a simple service that displays a notification
every 5 second:

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

Components and Hooks
--------------------

Components and hooks are ideas coming from the
`Owl component system <https://github.com/odoo/owl/blob/master/doc/readme.md>`_.
Odoo components are simply owl components that are part of the web client. 

`Hooks <https://github.com/odoo/owl/blob/master/doc/reference/hooks.md>`_ are a
way to factorize code, even if it depends on lifecycle. This is a
composable/functional way to inject a feature in a component. They can be seen
as a kind of mixin. 

.. code-block:: javascript 

    function useCurrentTime() {
        const state = useState({ now: new Date() });
        const update = () => state.now = new Date();
        let timer;
        onWillStart(() => timer = setInterval(update, 1000));
        onWillUnmount(() => clearInterval(timer));
        return state;
    }

Browser Object
==============

The javascript framework also provides a special object ``browser`` that
provides access to all browser APIs, like ``location``, ``localStorage``
or ``setTimeout``.  For example, here is how one could use the
``browser.setTimeout`` function:

.. code-block:: javascript

    import { browser } from "@web/core/browser/browser";

    // somewhere in code
    browser.setTimeout(someFunction, 1000);

It is mostly interesting for testing purposes: all code using the browser object
can be tested easily by mocking the relevant functions for the duration of the
test.

.. seealso::
    - `Owl Repository <https://github.com/odoo/owl>`_