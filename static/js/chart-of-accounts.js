/* global Immutable, React */
/* global createAtom */
(function () {
    // NOTE: used by cheat_sheet.rst
    'use strict';

    var data = createAtom();

    function toKey(s, postfix) {
        if (postfix) {
            s += ' ' + postfix;
        }
        return s.replace(/[^0-9a-z ]/gi, '').toLowerCase().split(/\s+/).join('-');

    }
    var Controls = React.createClass({
        render: function () {
            var state = this.props.p;
            return React.DOM.div(null, operations.map(function (op) {
                var label = op.get('label'), operations = op.get('operations');
                return React.DOM.label(
                    {
                        key: toKey(label),
                        style: { display: 'block' },
                        className: (operations === state.get('active') ? 'highlight-op' : void 0)
                    },
                    React.DOM.input({
                        type: 'checkbox',
                        checked: state.get('operations').contains(operations),
                        onChange: function (e) {
                            if (e.target.checked) {
                                data.swap(function (d) {
                                    return d.set('active', operations)
                                        .update('operations', function (ops) {
                                            return ops.add(operations)
                                        });
                                });
                            } else {
                                data.swap(function (d) {
                                    return d.set('active', null) // keep visible in state map
                                        .update('operations', function (ops) {
                                            return ops.remove(operations);
                                        })
                                });
                            }
                        }
                    }),
                    " ",
                    label
                );
            }));
        }
    });

    var Chart = React.createClass({
        render: function () {
            var lastop = Immutable.Map(
                (this.props.p.get('active') || Immutable.List()).map(function (op) {
                    return [op.get('account'), op.has('credit') ? 'credit' : 'debit'];
                })
            );
            return React.DOM.div(
                null,
                React.DOM.table(
                    { className: 'table table-sm' },
                    React.DOM.thead(
                        null,
                        React.DOM.tr(
                            null,
                            React.DOM.th(),
                            React.DOM.th({ className: 'text-right' }, "Debit"),
                            React.DOM.th({ className: 'text-right' }, "Credit"),
                            React.DOM.th({ className: 'text-right' }, "Balance"))
                    ),
                    React.DOM.tbody(
                        null,
                        this.accounts().map(function (data) {
                            var highlight = lastop.get(data.get('code'));
                            return React.DOM.tr(
                                { key: data.get('code') },
                                React.DOM.th(null,
                                    data.get('level') ? '\u2001 ' : '',
                                    data.get('code'), ' ', data.get('label')),
                                React.DOM.td({
                                    className: React.addons.classSet({
                                        'text-right': true,
                                        'highlight-op': highlight === 'debit'
                                    })
                                }, format(data.get('debit'))),
                                React.DOM.td({
                                    className: React.addons.classSet({
                                        'text-right': true,
                                        'highlight-op': highlight === 'credit'
                                    })
                                }, format(data.get('credit'))),
                                React.DOM.td(
                                    { className: 'text-right' },
                                    ((data.get('debit') || data.get('credit'))
                                        ? format(data.get('debit') - data.get('credit'), 0)
                                        : '')
                                )
                            );
                        })
                    )
                )
            );
        },
        accounts: function () {
            var data = this.props.p.get('operations');

            var totals = data.toIndexedSeq().flatten(true).reduce(function (acc, op) {
                return acc
                    .updateIn([op.get('account'), 'debit'], function (d) {
                        return (d || 0) + op.get('debit', zero)(data);
                    })
                    .updateIn([op.get('account'), 'credit'], function (c) {
                        return (c || 0) + op.get('credit', zero)(data);
                    });
            }, Immutable.Map());

            return accounts.map(function (account) {
                // for each account, add sum
                return account.merge(
                    account.get('accounts').map(function (code) {
                        return totals.get(code, NULL);
                    }).reduce(function (acc, it) {
                        return acc.mergeWith(function (a, b) { return a + b; }, it, NULL);
                    })
                );
            });
        }
    });
    data.addWatch('chart', function (k, m, prev, next) {
        React.render(
            React.createElement(Controls, { p: next }),
            document.getElementById('chart-controls'));
        React.render(
            React.createElement(Chart, { p: next }),
            document.querySelector('.chart-of-accounts'));
    });

    document.addEventListener('DOMContentLoaded', function () {
        var chart = findAncestor(document.querySelector('.chart-of-accounts'), 'section');
        if (!chart) { return; }

        var controls = document.createElement('div');
        controls.setAttribute('id', 'chart-controls');

        chart.children[1].insertBefore(controls, chart.children[1].lastElementChild);
        data.reset(Immutable.Map({
            // last-selected operation
            active: null,
            // set of all currently enabled operations
            operations: Immutable.OrderedSet()
        }));
    });

    var NULL = Immutable.Map({ debit: 0, credit: 0 });
    var ASSETS = {
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
    var LIABILITIES = {
        code: 2,
        label: "Liabilities",
        ACCOUNTS_PAYABLE: { code: 21000, label: "Accounts Payable" },
        DEFERRED_REVENUE: { code: 22300, label: "Deferred Revenue" },
        STOCK_IN: { code: 23000, label: "Goods Received Not Purchased" },
        TAXES_PAYABLE: { code: 26200, label: "Deferred Tax Liabilities" }
    };
    var EQUITY = {
        code: 3,
        label: "Equity",
        CAPITAL: { code: 31000, label: "Common Stock" }
    };
    var REVENUE = {
        code: 4,
        label: "Revenue",
        SALES: { code: 41000, label: "Goods" },
        SALES_SERVICES: { code: 42000, label: "Services" }
    };
    var EXPENSES = {
        code: 5,
        label: "Expenses",
        GOODS_SOLD: { code: 51100, label: "Cost of Goods Sold" },
        DEPRECIATION: { code: 52500, label: "Other Operating Expenses" },
        PRICE_DIFFERENCE: { code: 53000, label: "Price Difference" }
    };
    var categories = Immutable.fromJS([ASSETS, LIABILITIES, EQUITY, REVENUE, EXPENSES], function (k, v) {
        return Immutable.Iterable.isIndexed(v)
            ? v.toList()
            : v.toOrderedMap();
    });
    var accounts = categories.toSeq().flatMap(function (cat) {
        return Immutable.Seq.of(cat.set('level', 0)).concat(cat.filter(function (v, k) {
            return k.toUpperCase() === k;
        }).toIndexedSeq().map(function (acc) { return acc.set('level', 1) }));
    }).map(function (account) { // add accounts: Seq<AccountCode> to each account
        return account.set(
            'accounts',
            Immutable.Seq.of(account.get('code')).concat(
                account.toIndexedSeq().map(function (val) {
                    return Immutable.Map.isMap(val) && val.get('code');
                }).filter(function (val) { return !!val; })
            )
        );
    });

    var sale = 100,
        cor = 50,
        cor_tax = cor * 0.09,
        tax = sale * 0.09,
        total = sale + tax,
        refund = sale,
        refund_tax = refund * 0.09,
        purchase = 52,
        purchase_tax = 52 * 0.09;
    var operations = Immutable.fromJS([{
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
        label: "Customer Refund*",
        operations: [
            { account: REVENUE.SALES.code, debit: constant(refund) },
            { account: LIABILITIES.TAXES_PAYABLE.code, debit: constant(refund_tax) },
            { account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: constant(refund + refund_tax) }
        ]
    }, {
        label: "Customer Payment*",
        operations: [
            {
                account: ASSETS.BANK.code, debit: function (ops) {
                    var refund_op = operations.find(function (op) {
                        return op.get('id') === 'refund';
                    });
                    return ops.contains(refund_op.get('operations'))
                        ? total - (refund + refund_tax)
                        : total;
                }
            },
            {
                account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: function (ops) {
                    var refund_op = operations.find(function (op) {
                        return op.get('id') === 'refund';
                    });
                    return ops.contains(refund_op.get('operations'))
                        ? total - (refund + refund_tax)
                        : total;
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
            { account: ASSETS.TAXES_PAID.code, debit: constant(cor_tax) },
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(cor + cor_tax) },
        ]
    }, {
        label: "Vendor Bill (Invoice: $52 but PO $50)",
        operations: [
            { account: EXPENSES.PRICE_DIFFERENCE.code, debit: constant(purchase - cor) },
            { account: LIABILITIES.STOCK_IN.code, debit: constant(cor) },
            { account: ASSETS.TAXES_PAID.code, debit: constant(purchase_tax) },
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(purchase + purchase_tax) },
        ]
    }, {
        label: "Vendor Bill Paid ($52 + 9% tax)",
        operations: [
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, debit: constant(purchase + purchase_tax) },
            { account: ASSETS.BANK.code, credit: constant(purchase + purchase_tax) }
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
                account: LIABILITIES.TAXES_PAYABLE.code, debit: function (ops) {
                    var this_ops = operations.find(function (op) {
                        return op.get('id') === 'pay_taxes';
                    }).get('operations');
                    return ops.filter(function (_ops) {
                        return _ops !== this_ops;
                    }).flatten(true).filter(function (op) {
                        return op.get('account') === LIABILITIES.TAXES_PAYABLE.code
                    }).reduce(function (acc, op) {
                        return acc + op.get('credit', zero)(ops) - op.get('debit', zero)(ops);
                    }, 0);
                }
            },
            {
                account: ASSETS.BANK.code, credit: function (ops) {
                    return operations.find(function (op) {
                        return op.get('id') === 'pay_taxes';
                    }).getIn(['operations', 0, 'debit'])(ops);
                }
            }
        ]
    }
    ]);
    function constant(val) { return function () { return val; }; }
    var zero = constant(0);
    function format(val, def) {
        if (!val) { return def === undefined ? '' : def; }
        if (val % 1 === 0) { return val; }
        return val.toFixed(2);
    }
})();
