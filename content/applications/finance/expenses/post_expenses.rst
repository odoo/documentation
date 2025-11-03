=============
Post expenses
=============

Once an expense report is :doc:`approved <../expenses/approve_expenses>`, the next step is to post
the expenses to the proper accounting journal.

.. important::
   To post expense reports to an accounting journal, the user **must** have the following
   :doc:`access rights <../../general/users/access_rights>`:

   - Accounting: *Accountant* or *Adviser*
   - Expenses: *Manager*

Only expense reports with an *Approved* status can post the expenses to a journal. To view all
expense reports, navigate to :menuselection:`Expenses app --> Expense Reports`. Next, to view
**only** approved expense reports that need to be posted, adjust the filters on the left side so
only the :guilabel:`Approved` checkbox is ticked.

.. image:: post_expenses/approved-expenses.png
   :alt: View reports to post by clicking on expense reports, then reports to post.

.. note::
   The default :guilabel:`All Reports` dashboard displays all expense reports that are not
   :guilabel:`Refused`.

Expense reports can be posted to accounting journals in two ways: :ref:`individually
<expenses/post-individual>` or :ref:`in bulk <expenses/post-multiple>`.

.. _expenses/post-individual:

Post individual reports
-----------------------

To post an individual report, navigate to :menuselection:`Expenses app --> Expense Reports`, and
click on an individual report with a :guilabel:`Status` of :guilabel:`Approved`, to view the report
form. In this view, several options are presented: :guilabel:`Post Journal Entries`,
:guilabel:`Report In Next Payslip`, :guilabel:`Refuse`, or :guilabel:`Reset to Draft`.

Click :guilabel:`Post Journal Entries` to post the report. The accounting journal the expenses are
posted to is listed in the :guilabel:`Journal` field of the expense report.

After posting the expenses to an accounting journal, a :guilabel:`Journal Entry` smart button
appears at the top of the screen. Click the :guilabel:`Journal Entry` smart button, and the details
for the journal entry appear, with a status of :guilabel:`Posted`.

.. image:: post_expenses/post-one.png
   :alt: A single expense report to be approved.

.. _expenses/post-multiple:

Post multiple reports
---------------------

To post multiple expense reports at once, navigate to :menuselection:`Expenses app --> Expense
Reports` to view a list of expense reports. Next, select the reports to approve by ticking the
checkbox next to each report being approved.

.. note::
   Only expense reports with a status of :guilabel:`Approved` are able to post the expenses to an
   accounting journal. If an expense report is selected that **cannot** be posted, such as an
   unapproved report, or the report has already been posted to a journal, the :guilabel:`Post
   Entries` button is **not** visible.

.. tip::
   To select **only** approved expense reports, adjust the filters on the left side, so that only
   the :guilabel:`Approved` checkbox is ticked. Next, tick the checkbox next to the
   :guilabel:`Employee` column title to select **all** the :guilabel:`Approved` reports in the list
   at once.

Next, click the :guilabel:`Post Entries` button.

.. image:: post_expenses/post-entries.png
   :alt: Post multiple reports at a time from the Expense Reports view, with the Approved filter.
