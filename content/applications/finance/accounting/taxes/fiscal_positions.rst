==========================================
Fiscal positions (tax and account mapping)
==========================================

Default taxes and accounts are set on products and customers to create new transactions on the fly.
However, depending on the customers' and vendors' location and business type, using different
taxes and accounts for a transaction might be necessary.

**Fiscal positions** allow the creation of rules to adapt the taxes and the income and expense
accounts used for a transaction automatically.

They can be applied :ref:`automatically <fiscal_positions/automatic>`, :ref:`manually
<fiscal_positions/manual>`, or :ref:`assigned to a partner <fiscal_positions/partner>`.

.. note::
   Several default fiscal positions are available as part of your :ref:`fiscal localization
   package <fiscal_localizations/packages>`.

.. _fiscal_positions/configuration:

Configuration
=============

To edit or create a fiscal position, go to :menuselection:`Accounting --> Configuration --> Fiscal
Positions`, and open the record to modify or click :guilabel:`New`.

.. tip::
   If any notes are legally required when using this fiscal position, add them in the
   :guilabel:`Legal Notes...` field below the :ref:`tax mapping <fiscal_positions/tax-mapping>`
   section to display them on quotations, sales orders, invoices, and bills.

.. _fiscal_positions/tax-mapping:

Tax mapping
-----------

Fiscal positions are required to map taxes. :ref:`Tax mapping <taxes/tax-mapping>` is configured on
taxes themselves.

.. _fiscal_positions/account-mapping:

Account mapping
---------------

Account mapping is based on the income and expense accounts defined on the product or product
category. To map to another account, select the account to be replaced in the left column
(:guilabel:`Account on Product`) and select the account to use instead in the right column
(:guilabel:`Account to Use Instead`).

.. image:: fiscal_positions/fiscal-positions-account-mapping.png
   :alt: Example of a fiscal position's account mapping

Application
===========

.. _fiscal_positions/automatic:

Automatic application
---------------------

To automatically apply a fiscal position following a set of conditions, go to
:menuselection:`Accounting --> Configuration --> Fiscal Positions`, open the fiscal position to
modify, and tick :guilabel:`Detect Automatically`.

From there, several conditions can be activated:

- :guilabel:`VAT Required`: the customer's VAT number must be present on their contact form.
- :guilabel:`Country Group` and :guilabel:`Country`: the fiscal position is only applied to the
  selected country or country group.

.. image:: fiscal_positions/fiscal-positions-automatic.png
   :alt: Example of a fiscal position automatic application settings

.. note::
   - If the :doc:`Verify VAT Numbers <vat_verification>` feature is enabled, any fiscal positions
     with :guilabel:`VAT required` enabled will require Intra-Community valid VAT numbers to apply
     automatically.
   - Taxes on **eCommerce orders** are automatically updated once the customer has logged in or
     filled out their billing details.

.. important::
   The fiscal positions' **sequence** defines which fiscal position is applied if all conditions
   set on multiple fiscal positions are met simultaneously.

   For example, suppose the first fiscal position in a sequence targets *country A* while the second
   fiscal position targets a *country group* that comprises *country A*. In that case, only the
   first fiscal position will be applied to customers from *country A*.

.. _fiscal_positions/manual:

Manual application
------------------

To manually select a fiscal position, open a sales order, purchase order, invoice, or bill, go to
the :guilabel:`Other Info` tab and select the desired :guilabel:`Fiscal Position` before adding
product lines.

.. image:: fiscal_positions/fiscal-positions-manual.png
   :alt: Selection of a fiscal position on a sales order, invoice, or bill

.. _fiscal_positions/partner:

Assign to a partner
-------------------

To define which fiscal position must be used by default for a specific partner, go to
:menuselection:`Accounting --> Customers --> Customers`, select the partner, open the
:guilabel:`Sales & Purchase` tab, and select the :guilabel:`Fiscal Position`.

.. image:: fiscal_positions/fiscal-positions-customer.png
   :alt: Selection of a fiscal position on a customer

.. tip::
   To view all partners at once instead of only customers, remove the :guilabel:`Customer Invoices`
   filter or use the **Contacts** application.

.. seealso::

  * :doc:`../taxes`
  * :doc:`B2B_B2C`
