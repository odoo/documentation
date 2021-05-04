/* global Immutable, React */
/* global createAtom */
(function () {
    // NOTE: used for double_entry.rst file
    'use strict';

    var data = createAtom();

    function toKey(s, postfix) {
        if (postfix) {
            s += ' ' + postfix;
        }
        return s.replace(/[^0-9a-z ]/gi, '').toLowerCase().split(/\s+/).join('-');
    }
    var Controls = React.createClass({
        render: function () {
            var state = this.props.p;
            return React.DOM.div(null, operations.map(function (op) {
                var label = op.get('label'), operations = op.get('operations');
                return React.DOM.label(
                    {
                        key: toKey(label),
                        style: { display: 'block' },
                        className: (operations === state.get('active') ? 'highlight-op' : void 0)
                    },
                    React.DOM.input({
                        type: 'checkbox',
                        checked: state.get('operations').contains(operations),
                        onChange: function (e) {
                            if (e.target.checked) {
                                data.swap(function (d) {
                                    return d.set('active', operations)
                                        .update('operations', function (ops) {
                                            return ops.add(operations);
                                        });
                                });
                            } else {
                                data.swap(function (d) {
                                    return d.set('active', null)
                                        .update('operations', function (ops) {
                                            return ops.remove(operations);
                                        });
                                });
                            }
                        }
                    }),
                    ' ',
                    label
                );
            }));
        }
    });
    var UNIT_PRICE = 100;
    function format_qty(val) {
        if (val == null) { return ''; }
        if (val < 0) { return val; }
        return '+' + String(val);
    }
    function format_value(val) {
        if (isNaN(val)) { return ''; }
        if (val < 0) { return '-$' + String(Math.abs(val)); }
        return '$' + String(val);
    }
    var Chart = React.createClass({
        render: function () {
            return React.DOM.div(
                null,
                React.DOM.table(
                    { className: 'table table-sm' },
                    React.DOM.thead(
                        null,
                        React.DOM.tr(
                            null,
                            React.DOM.th(null, "Location"),
                            React.DOM.th({ className: 'text-right' }, "Quantity"),
                            React.DOM.th({ className: 'text-right' }, "Value"))
                    ),
                    React.DOM.tbody(
                        null,
                        this.locations().map(function (data) {
                            var highlight = false;
                            return React.DOM.tr(
                                { key: toKey(data.get('label')) },
                                React.DOM.th(null, data.get('level') ? '\u2001' : '', data.get('label')),
                                React.DOM.td({
                                    className: React.addons.classSet({
                                        'text-right': true,
                                        'highlight-op': highlight
                                    })
                                }, format_qty(data.get('qty'))),
                                React.DOM.td({
                                    className: React.addons.classSet({
                                        'text-right': true,
                                        'highlight-op': highlight
                                    })
                                }, format_value(data.get('qty') * UNIT_PRICE))
                            );
                        })
                    )
                )
            );
        },
        locations: function () {
            var data = this.props.p.get('operations');

            // {location: total_qty}
            var totals = data.toIndexedSeq().flatten(true).reduce(function (acc, op) {
                return acc.update(op.get('location'), function (qty) {
                    return (qty || 0) + op.get('qty');
                });
            }, Immutable.Map());

            return locations.valueSeq().flatMap(function (loc) {
                var sub_locations = loc.get('locations').valueSeq().map(function (subloc) {
                    return subloc.set('level', 1).set('qty', totals.get(subloc));
                });

                return Immutable.Seq.of(loc.set('level', 0)).concat(sub_locations);
            });
        }
    });

    data.addWatch('chart', function (k, m, prev, next) {
        React.render(
            React.createElement(Controls, { p: next }),
            document.getElementById('chart-of-locations-controls'));
        React.render(
            React.createElement(Chart, { p: next }),
            document.getElementById('chart-of-locations'));
    });
    document.addEventListener('DOMContentLoaded', function () {
        var chart = document.querySelector('.chart-of-locations');
        if (!chart) { return; }

        chart.setAttribute('id', 'chart-of-locations');
        var controls = document.createElement('div');
        controls.setAttribute('id', 'chart-of-locations-controls');
        chart.parentNode.insertBefore(controls, chart);

        data.reset(Immutable.Map({
            active: null,
            operations: Immutable.OrderedSet()
        }));
    });
    var locations = Immutable.fromJS({
        warehouse: {
            label: "Warehouse",
            locations: {
                zone1: { label: "Zone 1" },
                zone2: { label: "Zone 2" }
            }
        },
        partners: {
            label: "Partner Locations",
            locations: {
                customers: { label: "Customers" },
                suppliers: { label: "Suppliers" }
            }
        },
        virtual: {
            label: "Virtual Locations",
            locations: {
                initial: { label: "Initial Inventory" },
                loss: { label: "Inventory Loss" },
                scrap: { label: "Scrapped" },
                manufacturing: { label: "Manufacturing" }
            }
        }
    }, function (k, v) {
        return Immutable.Iterable.isIndexed(v)
            ? v.toList()
            : v.toOrderedMap();
    });
    var operations = Immutable.fromJS([{
        label: "Initial Inventory",
        operations: [
            { location: locations.getIn(['virtual', 'locations', 'initial']), qty: -3 },
            { location: locations.getIn(['warehouse', 'locations', 'zone1']), qty: +3 }
        ]
    }, {
        label: "Reception",
        operations: [
            { location: locations.getIn(['partners', 'locations', 'suppliers']), qty: -2 },
            { location: locations.getIn(['warehouse', 'locations', 'zone1']), qty: +2 }
        ]
    }, {
        label: "Delivery",
        operations: [
            { location: locations.getIn(['warehouse', 'locations', 'zone1']), qty: -1 },
            { location: locations.getIn(['partners', 'locations', 'customers']), qty: +1 }
        ]
    }, {
        label: "Return",
        operations: [
            { location: locations.getIn(['partners', 'locations', 'customers']), qty: -1 },
            { location: locations.getIn(['warehouse', 'locations', 'zone1']), qty: +1 }
        ]
    }, {
        label: "1 product broken in Zone 1",
        operations: [
            { location: locations.getIn(['warehouse', 'locations', 'zone1']), qty: -1 },
            { location: locations.getIn(['virtual', 'locations', 'scrap']), qty: +1 }
        ]
    }, {
        label: "Inventory check of Zone 1",
        operations: [
            { location: locations.getIn(['warehouse', 'locations', 'zone1']), qty: -1 },
            { location: locations.getIn(['virtual', 'locations', 'loss']), qty: +1 }
        ]
    }, {
        label: "Move from Zone 1 to Zone 2",
        operations: [
            { location: locations.getIn(['warehouse', 'locations', 'zone1']), qty: -1 },
            { location: locations.getIn(['warehouse', 'locations', 'zone2']), qty: +1 }
        ]
    }]);
})();
