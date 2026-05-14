==================
AI default prompts
==================

.. |AI| replace:: :abbr:`AI (artificial intelligence)`

*Default prompts* define how |AI| behaves when a user opens a conversation from a specific model in
Odoo. They allow users to:

- Automatically call a specific |AI| agent
- Apply contextual instructions
- Display predefined action buttons
- Adapt |AI| behavior depending on the model

Default prompts are model-specific, though they can be applied to all models. This means the |AI|
can behave differently depending on where it is launched in the system.

When a user opens an |AI| conversation from a record, Odoo provides the full context of that record
to the |AI| agent. This includes field values and relevant metadata.

Each conversation is context-bound. When opened from a lead, the |AI| receives information about
that Lead. When opened from an invoice, the |AI| receives accounting context. The conversation is
isolated and reset once closed.

Configuration
=============

Before configuring a default prompt, create or configure the |AI| :ref:`agent <ai/create-agent>` in
the **AI** application.

.. note::
   The **AI** application comes with pre-configured agents, and default prompts. These vary based on
   the other applications installed on the database.

Navigate to :menuselection:`AI app --> Configuration --> Default Prompts` and click :guilabel:`New`.
Create a :guilabel:`Rule Name`, then select an action in the :guilabel:`When users need to` field.

Next, select a model in the :guilabel:`On the Model` field. This controls what records this rule
applies to. For example, if the rule is specific to *Helpdesk* tickets, select *Helpdesk Tickets*
from the drop-down menu. Multiple selections can be made in this field. To allow this rule to be
used by any model, leave the field blank.

In the :guilabel:`Call the Agent` field, select which agent this rule should apply to. Next, add the
:guilabel:`Instructions` for the rule.

.. note::
   While the agent may already have an existing prompt that defines their behavior, the instructions
   in the default prompt define the actions in the context of the current model. See
   :ref:`Understanding AI prompt structure <ai/prompt-structure>` below for additional information.

.. image:: default_prompts/default-prompt-rule.png
   :alt: A default prompt rule record in the AI app.

Buttons
-------

Within each default prompt, buttons can be configured with predefined prompt instructions. When a
user clicks a button, Odoo combines the default prompt *Context* with the selected button prompt and
sends both to the |AI| model. This structure allows organizations to create reusable AI actions for
common workflows, such as rewriting content, summarizing information, applying tone guidelines, or
generating standardized responses.

On the *Buttons* tab, click :guilabel:`Add a line` to open the *Create Available User Prompts*
pop-up. In the :guilabel:`Title` field, enter a name for this prompt. Whatever is entered in this
field is visible on the button for the prompt.

.. image:: default_prompts/ai-chatter.png
   :alt: AI prompts configured as buttons in a conversation with an agent.

In the :guilabel:`Prompt` field, enter a prompt to be sent to the AI when the button is clicked.
Click :guilabel:`Save & Close` or :guilabel:`Save & New` when finished.

.. _ai/prompt-structure:

Understanding AI prompt structure
=================================

|AI| conversations in Odoo are structured using multiple configuration layers.

- Each :ref:`agent <ai/agents/prompts-in-odoo>` has a prompt that defines the global identity and
  behavior of an AI agent. It is configured directly on the agent's record and applies wherever the
  agent is used. The Agent Prompt defines who the AI is.

- A default prompt configures how an AI agent behaves when launched from a specific model. Default
  prompt instructions adapt the agent's behavior to the functional context of the model. The default
  prompt defines how the AI should behave in this specific context.

- Button prompts represent predefined user requests within an AI chat window. When a button is
  clicked, Odoo combines the AI agent's global instructions, the default prompt Context, and the
  selected button prompt. The Context provides the overall behavioral framework and functional
  background for the interaction, while the button prompt specifies the exact task the AI should
  perform at that moment.

.. seealso::
   :doc:`agents`
