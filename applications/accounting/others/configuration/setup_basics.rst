Accounting Setup Basics
==========
.. youtube:: X2FLM4apGc0
    :align: right
    :width: 700
    :height: 394
From your Twenty20 menu, open Accounting.

**Adding to and editing your Chart of Accounts**

Open your Chart of Accounts from Adviser > Chart of Accounts
You can Create a new account by clicking "Create" and entering the details.  To alter an existing account, click on an account name or number to open it, then click "Edit", then make your changes.
The view changes to show the simple details of the fields related to how this account might be used.  Complete the fields as follows:

•	"Code": This is for the account number.  Typically, only numbers are used, with or without decimals.  While no particular format is mandated, please check with your accounting professionals on the format that is correct for your company.  (Alphabetic characters are allowed, but not commonly used.)
•	"Name": The descriptive name of the account.
•	"Type": Select from the drop-down list.  The "Type" determines where an account will appear on financial statements, and - in some cases - determine whether it will be available in drop-down lists within different set up and workflow scenarios.  (Hint: Use the large "How account type affects your reports?" diagram on the right half of the account screen to indicate where the account will fall on financial statements.
•	"Allow Reconciliation": Always select this for your accounts with types of "Receivable" or "Payable", plus 'retention' and 'transfer' accounts.  Most other accounts should not have this box marked.  (Note: This is not meant to indicate an account is eligible for reconciling your Twenty20 accounting system to statements from banking, investment, or credit card institutions)
•	"Deprecated": Marking this box indicates the account should no longer be used and it intended to be deactivated.

"Save" to lock in the changes.



**Setting up Journals (or sub-ledgers)**

Access your Journals from Configuration > Journals
You can Create a new journal by clicking "Create" and entering the details.  To alter an existing journal, click on a journal name to open it, then click "Edit", then make your changes.
The view changes to show the simple details of the fields related to how and when this journal will be used.  Complete the fields as follows:

•	"Journal Name": Enter a descriptive name.
•	"Type": This determines when a journal can be used to record a transaction.  You may require several journals, but it is almost mandatory that certain journals exist, specifically one each for:
    o	Accounts Receivable - set the "Type" to 'Sale'
     
    o	Accounts Payable - set the "Type" to 'Purchase'
     
    o	One for each Bank or Credit Card account - set the "Type" to 'Bank'
     
    o	Miscellaneous (for adjusting entries, etc.) - set the "Type" to 'Miscellaneous'
(The names of the journals may be changed at your option.)

•	"Credit Card": Mark this box when the journal will be used with Credit Card accounts.  If you do mark the box, you will be prompted to assign a credit card vendor as well.

Move into the "Journal Entries" tab to access the following:

•	"Short Code": Enter up to five (5) characters which will be used as a prefix on labels assigned to General Ledger entries that belong within this Journal.  (A space may be used, but it does count as a character.)
•	"Default Debit Account" & "Default Credit Account": Enter the primary account that relates to this journal.  (Note: the same is account is often the best option for both the 'debit' and 'credit' fields, but that is not mandatory.)

Go into the "Advanced Settings" tab (If the journal "Type" = 'Bank'.) to access the following:

•	"Debit Methods": Choose which options you'd like to be made available to users when entering a receipt of funds to your company.
•	"Payment Methods": Choose which options you'd like to be made available to users when entering payments from your company.

Go into the "Bank Account" tab (Only available when the journal "Type" = 'Bank'.) to access the following:

•	"Account Number": Enter the number of the account as assigned by the financial institution.  This is important if you plan on importing statements from your financial institution into Twnety20 for monthly (or periodic) reconciliation.  If your bank account masks your account number in their electronic statements, then it needs to be masked just the same way here.
•	"Bank": Select the financial institution from the drop-down list.

"Save" to lock in the changes.



**Setting up your Bank Accounts (This can also be done within the setup of a Journal.)**

Access your Journals from Configuration > Bank Accounts
You can Create a new Bank Account AND Journal by clicking "Create" and entering the details.  To alter an existing Bank Account, click on a Bank Account name to open it, then click "Edit", then make your changes.
The view changes to show the simple details of the fields related to the Bank Account.  Complete the fields as follows:

•	"Account Number": Enter the number of the account as assigned by the financial institution.  This is important if you plan on importing statements from your financial institution into Twnety20 for monthly (or periodic) reconciliation.  If your bank account masks your account number in their electronic statements, then it needs to be masked just the same way here.
•	"Bank": Select the financial institution from the drop-down list.
•	"Debit Methods": Choose which options you'd like to be made available to users when entering a receipt of funds to your company.
•	"Payment Methods": Choose which options you'd like to be made available to users when entering payments from your company.

"Save" to lock in the changes.


(DUE TO SECURITY SETTINGS, NOT ALL VIEWS, FIELDS, AND FEATURES ARE AVAILABLE TO ALL USERS.  Contact your system administrator with questions.)
