(function () {
    'use strict';

    const {Component, useState} = owl;
    const {xml} = owl.tags;

    class AccountsTable extends Component {

        constructor() {
            super(...arguments);
            this.state = useState({current: ''});
        }

        mounted() {
            const list = document.querySelectorAll('.intro-list p');
            Array.prototype.forEach.call(list, (node) => {
                node.addEventListener('mouseover', (ev) => {
                    if (!ev.currentTarget.contains(ev.target)) {
                        return;
                    }
                    ev.currentTarget.classList.add('secondary');
                    const target = ev.currentTarget.className.split(/\s+/).reduce((acc, cls) => {
                        if (acc) {
                            return acc;
                        }
                        var m = /^intro-(.*)$/.exec(cls);
                        return m && m[1];
                    }, null);
                    this.state.current = target;
                });
                node.addEventListener('mouseout', (ev) => {
                    ev.currentTarget.classList.remove('secondary');
                    this.state.current = "";
                });
            });
        }

        static template = xml`
            <div style="margin-top:1em;">
                <div t-att-class="state.current === 'p-l' ? 'related' : ''">
                    <h4>Profit &amp; Loss</h4>
                    <div>
                        <h5 t-att-class="state.current === 'retained' ? 'secondary' : ''">Net Profit</h5>
                        <div t-att-class="state.current === 'gross-profit' ? 'secondary' : ''">
                            <h5 t-att-class="state.current === 'gross-profit' ? 'related' : ''">Gross Profit</h5>
                            <dl>
                                <dt>Revenue</dt>
                                <dd>Revenue</dd>
                                <dt><span>Less </span><span>Costs of Revenue</span></dt>
                                <dd>Cost of Goods Sold</dd>
                            </dl>
                        </div>
                        <div t-att-class="state.current === 'opex' ? 'related' : ''">
                            <h5>Operating Income or Loss</h5>
                            <dl>
                                <dt><span>Less </span><span>Operating Expenses</span></dt>
                                <dd><span>R&amp;D</span><br/><span>Sales, General &amp; Administrative</span></dd>
                            </dl>
                        </div>
                        <dl>
                            <dt><span>Plus </span><span>Other Income</span></dt>
                            <dd><span>Foreign Exchange Gains</span><br/><span>Asset write-downs</span></dd>
                            <dt><span>Less </span><span>Other Expenses</span></dt>
                            <dd><span>Interest on debt</span><br/><span>Depreciation</span></dd>
                        </dl>
                    </div>
                </div>
                <div t-att-class="state.current === 'balance' ? 'related' : ''">
                    <h4>Balance Sheet</h4>
                    <div>
                        <h5>Net Assets</h5>
                        <div>
                            <h5 t-att-class="state.current === 'assets' ? 'related' : ''">Total Assets</h5>
                            <dl t-att-class="state.current === 'assets' ? 'secondary' : ''">
                                <dt>Current Assets</dt>
                                <dd><span>Cash &amp; Bank Accounts</span><br/><span>Accounts Receivable</span><br/><span>Deferred Tax Assets</span></dd>
                                <dt><span>Plus </span><span>Non-current Assets</span></dt>
                                <dd><span>Land &amp; buildings</span><br/><span>Intangible Assets</span></dd>
                            </dl>
                        </div>
                        <dl t-att-class="state.current === 'liabilities' ? 'related' : ''">
                            <dt><span>Less </span><span>Current Liabilities</span></dt>
                            <dd><span>Accounts Payable</span><br/><span>Deferred Revenue</span><br/><span>Deferred Tax Liabilities</span></dd>
                            <dt><span>Less </span><span>Non-current liabilities</span></dt>
                            <dd>Long-term loans</dd>
                        </dl>
                    </div>
                    <div t-att-class="state.current === 'equity' ? 'secondary' : ''">
                        <h5 t-att-class="state.current === 'equity' ? 'related' : ''">Total Equity</h5>
                        <dl>
                            <dt>Equity</dt>
                            <dd>Common Stock</dd>
                            <dt t-att-class="state.current === 'retained' ? 'related' : ''"><span>Plus </span><span>Retained Earnings</span></dt>
                        </dl>
                    </div>
                </div>
            </div>`;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const target = document.querySelector('.accounts-table');
        if (!target) { return; }
        const accountsTable = new AccountsTable();
        accountsTable.mount(target);
    });
}());
