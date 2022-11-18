.. _howto/rdtraining/N_security:

====================
Advanced N: Security
====================

Every day we hear about data leaks and attacks in the newspapers.
We expect you to be aware and careful about how to avoid security breaches in your future
developments.

You already defined new models in your training. Did you check the access rights and define record
rules on it ? Are you sure your module is not an open door to SQL injections ? Did you use getattr
or t-raw in your code?

- No or wrong access rules on models.
- Introduction of public methods that should actually be private.
- Wrong manipulation of access tokens.
- No or wrong `ir.rules` (restriction rules) on models.
- Introduction of SQL injections.
- etc.

Please check this `presentation from Olivier Dony (odo)
<https://docs.google.com/presentation/d/1oDINxPtHWz31V8-2W0h2u2ubaKgz9lmbyfx9DJI4lTw/edit>`_ about
common mistakes that you should **absolutely** avoid in your future developments.
Also, please always use this `security checklist
<https://docs.google.com/presentation/d/1oDINxPtHWz31V8-2W0h2u2ubaKgz9lmbyfx9DJI4lTw/edit#slide=id.g2faad955b1_0_6>`_
to double-check your development and avoid further embarrassing issues.
