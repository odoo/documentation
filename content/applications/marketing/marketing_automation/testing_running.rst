======================
Test and run campaigns
======================

Before launching an automated marketing campaign, test the workflows to ensure they function as
expected and reach the intended audiences. This documentation explains how to test and run marketing
campaigns.

.. note::
   Campaign tests are intended for production databases. Duplicate and trial databases have limited
   email sending capabilities.

.. _marketing_automation/testing_running/test:

Test campaigns
==============

To test a marketing campaign, open the **Marketing Automation** app, and select the desired
campaign. Ensure that all :doc:`activities <workflow_activities>` are configured in the workflow.

Click the :guilabel:`Test` button at the top. Then, in the *Launch a test* pop-up window, create or
select a contact from the drop-down menu.

.. note::
   A marketing campaign can be tested on only *one* contact at a time.

Once a contact is selected, click :guilabel:`Launch`. This opens the campaign test view, displaying
the entire workflow for the chosen participant.

Individually run a step by clicking the :guilabel:`Run` button on the specific step. The tested step
is then labeled with the date and time of completion and highlighted with its corresponding status:

- *Green*: Completed successfully.
- *Orange*: Scheduled or waiting.
- *Red*: Canceled or error.

To stop a test before all the workflow activities are completed, click the :guilabel:`Stop` button
at the top of the page.

.. image:: testing_running/test-view.png
   :alt: Test view in a Marketing Automation campaign test.

View traces for each step
-------------------------

View detailed information about each completed step by clicking its corresponding node. A *Marketing
Trace* pop-up window loads and displays the following data:

- :guilabel:`Activity`: The selected step.
- :guilabel:`Schedule Date`: The step's date and time of scheduling or completion.
- :guilabel:`Participant`: The selected test participant.
- :guilabel:`State`: The status of the step.
- :guilabel:`Mass Mailing Statistics`: A table of messages linked to this step. This table is
  **only** filled for *Email*, *SMS*, and *WhatsApp* steps.

.. note::
   The *Marketing Trace* window is intended for checking step information. It is **not** recommended
   to modify any fields.

.. image:: testing_running/marketing-trace.png
   :alt: Marketing trace in a Marketing Automation test campaign.

.. _marketing_automation/testing_running/run:

Run campaigns
=============

To run a campaign, navigate to :menuselection:`Marketing Automation app --> Campaigns` and select
the desired campaign to run. At the top of the campaign page, click :guilabel:`Start` to launch the
campaign.

.. note::
   Be aware that participants who have already gone through an entire campaign in its original state
   **can** be reintroduced into the newly-modified campaign, and new traces could be created for
   them.

As mailings and actions are triggered in the workflow, data related to each activity appears in
their corresponding nodes. Real-time engagement metrics are also shown in the smart buttons at the
top of the campaign.

To stop the campaign, click :guilabel:`Stop`.

.. seealso::
   - :doc:`Campaign configuration <../marketing_automation>`
   - :doc:`target_audience`
   - :doc:`workflow_activities`
