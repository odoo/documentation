import base64
import json
import sys
import time

import requests

account_token = "integration_token"  # Use your token
domain_name = "https://iap-extract.odoo.com"
path_to_pdf = "/path/to/your/pdf"
doc_type = "invoice"  # invoice, expense or applicant

# Do not change
API_VERSION = {
    'invoice': 122,
    'expense': 132,
    'applicant': 102,
}

def extract_jsonrpc_call(path: str, params: dict):
    payload = {
        'jsonrpc': '2.0',
        'method': 'call',
        'params': params,
        'id': 0,  # This should be unique for each call
    }
    response = requests.post(domain_name + path, json=payload, timeout=10)
    response.raise_for_status()
    json_response = response.json()
    return json_response


def send_document_to_extract(doc_path: str):
    with open(doc_path, 'rb') as f:
        encoded_doc = base64.b64encode(f.read()).decode()
    params = {
        'account_token': account_token,
        'version': API_VERSION[doc_type],
        'documents': [encoded_doc],
    }
    response = extract_jsonrpc_call(f"/api/extract/{doc_type}/1/parse", params)
    return response


def get_result_from_extract(document_uuid: str):
    params = {
        'version': API_VERSION[doc_type],
        'document_uuid': document_uuid,
    }
    endpoint = f"/api/extract/{doc_type}/1/get_result"
    response = extract_jsonrpc_call(endpoint, params)
    while response['result']['status'] == 'processing':
        print("Still processing... Retrying in 5 seconds")
        time.sleep(5)
        response = extract_jsonrpc_call(endpoint, params)
    return response


def get_result_batch_from_extract(document_uuids: list):
    """Get the results of multiple documents at once."""
    params = {
        'version': API_VERSION[doc_type],
        'document_uuids': document_uuids,
    }
    endpoint = f"/api/extract/{doc_type}/1/get_result_batch"
    response = extract_jsonrpc_call(endpoint, params)
    for uuid in document_uuids:
        while response['result'][uuid]['status'] == 'processing':
            print("Still processing... Retrying in 5 seconds")
            time.sleep(5)
            response = extract_jsonrpc_call(endpoint, params)
        yield response


def validate_results(document_uuid: str):
    # This is an example of how to validate the results of the parsing
    # These values should be the correct values for the document reviewed by the user
    params = {
        'document_id': document_uuid,
        'values': {
            'total': {'content': float},
            'subtotal': {'content': float},
            'total_tax_amount': {'content': float},
            'date': {'content': str},  # YYYY-MM-DD
            'due_date': {'content': str},  # YYYY-MM-DD
            'invoice_id': {'content': str},
            'partner': {'content': str},
            'VAT_Number': {'content': str},
            'currency': {'content': str},
            'merged_lines': bool,
            'invoice_lines': {
                'lines': [
                    {
                        'description': str,
                        'quantity': float,
                        'unit_price': float,
                        'product': str,
                        'taxes_amount': float,
                        'taxes': [
                            {
                                "amount": float,
                                "type": "fixed"|"percent",
                                "price_include": bool
                            },
                            ...
                        ],
                        'subtotal': float,
                        'total': float,
                    },
                    ...
                ],
            }
        }
    }
    response = extract_jsonrpc_call(f"/api/extract/{doc_type}/1/validate", params)
    return response


if __name__ == '__main__':

    # Parse the document
    response = send_document_to_extract(path_to_pdf)
    print("/parse call status: ", response['result']['status_msg'])

    if response['result']['status'] != 'success':
        sys.exit(1)

    document_uuid = response['result']['document_uuid']

    # Get the results of the parsing
    response = get_result_from_extract(document_uuid)

    # Write the response to a file
    output_file = 'response.json'
    with open(output_file, 'w') as f:
        json.dump(response, f, indent=2)
        print("\nResult saved in", output_file)

    print("/get_results call status: ", response['result']['status_msg'])
    if response['result']['status'] != 'success':
        sys.exit(1)

    document_results = response['result']['results'][0]

    print("\nTotal:", document_results['total']['selected_value']['content'])
    print("Subtotal:", document_results['subtotal']['selected_value']['content'])
    print("Invoice id:", document_results['invoice_id']['selected_value']['content'])
    print("Date:", document_results['date']['selected_value']['content'])
    print("...\n")

    # Validate the results
    response = validate_results(document_uuid)
    print("/validate call status: %s" % response['result']['status_msg'])
