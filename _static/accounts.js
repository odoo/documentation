(function () {
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
                null,
                React.DOM.div(// P&L
                    highlight(this.props.current === 'p-l'),
                    React.DOM.h4(null, "Profit & Loss"),
                    React.DOM.div(
                        null,
                        React.DOM.h5(null, "Net Profit"),
                        React.DOM.div(
                            highlight(null, this.props.current === 'gross-profit'),
                            React.DOM.h5(
                                highlight(this.props.current === 'gross-profit'),
                                "Gross Profit"),
                            React.DOM.dl(
                                null,
                                React.DOM.dt(null, "Income"),
                                React.DOM.dd(
                                    null,
                                    "Revenue",
                                    React.DOM.br(),
                                    "Sales"),
                                React.DOM.dt(null, "Less ", "Cost of Sales"),
                                React.DOM.dd(null, "Direct Costs")
                            )
                        ),
                        React.DOM.dl(
                            null,
                            React.DOM.dt(null, "Plus ", "Other Income"),
                            React.DOM.dd(null, "Other Income"),
                            React.DOM.dt(
                                highlight(this.props.current === 'opex'),
                                "Less ", "Expenses"),
                            React.DOM.dd(
                                highlight(null, this.props.current === 'opex'),
                                "Expenses", React.DOM.br(),
                                "Depreciation", React.DOM.br(),
                                "Overheads", React.DOM.br()
                            )
                        )
                    )
                ),
                React.DOM.div(//Balance Sheet
                    highlight( this.props.current === 'balance'),
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
                                    "Current Assets", React.DOM.br(),
                                    "Prepayments", React.DOM.br()
                                ),
                                React.DOM.dt(null, "Plus ", "Bank"),
                                React.DOM.dd(null, "Bank Accounts"),
                                React.DOM.dt(null, "Plus ", "Fixed Assets"),
                                React.DOM.dd(null, "Fixed Assets"),
                                React.DOM.dt(null, "Plus ", "Non-current Assets"),
                                React.DOM.dd(null, "Non-current Assets")
                            )
                        ),
                        React.DOM.dl(
                            highlight(this.props.current === 'liabilities'),
                            React.DOM.dt(null, "Less ", "Current Liabilities"),
                            React.DOM.dd(null, "Current Liabilities"),
                            React.DOM.dt(null, "Less ", "Non-current liabilities"),
                            React.DOM.dd(null, "Liabilities", React.DOM.br(), "Non-current Liabilities")
                        )
                    ),
                    React.DOM.div(
                        highlight(null, this.props.current === 'equity'),
                        React.DOM.h5(highlight(this.props.current === 'equity'), "Total Equity"),
                        React.DOM.dl(
                            null,
                            React.DOM.dt(null, "Equity"),
                            React.DOM.dd(null, "Equity"),
                            React.DOM.dt(null, "Plus ", "Net Profit")
                        )
                    )
                )
            );
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        var target = document.querySelector('.accounts-table');
        function render(current) {
            React.render(
                React.createElement(AccountsTable, {current: current}),
                target);
        }

        var list = document.querySelectorAll('.intro-list li > p');
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
        })

        render(null);
    });
})();
