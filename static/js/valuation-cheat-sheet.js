// Operations and amounts of the valuation examples. All the displayed texts (operations, accounts,
// explanations, ...) are defined in cheat_sheet.rst so they can be translated.
const ACCOUNT = {
    continental: {
        STOCK_GOODS_FOR_RESALE: 340000,
        INITIAL_BALANCE: 0,
        EXPENSES_GOODS_FOR_RESALE: 604000,
        LIABILITIES_SUPPLIERS: 440000,
        LIABILITIES_VAT_RECOVERABLE: 411000,
        LIABILITIES_CUSTOMERS: 400000,
        LIABILITIES_VAT_PAYABLE: 451000,
        REVENUES_SALES: 700000,
        LIABILITIES_INVOICES_UNRECEIVED: 444000,
        LIABILITIES_RECEIVABLE: 414000,
        LIABILITIES_DEFERRED_CHARGES: 490000,
        LIABILITIES_DEFERRED_INCOME: 493000,
        EXPENSES_CHANGE_IN_GOODS_FOR_RESALE: 609400,
        STOCK_FINISHED_GOODS: 330000,
        STOCK_RAW: 300000,
        REVENUES_CHANGE_IN_FINISHED_GOODS: 713000,
        EXPENSES_CHANGE_IN_RAW: 609000,
        EXPENSES_FINISHED: 600200,
        EXPENSES_RAW: 600000,
    },
    anglo_saxon: {
        ASSETS_INVENTORY: 110100,
        INITIAL_BALANCE: 0,
        EXPENSES_COST: 500000,
        LIABILITIES_PAYABLE: 211000,
        ASSETS_TAX_PAID: 131000,
        ASSETS_RECEIVABLE: 121000,
        LIABILITIES_TAX_RECEIVED: 251000,
        REVENUES_SALES: 400000,
        ASSETS_MANUFACTURED: 110102,
        ASSETS_COST: 110400,
        ASSETS_RAW: 110101,
        EXPENSES_INVENTORY_LOSS: 609100,
        LIABILITIES_UNINVOICED: 211100,
        ASSETS_VARIATIONS: 110600,
        ASSETS_UNINVOICED: 121200,
        ASSETS_PREPAID: 128000,
        LIABILITIES_DEFERRED: 212000,
    },
};
const C = ACCOUNT.continental;
const A = ACCOUNT.anglo_saxon;

const OPERATIONS = {
    initial_inventory: {
        continental: {
            periodic: [
                { account: C.STOCK_GOODS_FOR_RESALE, debit: 50 },
                { account: C.INITIAL_BALANCE, credit: 50 },
            ],
            perpetual: [
                { account: C.STOCK_GOODS_FOR_RESALE, debit: 50 },
                { account: C.INITIAL_BALANCE, credit: 50 },
            ],
        },
        anglo_saxon: {
            periodic: [
                { account: A.ASSETS_INVENTORY, debit: 50 },
                { account: A.INITIAL_BALANCE, credit: 50 },
            ],
            perpetual: [
                { account: A.ASSETS_INVENTORY, debit: 50 },
                { account: A.INITIAL_BALANCE, credit: 50 },
            ],
        },
    },
    supplier_reception: {
        continental: {
            periodic: [
            ],
            perpetual: [
            ],
        },
        anglo_saxon: {
            periodic: [
            ],
            perpetual: [
            ],
        },
    },
    supplier_bill: {
        continental: {
            periodic: [
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 50 },
                { account: C.LIABILITIES_SUPPLIERS, credit: 54.5 },
                { account: C.LIABILITIES_VAT_RECOVERABLE, debit: 4.5 },
            ],
            perpetual: [
                { account: C.STOCK_GOODS_FOR_RESALE, debit: 50 },
                { account: C.LIABILITIES_SUPPLIERS, credit: 54.5 },
                { account: C.LIABILITIES_VAT_RECOVERABLE, debit: 4.5 },
            ],
        },
        anglo_saxon: {
            periodic: [
                { account: A.EXPENSES_COST, debit: 50 },
                { account: A.LIABILITIES_PAYABLE, credit: 54.5 },
                { account: A.ASSETS_TAX_PAID, debit: 4.5 },
            ],
            perpetual: [
                { account: A.ASSETS_INVENTORY, debit: 50 },
                { account: A.LIABILITIES_PAYABLE, credit: 54.5 },
                { account: A.ASSETS_TAX_PAID, debit: 4.5 },
            ],
        },
    },
    supplier_reception_extra: {
        continental: {
            periodic: [
            ],
            perpetual: [
            ],
        },
        anglo_saxon: {
            periodic: [
            ],
            perpetual: [
            ],
        },
    },
    supplier_bill_extra: {
        continental: {
            periodic: [
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 50 },
                { account: C.LIABILITIES_SUPPLIERS, credit: 54.5 },
                { account: C.LIABILITIES_VAT_RECOVERABLE, debit: 4.5 },
            ],
            perpetual: [
                { account: C.STOCK_GOODS_FOR_RESALE, debit: 50 },
                { account: C.LIABILITIES_SUPPLIERS, credit: 54.5 },
                { account: C.LIABILITIES_VAT_RECOVERABLE, debit: 4.5 },
            ],
        },
        anglo_saxon: {
            periodic: [
                { account: A.EXPENSES_COST, debit: 50 },
                { account: A.LIABILITIES_PAYABLE, credit: 54.5 },
                { account: A.ASSETS_TAX_PAID, debit: 4.5 },
            ],
            perpetual: [
                { account: A.ASSETS_INVENTORY, debit: 50 },
                { account: A.LIABILITIES_PAYABLE, credit: 54.5 },
                { account: A.ASSETS_TAX_PAID, debit: 4.5 },
            ],
        },
    },
    customer_shipping: {
        continental: {
            periodic: [
            ],
            perpetual: [
            ],
        },
        anglo_saxon: {
            periodic: [
            ],
            perpetual: [
            ],
        },
    },
    customer_invoice: {
        continental: {
            periodic: [
                { account: C.LIABILITIES_CUSTOMERS, debit: 109 },
                { account: C.LIABILITIES_VAT_PAYABLE, credit: 9 },
                { account: C.REVENUES_SALES, credit: 100 },
            ],
            perpetual: [
                { account: C.STOCK_GOODS_FOR_RESALE, credit: 50 },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 50 },
                { account: C.LIABILITIES_CUSTOMERS, debit: 109 },
                { account: C.LIABILITIES_VAT_PAYABLE, credit: 9 },
                { account: C.REVENUES_SALES, credit: 100 },
            ],
        },
        anglo_saxon: {
            periodic: [
                { account: A.ASSETS_RECEIVABLE, debit: 109 },
                { account: A.LIABILITIES_TAX_RECEIVED, credit: 9 },
                { account: A.REVENUES_SALES, credit: 100 },
            ],
            perpetual: [
                { account: A.ASSETS_INVENTORY, credit: 50 },
                { account: A.EXPENSES_COST, debit: 50 },
                { account: A.ASSETS_RECEIVABLE, debit: 109 },
                { account: A.LIABILITIES_TAX_RECEIVED, credit: 9 },
                { account: A.REVENUES_SALES, credit: 100 },
            ],
        },
    },
    manufacturing_order: {
        continental: {
            periodic: [
            ],
            perpetual: [
            ],
        },
        anglo_saxon: {
            periodic: [
            ],
            perpetual: [
                { account: A.ASSETS_MANUFACTURED, debit: 52 },
                { account: A.ASSETS_COST, credit: 52 },
                { account: A.ASSETS_RAW, credit: 50 },
                { account: A.ASSETS_COST, debit: 50 },
            ],
        },
    },
    inventory_loss: {
        continental: {
            periodic: [
            ],
            perpetual: [
            ],
        },
        anglo_saxon: {
            periodic: [
            ],
            perpetual: [
                { account: A.ASSETS_INVENTORY, credit: 30 },
                { account: A.EXPENSES_INVENTORY_LOSS, debit: 30 },
            ],
        },
    },
    unreceived: {
        continental: {
            periodic: [
                { account: C.LIABILITIES_INVOICES_UNRECEIVED, credit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: C.LIABILITIES_INVOICES_UNRECEIVED, credit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
            ],
            perpetual: [
                { account: C.LIABILITIES_INVOICES_UNRECEIVED, credit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: C.LIABILITIES_INVOICES_UNRECEIVED, credit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
            ],
        },
        anglo_saxon: {
            periodic: [
                { account: A.LIABILITIES_UNINVOICED, credit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: A.EXPENSES_COST, debit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: A.LIABILITIES_UNINVOICED, credit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: A.EXPENSES_COST, debit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
            ],
            perpetual: [
                { account: A.LIABILITIES_UNINVOICED, credit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: A.ASSETS_VARIATIONS, debit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: A.LIABILITIES_UNINVOICED, credit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: A.ASSETS_VARIATIONS, debit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
            ],
        },
    },
    uninvoiced: {
        continental: {
            periodic: [
                { account: C.LIABILITIES_RECEIVABLE, debit: 100, entries: ['customer_shipping'], except: ['customer_invoice'] },
                { account: C.REVENUES_SALES, credit: 100, entries: ['customer_shipping'], except: ['customer_invoice'] },
            ],
            perpetual: [
                { account: C.LIABILITIES_RECEIVABLE, debit: 100, entries: ['customer_shipping'], except: ['customer_invoice'] },
                { account: C.REVENUES_SALES, credit: 100, entries: ['customer_shipping'], except: ['customer_invoice'] },
            ],
        },
        anglo_saxon: {
            periodic: [
                { account: A.ASSETS_UNINVOICED, debit: 100, entries: ['customer_shipping'], except: ['customer_invoice'] },
                { account: A.REVENUES_SALES, credit: 100, entries: ['customer_shipping'], except: ['customer_invoice'] },
            ],
            perpetual: [
                { account: A.ASSETS_UNINVOICED, debit: 100, entries: ['customer_shipping'], except: ['customer_invoice'] },
                { account: A.REVENUES_SALES, credit: 100, entries: ['customer_shipping'], except: ['customer_invoice'] },
                { account: A.ASSETS_VARIATIONS, credit: 50, entries: ['customer_shipping'], except: ['customer_invoice'] },
                { account: A.EXPENSES_COST, debit: 50, entries: ['customer_shipping'], except: ['customer_invoice'] },
            ],
        },
    },
    prepaid: {
        continental: {
            periodic: [
                { account: C.LIABILITIES_DEFERRED_CHARGES, debit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: C.LIABILITIES_DEFERRED_CHARGES, debit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
            ],
            perpetual: [
                { account: C.LIABILITIES_DEFERRED_CHARGES, debit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: C.LIABILITIES_DEFERRED_CHARGES, debit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
            ],
        },
        anglo_saxon: {
            periodic: [
                { account: A.ASSETS_PREPAID, debit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: A.EXPENSES_COST, credit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: A.ASSETS_PREPAID, debit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
                { account: A.EXPENSES_COST, credit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
            ],
            perpetual: [
                { account: A.ASSETS_PREPAID, debit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: A.ASSETS_VARIATIONS, credit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: A.ASSETS_PREPAID, debit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
                { account: A.ASSETS_VARIATIONS, credit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
            ],
        },
    },
    deferred: {
        continental: {
            periodic: [
                { account: C.LIABILITIES_DEFERRED_INCOME, credit: 100, entries: ['customer_invoice'], except: ['customer_shipping'] },
                { account: C.REVENUES_SALES, debit: 100, entries: ['customer_invoice'], except: ['customer_shipping'] },
            ],
            perpetual: [
                { account: C.LIABILITIES_DEFERRED_INCOME, credit: 100, entries: ['customer_invoice'], except: ['customer_shipping'] },
                { account: C.REVENUES_SALES, debit: 100, entries: ['customer_invoice'], except: ['customer_shipping'] },
            ],
        },
        anglo_saxon: {
            periodic: [
                { account: A.LIABILITIES_DEFERRED, credit: 100, entries: ['customer_invoice'], except: ['customer_shipping'] },
                { account: A.REVENUES_SALES, debit: 100, entries: ['customer_invoice'], except: ['customer_shipping'] },
            ],
            perpetual: [
                { account: A.LIABILITIES_DEFERRED, credit: 100, entries: ['customer_invoice'], except: ['customer_shipping'] },
                { account: A.REVENUES_SALES, debit: 100, entries: ['customer_invoice'], except: ['customer_shipping'] },
                { account: A.ASSETS_VARIATIONS, debit: 50, entries: ['customer_invoice'], except: ['customer_shipping'] },
                { account: A.EXPENSES_COST, credit: 50, entries: ['customer_invoice'], except: ['customer_shipping'] },
            ],
        },
    },
    closing: {
        continental: {
            periodic: [
                { account: C.STOCK_GOODS_FOR_RESALE, debit: 50, entries: ['supplier_reception'] },
                { account: C.EXPENSES_CHANGE_IN_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_reception'] },
                { account: C.STOCK_GOODS_FOR_RESALE, debit: 50, entries: ['supplier_reception_extra', 'supplier_bill_extra'] },
                { account: C.EXPENSES_CHANGE_IN_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_reception_extra', 'supplier_bill_extra'] },
                { account: C.STOCK_GOODS_FOR_RESALE, debit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: C.EXPENSES_CHANGE_IN_GOODS_FOR_RESALE, credit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: C.STOCK_GOODS_FOR_RESALE, credit: 50, entries: ['customer_shipping'] },
                { account: C.EXPENSES_CHANGE_IN_GOODS_FOR_RESALE, debit: 50, entries: ['customer_shipping'] },
                { account: C.STOCK_GOODS_FOR_RESALE, credit: 30, entries: ['inventory_loss'] },
                { account: C.EXPENSES_CHANGE_IN_GOODS_FOR_RESALE, debit: 30, entries: ['inventory_loss'] },
                { account: C.STOCK_FINISHED_GOODS, debit: 52, entries: ['manufacturing_order'] },
                { account: C.STOCK_RAW, credit: 50, entries: ['manufacturing_order'] },
                { account: C.REVENUES_CHANGE_IN_FINISHED_GOODS, credit: 52, entries: ['manufacturing_order'] },
                { account: C.EXPENSES_CHANGE_IN_RAW, debit: 50, entries: ['manufacturing_order'] },
            ],
            perpetual: [
                { account: C.STOCK_GOODS_FOR_RESALE, debit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: C.STOCK_GOODS_FOR_RESALE, debit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, credit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: C.STOCK_GOODS_FOR_RESALE, credit: 50, entries: ['customer_shipping'], except: ['customer_invoice'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 50, entries: ['customer_shipping'], except: ['customer_invoice'] },
                { account: C.STOCK_GOODS_FOR_RESALE, credit: 30, entries: ['inventory_loss'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 30, entries: ['inventory_loss'] },
                { account: C.STOCK_FINISHED_GOODS, debit: 52, entries: ['manufacturing_order'] },
                { account: C.EXPENSES_FINISHED, credit: 52, entries: ['manufacturing_order'] },
                { account: C.STOCK_RAW, credit: 50, entries: ['manufacturing_order'] },
                { account: C.EXPENSES_RAW, debit: 50, entries: ['manufacturing_order'] },
                { account: C.EXPENSES_CHANGE_IN_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_reception'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 50, entries: ['supplier_reception'] },
                { account: C.EXPENSES_CHANGE_IN_GOODS_FOR_RESALE, credit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: C.EXPENSES_CHANGE_IN_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_reception_extra', 'supplier_bill_extra'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 50, entries: ['supplier_reception_extra', 'supplier_bill_extra'] },
                { account: C.EXPENSES_CHANGE_IN_GOODS_FOR_RESALE, debit: 50, entries: ['customer_shipping'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, credit: 50, entries: ['customer_shipping'] },
                { account: C.EXPENSES_CHANGE_IN_GOODS_FOR_RESALE, debit: 30, entries: ['inventory_loss'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, credit: 30, entries: ['inventory_loss'] },
                { account: C.EXPENSES_RAW, credit: 50, entries: ['manufacturing_order'] },
                { account: C.EXPENSES_CHANGE_IN_RAW, debit: 50, entries: ['manufacturing_order'] },
                { account: C.EXPENSES_FINISHED, debit: 52, entries: ['manufacturing_order'] },
                { account: C.REVENUES_CHANGE_IN_FINISHED_GOODS, credit: 52, entries: ['manufacturing_order'] },
                { account: C.STOCK_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: C.STOCK_GOODS_FOR_RESALE, credit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, debit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
                { account: C.STOCK_GOODS_FOR_RESALE, debit: 50, entries: ['customer_invoice'], except: ['customer_shipping'] },
                { account: C.EXPENSES_GOODS_FOR_RESALE, credit: 50, entries: ['customer_invoice'], except: ['customer_shipping'] },
            ],
        },
        anglo_saxon: {
            periodic: [
                { account: A.ASSETS_INVENTORY, debit: 50, entries: ['supplier_reception'] },
                { account: A.EXPENSES_COST, credit: 50, entries: ['supplier_reception'] },
                { account: A.ASSETS_INVENTORY, debit: 50, entries: ['supplier_reception_extra', 'supplier_bill_extra'] },
                { account: A.EXPENSES_COST, credit: 50, entries: ['supplier_reception_extra', 'supplier_bill_extra'] },
                { account: A.ASSETS_INVENTORY, debit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: A.EXPENSES_COST, credit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: A.ASSETS_INVENTORY, credit: 50, entries: ['customer_shipping'] },
                { account: A.EXPENSES_COST, debit: 50, entries: ['customer_shipping'] },
                { account: A.ASSETS_INVENTORY, credit: 30, entries: ['inventory_loss'] },
                { account: A.EXPENSES_INVENTORY_LOSS, debit: 30, entries: ['inventory_loss'] },
                { account: A.ASSETS_MANUFACTURED, debit: 52, entries: ['manufacturing_order'] },
                { account: A.ASSETS_COST, credit: 52, entries: ['manufacturing_order'] },
                { account: A.ASSETS_RAW, credit: 50, entries: ['manufacturing_order'] },
                { account: A.ASSETS_COST, debit: 50, entries: ['manufacturing_order'] },
            ],
            perpetual: [
                { account: A.ASSETS_INVENTORY, debit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: A.ASSETS_VARIATIONS, credit: 50, entries: ['supplier_reception'], except: ['supplier_bill'] },
                { account: A.ASSETS_INVENTORY, debit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: A.ASSETS_VARIATIONS, credit: 48, entries: ['supplier_reception_extra'], except: ['supplier_bill_extra'] },
                { account: A.ASSETS_INVENTORY, credit: 50, entries: ['customer_shipping'], except: ['customer_invoice'] },
                { account: A.ASSETS_VARIATIONS, debit: 50, entries: ['customer_shipping'], except: ['customer_invoice'] },
                { account: A.ASSETS_INVENTORY, credit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: A.ASSETS_VARIATIONS, debit: 50, entries: ['supplier_bill'], except: ['supplier_reception'] },
                { account: A.ASSETS_INVENTORY, credit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
                { account: A.ASSETS_VARIATIONS, debit: 50, entries: ['supplier_bill_extra'], except: ['supplier_reception_extra'] },
                { account: A.ASSETS_INVENTORY, debit: 50, entries: ['customer_invoice'], except: ['customer_shipping'] },
                { account: A.ASSETS_VARIATIONS, credit: 50, entries: ['customer_invoice'], except: ['customer_shipping'] },
            ],
        },
    },
};

const REVIEW_IDS = new Set(['unreceived', 'uninvoiced', 'prepaid', 'deferred', 'closing']);

const STANDARD_DEFAULT_METHOD = { continental: 'periodic', anglo_saxon: 'perpetual' };

const fromClass = (element, prefix) => {
    const name = Array.from(element.classList).find(className => className.startsWith(prefix));
    return name && name.slice(prefix.length);
};

const emptyTotals = () => ({ debit: 0, credit: 0 });

const format = (value, defaultValue) => {
    if (!value) {
        return defaultValue === undefined ? '' : defaultValue;
    }
    if (value % 1 === 0) {
        return value;
    }
    return value.toFixed(2);
};

/**
 * Turn the paragraphs of a `.valuation-controls` block into inputs: radios for the standard and
 * the method, and radios or checkboxes (depending on `operationType`) for the operations.
 */
const buildControls = (root, namePrefix, operationType) => {
    const controls = { standards: [], methods: [], operations: [] };
    const addInput = (paragraph, type, name, id, group) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = type;
        if (name) {
            input.name = name;
        }
        label.append(input, document.createTextNode(' '), ...paragraph.childNodes);
        paragraph.replaceWith(label);
        group.push({ id, label, input });
    };
    root.querySelectorAll('p').forEach(paragraph => {
        const standard = fromClass(paragraph, 'standard-');
        const method = fromClass(paragraph, 'method-');
        const operation = fromClass(paragraph, 'operation-');
        if (standard) {
            addInput(paragraph, 'radio', `${namePrefix}-standard`, standard.replaceAll('-', '_'), controls.standards);
        } else if (method) {
            addInput(paragraph, 'radio', `${namePrefix}-method`, method, controls.methods);
        } else if (operation) {
            addInput(
                paragraph, operationType, operationType === 'radio' ? `${namePrefix}-operation` : '',
                operation.replaceAll('-', '_'), controls.operations
            );
        }
    });
    return controls;
};

const initAlternatives = () => {
    document.querySelectorAll('dl.alternatives').forEach((list, index) => {
        const terms = Array.from(list.children).filter(child => child.matches('dt'));
        const contents = Array.from(list.children).filter(child => child.matches('dd'));
        const controls = document.createElement('div');
        controls.className = 'alternatives-controls';

        const inputs = terms.map((term, termIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `alternatives-${index}`;
            label.append(input, document.createTextNode(' '), ...term.childNodes);
            controls.append(label);
            term.hidden = true;
            input.addEventListener('change', () => {
                contents.forEach((content, contentIndex) => {
                    content.hidden = contentIndex !== termIndex;
                });
            });
            return input;
        });

        list.before(controls);
        document.querySelectorAll('.alternatives-note').forEach(note => controls.after(note));
        if (inputs.length) {
            inputs[0].checked = true;
            inputs[0].dispatchEvent(new Event('change'));
        }
    });
};

const operationEntries = (opId, standard, method) => {
    const operation = OPERATIONS[opId];
    return operation ? operation[standard][method] : [];
};

/** An entry applies if all the `entries` operations are enabled and none of the `except` ones. */
const isApplicable = (entry, enabledOps) => (
    (entry.entries || []).every(opId => enabledOps.has(opId))
    && !(entry.except || []).some(opId => enabledOps.has(opId))
);

const initAccountingEntries = () => {
    const controlsRoot = document.querySelector('.accounting-controls');
    const chartRoot = document.querySelector('.accounting-entries');
    if (!controlsRoot || !chartRoot) {
        return;
    }

    const controls = buildControls(controlsRoot, 'accounting', 'checkbox');
    const state = { standard: 'continental', method: 'periodic', activeOpId: null };
    const enabledOps = new Set();

    const charts = {};
    chartRoot.querySelectorAll('table.valuation-chart').forEach(table => {
        const standard = fromClass(table, 'chart-').replaceAll('-', '_');
        const groups = [];
        const rows = Array.from(table.querySelectorAll('tbody tr')).map(row => {
            const account = row.querySelector('[class*="account-"]');
            const model = {
                code: Number(fromClass(account, 'account-')),
                debitCell: row.cells[1],
                creditCell: row.cells[2],
                balanceCell: row.cells[3],
            };
            if (account.classList.contains('category')) {
                groups.push([model]);
            } else {
                groups[groups.length - 1].push(model);
            }
            return model;
        });
        charts[standard] = { table, rows, groups };
    });

    const update = () => {
        const { standard, method, activeOpId } = state;
        controls.standards.forEach(({ id, input }) => {
            input.checked = id === standard;
        });
        controls.methods.forEach(({ id, input }) => {
            input.checked = id === method;
        });

        // Only used for highlighting cells.
        const highlightByAccount = {};
        operationEntries(activeOpId, standard, method).forEach(entry => {
            highlightByAccount[entry.account] = entry.credit !== undefined ? 'credit' : 'debit';
        });

        const totals = {};
        enabledOps.forEach(opId => {
            operationEntries(opId, standard, method).forEach(entry => {
                if (!isApplicable(entry, enabledOps)) {
                    return;
                }
                const bucket = totals[entry.account] || (totals[entry.account] = emptyTotals());
                bucket.debit += entry.debit || 0;
                bucket.credit += entry.credit || 0;
            });
        });

        controls.operations.forEach(({ id, label, input }) => {
            input.checked = enabledOps.has(id);
            label.classList.toggle('highlight-op', id === activeOpId);
            // Bold the closing operations having an impact with the currently enabled operations.
            label.classList.toggle('is-relevant', REVIEW_IDS.has(id) && operationEntries(id, standard, method)
                .some(entry => isApplicable(entry, enabledOps)));
        });

        Object.entries(charts).forEach(([chartStandard, chart]) => {
            chart.table.hidden = chartStandard !== standard;
            if (chartStandard !== standard) {
                return;
            }
            chart.groups.forEach(group => {
                const [category, ...items] = group;
                // A category sums its own account and the ones of its items.
                const categorySums = group.reduce((acc, row) => {
                    const sums = totals[row.code] || emptyTotals();
                    acc.debit += sums.debit;
                    acc.credit += sums.credit;
                    return acc;
                }, emptyTotals());
                const rowsSums = new Map([[category, categorySums]]);
                items.forEach(row => rowsSums.set(row, totals[row.code] || emptyTotals()));
                rowsSums.forEach((sums, row) => {
                    const debit = format(sums.debit);
                    const credit = format(sums.credit);
                    row.debitCell.textContent = debit;
                    row.creditCell.textContent = credit;
                    row.balanceCell.textContent = sums.debit || sums.credit ? format(sums.debit - sums.credit, 0) : '';
                    // Don't highlight the cell if it's going to be empty.
                    row.debitCell.classList.toggle('highlight-op', Boolean(debit) && highlightByAccount[row.code] === 'debit');
                    row.creditCell.classList.toggle('highlight-op', Boolean(credit) && highlightByAccount[row.code] === 'credit');
                });
            });
        });
    };

    controls.standards.forEach(({ id, input }) => {
        input.addEventListener('change', () => {
            state.standard = id;
            state.method = STANDARD_DEFAULT_METHOD[id];
            update();
        });
    });
    controls.methods.forEach(({ id, input }) => {
        input.addEventListener('change', () => {
            state.method = id;
            update();
        });
    });
    controls.operations.forEach(({ id, input }) => {
        input.addEventListener('change', () => {
            if (input.checked) {
                enabledOps.add(id);
                state.activeOpId = id;
            } else {
                enabledOps.delete(id);
                state.activeOpId = null;
            }
            update();
        });
    });

    update();
};

const initJournalEntries = () => {
    const controlsRoot = document.querySelector('.journal-controls');
    const entriesRoot = document.querySelector('.journal-entries');
    if (!controlsRoot || !entriesRoot) {
        return;
    }

    const controls = buildControls(controlsRoot, 'journal', 'radio');
    const panels = Array.from(entriesRoot.querySelectorAll('.entries-panel'));
    const state = { standard: 'continental', method: 'periodic', opId: 'initial_inventory' };

    const update = () => {
        const { standard, method, opId } = state;
        controls.standards.forEach(({ id, input }) => {
            input.checked = id === standard;
        });
        controls.methods.forEach(({ id, input }) => {
            input.checked = id === method;
        });
        controls.operations.forEach(({ id, input }) => {
            input.checked = id === opId;
        });
        panels.forEach(panel => {
            panel.hidden = !(
                panel.classList.contains(`entry-${opId.replaceAll('_', '-')}`)
                && panel.classList.contains(`mode-${standard.replaceAll('_', '-')}-${method}`)
            );
        });
    };

    controls.standards.forEach(({ id, input }) => {
        input.addEventListener('change', () => {
            state.standard = id;
            state.method = STANDARD_DEFAULT_METHOD[id];
            update();
        });
    });
    controls.methods.forEach(({ id, input }) => {
        input.addEventListener('change', () => {
            state.method = id;
            update();
        });
    });
    controls.operations.forEach(({ id, input }) => {
        input.addEventListener('change', () => {
            state.opId = id;
            update();
        });
    });

    update();
};

const initValuationCheatSheet = () => {
    initAlternatives();
    initAccountingEntries();
    initJournalEntries();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initValuationCheatSheet, { once: true });
} else {
    initValuationCheatSheet();
}
