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
    var isFulfilled = (function () {
        var enabledTransactions = Immutable.Seq();
        // memoize enabled ops so they don't have to be recomputed all the time
        data.addWatch('enableds', function (k, m, prev, next) {
            enabledTransactions = next.filter(function (v, k) {
                return v.get('enabled');
            }).keySeq();
        });
        return function isFulfilled(deps) {
            var d = Immutable.Set(deps);
            return d.isEmpty() || d.subtract(enabledTransactions).isEmpty();
        }
    })();

    function isEnabled(transaction) {
        var item = data.deref().get(transaction);
        return item.get('enabled') && isFulfilled(item.get('depends'));
    }
    var Controls = React.createClass({
        getInitialState: function () {
            return { folded: true };
        },
        toggle: function () {
            this.setState({folded: !this.state.folded});
        },
        render: function () {
            return React.DOM.div(
                null,
                React.DOM.h4(
                    { onClick: this.toggle, style: { cursor: 'pointer' } },
                    this.state.folded ? "\u25B8 " : "\u25BE ",
                    "Operations"),
                this.state.folded ? undefined : this.props.p.map(function (v, k) {
                    return React.DOM.label(
                        {key: k, style: {display: 'block' } },
                        React.DOM.input({
                            type: 'checkbox',
                            disabled: !isFulfilled(v.get('depends')),
                            checked: v.get('enabled'),
                            onChange: function () {
                                data.swap(function (d) {
                                    return d.updateIn(
                                        [k, 'enabled'],
                                        function (check) { return !check; });
                                });
                            }
                        }),
                        " ",
                        v.get('label')
                    );
                }, this).toArray()
            );
        }
    });

    var Journal = React.createClass({
        render: function () {
            return React.DOM.div(
                null,
                React.createElement(Controls, this.props),
                React.DOM.table(
                    {className: 'table'},
                    React.DOM.thead(
                        null,
                        React.DOM.tr(
                            null,
                            React.DOM.th(),
                            React.DOM.th({width: '20%'}, "Debit"),
                            React.DOM.th({width: '20%'}, "Credit")
                        )
                    ),
                    React.DOM.tbody(
                        null,
                        this.props.p
                            .filter(function (v, k) { return isEnabled(k); })
                            .valueSeq()
                            .flatMap(function (tx) {
                                if (tx.get('operations').isEmpty()) {
                                    return [];
                                }
                                var label = tx.get('label');
                                var k = toKey(label);
                                return tx.get('operations').toSeq().map(function (op) {
                                    var credit = op.get('credit'), debit = op.get('debit');
                                    return React.DOM.tr(
                                        {key: toKey(label, op.get('account'))},
                                        React.DOM.td(
                                            null,
                                            credit ? '\u2001' : '',
                                            accounts[op.get('account')].label
                                        ),
                                        React.DOM.td(null, debit && debit(this.props.p)),
                                        React.DOM.td(null, credit && credit(this.props.p))
                                    );
                                }, this).concat(
                                    React.DOM.tr(
                                        {key: k + '-label'},
                                        React.DOM.td(
                                            {colSpan: 3, style: {textAlign: 'center'}},
                                            label)),
                                    React.DOM.tr(
                                        {key: k + '-spacer'},
                                        React.DOM.td({colSpan: 3}, "\u00A0"))
                                );
                            }, this)
                            .toArray()
                    )
                )
            );
        }
    });

    data.addWatch('journals', function (k, m, prev, next) {
        React.render(
            React.createElement(Journal, {p: next}),
            document.querySelector('.journals')
        );
    });

    var Chart = React.createClass({
        render: function () {
            return React.DOM.div(
                null,
                React.createElement(Controls, {p: this.props.p}),
                DOM.table(
                    {className: 'table'},
                    DOM.tr(
                        null,
                        DOM.th(),
                        DOM.th({className: 'text-right'}, "Debit"),
                        DOM.th({className: 'text-right'}, "Credit"),
                        DOM.th({className: 'text-right'}, "Balance")),
                    this.accounts().map(function (data) {
                        return DOM.tr(
                            {key: data.code},
                            DOM.th(null,
                                   data.level ? '\u2001 ' : '',
                                   data.code, ' ', data.label),
                            DOM.td({className: 'text-right'}, data.debit),
                            DOM.td({className: 'text-right'}, data.credit),
                            DOM.td({className: 'text-right'}, data.debit - data.credit)
                        );
                    })
                )
            );
        },
        accounts: function() {
            var _this = this;
            var out = [];
            var zero = function () { return 0; }
            var data = this.props.p;
            // for each operated-on account, apply all operations and save the
            // resulting (debit, credit) state
            var chart = data
                .filter(function (v, k) { return isEnabled(k); })
                .valueSeq()
                .flatMap(function (v) { return v.get('operations'); })
                .reduce(function (acc, op) {
                    // update operation's account debit and credit by adding
                    // operation's debit and credit to them, initialize to 0
                    // if not set yet
                    return acc
                        .updateIn([op.get('account'), 'debit'], 0, function (d) {
                            return d + op.get('debit', zero)(data);
                        })
                        .updateIn([op.get('account'), 'credit'], 0, function (c) {
                            return c + op.get('credit', zero)(data);
                        });
                }, Immutable.Map());
            categories.forEach(function (cat) {
                var current = { level: 0, label: cat.label, code: cat.code, credit: 0, debit: 0 };
                var values = accs(cat).map(function (acc) {
                    // If no operation has been performed on an account, 0 debit or credit
                    var it = chart.get(acc.code, Immutable.Map({credit: 0, debit: 0}));
                    var debit = it.get('debit') || 0;
                    var credit = it.get('credit') || 0;
                    current.debit += debit;
                    current.credit += credit;
                    return {
                        level: 1,
                        code: acc.code,
                        label: acc.label,
                        debit: debit,
                        credit: credit
                    }
                });
                values.unshift(current);
                out.push.apply(out, values);
            });
            return out;
        }
    });
    data.addWatch('chart', function (k, m, prev, next) {
        React.render(
            React.createElement(Chart, {p: next}),
            document.querySelector('.chart-of-accounts'));
    });

    document.addEventListener('DOMContentLoaded', function () {
        var sale = 100,
            tax = sale * 0.09,
            total = sale + tax,
            refund = sale * 0.1,
            purchase = 80;
        data.reset(Immutable.fromJS({
            customer_invoice: {
                enabled: false,
                label: "Customer Invoice ($100 + 9% tax)",
                depends: [],
                operations: [
                    {account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: function () { return total; }},
                    {account: REVENUE.SALES.code, credit: function () { return sale; }},
                    {account: LIABILITIES.TAXES_PAYABLE.code, credit: function () { return tax; }}
                ]
            },
            // TODO: dependencies?
            customer_refund: {
                enabled: false,
                label: "Customer Refund 10%",
                depends: ['customer_invoice'],
                operations: [
                    {account: REVENUE.SALES.code, debit: function () { return refund; }},
                    {account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: function () { return refund; }}
                ]
            },
            customer_payment: {
                enabled: false,
                label: "Customer Payment",
                depends: ['customer_invoice'],
                operations: [
                    // TODO: depends of refund
                    {account: ASSETS.CASH.code, debit: function (ops) {
                        return ops.getIn(['customer_refund', 'enabled'])
                            ? total - refund
                            : total;
                    }},
                    {account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: function (ops) {
                        return ops.getIn(['customer_refund', 'enabled'])
                            ? total - refund
                            : total;
                    }}
                ]
            },
            supplier_invoice: {
                enabled: false,
                label: "Supplier Invoice",
                depends: [],
                operations: [
                    {account: EXPENSES.PURCHASES.code, debit: function () { return purchase; }},
                    {account: LIABILITIES.ACCOUNTS_PAYABLE.code, credit: function () { return purchase; }},
                ]
            },
            supplier_invoice_paid: {
                enabled: false,
                label: "Supplier Invoice Paid",
                depends: ['supplier_invoice'],
                operations: [
                    {account: LIABILITIES.ACCOUNTS_PAYABLE.code, debit: function () { return purchase; }},
                    {account: ASSETS.CASH.code, credit: function () { return purchase; }}
                ]
            },
            inventory_reception: {
                enabled: false,
                label: "Inventory Reception",
                depends: ['supplier_invoice'],
                // TODO: ???
                operations: []
            },
            customer_delivery: {
                enabled: false,
                label: "Customer Delivery",
                depends: ['customer_invoice', 'inventory_reception'],
                // TODO: ???
                operations: [],
            },
            taxes: {
                enabled: false,
                label: "Pay Taxes Due",
                depends: [],
                // TODO: no taxes due if no customer invoice?
                operations: [
                    {account: LIABILITIES.TAXES_PAYABLE.code, debit: function () { return tax; }},
                    {account: ASSETS.CASH.code, credit: function () { return tax; }}
                ]
            },
        }));
    });

    var DOM = React.DOM;

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
    var categories = [ASSETS, LIABILITIES, REVENUE, EXPENSES];
    var accounts = (function () {
        var acs = {};
        categories.forEach(function (cat) {
            acs[cat.code] = cat;
            accs(cat).forEach(function (acc) {
                acs[acc.code] = acc;
            });
        });
        return acs;
    })();


    function accs(category) {
        var out = [];
        for(var k in category) {
            if (k.toUpperCase() === k) {
                out.push(category[k]);
            }
        }
        return out;
    }
})();
