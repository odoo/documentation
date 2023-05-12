=================================
Flexible taxes (fiscal positions)
=================================

When running a business, you may need to apply different taxes and record transactions on various
accounts based on the location and type of business of your customers and providers.

The **fiscal positions** feature enables you to establish rules that automatically select the right
taxes and accounts used for each transaction.

.. seealso::
   - :doc:`../../../finance/accounting/taxes/fiscal_positions`
   - :doc:`../../../finance/accounting/taxes`

Configuration
=============

To enable the feature, go to :menuselection:`Point of Sale --> Configuration --> Settings`, scroll
down to the :guilabel:`Accounting` section, and enable :guilabel:`Flexible Taxes`.

Then, set a default fiscal position that should be applied to all sales in the selected POS in the
:guilabel:`Default` field. You can also add more fiscal positions to choose from in the
:guilabel:`Allowed` field.

.. image:: fiscal_position/flexible-taxes-setting.png
   :align: center

According to the :doc:`fiscal localization package <../../../finance/fiscal_localizations>`
activated, several fiscal positions are preconfigured and can be set and used in POS. However, you
can also :ref:`create new fiscal positions <fiscal_positions/mapping>`.

.. note::
   If you do not set a fiscal position, the tax remains as defined in the **customer taxes** field
   on the product form.

Use fiscal positions
====================

Open a :ref:`POS session <pos/session-start>` to use one of the allowed fiscal positions. Then,
click the :guilabel:`Tax` button next to the **book-shaped** icon and select a fiscal position from
the list. Doing so applies the defined rules automatically to all the products subject to the chosen
fiscal position's regulations.

.. image:: fiscal_position/set-tax.png
   :align: center

.. note::
   If a default fiscal position is set, the tax button displays the name of the fiscal position.

.. seealso::
   :doc:`../../../finance/accounting/taxes/fiscal_positions`
