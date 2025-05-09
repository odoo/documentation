===========
Mock server
===========

These utilities allow for setting up and interacting with a mock Odoo environment during unit and integration tests.
Here below are the main utilities that are the most frequently used. You can find all utilities and more informations here `predefined steps
<{GITHUB_PATH}/addons/web/static/tests/web_test_helpers.js#L77>`_

Make mock server
================

.. _mock-server/mock-server:

.. js:function:: makeMockServer(options)

   Creates and registers a new :js:class:`MockServer` instance for use in tests.

   This function instantiates a fully functional mock server that can simulate RPC routes, controller endpoints, and more. It is useful when isolating front-end logic during tests without relying on a real backend.

   :param Object options: Optional configuration for the server. You can pass custom data, RPC handlers, controller routes, or even override core methods.
   :returns: A Promise resolving to the created :js:class:`MockServer` instance.

   **Example:**

   .. code-block:: javascript

      const server = await makeMockServer({
          models: {
              partner: {
                  data: [
                      { id: 1, name: "Alice" },
                      { id: 2, name: "Bob" },
                  ],
              },
          },
          rpc: {
              read({ model, args }) {
                  return this.models[model].browse(args[0]).read(args[1]);
              },
          },
      });

      onRpc("read", ({ args }) => {
          expect.step(`read model: ${args[0]}`);
      });

Define models
=============

.. js:function:: defineModels(models)

   Registers or overrides models for the current or future :js:class:`MockServer` instance.

   This utility allows you to define mock data models used by the mock server during testing. Each model can specify initial data, field definitions, and custom method implementations.

   :param Object models: A dictionary where keys are model names and values define the model's structure and behavior. Each value can include `data`, `fields`, `methods`, `relatedData`, and more.

   :returns: The same object passed in (for chaining).

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

      // Registering the model with defineModels
      defineModels({ Users });

      // Alternative: Object-based model definition
      defineModels({
          Users: {
              fields: { name: fields.Char() },
              _records: [
                  { id: 1, name: "User 1" },
                  { id: 2, name: "User 2" },
              ],
          },
      });

   In the above example:
   - The first example uses a class to define the model `Users` with a field `name` and some predefined records.
   - The second example uses the object syntax to define the model in a simpler, but less structured way.

   **Notes:**
   - Class-based model definitions are preferred for better maintainability, type safety, and scalability.
   - Object-based definitions can be quicker for small or simple mock models.

On RPC
======

.. js:function:: onRpc(routeOrModel, [method], handler)

   Registers an RPC handler on the current or future :js:class:`MockServer` instance.

   This function allows you to simulate or intercept RPC calls during tests. It supports both generic and model-specific RPCs:

   - Use ``onRpc(route, handler)`` for routes like "read", "create", etc.
   - Use ``onRpc(model, method, handler)`` for model-specific calls like ``"sale.order.line", "web_save"``.

   :param string | RegExp routeOrModel: The RPC route or model name.
   :param string method: (Optional) The method name, when intercepting model-specific RPCs.
   :param function handler: A function that handles the RPC call. The argument is an object including ``args``, ``model``, ``method``, ``kwargs``, and possibly ``parent()`` to delegate to the default handler.

   **Examples:**

   Generic RPC interception:

   .. code-block:: javascript

      onRpc("read", ({ args, model, kwargs }) => {
          if (model === "partner" && args[0][0] === 4) {
              expect.step(`read partner: ${args[1]}`);
              expect(kwargs.context.blip).toBe(10);
              expect(kwargs.context.blop).toBe(3);
          }
      });

   Model-specific RPC with fallback:

   .. code-block:: javascript

      onRpc("sale.order.line", "web_save", (args) => {
          const selectedId = args.args[1]["product_id"];
          expect(selectedId).toBe(selectedRecordTest.id, {
              message: `product id selected ${selectedId}, should be ${selectedRecordTest.id} (${selectedRecordTest.barcode})`,
          });
          return args.parent();
      });

Make mock Env
=============

.. js:function:: makeMockEnv(partialEnv, options)

    Creates a mock Odoo environment for testing, including services and a mock server.

    If an environment already exists and ``makeNew`` is not set to ``true``, an error is thrown. Services and the router are started automatically. Also clears localization terms after test execution.

    :param partialEnv: (Optional) Partial environment to inject or override.
    :param options: (Optional) Object with ``makeNew`` to force recreation of a new environment.
    :returns: A ``Promise<OdooEnv>`` resolving to the created mock environment.

    .. code-block:: javascript

        const env = await makeMockEnv({ someService: mockImplementation });

.. js:function:: getMockEnv()

    Returns the current mock environment created by ``makeMockEnv``.

    Useful when you need access to the environment context in tests without passing it around manually.

    :returns: The current ``OdooEnv`` or ``null`` if none has been created.

    .. code-block:: javascript

        const env = getMockEnv();

Make dialog mock Env
====================

.. js:function:: makeDialogMockEnv(partialEnv)

    Creates a mock Odoo environment specifically tailored for dialog testing.

    Automatically injects ``dialogData`` with mocked ``close``, ``isActive``, and ``scrollToOrigin`` functions.

    :param partialEnv: (Optional) Partial environment to override or extend.
    :returns: A ``Promise<OdooEnv>`` resolving to the prepared dialog test environment.

    .. code-block:: javascript

        const env = await makeDialogMockEnv();

Mock service
============

.. js:function:: mockService(name, serviceFactory)

    Overrides or extends an existing service in the mock environment.

    This function either replaces the entire service (if given a factory function), or patches the existing one (if given a partial object). It also applies the override immediately if the service is already initialized.

    :param name: The name of the service to mock.
    :param serviceFactory: Either a function ``(env, dependencies) => service`` or a partial object to patch the service with.

    .. code-block:: javascript

        mockService("notification", {
            add: () => console.log("Mocked notification"),
        });

Get service
===========

.. js:function:: getService(name)

    Retrieves a mock service from the current test environment.

    This utility function accesses a registered service within the current mock environment previously created using ``makeMockEnv``.

    :param name: The name of the service to retrieve (must be a key of ``Services``).
    :returns: The mocked service instance.

    .. code-block:: javascript

        const notification = getService("notification");