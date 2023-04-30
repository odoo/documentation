.. _frontend/components:

==============
Owl components
==============

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

Using Owl components
====================

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
`owl`: it can simply be used like most libraries in Odoo. Note that we
defined here the template as a static property, but without using the `static`
keyword, which is not available in some browsers (Odoo javascript code should
be Ecmascript 2019 compliant).

We define here the template in the javascript code, with the help of the `xml`
helper. However, it is only useful to get started. In practice, templates in
Odoo should be defined in an xml file, so they can be translated. In that case,
the component should only define the template name.

In practice, most components should define 2 or 3 files, located at the same
place: a javascript file (`my_component.js`), a template file (`my_component.xml`)
and optionally a scss (or css) file (`my_component.scss`). These files should
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

    <t t-name="myaddon.MyComponent">
      <div t-on-click="increment">
        <t t-esc="state.value"/>
      </div>
    </t>

    </templates>

.. note::

   Template names should follow the convention `addon_name.ComponentName`.


.. seealso::
    - `Owl Repository <https://github.com/odoo/owl>`_

.. _frontend/owl/best_practices:

Best practices
==============

First of all, components are classes, so they have a constructor. But constructors
are special methods in javascript that are not overridable in any way. Since this
is an occasionally useful pattern in Odoo, we need to make sure that no component
in Odoo directly uses the constructor method. Instead, components should use the
`setup` method:

.. code-block:: javascript

    // correct:
    class MyComponent extends Component {
        setup() {
            // initialize component here
        }
    }

    // incorrect. Do not do that!
    class IncorrectComponent extends Component {
        constructor(parent, props) {
            // initialize component here
        }
    }

Another good practice is to use a consistent convention for template names:
`addon_name.ComponentName`. This prevents name collision between odoo addons.

Reference List
==============

The Odoo web client is built with `Owl <https://github.com/odoo/owl>`_ components.
To make it easier, the Odoo javascript framework provides a suite of generic
components that can be reused in some common situations, such as dropdowns,
checkboxes or datepickers. This page explains how to use these generic components.

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Technical Name
     - Short Description
   * - :ref:`ActionSwiper <frontend/owl/actionswiper>`
     - a swiper component to perform actions on touch swipe
   * - :ref:`CheckBox <frontend/owl/checkbox>`
     - a simple checkbox component with a label next to it
   * - :ref:`ColorList <frontend/owl/colorlist>`
     - a list of colors to choose from
   * - :ref:`Dropdown <frontend/owl/dropdown>`
     - full-featured dropdown
   * - :ref:`Notebook <frontend/owl/notebook>`
     - a component to navigate between pages using tabs
   * - :ref:`Pager <frontend/pager>`
     - a small component to handle pagination
   * - :ref:`SelectMenu <frontend/select_menu>`
     - a dropdown component to choose between different options
   * - :ref:`TagsList <frontend/tags_list>`
     - a list of tags displayed in rounded pills

.. _frontend/owl/actionswiper:

ActionSwiper
------------

Location
~~~~~~~~

`@web/core/action_swiper/action_swiper`

Description
~~~~~~~~~~~

This is a component that can perform actions when an element is swiped
horizontally. The swiper is wrapping a target element to add actions to it.
The action is executed once the user has released the swiper passed
a portion of its width.

.. code-block:: xml

  <ActionSwiper onLeftSwipe="Object" onRightSwipe="Object">
    <SomeElement/>
  </ActionSwiper>

The simplest way to use the component is to use it around your target element directly
in an xml template as shown above. But sometimes, you may want to extend an existing element
and would not want to duplicate the template. It is possible to do just that.

If you want to extend the behavior of an existing element, you must place the element
inside, by wrapping it directly. Also, you can conditionnally add props to manage when the
element might be swipable, its animation and the minimum portion to swipe to perform the action.

You can use the component to interact easily with records, messages, items in lists and much more.

.. image:: owl_components/actionswiper.png
  :width: 400 px
  :alt: Example of ActionSwiper usage
  :align: center

The following example creates a basic ActionSwiper component.
Here, the swipe is enabled in both directions.

.. code-block:: xml

  <ActionSwiper
    onRightSwipe="
      {
        action: '() => Delete item',
        icon: 'fa-delete',
        bgColor: 'bg-danger',
      }"
    onLeftSwipe="
      {
        action: '() => Star item',
        icon: 'fa-star',
        bgColor: 'bg-warning',
      }"
  >
    <div>
      Swipable item
    </div>
  </ActionSwiper>

.. note:: Actions are permuted when using right-to-left (RTL) languages.

Props
~~~~~

.. list-table::
    :widths: 20 20 60
    :header-rows: 1

    * - Name
      - Type
      - Description
    * - `animationOnMove`
      - `Boolean`
      - optional boolean to determine if a translate effect is present during the swipe
    * - `animationType`
      - `String`
      - optional animation that is used after the swipe ends (`bounce` or `forwards`)
    * - `onLeftSwipe`
      - `Object`
      - if present, the actionswiper can be swiped to the left
    * - `onRightSwipe`
      - `Object`
      - if present, the actionswiper can be swiped to the right
    * - `swipeDistanceRatio`
      - `Number`
      - optional minimum width ratio that must be swiped to perform the action

You can use both `onLeftSwipe` and `onRightSwipe` props at the same time.

The `Object`'s used for the left/right swipe must contain:

    - `action`, which is the callable `Function` serving as a callback.
      Once the swipe has been completed in the given direction, that action
      is performed.
    - `icon` is the icon class to use, usually to represent the action.
      It must be a `string`.
    - `bgColor` is the background color, given to decorate the action.
      can be one of the following `bootstrap contextual color
      <https://getbootstrap.com/docs/3.3/components/#available-variations>`_ (`danger`,
      `info`, `secondary`, `success` or `warning`).

    Those values must be given to define the behavior and the visual aspect
    of the swiper.

Example: Extending existing components
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the following example, you can use `xpath`'s to wrap an existing element
in the ActionSwiper component. Here, a swiper has been added to mark
a message as read in mail.

.. code-block:: xml

  <xpath expr="//*[hasclass('o_Message')]" position="after">
    <ActionSwiper
      onRightSwipe="messaging.device.isMobile and messageView.message.isNeedaction ?
        {
          action: () => messageView.message.markAsRead(),
          icon: 'fa-check-circle',
          bgColor: 'bg-success',
        } : undefined"
    />
  </xpath>
  <xpath expr="//ActionSwiper" position="inside">
    <xpath expr="//*[hasclass('o_Message')]" position="move"/>
  </xpath>

.. _frontend/owl/checkbox:

CheckBox
--------

Location
~~~~~~~~

`@web/core/checkbox/checkbox`

Description
~~~~~~~~~~~

This is a simple checkbox component with a label next to it. The checkbox is
linked to the label: the checkbox is toggled whenever the label is clicked.

.. code-block:: xml

  <CheckBox value="boolean" disabled="boolean" t-on-change="onValueChange">
    Some Text
  </CheckBox>

Props
~~~~~

.. list-table::
    :widths: 20 20 60
    :header-rows: 1

    * - Name
      - Type
      - Description
    * - `value`
      - `boolean`
      - if true, the checkbox is checked, otherwise it is unchecked
    * - `disabled`
      - `boolean`
      - if true, the checkbox is disabled, otherwise it is enabled

.. _frontend/owl/colorlist:

ColorList
---------

Location
~~~~~~~~

`@web/core/colorlist/colorlist`

Description
~~~~~~~~~~~

The ColorList let you choose a color from a predefined list. By default, the component displays the current
selected color, and is not expandable until the `canToggle` props is present. Different props can change its
behavior, to always expand the list, or make it act as a toggler once it is clicked, to display the list of
available colors until a choice is selected.

Props
~~~~~

.. list-table::
    :widths: 20 20 60
    :header-rows: 1

    * - Name
      - Type
      - Description
    * - `canToggle`
      - `boolean`
      - optional. Whether the colorlist can expand the list on click
    * - `colors`
      - `array`
      - list of colors to display in the component. Each color has a unique `id`
    * - `forceExpanded`
      - `boolean`
      - optional. If true, the list is always expanded
    * - `isExpanded`
      - `boolean`
      - optional. If true, the list is expanded by default
    * - `onColorSelected`
      - `function`
      - callback executed once a color is selected
    * - `selectedColor`
      - `number`
      - optional. The color `id` that is selected

Color `id`'s are the following:

.. list-table::
    :header-rows: 1

    * - Id
      - Color
    * - `0`
      - `No color`
    * - `1`
      - `Red`
    * - `2`
      - `Orange`
    * - `3`
      - `Yellow`
    * - `4`
      - `Light blue`
    * - `5`
      - `Dark purple`
    * - `6`
      - `Salmon pink`
    * - `7`
      - `Medium blue`
    * - `8`
      - `Dark blue`
    * - `9`
      - `Fuchsia`
    * - `12`
      - `Green`
    * - `11`
      - `Purple`

.. _frontend/owl/dropdown:

Dropdown
--------

Location
~~~~~~~~

`@web/core/dropdown/dropdown` and `@web/core/dropdown/dropdown_item`

Description
~~~~~~~~~~~

Dropdowns are surprisingly complicated components. They need to provide many
features such as:

- Toggle the item list on click
- Direct siblings dropdowns: when one is open, toggle others on hover
- Close on outside click
- Optionally close the item list when an item is selected
- Call a function when the item is selected
- Support sub dropdowns, up to any level
- SIY: style it yourself
- Configurable hotkey to open/close a dropdown or select a dropdown item
- Keyboard navigation (arrows, tab, shift+tab, home, end, enter and escape)
- Reposition itself whenever the page scrolls or is resized
- Smartly chose the direction it should open (right-to-left direction is automatically handled).

To solve these issues once and for all, the Odoo framework provides a set of two
components: a `Dropdown` component (the actual dropdown), and `DropdownItem`,
for each element in the item list.

.. code-block:: xml

  <Dropdown>
    <t t-set-slot="toggler">
      <!-- "toggler" slot content is rendered inside a button -->
      Click me to toggle the dropdown menu !
    </t>
    <!-- "default" slot content is rendered inside a div -->
    <DropdownItem onSelected="selectItem1">Menu Item 1</DropdownItem>
    <DropdownItem onSelected="selectItem2">Menu Item 2</DropdownItem>
  </Dropdown>

Props
~~~~~

A `<Dropdown/>` component is simply a `<div class="dropdown"/>` having a
`<button class="dropdown-toggle"/>` next to menu div
(`<div class="dropdown-menu"/>`). The button is responsible for the menu
being present in the DOM or not.


.. list-table::
   :widths: 20 20 60
   :header-rows: 1

   * - Dropdown
     - Type
     - Description
   * - `startOpen`
     - boolean
     - initial dropdown open state (defaults to `false`)
   * - `menuClass`
     - string
     - additional css class applied to the dropdown menu `<div class="dropdown-menu"/>`
   * - `togglerClass`
     - string
     - additional css class applied to the toggler `<button class="dropdown-toggle"/>`
   * - `hotkey`
     - string
     - hotkey to toggle the opening through keyboard
   * - `tooltip`
     - string
     - add a tooltip on the toggler
   * - `beforeOpen`
     - function
     - hook to execute logic just before opening. May be asynchronous.
   * - `manualOnly`
     - boolean
     - if true, only toggle the dropdown when the button is clicked on (defaults to `false`)
   * - `disabled`
     - boolean
     - disable (if true) the dropdown button (defaults to `false`)
   * - `title`
     - string
     - title attribute content for the `<button class="dropdown-toggle"/>` (default: none)
   * - `position`
     - string
     - defines the desired menu opening position. RTL direction is automatically applied. Should be a valid :ref:`usePosition <frontend/hooks/useposition>` hook position. (default: `bottom-start`)
   * - `toggler`
     - `"parent"` or `undefined`
     - when set to `"parent"` the `<button class="dropdown-toggle"/>` is not
       rendered (thus `toggler` slot is ignored) and the toggling feature is handled by the parent node (e.g. use
       case: pivot cells). (default: `undefined`)


A `<DropdownItem/>` is simply a span (`<span class="dropdown-item"/>`).
When a `<DropdownItem/>` is selected, it calls its `onSelected` prop. If this prop is a method, make sure it is bound if the method need to use the `this` value.

.. list-table::
   :widths: 20 20 60
   :header-rows: 1

   * - DropdownItem
     - Type
     - Description
   * - `onSelected`
     - Function
     - a function that will be called when the dropdown item is selected.
   * - `parentClosingMode`
     - `none` | `closest` | `all`
     - when the item is selected, control which parent dropdown will get closed:
       none, closest or all (default = `all`)
   * - `hotkey`
     - string
     - optional hotkey to select the item
   * - `href`
     - string
     - if provided the DropdownItem will become an `<a href="value" class="dropdown-item"/>` instead of a `<span class="dropdown-item"/>`. (default: not provided)
   * - `title`
     - string
     - optional title attribute which will be passed to the root node of the DropdownItem. (default: not provided)
   * - `dataset`
     - Object
     - optional object containing values that should be added to the root element's dataset. This can be used so that the element is easier to find programmatically, for example in tests or tours.

Technical notes
~~~~~~~~~~~~~~~

The rendered DOM is structured like this:

.. code-block:: html

   <div class="dropdown">
       <button class="dropdown-toggle">Click me !</button>
       <!-- following <div/> will or won't appear in the DOM depending on the state controlled by the preceding button -->
       <div class="dropdown-menu">
           <span class="dropdown-item">Menu Item 1</span>
           <span class="dropdown-item">Menu Item 2</span>
       </div>
   </div>

To properly use a `<Dropdown/>` component, you need to populate two
`OWL slots <https://github.com/odoo/owl/blob/master/doc/reference/slots.md>`_ :


- `toggler` slot: it contains the *toggler* elements of your dropdown and is
  rendered inside the dropdown `button` (unless the `toggler` prop is set to `parent`),
- `default` slot: it contains the *elements* of the dropdown menu itself and is
  rendered inside the `<div class="dropdown-menu"/>`. Although it is not mandatory, there is usually at least one
  `DropdownItem` inside the `menu` slot.


When several dropdowns share the same parent element in the DOM, then they are
considered part of a group, and will notify each other about their state changes.
This means that when one of these dropdowns is open, the others will automatically
open themselves on mouse hover, without the need for a click.


Example: Direct Siblings Dropdown
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When one dropdown toggler is clicked (**File** , **Edit** or **About**), the
others will open themselves on hover.

.. code-block:: xml

  <div>
    <Dropdown>
      <t t-set-slot="toggler">File</t>
      <DropdownItem onSelected="() => this.onItemSelected('file-open')">Open</DropdownItem>
      <DropdownItem onSelected="() => this.onItemSelected('file-new-document')">New Document</DropdownItem>
      <DropdownItem onSelected="() => this.onItemSelected('file-new-spreadsheet')">New Spreadsheet</DropdownItem>
    </Dropdown>
    <Dropdown>
      <t t-set-slot="toggler">Edit</t>
      <DropdownItem onSelected="() => this.onItemSelected('edit-undo')">Undo</DropdownItem>
      <DropdownItem onSelected="() => this.onItemSelected('edit-redo')">Redo</DropdownItem>
      <DropdownItem onSelected="() => this.onItemSelected('edit-find')">Search</DropdownItem>
    </Dropdown>
    <Dropdown>
      <t t-set-slot="toggler">About</t>
      <DropdownItem onSelected="() => this.onItemSelected('about-help')">Help</DropdownItem>
      <DropdownItem onSelected="() => this.onItemSelected('about-update')">Check update</DropdownItem>
    </Dropdown>
  </div>

Example: Multi-level Dropdown (with `t-call`)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This example shows how one could make a `File` dropdown menu, with submenus for
the `New` and `Save as...` sub elements.

.. code-block:: xml

  <t t-name="addon.Dropdown.File">
    <Dropdown>
      <t t-set-slot="toggler">File</t>
      <DropdownItem onSelected="() => this.onItemSelected('file-open')">Open</DropdownItem>
      <t t-call="addon.Dropdown.File.New"/>
      <DropdownItem onSelected="() => this.onItemSelected('file-save')">Save</DropdownItem>
      <t t-call="addon.Dropdown.File.Save.As"/>
    </Dropdown>
  </t>

  <t t-name="addon.Dropdown.File.New">
    <Dropdown>
      <t t-set-slot="toggler">New</t>
      <DropdownItem onSelected="() => this.onItemSelected('file-new-document')">Document</DropdownItem>
      <DropdownItem onSelected="() => this.onItemSelected('file-new-spreadsheet')">Spreadsheet</DropdownItem>
    </Dropdown>
  </t>

  <t t-name="addon.Dropdown.File.Save.As">
    <Dropdown>
      <t t-set-slot="toggler">Save as...</t>
      <DropdownItem onSelected="() => this.onItemSelected('file-save-as-csv')">CSV</DropdownItem>
      <DropdownItem onSelected="() => this.onItemSelected('file-save-as-pdf')">PDF</DropdownItem>
    </Dropdown>
  </t>

Example: Multi-level Dropdown (nested)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

  <Dropdown>
    <t t-set-slot="toggler">File</t>
    <DropdownItem onSelected="() => this.onItemSelected('file-open')">Open</DropdownItem>
    <Dropdown>
      <t t-set-slot="toggler">New</t>
      <DropdownItem onSelected="() => this.onItemSelected('file-new-document')">Document</DropdownItem>
      <DropdownItem onSelected="() => this.onItemSelected('file-new-spreadsheet')">Spreadsheet</DropdownItem>
    </Dropdown>
    <DropdownItem onSelected="() => this.onItemSelected('file-save')">Save</DropdownItem>
    <Dropdown>
      <t t-set-slot="toggler">Save as...</t>
      <DropdownItem onSelected="() => this.onItemSelected('file-save-as-csv')">CSV</DropdownItem>
      <DropdownItem onSelected="() => this.onItemSelected('file-save-as-pdf')">PDF</DropdownItem>
    </Dropdown>
  </Dropdown>

Example: Recursive Multi-level Dropdown
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this example, we recursively call a template to display a tree-like structure.

.. code-block:: xml

  <t t-name="addon.MainTemplate">
    <div>
      <t t-call="addon.RecursiveDropdown">
        <t t-set="name" t-value="'Main Menu'" />
        <t t-set="items" t-value="state.menuItems" />
      </t>
    </div>
  </t>

  <t t-name="addon.RecursiveDropdown">
    <Dropdown>
      <t t-set-slot="toggler"><t t-esc="name"/></t>
        <t t-foreach="items" t-as="item" t-key="item.id">

          <!-- If this item has no child: make it a <DropdownItem/> -->
          <t t-if="!item.childrenTree.length">
            <DropdownItem onSelected="() => this.onItemSelected(item)" t-esc="item.name"/>
          </t>
          <!-- Else: recursively call the current dropdown template. -->
          <t t-else="" t-call="addon.RecursiveDropdown">
            <t t-set="name" t-value="item.name" />
            <t t-set="items" t-value="item.childrenTree" />
          </t>

        </t>
      </t>
    </Dropdown>
  </t>

.. _frontend/owl/notebook:

Notebook
--------

Location
~~~~~~~~

`@web/core/notebook/notebook`

Description
~~~~~~~~~~~

The Notebook is made to display multiple pages in a tabbed interface. Tabs can be located
at the top of the element to display horizontally, or at the left for a vertical layout.

There are two ways to define your Notebook pages to instanciate, either by using `slot`'s,
or by passing a dedicated `props`.

A page can be disabled with the `isDisabled` attribute, set directly on the slot node, or
in the page declaration, if the Notebook is used with the `pages` given as props. Once disabled,
the corresponding tab is greyed out and set as inactive as well.

Props
~~~~~

.. list-table::
    :widths: 20 20 60
    :header-rows: 1

    * - Name
      - Type
      - Description
    * - `anchors`
      - `object`
      - optional. Allow anchors navigation to elements inside tabs that are not visible.
    * - `className`
      - `string`
      - optional. Classname set on the root of the component.
    * - `defaultPage`
      - `string`
      - optional. Page `id` to display by default.
    * - `icons`
      - `array`
      - optional. List of icons used in the tabs.
    * - `orientation`
      - `string`
      - optional. Whether tabs direction is `horizontal` or `vertical`.
    * - `onPageUpdate`
      - `function`
      - optional. Callback executed once the page has changed.
    * - `pages`
      - `array`
      - optional. Contain the list of `page`'s to populate from a template.

.. example::

   The first approach is to set the pages in the slots of the component.

   .. code-block:: xml

    <Notebook orientation="'vertical'">
      <t t-set-slot="page_1" title="'Page 1'" isVisible="true">
        <h1>My First Page</h1>
        <p>It's time to build Owl components. Did you read the documentation?</p>
      </t>
      <t t-set-slot="page_2" title="'2nd page'" isVisible="true">
        <p>Wise owl's silent flight. Through the moonlit forest deep, guides my path to code</p>
      </t>
    </Notebook>

   The other way to define your pages is by passing the props. This can be useful if some pages share
   the same structure. Create first a component for each page template that you may use.

   .. code-block:: javascript

      import { Notebook } from "@web/core/notebook/notebook";

      class MyTemplateComponent extends owl.Component {
        static template = owl.tags.xml`
          <h1 t-esc="props.title" />
          <p t-esc="props.text" />
        `;
      }

      class MyComponent extends owl.Component {
        get pages() {
          return [
            {
              Component: MyTemplateComponent,
              title: "Page 1",
              props: {
                title: "My First Page",
                text: "This page is not visible",
              },
            },
            {
              Component: MyTemplateComponent,
              id: "page_2",
              title: "Page 2",
              props: {
                title: "My second page",
                text: "You're at the right place!",
              },
            },
          ]
        }
      }
      MyComponent.template = owl.tags.xml`
        <Notebook defaultPage="'page_2'" pages="pages" />
      `;

  Both examples are shown here:

  .. image:: owl_components/notebook.png
     :width: 400 px
     :alt: Examples with vertical and horizontal layout
     :align: center


.. _frontend/pager:

Pager
-----

Location
~~~~~~~~

`@web/core/pager/pager`

Description
~~~~~~~~~~~

The Pager is a small component to handle pagination. A page is defined by an `offset` and a `limit` (the size of the page). It displays the current page and the `total` number of elements, for instance, "9-12 / 20". In the previous example, `offset` is 8, `limit` is 4 and `total` is 20. It has two buttons ("Previous" and "Next") to navigate between pages.

.. note::
    The pager can be used anywhere but its main use is in the control panel. See the :ref:`usePager <frontend/hooks/usepager>` hook in order to manipulate the pager of the control panel.

.. code-block:: xml

  <Pager offset="0" limit="80" total="50" onUpdate="doSomething" />

Props
~~~~~

.. list-table::
    :widths: 20 20 60
    :header-rows: 1

    * - Name
      - Type
      - Description
    * - `offset`
      - `number`
      - Index of the first element of the page. It starts with 0 but the pager displays `offset + 1`.
    * - `limit`
      - `number`
      - Size of the page. The sum of `offset` and `limit` corresponds to the index of the last element of the page.
    * - `total`
      - `number`
      - Total number of elements the page can reach.
    * - `onUpdate`
      - `function`
      - Function that is called when page is modified by the pager. This function can be async, the pager cannot be edited while this function is executing.
    * - `isEditable`
      - `boolean`
      - Allows to click on the current page to edit it (`true` by default).
    * - `withAccessKey`
      - `boolean`
      - Binds access key `p` on the previous page button and `n` on the next page one (`true` by default).

.. _frontend/select_menu:

SelectMenu
----------

Location
~~~~~~~~

`@web/core/select_menu/select_menu`

Description
~~~~~~~~~~~

This component can be used when you want to do more than using the native `select` element. You can define your own option template, allowing to search
between your options, or group them in subsections.

.. note::
    Prefer the native HTML `select` element, as it provides by default accessibility features, and has a better user interface on mobile devices.
    This component is designed to be used for more complex use cases, to overcome limitations of the native element.

Props
~~~~~

.. list-table::
    :widths: 20 20 60
    :header-rows: 1

    * - Name
      - Type
      - Description
    * - `choices`
      - `array`
      - optional. List of `choice`'s to display in the dropdown.
    * - `class`
      - `string`
      - optional. Classname set on the root of the SelectMenu component.
    * - `groups`
      - `array`
      - optional. List of `group`'s, containing `choices` to display in the dropdown.
    * - `multiSelect`
      - `boolean`
      - optional. Enable multiple selections. When multiple selection is enabled, selected values are displayed as :ref:`tag <frontend/tags_list>`'s in the SelectMenu input.
    * - `togglerClass`
      - `string`
      - optional. classname set on the toggler button.
    * - `required`
      - `boolean`
      - optional. Whether the selected value can be unselected.
    * - `searchable`
      - `boolean`
      - optional. Whether a search box is visible in the dropdown.
    * - `searchPlaceholder`
      - `string`
      - optional. Text displayed as the search box placeholder.
    * - `value`
      - `any`
      - optional. Current selected value. It can be from any kind of type.
    * - `onSelect`
      - `function`
      - optional. Callback executed when an option is chosen.

The shape of a `choice` is the following:

    - `value` is actual value of the choice. It is usually a technical string, but can be from `any` type.
    - `label` is the displayed text associated with the option. This one is usually a more friendly and translated `string`.

The shape of a `group` is the following:

    - `choices` is the list of `choice`'s to display for this group.
    - `label` is the displayed text associated with the group. This is a `string` displayed at the top of the group.

.. example::

   In the following example, the SelectMenu will display four choices. One of them is displayed on top of the options,
   since no groups are associated with it, but the other ones are separated by the label of their group.

   .. code-block:: javascript

      import { SelectMenu } from "@web/core/select_menu/select_menu";

      class MyComponent extends owl.Component {
        get choices() {
          return [
              {
                value: "value_1",
                label: "First value"
              }
          ]
        }
        get groups() {
          return [
            {
                label: "Group A",
                choices: [
                    {
                      value: "value_2",
                      label: "Second value"
                    },
                    {
                      value: "value_3",
                      label: "Third value"
                    }
                ]
            },
            {
                label: "Group B",
                choices: [
                    {
                      value: "value_4",
                      label: "Fourth value"
                    }
                ]
            }
          ]
        }
      }
      MyComponent.template = owl.tags.xml`
        <SelectMenu
          choices="choices"
          groups="groups"
          value="'value_2'"
        />
      `;

   You can also customize the appearance of the toggler and set a custom template for the choices, using the appropriate component `slot`'s.

   .. code-block:: javascript

      MyComponent.template = owl.tags.xml`
        <SelectMenu
          choices="choices"
          groups="groups"
          value="'value_2'"
        >
          Make a choice!
          <t t-set-slot="choice" t-slot-scope="choice">
            <span class="coolClass" t-esc="'👉 ' + choice.data.label + ' 👈'" />
          </t>
        </SelectMenu>
      `;

   .. image:: owl_components/select_menu.png
      :width: 400 px
      :alt: Example of SelectMenu usage and customization
      :align: center

   When SelectMenu is used with multiple selection, the `value` props must be an `Array` containing the values of the selected choices.

   .. image:: owl_components/select_menu_multiSelect.png
      :width: 350 px
      :alt: Example of SelectMenu used with multiple selection
      :align: center

   For more advanced use cases, you can customize the bottom area of the dropdown, using the `bottomArea` slot. Here, we choose to display
   a button with the corresponding value set in the search input.

   .. code-block:: javascript

      MyComponent.template = owl.tags.xml`
        <SelectMenu
            choices="choices"
        >
            <span class="select_menu_test">Select something</span>
            <t t-set-slot="bottomArea" t-slot-scope="select">
                <div t-if="select.data.searchValue">
                    <button class="btn text-primary" t-on-click="() => this.onCreate(select.data.searchValue)">
                        Create this article "<i t-esc="select.data.searchValue" />"
                    </button>
                </div>
            </t>
        </SelectMenu>
      `;

   .. image:: owl_components/select_menu_bottomArea.png
      :width: 400 px
      :alt: Example of SelectMenu's bottom area customization
      :align: center

.. _frontend/tags_list:

TagsList
--------

Location
~~~~~~~~

`@web/core/tags_list/tags_list`

Description
~~~~~~~~~~~

This component can display a list of tags in rounded pills. Those tags can either simply list a few values, or can be editable, allowing the removal of items.
It can be possible to limit the number of displayed items using the `itemsVisible` props. If the list is longer than this limit, the number of additional items is
shown in a circle next to the last tag.

Props
~~~~~

.. list-table::
    :widths: 20 20 60
    :header-rows: 1

    * - Name
      - Type
      - Description
    * - `displayBadge`
      - `boolean`
      - optional. Whether the tag is displayed as a badge.
    * - `displayText`
      - `boolean`
      - optional. Whether the tag is displayed with a text or not.
    * - `itemsVisible`
      - `number`
      - optional. Limit of visible tags in the list.
    * - `tags`
      - `array`
      - list of `tag`'s elements given to the component.

The shape of a `tag` is the following:

    - `colorIndex` is an optional color id.
    - `icon` is an optional icon displayed just before the displayed text.
    - `id` is a unique identifier for the tag.
    - `img` is an optional image displayed in a circle, just before the displayed text.
    - `onClick` is an optional callback that can be given to the element. This allows the parent element to handle any functionality depending on the tag clicked.
    - `onDelete` is an optional callback that can be given to the element. This makes the removal of the item from the list of tags possible, and must be handled by the parent element.
    - `text` is the displayed `string` associated with the tag.

.. example::

   In the next example, a TagsList component is used to display multiple tags.
   It's at the developer to handle from the parent what would happen when the tag is pressed, or when the delete button is clicked.

   .. code-block:: javascript

      import { TagsList } from "@web/core/tags_list/tags_list";

      class Parent extends Component {
        setup() {
          this.tags = [{
              id: "tag1",
              text: "Earth"
          }, {
              colorIndex: 1,
              id: "tag2",
              text: "Wind",
              onDelete: () => {...}
          }, {
              colorIndex: 2,
              id: "tag3",
              text: "Fire",
              onClick: () => {...},
              onDelete: () => {...}
          }];
        }
      }
      Parent.components = { TagsList };
      Parent.template = xml`<TagsList tags="tags" />`;

   Depending the attributes given to each tag, their appearance and behavior will differ.

   .. image:: owl_components/tags_list.png
      :width: 350 px
      :alt: Examples of TagsList using different props and attributes
      :align: center
