============
Salary rules
============

In Odoo, every :ref:`salary structure <payroll/salaries/structures>` has a set of salary *rules*
used to compute the various amounts considered in the pay. These rules are configured by the
localization and affect the computation of the salaries.

.. warning::
   Modification or creation of rules should **only** be done when necessary.

To view all the rules, go to :menuselection:`Payroll app --> Configuration --> Rules`. Click on a
structure, such as :guilabel:`Regular Pay`, to view all the rules.

Add a new rule
==============

To make a new rule, click :guilabel:`New` and a blank *Salary Rules* form loads. Enter the following
information in the top half of the form:

- :guilabel:`Rule Name`: Enter a name for the rule. This is the name displayed in the payslip.
- :guilabel:`Code`: Enter a code to be used for the new rule. This is case sensitive and is used as
  the *rule ID*. This field is **required**.
- :guilabel:`Category`: Using the drop-down menu, select the category the rule applies to, or enter
  a new category. The category is used to group rules and access their total sum.
- :guilabel:`Salary Structure`: Using the drop-down menu, select the salary structure the rule
  applies to, or enter a new one. This field is **required**.
- :guilabel:`Sequence`: Enter a number indicating *when* the rule is calculated, in the sequence of
  all other rules. Rules are processed one after another based on their sequence number. Rules with
  a lower sequence number are calculated first, and their results can be used by rules with a higher
  sequence number. This field is **required**.
- :guilabel:`Appears on Payslip`: Enable this checkbox to have the rule visible on the employee
  payslip PDF.
- :guilabel:`Contributes to Employer Cost`: Enable this checkbox to include the rule when computing
  the *employer cost* of a payslip.

General tab
-----------

Fill out the following sections of the *General* tab. These configurations determine *when* and
*how* the rule is calculated.

Conditions
~~~~~~~~~~

- :guilabel:`Condition Based on`: Using the drop-down menu, select if the rule is calculated and
  displayed as a line in the payslip form view. Choose from one of the following options:

  - :guilabel:`Always True`: The rule is always calculated. No other configurations are needed for
    this section.
  - :guilabel:`Salary Input`: This introduces a dynamic benefit to the structure. This appears as a
    field in the *Payroll* tab of the *Employee* form, the *Inputs* tab of the payslip, or both. The
    value of this field is added to the amount of the rule. If selected, the following additional
    fields appear and must be configured:

    - :guilabel:`Input on`: Specify where this field should appear and which object it should belong
      to, the :guilabel:`Employee`, the :guilabel:`Payslip`, or both. If both are selected, the
      value on the payslip automatically defaults to the value from the employee record, but it can
      be overwritten directly on the payslip for a specific payroll run.
    - :guilabel:`Section`: This groups several inputs into one expandable section on the form view.
      Only one option is available by default: :guilabel:`Inputs`.
    - :guilabel:`Unit`: Click the corresponding radio button to determine how the benefit is
      displayed. The available options are:

      - :guilabel:`Monetary`: A number with currency.
      - :guilabel:`Quantity`: A number.
      - :guilabel:`Percentage`: A number with a % sign.
      - :guilabel:`Checkbox`: Indicates boolean values.

    - :guilabel:`Input Description`: Enter a short explanation of when the input is applicable.
    - :guilabel:`Default Value`: Enter the default value, either a monetary amount, quantity, or
      percentage. This is determined by what is selected for the :guilabel:`Unit`. If necessary, add
      a :guilabel:`Suffix` in the field to the right of this value, such as `per km`.

      .. note::
         If :guilabel:`Checkbox` is selected for the :guilabel:`Unit`, this field changes to
         :guilabel:`Selected by Default`. Click the checkbox to have the rule active by default.

     - :guilabel:`Depends On`: Select another rule that has a salary input, and use its value to
       determine whether this rule should be hidden.

  - :guilabel:`Other Input`: Select this to check if a payslip line exists with the same *type*.
    When selected, a :guilabel:`Condition Other Input` field appears. Using the drop-down menu,
    select the type of input the rule is based on, such as :guilabel:`Deduction`,
    :guilabel:`Reimbursement`, etc.
  - :guilabel:`Python Expression`: Select this to have the rule calculated using a Python script.
    The script is evaluated using the local dictionary. The right side lists the
    :guilabel:`Available variables` and the :guilabel:`Output`:

    - :guilabel:`Available variables`:

      - :guilabel:`payslip`: The `hr.payslip` object.
      - :guilabel:`employee`: The `hr.employee` object.
      - :guilabel:`version`: The `hr.version` object.
      - :guilabel:`result_rules`: A dictionary containing the rules amounts, quantities, rates and
        totals (previously computed).
      - :guilabel:`categories`: A dictionary containing the computed salary rule categories (the sum
        of the amount of all the rules belonging to that category):

        - :guilabel:`total`: rule total
        - :guilabel:`amount`: rule amount
        - :guilabel:`quantity`: rule quantity
        - :guilabel:`rate`: rule rate
        - :guilabel:`ytd`: rule year to date value

      - :guilabel:`worked_days`: A dictionary containing the computed worked days, where each key is
        a work entry type code, and each value is a `worked_days` object. This object contains many
        variables, with the most important ones being:

        - :guilabel:`number_of_days`: The number of days registered in the payslip duration with
          this work entry type.
        - :guilabel:`number_of_hours`: The number of hours registered in the payslip duration with
          this work entry type.
        - :guilabel:`is_paid`: Whether or not this work entry type is added as an unpaid work entry
          on this payslip structure.

      - :guilabel:`inputs`: A dictionary containing the computed inputs where *key* is the other
        input type code and *value* is the sum of the payslip input lines with the same code.

    - :guilabel:`Output`:

      - :guilabel:`result`: The boolean is *True* if the rule should be calculated, or *False* if
        otherwise.

- :guilabel:`Domain`: Select this option to apply the rule *only* if it matches the configured
  :guilabel:`Applicability Domain`. Configure the :guilabel:`Applicability Domain` that appears
  beneath this option when selected.

Computation
~~~~~~~~~~~

This section determines the final value of the rule, which consists of the base amount, the
quantity, and the rate. The total of the rule is `total = amount * quantity * (rate/100)`.

.. important::
   This field does **not** appear if the :guilabel:`Condition Based on` field is set to
   :guilabel:`Salary Input`.

Using the drop-down menu, select one of the following options for the :guilabel:`Amount Type` field:

- :guilabel:`Percentage (%)`: Defines the values for the total calculation. When selected, configure
  the following fields:

  - :guilabel:`Percentage based on`: A Python expression is evaluated using the `localdict`, and its
    value is assigned to the rule amount.
  - :guilabel:`Quantity`: A Python expression is evaluated using the `localdict`, and its value is
    assigned to the rule quantity.
  - :guilabel:`Percentage (%)`: A decimal number assigned to the rule rate.

- :guilabel:`Fixed Amount`: The amount and quantity is defined, with a rate of 100%.

  - :guilabel:`Quantity`: A Python expression is evaluated using the `localdict`, and its value is
    assigned to the rule quantity.
  - :guilabel:`Fixed Amount`: Enter a decimal number which is assigned to the rule amount.

- :guilabel:`Other Input`: Select this to fetch the rule amount from the payslip input lines that
  have the same *other input type* with rate of `100%` and quantity of `1.0`. When selected, an
  :guilabel:`Amount Other Input` field appears beneath it. Using the drop-down menu, select the
  *type* of input it is, such as :guilabel:`Deduction`, :guilabel:`Tips`, or :guilabel:`Expenses`.

- :guilabel:`Python Code`: This is the more complex version of the :guilabel:`Percentage (%)`
  option, where a whole Python script is written then evaluated using the `localdict`. This includes
  a list of :guilabel:`Available variables` and an :guilabel:`Output` list.

  - :guilabel:`Available variables`:

    - :guilabel:`payslip`: hr.payslip object
    - :guilabel:`employee`: hr.employee object
    - :guilabel:`version`: hr.version object
    - :guilabel:`result_rules`: A dict containing the rules amounts, quantities, rates and totals
      (previously computed), where the key is the rule code, and the value is dict with the
      following keys:

      - :guilabel:`total`: rule total
      - :guilabel:`amount`: rule amount
      - :guilabel:`quantity`: rule quantity
      - :guilabel:`rate`: rule rate
      - :guilabel:`ytd`: rule year to date value

    - :guilabel:`categories`: A dict containing the computed salary rule categories (sum of amount
      of all rules belonging to that category) where key is the category code and value is the sum
      of the rules total values.
    - :guilabel:`worked_days`: A dict containing the computed worked days where *key* is the work
      entry type code and *value* is the `worked_days` object contain many variables, but most
      important ones are:

      - :guilabel:`number_of_days`: The number of days registered in the payslip duration with this
        work entry type.
      - :guilabel:`number_of_hours`: The number of hours registered in the payslip duration with
        this work entry type.
      - :guilabel:`is_paid`: Dictates whether or not this work entry type is added as unpaid work
        entry on this payslip structure.

    - :guilabel:`inputs`: A dict containing the computed inputs, Where *key* is the other input type
      code and *value* is the sum of the payslip input lines with the same code.

  - :guilabel:`Output`:

    - :guilabel:`result`: float, base amount of the rule
    - :guilabel:`result_rate`: float, which defaults to 100.0 (%)
    - :guilabel:`result_qty`: float, quantity, which defaults to 1
    - :guilabel:`result_name`: string, name of the line. This defaults to the name field of the
      salary rule (useful if the name depends or should depend on something computed in the rule).

Company contribution
~~~~~~~~~~~~~~~~~~~~

Using the drop-down menu, select the eventual third party involved in the salary payment to the
employees.

Display tab
-----------

This section determines the appearance of the rule on the payslip PDF available to the employee, and
defines the rule aesthetics.

First, select a :guilabel:`Color` for the rule using the color picker. Next, enable the
:guilabel:`Title` checkbox to **only** display the salary rule's *title* and *description*, and hide
any numerical values.

Activate the :guilabel:`Indented`, :guilabel:`Space Above`, :guilabel:`Bold`, :guilabel:`Underline`,
and :guilabel:`Italic` checkboxes to activate the respective options.

Finally, enter a :guilabel:`Description` for the rule, which is displayed below the rule name.

Accounting tab
--------------

This section determines how the rule affects the various accounting journals and how the Net salary
is calculated for employees. Configure the following fields in this section:

- :guilabel:`Debit Account`: Using the drop-down menu, select the debit account for the rule.
- :guilabel:`Credit Account`: Using the drop-down menu, select the credit account for the rule.
- :guilabel:`Split on names`: Enable this option to split the accounting entries for this rule
  according to the payslip line name. Splitting the entries provides more visibility for deductions
  and reimbursements, or for salary adjustments.
- :guilabel:`Excluded from Net`: Check this checkbox to exclude the rule's calculations from the net
  salary rule in journal entries. A specific debit and credit account should be set to independently
  classify it.
- :guilabel:`Set employee on account line`: Check this checkbox to have the employee's name visible
  on the journal items.

.. important::
   This tab is **only** available if the **Accounting** app is installed.

.. _payroll/salary_rules/rule-parameters:

Rule parameters
===============

Rule parameters inform Odoo how to calculate each line of a payslip. To view the configured rule
parameters, navigate to :menuselection:`Payroll app --> Configuration --> Rule Parameters`.

All rule parameters are displayed. Click on an individual rule parameter to view the details.

Each rule parameter displays the name of the rule, the code, when the rule is active, and the
parameter value.

.. _payroll/salary_rules/rule-categories:

Rule categories
===============

Every rule is associated with a rule category. To view the various categories, navigate to
:menuselection:`Payroll app --> Configuration --> Rule Categories`.

All rule categories appear in a list view, and display the category :guilabel:`Name`,
:guilabel:`Code`, and :guilabel:`Country`.

To create a new rule category, click the :guilabel:`New` button. Enter a :guilabel:`Name` and
:guilabel:`Code` for the category in the corresponding fields. If the category is housed beneath a
:guilabel:`Parent` category, select the parent category using the drop-down menu. If the category is
country-specific, select the :guilabel:`Country` using the drop-down menu.
