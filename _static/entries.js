(function () {
    'use strict';

    const { Component, useState } = owl;
    const { xml } = owl.tags;

    const entries = [
        {
            title: "Company Incorporation",
            operations: [
                { account: 'Assets: Cash', debit: 1000 },
                { account: 'Equity: Common Stock', credit: 1000 }
            ],
            explanation: [
                "The company receives $1,000 in cash",
                "Shares worth of $1,000 belong to the founders",
                null,
                "The initial capital can be cash, but could also be intellectual property, goodwill from a previous company, licences, know how, etc…",
                "Sometimes, capital is not released immediately, accounts for \"capital to be released\" may be necessary."
            ],
            configuration: []
        }, {
            title: "Customer Invoice ($100 + 9% tax)",
            operations: [
                { account: 'Revenue: Goods', credit: 100 },
                { account: 'Liabilities: Deferred Tax Liabilities', credit: 9 },
                { account: 'Assets: Accounts Receivable', debit: 109 },
                { account: 'Assets: Inventory', credit: 50 },
                { account: 'Expenses: Cost of Goods Sold', debit: 50 }
            ],
            explanation: [
                "Revenues increase by $100",
                "A tax to pay at the end of the month of $9",
                "The customer owes $109",
                "The inventory is decreased by $50 (shipping of the goods)",
                "The cost of goods sold decreases the gross profit by $50"
            ],
            configuration: [
                "Revenue: defined on the product, or the product category if not on the product, field Income Account",
                "Defered Tax Liabilities: defined on the tax used on the invoice line",
                "Accounts Receivable: defined on the customer (property)",
                "Inventory: defined on the category of the related product (property)",
                "Expenses: defined on the product, or the category of product (property)",
                null,
                "The fiscal position used on the invoice may have a rule that replaces the Income Account or the tax defined on the product by another one."
            ]
        }, {
            title: "Customer payment",
            operations: [
                { account: 'Assets: Cash', debit: 109 },
                { account: 'Assets: Accounts Receivable', credit: 109 }
            ],
            explanation: [
                "The company receives $109 in cash",
                "The customer owes $109 less"
            ],
            configuration: [
                "Cash: defined on the journal used when registering the payment, fields Default Credit Account and Default Debit Account",
                "Accounts Receivable: defined on the customer (property)"
            ]
        }, {
            title: "Supplier Bill (Purchase Order $50 but Invoice $52)",
            operations: [
                { account: 'Assets: Uninvoiced Inventory', debit: 50 },
                { account: 'Assets: Deferred Tax Assets', debit: 4.68 },
                { account: 'Expenses: Price Difference', debit: 2 },
                { account: 'Liabilities: Accounts Payable', credit: 56.68 }
            ],
            explanation: [
                "A temporary account is used to note goods to receive",
                "The purchase order provides prices of goods, the actual invoice may include extra costs such as shipping",
                "The company still needs to pay the vendor (traded an asset against a liability)"
            ],
            configuration: [
                "Uninvoiced Inventory: defined on the product or the category of related product, field: Stock Input Account",
                "Deferred Tax Assets: defined on the tax used on the purchase order line",
                "Accounts Payable: defined on the supplier related to the bill",
                null,
                "In this scenario, the purchase order was $50 but the company received an invoice for $52 as there were extra shipping costs"
            ]
        }, {
            title: "Supplier Goods Received (Purchase Order: $50)",
            operations: [
                { account: 'Assets: Inventory', debit: 50 },
                { account: 'Assets: Uninvoiced Inventory', credit: 50 },
            ],
            explanation: [
                "Inventory is increased by $50, the expected amount coming from the purchase order",
                "A temporary account is used for the counterpart and will be cleared when receiving the invoice"
            ],
            configuration: [
                "Uninvoiced Inventory: defined on the product or the category of related product, field: Stock Input Account",
                "Inventory: defined on the product category, field: Stock Valuation"
            ]
        }, {
            title: "Buy an asset ($300,000 - no tax)",
            operations: [
                { account: 'Assets: Buildings', debit: 300000 },
                { account: 'Liabilities: Accounts Payable', credit: 300000 }
            ],
            explanation: [
                "The company gets an asset worth of $300,000",
                "The company needs to pay $300,000 to the vendor (traded an asset against a liability)"
            ],
            configuration: [
                "Buildings: Defined on the Asset category selected on the supplier bill line",
                "Accounts Payable: defined on the supplier related to the bill (property)"
            ]
        }, {
            title: "Pay supplier invoice",
            operations: [
                { account: 'Liabilities: Accounts Payable', debit: 300000 },
                { account: 'Assets: Cash', credit: 300000 }
            ],
            explanation: [
                "The company owns $300,000 less to the supplier (liabilities are settled)",
                "The company's cash is reduced by $300,000 (reduction of asset)"
            ],
            configuration: [
                "Accounts Payable: defined on the supplier you pay (property)",
                "Cash: defined on the journal related to the payment method"
            ]
        }, {
            title: "Cash sale (Sales Receipt)",
            operations: [
                { account: 'Assets: Cash', debit: 109 },
                { account: 'Revenue: Goods', credit: 100 },
                { account: 'Liabilities: Deferred Tax Liabilities', credit: 9 }
            ],
            explanation: [
                "Company's cash is increased by $109",
                "Revenues increase by $100",
                "A tax of $9 has to be paid"
            ],
            configuration: [
                "Cash: Payment method defined on the Sales Receipt",
                "Sales: Defined on the product used in the sales receipt, or the category of product if empty",
                "Deferred Tax Liabilities: Defined on the tax used in the sales receipt (coming from the product)"
            ]
        }, {
            title: "Customer pays invoice, 5% early payment rebate",
            operations: [
                { account: 'Assets: Cash', debit: 950 },
                { account: 'Revenue: Sales Discount', debit: 50 },
                { account: 'Assets: Accounts Receivable', credit: 1000 }
            ],
            explanation: [
                "Company's cash is increased by $950",
                "Sales discounts lowering effective revenues by $50",
                "The customer owns $1000 less to the company"
            ],
            configuration: [
                "Cash: is defined on the journal related to the payment / bank statement",
                "Sales Discount: is selected during the payment matching process",
                "Accounts Receivable: is defined on the customer associated to the payment"
            ]
        }, {
            title: "Fiscal year closing — positive earnings and 50% dividends",
            operations: [
                { account: 'Net Profit', debit: 1000 },
                { account: 'Equity: Retained Earnings', credit: 500 },
                { account: 'Liabilities: Dividend Payable', credit: 500 }
            ],
            explanation: [
                "The P&L is cleared (net profit)",
                "50% is transferred to retained earnings",
                "50% will be paid to shareholders as dividends"
            ],
            configuration: [
                "This transaction is recorded by the advisor before closing the fiscal year, depending on how the company uses its net profit."
            ]
        }
    ];

    class EntryControls extends Component {
        constructor() {
            super(...arguments);
            this.state = useState({
                entry: {
                    title: "",
                    operations: [],
                    explanation_list: [],
                    explanation_epilog: [],
                    configuration_list: [],
                    configuration_epilog: []
                }
            });
            this.entries = entries;
        }

        mounted() {
            const entry = document.querySelector('#entries-control input[type="radio"]');
            entry.checked = true;
            this.onChangeEntry(entry.value);
        }

        getItemAndEpilog(value) {
            let items = value;
            let epilog = [];
            const idx = items.indexOf(null);
            if (idx !== -1) {
                epilog = items.slice(idx + 1);
                items = items.slice(0, idx);
            }
            return [items, epilog];
        }

        onChangeEntry(entry) {
            const entryVal = this.entries.find(o => o.title === entry);
            this.state.entry.title = entryVal.title;
            this.state.entry.operations = entryVal.operations;
            [this.state.entry.explanation_list, this.state.entry.explanation_epilog] = this.getItemAndEpilog(entryVal.explanation);
            [this.state.entry.configuration_list, this.state.entry.configuration_epilog] = this.getItemAndEpilog(entryVal.configuration);
            this.state.operations = entryVal.operations;
        }
    }

    EntryControls.template = xml`
        <div class="control-section">
            <div id="entries-control" class="controls">
                <div>
                    <t t-foreach="entries" t-as="entry">
                        <label t-key="entry.title">
                            <input type="radio" name="entries" t-att-value="entry.title" t-on-change="onChangeEntry(entry.title)"/>
                            <span><t t-esc="entry.title" /></span>
                        </label>
                    </t>
                </div>
            </div>
            <div class="journal-entries doc-aside">
                <div>
                    <table class="table table-condensed d-c-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Debit</th>
                                <th>Credit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <t t-foreach="state.entry.operations" t-as="operation">
                                <tr t-key="operation.account">
                                    <td><t t-esc="operation.account"/></td>
                                    <td><t t-esc="operation.debit"/></td>
                                    <td><t t-esc="operation.credit"/></td>
                                </tr>
                            </t>
                        </tbody>
                    </table>
                    <div class="entries-listing"
                        t-if="state.entry.explanation_list.length || state.entry.explanation_epilog.length">
                        <h4>Explanation : </h4>
                        <ul t-if="state.entry.explanation_list.length">
                            <t t-foreach="state.entry.explanation_list" t-as="explanation">
                                <li t-key="explanation"><t t-esc="explanation" /></li>
                            </t>
                        </ul>
                        <t t-foreach="state.entry.explanation_epilog" t-as="explanation_epilog">
                            <p t-key="explanation_epilog"><t t-esc="explanation_epilog" /></p>
                        </t>
                    </div>
                    <div class="entries-listing"
                        t-if="state.entry.configuration_list.length || state.entry.configuration_epilog.length">
                        <h4>Configuration : </h4>
                        <ul t-if="state.entry.configuration_list.length">
                            <t t-foreach="state.entry.configuration_list" t-as="configuration">
                                <li t-key="configuration"><t t-esc="configuration" /></li>
                            </t>
                        </ul>
                        <t t-foreach="state.entry.configuration_epilog" t-as="configuration_epilog">
                            <p t-key="configuration_epilog"><t t-esc="configuration_epilog" /></p>
                        </t>
                    </div>
                </div>
            </div>
        </div>`;

    document.addEventListener('DOMContentLoaded', () => {
        if (document.querySelector('.journal-entries')) {
            document.querySelector('.journal-entries').remove();
        }
        const entrySection = document.getElementById('journal-entries');
        if (!entrySection) { return; }
        const controls = new EntryControls();
        controls.mount(entrySection);
    });
}());
