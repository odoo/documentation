:banner: banners/odoo-sh.jpg

.. _odoosh-advanced-frequent_technical_questions:

==================================
Frequent Technical Questions
==================================


Can you install pycups or some similar library linked to `CUPS <https://www.cups.org/>`_ ?
------------------------------------------------------------------------------------------

Several community apps for Odoo list *pycups* as required dependency.

- Pycups is a set of Python bindings for the libcups library. They are meant to integrate your computer with a local printing server.
- CUPS is printing server meant to be used for printers on the same local network as the Odoo server.

We consider adding new system packages as long as they are indeed used.
Regarding pycups, you won't be able to configure a printer in the local network of your Odoo.sh server.

