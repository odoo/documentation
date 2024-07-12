import re

def remove_shipping_methods(text):
    # Define the sections to remove using regex
    sections_to_remove = [
        r"================\nShipping methods\n================.*?\n(?=Website availability)",
        r"================\nOwn shipping methods\n================.*?\n(?=Pickup in store)",
        r"---------------\nPickup in store.*?\n(?=Website availability)",
        r"================\nShipping providers\n================.*?\n(?=Website availability)",
        r"================\nDelivery method at checkout\n================.*?\n(?=.. image:: shipping/shipping-checkout.png)"
    ]
    
    # Remove the defined sections
    for section in sections_to_remove:
        text = re.sub(section, '', text, flags=re.DOTALL)
    
    return text
