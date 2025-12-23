:orphan:

=========================
Testing Early Line Breaks
=========================

.. TRIGGERED: line XX - consider moving "Run" to line XX

.. This file contains test cases for the early line break checker.
.. Run with: ``echo "applications/general/companies/digest_emails-test.rst\n100" | make review``

This file contains test cases for the early line break checker. Run with: ``echo
"applications/general/companies/digest_emails-test.rst\n100" | make review``

Cases that SHOULD be caught
===========================

Basic early break
-----------------

.. TRIGGERED: line XX - consider moving "word" to line XX

.. This is a line that ends way too early and the next
.. word could easily fit on the previous line here.

This is a line that ends way too early and the next word could easily fit on the previous line here.

.. TRIGGERED: line XX - consider moving "yet" to line XX

.. This sentence has plenty of room left on this line and
.. yet we broke it early for no good reason at all.

This sentence has plenty of room left on this line and yet we broke it early for no good reason at
all.

Substitution reference on next line
-----------------------------------

.. NOT TRIGGERED - ❌ BUG: |clock|. starts with | which is incorrectly skipped
.. The checker skips next lines starting with | (meant for tables) but |clock| is a substitution

If any activities are scheduled, the number of activities appears in a red bubble on the
|clock|.

.. TRIGGERED: line XX - consider moving "menu." to line XX

.. Click the |menu| icon to open the
.. menu.

Click the |menu| icon to open the menu.

.. TRIGGERED: line XX - consider moving "success." to line XX

.. The |check| symbol indicates
.. success.

The |check| symbol indicates success.

Inline literals and code
------------------------

.. TRIGGERED: line XX - consider moving "options." to line XX

.. You can use the ``--help`` flag to see all
.. options.

You can use the ``--help`` flag to see all options.

.. TRIGGERED: line XX - consider moving "start." to line XX

.. Run the command ``python manage.py`` to
.. start.

Run the command ``python manage.py`` to start.

Short words on next line
------------------------

.. TRIGGERED: line XX - consider moving "a" to line XX

.. This is a complete sentence that has room for
.. a few more words.

This is a complete sentence that has room for a few more words.

.. TRIGGERED: line XX - consider moving "done." to line XX

.. The configuration is
.. done.

The configuration is done.

.. TRIGGERED: line XX - consider moving "ready." to line XX

.. This feature is now completely
.. ready.

This feature is now completely ready.

Cross-references on next line
-----------------------------

.. TRIGGERED: line XX - consider moving ":doc:`digest_emails`." to line XX

.. For more information, see
.. :doc:`digest_emails`.

For more information, see :doc:`digest_emails`.

.. TRIGGERED: line XX - consider moving ":ref:`setup-guide`." to line XX

.. Read the full guide at
.. :ref:`setup-guide`.

Read the full guide at :ref:`setup-guide`.

Cases that should NOT be caught
===============================

Directives
----------

.. TRIGGERED - ❌ BUG?: line XX - consider moving "have" to line XX

.. note::
..    This is a note directive and should not trigger the checker because directives
..    have special formatting requirements.

   This is a note directive and should not trigger the checker because directives have special
   formatting requirements.

.. TRIGGERED - ❌ BUG?: line XX - consider moving "be" to line XX

.. warning::
..    Same with warnings, they should
..    be skipped.

   Same with warnings, they should be skipped.

Bullet lists (correctly skipped)
--------------------------------

.. NOT TRIGGERED - Correctly skipped because lines start with "- "

Here is a list:

- First item in the list
- Second item that continues
- Third item here

And numbered:

.. NOT TRIGGERED - Correctly skipped because lines start with "#. "

#. First numbered item
#. Second numbered item
#. Third numbered item

Tables (correctly skipped)
--------------------------

.. NOT TRIGGERED - Correctly skipped because lines start with + or |

+------------+------------+
| Column 1   | Column 2   |
+============+============+
| Value A    | Value B    |
+------------+------------+
| Value C    | Value D    |
+------------+------------+

Lines at or near max length
---------------------------

.. NOT TRIGGERED - Line is exactly 100 chars, no room for next word

This line is exactly one hundred characters long so there is no room for more words to fit here now.

.. NOT TRIGGERED - Line is 99 chars, only 1 char of room

This line is ninety-nine characters long so there is almost no room for any more words to fit here.

Edge cases to verify
====================

Indented content after paragraph
--------------------------------

.. TRIGGERED: line XX - consider moving "word." to line XX

.. This paragraph ends with a short
.. word.

This paragraph ends with a short word.

.. ❌ BUG NOT TRIGGERED: line XX - consider moving "correctly" to line XX
.. This indented block continuation is not being checked (may or may not be desired)

   This is indented continuation text that follows the paragraph and should be handled
   correctly by the checker.

Multiple substitutions
----------------------

.. ❌ BUG NOT TRIGGERED -  |save|. starts with | which is incorrectly skipped

Click |menu| then |settings| then
|save|.


.. TRIGGERED: line XX - consider moving "the" to line XX

.. The |icon1| and |icon2| appear in
.. the toolbar.

The |icon1| and |icon2| appear in the toolbar.

Role with long content
----------------------

.. TRIGGERED: line XX - consider moving "details." to line XX

.. See :menuselection:`Settings --> General --> Configuration --> Advanced Options` for
.. details.

See :menuselection:`Settings --> General --> Configuration --> Advanced Options` for details.

.. TRIGGERED: line 136 - consider moving "finish." to line 136

.. Use :guilabel:`Save and Close` to
.. finish.

Use :guilabel:`Save and Close` to finish.

Mixed formatting
----------------

.. TRIGGERED: line XX - consider moving "documentation" to line XX

.. Use the **bold text** and *italic* formatting along with ``code`` to make your
.. documentation clear.

Use the **bold text** and *italic* formatting along with ``code`` to make your documentation clear.

Lines with URLs
---------------

.. TRIGGERED: line XX - consider moving "information." to line XX

.. Visit the website at https://www.example.com/very/long/path/to/resource for more
.. information.

Lines with URLs
---------------

.. TRIGGERED: line XX - consider moving "information." to line XX

Visit the website at https://www.example.com/very/long/path/to/resource for more information.

Empty and whitespace handling
-----------------------------

.. TRIGGERED: line XX - consider moving "and" to line XX

.. This line ends with trailing spaces
.. and the next line continues here.

This line ends with trailing spaces and the next line continues here.

.. TRIGGERED: line XX - consider moving "normally." to line XX



.. Two blank lines above should be handled correctly and this text should be checked
.. normally.



Two blank lines above should be handled correctly and this text should be checked normally.

.. Substitution definitions (these are directives, not checked)

.. |clock| image:: /applications/essentials/activities/clock.png
   :alt: Clock icon
.. |menu| image:: /applications/essentials/activities/menu.png
   :alt: Menu icon
.. |check| image:: /applications/essentials/activities/check.png
   :alt: Check icon
.. |settings| image:: /applications/essentials/activities/settings.png
   :alt: Settings icon
.. |save| image:: /applications/essentials/activities/save.png
   :alt: Save icon
.. |icon1| image:: /applications/essentials/activities/icon1.png
   :alt: Icon 1
.. |icon2| image:: /applications/essentials/activities/icon2.png
   :alt: Icon 2
