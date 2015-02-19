(function () {
    'use strict';

    // .journals
    // .t-accounts
    // .chart-of-accounts
    // document.addEventListener('DOMContentLoaded', function () {
    //     React.render(
    //         React.createElement(CoA),
    //         document.querySelector('.chart-of-accounts'));
    // });
    var data = createAtom();

    function toKey(s, postfix) {
        if (postfix) {
            s += ' ' + postfix;
        }
        return s.replace(/[^0-9a-z ]/gi, '').toLowerCase().split(/\s+/).join('-');

    }
    function isEnabled(transaction) {
        var item = data.deref().get(transaction);
        return item.get('enabled');
    }
    var Controls = React.createClass({
        render: function () {
            var _this = this;
            return React.DOM.div(null, operations.map(function (op) {
                var label = op.get('label'), operations = op.get('operations');
                return React.DOM.label(
                    {
                        key: toKey(label),
                        style: {display: 'block'},
                        className: (operations === _this.props.p.last() && 'highlight-op')
                    },
                    React.DOM.input({
                        type: 'checkbox',
                        checked: _this.props.p.contains(operations),
                        onChange: function (e) {
                            if (e.target.checked) {
                                data.swap(function (ops) {
                                    return ops.add(operations);
                                });
                            } else {
                                data.swap(function (ops) {
                                    return ops.remove(operations);
                                });
                            }
                        }
                    }),
                    " ",
                    label
                );
            }).toArray());
        }
    });

    var Chart = React.createClass({
        render: function () {
            var lastop = Immutable.Map(
                (this.props.p.last() || Immutable.List()).map(function (op) {
                    return [op.get('account'), op.has('credit') ? 'credit' : 'debit'];
                })
            );
            return React.DOM.div(
                null,
                React.DOM.table(
                    {className: 'table'},
                    React.DOM.tr(
                        null,
                        React.DOM.th(),
                        React.DOM.th({className: 'text-right'}, "Debit"),
                        React.DOM.th({className: 'text-right'}, "Credit"),
                        React.DOM.th({className: 'text-right'}, "Balance")),
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
                            })}, data.get('debit')),
                            React.DOM.td({className: React.addons.classSet({
                                'text-right': true,
                                'highlight-op': highlight === 'credit'
                            })}, data.get('credit')),
                            React.DOM.td({className: 'text-right'},
                                         data.get('debit') - data.get('credit'))
                        );
                    }).toArray()
                )
            );
        },
        accounts: function() {
            var _this = this;
            var zero = function () { return 0; };
            var data = this.props.p;

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
        data.reset(Immutable.OrderedSet());
    });

    var NULL = Immutable.Map({debit: 0, credit: 0});
    var ASSETS = {
        code: 1,
        label: "Assets",
        CASH: { code: 10100, label: "Cash" },
        ACCOUNTS_RECEIVABLE: { code: 12100, label: "Accounts Receivable" }
    };
    var LIABILITIES = {
        code: 2,
        label: "Liabilities",
        ACCOUNTS_PAYABLE: { code: 21000, label: "Accounts Payable" },
        TAXES_PAYABLE: { code: 23100, label: "Taxes Payable" }
    };
    var REVENUE = {
        code: 4,
        label: "Revenue",
        SALES: { code: 40100, label: "Sales" }
    };
    var EXPENSES = {
        code: 5,
        label: "Expenses",
        PURCHASES: { code: 50100, label: "Purchases" }
    };
    var categories = Immutable.fromJS([ASSETS, LIABILITIES, REVENUE, EXPENSES]);
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
        label: "Customer Invoice ($100 + 9% tax)",
        operations: [
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: function () { return total; }},
            {account: REVENUE.SALES.code, credit: function () { return sale; }},
            {account: LIABILITIES.TAXES_PAYABLE.code, credit: function () { return tax; }}
        ]
    }, {
        label: "Customer Refund 10%",
        operations: [
            {account: REVENUE.SALES.code, debit: function () { return refund; }},
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: function () { return refund; }}
        ]
    }, {
        label: "Customer Payment",
        operations: [
            // TODO: depends of refund
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
        label: "Supplier Invoice",
        operations: [
            {account: EXPENSES.PURCHASES.code, debit: function () { return purchase; }},
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: function () { return purchase; }}
        ]
    }, {
        label: "Supplier Invoice Paid",
        operations: [
            {account: LIABILITIES.ACCOUNTS_PAYABLE.code, debit: function () { return purchase; }},
            {account: ASSETS.CASH.code, credit: function () { return purchase; }}
        ]
    }, {
        label: "Pay Taxes Due",
        operations: [
            {account: LIABILITIES.TAXES_PAYABLE.code, debit: function () { return tax; }},
            {account: ASSETS.CASH.code, credit: function () { return tax; }}
        ]
    }
    ]);
})();
