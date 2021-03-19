/* global _prepareAccordion */ //see utils.js
(function ($) {

    document.addEventListener('DOMContentLoaded', () => {
        this.navigationMenu = document.getElementById('o_main_toctree');

        // Allow to automatically collapse and expand TOC entries
        _prepareAccordion(this.navigationMenu);

        // Allow to respectively highlight and expand the TOC entries and their related TOC
        // entry list whose page is displayed.
        _flagActiveTocEntriesAndLists();

        // Show hidden menu when the css classes have been properly specified
        this.navigationMenu.removeAttribute('hidden');
    });

    /**
     * Add the relevant classes on the TOC entries (and lists) whose page is displayed.
     *
     * TOC entries (<li> elements) that are on the path of the displayed page receive the
     * `o_active_toc_entry` class, and their related (parent) TOC entry list (<ul> elements) receive
     * the `show` (Bootstrap) class.
     * Also, the deepest TOC entry receives the `o_deepest_active_toc_entry` class, and its child
     * TOC entry list receives the `show` class.
     */
    const _flagActiveTocEntriesAndLists = () => {
        let deepestTocEntry = undefined;
        this.navigationMenu.querySelectorAll('.current').forEach(element => {
            if (element.tagName === 'UL') {
                // Expand all related <ul>
                element.classList.add('show');
            } else if (element.tagName === 'LI') {
                // Highlight all <li> in the active hierarchy
                element.classList.add('o_active_toc_entry');
                deepestTocEntry = element;
            }
        })
        if (deepestTocEntry) {
            const childTocEntryList = deepestTocEntry.querySelector('ul');
            if (childTocEntryList) {
                childTocEntryList.classList.add('show');
            } else { // If the toc entry is not a TOC, add the class to its closest ancestor entry
                deepestTocEntry = deepestTocEntry.parentElement.parentElement;
            }
            deepestTocEntry.classList.add('o_deepest_active_toc_entry');
        }
    };

    /**
     * Mobile: Toggle open/close sidebar on click of nav button (&& on swipe left to right?).
     *
     *
     * `o_active_toc_entry` class, and their related (parent) TOC entry list (<ul> elements) receive
     * the `show` (Bootstrap) class.
     * Also, the deepest TOC entry receives the `o_deepest_active_toc_entry` class, and its child
     * Sidebar receives the `o-mobile-show` class.
     */

})();
