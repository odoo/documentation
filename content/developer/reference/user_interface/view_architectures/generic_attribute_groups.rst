.. attribute:: groups
   :noindex:

   The comma-separated list of user groups to whom the element is displayed. Users who do not belong
   to at least one of these groups are unable to see the element. Groups can be prefixed with the
   negative `!` operator to exclude them.

   .. example::

      .. code-block:: xml

         <field name="FIELD_NAME" groups="base.group_no_one,!base.group_multi_company"/>

   :requirement: Optional
   :type: str
   :default: `''`
