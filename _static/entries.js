(function () {
    'use strict';

    var data = createAtom();
    data.addWatch('chart', function (k, m, prev, next) {
        React.render(
            React.createElement(Controls, {entry: next}),
            document.getElementById('entries-control'));
        React.render(
            React.createElement(FormatEntry, {entry: next}),
            document.querySelector('.journal-entries'));
    });
    document.addEventListener('DOMContentLoaded', function () {
        var entries_node = document.getElementById('journal-entries'),
            controls = document.createElement('div');
        controls.setAttribute('id', 'entries-control');
        entries_node.insertBefore(controls, entries_node.lastElementChild);

        data.reset(entries.first());
    });

    var Controls = React.createClass({
        render: function () {
            var _this = this;
            return React.DOM.div(
                null,
                "Example journal entries: ",
                React.DOM.select(
                    {
                        value: entries.indexOf(this.props.entry),
                        onChange: function (e) {
                            data.reset(entries.get(e.target.value));
                        }
                    },
                    entries.map(function (entry, index) {
                        return React.DOM.option(
                            {key: index, value: index},
                            entry.get('title')
                        );
                    }).toArray()),
                this.props.entry && React.DOM.p(null, this.props.entry.get('help'))
            );
        }
    });
    var FormatEntry = React.createClass({
        render: function () {
            return React.DOM.table(
                {className: 'table'},
                React.DOM.thead(
                    null,
                    React.DOM.tr(
                        null,
                        React.DOM.th(),
                        React.DOM.th({width: '25%', className: 'text-right'}, "Debit"),
                        React.DOM.th({width: '25%', className: 'text-right'}, "Credit")
                    )
                ),
                React.DOM.tbody(
                    null,
                    this.render_rows()
                )
            );
        },
        render_rows: function () {
            if (!this.props.entry) { return; }
            return this.props.entry.get('operations').map(this.render_row).toArray();
        },
        render_row: function (entry, index) {
            if (!entry) {
                return React.DOM.tr(
                    {key: 'spacer-' + index},
                    React.DOM.td({colSpan: 3}, "\u00A0")
                );
            }
            return React.DOM.tr(
                {key: index},
                React.DOM.td(null, entry.get('account')),
                React.DOM.td({className: 'text-right'}, entry.get('debit')),
                React.DOM.td({className: 'text-right'}, entry.get('credit'))
            );
        }
    });

    var entries = Immutable.fromJS([
        {
            title: "Company Founding",
            operations: [
                {account: 'Cash', debit: 10000},
                {account: 'Common Stock', credit: 10000}
            ]
        }, {
            title: "Buy work tooling",
            operations: [
                {account: 'Tooling', debit: 3000},
                {account: 'Cash', credit: 3000}
            ]
        }, {
            title: "Buy work tooling (invoiced)",
            operations: [
                {account: 'Tooling', debit: 3000},
                {account: 'Accounts Payable', credit: 3000}
            ]
        }, {
            title: "Pay supplier invoice",
            operations: [
                {account: 'Accounts Payable', debit: 3000},
                {account: 'Cash', credit: 3000}
            ]
        }, {
            title: "Sale paid immediately",
            operations: [
                {account: 'Cash', debit: 100},
                {account: 'Sales', credit: 100}
            ]
        }, {
            title: "Delayed payment (trade credit)",
            operations: [
                {account: 'Accounts Receivable', debit: 1000},
                {account: 'Sales', credit: 1000}
            ]
        }, {
            title: "Customer invoice paid",
            operations: [
                {account: 'Cash', debit: 1000},
                {account: 'Accounts Receivable', credit: 1000}
            ]
        }, {
            title: "Customer invoice, 10% early payment rebate",
            operations: [
                {account: 'Cash', debit: 900},
                {account: 'Sales Discount', debit: 100},
                {account: 'Accounts Receivable', credit: 1000}
            ]
        }, {
            title: "Sale with tax",
            operations: [
                {account: 'Cash', debit: 109},
                {account: 'Sales', credit: 100},
                {account: 'Taxes Payable', credit: 9}
            ]
        }, {
            title: "Fiscal year cloture — positive earnings and 50% dividends",
            operations: [
                {account: 'Revenue', debit: 5000},
                {account: 'Income Summary', credit: 5000},
                null,
                {account: 'Income Summary', debit: 4000},
                {account: 'Expenses', credit: 4000},
                null,
                {account: 'Income Summary', debit: 1000},
                {account: 'Retained Earnings', credit: 1000},
                null,
                {account: 'Retained Earnings', debit: 500},
                {account: 'Dividend Payable', credit: 500}
            ]
        }, {
            title: "Fiscal year cloture — negative earnings and dividend irrelevant",
            operations: [
                {account: 'Revenue', debit: 5000},
                {account: 'Income Summary', credit: 5000},
                null,
                {account: 'Income Summary', debit: 6000},
                {account: 'Expenses', credit: 6000},
                null,
                {account: 'Retained Earnings', debit: 1000},
                {account: 'Income Summary', credit: 1000}
            ]
        }
    ]);
}());
