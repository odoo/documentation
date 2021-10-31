=====
Hooks
=====

`Owl hooks <https://github.com/odoo/owl/blob/master/doc/reference/hooks.md>`_ are a
way to factorize code, even if it depends on some component lifecycle. Most hooks
provided by Owl are related to the lifecycle of a component, but some of them (such as 
`useComponent <https://github.com/odoo/owl/blob/master/doc/reference/hooks.md#usecomponent>`_)
provide a way to build specific hooks.

Using these hooks, it is possible to build many customized hooks that help solve
a specific problem, or make some common tasks easier. The rest of this page
documents the list of hooks provided by the Odoo web framework.

useBus
======

Location
--------

`@web/core/utils/hooks`

Description
-----------

Add and clear an event listener to a bus. This hook ensures that
the listener is properly cleared when the component is unmounted.

.. code-block:: javascript

    import { useBus } from "@web/core/utils/hooks";

    class MyComponent {
      setup() {
        useBus(this.env.bus, "some-event", event => {
          console.log(event);
        });
      }
    }

API
---

.. js:function:: useBus(bus, eventName, callback)

    :param EventBus bus: the target event bus
    :param string eventName: the name of the event that we want to listen to
    :param function callback: listener callback

