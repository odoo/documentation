====================
Vendor bill sequence
====================

When confirming a vendor bill, Odoo generates a unique vendor bill reference number. By default, it
uses the following sequence format `BILL/year/month/incrementing-number` (e.g.,
`BILL/2025/01/00001`), which restarts from `00001` each year.

However, it is possible to :ref:`change the sequence format <accounting/vendor_bills/resequencing>`
and its periodicity, and to :ref:`mass-resequence vendor bills
<accounting/vendor_bills/mass-resequencing>`.

.. note::
   Changes made to reference numbers are logged in the chatter.

.. _accounting/vendor_bills/resequencing:

Changing the default sequence
=============================

To customize the default sequence, open the last confirmed vendor bill, click :guilabel:`Reset to
Draft`, and edit the vendor bill's reference number.

.. image:: sequence/sequence-reference-number.png
   :alt: Editing the reference number of a vendor bill.

Odoo then explains how the detected format will be applied to all future vendor bills. For example,
if the current vendor bill's month is withdrawn, the sequence's periodicity will change to every
year instead of every month.

.. image:: sequence/sequence-dialog.png
   :alt: Editing the reference number of a vendor bill.

.. tip::
   The sequence format can be edited directly when creating the first vendor bill of a given
   sequence period.

.. _accounting/vendor_bills/mass-resequencing:

Mass-resequencing vendor bills
==============================

It can be helpful to resequence multiple vendor bill numbers. For example, when importing vendor
bills from another accounting system and the reference originates from the previous software,
continuity for the current year must be maintained without restarting from the beginning.

.. note::
   This feature is only available to users with administrator or advisor access.

Follow these steps to resequence vendor bill numbers:

#. Activate the :ref:`developer mode <developer-mode>`.
#. In the vendor bills list view, select the vendor bills that need a new sequence.
#. Click the :icon:`fa-cog` :guilabel:`Actions` menu and select :guilabel:`Resequence`.
#. In the :guilabel:`Ordering` field, choose to

   - :guilabel:`Keep current order`: The order of the numbers remains the same.
   - :guilabel:`Reorder by accounting date`: The number is reordered by accounting date.

#. Set the :guilabel:`First New Sequence`.
#. :guilabel:`Preview Modifications` and click :guilabel:`Confirm`.

The first vendor bill using the new sequence appears in red in the :guilabel:`Bills` list view.

.. image:: sequence/sequence-bill-sequencing.png
   :alt: Resequence options window
