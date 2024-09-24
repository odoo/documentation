.. attribute:: name
   :noindex:

   The name of the field to render.

   :requirement: Mandatory
   :type: str

.. attribute:: widget
   :noindex:

   The widget used to represent the field. The selected widget can change the way the field is
   rendered and/or the way it can be edited. It refers to a Javascript implementation (an Owl
   component) registered to the `fields` registry.

   :requirement: Optional
   :type: str
