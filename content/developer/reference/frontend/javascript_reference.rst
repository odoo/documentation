.. highlight:: javascript

.. default-domain:: js

====================
Javascript Reference
====================

This document presents the Odoo Javascript framework. This
framework is not a large application in term of lines of code, but it is quite
generic, because it is basically a machine to turn a declarative interface
description into a live application, able to interact with every model and
records in the database.  It is even possible to use the web client to modify
the interface of the web client.

Overview
========

The Javascript framework is designed to work with three main use cases:

- the *web client*: this is the private web application, where one can view and
  edit business data. This is a single page application (the page is never
  reloaded, only the new data is fetched from the server whenever it is needed)
- the *website*: this is the public part of Odoo.  It allows an unidentified
  user to browse some content, to shop or to perform many actions, as a client.
  This is a classical website: various routes with controllers and some
  javascript to make it work.
- the *point of sale*: this is the interface for the point of sale. It is a
  specialized single page application.

Some javascript code is common to these three use cases, and is bundled together
(see below in the assets section).  This document will focus mostly on the web
client design.

Web client
==========

Single Page Application
-----------------------

In short, the *webClient*, instance of *WebClient* is the root component of the
whole user interface.  Its responsibility is to orchestrate all various
subcomponents, and to provide services, such as rpcs, local storage and more.

In runtime, the web client is a single page application. It does not need to
request a full page from the server each time the user perform an action. Instead,
it only requests what it needs, and then replaces/updates the view. Also, it
manages the url: it is kept in sync with the web client state.

It means that while a user is working on Odoo, the web client class (and the
action manager) actually creates and destroys many sub components. The state is
highly dynamic, and each widget could be destroyed at any time.

Overview of web client JS code
------------------------------

Here, we give a very quick overview on the web client code, in
the *web/static/src/js* addon. Note that it is deliberately not exhaustive.
We only cover the most important files/folders.

- *boot.js*: this is the file that defines the module system.  It needs to be
  loaded first.
- *core/*: this is a collection of lower level building blocks. Notably, it
  contains the class system, the widget system, concurrency utilities, and many
  other class/functions.
- *chrome/*: in this folder, we have most large widgets which make up most of
  the user interface.
- *chrome/abstract_web_client.js* and *chrome/web_client.js*: together, these
  files define the WebClient widget, which is the root widget for the web client.
- *chrome/action_manager.js*: this is the code that will convert an action into
  a widget (for example a kanban or a form view)
- *chrome/search_X.js* all these files define the search view (it is not a view
  in the point of view of the web client, only from the server point of view)
- *fields*: all main view field widgets are defined here
- *views*: this is where the views are located


What to do if a file is not loaded/updated
------------------------------------------

There are many different reasons why a file may not be properly loaded.  Here
are a few things you can try to solve the issue:

- once the server is started, it does not know if an asset file has been
  modified.  So, you can simply restart the server to regenerate the assets.
- check the console (in the dev tools, usually opened with F12) to make sure
  there are no obvious errors
- try to add a `console.log()` at the beginning of your file (before any module
  definition), so you can see if a file has been loaded or not
- when in any debug mode, there is an option in the debug manager menu (bug icon)
  to force the server to update its assets files.
- use the *debug=assets* mode.  This will actually bypass the asset bundles (note
  that it does not actually solve the issue. The server still uses outdated bundles)
- finally, the most convenient way to do it, for a developer, is to start the
  server with the *--dev=all* option. This activates the file watcher options,
  which will automatically invalidate assets when necessary.  Note that it does
  not work very well if the OS is Windows.
- remember to refresh your page!
- or maybe to save your code file...

.. note::
    Once an asset file has been recreated, you need to refresh the page, to reload
    the proper files (if that does not work, the files may be cached).


Loading Javascript Code
=======================

Large applications are usually broken up into smaller files, that need to be
connected together.  Some file may need to use some part of code defined in
another file. There are two ways of sharing code between files:

- use the global scope (the *window* object) to write/read references to some
  objects or functions,

- use a module system that will provide a way for each modules to export or import
  values, and will make sure that they are loaded in a proper order.

While it's possible to work in the global scope, this has a number of issues:

It is difficult to ensure that implementation details are not exposed by work done in the global scope directly.

- Dependencies are implicit, leading to fragile and unreliable load ordering.

- The lack of insight into execution means it's impossible to use various optimisations (e.g. deferred and asynchronous
  loading).

- Module systems help resolve these issues: because modules specify their dependencies the module system can ensure the
  necessary order of loading is respected, and because modules can precisely specify their exports it is less likely
  that they will leak implementation details.

For most Odoo code, we want to use a module system.  Because of the way assets
work in Odoo (and in particular, the fact that each installed odoo addon can
modify the list of files contained in a bundle), Odoo has to resolve modules
browser side.  To do that, Odoo provides a small module system described just
below (see :ref:`frontend/modules/odoo_module`).

However, Odoo also provides support for native javascript modules (see
:ref:`frontend/modules/native_js`). These modules
will simply be translated by the server into odoo modules. It is encouraged to
write all javascript code as a native module, for a better IDE integration. In
the future, the Odoo module system should be considered an implementation detail,
not the primary way to write javascript code.

.. note::
    Native javascript modules are the primary way to define javascript code.

Class System
============

Odoo was developed before ECMAScript 6 classes were available.  In Ecmascript 5,
the standard way to define a class is to define a function and to add methods
on its prototype object.  This is fine, but it is slightly complex when we want
to use inheritance, mixins.

For these reasons, Odoo decided to use its own class system, inspired by John
Resig. The base Class is located in *web.Class*, in the file *class.js*.


.. note ::

    Note that the custom class system should be avoided for creating new code. It
    will be deprecated at some point, and then removed.  New classes should use
    the standard ES6 class system.


Creating a subclass
-------------------

Let us discuss how classes are created.  The main mechanism is to use the
*extend* method (this is more or less the equivalent of *extend* in ES6 classes).

.. code-block:: javascript

    var Class = require('web.Class');

    var Animal = Class.extend({
        init: function () {
            this.x = 0;
            this.hunger = 0;
        },
        move: function () {
            this.x = this.x + 1;
            this.hunger = this.hunger + 1;
        },
        eat: function () {
            this.hunger = 0;
        },
    });


In this example, the *init* function is the constructor.  It will be called when
an instance is created.  Making an instance is done by using the *new* keyword.

Inheritance
-----------

It is convenient to be able to inherit an existing class.  This is simply done
by using the *extend* method on the superclass.  When a method is called, the
framework will secretly rebind a special method: *_super* to the currently
called method.  This allows us to use *this._super* whenever we need to call a
parent method.

.. code-block:: javascript

    var Animal = require('web.Animal');

    var Dog = Animal.extend({
        move: function () {
            this.bark();
            this._super.apply(this, arguments);
        },
        bark: function () {
            console.log('woof');
        },
    });

    var dog = new Dog();
    dog.move()

Mixins
------

The odoo Class system does not support multiple inheritance, but for those cases
when we need to share some behaviour, we have a mixin system: the *extend*
method can actually take an arbitrary number of arguments, and will combine all
of them in the new class.

.. code-block:: javascript

    var Animal = require('web.Animal');
    var DanceMixin = {
        dance: function () {
            console.log('dancing...');
        },
    };

    var Hamster = Animal.extend(DanceMixin, {
        sleep: function () {
            console.log('sleeping');
        },
    });

In this example, the *Hamster* class is a subclass of Animal, but it also mix
the DanceMixin in.

Patching an existing class
--------------------------

It is not common, but we sometimes need to modify another class *in place*. The
goal is to have a mechanism to change a class and all future/present instances.
This is done by using the *include* method:

.. code-block:: javascript

    var Hamster = require('web.Hamster');

    Hamster.include({
        sleep: function () {
            this._super.apply(this, arguments);
            console.log('zzzz');
        },
    });


This is obviously a dangerous operation and should be done with care.  But with
the way Odoo is structured, it is sometimes necessary in one addon to modify
the behavior of a widget/class defined in another addon.  Note that it will
modify all instances of the class, even if they have already been created.

Widgets
=======

The *Widget* class is really an important building block of the user interface.
Pretty much everything in the user interface is under the control of a widget.
The Widget class is defined in the module *web.Widget*, in *widget.js*.

In short, the features provided by the Widget class include:

* parent/child relationships between widgets (*PropertiesMixin*)
* extensive lifecycle management with safety features (e.g. automatically
  destroying children widgets during the destruction of a parent)
* automatic rendering with :ref:`qweb <reference/qweb>`
* various utility functions to help interacting with the outside environment.

Here is an example of a basic counter widget:

.. code-block:: javascript

    var Widget = require('web.Widget');

    var Counter = Widget.extend({
        template: 'some.template',
        events: {
            'click button': '_onClick',
        },
        init: function (parent, value) {
            this._super(parent);
            this.count = value;
        },
        _onClick: function () {
            this.count++;
            this.$('.val').text(this.count);
        },
    });

For this example, assume that the template *some.template* (and is properly
loaded: the template is in a file, which is properly defined in the assets of
the module manifest, see
:ref:`assets <reference/assets>`.) is given by:

.. code-block:: xml

    <div t-name="some.template">
        <span class="val"><t t-esc="widget.count"/></span>
        <button>Increment</button>
    </div>

This example widget can be used in the following manner:

.. code-block:: javascript

    // Create the instance
    var counter = new Counter(this, 4);
    // Render and insert into DOM
    counter.appendTo(".some-div");

This example illustrates a few of the features of the *Widget* class, including
the event system, the template system, the constructor with the initial *parent* argument.

Widget Lifecycle
----------------

Like many component systems, the widget class has a well defined lifecycle. The
usual lifecycle is the following: *init* is called, then *willStart*, then the
rendering takes place, then *start* and finally *destroy*.

.. function:: Widget.init(parent)

    this is the constructor.  The init method is supposed to initialize the
    base state of the widget. It is synchronous and can be overridden to
    take more parameters from the widget's creator/parent

    :param parent: the new widget's parent, used to handle automatic
                    destruction and event propagation. Can be ``null`` for
                    the widget to have no parent.
    :type parent: :class:`~Widget`

.. function:: Widget.willStart()

    this method will be called once by the framework when a widget is created
    and in the process of being appended to the DOM.  The *willStart* method is a
    hook that should return a promise.  The JS framework will wait for this promise
    to complete before moving on to the rendering step.  Note that at this point,
    the widget does not have a DOM root element.  The *willStart* hook is mostly
    useful to perform some asynchronous work, such as fetching data from the server

.. function:: [Rendering]

    This step is automatically done by the framework.  What happens is
    that the framework checks if a template key is defined on the widget.  If that is
    the case, then it will render that template with the *widget* key bound to the
    widget in the rendering context (see the example above: we use *widget.count*
    in the QWeb template to read the value from the widget). If no template is
    defined, we read the *tagName* key and create a corresponding DOM element.
    When the rendering is done, we set the result as the $el property of the widget.
    After this, we automatically bind all events in the events and custom_events
    keys.

.. function:: Widget.start()

    when the rendering is complete, the framework will automatically call
    the *start* method.  This is useful to perform some specialized post-rendering
    work.  For example, setting up a library.

    Must return a promise to indicate when its work is done.

    :returns: promise

.. function:: Widget.destroy()

    This is always the final step in the life of a widget.  When a
    widget is destroyed, we basically perform all necessary cleanup operations:
    removing the widget from the component tree, unbinding all events, ...

    Automatically called when the widget's parent is destroyed,
    must be called explicitly if the widget has no parent or if it is
    removed but its parent remains.

Note that the willStart and start method are not necessarily called.  A widget
can be created (the *init* method will be called) and then destroyed (*destroy*
method) without ever having been appended to the DOM.  If that is the case, the
willStart and start will not even be called.

Widget API
----------

.. attribute:: Widget.tagName

    Used if the widget has no template defined. Defaults to ``div``,
    will be used as the tag name to create the DOM element to set as
    the widget's DOM root. It is possible to further customize this
    generated DOM root with the following attributes:


.. attribute:: Widget.id

    Used to generate an ``id`` attribute on the generated DOM
    root. Note that this is rarely needed, and is probably not a good idea
    if a widget can be used more than once.

.. attribute:: Widget.className

    Used to generate a ``class`` attribute on the generated DOM root. Note
    that it can actually contain more than one css class:
    *'some-class other-class'*

.. attribute:: Widget.attributes

    Mapping (object literal) of attribute names to attribute
    values. Each of these k:v pairs will be set as a DOM attribute
    on the generated DOM root.

.. attribute:: Widget.el

    raw DOM element set as root to the widget (only available after the start
    lifecycle method)

.. attribute:: Widget.$el

    jQuery wrapper around :attr:`~Widget.el`. (only available after the start
    lifecycle method)

.. attribute:: Widget.template

    Should be set to the name of a :ref:`QWeb template <reference/qweb>`.
    If set, the template will be rendered after the widget has been
    initialized but before it has been started. The root element generated by
    the template will be set as the DOM root of the widget.

.. attribute:: Widget.events

    Events are a mapping of an event selector (an event name and an optional
    CSS selector separated by a space) to a callback. The callback can
    be the name of a widget's method or a function object. In either case, the
    ``this`` will be set to the widget:

    .. code-block:: javascript

        events: {
            'click p.oe_some_class a': 'some_method',
            'change input': function (e) {
                e.stopPropagation();
            }
        },

    The selector is used for jQuery's event delegation, the
    callback will only be triggered for descendants of the DOM root
    matching the selector. If the selector is left out
    (only an event name is specified), the event will be set directly on the
    widget's DOM root.

    Note: the use of an inline function is discouraged, and will probably be
    removed sometimes in the future.

.. attribute:: Widget.custom_events

    this is almost the same as the *events* attribute, but the keys
    are arbitrary strings.  They represent business events triggered by
    some sub widgets.  When an event is triggered, it will 'bubble up' the widget
    tree (see the section on component communication for more details).

.. function:: Widget.isDestroyed()

    :returns: ``true`` if the widget is being or has been destroyed, ``false``
              otherwise

.. function:: Widget.$(selector)

    Applies the CSS selector specified as parameter to the widget's
    DOM root:

    .. code-block:: javascript

        this.$(selector);

    is functionally identical to:

    .. code-block:: javascript

        this.$el.find(selector);

    :param String selector: CSS selector
    :returns: jQuery object

    .. note:: this helper method is similar to ``Backbone.View.$``

.. function:: Widget.setElement(element)

    Re-sets the widget's DOM root to the provided element, also
    handles re-setting the various aliases of the DOM root as well as
    unsetting and re-setting delegated events.

    :param Element element: a DOM element or jQuery object to set as
                            the widget's DOM root

Inserting a widget in the DOM
-----------------------------

.. function:: Widget.appendTo(element)

    Renders the widget and inserts it as the last child of the target, uses
    `.appendTo()`_

.. function:: Widget.prependTo(element)

    Renders the widget and inserts it as the first child of the target, uses
    `.prependTo()`_

.. function:: Widget.insertAfter(element)

    Renders the widget and inserts it as the preceding sibling of the target,
    uses `.insertAfter()`_

.. function:: Widget.insertBefore(element)

    Renders the widget and inserts it as the following sibling of the target,
    uses `.insertBefore()`_

All of these methods accept whatever the corresponding jQuery method accepts
(CSS selectors, DOM nodes or jQuery objects). They all return a promise
and are charged with three tasks:

* rendering the widget's root element via :func:`~Widget.renderElement`
* inserting the widget's root element in the DOM using whichever jQuery
  method they match
* starting the widget, and returning the result of starting it

Widget Guidelines
-----------------

* Identifiers (``id`` attribute) should be avoided. In generic applications
  and modules, ``id`` limits the re-usability of components and tends to make
  code more brittle. Most of the time, they can be replaced with nothing,
  classes or keeping a reference to a DOM node or jQuery element.

  If an ``id`` is absolutely necessary (because a third-party library requires
  one), the id should be partially generated using ``_.uniqueId()`` e.g.:

  .. code-block:: javascript

      this.id = _.uniqueId('my-widget-');

* Avoid predictable/common CSS class names. Class names such as "content" or
  "navigation" might match the desired meaning/semantics, but it is likely an
  other developer will have the same need, creating a naming conflict and
  unintended behavior. Generic class names should be prefixed with e.g. the
  name of the component they belong to (creating "informal" namespaces, much
  as in C or Objective-C).

* Global selectors should be avoided. Because a component may be used several
  times in a single page (an example in Odoo is dashboards), queries should be
  restricted to a given component's scope. Unfiltered selections such as
  ``$(selector)`` or ``document.querySelectorAll(selector)`` will generally
  lead to unintended or incorrect behavior.  Odoo Web's
  :class:`~Widget` has an attribute providing its DOM root
  (:attr:`~Widget.$el`), and a shortcut to select nodes directly
  (:func:`~Widget.$`).

* More generally, never assume your components own or controls anything beyond
  its own personal :attr:`~Widget.$el` (so, avoid using a reference to the
  parent widget)

* Html templating/rendering should use QWeb unless absolutely trivial.

* All interactive components (components displaying information to the screen
  or intercepting DOM events) must inherit from :class:`~Widget`
  and correctly implement and use its API and life cycle.

* Make sure to wait for start to be finished before using $el e.g.:

    .. code-block:: javascript

        var Widget = require('web.Widget');

        var AlmostCorrectWidget = Widget.extend({
            start: function () {
                this.$el.hasClass(....) // in theory, $el is already set, but you don't know what the parent will do with it, better call super first
                return this._super.apply(arguments);
            },
        });

        var IncorrectWidget = Widget.extend({
            start: function () {
                this._super.apply(arguments); // the parent promise is lost, nobody will wait for the start of this widget
                this.$el.hasClass(....)
            },
        });

        var CorrectWidget = Widget.extend({
            start: function () {
                var self = this;
                return this._super.apply(arguments).then(function() {
                    self.$el.hasClass(....) // this works, no promise is lost and the code executes in a controlled order: first super, then our code.
                });
            },
        });

.. _reference/javascript_reference/qweb:

QWeb Template Engine
====================

The web client uses the :doc:`qweb` template engine to render widgets (unless they
override the *renderElement* method to do something else).
The Qweb JS template engine is based on XML, and is mostly compatible with the
python implementation.

The web client will wait for that list of template (included into the current asset)
to be loaded, before starting its first widget.

Event system
============

There are currently two event systems supported by Odoo: a simple system which
allows adding listeners and triggering events, and a more complete system that
also makes events 'bubble up'.

Both of these event systems are implemented in the *EventDispatcherMixin*, in
the file *mixins.js*. This mixin is included in the *Widget* class.

Base Event system
-----------------

This event system was historically the first.  It implements a simple bus
pattern. We have 4 main methods:

- *on*: this is used to register a listener on an event.
- *off*: useful to remove events listener.
- *once*: this is used to register a listener that will only be called once.
- *trigger*: trigger an event. This will cause each listeners to be called.

Here is an example on how this event system could be used:

.. code-block:: javascript

    var Widget = require('web.Widget');
    var Counter = require('myModule.Counter');

    var MyWidget = Widget.extend({
        start: function () {
            this.counter = new Counter(this);
            this.counter.on('valuechange', this, this._onValueChange);
            var def = this.counter.appendTo(this.$el);
            return Promise.all([def, this._super.apply(this, arguments)]);
        },
        _onValueChange: function (val) {
            // do something with val
        },
    });

    // in Counter widget, we need to call the trigger method:

    ... this.trigger('valuechange', someValue);


.. warning::
    the use of this event system is discouraged, we plan to replace each
    *trigger* method by the *trigger_up* method from the extended event system

Extended Event System
---------------------

The custom event widgets is a more advanced system, which mimic the DOM events
API.  Whenever an event is triggered, it will 'bubble up' the component tree,
until it reaches the root widget, or is stopped.

- *trigger_up*: this is the method that will create a small *OdooEvent* and
  dispatch it in the component tree.  Note that it will start with the component
  that triggered the event
- *custom_events*: this is the equivalent of the *event* dictionary, but for
  odoo events.

The OdooEvent class is very simple.  It has three public attributes: *target*
(the widget that triggered the event), *name* (the event name) and *data* (the
payload).  It also has 2 methods: *stopPropagation* and *is_stopped*.

The previous example can be updated to use the custom event system:

.. code-block:: javascript

    var Widget = require('web.Widget');
    var Counter = require('myModule.Counter');

    var MyWidget = Widget.extend({
        custom_events: {
            valuechange: '_onValueChange'
        },
        start: function () {
            this.counter = new Counter(this);
            var def = this.counter.appendTo(this.$el);
            return Promise.all([def, this._super.apply(this, arguments)]);
        },
        _onValueChange: function(event) {
            // do something with event.data.val
        },
    });

    // in Counter widget, we need to call the trigger_up method:

    ... this.trigger_up('valuechange', {value: someValue});

Registries
==========

A common need in the Odoo ecosystem is to extend/change the behaviour of the
base system from the outside (by installing an application, i.e. a different
module).  For example, one may need to add a new widget type in some views.  In
that case, and many others, the usual process is to create the desired component,
then add it to a registry (registering step), to make the rest of the web client
aware of its existence.

There are a few registries available in the system:

field registry (exported by :js:data:`web.field_registry`)
  The field registry contains all field widgets known to the web client.
  Whenever a view (typically form or list/kanban) needs a field widget, this
  is where it will look. A typical use case look like this:

  .. code-block:: javascript

      var fieldRegistry = require('web.field_registry');

      var FieldPad = ...;

      fieldRegistry.add('pad', FieldPad);

  Note that each value should be a subclass of *AbstractField*

view registry
  This registry contains all JS views known to the web client
  (and in particular, the view manager).  Each value of this registry should
  be a subclass of *AbstractView*.

action registry
  We keep track of all client actions in this registry.  This
  is where the action manager looks up whenever it needs to create a client
  action.  In version 11, each value should simply be a subclass of *Widget*.
  However, in version 12, the values are required to be *AbstractAction*.

Communication between widgets
=============================

There are many ways to communicate between components.

From a parent to its child
  This is a simple case. The parent widget can simply call a method on its
  child:

  .. code-block:: javascript

      this.someWidget.update(someInfo);

From a widget to its parent/some ancestor
  In this case, the widget's job is simply to notify its environment that
  something happened.  Since we do not want the widget to have a reference to
  its parent (this would couple the widget with its parent's implementation),
  the best way to proceed is usually to trigger an event, which will bubble up
  the component tree, by using the ``trigger_up`` method:

  .. code-block:: javascript

      this.trigger_up('open_record', { record: record, id: id});

  This event will be triggered on the widget, then will bubble up and be
  eventually caught by some upstream widget:

  .. code-block:: javascript

      var SomeAncestor = Widget.extend({
          custom_events: {
              'open_record': '_onOpenRecord',
          },
          _onOpenRecord: function (event) {
              var record = event.data.record;
              var id = event.data.id;
              // do something with the event.
          },
      });

Cross component
  Cross component communication can be achieved by using a bus.  This is not
  the preferred form of communication, because it has the disadvantage of
  making the code harder to maintain.  However, it has the advantage of
  decoupling the components.  In that case, this is simply done by triggering
  and listening to events on a bus.  For example:

  .. code-block:: javascript

      // in WidgetA
      var core = require('web.core');

      var WidgetA = Widget.extend({
          ...
          start: function () {
              core.bus.on('barcode_scanned', this, this._onBarcodeScanned);
          },
      });

      // in WidgetB
      var WidgetB = Widget.extend({
          ...
          someFunction: function (barcode) {
              core.bus.trigger('barcode_scanned', barcode);
          },
      });

    In this example, we use the bus exported by *web.core*, but this is not
    required. A bus could be created for a specific purpose.

Services
========

In version 11.0, we introduced the notion of *service*.  The main idea is to
give to sub components a controlled way to access their environment, in a way
that allow the framework enough control, and which is testable.

The service system is organized around three ideas: services, service providers
and widgets.  The way it works is that widgets trigger (with *trigger_up*)
events, these events bubble up to a service provider, which will ask a service
to perform a task, then maybe return an answer.

Service
-------

A service is an instance of the *AbstractService* class.  It basically only has
a name and a few methods.  Its job is to perform some work, typically something
depending on the environment.

For example, we have the *ajax* service (job is to perform a rpc), the
*localStorage* (interact with the browser local storage) and many others.

Here is a simplified example on how the ajax service is implemented:

.. code-block:: javascript

    var AbstractService = require('web.AbstractService');

    var AjaxService = AbstractService.extend({
        name: 'ajax',
        rpc: function (...) {
            return ...;
        },
    });

This service is named 'ajax' and define one method, *rpc*.

Service Provider
----------------

For services to work, it is necessary that we have a service provider ready to
dispatch the custom events.  In the *backend* (web client), this is done by the
main web client instance. Note that the code for the service provider comes from
the *ServiceProviderMixin*.

Widget
------

The widget is the part that requests a service.  In order to do that, it simply
triggers an event *call_service* (typically by using the helper function *call*).
This event will bubble up and communicate the intent to the rest of the system.

In practice, some functions are so frequently called that we have some helpers
functions to make them easier to use. For example, the *_rpc* method is a helper
that helps making a rpc.

.. code-block:: javascript

    var SomeWidget = Widget.extend({
        _getActivityModelViewID: function (model) {
            return this._rpc({
                model: model,
                method: 'get_activity_view_id'
            });
        },
    });

.. warning::
    If a widget is destroyed, it will be detached from the main component tree
    and will not have a parent.  In that case, the events will not bubble up, which
    means that the work will not be done.  This is usually exactly what we want from
    a destroyed widget.

RPCs
----

The rpc functionality is supplied by the ajax service.  But most people will
probably only interact with the *_rpc* helpers.

There are typically two usecases when working on Odoo: one may need to call a
method on a (python) model (this goes through a controller *call_kw*), or one
may need to directly call a controller (available on some route).

* Calling a method on a python model:

.. code-block:: javascript

    return this._rpc({
        model: 'some.model',
        method: 'some_method',
        args: [some, args],
    });

* Directly calling a controller:

.. code-block:: javascript

    return this._rpc({
        route: '/some/route/',
        params: { some: kwargs},
    });

Notifications
=============

The Odoo framework has a standard way to communicate various information to the
user: notifications, which are displayed on the top right of the user interface.

There are two types of notifications:

- *notification*: useful to display some feedback.  For example, whenever a user
  unsubscribed to a channel.

- *warning*: useful to display some important/urgent information.  Typically
  most kind of (recoverable) errors in the system.

Also, notifications can be used to ask a question to the user without disturbing
its workflow.  Imagine a phone call received through VOIP: a sticky notification
could be displayed with two buttons *Accept* and *Decline*.

Notification system
-------------------

The notification system in Odoo is designed with the following components:

- a *Notification* widget: this is a simple widget that is meant to be created
  and displayed with the desired information

- a *NotificationService*: a service whose responsibility is to create and
  destroy notifications whenever a request is done (with a custom_event). Note
  that the web client is a service provider.

- a client action *display_notification*: this allows to trigger the display
  of a notification from python (e.g. in the method called when the user
  clicked on a button of type object).

- an helper function in *ServiceMixin*: *displayNotification*

Displaying a notification
-------------------------

The most common way to display a notification is by using the method that come
from the *ServiceMixin*:

- *displayNotification(options)*:
    Display a notification with the following *options*:

    - *title*: string, optional. This will be displayed on the top as a title.

    - *subtitle*: string, optional. This will be displayed on the top as a
      subtitle.

    - *message*: string, optional. The content of the notification. Do not forget
      to escape your message via the markup function if needed.

    - *sticky*: boolean, optional (default false). If true, the notification
      will stay until the user dismisses it.  Otherwise, the notification will
      be automatically closed after a short delay.

    - *type*: string, optional (default 'warning'). Determines the style of the
      notification. Possible values: 'info', 'success', 'warning', 'danger', ''.

    - *className*: string, optional.  This is a css class name that will be
      automatically added to the notification.  This could be useful for styling
      purpose, even though its use is discouraged.

Here are two examples on how to use these methods:

.. code-block:: javascript

    // note that we call _t on the text to make sure it is properly translated.
    this.displayNotification({
        title: _t("Success"),
        message: _t("Your signature request has been sent.")
    });
    this.displayNotification({
        title: _t("Error"),
        message: _t("Filter name is required."),
        type: 'danger',
    });

Here an example in python:

.. code-block:: python

    # note that we call _(string) on the text to make sure it is properly translated.
    def show_notification(self):
        return {
            'type': 'ir.actions.client',
            'tag': 'display_notification',
            'params': {
                'title': _('Success'),
                'message': _('Your signature request has been sent.'),
                'sticky': False,
            }
        }

Systray
=======

The Systray is the right part of the menu bar in the interface, where the web
client displays a few widgets, such as a messaging menu.

When the SystrayMenu is created by the menu, it will look for all registered
widgets and add them as a sub widget at the proper place.

There is currently no specific API for systray widgets.  They are supposed to
be simple widgets, and can communicate with their environment just like other
widgets with the *trigger_up* method.

Adding a new Systray Item
-------------------------

There is no systray registry.  The proper way to add a widget is to add it to
the class variable SystrayMenu.items.

.. code-block:: javascript

    var SystrayMenu = require('web.SystrayMenu');

    var MySystrayWidget = Widget.extend({
        ...
    });

    SystrayMenu.Items.push(MySystrayWidget);

Ordering
--------

Before adding the widget to himself, the Systray Menu will sort the items by
a sequence property. If that property is not present on the prototype, it will
use 50 instead.  So, to position a systray item to be on the right, one can
set a very high sequence number (and conversely, a low number to put it on the
left).

.. code-block:: javascript

    MySystrayWidget.prototype.sequence = 100;

Translation management
======================

Some translations are made on the server side (basically all text strings rendered or
processed by the server), but there are strings in the static files that need
to be translated.  The way it currently works is the following:

- each translatable string is tagged with the special function *_t* (available in
  the JS module *web.core*
- these strings are used by the server to generate the proper PO files
- whenever the web client is loaded, it will call the route */web/webclient/translations*,
  which returns a list of all translatable terms
- in runtime, whenever the function *_t* is called, it will look up in this list
  in order to find a translation, and return it or the original string if none
  is found.

Note that translations are explained in more details, from the server point of
view, in the document :doc:`/developer/howtos/translations`.

There are two important functions for the translations in javascript: *_t* and
*_lt*.  The difference is that *_lt* is lazily evaluated.

.. code-block:: javascript

    var core = require('web.core');

    var _t = core._t;
    var _lt = core._lt;

    var SomeWidget = Widget.extend({
        exampleString: _lt('this should be translated'),
        ...
        someMethod: function () {
            var str = _t('some text');
            ...
        },
    });

In this example, the *_lt* is necessary because the translations are not ready
when the module is loaded.

Note that translation functions need some care.  The string given in argument
should not be dynamic.

Session
=======

There is a specific module provided by the web client which contains some
information specific to the user current *session*.  Some notable keys are

- uid: the current user ID (its ID as a *res.users*)
- user_name: the user name, as a string
- the user context (user ID, language and timezone)
- partner_id: the ID of the partner associated to the current user
- db: the name of the database currently being in use

Adding information to the session
---------------------------------

When the /web route is loaded, the server will inject some session information
in the template a script tag. The information will be read from the method
*session_info* of the model *ir.http*.  So, if one wants to add a specific
information, it can be done by overriding the session_info method and adding it
to the dictionary.

.. code-block:: python

    from odoo import models
    from odoo.http import request


    class IrHttp(models.AbstractModel):
        _inherit = 'ir.http'

        def session_info(self):
            result = super(IrHttp, self).session_info()
            result['some_key'] = get_some_value_from_db()
            return result

Now, the value can be obtained in javascript by reading it in the session:

.. code-block:: javascript

    var session = require('web.session');
    var myValue = session.some_key;
    ...

Note that this mechanism is designed to reduce the amount of communication
needed by the web client to be ready.  It is more appropriate for data which is
cheap to compute (a slow session_info call will delay the loading for the web
client for everyone), and for data which is required early in the initialization
process.

Views
=====

The word 'view' has more than one meaning. This section is about the design of
the javascript code of the views, not the structure of the *arch* or anything
else.

In 2017, Odoo replaced the previous view code with a new architecture.  The
main need was to separate the rendering logic from the model logic.

Views (in a generic sense) are now described with  4 pieces: a View, a
Controller, a Renderer and a Model.  The API of these 4 pieces is described in
the AbstractView, AbstractController, AbstractRenderer and AbstractModel classes.

.. raw:: html

    <svg width="550" height="173">
        <!-- Created with Method Draw - https://github.com/duopixel/Method-Draw/ -->
        <path id="svg_1" d="m147.42498,79.79206c0.09944,-8.18859 -0.06363,-16.38812 0.81774,-24.5623c21.65679,2.68895 43.05815,7.08874 64.35,11.04543c1.14304,-4.01519 0.60504,-7.34585 1.59817,-11.05817c13.67878,7.81176 27.23421,15.73476 40.23409,24.03505c-12.47212,9.41539 -26.77809,17.592 -40.82272,25.96494c-0.4548,-3.89916 -0.90967,-7.79828 -1.36448,-11.69744c-20.69972,3.77225 -42.59036,7.6724 -63.42391,11.12096c-1.41678,-7.95741 -1.37514,-16.62327 -1.38888,-24.84846z" stroke-width="1.5" stroke="#000" fill="#fff"/>
        <rect id="svg_3" height="41" width="110" y="57.5" x="7" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="#fff"/>
        <rect stroke="#000" id="svg_5" height="41" width="135" y="20.5" x="328" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="#fff"/>
        <rect stroke="#000" id="svg_6" height="41" width="128" y="102.5" x="262" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="#fff"/>
        <rect stroke="#000" id="svg_7" height="41" width="119" y="100.5" x="417" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="#fff"/>
        <line stroke-linecap="null" stroke-linejoin="null" id="svg_8" y2="96.5" x2="317" y1="65.5" x1="364" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" id="svg_9" y2="96.5" x2="467" y1="63.5" x1="425" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none"/>
        <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_10" y="83.5" x="38" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">View</text>
        <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_11" y="44.5" x="346" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">Controller</text>
        <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_12" y="128.5" x="276" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">Renderer</text>
        <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_13" y="127.5" x="442" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">Model</text>
    </svg>

- the View is the factory. Its job is to get a set of fields, arch, context and
  some other parameters, then to construct a Controller/Renderer/Model triplet.

  The view's role is to properly setup each piece of the MVC pattern, with the correct
  information.  Usually, it has to process the arch string and extract the
  data necessary for each other parts of the view.

  Note that the view is a class, not a widget.  Once its job has been done, it
  can be discarded.

- the Renderer has one job: representing the data being viewed in a DOM element.
  Each view can render the data in a different way.  Also, it should listen on
  appropriate user actions and notify its parent (the Controller) if necessary.

  The Renderer is the V in the MVC pattern.

- the Model: its job is to fetch and hold the state of the view.  Usually, it
  represents in some way a set of records in the database.  The Model is the
  owner of the 'business data'. It is the M in the MVC pattern.

- the Controller: its job is to coordinate the renderer and the model.  Also, it
  is the main entry point for the rest of the web client.  For example, when
  the user changes something in the search view, the *update* method of the
  controller will be called with the appropriate information.

  It is the C in the MVC pattern.

.. note::
    The JS code for the views has been designed to be usable outside of the
    context of a view manager/action manager.  They could be used in a client action,
    or, they could be displayed in the public website (with some work on the assets).

.. _reference/js/widgets:

Fields
======

A good part of the web client experience is about editing and creating data. Most
of that work is done with the help of field widgets, which are aware of the field
type and of the specific details on how a value should be displayed and edited.

.. _reference/javascript_reference/field_decoration:

Decorations
-----------

Like the list view, field widgets have a simple support for decorations. The
goal of decorations is to have a simple way to specify a text color depending on
the record current state.  For example:

.. code-block:: xml

    <field name="state" decoration-danger="amount &lt; 10000"/>

The valid decoration names are:

- `decoration-bf`
- `decoration-it`
- `decoration-danger`
- `decoration-info`
- `decoration-muted`
- `decoration-primary`
- `decoration-success`
- `decoration-warning`

Each decoration *decoration-X* will be mapped to a css class *text-X*, which is
a standard bootstrap css class (except for *text-it* and *text-bf*, which are
handled by odoo and correspond to italic and bold, respectively).  Note that the
value of the decoration attribute should be a valid python expression, which
will be evaluated with the record as evaluation context.

Non-relational fields
---------------------

We document here all non relational fields available by default, in no particular
order.

Integer (`integer`)
    This is the default field type for fields of type `integer`.

    - Supported field types: `integer`

    Options:

    - `type`: setting the input type (`"text"` by default, can be set on `"number"`)

        In edit mode, the field is rendered as an input with the HTML attribute type
        set on `"number"` (so user can benefit the native support, especially on
        mobile). In this case, the default formatting is disabled to avoid incompability.

        .. code-block:: xml

            <field name="int_value" options="{'type': 'number'}" />

    - `step`: set the step to the value up and down when the user click on buttons
      (only for input of type number, `1` by default)

        .. code-block:: xml

            <field name="int_value" options="{'type': 'number', 'step': 100}" />

    - `format`: should the number be formatted. (`true` by default)

        By default, numbers are formatted according to locale parameters.
        This option will prevent the field's value from being formatted.

        .. code-block:: xml

            <field name="int_value" options='{"format": false}' />

Float (`float`)
    This is the default field type for fields of type `float`.

    - Supported field types: `float`

    Attributes:

    - `digits`: displayed precision

        .. code-block:: xml

            <field name="factor" digits="[42,5]" />

    Options:

    - `type`: setting the input type (`"text"` by default, can be set on `"number"`)

        In edit mode, the field is rendered as an input with the HTML attribute type
        set on `"number"` (so user can benefit the native support, especially on
        mobile). In this case, the default formatting is disabled to avoid incompability.

        .. code-block:: xml

            <field name="int_value" options="{'type': 'number'}" />

    - `step`: set the step to the value up and down when the user click on buttons
      (only for input of type number, `1` by default)

        .. code-block:: xml

            <field name="int_value" options="{'type': 'number', 'step': 0.1}" />

    - `format`: should the number be formatted. (`true` by default)

        By default, numbers are formatted according to locale parameters.
        This option will prevent the field's value from being formatted.

        .. code-block:: xml

            <field name="int_value" options="{'format': false}" />

Time (`float_time`)
    The goal of this widget is to display properly a float value that represents
    a time interval (in hours).  So, for example, `0.5` should be formatted as `0:30`,
    or `4.75` correspond to `4:45`.

    - Supported field types: `float`

Float Factor (`float_factor`)
    This widget aims to display properly a float value that converted using a factor
    given in its options. So, for example, the value saved in database is `0.5` and the
    factor is `3`, the widget value should be formatted as `1.5`.

    - Supported field types: `float`

Float Toggle (`float_toggle`)
    The goal of this widget is to replace the input field by a button containing a
    range of possible values (given in the options). Each click allows the user to loop
    in the range. The purpose here is to restrict the field value to a predefined selection.
    Also, the widget support the factor conversion as the `float_factor` widget (Range values
    should be the result of the conversion).

    - Supported field types: `float`

    .. code-block:: xml

        <field name="days_to_close" widget="float_toggle" options="{'factor': 2, 'range': [0, 4, 8]}" />

Boolean (`boolean`)
    This is the default field type for fields of type `boolean`.

    - Supported field types: `boolean`

Char (`char`)
    This is the default field type for fields of type `char`.

    - Supported field types: `char`

.. _reference/javascript_reference/date_field:

Date (`date`)
    This is the default field type for fields of type `date`. It consists of a text
    box and a date picker.

    - Supported field types: `date`

    Options:

    - `min_date` / `max_date`: sets limit dates for accepted values. By default, the earliest
      accepted date is **1000-01-01** and the latest is **9999-12-31**.
      Accepted values are SQL-formatted dates (`yyyy-MM-dd HH:mm:ss`) or `"today"`.

        .. code-block:: xml

            <field name="datefield" options="{'min_date': 'today', 'max_date': '2023-12-31'}" />

    - warn_future: displays a warning if the value is in the future (based on today).

        .. code-block:: xml

            <field name="datefield" options="{'warn_future': true}" />

.. _reference/javascript_reference/datetime_field:

Date & Time (`datetime`)
    This is the default field type for fields of type `datetime`. The values are always
    in the client's timezone.

    - Supported field types: `datetime`

    Options:

    - see :ref:`Date Field <reference/javascript_reference/date_field>` options

    - `rounding`: increment used to generate available minutes in the time picker.
      This does not affect the actual value, just the amount of available options in
      the select dropdown (default: `5`).

        .. code-block:: xml

            <field name="datetimefield" options="{'rounding': 10}" />

Date Range (`daterange`)
    This widget allows the user to select start and end date from a single picker.

    - Supported field types: `date`, `datetime`

    Options:

    - see :ref:`Date Field <reference/javascript_reference/date_field>` or :ref:`Date & Time Field <reference/javascript_reference/datetime_field>` options

    - `start_date_field`: field used to get/set the start value of the date range
      (cannot be used with `end_date_field`).

        .. code-block:: xml

            <field name="end_date" widget="daterange" options="{'start_date_field': 'start_date'}" />

    - `end_date_field`: field used to get/set the end value of the date range
      (cannot be used with `start_date_field`).

        .. code-block:: xml

            <field name="start_date" widget="daterange" options="{'end_date_field': 'end_date'}" />

Remaining Days (`remaining_days`)
    This widget can be used on date and datetime fields. In readonly, it displays
    the delta (in days) between the value of the field and today. The widget turns
    into a regular date or datetime field in edit mode.

    - Supported field types: `date`, `datetime`

Monetary (`monetary`)
    This is the default field type for fields of type `monetary`. It is used to
    display a currency.  If there is a currency fields given in option, it will
    use that, otherwise it will fall back to the default currency (in the session)

    - Supported field types: `monetary`, `float`

    Options:

    - `currency_field`: another field name which should be a many2one on currency.

        .. code-block:: xml

            <field name="value" widget="monetary" options="{'currency_field': 'currency_id'}" />

Text (`text`)
    This is the default field type for fields of type `text`.

    - Supported field types: `text`


Handle (`handle`)
    This field's job is to be displayed as a `handle`, and allows reordering the
    various records by drag and dropping them.

    .. warning:: It has to be specified on the field by which records are sorted.
    .. warning:: Having more than one field with a handle widget on the same list is not supported.

    - Supported field types: `integer`


Email (`email`)
    This field displays email address.  The main reason to use it is that it
    is rendered as an anchor tag with the proper href, in readonly mode.

    - Supported field types: `char`

Phone (`phone`)
    This field displays a phone number.  The main reason to use it is that it
    is rendered as an anchor tag with the proper href, in readonly mode, but
    only in some cases: we only want to make it clickable if the device can
    call this particular number.

    - Supported field types: `char`

URL (`url`)
    This field displays an url (in readonly mode). The main reason to use it is
    that it is rendered as an anchor tag with the proper css classes and href.

    Also, the text of the anchor tag can be customized with the *text* attribute
    (it won't change the href value).

    - Supported field types: `char`

    .. code-block:: xml

        <field name="foo" widget="url" text="Some URL" />

    Options:

    - `website_path`: (default: `false`) by default, the widget forces (if not already
      the case) the href value to begin with `"http://"` except if this option is set
      to `true`, thus allowing redirections to the database's own website.

Domain (`domain`)
    The `domain` field allows the user to construct a technical-prefix domain
    thanks to a tree-like interface and see the selected records in real time.
    In debug mode, an input is also there to be able to enter the prefix char
    domain directly (or to build advanced domains the tree-like interface does
    not allow to).

    Note that this is limited to **static** domains (no dynamic expressions, or access
    to context variable).

    - Supported field types: `char`

Link button (`link_button`)
    The `LinkButton` widget actually simply displays a span with an icon and the
    text value as content. The link is clickable and will open a new browser
    window with its value as url.

    - Supported field types: `char`

Image File (`image`)
    This widget is used to represent a binary value as an image. In some cases,
    the server returns a `bin_size` instead of the real image (a `bin_size` is a
    string representing a file size, such as `"6.5kb"`).  In that case, the widget
    will make an image with a source attribute corresponding to an image on the
    server.

    - Supported field types: `binary`

    Options:

    - `preview_image`: if the image is only loaded as a `bin_size`, then this
      option is useful to inform the web client that the default field name is
      not the name of the current field, but the name of another field.

        .. code-block:: xml

            <field name="image" widget="image" options="{'preview_image': 'image_128'}" />

    - `accepted_file_extensions`: the file extension the user can pick from the file input dialog box
      (default value is `"image/\*"`)

        (cf: ``accept`` attribute on `<input type="file" />`)

Binary File (`binary`)
    Generic widget to allow saving/downloading a binary file.

    - Supported field types: `binary`

    Attributes:

    - `filename`: saving a binary file will lose its file name, since it only
      saves the binary value. The file name can be saved in another field. To do
      that, a `filename` attribute should be set to a field present in the view.

        .. code-block:: xml

            <field name="datas" filename="datas_fname" />

    Options:

    - `accepted_file_extensions`: the file extension the user can pick from the file input dialog box

        (cf: ``accept`` attribute on `<input type="file" />`)

Priority (`priority`)
    This widget is rendered as a set of stars, allowing the user to click on it
    to select a value or not. This is useful for example to mark a task as high
    priority.

    Note that this widget also works in `readonly` mode, which is unusual.

    - Supported field types: `selection`

Image Attachment (`attachment_image`)
    Image widget for `many2one` fields. If the field is set, this widget will be
    rendered as an image with the proper src url. This widget does not have a
    different behaviour in edit or readonly mode, it is only useful to view an
    image.

    - Supported field types: `many2one`

    .. code-block:: xml

        <field name="displayed_image_id" widget="attachment_image" />

Label Selection (`label_selection`)
    This widget renders a simple non-editable label. This is only useful to
    display some information, not to edit it.

    - Supported field types: `selection`

    Options:

    - `classes`: a mapping from a selection value to a CSS class name

        .. code-block:: xml

            <field
                name="state"
                widget="label_selection"
                options="{
                    'classes': {
                        'draft': 'default',
                        'cancel': 'default',
                        'none': 'danger',
                    },
                }"
            />

State Selection (`state_selection`)
    This is a specialized selection widget. It assumes that the record has some
    hardcoded fields, present in the view: `stage_id`, `legend_normal`,
    `legend_blocked`, `legend_done`. This is mostly used to display and change
    the state of a task in a project, with additional information displayed in
    the dropdown.

    - Supported field types: `selection`

    .. code-block:: xml

        <field name="kanban_state" widget="state_selection" />

State Selection - List View (`list.state_selection`)
    In list views, the `state_selection` field displays by default the label next to the icon.

    - Supported field types: `selection`

    Options:

    - `hide_label`: hide the label next to the icon

        .. code-block:: xml

            <field name="kanban_state" widget="state_selection" options="{'hide_label': true}" />

Favorite (`boolean_favorite`)
    This widget is displayed as an empty (or not) star, depending on a boolean
    value. Note that it also can be edited in readonly mode.

    - Supported field types: `boolean`

Toggle (`boolean_toggle`)
    Displays a toggle switch to represent a boolean. This is a subfield of the
    `boolean` field, mostly used to have a different look.

    - Supported field types: `boolean`

Stat Info (`statinfo`)
    This widget is meant to represent statistical information in a `stat button`.
    It is basically just a label with a number.

    - Supported field types: `integer`, `float`

    Options:

    - `label_field`: if given, the widget will use the value of the `label_field` as text.

        .. code-block:: xml

            <button
                name="%(act_payslip_lines)d"
                icon="fa-money"
                type="action"
            >
                <field
                    name="payslip_count"
                    widget="statinfo"
                    string="Payslip"
                    options="{'label_field': 'label_tasks'}"
                />
            </button>

Percent Pie (`percentpie`)
    This widget is meant to represent statistical information in a `stat button`.
    This is similar to a statinfo widget, but the information is represented in
    a **pie chart** (empty to full).  Note that the value is interpreted as a
    percentage (a number between `0` and `100`).

    - Supported field types: `integer`, `float`

    .. code-block:: xml

        <field name="replied_ratio" string="Replied" widget="percentpie" />

Progress Bar (`progressbar`)
    Represent a value as a progress bar (from `0` to some value)

    - Supported field types: `integer`, `float`

    Options:

    - `editable`: boolean determining whether the `value` is editable

    - `current_value`: get the current value from the field that must be present in the view

    - `max_value`: get the maximum value from the field that must be present in the view

    - `edit_max_value`: boolean determining whether the `max_value` is editable

    - `title`: title of the bar, displayed on top of the bar

        -> not translated, use `title` attribute (not option) instead if the term must be translated

    .. code-block:: xml

        <field
            name="absence_of_today"
            widget="progressbar"
            options="{
                'current_value': 'absence_of_today',
                'max_value': 'total_employee',
                'editable': false,
            }"
        />

Journal Dashboard Graph (`dashboard_graph`)
    This is a more specialized widget, useful to display a graph representing a
    set of data. For example, it is used in the accounting dashboard kanban view.

    It assumes that the field is a JSON serialization of a set of data.

    - Supported field types: `char`

    Attributes:

    - `graph_type`: string, can be either `"line"` or `"bar"`

        .. code-block:: xml

            <field name="dashboard_graph_data" widget="dashboard_graph" graph_type="line" />

Ace Editor (`ace`)
    This widget is intended to be used on Text fields. It provides Ace Editor
    for editing XML and Python.

    - Supported field types: `char`, `text`

Badge (`badge`)
    Displays the value inside a bootstrap badge pill.

    - Supported field types: `char`, `selection`, `many2one`

    By default, the badge has a light grey background, but it can be customized
    by using the :ref:`Decoration <reference/javascript_reference/field_decoration>` mechanism.
    For instance, to display a red badge under a given condition:

    .. code-block:: xml

        <field name="foo" widget="badge" decoration-danger="state == 'cancel'" />

Relational fields
-----------------

Selection (`selection`)

    - Supported field types: `selection`

    Attributes:

    - `placeholder`: a string which is used to display some info when no value is selected

        .. code-block:: xml

            <field name="tax_id" widget="selection" placeholder="Select a tax" />

Radio (`radio`)
    This is a subfield of `FielSelection`, but specialized to display all the
    valid choices as radio buttons.

    Note that if used on a many2one records, then more rpcs will be done to fetch
    the name_gets of the related records.

    - Supported field types: `selection`, `many2one`

    Options:

    - `horizontal`: if `true`, radio buttons will be displayed horizontally.

        .. code-block:: xml

            <field name="recommended_activity_type_id" widget="radio" options="{'horizontal': true}"/>

Badge Selection (`selection_badge`)
    This is a subfield of `selection` field, but specialized to display all the
    valid choices as rectangular badges.

    - Supported field types: `selection`, `many2one`

    .. code-block:: xml

        <field name="recommended_activity_type_id" widget="selection_badge" />

Many2one (`many2one`)
    Default widget for many2one fields.

    - Supported field types: `many2one`

    Attributes:

    - `can_create`: allow the creation of related records
      (takes precedence over `no_create` option)

    - `can_write`: allow the editing of related records (default: `true`)

    Options:

    - `quick_create`: allow the quick creation of related records (default: `true`)

    - `no_create`: prevent the creation of related records - hide both the **Create "xxx"**
      and **Create and Edit** dropdown menu items (default: `false`)

    - `no_quick_create`: prevent the quick creation of related records - hide the **Create "xxx"**
      dropdown menu item (default: `false`)

    - `no_create_edit`: hide the **Create and Edit** dropdown menu item (default: `false`)

    - `create_name_field`: when creating a related record, if this option is set,
      the value of the `create_name_field` will be filled with the value of the input
      (default: `name`)

    - `always_reload`: boolean, default to `false`. If `true`, the widget will always
      do an additional `name_get` to fetch its name value. This is used for the
      situations where the `name_get` method is overridden (please do not do that)

    - `no_open`: boolean, default to `false`. If set to `true`, the many2one will not
      redirect on the record when clicking on it (in readonly mode)

    .. code-block:: xml

        <field name="currency_id" options="{'no_create': true, 'no_open': true}" />

Many2one Barcode (`many2one_barcode`)
    Widget for `many2one` fields allows to open the camera from a mobile device (Android/iOS) to scan a barcode.

    Specialization of `many2one` field where the user is allowed to use the native camera to scan a barcode.
    Then it uses `name_search` to search this value.

    If this widget is set and user is not using the mobile application,
    it will fallback to regular `many2one` (`Many2OneField`)

    - Supported field types: `many2one`

Many2one Avatar (`many2one_avatar`)
    This widget is only supported on `many2one` fields pointing to a model which
    inherits from `image.mixin`. In readonly, it displays the image of the
    related record next to its `display_name`. Note that the `display_name` isn't a
    clickable link in this case. In edit, it behaves exactly like the regular
    `many2one`.

    - Supported field types: `many2one`

Many2one Avatar User (`many2one_avatar_user`)
    This widget is a specialization of the `Many2OneAvatar`. When the avatar is
    clicked, we open a chat window with the corresponding user. This widget can
    only be set on `many2one` fields pointing to the `res.users` model.

    - Supported field types: `many2one` (pointing to `res.users`)

Many2one Avatar Employee (`many2one_avatar_employee`)
    Same as `many2one_avatar_user`, but for `many2one` fields pointing to `hr.employee`.

    - Supported field types: `many2one` (pointing to `hr.employee`)

Many2many (`many2many`)
    Default widget for `many2many` fields.

    - Supported field types: `many2many`

    Attributes:

    - `mode`: string, default view to display

    - `domain`: restrict the data to a specific domain

    Options:

    - `create_text`: allow the customization of the text displayed when adding a new record

    - `link`: domain determining whether records can be added to the relation (default: `true`).

    - `unlink`: domain determining whether records can be removed from the relation (default: `true`).

Many2many Binary File (`many2many_binary`)
    This widget helps the user to upload or delete one or more files at the same time.

    Note that this widget is specific to the model `ir.attachment`.

    - Supported field types: `many2many`

    Options:

    - `accepted_file_extensions`: the file extension the user can pick from the file input dialog box

        (cf: ``accept`` attribute on `<input type="file" />`)

Many2many Tags (`many2many_tags`)
    Display a `many2many` field as a list of tags.

    - Supported field types: `many2many`

    Options:

    - `create`: domain determining whether or not new tags can be created (default: `true`).

        .. code-block:: xml

            <field name="category_id" widget="many2many_tags" options="{'create': [['some_other_field', '>', 24]]}" />

    - `color_field`: the name of a numeric field, which should be present in the view.
      A color will be chosen depending on its value.

        .. code-block:: xml

            <field name="category_id" widget="many2many_tags" options="{'color_field': 'color'}" />

    - `no_edit_color`: set to `true` to remove the possibility to change the color of the tags
      (default: `false`).

        .. code-block:: xml

            <field name="category_id" widget="many2many_tags" options="{'color_field': 'color', 'no_edit_color': true}" />

Many2many Tags - Form View (`form.many2many_tags`)
    Specialization of `many2many_tags` widget for form views. It has some extra
    code to allow editing the color of a tag.

    - Supported field types: `many2many`

Many2many Tags - Kanban View (`kanban.many2many_tags`)
    Specialization of `many2many_tags` widget for kanban views.

    - Supported field types: `many2many`

Many2many Checkboxes (`many2many_checkboxes`)
    This field displays a list of checkboxes and allows the user to select a
    subset of the choices. Note that the number of displayed values is limited to
    `100`. This limit isn't customizable. It simply allows to handle extreme cases
    where this widget is wrongly set on a field with a huge comodel. In those
    cases, a list view is more adequate as it allows pagination and filtering.

    - Supported field types: `many2many`

One2many (`one2many`)
    Default widget for `one2many` fields.
    It usually displays data in a sub list view, or a sub kanban view.

    - Supported field types: `one2many`

    Options:

    - `create`: domain determining whether or not related records can be created (default: `true`).

    - `delete`: domain determining whether or not related records can be deleted (default: `true`).

        .. code-block:: xml

            <field name="turtles" options="{'create': [['some_other_field', '>', 24]]}" />

    - `create_text`: a string that is used to customize the 'Add' label/text.

        .. code-block:: xml

            <field name="turtles" options="{'create_text': 'Add turtle'}" />

Status Bar (`statusbar`)
    This is a field specific to the form views. It is the bar on top
    of many forms which represent a flow, and allow selecting a specific state.

    - Supported field types: `selection`, `many2one`

Reference (`reference`)
    The `reference` field is a combination of a select (for the model) and a
    `many2one` field (for its value).  It allows the selection of a record on an
    arbitrary model.

    - Supported field types: `char`, `reference`

    Options:

    - `model_field`: name of an `ir.model` containing the model of the records that can be selected.
      When this option is set, the select part of the `reference` field isn't displayed.

Widgets
-------

Week Days (`week_days`)
    This widget displays a list of checkboxes for week days, 1 checkbox for each day
    and allow the user to select a subset of the choices.

    .. code-block:: xml

        <widget name="week_days" />

Client actions
==============

The idea of a client action is a customized widget that is integrated into the
web client interface, just like an *act_window_action*.  This is useful when
you need a component that is not closely linked to an existing view or a
specific model.  For example, the Discuss application is actually a client
action.

A client action is a term that has various meanings, depending on the context:

- from the perspective of the server, it is a record of the model *ir_action*,
  with a field *tag* of type char
- from the perspective of the web client, it is a widget, which inherits from
  the class AbstractAction, and is supposed to be registered in the
  action registry under the corresponding key (from the field char)

Whenever a menu item is associated with a client action, opening it will simply
fetch the action definition from the server, then lookup into its action
registry to get the Widget definition at the appropriate key, and finally, it
will instantiate and append the widget to the proper place in the DOM.

Adding a client action
----------------------

A client action is a widget that will control the part of the screen below the
menu bar.  It can have a control panel, if necessary.  Defining a client action
can be done in two steps: implementing a new widget and registering the widget
in the action registry.

Implementing a new client action.
  This is done by creating a widget:

  .. code-block:: javascript

        var AbstractAction = require('web.AbstractAction');

        var ClientAction = AbstractAction.extend({
            hasControlPanel: true,
            ...
        });

Registering the client action:
  As usual, we need to make the web client aware of the mapping between
  client actions and the actual class:

  .. code-block:: javascript

      var core = require('web.core');

      core.action_registry.add('my-custom-action', ClientAction);


  Then, to use the client action in the web client, we need to create a client
  action record (a record of the model ``ir.actions.client``) with the proper
  ``tag`` attribute:

  .. code-block:: xml

      <record id="my_client_action" model="ir.actions.client">
          <field name="name">Some Name</field>
          <field name="tag">my-custom-action</field>
      </record>

Using the control panel
-----------------------

By default, the client action does not display a control panel. To
do that, several steps should be done.

- Set the *hasControlPanel* to *true*.
  In the widget code:

  .. code-block:: javascript

      var MyClientAction = AbstractAction.extend({
          hasControlPanel: true,
          ...
      });

- Call the method *updateControlPanel* whenever we need to update the control panel.
  For example:

  .. code-block:: javascript

      var SomeClientAction = Widget.extend({
          hasControlPanel: true,
          ...
          start: function () {
              this._renderButtons();
              this._update_control_panel();
              ...
          },
          do_show: function () {
               ...
               this._update_control_panel();
          },
          _renderButtons: function () {
              this.$buttons = $(QWeb.render('SomeTemplate.Buttons'));
              this.$buttons.on('click', ...);
          },
          _update_control_panel: function () {
              this.updateControlPanel({
                  cp_content: {
                     $buttons: this.$buttons,
                  },
              });
          }

The ``updateControlPanel`` is the main method to customize the content in the control panel.
For more information, look into the `control_panel_renderer.js <{GITHUB_PATH}/addons/web/static/src/js/views/control_panel/control_panel_renderer.js#L130>`_ file.

.. _glob:
    https://en.wikipedia.org/wiki/Glob_(programming)

.. _.appendTo():
    https://api.jquery.com/appendTo/

.. _.prependTo():
    https://api.jquery.com/prependTo/

.. _.insertAfter():
    https://api.jquery.com/insertAfter/

.. _.insertBefore():
    https://api.jquery.com/insertBefore/

.. _event delegation:
    https://api.jquery.com/delegate/

.. _datepicker: https://github.com/Eonasdan/bootstrap-datetimepicker
