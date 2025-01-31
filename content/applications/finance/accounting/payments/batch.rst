==============
Batch payments
==============

Batch payments allow grouping payments from multiple customers or vendors into a single batch and
generating a detailed deposit slip or payment file with a batch reference. This reference can be
used during :doc:`reconciliation <../bank/reconciliation>` to match bank transactions with the
corresponding payments. This feature is particularly useful for submitting :doc:`SEPA Direct Debit
payments <batch_sdd>`, depositing cash payments or :doc:`checks <checks>`, or generating outgoing
payment files, such as :doc:`SEPA <pay_sepa>` or :ref:`NACHA <l10n_us/nacha>`.

Configuration
=============

To enable batch payments, go to :menuselection:`Accounting --> Configuration --> Settings`, scroll
down to the :guilabel:`Customer Payments` section, and enable :guilabel:`Batch Payments`.

.. _accounting/batch/creation:

Batch creation
==============

To create a batch payment, follow these steps:

#. Make sure all payments to be included in the batch have been :ref:`registered
   <accounting/payments/from-invoice-bill>`.
#. Go to :menuselection:`Accounting --> Customers --> Payments`.
#. Select the payments to include in the batch.

   .. note::
      All payments in the batch must use the same payment method. If needed, payments can be grouped
      using the :guilabel:`Payment Method Line`.

#. Click :guilabel:`Create batch` or click :icon:`fa-cog` :guilabel:`Actions` and select
   :guilabel:`Create batch payment`.
#. In the batch payment form, review the selected payments. If any individual payments were missed,
   click :guilabel:`Add a line` and select the missing payments to be included in the batch.
#. Once all relevant payments are included, click :guilabel:`Validate` to finalize the batch.

.. note::
   Once validated, no additional payments can be added to a batch.

.. tip::
   - Click :guilabel:`Print` to download a list of the included payments.
   - To view existing batch payments, go to :menuselection:`Accounting --> Customers --> Batch
     Payments`.

Bank reconciliation
-------------------

Once the bank transactions :doc:`have been created <../bank/transactions>` in your database, you can
:ref:`reconcile them with the batch payment <reconciliation/batch-payments>`.

.. seealso::
   - :doc:`../payments`
   - :doc:`batch_sdd`
