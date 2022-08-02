==============================
Testing and running a campaign
==============================

Odoo gives users the ability to test marketing campaigns (and mailings) before officially running
them.

First, open the :guilabel:`Marketing Automation` application and click on a campaign. Make sure
the campaign already has activities configured on it (or build a campaign by following the
directions here on :doc:`this documentation <workflow_activities>`). To start a test, click the
:guilabel:`Launch a Test` button at the top of the template form.

.. image:: testing_running/launch-test.png
   :align: center
   :alt: Launch a test button in Odoo Marketing Automation.

When clicked, a pop-up window appears. In the dropdown field choose a specific record to run the
test on, or create a brand new record by clicking the :guilabel:`Search More...` link at the bottom
of the dropdown menu, and then click the :guilabel:`Create` button.

Once the record is selected, click :guilabel:`Continue`, and Odoo will redirect to the campaign
test page.

.. image:: testing_running/test-screen.png
   :align: center
   :alt: Test screen in Odoo Marketing Automation.

Here, the name of the :guilabel:`Record` being tested is visible, along with the precise time this
test workflow was started. Beneath that is the first activity (or activities) in the workflow.

To start a test, click the :guilabel:`Run` icon beside the first activity in the workflow. When
clicked, the page will reload, and Odoo will show the various results (and analytics) connected to
that specific activity.

.. image:: testing_running/workflow-test-progress.png
   :align: center
   :alt: Workflow test progress in Odoo Marketing Automation.

Once all the workflow activities are completed, the test will end and be moved to the
:guilabel:`Completed` stage. To stop a test before all the workflow activities are completed, click
the :guilabel:`Stop` button.
