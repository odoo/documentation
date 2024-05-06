.. attribute:: default_order
   :noindex:

   A comma-separated list of fields names that overrides the ordering defined on the model through
   the :attr:`~odoo.models.BaseModel._order` attribute.

   To inverse the sorting order of a field, postfix it with `desc`, separated by a space.

   .. example::
      .. code-block:: xml

         <tree default_order="sequence,name desc">
             ...
         </tree>

   :requirement: Optional
   :type: str
   :default: `''`
