.. attribute:: context
   :noindex:

   The context that is merged into the view's context when performing the button's call, as a Python
   expression that evaluates to a dict.

   .. example::
      .. code-block:: xml

         <button name="button_confirm" type="object" context="{'BUSINESS_KEY': ANY}" string="LABEL"/>

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `{}`
