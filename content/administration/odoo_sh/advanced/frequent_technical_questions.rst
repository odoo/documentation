
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

How do I know if I need more workers ?
--------------------------------------

Workers are abstract units of resources allocated to your database. The more workers you have the more it can be accessed concurrently.

As a general rule of thumb, you should allocate about **1 worker per 25 users and 1 worker for every 5000 daily visitors**. However, this can vary considerably based on database usage, website characteristics, and code customizations.

Speed is only impacted if you have too much concurrency.

If things are getting slow, here are a couple of indications to tell if it's due to a high concurrency.

- When things gets slow, **everything is slowed down**, not just specific operations.
- **The slowness comes and goes**, typically it's better outside of business hours. (There can be other reasons for this as well.)
- :ref:`Open your monitoring <odoosh-gettingstarted-branches-tabs-monitoring>`, there is a graph indicating the number of **"concurrent requests (max)"**. This graphs is often high or shows a flat upper bound during a prolonged period of time.
- Some requests get a **"429 Too Many Requests"** response code.

If you have these symptoms it's advisable to try increasing your workers.

.. warning::
    Sometimes this high concurrency is temporary or illegitimate, it's possible your website is being crawled or that you have misconfigured third party applications excessively sollicitating your database. To identify this, have a look at the IP adresses in your odoo logs to see if some are flooding.
