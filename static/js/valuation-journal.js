/* global Immutable, React */
/* global createAtom, findAncestor */
/* global VALUATION_{STANDARDS,METHODS,JOURNALS,ENTRIES,REVIEWS} */
(function () {
    'use strict';
    // NOTE: used by valuation cheat_sheet.rst

    const selectedMode = createAtom()
    const selectedOp = createAtom();

    const entries = VALUATION_ENTRIES.concat(VALUATION_REVIEWS);

    function watch (next) {
        React.render(
            React.createElement(Controls, { entryKey: next }),
            document.getElementById('journaling-entries-controls'));
        React.render(
            React.createElement(FormatEntry, { entryKey: next }),
            document.querySelector('.journal-entries'));
    }

    selectedOp.addWatch('chart', (k, m, prev, next) => watch([next, ...selectedMode.deref()]));
    selectedMode.addWatch('chart', (k, m, prev, next) => watch([selectedOp.deref(), ...next]));

    document.addEventListener('DOMContentLoaded', function () {
        const entriesSection = findAncestor(document.querySelector('.journal-entries'), 'section');
        if (!entriesSection) { return; }

        const controls = document.createElement('div');
        controls.setAttribute('id', 'journaling-entries-controls');
        entriesSection.insertBefore(controls, entriesSection.lastElementChild);

        selectedMode.reset(['continental', 'periodic']);
        selectedOp.reset('initial_inventory');
    });

    const Controls = React.createClass({
        render: function () {
            const key = this.props.entryKey;
            return React.DOM.div(
                null,
                React.DOM.b(null, "Choose a standard:"),
                VALUATION_STANDARDS.map(function (item, index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'radio',
                            checked: item.get('name') === key[1],
                            onChange: function (e) {
                                const newValue = item.get('name');
                                selectedMode.reset([newValue, newValue === 'continental' ? 'periodic' : 'perpetual']);
                            }
                        }),
                        ' ',
                        item.get('text')
                    );
                }),
                React.DOM.br(),
                React.DOM.b(null, "Choose an accounting method:"),
                VALUATION_METHODS.map(function (item, index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'radio',
                            checked: item.get('name') === key[2],
                            onChange: e => selectedMode.swap(vals => [vals[0], item.get('name')]),
                        }),
                        ' ',
                        item.get('text')
                    );
                }),
                React.DOM.br(),
                React.DOM.b(null, "Activate operations to see the impact:"),
                VALUATION_ENTRIES.map(function (item, index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'radio',
                            checked: index === key[0],
                            onChange: e => selectedOp.reset(index),
                        }),
                        ' ',
                        item.get('title')
                    );
                }),
                React.DOM.br(),
                "Closing",
                VALUATION_REVIEWS.map(function (item, index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'radio',
                            checked: index === key[0],
                            onChange: e => selectedOp.reset(index),
                        }),
                        ' ',
                        item.get('title')
                    );
                }),
                React.DOM.br(),
            );
        }
    });
    const FormatEntry = React.createClass({
        render: function () {
            const entry = entries.getIn(this.props.entryKey);
            return React.DOM.div(
                null,
                React.DOM.table(
                    { className: 'table table-sm d-c-table' },
                    React.DOM.thead(
                        null,
                        React.DOM.tr(
                            null,
                            React.DOM.th(),
                            React.DOM.th(null, "Debit"),
                            React.DOM.th(null, "Credit"),
                        )
                    ),
                    React.DOM.tbody(
                        null,
                        // Use `journal_operations' if it's a review. See `valuation-data.js'.
                        entry && entry.get('journal_operations', entry.get('operations', [])).map(this.renderRow)
                    )
                ),
                React.createElement(Listing, {
                    heading: "Explanation",
                    items: entry && entry.get('explanation'),
                }),
                React.createElement(Listing, {
                    heading: "Configuration",
                    items: entry && entry.get('configuration'),
                })
            );
        },
        renderRow: function (entry, index) {
            const standard = this.props.entryKey[1];
            if (!entry) {
                return React.DOM.tr(
                    { key: 'spacer-' + index },
                    React.DOM.td({ colSpan: 3 }, "\u00A0")
                );
            }
            const journalEntry = VALUATION_JOURNALS.getIn([standard, ...entry.get('account')]);
            const title = journalEntry.get('title');
            // Don't display 0 for 'General Balance for Inventory Initial Value'
            const code = journalEntry.get('code') || '';
            return React.DOM.tr(
                { key: index },
                React.DOM.td(null, `${code} ${title}`),
                React.DOM.td(null, entry.get('debit')),
                React.DOM.td(null, entry.get('credit'))
            );
        }
    });
    const Listing = React.createClass({
        render: function () {
            if (!this.props.items || this.props.items.isEmpty()) {
                return React.DOM.div();
            }
            const items = this.props.items;
            const idx = items.indexOf(null);
            if (idx !== -1) {
                // console.log(items.slice(idx + 1).deref());
                items = items.take(idx);
            }
            return React.DOM.div(
                { className: 'entries-listing' },
                React.DOM.h4(null, this.props.heading, ':'),
                items.map(function (item, index) {
                    return React.DOM.p({ key: index }, item);
                })
            );
        }
    });
}());
