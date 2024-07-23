============
Log expenses
============

Before expenses can be reimbursed, each individual expense needs to be logged in the database.
Expense records can be created in three different ways: :ref:`manually enter an expense record
<expenses/manual_expense>`, :ref:`upload a receipt <expenses/upload_receipt>`, or :ref:`email a
receipt <expenses/email_expense>` to a preconfigured email address.

.. _expenses/manual_expense:

Manually enter expenses
=======================

To record a new expense, open the :menuselection:`Expenses app`, which displays the :guilabel:`My
Expenses` page, by default.

.. tip::
   This view can also be accessed from :menuselection:`Expenses app --> My Expenses --> My
   Expenses`.

Then, click :guilabel:`New`, and then fill out the following fields on the form that appears:

- :guilabel:`Description`: Enter a short description for the expense. This should be concise and
  informative, such as `lunch with client` or `hotel for conference`.
- :guilabel:`Category`: Select the expense category from the drop-down menu that most closely
  corresponds to the expense.
- :guilabel:`Total`: Enter the total amount paid for the expense in one of two ways:

  #. If the expense is for a single item/expense, and the category selected was for a single item,
     enter the cost in the :guilabel:`Total` field (the :guilabel:`Quantity` field is hidden).
  #. If the expense is for multiples of the same item/expense with a fixed price, the
     :guilabel:`Unit Price` is displayed. Enter the quantity in the :guilabel:`Quantity` field, and
     the total cost is automatically updated with the correct total. The total cost appears below
     the :guilabel:`Quantity`.

     .. example::
        In the case of mileage driven, the :guilabel:`Unit Price` is populated as the cost *per
        mile*. Set the :guilabel:`Quantity` to the *number of miles driven*, and the total is
        calculated.

- :guilabel:`Included Taxes`: If taxes were configured on the expense category, the tax percentage
  and amount appear automatically after entering either the :guilabel:`Total` or the
  :guilabel:`Quantity`.

  .. note::
     When a tax is configured on an expense category, the :guilabel:`Included Taxes` value updates
     in real time, as the :guilabel:`Total` or :guilabel:`Quantity` is updated.

- :guilabel:`Employee`: Using the drop-down menu, select the employee this expense is for.
- :guilabel:`Paid By`: Click the radio button to indicate who paid for the expense, and should be
  reimbursed. Select either :guilabel:`Employee (to reimburse)` or :guilabel:`Company`. Depending on
  the expense category selected, this field may not appear.
- :guilabel:`Expense Date`: Using the calendar popover window that appears when this field is
  clicked, enter the date the expense was incurred.
- :guilabel:`Account`: Using the drop-down menu, select the expense account the expense should be
  logged in.
- :guilabel:`Customer to Reinvoice`: If the expense is something that should be paid for by a
  customer, select the :abbr:`SO (Sales Order)` and customer that should be invoiced for this
  expense from the drop-down menu. All sales orders in the drop-down menu list both the :abbr:`SO
  (Sales Order)`, as well as the company the sales order is written for. After the expense is saved,
  the customer name disappears, and only the :abbr:`SO (Sales Order)` is visible on the expense.

  .. example::
     A customer wishes to have an on-site meeting for the design and installation of a custom
     garden, and agrees to pay for the expenses associated with it (such as travel, hotel, meals,
     etc). All expenses tied to that meeting would indicate the sales order for the custom garden
     (which also references the customer) as the :guilabel:`Customer to Reinvoice`.

- :guilabel:`Analytic Distribution`: Select the account the expense should be written against from
  the drop-down menu for either :guilabel:`Projects`, :guilabel:`Departments`, or both. Multiple
  accounts can be listed for each category, if needed. Adjust the percentage for each analytic
  account by typing in the percentage value next to each account.
- :guilabel:`Company`: If multiple companies are set up, select the company the expense should be
  filed for from the drop-down menu. The current company automatically populates this field.
- :guilabel:`Notes...`: If any notes are needed to clarify the expense, enter them in the notes
  field.

.. image:: log_expenses/expense-filled-in.png
   :align: center
   :alt: A filled in expense form for a client lunch.

Attach receipts
---------------

After the expense record is created, the next step is to attach a receipt. Click the
:guilabel:`Attach Receipt` button, and a file explorer appears. Navigate to the receipt to be
attached, and click :guilabel:`Open`.

The new receipt is recorded in the *chatter*, and the number of receipts appears next to the
:icon:`fa-paperclip` :guilabel:`(paperclip)` icon. Multiple receipts can be attached to an
individual expense record, as needed.

.. image:: log_expenses/receipt-icon.png
   :align: center
   :alt: Attach a receipt and it appears in the chatter.

.. _expenses/upload_receipt:

Upload expenses
===============

It is possible to have expense records created automatically, by uploading a PDF receipt. This
feature requires the enabling of a setting, and the purchasing of :abbr:`IAP (in-app purchases)`
credits.

Digitalization settings
-----------------------

To enable receipt scanning, navigate to :menuselection:`Expenses app --> Configuration -->
Settings`, and tick the checkbox beside the :guilabel:`Expense Digitization (OCR)` option. Then,
click :guilabel:`Save`. When enabled, additional options appear. Click on the corresponding radio
button to select one of the following options:

- :guilabel:`Do not digitize`: turns off receipt digitization.
- :guilabel:`Digitize on demand only`: only digitizes receipts when requested. A
  :guilabel:`Digitize document` button appears on expense records. When clicked, the receipt is
  scanned and the expense record is updated.
- :guilabel:`Digitize automatically`: automatically digitizes all receipts when they are uploaded.

Beneath these options are two additional links. Click the :icon:`fa-arrow-right` :guilabel:`Buy
credits` link to purchase credits for receipt digitization. Click the :icon:`fa-arrow-right`
:guilabel:`View My Services` link to view a list of all current services, and their remaining credit
balances.

For more information on document digitization and :abbr:`IAPs (in-app purchases)`, refer to the
:doc:`In-app purchase (IAP) <../../essentials/in_app_purchase>` documentation.

.. note::
   When the :guilabel:`Expense Digitization (OCR)` option is enabled, a necessary module is
   installed, so receipts can be scanned. Disabling this option uninstalls the module.

   If, at some point, there is a desire to temporarily stop digitizing receipts, select the
   :guilabel:`Do not digitize` option. The reason this option is available is so the module is not
   uninstalled, allowing for digitization to be enabled in the future by selecting one of the other
   two options.

Upload receipts
---------------

Open the :guilabel:`Expenses app`, and from the :guilabel:`My Expenses` dashboard, click
:guilabel:`Upload`, and a file explorer appears. Navigate to the desired receipt, select it, then
click :guilabel:`Open`.

.. image:: log_expenses/upload.png
   :align: center
   :alt: Create an expense by scanning a receipt. Click Scan at the top of the Expenses dashboard
         view.

The receipt is scanned, and a new expense record is created. The :guilabel:`Expense Date` field is
populated with today's date, along with any other fields based on the scanned data, such as the
:guilabel:`Total`.

Click on the new entry to open the individual expense form, and make any changes, if needed. The
scanned receipt appears in the *chatter*.

.. _expenses/email_expense:

Email expenses
==============

Instead of individually creating each expense in the **Expenses** app, expenses can be automatically
created by sending an email to an email alias.

To do so, an email alias must first be configured. Navigate to :menuselection:`Expenses app -->
Configuration --> Settings`. Ensure the checkbox beside :guilabel:`Incoming Emails` is ticked. The
default email alias is *expense@(domain).com*. Change the email alias by entering the desired email
in the field to the right of :guilabel:`Alias`. Then, click :guilabel:`Save`.

.. image:: log_expenses/alias-email.png
   :align: center
   :alt: Te default email that populates the expenses email alias.

.. note::
   If the domain alias needs to be set up, :icon:`fa-arrow-right` :guilabel:`Setup your domain
   alias` appears beneath the :guilabel:`Incoming Emails` checkbox, instead of the email address
   field.

   .. image:: log_expenses/email-alias.png
      :align: center
      :alt: Create the domain alias by clicking the link.

   Refer to the :doc:`/applications/websites/website/configuration/domain_names` documentation for
   setup instructions and more information.

   Once the domain alias is configured, the email address field is visible beneath the
   :guilabel:`Incoming Emails` feature on the :guilabel:`Settings` page in the **Expenses** app.

Once the email address has been entered, emails can be sent to that alias to create new expenses,
without having to be in the Odoo database.

To submit an expense via email, create a new email, and enter the product's *internal reference*
code (if available) and the amount of the expense as the subject of the email. Next, attach the
receipt to the email. Odoo creates the expense by taking the information in the email subject, and
combining it with the receipt.

To check an expense category's internal reference, go to :menuselection:`Expenses app -->
Configuration --> Expense Categories`. If an internal reference is listed on the expense category,
it is listed in the :guilabel:`Internal Reference` column.

.. image:: log_expenses/ref.png
   :align: center
   :alt: Internal reference numbers are listed in the main Expense Categories view.

To add an internal reference on an expense category, click on the category to open the expense
category form. Enter the :guilabel:`Internal Reference` in the corresponding field. Beneath the
:guilabel:`Internal Reference` field, this sentence appears: :guilabel:`Use this reference as a
subject prefix when submitting by email.`

.. image:: log_expenses/mileage-internal-reference.png
   :align: center
   :alt: Internal reference numbers are listed in the main Expense Products view.

.. example::
   If submitting an expense, via email, for a $25.00 meal during a work trip, the email subject
   would be `FOOD $25.00`.

   Explanation:

   - The :guilabel:`Internal Reference` for the expense category `Meals` is `FOOD`
   - The :guilabel:`Cost` for the expense is `$25.00`

.. note::
   For security purposes, only authenticated employee emails are accepted by Odoo when creating an
   expense from an email. To confirm an authenticated employee email address, go to the employee
   card in the :menuselection:`Employees app`, and refer to the :guilabel:`Work Email` field.

   .. image:: log_expenses/authenticated-email-address.png
      :align: center
      :alt: Create the domain alias by clicking the link.
