.. _frontend/registries:

==========
Registries
==========

Registries are (ordered) key/value maps. They are the main web client extension
points: many features provided by the Odoo javascript framework simply look up
into a registry whenever it needs a definition for some object (such as fields,
views, client actions or services). Customizing the web client is then simply
done by adding specific values in the correct registry.

.. code-block:: javascript

   import { Registry } from "@web/core/registry";

   const myRegistry = new Registry();

   myRegistry.add("hello", "odoo");

   console.log(myRegistry.get("hello"));

A useful feature of registries is that they maintain a set of sub registries,
obtained by the `category` method. If the sub registry does not exist yet, it
is created on the fly. All registries used by the web client are obtained
in such a way from one root registry, exported in `@web/core/registry`.

.. code-block:: javascript

   import { registry } from "@web/core/registry";

   const fieldRegistry = registry.category("fields");
   const serviceRegistry = registry.category("services");
   const viewRegistry = registry.category("views");

Registry API
============

.. js:class:: Registry()

    Creates a new registry. Note that a registry is an event bus, so one can
    listen to the `UPDATE` event if necessary. Registries are ordered: the
    :js:meth:`getAll <Registry.getAll>` method returns a list of
    values ordered according to their sequence number.

    .. js:method:: add(key, value[, options])

        :param string key: key for the new entry
        :param any value: value for the new entry
        :param Object options: options
        :param boolean [options.force]: do not throw if key already exists
        :param number [options.sequence]: sequence number (useful to order entries)
        :returns: Registry

        Inserts a value at a specific key. If the key is already used, this method
        throws an error (unless the option `force` is set to true). The option
        `sequence` is useful to insert the value at a specific position. This method
        also triggers an `UPDATE` event.

        Returns the same registry, so `add` method calls can be chained.

    .. js:method:: get(key[, defaultValue])

        :param string key: key for the entry
        :param defaultValue any: return value if no entry for key exists

        Returns the value corresponding to the `key` argument. If the registry does
        not contain that key, this method returns `defaultValue` if given, or throws
        an error otherwise.

    .. js:method:: contains(key)

        :param string key: key for the entry
        :returns: boolean

        Returns `true` if `key` is present in the registry

    .. js:method:: getAll()

        :returns: any[]

        Returns the list of all elements in the registry. It is ordered
        according to the sequence numbers.

    .. js:method:: remove(key)

        :param string key: the key for the entry that should be removed

        Removes a key/value pair from the registry. This operation triggers an
        `UPDATE` event.

    .. js:method:: category(subcategory)

        :param string subcategory: the name for the sub category
        :returns: Registry

        Returns the sub registry associated with the `subcategory`. If it does not
        exist yet, the sub registry is created on the fly.

Reference List
==============

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Category
     - Content
   * - :ref:`effects <frontend/registries/effects>`
     - implementation for all available effects
   * - :ref:`formatters <frontend/registries/formatters>`
     - utility functions to format values (mostly used for field values)
   * - :ref:`main_components <frontend/registries/main_components>`
     - top level components
   * - :ref:`parsers <frontend/registries/parsers>`
     - utility functions to parse values (mostly used for field values)
   * - :ref:`services <frontend/registries/services>`
     - all services that should be activated
   * - :ref:`systray <frontend/registries/systray>`
     - components displayed in the systray zone in the navbar
   * - :ref:`user_menuitems <frontend/registries/usermenu>`
     - menu items displayed in the user menu (top right of navbar)

.. _frontend/registries/effects:

Effect registry
---------------

The `effects` registry contains the implementations of all available effects.
See the section on the :ref:`effect service <frontend/services/effect_registry>`
for more details.

.. _frontend/registries/formatters:

Formatter registry
------------------

The `formatters` registry contains functions to format values. Each formatter
has the following API:

.. js:function:: format(value[, options])

    :param value: a value of a specific type, or `false` if no value is given
    :type value: T | false
    :param Object options: various options
    :returns: string

    Formats a value and returns a string

.. seealso::
    - :ref:`Parsers registry <frontend/registries/parsers>`

.. _frontend/registries/main_components:

Main components registry
------------------------

The main component registry (`main_components`) is useful for adding top level
components in the web client.  The webclient has a `MainComponentsContainer` as
direct child. This component is basically a live representation of the ordered
list of components registered in the main components registry.

API
    .. code-block:: text

        interface {
            Component: Owl Component class
            props?: any
        }


For example, the `LoadingIndicator` component can be added in the registry like
this:

.. code-block:: javascript

   registry.category("main_components").add("LoadingIndicator", {
     Component: LoadingIndicator,
   });

.. _frontend/registries/parsers:

Parser registry
---------------

The `parsers` registry contains functions to parse values. Each parser
has the following API:

.. js:function:: parse(value[, options])
    :noindex:

    :param value: a string representing a value
    :type value: string
    :param Object options: various options (parser specific)
    :returns: T a valid value

    Parses a string and returns a value. If the string does not represent a valid
    value, parsers can fail and throw errors.

.. seealso::
    - :ref:`Formatters registry <frontend/registries/formatters>`

.. _frontend/registries/services:

Service registry
----------------

The service registry (category: `services`) contains all
:ref:`services <frontend/services>` that should be activated by the Odoo
framework.

.. code-block:: javascript

    import { registry } from "@web/core/registry";

    const myService = {
        dependencies: [...],
        start(env, deps) {
            // some code here
        }
    };

    registry.category("services").add("myService", myService);

.. _frontend/registries/systray:

Systray registry
----------------

The systray is the zone on the right of the navbar that contains various small
components, that usually display some sort of information (like the number of
unread messages), notifications and/or let the user interact with them.

The `systray` registry contains a description of these systray items, as objects
with the following three keys:

- `Component`: the component class that represents the item. Its root element
  should be a `<li>` tag, otherwise it might not be styled properly.
- `props (optional)`: props that should be given to the component
- `isDisplayed (optional)`: a function that takes the :ref:`env <frontend/framework/environment>`
  and returns a boolean. If true, the systray item is displayed. Otherwise it is
  removed.

For example:

.. code-block:: javascript

    import { registry } from "@web/core/registry";

    class MySystrayItem extends Component {
        // some component ...
    }

    registry.category("systray").add("myAddon.myItem", {
        Component: MySystrayItem,
    });


The systray registry is an ordered registry (with the `sequence` number):

.. code-block:: javascript

    const item = {
        Component: MySystrayItem
    };
    registry.category("systray").add("myaddon.some_description", item, { sequence: 43 });

The sequence number defaults to 50. If given, this number will be used
to order the items. The lowest sequence is on the right and the highest sequence
is on the left in the systray menu.

.. _frontend/registries/usermenu:

Usermenu registry
-----------------

The user menu registry (category: `user_menuitems`) contains all menu items that
are shown when opening the user menu (the navbar element with the user name, on
the top right).

User menu items are defined by a function taking the :ref:`env <frontend/framework/environment>`
and returning a plain object, containing the following information:

* `description` : the menu item text,
* `href` : (optional) if given (and truthy), the item text is put in a `a` tag with given attribute href,
* `callback` : callback to call when the item is selected,
* `hide`: (optional) indicates if the item should be hidden (default: `false`),
* `sequence`: (optional) determines the rank of the item among the other dropwdown items (default: 100).

The user menu calls all the functions defining items every time it is opened.

Example:

.. code-block:: javascript

    import { registry } from "@web/core/registry";

    registry.category("user_menuitems").add("my item", (env) => {
        return {
            description: env._t("Technical Settings"),
            callback: () => { env.services.action_manager.doAction(3); },
            hide: (Math.random() < 0.5),
        };
    });
