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
                                })}, format(data.get('debit'))),
                                React.DOM.td({className: React.addons.classSet({
                                    'text-right': true,
                                    'highlight-op': highlight === 'credit'
                                })}, format(data.get('credit'))),
                                React.DOM.td(
                                    {className: 'text-right'},
                                    ((data.get('debit') || data.get('credit'))
                                     ? format(data.get('debit') - data.get('credit'))
                                     : '')
                                )
                            );
                        })
                    )
                )
            );
        },
        accounts: function() {
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
            React.createElement(Controls, {p: next}),
            document.getElementById('chart-controls'));
        React.render(
            React.createElement(Chart, {p: next}),
            document.querySelector('.chart-prueba'));
    });

    document.addEventListener('DOMContentLoaded', function () {
        var chart = document.querySelector('.chart-prueba');
        if (!chart) { return; }

        var controls = document.createElement('div');
        controls.setAttribute('id', 'chart-controls');
        chart.parentNode.insertBefore(controls, chart);

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
        label: "Accounts",
        ACCOUNTS_RECEIVABLE: { code: 13100, label: "Accounts Payable" },
        RAW_MATERIALS: { code: 14100, label: "Expense" },
        TAXES: { code: 19100, label: "Invoice of Tax" },
        TAXES_RET: { code: 19300, label: "Invoice of Tax Retention" },
        TAXES_ISR: { code: 19500, label: "Tax ISR" },
        BANK: { code: 11000, label: "Bank" },
        TAXES_PAID: { code: 19000, label: "Tax Effectively Paid" },
        TAXES_PENDING_PAID: { code: 19400, label: "Tax Pending to Apply" },
        TAXES_RET_PAID: { code: 19200, label: "Tax Retention Paid" },
    };
    var categories = Immutable.fromJS([ASSETS], function (k, v) {
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

    var operations = Immutable.fromJS([{
        label: 'Supplier Invoice(Expense:$100 Tax:16% Retention:10.67% Retention ISR:10%)',
        operations: [
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, credit: constant(95.33)},
            {account: ASSETS.RAW_MATERIALS.code, debit: constant(100)},
            {account: ASSETS.TAXES.code, debit: constant(16)},
            {account: ASSETS.TAXES_ISR.code, credit: constant(10)},
            {account: ASSETS.TAXES_RET.code, credit: constant(10.67)}
        ]
    }, {
        label: "Payment Invoice",
        operations: [
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: constant(95.33)},
            {account: ASSETS.BANK.code, credit: constant(95.33)},
            {account: ASSETS.TAXES.code, credit: constant(16)},
            {account: ASSETS.TAXES_RET_PAID.code, credit: constant(10.67)},
            {account: ASSETS.TAXES_RET.code, debit: constant(10.67)},
            {account: ASSETS.TAXES_PENDING_PAID.code, debit: constant(10.67)},
            {account: ASSETS.TAXES_PAID.code, debit: constant(5.33)}
        ]
    }, {
        label: "Payment Retentions to SAT ($10.67)",
        operations: [
            {account: ASSETS.ACCOUNTS_RECEIVABLE.code, debit: constant(10.67)},
            {account: ASSETS.BANK.code, credit: constant(10.67)},
            {account: ASSETS.TAXES_RET_PAID.code, debit: constant(10.67)},
            {account: ASSETS.TAXES_PENDING_PAID.code, credit: constant(10.67)},
            {account: ASSETS.TAXES_PAID.code, debit: constant(10.67)}
        ]
    }]);
    function format(val, def) {
        if (!val) { return def === undefined ? '' : def; }
        if (val % 1 === 0) { return val; }
        return val.toFixed(2);
    }
    function constant(val) {return function () { return val; };}
    var zero = constant(0);
})();
