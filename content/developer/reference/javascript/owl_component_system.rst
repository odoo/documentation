
====================
Owl Component System
====================

The Odoo Javascript framework uses a custom component framework called Owl. It
is a declarative component system, loosely inspired by Vue and React. Components
are defined using :doc:`QWeb templates <qweb>`, enriched with some Owl
specific directives. The official 
`Owl documentation <https://github.com/odoo/owl/blob/master/doc/readme.md>`_
contains a complete reference and a tutorial.

.. important::

   Although the code can be found in the `web` module, it is maintained from a
   separate GitHub repository. Any modification to Owl should therefore be made
   through a pull request on https://github.com/odoo/owl.

.. note::
   Currently, all Odoo versions (starting in version 14) share the same Owl version.

Using Owl components in Odoo
============================

The `Owl documentation`_ already documents in detail the Owl framework, so this
page will only provide Odoo specific information. But first, let us see how we
can make a simple component in Odoo.

.. code-block:: javascript
    
    const { useState } = owl.hooks;
    const { xml } = owl.tags;

    class MyComponent extends Component {
        setup() {
            this.state = useState({ value: 1 });
        }

        increment() {
            this.state.value++;
        }
    }
    MyComponent.template = xml
        `<div t-on-click="increment">
            <t t-esc="state.value">
        </div>`;

This example shows that Owl is available as a library in the global namespace as
``owl``: it can simply be used like most libraries in Odoo. Note that we
defined here the template as a static property, but without using the `static`
keyword, which is not available in some browsers (Odoo javascript code should
be Ecmascript 2019 compliant).

We define here the template in the javascript code, with the help of the ``xml``
helper. However, it is only useful to get started. In practice, templates in
Odoo should be defined in an xml file, so they can be translated. In that case,
the component should only define the template name.

In practice, most components should define 2 or 3 files, located at the same
place: a javascript file (``my_component.js``), a template file (``my_component.xml``)
and optionally a scss (or css) file (``my_component.scss``). These files should
then be added to some assets bundle. The web framework will take care of
loading the javascript/css files, and loading the templates into Owl.

Here is how the component above should be defined:

.. code-block:: javascript
    
    const { useState } = owl.hooks;

    class MyComponent extends Component {
        ...
    }
    MyComponent.template = 'myaddon.MyComponent';

And the template is now located in the corresponding xml file:

.. code-block:: xml

    <?xml version="1.0" encoding="UTF-8" ?>
    <templates xml:space="preserve">

    <t t-name="myaddon.MyComponent" owl="1">
      <div t-on-click="increment">
        <t t-esc="state.value"/>
      </div>
    </t>

    </templates>

Odoo code is not yet completely made in Owl, so it needs a way to tell the
difference between Owl templates (new code) and old templates (for components). To
do that in a backward-compatible way, all new templates should be defined with
the ``owl`` attribute set to 1.

.. note::

   Do not forget to set ``owl="1"`` in your Owl templates!

.. note::

   Template names should follow the convention `addon_name.ComponentName`.


.. seealso::
    - `Owl Repository <https://github.com/odoo/owl>`_
