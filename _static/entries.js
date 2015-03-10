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
                entries.map(function (entry, index) {
                    return React.DOM.label(
                        {
                            key: index,
                            style: { display: 'block' },
                        },
                        React.DOM.input({
                            type: 'radio',
                            checked: Immutable.is(entry, this.props.entry),
                            onChange: function (e) {
                                data.reset(entry);
                            }
                        }),
                        ' ',
                        entry.get('title')
                    );
                }, this).toArray(),
                this.props.entry && React.DOM.p(null, this.props.entry.get('help'))
            );
        }
    });
    var FormatEntry = React.createClass({
        render: function () {
            var entry = this.props.entry;
            return React.DOM.div(
                null,
                React.DOM.table(
                    {className: 'table table-condensed d-c-table'},
                    React.DOM.thead(
                        null,
                        React.DOM.tr(
                            null,
                            React.DOM.th(),
                            React.DOM.th(null, "Debit"),
                            React.DOM.th(null, "Credit")
                        )
                    ),
                    React.DOM.tbody(
                        null,
                        this.render_rows()
                    )
                ),
                React.createElement(Listing, {
                    heading: "Explanation",
                    items: entry && entry.get('explanation')
                }),
                React.createElement(Listing, {
                    heading: "Configuration",
                    items: entry && entry.get('configuration')
                })
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
                React.DOM.td(null, entry.get('debit')),
                React.DOM.td(null, entry.get('credit'))
            );
        }
    });
    var Listing = React.createClass({
        render: function () {
            if (!this.props.items || this.props.items.isEmpty()) {
                return React.DOM.div();
            }
            return React.DOM.div(
                null,
                React.DOM.h4(null, this.props.heading, ':'),
                React.DOM.ul(
                    null,
                    this.props.items.map(function (item, index) {
                        return React.DOM.li({key: index}, item);
                    }).toArray()
                )
            );
        }
    });

    var entries = Immutable.fromJS([
        {
            title: "Company Founding",
            operations: [
                {account: 'Cash', debit: 10000},
                {account: 'Common Stock', credit: 10000}
            ],
            explanation: [
                "The founders invest capital in the company",
                "That capital is a debt of the company towards the founders",
                "It is represented as shares into the ownership of the company",
                "It is not a liability because it's not expected to be settled"
            ],
            configuration: []
        }, {
            title: "Buy work tooling (immediate cash payment)",
            operations: [
                {account: 'Tooling', debit: 3000},
                {account: 'Cash', credit: 3000}
            ],
            explanation: [
                "One asset (cash) is traded for an other asset (tooling)",
                "No new liabilities incurred",
                "Long-term assets are not expended immediately"
            ],
            configuration: []
        }, {
            title: "Buy work tooling (invoiced, to pay later)",
            operations: [
                {account: 'Tooling', debit: 3000},
                {account: 'Accounts Payable', credit: 3000}
            ],
            explanation: [
                "An asset can be acquired through a liability",
                "Trade credits are short-term debts between businesses"
            ],
            configuration: []
        }, {
            title: "Pay supplier invoice",
            operations: [
                {account: 'Accounts Payable', debit: 3000},
                {account: 'Cash', credit: 3000}
            ],
            explanation: [
                "Liabilities must be settled",
                "Settling a liability is an outflow of resources (assets)"
            ],
            configuration: []
        }, {
            title: "Cash sale (paid immediately)",
            operations: [
                {account: 'Cash', debit: 100},
                {account: 'Sales', credit: 100}
            ],
            explanation: [],
            configuration: []
        }, {
            title: "Invoiced sale (trade credit)",
            operations: [
                {account: 'Accounts Receivable', debit: 1000},
                {account: 'Sales', credit: 1000}
            ],
            explanation: [
                "A sale is revenue",
                "What a client owes is an asset"
            ],
            configuration: []
        }, {
            title: "Customer pays invoice",
            operations: [
                {account: 'Cash', debit: 1000},
                {account: 'Accounts Receivable', credit: 1000}
            ],
            explanation: [
                "A client paying an invoice is a financial movement from one asset to an other"
            ],
            configuration: []
        }, {
            title: "Customer pays invoice, 10% early payment rebate",
            operations: [
                {account: 'Cash', debit: 900},
                {account: 'Sales Discount', debit: 100},
                {account: 'Accounts Receivable', credit: 1000}
            ],
            explanation: [
                "Sales discounts are contra revenues",
                "They are negative revenues, lowering effective revenue",
                "They are not expenses"
            ],
            configuration: []
        }, {
            title: "Cash sale with tax",
            operations: [
                {account: 'Cash', debit: 109},
                {account: 'Sales', credit: 100},
                {account: 'Taxes Payable', credit: 9}
            ],
            explanation: [
                "Selling with tax means there is tax to pay",
                "Tax to pay is a liability"
            ],
            configuration: []
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
            ],
            explanation: [
                "Closing a fiscal year means transferring all P&L accounts to retained earnings",
                "If the retained earnings account is positive, a dividend may be paid to owners/shareholders",
            ],
            configuration: []
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
            ],
            explanation: [
                "Dividends are paid from a positive retained earnings account",
                "Net losses will lower retained earnings",
                "Dividends may still be paid if the account is positive because of previous years"
            ],
            configuration: []
        }
    ]);
}());
