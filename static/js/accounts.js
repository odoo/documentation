/* global Immutable, React */
(function () {
    // NOTE: used by cheat_sheet.rst
    'use strict';

    function highlight(primary, secondary) {
        return {
            className: React.addons.classSet({
                related: primary,
                secondary: secondary
            })
        };
    }
    var AccountsTable = React.createClass({
        render: function () {
            return React.DOM.div(
                { style: { marginTop: '0' } },
                React.DOM.div(// P&L
                    highlight(this.props.current === 'p-l'),
                    React.DOM.h4(null, "Profit & Loss"),
                    React.DOM.div(
                        null,
                        React.DOM.h5(
                            highlight(null, this.props.current === 'retained'),
                            "Net Profit"),
                        React.DOM.div(
                            highlight(null, this.props.current === 'gross-profit'),
                            React.DOM.h5(
                                highlight(this.props.current === 'gross-profit'),
                                "Gross Profit"),
                            React.DOM.dl(
                                null,
                                React.DOM.dt(null, "Revenue"),
                                React.DOM.dd(
                                    null,
                                    "Revenue"
                                ),
                                React.DOM.dt(null, "Less ", "Costs of Revenue"),
                                React.DOM.dd(
                                    null,
                                    "Cost of Goods Sold"
                                )
                            )
                        ),
                        React.DOM.div(
                            highlight(this.props.current === 'opex'),
                            React.DOM.h5(null, "Operating Income or Loss"),
                            React.DOM.dl(
                                null,
                                React.DOM.dt(
                                    null,
                                    "Less ", "Operating Expenses"),
                                React.DOM.dd(
                                    null,
                                    "R&D", React.DOM.br(),
                                    "Sales, General & Administrative"
                                )
                            )
                        ),
                        React.DOM.dl(
                            null,
                            React.DOM.dt(null, "Plus ", "Other Income"),
                            React.DOM.dd(
                                null,
                                "Foreign Exchange Gains", React.DOM.br(),
                                "Asset write-downs"
                            ),
                            React.DOM.dt(
                                null,
                                "Less ", "Other Expenses"),
                            React.DOM.dd(
                                null,
                                "Interest on debt", React.DOM.br(),
                                "Depreciation"
                            )
                        )
                    )
                ),
                React.DOM.div(//Balance Sheet
                    highlight(this.props.current === 'balance'),
                    React.DOM.h4(null, "Balance Sheet"),
                    React.DOM.div(
                        null,
                        React.DOM.h5(null, "Net Assets"),
                        React.DOM.div(
                            null,
                            React.DOM.h5(highlight(this.props.current === 'assets'), "Total Assets"),
                            React.DOM.dl(
                                highlight(null, this.props.current === 'assets'),
                                React.DOM.dt(null, "Current Assets"),
                                React.DOM.dd(
                                    null,
                                    "Cash & Bank Accounts", React.DOM.br(),
                                    "Accounts Receivable", React.DOM.br(),
                                    "Deferred Tax Assets"
                                ),
                                React.DOM.dt(null, "Plus ", "Non-current Assets"),
                                React.DOM.dd(
                                    null,
                                    "Land & buildings", React.DOM.br(),
                                    "Intangible Assets"
                                )
                            )
                        ),
                        React.DOM.dl(
                            highlight(this.props.current === 'liabilities'),
                            React.DOM.dt(null, "Less ", "Current Liabilities"),
                            React.DOM.dd(
                                null,
                                "Accounts Payable", React.DOM.br(),
                                "Deferred Revenue", React.DOM.br(),
                                "Deferred Tax Liabilities"),
                            React.DOM.dt(null, "Less ", "Non-current liabilities"),
                            React.DOM.dd(
                                null,
                                "Long-term loans")
                        )
                    ),
                    React.DOM.div(
                        highlight(null, this.props.current === 'equity'),
                        React.DOM.h5(highlight(this.props.current === 'equity'), "Total Equity"),
                        React.DOM.dl(
                            null,
                            React.DOM.dt(null, "Equity"),
                            React.DOM.dd(
                                null,
                                "Common Stock"
                            ),
                            React.DOM.dt(
                                highlight(this.props.current === 'retained'),
                                "Plus ", "Retained Earnings"
                            )
                        )
                    )
                )
            );
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        var target = document.querySelector('.accounts-table');
        if (!target) { return; }
        function render(current) {
            React.render(
                React.createElement(AccountsTable, { current: current }),
                target);
        }

        var list = document.querySelectorAll('.intro-list p');
        Array.prototype.forEach.call(list, function (node) {
            node.addEventListener('mouseover', function (e) {
                if (!e.currentTarget.contains(e.target)) { return; }

                e.currentTarget.classList.add('secondary');
                render(e.currentTarget.className.split(/\s+/).reduce(function (acc, cls) {
                    if (acc) { return acc; }
                    var m = /^intro-(.*)$/.exec(cls);
                    return m && m[1];
                }, null));
            });
            node.addEventListener('mouseout', function (e) {
                // mouseout always precedes mousenter even when going into a
                // child element. Since re-render should be pretty fast (just
                // setting or unsetting a pair of classes) don't try to avoid
                // any thrashing, things should be fast enough either way. If
                // they're not, batch operations on requestAnimationFrame
                // instead.
                e.currentTarget.classList.remove('secondary');
                render(null);
            });
        });

        render(null);
    });
})();
