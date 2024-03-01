================
Web test helpers
================

Overview
========

After the :doc:`"@odoo/hoot" <./hoot>` module, the second most-solicited module
in test files should be `"@web/../tests/web_test_helpers"`.

This module contains all the **helpers** that combine the low-level helpers provided
by **Hoot**, with all the most common features that are used in tests in **Odoo**.

These helpers are many, and this section of the documentation will only highlight
the most common ones, and the way they interract with one another.

For a full list of available helpers, you may refer to the `web_test_helpers file <https://github.com/odoo/odoo/blob/18.0/addons/web/static/tests/web_test_helpers.js>`.

.. _web-test-helpers/environment:

Mock environment
================

The `makeMockEnv` helper is the lowest helper that can spawn an **Owl environment**.

It will take care of

- creating the `env` object itself, pre-configured with all the required properties
  for the proper functionning of web components, such as `getTemplate` or `translateFn`;

- spawning a **mock server** (if one did not exist already for that test);

- starting all registered **services**, and awaiting until they are all ready;

- initiating other features that are not tied to a service, such as the web **router**;

- guaranteeing the **teardown** of all the features in its setup at the end of the test.

This method is great for testing low-level features, such as **services** that are
not tied to a **component**:

.. code-block:: javascript

    // Can be further configured, but is already packed with all the necessary stuff
    const env = await makeMockEnv();

    expect(env.isSmall).toBe(false);

.. note::
    Like :ref:`makeMockServer <mock-server/spawning>`, only one **environment** can be active for a given test.
    It is not necessary to call `makeMockEnv` manually to retrieve the current environment
    instance; the `getMockEnv` helper can be called instead.

Examples of use cases:

- `DateTime input <https://github.com/odoo/odoo/blob/18.0/addons/web/static/tests/core/components/datetime/datetime_input.test.js>`

- `Name service <https://github.com/odoo/odoo/blob/18.0/addons/web/static/tests/core/name_service.test.js>`

.. _web-test-helpers/components:

Mounting components
===================

Instantiating and appending **Owl components** to the DOM is meant to be easy, through
the use of the `mountWithCleanup` helper. It will prepare an **environment** internally
(if one does not exist yet), which in turn also makes sure that a **mock server**
is running.

It taks an **Owl component class** as its first argument, and an *optional* **parameters**
second argument, used to specify `props` or a custom `target`:

.. code-block:: javascript

    await mountWithCleanup(Checkbox, {
        props: {
            value: false
        },
    });

This helper will return the active **component instance**.

.. important::
    It is generally **ill-advised** to retrieve the **component instance** to directly
    interact with it or to perform assertions on its internal variables. The only
    "accepted" use cases are when the component is displaying **hard-to-retrieve**
    information in the DOM, such as graphs in a **canvas**. For most cases, it is
    highly preferred to query **derived information** in the **DOM**.

Examples of use cases:

- `Checkbox <https://github.com/odoo/odoo/blob/18.0/addons/web/static/tests/core/checkbox.test.js>`

- `Popover <https://github.com/odoo/odoo/blob/18.0/addons/web/static/tests/core/popover/popover.test.js>`

- `DateTimePicker <https://github.com/odoo/odoo/blob/18.0/addons/web/static/tests/core/components/datetime/datetime_picker.test.js>`

.. _web-test-helpers/views:

Mounting views
==============

Mounting a view is simply a matter of using :ref:`mountWithCleanup <web-test-helpers/components>`
with the `View` component and the correct properties.

For that purpose, web test helpers export a `mountView` helper, taking a **parameters**
object determining the view **type**, **model**, an optional **arch**, and other
optional properties:

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
both an **environment** and a **mock server** are running for the current test.

.. note::
    Like :ref:`mountWithCleanup <web-test-helpers/components>`, it is *NOT*
    recommended to retrieve the returned **view component instance**. It can however
    be done, for cases like the **graph view**.

Example of use cases:

- `Calendar view <https://github.com/odoo/odoo/blob/18.0/addons/web/static/tests/views/calendar/calendar_view.test.js>`

- `Graph view <https://github.com/odoo/odoo/blob/18.0/addons/web/static/tests/views/graph/graph_view.test.js>`

- `Kanban view <https://github.com/odoo/odoo/blob/18.0/addons/web/static/tests/views/kanban/kanban_view.test.js>`

Interacting with components
===========================

Hoot provides helpers to interact with the DOM (e.g. `click`, `press`, etc.). However,
these helpers present 2 issues when interacting with more complex components:

#. helpers try to interact **instantly**, while sometimes the element has yet to
   be appended to the document (in an unknown amount of time);

#. helpers only wait a single **micro-task tick** per dispatched event, while most
   Owl-based UIs take at least a full **animation frame** to update.

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
testing", is still a nice and convenient way to test more **complex units** such
as **views**, the **webclient**, or interactions between couples of **services** and
**components**.

It should however not become the default for all interactions, as some of them still
need to happen *precisely* within a given time frame, which is a concept completely
ignored by `contains`.

.. note::
    Most helpers in Hoot are available as methods of a `contains` instance, with
    (generally) the same shape and API.
