=====================
Chapter 1: Components
=====================

This chapter introduces the `Owl framework <https://github.com/odoo/owl>`_, a tailor-made component
system for Odoo. The main building blocks of OWL are `components
<{OWL_PATH}/doc/reference/component.md>`_ and `templates
<{OWL_PATH}/doc/reference/templates.md>`_.

In Owl, every part of user interface is managed by a component: they hold the logic and define the
templates that are used to render the user interface. In practice, a component is represented by a
small JavaScript class subclassing the `Component` class.

.. _jstraining/chapter1/intro_example:

.. example::
   The `Counter` class implements a component that holds the internal state of a counter and defines
   how it should be incremented.

   .. code-block:: js

      const { Component, useState } = owl;

       class Counter extends Component {
           static template = "my_module.Counter";

           state = useState({ value: 0 });

           increment() {
               this.state.value++;
           }
       }

   The `Counter` class specifies the name of the template to render. The template is written in XML
   and defines a part of user interface.

   .. code-block:: xml

       <templates xml:space="preserve">
           <t t-name="my_module.Counter" owl="1">
               <p>Counter: <t t-esc="state.value"/></p>
               <button class="btn btn-primary" t-on-click="increment">Increment</button>
           </t>
       </templates>

   You maybe noticed the `owl="1"` temporary attribute, it allows Odoo to differentiate Owl
   templates from the old JavaScript framework templates.

Let us take some time to get used to Owl itself. Below, you will find a series of exercises
intended to quickly understand and practice the basics of Owl.

.. todo:: update screenshot

.. admonition:: Goal

   Here is an overview of what we are going to achieve in this chapter.

   .. image:: 01_components/overview.png
      :scale: 50%
      :align: center
      :alt: Overview of chapter 1.

.. spoiler:: Solutions

   The solutions for each exercise of the chapter are hosted on the `official Odoo tutorials
   repository <https://github.com/odoo/tutorials/commits/{BRANCH}-solutions/owl_playground>`_.

1. Displaying a counter
=======================

As a first exercise, let us implement a counter in the `Playground` component located in
:file:`owl_playground/static/src/`.

.. exercise::

   #. Modify :file:`playground.js` so that it acts as a counter like in :ref:`the example above
      <jstraining/chapter1/intro_example>`. You will need to use the `useState
      <{OWL_PATH}/doc/reference/hooks.md#usestate>`_ function so that the component is re-rendered
      whenever any part of the state object has been read by this component is modified.
   #. In the same component, create an `increment` method.
   #. Modify the template in :file:`playground.xml` so that it displays your counter variable. Use
      `t-esc <{OWL_PATH}/doc/reference/templates.md#outputting-data>`_ to output the data.
   #. Add a button in the template and specify a `t-on-click
      <{OWL_PATH}/doc/reference/event_handling.md#event-handling>`_ attribute in the button to
      trigger the `increment` method whenever the button is clicked.

   .. image:: 01_components/counter.png
      :scale: 70%
      :align: center
      :alt: A counter component.

2. Extract counter in a component
=================================

For now we have the logic of a counter in the `Playground` component, let us see how to create a
sub-component from it.

.. exercise::

   #. Extract the counter code from the `Playground` component into a new `Counter` component.
   #. You can do it in the same file first, but once it's done, update your code to move the
      `Counter` in its own file.
   #. Make sure the template is in its own file, with the same name.

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
      <{OWL_PATH}/doc/reference/templates.md#dynamic-attributes>`_
   #. Modify :file:`owl_playground/static/src/playground.js` and
      :file:`owl_playground/static/src/playground.xml` to display your new `Todo` component with
      some hard-coded props to test it first.

      .. example::

         .. code-block:: javascript

            setup() {
               ...
               this.todo = { id: 3, description: "buy milk", done: false };
            }

   .. image:: 01_components/todo.png
      :scale: 70%
      :align: center
      :alt: A Todo component

.. seealso::
   `Owl: Dynamic class attributes <{OWL_PATH}/doc/reference/templates.md#dynamic-class-attribute>`_

4. Props validation
===================

The `Todo` component has an implicit API. It expects to receive in its props the description of a
todo object in a specified format: `id`, `description` and `done`. Let us make that API more
explicit. We can add a props definition that will let Owl perform a validation step in :ref:`dev
mode <developer-mode>`. It is a good practice to do that for every component.

.. exercise::

   #. Add `props validation <{OWL_PATH}/doc/reference/props.md#props-validation>`_ to the `Todo`
      component.
   #. Make sure it passes in :ref:`dev mode <developer-mode>`.
   #. Remove `done` from the props and reload the page. The validation should fail.

5. A list of todos
==================

Now, let us display a list of todos instead of just one todo. For now, we can still hard-code the
list.

.. exercise::

   #. Change the code to display a list of todos instead of just one, and use `t-foreach
      <{OWL_PATH}/doc/reference/templates.md#loops>`_ in the template
   #. Think about how it should be keyed with the `t-key` directive.

   .. image:: 01_components/todo_list.png
      :scale: 70%
      :align: center
      :alt: A TodoList

6. Adding a todo
================

So far, the todos in our list are hard-coded. Let us make it more useful by allowing the user to add
a todo to the list.

.. exercise::

   #. Add an input above the task list with placeholder *Enter a new task*.
   #. Add an `event handler <{OWL_PATH}/doc/reference/event_handling.md>`_ on the `keyup` event
      named ``addTodo``.
   #. Implement `addTodo` to check if enter was pressed (:code:`ev.keyCode === 13`), and in that
      case, create a new todo with the current content of the input as the description.
   #. Make sure it has a unique id. It can be just a counter that increments at each todo.
   #. Then, clear the input of all content.
   #. Bonus point: don't do anything if the input is empty.

   .. note::
      Notice that nothing updates in the UI: this is because Owl does not know that it should update
      the UI. This can be fixed by wrapping the todo list in a `useState` hook.

      .. code-block:: javascript

          this.todos = useState([]);

   .. image:: 01_components/create_todo.png
      :scale: 70%
      :align: center
      :alt: Creating todos

.. seealso::
   `Owl: Reactivity <{OWL_PATH}/doc/reference/reactivity.md>`_

7. Focusing the input
=====================

Let's see how we can access the DOM with `t-ref <{OWL_PATH}/doc/reference/refs.md>`_ and `useRef
<{OWL_PATH}/doc/reference/hooks.md#useref>`_.

.. exercise::

   #. Focus the `input` from the previous exercise when the dashboard is `mounted
      <{OWL_PATH}/doc/reference/component.md#mounted>`_.
   #. Bonus point: extract the code into a specialized `hook <{OWL_PATH}/doc/reference/hooks.md>`_
      `useAutofocus`.

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
   #. Add a callback props `toggleState`.
   #. Add a `click` event handler on the input in the `Todo` component and make sure it calls the
      `toggleState` function with the todo id.
   #. Make it work!

   .. image:: 01_components/toggle_todo.png
      :scale: 70%
      :align: center
      :alt: Toggling todos

9. Deleting todos
=================

The final touch is to let the user delete a todo.

.. exercise::

   #. Add a new callback prop `removeTodo`.
   #. Insert :code:`<span class="fa fa-remove">` in the template of the `Todo` component.
   #. Whenever the user clicks on it, it should call the `removeTodo` method.

   .. image:: 01_components/delete_todo.png
      :scale: 70%
      :align: center
      :alt: Deleting todos

10. Generic components with slots
=================================

Owl has a powerful `slot <{OWL_PATH}/doc/reference/slots.md>`_ system to allow you to write generic
components. This is useful to factorize the common layout between different parts of the interface.

.. exercise::

   #. Write a `Card` component using the following Bootstrap HTML structure:

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
      default slot).

      .. example::
         Here is how one could use it:

         .. code-block:: html

               <Card>
                  <t t-set-slot="title">Card title</t>
                  <p class="card-text">Some quick example text...</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
               </Card>

   #. Bonus point: if the `title` slot is not given, the `h5` should not be rendered at all.

    .. image:: 01_components/card.png
       :scale: 70%
       :align: center
       :alt: Creating card with slots

.. seealso::
   `Bootstrap: documentation on cards <https://getbootstrap.com/docs/5.2/components/card/>`_

11. Go further
==============

.. exercise::

   #. Add prop validation on the `Card` component.
   #. Try to express in the props validation system that it requires a `default` slot, and an
      optional `title` slot.
