=========
Functions
=========

Spreadsheet functions are divided in the following categories:

- :ref:`Array <functions/array>`
- :ref:`Database <functions/database>`
- :ref:`Date <functions/date>`
- :ref:`Engineering <functions/engineering>`
- :ref:`Filter <functions/filter>`
- :ref:`Financial <functions/financial>`
- :ref:`Info <functions/info>`
- :ref:`Logical <functions/logical>`
- :ref:`Lookup <functions/lookup>`
- :ref:`Math <functions/math>`
- :ref:`Misc <functions/misc>`
- :ref:`Odoo <functions/odoo>`
- :ref:`Operators <functions/operators>`
- :ref:`Statistical <functions/statistical>`
- :ref:`Text <functions/text>`
- :ref:`Web <functions/web>`

.. note::
   Formulas containing functions that are not compatible with Excel are replaced by their evaluated
   result when exporting a spreadsheet.

.. _functions/array:

Array
=====

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - ARRAY.CONSTRAIN(input_range, rows, columns)
     - Returns a result array constrained to a specific width and height (not compatible with Excel)
   * - CHOOSECOLS(array, col_num, [col_num2, ...])
     - `Excel CHOOSECOLS article <https://support.microsoft.com/office/choosecols-function-bf117976-2722-4466-9b9a-1c01ed9aebff>`_
   * - CHOOSEROWS(array, row_num, [row_num2, ...])
     - `Excel CHOOSEROWS article <https://support.microsoft.com/office/chooserows-function-51ace882-9bab-4a44-9625-7274ef7507a3>`_
   * - EXPAND(array, rows, [columns], [pad_with])
     - `Excel EXPAND article <https://support.microsoft.com/office/expand-function-7433fba5-4ad1-41da-a904-d5d95808bc38>`_
   * - FLATTEN(range, [range2, ...])
     - Flattens all the values from one or more ranges into a single column (not compatible with Excel)
   * - FREQUENCY(data, classes)
     - `Excel FREQUENCY article <https://support.microsoft.com/office/frequency-function-44e3be2b-eca0-42cd-a3f7-fd9ea898fdb9>`_
   * - HSTACK(range1, [range2, ...])
     - `Excel HSTACK article <https://support.microsoft.com/office/hstack-function-98c4ab76-10fe-4b4f-8d5f-af1c125fe8c2>`_
   * - MDETERM(square_matrix)
     - `Excel MDETERM article <https://support.microsoft.com/office/mdeterm-function-e7bfa857-3834-422b-b871-0ffd03717020>`_
   * - MINVERSE(square_matrix)
     - `Excel MINVERSE article <https://support.microsoft.com/office/minverse-function-11f55086-adde-4c9f-8eb9-59da2d72efc6>`_
   * - MMULT(matrix1, matrix2)
     - `Excel MMULT article <https://support.microsoft.com/office/mmult-function-40593ed7-a3cd-4b6b-b9a3-e4ad3c7245eb>`_
   * - SUMPRODUCT(range1, [range2, ...])
     - `Excel SUMPRODUCT article <https://support.microsoft.com/office/sumproduct-function-16753e75-9f68-4874-94ac-4d2145a2fd2e>`_
   * - SUMX2MY2(array_x, array_y)
     - `Excel SUMX2MY2 article <https://support.microsoft.com/office/sumx2my2-function-9e599cc5-5399-48e9-a5e0-e37812dfa3e9>`_
   * - SUMX2PY2(array_x, array_y)
     - `Excel SUMX2PY2 article <https://support.microsoft.com/office/sumx2py2-function-826b60b4-0aa2-4e5e-81d2-be704d3d786f>`_
   * - SUMXMY2(array_x, array_y)
     - `Excel SUMXMY2 article <https://support.microsoft.com/office/sumxmy2-function-9d144ac1-4d79-43de-b524-e2ecee23b299>`_
   * - TOCOL(array, [ignore], [scan_by_column])
     - `Excel TOCOL article <https://support.microsoft.com/office/tocol-function-22839d9b-0b55-4fc1-b4e6-2761f8f122ed>`_
   * - TOROW(array, [ignore], [scan_by_column])
     - `Excel TOROW article <https://support.microsoft.com/office/torow-function-b90d0964-a7d9-44b7-816b-ffa5c2fe2289>`_
   * - TRANSPOSE(range)
     - `Excel TRANSPOSE article <https://support.microsoft.com/office/transpose-function-ed039415-ed8a-4a81-93e9-4b6dfac76027>`_
   * - VSTACK(range1, [range2, ...])
     - `Excel VSTACK article <https://support.microsoft.com/office/vstack-function-a4b86897-be0f-48fc-adca-fcc10d795a9c>`_
   * - WRAPCOLS(range, wrap_count, [pad_with])
     - `Excel WRAPCOLS article <https://support.microsoft.com/office/wrapcols-function-d038b05a-57b7-4ee0-be94-ded0792511e2>`_
   * - WRAPROWS(range, wrap_count, [pad_with])
     - `Excel WRAPROWS article <https://support.microsoft.com/office/wraprows-function-796825f3-975a-4cee-9c84-1bbddf60ade0>`_

.. _functions/database:

Database
========

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - DAVERAGE(database, field, criteria)
     - `Excel DAVERAGE article <https://support.microsoft.com/office/daverage-function-a6a2d5ac-4b4b-48cd-a1d8-7b37834e5aee>`_
   * - DCOUNT(database, field, criteria)
     - `Excel DCOUNT article <https://support.microsoft.com/office/dcount-function-c1fc7b93-fb0d-4d8d-97db-8d5f076eaeb1>`_
   * - DCOUNTA(database, field, criteria)
     - `Excel DCOUNTA article <https://support.microsoft.com/office/dcounta-function-00232a6d-5a66-4a01-a25b-c1653fda1244>`_
   * - DGET(database, field, criteria)
     - `Excel DGET article <https://support.microsoft.com/office/dget-function-455568bf-4eef-45f7-90f0-ec250d00892e>`_
   * - DMAX(database, field, criteria)
     - `Excel DMAX article <https://support.microsoft.com/office/dmax-function-f4e8209d-8958-4c3d-a1ee-6351665d41c2>`_
   * - DMIN(database, field, criteria)
     - `Excel DMIN article <https://support.microsoft.com/office/dmin-function-4ae6f1d9-1f26-40f1-a783-6dc3680192a3>`_
   * - DPRODUCT(database, field, criteria)
     - `Excel DPRODUCT article <https://support.microsoft.com/office/dproduct-function-4f96b13e-d49c-47a7-b769-22f6d017cb31>`_
   * - DSTDEV(database, field, criteria)
     - `Excel DSTDEV article <https://support.microsoft.com/office/dstdev-function-026b8c73-616d-4b5e-b072-241871c4ab96>`_
   * - DSTDEVP(database, field, criteria)
     - `Excel DSTDEVP article <https://support.microsoft.com/office/dstdevp-function-04b78995-da03-4813-bbd9-d74fd0f5d94b>`_
   * - DSUM(database, field, criteria)
     - `Excel DSUM article <https://support.microsoft.com/office/dsum-function-53181285-0c4b-4f5a-aaa3-529a322be41b>`_
   * - DVAR(database, field, criteria)
     - `Excel DVAR article <https://support.microsoft.com/office/dvar-function-d6747ca9-99c7-48bb-996e-9d7af00f3ed1>`_
   * - DVARP(database, field, criteria)
     - `Excel DVARP article <https://support.microsoft.com/office/dvarp-function-eb0ba387-9cb7-45c8-81e9-0394912502fc>`_

.. _functions/date:

Date
====

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - DATE(year, month, day)
     - `Excel DATE article <https://support.microsoft.com/office/date-function-e36c0c8c-4104-49da-ab83-82328b832349>`_
   * - DATEDIF(start_date, end_date, unit)
     - `Excel DATEDIF article <https://support.microsoft.com/office/datedif-function-25dba1a4-2812-480b-84dd-8b32a451b35c>`_
   * - DATEVALUE(date_string)
     - `Excel DATEVALUE article <https://support.microsoft.com/office/datevalue-function-df8b07d4-7761-4a93-bc33-b7471bbff252>`_
   * - DAY(date)
     - `Excel DAY article <https://support.microsoft.com/office/day-function-8a7d1cbb-6c7d-4ba1-8aea-25c134d03101>`_
   * - DAYS(end_date, start_date)
     - `Excel DAYS article <https://support.microsoft.com/office/days-function-57740535-d549-4395-8728-0f07bff0b9df>`_
   * - DAYS360(start_date, end_date, [method])
     - `Excel DAYS360 article <https://support.microsoft.com/office/days360-function-b9a509fd-49ef-407e-94df-0cbda5718c2a>`_
   * - EDATE(start_date, months)
     - `Excel EDATE article <https://support.microsoft.com/office/edate-function-3c920eb2-6e66-44e7-a1f5-753ae47ee4f5>`_
   * - EOMONTH(start_date, months)
     - `Excel EOMONTH article <https://support.microsoft.com/office/eomonth-function-7314ffa1-2bc9-4005-9d66-f49db127d628>`_
   * - HOUR(time)
     - `Excel HOUR article <https://support.microsoft.com/office/hour-function-a3afa879-86cb-4339-b1b5-2dd2d7310ac7>`_
   * - ISOWEEKNUM(date)
     - `Excel ISOWEEKNUM article <https://support.microsoft.com/office/isoweeknum-function-1c2d0afe-d25b-4ab1-8894-8d0520e90e0e>`_
   * - MINUTE(time)
     - `Excel MINUTE article <https://support.microsoft.com/office/minute-function-af728df0-05c4-4b07-9eed-a84801a60589>`_
   * - MONTH(date)
     - `Excel MONTH article <https://support.microsoft.com/office/month-function-579a2881-199b-48b2-ab90-ddba0eba86e8>`_
   * - NETWORKDAYS(start_date, end_date, [holidays])
     - `Excel NETWORKDAYS article <https://support.microsoft.com/office/networkdays-function-48e717bf-a7a3-495f-969e-5005e3eb18e7>`_
   * - NETWORKDAYS.INTL(start_date, end_date, [weekend], [holidays])
     - `Excel NETWORKDAYS.INTL article <https://support.microsoft.com/office/networkdays-intl-function-a9b26239-4f20-46a1-9ab8-4e925bfd5e28>`_
   * - NOW()
     - `Excel NOW article <https://support.microsoft.com/office/now-function-3337fd29-145a-4347-b2e6-20c904739c46>`_
   * - SECOND(time)
     - `Excel SECOND article <https://support.microsoft.com/office/second-function-740d1cfc-553c-4099-b668-80eaa24e8af1>`_
   * - TIME(hour, minute, second)
     - `Excel TIME article <https://support.microsoft.com/office/time-function-9a5aff99-8f7d-4611-845e-747d0b8d5457>`_
   * - TIMEVALUE(time_string)
     - `Excel TIMEVALUE article <https://support.microsoft.com/office/timevalue-function-0b615c12-33d8-4431-bf3d-f3eb6d186645>`_
   * - TODAY()
     - `Excel TODAY article <https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9>`_
   * - WEEKDAY(date, [type])
     - `Excel WEEKDAY article <https://support.microsoft.com/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a>`_
   * - WEEKNUM(date, [type])
     - `Excel WEEKNUM article <https://support.microsoft.com/office/weeknum-function-e5c43a03-b4ab-426c-b411-b18c13c75340>`_
   * - WORKDAY(start_date, num_days, [holidays])
     - `Excel WORKDAY article <https://support.microsoft.com/office/workday-function-f764a5b7-05fc-4494-9486-60d494efbf33>`_
   * - WORKDAY.INTL(start_date, num_days, [weekend], [holidays])
     - `Excel WORKDAY.INTL article <https://support.microsoft.com/office/workday-intl-function-a378391c-9ba7-4678-8a39-39611a9bf81d>`_
   * - YEAR(date)
     - `Excel YEAR article <https://support.microsoft.com/office/year-function-c64f017a-1354-490d-981f-578e8ec8d3b9>`_
   * - YEARFRAC(start_date, end_date, [day_count_convention])
     - Exact number of years between two dates (not compatible with Excel)
   * - MONTH.START(date)
     - First day of the month preceding a date (not compatible with Excel)
   * - MONTH.END(date)
     - Last day of the month following a date (not compatible with Excel)
   * - QUARTER(date)
     - Quarter of the year a specific date falls in (not compatible with Excel)
   * - QUARTER.START(date)
     - First day of the quarter of the year a specific date falls in (not compatible with Excel)
   * - QUARTER.END(date)
     - Last day of the quarter of the year a specific date falls in (not compatible with Excel)
   * - YEAR.START(date)
     - First day of the year a specific date falls in (not compatible with Excel)
   * - YEAR.END(date)
     - Last day of the year a specific date falls in (not compatible with Excel)

.. _functions/engineering:

Engineering
===========

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - DELTA(number1, [number2])
     - `Excel DELTA article <https://support.microsoft.com/office/delta-function-2f763672-c959-4e07-ac33-fe03220ba432>`_

.. _functions/filter:

Filter
======

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - FILTER(range, condition1, [condition2, ...])
     - `Excel FILTER article <https://support.microsoft.com/office/filter-function-f4f7cb66-82eb-4767-8f7c-4877ad80c759>`_
   * - UNIQUE(range, [by_column], [exactly_once])
     - `Excel UNIQUE article <https://support.microsoft.com/office/unique-function-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e>`_

.. _functions/financial:

Financial
=========

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - ACCRINTM(issue, maturity, rate, redemption, [day_count_convention])
     - `Excel ACCRINTM article <https://support.microsoft.com/office/accrintm-function-f62f01f9-5754-4cc4-805b-0e70199328a7>`_
   * - AMORLINC(cost, purchase_date, first_period_end, salvage, period, rate, [day_count_convention])
     - `Excel AMORLINC article <https://support.microsoft.com/office/amorlinc-function-7d417b45-f7f5-4dba-a0a5-3451a81079a8>`_
   * - COUPDAYS(settlement, maturity, frequency, [day_count_convention])
     - `Excel COUPDAYS article <https://support.microsoft.com/office/coupdays-function-cc64380b-315b-4e7b-950c-b30b0a76f671>`_
   * - COUPDAYBS(settlement, maturity, frequency, [day_count_convention])
     - `Excel COUPDAYBS article <https://support.microsoft.com/office/coupdaybs-function-eb9a8dfb-2fb2-4c61-8e5d-690b320cf872>`_
   * - COUPDAYSNC(settlement, maturity, frequency, [day_count_convention])
     - `Excel COUPDAYSNC article <https://support.microsoft.com/office/coupdaysnc-function-5ab3f0b2-029f-4a8b-bb65-47d525eea547>`_
   * - COUPNCD(settlement, maturity, frequency, [day_count_convention])
     - `Excel COUPNCD article <https://support.microsoft.com/office/coupncd-function-fd962fef-506b-4d9d-8590-16df5393691f>`_
   * - COUPNUM(settlement, maturity, frequency, [day_count_convention])
     - `Excel COUPNUM article <https://support.microsoft.com/office/coupnum-function-a90af57b-de53-4969-9c99-dd6139db2522>`_
   * - COUPPCD(settlement, maturity, frequency, [day_count_convention])
     - `Excel COUPPCD article <https://support.microsoft.com/office/couppcd-function-2eb50473-6ee9-4052-a206-77a9a385d5b3>`_
   * - CUMIPMT(rate, number_of_periods, present_value, first_period, last_period, [end_or_beginning])
     - `Excel CUMIPMT article <https://support.microsoft.com/office/cumipmt-function-61067bb0-9016-427d-b95b-1a752af0e606>`_
   * - CUMPRINC(rate, number_of_periods, present_value, first_period, last_period, [end_or_beginning])
     - `Excel CUMPRINC article <https://support.microsoft.com/office/cumprinc-function-94a4516d-bd65-41a1-bc16-053a6af4c04d>`_
   * - DB(cost, salvage, life, period, [month])
     - `Excel DB article <https://support.microsoft.com/office/db-function-354e7d28-5f93-4ff1-8a52-eb4ee549d9d7>`_
   * - DDB(cost, salvage, life, period, [factor])
     - `Excel DDB article <https://support.microsoft.com/office/ddb-function-519a7a37-8772-4c96-85c0-ed2c209717a5>`_
   * - DISC(settlement, maturity, price, redemption, [day_count_convention])
     - `Excel DISC article <https://support.microsoft.com/office/disc-function-71fce9f3-3f05-4acf-a5a3-eac6ef4daa53>`_
   * - DOLLARDE(fractional_price, unit)
     - `Excel DOLLARDE article <https://support.microsoft.com/office/dollarde-function-db85aab0-1677-428a-9dfd-a38476693427>`_
   * - DOLLARFR(decimal_price, unit)
     - `Excel DOLLARFR article <https://support.microsoft.com/office/dollarfr-function-0835d163-3023-4a33-9824-3042c5d4f495>`_
   * - DURATION(settlement, maturity, rate, yield, frequency, [day_count_convention])
     - `Excel DURATION article <https://support.microsoft.com/office/duration-function-b254ea57-eadc-4602-a86a-c8e369334038>`_
   * - EFFECT(nominal_rate, periods_per_year)
     - `Excel EFFECT article <https://support.microsoft.com/office/effect-function-910d4e4c-79e2-4009-95e6-507e04f11bc4>`_
   * - FV(rate, number_of_periods, payment_amount, [present_value], [end_or_beginning])
     - `Excel FV article <https://support.microsoft.com/office/fv-function-2eef9f44-a084-4c61-bdd8-4fe4bb1b71b3>`_
   * - FVSCHEDULE(principal, rate_schedule)
     - `Excel FVSCHEDULE article <https://support.microsoft.com/office/fvschedule-function-bec29522-bd87-4082-bab9-a241f3fb251d>`_
   * - INTRATE(settlement, maturity, investment, redemption, [day_count_convention])
     - `Excel INTRATE article <https://support.microsoft.com/office/intrate-function-5cb34dde-a221-4cb6-b3eb-0b9e55e1316f>`_
   * - IPMT(rate, period, number_of_periods, present_value, [future_value], [end_or_beginning])
     - `Excel IPMT article <https://support.microsoft.com/office/ipmt-function-5cce0ad6-8402-4a41-8d29-61a0b054cb6f>`_
   * - IRR(cashflow_amounts, [rate_guess])
     - `Excel IRR article <https://support.microsoft.com/office/irr-function-64925eaa-9988-495b-b290-3ad0c163c1bc>`_
   * - ISPMT(rate, period, number_of_periods, present_value)
     - `Excel ISPMT article <https://support.microsoft.com/office/ispmt-function-fa58adb6-9d39-4ce0-8f43-75399cea56cc>`_
   * - MDURATION(settlement, maturity, rate, yield, frequency, [day_count_convention])
     - `Excel MDURATION article <https://support.microsoft.com/office/mduration-function-b3786a69-4f20-469a-94ad-33e5b90a763c>`_
   * - MIRR(cashflow_amounts, financing_rate, reinvestment_return_rate)
     - `Excel MIRR article <https://support.microsoft.com/office/mirr-function-b020f038-7492-4fb4-93c1-35c345b53524>`_
   * - NOMINAL(effective_rate, periods_per_year)
     - `Excel NOMINAL article <https://support.microsoft.com/office/nominal-function-7f1ae29b-6b92-435e-b950-ad8b190ddd2b>`_
   * - NPER(rate, payment_amount, present_value, [future_value], [end_or_beginning])
     - `Excel NPER article <https://support.microsoft.com/office/nper-function-240535b5-6653-4d2d-bfcf-b6a38151d815>`_
   * - NPV(discount, cashflow1, [cashflow2, ...])
     - `Excel NPV article <https://support.microsoft.com/office/npv-function-8672cb67-2576-4d07-b67b-ac28acf2a568>`_
   * - PDURATION(rate, present_value, future_value)
     - `Excel PDURATION article <https://support.microsoft.com/office/pduration-function-44f33460-5be5-4c90-b857-22308892adaf>`_
   * - PMT(rate, number_of_periods, present_value, [future_value], [end_or_beginning])
     - `Excel PMT article <https://support.microsoft.com/office/pmt-function-0214da64-9a63-4996-bc20-214433fa6441>`_
   * - PPMT(rate, period, number_of_periods, present_value, [future_value], [end_or_beginning])
     - `Excel PPMT article <https://support.microsoft.com/office/ppmt-function-c370d9e3-7749-4ca4-beea-b06c6ac95e1b>`_
   * - PV(rate, number_of_periods, payment_amount, [future_value], [end_or_beginning])
     - `Excel PV article <https://support.microsoft.com/office/pv-function-23879d31-0e02-4321-be01-da16e8168cbd>`_
   * - PRICE(settlement, maturity, rate, yield, redemption, frequency, [day_count_convention])
     - `Excel PRICE article <https://support.microsoft.com/office/price-function-3ea9deac-8dfa-436f-a7c8-17ea02c21b0a>`_
   * - PRICEDISC(settlement, maturity, discount, redemption, [day_count_convention])
     - `Excel PRICEDISC article <https://support.microsoft.com/office/pricedisc-function-d06ad7c1-380e-4be7-9fd9-75e3079acfd3>`_
   * - PRICEMAT(settlement, maturity, issue, rate, yield, [day_count_convention])
     - `Excel PRICEMAT article <https://support.microsoft.com/office/pricemat-function-52c3b4da-bc7e-476a-989f-a95f675cae77>`_
   * - RATE(number_of_periods, payment_per_period, present_value, [future_value], [end_or_beginning], [rate_guess])
     - `Excel RATE article <https://support.microsoft.com/office/rate-function-9f665657-4a7e-4bb7-a030-83fc59e748ce>`_
   * - RECEIVED(settlement, maturity, investment, discount, [day_count_convention])
     - `Excel RECEIVED article <https://support.microsoft.com/office/received-function-7a3f8b93-6611-4f81-8576-828312c9b5e5>`_
   * - RRI(number_of_periods, present_value, future_value)
     - `Excel RRI article <https://support.microsoft.com/office/rri-function-6f5822d8-7ef1-4233-944c-79e8172930f4>`_
   * - SLN(cost, salvage, life)
     - `Excel SLN article <https://support.microsoft.com/office/sln-function-cdb666e5-c1c6-40a7-806a-e695edc2f1c8>`_
   * - SYD(cost, salvage, life, period)
     - `Excel SYD article <https://support.microsoft.com/office/syd-function-069f8106-b60b-4ca2-98e0-2a0f206bdb27>`_
   * - TBILLPRICE(settlement, maturity, discount)
     - `Excel TBILLPRICE article <https://support.microsoft.com/office/tbillprice-function-eacca992-c29d-425a-9eb8-0513fe6035a2>`_
   * - TBILLEQ(settlement, maturity, discount)
     - `Excel TBILLEQ article <https://support.microsoft.com/office/tbilleq-function-2ab72d90-9b4d-4efe-9fc2-0f81f2c19c8c>`_
   * - TBILLYIELD(settlement, maturity, price)
     - `Excel TBILLYIELD article <https://support.microsoft.com/office/tbillyield-function-6d381232-f4b0-4cd5-8e97-45b9c03468ba>`_
   * - VDB(cost, salvage, life, start, end, [factor], [no_switch])
     - `Excel VDB article <https://support.microsoft.com/office/vdb-function-dde4e207-f3fa-488d-91d2-66d55e861d73>`_
   * - XIRR(cashflow_amounts, cashflow_dates, [rate_guess])
     - `Excel XIRR article <https://support.microsoft.com/office/xirr-function-de1242ec-6477-445b-b11b-a303ad9adc9d>`_
   * - XNPV(discount, cashflow_amounts, cashflow_dates)
     - `Excel XNPV article <https://support.microsoft.com/office/xnpv-function-1b42bbf6-370f-4532-a0eb-d67c16b664b7>`_
   * - YIELD(settlement, maturity, rate, price, redemption, frequency, [day_count_convention])
     - `Excel YIELD article <https://support.microsoft.com/office/yield-function-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe>`_
   * - YIELDDISC(settlement, maturity, price, redemption, [day_count_convention])
     - `Excel YIELDDISC article <https://support.microsoft.com/office/yielddisc-function-a9dbdbae-7dae-46de-b995-615faffaaed7>`_
   * - YIELDMAT(settlement, maturity, issue, rate, price, [day_count_convention])
     - `Excel YIELDMAT article <https://support.microsoft.com/office/yieldmat-function-ba7d1809-0d33-4bcb-96c7-6c56ec62ef6f>`_

.. _functions/info:

Info
====

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - ISERR(value)
     - `Excel IS article <https://support.microsoft.com/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665>`_
   * - ISERROR(value)
     - `Excel IS article <https://support.microsoft.com/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665>`_
   * - ISLOGICAL(value)
     - `Excel IS article <https://support.microsoft.com/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665>`_
   * - ISNA(value)
     - `Excel IS article <https://support.microsoft.com/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665>`_
   * - ISNONTEXT(value)
     - `Excel IS article <https://support.microsoft.com/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665>`_
   * - ISNUMBER(value)
     - `Excel IS article <https://support.microsoft.com/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665>`_
   * - ISTEXT(value)
     - `Excel IS article <https://support.microsoft.com/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665>`_
   * - ISBLANK(value)
     - `Excel IS article <https://support.microsoft.com/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665>`_
   * - NA()
     - `Excel NA article <https://support.microsoft.com/office/na-function-5469c2d1-a90c-4fb5-9bbc-64bd9bb6b47c>`_

.. _functions/logical:

Logical
=======

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - AND(logical_expression1, [logical_expression2, ...])
     - `Excel AND article <https://support.microsoft.com/office/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9>`_
   * - FALSE()
     - `Excel FALSE article <https://support.microsoft.com/office/false-function-2d58dfa5-9c03-4259-bf8f-f0ae14346904>`_
   * - IF(logical_expression, value_if_true, [value_if_false])
     - `Excel IF article <https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2>`_
   * - IFERROR(value, [value_if_error])
     - `Excel IFERROR article <https://support.microsoft.com/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611>`_
   * - IFNA(value, [value_if_error])
     - `Excel IFNA article <https://support.microsoft.com/office/ifna-function-6626c961-a569-42fc-a49d-79b4951fd461>`_
   * - IFS(condition1, value1, [condition2, ...], [value2, ...])
     - `Excel IFS article <https://support.microsoft.com/office/ifs-function-36329a26-37b2-467c-972b-4a39bd951d45>`_
   * - NOT(logical_expression)
     - `Excel NOT article <https://support.microsoft.com/office/not-function-9cfc6011-a054-40c7-a140-cd4ba2d87d77>`_
   * - OR(logical_expression1, [logical_expression2, ...])
     - `Excel OR article <https://support.microsoft.com/office/or-function-7d17ad14-8700-4281-b308-00b131e22af0>`_
   * - TRUE()
     - `Excel TRUE article <https://support.microsoft.com/office/true-function-7652c6e3-8987-48d0-97cd-ef223246b3fb>`_
   * - XOR(logical_expression1, [logical_expression2, ...])
     - `Excel XOR article <https://support.microsoft.com/office/xor-function-1548d4c2-5e47-4f77-9a92-0533bba14f37>`_

.. _functions/lookup:

Lookup
======

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - ADDRESS(row, column, [absolute_relative_mode], [use_a1_notation], [sheet])
     - `Excel ADDRESS article <https://support.microsoft.com/office/address-function-d0c26c0d-3991-446b-8de4-ab46431d4f89>`_
   * - COLUMN([cell_reference])
     - `Excel COLUMN article <https://support.microsoft.com/office/column-function-44e8c754-711c-4df3-9da4-47a55042554b>`_
   * - COLUMNS(range)
     - `Excel COLUMNS article <https://support.microsoft.com/office/columns-function-4e8e7b4e-e603-43e8-b177-956088fa48ca>`_
   * - HLOOKUP(search_key, range, index, [is_sorted])
     - `Excel HLOOKUP article <https://support.microsoft.com/office/hlookup-function-a3034eec-b719-4ba3-bb65-e1ad662ed95f>`_
   * - INDEX(reference, row, column)
     - `Excel INDEX article <https://support.microsoft.com/office/index-function-a5dcf0dd-996d-40a4-a822-b56b061328bd>`_
   * - LOOKUP(search_key, search_array, [result_range])
     - `Excel LOOKUP article <https://support.microsoft.com/office/lookup-function-446d94af-663b-451d-8251-369d5e3864cb>`_
   * - MATCH(search_key, range, [search_type])
     - `Excel MATCH article <https://support.microsoft.com/office/match-function-e8dffd45-c762-47d6-bf89-533f4a37673a>`_
   * - ROW([cell_reference])
     - `Excel ROW article <https://support.microsoft.com/office/row-function-3a63b74a-c4d0-4093-b49a-e76eb49a6d8d>`_
   * - ROWS(range)
     - `Excel ROWS article <https://support.microsoft.com/office/rows-function-b592593e-3fc2-47f2-bec1-bda493811597>`_
   * - VLOOKUP(search_key, range, index, [is_sorted])
     - `Excel VLOOKUP article <https://support.microsoft.com/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1>`_
   * - XLOOKUP(search_key, lookup_range, return_range, [if_not_found], [match_mode], [search_mode])
     - `Excel XLOOKUP article <https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929>`_

.. _functions/math:

Math
====

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - ABS(value)
     - `Excel ABS article <https://support.microsoft.com/office/abs-function-3420200f-5628-4e8c-99da-c99d7c87713c>`_
   * - ACOS(value)
     - `Excel ACOS article <https://support.microsoft.com/office/acos-function-cb73173f-d089-4582-afa1-76e5524b5d5b>`_
   * - ACOSH(value)
     - `Excel ACOSH article <https://support.microsoft.com/office/acosh-function-e3992cc1-103f-4e72-9f04-624b9ef5ebfe>`_
   * - ACOT(value)
     - `Excel ACOT article <https://support.microsoft.com/office/acot-function-dc7e5008-fe6b-402e-bdd6-2eea8383d905>`_
   * - ACOTH(value)
     - `Excel ACOTH article <https://support.microsoft.com/office/acoth-function-cc49480f-f684-4171-9fc5-73e4e852300f>`_
   * - ASIN(value)
     - `Excel ASIN article <https://support.microsoft.com/office/asin-function-81fb95e5-6d6f-48c4-bc45-58f955c6d347>`_
   * - ASINH(value)
     - `Excel ASINH article <https://support.microsoft.com/office/asinh-function-4e00475a-067a-43cf-926a-765b0249717c>`_
   * - ATAN(value)
     - `Excel ATAN article <https://support.microsoft.com/office/atan-function-50746fa8-630a-406b-81d0-4a2aed395543>`_
   * - ATAN2(x, y)
     - `Excel ATAN2 article <https://support.microsoft.com/office/atan2-function-c04592ab-b9e3-4908-b428-c96b3a565033>`_
   * - ATANH(value)
     - `Excel ATANH article <https://support.microsoft.com/office/atanh-function-3cd65768-0de7-4f1d-b312-d01c8c930d90>`_
   * - CEILING(value, [factor])
     - `Excel CEILING article <https://support.microsoft.com/office/ceiling-function-0a5cd7c8-0720-4f0a-bd2c-c943e510899f>`_
   * - CEILING.MATH(number, [significance], [mode])
     - `Excel CEILING.MATH article <https://support.microsoft.com/office/ceiling-math-function-80f95d2f-b499-4eee-9f16-f795a8e306c8>`_
   * - CEILING.PRECISE(number, [significance])
     - `Excel CEILING.PRECISE article <https://support.microsoft.com/office/ceiling-precise-function-f366a774-527a-4c92-ba49-af0a196e66cb>`_
   * - COS(angle)
     - `Excel COS article <https://support.microsoft.com/office/cos-function-0fb808a5-95d6-4553-8148-22aebdce5f05>`_
   * - COSH(value)
     - `Excel COSH article <https://support.microsoft.com/office/cosh-function-e460d426-c471-43e8-9540-a57ff3b70555>`_
   * - COT(angle)
     - `Excel COT article <https://support.microsoft.com/office/cot-function-c446f34d-6fe4-40dc-84f8-cf59e5f5e31a>`_
   * - COTH(value)
     - `Excel COTH article <https://support.microsoft.com/office/coth-function-2e0b4cb6-0ba0-403e-aed4-deaa71b49df5>`_
   * - COUNTBLANK(value1, [value2, ...])
     - `Excel COUNTBLANK article <https://support.microsoft.com/office/countblank-function-6a92d772-675c-4bee-b346-24af6bd3ac22>`_
   * - COUNTIF(range, criterion)
     - `Excel COUNTIF article <https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34>`_
   * - COUNTIFS(criteria_range1, criterion1, [criteria_range2, ...], [criterion2, ...])
     - `Excel COUNTIFS article <https://support.microsoft.com/office/countifs-function-dda3dc6e-f74e-4aee-88bc-aa8c2a866842>`_
   * - COUNTUNIQUE(value1, [value2, ...])
     - Counts number of unique values in a range (not compatible with Excel)
   * - COUNTUNIQUEIFS(range, criteria_range1, criterion1, [criteria_range2, ...], [criterion2, ...])
     - Counts number of unique values in a range, filtered by a set of criteria (not compatible with Excel)
   * - CSC(angle)
     - `Excel CSC article <https://support.microsoft.com/office/csc-function-07379361-219a-4398-8675-07ddc4f135c1>`_
   * - CSCH(value)
     - `Excel CSCH article <https://support.microsoft.com/office/csch-function-f58f2c22-eb75-4dd6-84f4-a503527f8eeb>`_
   * - DECIMAL(value, base)
     - `Excel DECIMAL article <https://support.microsoft.com/office/decimal-function-ee554665-6176-46ef-82de-0a283658da2e>`_
   * - DEGREES(angle)
     - `Excel DEGREES article <https://support.microsoft.com/office/degrees-function-4d6ec4db-e694-4b94-ace0-1cc3f61f9ba1>`_
   * - EXP(value)
     - `Excel EXP article <https://support.microsoft.com/office/exp-function-c578f034-2c45-4c37-bc8c-329660a63abe>`_
   * - FLOOR(value, [factor])
     - `Excel FLOOR article <https://support.microsoft.com/office/floor-function-14bb497c-24f2-4e04-b327-b0b4de5a8886>`_
   * - FLOOR.MATH(number, [significance], [mode])
     - `Excel FLOOR.MATH article <https://support.microsoft.com/office/floor-math-function-c302b599-fbdb-4177-ba19-2c2b1249a2f5>`_
   * - FLOOR.PRECISE(number, [significance])
     - `Excel FLOOR.PRECISE article <https://support.microsoft.com/office/floor-precise-function-f769b468-1452-4617-8dc3-02f842a0702e>`_
   * - INT(value)
     - `Excel INT article <https://support.microsoft.com/office/int-function-a6c4af9e-356d-4369-ab6a-cb1fd9d343ef>`_
   * - ISEVEN(value)
     - `Excel ISEVEN article <https://support.microsoft.com/office/iseven-function-aa15929a-d77b-4fbb-92f4-2f479af55356>`_
   * - ISO.CEILING(number, [significance])
     - `Excel ISO.CEILING article <https://support.microsoft.com/office/iso-ceiling-function-e587bb73-6cc2-4113-b664-ff5b09859a83>`_
   * - ISODD(value)
     - `Excel ISODD article <https://support.microsoft.com/office/isodd-function-1208a56d-4f10-4f44-a5fc-648cafd6c07a>`_
   * - LN(value)
     - `Excel LN article <https://support.microsoft.com/office/ln-function-81fe1ed7-dac9-4acd-ba1d-07a142c6118f>`_
   * - MOD(dividend, divisor)
     - `Excel MOD article <https://support.microsoft.com/office/mod-function-9b6cd169-b6ee-406a-a97b-edf2a9dc24f3>`_
   * - MUNIT(dimension)
     - `Excel MUNIT article <https://support.microsoft.com/office/munit-function-c9fe916a-dc26-4105-997d-ba22799853a3>`_
   * - ODD(value)
     - `Excel ODD article <https://support.microsoft.com/office/odd-function-deae64eb-e08a-4c88-8b40-6d0b42575c98>`_
   * - PI()
     - `Excel PI article <https://support.microsoft.com/office/pi-function-264199d0-a3ba-46b8-975a-c4a04608989b>`_
   * - POWER(base, exponent)
     - `Excel POWER article <https://support.microsoft.com/office/power-function-d3f2908b-56f4-4c3f-895a-07fb519c362a>`_
   * - PRODUCT(factor1, [factor2, ...])
     - `Excel PRODUCT article <https://support.microsoft.com/office/product-function-8e6b5b24-90ee-4650-aeec-80982a0512ce>`_
   * - RAND()
     - `Excel RAND article <https://support.microsoft.com/office/rand-function-4cbfa695-8869-4788-8d90-021ea9f5be73>`_
   * - RANDARRAY([rows], [columns], [min], [max], [whole_number])
     - `Excel RANDARRAY article <https://support.microsoft.com/office/randarray-function-21261e55-3bec-4885-86a6-8b0a47fd4d33>`_
   * - RANDBETWEEN(low, high)
     - `Excel RANDBETWEEN article <https://support.microsoft.com/office/randbetween-function-4cc7f0d1-87dc-4eb7-987f-a469ab381685>`_
   * - ROUND(value, [places])
     - `Excel ROUND article <https://support.microsoft.com/office/round-function-c018c5d8-40fb-4053-90b1-b3e7f61a213c>`_
   * - ROUNDDOWN(value, [places])
     - `Excel ROUNDDOWN article <https://support.microsoft.com/office/rounddown-function-2ec94c73-241f-4b01-8c6f-17e6d7968f53>`_
   * - ROUNDUP(value, [places])
     - `Excel ROUNDUP article <https://support.microsoft.com/office/roundup-function-f8bc9b23-e795-47db-8703-db171d0c42a7>`_
   * - SEC(angle)
     - `Excel SEC article <https://support.microsoft.com/office/sec-function-ff224717-9c87-4170-9b58-d069ced6d5f7>`_
   * - SECH(value)
     - `Excel SECH article <https://support.microsoft.com/office/sech-function-e05a789f-5ff7-4d7f-984a-5edb9b09556f>`_
   * - SIN(angle)
     - `Excel SIN article <https://support.microsoft.com/office/sin-function-cf0e3432-8b9e-483c-bc55-a76651c95602>`_
   * - SINH(value)
     - `Excel SINH article <https://support.microsoft.com/office/sinh-function-1e4e8b9f-2b65-43fc-ab8a-0a37f4081fa7>`_
   * - SQRT(value)
     - `Excel SQRT article <https://support.microsoft.com/office/sqrt-function-654975c2-05c4-4831-9a24-2c65e4040fdf>`_
   * - SUM(value1, [value2, ...])
     - `Excel SUM article <https://support.microsoft.com/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89>`_
   * - SUMIF(criteria_range, criterion, [sum_range])
     - `Excel SUMIF article <https://support.microsoft.com/office/sumif-function-169b8c99-c05c-4483-a712-1697a653039b>`_
   * - SUMIFS(sum_range, criteria_range1, criterion1, [criteria_range2, ...], [criterion2, ...])
     - `Excel SUMIFS article <https://support.microsoft.com/office/sumifs-function-c9e748f5-7ea7-455d-9406-611cebce642b>`_
   * - TAN(angle)
     - `Excel TAN article <https://support.microsoft.com/office/tan-function-08851a40-179f-4052-b789-d7f699447401>`_
   * - TANH(value)
     - `Excel TANH article <https://support.microsoft.com/office/tanh-function-017222f0-a0c3-4f69-9787-b3202295dc6c>`_
   * - TRUNC(value, [places])
     - `Excel TRUNC article <https://support.microsoft.com/office/trunc-function-8b86a64c-3127-43db-ba14-aa5ceb292721>`_

.. _functions/misc:

Misc
====

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - FORMAT.LARGE.NUMBER(value, [unit])
     - Apply a large number format (not compatible with Excel)

.. _functions/odoo:

Odoo
====

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - ODOO.CREDIT(account_codes, date_range, [offset], [company_id], [include_unposted])
     - Get the total credit for the specified account(s) and period (not compatible with Excel)
   * - ODOO.DEBIT(account_codes, date_range, [offset], [company_id], [include_unposted])
     - Get the total debit for the specified account(s) and period (not compatible with Excel)
   * - ODOO.BALANCE(account_codes, date_range, [offset], [company_id], [include_unposted])
     - Get the total balance for the specified account(s) and period (not compatible with Excel)
   * - ODOO.FISCALYEAR.START(day, [company_id])
     - Returns the starting date of the fiscal year encompassing the provided date (not compatible with Excel)
   * - ODOO.FISCALYEAR.END(day, [company_id])
     - Returns the ending date of the fiscal year encompassing the provided date (not compatible with Excel)
   * - ODOO.ACCOUNT.GROUP(type)
     - Returns the account ids of a given group (not compatible with Excel)
   * - ODOO.CURRENCY.RATE(currency_from, currency_to, [date])
     - This function takes in two currency codes as arguments, and returns the exchange rate from the first currency to the second as float (not compatible with Excel)
   * - ODOO.LIST(list_id, index, field_name)
     - Get the value from a list (not compatible with Excel)
   * - ODOO.LIST.HEADER(list_id, field_name)
     - Get the header of a list (not compatible with Excel)
   * - ODOO.FILTER.VALUE(filter_name)
     - Return the current value of a spreadsheet filter (not compatible with Excel)
   * - ODOO.PIVOT(pivot_id, measure_name, [domain_field_name, ...], [domain_value, ...])
     - Get the value from a pivot (not compatible with Excel)
   * - ODOO.PIVOT.HEADER(pivot_id, [domain_field_name, ...], [domain_value, ...])
     - Get the header of a pivot (not compatible with Excel)
   * - ODOO.PIVOT.TABLE(pivot_id, [row_count], [include_total], [include_column_titles])
     - Get a pivot table (not compatible with Excel)

.. _functions/operators:

Operators
=========

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - ADD(value1, value2)
     - Sum of two numbers (not compatible with Excel)
   * - CONCAT(value1, value2)
     - `Excel CONCAT article <https://support.microsoft.com/office/concat-function-9b1a9a3f-94ff-41af-9736-694cbd6b4ca2>`_
   * - DIVIDE(dividend, divisor)
     - One number divided by another (not compatible with Excel)
   * - EQ(value1, value2)
     - Equal (not compatible with Excel)
   * - GT(value1, value2)
     - Strictly greater than (not compatible with Excel)
   * - GTE(value1, value2)
     - Greater than or equal to (not compatible with Excel)
   * - LT(value1, value2)
     - Less than (not compatible with Excel)
   * - LTE(value1, value2)
     - Less than or equal to (not compatible with Excel)
   * - MINUS(value1, value2)
     - Difference of two numbers (not compatible with Excel)
   * - MULTIPLY(factor1, factor2)
     - Product of two numbers (not compatible with Excel)
   * - NE(value1, value2)
     - Not equal (not compatible with Excel)
   * - POW(base, exponent)
     - A number raised to a power (not compatible with Excel)
   * - UMINUS(value)
     - A number with the sign reversed (not compatible with Excel)
   * - UNARY.PERCENT(percentage)
     - Value interpreted as a percentage (not compatible with Excel)
   * - UPLUS(value)
     - A specified number, unchanged (not compatible with Excel)

.. _functions/statistical:

Statistical
===========

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - AVEDEV(value1, [value2, ...])
     - `Excel AVEDEV article <https://support.microsoft.com/office/avedev-function-58fe8d65-2a84-4dc7-8052-f3f87b5c6639>`_
   * - AVERAGE(value1, [value2, ...])
     - `Excel AVERAGE article <https://support.microsoft.com/office/average-function-047bac88-d466-426c-a32b-8f33eb960cf6>`_
   * - AVERAGE.WEIGHTED(values, weights, [additional_values, ...], [additional_weights, ...])
     - Weighted average (not compatible with Excel)
   * - AVERAGEA(value1, [value2, ...])
     - `Excel AVERAGEA article <https://support.microsoft.com/office/averagea-function-f5f84098-d453-4f4c-bbba-3d2c66356091>`_
   * - AVERAGEIF(criteria_range, criterion, [average_range])
     - `Excel AVERAGEIF article <https://support.microsoft.com/office/averageif-function-faec8e2e-0dec-4308-af69-f5576d8ac642>`_
   * - AVERAGEIFS(average_range, criteria_range1, criterion1, [criteria_range2, ...], [criterion2, ...])
     - `Excel AVERAGEIFS article <https://support.microsoft.com/office/averageifs-function-48910c45-1fc0-4389-a028-f7c5c3001690>`_
   * - CORREL(data_y, data_x)
     - `Excel CORREL article <https://support.microsoft.com/office/correl-function-995dcef7-0c0a-4bed-a3fb-239d7b68ca92>`_
   * - COUNT(value1, [value2, ...])
     - `Excel COUNT article <https://support.microsoft.com/office/count-function-a59cd7fc-b623-4d93-87a4-d23bf411294c>`_
   * - COUNTA(value1, [value2, ...])
     - `Excel COUNTA article <https://support.microsoft.com/office/counta-function-7dc98875-d5c1-46f1-9a82-53f3219e2509>`_
   * - COVAR(data_y, data_x)
     - `Excel COVAR article <https://support.microsoft.com/office/covar-function-50479552-2c03-4daf-bd71-a5ab88b2db03>`_
   * - COVARIANCE.P(data_y, data_x)
     - `Excel COVARIANCE.P article <https://support.microsoft.com/office/covariance-p-function-6f0e1e6d-956d-4e4b-9943-cfef0bf9edfc>`_
   * - COVARIANCE.S(data_y, data_x)
     - `Excel COVARIANCE.S article <https://support.microsoft.com/office/covariance-s-function-0a539b74-7371-42aa-a18f-1f5320314977>`_
   * - FORECAST(x, data_y, data_x)
     - `Excel FORECAST article <https://support.microsoft.com/office/forecast-and-forecast-linear-functions-50ca49c9-7b40-4892-94e4-7ad38bbeda99>`_
   * - GROWTH(known_data_y, [known_data_x], [new_data_x], [b])
     - Fits points to exponential growth trend (not compatible with Excel)
   * - INTERCEPT(data_y, data_x)
     - `Excel INTERCEPT article <https://support.microsoft.com/office/intercept-function-2a9b74e2-9d47-4772-b663-3bca70bf63ef>`_
   * - LARGE(data, n)
     - `Excel LARGE article <https://support.microsoft.com/office/large-function-3af0af19-1190-42bb-bb8b-01672ec00a64>`_
   * - LINEST(data_y, [data_x], [calculate_b], [verbose])
     - `Excel LINEST article <https://support.microsoft.com/office/linest-function-84d7d0d9-6e50-4101-977a-fa7abf772b6d>`_
   * - LOGEST(data_y, [data_x], [calculate_b], [verbose])
     - `Excel LOGEST article <https://support.microsoft.com/office/logest-function-f27462d8-3657-4030-866b-a272c1d18b4b>`_
   * - MATTHEWS(data_x, data_y)
     - Compute the Matthews correlation coefficient of a dataset (not compatible with Excel)
   * - MAX(value1, [value2, ...])
     - `Excel MAX article <https://support.microsoft.com/office/max-function-e0012414-9ac8-4b34-9a47-73e662c08098>`_
   * - MAXA(value1, [value2, ...])
     - `Excel MAXA article <https://support.microsoft.com/office/maxa-function-814bda1e-3840-4bff-9365-2f59ac2ee62d>`_
   * - MAXIFS(range, criteria_range1, criterion1, [criteria_range2, ...], [criterion2, ...])
     - `Excel MAXIFS article <https://support.microsoft.com/office/maxifs-function-dfd611e6-da2c-488a-919b-9b6376b28883>`_
   * - MEDIAN(value1, [value2, ...])
     - `Excel MEDIAN article <https://support.microsoft.com/office/median-function-d0916313-4753-414c-8537-ce85bdd967d2>`_
   * - MIN(value1, [value2, ...])
     - `Excel MIN article <https://support.microsoft.com/office/min-function-61635d12-920f-4ce2-a70f-96f202dcc152>`_
   * - MINA(value1, [value2, ...])
     - `Excel MINA article <https://support.microsoft.com/office/mina-function-245a6f46-7ca5-4dc7-ab49-805341bc31d3>`_
   * - MINIFS(range, criteria_range1, criterion1, [criteria_range2, ...], [criterion2, ...])
     - `Excel MINIFS article <https://support.microsoft.com/office/minifs-function-6ca1ddaa-079b-4e74-80cc-72eef32e6599>`_
   * - PEARSON(data_y, data_x)
     - `Excel PEARSON article <https://support.microsoft.com/office/pearson-function-0c3e30fc-e5af-49c4-808a-3ef66e034c18>`_
   * - PERCENTILE(data, percentile)
     - `Excel PERCENTILE article <https://support.microsoft.com/office/percentile-exc-function-bbaa7204-e9e1-4010-85bf-c31dc5dce4ba>`_
   * - PERCENTILE.EXC(data, percentile)
     - `Excel PERCENTILE.EXC article <https://support.microsoft.com/office/percentrank-exc-function-d8afee96-b7e2-4a2f-8c01-8fcdedaa6314>`_
   * - PERCENTILE.INC(data, percentile)
     - `Excel PERCENTILE.INC article <https://support.microsoft.com/office/percentile-inc-function-680f9539-45eb-410b-9a5e-c1355e5fe2ed>`_
   * - POLYFIT.COEFFS(data_y, data_x, order, [intercept])
     - Compute the coefficients of polynomial regression of the dataset (not compatible with Excel)
   * - POLYFIT.FORECAST(x, data_y, data_x, order, [intercept])
     - Predict value by computing a polynomial regression of the dataset (not compatible with Excel)
   * - QUARTILE(data, quartile_number)
     - `Excel QUARTILE article <https://support.microsoft.com/office/quartile-function-93cf8f62-60cd-4fdb-8a92-8451041e1a2a>`_
   * - QUARTILE.EXC(data, quartile_number)
     - `Excel QUARTILE.EXC article <https://support.microsoft.com/office/quartile-exc-function-5a355b7a-840b-4a01-b0f1-f538c2864cad>`_
   * - QUARTILE.INC(data, quartile_number)
     - `Excel QUARTILE.INC article <https://support.microsoft.com/office/quartile-inc-function-1bbacc80-5075-42f1-aed6-47d735c4819d>`_
   * - RANK(value, data, [is_ascending])
     - `Excel RANK article <https://support.microsoft.com/office/rank-function-6a2fc49d-1831-4a03-9d8c-c279cf99f723>`_
   * - RSQ(data_y, data_x)
     - `Excel RSQ article <https://support.microsoft.com/office/rsq-function-d7161715-250d-4a01-b80d-a8364f2be08f>`_
   * - SMALL(data, n)
     - `Excel SMALL article <https://support.microsoft.com/office/small-function-17da8222-7c82-42b2-961b-14c45384df07>`_
   * - SLOPE(data_y, data_x)
     - `Excel SLOPE article <https://support.microsoft.com/office/slope-function-11fb8f97-3117-4813-98aa-61d7e01276b9>`_
   * - SPEARMAN(data_y, data_x)
     - Compute the Spearman rank correlation coefficient of a dataset (not compatible with Excel)
   * - STDEV(value1, [value2, ...])
     - `Excel STDEV article <https://support.microsoft.com/office/stdev-function-51fecaaa-231e-4bbb-9230-33650a72c9b0>`_
   * - STDEV.P(value1, [value2, ...])
     - `Excel STDEV.P article <https://support.microsoft.com/office/stdev-p-function-6e917c05-31a0-496f-ade7-4f4e7462f285>`_
   * - STDEV.S(value1, [value2, ...])
     - `Excel STDEV.S article <https://support.microsoft.com/office/stdev-s-function-7d69cf97-0c1f-4acf-be27-f3e83904cc23>`_
   * - STDEVA(value1, [value2, ...])
     - `Excel STDEVA article <https://support.microsoft.com/office/stdeva-function-5ff38888-7ea5-48de-9a6d-11ed73b29e9d>`_
   * - STDEVP(value1, [value2, ...])
     - `Excel STDEVP article <https://support.microsoft.com/office/stdevp-function-1f7c1c88-1bec-4422-8242-e9f7dc8bb195>`_
   * - STDEVPA(value1, [value2, ...])
     - `Excel STDEVPA article <https://support.microsoft.com/office/stdevpa-function-5578d4d6-455a-4308-9991-d405afe2c28c>`_
   * - STEYX(data_y, data_x)
     - `Excel STEYX article <https://support.microsoft.com/office/steyx-function-6ce74b2c-449d-4a6e-b9ac-f9cef5ba48ab>`_
   * - TREND(known_data_y, [known_data_x], [new_data_x], [b])
     - Fits points to linear trend derived via least-squares (not compatible with Excel)
   * - VAR(value1, [value2, ...])
     - `Excel VAR article <https://support.microsoft.com/office/var-function-1f2b7ab2-954d-4e17-ba2c-9e58b15a7da2>`_
   * - VAR.P(value1, [value2, ...])
     - `Excel VAR.P article <https://support.microsoft.com/office/var-p-function-73d1285c-108c-4843-ba5d-a51f90656f3a>`_
   * - VAR.S(value1, [value2, ...])
     - `Excel VAR.S article <https://support.microsoft.com/office/var-s-function-913633de-136b-449d-813e-65a00b2b990b>`_
   * - VARA(value1, [value2, ...])
     - `Excel VARA article <https://support.microsoft.com/office/vara-function-3de77469-fa3a-47b4-85fd-81758a1e1d07>`_
   * - VARP(value1, [value2, ...])
     - `Excel VARP article <https://support.microsoft.com/office/varp-function-26a541c4-ecee-464d-a731-bd4c575b1a6b>`_
   * - VARPA(value1, [value2, ...])
     - `Excel VARPA article <https://support.microsoft.com/office/varpa-function-59a62635-4e89-4fad-88ac-ce4dc0513b96>`_

.. _functions/text:

Text
====

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - CHAR(table_number)
     - `Excel CHAR article <https://support.microsoft.com/office/char-function-bbd249c8-b36e-4a91-8017-1c133f9b837a>`_
   * - CLEAN(text)
     - `Excel CLEAN article <https://support.microsoft.com/office/clean-function-26f3d7c5-475f-4a9c-90e5-4b8ba987ba41>`_
   * - CONCATENATE(string1, [string2, ...])
     - `Excel CONCATENATE article <https://support.microsoft.com/office/concatenate-function-8f8ae884-2ca8-4f7a-b093-75d702bea31d>`_
   * - EXACT(string1, string2)
     - `Excel EXACT article <https://support.microsoft.com/office/exact-function-d3087698-fc15-4a15-9631-12575cf29926>`_
   * - FIND(search_for, text_to_search, [starting_at])
     - `Excel FIND article <https://support.microsoft.com/office/find-findb-functions-c7912941-af2a-4bdf-a553-d0d89b0a0628>`_
   * - JOIN(delimiter, value_or_array1, [value_or_array2, ...])
     - Concatenates elements of arrays with delimiter (not compatible with Excel)
   * - LEFT(text, [number_of_characters])
     - `Excel LEFT article <https://support.microsoft.com/office/left-leftb-functions-9203d2d2-7960-479b-84c6-1ea52b99640c>`_
   * - LEN(text)
     - `Excel LEN article <https://support.microsoft.com/office/len-lenb-functions-29236f94-cedc-429d-affd-b5e33d2c67cb>`_
   * - LOWER(text)
     - `Excel LOWER article <https://support.microsoft.com/office/lower-function-3f21df02-a80c-44b2-afaf-81358f9fdeb4>`_
   * - MID(text, starting_at, extract_length)
     - `Excel MID article <https://support.microsoft.com/office/mid-midb-functions-d5f9e25c-d7d6-472e-b568-4ecb12433028>`_
   * - PROPER(text_to_capitalize)
     - `Excel PROPER article <https://support.microsoft.com/office/proper-function-52a5a283-e8b2-49be-8506-b2887b889f94>`_
   * - REPLACE(text, position, length, new_text)
     - `Excel REPLACE article <https://support.microsoft.com/office/replace-replaceb-functions-8d799074-2425-4a8a-84bc-82472868878a>`_
   * - RIGHT(text, [number_of_characters])
     - `Excel RIGHT article <https://support.microsoft.com/office/right-rightb-functions-240267ee-9afa-4639-a02b-f19e1786cf2f>`_
   * - SEARCH(search_for, text_to_search, [starting_at])
     - `Excel SEARCH article <https://support.microsoft.com/office/search-searchb-functions-9ab04538-0e55-4719-a72e-b6f54513b495>`_
   * - SPLIT(text, delimiter, [split_by_each], [remove_empty_text])
     - `Excel TEXTSPLIT article <https://support.microsoft.com/office/textsplit-function-b1ca414e-4c21-4ca0-b1b7-bdecace8a6e7>`_
   * - SUBSTITUTE(text_to_search, search_for, replace_with, [occurrence_number])
     - `Excel SUBSTITUTE article <https://support.microsoft.com/office/substitute-function-6434944e-a904-4336-a9b0-1e58df3bc332>`_
   * - TEXT(number, format)
     - `Excel TEXT article <https://support.microsoft.com/office/text-function-20d5ac4d-7b94-49fd-bb38-93d29371225c>`_
   * - TEXTJOIN(delimiter, ignore_empty, text1, [text2, ...])
     - `Excel TEXTJOIN article <https://support.microsoft.com/office/textjoin-function-357b449a-ec91-49d0-80c3-0e8fc845691c>`_
   * - TRIM(text)
     - `Excel TRIM article <https://support.microsoft.com/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9>`_
   * - UPPER(text)
     - `Excel UPPER article <https://support.microsoft.com/office/upper-function-c11f29b3-d1a3-4537-8df6-04d0049963d6>`_

.. _functions/web:

Web
===

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name and arguments
     - Description or link
   * - HYPERLINK(url, [link_label])
     - `Excel HYPERLINK article <https://support.microsoft.com/office/hyperlink-function-333c7ce6-c5ae-4164-9c47-7de9b76f577f>`_
