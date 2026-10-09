.. attribute:: type
   :noindex:

   The type of the button indicating how it behaves. It can have three different values:

   .. attribute:: object
      :noindex:

      Call a method on the view's model. The button's `name` is the method that is called with the
      current record ID and the current `context`.

   .. attribute:: action
      :noindex:

      Load and execute an `ir.actions` action record. The button's `name` is the XMLID of the
      action to load. The `context` is extended with the view's model (as `active_model`) and with
      the current record (as `active_id`).

   .. attribute:: upload
      :noindex:

      Ask the user for files, then call a method of the view's model with them. The files are
      stored as new attachments, not linked to any record, and the method `name` receives their
      ids in its `attachment_ids` argument. It is called on the current record (a form, a kanban
      card), on the selected records (a list or kanban header), or on an empty recordset
      otherwise.
      Empty files are refused. The method can return an action, which is executed; otherwise the
      view is reloaded. A :class:`~odoo.exceptions.UserError` raised by the method is shown as a
      notification and everything the method wrote, the attachments included, is rolled back.

      .. code-block:: python

         @api.model
         def action_create_from_uploads(self, attachment_ids):
             attachments = self.env['ir.attachment'].browse(attachment_ids)
             records = self.create([{'name': attachment.name} for attachment in attachments])
             return {
                 'type': 'ir.actions.act_window',
                 'res_model': self._name,
                 'domain': [('id', 'in', records.ids)],
                 'views': [(False, 'list'), (False, 'form')],
             }

      In the `header` of a list or kanban view, the button also accepts files dragged and
      dropped on the records of the view. In a form, the record is saved first, as for the other
      buttons. In the `header` of the list or kanban view of an :ref:`x2many field <reference/view_architectures/form/field>`, the button is shown
      above the field, without drag and drop: it calls the method of the field's model on an
      empty recordset, without saving the parent record, given in the `context` as
      `active_model` and `active_id`.

      The button `options` can contain:

      - `accept`: the accepted file types, with the syntax of the `accept` attribute of an HTML
        file input (`'.pdf,.xml'`, `'image/*'`). Default: all types.
      - `multiple`: whether several files can be picked at once. Default: `True`.
      - `max_size`: the maximum size of a file, in bytes. Default: the upload limit of the
        server. The larger files are left out with a warning, the others are uploaded.
      - `res_model`: call the method of this model, on an empty recordset, instead of the view's
        model. The button `context` passes the values it needs, and a form is not saved first.

   .. example::
      .. code-block:: xml

         <button type="object" name="action_create_new" string="Create document"/>
         <button type="action" name="addon.action_create_view" string="Create and Edit"/>
         <button type="upload" name="action_create_from_uploads" string="Upload"
                 options="{'accept': '.pdf'}"/>

   :requirement: Mandatory if the `special` attribute is not set
   :type: str
