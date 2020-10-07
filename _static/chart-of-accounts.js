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
        STOCK_OUT: { code: 14600, label: "Goods Issued Not Invoiced" },
        BUILDINGS: { code: 17200, label: "Buildings" },
        DEPRECIATION: { code: 17800, label: "Accumulated Depreciation" },
        TAXES_PAID: { code: 19000, label: "Deferred Tax Assets" }
    };
    const LIABILITIES = {
        code: 2,
        label: "Liabilities",
        ACCOUNTS_PAYABLE: { code: 21000, label: "Accounts Payable" },
        DEFERRED_REVENUE: { code: 22300, label: "Deferred Revenue" },
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
        SALES_SERVICES: { code: 42000, label: "Services" }
    };
    const EXPENSES = {
        code: 5,
        label: "Expenses",
        GOODS_SOLD: { code: 51100, label: "Cost of Goods Sold" },
        DEPRECIATION: { code: 52500, label: "Other Operating Expenses" },
        PRICE_DIFFERENCE: { code: 53000, label: "Price Difference" }
    };

    const categories = [ASSETS, LIABILITIES, EQUITY, REVENUE, EXPENSES].map(category => {
        category['debit_total'] = 0;
        category['credit_total'] = 0;
        for (const [key, account] of Object.entries(category)) {
            if (account instanceof Object) {
                account['debit_total'] = 0;
                account['credit_total'] = 0;
            }
        }
        return category;
    });

    const sale = 100,
        cor = 50,
        corTax = cor * 0.09,
        tax = sale * 0.09,
        total = sale + tax,
        refund = sale,
        refundTax = refund * 0.09,
        purchase = 52,
        purchaseTax = 52 * 0.09;

    const operations = [{
        label: "Company Incorporation (Initial Capital $1,000)",
        operations: [
            { account: ASSETS.BANK.code, debit: constant(1000) },
            { account: EQUITY.CAPITAL.code, credit: constant(1000) }
        ]
    }, {
        label: "Customer Invoice ($100 + 9% tax) & Shipping of the Goods",
        operations: [
            { account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: constant(total) },
            { account: EXPENSES.GOODS_SOLD.code, debit: constant(cor) },
            { account: REVENUE.SALES.code, credit: constant(sale) },
            { account: ASSETS.STOCK_OUT.code, credit: constant(cor) },
            { account: LIABILITIES.TAXES_PAYABLE.code, credit: constant(tax) }
        ]
    }, {
        label: "Goods Shipment to Customer",
        operations: [
            { account: ASSETS.STOCK_OUT.code, debit: constant(cor) },
            { account: ASSETS.STOCK.code, credit: constant(cor) }
        ]
    }, {
        id: 'refund',
        label: "Customer Refund",
        operations: [
            { account: REVENUE.SALES.code, debit: constant(refund) },
            { account: LIABILITIES.TAXES_PAYABLE.code, debit: constant(refundTax) },
            { account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: constant(refund + refundTax) }
        ]
    }, {
        label: "Customer Payment",
        operations: [
            {
                account: ASSETS.BANK.code, debit: ops => {
                    return isOpsExist(ops);
                }
            },
            {
                account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: ops => {
                    return isOpsExist(ops);
                }
            }
        ]
    }, {
        label: "Vendor Goods Received (Purchase Order: $50)",
        operations: [
            { account: LIABILITIES.STOCK_IN.code, credit: constant(cor) },
            { account: ASSETS.STOCK.code, debit: constant(cor) },
        ]
    }, {
        label: "Vendor Bill (Invoice: $50)",
        operations: [
            { account: LIABILITIES.STOCK_IN.code, debit: constant(cor) },
            { account: ASSETS.TAXES_PAID.code, debit: constant(corTax) },
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(cor + corTax) },
        ]
    }, {
        label: "Vendor Bill (Invoice: $52 but PO $50)",
        operations: [
            { account: EXPENSES.PRICE_DIFFERENCE.code, debit: constant(purchase - cor) },
            { account: LIABILITIES.STOCK_IN.code, debit: constant(cor) },
            { account: ASSETS.TAXES_PAID.code, debit: constant(purchaseTax) },
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(purchase + purchaseTax) },
        ]
    }, {
        label: "Vendor Bill Paid ($52 + 9% tax)",
        operations: [
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, debit: constant(purchase + purchaseTax) },
            { account: ASSETS.BANK.code, credit: constant(purchase + purchaseTax) }
        ]
    }, {
        label: "Acquire a building (purchase contract)",
        operations: [
            { account: ASSETS.BUILDINGS.code, debit: constant(3000) },
            { account: ASSETS.TAXES_PAID.code, debit: constant(300) },
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(3300) }
        ]
    }, {
        label: "Pay for building",
        operations: [
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, debit: constant(3300) },
            { account: ASSETS.BANK.code, credit: constant(3300) }
        ]
    }, {
        label: "Yearly Asset Depreciation (10% per year)",
        operations: [
            { account: EXPENSES.DEPRECIATION.code, debit: constant(300) },
            { account: ASSETS.DEPRECIATION.code, credit: constant(300) }
        ]
    }, {
        label: "Customer Invoice (3 years service contract, $300)",
        operations: [
            { account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: constant(total * 3) },
            { account: LIABILITIES.DEFERRED_REVENUE.code, credit: constant(sale * 3) },
            { account: LIABILITIES.TAXES_PAYABLE.code, credit: constant(tax * 3) }
        ]
    }, {
        label: "Revenue Recognition (each year, including first)",
        operations: [
            { account: LIABILITIES.DEFERRED_REVENUE.code, debit: constant(sale) },
            { account: REVENUE.SALES_SERVICES.code, credit: constant(sale) },
        ]
    }, {
        id: 'pay_taxes',
        label: "Pay Taxes Due",
        operations: [
            {
                account: LIABILITIES.TAXES_PAYABLE.code, debit: ops => {
                    const thisOps = operations.find(op => op.id === 'pay_taxes').operations;
                    const opsWithoutPayTaxes = ops.filter(op => {
                        return !thisOps.find((thisOp) => {
                            //shallowEqual is enough here else we have to use _.isEqual for deep checking
                            return owl.utils.shallowEqual(op, thisOp);
                        });
                    });
                    return opsWithoutPayTaxes.flat().filter(op => {
                        return op.account === LIABILITIES.TAXES_PAYABLE.code;
                    }).reduce((acc, op) => {
                        return acc + (op.credit && op.credit(ops) || 0) - (op.debit && op.debit(ops) || 0);
                    }, 0);
                }
            },
            {
                account: ASSETS.BANK.code, credit: ops => {
                    return operations.find(op => {
                        return op.id === 'pay_taxes';
                    }).operations[0].debit(ops);
                }
            }
        ]
    }];

    function isOpsExist(ops) {
        const refundOp = operations.find(op => {
            return op.id === 'refund';
        });
        const account = [...new Set(ops.map(op => op.account))];
        const refundAccounts = [...new Set(refundOp.operations.map(op => op.account))];
        return refundAccounts.every(item => account.includes(item))
            ? total - (refund + refundTax)
            : total;
    }

    function constant(val) {
        return () => val;
    }

    class COA extends Component {

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
            this.setCategoryValue(currentOp, event.target.checked)
        }

        getOperationByLabel(name) {
            const operation = this.operations.filter(operation => operation.label === name);
            return operation && operation[0] || [];
        }

        /**
         * Iterate over all selectedOps and its operations, each of operation will have
         * account code find account from categories based on operation account code and
         * update debit_total/credit_total of account and category, once changes done to
         * categories then assign it to state.categories to re-render COA table
         *
         **/
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
                        } else {
                            account[1].credit_total += operation.credit(operations);
                            category.credit_total += operation.credit(operations);
                        }
                        break;
                    }
                }
            });
            this.state.categories = cloneCategories;
        }
    }

    COA.template = xml`
            <div class="control-section">
                <div id="chart-controls" class="controls">
                    <t t-foreach="operations" t-as="operation">
                        <label t-key="operation.label" t-att-class="state.active === operation.label ? 'highlight-op' : ''">
                            <input type="checkbox" t-att-value="operation.label" t-on-change="onChangeControl"/>
                            <span><t t-esc="operation.label" /></span>
                        </label>
                    </t>
                </div>
                <div class="doc-aside chart-of-accounts">
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
                            <t t-foreach="state.categories" t-as="category">
                                <tr t-key="category.code">
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
                                <t t-foreach="category" t-as="account">
                                    <tr t-if="typeof account_value === 'object'" t-key="account.code">
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
        const chart = document.querySelector('.chart-of-accounts');
        if (!chart) { return; }
        const controls = new COA();
        controls.mount(chart);
    });

})();
