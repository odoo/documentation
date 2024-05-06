.. attribute:: invisible
   :noindex:

   Whether the element is visible (`False`) or hidden (`True`), as a Python expression that
   evaluates to a bool.

   .. note::
      There are two uses for the `invisible` attribute:

      - Usability: to avoid overloading the view and to make it easier for the user to read,
        depending on the content.
      - Technical: a field must be present (invisible is enough) in the view to be used in a
        Python expression.

   .. example::

      .. code-block:: xml

         <field name="fname_a" invisible="True"/> <!-- necessary to evaluate invisible attribute of 'fname_b' field -->
         <field name="fname_b" invisible="fname_c != 3 and fname_a == parent.fname_d"/>
         <group invisible="fname_c != 4">
             <field name="fname_c"/>
             <field name="fname_d"/>
         <group>

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `False`
