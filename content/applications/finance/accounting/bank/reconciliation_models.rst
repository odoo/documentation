=====================
Reconciliation models
=====================

Reconciliation models are custom rules that complement the :ref:`default set of matching rules
<accounting/reconciliation/reconcile>` and enable more advanced automation of the :doc:`bank
reconciliation <reconciliation>` process. These models are especially useful when dealing with
recurring flows like writing off bank fees or :doc:`cash discounts
<../customer_invoices/cash_discounts>`.

.. seealso::
   `Odoo Tutorials: Reconciliation models <https://www.odoo.com/slides/slide/reconciliation-models-6858>`_

.. _accounting/rec-models/config:

Configuration
=============

To access reconciliation models, go to the :guilabel:`Accounting Dashboard`, click the
:icon:`fa-ellipsis-v` :guilabel:`(dropdown menu)` menu on the bank journal, and select
:guilabel:`Models` under the :guilabel:`Reconciliation` section.

To create a new reconciliation model, click :guilabel:`New`.

Reconciliation models can be either :guilabel:`Manual` or :guilabel:`Automated`. Manual
reconciliation models appear as :ref:`possible action buttons
<accounting/reconciliation/action-buttons>` when :doc:`reconciling <reconciliation>`. Automatic
reconciliation models apply automatically to transactions that meet the reconciliation model's
:ref:`matching conditions <accounting/rec-models/conditions>`.

Each reconciliation model is configured with :ref:`matching conditions
<accounting/rec-models/conditions>` to identify the relevant bank transactions and :ref:`Counterpart
Items <accounting/rec-models/counterpart>` to be generated during reconciliation.

.. tip::
   To create an activity on the transaction, select which type of activity to create in the
   :guilabel:`Next Activity` field.

.. important::
   If a record matches with several reconciliation models, the first one in the *sequence* of models
   is applied. Rearrange the order by dragging and dropping the handle next to the name.

   .. image:: reconciliation_models/list-view.png
      :alt: Rearrange the sequence of models in the list view.

.. _accounting/rec-models/conditions:

Matching conditions
-------------------

A reconciliation model's matching conditions determine to which transactions it applies.

The following fields can be used to restrict the reconciliation model's availability to transactions
that meet the conditions:

- :guilabel:`Journals`
- :guilabel:`Partners`
- :guilabel:`Amount`: Select :guilabel:`Is lower than or equal to`, :guilabel:`Is greater than or
  equal to`, or :guilabel:`Is between` and enter the amount(s).
- :guilabel:`Label`: Select :guilabel:`Contains`, :guilabel:`Not Contains`, or :guilabel:`Match
  Regex` and enter the transaction label's matching condition.

.. tip::
   `Regular expressions <https://regexone.com/>`_, often abbreviated as **regex**, can be used in
   Odoo in various ways to search, validate, and manipulate data. Regex can be powerful but also
   complex, so it's essential to use it judiciously.

   To use regular expressions in a reconciliation model, set the :guilabel:`Label` to
   :guilabel:`Match Regex` and add an expression. Odoo automatically retrieves the transactions
   that match the regex expression and the conditions specified in the reconciliation model.

.. note::
   A transaction must meet all conditions for the reconciliation model to be available for it. If no
   condition is defined (i.e., if all fields are left blank), the reconciliation model will be
   available for all transactions.

.. _accounting/rec-models/counterpart:

Counterpart items
-----------------

Each line in the :guilabel:`Counterpart items` tab creates a journal item with the specified
details:

- :guilabel:`Partner`: Select the partner, if any, to set on the journal item.
- :guilabel:`Account`: Select the account, if any, to set on the journal item.
- :guilabel:`Amount Type`: Select how the amount of the journal item should be calculated:

  - :guilabel:`Fixed`: Use a fixed amount.
  - :guilabel:`Percentage of balance`: Use a percentage of the remaining balance of the
    transaction, regardless of the transaction total.
  - :guilabel:`Percentage of statement line`: Use a percentage of the transaction total, regardless
    of the remaining balance of the transaction.
  - :guilabel:`From label`: Use a percentage from the transaction's label using regex.

- :guilabel:`Amount`: Enter the amount to be used on the journal item. This field will be either a
  fixed amount, percentage amount, or regex depending on the :guilabel:`Account Type`.
- :guilabel:`Taxes`: Select a tax, if any, to set on the journal item. This field is hidden behind
  the :icon:`oi-settings-adjust` :guilabel:`(settings adjust)` icon by default.
- :guilabel:`Analytic`: Select an analytic distribution, if any, to set on the journal item.
- :guilabel:`Label`: Enter a label, if any, to set on the journal item.

.. note::
   - While neither the :guilabel:`Partner` nor :guilabel:`Account` fields are mandatory, at least
     one of the two must be set for the reconciliation model to work correctly.
   - The reconciliation model can be used for :ref:`partner mapping <accounting/rec-models/partner>`
     if the :guilabel:`Counterpart Items` include a :guilabel:`Partner` but no :guilabel:`Account`.

.. _accounting/rec-models/defaults:

Default reconciliation models
=============================

In Odoo, different models are available by default depending on the company's :doc:`fiscal
localization <../../fiscal_localizations>`. These can be updated if needed. The following
reconciliation models exist across most fiscal localizations.

Internal Transfers
------------------

The :guilabel:`Internal Transfers` reconciliation model is used for making :doc:`internal transfers
<internal_transfers>` from one bank or cash account to another by moving the entire transaction's
balance to a liquidity or internal transfer account. To fully transfer the amount from one account
to another, this reconciliation model must be used on both the incoming journal's transaction and
the outgoing journal's transaction.

.. seealso::
   :doc:`internal_transfers`

Bank Fees
---------

The :guilabel:`Bank Fees` reconciliation model generates a counterpart item that moves the remaining
balance of a transaction to a bank fees account (that varies by :doc:`fiscal localization
<../../fiscal_localizations>`) and includes "Bank Fees" in the :guilabel:`Label` of the new item
that it creates. This reconciliation model is only applicable to transactions whose label contains
"Bank Fees" due to its :ref:`matching conditions <accounting/rec-models/conditions>`.

.. example::
   An outgoing bank transaction for $103 is partially matched with a vendor bill for $100, leaving
   $3 of the transaction still unreconciled. Use the :guilabel:`Bank Fees` reconciliation model to
   create a new counterpart item for $3 and reconcile it with the remaining $3 of the bank
   transaction.

Cash Discount
-------------

The :guilabel:`Cash Discount` reconciliation model generates a counterpart item that moves the
remaining balance of a transaction to a cash discount account (that varies by :doc:`fiscal
localization <../../fiscal_localizations>`) and includes "Cash Discount" in the :guilabel:`Label` of
the new item that it creates.

.. seealso::
   :doc:`../customer_invoices/cash_discounts`

.. _accounting/rec-models/partner:

Partner mapping
===============

Partner mapping allows you to establish rules for automatically matching transactions to the correct
partner account, saving time and reducing the risk of errors that can occur during manual
reconciliation. For example, you can create a partner mapping rule for incoming payments with
specific reference numbers or keywords in the transaction description. When an incoming payment
meets these criteria, Odoo automatically maps it to the corresponding customer's account.

To create a partner mapping rule, configure any :ref:`matching conditions
<accounting/rec-models/conditions>`, such as a specific transaction label, and then configure the
:guilabel:`Partner` and any other relevant fields in the :ref:`Counterpart Items
<accounting/rec-models/counterpart>` tab. Setting an :guilabel:`Account` is not mandatory for
partner mapping.
