=============================
Chapter 3: Custom kanban view
=============================

.. todo:: It'd be cool to follow the naming convention of the previous chapters: "Chapter N: The concept studied in the chapter"

.. warning::
   It is highly recommended that you complete :doc:`01_fields_and_views` before starting this
   chapter. The concepts introduced in Chapter 3, including views and examples, will be essential
   for understanding the material covered in this chapter.

We have gained an understanding of the numerous capabilities offered by the Odoo web framework. As a
next step, we will customize a kanban view. This is a more complicated project that will showcase
some non trivial aspects of the framework. The goal is to practice composing views, coordinating
various aspects of the UI, and doing it in a maintainable way.

Bafien had the greatest idea ever: a mix of a kanban view and a list view would be perfect for your
needs! In a nutshell, he wants a list of customers on the left of the task's kanban view. When you
click on a customer on the left sidebar, the kanban view on the right is filtered to only display
orders linked to that customer.

.. admonition:: Goal

   .. image:: 03_custom_kanban_view/overview.png
      :align: center

.. spoiler:: Solutions

   The solutions for each exercise of the chapter are hosted on the
   `official Odoo tutorials repository
   <https://github.com/odoo/tutorials/commits/{CURRENT_MAJOR_BRANCH}-solutions/awesome_tshirt>`_.

1. Create a new kanban view
===========================

Since we are customizing the kanban view, let us start by extending it and using our extension in
the kanban view for the tshirt orders.

.. exercise::

   #. Extend the kanban view by extending the kanban controller and by creating a new view object.
   #. Register it in the views registry under `awesome_tshirt.customer_kanban`.
   #. Update the kanban arch to use the extended view. This can be done with the `js_class`
      attribute.

2. Create a CustomerList component
==================================

We will need to display a list of customers, so we might as well create the component.

.. exercise::

   #. Create a `CustomerList` component which only displays a `div` with some text for now.
   #. It should have a `selectCustomer` prop.
   #. Create a new template extending (XPath) the kanban controller template to add the
      `CustomerList` next to the kanban renderer. Give it an empty function as `selectCustomer` for
      now.
   #. Subclass the kanban controller to add `CustomerList` in its sub-components.
   #. Make sure you see your component in the kanban view.

   .. image:: 03_custom_kanban_view/customer_list.png
      :align: center
      :scale: 60%

3. Load and display data
========================

.. exercise::

   #. Modify the `CustomerList` component to fetch a list of all customers in `onWillStart`.
   #. Display the list in the template with a `t-foreach`.
   #. Whenever a customer is selected, call the `selectCustomer` function prop.

   .. image:: 03_custom_kanban_view/customer_data.png
      :align: center
      :scale: 60%

4. Update the main kanban view
==============================

.. exercise::

   #. Implement `selectCustomer` in the kanban controller to add the proper domain.
   #. Modify the template to give the real function to the `CustomerList` `selectCustomer` prop.

   Since it is not trivial to interact with the search view, here is a quick snippet to help:

   .. code-block:: js

      selectCustomer(customer_id, customer_name) {
         this.env.searchModel.setDomainParts({
            customer: {
                  domain: [["customer_id", "=", customer_id]],
                  facetLabel: customer_name,
            },
         });
      }

   .. image:: 03_custom_kanban_view/customer_filter.png
      :align: center
      :scale: 60%

5. Only display customers which have an active order
====================================================

There is a `has_active_order` field on `res.partner`. Let us allow the user to filter results on
customers with an active order.

.. exercise::

   #. Add an input of type checkbox in the `CustomerList` component, with a label "Active customers"
      next to it.
   #. Changing the value of the checkbox should filter the list on customers with an active order.

   .. image:: 03_custom_kanban_view/active_customer.png
      :align: center
      :scale: 60%

6. Add a search bar to the customer list
========================================

.. exercise::

   Add an input above the customer list that allows the user to enter a string and to filter the
   displayed customers, according to their name.

   .. tip::
      You can use the `fuzzyLookup` function to perform the filter.

   .. image:: 03_custom_kanban_view/customer_search.png
      :align: center
      :scale: 60%

.. seealso::

   - `Code: The fuzzylookup function <{GITHUB_PATH}/addons/web/static/src/core/utils/search.js>`_
   - `Example: Using fuzzyLookup
     <https://github.com/odoo/odoo/blob/1f4e583ba20a01f4c44b0a4ada42c4d3bb074273/
     addons/web/static/tests/core/utils/search_test.js#L17>`_

7. Refactor the code to use `t-model`
=====================================

To solve the previous two exercises, it is likely that you used an event listener on the inputs. Let
us see how we could do it in a more declarative way, with the `t-model
<{OWL_PATH}/doc/reference/input_bindings.md>`_ directive.

.. exercise::

   #. Make sure you have a reactive object that represents the fact that the filter is active
      (something like
      :code:`this.state = useState({ displayActiveCustomers: false, searchString: ''})`).
   #. Modify the code to add a getter `displayedCustomers` which returns the currently active list
      of customers.
   #. Modify the template to use `t-model`.

8. Paginate customers!
======================

.. exercise::

   #. Add a :ref:`pager <frontend/pager>` in the `CustomerList`, and only load/render the first 20
      customers.
   #. Whenever the pager is changed, the customer list should update accordingly.

   This is actually pretty hard, in particular in combination with the filtering done in the
   previous exercise. There are many edge cases to take into account.

   .. image:: 03_custom_kanban_view/customer_pager.png
      :align: center
      :scale: 60%
