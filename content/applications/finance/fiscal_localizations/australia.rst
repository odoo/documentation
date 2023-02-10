=========
Australia
=========

.. _australia/keypay:

KeyPay Australian Payroll
=========================

The KeyPay Module synchronizes payslip accounting entries (e.g., expenses, social charges,
liabilities, taxes) from KeyPay to Odoo automatically. Payroll administration is still done in
KeyPay. We only record the journal entries in Odoo.

Configuration Steps
-------------------

#. Create a company located in Australia.
#. Check that the Australian localization module (Australia - Accounting) is installed.
#. Configure the *KeyPay API*.

   .. image:: australia/australia-keypay-api.png
      :align: center
      :alt: Odoo Accounting settings includes a section for the Australian Loclization

#. More fields become visible after clicking on *Enable KeyPay Integration*.

   .. image:: australia/australia-keypay-integration.png
      :align: center
      :alt: Enabling KeyPay Integration in Odoo Accounting displays new fields in the settings

#. You can find the API Key in the *My Account* section of the KeyPay platform.

   .. image:: australia/australia-keypay-myaccount.png
      :align: center
      :alt: "Account Details" section on the KeyPay dashboard

#. The **Payroll URL** is pre-filled with ``https://keypay.yourpayroll.com.au``. *Please do not
   change it.*
#. You can find the **Business ID** in the KeyPay URL. (i.e., ``189241``)

   .. image:: australia/australia-keypay-business-id.png
      :align: center
      :alt: The KeyPay "Business ID" number is in the URL

#. You can choose any Odoo journal to post the payslip entries.

How does the API work?
----------------------

The API syncs the journal entries from KeyPay to Odoo and leaves them in draft mode. The reference
includes the KeyPay payslip entry ID in brackets for the user to easily retrieve the same record in
KeyPay and Odoo.

.. image:: australia/australia-keypay-journal-entry.png
   :align: center
   :alt: Example of a KeyPay Journal Entry in Odoo Accounting (Australia)

.. note::
   The API sync is triggered by scheduled actions.

   .. image:: australia/australia-keypay-scheduled-actions.png
      :align: center
      :alt: Scheduled Actions settings for KeyPay Payroll in Odoo (debug mode)

KeyPay payslip entries also work based on double-entry bookkeeping. Debit must equal credit (like in
Odoo).

The accounts used by KeyPay are defined in the section **Payroll settings**.

.. image:: australia/australia-keypay-chart-of-accounts.png
   :align: center
   :alt: Chart of Accounts menu in KeyPay

For the API to work, you need to create the same accounts as the default accounts of your KeyPay
business (**same name and same code**) in Odoo. You also need to choose the correct account types in
Odoo to generate accurate financial reports.
