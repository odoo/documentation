========================
Chapter 2: Miscellaneous
========================

In the previous task, we learned how to create fields and views. There is still much more to
discover in the feature-rich Odoo web framework, so let's dive in and explore more in this chapter!

.. graph TD
..     subgraph "Owl"
..         C[Component]
..         T[Template]
..         H[Hook]
..         S[Slot]
..         E[Event]
..     end

..     subgraph "odoo"[Odoo Javascript framework]
..         Services
..         Translation
..         lazy[Lazy loading libraries]
..         SCSS
..         action --> Services
..         rpc --> Services
..         orm --> Services
..         Fields
..         Views
..         Registries
..     end

..     odoo[Odoo JavaScript framework] --> Owl

.. figure:: 02_miscellaneous/previously_learned.svg
   :align: center
   :width: 70%

   This is the progress that we have made in discovering the JavaScript web framework at the end of
   :doc:`01_fields_and_views`.

.. admonition:: Goal

   .. image:: 02_miscellaneous/kitten_mode.png
      :align: center

.. spoiler:: Solutions

   The solutions for each exercise of the chapter are hosted on the
   `official Odoo tutorials repository
   <https://github.com/odoo/tutorials/commits/{CURRENT_MAJOR_BRANCH}-solutions/awesome_tshirt>`_.

1. Interacting with the notification system
===========================================

.. note::
   This task depends on :doc:`the previous exercises <01_fields_and_views>`.

After using the :guilabel:`Print Label` button for some t-shirt tasks, it is apparent that there
should be some feedback that the `print_label` action is completed (or failed, for example, the
printer is not connected or ran out of paper).

.. exercise::
   #. Display a :ref:`notification <frontend/services/notification>` message when the action is
      completed successfully, and a warning if it failed.
   #. If it failed, the notification should be permanent.

   .. image:: 02_miscellaneous/notification.png
      :align: center
      :scale: 60%

.. seealso::
   `Example: Using the notification service
   <{GITHUB_PATH}/addons/web/static/src/views/fields/image_url/image_url_field.js>`_

2. Add a systray item
=====================

Our beloved leader wants to keep a close eye on new orders. He wants to see the number of new,
unprocessed orders at all time. Let's do that with a systray item.

A :ref:`systray <frontend/registries/systray>` item is an element that appears in the system tray,
which is a small area located on the right-hand side of the navbar. The systray is used to display
notifications and provide access to certain features.

.. exercise::

   #. Create a systray component that connects to the statistics service we made previously.
   #. Use it to display the number of new orders.
   #. Clicking on it should open a list view with all of those orders.
   #. Bonus point: avoid making the initial RPC by adding the information to the session info. The
      session info is given to the web client by the server in the initial response.

   .. image:: 02_miscellaneous/systray.png
      :align: center

.. seealso::
  - `Example: Systray item <{GITHUB_PATH}/addons/web/static/src/webclient/user_menu/user_menu.js>`_
  - `Example: Adding some information to the "session info"
    <{GITHUB_PATH}/addons/barcodes/models/ir_http.py>`_
  - `Example: Reading the session information
    <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
    addons/barcodes/static/src/barcode_service.js#L5>`_

3. Real life update
===================

So far, the systray item from above does not update unless the user refreshes the browser. Let us
do that by calling periodically (for example, every minute) the server to reload the information.

.. exercise::

   #. The `tshirt` service should periodically reload its data.

Now, the question arises: how is the systray item notified that it should re-render itself? It can
be done in various ways but, for this training, we choose to use the most *declarative* approach:

.. exercise::

   2. Modify the `tshirt` service to return a `reactive
      <{OWL_PATH}/doc/reference/reactivity.md#reactive>`_ object. Reloading data should update the
      reactive object in place.
   3. The systray item can then perform a `useState
      <{OWL_PATH}/doc/reference/reactivity.md#usestate>`_ on the service return value.
   4. This is not really necessary, but you can also *package* the calls to `useService` and
      `useState` in a custom hook `useStatistics`.

.. seealso::
  - `Documentation on reactivity <{OWL_PATH}/doc/reference/reactivity.md>`_
  - `Example: Use of reactive in a service
    <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
    addons/web/static/src/core/debug/profiling/profiling_service.js#L30>`_

4. Add a command to the command palette
=======================================

Now, let us see how we can interact with the command palette. The command palette is a feature that
allows users to quickly access various commands and functions within the application. It is accessed
by pressing `CTRL+K` in the Odoo interface.

.. exercise::

   Modify the :ref:`image preview field <tutorials/master_odoo_web_framework/image_preview_field>`
   to add a command to the command palette to open the image in a new browser tab (or window).

   Ensure the command is only active whenever a field preview is visible on the screen.

   .. image:: 02_miscellaneous/new_command.png
      :align: center

.. seealso::
  `Example: Using the useCommand hook
  <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
  addons/web/static/src/core/debug/debug_menu.js#L15>`_

5. Monkey patching a component
==============================

Often, we can achieve what we want by using existing extension points that allow for customization,
such as registering something in a registry. Sometimes, however, it happens that we want to modify
something that has no such mechanism. In that case, we must fall back on a less safe form of
customization: monkey patching. Almost everything in Odoo can be monkey patched.

Bafien, our beloved leader, heard about employees performing better if they are constantly being
watched. Since he cannot be there in person for each of his employees, he tasked you with updating
the user interface to add a blinking red eye in the control panel. Clicking on that eye should open
a dialog with the following message: "Bafien is watching you. This interaction is recorded and may
be used in legal proceedings if necessary. Do you agree to these terms?"

.. exercise::

   #. :ref:`Inherit <reference/qweb/template_inheritance>` the `web.Breadcrumbs` template of the
      `ControlPanel component <{GITHUB_PATH}/addons/web/static/src/search/control_panel>`_ to add an
      icon next to the breadcrumbs. You might want to use the `fa-eye` or `fa-eyes` icons.
   #. :doc:`Patch </developer/reference/frontend/patching_code>` the component to display the
      message on click by using `the dialog service
      <{GITHUB_PATH}/addons/web/static/src/core/dialog/dialog_service.js>`_. You can use
      `ConfirmationDialog
      <{GITHUB_PATH}/addons/web/static/src/core/confirmation_dialog/confirmation_dialog.js>`_.
   #. Add the CSS class `blink` to the element representing the eye and paste the following code in
      a new CSS file located in your patch's directory.

      .. code-block:: css

         .blink {
           animation: blink-animation 1s steps(5, start) infinite;
           -webkit-animation: blink-animation 1s steps(5, start) infinite;
         }
         @keyframes blink-animation {
           to {
             visibility: hidden;
           }
         }
         @-webkit-keyframes blink-animation {
           to {
               visibility: hidden;
           }
         }

   .. image:: 02_miscellaneous/bafien_eye.png
      :align: center
      :scale: 60%

   .. image:: 02_miscellaneous/confirmation_dialog.png
      :align: center
      :scale: 60%

.. seealso::
   - `Code: The patch function
     <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
     addons/web/static/src/core/utils/patch.js#L16>`_
   - `The Font Awesome website <https://fontawesome.com/>`_
   - `Example: Using the dialog service
     <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
     addons/board/static/src/board_controller.js#L88>`_

6. Fetching orders from a customer
==================================

Let's see how to use some standard components to build a powerful feature combining autocomplete,
fetching data, and fuzzy lookup. We will add an input in our dashboard to easily search all orders
from a given customer.

.. exercise::

   #. Update :file:`tshirt_service.js` to add a `loadCustomers` method, which returns a promise that
      returns the list of all customers (and only performs the call once).
   #. Add the `AutoComplete component <{GITHUB_PATH}/addons/web/static/src/core/autocomplete>`_ to
      the dashboard, next to the buttons in the control panel.
   #. Fetch the list of customers with the tshirt service, and display it in the AutoComplete
      component, filtered by the `fuzzyLookup
      <{GITHUB_PATH}/addons/web/static/src/core/utils/search.js>`_ method.

   .. image:: 02_miscellaneous/autocomplete.png
      :align: center
      :scale: 60%

7. Reintroduce Kitten Mode
==========================

Let us add a special mode to Odoo: whenever the URL contains `kitten=1`, we will display a kitten in
the background of Odoo, because we like kittens.

.. exercise::

   #. Create a `kitten` service, which should check the content of the active URL hash with the
      help of the :ref:`router service <frontend/services/router>`. If `kitten` is set in the URL,
      add the class `o-kitten-mode` to the document body.
   #. Add the following SCSS in :file:`kitten_mode.scss`:

      .. code-block:: css

         .o-kitten-mode {
           background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/58/Mellow_kitten_%28Unsplash%29.jpg);
           background-size: cover;
           background-attachment: fixed;
         }

         .o-kitten-mode > * {
           opacity: 0.9;
         }

   #. Add a command to the command palette to toggle the kitten mode. Toggling the kitten mode
      should toggle the class `o-kitten-mode` and update the current URL accordingly.

   .. image:: 02_miscellaneous/kitten_mode.png
      :align: center

8. Lazy loading our dashboard
=============================

This is not really necessary, but the exercise is interesting. Imagine that our awesome dashboard is
a large application with potentially multiple external libraries and lots of code/styles/templates.
Also, suppose that the dashboard is used only by some users in some business flows. It would be
interesting to lazy load it in order to speed up the loading of the web client in most cases.

So, let us do that!

.. exercise::

   #. Modify the manifest to create a new :ref:`bundle <reference/assets_bundle>`
      `awesome_tshirt.dashboard`.
   #. Add the awesome dashboard code to this bundle. Create folders and move files if needed.
   #. Remove the code from the `web.assets_backend` bundle so that it is not loaded twice.

So far, we only removed the dashboard from the main bundle; we now want to lazy load it. Currently,
no client action is registered in the action registry.

.. exercise::

   4. Create a new file :file:`dashboard_loader.js`.
   5. Copy the code registering `AwesomeDashboard` to the dashboard loader.
   6. Register `AwesomeDashboard` as a `LazyComponent
      <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
      addons/web/static/src/core/assets.js#L265-L282>`_.
   7. Modify the code in the dashboard loader to use the lazy component `AwesomeDashboard`.

If you open the :guilabel:`Network` tab of your browser's dev tools, you should see that
:file:`awesome_tshirt.dashboard.min.js` is now loaded only when the Dashboard is first accessed.

.. seealso::
   :ref:`Documentation on assets <reference/assets>`
