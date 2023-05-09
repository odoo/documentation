.. _tutorials/getting_started/16_final_word:

==========================
Chapter 16: The final word
==========================

Coding guidelines
=================

We will start refactoring the code to match to the Odoo coding guidelines. The guidelines aim
to improve the quality of the Odoo Apps code.

**Reference**: you will find the Odoo coding guidelines in
:doc:`/contributing/development/coding_guidelines`.

.. exercise:: Polish your code.

    Refactor your code to respect the coding guidelines. Don't forget to run your linter and
    respect the module structure, the variable names, the method name convention, the model
    attribute order and the xml ids.

Test on the runbot
==================

Odoo has its own :abbr:`CI (Continuous integration)` server named `runbot <https://runbot.odoo.com/>`__. All
commits, branches and PR will be tested to avoid regressions or breaking of the stable versions.
All the runs that pass the tests are deployed on their own server with demo data.

.. exercise:: Play with the runbot.

    Feel free to go to the runbot website and open the last stable version of Odoo to check out all the available
    applications and functionalities.
