.. rst-class:: o-definition-list

``header``
  defines custom buttons similar to :ref:`list view buttons <reference/views/list/button>` in the control panel
  that perform an action/call a model's method.

  .. code-block:: xml

      <header>
          <button name="toDoAlways" type="object" string="Always displayed" display="always"/>
          <button name="toDoSelection" type="object" string="Displayed if selection"/>
      </header>

  Does not support any attribute but can have children:

  .. rst-class:: o-definition-list

  ``button``
    as a :ref:`list view button <reference/views/list/button>` which accepts an extra attribute when placed in a `header`:

    .. rst-class:: o-definition-list

    ``display``
      By default, those buttons are only displayed when some records are
      selected, and they apply on the selection. When the attribute ``display``
      is set to ``always``, the button is available all the time, even if there's
      no selection.
