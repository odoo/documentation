============
Quality rate
============

.. |MO| replace:: :abbr:`MO (Manufacturing Order)`
.. |MOs| replace:: :abbr:`MOs (Manufacturing Orders)`
.. |QCP| replace:: :abbr:`QCP (Quality Control Point)`
.. |QCPs| replace:: :abbr:`QCPs (Quality Control Points)`
.. |PO| replace:: :abbr:`PO (Purchase Order)`
.. |POs| replace:: :abbr:`POs (Purchase Orders)`
.. |RFQ| replace:: :abbr:`RFQ (Request for Quotation)`
.. |RFQs| replace:: :abbr:`RfQs (Requests for Quotation)`

In Odoo **Quality**, users can view the quality rate, or the percentage of successful quality checks
across incoming transfers from vendors. This documentation covers how to access and view quality
rates on vendors' contact forms, requests for quotation (RFQs) or purchase orders (POs), and quality
control points (QCPs).

.. _quality/quality_rate/configuration:

Configuration
=============

To check quality rates, ensure the following are true:

- The **Quality** and **Purchase** apps are installed.
- The user's :doc:`access rights <../../../general/users/access_rights>` are set to
  :guilabel:`Quality / User` at the minimum.

.. _quality/quality_rate/view-rates:

View quality rates
==================

Quality rates can be viewed on vendors' contact forms, |RFQs| or |POs|, and |QCPs|. Each of these
forms provides the option to open a customizable report showing the percentage of passing quality
checks, organized by product or by vendor.

Users can access the report using one of the following options:

#. Via the contact form: Navigate to :menuselection:`Purchase app --> Orders --> Vendors` and select
   a vendor. The :icon:`fa-check` :guilabel:`Quality Rate` smart button displays the quality rate
   across all incoming products from the vendor. Click the button to open a specific report.
#. Via an |RFQ| or |PO|: Open the **Purchase** app and select an order. The :icon:`fa-check`
   :guilabel:`Quality Rate` smart button displays the quality rate across all incoming products from
   the vendor. Click the button to open a specific report.
#. Via a |QCP|: Navigate to :menuselection:`Quality app --> Quality Control --> Control Points` and
   select a control point. The :icon:`fa-user` :guilabel:`Suppliers` smart button displays the
   number of vendors with completed quality checks at the control point. Click the button to open a
   specific report.

   .. important::
      The control point's :guilabel:`Operations` field must be set to the `Receipts` operation type.

.. note::
   If the :icon:`fa-check` :guilabel:`Quality Rate` smart button does not appear on a vendor contact
   form, |RFQ|, or |PO|, ensure that at least one check has been performed across the vendor's
   incoming transfers.

   Similarly, if the :icon:`fa-user` :guilabel:`Suppliers` smart button does not appear on a |QCP|,
   ensure that at least one check has been performed at the control point.

.. _quality/quality_rate/reporting:

Quality rate report
===================

When opened from the contact form or the |RFQ|/|PO|, the *Quality Check Analysis* report shows a
:icon:`fa-toggle-on` :guilabel:`Stacked` :icon:`fa-bar-chart` :guilabel:`(Bar Chart)` of the
vendor's :guilabel:`Quality Rate` for each product over the last 12 months.

Modify the :ref:`view <reporting/views>`, :ref:`measure <reporting/choosing-measures>`,
:ref:`filters <search/custom-filters>`, or :ref:`grouping options <search/group>` to customize the
report.

.. note::
   By default, reports accessed from the |QCP| display the rates for each vendor with quality checks
   at the control point, not the quality rate of each product by vendor.

.. example::

   In the following example, multiple products are purchased from the vendor Azure Interior. After
   performing quality checks, the :icon:`fa-check` :guilabel:`Quality Rate` smart button displays a
   quality rate of `43%`.

   After opening the default report from the |PO|, the following quality rates are shown for each
   product:

   - Pedal Bin: 1 pass, 1 fail (50% checks passed)
   - Corner Desk Left Sit: 1 pass (100% checks passed)
   - Office Chair: 1 pass, 1 fail (50% checks passed)
   - Large Cabinet: 1 fail (0% checks passed)
   - Large Cabinet (Wood): 1 fail (0% checks passed)

   Therefore, the overall quality rate is `3 passed / 7 total = 43%`.

   .. image:: quality_rate/report.png
      :alt: Quality Check Analysis report for a partner, grouping by product.

.. seealso::
   - :doc:`quality_checks`
   - :doc:`quality_control_points`
