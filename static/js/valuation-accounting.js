/* global Immutable, React */
/* global createAtom */
(function () {
    'use strict';
    // NOTE: used by valuation cheat_sheet.rst

    const mode = createAtom(['continental', 'periodic']);
    const data = createAtom();
    const supplements = createAtom(Immutable.Set());

    function watch (next) {
        React.render(
            React.createElement(Controls, { p: next }),
            document.getElementById('accounting-entries-controls'));
        React.render(
            React.createElement(Chart, { p: next }),
            document.querySelector('.accounting-entries'));
    }

    data.addWatch('chart', function (k, m, prev, next) {
        watch(next);
    });
    mode.addWatch('chart', function (k, m, prev, next) {
        watch(data.deref());
    });
    supplements.addWatch('chart', function (k, m, prev, next) {
        watch(data.deref());
    });

    document.addEventListener('DOMContentLoaded', function () {
        const chart = document.querySelector('.accounting-entries');
        if (!chart) { return; }

        const controls = document.createElement('div');
        controls.setAttribute('id', 'accounting-entries-controls');
        chart.parentNode.insertBefore(controls, chart);

        data.reset(Immutable.Map({
            // last-selected operation
            active: null,
            // set of all currently enabled operations
            operations: Immutable.OrderedSet()
        }));
    });

    function toKey(s, postfix) {
        if (postfix) {
            s += ' ' + postfix;
        }
        return s.replace(/[^0-9a-z ]/gi, '').toLowerCase().split(/\s+/).join('-');
    }

    const Controls = React.createClass({
        render: function () {
            const state = this.props.p;
            return React.DOM.div(
                null,
                React.DOM.b(null, 'Choose a standard:'),
                standards.map(function (item, index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'radio',
                            checked: item.get('name') === mode.deref()[0],
                            onChange: function (e) {
                                const new_value = item.get('name');
                                mode.reset([new_value, new_value === 'continental' ? 'periodic' : 'perpetual']);
                            }
                        }),
                        ' ',
                        item.get('text')
                    );
                }),
                React.DOM.b(null, 'Choose an accounting method:'),
                methods.map(function (item, index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'radio',
                            checked: item.get('name') === mode.deref()[1],
                            onChange: function (e) {
                                mode.swap((vals) => [vals[0], item.get('name')]);
                            }
                        }),
                        ' ',
                        item.get('text')
                    );
                }),
                React.DOM.b(null, 'Activate operations to see the impact:'),
                React.DOM.br(),
                'Operations',
                operations.map(function (item, index) {
                    const [method, standard] = mode.deref();
                    const label = op.get('title');
                    const operations = op.get('operations');
                    return React.DOM.label(
                        {
                            key: index,
                            style: {display: 'block'},
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
                        ' ',
                        label
                    );
                }),
                'Review',
                [...review.entries()].map(function ([name, item], index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'checkbox',
                            checked: supplements.deref().includes(name),
                            onChange: function (e) {
                                if (e.target.checked) {
                                    supplements.swap(d => d.add(name));
                                } else {
                                    supplements.swap(d => d.remove(name));
                                }
                            }
                        }),
                        ' ',
                        item.get('title')
                    );
                })
            );
        }
    });

    const Chart = React.createClass({
        render: function () {
            const lastop = Immutable.Map(
                (this.props.p.get('active') || Immutable.List()).map(function (op) {
                    return [op.get('account'), op.has('credit') ? 'credit' : 'debit'];
                })
            );
            return React.DOM.div(
                null,
                React.DOM.table(
                    {className: 'table table-condensed'},
                    React.DOM.thead(
                        null,
                        React.DOM.tr(
                            null,
                            React.DOM.th(),
                            React.DOM.th({className: 'text-right'}, "Debit"),
                            React.DOM.th({className: 'text-right'}, "Credit"),
                            React.DOM.th({className: 'text-right'}, "Balance"))
                    ),
                    React.DOM.tbody(
                        null,
                        this.accounts().map(function (data) {
                            const highlight = lastop.get(data.get('code'));
                            return React.DOM.tr(
                                {key: data.get('code')},
                                React.DOM.th(null,
                                             data.get('level') ? '\u2001 ' : '',
                                             data.get('code'), ' ', data.get('label')),
                                React.DOM.td({className: React.addons.classSet({
                                    'text-right': true,
                                    'highlight-op': highlight === 'debit'
                                })}, format(data.get('debit'))),
                                React.DOM.td({className: React.addons.classSet({
                                    'text-right': true,
                                    'highlight-op': highlight === 'credit'
                                })}, format(data.get('credit'))),
                                React.DOM.td(
                                    {className: 'text-right'},
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
        accounts: function() {
            const data = this.props.p.get('operations');

            const totals = data.toIndexedSeq().flatten(true).reduce(function (acc, op) {
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

    const standards = Immutable.fromJS(
        [{ name: 'continental', text: "Continental (Expenses = Purchase Expenses)" },
         { name: 'anglo_saxon', text: "Anglo-Saxon (Expenses = Cost of Goods Sold)" }]);

    const methods = Immutable.fromJS(
        [{ name: 'periodic',  text: "Periodic: focuses on expenses by nature" },
         { name: 'perpetual', text: "Perpetual: focuses on inventory value" }]);

    const review = Immutable.fromJS({
        closing: {
            title: "Closing Entry from Stock Valuation Report",
            continental: {
                periodic: {},
                perpetual: {},
            },
            anglo_saxon: {
                periodic: {},
                perpetual: {},
            },
        },
        unreceived: {
            title: "Invoices not received",
            continental: {
                periodic: {},
                perpetual: {},
            },
            anglo_saxon: {
                periodic: {},
                perpetual: {},
            },
        },
        unissued: {
            title: "Invoices to be issued",
            continental: {
                periodic: {},
                perpetual: {},
            },
            anglo_saxon: {
                periodic: {},
                perpetual: {},
            },
        },
        prepaid: {
            title: "Prepaid Expenses",
            continental: {
                periodic: {},
                perpetual: {},
            },
            anglo_saxon: {
                periodic: {},
                perpetual: {},
            },
        },
        deferred: {
            title: "Deferred Revenues",
            continental: {
                periodic: {},
                perpetual: {},
            },
            anglo_saxon: {
                periodic: {},
                perpetual: {},
            },
        },
    });

    const NULL = Immutable.Map({debit: 0, credit: 0});
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
    const categories = Immutable.fromJS([ASSETS, LIABILITIES, EQUITY, REVENUE, EXPENSES], function (k, v) {
        return Immutable.Iterable.isIndexed(v)
            ? v.toList()
            : v.toOrderedMap();
    });
    const accounts = categories.toSeq().flatMap(function (cat) {
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

    const sale = 100,
        cor = 50,
        cor_tax = cor * 0.09,
        tax = sale * 0.09,
        total = sale + tax,
        purchase = 52,
        purchase_tax = 52 * 0.09;
    const operations = Immutable.fromJS([{
        label: "Supplier Invoice (PO $50, Invoice $40)",
        operations: [
            {account: LIABILITIES.STOCK_IN.code, debit: constant(50)},
            {account: ASSETS.TAXES_PAID.code, debit: constant(50 * 0.09)},
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(50 * 1.09)},
        ]
    }, {
        label: "Supplier Goods Reception (PO $50, Invoice $50)",
        operations: [
            {account: LIABILITIES.STOCK_IN.code, credit: constant(50)},
            {account: ASSETS.STOCK.code, debit: constant(50)},
        ]
    }, {
        label: "Supplier Invoice (PO $48, Invoice $50)",
        operations: [
            {account: EXPENSES.PRICE_DIFFERENCE.code, debit: constant(2)},
            {account: LIABILITIES.STOCK_IN.code, debit: constant(48)},
            {account: ASSETS.TAXES_PAID.code, debit: constant(50 * 0.09)},
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(50 * 1.09)},
        ]
    }, {
        label: "Supplier Goods Reception (PO $48, Invoice $50)",
        operations: [
            {account: LIABILITIES.STOCK_IN.code, credit: constant(48)},
            {account: ASSETS.STOCK.code, debit: constant(48)},
        ]
    }, {
        label: "Customer Invoice",
        operations: [
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: constant(total)},
            {account: EXPENSES.GOODS_SOLD.code, debit: constant(cor)},
            {account: REVENUE.SALES.code, credit: constant(sale)},
            {account: ASSETS.STOCK_OUT.code, credit: constant(cor)},
            {account: LIABILITIES.TAXES_PAYABLE.code, credit: constant(tax)}
        ]
    }, {
        label: "Customer Shipping",
        operations: [
            {account: ASSETS.STOCK_OUT.code, debit: constant(cor)},
            {account: ASSETS.STOCK.code, credit: constant(cor)}
        ]
    }, {
        label: "Production Order",
        operations: [
            {account: ASSETS.STOCK.code, debit: constant(50)},
            {account: EXPENSES.MANUFACTURING_OVERHEAD.code, debit: constant(2)},
            {account: ASSETS.RAW_MATERIALS.code, credit: constant(52)}
        ]
    }]);
    function constant(val) {return function () { return val; };}
    const zero = constant(0);
    function format(val, def) {
        if (!val) { return def === undefined ? '' : def; }
        if (val % 1 === 0) { return val; }
        return val.toFixed(2);
    }
})();
