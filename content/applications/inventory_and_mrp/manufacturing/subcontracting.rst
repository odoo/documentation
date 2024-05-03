:show-content:

==============
Subcontracting
==============

.. |BoM| replace:: :abbr:`BoM (Bill of Materials)`

In manufacturing, *subcontracting* is the process of a company engaging a third-party manufacturer,
or subcontractor, to manufacture products that are then sold by the contracting company.

Subcontracting provides a variety of benefits for both the contracting company and the
subcontractor.

For the contracting company, subcontracting allows them to sell a wide variety of manufactured
products, without having to worry about investing in and maintaining the equipment and labor
required to handle the manufacturing themselves.

This helps contracting companies stay flexible throughout economic cycles, as they can easily
increase or decrease their engagements with subcontractors, as necessitated by the current moment.
It also means they are able to focus on tasks they excel at, while delegating more specialized work
to subcontractors.

On the other side of the relationship, subcontracting allows subcontractors to specialize in more
niche areas of production, which might not be as profitable outside the bounds of a subcontracting
engagement. In certain arrangements, it also provides them with the flexibility to choose which
projects they accept or decline, and how many they work on at any given time.

In Odoo, companies can configure their subcontracting workflows based on a variety of different
factors, including how components are sourced, and what happens to finished products once they are
manufactured.

.. cards::

   .. card:: Basic subcontracting
      :target: subcontracting/subcontracting_basic

      Subcontract products without supplying the subcontractor with components.

   .. card:: Resupply subcontractor
      :target: subcontracting/subcontracting_resupply

      Ship components to a subcontractor each time a PO for a subcontracted product is confirmed.

   .. card:: Dropship to subcontractor
      :target: subcontracting/subcontracting_dropship

      Dropship components to a subcontractor each time a PO for a subcontracted product is
      confirmed.

Configuration
=============

To enable subcontracting in Odoo, navigate to :menuselection:`Manufacturing app --> Configuration
--> Settings`, and tick the checkbox next to the :guilabel:`Subcontracting` setting, under the
:guilabel:`Operations` heading. Then, click :guilabel:`Save`.

.. image:: subcontracting/subcontracting-setting.png
   :align: center
   :alt: The Subcontracting setting in the manufacturing app.

With subcontracting enabled, a few different features become available in Odoo:

- On bills of materials (BoMs), the *BoM Type* field now includes a *Subcontracting* option.
  Enabling the *Subcontracting* |BoM| type designates the |BoM|'s product as a subcontracted
  product, which means Odoo knows that it is produced by a subcontractor, and not by the company
  that owns the Odoo database.
- Two subcontracting routes become available in the *Inventory* app, and can be assigned to specific
  products, on the *Inventory* tab of their product pages:

  - *Resupply Subcontractor on Order*
  - *Dropship Subcontractor on Order*

Subcontracting workflows
========================

In Odoo, there are three subcontracting workflows, the main difference between them being *how* the
subcontractor obtains the necessary components:

- In the *basic* subcontracting workflow, the subcontractor is fully responsible for obtaining the
  components. This workflow is outlined in the :doc:`subcontracting/subcontracting_basic`
  documentation.
- In the *Resupply Subcontractor on Order* workflow, the contracting company sends the components
  from their warehouse to the subcontractor. This workflow is outlined in the
  :doc:`subcontracting/subcontracting_resupply` documentation.
- In the *Dropship Subcontractor on Order* workflow, the contracting company purchases the
  components from a vendor, and has them delivered directly to the subcontractor. This workflow is
  outlined in the :doc:`subcontracting/subcontracting_dropship` documentation.

In addition to how a subcontractor obtains components, it is also necessary to consider why a
product is being subcontracted, as well as what happens to products once they are manufactured by
the subcontractor.

In terms of why a product is being subcontracted, the two main reasons are to fulfill a customer
order, or to replenish the quantity of stock on-hand.

In terms of what happens to products once they are manufactured, they can either be shipped to the
contracting company, or dropshipped directly to an end customer.

Each of the three subcontracting workflows described above can be configured to facilitate any of
these possibilities, and the methods for doing so are outlined in their respective documentation.

Subcontracted product valuation
===============================

The valuation of a subcontracted product depends upon a few different variables:

- The cost of the required components, if provided by the contracting company; from here on referred
  to as `C`.
- The price paid to the subcontractor for the service of manufacturing the subcontracted product;
  from here on referred to as `M`.
- The cost of shipping components to the subcontractor, and having them shipped back to the
  contracting company; from here on referred to as `S`.
- The cost of dropshipping, if the components are shipped by the subcontractor to the end customer;
  from here on referred to as `D`.
- Any other associated costs, like import taxes, etc.; from here on referred to as `x`.

Therefore, the total valuation of a subcontracted product (`P`) can be represented by the following
equation:

.. math::
   P = C + M + S + D + x

It is important to note that not every subcontracted product valuation will include all of these
variables. For example, if the product is not dropshipped to the end customer, then there is no need
to factor in the cost of dropshipping.

.. toctree::

   subcontracting/subcontracting_basic
   subcontracting/basic_subcontracting_lead_times
   subcontracting/subcontracting_resupply
   subcontracting/resupply_subcontracting_lead_times
   subcontracting/subcontracting_dropship
   subcontracting/dropship_subcontracting_lead_times
