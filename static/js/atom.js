function findAncestor(element, name) {
    name = name.toUpperCase();
    while(element && element.nodeName.toUpperCase() !== name) {
        element = element.parentElement;
    };
    return element;
}

function createAtom(val, options) {
    var watchers = {};
    var validator = options && options.validator || function () { return true; };

    function transition(next) {
        if (!validator(next)) {
            var err = new Error(next + " failed validation");
            err.name = "AssertionError";
            throw err;
        }

        var prev = val;
        val = next;

        Object.keys(watchers).forEach(function (k) {
            watchers[k](k, atom, prev, next);
        });
    }

    var atom = {
        addWatch: function (key, fn) {
            watchers[key] = fn;
        },

        removeWatch: function (key) {
            delete watchers[key];
        },

        swap: function (fn) {
            var args = [val].concat([].slice.call(arguments, 1));
            transition(fn.apply(null, args));
        },

        reset: function (v) {
            transition(v);
        },

        deref: function () {
            return val;
        },

        toString: function () {
            return "Atom(" + JSON.stringify(val) + ")";
        }
    };

    return atom;
}
