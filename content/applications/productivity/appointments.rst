:showcontent:

============
Appointments
============

Configuration
=============

To create a new appointment,

#. Access the :guilabel:`Appointments` module from the Odoo dashboard.
#. Click :guilabel:`New`. Doing so opens the :ref:`appointment setup form
   <online_appointment/setup>`.

.. note::
   To edit a preexisting appointment, click :icon:`fa-cog` :guilabel:`Action` and :icon:`fa-pencil`
   :guilabel:`Edit`

.. _online_appointment/setup:

Setup
-----

Fill in the form:

- :guilabel:`Appointment Title`: This is the name that appears on the website.
- :guilabel:`Duration`: Define the duration of a booking slot.
- :guilabel:`Scheduling` and **Cancelling** rules:

  - :guilabel:`Min 01:00 hours before`: Appointments must be scheduled at least `xxx` hours before
    the appointment time.
  - :guilabel:`Max in xx days or from *Date*`: Appointments cannot be scheduled more than **xx
    days** in advance.
  - **Cancellation Policy**: :guilabel:`Allow Cancellation` up to **xx hours** before the
    appointment.
- :guilabel:`Availability on`:

  - :guilabel:`Users`: Booking a slot corresponds to booking a person’s time (e.g., doctors, massage
    therapists). Time slots are linked to the user’s availability and schedule.
  - :guilabel:`Resources`: Booking corresponds to reserving available resources (e.g., restaurant
    tables, tennis courts, event rooms). Selecting this options enable secondary fields to set up:

    - :guilabel:`Resources`: Define the bookable resources. You can either select preexisting
      resources or :guilabel:`Create and edit` new resources.
    - :guilabel:`Manage Capacities`: Manage the maximum amount of people a resource can handle (e.g.
      Table for 6 persons, ...)

    .. note::
       Tables in restaurants are automatically available to select in the :guilabel:`Resources`
       field.

- :guilabel:`Front-End Display`: Choose how the appointment options are displayed on the front-end:
  - :guilabel:`No Picture`
  - :guilabel:`Show Pictures`
- :guilabel:`Assignment Method`: Set how users or resources are assigned:

  - :guilabel:`Pick User/Resource then Time`: Select a user or resource first, then choose a time
    slot.
  - :guilabel:`Select Time then User/Resource`: Choose a time slot first, then select a user or
    resource.
  - :guilabel:`Select Time then Auto-Assign`: Choose a time slot, and the system automatically
    assigns a user or resource.

Schedule tab
------------

Define the available days and timeframes. Once configured, the system automatically generates
appointment slots, taking into account:

  - The defined schedule.
  - The availability of resources or users.
  - The appointment duration.
  - The scheduling and cancelling rules.

Options tab
-----------

Configure additional settings for the appointment. Below are the elements and their descriptions:

- **Website**: Specify the website where the appointment will be accessible. You can publish an
  appointment on one website and not another by configuring its availability during the setup
  process.
- **Timezone**: Set the timezone for the appointment. This ensures the appointment timings are
  displayed correctly to the attendees. Automatically adapts based on the user’s location.
- **Location**: Enter the physical or virtual location of the appointment. If left empty, the
  meeting is considered to take place online.
- **Videoconference Link**: Choose the videoconferencing platform or tool. For example, "Odoo
  Discuss" can be selected.
- **Manual Confirmation**: A checkbox to require manual approval for the appointment. When selected,
  appointments must be confirmed by the organizer.
- **Up-front Payment**: A checkbox to require payment in advance before confirming the appointment.
- **Create Opportunities**: A checkbox to create sales opportunities automatically from the
  appointment.
- **Reminders**: Set notifications and reminders for the appointment. Examples include:

  - Notification: 15 minutes before the appointment.
  - Email: 3 hours before the appointment.
  - SMS Text Message: 1 hour before the appointment.
- **Confirmation Email**: Template for the email sent to confirm an appointment (e.g., "Appointment:
  Attendee Invitation").
- **CC to**: Specify additional email addresses to receive copies of appointment-related communications.
- **Allow Guests**: A checkbox to permit attendees to invite guests to the appointment.

Questions tab
-------------

Optionally display a pop-up with questions to the user.

### Messages
- **Intro & Extra Messages**: Customize messages above the booking form.
- **Appointments**: Displays all booked slots for the current appointment.
- **Preview**: Click "Go to Website" to preview the appointment.

Questions Tab
-------------

Optionally define additional questions that attendees must answer when booking the appointment.

To add a new question:
#. Click :guilabel:`Add a line` to open the :guilabel:`Create Questions` popup window.

   - **Question**: A field to specify the question text (e.g., "What are your symptoms?").
   - **Question Type**: Determines the type of response the attendee can provide.

     - **Single line text**: A short text response.
     - **Multi-line text**: A longer, paragraph-style text response.
     - **Dropdown (one answer)**: A dropdown menu where attendees can select one answer.
     - **Radio (one answer)**: A list of options where attendees can select one answer using radio
       buttons.
     - **Checkboxes (multiple answers)**: A list of options where attendees can select multiple
       answers using checkboxes.
   - **Available Answers**: Specifies the predefined answers for dropdown, radio, or checkbox
      question types.
   - **Placeholder**: A placeholder text to guide the attendee on how to answer the question (e.g.,
     "I feel nauseous...").
   - **Required Answer**: A checkbox to mark the question as mandatory. When selected, the attendee
     must provide an answer before completing the booking.

Messages tab
------------

Customize the messages displayed to attendees at different stages of the appointment booking process.

- **Introduction Message**: A text field to provide an introductory message for the appointment.
  This message is displayed to attendees before they book the appointment.
- **Extra Message on Confirmation**: A text field to display an additional message once the
  appointment is confirmed. This message is shown to the attendee as part of the confirmation.

Share and publish
=================

Once configured, click **Publish** to make the appointment available on your website, or **Share**
to generate a shareable link. This link can include:

- One or multiple appointment types.
- Assignments to a specific user, resource, or general availability for the recipient to choose from.

Manage
======



Smart buttons
=============

Resources
---------


Appointments
------------

To get an overview of all booked appointments and manage them efficiently, either click  the
:guilabel:`Appointments` smart buttonFrom the set up form,  view t.

.. toctree::
   :titlesonly:

   appointments/online_appointments
