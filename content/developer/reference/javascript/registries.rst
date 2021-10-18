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

   registry.add("hello", "odoo");

   console.log(registry.get("hello"));

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

constructor()
    .. code-block::

       @returns {Registry}

    creates a new registry. Note that a registry is an event bus, so one can
    listen to the `UPDATE` event if necessary.

    Registries are ordered: the :ref:`getAll <javascript/registries/api/getAll>` method returns a list of values ordered
    according to their sequence number.

add(key, value, options)
    .. code-block::

       @param {string} key
       @param {any} value
       @param {{force?: boolean, sequence?: number}} [options]
       @returns {Registry}

  Inserts a value at a specific key. If the key is already used, this method
  throws an error (unless the option `force` is set to true). The option
  `sequence` is useful to insert the value at a specific position. This method
  also triggers an `UPDATE` event.

  Returns the same registry, so `add` method calls can be chained.
  
get(key, defaultValue)
    .. code-block::

       @param {string} key
       @returns {any}

    Returns the value corresponding to the `key` argument. If the registry does
    not contain that key, this method returns `defaultValue` if given, or throws
    an error otherwise.
    
contains(key)
    .. code-block::

       @param {string} key
       @returns {boolean}

    Returns `true` if the `key` is present in the registry

.. _javascript/registries/api/getAll:

getAll()
    .. code-block::

        @returns {any[]}
    
    Returns the list of all elements in the registry. Note that it is ordered
    according to the sequence numbers.

remove(key)
    .. code-block::

       @param {string} key
    
    Removes a key/value pair from the registry. This operation triggers an
    `UPDATE` event.

category(subcategory)
    .. code-block::

        @param {string} subcategory
        @returns {Registry}

    Returns the sub registry associated with the `subcategory`. If it does not
    exist yet, the sub registry is created on the fly.

Reference List
==============

Main components registry
------------------------

The main component registry (`main_components`) is useful for adding top level
components in the web client.  The webclient has a `MainComponentsContainer` as
direct child. This component is basically a live representation of the ordered
list of components registered in the main components registry.

API
    .. code-block::

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
