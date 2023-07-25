.. attribute:: sample
   :noindex:

   Whether the view should be populated with a set of sample records if none are found for the
   current model.

   These fake records have heuristics for certain field names/models. For example, a field
   `display_name` on the model `res.users` will be populated with sample people names, while an
   `email` field will be in the form `firstname.lastname@sample.demo`.

   The user is unable to interact with these data, and they will be discarded as soon as an action
   is performed (record created, column added, etc.).

   :requirement: Optional
   :type: bool
   :default: `False`
