==========
Lead times
==========

.. |MO| replace:: :abbr:`MO (manufacturing order)`
.. |MOs| replace:: :abbr:`MOs (manufacturing orders)`
.. |BoM| replace:: :abbr:`BoM (Bill of Materials)`
.. |BoMs| replace:: :abbr:`BoMs (Bills of Materials)`
.. |RFQ| replace:: :abbr:`RFQ (request for quotation)`
.. |PO| replace:: :abbr:`PO (purchase order)`

Accurately forecasting delivery dates is vital for fulfilling customer expectations. In Odoo, the
**Inventory** app allows for comprehensive lead time configuration, allowing coordination and
planning of manufacturing orders, deliveries, and receipts.

Lead time types
===============

Different lead times for different operations can impact various stages of the order fulfillment
process. Here's a summary of the types of lead times in Odoo:

.. image:: lead_times/all-lead-times.png
   :alt: Show graphic of all lead times working together.

- :ref:`Customer lead time <inventory/warehouses_storage/customer-lt>`: default time frame for
  fulfilling customer orders. The customer lead time is the number of days from the date the sales
  order (SO) is confirmed to the date the products are shipped from the warehouse. This is also
  known as *delivery lead time*.

- :ref:`Sales security lead time <inventory/warehouses_storage/sales-security-lt>`: moves the
  *scheduled delivery date* forward by a specified number of days. This serves as a buffer to allow
  ample time to prepare the outgoing shipment earlier, considering the possibility of delays in the
  fulfillment process.

- :ref:`Purchase lead time <inventory/warehouses_storage/purchase-lt>`: number of days from the
  confirmation of a purchase order (PO) to the receipt of products. It provides insight on the time
  it takes for products to arrive at the warehouse, facilitating effective scheduling and planning
  of supplier deliveries.

- :ref:`Purchase security lead time <inventory/warehouses_storage/purchase-security-lt>`: advances
  the order deadline on a :abbr:`PO (Purchase Order)` by a specified number of days. This proactive
  approach of placing orders earlier mitigates the risk of vendor or shipping delays. Thus, for
  products that are set to replenish to order, the need appears on the *Replenishment report*
  earlier, according to the specified number of days.

- :ref:`Days to Purchase <inventory/warehouses_storage/days-to-purchase>`: days needed for the
  vendor to receive a request for quotation (RFQ) and confirm it. It advances the deadline to
  schedule a |RFQ| by a specified number of days.

- :ref:`Manufacturing lead time <inventory/warehouses_storage/manuf-lt>`: number of days needed to
  complete a manufacturing order (MO) from the date of confirmation. This lead time includes
  weekends (non-working hours in Odoo), and is used to forecast an approximate production date for a
  finished good.

- :ref:`Days to prepare manufacturing order
  <inventory/warehouses_storage/prepare-manufacturing-order>`: number of days needed to replenish
  components, or manufacture sub-assemblies of the product. Either set one directly on the bill of
  materials (BoM), or click *Compute* to sum up purchase and manufacturing lead times of components
  in the |BoM|.

- :ref:`Manufacturing security lead time <inventory/warehouses_storage/manuf-security-lt>`: moves
  the scheduled date of the |MO| forward by a specified number of days. When used in conjunction
  with :ref:`replenish to order <inventory/management/products/strategies>`, the security lead time
  makes the need appear earlier on the replenishment report.

.. _inventory/warehouses_storage/customer-lt:

Sales lead times
================

Customer lead times and sales security lead times can be configured to automatically compute an
*expected delivery date* on a :abbr:`SO (Sales Order)`. The expected delivery date ensures a
realistic *delivery dates* setting for shipments from the warehouse.

Odoo issues a warning message if the set delivery date is earlier than the expected date, as it may
not be feasible to fulfill the order by that time, which would impact other warehouse operations.

.. example::
   A :abbr:`SO (sales order)` containing a `Coconut-scented candle` is confirmed on July 11th. The
   product has a customer lead time of 14 days, and the business uses a sales security lead time of
   1 day. Based on the lead time inputs, Odoo suggests a delivery date in 15 days, on July 26th.

   .. image:: lead_times/scheduled-date.png
      :alt: Set *Delivery Date* in a sales order. Enables delivery lead times feature.

The following sections demonstrate how to automatically compute expected delivery dates.

Customer lead time
------------------

Set the customer lead time on each product form, by navigating to the products page. To do so, go to
:menuselection:`Sales app --> Products --> Products`. From there, select the desired product, and
switch to the :guilabel:`Inventory` tab. Then, under the :guilabel:`Customer Lead Time` field, fill
in the number of calendar days required to fulfill the delivery order from start to finish.

.. example::
   Set a 14-day customer lead time for the `Coconut-scented candle` by navigating to its product
   form. Then, in the :guilabel:`Inventory` tab, type `14.00` days into the :guilabel:`Customer Lead
   Time` field.

   .. image:: lead_times/customer.png
      :alt: Set *Customer Lead Time* on the product form.

.. _inventory/warehouses_storage/sales-security-lt:

Sales security lead time
------------------------

*Sales security lead time* is set globally for the business in :menuselection:`Inventory app -->
Configuration --> Settings`.

On the configuration page, under the :guilabel:`Advanced Scheduling` heading, locate the box for
:guilabel:`Security Lead Time for Sales`, and click the checkbox to enable the feature.

Next, enter the desired number of calendar days. This security lead time is a buffer notifying the
team to prepare for outgoing shipments earlier than the scheduled date.

.. example::
   Setting the :guilabel:`Security Lead Time for Sales` to `1.00` day, pushes the
   :guilabel:`Scheduled Date` of a delivery order (DO) forward by one day. In that case, if a
   product is initially scheduled for delivery on April 6th, but with a one-day security lead time,
   the new scheduled date for the delivery order would be April 5th.

   .. image:: lead_times/sales-security.png
      :alt: View of the security lead time for sales configuration from the sales settings.

Deliver several products
------------------------

For orders that include multiple products with different lead times, the lead times can be
configured directly from the quotation itself. On a quotation, click the :guilabel:`Other Info` tab,
and set the :guilabel:`Shipping Policy` to:

#. :guilabel:`As soon as possible` to deliver products as soon as they are ready. The
   :guilabel:`Scheduled Date` of the :abbr:`DO (Delivery Order)` is determined by adding today's
   date to the shortest lead time among the products in the order.

#. :guilabel:`When all products are ready` to wait to fulfill the entire order at once. The
   :guilabel:`Scheduled Date` of the :abbr:`DO (Delivery Order)` is determined by adding today's
   date to the longest lead time among the products in the order.

.. image:: lead_times/shipping-policy.png
   :alt: Show *Shipping Policy* field in the *Other Info* tab of a quotation.

.. example::
   In a quotation containing 2 products, `Yoga mat` and `Resistance band,` the products have a lead
   time of 8 days and 5 days, respectively. Today's date is April 2nd.

   When the :guilabel:`Shipping Policy` is set to :guilabel:`As soon as possible`, the scheduled
   delivery date is 5 days from today: April 7th. On the other hand, selecting :guilabel:`When all
   products are ready` configures the scheduled date to be 8 days from today: April 10th.

Purchase lead times
===================

Automatically scheduling supplier orders streamlines procurement by showing users exactly when to
confirm a request for quotation (RFQ) and when to expect the goods.

.. list-table:: Key dates on an RFQ / PO
   :header-rows: 1
   :stub-columns: 1

   * - Field
     - Description
   * - Order Deadline
     - Last calendar day to confirm the |RFQ| and convert it to a |PO|
   * - Expected Arrival
     - Arrival date of the products. Calculated by *Order Deadline* + *Vendor Lead Time*

In addition, Odoo has global security lead times, which are buffers that widen the
:ref:`just-in-time <inventory/warehouses_storage/just-in-time>` (JIT) forecast window. The security
lead times affect **only** replenishment methods that use :doc:`pull rules
<../../shipping_receiving/daily_operations/use_routes>`—for example :doc:`reordering rules
<reordering_rules>` or :doc:`make to order (MTO) <mto>`. They do not change the interval between
*Order Deadline* and *Expected Arrival*.

.. seealso::
   :doc:`PO scheduling with reordering rules <reordering_rules>`

.. list-table:: Global security lead time buffers
   :header-rows: 1
   :stub-columns: 1

   * - Buffer
     - Purpose
     - Impact on dates
   * - :ref:`Purchase Security Lead Time <inventory/warehouses_storage/purchase-security-lt>`
     - Extra calendar days to account for delays. Typically used to account for weekends or
       holidays.
     - None on the |RFQ|/|PO|; adds buffer days in the :ref:`JIT forecast window
       <inventory/warehouses_storage/forecasted-date>`.
   * - :ref:`Days to Purchase <inventory/warehouses_storage/days-to-purchase>`
     - Days the vendor needs to review an |RFQ| after it is sent.
     - None on the |RFQ|/|PO|; adds buffer days in the :ref:`JIT forecast window
       <inventory/warehouses_storage/forecasted-date>`.

.. image:: lead_times/vendor-lead-times.png
   :alt: Visualization of PO deadline and receipt date used with vendor lead times.

.. example::
   To tie all the purchase lead times together, consider this:

   - Today: April 21
   - :guilabel:`Vendor Lead Time`: 1 day
   - :guilabel:`Purchase Security Lead Time`: 4 days
   - :guilabel:`Days to Purchase`: 2 days

   Days from today = 1 + 4 + 2 = 7

   Forecasted date = April 28

   .. figure:: lead_times/forecasted-date-purchase.png
      :alt: Forecasted date calculation on the lead times pop-up.

      Example of the :abbr:`JIT (just-in-time)` forecast window, which is April 21-28.

   If an |RFQ| is created today, the following fields show:

   - :guilabel:`Order Deadline`: April 23 (:math:`\text{Today} + 2`)
   - :guilabel:`Expected Arrival`: April 24 (:math:`\text{Order Deadline} + 1`)

   .. image:: lead_times/order-deadline.png
      :alt: Order deadline displaying Apr 23 and Expected Arrival Apr 24.

.. _inventory/warehouses_storage/purchase-lt:

Vendor lead time
----------------

To set a vendor lead time for orders arriving in the warehouse from a vendor location, begin by
navigating to a product form through :menuselection:`Purchase app --> Products --> Products`.

Next, select the desired product, and switch to the :guilabel:`Purchase` tab. In the editable vendor
pricelist, click the :guilabel:`Add a line` button to add vendor details, such as the
:guilabel:`Vendor` name, :guilabel:`Price` offered for the product, and lastly, the
:guilabel:`Delivery Lead Time`.

.. note::
   Multiple vendors and lead times can be added to the vendor pricelist. The default vendor and lead
   time selected is the entry at the top of the list.

.. tip::
   A |PO| is marked late if the *Expected Arrival* date has passed, and appears in the *Late* box on
   the **Purchase** app's dashboard.

.. example::
   On the vendor pricelist of the product form, the :guilabel:`Delivery Lead Time` for the selected
   vendor is set to `10 days.`

   .. image:: lead_times/set-vendor.png
      :alt: Add delivery lead times to vendor pricelist on a product.

.. _inventory/warehouses_storage/purchase-security-lt:

Purchase security lead time
---------------------------

*Purchase security lead time* is a global buffer to account for delays, applied to **all** vendors.
To set it, go to :menuselection:`Inventory app --> Configuration --> Settings`.

Under :guilabel:`Advanced Scheduling`, tick the :guilabel:`Security Lead Time for Purchase`
checkbox.

Next, enter the desired number of calendar days. By configuring the security lead time, a buffer is
set to account for potential delays in supplier deliveries. Then, click :guilabel:`Save`.

.. _inventory/warehouses_storage/days-to-purchase:

Days to purchase lead time
--------------------------

To set it up, go to :menuselection:`Inventory app --> Configuration --> Settings`. Under the
:guilabel:`Advanced Scheduling` section, in the :guilabel:`Days to Purchase` field, specify the
number of days required for the vendor to confirm a |RFQ| after receiving it from the company.

.. _inventory/warehouses_storage/manuf-lt:

Manufacturing lead times
========================

Lead times can help simplify the procurement process for consumable materials and components used in
manufactured products with bills of materials (BoMs).

The |MO| deadline, which is the deadline to begin the manufacturing process to complete the product
by the scheduled delivery date, can be determined by configuring the manufacturing lead times and
manufacturing security lead times.

.. image:: lead_times/manuf-lead-times.png
   :alt: Visualization of the determination of planned MO date manufacturing lead times.

Manufacturing lead time
-----------------------

Manufacturing lead times for products are configured from a product's bill of materials (BoM) form.

To add a lead time to a |BoM|, navigate to :menuselection:`Manufacturing app --> Products --> Bills
of Materials`, and select the desired |BoM| to edit.

On the |BoM| form, click the :guilabel:`Miscellaneous` tab. Change the value (in days) in the
:guilabel:`Manuf. Lead Time` field to specify the calendar days needed to manufacture the product.

.. image:: lead_times/set-manufacturing.png
   :alt: Manuf. Lead Time value specified on a product's Bill of Material form.

.. note::
   If the selected |BoM| is a multi-level |BoM|, the manufacturing lead times of the components are
   added.

   If the |BoM| product is subcontracted, the :guilabel:`Manuf. Lead Time` can be used to determine
   the date at which components should be sent to the subcontractor.

Establish a |MO| deadline, based on the *expected delivery date*, indicated in the
:guilabel:`Scheduled Date` field of the :abbr:`DO (Delivery Order)`.

The |MO| deadline, which is the :guilabel:`Scheduled Date` field on the |MO|, is calculated as the
*expected delivery date* subtracted by the manufacturing lead time.

This ensures the manufacturing process begins on time, in order to meet the delivery date.

However, it is important to note that lead times are based on calendar days. Lead times do **not**
consider weekends, holidays, or *work center capacity* (:dfn:`the number of operations that can be
performed at the work center simultaneously`).

.. seealso::
   - :doc:`Manufacturing planning <../../../manufacturing/workflows/use_mps>`
   - :doc:`Schedule MOs with reordering rules <reordering_rules>`

.. example::
   A product's scheduled shipment date on the :abbr:`DO (Delivery Order)` is August 15th. The
   product requires 14 days to manufacture. So, the latest date to start the :abbr:`MO
   (Manufacturing Order)` to meet the commitment date is August 1st.

.. _inventory/warehouses_storage/prepare-manufacturing-order:

Days to prepare manufacturing order
-----------------------------------

Configure the days required to gather components to manufacture a product by going to its |BoM|. To
do that, go to :menuselection:`Manufacturing app --> Products --> Bills of Materials`, and select
the desired |BoM|.

In the :guilabel:`Miscellaneous` tab of the |BoM|, specify the calendar days needed to obtain
components of the product in the :guilabel:`Days to prepare Manufacturing Order` field. Doing so
creates |MOs| in advance, and ensures there is enough time to either replenish components, or
manufacture semi-finished products.

.. tip::
   Clicking :guilabel:`Compute`, located next to the :guilabel:`Days to prepare Manufacturing Order`
   field, calculates the longest lead time among all the components listed on the |BoM|.

   *Purchase security lead times* that impact this specific |BoM| are also added to this value.

.. example::

   A |BoM| has two components, one has a manufacturing lead time of two days, and the other has a
   purchase lead time of four days. The :guilabel:`Days to prepare Manufacturing Order` is four
   days.

.. _inventory/warehouses_storage/manuf-security-lt:

Manufacturing security lead time
--------------------------------

*Manufacturing security lead time* is set globally for the business in :menuselection:`Manufacturing
app --> Configuration --> Settings`. Under the :guilabel:`Planning` heading, tick the checkbox for
:guilabel:`Security Lead Time`.

Next, enter the desired number of calendar days. By configuring the security lead time, a buffer is
set to account for potential delays in the manufacturing process. Then, click :guilabel:`Save`.

.. image:: lead_times/manuf-security.png
   :alt: View of the security lead time for manufacturing from the manufacturing app settings.

.. example::
   A product has a scheduled shipment date on the :abbr:`DO (Delivery Order)` set for August 15th.
   The manufacturing lead time is 7 days, and manufacturing security lead time is 3 days. So, the
   :guilabel:`Scheduled Date` on the |MO| reflects the latest date to begin the manufacturing order.
   In this example, the planned date on the |MO| is August 5th.

Global example
==============

See the following example to understand how all the lead times work together to ensure timely order
fulfillment:

- **Sales security lead time**: 1 day
- **Manufacturing security lead time**: 2 days
- **Manufacturing lead time**: 3 days
- **Purchase security lead time**: 1 day
- **Vendor lead time**: 4 days

The customer places an order for a manufactured product on September 1st, and the scheduled delivery
date from the warehouse is on September 20th. Odoo uses lead times and automated reordering rules to
schedule the necessary operations, based on the outgoing shipment delivery date, September 20th:

.. image:: lead_times/global-example.png
   :alt: Show timeline of how lead times work together to schedule warehouse operations.

- **September 1st**: Sales order created, confirmed by salesperson.

- **September 9th**: Deadline to order components to ensure they arrive in time when manufacturing
  begins (4-day supplier lead time).

- **September 13th**: Scheduled date of receipt for components. Initially, it was set to 9/14, but
  the 1-day purchase security lead time pushed the date earlier by 1 day.

- **September 14th**: Deadline to begin manufacturing. Calculated by subtracting the manufacturing
  lead time of 3 days, and the manufacturing security lead time of 2 days, from the expected
  delivery date of September 19th.

- **September 19th**: :guilabel:`Scheduled Date` on the delivery order form indicates the updated
  expected delivery date, which was originally set as September 20th. But the sales security lead
  time pushed the date forward by a day.

Odoo's replenishment planning maps a business' order fulfillment process, setting pre-determined
deadlines and raw material order dates, including buffer days for potential delays. This ensures
products are delivered on time.
