.. attribute:: widget
   :noindex:

   The rendering method and context to use in place of the default one assigned to the field's type
   (e.g., :class:`~odoo.fields.Char`, :class:`~odoo.fields.Many2one`). See
   :ref:`reference/js/widgets`.

   .. example::
      .. code-block:: xml

         <form>
             <field name="tag_ids" widget="many2many_tags"/>
         </form>
         <list>
             <field name="sequence" widget="handle"/>
             <field name="level_progress" widget="progressbar"/>
         </list>

   :requirement: Optional
   :type: str
   :default: `''`
