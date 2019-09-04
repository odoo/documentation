:banner: banners/odoo-sh.jpg

.. _odoosh-advanced-frequent_technical_questions:

==================================
Frequent Technical Questions
==================================

"Automated actions do not run at the exact time they were expected"
-------------------------------------------------------------------

On the Odoo.sh platform, we cannot guarantee an exact running time for automated actions.

This is due to the fact that there might be multiple customers on the same server, and we must guarantee a fair share of the server for every customer. Automated actions are therefore implemented slightly differently than on a regular Odoo server, and are run on a *best effort* policy.

.. warning::
    Do not expect any automated action to be run more often than every 5 min.


Can you install pycups or some similar library linked to `CUPS <https://www.cups.org/>`_ ?
------------------------------------------------------------------------------------------

Several community apps for Odoo list *pycups* as required dependency.

- Pycups is a set of Python bindings for the libcups library. They are meant to integrate your computer with a local printing server.
- CUPS is printing server meant to be used for printers on the same local network as the Odoo server.

We consider adding new system packages as long as they are indeed used.
Regarding pycups, you won't be able to configure a printer in the local network of your Odoo.sh server.

