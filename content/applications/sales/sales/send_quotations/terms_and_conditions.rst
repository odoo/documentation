======================
Add terms & conditions
======================

Specifying terms and conditions is essential to set out important contractual points such as payment
terms, limitation of liability and delivery terms between customers and sellers. Every seller must
declare all formal information concerning products and company policy. On the other hand, each
customer must take note of all these conditions before committing to anything. With Odoo Sales, it
is very easy to include your default terms and conditions on every quotation, sales order, and
invoice that you manage.

Default Terms & Conditions
==========================

Configuration
-------------

Go to :menuselection:`Accounting --> Configuration --> Settings` and activate
*Default Terms & Conditions*.

.. image:: terms_and_conditions/terms_conditions_1.png
   :align: center
   :class: img-thumbnail
   :alt: How to enable Default Terms & Conditions on Odoo Sales?

.. note::
   Please note that this feature is activated via the settings of the **Invoicing App** and **not**
   via the settings of the **Sales App**. Moreover, you don't need to install the invoicing
   application since it is done automatically with the installation of the sales application.

DT&C on your quotations, sales orders, and invoices
---------------------------------------------------

In the settings of the **Invoicing App**, you have the possibility to insert your default terms
and conditions.

.. image:: terms_and_conditions/terms_conditions_2.png
   :align: center
   :class: img-thumbnail
   :alt: Default Terms & Conditions on quotation on Odoo Sales

They appear subsequently on every quotation, sales order, and invoice.

DT&C on your quotation templates
--------------------------------

According to your business needs, you can specify your terms and conditions on your quotation
templates. This is interesting if you have different terms and conditions within your company.

.. image:: terms_and_conditions/terms_conditions_3.png
   :align: center
   :class: img-thumbnail
   :alt: Add Default Terms & Conditions to your quotation templates on Odoo Sales

.. important::
   Be sure to check out our documentation about quotation templates: :doc:`quote_template`,
   to master each step of this amazing feature.

General Terms & Conditions
==========================

GT&C on your website
--------------------

Use the **Website App** and create your own general terms and conditions page. For example, here is
the Odoo terms and conditions page:

.. image:: terms_and_conditions/terms_conditions_4.png
   :align: center
   :class: img-thumbnail
   :alt: General Terms & Conditions on your website

You can refer to this page in the footer of all your documents. The layout is available in the
**General Settings** under the **Business Documents** category. For example, this footer appears
in every document from Odoo.

.. image:: terms_and_conditions/terms_conditions_7.png
   :align: center
   :class: img-thumbnail
   :alt: General Terms & Conditions in your business documents

GT&C as attachment in your emails
---------------------------------

Attach an external document with your general terms and conditions when you are about to send your
quotation by email to your customers.

.. image:: terms_and_conditions/terms_conditions_5.png
   :align: center
   :class: img-thumbnail
   :alt: General Terms & conditions as attachment in your email

GT&C as attachment in your quotation templates
----------------------------------------------

Create and edit email templates to set a default attachment for all quotation emails that you
will send in the future. To do so, you have to go to :menuselection:`Sales --> Configuration
--> Quotation templates` and create a new quotation template or modify an existing one. Under
the confirmation tab, you are now able to activate online signatures, online payments and to set
a confirmation mail in which you have the possibility to configure the default attachment.
There, you can put your general terms & conditions.

.. image:: terms_and_conditions/terms_conditions_6.png
   :align: center
   :class: img-thumbnail
   :alt: General Terms & conditions as attachment in your quotation templates

.. tip::
   To customize your email templates, activate the **developer mode** and
   go to :menuselection:`Settings --> Technical --> Email --> Templates`.

With Odoo Sales it is now very simple to deal with terms & conditions.

.. seealso::
   - :doc:`quote_template`
   - :doc:`get_signature_to_validate`
   - :doc:`get_paid_to_validate`
