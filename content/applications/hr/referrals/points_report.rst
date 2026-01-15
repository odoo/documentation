=============
Points report
=============

The points report in the **Referrals** app allows managers to view the total :doc:`point <points>`
contribution from employees, which can provide insight into the most effective referrers.

.. important::
   Only users with *Administrator* rights for the **Recruitment** app have access to the reporting
   features in the **Referrals** app.

To access the *Points* report, navigate to :menuselection:`Referrals app --> Reporting --> Points`.
This loads the :guilabel:`Points` report in a default list view, grouped by :guilabel:`User`, with
the users listed in alphabetical order, by first name.

All rows are collapsed by default, displaying the :guilabel:`User` name, the total number of
individual entries logged for the user, and the total :guilabel:`Points` they have earned.

Click on a row to expand the entries for that user. Each line displays the :guilabel:`Applicant`,
the :guilabel:`Stage` the applicant reached, and the corresponding :guilabel:`Points` earned for
the stage. The displayed :guilabel:`Points` appear in green if the user earned points for the stage,
and appear in black if no points are received for the stage.

.. note::
   Stages that do not earn referral points still appear on the list, if the applicant reached that
   stage. In this example, applicants who reach the :guilabel:`New` stage do *not* receive any
   referral points, and zero (:guilabel:`0`) appears in the :guilabel:`Points` column, in black.

   .. image:: points_report/points-report.png
      :alt: Individual points earned by the user Bob Smith for all their referrals.

Use case: most effective referrers
==================================

One way to use the :guilabel:`Points` report is to assess which users are referring successful
applicants who become employees. This is done by modifying the :guilabel:`Points` report to show
only points earned from the :guilabel:`Contract Signed` stage.

To view only the successfully hired referrals, navigate to :menuselection:`Referrals app -->
Reporting --> Points`. Click into the search box, and click :guilabel:`Custom Filter...` in the
:icon:`fa-filter` :guilabel:`Filters` column. This opens a *Custom Filter* pop-up window.

By default, the first field is populated with :guilabel:`Stage`, and the middle field is populated
with :guilabel:`is equal to`. Using the drop-down menu in the last field, select :guilabel:`Contract
Signed`, then click the :guilabel:`Search` button.

The :guilabel:`Points` report now displays only the successful referrals who were hired. The user
with both the highest number of entries next to their name, and the highest number of points in the
:guilabel:`Points`, is the most successful referrer.

.. example::
   In this example, it can be determined that :guilabel:`Joe Plumb` is the most successful referrer,
   with three successful referrals, for a total of :guilabel:`150` points.

   .. image:: points_report/successful.png
      :alt: The points report filtered to only show points earned from the Contract Signed stage.
