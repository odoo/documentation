=====================
Reconciliation models
=====================

Once the bank statements are correctly imported, it is essential to reconcile the records properly
and ensure all **journal entries** are balanced and in agreement. To ease and speed up the
reconciliation process, you can configure **reconciliation models**, which are particularly useful
with **recurrent entries** such as bank fees.

.. note::
   Reconciliation models are also useful when handling *Cash Discounts*. Please refer to
   :doc:`the cash discounts <../../receivables/customer_invoices/cash_discounts>` for more
   information.

.. _reconciliation_models_types:

Types of reconciliation models
==============================

There are three types of reconciliation models:

#. :ref:`Write-off button <reconciliation_models_button>`
#. :ref:`Suggestion of counterpart values <reconciliation_models_suggestion>`
#. :ref:`Match existing invoices/bills <reconciliation_models_match>`

.. _reconciliation_models_button:

Manually create a write-off on clicked button
---------------------------------------------

When reconciling an entry with an *open balance*, you can use the buttons available under the
:guilabel:`Manual Operations` tab to pre-fill all the values automatically before validating the
reconciliation. Each button corresponds to a reconciliation model.

.. image:: reconciliation_models/reconciliation_models_button.png
   :align: center
   :alt: Example of a reconciliation model with a write-off button in Odoo Accounting.

.. _reconciliation_models_suggestion:

Suggest counterpart values
--------------------------

This type of reconciliation model immediately suggests counterpart values when selecting an entry,
which then only needs to be validated. This automation is based on a set of rules defined in the
reconciliation model.

.. image:: reconciliation_models/reconciliation_models_suggestion.png
   :align: center
   :alt: Example of a reconciliation model that suggests counterpart values in Odoo Accounting.

.. _reconciliation_models_match:

Match existing invoices/bills
-----------------------------

This type of reconciliation model automatically selects the right customer invoice or vendor bill
that matches the payment. All that is left to do is to validate the entry. This automation is based
on a set of rules defined in the reconciliation model.

.. image:: reconciliation_models/reconciliation_models_match.png
   :align: center
   :alt: Example of a reconciliation model that matches existing invoices and bills automatically
         in Odoo Accounting.

Configuration
=============

To manage or create new **reconciliation models**, go to :menuselection:`Accounting app -->
Configuration --> Banks: Reconciliation Models`. Alternatively, you can also open this menu from
:menuselection:`Accounting app --> Bank --> Drop-down menu (⋮) --> Reconciliation Models`.

.. image:: reconciliation_models/reconciliation_models_overview.png
   :align: center
   :alt: Open the reconciliation model menu from the overview dashboard in Odoo Accounting.

.. important::
   The first entry, :guilabel:`Invoices Matching Rule`, is responsible for the current matching of
   invoices and bills. Therefore, it is advised to leave it at the top of the list and not delete
   it.

Open the model you want to modify or click on :guilabel:`Create` to create a new one, and fill out
the form.

Type
----

See :ref:`types of reconciliation models <reconciliation_models_types>` for an explanation about the
different types of reconciliation models.

.. note::
   If the *Documents* application is installed on your database, an additional
   :guilabel:`Activity type` field appears when :guilabel:`To Check` is ticked. Selecting the value
   :guilabel:`Reconciliation request` implies that whenever you use this model, a
   :guilabel:`Request Document` window pops up to request a document from the user.

Conditions on bank statement line
---------------------------------

Define here all the conditions that should be fulfilled for the reconciliation model to be applied.
Depending on the :guilabel:`Type` of model you choose, different options are available.

.. important::
   If a record matches with several reconciliation models, the first one in the list is applied.
   Models can be rearranged by dragging and dropping the handle next to their name.

.. image:: reconciliation_models/reconciliation_models_conditions.png
   :align: center
   :alt: Conditions for the reconciliation model to be applied in Odoo Accounting.

Counterpart values
------------------

This section comprises the values that are applied by the reconciliation model. If the value to
reconcile needs to be written-off in two separate accounts, click on :guilabel:`Add a second line` a
second time.

.. image:: reconciliation_models/reconciliation_models_counterparts.png
   :align: center
   :alt: Counterparts values of a reconciliation model in Odoo Accounting.

.. seealso::

   - :doc:`use_cases`
   - :doc:`../bank_synchronization`
   - :doc:`../../receivables/customer_invoices/cash_discounts`
