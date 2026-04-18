================
Web test helpers
================

Overview
========

After the :doc:`"@odoo/hoot" <./hoot>` module, the second most-solicited module
in test files should be `"@web/../tests/web_test_helpers"`.

This module contains all the helpers that combine the low-level helpers provided
by Hoot, with all the most common features that are used in tests in Odoo.

These helpers are many, and this section of the documentation will only highlight
the most common ones, and the way they interact with one another.

For a full list of available helpers, you may refer to the `web_test_helpers file <{GITHUB_PATH}/addons/web/static/tests/web_test_helpers.js>`_.

.. _web-test-helpers/environment:

Mock environment
================

The `makeMockEnv` helper is the lowest helper that can spawn an `env`.

It will take care of

- creating the `env` object itself, pre-configured with all the required properties
  for the proper functioning of web components, such as `getTemplate` or `translateFn`;

- spawning a `MockServer` (if one did not exist already for that test);

- starting all registered :doc:`services <../services>`, and awaiting until they are all ready;

- initiating other features that are not tied to a service, such as the web `router`;

- guaranteeing the teardown of all the features in its setup at the end of the test.

This method is great for testing low-level features, such as :doc:`services <../services>` that are
not tied to a Component_:

.. code-block:: javascript

    // Can be further configured, but is already packed with all the necessary stuff
    const env = await makeMockEnv();

    expect(env.isSmall).toBe(false);

.. note::
    Like :ref:`makeMockServer <mock-server/spawning>`, only one `env` can be active for a given test.
    It is not necessary to call `makeMockEnv` manually to retrieve the current environment
    instance; the `getMockEnv` helper can be called instead.

.. example::

    - `DateTime input tests <{GITHUB_PATH}/addons/web/static/tests/core/components/datetime/datetime_input.test.js>`_

    - `Name service tests <{GITHUB_PATH}/addons/web/static/tests/core/name_service.test.js>`_

.. _web-test-helpers/components:

Mounting components
===================

Instantiating and appending `components <Component_>`_ to the DOM is meant to be easy,
through the use of the `mountWithCleanup` helper. It will prepare an `env` internally
(if one does not exist yet), which in turn also makes sure that a `MockServer` is
running.

It takes a `Component` class as its first argument, and an *optional* parameters
second argument, used to specify `props` or a custom `target`:

.. code-block:: javascript

    await mountWithCleanup(Checkbox, {
        props: {
            value: false
        },
    });

This helper will return the active `Component` instance.

.. important::
    It is generally *ill-advised* to retrieve the `Component` instance to directly
    interact with it or to perform assertions on its internal variables. The only
    "accepted" use cases are when the `Component` is displaying hard-to-retrieve information
    in the DOM, such as graphs in a `canvas <https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API>`_.
    For most cases, it is highly preferred to query derived information in the DOM.

.. example::

    - `Checkbox tests <{GITHUB_PATH}/addons/web/static/tests/core/checkbox.test.js>`_

    - `Popover tests <{GITHUB_PATH}/addons/web/static/tests/core/popover/popover.test.js>`_

    - `DateTimePicker tests <{GITHUB_PATH}/addons/web/static/tests/core/components/datetime/datetime_picker.test.js>`_

.. _web-test-helpers/views:

Mounting views
==============

Mounting a view is simply a matter of using :ref:`mountWithCleanup <web-test-helpers/components>`
with the View_ component and the correct properties.

For that purpose, web test helpers export a `mountView` helper, taking a parameters
object determining the view `type`, `resModel`, and other optional properties such
as an XML `arch`:

.. code-block:: javascript

    // Resolves when the view is fully ready
    await mountView({
        type: "list",
        resModel: "res.partner",
        arch: /* xml */ `
            <list>
                <field name="display_name" />
            </list>
        `,
    });

Like the previous helpers on top of which `mountView` is built, it will ensure that
both an `env` and a `MockServer` are running for the current test.

.. note::
    Like :ref:`mountWithCleanup <web-test-helpers/components>`, it is *NOT*
    recommended to retrieve the returned View_ component instance. It can however
    be done, for cases like the `Graph view <{GITHUB_PATH}/addons/web/static/src/views/graph/graph_view.js>`_.

.. example::

    - `Calendar view tests <{GITHUB_PATH}/addons/web/static/tests/views/calendar/calendar_view.test.js>`_

    - `Graph view tests <{GITHUB_PATH}/addons/web/static/tests/views/graph/graph_view.test.js>`_

    - `Kanban view tests <{GITHUB_PATH}/addons/web/static/tests/views/kanban/kanban_view.test.js>`_

Interacting with components
===========================

Hoot provides helpers to interact with the DOM (e.g. `click`, `press`, etc.). However,
these helpers present 2 issues when interacting with more complex components:

#. helpers try to interact instantly, while sometimes the element has yet to be
   appended to the document (in an unknown amount of time);

#. helpers only wait a single micro-task tick per dispatched event, while most
   Owl-based UIs take at least a full animation frame to update.

.. code-block:: javascript

    // Edit record name
    await click(".o_field_widget[name=name]");
    await edit("Gaston Lagaffe");

    // Potential error 1: button may not be in the DOM yet
    await click(".btn:contains(Save)");

    // Potential error 2: view is not yet updated
    expect(".o_field_widget[name=name]").toHaveText("Gaston Lagaffe");

With these constraints in mind, web test helpers provide the `contains` helper:

.. code-block:: javascript

    // Combines 'click' + 'edit' + 'animationFrame' calls
    await contains(".o_field_widget[name=name]").edit("Gaston Lagaffe");
    // Waits for (at least) a full animation frame after the click
    await contains(".btn:contains(Save)").click();
    expect(".o_field_widget[name=name]").toHaveText("Gaston Lagaffe");

This approach, while seemingly drifting a bit further away from the concept of "unit
testing", is still a nice and convenient way to test more complex units such as `views <View_>`_,
the `WebClient <{GITHUB_PATH}/addons/web/static/src/webclient/webclient.js>`_, or
interactions between couples of :doc:`services <../services>` and components.

It should however not become the default for all interactions, as some of them still
need to happen *precisely* within a given time frame, which is a concept completely
ignored by `contains`.

.. note::
    Most helpers in Hoot are available as methods of a `contains` instance, with
    (generally) the same shape and API.

.. _Component: https://github.com/odoo/owl/blob/master/doc/reference/component.md
.. _View: {GITHUB_PATH}/addons/web/static/src/views/view.js
