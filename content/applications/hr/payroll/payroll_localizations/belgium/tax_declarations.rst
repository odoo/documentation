================
Tax declarations
================

Belgian employers withhold taxes on the remuneration they pay, declare these withholding taxes to
the FPS Finance during the year, and summarize the yearly income of each beneficiary on annual tax
forms. The **Payroll** app generates these declarations from the validated and paid payslips.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Declaration
     - Content
     - Frequency
     - Menu
   * - :doc:`273.XX <tax_declarations/273_sheets>`
     - Withholding tax on movable income: intellectual property (273S) and employee participation
       (profit-sharing bonus)
     - Monthly
     - :menuselection:`Payroll app --> Reporting --> Belgium --> 273.XX Sheets`
   * - :doc:`274.XX <tax_declarations/274_sheets>`
     - Professional withholding tax and its exemptions (scientific research, shift work, training,
       overtime, etc.)
     - Monthly or quarterly
     - :menuselection:`Payroll app --> Reporting --> Belgium --> 274.XX Sheets`
   * - :doc:`281.XX <tax_declarations/281_forms>`
     - Individual tax forms (281.10, 281.13, 281.18, 281.20, 281.30, and 281.45) and their
       Belcotax-on-web file
     - Yearly
     - :menuselection:`Payroll app --> Reporting --> Belgium --> 281.XX Sheets`

The declarations share the following rules:

- A declaration is created from the main (top-level) company and covers the payslips of all its
  branches. Log in to a Belgian company to create one.
- Only payslips in the *Validated* or *Paid* state are declared.
- A remuneration is declared in the period it is attached to for tax purposes, set by the
  :guilabel:`Fiscal Date` of the payslip. This date defaults to the pay period, and is deferred to
  the confirmation date for remunerations paid late: arrears, or a payslip whose pay period was
  already declared. Some amounts, such as benefits in kind, always stay in their pay period (the
  :guilabel:`Follow Pay Period` option of their salary rule).
- Each declaration follows the same lifecycle: :guilabel:`Draft`, :guilabel:`Ready` once its files
  are generated, then :guilabel:`Done` once the reference returned by the FPS Finance is entered.
  Payslips that change after a declaration is done are corrected with a new declaration that refers
  to the original one.
- The **Payroll** app dashboard displays a warning for each period that has validated payslips but
  no declaration, and for each declaration that needs a correction.

.. toctree::
   :titlesonly:

   tax_declarations/273_sheets
   tax_declarations/274_sheets
   tax_declarations/281_forms
