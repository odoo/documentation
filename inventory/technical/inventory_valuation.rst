===============================
Inventory Valuation In Detail
===============================

In this section we have a deep look at the inventory valuation and explain how the quantities and valuation are computed.

Inventory Valuation (Current Inventory)
*****************************************
This is specified in odoo/addons/stock_account/models/product.py mostly in the method _compute_stock_value() (see it on `Github _compute_stock_value <https://github.com/odoo/odoo/blob/48e93a10a1d1dbb0c6301eb33cf433db6d59f02b/addons/stock/models/product.py#L92-L93>`_)

Fifo Automated
-------------------

The quantity is the sum of the quantities for stock.move of this product with a specific domain.
The value is the sum of the remaining_value for stock.move of this product with a specific domain.

The remaining_value is a field of the sock.move holding the remaining value of the product in this location.
So each time the valuation changes, the remaining_value is also updated.

(see it on `Github remaining_value <https://github.com/odoo/odoo/blob/a5a4b154ee4e4d83f99b35b8899ad406dbee6b12/addons/stock_account/models/stock.py#L143>`_)

.. code-block:: python

    remaining_value = fields.Float(copy=False)

The domain is defined in odoo/addons/stock_account/models/stock.py in the method _get_all_base_domain (see it on `Github _get_all_base_domain <https://github.com/odoo/odoo/blob/a5a4b154ee4e4d83f99b35b8899ad406dbee6b12/addons/stock_account/models/stock.py#L178-L206>`_)

In simple words, the domain can be understood as following

- state is done
- Then, either 'in' or 'out' moves.
    * 'in' moves:
        + coming from a location without company, or an inventory location within the same company
        + going to a location within the same company
    * 'out' moves:
        + coming from to a location within the same company
        + going to a location without company, or an inventory location within the same company

.. code-block:: python

        domain = [
        ('state', '=', 'done'),
        '|',
            '&',
                '|',
                    ('location_id.company_id', '=', False),
                    '&',
                        ('location_id.usage', 'in', ['inventory', 'production']),
                        ('location_id.company_id', '=', company_id or self.env.user.company_id.id),
                ('location_dest_id.company_id', '=', company_id or self.env.user.company_id.id),
            '&',
                ('location_id.company_id', '=', company_id or self.env.user.company_id.id),
                '|',
                    ('location_dest_id.company_id', '=', False),
                    '&',
                        ('location_dest_id.usage', '=', 'inventory'),
                        ('location_dest_id.company_id', '=', company_id or self.env.user.company_id.id),


Inventory Valuation (At a Specific Date)
*****************************************
This is specified in odoo/addons/stock_account/models/product.py mostly in the method _compute_stock_value()

Fifo Automated:
-----------------

The quantity is computed from the Inventory Valuation (Current Inventory). If the quantity is negative or null the line is not displayed.
The value is computed from the account.move.lines (journal items) and is simply the sum of the balances of all the account.move.lines where the account is the valuation account of the product.

