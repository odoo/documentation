======================================
Mock server, environments and services
======================================

These utilities allow for setting up and interacting with a mock Odoo environment during unit and integration tests.
Here below are the main utilities that are the most frequently used. You can find all utilities and more informations here `predefined steps
<{GITHUB_PATH}/addons/web/static/tests/web_test_helpers.js#L77>`_

Mock Server
===========

.. _mock-server/mock-server:

.. js:function:: async makeMockServer(): Promise<MockServer>

   Creates and registers a new :js:class:`MockServer` instance for use in tests.
   This function instantiates a fully functional mock server that can simulate RPC routes, controller endpoints, and more.
   It is useful when isolating front-end logic during tests without relying on a real backend.

   :returns: A Promise resolving to the created :js:class:`MockServer` instance with loaded models.

   **Example:**

   .. code-block:: javascript

        const { env } = await makeMockServer();
        const resId = env["mail.compose.message"].create({
            display_name: "Some Composer",
            body: "Hello",
            attachment_ids: [],
        });

        let newAttachmentId;
        onRpc("web_save", ({ args }) => {
            expect.step("web_save");
            const createVals = args[1];
            expect(createVals.attachment_ids[0][0]).toBe(4); // link command
            expect(createVals.attachment_ids[0][1]).toBe(newAttachmentId); // on attachment id "5"
        });

Define Models
=============

.. js:function:: defineModels(ModelClasses, options = { mode: "add"}): void

   Registers or overrides models for the current or future :js:class:`MockServer` instance.

   This utility allows you to define mock data models used by the mock server during testing. Each model can specify initial data, field definitions, and custom method implementations.

   :param Object ModelClasses: A dictionary where keys are model names and values define the model's structure and behavior. Each value can include `data`, `fields`, `methods`, `relatedData`, and more.
   :param Object options: 
    - ``mode`` (string, optional) can have **add** or **replace**.

   **Example:**

   .. code-block:: javascript

      import { models, fields } from '@odoo/hoot';

      // Class-based model definition
      class Users extends models.Model {
            name = fields.Char();
            _records = [
                { id: 1, name: "User 1" },
                { id: 2, name: "User 2" },
            ];
      }

      class Partner extends models.Model {
            name = fields.Char({ string: "Name" });
            _records = [
                { id: 1, name: "Jean Pierre" },
                { id: 2, name: "Pierre Jean" },
                { id: 3, name: "Michel Michel" },
            ];
      }

      // Registering the model with defineModels
      defineModels(Users);
      defineModels(Partner);
      // or
      defineModels([Users, Partner]);

On RPC
======

.. js:function:: onRpc(routeOrModel, [method], handler): void

   Registers an RPC handler on :js:class:`MockServer` instance.
   This function allows you to simulate or intercept RPC calls during tests.
   It supports both generic and model-specific RPCs:

   - Use ``onRpc(route, handler)`` for routes like "read", "create", etc.
   - Use ``onRpc(model, method, handler)`` for model-specific calls like ``"sale.order.line", "web_save"``.

   :param string | RegExp routeOrModel: The RPC route or model name.
   :param string method: (Optional) The method name, when intercepting model-specific RPCs.
   :param function handler: A function that handles the RPC call. The argument is an object including ``args``, ``model``, ``method``, ``kwargs``, and possibly ``parent()`` to delegate to the default handler.

   **Examples:**

   .. code-block:: javascript

        import { onRpc } from "@web/../tests/web_test_helpers";

        onRpc("read", ({ args, model, kwargs }) => {
            if (model === "partner" && args[0][0] === 4) {
                expect.step(`read partner: ${args[1]}`);
                expect(kwargs.context.blip).toBe(10);
                expect(kwargs.context.blop).toBe(3);
            }
        });

   .. code-block:: javascript

        import { Deferred } from "@odoo/hoot-mock";
        import { asyncStep, onRpc } from "@web/../tests/web_test_helpers";

        const def = new Deferred();
        onRpc("approval.approver", "action_approve", (args) => {
            expect(args.args.length).toBe(1);
            expect(args.args[0]).toBe(requestId);
            asyncStep("action_approve");
            def.resolve();
        });

   .. code-block:: javascript

        import { onRpc } from "@web/../tests/web_test_helpers";

        onRpc("sale.order.line", "web_save", (args) => {
            const selectedId = args.args[1]["product_id"];
            expect(selectedId).toBe(selectedRecordTest.id, {
                message: `product id selected ${selectedId}, should be ${selectedRecordTest.id} (${selectedRecordTest.barcode})`,
            });
            return args.parent();
        });

Mock Environment
================

.. js:function:: async makeMockEnv(partialEnv, options): Promise<MockEnv>

    Creates a mock Odoo environment for testing, including services and a mock server.
    If an environment already exists and ``makeNew`` is not set to ``true``, an error is thrown. 
    Services and the router are started automatically. Also clears localization terms after test execution.

    :param partialEnv: (Optional) Partial environment to inject or override.
    :param options: (Optional) Object with ``makeNew`` to force recreation of a new environment.
    :returns: A ``Promise<MockEnv>`` resolving to the created mock environment.

    .. code-block:: javascript

        class MyComponent extends Component {
            static props = ["*"];
            static template = xml`
                <button data-tooltip-template="my_tooltip_template">Action</button>
            `;
        }

        await makeMockEnv({ tooltip_text: "tooltip" });
        await mountWithCleanup(MyComponent, {
            templates: {
                my_tooltip_template: /* xml */ `<i t-esc='env.tooltip_text'/>`,
            },
        });

.. js:function:: getMockEnv(): MockEnv

    Returns the current mock environment created by ``makeMockEnv``.
    Useful when you need access to the environment context in tests without passing it around manually.

    :returns: The current ``MockEnv`` or ``null`` if none has been created.

    .. code-block:: javascript

        test(`popover ignores readonly field modifier`, async () => {
            await mountView({
                resModel: "event",
                type: "calendar",
                arch: `
                    <calendar date_start="start" date_stop="stop" all_day="is_all_day" mode="month">
                        <field name="delay" invisible="True"/>
                        <field name="name" readonly="delay == 42"/>
                    </calendar>
                `,
            });

            await clickEvent(4);
            // test would fail here if we don't ignore readonly modifier
            const popover = getMockEnv().isSmall ? ".modal" : ".o_cw_popover";
            expect(popover).toHaveCount(1);
        });

Mock service
============

.. js:function:: mockService(name, serviceFactory)

    Overrides or extends an existing service in the mock environment.
    This function either replaces the entire service (if given a factory function), or patches the existing one (if given a partial object). 
    It also applies the override immediately if the service is already initialized.

    :param name: The name of the service to mock.
    :param serviceFactory: Either a function ``(env, dependencies) => service`` or a partial object to patch the service with.

    .. code-block:: javascript

        mockService("notification", {
            add: () => console.log("Mocked notification"),
        });

.. js:function:: getService(name)

    Retrieves a mock service from the current test environment.

    This utility function accesses a registered service within the current mock environment previously created using ``makeMockEnv``.

    :param name: The name of the service to retrieve (must be a key of ``Services``).
    :returns: The mocked service instance.

    .. code-block:: javascript

        const notification = getService("notification");