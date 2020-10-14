(() => {
    'use strict';

    const { Component, useState } = owl;
    const { xml } = owl.tags;

    const ASSETS = {
        code: 1,
        label: "Assets",
        BANK: { code: 11000, label: "Cash" },
        ACCOUNTS_RECEIVABLE: { code: 13100, label: "Accounts Receivable" },
        STOCK: { code: 14000, label: "Inventory" },
        RAW_MATERIALS: { code: 14100, label: "Raw Materials Inventory" },
        STOCK_OUT: { code: 14600, label: "Goods Issued Not Invoiced" },
        TAXES_PAID: { code: 19000, label: "Deferred Tax Assets" }
    };
    const LIABILITIES = {
        code: 2,
        label: "Liabilities",
        ACCOUNTS_PAYABLE: { code: 21000, label: "Accounts Payable" },
        STOCK_IN: { code: 23000, label: "Goods Received Not Purchased" },
        TAXES_PAYABLE: { code: 26200, label: "Deferred Tax Liabilities" }
    };
    const EQUITY = {
        code: 3,
        label: "Equity",
        CAPITAL: { code: 31000, label: "Common Stock" }
    };
    const REVENUE = {
        code: 4,
        label: "Revenue",
        SALES: { code: 41000, label: "Goods" },
    };
    const EXPENSES = {
        code: 5,
        label: "Expenses",
        GOODS_SOLD: { code: 51100, label: "Cost of Goods Sold" },
        MANUFACTURING_OVERHEAD: { code: 52000, label: "Manufacturing Overhead" },
        PRICE_DIFFERENCE: { code: 53000, label: "Price Difference" }
    };

    const categories = [ASSETS, LIABILITIES, EQUITY, REVENUE, EXPENSES].map(category => {
        category['debit_total'] = 0;
        category['credit_total'] = 0;
        for (const [key, value] of Object.entries(category)) {
            if (value instanceof Object) {
                value['debit_total'] = 0;
                value['credit_total'] = 0;
            }
        }
        return category;
    });

    const sale = 100,
        cor = 50,
        tax = sale * 0.09,
        total = sale + tax;
    const operations = [{
        label: "Vendor Bill (PO $50, Invoice $50)",
        operations: [
            { account: LIABILITIES.STOCK_IN.code, debit: constant(50) },
            { account: ASSETS.TAXES_PAID.code, debit: constant(50 * 0.09) },
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(50 * 1.09) },
        ]
    }, {
        label: "Supplier Goods Reception (PO $50, Invoice $50)",
        operations: [
            { account: LIABILITIES.STOCK_IN.code, credit: constant(50) },
            { account: ASSETS.STOCK.code, debit: constant(50) },
        ]
    }, {
        label: "Vendor Bill (PO $48, Invoice $50)",
        operations: [
            { account: EXPENSES.PRICE_DIFFERENCE.code, debit: constant(2) },
            { account: LIABILITIES.STOCK_IN.code, debit: constant(48) },
            { account: ASSETS.TAXES_PAID.code, debit: constant(50 * 0.09) },
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(50 * 1.09) },
        ]
    }, {
        label: "Supplier Goods Reception (PO $48, Invoice $50)",
        operations: [
            { account: LIABILITIES.STOCK_IN.code, credit: constant(48) },
            { account: ASSETS.STOCK.code, debit: constant(48) },
        ]
    }, {
        label: "Customer Invoice",
        operations: [
            { account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: constant(total) },
            { account: EXPENSES.GOODS_SOLD.code, debit: constant(cor) },
            { account: REVENUE.SALES.code, credit: constant(sale) },
            { account: ASSETS.STOCK_OUT.code, credit: constant(cor) },
            { account: LIABILITIES.TAXES_PAYABLE.code, credit: constant(tax) }
        ]
    }, {
        label: "Customer Shipping",
        operations: [
            { account: ASSETS.STOCK_OUT.code, debit: constant(cor) },
            { account: ASSETS.STOCK.code, credit: constant(cor) }
        ]
    }, {
        label: "Production Order",
        operations: [
            { account: ASSETS.STOCK.code, debit: constant(50) },
            { account: EXPENSES.MANUFACTURING_OVERHEAD.code, debit: constant(2) },
            { account: ASSETS.RAW_MATERIALS.code, credit: constant(52) }
        ]
    }];

    function constant(val) {
        return () => val;
    }

    class CoaValuationAngloSaxon extends Component {

        constructor() {
            super(...arguments);
            this.state = useState({ categories: categories, active: "", lastOps: {} });
            this.operations = operations;
            this.selectedOps = [];
        }

        format(val, def) {
            if (!val) { return def === undefined ? '' : def; }
            if (val % 1 === 0) { return val; }
            return val.toFixed(2);
        }

        onChangeControl(event) {
            this.state.active = event.target.checked ? event.target.value : "";
            this.state.lastOps = {};
            const currentOp = this.getOperationByLabel(event.target.value);
            if (event.target.checked) {
                this.selectedOps.push(currentOp);
            } else {
                const index = this.selectedOps.findIndex((op) => { return op.label === currentOp.label; });
                this.selectedOps.splice(index, 1);
            }
            this.setCategoryValue(currentOp, event.target.checked);
        }

        getOperationByLabel(name) {
            const operation = this.operations.filter(operation => operation.label === name);
            return operation && operation[0] || [];
        }

        setCategoryValue(currentOp, isChecked = true) {
            if (isChecked) {
                currentOp.operations.forEach((operation) => {
                    if (operation.debit) {
                        this.state.lastOps[operation.account] = "debit";
                    } else {
                        this.state.lastOps[operation.account] = "credit";
                    }
                });
            }
            const cloneCategories = JSON.parse(JSON.stringify(categories));
            let operations = [];
            this.selectedOps.forEach(op => {
                operations = operations.concat(op.operations);
            });
            operations.forEach(operation => {
                for (let category of cloneCategories) {
                    const account = Object.entries(category).find((account) => {
                        return account[1] instanceof Object && account[1].code === operation.account;
                    });
                    if (account) {
                        if (operation.debit) {
                            account[1].debit_total += operation.debit(operations);
                            category.debit_total += operation.debit(operations);
                            if (isChecked) {
                                this.state.lastOps[operation.account] = "debit";
                            }
                        } else {
                            account[1].credit_total += operation.credit(operations);
                            category.credit_total += operation.credit(operations);
                            if (isChecked) {
                                this.state.lastOps[operation.account] = "credit";
                            }
                        }
                        break;
                    }
                }
            });
            this.state.categories = cloneCategories;
        }
    }

    CoaValuationAngloSaxon.template = xml`
            <div class="control-section">
                <div id="chart-controls-continental" class="controls">
                    <t t-foreach="operations" t-as="operation" t-key="operation_index">
                        <label t-att-class="state.active === operation.label ? 'highlight-op' : ''">
                            <input type="checkbox" t-att-value="operation.label" t-on-change="onChangeControl"/>
                            <span><t t-esc="operation.label" /></span>
                        </label>
                    </t>
                </div>
                <div class="doc-aside">
                    <table class="table table-condensed">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="text-right">Debit</th>
                                <th class="text-right">Credit</th>
                                <th class="text-right">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <t t-foreach="state.categories" t-as="category" t-key="category.code">
                                <tr>
                                    <th>
                                        <span><t t-esc="category.code"/> <t t-esc="category.label"/></span>
                                    </th>
                                    <td class="text-right">
                                        <t t-esc="format(category.debit_total)"/>
                                    </td>
                                    <td class="text-right">
                                        <t t-esc="format(category.credit_total)"/>
                                    </td>
                                    <td class="text-right">
                                        <t t-esc="(category.debit_total || category.credit_total)
                                        ? format(category.debit_total - category.credit_total, 0)
                                        : '' "/>
                                    </td>
                                </tr>
                                <t t-foreach="category" t-as="account" t-key="account_index">
                                    <tr t-if="typeof account_value === 'object'">
                                        <th> 
                                            <span class="pl15"></span>
                                            <span><t t-esc="account_value.code"/> <t t-esc="account_value.label"/></span>
                                        </th>
                                        <td t-att-class="state.lastOps[account_value.code] == 'debit' 
                                                        ? 'text-right highlight-op' 
                                                        : 'text-right'"> 
                                            <t t-esc="format(account_value.debit_total)"/>
                                        </td>
                                        <td t-att-class="state.lastOps[account_value.code] == 'credit' 
                                                        ? 'text-right highlight-op' 
                                                        : 'text-right'"> 
                                            <t t-esc="format(account_value.credit_total)"/>
                                        </td>
                                        <td class="text-right">
                                            <t t-esc="(account_value.debit_total || account_value.credit_total)
                                            ? format(account_value.debit_total - account_value.credit_total, 0)
                                            : '' "/>
                                        </td>
                                    </tr>
                                </t>
                            </t>
                        </tbody>
                    </table>
                </div>
            </div>`;

    document.addEventListener('DOMContentLoaded', () => {
        const chart = document.querySelector('.valuation-chart-anglo-saxon');
        if (!chart) { return; }
        const controls = new CoaValuationAngloSaxon();
        controls.mount(chart);
    });

})();
