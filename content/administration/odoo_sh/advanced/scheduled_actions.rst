
.. _odoo-sh/scheduled_actions:

=================
Scheduled actions
=================

Special worker
--------------

On Odoo.sh, cron jobs and incoming mails are handled by a specific worker that is not accounted in
the workers on your subscription. It is a kind of "hidden free worker" bound to every Odoo.sh
instance.

By default, this worker can spawn multiple concurrent threads to execute scheduled actions. The
number of threads can be dynamically increased at runtime. However, its exact amount cannot be
predicted as it varies according to the number of extra workers in the subscription, the current
concurrency of incoming mails, the current server's load, etc.

Limitations
-----------

- The delay between a scheduled task's next execution date and the actual triggering depends on many
  parameters and can be delayed according to the state of the execution pool of the shared server.
- Scheduled actions on staging branches are executed less often than production build.
- The platform deactivates scheduled actions that repeatedly time out.
- If the execution time of a scheduled action is business-critical, then we recommend using a
  dedicated server as the scheduled actions timeout can be modified in the project settings.
- We cannot guarantee an exact running time for scheduled actions on the Odoo.sh platform.
