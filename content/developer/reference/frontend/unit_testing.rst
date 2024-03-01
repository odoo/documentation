=======================
JavaScript Unit Testing
=======================

Writing unit tests is as important as writing the code itself: it helps to
ensure that the code is written according to a given specification and that it
remains correct as it evolves.

Testing Framework
=================

Testing the code starts with a testing framework. The framework provides a level of abstraction
that allows to write tests in an easy and efficient way. It also provides a set of tools to run the
tests, make assertions and report the results.

Odoo developers use a home-grown testing framework called :abbr:`HOOT (Hierarchically Organized
Odoo Tests)`. The main reason for using a custom framework is that it allows us to extend it based
on our needs (tags system, mocking of global objects, etc.).

On top of that framework we have built a set of tools to help us write tests for the web client
(`web_test_helpers`), and a mock server to simulate the server side (`mock_server`).

You can find links to the reference of each of these parts below, as well as a section filled with
examples and best practices for writing tests.

.. toctree::
    :titlesonly:

    unit_testing/hoot
    unit_testing/web_helpers
    unit_testing/mock_server
