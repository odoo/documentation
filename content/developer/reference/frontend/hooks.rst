.. _frontend/hooks:

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

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Name
     - Short Description
   * - :ref:`useAssets <frontend/hooks/useassets>`
     - load assets
   * - :ref:`useBus <frontend/hooks/usebus>`
     - subscribe and unsubscribe to a bus
   * - :ref:`frontend/hooks/usehotkey`
     - register and unregister an hotkey
   * - :ref:`usePosition <frontend/hooks/useposition>`
     - position an element relative to a target

.. _frontend/hooks/useassets:

useAssets
=========

Location
--------

`@web/core/assets`

Description
-----------

See the section on :ref:`lazy loading assets <frontend/assets/lazy_loading>` for
more details.

.. _frontend/hooks/usebus:

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

.. _frontend/hooks/usehotkey:

useHotkey
=========

Location
--------

`@web/core/hotkeys/hotkey_hook`

Description
-----------

Helps react to hotkeys being pressed by a user.

.. seealso:: 
   :ref:`frontend/services/hotkey`

.. code-block:: javascript

    import { useHotkey } from "@web/core/hotkeys/hotkey_hook";

    class MenuComponent {
      setup() {
        useHotkey("escape", () => {
          // your logic
        });
      }
    }

API
---

.. note:: 
   The `useHotkey` hook takes exactly the same arguments as
   the :ref:`hotkey service's <frontend/services/hotkey>` `add` method
   except that this hook does not return anything as the cleanup is
   automatically handled when the using component is unmounted.


.. _frontend/hooks/useposition:

usePosition
===========

Location
--------

`@web/core/position/position_hook`

Description
-----------

Helps positioning a component (or a specific HTMLElement) relatively to a target
HTMLElement. This hook ensures the positioning is updated when the window is
resized/scrolled.

.. code-block:: javascript

    import { usePosition } from "@web/core/position/position_hook";

    class MyPopover {
      setup() {
        // Here, the target is an HTMLElement
        usePosition(this.props.target);
      }
    }
    MyPopover.template = owl.tags.xml`<div>I am positioned through a wonderful hook!</div>`


.. note::
   The following CSS classes can be used to style the target HTMLElement:

   - `o-popper-position`
   - `o-popper-position--{D}{V}` where `{D}` and `{V}` are replaced by the first letter of the corresponding Direction and Variant (see Options table below for valid directions and variants). E.g.: for position `bottom-end`, the class name will be `o-popper-position--be`.

API
---

.. js:function:: usePosition(reference[, options])

    :param reference: the target HTMLElement to be positioned from
    :type reference: HTMLElement or ()=>HTMLElement
    :param Options options: the positioning options (see table below)

.. list-table::
   :widths: 20 20 60
   :header-rows: 1

   * - Option
     - Type
     - Description
   * - `popper`
     - string | undefined
     - this is the element that will get positioned. You can provide here a
       `useRef reference <https://github.com/odoo/owl/blob/master/doc/reference/hooks.md#useref>`_.
       If not provided, `this.el` is used (default: `undefined`).
   * - `container`
     - HTMLElement
     - the container from which the popper is expected not to overflow. If
       overflowing occurs, other popper positions are tried until a not
       overflowing one is found. (default: the `<html/>` node)
   * - `margin`
     - number
     - added margin between popper and reference elements (default: `0`)
   * - `position`
     - string
     - the desired position. It is a string composed of one direction and one
       variant separated by a dash character. Valid directions are: `top`,
       `bottom`, `right`, `left`. Valid variants are: `start`,
       `middle`, `end`. The variant can be omitted (default variant is
       `middle`). Examples of valid positions: `right-end`, `top-start`,
       `left-middle`, `left`. (default position: `bottom`)
