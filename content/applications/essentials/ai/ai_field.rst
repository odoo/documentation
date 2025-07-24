=========
AI fields
=========

**ai_fields** is a module in Odoo that allows users to automatically generate or update field values
using artificial intelligence.

AI fields are not built into specific apps, like **Sales** or **CRM**. Instead, they are available
by adding a custom field through the **Studio** app. New AI fields can be added to read existing
field data and perform actions by passing record data to a large language model model, and receiving
the response through the API to share back in the Odoo database.

This is a useful tool that integrates the `ChatGPT 4.1
<https://github.com/odoo/enterprise/blob/bbec15dcbe33870a5a026f0ab67c57ffdc5ecbcd/ai_fields/tools.py#L48>`_
model to perform actions to gain insights, convert, compute, or consolidate data using the reasoning
of the model, without the need for custom development.

  .. note::
     AI fields can only be added to views that can be edited through **Studio**. For example, the
     budget report **cannot be customized**.

Common ways to use AI fields
============================

#. **Add AI fields to existing forms** to store AI outputs from the model. Done by configuring a
   user prompt that requests information that may contain Odoo record data and context from the user
   prompt and sends it to the model. The AI field stores the AI output. Note, the output of AI
   fields are **always** output from the large language model.

   For example, see the :ref:`Sentiment analysis example <ai/sentiment_analyis>`.

#. **Use AI web scraping capabilities to populate empty records** (highly contentious. need to
   confirm whether this works with PO. See version control section below)

When to Use AI fields
---------------------

- **Descriptive content**: Generating summaries, descriptions, categorizations
- **Simple classifications**: Basic sorting or rating based on available data
- **Content standardization**: Creating consistent formats across records
- **Data enhancement**: Adding context or analysis to existing information

When NOT to Use AI Fields
-------------------------

- **Critical calculations**: Financial computations requiring guaranteed accuracy
- **Real-time decisions**: Time-sensitive automated processes
- **Verified external Data**: When confirmed external data sources are required
- **Complex business logic**: Multi-step processes with strict rules and deterministic outcomes

Use cases
=========

Consider these use cases to understand how AI fields are used.

.. _ai/sentiment_analyis:

Sentiment analysis on CRM chatter
---------------------------------

An AI field titled `Sentiment Analysis` is created to analyze chatter messages to detect strong
buying intent and flag churn risks. The user prompt is inputted in the :guilabel:`Prompt` field:

Analyze :guilabel:`Messages` to determine the sentiment, classified by the following:

- Very Positive
- Positive
- Neutral
- Negative
- Very Negative

Your response should include the sentiment, an explanation, and key phrases that justify the
classification.

.. note::
   This prompt has been shortened for brevity. The one displayed in the video is the full prompt
   used for testing in the demo.

:guilabel:`Messages` is a field that represents a record's chatter, so the prompt, and the Odoo
specific data, in this case, messages in and the chatter, are passed to the model, which are used to
query the model to classify a sentiment that represents the prospect's buying intent.

After the model determines the intent, it sends the AI output back to Odoo, and the result is
displayed and stored in the custom AI field, `Sentiment Analysis`, which is used by the end user to
screen buying intent from a high volume of prospects.

Terminology
===========

Model: large language model trained on vast amount of text designed to process context and perform
tasks. (TODO: WIP i dont like this definition)

System prompt: always the same, hard-coded in Odoo (TODO: not sure what this is. need to clarify
with Joel)

User prompt: defined in the prompt field of the AI field in Odoo

Prompt writing tips
-------------------

- **Be specific**: Clearly define expected output format
- **Provide context**: Include relevant record fields in prompts
- **Set constraints**: Define limits and acceptable value ranges
- **Test thoroughly**: Validate outputs across different record types
- **Handle edge cases**: Account for missing or unusual data scenarios

Technical architecture and details
==================================

File structure reference:

.. code-block::

   enterprise/
   ├── ai_fields/                          # Core AI functionality
   │   ├── __manifest__.py
   │   ├── models/                         # AI field computation logic
   │   ├── views/                          # Backend configuration views
   │   └── static/src/                     # Frontend AI field components
   ├── web_studio_ai_fields/               # Studio integration
   │   ├── __manifest__.py
   │   ├── i18n/                          # Translations for "New AI Text"
   │   └── static/src/                     # Studio dialog extensions
   └── web_studio/                         # Base Studio functionality
       ├── __manifest__.py
       └── ...                            # Studio core features

Supported field types
---------------------

AI fields can generate values for multiple field types, not just text. TODO: `source
<https://github.com/odoo/enterprise/blob/master/ai_fields/tools.py#L55-L137>`_

Text fields
~~~~~~~~~~~

- **Text (`char`)**: Short text values like names, titles, descriptions
- **Text Area (`text`)**: Longer text content like detailed descriptions
- **HTML (`html`)**: Rich formatted content with automatic HTML sanitization

Numeric fields
~~~~~~~~~~~~~~

- **Integer (`integer`)**: Whole numbers like quantities, counts, ratings
- **Float (`float`)**: Decimal numbers like prices, percentages, measurements
- **Monetary (`monetary`)**: Currency amounts with automatic currency context

.. note::
   AI fields representing monetary values cannot be added to a view if there are no other fields
   representing money present.

Boolean and selection
~~~~~~~~~~~~~~~~~~~~~

- **Boolean (`boolean`)**: True/false values based on conditions
- **Selection (`selection`)**: Choosing from predefined options
- **Many2one (`many2one`)**: Selecting related records from other models
- **Many2many (`many2many`)**: Multiple related record selections (currently broken in `all versions
  <https://www.odoo.com/odoo/project/49/tasks/4962157>`_)

Date and time
~~~~~~~~~~~~~

- **Date (`date`)**: Date values
- **DateTime (`datetime`)**: Date and time combinations

Properties
~~~~~~~~~~

- **Dynamic Properties**: AI computation for property definitions on models

Processing methods
------------------

Automatic processing
~~~~~~~~~~~~~~~~~~~~

- **Record creation**: AI fields are computed when new records are created
- **Scheduled action**: Daily cron job processes records with empty AI fields
- **Batch processing**: Handles up to 20 records per batch for performance

Manual processing
~~~~~~~~~~~~~~~~~

- **UI button**: Users can click AI icons next to fields to regenerate values
- **API calls**: Developers can trigger computation programmatically (TODO: confirm)
- **Studio interface**: Test prompts during field configuration (TODO: confirm)

Security and validation
~~~~~~~~~~~~~~~~~~~~~~~

- **QWeb expression validation**: Prevents unsafe template expressions
- **HTML sanitization**: Cleans HTML content to prevent XSS attacks
- **Access control**: Requires appropriate permissions for prompt editing
- **Prompt sanitization**: Removes potentially dangerous content

Output validation
~~~~~~~~~~~~~~~~~

TODO: check whole section

- **Type casting**: Ensures AI responses match expected field types
- **Allowed values**: Validates selections against predefined options
- **Relational validation**: Verifies related record IDs exist and are accessible
- **Response constraints**: Uses field-specific system prompts to guide output format

Limitations
-----------

Client-side limitations
~~~~~~~~~~~~~~~~~~~~~~~

- **Client doesn't request external data**: No web search or external API calls initiated by client
  (TODO: confirm; highly contentious.)
- **Limited to provided context**: Client only sends record data available in named Odoo fields in
  the user prompt
- **No client-side file access**: Client doesn't request file or document processing
- **Simple request structure**: Client uses basic prompt-response without tool negotiation

Processing constraints
~~~~~~~~~~~~~~~~~~~~~~

- Processes records in batches, not real-time for large volumes
- Limited by AI service response times (30-second timeout)
- Cron-based processing may have delays
- Memory and performance limits for large datasets

Output limitations
~~~~~~~~~~~~~~~~~~

- Responses are generated, not calculated from formulas
- No guaranteed accuracy for numerical computations, like finding the average
- Limited by AI model capabilities and training

Knowledge gaps to address (WIP)
-------------------------------

Known client-side capabilities
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**What AI fields client DOES:**

- **Record context access**: Uses QWeb templates like `{{object.field_name}}` to access current
  record data (TODO: tbh I generated this line from Claude. idk what this means and need to verify)
- **Smart field generation**: Analyzes existing record data to generate appropriate field values
- **Type-aware output**: Automatically formats responses for specific field types (? must confirm)
- **Batch processing**: Processes multiple records via scheduled actions

**What AI fields client DOESN'T send:**

- **No Relational Intelligence**: Cannot select appropriate related records based on context, must
  be defined by field selector.
- **No Tool Definitions**: Client doesn't send function schemas or tool descriptions
- **No Tool Requests**: Client doesn't request specific tool execution
- **No External Parameters**: Client only sends prompts and conversation history

Server-side unknowns
~~~~~~~~~~~~~~~~~~~~

**Important Limitation**: Some code is not visible in the codebase. Some that is visible only to the
Odoo RD-AI team, some is proprietary information of OpenAI. To write complete documentation about AI
Fields, we need to investigate:

Server-side capabilities

- TODO: Test whether AI Fields can access information beyond what's sent in prompts
- TODO: Check if the server has built-in tools like web search or external APIs
- TODO: Determine what additional data the server can access from Odoo databases

Real-World testing

- TODO: Test AI Fields with prompts asking for current events or external information
- TODO: Compare AI Fields responses with AI Agent responses for similar tasks
- TODO: Collect user feedback about unexpected capabilities or limitations

Documentation needs

- TODO: Find official documentation about the OLG API capabilities
- TODO: Get clarification from Odoo about intended AI Fields use cases and limitations

Version control notes
=====================

enterprise master: uses [GPT 4.1](https://github.com/odoo/enterprise/blob/bbec15dcbe33870a5a026f0ab67c57ffdc5ecbcd/ai_fields/tools.py#L48)

websearch capabilities:

version 18.3/18.4: unknown
enterprise master: [enabled](https://github.com/odoo/enterprise/blob/bbec15dcbe33870a5a026f0ab67c57ffdc5ecbcd/ai_fields/tools.py#L188-L190)