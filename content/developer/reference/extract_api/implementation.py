import base64
import json
import sys
import time

import requests

account_token = "integration_token"  # Use your token
domain_name = "https://extract.api.odoo.com"
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
    response = extract_jsonrpc_call(f"/api/extract/{doc_type}/2/parse", params)
    return response


def get_result_from_extract(document_token: str):
    params = {
        'version': API_VERSION[doc_type],
        'document_token': document_token,
        'account_token': account_token,
    }
    endpoint = f"/api/extract/{doc_type}/2/get_result"
    response = extract_jsonrpc_call(endpoint, params)
    while response['result']['status'] == 'processing':
        print("Still processing... Retrying in 5 seconds")
        time.sleep(5)
        response = extract_jsonrpc_call(endpoint, params)
    return response


if __name__ == '__main__':

    # Parse the document
    response = send_document_to_extract(path_to_pdf)
    print("/parse call status: ", response['result']['status_msg'])

    if response['result']['status'] != 'success':
        sys.exit(1)

    document_token = response['result']['document_token']

    # Get the results of the parsing
    response = get_result_from_extract(document_token)

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
