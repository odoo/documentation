==================
Chapter 5: Testing
==================

Automatically testing code is important when working on a codebase. It helps ensure we don't
introduce (too many) bugs or regressions. Let us see how to test our code.

.. spoiler:: Solutions

   The solutions for each exercise of the chapter are hosted on the
   `official Odoo tutorials repository
   <https://github.com/odoo/tutorials/commits/{CURRENT_MAJOR_BRANCH}-solutions>`_.

1. Integration testing
======================

To make sure our application works as expected, we can perform :ref:`integration testing
<reference/testing/integration-testing>` by creating a tour: this is a sequence of steps that we
can execute. Each step wait until some desired DOM state is reached, then performs an action. If, at
some point, it is unable to go to the next step for a long time, the tour fails.

Let's write a tour to ensure that it is possible to perform an tshirt order from our public route

.. exercise::

   #. In the `awesome_tshirt` addon, add a :file:`/static/tests/tours` folder.
   #. Add a :file:`/static/tests/tours/order_flow.js` file.
   #. Add a tour that performs the following steps:

      #. Open the `/awesome_tshirt/order` route.
      #. Fill the order form.
      #. Validate it.
      #. Navigate to our webclient.
      #. Open the list view for the the t-shirt order.
      #. Check that our order can be found in the list.

   #. Run the tour manually.
   #. Add a Python test to run it programmatically.
   #. Run the tour from the terminal.

2. Unit testing a Component
===========================

It is also useful to test independently a component or a piece of code. :ref:`QUnit
<reference/testing/qunit>` tests are useful to quickly locate an issue.

.. exercise::

   #. In the `awesome_tshirt` addon, add a :file:`static/tests/counter_tests.js` file.
   #. Add a QUnit test that instantiates a counter, clicks on it, and makes sure it is incremented.

   .. image:: 05_testing/component_test.png
      :align: center

.. seealso::

   `Example: Testing an Owl component
   <{GITHUB_PATH}/addons/web/static/tests/core/checkbox_tests.js>`_

3. Unit testing our gallery view
================================

Many components need more setup to be tested. In particular, we often need to mock some demo data.
Let us see how to do that.

.. note::
   This depends on our Gallery View from :doc:`04_creating_view_from_scratch`.

.. exercise::

   #. In the `awesome_gallery` addon, add a :file:`/static/tests/gallery_view_tests.js` file.
   #. Add a test that instantiates the gallery view with some demo data.
   #. Add another test that checks that when the user clicks on an image, it is switched to the form
      view of the corresponding order.

   .. image:: 05_testing/view_test.png
      :align: center

.. seealso::
   `Example: Testing a list view <{GITHUB_PATH}/addons/web/static/tests/views/list_view_tests.js>`_
