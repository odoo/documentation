====================================
How to process a manufacturing order
====================================

Introduction
============

There are two basic ways to manage manufacturing in Odoo. The first way
manages work with one document only. This document is the
**manufacturing order**. The second way uses additional documents to
give you more precise control over the manufacturing process. In this
way, **Manufacturing orders** are divided into one or more steps
defined by **work orders**, performed in an order defined by
**routings**.

How to manage manufacturing without routings
============================================

You will most likely use manufacturing orders without routings if all
the work to produce your product is performed in one place, by one
person, in one step, and/or you do not need the level of granular
control afforded by work orders and routings.

Managing your operations in this way is the default behavior in Odoo.
There are two basic phases from planning to production:

1. Create manufacturing orders

2. Record Production

How to manage manufacturing with routings and work orders
=========================================================

To use work orders and routings, you will need to enable the option
**Manage production by work orders** From
:menuselection:`Configuration --> Settings`. You will then be able to add
routings to bills of materials, and configure some additional related
fields. You will also be able to create **work centers**, the
locations at which work orders are performed.

When manufacturing with routings and work orders, each work order is
scheduled individually. You will also have access to time and capacity
planning, and reports on costing and efficiency on a work center level.

Manufacturing using routings can be broken down into several steps. When
configuring your BoM, you will need to add a routing defining the
component work orders. After planning the manufacturing order, you will
have the added step of scheduling work orders.

The workflow is thus divided into three basic phases, as follows:

1. Create manufacturing orders

2. Schedule the associated work orders.

3. Perform the scheduled work and record production.
