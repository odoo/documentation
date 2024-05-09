==================================
Resupply subcontracting lead times
==================================

.. |PO| replace:: :abbr:`PO (Purchase Order)`
.. |RfQ| replace:: :abbr:`RfQ (Request for Quotation)`
.. |BoM| replace:: :abbr:`BoM (Bill of Materials)`

In Odoo, lead times are used to predict how long it takes to complete a certain action. For example,
a *delivery lead time* can be set for a purchased product, which specifies the number of days it
usually takes for the product's vendor to deliver the product to the purchasing company.

For subcontracted products specifically, delivery lead times can be configured to take into account
the amount of time required for the subcontractor to manufacture a product. Doing so allows the
contracting company to better predict the delivery dates of subcontracted products.

Certain subcontracted products require the contracting company to supply the subcontractor with
manufacturing components. In this case, a *manufacturing lead time* can be used, in addition to the
delivery lead time, to generate the date on which the subcontractor must receive the required
components, in order to manufacture the product and deliver it on time.

.. important::
   Like all lead times in Odoo, lead times for subcontracted products are only an estimate, and are
   based on how long actions are *expected* to take.

   Unforeseen circumstances can impact the completion of these actions, which means that lead times
   should **not** be viewed as guarantees.

Configuration
=============

When using the :doc:`Resupply Subcontractor on Order <subcontracting_resupply>` route, a company is
responsible for supplying the subcontractor with the necessary components. As a result, the
subcontractor cannot begin manufacturing until the components have been received.

This means that, in addition to the amount of time it takes the subcontractor to manufacture and
deliver the product, the date they receive the components must also be considered.

By assigning a product's subcontractor a delivery lead time, and specifying a manufacturing lead
time on the product's bill of materials (BoM), *Resupply Subcontractor* orders for the product's
components display the deadline by which the subcontractor must receive the components.

Product delivery lead time
--------------------------

To set a delivery lead time for a product's subcontractor, navigate to :menuselection:`Inventory app
--> Products --> Products`, and select a subcontracted product.

Then, select the :guilabel:`Purchase` tab on the product's page. If the subcontractor has not
already been added as a vendor, do so now by clicking :guilabel:`Add a line`, and selecting the
subcontractor in the :guilabel:`Vendor` field.

Once the subcontractor has been added, enter the number of days it takes them to manufacture and
deliver the product, in the :guilabel:`Delivery Lead Time` column.

.. image:: resupply_subcontracting_lead_times/delivery-lead-time.png
   :align: center
   :alt: The Delivery Lead Time field for a subcontractor, on the Purchase tab of a product page.

Product manufacturing lead time
-------------------------------

Next, navigate to the product's |BoM| by clicking the :guilabel:`Bill of Materials` smart button at
the top of the product's page. Then, select a |BoM| from the list.

On the |BoM|, select the :guilabel:`Miscellaneous` tab. In the :guilabel:`Manuf. Lead Time` field,
enter the same number of days that was entered in the :guilabel:`Delivery Lead Time` field of the
|BoM|'s product.

.. image:: resupply_subcontracting_lead_times/manufacturing-lead-time.png
   :align: center
   :alt: The Manuf. Lead Time field on a product's BoM.

While not all of these days are actually used for manufacturing by the subcontractor, setting the
same number of days in each field tells Odoo that the subcontractor must receive the components and
begin production by the start of the product's delivery lead time. This gives the subcontractor
enough time to both manufacture and deliver the product.

Resupply subcontracting workflow
--------------------------------

Create a request for quotation (RfQ) for the product by navigating to :menuselection:`Purchase app
--> Orders --> Requests for Quotation`, and clicking :guilabel:`New`.

Specify the subcontractor in :guilabel:`Vendor` field. Then, add the product in the
:guilabel:`Products` tab by clicking :guilabel:`Add a product`, selecting the product in the
:guilabel:`Product` column, and specifying a quantity in the :guilabel:`Quantity` column.

In the :guilabel:`Expected Arrival` field, enter a date that provides enough time for the
subcontractor to receive the components, manufacture the product, and deliver it back to the
subcontracting company.

.. important::
   When a product is added to an |RfQ|, the :guilabel:`Expected Arrival` field auto-populates with a
   date that is today's date plus the delivery lead time of the product. However, this does **not**
   consider the time it takes to ship the components to the subcontractor.

   When purchasing a product subcontracted using the Resupply Subcontractor on Order route, it is
   necessary to adjust this date to take into account the extra time needed for the components to be
   shipped to the subcontractor.

   Since production does not begin until they receive the components, leaving the date as is results
   in the finished product arriving *after* the date listed on the |RfQ|.

Next, click :guilabel:`Confirm Order` to turn the |RfQ| into a |PO|. Doing so causes a
:guilabel:`Resupply` smart button to appear at the top of the page.

Click the :guilabel:`Resupply` smart button to open the resupply subcontractor order, which is the
order created to send components to the subcontractor.

The :guilabel:`Deadline` field on the resupply subcontractor order shows the deadline for the
subcontractor to receive the components, in order for them to have enough time to manufacture and
deliver the finished product by the Expected Arrival date.

The :guilabel:`Scheduled Date` field should display the latest date on which components can be
shipped, while still arriving to the subcontractor by the :guilabel:`Deadline`. However, by default,
the date displayed is the same as the date in the :guilabel:`Deadline` field, and must be updated to
take into account the time required for shipping.

Click on the :guilabel:`Scheduled Date` field to open a calendar popover from which a date can be
selected. Select a date that allows for the components to be delivered by the :guilabel:`Deadline`
on the resupply subcontractor order.

After the components are shipped, click the :guilabel:`Validate` button at the top of the order to
confirm they have been sent to the subcontractor.

Once the subcontractor receives the components, they begin manufacturing the component, before
delivering it to the contracting company.

.. example::
   Bike retailer *Mike's Bikes* works with a subcontractor — *Bike Friends* — to produce units of
   their *Unicycle* product.

   Mike's Bikes must supply Bike Friends with the necessary components for manufacturing the
   unicycles.

   On average, Bike Friends takes three days to manufacture each unicycle, plus an additional two
   days to deliver it to Mike's Bikes.

   As a result, Mike's Bikes sets a delivery lead time of five days for unicycles manufactured by
   Bike Friends: three days for manufacturing, plus two days for delivery.

   On the unicycle's |BoM|, they enter a manufacturing lead time of five days, as well, to remind
   themselves of the date that components must be delivered to the subcontractor.

   They confirm a |PO| for one unicycle, with an expected arrival date of May 30th.

   The resupply subcontractor order for shipping the components to the subcontractor shows a
   *Deadline* of May 25th. The subcontractor must receive the components by this date, in order to
   have enough time to manufacture the unicycle, and deliver it by May 30th.

   It takes Mike's Bikes two days to deliver the components, so they update the *Scheduled Date*
   field on the resupply subcontractor order to May 23rd, two days before the Deadline.

   .. image:: resupply_subcontracting_lead_times/scheduled-deadline.png
      :align: center
      :alt: The Scheduled Date and Deadline fields on a resupply subcontractor order.

   Mike's Bikes ships the components to Bike Friends on the scheduled date of May 23rd, and they
   arrive on the deadline of May 25th. This gives Bike Friends enough time to manufacture the
   unicycle, and ship it back to Mike's Bikes by the expected arrival date of May 30th.
