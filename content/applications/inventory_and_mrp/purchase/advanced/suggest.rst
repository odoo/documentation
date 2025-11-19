=============================================
Suggest quantities based on historical demand
=============================================

.. |RFQ| replace:: :abbr:`RFQ (request for quotation)`

For a straightforward push-based replenishment strategy, the *Suggest* feature recommends quantities
to order on requests for quotations (RFQs) based on historical demand.

Key parameters
==============

- *Replenish for*: future coverage window (days).
- *Based on*: period that defines historical demand: last 7 days, 30 days, 3 months, 12 months, or
  the same month or quarter the previous year.
- *Factor*: growth or decline factor (default 100%). After obtaining the total from the period,
  multiply the historical demand by this percentage to determine how much of the demand should be
  replenished. (e.g., input `120%` if sales are projected to grow 20% more than the previous period)

Demand calculation
==================

To estimate demand, Odoo sums all :ref:`validated deliveries
<inventory/delivery/one-step>`, :ref:`components consumed in manufacturing orders
<manufacturing/basic_setup/setup-components>` (MOs), or used to :doc:`resupply subcontractors
<../../manufacturing/subcontracting/subcontracting_resupply>` coming from the warehouse specified
on the RFQ in the *Based on* period. The *average daily demand* is this sum of outgoing moves
divided by the number of days in the *Based on* period, multiplied by *Factor*. The
*estimated demand* is the *average daily demand* multiplied by *Replenish For* days.

.. math::
   :class: overflow-scroll

   Average~Daily~Demand = \frac{Delivered~or~Consumed~Items}{Based~on~Days} \times Factor
   \\ \\ Estimated~Demand = Average~Daily~Demand \times Replenish~for~Days

.. note::
   Only :guilabel:`Assigned` or :guilabel:`Confirmed` moves are taken into account in
   the *average daily demand* calculations, sales quotations or manufacturing orders
   in :guilabel:`Draft` are not taken into account until validated.

.. tip::
   In a multi-warehouse setup, internal deliveries are also counted in demand estimation.
   In the case of a central warehouse dispatching products to individual stores,
   the *average daily demand* of the central warehouse will include internal transfers to
   individual stores.

Recommended quantity
====================

To find the suggested quantity, Odoo deducts the *estimated demand* from the current stock
available quantity and all incoming shipments.

.. math::
   :class: overflow-scroll

   Recommended~Quantity = Estimated~Demand - (Available~Stock + Incoming~Stock)

.. example::
   In :ref:`example 1 <purchase/advanced/example-suggestion>`, Odoo recommends `19` units to
   *Replenish for* `14` days *Based on* the past month's `40` delivered units.

Prerequisite setup
==================

#. **Purchase** and **Inventory** apps must be :ref:`installed <general/install>`.
#. :ref:`Validate at least one delivery order <inventory/delivery/one-step>` for each product.

   Ensures there is a past delivery record so the system can calculate average daily demand.

#. :ref:`Add a vendor to the vendor pricelist <purchase/manage_deals/vendor-pricelist>` with a
   purchase price for each product.

   The *Suggest* feature is vendor-specific, so each product needs a matching vendor for accurate
   purchase quantity and price calculations.

#. Set the *Product Type* to *Goods* and ensure the product is :ref:`Tracked by quantity
   <inventory/product_management/manufacture>`.

   Ensures the system can manage stock levels and calculate recommended replenishment quantities for
   tangible items.

Suggest quantities to order
===========================

To suggest quantities based on past sales, navigate to the :menuselection:`Purchase` app. Create a
:guilabel:`New` |RFQ| or select an existing one.

In the |RFQ|, set the :guilabel:`Vendor` field to the chosen supplier.

In the :guilabel:`Products` tab, click the :guilabel:`Catalog` button to view that vendor's items.

.. important::
   Verify that each product in the catalog is configured with the chosen vendor
   and that the Purchase Order is in the |RFQ| stage

.. tip::
   By default, products listed in the product catalog are filtered by vendor.

   Remove the filter in the search bar to view all items or use the built-in :icon:`oi-group`
   :guilabel:`Group By` for :guilabel:`Product Category`.

Inside the :guilabel:`Catalog`, toggle :guilabel:`Suggest` in the left sidebar to activate
the feature. Complete its fields as follows:

- :guilabel:`Replenish for`: Number of days intended to stock products.
- :guilabel:`Based on`: There are two inputs:

   #. Period: select the time frame that represents historical demand (e.g., :guilabel:`Last 30
      Days`, :guilabel:`April 2024`).

   #. Growth factor %: scale the demand up or down (e.g., 120% for 20% growth, 30% for 70% drop).

- The total in the bottom shows the order value. Odoo multiplies the vendor's *Unit
  Price* by the suggested quantity.

Once the parameters are confirmed, click :guilabel:`Add All` to add all suggestions to the
order. Adjust amounts if needed, then click :guilabel:`Back to Quotation` to confirm the final
numbers on the |RFQ|.

.. _purchase/advanced/example-suggestion:

Example Workflow
================

Recommend at 100% growth
------------------------

A company needs to replenish orchids for 14 days, referencing the last 30 days of historical data,
assuming the revenue growth is the same this month, at 100%.

Delivered/consumed within the period:

- 20 units delivered 15 days ago in a `WH/OUT` operation.
- 20 units delivered 1 day ago
- Total: 40 units in the last 30 days

Variables
~~~~~~~~~

- Replenish for: 14 days
- Based on: 30 days

  - total delivered/consumed in the period: 40 units

- Factor: 100%

.. math::

   Average~Daily~Demand = \frac{40}{30}  \approx 1.33 \text{ units/day}

Suggested quantity
~~~~~~~~~~~~~~~~~~

.. math::

   Suggested~Quantity = 1.33 \times 14 \approx 18.67 \text{ (rounded to 19 units)}

.. figure:: suggest/result-14.png
   :alt: Suggestion to purchase 19 units.

   Suggestion to purchase 19 orchids. Since the *Unit Price* is $3, :math:`$3 \times 19 = $57`,
   which is the total amount displayed.

Planning for Mother's Day
-------------------------

To better plan for the upcoming Mother's day week, the company changes *Based on* to the
same month last year (May 2024). As the business has grown since then, they also decide to add
a 120% growth factor.

Variables
~~~~~~~~~

- Replenish for 7 days
- Based on: May 2024,

  - total delivered/consumed in the entire May 2024 month: 361 units

- Factor: 120%

.. math::

   Average~Daily~Demand = \frac{361}{30} \times 1.20 \approx 14.44 \text{ units/day}

Suggested quantity
~~~~~~~~~~~~~~~~~~

.. math::

   Suggested~Quantity = 14.44 \times 7 \approx 101.08 \text{ (rounded up to 102 units)}

.. figure:: suggest/result-30.png
   :alt: Suggestion to purchase 102 orchids.

   Suggestion to purchase 102 orchids. Each orchid costs $3 with the chosen vendor, so
   :math:`$3 \times 102 = $306`.

.. _purchase/advanced/example-wh-suggestion:

Best practices
==============

#. Validate historical data

   Forecasts are based on validated delivery orders, manufacturing orders, and other inventory
   actions that consume quantities. For delivery orders, the *Effective Date* field is considered
   the date the quantities were consumed.

   .. image:: suggest/effective-date.png
      :alt: Example of effective date field.

#. Maintain accurate vendor pricelists

   Review and update vendor pricelists to reflect the latest pricing and supplier information to
   ensure correct suggestions.

#. Test sales projections based on seasonality

   Reference prior months or quarters to capture seasonal fluctuations and experiment with growth
   and decline factors to project sales.

#. Review suggestions critically

   Although the tool provides a baseline recommendation, always apply business judgment. Market
   changes, promotions, and upcoming events can affect actual demand.
