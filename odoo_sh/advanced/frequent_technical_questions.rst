:banner: banners/odoo-sh.jpg

.. _odoosh-advanced-frequent_technical_questions:

==================================
Frequent Technical Questions
==================================

"Scheduled actions do not run at the exact time they were expected"
-------------------------------------------------------------------

On the Odoo.sh platform, we cannot guarantee an exact running time for scheduled actions.

This is due to the fact that there might be multiple customers on the same server, and we must guarantee a fair share of the server for every customer. Scheduled actions are therefore implemented slightly differently than on a regular Odoo server, and are run on a *best effort* policy.

.. warning::
    Do not expect any scheduled action to be run more often than every 5 min.

Are there "best practices" regarding scheduled actions?
-------------------------------------------------------

**Odoo.sh always limits the execution time of scheduled actions (*aka* crons).**
Therefore, you must keep this fact in mind when developing your own crons.

We advise that:

- Your scheduled actions should work on small batches of records.
- Your scheduled actions should commit their work after processing each batch;
  this way, if they get interrupted by the time-limit, there is no need to start over.
- Your scheduled actions should be
  `idempotent <https://stackoverflow.com/a/1077421/3332416>`_: they must not
  cause side-effects if they are started more often than expected.


Can you install `pycups <https://pypi.org/project/pycups/>`_ or some similar library linked to `CUPS <https://www.cups.org/>`_ ?
--------------------------------------------------------------------------------------------------------------------------------

Several community apps for Odoo list ``pycups`` as required dependency.

- ``pycups`` is a set of Python bindings for the libcups library. They are meant to integrate your computer with a local printing server.
- CUPS is a printing server meant to be used for printers on the same local network as the Odoo server.

We consider adding new system packages as long as they are indeed used.
Regarding ``pycups``, you won't be able to configure a printer in the local network of your Odoo.sh server.

