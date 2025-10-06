/* global Immutable, React */
/* global createAtom, findAncestor */
(function () {
    'use strict';
    // NOTE: used by valuation cheat_sheet.rst

    const mode = createAtom(['continental', 'periodic']);
    const data = createAtom(Immutable.Map());

    // for (const a of ['continental', 'anglo_saxon'])
    // {
    //     for (const b of ['periodic', 'perpetual'])
    //     {
    //         for (const c of ['closing', 'unreceived', 'unissued', 'prepaid', 'deferred'])
    //         {
    //             console.log(`${c} for ${a} ${b}`);
    //             const foo = VALUATION_ENTRIES.reduce((acc, entry) => acc.concat(entry.getIn([a, b, c], [])), Immutable.List()).toJS();
    //             const bar = VALUATION_REVIEWS.getIn([c, a, b, 'operations'], Immutable.List()).toJS();
    //             console.log({operations: foo});
    //             console.log({operations: bar});
    //             console.log(Immutable.fromJS(foo).equals(Immutable.fromJS(bar)));
    //             console.log('\n');
    //         }
    //     }
    // }

    function watch (next) {
        React.render(
            React.createElement(Controls, { entry: next }),
            document.getElementById('journaling-entries-controls'));
        React.render(
            React.createElement(FormatEntry, { entry: next }),
            document.querySelector('.journal-entries'));
    }

    data.addWatch('chart', function (k, m, prev, next) {
        watch(next.getIn(mode.deref()));
    });
    mode.addWatch('chart', function (k, m, prev, next) {
        watch(data.deref().getIn(next, Immutable.Map()));
    });

    document.addEventListener('DOMContentLoaded', function () {
        const entries_section = findAncestor(document.querySelector('.journal-entries'), 'section');
        if (!entries_section) { return; }

        const controls = document.createElement('div');
        controls.setAttribute('id', 'journaling-entries-controls');
        entries_section.insertBefore(controls, entries_section.lastElementChild);

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
                                const new_value = item.get('name');
                                mode.reset([new_value, new_value === 'continental' ? 'periodic' : 'perpetual']);
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
                            onChange: function (e) {
                                mode.swap((vals) => [vals[0], item.get('name')]);
                            }
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
                            onChange: function (e) {
                                data.reset(item);
                            }
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
                            onChange: function (e) {
                                data.reset(item);
                            }
                        }),
                        ' ',
                        item.get('title')
                    );
                })
            );
        }
    });
    const FormatEntry = React.createClass({
        render: function () {
            const entry = this.props.entry;
            if (!entry)
                return null;
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
                        entry.get('operations', []).map(this.render_row)
                    )
                ),
                React.createElement(Listing, {
                    heading: "Explanation",
                    items: entry.get('explanation'),
                }),
                React.createElement(Listing, {
                    heading: "Configuration",
                    items: entry.get('configuration'),
                })
            );
        },
        render_row: function (entry, index) {
            if (!entry) {
                return React.DOM.tr(
                    { key: 'spacer-' + index },
                    React.DOM.td({ colSpan: 3 }, "\u00A0")
                );
            }
            const journal_entry = VALUATION_JOURNALS.getIn(entry.get('account').unshift(mode.deref()[0]));
            const title = journal_entry.get('title');
            const code = journal_entry.get('code', '');
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
            const items = this.props.items;//, epilog = Immutable.List();
            const idx = items.indexOf(null);
            if (idx !== -1) {
                // epilog = items.slice(idx + 1);
                console.log(items.slice(idx + 1).deref());
                items = items.take(idx);
            }
            return React.DOM.div(
                { className: 'entries-listing' },
                React.DOM.h4(null, this.props.heading, ':'),
                // React.DOM.ul(
                //     null,
                items.map(function (item, index) {
                    return React.DOM.p({ key: index }, item);
                })
                // ),
                // epilog.map(function (item, index) {
                //     return React.DOM.p({ key: index }, item);
                // })
            );
        }
    });
}());
