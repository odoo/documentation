========================
Development
========================


How to set defaults to one2many records
============================

This is done by simply adding the context to the field on your form
.. code-block:: HTML

    <field name="direct_deposit_ids" nolabel="1" options="{'not_delete': True}"
                                        context="{'default_employee_id': employee_id,'default_contract_id': contract_id}">


