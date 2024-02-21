====================
After-Sales services
====================

*After-Sales* services can be configured in the *Helpdesk* application for individual teams. Once
enabled, users can :ref:`issue refunds <helpdesk/refunds>`, :ref:`generate coupons
<helpdesk/coupons>`, :ref:`process returns <helpdesk/returns>`, and :ref:`schedule repairs
<helpdesk/repairs>` or :ref:`field service interventions <helpdesk/field>` directly from a ticket.

Set up after-sales services
===========================

Start by enabling the after-sales services on a specific *Helpdesk* team, by going to
:menuselection:`Helpdesk app --> Configuration --> Helpdesk Teams` and click on the team the
services should be applied to. Then, scroll to the :guilabel:`After-Sales` section on the team's
settings page, and choose which of the following options to enable:

- :guilabel:`Refunds`: issues credit notes to refund a customer, or adjust the remaining amount due.
- :guilabel:`Coupons`: offers discounts and free products through an existing coupon program.
- :guilabel:`Returns`: initiates a product return from a customer through a reverse transfer.
- :guilabel:`Repairs`: creates repair orders for broken or faulty products.
- :guilabel:`Field Service`: plans onsite intervention through the *Field Service* application.

.. figure:: after_sales/after-sales-enable.png
   :align: center

   The services that are enabled can vary based on the type of support a team provides.

.. danger::
   Since all the after-sales services in Odoo require integration with other applications, enabling
   any of them may result in the installation of additional modules or applications. Installing a
   new application on a One-App-Free database triggers a 15-day trial. At the end of the trial, if a
   paid subscription has not been added to the database, it will no longer be accessible.

.. _helpdesk/refunds:

Issue refund with credit note
=============================

A *credit note* is a document issued to a customer informing them that they have been credited a
certain amount of money. They can be used to provide a full refund to a customer, or to adjust any
remaining amount due. While they are usually created through the *Accounting* or *Invoicing*
applications, they can be created through a *Helpdesk* ticket, as well.

.. important::
   Invoices **must** be posted before a credit note can be generated.

To create a credit note, navigate to a ticket on the :menuselection:`Helpdesk app`, and click the
:guilabel:`Refund` button in the top-left corner of the ticket form. This opens a
:guilabel:`Refund` pop-up window.

.. image:: after_sales/after-sales-refund-details.png
   :align: center
   :alt: View of a refund creation page.

Fill out the fields with the necessary information:

 - :guilabel:`Sales Order`: if a sales order was referenced on the original ticket, it automatically
   populates in this field.
 - :guilabel:`Product`: the product the ticket is about. If an item is selected in this field, only
   the sales orders, deliveries, and invoices including this product can be selected.
 - :guilabel:`Lot/Serial Number`: this field is **only** visible if the :guilabel:`Product` selected
   has associated lot or serial numbers.
 - :guilabel:`Invoices to Refund`: this field is **required**. If no invoices are available in the
   drop-down, it indicates this customer currently has no posted invoices, or the
   :guilabel:`Product` has no related invoices.
 - :guilabel:`Reason displayed on Credit Note`: this field automatically populates with the ticket
   number, though it can be edited with additional information.
 - :guilabel:`Journal`: the accounting journal where the credit note should be posted. After an
   invoice is selected, this field defaults to the journal listed on the original invoice, though it
   can be changed, if necessary.
 - :guilabel:`Reversal date`: when this field is clicked, use the pop-up calendar that appears to
   select a date for the credit note invoice. This field is **required**.

After the necessary fields are filled in, click :guilabel:`Reverse` or :guilabel:`Reverse and Create
Invoice`.

:guilabel:`Reverse` creates a credit note in a draft state that can be edited before it is posted.
This option can be used to provide a partial refund.

:guilabel:`Reverse and Create Invoice` creates a credit note that is automatically posted as well as
an invoice in a draft state. The invoice contains the same information as the original invoice,
though this information can be altered.

Once the credit note has been posted, a :guilabel:`Credit Notes` smart button is added to the
*Helpdesk* ticket.

.. image:: after_sales/after-sales-credit-note-smart-button.png
   :align: center
   :alt: View of smart buttons on a ticket focusing on the credit note button.

.. seealso::
   :doc:`../../../finance/accounting/customer_invoices/credit_notes`

.. _helpdesk/coupons:

Generate coupons from a ticket
==============================

Coupons can be used to alter the price of products or orders. Conditional rules define the usage
constraints of a coupon. *Coupon Programs* are configured in the *Sales*, *Point of Sale*, or
*Website* applications.

.. important::
   The *eCommerce* module **must** be installed to create coupon codes from the *Website*.

To generate a coupon, open a *Helpdesk* ticket and click on the :guilabel:`Coupon` button in the
top-left corner. Select an option from the :guilabel:`Coupon Program` drop-down menu in the
:guilabel:`Generate a Coupon` pop-up window that appears.

.. image:: after_sales/after-sales-generate-coupon.png
   :align: center
   :alt: View of a coupon generation window.

.. note::
   To create a new :guilabel:`Coupon Program`, navigate to :menuselection:`Sales app --> Products
   --> Discount & Loyalty` and click :guilabel:`New`. To make the program available to share with
   *Helpdesk* customers, the :guilabel:`Program Type` **must** be set to :guilabel:`Coupons`. This
   generates single-use coupon codes that grant immediate access to rewards and discounts.

  Coupon programs can also be created in the *Point of Sale* application or *Website* application.
  Refer to :doc:`discount and loyalty programs
  <../../../sales/sales/products_prices/loyalty_discount>` for more information.

Click on the :guilabel:`Valid Until` field, and use the pop-up calendar to select an expiration date
for this coupon code. If this field is left blank, the code does **not** expire.

Click :guilabel:`Send by Email` to compose an email to send to the customer with the coupon code.

.. note::
   When emailing a coupon code, **all** the followers of the ticket are added as recipients to the
   email. Additional recipients can be added to the email as well, in the :guilabel:`Recipients`
   field of the :guilabel:`Compose Email` pop-up window. If an expiration date was selected for the
   code, it is included in the message template.

   .. image:: after_sales/after-sales-coupon-email.png
      :align: center
      :alt: View of an email draft window with coupon code.

Click :guilabel:`Get Share Link` to generate a link to send directly to the customer. Doing so opens
a :guilabel:`Share Coupons` pop-up window. Click the :guilabel:`Copy` button next to the
:guilabel:`Share Link` field and paste the results to any communication with the customer. When the
customer uses the link, the code is automatically applied to their cart.

After a :guilabel:`Coupon Code` has been generated, a :guilabel:`Coupons` smart button is added to
the top of the ticket; click the smart button to view the coupon code, expiration date, and
additional information.

.. image:: after_sales/after-sales-coupon-smart-button.png
   :align: center
   :alt: View of the smart buttons on a ticket focusing on the coupon button.

.. seealso::
   - `Coupons <https://www.youtube.com/watch?v=KW5cZHg10jQ>`_
   - :doc:`../../../sales/sales/products_prices/loyalty_discount`

.. _helpdesk/returns:

Facilitate a product return with a reverse transfer
===================================================

Returns are completed through *reverse transfers*, which generate new warehouse operations for the
returning products. Click the :guilabel:`Return` button in the top-left corner of a ticket to open
the :guilabel:`Reverse Transfer` pop-up window.

.. image:: after_sales/after-sales-return-button.png
   :align: center
   :alt: View of a Helpdesk ticket with the return button highlighted.

.. important::
   The :guilabel:`Return` button **only** appears on a ticket if the customer has a recorded
   delivery in the database.

Select a :guilabel:`Sales Order` or :guilabel:`Delivery to Return` to identify the products that
need to be returned.

By default, the quantity matches the validated quantity from the delivery order. Update the
:guilabel:`Quantity` field, if necessary. To remove a line, click the :guilabel:`🗑️ (trash can)`
icon.

Select a :guilabel:`Return Location` where the items should be directed after the return is
completed.

.. image:: after_sales/after-sales-reverse-transfer.png
   :align: center
   :alt: View of a reverse transfer creation page.

Click :guilabel:`Return` to confirm the return. This generates a new warehouse operation for the
incoming returned products.

Use the breadcrumbs to return to the helpdesk ticket. A new :guilabel:`Return` smart button can now
be accessed at the top of the ticket.

.. image:: after_sales/after-sales-return-smart-button.png
   :align: center
   :alt: View of the return smart button on a helpdesk ticket.

.. seealso::
   :doc:`../../../sales/sales/products_prices/returns`

.. _helpdesk/repairs:

Send products for repair from a ticket
======================================

If the ticket is related to an issue with a faulty or broken product, a *repair order* can be
created from the *Helpdesk* ticket, and managed through the *Repairs* application.

To create a new repair order, open a :menuselection:`Helpdesk` ticket and click on the
:guilabel:`Repair` button in the top-left corner. This opens a :guilabel:`Repair Reference` form.

.. image:: after_sales/after-sales-repair-reference.png
   :align: center
   :alt: View of a repair reference page.

Fill out the fields with the necessary information:

 - :guilabel:`Customer`: this field carries over from the ticket, though a new contact can been
   selected from the drop-down menu.
 - :guilabel:`Product to Repair`: if a product was specified in the :guilabel:`Product` field on the
   ticket, it is added to this field automatically. If not, click into the field to select a product
   from the drop-down menu.
 - :guilabel:`Lot/Serial`: this field is **only** visible if the products being repaired are
   tracked, via lot or serial numbers.
 - :guilabel:`Return`: return order from which the product to be repaired comes from.
 - :guilabel:`Under Warranty`: if this box is checked, the sale price for all products from the
   repair order are set to zero.
 - :guilabel:`Scheduled Date`: this field defaults to the current date. To select a new date, click
   into the field and select a date using the drop-down calendar.
 - :guilabel:`Responsible`: assign a user from the drop-down menu to manage the repair.
 - :guilabel:`Tags`: click into this field to assign an existing tag or create a new one. Multiple
   tags can be assigned.

If parts are required for the repair, they can be added in the :guilabel:`Parts` tab. Additional
information for the internal repair team can be added to the :guilabel:`Repair Notes` tab.

Once the form is complete, click :guilabel:`Confirm Repair`. To create, edit, and send a quote for
this repair, click :guilabel:`Create Quotation`.

A :guilabel:`Repairs` smart button is then added to the ticket, linking to the repair order.

.. image:: after_sales/after-sales-repair-smart-button.png
   :align: center
   :alt: View of smart buttons focusing on repair button.

.. tip::
   Once a user creates a repair order from a *Helpdesk* ticket, they can access it through the
   ticket's :guilabel:`Repair` smart button, or from a link in the chatter, even if they do not have
   access rights to the *Repair* application.

.. _helpdesk/field:

Create field service task from a ticket
=======================================

On-site interventions can be planned from a ticket and managed through the *Field Service*
application. Customers with :doc:`portal access <../../../general/users/portal>` are able to track
the progress of a *Field Service* task just as they would a *Helpdesk* ticket.

.. tip::
   To change the default *Field Service* project for the team, go to :menuselection:`Helpdesk app
   --> Configuration --> Helpdesk Teams` to select a :guilabel:`Team`. Scroll to the
   :guilabel:`After-Sales` section, and choose a project under :guilabel:`Field Service`.

To create a new *Field Service* task, navigate to a :menuselection:`Helpdesk` ticket. Click
:guilabel:`Plan Intervention` to open the :guilabel:`Create a Field Service task` pop-up window.

.. image:: after_sales/after-sales-field-service-create.png
   :align: center
   :alt: View of a Field Service task creation page.

Confirm or update the task :guilabel:`Title`.

The :guilabel:`Project` field on the :guilabel:`Create a Field Service task` pop-up window defaults
to the same *Field Service* project that was identified on the team's settings page. To change the
project for this specific task, select one from the :guilabel:`Project` field.

If applicable, select a :guilabel:`Worksheet Template` from the drop-down menu.

.. note::
   *Field Service Worksheets* are reports that detail the work completed during an on-site task.
   When work is completed, worksheets are signed by the customer to confirm the job is done and the
   customer is satisfied.

   If the *Field Service* project assigned to the *Helpdesk* team has worksheets enabled, and has a
   default template assigned, that template automatically appears in the :guilabel:`Worksheet
   Template` drop-down field. Even so, the field can be edited, and another template can be
   selected.

   If the *Field Service* project does **not** have worksheets enabled, the :guilabel:`Worksheet
   Template` field does not appear on the :guilabel:`Create a Field Service task` pop-up window.

Click :guilabel:`Create Task` or :guilabel:`Create & View Task`.

After the task is created, a :guilabel:`Tasks` smart button is added to the ticket, linking the
:guilabel:`Field Service` task to the ticket.

.. image:: after_sales/after-sales-field-service-smart-button.png
   :align: center
   :alt: View of ticket smart buttons focused on task.

.. seealso::
   `Field Service  <https://www.odoo.com/slides/slide/advanced-settings-862?fullscreen=1>`_
