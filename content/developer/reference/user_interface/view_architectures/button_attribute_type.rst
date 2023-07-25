.. attribute:: type
   :noindex:

   The type of the button indicating how it behaves. It can have two different values:

   .. attribute:: object
      :noindex:

      Call a method on the view's model. The button's `name` is the method that is called with the
      current record ID and the current `context`.

   .. attribute:: action
      :noindex:

      Load and execute an `ir.actions` action record. The button's `name` is the XMLID of the
      action to load. The `context` is extended with the view's model (as `active_model`) and with
      the current record (as `active_id`).

   .. example::
      .. code-block:: xml

         <button type="object" name="action_create_new" string="Create document"/>
         <button type="action" name="addon.action_create_view" string="Create and Edit"/>

   :requirement: Mandatory if the `special` attribute is not set
   :type: str
