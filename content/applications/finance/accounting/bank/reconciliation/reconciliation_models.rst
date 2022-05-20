=====================
Reconciliation Models
=====================

Once the bank statements are correctly imported, it is essential to *reconcile* the records properly
and ensure all *Journal Entries* are balanced and in agreement. To ease and speed up the
reconciliation process, you can configure **Reconciliation Models**, which are particularly useful
with recurrent entries such as bank fees.

.. todo:: Add a link to the Reconciliation process in the paragraph above, once the doc will have
   been updated.

.. note::
   Reconciliation Models are also useful to handle *Cash Discounts*. Please refer to
   :doc:`this documentation <../../receivables/customer_invoices/cash_discounts>` for more
   information.

.. _reconciliation_models_types:

Types of Reconciliation Models
==============================

There are three types of Reconciliation Models:

#. :ref:`Write-off Button <reconciliation_models_button>`
#. :ref:`Suggestion of counterpart values <reconciliation_models_suggestion>`
#. :ref:`Match existing invoices/bills <reconciliation_models_match>`

.. _reconciliation_models_button:

Manually create a write-off on clicked button
---------------------------------------------

When you are reconciling an entry with an *Open Balance*, you can use the buttons available under
the *Manual Operations* tab to pre-fill all the values automatically, before validating the
reconciliation. Each button is a different Reconciliation Model.

.. image:: reconciliation_models/reconciliation_models_button.png
   :align: center
   :alt: Example of a Reconciliation Model with a write-off button in Odoo Accounting

.. _reconciliation_models_suggestion:

Suggest counterpart values
--------------------------

This type of Reconciliation Model suggests immediately counterpart values that only need to be
validated. This automation is based on a set of rules defined in the reconciliation model.

.. image:: reconciliation_models/reconciliation_models_suggestion.png
   :align: center
   :alt: Example of a Reconciliation Model that suggests counterpart values in Odoo Accounting

.. _reconciliation_models_match:

Match existing invoices/bills
-----------------------------

This type of Reconciliation Model automatically selects the right Customer Invoice or Vendor Bill
that matches the payment. All that is left to do is to validate the entry. This automation is based
on a set of rules defined in the reconciliation model.

.. image:: reconciliation_models/reconciliation_models_match.png
   :align: center
   :alt: Example of a Reconciliation Model that matches existing invoices and bills automatically
         in Odoo Accounting

Configuration
=============

To manage or create new **Reconciliation Models**, go to :menuselection:`Accounting -->
Reconciliation --> Reconciliation Models`. Alternatively, you can also open this menu from the
Accounting Overview, by going to your Bank Journal card, clicking on the three little dots, and then
on *Reconciliation Models*.

.. image:: reconciliation_models/reconciliation_models_overview.png
   :align: center
   :alt: Open the Reconciliation Model menu from the overview dashboard in Odoo Accounting

.. important::
   The first entry, named *Invoices Matching Rule*, is the one responsible for the current matching
   of invoices and bills. Therefore, it is advised to leave it at the top of the list and not to
   delete it.

Open the model you want to modify, or click on *Create* to create a new one, then fill out the form.

Type
----

See :ref:`above <reconciliation_models_types>` for an explanation about the different types of
Reconciliation Models.

.. note::
   If the *Documents* application is installed on your database, an additional **Activity type**
   field appears when *To check* is ticked. Selecting the value *Reconciliation request* implies
   that, whenever you use this model, a *Request Document* window pops up to request a document from
   a user.

Conditions on Bank Statement Line
---------------------------------

Define here all the conditions that are required for a Reconciliation Model to be applied.

.. important::
   If a record matches with several Reconciliation Models, the first one in the *sequence* of models
   will be applied. The sequence is simply the order of the models in the *list view*. They can be
   rearranged by dragging-and-dropping the handle next to the name.

.. image:: reconciliation_models/reconciliation_models_conditions.png
   :align: center
   :alt: Conditions for the Reconciliation Model to be applied in Odoo Accounting

Counterpart Values
------------------

This section comprises the values that are applied by the Reconciliation Model.

If the value to reconcile needs to be written-off in two separate accounts, click on *Add a second
line*.

.. image:: reconciliation_models/reconciliation_models_counterparts.png
   :align: center
   :alt: Counterparts values of a Reconciliation Model in Odoo Accounting

.. seealso::

   - :doc:`use_cases`
   - :doc:`../feeds/bank_synchronization`
   - :doc:`../../receivables/customer_invoices/cash_discounts`