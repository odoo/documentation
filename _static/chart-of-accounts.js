(() => {
    'use strict';

    const {Component, useState} = owl;
    const {xml} = owl.tags;

    const ASSETS = {
        code: 1,
        label: "Assets",
        BANK: {code: 11000, label: "Cash"},
        ACCOUNTS_RECEIVABLE: {code: 13100, label: "Accounts Receivable"},
        STOCK: {code: 14000, label: "Inventory"},
        STOCK_OUT: {code: 14600, label: "Goods Issued Not Invoiced"},
        BUILDINGS: {code: 17200, label: "Buildings"},
        DEPRECIATION: {code: 17800, label: "Accumulated Depreciation"},
        TAXES_PAID: {code: 19000, label: "Deferred Tax Assets"}
    };
    const LIABILITIES = {
        code: 2,
        label: "Liabilities",
        ACCOUNTS_PAYABLE: {code: 21000, label: "Accounts Payable"},
        DEFERRED_REVENUE: {code: 22300, label: "Deferred Revenue"},
        STOCK_IN: {code: 23000, label: "Goods Received Not Purchased"},
        TAXES_PAYABLE: {code: 26200, label: "Deferred Tax Liabilities"}
    };
    const EQUITY = {
        code: 3,
        label: "Equity",
        CAPITAL: {code: 31000, label: "Common Stock"}
    };
    const REVENUE = {
        code: 4,
        label: "Revenue",
        SALES: {code: 41000, label: "Goods"},
        SALES_SERVICES: {code: 42000, label: "Services"}
    };
    const EXPENSES = {
        code: 5,
        label: "Expenses",
        GOODS_SOLD: {code: 51100, label: "Cost of Goods Sold"},
        DEPRECIATION: {code: 52500, label: "Other Operating Expenses"},
        PRICE_DIFFERENCE: {code: 53000, label: "Price Difference"}
    };

    const categories = [ASSETS, LIABILITIES, EQUITY, REVENUE, EXPENSES].map(v => {
        v['rows'] = {};
        v['debit_total'] = 0;
        v['credit_total'] = 0;
        for (const [key, category] of Object.entries(v)) {
            if (!["rows", "debit_total", "credit_total"].includes(key) && category instanceof Object) {
                v['rows'][category.code] = category;
                v['rows'][category.code]['debit_total'] = 0;
                v['rows'][category.code]['credit_total'] = 0;
            }
        }
        return v;
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
            {account: ASSETS.BANK.code, debit: constant(1000)},
            {account: EQUITY.CAPITAL.code, credit: constant(1000)}
        ]
   }, {
        label: "Customer Invoice ($100 + 9% tax) & Shipping of the Goods",
        operations: [
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: constant(total)},
            {account: EXPENSES.GOODS_SOLD.code, debit: constant(cor)},
            {account: REVENUE.SALES.code, credit: constant(sale)},
            {account: ASSETS.STOCK_OUT.code, credit: constant(cor)},
            {account: LIABILITIES.TAXES_PAYABLE.code, credit: constant(tax)}
        ]
   }, {
        label: "Goods Shipment to Customer",
        operations: [
            {account: ASSETS.STOCK_OUT.code, debit: constant(cor)},
            {account: ASSETS.STOCK.code, credit: constant(cor)}
        ]
   }, {
        id: 'refund',
        label: "Customer Refund",
        operations: [
            {account: REVENUE.SALES.code, debit: constant(refund)},
            {account: LIABILITIES.TAXES_PAYABLE.code, debit: constant(refundTax)},
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: constant(refund + refundTax)}
        ]
   }, {
        label: "Customer Payment",
        operations: [
            {account: ASSETS.BANK.code, debit: ops => {
                return isOpsExist(ops);
            }},
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: ops => {
                return isOpsExist(ops);
            }}
        ]
   }, {
        label: "Vendor Goods Received (Purchase Order: $50)",
        operations: [
            {account: LIABILITIES.STOCK_IN.code, credit: constant(cor)},
            {account: ASSETS.STOCK.code, debit: constant(cor)},
        ]
   }, {
        label: "Vendor Bill (Invoice: $50)",
        operations: [
            {account: LIABILITIES.STOCK_IN.code, debit: constant(cor)},
            {account: ASSETS.TAXES_PAID.code, debit: constant(corTax)},
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(cor + corTax)},
        ]
   }, {
        label: "Vendor Bill (Invoice: $52 but PO $50)",
        operations: [
            {account: EXPENSES.PRICE_DIFFERENCE.code, debit: constant(purchase - cor)},
            {account: LIABILITIES.STOCK_IN.code, debit: constant(cor)},
            {account: ASSETS.TAXES_PAID.code, debit: constant(purchaseTax)},
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(purchase + purchaseTax)},
        ]
   }, {
        label: "Vendor Bill Paid ($52 + 9% tax)",
        operations: [
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, debit: constant(purchase + purchaseTax)},
            {account: ASSETS.BANK.code, credit: constant(purchase + purchaseTax)}
        ]
   }, {
        label: "Acquire a building (purchase contract)",
        operations: [
            {account: ASSETS.BUILDINGS.code, debit: constant(3000)},
            {account: ASSETS.TAXES_PAID.code, debit: constant(300)},
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(3300)}
        ]
   }, {
        label: "Pay for building",
        operations: [
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, debit: constant(3300)},
            {account: ASSETS.BANK.code, credit: constant(3300)}
        ]
   }, {
        label: "Yearly Asset Depreciation (10% per year)",
        operations: [
            {account: EXPENSES.DEPRECIATION.code, debit: constant(300)},
            {account: ASSETS.DEPRECIATION.code, credit: constant(300)}
        ]
   }, {
        label: "Customer Invoice (3 years service contract, $300)",
        operations: [
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: constant(total * 3)},
            {account: LIABILITIES.DEFERRED_REVENUE.code, credit: constant(sale * 3)},
            {account: LIABILITIES.TAXES_PAYABLE.code, credit: constant(tax * 3)}
        ]
   }, {
        label: "Revenue Recognition (each year, including first)",
        operations: [
            {account: LIABILITIES.DEFERRED_REVENUE.code, debit: constant(sale)},
            {account: REVENUE.SALES_SERVICES.code, credit: constant(sale)},
        ]
   }, {
        id: 'pay_taxes',
        label: "Pay Taxes Due",
        operations: [
            {account: LIABILITIES.TAXES_PAYABLE.code, debit: ops => {
                const thisOps = operations.find(op => op.id === 'pay_taxes').operations;
                const opsWithoutPayTaxes = ops.filter(op => {
                    var flag = 0;
                    thisOps.forEach(o => {
                        if (isEqual(op, o)) {
                            flag = 1;
                        }
                    });
                    return flag === 0;
                });
                return opsWithoutPayTaxes.filter(_ops => {
                    return _ops !== thisOps;
                }).flat().filter(op => {
                    return op.account === LIABILITIES.TAXES_PAYABLE.code;
                }).reduce((acc, op) => {
                    return acc + (op.credit && op.credit(ops) || 0) - (op.debit && op.debit(ops) || 0);
               }, 0);
            }},
            {account: ASSETS.BANK.code, credit: ops => {
                return operations.find(op => {
                    return op.id === 'pay_taxes';
                }).operations[0].debit(ops);    
            }}
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

    // As we can not use underscore js for single function _.isEqual
    // So we have replicated the method of underscore js.
    function isEqual(a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        // Unwrap any wrapped objects.
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        // Compare `[[Class]]` names.
        const className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
            // Strings, numbers, regular expressions, dates, and booleans are compared by value.
            case '[object RegExp]':
                break;
            // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
            case '[object String]':
                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                // equivalent to `new String("5")`.
                return '' + a === '' + b;
            case '[object Number]':
                // `NaN`s are equivalent, but non-reflexive.
                // Object(NaN) is equivalent to NaN
                if (+a !== +a) return +b !== +b;
                // An `egal` comparison is performed for other numeric values.
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                // millisecond representations. Note that invalid dates with millisecond representations
                // of `NaN` are not equivalent.
                return +a === +b;
        }

        const areArrays = className === '[object Array]';
        if (!areArrays) {
            if (typeof a != 'object' || typeof b != 'object') return false;

            // Objects with different constructors are not equivalent, but `Object`s or `Array`s
            // from different frames are.
            const aCtor = a.constructor, bCtor = b.constructor;
            if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                _.isFunction(bCtor) && bCtor instanceof bCtor)
                && ('constructor' in a && 'constructor' in b)) {
                return false;
            }
        }
        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

        // Initializing stack of traversed objects.
        // It's done here since we only need them for objects and arrays comparison.
        aStack = aStack || [];
        bStack = bStack || [];
        let length = aStack.length;
        while (length--) {
            // Linear search. Performance is inversely proportional to the number of
            // unique nested structures.
            if (aStack[length] === a) return bStack[length] === b;
        }

        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);

        // Recursively compare objects and arrays.
        if (areArrays) {
            // Compare array lengths to determine if a deep comparison is necessary.
            length = a.length;
            if (length !== b.length) return false;
            // Deep compare the contents, ignoring non-numeric properties.
            while (length--) {
                if (!isEqual(a[length], b[length], aStack, bStack)) return false;
            }
        } else {
            // Deep compare objects.
            const keys = Object.keys(a);
            let key;
            length = keys.length;
            // Ensure that both objects contain the same number of properties before comparing deep equality.
            if (Object.keys(b).length !== length) return false;
            while (length--) {
                // Deep compare each member
                key = keys[length];
                if (!(b.hasOwnProperty(key) && isEqual(a[key], b[key], aStack, bStack))) return false;
            }
        }
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return true;
    }

    class COA extends Component {

        constructor() {
            super(...arguments);
            this.state = useState({categories: categories, active: "", lastOps: {} });
            this.operations = operations;
        }

        format(val, def) {
            if (!val) { return def === undefined ? '' : def; }
            if (val % 1 === 0) { return val; }
            return val.toFixed(2);
        }

        onChangeControl(event) {
            this.state.active = event.target.checked ? event.target.value : "";
            this.state.lastOps = {};
            this.selectedOps = [];
            document.querySelectorAll("#chart-controls input[type='checkbox']").forEach(input => {
                if (input.checked) {
                    const ops = this.getOperationByLabel(input.value);
                    if (ops) {
                        this.selectedOps = this.selectedOps.concat(ops.operations);
                    }
                }
            });
            this.currentOp = this.getOperationByLabel(event.target.value);
            this.currentOp.operations.forEach(op => {
                this.setCategoryValue(op, event.target.checked);
            });
        }

        getOperationByLabel(name) {
            const operation = this.operations.filter(operation => operation.label === name);
            return operation && operation[0] || [];
        }

        setCategoryValue(operation, isChecked = true) {
            this.state.categories.forEach(category => {
                const account = category.rows[operation.account];
                if (account) {
                    if (operation.debit) {
                        if (isChecked) {
                            account.debit_total += operation.debit(this.selectedOps);
                            category.debit_total += operation.debit(this.selectedOps);
                            this.state.lastOps[operation.account] = "debit";
                        } else {
                            account.debit_total -= operation.debit(this.selectedOps);
                            category.debit_total -= operation.debit(this.selectedOps);
                        }
                    } else if (operation.credit) {
                        if (isChecked) {
                            account.credit_total += operation.credit(this.selectedOps);
                            category.credit_total += operation.credit(this.selectedOps);
                            this.state.lastOps[operation.account] = "credit";
                        } else {
                            account.credit_total -= operation.credit(this.selectedOps);
                            category.credit_total -= operation.credit(this.selectedOps);
                        }
                    }
                }
            });
        }
    }

    COA.template = xml`
        <div class="control-section">
            <div id="chart-controls" class="controls">
                <t t-foreach="operations" t-as="operation">
                    <label t-key="operation.label" t-att-class="state.active == operation.label ? 'highlight-op' : ''">
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
                            <t t-foreach="category.rows" t-as="row">
                                <tr t-key="row.code">
                                    <t t-set="account" t-value="category.rows[row]"/>
                                    <th>
                                        <span class="pl15"></span>
                                        <span><t t-esc="account.code"/> <t t-esc="account.label"/></span>
                                    </th>
                                    <td t-att-class="state.lastOps[account.code] == 'debit'
                                                    ? 'text-right highlight-op'
                                                    : 'text-right'">
                                        <t t-esc="format(account.debit_total)"/>
                                    </td>
                                    <td t-att-class="state.lastOps[account.code] == 'credit'
                                                    ? 'text-right highlight-op'
                                                    : 'text-right'">
                                        <t t-esc="format(account.credit_total)"/>
                                    </td>
                                    <td class="text-right">
                                        <t t-esc="(account.debit_total || account.credit_total)
                                        ? format(account.debit_total - account.credit_total, 0)
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
        if (!chart) {return; }
        const controls = new COA();
        controls.mount(chart);
    });

})();
