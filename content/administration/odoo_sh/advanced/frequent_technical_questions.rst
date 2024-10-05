
.. _odoosh-advanced-frequent_technical_questions:

============================
Frequent Technical Questions
============================

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

.. _ip-address-change:

How can I automate tasks when an IP address change occurs?
----------------------------------------------------------

**Odoo.sh notifies project administrators of IP address changes.**
Additionally, when the IP address of a production instance changes, an HTTP `GET` request is made
to the path `/_odoo.sh/ip-change` with the new IP address included as a query string parameter
(`new`), along with the previous IP address as an additional parameter (`old`).

This mechanism allows custom actions to be applied in response to the IP address change
(e.g., sending an email, contacting a firewall API, configuring database objects, etc.)

For security reasons, the `/_odoo.sh/ip-change` route is accessible only internally by the platform
itself and returns a `403` response if accessed through any other means.

Here is a pseudo-implementation example:

.. code-block:: python

    class IPChangeController(http.Controller):

        @http.route('/_odoo.sh/ip-change', auth='public')
        def ip_change(self, old=None, new=None):
            _logger.info("IP address changed from %s to %s", old, new)
            # Then perform whatever action required for your use case, e.g., update an
            # ir.config_parameter, send an email, contact an external firewall service's API, ...
            return 'ok'
