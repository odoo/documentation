/* global Immutable, React */
/* global createAtom */
/* global VALUATION_{STANDARDS,METHODS,JOURNALS,ENTRIES,REVIEWS} */
(function () {
    'use strict';
    // NOTE: used by valuation cheat_sheet.rst

    const mode = createAtom(['continental', 'periodic']);
    const data = createAtom();

    function watch (next) {
        React.render(
            React.createElement(Controls, { p: next }),
            document.getElementById('accounting-entries-controls'));
        React.render(
            React.createElement(Chart, { p: next }),
            document.querySelector('.accounting-entries'));
    }

    data.addWatch('chart', (k, m, prev, next) => watch(next));
    mode.addWatch('chart', (k, m, prev, next) => watch(data.deref()));

    document.addEventListener('DOMContentLoaded', function () {
        const chart = document.querySelector('.accounting-entries');
        if (!chart) { return; }

        const controls = document.createElement('div');
        controls.setAttribute('id', 'accounting-entries-controls');
        chart.parentNode.insertBefore(controls, chart);

        data.reset(Immutable.Map({
            // last-selected operation
            active: null,
            // set of all currently enabled operations
            operations: Immutable.OrderedSet()
        }));
    });

    function toKey(s, postfix) {
        if (postfix) {
            s += ' ' + postfix;
        }
        return s.replace(/[^0-9a-z ]/gi, '').toLowerCase().split(/\s+/).join('-');
    }

    const Controls = React.createClass({
        render: function () {
            const state = this.props.p;
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
                VALUATION_ENTRIES.map(function (item, key) {
                    return React.DOM.label(
                        {
                            key: key,
                            style: { display: 'block' },
                            className: (key === state.get('active') ? 'highlight-op' : void 0)
                        },
                        React.DOM.input({
                            type: 'checkbox',
                            checked: state.get('operations').contains(key),
                            onChange: function (e) {
                                if (e.target.checked) {
                                    data.swap(d => d.set('active', key)
                                              .update('operations', ops => ops.add(key)));
                                } else {
                                    data.swap(d => d.set('active', null)
                                              .update('operations', ops => ops.remove(key)));
                                }
                            }
                        }),
                        ' ',
                        item.get('title')
                    );
                }),
                React.DOM.br(),
                'Review',
                VALUATION_REVIEWS.map(function (item, key) {
                    // We bold the text if any of the operations in this review is
                    // relevant to the currently selected operations.
                    const boldable = item.getIn([...mode.deref(), 'operations'])
                          .some(function (op) {
                              if (!op.has('entries') && !op.has('except'))
                                  return true;
                              const opset = state.get('operations').toSet();
                              if (opset.isSuperset(op.get('entries', []))
                                  && opset.intersect(op.get('except', [])).isEmpty())
                                  return true;
                          });
                    return React.DOM.label(
                        {
                            key: key,
                            style: { display: 'block' },
                            className: (key === state.get('active') ? 'highlight-op' : void 0)
                        },
                        React.DOM.input({
                            type: 'checkbox',
                            checked: state.get('operations').contains(key),
                            onChange: function (e) {
                                if (e.target.checked) {
                                    data.swap(d => d.set('active', key)
                                              .update('operations', ops => ops.add(key)));
                                } else {
                                    data.swap(d => d.set('active', null)
                                              .update('operations', ops => ops.remove(key)));
                                }
                            }
                        }),
                        ' ',
                        boldable ? React.DOM.b(null, item.get('title')) : item.get('title'),
                    );
                }),
                React.DOM.br(),
            );
        }
    });

    const Chart = React.createClass({
        render: function () {
            // Only used for highlighting cells.
            const lastop = Immutable.Map(
                this.props.p.get('active')
                    ? (VALUATION_ENTRIES.concat(VALUATION_REVIEWS)
                       .getIn([this.props.p.get('active'), ...mode.deref(), 'operations'], Immutable.List()))
                    .map(op => [VALUATION_JOURNALS.getIn([mode.deref()[0], ...op.get('account'), 'code']),
                                op.has('credit') ? 'credit' : 'debit'])
                    : Immutable.Map());
            return React.DOM.div(
                null,
                React.DOM.table(
                    { className: 'table table-condensed' },
                    React.DOM.thead(
                        null,
                        React.DOM.tr(
                            null,
                            React.DOM.th(),
                            React.DOM.th({ className: 'text-right' }, "Debit"),
                            React.DOM.th({ className: 'text-right' }, "Credit"),
                            React.DOM.th({ className: 'text-right' }, "Balance"))
                    ),
                    React.DOM.tbody(
                        null,
                        this.accounts().map(function (data) {
                            // Don't highlight the cell if it's going to be empty.
                            const highlight = lastop.get(data.get('code')),
                                  debit = format(data.get('debit')),
                                  credit = format(data.get('credit'));
                            return React.DOM.tr(
                                {
                                    key: data.get('code'),
                                    className: data.get('level') ? 'parent-line' : 'child-line',
                                },
                                React.DOM.th(
                                    null,
                                    data.get('level') ? '\u2001 ' : '',
                                    data.get('code') || '', ' ', data.get('title')
                                ),
                                React.DOM.td(
                                    { className: React.addons.classSet({
                                        'text-right': true,
                                        'highlight-op': debit ? highlight === 'debit' : void 0 }) },
                                    debit),
                                React.DOM.td(
                                    { className: React.addons.classSet({
                                        'text-right': true,
                                        'highlight-op': credit ? highlight === 'credit' : void 0 }) },
                                    credit),
                                React.DOM.td(
                                    { className: 'text-right' },
                                    ((data.get('debit') || data.get('credit'))
                                     ? format(data.get('debit') - data.get('credit'), 0)
                                     : ''),
                                )
                            );
                        })
                    )
                )
            );
        },
        accounts: function() {
            const currentOperations = this.props.p.get('operations');
            if (!currentOperations)
                return null;
            const totals = VALUATION_ENTRIES.concat(VALUATION_REVIEWS)
                  .filter((val, key) => currentOperations.includes(key))
                  .valueSeq()
                  .flatMap(entry => entry.getIn([...mode.deref(), 'operations']))
                  .reduce(function (acc, op) {
                      // `entries' and `except' fields are explained in valuation-data.js (quod vide)
                      if (op.has('entries') || op.has('except')) {
                          const opset = currentOperations.toSet();
                          if (!(opset.isSuperset(op.get('entries', []))
                                && opset.intersect(op.get('except', [])).isEmpty())) {
                              return acc;
                          }
                      }
                      const code = VALUATION_JOURNALS.getIn([mode.deref()[0], ...op.get('account'), 'code']);
                      return acc
                          .updateIn([code, 'debit'],
                                    d => (d || 0) + op.get('debit', 0))
                          .updateIn([code, 'credit'],
                                    c => (c || 0) + op.get('credit', 0));
                  }, Immutable.Map());
            return accounts.get(mode.deref()[0]).map(account =>
                account.merge(account.get('accounts')
                              .map(code => totals.get(code, NULL))
                              .reduce((acc, it) => acc.mergeWith((a, b) => a + b, it, NULL))));
        }
    });

    const NULL = Immutable.Map({ debit: 0, credit: 0 });
    const accounts = VALUATION_JOURNALS.map(method => method.toList().flatMap(function (cat) {
        return Immutable.Seq.of(cat.set('level', 0)).concat(cat.filter(function (v, k) {
            return k.toUpperCase() === k;
        }).toIndexedSeq().map(function (acc) { return acc.set('level', 1) }));
    }).map(function (account) { // add accounts: Seq<AccountCode> to each account
        return account.set(
            'accounts',
            Immutable.Seq.of(account.get('code')).concat(
                account.toIndexedSeq().map(function (val) {
                    return Immutable.Map.isMap(val) && val.get('code');
                }).filter(function (val) { return !!val; })
            )
        );
    }));
    function format(val, def) {
        if (!val) { return def === undefined ? '' : def; }
        if (val % 1 === 0) { return val; }
        return val.toFixed(2);
    }
})();
