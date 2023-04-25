=========================
Chapter 1: Owl Components
=========================

This chapter introduces the `Owl framework <https://github.com/odoo/owl>`_, a tailor-made component
system for Odoo. The main building blocks of OWL are `components
<{OWL_PATH}/doc/reference/component.md>`_ and `templates <{OWL_PATH}/doc/reference/templates.md>`_.

In Owl, every part of user interface is managed by a component: they hold the logic and define the
templates that are used to render the user interface. In practice, a component is represented by a
small JavaScript class subclassing the `Component` class.

Before getting into the exercises, make sure you have followed all the steps described in this
:ref:`tutorial introduction <tutorials/discover_js_framework/setup>`.

.. spoiler:: Solutions

   The solutions for each exercise of the chapter are hosted on the `official Odoo tutorials
   repository
   <https://github.com/odoo/tutorials/commits/{CURRENT_MAJOR_BRANCH}-solutions/owl_playground>`_. It
   is recommended to try to solve them first without looking at the solution!

.. tip::
   If you use Chrome as your web browser, you can install the `Owl Devtools` extension. This
   extension provides many features to help you understand and profile any Owl application.

   `Video: How to use the DevTools <https://www.youtube.com/watch?v=IUyQjwnrpzM>`_

In this chapter, we use the `owl_playground` addon, which provides a simplified environment that
only contains Owl and a few other files. The goal is to learn Owl itself, without relying on Odoo
web client code. To get started, open the `/owl_playground/playground` route with your browser: it
should display an Owl component with the text *hello world*.

Example: a `Counter` component
==============================

First, let us have a look at a simple example. The `Counter` component shown below is a component
that maintains an internal number value, displays it, and updates it whenever the user clicks on the
button.

.. code-block:: js

   import { Component, useState } from "@odoo/owl";

   class Counter extends Component {
       static template = "my_module.Counter";

       setup() {
           state = useState({ value: 0 });
       }

       increment() {
           this.state.value++;
       }
   }

The `Counter` component specifies the name of the template to render. The template is written in XML
and defines a part of user interface:

.. code-block:: xml

   <templates xml:space="preserve">
      <t t-name="my_module.Counter" owl="1">
         <p>Counter: <t t-esc="state.value"/></p>
         <button class="btn btn-primary" t-on-click="increment">Increment</button>
      </t>
   </templates>

You maybe noticed the `owl="1"` temporary attribute, it allows Odoo to differentiate Owl
templates from the old JavaScript framework templates. Note that Owl templates are not the same
as QWeb templates: they can contain additional directives, such as `t-on-click`.

1. Displaying a counter
=======================

As a first exercise, let us implement a counter in the `Playground` component located in
:file:`owl_playground/static/src/`. To see the result, you can go to the `/owl_playground/playground`
route with your browser.

.. exercise::

   #. Modify :file:`playground.js` so that it acts as a counter like in the example above. You will
      need to use the `useState hook
      <{OWL_PATH}/doc/reference/hooks.md#usestate>`_ so that the component is re-rendered
      whenever any part of the state object that has been read by this component is modified.
   #. In the same component, create an `increment` method.
   #. Modify the template in :file:`playground.xml` so that it displays your counter variable. Use
      `t-esc <{OWL_PATH}/doc/reference/templates.md#outputting-data>`_ to output the data.
   #. Add a button in the template and specify a `t-on-click
      <{OWL_PATH}/doc/reference/event_handling.md#event-handling>`_ attribute in the button to
      trigger the `increment` method whenever the button is clicked.

.. image:: 01_owl_components/counter.png
   :scale: 70%
   :align: center

.. tip::
   The Odoo JavaScript files downloaded by the browser are minified. For debugging purpose, it's
   easier when the files are not minified. Switch to
   :ref:`debug mode with assets <developer-mode/url>` so that the files are not minified.

2. Extract counter in a component
=================================

For now we have the logic of a counter in the `Playground` component, let us see how to create a
`sub-component <{OWL_PATH}/doc/reference/component.md#sub-components>`_ from it.

.. exercise::

   #. Extract the counter code from the `Playground` component into a new `Counter` component.
   #. You can do it in the same file first, but once it's done, update your code to move the
      `Counter` in its own folder and file. Import it relatively from `./counter/counter`. Make sure
      the template is in its own file, with the same name.

.. important::
   Don't forget :code:`/** @odoo-module **/` in your JavaScript files. More information on this can
   be found :ref:`here <frontend/modules/native_js>`.

3. A todo component
===================

We will create new components in :file:`owl_playground/static/src/` to keep track of a list of
todos. This will be done incrementally in multiple exercises that will introduce various concepts.

.. exercise::

   #. Create a `Todo` component that receive a `todo` object in `props
      <{OWL_PATH}/doc/reference/props.md>`_, and display it. It should show something like
      **3. buy milk**.
   #. Add the Bootstrap classes `text-muted` and `text-decoration-line-through` on the task if it is
      done. To do that, you can use `dynamic attributes
      <{OWL_PATH}/doc/reference/templates.md#dynamic-attributes>`_.
   #. Modify :file:`owl_playground/static/src/playground.js` and
      :file:`owl_playground/static/src/playground.xml` to display your new `Todo` component with
      some hard-coded props to test it first.

      .. example::

         .. code-block:: javascript

            setup() {
                ...
                this.todo = { id: 3, description: "buy milk", done: false };
            }

.. image:: 01_owl_components/todo.png
   :scale: 70%
   :align: center

.. seealso::
   `Owl: Dynamic class attributes <{OWL_PATH}/doc/reference/templates.md#dynamic-class-attribute>`_

4. Props validation
===================

The `Todo` component has an implicit API. It expects to receive in its props the description of a
todo object in a specified format: `id`, `description` and `done`. Let us make that API more
explicit. We can add a props definition that will let Owl perform a validation step in `dev mode
<{OWL_PATH}/doc/reference/app.md#dev-mode>`_. You can activate the dev mode in the `App
configuration <{OWL_PATH}/doc/reference/app.md#configuration>`_.

 It is a good practice to do props validation for every component.

.. exercise::

   #. Add `props validation <{OWL_PATH}/doc/reference/props.md#props-validation>`_ to the `Todo`
      component.
   #. Open the :guilabel:`Console` tab of your browser's dev tools and make sure the props
      validation passes in dev mode, which is activated by default in `owl_playground`. The dev mode
      can be activated and deactivated by modifying the `dev` attribute in the in the `config`
      parameter of the `mount <{OWL_PATH}/doc/reference/app.md#mount-helper>`_ function in
      :file:`owl_playground/static/src/main.js`.
   #. Remove `done` from the props and reload the page. The validation should fail.

5. A list of todos
==================

Now, let us display a list of todos instead of just one todo. For now, we can still hard-code the
list.

.. exercise::

   #. Change the code to display a list of todos instead of just one. Create a new `TodoList`
      component to hold the `Todo` components and use `t-foreach
      <{OWL_PATH}/doc/reference/templates.md#loops>`_ in its template.
   #. Think about how it should be keyed with the `t-key` directive.

.. image:: 01_owl_components/todo_list.png
   :scale: 70%
   :align: center

6. Adding a todo
================

So far, the todos in our list are hard-coded. Let us make it more useful by allowing the user to add
a todo to the list.

.. exercise::

   #. Add an input above the task list with placeholder *Enter a new task*.
   #. Add an `event handler <{OWL_PATH}/doc/reference/event_handling.md>`_ on the `keyup` event
      named `addTodo`.
   #. Implement `addTodo` to check if enter was pressed (:code:`ev.keyCode === 13`), and in that
      case, create a new todo with the current content of the input as the description and clear the
      input of all content.
   #. Make sure the todo has a unique id. It can be just a counter that increments at each todo.
   #. Wrap the todo list in a `useState` hook to let Owl know that it should update the UI when the
      list is modified.
   #. Bonus point: don't do anything if the input is empty.

      .. code-block:: javascript

         this.todos = useState([]);

.. image:: 01_owl_components/create_todo.png
   :scale: 70%
   :align: center

.. seealso::
   `Owl: Reactivity <{OWL_PATH}/doc/reference/reactivity.md>`_

7. Focusing the input
=====================

Let's see how we can access the DOM with `t-ref <{OWL_PATH}/doc/reference/refs.md>`_ and `useRef
<{OWL_PATH}/doc/reference/hooks.md#useref>`_.

.. exercise::

   #. Focus the `input` from the previous exercise when the dashboard is `mounted
      <{OWL_PATH}/doc/reference/component.md#mounted>`_. This this should be done from the
      `TodoList` component.
   #. Bonus point: extract the code into a specialized `hook <{OWL_PATH}/doc/reference/hooks.md>`_
      `useAutofocus` in a new :file:`owl_playground/utils.js` file.

.. seealso::
   `Owl: Component lifecycle <{OWL_PATH}/doc/reference/component.md#lifecycle>`_

8. Toggling todos
=================

Now, let's add a new feature: mark a todo as completed. This is actually trickier than one might
think. The owner of the state is not the same as the component that displays it. So, the `Todo`
component needs to communicate to its parent that the todo state needs to be toggled. One classic
way to do this is by using a `callback prop
<{OWL_PATH}/doc/reference/props.md#binding-function-props>`_ `toggleState`.

.. exercise::

   #. Add an input with the attribute :code:`type="checkbox"` before the id of the task, which must
      be checked if the state `done` is true.

      .. tip::
         QWeb does not create attributes computed with the `t-att` directive if it evaluates to a
         falsy value.

   #. Add a callback props `toggleState`.
   #. Add a `click` event handler on the input in the `Todo` component and make sure it calls the
      `toggleState` function with the todo id.
   #. Make it work!

.. image:: 01_owl_components/toggle_todo.png
   :scale: 70%
   :align: center

9. Deleting todos
=================

The final touch is to let the user delete a todo.

.. exercise::

   #. Add a new callback prop `removeTodo`.
   #. Insert :code:`<span class="fa fa-remove"/>` in the template of the `Todo` component.
   #. Whenever the user clicks on it, it should call the `removeTodo` method.

      .. tip::
         If you're using an array to store your todo list, you can use the JavaScript `splice`
         function to remove a todo from it.

   .. code-block::

      // find the index of the element to delete
      const index = list.findIndex((elem) => elem.id === elemId);
      if (index >= 0) {
          // remove the element at index from list
          list.splice(index, 1);
      }

.. image:: 01_owl_components/delete_todo.png
   :scale: 70%
   :align: center

.. _tutorials/discover_js_framework/generic_card:

10. Generic card with slots
===========================

Owl has a powerful `slot <{OWL_PATH}/doc/reference/slots.md>`_ system to allow you to write generic
components. This is useful to factorize the common layout between different parts of the interface.

.. exercise::

   #. Insert a new `Card` component between the `Counter` and `Todolist` components. Use the
      following Bootstrap HTML structure for the card:

      .. code-block:: html

         <div class="card" style="width: 18rem;">
             <img src="..." class="card-img-top" alt="..." />
             <div class="card-body">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">
                     Some quick example text to build on the card title and make up the bulk
                     of the card's content.
                 </p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
         </div>

   #. This component should have two slots: one slot for the title, and one for the content (the
      default slot). It should be possible to use the `Card` component as follows:

      .. code-block:: html

         <Card>
             <t t-set-slot="title">Card title</t>
             <p class="card-text">Some quick example text...</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
         </Card>

   #. Bonus point: if the `title` slot is not given, the `h5` should not be rendered at all.

.. image:: 01_owl_components/card.png
   :scale: 70%
   :align: center

.. seealso::
   `Bootstrap: documentation on cards <https://getbootstrap.com/docs/5.2/components/card/>`_

11. Extensive props validation
==============================

.. exercise::

   #. Add prop validation on the `Card` component.
   #. Try to express in the props validation system that it requires a `default` slot, and an
      optional `title` slot.
