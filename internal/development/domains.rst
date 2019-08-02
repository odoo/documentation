========================
Working with domains
========================


Twenty20 uses polish notation for domain filters. Before going further let’s try to understand Polish notation first.


**What is Polish Notation?**
------------------------------


Polish notation is also called as “Prefix notation”. It is a way of expressing arithmetic expressions which do not use brackets to define priorities for evaluation of operators. In this notation, an operator is prefixed to operands, i.e. operator is written ahead of operands.

**Example:** + A * B C



For more details regarding Polish notation you can take a look at below article:

https://en.wikipedia.org/wiki/Polish_notation


In Twenty20, the domain is written as syntax ('field_name', 'operator', ‘value').

Where:

- field_name: The field name for which you want to apply the condition.
- operator: The usual comparison operators are < , > , <= , >= , = , != .
- value: The value is evaluated as a Python expression. It can use literal values, such as numbers, booleans, strings, or lists, and can use fields and identifiers available in the evaluation context.
- Based on above explanation, let’s try to write domain in Polish notation:



**Example**

    Normal Expression: ((A AND B) OR C ) OR (D AND E)

    Polish Expression: ['|', '|', '&', A, B, C, '&', D, E]




**Explanation**


**Step 1:** Start with an outermost operator and shift it to the start of the expression.



- ((A AND B) OR C ) OR (D AND E) => OR ((A AND B) OR C ) (D AND E)

I have highlighted which operation moved in each step.




**Step 2:** Repeat step 1 for each expression for each operator to shift.

We will use the output of last expression Step 1 and we will use it as the input of Step 2. We will continue this chain until we reach final expression.




- OR ((A AND B) OR C ) (D AND E) => OR OR ((A AND B) C ) (D AND E)
- OR OR ((A AND B) C ) (D AND E) => OR OR AND ((A B) C ) (D AND E)
- OR OR AND ((A B) C ) (D AND E) => OR OR AND ((A B) C ) AND (D E)



**Step 3:** Remove all brackets.

- OR OR AND A B C AND D E

According to domain syntax the above expression will be written as ['|', '|', '&', A, B, C, '&', D, E].

The whole steps can be understood by following:

.. image:: /static/img/steps.png


Let’s take an example of a domain which is set in Lot/Serial number field of work orders of MRP module. It only filters the records which satisfy the following condition:



    (('product_id', '=', product_id), '&amp;', ('product_id.tracking', '!=', 'serial')), ’|’, ('use_next_on_work_order_id', '=', id)


- If you will try to write the above expression in “Polish” notation as per explanation then, you will get it as per below:

    '|', '&amp;', ('product_id', '=', product_id), ('product_id.tracking', '!=', 'serial'), ('use_next_on_work_order_id', '=', id)


- We can apply this domain in py or xml files. Here is the syntax of the same:

**XML file:**

    <field name="final_lot_id" domain="['|', '&amp;', ('product_id', '=', product_id), ('product_id.tracking', '!=', 'serial'), ('use_next_on_work_order_id', '=', id)]" groups="stock.group_production_lot"/>

**py file:**

    final_lot_id = fields.Many2one('stock.production.lot', 'Lot/Serial Number', domain="['|', '&amp;', ('product_id', '=', product_id), ('product_id.tracking', '!=', 'serial'), ('use_next_on_work_order_id', '=', id)]",states={'done': [('readonly', True)], 'cancel': [('readonly', True)]})

RST Reference:
https://github.com/lsegal/atom-rst-preview/blob/master/sample.rst