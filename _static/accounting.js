(function () {
    'use strict';

    var Table = React.createClass({
        getInitialState: function () {
            return {text: [], counter: 0};
        },
        render: function () {
            return React.createElement(
                'div', null,
                React.createElement('button', {
                    style: {color: 'red'},
                    onClick: this.handleClick,
                }, "Click Me!"),
                React.createElement('ul', null, this.state.text.map(function (item) {
                    return React.createElement(
                        'li', null, "This is number ", item);
                }))
            );
        },
        handleClick: function () {
            this.setState({
                text: this.state.text.concat([this.state.counter]),
                counter: this.state.counter + 1,
            })
        },
    });

    function item(it) {
        if (it.credit && it.debit) {
            throw new Error("A journal item can't have both credit and debit, got " + JSON.stringify(it));
        }
        return React.createElement(
            'tr', null,
            React.createElement('td', null, (it.credit ? '\u2001' : '') + it.label),
            React.createElement('td', null, it.debit),
            React.createElement('td', null, it.credit)
        );
    }
    function spacer() {
        return React.createElement(
            'tr', null, React.createElement(
                'td', {colSpan: 3}, "\u00A0"));
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
            return React.createElement(
                'div', null,
                this.controls(),
                React.createElement(
                    'table', {className: 'table'},
                    this.makeHeader(),
                    React.createElement(
                        'tbody', null,
                        this.revenues(this.state.revenues),
                        spacer(),
                        this.expenses(this.state.expenses),
                        spacer(),
                        this.closure({
                            dividends: this.state.dividends,
                            income: this.income(),
                        })
                    )
                )
            );
        },
        makeHeader: function () {
            return React.createElement(
                'thead', null,
                React.createElement(
                    'tr', null,
                    React.createElement('th'),
                    React.createElement('th', null, "Debit"),
                    React.createElement('th', null, "Credit")
                )
            );
        },

        controls: function () {
            var _this = this;
            return [
                React.createElement(
                    'fieldset', null,
                    React.createElement('legend', null, "Income"),
                    React.createElement(
                        'label', null, "Cash ",
                        React.createElement('input', {
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
                    React.createElement(
                        'label', null, " Accounts Receivable ",
                        React.createElement('input', {
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
                React.createElement(
                    'fieldset', null,
                    React.createElement('legend', null, "Expenses"),
                    React.createElement(
                        'label', null, "Cash ",
                        React.createElement('input', {
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
                    React.createElement(
                        'label', null, " Accounts Payable ",
                        React.createElement('input', {
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
                React.createElement(
                    'fieldset', null,
                    React.createElement('legend', null, "Dividends"),
                    React.createElement(
                        'label', null,
                        "Ratio (from retained earnings) ",
                        React.createElement('input', {
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
                    spacer(),
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
                React.createElement(
                    'tr', null, React.createElement(
                        'td', {colSpan: 3},
                        "\u2001\u2001Consolidation of revenues"
                    )
                ),
                spacer(),
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
                React.createElement(
                    'tr', null, React.createElement(
                        'td', {colSpan: 3},
                        "\u2001\u2001Consolidation of expenses"
                    )
                ),
                spacer(),
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
