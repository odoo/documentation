========================
Payroll Setup
========================

______________________________
Salary Rules
______________________________

Worker Compensation Rules
==============================
When creating workers compensation salary rules there are a few importan things to remember.

Here is an example of a working Workers compensation rule.

**REMEMBER**

With workers compensation there are 2 rules reg( regular time and salary) and ovt (for the overtime).  If the customer
is using double time thena  third rule would need to be created for double time.

Sample Rule Code::

    total_hrs = 0
    total_rate = 0
    total_comp = 0
    wc_rate = 0
    gross = 0

    for x in work_comp_code.WCELEC:
        wc_rate = x.workers_comp_id.amount

        if x.code.endswith('REG'):
            hourly_rate = max((x and x.cert_job_amount or 0), (rules.dict.get(x.code, 0) and rules.dict.get(x.code).amount_fix or 0), (contract.wage or 0)) + wage_adjustment.get(x.job_id.id, 0)
            total_hrs += x.number_of_hours
            total_rate = hourly_rate
            gross += total_hrs * total_rate


        if x.code.endswith('ARY'):
            gross += contract.wage


        if x.code.endswith('OMM'):
            gross += inputs.COMM.amount


    result_qty = total_hrs
    result = gross
    result_comp =wc_rate

RST Reference:
https://github.com/lsegal/atom-rst-preview/blob/master/sample.rst