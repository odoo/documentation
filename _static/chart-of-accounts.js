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
                            var highlight = lastop.get(data.get('code'));
                            return React.DOM.tr(
                                {key: data.get('code')},
                                React.DOM.th(null,
                                             data.get('level') ? '\u2001 ' : '',
                                             data.get('code'), ' ', data.get('label')),
                                React.DOM.td({className: React.addons.classSet({
                                    'text-right': true,
                                    'highlight-op': highlight === 'debit'
                                })}, data.get('debit') || ''),
                                React.DOM.td({className: React.addons.classSet({
                                    'text-right': true,
                                    'highlight-op': highlight === 'credit'
                                })}, data.get('credit') || ''),
                                React.DOM.td(
                                    {className: 'text-right'},
                                    ((data.get('debit') || data.get('credit'))
                                     ? data.get('debit') - data.get('credit')
                                     : '')
                                )
                            );
                        })
                    )
                )
            );
        },
        accounts: function() {
            var _this = this;
            var zero = function () { return 0; };
            var data = this.props.p.get('operations');

            var totals = data.flatten(true).reduce(function (acc, op) {
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
            React.createElement(Controls, {p: next}),
            document.getElementById('chart-controls'));
        React.render(
            React.createElement(Chart, {p: next}),
            document.querySelector('.chart-of-accounts'));
    });

    document.addEventListener('DOMContentLoaded', function () {
        var chart = document.getElementById('chart-of-accounts'),
            controls = document.createElement('div');
        controls.setAttribute('id', 'chart-controls');
        chart.insertBefore(controls, chart.lastElementChild);

        data.reset(Immutable.Map({
            // last-selected operation
            active: null,
            // set of all currently enabled operations
            operations: Immutable.OrderedSet()
        }));
    });

    var NULL = Immutable.Map({debit: 0, credit: 0});
    var ASSETS = {
        code: 1,
        label: "Assets",
        CASH: { code: 10000, label: "Cash" },
        ACCOUNTS_RECEIVABLE: { code: 12000, label: "Accounts Receivable" },
        BUILDINGS: { code: 17100, label: "Buildings" },
        DEPRECIATION: { code: 18100, label: "Accumulated Depreciation" }
    };
    var LIABILITIES = {
        code: 2,
        label: "Liabilities",
        NOTES_PAYABLE: { code: 20100, label: "Notes Payable" },
        ACCOUNTS_PAYABLE: { code: 21000, label: "Accounts Payable" },
        TAXES_PAYABLE: { code: 24000, label: "Taxes Payable" }
    };
    var EQUITY = {
        code: 3,
        label: "Equity",
        CAPITAL: { code: 30000, label: "Owner's Capital" }
    };
    var REVENUE = {
        code: 4,
        label: "Revenue",
        SALES: { code: 40000, label: "Sales" }
    };
    var EXPENSES = {
        code: 5,
        label: "Expenses",
        PURCHASES: { code: 50000, label: "Purchases" },
        DEPRECIATION: { code: 58100, label: "Depreciation Expenses" }
    };
    var categories = Immutable.fromJS([ASSETS, LIABILITIES, EQUITY, REVENUE, EXPENSES]);
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
        tax = sale * 0.09,
        total = sale + tax,
        refund = sale * 0.1,
        purchase = 80;
    var operations = Immutable.fromJS([{
        label: "Company Incorporation (Initial Capital $1,000)",
        operations: [
            {account: ASSETS.CASH.code, debit: constant(1000)},
            {account: EQUITY.CAPITAL.code, credit: constant(1000)}
        ]
    }, {
        label: "Customer Invoice ($100 + 9% tax)",
        operations: [
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: constant(total)},
            {account: REVENUE.SALES.code, credit: constant(sale)},
            {account: LIABILITIES.TAXES_PAYABLE.code, credit: constant(tax)}
        ]
    }, {
        label: "Customer Refund 10%",
        operations: [
            {account: REVENUE.SALES.code, debit: constant(refund)},
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: constant(refund)}
        ]
    }, {
        label: "Customer Payment",
        operations: [
            {account: ASSETS.CASH.code, debit: function (ops) {
                return ops.contains(operations.getIn(['customer_refund', 'operations']))
                    ? total - refund
                    : total;
            }},
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: function (ops) {
                return ops.contains(operations.getIn(['customer_refund', 'operations']))
                    ? total - refund
                    : total;
            }}
        ]
    }, {
        label: "Supplier Bill",
        operations: [
            {account: EXPENSES.PURCHASES.code, debit: constant(purchase)},
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: constant(purchase)}
        ]
    }, {
        label: "Supplier Bill Paid",
        operations: [
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, debit: constant(purchase)},
            {account: ASSETS.CASH.code, credit: constant(purchase)}
        ]
    }, {
        label: "Buy and pay a building (an asset)",
        operations: [
            {account: ASSETS.BUILDINGS.code, debit: constant(3000)},
            {account: LIABILITIES.NOTES_PAYABLE.code, credit: constant(2500)},
            {account: ASSETS.CASH.code, credit: constant(500)}
        ]
    }, {
        label: "Yearly Asset Depreciation (10% per year)",
        operations: [
            {account: EXPENSES.DEPRECIATION.code, debit: constant(300)},
            {account: ASSETS.DEPRECIATION.code, credit: constant(300)}
        ]
    }, {
        label: "Pay Taxes Due",
        operations: [
            {account: LIABILITIES.TAXES_PAYABLE.code, debit: constant(tax)},
            {account: ASSETS.CASH.code, credit: constant(tax)}
        ]
    }
    ]);
    function constant(val) {return function () { return val; };}
})();
