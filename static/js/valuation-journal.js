/* global Immutable, React */
/* global createAtom, findAncestor */
/* global VALUATION_{STANDARDS,METHODS,JOURNALS,ENTRIES,REVIEWS} */
(function () {
    'use strict';
    // NOTE: used by valuation cheat_sheet.rst

    const mode = createAtom(['continental', 'periodic']);
    const data = createAtom(Immutable.Map());

    function watch (next) {
        React.render(
            React.createElement(Controls, { entry: next }),
            document.getElementById('journaling-entries-controls'));
        React.render(
            React.createElement(FormatEntry, { entry: next }),
            document.querySelector('.journal-entries'));
    }

    data.addWatch('chart', (k, m, prev, next) => watch(next.getIn(mode.deref())));
    mode.addWatch('chart', (k, m, prev, next) => watch(data.deref().getIn(next, Immutable.Map())));

    document.addEventListener('DOMContentLoaded', function () {
        const entriesSection = findAncestor(document.querySelector('.journal-entries'), 'section');
        if (!entriesSection) { return; }

        const controls = document.createElement('div');
        controls.setAttribute('id', 'journaling-entries-controls');
        entriesSection.insertBefore(controls, entriesSection.lastElementChild);

        data.reset(VALUATION_ENTRIES.first().getIn(['continental', 'periodic']));
    });

    const Controls = React.createClass({
        render: function () {
            const entry = this.props.entry;
            return React.DOM.div(
                null,
                React.DOM.b(null, 'Choose a standard:'),
                VALUATION_STANDARDS.map(function (item, index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'radio',
                            checked: item.get('name') === mode.deref()[0],
                            onChange: function (e) {
                                const newValue = item.get('name');
                                mode.reset([newValue, newValue === 'continental' ? 'periodic' : 'perpetual']);
                            }
                        }),
                        ' ',
                        item.get('text')
                    );
                }),
                React.DOM.br(),
                React.DOM.b(null, 'Choose an accounting method:'),
                VALUATION_METHODS.map(function (item, index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'radio',
                            checked: item.get('name') === mode.deref()[1],
                            onChange: e => mode.swap(vals => [vals[0], item.get('name')]),
                        }),
                        ' ',
                        item.get('text')
                    );
                }),
                React.DOM.br(),
                React.DOM.b(null, 'Activate operations to see the impact:'),
                React.DOM.br(), React.DOM.br(),
                'Operations',
                VALUATION_ENTRIES.map(function (item, index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'radio',
                            checked: item.getIn(mode.deref()) === entry,
                            onChange: e => data.reset(item),
                        }),
                        ' ',
                        item.get('title')
                    );
                }),
                React.DOM.br(),
                'Review',
                VALUATION_REVIEWS.map(function (item, index) {
                    return React.DOM.label(
                        { key: index },
                        React.DOM.input({
                            type: 'radio',
                            checked: item.getIn(mode.deref()) === entry,
                            onChange: e => data.reset(item),
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
            const entry = this.props.entry;
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
            if (!entry) {
                return React.DOM.tr(
                    { key: 'spacer-' + index },
                    React.DOM.td({ colSpan: 3 }, "\u00A0")
                );
            }
            const journalEntry = VALUATION_JOURNALS.getIn([mode.deref()[0], ...entry.get('account')]);
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
                console.log(items.slice(idx + 1).deref());
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
