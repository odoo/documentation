====
HOOT
====

Overview
========

:abbr:`HOOT (Hierarchically Organized Odoo Tests)` is a testing framework written with Owl whose
key features are:

- to register and run tests and test suites;
- to display an intuitive interface to view and filter test results;
- to provide ways to interact with the DOM to simulate user actions;
- to provide low-level helpers allowing to mock various global objects.

As such, it has been integrated as a :file:`lib/` in the Odoo codebase and exports 3 main modules:

- :file:`@odoo/hoot`: main building blocks of the framwork, such as:

    - `test`, `describe` and `expect`
    - test hooks like `after` and `afterEach`
    - fixture handling with `getFixture`

- :file:`@odoo/hoot-mock`: helpers to mock default behaviours and objects, such as:

    - date and time handling like `mockDate` or `advanceTime`
    - mocking network responses through `mockFetch` or `mockWebSocket`

- :file:`@odoo/hoot-dom`: helpers to:

    - **interact** with the DOM, such as `click` and `press`;
    - **query** elements from the DOM, such as `queryAll` and `waitFor`;


Running tests
=============

To setup the test runner is quite straightforward: you just need to have all the lib files loaded
in the assets bundle along with Owl, and then call the main `start` method entrypoint once all
tests and suites have been registered. The tests will then be run sequentially and the results
will be displayed in the **console** and in the **GUI** (if not running in `headless` mode).


Runner options
--------------

The runner can be configured either:

- through the interface (with the configuration dropdown and the search bar);
- or through the URL query parameters (e.g. `?headless` to run in headless mode).

Here is the list of available options for the runner:

- `bail`
    Amount of failed tests after which the test runner will be stopped. A falsy value
    (including 0) means that the runner should never be aborted. (default: `0`)

- `debugTest`
    Same as the `FILTER_SCHEMA.test` filter, while also putting the test runner in
    "debug" mode. See `TestRunner.debug` for more info. (default: `false`)

- `fps`
    Sets the value of frames per seconds (this will be transformed to milliseconds and used in
    `advanceFrame`)

- `filter`
    Search string that will filter matching tests/suites, based on their full name (including
    their parent suite(s)) and their tags. (default: `""`)

- `frameRate`
    *Estimated* amount of frames rendered per second, used when mocking animation frames. (default:
    `60` fps)

- `fun`
    Lightens the mood. (default: `false`)

- `headless`
    Whether to render the test runner user interface. (default: `false`)

- `loglevel`
    Log level used by the test runner. The higher the level, the more logs will be displayed.
    (default: `0` - only runner logs are displayed)

- `manual`
    Whether the test runner must be manually started after page load (defaults to starting
    automatically). (default: `false`)

- `notrycatch`
    Removes the safety of `try .. catch` statements around each test's run function to let errors
    bubble to the browser. (default: `false`)

- `order`
    Determines the order of the tests execution:

        - `"fifo"`: tests will be run sequentially as declared in the file system;
        - `"lifo"`: tests will be run sequentially in the reverse order;
        - `"random"`: shuffles tests and suites within their parent suite.

- `preset`
    Environment in which the test runner is running. This parameter is used to
    determine the default value of other parameters, namely:

        - the user agent;
        - touch support;
        - size of the viewport.

- `showdetail`
    Determines how the failed tests must be unfolded in the UI. (default: `"first-fail"`)

- `suite`
    IDs of the suites to run exclusively. The ID of a suite is generated deterministically based
    on its full name. (default: emtpy)

- `tag`
    Tag names of tests and suites to run exclusively (case insensitive). (default: empty)

- `test`
    IDs of the tests to run exclusively. The ID of a test is generated deterministically based on
    its full name. (default: empty)

- `timeout`
    Duration (in milliseconds) at the end of which a test will automatically fail. (default: `5`
    seconds)

.. note::
    When selecting tests and suites to run, an implicit `OR` is applied between the *including*
    filters. This means that adding more inclusive filters will result in more tests being run.
    This applies to the `filter`, `suite`, `tag` and `test` filters (*excluding* filters however
    will remove matching tests from the list of tests to run).


Writing tests
=============

Test
----

Writing a test can be very straightforward, as it is just a matter of calling the `test` function
with a **name** and a **function** that will contain the test logic.

Here is a simple example:

.. code-block:: javascript

    import { expect, test } from "@odoo/hoot";

    test("My first test", () => {
        expect(2 + 2).toBe(4);
    });


Describe
--------

Now sadly of course, most of the time, tests are not that simple. They often require some setup
and teardown, and sometimes they need to be grouped together in a suite. This is where the
`describe` function comes into play.

Here is how you would declare a suite and a test within it:

.. code-block:: javascript

    import { describe, expect, test } from "@odoo/hoot";

    describe("My first suite", () => {
        test("My first test", () => {
            expect(2 + 2).toBe(4);
        });
    });

.. important::
    In Odoo, all test files are run in an isolated environment and are wrapped within a global
    `describe` block (with the name of the suite being the *path* of the test file).

    With that in
    mind you should not need to declare a suite in your test files, although you can still declare
    sub-suites in the same file if your suites grow too big and you want to split them.


Expect
======

The `expect` function is the main assertion function of the framework. It is used to assert that
a value or an object is what it is expected to be or in the state it supposed to be. To do so, it
provides a few **modifiers** and a wide range of **matchers**.


Modifiers
---------

An `expect` modifier is a getter that returns another set of *altered* matchers that will behave in
a specific way.

- `not`
    Negates the result of the following matcher.

    .. code-block:: javascript

        expect(true).not.toBe(false);

- `resolves`
    Waits for the value to be resolved (i.e. to be a promise) before running the following matcher
    with the resolved value.

    .. code-block:: javascript

        await expect(Promise.resolve(42)).resolves.toBe(42);

- `rejects`
    Waits for the value to be rejected (i.e. to be a promise) before running the following matcher
    with the rejected reason.

    .. code-block:: javascript

        await expect(Promise.reject("error")).rejects.toBe("error");

.. note::
    The `resolves` and `rejects` modifiers are only available when the value is a promise, and will
    return a promise that will resolve once the assertion is done.


Regular matchers
----------------

The matchers dictate what to do on the value being tested. Some will take that value as-is, while
others will *tranform* that value before performing the assertion on it (e.g. `node` matchers).

The first list of matchers are primitive or object based and are the most common ones:

#. `toBe`

    Expects the received value to be *strictly* equal to the `expected` value.

    - Parameters

        * `expected`: `any`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect("foo").toBe("foo");
            expect({ foo: 1 }).not.toBe({ foo: 1 });

#. `toBeCloseTo`

    Expects the received value to be close to the `expected` value up to a given
    amount of digits (default is 2).

    - Parameters

        * `expected`: `any`
        * `options`: `ExpectOptions & { digits?: number }`

    - Examples

        .. code-block:: javascript

            expect(0.2 + 0.1).toBeCloseTo(0.3);
            expect(3.51).toBeCloseTo(3.5, { digits: 1 });

#. `toBeEmpty`

    Expects the received value to be empty:

        - `iterable`: no items
        - `object`: no keys
        - `node`: no content (i.e. no value or text)
        - anything else: falsy value (`false`, `0`, `""`, `null`, `undefined`)

    - Parameters

        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect({}).toBeEmpty();
            expect(["a", "b"]).not.toBeEmpty();
            expect(queryOne("input")).toBeEmpty();

#. `toBeGreaterThan`

    Expects the received value to be strictly greater than `min`.

    - Parameters

        * `min`: `number`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect(5).toBeGreaterThan(-1);
            expect(4 + 2).toBeGreaterThan(5);

#. `toBeInstanceOf`

    Expects the received value to be an instance of the given `cls`.

    - Parameters

        * `cls`: `Function`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect({ foo: 1 }).not.toBeInstanceOf(Object);
            expect(document.createElement("div")).toBeInstanceOf(HTMLElement);

#. `toBeLessThan`

    Expects the received value to be strictly less than `max`.

    - Parameters

        * `max`: `number`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect(5).toBeLessThan(10);
            expect(8 - 6).toBeLessThan(3);

#. `toBeOfType`

    Expects the received value to be of the given `type`.

    - Parameters

        * `type`: `string`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect("foo").toBeOfType("string");
            expect({ foo: 1 }).toBeOfType("object");

#. `toBeWithin`

    Expects the received value to be strictly between `min` and `max` (both inclusive).

    - Parameters

        * `min`: `number`
        * `max`: `number`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect(3).toBeWithin(3, 9);
            expect(-8.5).toBeWithin(-20, 0);
            expect(100).toBeWithin(50, 100);

#. `toEqual`

    Expects the received value to be *deeply* equal to the `expected` value.

    - Parameters

        * `expected`: `any`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect(["foo"]).toEqual(["foo"]);
            expect({ foo: 1 }).toEqual({ foo: 1 });

#. `toHaveLength`

    Expects the received value to have a length of the given `length`.
    Received value can be a string, an iterable or an object.

    - Parameters

        * `length`: `number`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect("foo").toHaveLength(3);
            expect([1, 2, 3]).toHaveLength(3);
            expect({ foo: 1, bar: 2 }).toHaveLength(2);
            expect(new Set([1, 2])).toHaveLength(2);

#. `toInclude`

    Expects the received value to include an `item` of a given shape.

    Received value can be an iterable or an object (in case it is an object,
    the `item` should be a key or a tuple representing an entry in that object).

    Note that it is NOT a strict comparison: the item will be matched for deep
    equality against each item of the iterable.

    - Parameters

        * `item`: `any`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect([1, 2, 3]).toInclude(2);
            expect({ foo: 1, bar: 2 }).toInclude("foo");
            expect({ foo: 1, bar: 2 }).toInclude(["foo", 1]);
            expect(new Set([{ foo: 1 }, { bar: 2 }])).toInclude({ bar: 2 });

#. `toMatch`

    Expects the received value to match the given `matcher`.

    - Parameters

        * `matcher`: `string | number | RegExp`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect(new Error("foo")).toMatch("foo");
            expect("a foo value").toMatch(/fo.*ue/);

#. `toThrow`

    Expects the received `Function` to throw an error after being called.

    - Parameters

        * `matcher`: `string | number | RegExp`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect(() => { throw new Error("Woops!") }).toThrow(/woops/i);
            await expect(Promise.reject("foo")).rejects.toThrow("foo");


DOM matchers
------------

This next list of matchers are node-based and are used to assert the state of a node or a list of
nodes. They generally take a `selector` as the argument of the `expect` function (although a `Node`
or a list of `Node` is also accepted).

#. `toBeChecked`

    Expects the received `Target` to be checked, or to be indeterminate
    if the homonymous option is set to `true`.

    - Parameters

        * `options`: `ExpectOptions & { indeterminate?: boolean }`

    - Examples

        .. code-block:: javascript

            expect("input[type=checkbox]").toBeChecked();

#. `toBeDisplayed`

    Expects the received `Target` to be displayed, meaning that:

        - it has a bounding box;
        - it is contained in the root document.

    - Parameters

        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect(document.body).toBeDisplayed();
            expect(document.createElement("div")).not.toBeDisplayed();

#. `toBeEnabled`

    Expects the received `Target` to be enabled, meaning that it
    matches the `:enabled` pseudo-selector.

    - Parameters

        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect("button").toBeEnabled();
            expect("input[type=radio]").not.toBeEnabled();

#. `toBeFocused`

    Expects the received `Target` to be focused in its owner document.

    - Parameters

        * `options`: `ExpectOptions`

#. `toBeVisible`

    Expects the received `Target` to be visible, meaning that:

        - it has a bounding box;
        - it is contained in the root document;
        - it is not hidden by CSS properties.

    - Parameters

        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect(document.body).toBeVisible();
            expect("[style='opacity: 0']").not.toBeVisible();

#. `toHaveAttribute`

    Expects the received `Target` to have the given attribute set on
    itself, and for that attribute value to match the given `value` if any.

    - Parameters

        * `attribute`: `string`
        * `value`: `string | number | RegExp`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect("a").toHaveAttribute("href");
            expect("script").toHaveAttribute("src", "./index.js");

#. `toHaveClass`

    Expects the received `Target` to have the given class name(s).

    - Parameters

        * `className`: `string | string[]`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect("button").toHaveClass("btn btn-primary");
            expect("body").toHaveClass(["o_webclient", "o_dark"]);

#. `toHaveCount`

    Expects the received `Target` to contain exactly `amount` element(s).
    Note that the `amount` parameter can be omitted, in which case the function
    will expect *at least* one element.

    - Parameters

        * `amount`: `number`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect(".o_webclient").toHaveCount(1);
            expect(".o_form_view .o_field_widget").toHaveCount();
            expect("ul > li").toHaveCount(4);

#. `toHaveInnerHTML`

    Expects the `innerHTML` of the received `Target` to match the `expected`
    value (upon formatting).

    - Parameters

        * `expected`: `string | RegExp`
        * `options`: `ExpectOptions & FormatXmlOptions`

    - Examples

        .. code-block:: javascript

            expect(".my_element").toHaveInnerHTML(`
                Some <strong>text</strong>
            `);

#. `toHaveOuterHTML`

    Expects the `outerHTML` of the received `Target` to match the `expected`
    value (upon formatting).

    - Parameters

        * `expected`: `string | RegExp`
        * `options`: `ExpectOptions & FormatXmlOptions`

    - Examples

        .. code-block:: javascript

            expect(".my_element").toHaveOuterHTML(`
                <div class="my_element">
                    Some <strong>text</strong>
                </div>
            `);

#. `toHaveProperty`

    Expects the received `Target` to have its given property value match
    the given `value`.

    - Parameters

        * `property`: `string`
        * `value`: `any`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect("button").toHaveProperty("tabIndex", 0);
            expect("script").toHaveProperty("src", "./index.js");

#. `toHaveRect`

    Expects the `DOMRect` of the received `Target` to match the given `rect` object.
    The `rect` object can either be:

        - a `DOMRect` object;
        - a CSS selector string (to get the rect of the *only* matching element);
        - a node.

    If the resulting `rect` value is a node, then both nodes' rects will be compared.

    - Parameters

        * `rect`: `Partial<DOMRect> | Target`
        * `options`: `ExpectOptions & QueryRectOptions`

    - Examples

        .. code-block:: javascript

            expect("button").toHaveRect({ x: 20, width: 100, height: 50 });
            expect("button").toHaveRect(".container");

#. `toHaveStyle`

    Expects the received `Target` to match the given style properties.

    - Parameters

        * `style`: `string | Record<string, string | RegExp>`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect("button").toHaveStyle({ color: "red" });
            expect("p").toHaveStyle("text-align: center");

#. `toHaveText`

    Expects the text content of the received `Target` to either:

        - be strictly equal to a given string;
        - match a given regular expression.

    - Parameters

        * `text`: `string | RegExp`
        * `options`: `ExpectOptions & QueryTextOptions`

    - Examples

        .. code-block:: javascript

            expect("p").toHaveText("lorem ipsum dolor sit amet");
            expect("header h1").toHaveText(/odoo/i);

#. `toHaveValue`

    Expects the value of the received `Target` to either:

        - be strictly equal to a given string or number;
        - match a given regular expression;
        - contain file objects matching the given `files` list.

    - Parameters

        * `value`: `any`
        * `options`: `ExpectOptions`

    - Examples

        .. code-block:: javascript

            expect("input[type=email]").toHaveValue("john@doe.com");
            expect("input[type=file]").toHaveValue(new File(["foo"], "foo.txt"));
            expect("select[multiple]").toHaveValue(["foo", "bar"]);


Helpers
=======

This section covers the list of available helpers in the framework, which are split into 3 main
categories:

- **DOM** helpers: to query elements and their state;
- **Event** helpers: to simulate user actions and events;
- **Mock** helpers: to mock various global objects and behaviours.


DOM helpers
-----------

.. js:function:: getActiveElement([node])

    Returns the currently focused element in the document.

    :param node: default: current fixture
    :returns: the currently focused element

.. js:function:: getFocusableElements([node])

    Returns the list of focusable elements in the given parent, sorted by their `tabIndex`
    property.

    :param parent: default: current fixture
    :returns: the list of focusable elements

.. js:function:: getNextFocusableElement([node])

    Returns the next focusable element after the current active element if it is contained in the
    given parent.

    :param node: default: current fixture
    :returns: the next focusable element

.. js:function:: getPreviousFocusableElement([node])

    Returns the previous focusable element before the current active element if it is contained in
    the given parent.

    :param node: default: current fixture
    :returns: the previous focusable element

.. js:function:: getRect(node[, options])

    Returns the bounding `DOMRect` of a given node (or an empty one if none is given).
    This helper is a bit different than the native `Element.getBoundingClientRect`:

    - rects take their positions relative to the top window element (instead of their
      parent `<iframe>` if any);
    - they can be trimmed to remove padding with the `trimPadding` option.

    :param node:
    :param options:
    :returns: the bounding `DOMRect` of the given node

.. js:function:: isDisplayed(node)

    Checks whether a target is displayed, meaning that it has an offset parent and is contained in
    the current document.

    Note that it does not mean that the target is "visible" (it can still be hidden by CSS
    properties such as `width`, `opacity`, `visiblity`, etc.).

    :param node:
    :returns: whether the target is displayed

.. js:function:: isEditable(node)

    Returns whether the given node is editable, meaning that it is an `:enabled` `<input>` or
    `<textarea>` `Element`.

    :param node:
    :returns: whether the target is editable

.. js:function:: isEventTarget(node)

    Returns whether the given target is an `EventTarget`.

    :param node:
    :returns: whether the target is an event target

.. js:function:: isFocusable(node)

    Returns whether an element is focusable. Focusable elements are either:

    - `<a>` or `<area>` elements with an `href` attribute;
    - *enabled* `<button>`, `<input>`, `<select>` and `<textarea>` elements;
    - `<iframe>` elements;
    - any element with its `contenteditable` attribute set to `"true"`.

    A focusable element must also not have a `tabIndex` property set to less than 0.

    :param node:
    :returns: whether the target is focusable

.. js:function:: isInDOM(target)

    Returns whether the given target is contained in the current root document.

    :param target:
    :returns: whether the target is in the DOM

.. js:function:: isVisible(target)

    Checks whether an target is visible, meaning that it is "displayed" (see `isDisplayed`), has a
    non-zero width and height, and is not hidden by "opacity" or "visibility" CSS properties.

    Note that it does not account for:

    - the position of the target in the viewport (e.g. negative x/y coordinates)
    - the color of the target (e.g. transparent text with no background).

    :param target:
    :returns: whether the target is visible

.. js:function:: matches(node, selector)

    Returns whether the given node matches the given selector.

    :param node:
    :param selector:
    :returns: whether the node matches the selector

.. js:function:: observe(target, callback)

    Listens for DOM mutations on a given target.

    This helper has 2 main advantages over directly calling the native `MutationObserver`:

        - it ensures a single observer is created for a given target, even if multiple callbacks are
        registered;

        - it keeps track of these observers, which allows to check whether an observer is still running
        while it should not, and to disconnect all running observers at once.

    :param target:
    :param callback:

.. js:function:: queryAll(target[, options])

    Returns a list of nodes matching the given `Target`.
    This function can either be used as a **template literal tag** (only supports string selector
    without options) or invoked the usual way.

    The target can be:

        - a `Node` (or an iterable of nodes), or `Window` object;
        - a `Document` object (which will be converted to its body);
        - a string representing a *custom selector* (which will be queried in the `root` option);

    This function allows all string selectors supported by the native `Element.querySelector` along
    with some additional custom pseudo-classes:

        - `:contains(text)`
            matches nodes whose *content* matches the given *text*

            * given *text* supports regular expression syntax (e.g. `:contains(/^foo.+/)`) and is
              case-insensitive;
            * given *text* will be matched against:

                - an `<input>`, `<textarea>` or `<select>` element's **value**;
                - or any other element's **inner text**.

        - `:displayed`
            matches nodes that are "displayed" (see `isDisplayed`)

        - `:empty`
            matches nodes that have an empty *content* (**value** or **inner text**)

        - `:eq(n)`
            matches the *nth* node (0-based index);

        - `:first`
            matches the first node matching the selector (regardless of its actual DOM siblings)

        - `:focusable`
            matches nodes that can be focused (see `isFocusable`)

        - `:hidden`
            matches nodes that are **not** "visible" (see `isVisible`)

        - `:iframe`
            matches nodes that are `<iframe>` elements, and returns their `body` if it is ready

        - `:last`
            matches the last node matching the selector (regardless of its actual DOM siblings);

        - `:selected`
            matches nodes that are selected (e.g. `<option>` elements)

        - `:shadow`
            matches nodes that have shadow roots, and returns their shadow root

        - `:scrollable`
            matches nodes that are scrollable (see `isScrollable`)

        - `:visible`
            matches nodes that are "visible" (see `isVisible`)

    An `options` object can be specified to filter[1] the results:

        - `displayed`: whether the nodes must be "displayed" (see `isDisplayed`);
        - `exact`: the exact number of nodes to match (throws an error if the number of nodes
            doesn't match);
        - `focusable`: whether the nodes must be "focusable" (see `isFocusable`);
        - `root`: the root node to query the selector in (defaults to the current fixture);
        - `visible`: whether the nodes must be "visible" (see `isVisible`).
            * This option implies `displayed`

    [1] these filters (except for `exact` and `root`) achieve the same result as using their homonym
        pseudo-classes on the final group of the given selector string, e.g.:

        .. code-block:: javascript

            // These 2 will return the same result
            queryAll`ul > li:visible`;
            queryAll("ul > li", { visible: true });

    :param target:
    :param options:
    :returns: a list of nodes

.. js:function:: queryAllAttributes(target, attribute[, options])

    Performs a `queryAll` on the given `target` and returns a list of attribute values.

    :param target:
    :param attribute:
    :param options:
    :returns: a list of attribute values

.. js:function:: queryAllProperties(target, property[, options])

    Performs a `queryAll` on the given `target` and returns a list of property values.

    :param target:
    :param property:
    :param options:
    :returns: a list of property values

.. js:function:: queryAllTexts(target[, options])

    Performs a `queryAll` on the given `target` and returns a list of text contents.

    :param target:
    :param options:
    :returns: a list of text contents

.. js:function:: queryAllValues(target[, options])

    Performs a `queryAll` on the given `target` and returns a list of values.

    :param target:
    :param options:
    :returns: a list of values

.. js:function:: queryAttribute(target, attribute[, options])

    Performs a `queryOne` with the given arguments and returns the value of the given `attribute`
    of the matching node.

    :param target:
    :param attribute:
    :param options:
    :returns: the first attribute value

.. js:function:: queryFirst(target[, options])

    Performs a `queryAll` with the given arguments and returns the first result or `null`.

    :param target:
    :param options:
    :returns: the first matching node

.. js:function:: queryLast(target[, options])

    Performs a `queryAll` with the given arguments and returns the last result or `null`.

    :param target:
    :param options:
    :returns: the last matching node

.. js:function:: queryOne(target[, options])

    Performs a `queryAll` with the given arguments, along with a forced `exact: 1` option to ensure
    only one node matches the given `Target`.

    The returned value is a single node instead of a list of nodes.

    :param target:
    :param options:
    :returns: a single node

.. js:function:: queryText(target[, options])

    Performs a `queryOne` with the given arguments and returns the *text* of the matching node.

    :param target:
    :param options:
    :returns: the text of the matching node

.. js:function:: queryValue(target[, options])

    Performs a `queryOne` with the given arguments and returns the *value* of the matching node.

    :param target:
    :param options:
    :returns: the value of the matching node

.. js:function:: registerPseudoClass(pseudoClass, predicate)

    Registers a custom pseudo-class to be used in `queryAll` and `queryOne` selectors.

    :param pseudoClass:
    :param predicate:

.. js:function:: waitFor(target[, options])

    Combination of `queryAll` and `waitUntil`: waits for a given target to match elements in the DOM
    and returns the first matching node when it appears (or immediatlly if it is already present).

    :param target:
    :param options:
    :returns: a promise of the first matching node

.. js:function:: waitForNone(target[, options])

    Opposite of `waitFor`: waits for a given target to disappear from the DOM.

    :param target:
    :param options:
    :returns: a promise of the number of matching nodes

.. js:function:: waitUntil(predicate[, options])

    Returns a promise fulfilled when the given `predicate` returns a truthy value, with the value of
    the promise being the return value of the `predicate`.

    The `predicate` is run once initially and then each time the DOM is mutated (see `observe` for
    more information).

    The promise automatically rejects after a given `timeout` (defaults to 5 seconds).

    :param predicate:
    :param options:
    :returns: a promise of the return value of the predicate

.. js:function:: watchKeys(target, whiteList)

    Returns a function checking that the given target does not contain any unexpected key. The list
    of accepted keys is the initial list of keys of the target, along with an optional `whiteList`
    argument.

    :param target:
    :param whiteList:
    :returns: a function checking that the target does not contain any unexpected key


Event helpers
-------------

.. js:function:: check()

.. js:function:: clear()

.. js:function:: click()

.. js:function:: dblclick()

.. js:function:: drag()

.. js:function:: edit()

.. js:function:: fill()

.. js:function:: hover()

.. js:function:: keyDown()

.. js:function:: keyUp()

.. js:function:: leave()

.. js:function:: manuallyDispatchProgrammaticEvent()

.. js:function:: on()

.. js:function:: pointerDown()

.. js:function:: pointerUp()

.. js:function:: press()

.. js:function:: resize()

.. js:function:: scroll()

.. js:function:: select()

.. js:function:: setInputFiles()

.. js:function:: uncheck()



Mock helpers
------------

.. js:function:: advanceTime()

.. js:function:: animationFrame()

.. js:function:: cancelAllTimers()

.. js:function:: Deferred()

.. js:function:: delay()

.. js:function:: flushNotifications()

.. js:function:: microTick()

.. js:function:: mockDate()

.. js:function:: mockFetch()

.. js:function:: mockLocation()

.. js:function:: mockPermission()

.. js:function:: mockTimeZone()

.. js:function:: mockWebSocket()

.. js:function:: mockWorker()

.. js:function:: runAllTimers()

.. js:function:: setFrameRate()

.. js:function:: setRandomSeed()

.. js:function:: tick()
