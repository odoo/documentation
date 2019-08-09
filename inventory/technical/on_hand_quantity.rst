===============================
On Hand quantities
===============================

On hand quantity for product (product.template)
*************************************************

In the context of the product, the displayed on hand quantity is the sum of the quantities of all the variants (product.product)

On hand quantity for variant (product.product)
************************************************

For the variants, the displayed on hand quantity depend of the context.

In a context with a single Stock Location, this includes goods stored at this Location, or any of its children.
In a context with a single Warehouse, this includes goods stored in the Stock Location of this Warehouse, or any of its children stored in the Stock Location of the Warehouse of this Shop, or any of its children.
Otherwise, this includes goods stored in any Stock Location with 'internal' type.

(see it on `Github qty_available <https://github.com/odoo/odoo/blob/48e93a10a1d1dbb0c6301eb33cf433db6d59f02b/addons/stock/models/product.py#L26-L38>`_)

.. code-block:: python

    qty_available = fields.Float(
        'Quantity On Hand', compute='_compute_quantities', search='_search_qty_available',
        digits=dp.get_precision('Product Unit of Measure'),
        help="Current quantity of products.\n"
                "In a context with a single Stock Location, this includes "
                "goods stored at this Location, or any of its children.\n"
                "In a context with a single Warehouse, this includes "
                "goods stored in the Stock Location of this Warehouse, or any "
                "of its children.\n"
                "stored in the Stock Location of the Warehouse of this Shop, "
                "or any of its children.\n"
                "Otherwise, this includes goods stored in any Stock Location "
                "with 'internal' type.")
