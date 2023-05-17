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


.. spoiler:: Solutions

   The solutions for each exercise of the chapter are hosted on the
   `official Odoo tutorials repository
   <https://github.com/odoo/tutorials/commits/{CURRENT_MAJOR_BRANCH}-solutions/awesome_clicker>`_.


1. Create a systray item
========================

To get started, we want to display a counter in the systray.

#. Create a `clicker_systray_item.js` (and `xml`) file with a hello world component
#. Register it to the systray registry, and make sure it is visible
#. Update the content of the item so that it displays the following string: `Clicks: 0`, and
   add a button on the right to increment the value

And voila, we have a completely working clicker game!

2. Count external clicks
========================

Well, to be honest, it is not much fun yet. So let us add a new feature: we want all clicks in the
user interface to count, so the user is incentivized to use Odoo as much as possible! But obviously,
the intentional clicks on the main counter should still count more.

#. Use `useExternalListener` to listen on all clicks on `document.body`
#. Each of these clicks should increase the counter value by 1.
#. Modify the code so that each click on the counter increased the value by 10

Make sure that a click on the counter does not increase the value by 11!

3. Create a client action
=========================

Currently, the current user interface is quite small: it is just a systray item. We certainly need
more room to display more of our game. To do that, let us create a client action. A client action
is a main action, managed by the web client, that displays a component.

#. Create a `clicker_client_action.js` (and `xml`) file, with a hello world component
#. Register that client action in the action registry under the name `clicker_action`
#. Add a button on the systray item with the text `Open`. Clicking on it should open the
   client action `clicker_action` (use the action service to do that)

4. Move the state to a service
==============================

For now, our client action is just a hello world component. We want it to display our game state, but
that state is currently only available in the systray item. So it means that we need to change the
location of our state to make it available for all our components. This is a perfect use case for services.

#. Create a `clicker_service.js` file with the corresponding service
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

5. Humanize the displayed value
===============================

We will in the future display large numbers, so let us get ready for that. There is a `humanize` function that
format numbers in a easier to comprehend way: for example, `1234` could be formatted as `1.2k`

#. Use it to display our counters (both in the systray item and the client action)
#. Wrap the value in a span element with a tooltip that display the exact value
#. Factorize both of these use in a `ClickValue` component

6. Buy ClickBots
==================

Let us make our game even more interesting: once a player get to 1000 clicks for the first time, the game 
should unlock a new feature: the player can buy robots for 1000 clicks. These robots will generate 10 clicks
every 10 seconds.

#. Add a `unlockLevel` number to our state. This is a number that will be incremented at some milestones, and
   open new features
#. Add a `clickBots` number to our state. It represents the number of robots that have been purchased.
#. Modify the client action to display the number of click bots (only if `unlockLevel >= 1`), with a `Buy`
   button that is enabled if `clicks >= 1000`. The `Buy` button should increment the number of clickbots by 1.

#. Set a 10s interval in the service that will increment the number of clicks by `10*clickBots`.

7. Notify when a milestone is reached
=====================================

There is not much feedback that something changed when we reached 1k clicks. Let us use the `effect` service
to communicate that information clearly.

#. When we reach 1000 clicks, use the `effect` service to display a rainbow man.
#. Add some text to explain that the user can now buy clickbots.

8. Add BigBots
==============

Clearly, we need a way to provide the player with more choices. Let us add a new type of clickbot: `BigBots`,
which are just more powerful: they provide with 100 clicks each 10s, but they cost 5000 clicks

#. increment `unlockLevel` when it gets to 5k (so it should be 2)
#. Update the state to keep track of bigbots
#. bigbots should be available at `unlockLevel >=2`
#. Add the corresponding information to the client action

9. Add a new type of resource: power
====================================

Now, to add another scaling point, let us add a new type of resource: a power multiplier. This is a number
that can be increased at `unlockLevel >= 3`, and multiplies the action of the bots (so, instead of providing
one click, clickbots now provide us with `multiplier` clicks).

#. increment `unlockLevel` when it gets to 100k (so it should be 3)
#. update the state to keep track of the power (initial value is 1)
#. change bots to use that number as a multiplier
#. Update the user interface to display and let the user purchase a new power level (costs: 50k)


10. Define some random rewards
==============================

We want the user to obtain sometimes bonuses, to reward using Odoo. 

#. Define a list of rewards in `click_rewards.js`. A reward is an object with:
   - a `description` string 
   - a `apply` function that take the game state in argument and can modify it
   - a `minLevel` number (optional) that describes at which unlock level the bonus is available
   - a `maxLevel` number (optional) that describes at which unlock level a bonus is no longer available.

   For example:

   .. code-block:: js

      export const rewards = [
         {
           description: "Get 1 click bot",
           apply(state) {
             state.clickbots += 1;
           },
           maxLevel: 3,
         },
         {
           description: "Get 10 click bot",
           apply(state) {
             state.clickbots += 10;
           },
           minLevel: 3,
           maxLevel: 4,
         },
         {
           description: "Increase bot power!",
           apply(state) {
             state.power += 1;
           },
           minLevel: 3,
         },
      ];

   You can add whatever you want to that list! 

#. Define a function `getReward` that will select a random reward from the list of rewards that matches
   the current unlock level.
   

11. Provide a reward when opening a form view
=============================================

#. Patch the form controller. Each time a form controller is created, it should randomly decides (1% chance)
   if a reward should be given
#. If the answer is yes, call a method `giveReward` on the service 
#. That method should choose a reward, send a sticky notification, with a button `Collect` that will
   then apply the reward, and finally, it should open the `clicker` client action

12. Only Open the client action if necessary
============================================

Now, the previous exercise has a small flaw: imagine that the player opens a form view, get a reward notification,
then open the client action from the systray item, and finally collect the reward: the game will then open
the client action twice (look at the breadcrumbs).

This is actually quite a tricky situation: we want to open the `clicker` client action only if it is not
currently being open. This is easy to solve: the action service provides us with a way to check what the current
action controller is: `getCurrentController`.

#. Use `getCurrentController` from the action service to check if the current action is the game, and only open
   it if it is not true.


11. Add commands in command palette 
===================================

#. Add a command `Open Clicker Game` to the command palette
#. Add another command: `Buy 1 click bot`


12. Add yet another resource: trees 
===================================

It is now time to introduce a completely new type of resources. Here is one that should not be too controversial: trees.
We will now allow the user to plant (collect?) fruit trees. A tree costs 1 million clicks, but it will provide us with
fruits (either pears or cherries).

#. Update the state to keep track of various types of trees: pear/cherries, and their fruits
#. Add a function that computes the total number of trees and fruits
#. Define a new unlock level at `clicks >= 1 000 000`
#. Update the client user interface to display the number of trees and fruits, and also, to buy trees 

13. Use a dropdown menu for the systray item
============================================

Our game starts to become interesting. But for now, the systray only displays the total number of clicks. We
want to see more information: the total number of trees and fruits. Also, it would be useful to have a quick
access to some commands and some more information. Let us use a dropdown menu!

#. Replace the systray item by a dropdown menu
#. It should display the numbers of clicks, trees, and fruits, each with a nice icon
#. Clicking on it should open a dropdown menu that displays more detailed information: each types of trees
   and fruits
#. Also, a few dropdown items with some commands: open the clicker game, buy a clickbot, ...

14. Use a Notebook component 
============================

We now keep track of a lot more information. Let us improve our client interface by organizing the information
and features in various tabs, with the `Notebook` component:

#. Use the `Notebook` component
#. All `click` content should be displayed in one tab,
#. All `tree/fruits` content should be displayed in another tab

15. Persist the game state
==========================

You certainly noticed a big flaw in our game: it is transient. The game state is lost each time the user closes the
browser tab. Let us fix that. We will use the local storage to persist the state.

#. Use the `localstorage` service
#. Serialize the state every 10s (in the same interval code) and store it on the local storage
#. When the `clicker` service is started, it should load the state from the local storage (if any), or initialize itself
   otherwise

16. Introduce state migration system 
====================================

Once you persist state somewhere, a new problem arises: what happens when you update your code, so the shape of the state
changes, and the user opens its browser with a state that was created with an old version? Welcome to the world of
migration issues!

It is probably wise to tackle the problem early. What we will do here is add a version number to the state, and introduce
a system to automatically update the states if it is not up to date.

#. Add a version number to the state
#. Define an (empty) list of migrations. A migration is an object with a `fromVersion` number, and a `apply` function
#. Whenever the code loads the state from the local storage, it should check the version number. If the state is not
   uptodate, it should apply all necessary migrations

17. Add another type of trees
=============================

To test our migration system, let us add a new type of trees: peaches.

#. Add `peach` trees
#. Increment the state version number
#. Define a migration 