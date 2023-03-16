===========
Extract API
===========

Odoo provides a service to automate the processing of documents of type **invoices**, **expenses**
or **resumes**.

The service scans documents using an :abbr:`OCR (Optical Character Recognition)` engine and then
uses :abbr:`AI(Artificial Intelligence)`-based algorithms to extract fields of interest such as the
total, due date, or invoice lines for *invoices*, the total, date, payment reference for *expenses*,
or the name, email, phone number for *resumes*.

This service is a paid service. Each document processing will cost you one credit.
Credits can be bought on `iap.odoo.com <https://iap.odoo.com/iap/in-app-services/259?sortby=date>`_.

You can either use this service directly in the Accounting, Expense, or Recruitment App or through
the API. The Extract API, which is detailed in the next section, allows you to integrate our
service directly into your own projects.


Overview
========

The extract API uses the JSON-RPC2_ protocol; its endpoint routes are located at
`https://iap-extract.odoo.com`.

Version
-------

The version of the Extract API is specified in the route.

The latest versions are:
    - invoices: 122
    - expenses: 132
    - applicant: 102

Flow
----

The flow is the same for the three services.

#. | Call :ref:`/parse <extract_api/parse>` to submit your invoices (one call for each
     invoice). On success, you receive a `document_uuid` in the response.
#. | You then have to regularly poll :ref:`/get_result <extract_api/get_result>` to get the
     document's parsing status.
   | Alternatively, you can provide a `webhook_url` at the time of the call to
     :ref:`/parse <extract_api/parse>` and you will be notified (via a POST request) when the
     result is ready.
#. | Once the result is received, you can validate it by calling
     :ref:`/validate <extract_api/validate>` and sending the expected values.
   | This step is optional but greatly helps the system to improve.

The HTTP POST method should be used for all of them. A python implementation of the full flow for
invoices can be found :download:`here <extract_api/implementation.py>` and a token for integration
testing is provided in the
:ref:`integration testing section <latestextract_api/integration_testing>`.


Parse
=====

Request the processing of a document from the OCR. The route will return a `document_uuid`
(it replaces `document_id`, which is deprecated); you can use it to obtain the result of your
request.

.. _extract_api/parse:

Routes
------

    - /api/extract/invoice/1/parse
    - /api/extract/expense/1/parse
    - /api/extract/applicant/1/parse
    - |ss| /iap/invoice_extract/parse |se| (deprecated)
    - |ss| /iap/expense_extract/parse |se| (deprecated)

Request
-------

.. rst-class:: o-definition-list

``jsonrpc`` (required)
    see JSON-RPC2_
``method`` (required)
    see JSON-RPC2_
``id`` (required)
    see JSON-RPC2_
``params``
    .. rst-class:: o-definition-list

    ``account_token`` (required)
        The token of the account from which credits will be taken. Each successful call costs one
        token.
    ``version`` (optional)
        The version will determine the format of your requests and the format of the server
        response. Some results can be unavailable in older versions. If not specified, the latest
        version will be used.
    ``documents`` (required)
        The document must be provided as a string in the ASCII encoding. The list should contain
        only one string. If multiple strings are provided only the first string corresponding to a
        pdf will be processed. If no pdf is found, the first string will be processed. This field
        is a list only for legacy reasons. The supported extensions are *pdf*, *png*, *jpg* and
        *bmp*.
    ``dbuuid`` (optional)
        Unique identifier of the Odoo database.
    ``webhook_url`` (optional)
        A webhook URL can be provided. An empty POST request will be sent to
        ``webhook_url/document_uuid`` when the result is ready.
    ``user_infos`` (optional)
        Information concerning the person sending the document to the extract service. It can be
        the client or the supplier (depending on the ``perspective``). This information is not
        required in order for the service to work but it greatly improves the quality of the result.

        .. rst-class:: o-definition-list

        ``user_company_vat`` (optional)
            VAT number of the user.
        ``user_company_name`` (optional)
            Name of the user’s company.
        ``user_company_country_code`` (optional)
            Country code of the user. Format:
            `ISO3166 alpha-2 <https://www.iban.com/country-codes>`_.
        ``user_lang`` (optional)
            The user language. Format: *language_code + _ + locale* (e.g. fr_FR, en_US).
        ``user_email`` (optional)
            The user email.
        ``purchase_order_regex`` (optional)
            Regex for purchase order identification. Will default to Odoo PO format if not provided.
        ``perspective`` (optional)
            .. rst-class:: o-definition-list

            Can be ``client`` or ``supplier``. This field is useful for invoices only.
            ``client`` means that the user information provided are related to the client of the
            invoice.
            ``supplier`` means that it's related to the supplier.
            If not provided, client will be used.

.. code-block:: js

    {
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
            "account_token": string (hex),
            "version": int,
            "documents": [string],
            "user_infos": {
                "user_company_vat": string,
                "user_company_name": string,
                "user_company_country_code": string,
                "user_lang": string,
                "user_email": string,
                "purchase_order_regex": string,
                "perspective": string,
            },
        },
        "id": string,
    }

.. note::
    The ``user_infos`` parameter is optional but it greatly improves the quality of the result,
    especially for invoices. The more information you can provide, the better.

Response
--------

.. rst-class:: o-definition-list

``jsonrpc``
    see JSON-RPC2_
``id``
    see JSON-RPC2_
``result``
    Dictionary containing the following content.

    .. rst-class:: o-definition-list

    ``status`` (replaces ``status_code``)
        The code indicating the status of the request. "success" in case of success. Other values
        are detailed in the table below.
    ``status_msg``
        A string giving verbose details about the request status.
    ``document_uuid`` (replaces ``document_id``)
        Only present if the request is successful.
    ``status_code`` (deprecated)
        The code indicating the status of the request. 0 in case of success. Other values are
        detailed in the table below.
    ``document_id`` (deprecated)
        Only present if the request is successful.

==========================  ============================================  ==========================
status                      status_msg                                    status_code (deprecated)
==========================  ============================================  ==========================
`success`                   Success                                       0
`error_internal`            An error occurred                             2
`error_no_credit`           You don't have enough credit                  3
`error_unsupported_format`  Unsupported file format                       6
`error_maintenance`         Server is currently under maintenance.
                            Please try again later.                       9
==========================  ============================================  ==========================

.. code-block:: js

    {
        "jsonrpc": "2.0",
        "id": string,
        "result": {
            "status": string,
            "status_code": int,  // deprecated
            "status_msg": string,
            "document_uuid": string,
            // "document_id": int,  // deprecated
        }
    }

.. warning::
    The ``document_id`` field is deprecated and will be removed in the future. Please use
    ``document_uuid`` instead.

    Version introducing ``document_uuid``:
     - invoices: 122
     - expenses: 132
     - applicant: 102

.. note::
    The API does not actually use the JSON-RPC error scheme. Instead the API has its own error
    scheme bundled inside a successful JSON-RPC result.

Get results
===========

.. _extract_api/get_result:

Routes
------

    - /api/extract/invoice/1/get_result
    - /api/extract/invoice/1/get_result_batch
    - /api/extract/expense/1/get_result
    - /api/extract/expense/1/get_result_batch
    - /api/extract/applicant/1/get_result
    - /api/extract/applicant/1/get_result_batch
    - |ss| /api/extract/invoice/1/get_results |se| (deprecated)
    - |ss| /iap/invoice_extract/get_result |se| (deprecated)
    - |ss| /iap/expense_extract/get_result |se| (deprecated)

Request
-------

.. rst-class:: o-definition-list

``jsonrpc`` (required)
    see JSON-RPC2_
``method`` (required)
    see JSON-RPC2_
``id`` (required)
    see JSON-RPC2_
``params``
    Dictionary containing the following content.

    .. rst-class:: o-definition-list

    ``version`` (required)
        |SAME_AS_PARSE|
    ``documents_uuids`` (required, replaces ``documents_ids``)
        The list of ``document_id`` for which you want to get the current parsing status.
    ``documents_ids`` (deprecated)
        The list of ``document_id`` for which you want to get the current parsing status.

.. code-block:: js

    {
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
            "version": int,
            // "documents_ids": [],  // deprecated
            "documents_uuids": [],
        },
        "id": string,
    }

.. note::
    The code snippet shows the request to the ``/api/extract/invoice/1/get_result_batch`` route.
    You can use the endpoint ``/api/extract/invoice/1/get_result`` to get the result of a single
    document. In that case, you don't need to provide a list of ``document_uuids`` but a single
    ``document_uuid``.

Response
--------

When getting the results from the parse, the detected field vary a lot depending on the type of
document. Each response is a list of dictionaries, one for each document. The keys of the dictionary
are the name of the field and the value is the value of the field.

.. rst-class:: o-definition-list

``jsonrpc``
    see JSON-RPC2_
``id``
    see JSON-RPC2_
``result``
    Dictionary where each key is a document_id. For each ``document_id``

    .. rst-class:: o-definition-list

    ``status``
        |SAME_AS_PARSE|
    ``status_code``
        |SAME_AS_PARSE|
    ``status_msg``
        |SAME_AS_PARSE|
    ``results``
        Only present if the request is successful.

        .. rst-class:: o-definition-list

        ``full_text_annotation``
            Contains the unprocessed full result from the OCR for the document

.. code-block:: js

    {
        "jsonrpc": "2.0",
        "id": string,
        "result": {
            "document_id_1": {
                "status": string,
                "status_code": int,  // deprecated
                "status_msg": string,
                "results": [
                    {
                        "full_text_annotation": string,
                        "feature_1_name": feature_1_result,
                        "feature_2_name": feature_2_result,
                        ...
                    },
                    ...
                ]
            },
            "document_id_2": {
                "status": string,
                "status_code": int,  // deprecated
                "status_msg": string,
                "results": [
                    {
                        "full_text_annotation": string,
                        "feature_1_name": feature_1_result,
                        "feature_2_name": feature_2_result,
                        ...
                    },
                    ...
                ]
            },
            ...
        }
    }

.. note::
    The example shows the response from the ``/api/extract/invoice/1/get_result_batch`` route.
    When using the ``/api/extract/invoice/1/get_result`` route (note the singularity), the response
    will be the value of the key associated to the invoice.

.. warning::
    Result keys are strings despite the fact that the ``document_ids`` given in the request body are
    integers.


Common fields
~~~~~~~~~~~~~

.. _latestextract_api/get_result/feature_result:

``feature_result``
******************

Each field of interest we want to extract from the document such as the total or the due date are
also called **features**. An exhaustive list of all the extracted features associated to a type of
document can be found in the sections below.

For each feature, we return a list of candidates and we spotlight the candidate our model predicts
to be the best fit for the feature.

.. rst-class:: o-definition-list

``selected_value`` (optional)
    The best candidate for this feature.
``selected_values`` (optional)
    The best candidates for this feature.
``candidates`` (optional)
    List of all the candidates for this feature ordered by decreasing confidence score.

.. code-block:: js

   "feature_name": {
       "selected_value": candidate_12,
       "candidates": [candidate_12, candidate_3, candidate_4, ...]
   }

candidate
*********

For each candidate we give its representation and position in the document. Candidates are sorted
by decreasing order of suitability.

.. rst-class:: o-definition-list

``content``
    Representation of the candidate.
``coords``
    .. rst-class:: o-definition-list

    ``[center_x, center_y, width, height, rotation_angle]``. The position and dimensions are
    relative to the size of the page and are therefore between 0 and 1.
    The angle is a clockwise rotation measured in degrees.
``page``
    Page of the original document on which the candidate is located (starts at 0).

.. code-block:: js

    "candidate": [
        {
            "content": string|float,
            "coords": [float, float, float, float, float],
            "page": int
        },
        ...
    ]


Invoices
~~~~~~~~

Invoices are complex and can have a lot of different fields. The following table gives an exhaustive
list of all the fields we can extract from an invoice.

+-------------------------+------------------------------------------------------------------------+
| Feature name            | Specifities                                                            |
+=========================+========================================================================+
| ``SWIFT_code``          | ``content`` is a dictionary encoded as a string.                       |
|                         |                                                                        |
|                         | It contains information about the detected SWIFT code                  |
|                         | (or `BIC <https://www.iso9362.org/isobic/overview.html>`_).            |
|                         |                                                                        |
|                         | Keys:                                                                  |
|                         |                                                                        |
|                         | .. rst-class:: o-definition-list                                       |
|                         |                                                                        |
|                         | ``bic``                                                                |
|                         |     detected BIC (string).                                             |
|                         | ``name`` (optional)                                                    |
|                         |     bank name (string).                                                |
|                         | ``country_code``                                                       |
|                         |     ISO3166 alpha-2 country code of the bank (string).                 |
|                         | ``city`` (optional)                                                    |
|                         |     city of the bank (string).                                         |
|                         | ``verified_bic``                                                       |
|                         |     True if the BIC has been found in our DB (bool).                   |
|                         |                                                                        |
|                         | Name and city are present only if verified_bic is true.                |
+-------------------------+------------------------------------------------------------------------+
| ``iban``                | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``aba``                 | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``VAT_Number``          | ``content`` is a string                                                |
|                         |                                                                        |
|                         | Depending on the value of perspective in the user_infos, this will be  |
|                         | the VAT number of the supplier or the client. If perspective is        |
|                         | client, it'll be the supplier's VAT number. If it's supplier, it's the |
|                         | client's VAT number.                                                   |
+-------------------------+------------------------------------------------------------------------+
| ``qr-bill``             | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``payment_ref``         | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``purchase_order``      | ``content`` is a string                                                |
|                         |                                                                        |
|                         | Uses ``selected_values`` instead of ``selected_value``                 |
+-------------------------+------------------------------------------------------------------------+
| ``country``             | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``currency``            | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``date``                | ``content`` is a string                                                |
|                         |                                                                        |
|                         | Format : *YYYY-MM-DD*                                                  |
+-------------------------+------------------------------------------------------------------------+
| ``due_date``            | Same as for ``date``                                                   |
+-------------------------+------------------------------------------------------------------------+
| ``total_tax_amount``    | ``content`` is a float                                                 |
| (previously             |                                                                        |
| ``global_taxes_amount``)|                                                                        |
+-------------------------+------------------------------------------------------------------------+
| ``invoice_id``          | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``subtotal``            | ``content`` is a float                                                 |
+-------------------------+------------------------------------------------------------------------+
| ``total``               | ``content`` is a float                                                 |
+-------------------------+------------------------------------------------------------------------+
| ``supplier``            | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``client``              | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``email``               | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``website``             | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+


``feature_result`` for the ``invoice_lines`` feature
****************************************************

It follows a more specific structure. It is basically a list of dictionaries where each dictionary
represents an invoice line. Each value follows a
:ref:`latestextract_api/get_result/feature_result` structure.

.. code-block:: js

    "invoice_lines": [
        {
            "description": feature_result,
            "discount": feature_result,
            "product": feature_result,
            "quantity": feature_result,
            "subtotal": feature_result,
            "total": feature_result,
            "taxes": feature_result,
            "total": feature_result,
            "unit": feature_result,
            "unit_price": feature_result
        },
        ...
    ]


Expense
~~~~~~~

The expenses are less complex than invoices. The following table gives an exhaustive list of all the
fields we can extract from an expense report.

+-------------------------+------------------------------------------------------------------------+
| Feature name            | Specifities                                                            |
+=========================+========================================================================+
| ``description``         | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``country``             | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``date``                | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``total``               | ``content`` is a float                                                 |
+-------------------------+------------------------------------------------------------------------+
| ``currency``            | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``bill_reference``      | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+


Applicant
~~~~~~~~~

This third type of document is meant for processing resumes. The following table gives an exhaustive
list of all the fields we can extract from a resume.

+-------------------------+------------------------------------------------------------------------+
| Feature name            | Specifities                                                            |
+=========================+========================================================================+
| ``name``                | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``email``               | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``phone``               | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+
| ``mobile``              | ``content`` is a string                                                |
+-------------------------+------------------------------------------------------------------------+


Validate
========

The validation step is an optional step but is strongly recommended. By telling the system if it
were right or wrong for each feature you give an important feedback. It has no direct impact but it
helps the system to greatly improve its prediction accuracy for the documents you will send in the
future.


.. _extract_api/validate:

Routes
------

    - /api/extract/invoice/1/validate
    - /api/extract/invoice/1/validate_batch
    - /api/extract/expense/1/validate
    - /api/extract/expense/1/validate_batch
    - /api/extract/applicant/1/validate
    - /api/extract/applicant/1/validate_batch
    - |ss| /iap/invoice_extract/validate |se| (deprecated)
    - |ss| /iap/expense_extract/validate |se| (deprecated)

Request
-------

.. rst-class:: o-definition-list

``jsonrpc`` (required)
    see JSON-RPC2_
``method`` (required)
    see JSON-RPC2_
``id`` (required)
    see JSON-RPC2_
``params`` (``/validate`` route only)
    dictionary containing the following fields

    .. rst-class:: o-definition-list

    ``document_uuid`` (required, replaces ``document_id``)
        |SAME_AS_PARSE|
    ``values``
        Contains the validation for each feature. For invoices, the field ``merged_line`` indicates
        if the lines were merged or not.
    ``document_id`` (deprecated)
        |SAME_AS_PARSE|

        .. rst-class:: o-definition-list

        ``invoice_lines`` have been merged or not.
``params`` (``/validate_batch`` route only)
    dictionary containing the following fields

    .. rst-class:: o-definition-list

    ``documents``
        Contains the validation for each feature for each document, the ``document_uuid`` are the
        keys and their values is the content of the ``value`` field of the ``/validate`` route.

.. code-block:: js

    // for the /validate route
    {
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
            // "document_id": int,  // deprecated
            "document_uuid": string,
            "values": {
                "merged_lines": bool,  // for invoices
                "feature_name_1": validation_1,
                "feature_name_2": validation_2,
                ...
            }
        },
        "id": string,
    }

    // for the /validate_batch route
    {
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
            "documents": {
                document_uuid_1: {
                    "merged_lines": bool,  // for invoices
                    "feature_name_1": validation_1,
                    "feature_name_2": validation_2,
                    ...
                },
                document_uuid_2: {
                    "merged_lines": bool,  // for invoices
                    "feature_name_1": validation_1,
                    "feature_name_2": validation_2,
                    ...
                },
                ...
            }
        },
        "id": string,
    }

.. note::
    You don't have to validate all the features in order for the validation to succeed. However
    :ref:`/validate <extract_api/validate>` can't be called multiple times for a same
    document. Therefore you should validate all the features you want to validate at once.

validation
~~~~~~~~~~

A **validation** for a given feature is a dictionary containing the textual representation of the
expected value for this given feature. This format apply for all the features except for
``invoice_lines`` which has a more complex validation format.

.. code-block:: js

    "feature_name": {
        "content": string|float
    }

invoice_lines
*************

**lines** is a list of dictionaries. Each dictionary represents an invoice line. The dictionary keys
speak for themselves. Note that there is no ``content`` for this feature.

.. code-block:: js

    "invoice_lines": {
        "lines": [
            {
                "description": string,
                "quantity": float,
                "unit_price": float,
                "product": string,
                "taxes_amount": float,
                "taxes": [
                    {
                        "amount": float,
                        "type": "fixed"|"percent",
                        "price_include": bool
                    },
                    ...
                ],
                "subtotal": float,
                "total": float
            },
            ...
        ]
    }

Response
--------

.. rst-class:: o-definition-list

``jsonrpc``
    see JSON-RPC2_
``id``
    see JSON-RPC2_
``result``
    .. rst-class:: o-definition-list

    ``status``
        |SAME_AS_PARSE|
    ``status_msg``
        |SAME_AS_PARSE|
    ``status_code`` (deprecated)
        |SAME_AS_PARSE|

==========================  ===========================================  ===========================
`status`                    status_msg                                   status_code (deprecated)
==========================  ===========================================  ===========================
`success`                   Success                                      0
`error_validation_format`   Validation format is incorrect               12
==========================  ===========================================  ===========================

.. code-block:: js

    {
        "jsonrpc": "2.0",
        "id": string,
        "result": {
            "status": string,
            // "status_code": int,  // deprecated
            "status_msg": string,
        }
    }

.. _latestextract_api/integration_testing:

Integration Testing
===================

You can test your integration by using *integration_token* as ``account_token`` in the
:ref:`/parse <extract_api/parse>` request.

Using this token put you in test mode and allows you to simulate the entire flow without really
parsing a document and without being billed one credit for each successful **document** parsing.

The only technical differences in test mode is that the document you send is not parsed by the
system and that the response you get from
:ref:`/get_result <extract_api/get_result>` is a hard-coded one.

A python implementation of the full flow for invoices can be found
:download:`here <extract_api/implementation.py>`.

.. _JSON-RPC2: https://www.jsonrpc.org/specification

.. |SAME_AS_PARSE| replace:: Same as for :ref:`/parse <extract_api/parse>`.

.. |ss| raw:: html

    <strike>

.. |se| raw:: html

    </strike>
