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
- :doc:`Request Withdrawal </applications/websites/ecommerce/order_handling>`
- :guilabel:`More models`: to generate other types of records

By default, submitting the form redirects visitors to a *Thank you* page. Use the :guilabel:`URL`
field to send them to a different page. Alternatively, select :guilabel:`Nothing` or :guilabel:`Show
Message` in the :guilabel:`On Success` field to keep visitors on the form's page.

You can also define the :guilabel:`Labels Position` and :guilabel:`Labels Width`, and specify
whether :guilabel:`Marked Fields` are :guilabel:`Required` or :guilabel:`Optional`. Select
:guilabel:`None` to indicate that no fields are marked. Additionally, define the :guilabel:`Marker`
used to identify marked fields.

.. seealso::
   Configure the :doc:`visibility <../visibility>` settings for forms.

.. _building_blocks/forms/fields:

Fields
======

To add a new field to the form, navigate to the :guilabel:`Style` tab and click the :guilabel:`+
Field` button in the :guilabel:`Form` or :guilabel:`Field` header section. To edit any field on the
form, select the field, then modify and format its label directly on the form and use the options
available in the :guilabel:`Field` section of the :guilabel:`Style` tab. For example, you can:

- Change the field :guilabel:`Type`.

  .. tip::
     It is also possible to select an :guilabel:`Existing Field` from the database and use the data
     it contains. The fields available depend on the selected action. Property fields added to the
     database can also be used depending on the selected action.

  .. spoiler:: Click here to preview all field types.

     .. image:: forms/all-types-of-field.png
        :alt: All types of form fields

     Some fields are visually similar, but the data entered must follow a specific format.

- Specify if the field is :guilabel:`Required`.
- Enable a field :guilabel:`Description`. Toggle the switch on and click the default description on
  the form to modify it.
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

      - :guilabel:`Checkbox`: Visitors can select or clear the checkbox. Toggle :guilabel:`Hide
        Label` on to remove the label, and enable :guilabel:`Default Value` to have it selected by
        default.
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
             :guilabel:`Add Other` switch on to allow visitors to add their own option. You can
             also define a :guilabel:`Label` and :guilabel:`Placeholder`.
           - For :guilabel:`Selection` dropdown lists, toggle the :guilabel:`Allow Empty` switch on
             to allow visitors to leave the field empty. You can also define a
             :guilabel:`Placeholder`.
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
      :guilabel:`Restrict File Types` option, then enable the supported file types.

To apply the changes, click :guilabel:`Save`.

.. tip::
   - Drag and drop :ref:`inner content snippets <website/building_blocks/add>` inside forms to
     create sections, add images, set titles, and include other content elements.
   - Modify the text of the :guilabel:`Submit` button by clicking it and entering the desired text.
     You can also change the button's :guilabel:`Type`, :guilabel:`Size`, :guilabel:`Shape`, and
     :guilabel:`Animation` in the :guilabel:`Button` section of the :guilabel:`Style` tab.

.. _building_blocks/forms/prefill:

Prefill form fields with URL parameters
=======================================

Form fields can be automatically filled using URL query parameters. This is useful for marketing
campaigns, personalized links, or any scenario where you want to pre-populate a form for the
visitor.

.. _building_blocks/forms/shareable:

Enable shareable links
----------------------

URL prefill is **disabled by default** and must be enabled per form with the :guilabel:`Share &
Pre-fill` option. Forms without it ignore query parameters entirely. Once enabled, the shareable
link carries a reserved ``usp_pp`` parameter whose value targets that specific form, so prefill
applies only to it (useful when a page has multiple forms). A link without a ``usp_pp`` parameter
prefills every sharing-enabled form on the page. To enable prefill and get the shareable link for a
form:

#. Open the website editor and click the form block.
#. In the :guilabel:`Style` tab, under the :guilabel:`Form` section, enable the
   :guilabel:`Share & Pre-fill` toggle.
#. A :guilabel:`Shareable Link` field appears with the page URL and the form's ``usp_pp`` token
   (e.g., ``https://example.com/contactus?usp_pp=form-abc123``).
#. Click the :icon:`fa-clipboard` (:guilabel:`Copy Link`) button to copy the link to your
   clipboard.
#. Click :guilabel:`Save`. The link only works once the page is saved with sharing enabled.

.. _building_blocks/forms/field-name:

Identify field names
--------------------

Each form field has a **Field Name** used as the query parameter key in the URL. To find it:

#. Open the website editor and click a field in the form.
#. In the :guilabel:`Style` tab, under the :guilabel:`Field` section, locate the
   :guilabel:`Field Name` value.
#. Use this exact name as the query parameter key when constructing the URL.

.. _building_blocks/forms/construct-url:

Construct the prefill URL
-------------------------

Append field parameters to the shareable link using the format ``&field_name=value`` (the link
already starts with ``?usp_pp=...``). Separate multiple fields with ``&``.

.. example::
   For a contact form with the shareable link
   ``https://example.com/contactus?usp_pp=form-abc123``, prefill the :guilabel:`Name` and
   :guilabel:`Email` fields:

   .. code-block:: text

      https://example.com/contactus?usp_pp=form-abc123&name=John+Doe&email_from=john@example.com

   When a visitor opens this URL, the form fields are automatically populated with the provided
   values.

For :guilabel:`Selection`, :guilabel:`Radio`, and :guilabel:`Checkbox` fields, the parameter value
must match one of the available option values exactly. For a single checkbox, ``true``, ``1``, and
``on`` check the box, while ``false``, ``0``, and ``off`` uncheck it, even when it is checked by
default.

For :guilabel:`Date` and :guilabel:`Datetime` fields, use the `ISO 8601
<https://en.wikipedia.org/wiki/ISO_8601>`_ format, e.g., ``2026-10-22`` or ``2026-10-22T18:00``. The
date and time must be separated by a ``T``; a space is **not** accepted, so ``2026-10-22 18:00`` (or
``2026-10-22%2018:00``) is ignored even though spaces are otherwise valid in values. The value is
displayed to each visitor in their own local date and time format.

For :guilabel:`Datetime` fields, a time zone in the value is interpreted as the instant it
represents and then shown in each visitor's own time zone: ``2026-10-22T18:00Z`` (UTC) appears as
``20:00`` to a visitor in UTC+2. Use ``Z`` for UTC, or encode a numeric offset's ``+`` as ``%2B``
(e.g., ``2026-10-22T18:00%2B02:00``), since a raw ``+`` in a URL is read as a space.

Incomplete date or time values are accepted, and the missing parts are completed automatically:

- ``2026`` fills January 1, 2026.
- ``2026-10`` fills October 1, 2026.
- ``18:00`` fills today at 18:00.

In all cases, invalid or unmatched values are ignored and the fields keep their default values. The
exception is a :guilabel:`Selection` or :guilabel:`Radio` field with :guilabel:`Add Other` enabled:
an unmatched value selects the :guilabel:`Other` option and fills its input with that value.

For **multiple-checkbox fields**, repeat the field name in the query string for each value:

.. code-block:: text

   https://example.com/contactus?usp_pp=form-abc123&interests=sports&interests=tech

.. note::
   - Values provided by the backend always take precedence over URL parameters. This includes
     server-side ``data-for`` values (e.g., on the Contact Us form) and the ``data-fill-with``
     attribute that prefills name, phone, and email from the logged-in user's contact record.
   - URL parameters are ignored for fields hidden from the visitor — a field whose
     :guilabel:`Visibility` is set to :guilabel:`Hidden`, and internal hidden fields such as
     ``email_to``. Only fields the visitor can see are prefilled, so a shared link cannot silently
     change a value they would not notice.
   - Spaces in values can be encoded as ``+`` or ``%20``.

.. warning::
   On a **sharing-enabled** form, avoid naming visible fields after keys that commonly appear in
   URLs, such as ``usp_pp`` (reserved by this feature), tracking keys (``utm_source``,
   ``utm_medium``, etc.), or routing and search keys (``debug``, ``lang``, ``redirect``, ``page``,
   ``search``, etc.). These keys are frequently appended by analytics tools, ad networks, or Odoo
   itself, and a visible field bearing the same name would be silently prefilled. Hidden fields are
   unaffected — URL parameters never reach them (see the note above).

.. _building_blocks/forms/no-prefill:

Disable prefill on specific fields
----------------------------------

To prevent a specific field from being prefilled by URL parameters while still allowing prefill on
other fields in the same form, add the ``data-no-prefill="true"`` attribute to the field's wrapper
element (the ``<div class="s_website_form_field">`` that contains the label and input).

.. example::
   In the page's HTML editor:

   .. code-block:: html

      <div class="s_website_form_field" data-no-prefill="true">
          <label class="s_website_form_label">Verification code</label>
          <input class="s_website_form_input" type="text" name="code"/>
      </div>

   Visitors opening ``?usp_pp=form-abc123&code=ABCD`` will not see ``ABCD`` injected into this
   field, even though other fields on the form continue to prefill normally.

.. note::
   - Backend ``data-for`` values and the ``data-fill-with`` attribute continue to apply to the
     field regardless of ``data-no-prefill``; only URL parameter prefill is blocked.
   - Editing this attribute currently requires the page HTML editor (:menuselection:`Site -->
     HTML/CSS editor`).

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
