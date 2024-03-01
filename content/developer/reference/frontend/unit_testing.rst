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

Setup
=====

Before learning how to write tests, it is good to start with the basics. The following steps
will ensure that your test files are properly picked-up by the test runner.

Note that in existing addons, most of these steps can be skipped since the proper
**folder structure** and **asset bundles** are probably setup.

#. Writing files in the right **place**:

All JavaScript test files should be put under the `/static/tests` folder of the
related addon (e.g. `/web/static/tests/env.test.js`).

#. Using the right **name**:

Test files must end with `.test.js`. This is not only a convention, but a requirement
for test files to be picked up by the runner. All other JavaScript files will be
interpreted either as **production code** (i.e. the code to be tested), or as **test
helper** files (such as `web_test_helpers <https://github.com/odoo/odoo/blob/18.0/addons/web/static/tests/web_test_helpers.js>`).

.. note::
    It is to be noted that there is an exception for `.hoot.js` files, which are not
    considered as test files, but as **global modules** for the whole test run, while other
    JavaScript modules are re-created for each test suite. Since the same instance of
    these modules will be running for the whole test run, they follow **strict contraints**,
    such as **restricted imports**, or advanced **memory management** techniques to
    ensure no side-effects are affecting tests.

#. Calling the files in the right **bundle**:

Test files, added in the right folder, must be included in the `web.assets_unit_tests`
bundle. For ease of use, this can be done with **glob syntax** to import all test
and test helper files:

.. code:: python

    # Unit test files
    'web.assets_unit_tests': [
        'my_addon/static/tests/**/*',
    ],

Writing tests
=============

After **creating** and **including** test files, it is time to write tests. You
may refer to the following documentation sections to learn about the testing framework.

.. toctree::
    :titlesonly:

    unit_testing/hoot
    unit_testing/web_helpers
    unit_testing/mock_server
