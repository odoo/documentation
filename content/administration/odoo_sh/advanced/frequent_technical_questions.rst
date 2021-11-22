
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

Why are the installed Python libraries different from Odoo's own requirements.txt?
----------------------------------------------------------------------------------

On Odoo.sh, Odoo uses the Python libraries available in the Linux distribution
to fulfill its dependencies. Odoo is compatible with the packages in Debian
stable and Ubuntu LTS releases. The `requirements.txt <https://github.com/odoo/odoo/blob/master/requirements.txt>`_
included with Odoo is intended for use on different distributions where the
same library versions might not be available. As a result, Odoo.sh does not use
Odoo's own requirements.txt file and there might be occasional differences
between them.

For example, reportlab 3.5.34 is the version available on Ubuntu 20.04 as a
distribution package. That distribution uses Python 3.8, in which case
requirements.txt in `Odoo 14.0 <https://github.com/odoo/odoo/blob/2097c75dc38b310c4d9ddecd79e2218448a51a4c/requirements.txt#L46>`_
specifies reportlab 3.5.55. Normally speaking the pin in requirements.txt
should reflect that and be 3.5.34, but it turns out that this version only
works if Ubuntu's patches are applied to it. Ubuntu LTS releases have
backporting of bug fixes, which means that the behavior of a Python package in
the distribution might not be the same as that same version when installed with
pip. This is the case with reportlab, which is why the pin is different.

If a custom module requires a more recent version of a package than is
installed on Odoo.sh, you can specify it in your own requirements.txt file.