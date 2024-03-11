=========
Hong Kong
=========

Configuration
=============
Please install the 🇭🇰 Hong Kong fiscal localization module to get the latest features of HK 
Localization. 

.. image:: hong_kong/l10n-hk-modules.png
   :alt: Hong Kong localization modules

.. note::
   If you wish to use the HK Payroll features, please install the module under the :ref:`HK Payroll <hong_kong/payroll>`.

Add FPS QR codes to invoices
============================

:abbr:`FPS (Faster Payment System)` is a payment service platform that allows customers to make
instant domestic payments to individuals and merchants in Hong Kong dollars or Renminbi via online
and mobile banking.

Activate QR codes
-----------------

Go to :menuselection:`Accounting --> Configuration --> Settings`. Under the :guilabel:`Customer
Payments` section, activate the :guilabel:`QR Codes` feature.

FPS bank account configuration
------------------------------

Go to :menuselection:`Contacts --> Configuration --> Bank Accounts` and select the bank account for
which you want to activate FPS. Set the :guilabel:`Proxy Type` and fill in the :guilabel:`Proxy
Value` field depending on the type you chose.

.. important::
   - The account holder's country must be set to Hong Kong on its contact form.
   - You could also include the invoice number in the QR code by checking the :guilabel:`Include
     Reference` checkbox.

.. image:: hong_kong/hk-fps-bank-setting.png
   :alt: FPS bank account configuration

.. seealso::
   :doc:`../accounting/bank`

Bank journal configuration
--------------------------

Go to :menuselection:`Accounting --> Configuration --> Journals`, open the bank journal, then fill
out the :guilabel:`Account Number` and :guilabel:`Bank` under the :guilabel:`Journal Entries` tab.

.. image:: hong_kong/hk-bank-account-journal-setting.png
   :alt: Bank Account's journal configuration

Issue invoices with FPS QR codes
--------------------------------

When creating a new invoice, open the :guilabel:`Other Info` tab and set the :guilabel:`Payment
QR-code` option to *EMV Merchant-Presented QR-code*.

.. image:: hong_kong/hk-qr-code-invoice-setting.png
   :alt: Select EMV Merchant-Presented QR-code option

Ensure that the :guilabel:`Recipient Bank` is the one you configured, as Odoo uses this field to
generate the FPS QR code.

.. _hong_kong/payroll:

HK Payroll
==========
.. important::
   Please ensure the 🇭🇰 HK Payroll module is installed before you begin. 

.. image:: hong_kong/hk-payroll-module.png
   :alt: HK Payroll module

Create your employees
---------------------

Go to the **Employees** app and click :guilabel:`Create`.

Here are a list of supplementary fields to input before starting with HK Payroll:

Under the **Work Information** tab:

- :guilabel:`Working Hours`: You need to select HK Standard 40 hours/week.

Under the **Private Information** tab:

- :guilabel:`Surname, Given Name, Name in Chinese`
- :guilabel:`Identification No`
- :guilabel:`Gender`
- :guilabel:`Private Address`
- :guilabel:`Bank Account Number`: Employee's bank account number
- :guilabel:`Current Rental`: Employee's rental records (if rental allowance is applicable)
- :guilabel:`Autopay Type`: BBAN, SVID, EMAL, etc
- :guilabel:`Autopay Reference`

.. note::
   For the **Bank Account Number**, set the **Send Money** field to **Trusted**.

.. note::
   For the **Current Rental**, set the Current Rental's **status** to **Running**.

Under the **HR Settings** tab:

- :guilabel:`Volunteer Contribution Option`: You may select either :abbr:`MC (Mandatory Contribution)`, Fixed % :abbr:`VC (Voluntary Contribution)` or Cap 5% VC (max-out at 5%)
- :guilabel:`MPF Manulife Account`: Account number if applicable. 

Manage your contracts
---------------------
Once you have created your employee, proceed to the :guilabel:`Contracts` smart button on the 
employee record or by going to :menuselection:`Employees --> Employees --> Contracts`.

.. note::
   Only **one** contract can be active simultaneously per employee, but an employee can be assigned
   consecutive contracts during their employment.

Here are several key information to take note during contract setup:

- :guilabel:`Working Schedule`: Set as HK Standard 40 hours/week (from employee record)
- :guilabel:`Salary Structue Type`: Set as CAP57: Hong Kong Employee. 
- :guilabel:`Work Entry Source`: You may choose between **Working Schedule**, **Attendances** or **Planning**. This field determines how the work entries are accounted for in the payslip.
   
   - :guilabel:`Working Schedule`: The work entries are generated automatically based on the employee's Working Schedule.
   - :guilabel:`Attendances`: The work entries will be generated based on the check-in/-out period logged on the Attendances app. 
   - :guilabel:`Planning`: The work entries are generated from planning shifts only.

Under the **Salary Information** tab: 

- :guilabel:`Wage Type`: You may select **Fixed Wage** for Full-time or Part-time employees or **Hourly Wage** for employees who are paid hourly. 
- :guilabel:`Wage`: Monthly or Hourly depending on the company.
- :guilabel:`Internet Subscription`: This is an **optional** field to provide additional internet allowance on top of the current salary package.

  .. important::
     Timesheets do not impact work entries in Odoo.

Once all information has been setup, set the contract status to **Running**.     

.. image:: hong_kong/hk-contract.png
   :alt: Hong Kong employment contract

.. _hong_kong/running_payslips:

Running your payslips
---------------------
Once the employee and contracts are setup, you can proceed with the creation of the payslip in the 
**Payroll** app. 

Odoo provides **four** different salary structures under CAP57 Regulation:

#. :guilabel:`Employees Monthly Pay`: To process the monthly employee salary.
#. :guilabel:`Payment in Lieu of Notice`: To process final payment upon contract termination.
#. :guilabel:`Long Service Payment`: Applicable to employees with more than 5 years of service upon 
   contract termination.
#. :guilabel:`Severance Payment`: Applicable to employees with more than 2 years of service upon 
   contract termination.

Before running the payslips, you may adjust the accounts used in the salary rule by navigating to
:menuselection:`Payroll --> Configurations --> Rules`. 

.. image:: hong_kong/hk-salary-rules.png
   :alt: Hong Kong Salary Rules

Odoo can create pay runs in **two** ways: via **individual** or via **batch** payslips.

.. _hong_kong/batch_payslips:

Batch payslips
~~~~~~~~~~~~~~
Go to :menuselection:`Payroll --> Payslips --> Batches`
This method of payslip generation is used for recurring payments as you can manage the payslip for 
multiple employees at once. 

#. Click on :guilabel:`New`.
#. Provide a Batch Name (e.g, `2024 – Jan`) and Period (e.g. 01/01/2024 - 01/31/2024)
#. Click on :guilabel:`Generate Payslips`.
#. You can choose which **Salary Structure** you wish to use for this batch. The department filter 
   allows you to designate the batch for a specific group of employees.
#. Click on :guilabel:`Generate`.
#. Now you can see the :guilabel:`Payslips` smart button created automatically.

.. image:: hong_kong/hk-batch-payslips.png
   :alt: Hong Kong Batch Payslips

Once you are satisfied with the Payslips, click :guilabel:`Create Draft entry` to generate a draft 
journal entry found in the :guilabel:`Other Info` tab of each payslips. 

Individual payslips
~~~~~~~~~~~~~~~~~~~
Go to :menuselection:`Payroll --> Payslips --> All Payslips`
This method of payslip generation is commonly used to handle one-off payments (e.g. Payment in Lieu
of Notice, Long Service Payment, Severance Payment).

#. Click on :guilabel:`New`.
#. Select an :guilabel:`Employee`; their :guilabel:`Contract` will be filled out automatically
#. Add a pay :guilabel:`Period`
#. Select a salary :guilabel:`Structure` (e.g. Employees Monthly Pay)
#. The **Worked Days** tab will automatically compute the worked days/hours and time-off leaves
   that are applicable.
#. You may also choose to add additional payslip items (e.g. Commissions, Deductions) under the 
   **Other Inputs** section.
#. Click on :guilabel:`Compute Sheet` button to generate the payslip lines. This button will update
   the :guilabel:`Salary Computation` tab. 

.. image:: hong_kong/hk-individual-payslip.png
   :alt: Hong Kong Individual Payslip

.. note::
   If you have amended the work entry for an employee, you will need to go to the **gear icon (⚙)**
   and click on **Recompute Whole Sheet** to refresh the payslip's **Worked Day & Inputs** section. 

The :guilabel:`Salary Computation` tab will show the detailed breakdown of the computation based on 
the salary rules configured for each structure type. 

.. image:: hong_kong/hk-salary-computation.png
   :alt: Hong Kong Salary computation

#. **Rent Allowance**: Amount derived from the employee's active rental record.
#. **Basic salary**: Amount from which tax-deductible lines can be subtracted minus rental 
   allowance. 
#. **713 Gross**: Amount after considering allowances/deductions.
#. **MPF Gross**
#. **Employee Mandatory Contribution**: Employee MPF Contribution
#. **Employer Mandatory Contribution**: Employer MPF Contribution
#. **Gross**
#. **Net Salary**: Final amount to be paid to the employee
#. **Monthly End Autopay**
#. **Other Input Types**: Depends on whether there are additional items to be included in the payslip. 

.. note::
   Do note there will be no MPF contribution for the first month. Both **employee** and **employer**
   contribution starts on second month and the **employer** contribution for the second month will 
   include back-pay of the first month. 

Under the :guilabel:`Other Inputs` tab at the bottom of payslip, there are additional manual input 
types that are specific to HK Payroll:

- :guilabel:`Back Pay`
- :guilabel:`Commission`
- :guilabel:`Global Deduction`
- :guilabel:`Global Reimbursement`
- :guilabel:`Referral Fee`
- :guilabel:`Moving Daily Wage`: if you wish to override the Average Daily Wage (ADW) for this month.
- :guilabel:`Skip Rent Allowance`
- :guilabel:`Custom Average Monthly Salary`: only affecting end-of-year payments. 


Once you are satisfied with the Payslips, click :guilabel:`Create Draft entry` to generate a draft 
journal entry found in the :guilabel:`Other Info` tab of the payslip. 

Paying your employees
---------------------
Once the draft journal entries have been posted, the company can now pay the employees.
The user can choose between **two** different **payment methods**. 

- From the employee's payslip (:menuselection:`Payroll --> Payslips`), once the payslip's journal
  entry has been posted, click :guilabel:`Register Payment`. The process is the same as
  :doc:`paying vendor bills <../accounting/payments>`: select the desired bank journal and payment
  method, then later reconcile the payment with the corresponding bank statement.

- For batch payments, once you have confirmed all draft journal entries from the batch, you may 
  click :guilabel:`Mark as Paid` to post the payment journal entry. You may then create a manual 
  payment in the **Accounting** app and reconcile accordingly. 

Attendances & Hourly Wage
-------------------------
You may setup the contract as follows for employees who are based on hourly-wage contract:

.. note::
   Make sure the employee contract is using **Attendance** as the Work Entry Source and the Wage 
   Type is set to **Hourly Wage**. 

#. Go to **Attendance** app.
#. The employee can check-in/out via the kiosk mode. 
#. In the **Payroll** app, you can review the attendance work entries generated from 
   :menuselection:`Payroll --> Work Entries`. 
#. Next, you can generate the :ref:`payslips <hong_kong/running_payslips>` and process payment.

.. image:: hong_kong/hk-attendance-work-entry.png
   :alt: Hong Kong Attendance Work Entry

.. image:: hong_kong/hk-attendance-payslip.png
   :alt: Hong Kong Attendance Payslip

Time-Off with Payroll
---------------------
The work entry types and time-off types are fully integrated between the **Time-off** and 
**Payroll** app. There are several time-off types and work entry types specific to HK which are 
installed automatically along with the **HK-Payroll** module. 

There are two checkboxes to be considered when setting up the work entry type:

- :guilabel:`Use 713`: This leave type to be included as part of 713 computation.
- :guilabel:`Non-full pay`: 80% of the :abbr:`ADW (Average Daily Wage)`. 

.. image:: hong_kong/hk-work-entry-type.png
   :alt: Hong Kong Work Entry Type

Understanding 713 Ordinance
---------------------------
Our HK Payroll module is compliant with 713 Ordinance which relates to the 
:abbr:`ADW (Average Daily Wage)` computation to ensure fair compensation for employees. 

The ADW computation is as follows:

.. image:: hong_kong/hk-adw.png
   :alt: Hong Kong ADW Formula

.. note::
   For 418 compliance, there is no automated allocation of the **Statutory Holiday**
   entitlement to the employees. As soon as your employees meets the 418 requirements, you may 
   manually allocate the leaves via the **Time-Off** app. 

You may generate the following payslips (ensure payslip status is **Done**) to validate the outcome:

.. grid-table::

+----------------+------+-----------+------------+-----------+----------------+---------------+
|     Period     | Days |    Wage   | Commission |   Total   |       ADW      |  Leave Value  |
+----------------+------+-----------+------------+-----------+----------------+---------------+
|       Jan      |  31  |   $20200  |     $0     |   $20200  |    $651.61     |      N/A      |
|                |      |           |            |           |   ($20200/31)  |               |
+----------------+------+-----------+------------+-----------+----------------+---------------+
|       Feb      |  28  |   $20200  |    $5000   |   $25200  |    $769.49     |      N/A      |
|                |      |           |            |           |   ($45400/59)  |               |
+----------------+------+-----------+------------+-----------+----------------+---------------+
|       Mar      |  31  | $20324.33 |     $0     | $20324.33 |    $730.27     |    $769.49    |
|   (1 day AL)   |      |           |            |           | ($65724.33/90) |               |
+----------------+------+-----------+------------+-----------+----------------+---------------+
|       Apr      |  30  | $20117.56 |     $0     |     -     |        -       |    $584.22    |
| (1 day 80% SL) |      |           |            |           |                | ($730.27*0.8) |
+----------------+------+-----------+------------+-----------+----------------+---------------+

Here is an example demonstrating the 713 logic:

- :guilabel:`Jan`: Generate a payslip with a monthly wage of $20200. The **ADW** is always computed on a cumulative basis of the trailing 12-months. 
- :guilabel:`Feb`: Generate a similar payslip but add an **Other Input Type** for the Commission.
- :guilabel:`Mar`: We will apply for **one** full-paid annual leave in March. The salary compensation for the leave taken is based on ADW thus far.

.. image:: hong_kong/hk-march-713.png
   :alt: Hong Kong March 713

- :guilabel:`Apr`: We will apply for a 1-day non-full pay leave in April. Since this is a non-full pay leave, the ADW is computed accordingly.
.. image:: hong_kong/hk-apr-713.png
   :alt: Hong Kong April 713

.. note::
   The value of ADW is computed in the backend and not be visible to the user. 

.. seealso::
   - `HK 713 Ordinance <https://www.labour.gov.hk/eng/public/wcp/ConciseGuide/Appendix1.pdf>`_
   - `HK 418 Ordinance <https://www.workstem.com/hk/en/blog/418-regulations/>`_

Generate your reports
---------------------
Before generating the below reports, remember to setup the following in 
:menuselection:`Settings --> Payroll --> Accounting/HK Localization`. 

.. image:: hong_kong/hk-report-setup.png
   :alt: Hong Kong Payroll Settings

IRD Report
~~~~~~~~~~
There are a total of **four** IRD reports available:

- :guilabel:`IR56B`: Employer's Return of Remuneration and Pensions
- :guilabel:`IR56E`: Notification of Commencement of Employment
- :guilabel:`IR56F`: Notification of Ceasation of Employment (remaining in HK)
- :guilabel:`IR56G`: Notification of Ceasation of Employment (departing from HK permanently)

Go to :menuselection:`Payroll --> Reporting --> IR56B/E/F/G`:

#. Click on :guilabel:`New`.
#. Fill in the relevant information for the IRD report.
#. Click on :guilabel:`Populate` and the :guilabel:`Eligible Employees` smart button will show up.
#. The **Employee Declaration** status will be in draft and will be changed to **Generated PDF** 
   once the schedule runs. 
#. Once the PDF is generated, you can download the IRD form. 

.. image:: hong_kong/hk-ir56b.png
   :alt: Hong Kong IR56B report

.. note::
   You can manually trigger the scheduled action called **Payroll: Generate pdfs**.
   It is set by default to run the PDF generation monthly. 

Manulife MPF Sheet
~~~~~~~~~~~~~~~~~~

Go to :menuselection:`Payroll --> Reporting --> Manulife MPF Sheet`

#. Click on :guilabel:`New`.
#. Select the relevant Year, Month and Sequence No. 
#. Click on :guilabel:`Create XLSX`.
#. The Manulife MPF XLSX file will be generated and available for download. 

.. image:: hong_kong/hk-manulife-sheet.png
   :alt: Hong Kong Manulife Sheet

.. note::
   We will not be developing further reports for other MPF trustee as there will be an 
   e-MPF platform setup by the local government. 

.. seealso::
   - `eMPF <https://www.mpfa.org.hk/en/empf/overview>`_

HSBC Autopay Report
~~~~~~~~~~~~~~~~~~~

If you use HSBC Autopay as your batch payment method, you can click on **Create HSBC Autopay Report** 
and fill in the mandatory fields: 

.. image:: hong_kong/hk-generate-autopay.png
   :alt: Hong Kong HSBC Autopay Wizard

This will create an **.apc** file format which you can upload to HSCB portal for processing.

