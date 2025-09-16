========
AI agent
========

The AI Agent is an intelligent assistant system built into Odoo that allows users to interact with
AI-powered agents to perform various tasks. Each agent can be customized with specific knowledge
sources, tools, and behavior settings to serve different purposes within the company.

Core capabilities
=================

Conversational AI interface
---------------------------

- Engage in natural language conversations with Odoo users
- Maintain conversation history and context across multiple interactions
- Provide responses in different styles (analytical, balanced, or creative)

Knowledge management
--------------------

- Learn from uploaded documents and files (PDFs, text files, etc.)
- Extract information from web URLs and use them as knowledge sources
- Create embeddings from content for intelligent information retrieval
- Search through knowledge sources to answer questions accurately

Task automation
---------------

- Execute specific actions through configurable tools (TODO: what actions are available??)
- Integrate with Odoo modules to perform business operations
- Validate input parameters and provide structured responses

Multi-model support
-------------------

- Support for OpenAI models (GPT-3.5 Turbo, GPT-4, GPT-4o, etc.)

  - `enterprise-saas-18.4/ai/models/ai_tool.py`
- Support for Gemini (not possible yet. possibly in Odoo 19?)
- Configurable temperature settings for response style


