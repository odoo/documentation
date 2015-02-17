(function () {
    'use strict';

    function item(it) {
        if (it.credit && it.debit) {
            throw new Error("A journal item can't have both credit and debit, got " + JSON.stringify(it));
        }
        return React.DOM.tr(
            {key: it.label.toLowerCase().split(' ').concat(
                ['debit', it.debit, 'credit', it.credit]
            ).join('-')
            },
            React.DOM.td(null, (it.credit ? '\u2001' : '') + it.label),
            React.DOM.td(null, it.debit),
            React.DOM.td(null, it.credit)
        );
    }
    function spacer(key) {
        return React.DOM.tr({key: 'spacer-' + key}, React.DOM.td({colSpan: 3}, "\u00A0"));
    }

    var ClotureTable = React.createClass({
        getInitialState: function () {
            return {
                revenues: {
                    cash: 800,
                    receivable: 200,
                },
                expenses: {
                    cash: 100,
                    payable: 500,
                },
                // don't ignore/break invalid values
                dividends: "0.5",
            };
        },

        income: function () {
            return (
                (this.state.revenues.cash + this.state.revenues.receivable)
                    -
                    (this.state.expenses.cash + this.state.expenses.payable)
            );
        },
        
        render: function () {
            return React.DOM.div(
                null,
                this.controls(),
                React.DOM.table(
                    {className: 'table'},
                    this.makeHeader(),
                    React.DOM.tbody(
                        null,
                        this.revenues(this.state.revenues),
                        spacer('table-1'),
                        this.expenses(this.state.expenses),
                        spacer('table-2'),
                        this.closure({
                            dividends: this.state.dividends,
                            income: this.income(),
                        })
                    )
                )
            );
        },
        makeHeader: function () {
            return React.DOM.thead(
                null,
                React.DOM.tr(
                    null,
                    React.DOM.th(),
                    React.DOM.th(null, "Debit"),
                    React.DOM.th(null, "Credit")
                )
            );
        },

        controls: function () {
            var _this = this;
            return [
                React.DOM.fieldset(
                    {key: 'income'},
                    React.DOM.legend(null, "Income"),
                    React.DOM.label(
                        null, "Cash ",
                        React.DOM.input({
                            type: 'number',
                            step: 1,
                            value: this.state.revenues.cash,
                            onChange: function (e) {
                                var val = e.target.value;
                                _this.setState({
                                    revenues: {
                                        cash: val ? parseInt(val, 10) : 0,
                                        receivable: _this.state.revenues.receivable
                                    }
                                });
                            }
                        })
                    ),
                    ' ',
                    React.DOM.label(
                        null, " Accounts Receivable ",
                        React.DOM.input({
                            type: 'number',
                            step: 1,
                            value: this.state.revenues.receivable,
                            onChange: function (e) {
                                var val = e.target.value;
                                _this.setState({
                                    revenues: {
                                        cash: _this.state.revenues.cash,
                                        receivable: val ? parseInt(val, 10) : 0,
                                    }
                                })
                            }
                        })
                    )
                ),
                React.DOM.fieldset(
                    {key: 'expenses'},
                    React.DOM.legend(null, "Expenses"),
                    React.DOM.label(
                        null, "Cash ",
                        React.DOM.input({
                            type: 'number',
                            step: 1,
                            value: this.state.expenses.cash,
                            onChange: function (e) {
                                var val = e.target.value;
                                _this.setState({
                                    expenses: {
                                        cash: val ? parseInt(val, 10): 0,
                                        payable: _this.state.expenses.payable
                                    }
                                })
                            }
                        })
                    ),
                    ' ',
                    React.DOM.label(
                        null, " Accounts Payable ",
                        React.DOM.input({
                            type: 'number',
                            step: 1,
                            value: this.state.expenses.payable,
                            onChange: function (e) {
                                var val = e.target.value;
                                _this.setState({
                                    expenses: {
                                        cash: _this.state.expenses.cash,
                                        payable: val ? parseInt(val, 10) : 0
                                    }
                                })
                            }
                        })
                    )
                ),
                React.DOM.fieldset(
                    {key: 'dividends'},
                    React.DOM.legend(null, "Dividends"),
                    React.DOM.label(
                        null,
                        "Ratio (from retained earnings) ",
                        React.DOM.input({
                            type: 'range',
                            min: 0,
                            max: 1,
                            step: 0.01,
                            value: this.state.dividends,
                            style: { display: 'inline-block' },
                            onChange: function (e) {
                                _this.setState({dividends: e.target.value});
                            }
                        })
                    )
                )
            ];
        },
        // components must return a single root which isn't practical here
        closure: function (props) {
            var result, income = Math.abs(props.income), dividends = 0;
            if (props.income > 0) {
                // credit retained earnings from income, then credit dividends
                // from retained
                var dividends = parseInt(income * Math.max(0, Math.min(1, parseFloat(props.dividends))));
                result = [
                    item({label: "Income Summary", debit: income}),
                    item({label: "Retained Earnings", credit: income}),
                ];
            } else {
                // debit retained earnings, no dividends
                result = [
                    item({label: "Retained Earnings", debit: income}),
                    item({label: "Income Summary", credit: income}),
                ];
            }
            if (dividends) {
                result = result.concat([
                    spacer('closure'),
                    item({label: "Retained Earnings", debit: dividends}),
                    item({label: "Dividends Payable", credit: dividends})
                ]);
            }
            return result;
        },
        revenues: function (props) {
            var total = props.cash + props.receivable;
            return [
                item({label: "Cash", debit: props.cash}),
                item({label: "Accounts Receivable", debit: props.receivable}),
                item({label: "Revenue", credit: total}),
                React.DOM.tr({key: 'revenue-notes'}, React.DOM.td(
                    {colSpan: 3},
                    "\u2001\u2001Consolidation of revenues")),
                spacer('revenues'),
                item({label: "Revenue", debit: total}),
                item({label: "Income Summary", credit: total})
            ];
        },
        expenses: function (props) {
            var total = props.cash + props.payable;
            return [
                item({label: "Expenses", debit: total}),
                item({label: "Cash", credit: props.cash}),
                item({label: "Accounts Payable", credit: props.payable}),
                React.DOM.tr(
                    {key: 'expenses-note'}, React.DOM.td(
                        {colSpan: 3},
                        "\u2001\u2001Consolidation of expenses"
                    )
                ),
                spacer('expenses'),
                item({label: "Income Summary", debit: total}),
                item({label: "Expenses", credit: total})
            ];
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        React.render(
            React.createElement(ClotureTable),
            document.querySelector('.fiscal-year-closing'));
    });

})();
