=============
Consolidation
=============

The :doc:`Shared Accounts <shared_accounts>` feature can consolidate financial data for
multi-company and multi-currency environments.

This consolidation enables viewing a single :ref:`report <reporting>` by selecting the relevant
company using the company selector in the top-right corner of the screen.

Odoo uses the :abbr:`CTA (Cumulative Translation Adjustment)` system to translate all amounts into
the selected company's currency by default for :ref:`multi-currency setups <multi_currency>`.

.. _reporting:

Reporting
=========

.. _report_consolidation:

Report consolidation
--------------------

Consolidation sums up the values of the accounts shared between companies and allows for a **global
view** of the whole group's financial situation.

.. example::
   The parent company has an invoice for 10.000€, while the child company has an invoice for
   1.000€. Both companies share the same account for these invoices. The balance displayed on the
   company report would be:

   - 10.000€ for the parent company.
   - 1.000€ for the child company.
   - 11.000€ if both companies are selected in the company selector.

.. _multi_currency:

Multi-currency conversions
==========================

.. _cumulative_translation_adjustment:

Cumulative Translation Adjustment
---------------------------------

In multi-currency environments, :abbr:`CTA (Cumulative Translation Adjustment)` uses the **selected
company**'s currency for all the amounts in the report. CTA has three different calculation
methods, chosen according to the **type of account** used in the journal item whose amount has to
be converted.

#. For **Equity** accounts, **except for retained earnings**, the CTA is calculated using the
   historical rate, which is the rate at the time of the transaction.
#. For **Income**, **Expense**, and **retained earnings** accounts, the CTA is calculated using the
   average daily rate for the reported period.
#. For other accounts, like **Assets** and **Liabilities** accounts, the CTA is calculated using
   the closing rate, which is the last rate applied at the period’s closing date.

This system may lead to unbalanced reports because the CTA can apply different rates to items made
on the same entry, causing a difference in the total amount. This is normal and isn't worrying.

.. note::
   CTA can be disabled in the reports options under the :guilabel:`Currency Translation` label. Go
   to the Accounting App. In the Configuration drop-down select :guilabel:`Accounting Reports` and
   choose the report for which you wish to disable the CTA. Head to the :guilabel:`Options` page of
   the report's configuration. There, you can switch the :guilabel:`Currency Translation` option to
   :guilabel:`Use the most recent rate at the date of the report`.

.. _cumulative_translation_adjustment_examples:

Examples
--------

The parent company is set to use EUR as its currency, while the child company uses USD. A single
invoice for $10,000 is recorded in a shared account. The invoice was confirmed on January 1, 2025,
when the exchange rate for **USD/EUR** was 1.0.
The report was generated on December 31, 2025, when the exchange rate was 3.0. Between the invoice
confirmation and the report generation, a rate of 2.0 was applied on July 1, 2025.
Since the selected company uses euros, all amounts in the report are converted to euros based on
the relevant exchange rates.

- If the shared account is an **Equity** account, the CTA is calculated using the historical
   exchange rate of 1.0. For an invoice of $10,000 issued on January 1, 2025, the Equity would be
   €10,000.

- If the shared account is an **Income** account, the CTA is calculated using the average daily
   exchange rate for the reported period. Over the period, 181 days had a rate of 1.0 USD/EUR, 183
   days had a rate of 2.0, and 1 day had a rate of 3.0. For an invoice of $10,000 issued on January
   1, 2025, the average daily rate would be approximately 1.5068, resulting in an equity of about
   €15,068.

- If the shared account is an **Asset** account, the CTA is calculated using the closing exchange
   rate of 3.0. For an invoice of $10,000 issued on January 1, 2025, the Asset would be €30,000,
   resulting in a zero balance on the report.
