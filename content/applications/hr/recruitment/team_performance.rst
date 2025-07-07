================
Team performance
================

The *Team Performance* report in the **Recruitment** app shows how many applicants each recruiter is
managing.

This information is determined by the individuals populating the :ref:`Recruiter
<recruitment/applicant-details>` field on each applicant form.

Open report
===========

To access the *Team Performance* report, navigate to :menuselection:`Recruitment app --> Reporting
--> Team Performance`.

The number of :guilabel:`In Progress`, :guilabel:`Hired`, and :guilabel:`Refused` applicants for
each recruiter is displayed in a default :icon:`fa-area-chart` :guilabel:`(Graph)` view.

The information shown is for the :icon:`fa-filter` :guilabel:`Last 365 Days Applicant` default
filter, as displayed in the search bar.

Hover the cursor over any column to view a popover window, displaying the specific details for that
column.

.. image:: team_performance/team-performance.png
   :alt: The default bar chart of the team performance report.

Pivot table view
----------------

For a more detailed view of the information in the :guilabel:`Team Performance` report, click the
:icon:`oi-view-pivot` :guilabel:`(Pivot)` icon in the top-right corner. This displays all the
information in a pivot table.

In this view, the job positions populate the rows, while the columns populate the number of
applicants. The first column, :guilabel:`Applicant`, is the total number of applicants across all
stages for that job position. The subsequent columns display the total applicants that have been
:guilabel:`Hired`, :guilabel:`Refused`, and :guilabel:`In Progress` for each job position.

The displayed information can be modified, if desired.

In this example, there are 20 total applicants. Out of those 20, eight have been hired, five have
been refused, and seven are still in the recruitment process.

From the data presented, the :guilabel:`Experienced Developer` job position is the most successful.
This job position has one of the highest number of total applicants (tied with the
:guilabel:`Marketing and Community Manager` position), as well as the most hires.

This pivot table also shows that the :guilabel:`Quality Control Inspector` position is the hardest
to fill, as it has the fewest total applicants.

.. image:: team_performance/team-perf-pivot.png
   :alt: The detailed pivot table view.

Use case: recruiter performance over time
=========================================

One way to modify this report is to show how recruiters are performing over time. To show this
information, begin with the :guilabel:`Team Performance` report in the :icon:`oi-view-pivot`
:guilabel:`(Pivot)` view.

Next, click the :icon:`fa-caret-down` :guilabel:`(down arrow)` in the search bar, revealing a
drop-down menu. Click :guilabel:`Add Custom Group` :icon:`fa-caret-down` at the bottom of the
:icon:`oi-group` :guilabel:`Group By` column, then click :guilabel:`Recruiter`. Click away from the
drop-down menu to close it. Now, each row on the table represents a recruiter.

.. image:: team_performance/by-recruiter.png
   :alt: The pivot table now displaying the recruiters in the rows.

To compare the team's performance over different time periods, click the :icon:`fa-caret-down`
:guilabel:`(down arrow)` in the search bar. Click :guilabel:`Application Date` :icon:`fa-caret-down`
in the :icon:`fa-filter` :guilabel:`Filters` column, revealing various time periods to select.

In this example, the desired data is the comparison between the team's performance in the third
quarter (June - August) and the second quarter (April - July). To do so, click :guilabel:`Q3`. Once
clicked, the current year is also ticked. In this example, it is :guilabel:`2025`.

After making this selection, a :icon:`fa-adjust` :guilabel:`Comparison` column appears. Click
:guilabel:`Start Date: Previous Period` to compare the third quarter with the second quarter, for
the various recruiters.

.. image:: team_performance/compare.png
   :alt: A comparison table of recruiter totals of Q2 and Q3.

From this report, some things can be extrapolated: the total number of applicants, the number of
hired applicants, the number of refused applicants, and the number of applicants still in the
recruitment pipeline all increased.

Additionally, :guilabel:`Maggie Davidsons` had the highest increase in number of hired applicants
during the third quarter, while their number of refused applicants went down.
