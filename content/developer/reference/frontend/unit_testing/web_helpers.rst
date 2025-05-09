================
Web test helpers
================

Here below are the main helpers that are the most frequently used. You can find all utilities and more informations here `predefined steps
<{GITHUB_PATH}/addons/web/static/tests/web_test_helpers.js#L42>`_

Mount component
===============

.. js:function:: mountWithCleanup(ComponentClass, [options])

   Mounts a given Owl component to the test fixture and registers it for cleanup after the test.

   If no `MainComponentsContainer` is found in the tree, it is automatically mounted unless the
   `noMainContainer` option is set to true. This helper is especially useful in unit tests to
   ensure consistent setup and teardown of Owl components in an Odoo environment.

   :param ComponentConstructor | string ComponentClass: The component class to mount, or a string
       representing the XML template for an anonymous component.
   :param Object options: Optional configuration for mounting.
   :param string | string[] options.fixtureClassName: Optional CSS class(es) to apply to the test fixture.
   :param OdooEnv options.env: Optional Owl environment to use. If not provided, a mock environment is used.
   :param boolean options.noMainContainer: If true, the `MainComponentsContainer` is not mounted automatically.
   :param Object options.props: Props to pass to the component.
   :param Target options.target: Target DOM element or selector where the component should be mounted.
   :returns: A Promise resolving to the mounted component instance.

   **Example:**

   .. code-block:: javascript

      import { mountWithCleanup } from "@web/../tests/web_test_helpers";

      const component = await mountWithCleanup(MyComponent, {
          props: { title: "Hello" },
      });

Mount view
==========

.. js:function:: mountView(params, target = null)

   Mounts an Owl-based Odoo view for testing purposes.

   This helper is typically used to render a view (`form`, `list`, `kanban`, etc.)
   inside a DOM container. If no `target` is specified, it appends the view to the default test fixture.

   :param MountViewParams params: A configuration object for the view to be mounted. It supports:
     - ``arch`` (string, optional): The XML architecture of the main view.
     - ``resModel`` (string): The model name the view belongs to.
     - ``resId`` (number, optional): The ID of the record (used in `form` views).
     - ``resIds`` (number[], optional): A list of record IDs (for `list`, `kanban`, etc.).
     - ``type`` (ViewType): The type of the view to mount (e.g. `"form"`, `"list"`).
     - ``searchViewArch`` (string, optional): Optional search view architecture.
     - ``config`` (object, optional): Additional Owl config (e.g., mock services).
     - ``env`` (OdooEnv, optional): An Owl environment to use (defaults to a mocked one).
     - ``className`` (string, optional): CSS class to attach to the root view node.

   :param HTMLElement target: (optional) The DOM element where the view should be mounted.
                              If null, the view will be appended to the test fixture.

   :returns: A Promise resolving to the mounted `View` component instance.

   **Example:**

   .. code-block:: javascript

      import { mountView } from "@web/../tests/web_test_helpers";

      await mountView({
          arch: `<form><field name="name"/></form>`,
          resModel: "res.partner",
          resId: 1,
          type: "form",
      });


Registry Helpers
================

.. js:function:: clearRegistry(registry)

    Empties the given registry by clearing its content and internal references.
    This is primarily used to reset the registry state between tests.

    :param registry: The registry to clear.

    .. code-block:: javascript

        import { registry } from "@web/core/registry";
        const mainComponentsRegistry = registry.category("main_components");

        beforeEach(async () => {
            clearRegistry(mainComponentsRegistry);
        });