import base64
import json
import sys
import time
import uuid

try:
    import requests
except ImportError:
    print("The 'requests' library is required to run this script. More information at https://pypi.org/project/requests.")
    exit()

account_token = "integration_token"  # Use your token
domain_name = "https://extract.api.odoo.com"
path_to_pdf = "/path/to/your/pdf"


def extract_jsonrpc_call(path: str, params: dict):
    payload = {
        'jsonrpc': '2.0',
        'method': 'call',
        'params': params,
        'id': uuid.uuid4().hex,  # This should be unique for each call
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
        'version': 123,
        'documents': [encoded_doc],
    }
    response = extract_jsonrpc_call(f"/api/extract/invoice/2/parse", params)
    return response


def get_result_from_extract(document_token: str):
    params = {
        'version': 123,
        'document_token': document_token,
        'account_token': account_token,
    }
    endpoint = f"/api/extract/invoice/2/get_result"
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


    def _get_selected_value(field):
        return document_results.get(field, {}).get('selected_value', {}).get('content', '')


    print("\nTotal:", _get_selected_value('total'))
    print("Subtotal:", _get_selected_value('subtotal'))
    print("Reference:", _get_selected_value('invoice_id'))
    print("Date:", _get_selected_value('date'))
    print("Due date:", _get_selected_value('due_date'))
    print("Currency:", _get_selected_value('currency'))
