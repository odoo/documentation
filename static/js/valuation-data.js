/* global Immutable */
const VALUATION_STANDARDS = Immutable.fromJS([
    { name: 'continental', text: "Continental (Expenses = Purchase Expenses)" },
    { name: 'anglo_saxon', text: "Anglo-Saxon (Expenses = Cost of Goods Sold)" },
]);

const VALUATION_METHODS = Immutable.fromJS([
    { name: 'periodic',  text: "Periodic: focuses on expenses by nature" },
    { name: 'perpetual', text: "Perpetual: focuses on inventory value" },
]);

const VALUATION_JOURNALS = Immutable.fromJS({
    continental: {
        EQUITY: { code: 1, title: "Equity and Liabilities" },
        ASSETS: { code: 2, title: "Fixed Assets" },
        STOCK: {
            code: 3, title: "Stock (Current Assets)",
            RAW: { code: 300000, title: "Inventory Raw Materials" },
            WIP: { code: 320000, title: "Work in Progress" },
            FINISHED_GOODS: { code: 330000, title: "Inventory Finished Goods" },
            GOODS_FOR_RESALE: { code: 340000, title: "Inventory Goods Purchase for Resale" },
        },
        LIABILITIES: {
            code: 4, title: "Receivables and Payables",
            CUSTOMERS: { code: 400000, title: "Customers" },
            VAT_RECOVERABLE: { code: 411000, title: "VAT Recoverable" },
            RECEIVABLE: { code: 414000, title: "Income Receivable" },
            SUPPLIERS: { code: 440000, title: "Suppliers" },
            INVOICES_UNRECEIVED: { code: 444000, title: "Invoices to Be Received" },
            VAT_PAYABLE: { code: 451000, title: "VAT Payable" },
            DEFERRED_CHARGES: { code: 490000, title: "Deferred Charges" },
            DEFERRED_INCOME: { code: 493000, title: "Deferred Income" },
        },
        CASH: { code: 5, title: "Financial Accounts and Cash" },
        EXPENSES: {
            code: 6, title: "Expenses",
            RAW: { code: 600000, title: "Raw Materials" },
            FINISHED: { code: 600200, title: "Cost of Finished Goods" },
            GOODS_FOR_RESALE: { code: 604000, title: "Goods for Resale" },
            CHANGE_IN_RAW: { code: 609000, title: "Decrease (Increase) in Stocks of Raw Materials" },
            CHANGE_IN_GOODS_FOR_RESALE: { code: 609400, title: "Decrease (Increase) in Stocks of Goods Purchased for Resale" },
        },
        REVENUES: {
            code: 7, title: "Revenues",
            SALES: { code: 700000, title: "Sales" },
            CHANGE_IN_WIP: { code: 712000, title: "Increase (Decrease) in Stocks of Work in Progress" },
            CHANGE_IN_FINISHED_GOODS: { code: 713000, title: "Increase (Decrease) in Stocks of Finished Goods" },
        },
        INITIAL_BALANCE: { title: "General Balance for Inventory Initial Value" },
    },
    anglo_saxon: {
        ASSETS: {
            code: 1, title: "Assets",
            BANK: { code: 101401, title: "Bank" },
            INVENTORY: { code: 110100, title: "Inventory" },
            RAW: { code: 110101, title: "Raw Materials Inventory" },
            MANUFACTURED: { code: 110102, title: "Manufactured Products Inventory" },
            COST: { code: 110400, title: "Cost of Production" },
            VARIATIONS: { code: 110600, title: "Inventory Variations" },
            RECEIVABLE: { code: 121000, title: "Accounts Receivable" },
            UNINVOICED: { code: 121200, title: "Uninvoiced Receivable" },
            PREPAID: { code: 128000, title: "Prepaid Expenses" },
            TAX_PAID: { code: 131000, title: "Tax Paid" },
        },
        LIABILITIES: {
            code: 2, title: "Liabilities",
            PAYABLE: { code: 211000, title: "Accounts Payable" },
            UNINVOICED: {
                code: 211100,
                title: "Bills to Receive/Goods Received Not Invoiced",
            },
            DEFERRED: { code: 212000, title: "Deferred Revenue" },
            TAX_RECEIVED: { code: 251000, title: "Tax Received" },
        },
        EQUITY: {
            code: 3, title: "Equity",
            COMMON: { code: 303000, title: "Common Stock" },
        },
        REVENUES: {
            code: 4, title: "Revenue",
            SALES: { code: 400000, title: "Product Sales" },
        },
        EXPENSES: {
            code: 5, title: "Expenses",
            COST: { code: 500000, title: "Cost of Goods Sold" },
            PRICE_DIFFERENCE: { code: 530000, title: "Price Difference" },
            INVENTORY_LOSS: { code: 609100, title: "Inventory Loss Expense" },
            MISC: { code: 609000, title: "Miscellanous Expenses" },
        },
        INITIAL_BALANCE: { title: "General Balance for Inventory Initial Value" },
    },
});

const VALUATION_ENTRIES = Immutable.fromJS([
    {
        title: "Initial Inventory (Goods for Resale $50)",
        continental: {
            periodic: {
                operations: [
                    { account: ['STOCK', 'GOODS_FOR_RESALE'], debit: 50 },
                    { account: ['INITIAL_BALANCE'], credit: 50 },
                ],
                explanation: [],
                configuration: [
                    "Stock Account: defined on the product category",
                ],
            },
            perpetual: {
                operations: [
                    { account: ['STOCK', 'GOODS_FOR_RESALE'], debit: 50 },
                    { account: ['INITIAL_BALANCE'], credit: 50 },
                ],
                explanation: [],
                configuration: [
                    "Stock Account: defined on the product category",
                ],
            },
        },
        anglo_saxon: {
            periodic: {
                operations: [
                    { account: ['ASSETS', 'INVENTORY'], debit: 50 },
                    { account: ['INITIAL_BALANCE'], credit: 50 },
                ],
                explanation: [],
                configuration: [
                    "Stock Account: defined on the product category",
                ],
            },
            perpetual: {
                operations: [
                    { account: ['ASSETS', 'INVENTORY'], debit: 50 },
                    { account: ['INITIAL_BALANCE'], credit: 50 },
                ],
                explanation: [],
                configuration: [
                    "Stock Account: defined on the product category",
                ],
            },
        },
    },
    {
        title: "Supplier Goods Reception (PO $50, Invoice $50)",
        continental: {
            periodic: {
                operations: [],
                explanation: [
                    "In a periodic inventory valuation, goods' receipts are not directly posted in the accounting.",
                    "The inventory value is updated when entries are generated from stock valuation report at closing.",
                ],
                configuration: [],
            },
            perpetual: {
                operations: [],
                explanation: [
                    "In a perpetual inventory valuation, goods receipts are not directly posted in the accounting.",
                    "The inventory value is updated:",
                    "- when the invoice/bill is posted",
                    "- when entries are generated from stock valuation report at closing",
                ],
                configuration: [],
            },
        },
        anglo_saxon: {
            periodic: {
                operations: [],
                explanation: [
                    "In a periodic inventory valuation, goods' receipts are not directly posted in the accounting.",
                    "The inventory value is updated when entries are generated from stock valuation report at closing.",
                ],
                configuration: [],
            },
            perpetual: {
                operations: [],
                explanation: [
                    "In a perpetual inventory valuation, goods receipts are not directly posted in the accounting.",
                    "The inventory value is updated:",
                    "- when the invoice/bill is posted",
                    "- when entries are generated from stock valuation report at closing",
                ],
                configuration: [],
            },
        },
    },
    {
        title: "Supplier Bill (PO $50, Bill $50)",
        continental: {
            periodic: {
                operations: [
                    { account: ['EXPENSES', 'GOODS_FOR_RESALE'], debit: 50 },
                    { account: ['LIABILITIES', 'SUPPLIERS'], credit: 54.5 },
                    { account: ['LIABILITIES', 'VAT_RECOVERABLE'], debit: 4.5 },
                ],
                explanation: [],
                configuration: [
                    "Account Payable: defined on the supplier contact",
                    "Tax Account: defined on the account from the Purchase Taxes set on the product",
                    "Expense Account: defined on the product/product category",
                ],
            },
            perpetual: {
                operations: [
                    { account: ['STOCK', 'GOODS_FOR_RESALE'], debit: 50 },
                    { account: ['LIABILITIES', 'SUPPLIERS'], credit: 54.5 },
                    { account: ['LIABILITIES', 'VAT_RECOVERABLE'], debit: 4.5 },
                ],
                explanation: [],
                configuration: [
                    "Stock Account: defined on the product category",
                    "Account Payable Account: defined on the supplier contact",
                    "Tax Account: defined on the account from the Purchase Taxes set on the product",
                ],
            },
        },
        anglo_saxon: {
            periodic: {
                operations: [
                    { account: ['EXPENSES', 'COST'], debit: 50 },
                    { account: ['LIABILITIES', 'PAYABLE'], credit: 54.5 },
                    { account: ['ASSETS', 'TAX_PAID'], debit: 4.5 },
                ],
                explanation: [],
                configuration: [
                    "Account Payable: defined on the supplier contact",
                    "Tax Account: defined on the account from the Purchase Taxes set on the product",
                    "Expense Account: defined on the product/product category",
                ],
            },
            perpetual: {
                operations: [
                    { account: ['ASSETS', 'INVENTORY'], debit: 50 },
                    { account: ['LIABILITIES', 'PAYABLE'], credit: 54.5 },
                    { account: ['ASSETS', 'TAX_PAID'], debit: 4.5 },
                ],
                explanation: [],
                configuration: [
                    "Account Payable: defined on the supplier contact",
                    "Tax Account: defined on the account from the Purchase Taxes set on the product",
                    "Expense Account: defined on the product/product category",
                ],
            },
        },
    },
    {
        title: "Supplier Goods Reception (PO $48, Invoice $50)",
        continental: {
            periodic: {
                operations: [],
                explanation: [
                    "In a periodic inventory valuation, goods' receipts are not directly posted in the accounting.",
                    "The inventory value is updated when entries are generated from stock valuation report at closing.",
                ],
                configuration: [],
            },
            perpetual: {
                operations: [],
                explanation: [
                    "In a perpetual inventory valuation, goods receipts are not directly posted in the accounting.",
                    "The inventory value is updated:",
                    "- when the invoice/bill is posted",
                    "- when entries are generated from stock valuation report at closing",
                ],
                configuration: [],
            },
        },
        anglo_saxon: {
            periodic: {
                operations: [],
                explanation: [
                    "In a periodic inventory valuation, goods' receipts are not directly posted in the accounting.",
                    "The inventory value is updated when entries are generated from stock valuation report at closing.",
                ],
                configuration: [],
            },
            perpetual: {
                operations: [],
                explanation: [
                    "In a perpetual inventory valuation, goods receipts are not directly posted in the accounting.",
                    "The inventory value is updated:",
                    "- when the invoice/bill is posted",
                    "- when entries are generated from stock valuation report at closing",
                ],
                configuration: [],
            },
        },
    },
    {
        title: "Supplier Bill (PO $48, Bill $50)",
        continental: {
            periodic: {
                operations: [
                    { account: ['EXPENSES', 'GOODS_FOR_RESALE'], debit: 50 },
                    { account: ['LIABILITIES', 'SUPPLIERS'], credit: 54.5 },
                    { account: ['LIABILITIES', 'VAT_RECOVERABLE'], debit: 4.5 },
                ],
                explanation: [],
                configuration: [
                    "Account Payable: defined on the supplier contact",
                    "Tax Account: defined on the account from the Purchase Taxes set on the product",
                    "Expense Account: defined on the product/product category",
                ],
            },
            perpetual: {
                operations: [
                    { account: ['STOCK', 'GOODS_FOR_RESALE'], debit: 50 },
                    { account: ['LIABILITIES', 'SUPPLIERS'], credit: 54.5 },
                    { account: ['LIABILITIES', 'VAT_RECOVERABLE'], debit: 4.5 },
                ],
                explanation: [],
                configuration: [
                    "Stock Account: defined on the product category",
                    "Account Payable Account: defined on the supplier contact",
                    "Tax Account: defined on the account from the Purchase Taxes set on the product",
                ],
            },
        },
        anglo_saxon: {
            periodic: {
                operations: [
                    { account: ['EXPENSES', 'COST'], debit: 50 },
                    { account: ['LIABILITIES', 'PAYABLE'], credit: 54.5 },
                    { account: ['ASSETS', 'TAX_PAID'], debit: 4.5 },
                ],
                explanation: [],
                configuration: [
                    "Account Payable: defined on the supplier contact",
                    "Tax Account: defined on the account from the Purchase Taxes set on the product",
                    "Expense Account: defined on the product/product category",
                ],
            },
            perpetual: {
                operations: [
                    { account: ['ASSETS', 'INVENTORY'], debit: 50 },
                    { account: ['LIABILITIES', 'PAYABLE'], credit: 54.5 },
                    { account: ['ASSETS', 'TAX_PAID'], debit: 4.5 },
                ],
                explanation: [],
                configuration: [
                    "Account Payable: defined on the supplier contact",
                    "Tax Account: defined on the account from the Purchase Taxes set on the product",
                    "Expense Account: defined on the product/product category",
                ],
            },
        },
    },
    {
        title: "Customer Shipping (SO $100, Invoice $100, Good Value $50)",
        continental: {
            periodic: {
                operations: [],
                explanation: [
                    "In a periodic inventory valuation, goods shipments are not directly posted in the accounting.",
                    "The inventory value is updated when entries are generated from stock valuation report at closing.",
                ],
                configuration: [],
            },
            perpetual: {
                operations: [],
                explanation: [
                    "In a perpetual inventory valuation, goods shipments are not directly posted in the accounting.",
                    "The inventory value is updated:",
                    "- when the invoice/bill is posted",
                    "- when entries are generated from stock valuation report at closing",
                ],
                configuration: [],
            },
        },
        anglo_saxon: {
            periodic: {
                operations: [],
                explanation: [
                    "In a periodic inventory valuation, goods shipments are not directly posted in the accounting.",
                    "The inventory value is updated when entries are generated from stock valuation report at closing.",
                ],
                configuration: [],
            },
            perpetual: {
                operations: [],
                explanation: [
                    "In a perpetual inventory valuation, goods shipments are not directly posted in the accounting.",
                    "The inventory value is updated:",
                    "- when the invoice/bill is posted",
                    "- when entries are generated from stock valuation report at closing",
                ],
                configuration: [],
            },
        },
    },
    {
        title: "Customer Invoice (SO $100, Invoice $100, Good Value $50)",
        continental: {
            periodic: {
                operations: [
                    { account: ['LIABILITIES', 'CUSTOMERS'], debit: 109 },
                    { account: ['LIABILITIES', 'VAT_PAYABLE'], credit: 9 },
                    { account: ['REVENUES', 'SALES'], credit: 100 },
                ],
                explanation: [],
                configuration: [
                    "Account Receivable Account: defined on the customer contact",
                    "Tax Account: defined on the account from the Sales Taxes set on the product",
                    "Income Account: defined on the product/product category",
                ],
            },
            perpetual: {
                operations: [
                    { account: ['STOCK', 'GOODS_FOR_RESALE'], credit: 50 },
                    { account: ['EXPENSES', 'GOODS_FOR_RESALE'], debit: 50 },
                    { account: ['LIABILITIES', 'CUSTOMERS'], debit: 50 },
                    { account: ['LIABILITIES', 'VAT_PAYABLE'], credit: 9 },
                    { account: ['REVENUES', 'SALES'], credit: 100 },
                ],
                explanation: [],
                configuration: [
                    "Stock Account: defined on the product category",
                    "Expense/COGS Account: defined on the product/product category",
                    "Account Receivable Account: defined on the customer contact",
                    "Tax Account: defined on the account from the Sales Taxes set on the product",
                    "Income Account: defined on the product/product category",
                ],
            },
        },
        anglo_saxon: {
            periodic: {
                operations: [
                    { account: ['ASSETS', 'RECEIVABLE'], debit: 109 },
                    { account: ['LIABILITIES', 'TAX_RECEIVED'], credit: 9 },
                    { account: ['REVENUES', 'SALES'], credit: 100 },
                ],
                explanation: [],
                configuration: [
                    "Account Receivable Account: defined on the customer contact",
                    "Tax Account: defined on the account from the Sales Taxes set on the product",
                    "Income Account: defined on the product/product category",
                ],
            },
            perpetual: {
                operations: [
                    { account: ['ASSETS', 'INVENTORY'], credit: 50 },
                    { account: ['EXPENSES', 'COST'], debit: 50 },
                    { account: ['ASSETS', 'RECEIVABLE'], debit: 109 },
                    { account: ['LIABILITIES', 'TAX_RECEIVED'], credit: 9 },
                    { account: ['REVENUES', 'SALES'], credit: 100 },
                ],
                explanation: [],
                configuration: [
                    "Stock Account: defined on the product category",
                    "Expense/COGS Account: defined on the product/product category",
                    "Account Receivable Account: defined on the customer contact",
                    "Tax Account: defined on the account from the Sales Taxes set on the product",
                    "Income Account: defined on the product/product category",
                ],
            },
        },
    },
    {
        title: "Manufacturing Order (Finished Product at $52, Component at $50)",
        continental: {
            periodic: {
                operations: [],
                explanation: [
                    "In a periodic inventory valuation manufacturing orders are not directly posted in the accounting.",
                    "The inventory value is updated when entries are genarted from stock valuation report at closing.",
                ],
                configuration: [],
            },
            perpetual: {
                operations: [],
                explanation: [
                    "No 'Cost of Production' account is set on the inventory loss location, therefore variations in " +
                        "inventories of manufactured goods and components will be recorded at closing.",
                ],
                configuration: [],
            },
        },
        anglo_saxon: {
            periodic: {
                operations: [],
                explanation: [
                    "In a periodic inventory valuation manufacturing orders are not directly posted in the accounting.",
                    "The inventory value is updated when entries are genarted from stock valuation report at closing.",
                ],
                configuration: [],
            },
            perpetual: {
                operations: [
                    { account: ['ASSETS', 'MANUFACTURED'], debit: 52 },
                    { account: ['ASSETS', 'COST'], credit: 52 },
                    { account: ['ASSETS', 'RAW'], credit: 50 },
                    { account: ['ASSETS', 'COST'], debit: 50 },
                ],
                explanation: [],
                configuration: [
                    "Stock Account for manufactured product: defined on the product category",
                    "Stock Account for component: defined on the product category",
                    "Cost of Production Account: defined on the production location",
                ],
            },
        },
    },
    {
        title: "Inventory Loss (Scrap $30)",
        continental: {
            periodic: {
                operations: [],
                explanation: [
                    "In a periodic inventory valuation, inventory adjustments are not directly posted in the accounting.",
                    "The inventory value is updated when entries are generated from stock valuation report at closing.",
                ],
                configuration: [],
            },
            perpetual: {
                operations: [],
                explanation: [
                    "No 'Inventory Loss' account is set on the inventory loss location, therefore variations in " +
                        "inventories coming from inventory adjustments will be recorded at closing.",
                ],
                configuration: [],
            },
        },
        anglo_saxon: {
            periodic: {
                operations: [],
                explanation: [
                    "In a periodic inventory valuation, inventory adjustments are not directly posted in the accounting.",
                    "The inventory value is updated when entries are generated from stock valuation report at closing.",
                ],
                configuration: [],
            },
            perpetual: {
                operations: [
                    { account: ['ASSETS', 'INVENTORY'], credit: 30 },
                    { account: ['EXPENSES', 'INVENTORY_LOSS'], debit: 30 },
                ],
                explanation: [],
                configuration: [
                    "Stock Account: defined on the product category",
                    "Inventory Adjustment Account: defined on the inventory loss location",
                ],
            },
        },
    },
]);

const VALUATION_REVIEWS = Immutable.fromJS({
    closing: {
        title: "Closing Entry from Stock Valuation Report",
        continental: {
            periodic: {
                operations: [
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], "debit": 50 },
                    { "account": ["EXPENSES", "CHANGE_IN_GOODS_FOR_RESALE"], "credit": 50 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], debit: 50 },
                    { "account": ["EXPENSES", "CHANGE_IN_GOODS_FOR_RESALE"], credit: 50 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], debit: 48 },
                    { "account": ["EXPENSES", "CHANGE_IN_GOODS_FOR_RESALE"], credit: 48 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], credit: 50 },
                    { "account": ["EXPENSES", "CHANGE_IN_GOODS_FOR_RESALE"], debit: 50 },
                    { "account": ["STOCK", "FINISHED_GOODS"], debit: 52 },
                    { "account": ["STOCK", "RAW"], credit: 50 },
                    { "account": ["REVENUES", "CHANGE_IN_FINISHED_GOODS"], credit: 52 },
                    { "account": ["EXPENSES", "CHANGE_IN_RAW"], debit: 50 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], credit: 30 },
                    { "account": ["EXPENSES", "CHANGE_IN_GOODS_FOR_RESALE"], debit: 30 },
                ],
                explanation: [
                    "At closing, Stock Valuation must be updated to reflect reality. This will be done by generating entries from" +
                        " the Stock Valuation Report. This will recognize value coming from operations such as the following ones:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50)",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if bill received",
                    "3) Supplier Goods Reception (PO $48, Invoice $50) if no bill received yet",
                    "4) Customer Shipping (SO $100, Invoice $100, Good Value $50)",
                    "5) Inventory Loss (Scrap $30)",
                    "6) Manufacturing Order (Finished Product at $52, Component at $50)",
                ],
                configuration: [
                    "Stock Account: defined on the product category",
                    "Inventory Variation Account: defined on the used Stock Account",
                ],
            },
            perpetual: {
                "operations": [
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], debit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], credit: 50 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], debit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], credit: 50 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], debit: 48 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], credit: 48 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], debit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], credit: 50 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], credit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], debit: 50 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], debit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], credit: 50 },
                    { "account": ["STOCK", "FINISHED_GOODS"], debit: 52 },
                    { "account": ["EXPENSES", "FINISHED"], credit: 52 },
                    { "account": ["STOCK", "RAW"], credit: 50 },
                    { "account": ["EXPENSES", "RAW"], debit: 50 },
                    { "account": ["EXPENSES", "CHANGE_IN_GOODS_FOR_RESALE"], credit: 20 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], debit: 20 },
                    { "account": ["EXPENSES", "CHANGE_IN_GOODS_FOR_RESALE"], credit: 18 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], debit: 18 },
                    { "account": ["EXPENSES", "RAW"], credit: 50 },
                    { "account": ["EXPENSES", "CHANGE_IN_RAW"], debit: 50 },
                    { "account": ["EXPENSES", "FINISHED"], debit: 52 },
                    { "account": ["REVENUES", "CHANGE_IN_FINISHED_GOODS"], credit: 52 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], credit: 30 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], debit: 30 },
                    { "account": ["STOCK", "GOODS_FOR_RESALE"], debit: 30 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], credit: 30 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], credit: 30 },
                    { "account": ["EXPENSES", "CHANGE_IN_GOODS_FOR_RESALE"], debit: 30 },
                ],
                explanation: [
                    "At closing Accounting Stock and Inventory Stock must have the same value.",
                    "A difference could come from cases such as the ones listed below and this will be corrected thanks to" +
                        " the Stock Valuation Report closing entry.",
                    "1) Supplier Goods Reception (PO $50, Invoice $50) if no bill received",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if no bill received",
                    "3) Customer Shipping (SO $100, Invoice $100, Good Value $50) if no invoice sent",
                    "4) Inventory Loss (Scrap $30)",
                    "5) Manufacturing Order (Finished Product at $52, Component at $50)",
                    "At closing, an adjusting entry is created to ensure that the values are correctly recorded in the" +
                        " variation and expenses accounts according to continental accounting logic. Indeed, even though" +
                        " expenses are recorded according to the COGS logic of Anglo-Saxon accounting during the period," +
                        " at closing the expenses recorded should represent what was actually purchased during this period.",
                    "Adjustment between Expense and Variation Account (Stock Account y - Stock Account y-1):",
                    "a. Purchased good for resale",
                    "b. Component",
                    "c. Finished product",
                    "6) Supplier Goods Reception (PO $50, Invoice $50) if reception is not done but bill is received",
                    "7) Supplier Goods Reception (PO $48, Invoice $50) if reception is not done but bill is received",
                    "8) Customer Shipping (SO $100, Invoice $100, Good Value $50) is not done but invoice is sent",
                    "9) Inventory Loss (Scrap 30$)",
                    "Adjustment between Expense and Variation Account (Stock Account y - Stock Account y-1):",
                    "a. Purchased good to sell",
                ],
                configuration: [
                    "Expense Account: defined on the product/product category",
                    "Stock Account: defined on the product category",
                    "Inventory Variation Account: defined on the used Stock Account",
                    "Expense Account for adjusting entry: defined on the used Stock Account",
                ],
            },
        },
        anglo_saxon: {
            periodic: {
                "operations": [
                    { "account": ["ASSETS", "INVENTORY"], debit: 50 },
                    { "account": ["EXPENSES", "COST"], credit: 50 },
                    { "account": ["ASSETS", "INVENTORY"], debit: 50 },
                    { "account": ["EXPENSES", "COST"], credit: 50 },
                    { "account": ["ASSETS", "INVENTORY"], debit: 48 },
                    { "account": ["EXPENSES", "COST"], credit: 48 },
                    { "account": ["ASSETS", "INVENTORY"], credit: 50 },
                    { "account": ["EXPENSES", "COST"], debit: 50 },
                    { "account": ["ASSETS", "MANUFACTURED"], debit: 52 },
                    { "account": ["ASSETS", "COST"], credit: 52 },
                    { "account": ["ASSETS", "RAW"], credit: 50 },
                    { "account": ["ASSETS", "COST"], debit: 50 },
                    { "account": ["ASSETS", "INVENTORY"], credit: 30 },
                    { "account": ["EXPENSES", "INVENTORY_LOSS"], debit: 30 },
                ],
                explanation: [
                    "At closing, Stock Valuation must be updated to reflect reality. This will be done by generating entries from" +
                        " the Stock Valuation Report. This will recognize value coming from operations such as the following ones:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50)",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if bill received",
                    "3) Supplier Goods Reception (PO $48, Invoice $50) if no bill received yet",
                    "4) Customer Shipping (SO $100, Invoice $100, Good Value $50)",
                    "5) Inventory Loss (Scrap $30)",
                    "6) Manufacturing Order (Finished Product at $52, Component at $50)",
                ],
                configuration: [
                    "Stock Account: defined on the product category",
                    "Inventory Variation Account: defined on the used Stock Account",
                    "Inventory Adjustment Account: defined on the Inventory Loss location",
                    "Cost of Production Account: defined on the Production location",
                ],
            },
            perpetual: {
                "operations": [
                    { "account": ["ASSETS", "INVENTORY"], debit: 50 },
                    { "account": ["ASSETS", "VARIATIONS"], credit: 50 },
                    { "account": ["ASSETS", "INVENTORY"], credit: 50 },
                    { "account": ["ASSETS", "VARIATIONS"], debit: 50 },
                    { "account": ["ASSETS", "INVENTORY"], debit: 48 },
                    { "account": ["ASSETS", "VARIATIONS"], credit: 48 },
                    { "account": ["ASSETS", "INVENTORY"], credit: 50 },
                    { "account": ["ASSETS", "VARIATIONS"], debit: 50 },
                    { "account": ["ASSETS", "INVENTORY"], credit: 50 },
                    { "account": ["ASSETS", "VARIATIONS"], debit: 50 },
                    { "account": ["ASSETS", "INVENTORY"], debit: 50 },
                    { "account": ["ASSETS", "VARIATIONS"], credit: 50 },
                ],
                explanation: [
                    "At closing, Accounting Stock and Inventory Stock must have the same value.",
                    "A difference could come from cases such as the ones listed below and this will be corrected thanks to" +
                        " the Stock Valuation Report closing entry.",
                    "Related operations:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50) if reception is done but no bill is received",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if reception is done but no bill is received",
                    "3) Customer Shipping (SO $100, Invoice $100, Good Value $50) if delivery is done but no invoice is sent",
                    "4) Supplier Goods Reception (PO $50, Invoice $50) if reception is not done but bill is received",
                    "5) Supplier Goods Reception (PO $48, Invoice $50) if reception is not done but bill is received",
                    "6) Customer Shipping (SO $100, Invoice $100, Good Value $50) if delivery is not done but invoice is sent",
                ],
                configuration: [
                    "Stock Account: defined on the product category",
                    "Inventory Variation Account: defined on the used Stock Account",
                ],
            },
        },
    },
    unreceived: {
        title: "Invoices not received",
        continental: {
            periodic: {
                "operations": [
                    { "account": ["LIABILITIES", "INVOICES_UNRECEIVED"], credit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], debit: 50 },
                    { "account": ["LIABILITIES", "INVOICES_UNRECEIVED"], credit: 48 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], debit: 48 },
                ],
                explanation: [
                    "These accrual entries are adjusting journal entries made at the end of an accounting period to ensure" +
                        " that expenses are recognized in the period in which they are incurred, regardless of when cash is paid.",
                    "Related operations:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50) if no bill received yet",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if no bill received yet",
                ],
                configuration: [
                    "Expense Account: defined on the product/product category",
                    "GRNI Account: defined when generating accrual entries from 'Invoices not received'",
                ],
            },
            perpetual: {
                "operations": [
                    { "account": ["LIABILITIES", "INVOICES_UNRECEIVED"], credit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], debit: 50 },
                    { "account": ["LIABILITIES", "INVOICES_UNRECEIVED"], credit: 48 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], debit: 48 },
                ],
                explanation: [
                    "These accrual entries are adjusting journal entries made at the end of an accounting period to ensure" +
                        " that expenses are recognized in the period in which they are incurred, regardless of when cash is paid.",
                    "They are reverted after the period we are closing.",
                    "From a stock point of view, it also enables us to specify a part of the origin of stock variations (between" +
                        " Accounting Stock and Inventory Stock) recorded from the stock valuation report.",
                    "Related operations:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50) if no bill received",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if no bill received",
                ],
                configuration: [
                    "Expense Account: defined on the product/product category",
                    "GRNI Account: defined when generating accrual entries from 'Invoices not received'",
                ],
            },
        },
        anglo_saxon: {
            periodic: {
                "operations": [
                    { "account": ["LIABILITIES", "UNINVOICED"], credit: 50 },
                    { "account": ["EXPENSES", "COST"], debit: 50 },
                    { "account": ["LIABILITIES", "UNINVOICED"], credit: 48 },
                    { "account": ["EXPENSES", "COST"], debit: 48 },
                ],
                explanation: [
                    "These accrual entries are adjusting journal entries made at the end of an accounting period to ensure" +
                        " that expenses are recognized in the period in which they are incurred, regardless of when cash is paid.",
                    "Related operations:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50) if no bill received yet",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if no bill received yet",
                ],
                configuration: [
                    "Expense Account: defined on the product/product category",
                    "GRNI Account: defined when generating accrual entries from 'Invoices not received'",
                ],
            },
            perpetual: {
                "operations": [
                    { "account": ["LIABILITIES", "UNINVOICED"], credit: 50 },
                    { "account": ["ASSETS", "VARIATIONS"], debit: 50 },
                    { "account": ["LIABILITIES", "UNINVOICED"], credit: 48 },
                    { "account": ["ASSETS", "VARIATIONS"], debit: 48 },
                ],
                explanation: [
                    "These accrual entries are adjusting journal entries made at the end of an accounting period to ensure" +
                        " that expenses are recognized in the period in which they are incurred, regardless of when cash is paid.",
                    "They are reverted after the period we are closing.",
                    "From a stock point of view, it also enables us to specify a part of the origin of stock variations (between" +
                        " Accounting Stock and Inventory Stock) recorded from the stock valuation report.",
                    "Related operations:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50) if reception is done but no bill is received",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if reception is done but no bill is received",
                ],
                configuration: [
                    "Inventory Variation Account: defined on the used Stock Account for the product category",
                    "GRNI Account: defined when generating accrual entries from 'Invoices not received'",
                ],
            },
        },
    },
    unissued: {
        title: "Invoices to be issued",
        continental: {
            periodic: {
                "operations": [
                    { "account": ["LIABILITIES", "RECEIVABLE"], debit: 100 },
                    { "account": ["REVENUES", "SALES"], credit: 100 },
                ],
                explanation: [
                    "These accrual entries are adjusting journal entries made at the end of an accounting period to ensure" +
                        " that revenues are recognized in the period in which they are earned, regardless of when cash is received.",
                    "Related operation:",
                    "1) Customer Shipping (SO $100, Invoice $100, Good Value $50) if no invoice sent yet",
                ],
                configuration: [
                    "Revenue Account: defined on the product/product category",
                    "GDNI Account: defined when generating accrual entries from 'Invoices to be issued'",
                ],
            },
            perpetual: {
                "operations": [
                    { "account": ["LIABILITIES", "RECEIVABLE"], debit: 100 },
                    { "account": ["REVENUES", "SALES"], credit: 100 },
                ],
                explanation: [
                    "These accrual entries are adjusting journal entries made at the end of an accounting period to ensure" +
                        " that revenues are recognized in the period in which they are earned, regardless of when cash is received.",
                    "They are reverted after the period we are closing.",
                    "From a stock point of view, it also enables us to specify a part of the origin of stock variations (between" +
                        " Accounting Stock and Inventory Stock) recorded from the stock valuation report.",
                    "Related operation:",
                    "1) Customer Shipping (SO $100, Invoice $100, Good value $50) if no invoice sent",
                ],
                configuration: [
                    "Revenue Account: defined on the product/product category",
                    "GDNI Account: defined when generating accrual entries from 'Invoices to be issued'",
                ],
            },
        },
        anglo_saxon: {
            periodic: {
                "operations": [
                    { "account": ["ASSETS", "UNINVOICED"], debit: 100 },
                    { "account": ["REVENUES", "SALES" ], credit: 100 },
                ],
                explanation: [
                    "These accrual entries are adjusting journal entries made at the end of an accounting period to ensure" +
                        " that revenues are recognized in the period in which they are earned, regardless of when cash is received.",
                    "Related operation:",
                    "1) Customer Shipping (SO $100, Invoice $100, Good Value $50) if no invoice sent yet",
                ],
                configuration: [
                    "Revenue Account: defined on the product/product category",
                    "Uninvoiced Receivable Account: defined when generating accrual entries from 'Invoices to be issued'",
                ],
            },
            perpetual: {
                "operations": [
                    { "account": ["ASSETS", "UNINVOICED"], debit: 100 },
                    { "account": ["REVENUES", "SALES"], credit: 100 },
                    { "account": ["ASSETS", "VARIATIONS"], credit: 50 },
                    { "account": ["EXPENSES", "COST"], debit: 50 },
                ],
                explanation: [
                    "These accrual entries are adjusting journal entries made at the end of an accounting period to ensure" +
                        " that revenues are recognized in the period in which they are earned, regardless of when cash is received.",
                    "They are reverted after the period we are closing.",
                    "From a stock point of view, it also enables us to specify a part of the origin of stock variations (between" +
                        " Accounting Stock and Inventory Stock) recorded from the stock valuation report.",
                    "Related operation:",
                    "1) Customer Shipping (SO $100, Invoice $100, Good Value $50) if delivery is done but no invoice is sent",
                ],
                configuration: [
                    "Inventory Variation Account: defined on the used Stock Account for the product category",
                    "Uninvoiced Receivable Account: defined when generating accrual entries from 'Invoices to be issued'",
                    "Revenue Account: defined on the product/product category",
                    "Expense/COGS Account: defined on the product/product category",
                ],
            },
        },
    },
    prepaid: {
        title: "Prepaid Expenses",
        continental: {
            periodic: {
                "operations": [
                    { "account": ["LIABILITIES", "DEFERRED_CHARGES"], debit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], credit: 50 },
                    { "account": ["LIABILITIES", "DEFERRED_CHARGES"], debit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], credit: 50 },
                ],
                explanation: [
                    "Prepaid expenses are journal entries made during closing when a supplier bill is received before goods" +
                        " or services are received, so the amount is recorded as an asset until the expense is recognized.",
                    "Related operations:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50) if reception is not done but bill is received",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if reception is not done but bill is received",
                ],
                configuration: [
                    "Expense Account: defined on the product/product category",
                    "Prepaid Expense Account: defined when generating entries from 'Prepaid Expenses'",
                ],
            },
            perpetual: {
                "operations": [
                    { "account": ["LIABILITIES", "DEFERRED_CHARGES"], credit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], debit: 50 },
                    { "account": ["LIABILITIES", "DEFERRED_CHARGES"], credit: 50 },
                    { "account": ["EXPENSES", "GOODS_FOR_RESALE"], debit: 50 },
                ],
                explanation: [
                    "Prepaid expenses are journal entries made during closing when a supplier bill is received before goods" +
                        " or services are received, so the amount is recorded as an asset until the expense is recognized.",
                    "From a stock point of view, it also enables us to specify a part of the origin of stock variations (between" +
                        " Accounting Stock and Inventory Stock) recorded from the stock valuation report.",
                    "Related operations:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50) if reception is not done but bill is received",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if reception is not done but bill is received",
                ],
                configuration: [
                    "Expense Account: defined on the product/product category",
                    "Prepaid Expense Account: defined when generating entries from 'Prepaid Expenses'",
                ],
            },
        },
        anglo_saxon: {
            periodic: {
                "operations": [
                    { "account": ["ASSETS", "PREPAID"], debit: 50 },
                    { "account": ["EXPENSES", "COST"], credit: 50 },
                    { "account": ["ASSETS", "PREPAID"], debit: 50 },
                    { "account": ["EXPENSES", "COST"], credit: 50 },
                ],
                explanation: [
                    "Prepaid expenses are journal entries made during closing when a supplier bill is received before goods" +
                        " or services are received, so the amount is recorded as an asset until the expense is recognized.",
                    "Related operations:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50) if reception is not done but bill is received",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if reception is not done but bill is received",
                ],
                configuration: [
                    "Expense Account: defined on the product/product category",
                    "Prepaid Expense Account: defined when generating entries from 'Prepaid Expenses'",
                ],
            },
            perpetual: {
                "operations": [
                    { "account": ["ASSETS", "PREPAID"], debit: 50 },
                    { "account": ["ASSETS", "VARIATIONS"], credit: 50 },
                    { "account": ["ASSETS", "PREPAID"], debit: 50 },
                    { "account": ["ASSETS", "VARIATIONS"], credit: 50 },
                ],
                explanation: [
                    "Prepaid expenses are journal entries made during closing when a supplier bill is received before goods" +
                        " or services are received, so the amount is recorded as an asset until the expense is recognized.",
                    "From a stock point of view, it also enables us to specify a part of the origin of stock variations (between" +
                        " Accounting Stock and Inventory Stock) recorded from the stock valuation report.",
                    "Related operations:",
                    "1) Supplier Goods Reception (PO $50, Invoice $50) if reception is not done but bill is received",
                    "2) Supplier Goods Reception (PO $48, Invoice $50) if reception is not done but bill is received",
                ],
                configuration: [
                    "Inventory Variation Account: defined on the used Stock Account for the product category",
                    "Prepaid Expense Account: defined when generating entries from 'Prepaid Expenses'",
                ],
            },
        },
    },
    deferred: {
        title: "Deferred Revenues",
        continental: {
            periodic: {
                "operations": [
                    { "account": ["LIABILITIES", "DEFERRED_INCOME"], credit: 100 },
                    { "account": ["REVENUES", "SALES"], debit: 100 },
                ],
                explanation: [
                    "Deferred revenues are journal entries made during closing when an invoice has been issued but goods or" +
                        " services are not delivered yet, so the amount has to be recorded as a liability until the revenue is earned.",
                    "They are reverted after the period we are closing.",
                    "Related operation:",
                    "1) Customer Shipping (SO $100, Invoice $100, Good value $50) if delivery is not done but invoice is sent",
                ],
                configuration: [
                    "Revenue Account: defined on the product/product category",
                    "Deferred Revenue Account: defined when generating accrual entries from 'Deferred Revenues'",
                ],
            },
            perpetual: {
                "operations": [
                    { "account": ["LIABILITES", "DEFERRED_INCOME"], credit: 100 },
                    { "account": ["REVENUES", "SALES"], debit: 100 },
                ],
                explanation: [
                    "Deferred revenues are journal entries made during closing when an invoice has been issued but goods or" +
                        " services are not delivered yet, so the amount has to be recorded as a liability until the revenue is earned.",
                    "They are reverted after the period we are closing.",
                    "From a stock point of view, it also enables us to specify a part of the origin of stock variations (between" +
                        " Accounting Stock and Inventory Stock) recorded from the stock valuation report.",
                    "Related operations:",
                    "1) Customer Shipping (SO $100, Invoice $100, Good value $50) if delivery is not done but invoice is sent",
                ],
                configuration: [
                    "Revenue Account: defined on the product/product category",
                    "Deferred Revenue Account: defined when generating accrual entries from 'Deferred Revenues'",
                ],
            },
        },
        anglo_saxon: {
            periodic: {
                "operations": [
                    { "account": ["LIABILITIES", "DEFERRED"], credit: 100 },
                    {
                        "account": [
                            "REVENUES",
                            "SALES"
                        ],
                        "debit": 100
                    }
                ],
                explanation: [
                    "Deferred revenues are journal entries made during closing when an invoice has been issued but goods or" +
                        " services are not delivered yet, so the amount has to be recorded as a liability until the revenue is earned.",
                    "They are reverted after the period we are closing.",
                    "Related operation:",
                    "1) Customer Shipping (SO $100, Invoice $100, Good value $50) if delivery is not done but invoice is sent",
                ],
                configuration: [
                    "Revenue Account: defined on the product/product category",
                    "Deferred Revenue Account: defined when generating accrual entries from 'Deferred Revenues'",
                ],
            },
            perpetual: {
                "operations": [
                    { "account": ["LIABILITIES", "DEFERRED"], credit: 100 },
                    { "account": ["REVENUES", "SALES"], debit: 100 },
                    { "account": ["ASSETS", "VARIATIONS"], debit: 50 },
                    { "account": ["EXPENSES", "COST"], credit: 50 },
                ],
                explanation: [
                    "Deferred revenues are journal entries made during closing when an invoice has been issued but goods or" +
                        " services are not delivered yet, so the amount has to be recorded as a liability until the revenue is earned.",
                    "They are reverted after the period we are closing.",
                    "From a stock point of view, it also enables us to specify a part of the origin of stock variations (between" +
                        " Accounting Stock and Inventory Stock) recorded from the stock valuation report.",
                    "Related operation:",
                    "1) Customer Shipping (SO $100, Invoice $100, Good Value $50) if delivery is not done but invoice is sent",
                ],
                configuration: [
                    "Inventory Variation Account: defined on the used Stock Account for the product category",
                    "Deferred Revenue Account: defined when generating accrual entries from 'Deferred Revenues'",
                    "Revenue Account: defined on the product/product category",
                    "Expense/COGS Account : defined on the product/product category",
                ],
            },
        },
    },
});
