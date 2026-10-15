<<<<<<< 2f8ed910ef5ef22b22112decbac44d6f0f999740
=====
Forms
=====

Form blocks are used to collect information from website visitors and, if applicable, create records
in the database. To add a form to a website page, drag and drop the :guilabel:`Contact & Forms`
categorical building block, then select a block in the pop-up window.

.. _building_blocks/forms/action:

Action
======

By default, submitting a form sends an email containing the visitor's submitted information.
Depending on the apps installed on the database, additional actions that can automatically create
records may become available. To choose a different action, click :guilabel:`Edit`, select a form
field, navigate to the :guilabel:`Style` tab, and, in the :guilabel:`Form` section, select the
desired :guilabel:`Action`:

- :doc:`Apply for a Job </applications/hr/recruitment/recruitment_flow>`
- :ref:`Create a Customer <ecommerce/customer_accounts/account-creation>`
- :ref:`Create a Ticket <helpdesk/receiving_tickets/website-form>`
- :doc:`Create an Opportunity </applications/sales/crm/acquire_leads/opportunities_form>`
- :doc:`Subscribe to Newsletter </applications/marketing/email_marketing/mailing_lists>`
- :ref:`Create a Shift <planning/create-shift>`
- :doc:`Create a Task </applications/services/project/tasks/task_creation>`
- :guilabel:`More models`: to generate other types of records

By default, submitting the form redirects visitors to a *Thank you* page. Use the :guilabel:`URL`
field to send them to a different page. Alternatively, select :guilabel:`Nothing` or :guilabel:`Show
Message` in the :guilabel:`On Success` field to keep visitors on the form's page.

You can also define the :guilabel:`Labels Width` and specify whether :guilabel:`Marked Fields` are
:guilabel:`Required` or :guilabel:`Optional`, or select :guilabel:`None` to indicate
that no fields are marked. Additionally, define the :guilabel:`Marker` used to identify marked
fields.

.. seealso::
   Configure the :doc:`visibility <../visibility>` settings for forms.

.. _building_blocks/forms/fields:

Fields
======

To add a new field to the form, navigate to the :guilabel:`Style` tab and click the :guilabel:`+
Field` button in the :guilabel:`Form` header section.

.. tip::
   Alternatively, click the :guilabel:`+ New` button in the :guilabel:`Field` header section, then
   select :guilabel:`Field`. You can also add a :guilabel:`Title`, :guilabel:`Text`, or
   :guilabel:`Separator` to structure the form.

To modify any field on the form, select the field, then use the options available in the
:guilabel:`Field` section of the :guilabel:`Style` tab. For example, you can:

- Change the field :guilabel:`Type`.

  .. tip::
     It is also possible to select an :guilabel:`Existing Field` from the database and use the data
     it contains. The fields available depend on the selected action. Property fields added to the
     database can also be used depending on the selected action.

  .. spoiler:: Click here to preview all field types.

     .. image:: forms/all-types-of-field.png
        :alt: All types of form fields

     Some fields are visually similar, but the data entered must follow a specific format.

- Edit the field's :guilabel:`Label`.
- Enable a field :guilabel:`Description`. Toggle the switch on and click the default description on
  the form to modify it.
- Specify if the field is :guilabel:`Required`.
- Use the :guilabel:`Requirement` field to add validation :guilabel:`Conditions` to ensure visitors
  enter valid information. For example, set the condition requiring the :guilabel:`Email` field to
  contain an `@` symbol or matching a specific domain.
- Add an :ref:`animation <website/elements/animations>`.
- Edit the field's :doc:`visibility <../../web_design/visibility>` settings.

Depending on the selected field, the following options are available:

.. tabs::

   .. tab:: String and numerical fields

      For text and string fields, such as :guilabel:`Text`, :guilabel:`Long Text`,
      :guilabel:`Email`, and :guilabel:`Url`, as well as numerical fields, such as
      :guilabel:`Telephone`, :guilabel:`Number`, and :guilabel:`Decimal Number`, you can define a
      :guilabel:`Placeholder` and a :guilabel:`Default Value`.

      For the :guilabel:`Long Text` field, you can also specify the field's :guilabel:`Height`.

      Additionally, you can set character limits for string fields and the :guilabel:`Telephone`
      field. To do so, enable the :guilabel:`Character Limit` option, then set the minimum and
      maximum character counts using the :guilabel:`Min Characters` and :guilabel:`Max Characters`
      fields.

   .. tab:: Selection fields

      The following selection fields are available:

      - :guilabel:`Checkbox`: Visitors can select or clear the checkbox. Enable :guilabel:`Default
        Value` to have it selected by default, and click :icon:`fa-eye-slash` (:guilabel:`Hide`)
        next to :guilabel:`Label` to hide its label.
      - :guilabel:`Multiple Checkboxes`: Visitors can select multiple options.
      - :guilabel:`Radio Buttons`: Visitors can select one option.
      - :guilabel:`Selection`: Visitors can select one option from the drop-down menu.

      For fields with multiple options, enable the options you want to set as default by toggling
      the switch on. To remove an option, click the :icon:`fa-minus` (:guilabel:`remove`) icon. To
      add a new option, click :guilabel:`Add New Option` and enter the option.

        .. tip::
           - For :guilabel:`Multiple Checkboxes` and :guilabel:`Radio Buttons`, define how the
             options are displayed: :guilabel:`Horizontal` or :guilabel:`Vertical`.
           - For :guilabel:`Radio Buttons` and :guilabel:`Selection` dropdown lists, toggle the
             :guilabel:`Add Other` switch on to allow visitors to add their own option.
           - For :guilabel:`Selection` dropdown lists, toggle the :guilabel:`Allow Empty` switch on
             to allow visitors to leave the field empty.
           - You can also :ref:`translate <translate/translate>` selection options.

   .. tab:: Date and time

      The :guilabel:`Date` and :guilabel:`Date & Time` fields allow visitors to select a date and,
      if applicable, a time using the date selector. You can also define a :guilabel:`Placeholder`
      and a :guilabel:`Default Value`, e.g., to use a specific date/time by default.

      .. tip::
         If needed, customize the :icon:`fa-calendar` (:guilabel:`calendar`) :ref:`icon
         <website/elements/icons>`.

   .. tab:: Files

      The :guilabel:`File Upload` field type allows visitors to upload a file. You can define the
      :guilabel:`Max # of Files` as well as the :guilabel:`Max File Size`. Optionally, enable the
      :guilabel:`Restrict File Types` option, then select the supported file types.

To apply the changes, click :guilabel:`Save`.

.. tip::
   - Drag and drop :ref:`inner content snippets <website/building_blocks/add>` inside forms to
     create sections, add images, set titles, and include other content elements.
   - Modify the text of the :guilabel:`Submit` button by clicking it and entering the desired text.
     You can also change the button's :guilabel:`Type`, :guilabel:`Size`, :guilabel:`Shape`, and
     :guilabel:`Animation` in the :guilabel:`Button` section of the :guilabel:`Style` tab.

.. _building_blocks/forms/add-to-external:

Add an Odoo contact form on a non-Odoo website
==============================================

You can display an Odoo contact form on another website using an iframe. To do so, follow these
steps:

#. **Prepare the Odoo form:** Create a contact form on a page in Odoo Website and remove the
   :ref:`header and footer design <website/header_footer/design>`. Make sure only the contact form
   remains on the page.
#. **Generate an embeddable code:** Copy the URL of the Odoo form page and paste it into an iframe
   generator, such as `La Digitale.dev <https://ladigitale.dev/digitools/generateur-iframe>`_ or
   `iFrame Generator <https://www.iframe-generator.com/>`_ . Adjust the width and height for proper
   display.
#. **Add the embedded code to the non-Odoo website:** Open the relevant page's HTML (in the code
   editor or CMS) and insert the embedded code where the form should be displayed.

.. example::
   Example of an embedded code:

   .. code-block:: html

       <iframe src="https://example.com/odoo-form"
               style="border:0;"
               name="odooForm"
               scrolling="no"
               frameborder="0"
               marginheight="0"
               marginwidth="0"
               height="400px"
               width="600px"
               allowfullscreen>
        </iframe>
||||||| b92af720ce3cbc93da96b43a15ccdee04f6e5f0b
=======
=====
Forms
=====

Form blocks are used to collect information from website visitors and, if applicable, create records
in the database. To add a form to a website page, drag and drop the :guilabel:`Contact & Forms`
categorical building block, then select a block in the pop-up window.

.. _building_blocks/forms/action:

Action
======

By default, submitting a form sends an email containing the visitor's submitted information.
Depending on the apps installed on the database, additional actions that can automatically create
records may become available. To choose a different action, click :guilabel:`Edit`, select a form
field, navigate to the :guilabel:`Style` tab, and, in the :guilabel:`Form` section, select the
desired :guilabel:`Action`:

- :doc:`Apply for a Job </applications/hr/recruitment/recruitment_flow>`
- :ref:`Create a Customer <ecommerce/customer_accounts/account-creation>`
- :ref:`Create a Ticket <helpdesk/receiving_tickets/website-form>`
- :doc:`Create an Opportunity </applications/sales/crm/acquire_leads/opportunities_form>`
- :doc:`Subscribe to Newsletter </applications/marketing/email_marketing/mailing_lists>`
- :doc:`Create a Task </applications/services/project/tasks/task_creation>`
- :guilabel:`More models`: to generate other types of records

By default, submitting the form redirects visitors to a *Thank you* page. Use the :guilabel:`URL`
field to send them to a different page. Alternatively, select :guilabel:`Nothing` or :guilabel:`Show
Message` in the :guilabel:`On Success` field to keep visitors on the form's page.

You can also define the :guilabel:`Labels Width` and specify whether :guilabel:`Marked Fields` are
:guilabel:`Required` or :guilabel:`Optional`, or select :guilabel:`None` to indicate
that no fields are marked. Additionally, define the :guilabel:`Mark Text` used to identify marked
fields.

.. seealso::
   Configure the :doc:`visibility <../visibility>` settings for forms.

.. _building_blocks/forms/fields:

Fields
======

To add a new field to the form, navigate to the :guilabel:`Style` tab and click the
:guilabel:`+ Field` button in the :guilabel:`Form` or :guilabel:`Field` header section. To modify
any field on the form, select the field, then use the options available in the :guilabel:`Field`
section of the :guilabel:`Style` tab. For example, you can:

- Change the field :guilabel:`Type`.

  .. tip::
     It is also possible to select an :guilabel:`Existing Field` from the database and use the data
     it contains. The fields available depend on the selected action. Property fields added to the
     database can also be used.

  .. spoiler:: Click here to preview all field types.

     .. image:: forms/all-types-of-field.png
        :alt: All types of form fields

     Some fields are visually similar, but the data entered must follow a specific format.

- Edit the field's :guilabel:`Label` and adapt its :guilabel:`Position`.
- Enable a field :guilabel:`Description`. Toggle the switch on and click the default description on
  the form to modify it.
- Specify if the field is :guilabel:`Required`.
- Use the :guilabel:`Requirement` field to add validation :guilabel:`Conditions` to ensure visitors
  enter valid information. For example, set the condition requiring the :guilabel:`Email` field to
  contain an `@` symbol.
- Add an :ref:`animation <website/elements/animations>`.
- Edit the field's :doc:`visibility <../../web_design/visibility>` settings.

Depending on the selected field, the following options are available:

.. tabs::

   .. tab:: String and numerical fields

      For text and string fields, such as :guilabel:`Text`, :guilabel:`Long Text`,
      :guilabel:`Email`, and :guilabel:`Url`, as well as numerical fields, such as
      :guilabel:`Telephone`, :guilabel:`Number`, and :guilabel:`Decimal Number`, you can define a
      :guilabel:`Placeholder` and a :guilabel:`Default Value`.

      For the :guilabel:`Long Text` field, you can also specify the field's :guilabel:`Height`.

   .. tab:: Selection fields

      The following selection fields are available:

      - :guilabel:`Checkbox`: Visitors can select or clear the checkbox. Enable :guilabel:`Default
        Value` to have it selected by default.
      - :guilabel:`Multiple Checkboxes`: Visitors can select multiple options.
      - :guilabel:`Radio Buttons`: Visitors can select one option.

        .. tip::
           For :guilabel:`Multiple Checkboxes` and :guilabel:`Radio Buttons`, define how the options
           are displayed: :guilabel:`Horizontal` or :guilabel:`Vertical`.

      - :guilabel:`Selection`: Visitors can select one option from the drop-down menu.

      For fields with multiple options, enable the options you want to set as default by toggling
      the switch on. To remove an option, click the :icon:`fa-minus` (:guilabel:`remove`) icon. To
      add a new option, click :guilabel:`Add New Option` and enter the option.

      .. tip::
         You can also :ref:`translate <translate/translate>` selection options.

   .. tab:: Date and time

      The :guilabel:`Date` and :guilabel:`Date & Time` fields allow visitors to select a date and,
      if applicable, a time using the date selector. You can also define a :guilabel:`Placeholder`
      and a :guilabel:`Default Value`, e.g., to use a specific date/time by default.

      .. tip::
         If needed, customize the :icon:`fa-calendar` (:guilabel:`calendar`) :ref:`icon
         <website/elements/icons>`.

   .. tab:: Files

      The :guilabel:`File Upload` field type allows visitors to upload a file. You can define the
      :guilabel:`Max # of Files` as well as the :guilabel:`Max File Size`.

To apply the changes, click :guilabel:`Save`.

.. tip::
   Modify the text of the :guilabel:`Submit` button by clicking it and entering the desired text.
   You can also change the :guilabel:`Button Position` in the :guilabel:`Submit Button` section of
   the :guilabel:`Style` tab.

.. _building_blocks/forms/add-to-external:

Add an Odoo contact form on a non-Odoo website
==============================================

You can display an Odoo contact form on another website using an iframe. To do so, follow these
steps:

#. **Prepare the Odoo form:** Create a contact form on a page in Odoo Website and remove the
   :ref:`header and footer design <website/header_footer/design>`. Make sure only the contact form
   remains on the page.
#. **Generate an embeddable code:** Copy the URL of the Odoo form page and paste it into an iframe
   generator, such as `La Digitale.dev <https://ladigitale.dev/digitools/generateur-iframe>`_ or
   `iFrame Generator <https://www.iframe-generator.com/>`_ . Adjust the width and height for proper
   display.
#. **Add the embedded code to the non-Odoo website:** Open the relevant page's HTML (in the code
   editor or CMS) and insert the embedded code where the form should be displayed.

.. example::
   Example of an embedded code:

   .. code-block:: html

       <iframe src="https://example.com/odoo-form"
               style="border:0;"
               name="odooForm"
               scrolling="no"
               frameborder="0"
               marginheight="0"
               marginwidth="0"
               height="400px"
               width="600px"
               allowfullscreen>
        </iframe>
>>>>>>> c88fc783f3fd8812857421ea73f158c7859a2789
