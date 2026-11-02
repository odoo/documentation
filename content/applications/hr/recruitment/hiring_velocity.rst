===============
Hiring velocity
===============

The *Hiring Velocity* report provides information on how long applicants stay in each stage of the
recruitment process. This is important, as every job position has specific :ref:`hiring process
details <recruitment/new_job/hiring-process>` that state the length of time applicants should expect
to wait between specific stages.

Knowing how long applicants remain in each stage can help highlight possible bottlenecks. Analyzing
this data allows the recruitment team to assess each stage, identify any issues, and pivot their
strategies to move applicants through each stage, within the expected time interval.

Hiring velocity report
======================

To access the *Hiring Velocity* report, navigate to :menuselection:`Recruitment app --> Reporting
--> Hiring Velocity`. The report displays data for all job positions, with the stages populating the
x-axis, and the :guilabel:`Average Days in Stage` populating the y-axis, in a default
:icon:`fa-line-chart` :guilabel:`(Line Chart)`. The time spent in each stage is computed from the
dates each applicant entered and left the stage.

The default filter is :guilabel:`Last 365 Days Applicant`, showing information for the last 365
days.

Hover over a stage in the line chart to reveal a popover window listing all the job positions within
it, and the average number of days each job position sat in each stage.

For a different view of the information in the *Hiring Velocity* report, click the
:icon:`fa-bar-chart` :guilabel:`(Bar Chart)` icon above the chart. This displays all the information
in a bar chart.

In both views, it is easy to visualize the differences between the job positions, regarding how
long applicants stay in each stage. From these views, recruiters can determine which job positions
have delays or bottlenecks at certain stages.

.. image:: hiring_velocity/bar-chart.png
   :alt: The default line chart of the hiring velocity report.

Use case: comparing times by month
----------------------------------

With the *Hiring Velocity* report, it is possible to see if there are certain months where
applicants take longer to be moved through the pipeline. To view this data, switch to the pivot
table view by clicking the :icon:`oi-view-pivot` :guilabel:`(Pivot)` icon in the corner.

This presents the data in a detailed pivot table, with the rows representing the different job
positions, and the columns representing the stages. The :guilabel:`Average Days in Stage` populates
the various boxes, and the last column displays the average for all stages.

.. note::
   If a field is empty, it indicates no applicant has been in that stage. Instead, all applicants
   moved from a previous stage without being placed in the stage with an empty field.

.. image:: hiring_velocity/time-pivot.png
   :alt: The pivot table view of the Velocity Analysis report.

Click :icon:`fa-minus-square-o` :guilabel:`Total` above the job position rows to collapse the
information. Next, click :icon:`fa-plus-square` :guilabel:`Total` again, revealing a drop-down menu.
Click :guilabel:`Custom Group` :icon:`fa-caret-down` at the bottom of the list, revealing further
grouping options. Click :guilabel:`Start Date` from the expanded list.

After doing so, the data presented is grouped by the month in which the applicants entered each
stage, while the columns still display the :guilabel:`Average Days in Stage` for each stage.

Compare the averages of the different months to identify the periods where applicants spent the
longest time in each stage.

While this report does not display the reasons applicants stayed in the various stages for these
lengths of time, it can be helpful to know when delays occur.

.. seealso::
   :doc:`Essentials reporting documentation <../../essentials/reporting>`
