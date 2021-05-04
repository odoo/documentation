/* global Immutable, React */
/* global createAtom */
(function () {
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
                                            return ops.add(operations);
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
            document.getElementById('chart-controls-continental'));
        React.render(
            React.createElement(Chart, { p: next }),
            document.querySelector('.valuation-chart-continental'));
    });

    document.addEventListener('DOMContentLoaded', function () {
        var chart = document.querySelector('.valuation-chart-continental');
        if (!chart) { return; }

        var controls = document.createElement('div');
        controls.setAttribute('id', 'chart-controls-continental');
        chart.parentNode.insertBefore(controls, chart);

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
        RAW_MATERIALS: { code: 14100, label: "Raw Materials Inventory" },
        TAXES_PAID: { code: 19000, label: "Deferred Tax Assets" }
    };
    var LIABILITIES = {
        code: 2,
        label: "Liabilities",
        ACCOUNTS_PAYABLE: { code: 21000, label: "Accounts Payable" },
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
    };
    var EXPENSES = {
        code: 5,
        label: "Expenses",
        PURCHASED_GOODS: { code: 51000, label: "Purchased Goods" },
        PURCHASED_SERVICES: { code: 52000, label: "Purchased Services" },
        INVENTORY_VARIATIONS: { code: 58000, label: "Inventory Variations" },
        OTHER_OPERATING_EXPENSES: { code: 59000, label: "Other Operating Expenses" },
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
        purchase = 52,
        purchase_tax = 52 * 0.09;
    var operations = Immutable.fromJS([{
        label: "Vendor Invoice (PO €50, Invoice €50)",
        operations: [
            { account: EXPENSES.PURCHASED_GOODS.code, debit: constant(50) },
            { account: ASSETS.TAXES_PAID.code, debit: constant(50 * 0.09) },
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(50 * 1.09) },
        ]
    }, {
        label: "Vendor Goods Reception (PO €50, Invoice €50)",
        operations: [
            { account: EXPENSES.INVENTORY_VARIATIONS.code, credit: constant(50) },
            { account: ASSETS.STOCK.code, debit: constant(50) },
        ]
    }, {
        label: "Vendor Invoice (PO €48, Invoice €50)",
        operations: [
            { account: EXPENSES.PURCHASED_GOODS.code, debit: constant(50) },
            { account: ASSETS.TAXES_PAID.code, debit: constant(50 * 0.09) },
            { account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(50 * 1.09) },
        ]
    }, {
        label: "Vendor Goods Reception (PO €48, Invoice €50)",
        operations: [
            { account: EXPENSES.INVENTORY_VARIATIONS.code, credit: constant(48) },
            { account: ASSETS.STOCK.code, debit: constant(48) },
        ]
    }, {
        label: "Customer Invoice (€100 + 9% tax)",
        operations: [
            { account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: constant(total) },
            { account: REVENUE.SALES.code, credit: constant(sale) },
            { account: LIABILITIES.TAXES_PAYABLE.code, credit: constant(tax) }
        ]
    }, {
        label: "Customer Shipping",
        operations: [
            { account: EXPENSES.INVENTORY_VARIATIONS.code, debit: constant(cor) },
            { account: ASSETS.STOCK.code, credit: constant(cor) }
        ]
    }]);
    function constant(val) { return function () { return val; }; }
    var zero = constant(0);
    function format(val, def) {
        if (!val) { return def === undefined ? '' : def; }
        if (val % 1 === 0) { return val; }
        return val.toFixed(2);
    }
})();
