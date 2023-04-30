===============================
Chapter 1: Build a Clicker game
===============================

For this project, we will build together a `clicker game <https://en.wikipedia.org/wiki/Incremental_game>`_,
completely integrated with Odoo. In this game, the goal is to accumulate a large number of clicks, and
to automate the system. The interesting part is that we will use the Odoo user interface as our playground.
For example, we will hide bonuses in some random parts of the web client.

To get started, you need a running Odoo server and a development environment. Before getting
into the exercises, make sure you have followed all the steps described in this
:ref:`tutorial introduction <tutorials/master_odoo_web_framework/setup>`.

.. admonition:: Goal

   .. image:: 01_build_clicker_game/final.png
      :align: center

.. spoiler:: Solutions

   The solutions for each exercise of the chapter are hosted on the
   `official Odoo tutorials repository
   <https://github.com/odoo/tutorials/commits/{CURRENT_MAJOR_BRANCH}-master-odoo-web-framework-solutions/awesome_clicker>`_.


1. Create a systray item
========================

To get started, we want to display a counter in the systray.

#. Create a `clicker_systray_item.js` (and `xml`) file with a hello world Owl component.
#. Register it to the systray registry, and make sure it is visible.
#. Update the content of the item so that it displays the following string: `Clicks: 0`, and
   add a button on the right to increment the value.

.. image:: 01_build_clicker_game/systray.png
   :align: center

And voila, we have a completely working clicker game!

.. seealso::

   - :ref:`Documentation on the systray registry <frontend/registries/systray>`
   - `Example: adding a systray item to the registry
     <https://github.com/odoo/odoo/blob/c4fb9c92d7826ddbc183d38b867ca4446b2fb709/addons/web/static/src/webclient/user_menu/user_menu.js#L41-L42>`_

2. Count external clicks
========================

Well, to be honest, it is not much fun yet. So let us add a new feature: we want all clicks in the
user interface to count, so the user is incentivized to use Odoo as much as possible! But obviously,
the intentional clicks on the main counter should still count more.

#. Use `useExternalListener` to listen on all clicks on `document.body`.
#. Each of these clicks should increase the counter value by 1.
#. Modify the code so that each click on the counter increased the value by 10
#. Make sure that a click on the counter does not increase the value by 11!
#. Also additional challenge: make sure the external listener capture the events, so we don't
   miss any clicks.

.. seealso::

   - `Owl documentation on useExternalListener <https://github.com/odoo/owl/blob/master/doc/reference/hooks.md#useexternallistener>`_
   - `MDN page on event capture <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_capture>`_


3. Create a client action
=========================

Currently, the current user interface is quite small: it is just a systray item. We certainly need
more room to display more of our game. To do that, let us create a client action. A client action
is a main action, managed by the web client, that displays a component.

#. Create a `client_action.js` (and `xml`) file, with a hello world component.
#. Register that client action in the action registry under the name `awesome_clicker.client_action`
#. Add a button on the systray item with the text `Open`. Clicking on it should open the
   client action `awesome_clicker.client_action` (use the action service to do that).
#. To avoid disrupting employees' workflow, we prefer the client action to open within a popover
   rather than in fullscreen mode. Modify the `doAction` call to open it in a popover.

   .. tip::

      You can use `target: "new"` in the `doAction` to open the action in a popover:

      .. code-block:: js

         {
            type: "ir.actions.client",
            tag: "awesome_clicker.client_action",
            target: "new",
            name: "Clicker"
         }

.. image:: 01_build_clicker_game/client_action.png
   :align: center

.. seealso::

   - :ref:`How to create a client action <howtos/javascript_client_action>`

4. Move the state to a service
==============================

For now, our client action is just a hello world component. We want it to display our game state, but
that state is currently only available in the systray item. So it means that we need to change the
location of our state to make it available for all our components. This is a perfect use case for services.

#. Create a `clicker_service.js` file with the corresponding service.
#. This service should export a reactive value (the number of clicks) and a few functions to update it:

   .. code-block:: js

         const state = reactive({ clicks: 0 });
         ...
         return {
            state,
            increment(inc) {
               state.clicks += inc
            }
         };

#. Access the state in both the systray item and the client action (don't forget to `useState` it). Modify
   the systray item to remove its own local state and use it. Also, you can remove the `+10 clicks` button.
#. Display the state in the client action, and add a `+10` clicks button in it.

.. image:: 01_build_clicker_game/increment_button.png
   :align: center

.. seealso::

   - :ref:`Short explanation on services <tutorials/discover_js_framework/services>`

5. Use a custom hook
====================

Right now, every part of the code that will need to use our clicker service will have to import `useService` and
`useState`. Since it is quite common, let us use a custom hook. It is also useful to put more emphasis on the
`clicker` part, and less emphasis on the `service` part.

#. Export a `useClicker` hook.
#. Update all current uses of the clicker service to the new hook:

   .. code-block:: js

      this.clicker = useClicker();

.. seealso::

   - `Documentation on hooks: <https://github.com/odoo/owl/blob/master/doc/reference/hooks.md>`_

6. Humanize the displayed value
===============================

We will in the future display large numbers, so let us get ready for that. There is a `humanNumber` function that
format numbers in a easier to comprehend way: for example, `1234` could be formatted as `1.2k`

#. Use it to display our counters (both in the systray item and the client action).
#. Create a `ClickValue` component that display the value.

   .. note::

      Owl allows component that contains just text nodes!

.. image:: 01_build_clicker_game/humanized_number.png
   :align: center

.. seealso::

   - `definition of humanNumber function <https://github.com/odoo/odoo/blob/c638913df191dfcc5547f90b8b899e7738c386f1/addons/web/static/src/core/utils/numbers.js#L119>`_

7. Add a tooltip in `ClickValue` component
==========================================

With the `humanNumber` function, we actually lost some precision on our interface. Let us display the real number
as a tooltip.

#. Tooltip needs an html element. Change the `ClickValue` to wrap the value in a `<span/>` element
#. Add a dynamic `data-tooltip` attribute to display the exact value.

.. image:: 01_build_clicker_game/humanized_tooltip.png
   :align: center

.. seealso::

   - `Documentation in the tooltip service <https://github.com/odoo/odoo/blob/c638913df191dfcc5547f90b8b899e7738c386f1/addons/web/static/src/core/tooltip/tooltip_service.js#L17>`_

8. Buy ClickBots
================

Let us make our game even more interesting: once a player get to 1000 clicks for the first time, the game
should unlock a new feature: the player can buy robots for 1000 clicks. These robots will generate 10 clicks
every 10 seconds.

#. Add a `level` number to our state. This is a number that will be incremented at some milestones, and
   open new features
#. Add a `clickBots` number to our state. It represents the number of robots that have been purchased.
#. Modify the client action to display the number of click bots (only if `level >= 1`), with a `Buy`
   button that is enabled if `clicks >= 1000`. The `Buy` button should increment the number of clickbots by 1.
#. Set a 10s interval in the service that will increment the number of clicks by `10*clickBots`.
#. Make sure the Buy button is disabled if the player does not have enough clicks.

.. image:: 01_build_clicker_game/clickbot.png
   :align: center

9. Refactor to a class model
============================

The current code is written in a somewhat functional style. But to do so, we have to export the state and all its
update functions in our clicker object.  As this project grows, this may become more and more complex. To make it
simpler, let us split our business logic out of our service and into a class.

#. Create a `clicker_model` file that exports a reactive class. Move all the state and update functions from
   the service into the model.

   .. tip::

      You can extends the ClickerModel with the `Reactive` class from
      :file:`@web/core/utils/reactive`. The `Reactive` class wrap the model into a reactive proxy.

#. Rewrite the clicker service to instantiate and export the clicker model class.

.. seealso::

   - `Example of subclassing Reactive <https://github.com/odoo/odoo/blob/c638913df191dfcc5547f90b8b899e7738c386f1/addons/web/static/src/model/relational_model/datapoint.js#L32>`_

10. Notify when a milestone is reached
======================================

There is not much feedback that something changed when we reached 1k clicks. Let us use the `effect` service
to communicate that information clearly. The problem is that our click model does not have access to services.
Also, we want to keep as much as possible the UI concern out of the model. So, we can explore a new strategy
for communication: event buses.

#. Update the clicker model to instantiate a bus, and to trigger a `MILESTONE_1k` event when we reach 1000 clicks
   for the first time.
#. Change the clicker service to listen to the same event on the model bus.
#. When that happens, use the `effect` service to display a rainbow man.
#. Add some text to explain that the user can now buy clickbots.

.. image:: 01_build_clicker_game/milestone.png
   :align: center

.. seealso::

   - `Owl documentation on event bus <https://github.com/odoo/owl/blob/master/doc/reference/utils.md#eventbus>`_
   - :ref:`Documentation on effect service <frontend/services/effect>`

11. Add BigBots
===============

Clearly, we need a way to provide the player with more choices. Let us add a new type of clickbot: `BigBots`,
which are just more powerful: they provide with 100 clicks each 10s, but they cost 5000 clicks

#. increment `level` when it gets to 5k (so it should be 2)
#. Update the state to keep track of bigbots
#. bigbots should be available at `level >=2`
#. Display the corresponding information in the client action

.. tip::

   If you need to use `<` or `>` in a template as a javascript expression, be careful since it might class with
   the xml parser. To solve that, you can use one of the special aliases: `gt, gte, lt` or `lte`. See the
   `Owl documentation page on template expressions <https://github.com/odoo/owl/blob/master/doc/reference/templates.md#expression-evaluation>`_.

.. image:: 01_build_clicker_game/bigbot.png
   :align: center

12. Add a new type of resource: power
=====================================

Now, to add another scaling point, let us add a new type of resource: a power multiplier. This is a number
that can be increased at `level >= 3`, and multiplies the action of the bots (so, instead of providing
one click, clickbots now provide us with `multiplier` clicks).

#. increment `level` when it gets to 100k (so it should be 3).
#. update the state to keep track of the power (initial value is 1).
#. change bots to use that number as a multiplier.
#. Update the user interface to display and let the user purchase a new power level (costs: 50k).

.. image:: 01_build_clicker_game/bigbot.png
   :align: center

13. Define some random rewards
==============================

We want the user to obtain sometimes bonuses, to reward using Odoo.

#. Define a list of rewards in `click_rewards.js`. A reward is an object with:
   - a `description` string.
   - a `apply` function that take the game state in argument and can modify it.
   - a `minLevel` number (optional) that describes at which unlock level the bonus is available.
   - a `maxLevel` number (optional) that describes at which unlock level a bonus is no longer available.

   For example:

   .. code-block:: js

      export const rewards = [
         {
            description: "Get 1 click bot",
            apply(clicker) {
                  clicker.increment(1);
            },
            maxLevel: 3,
         },
         {
            description: "Get 10 click bot",
            apply(clicker) {
                  clicker.increment(10);
            },
            minLevel: 3,
            maxLevel: 4,
         },
         {
            description: "Increase bot power!",
            apply(clicker) {
                  clicker.multipler += 1;
            },
            minLevel: 3,
         },
      ];

   You can add whatever you want to that list!

#. Define a function `getReward` that will select a random reward from the list of rewards that matches
   the current unlock level.
#. Extract the code that choose randomly in an array in a function `choose` that you can move to another `utils.js` file.

14. Provide a reward when opening a form view
=============================================

#. Patch the form controller. Each time a form controller is created, it should randomly decides (1% chance)
   if a reward should be given.
#. If the answer is yes, call a method `getReward` on the model.
#. That method should choose a reward, send a sticky notification, with a button `Collect` that will
   then apply the reward, and finally, it should open the `clicker` client action.

.. image:: 01_build_clicker_game/reward.png
   :align: center

.. seealso::

   - :ref:`Documentation on patching a class <frontend/patching_class>`
   - `Definition of patch function <https://github.com/odoo/odoo/blob/c638913df191dfcc5547f90b8b899e7738c386f1/addons/web/static/src/core/utils/patch.js#L71>`_
   - `Example of patching a class <https://github.com/odoo/odoo/blob/c638913df191dfcc5547f90b8b899e7738c386f1/addons/pos_mercury/static/src/app/screens/receipt_screen/receipt_screen.js#L6>`_

15. Add commands in command palette
===================================

#. Add a command `Open Clicker Game` to the command palette.
#. Add another command: `Buy 1 click bot`.

.. image:: 01_build_clicker_game/command_palette.png
   :align: center

.. seealso::

   - `Example of use of command provider registry <https://github.com/odoo/odoo/blob/c638913df191dfcc5547f90b8b899e7738c386f1/addons/web/static/src/core/debug/debug_providers.js#L10>`_

16. Add yet another resource: trees
===================================

It is now time to introduce a completely new type of resources. Here is one that should not be too controversial: trees.
We will now allow the user to plant (collect?) fruit trees. A tree costs 1 million clicks, but it will provide us with
fruits (either pears or cherries).

#. Update the state to keep track of various types of trees: pear/cherries, and their fruits.
#. Add a function that computes the total number of trees and fruits.
#. Define a new unlock level at `clicks >= 1 000 000`.
#. Update the client user interface to display the number of trees and fruits, and also, to buy trees.
#. Increment the fruit number by 1 for each tree every 30s.

.. image:: 01_build_clicker_game/trees.png
   :align: center

17. Use a dropdown menu for the systray item
============================================

Our game starts to become interesting. But for now, the systray only displays the total number of clicks. We
want to see more information: the total number of trees and fruits. Also, it would be useful to have a quick
access to some commands and some more information. Let us use a dropdown menu!

#. Replace the systray item by a dropdown menu.
#. It should display the numbers of clicks, trees, and fruits, each with a nice icon.
#. Clicking on it should open a dropdown menu that displays more detailed information: each types of trees
   and fruits.
#. Also, a few dropdown items with some commands: open the clicker game, buy a clickbot, ...

.. image:: 01_build_clicker_game/dropdown.png
   :align: center

18. Use a Notebook component
============================

We now keep track of a lot more information. Let us improve our client interface by organizing the information
and features in various tabs, with the `Notebook` component:

#. Use the `Notebook` component.
#. All `click` content should be displayed in one tab.
#. All `tree/fruits` content should be displayed in another tab.

.. image:: 01_build_clicker_game/notebook.png
   :align: center

.. seealso::

   - :ref:`Odoo: Documentation on Notebook component <frontend/owl/notebook>`
   - `Owl: Documentation on slots <https://github.com/odoo/owl/blob/master/doc/reference/slots.md>`_
   - `Tests of Notebook component <https://github.com/odoo/odoo/blob/c638913df191dfcc5547f90b8b899e7738c386f1/addons/web/static/tests/core/notebook_tests.js#L27>`_

19.  Persist the game state
===========================

You certainly noticed a big flaw in our game: it is transient. The game state is lost each time the user closes the
browser tab. Let us fix that. We will use the local storage to persist the state.

#. Import `browser` from :file:`@web/core/browser/browser` to access the localstorage.
#. Serialize the state every 10s (in the same interval code) and store it on the local storage.
#. When the `clicker` service is started, it should load the state from the local storage (if any), or initialize itself
   otherwise.

20. Introduce state migration system
====================================

Once you persist state somewhere, a new problem arises: what happens when you update your code, so the shape of the state
changes, and the user opens its browser with a state that was created with an old version? Welcome to the world of
migration issues!

It is probably wise to tackle the problem early. What we will do here is add a version number to the state, and introduce
a system to automatically update the states if it is not up to date.

#. Add a version number to the state.
#. Define an (empty) list of migrations. A migration is an object with a `fromVersion` number, a `toVersion` number, and a `apply` function.
#. Whenever the code loads the state from the local storage, it should check the version number. If the state is not
   uptodate, it should apply all necessary migrations.

21. Add another type of trees
=============================

To test our migration system, let us add a new type of trees: peaches.

#. Add `peach` trees.
#. Increment the state version number.
#. Define a migration.

.. image:: 01_build_clicker_game/peach_tree.png
   :align: center
