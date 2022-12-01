.. _howto/jstraining/07_testing:

==================
Chapter 7: Testing
==================

Automatically testing code is important when working on a codebase, to ensure that we don't
introduce (too many) bugs or regressions. Let us see how to test our code.

Integration testing
===================

To make sure our application works as expected, we can test a business flow with a tour: this is a
sequence of steps that we can execute. Each step wait until some desired DOM state is reached, then
performs an action. If at some point, it is unable to go to the next step for a long time, the tour
fails.

Let's write a tour to ensure that it is possible to perform an tshirt order, from our public route

.. exercise::

   #. Add a ``/static/tests/tours`` folder
   #. Add a ``/static/tests/tours/order_flow.js`` file
   #. Add a tour that performs the following steps:

      - open the ``/awesome_tshirt/order`` route
      - fill the order form
      - validate it
      - navigate to our webclient
      - open the list view for the the t-shirt order
      - check that our order can be found in the list

   #. Run the tour manually
   #. Add a python test to run it also
   #. Run the tour from the terminal

.. note:: References:

  - `odoo: integration testing <https://www.odoo.com/documentation/15.0/developer/reference/backend/testing.html#integration-testing>`_

Unit testing a Component
========================

It is also useful to test independantly a component or a piece of code. Unit tests are useful to
quickly locate an issue.

.. exercise::

   #. Add a ``static/tests/counter_tests.js`` file
   #. Add a QUnit test that instantiate a counter, clicks on it, and make sure it is incremented

   .. image:: 07_testing/component_test.png
      :align: center
      :alt: unit test of a component

.. note:: References:
  - :ref:`odoo: QUnit test suite <reference/testing/qunit>`
  - `example of testing an owl component <https://github.com/odoo/odoo/blob/master/addons/web/static/tests/core/checkbox_tests.js>`_

Unit testing our gallery view
=============================

Many components needs more setup to be tested. In particular, we often need to mock some demo data.
Let us see how to do that.

.. note::
   This depends on our Gallery View from before.

.. exercise::

   #. Add a ``/static/tests/gallery_view_tests.js`` file
   #. Add a test that instantiate the gallery view with some demo data
   #. Add another test that check that when the user clicks on an image, it is switched to the form
      view of the corresponding order.

   .. image:: 07_testing/view_test.png
      :align: center
      :alt: unit test of a view


.. note:: References:

  - `example of testing a list view <https://github.com/odoo/odoo/blob/master/addons/web/static/tests/views/list_view_tests.js>`_
