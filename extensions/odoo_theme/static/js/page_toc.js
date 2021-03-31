/* global _prepareAccordion */ //see utils.js
(function ($) {

    // Customize the page TOC
    document.addEventListener('DOMContentLoaded', () => {
        this.pageToc = document.getElementById('o_page_toc'); // The tree of content of the page
        if (this.pageToc) { // The local toctree is not included for toctree pages (see layout.html)
            this.headingRefs = this.pageToc.querySelectorAll('a'); // The references to all headings

            // If the page TOC has less than 2 headings, in addition to the title, hide it entirely
            if (this.headingRefs.length <= 2) {
                _hidePageToc();
                return;
            }

            // Allow to automatically collapse and expand TOC entries
            _prepareAccordion(this.pageToc);

            // Allow to respectively highlight and expand the TOC entries and their related TOC
            // entry list whose section is focused.
            _flagActiveTocEntriesAndLists();

            // Allow to hide the TOC entry referring the title (<h1> heading)
            _flagFirstHeadingRef();
        }
    });

    /**
     * Entirely hide the local tree of contents.
     */
    const _hidePageToc = () => this.pageToc.style.display = 'none';

    /**
     * Add the relevant classes on the TOC entries (and lists) whose section is focused.
     *
     * TOC entries whose section is focused (<li> elements) receive the `o_active_toc_entry` class
     * and their related TOC entry list (<ul> elements) receive the `show` (Bootstrap) class.
     */
    const _flagActiveTocEntriesAndLists = () => {

        const _updateFlags = () => {
            const activeHeadingRef = clickedHeadingRef || _findActiveHeadingRef();
            if (
                lastActiveHeadingRef // `undefined` on the first update
                && activeHeadingRef.href === lastActiveHeadingRef.href
            ) {
                return; // The focus didn't change
            }
            _unflagAll();
            _flagActiveHierarchy(activeHeadingRef);
            // Store to avoid updating later if the focus didn't change
            lastActiveHeadingRef = activeHeadingRef;
        };

        const _findActiveHeadingRef = () => {
            let activeHeadingRef = this.headingRefs[0];
            this.headingRefs.forEach(headingRef => {
                const href = headingRef.getAttribute('href');
                if (href !== '#') {
                    const sectionId = href.replace('#', '');
                    // The DOM is searched with querySelector rather than getElementById because
                    // auto-documented modules generate ids containing a '.' which would make the
                    // search fail.
                    const section = document.querySelector(`section[id="${sectionId}"]`);
                    if (window.pageYOffset >= section.offsetTop) {
                        // The focused section is the last one with a smaller offset from top than
                        // the current user scrolling offset.
                        activeHeadingRef = headingRef;
                    } else {
                        return activeHeadingRef; // Break
                    }
                }
            });
            return activeHeadingRef;
        };

        const _unflagAll = () => {
            this.pageToc.querySelectorAll('li,ul').forEach(element => {
                element.classList.remove('o_active_toc_entry', 'show');
            });
            this.pageToc.querySelectorAll('i').forEach(element => {
                element.setAttribute('aria-expanded', false);
            });
        };

        const _flagActiveHierarchy = (headingRef) => {
            let tocEntry = headingRef.parentElement;
            while (tocEntry !== this.pageToc) {
                if (tocEntry.tagName === 'LI') {
                    // Highlight all <li> in the active hierarchy
                    tocEntry.classList.add('o_active_toc_entry');

                    // Expand all related <ul>
                    const relatedTocEntryList = tocEntry.querySelector('ul');
                    if (relatedTocEntryList) {
                        relatedTocEntryList.classList.add('show');
                    }
                }
                tocEntry = tocEntry.parentElement;
            }
        };

        let clickedHeadingRef = undefined;
        this.pageToc.addEventListener('click', ev => {
            clickedHeadingRef = ev.target.closest('a[href^="#"]'); // Highlight the clicked ref
        });
        let timeoutId = undefined;
        document.addEventListener('scroll', () => {
            clearTimeout(timeoutId); // For each scroll event, cancel the previous timeout callback
            timeoutId = setTimeout(() => {
                clickedHeadingRef = undefined; // Go back to highlighting the heading ref in view
            }, 100);
            _updateFlags();
        });

        let lastActiveHeadingRef = undefined; // Init as `undefined` to allow an initial update
        _updateFlags(); // Flag initially active sections before the first scroll event
    };

    /**
     * Add the class `o_page_toc_title` on the first heading reference.
     */
    const _flagFirstHeadingRef = () => {
        this.headingRefs[0].parentNode.classList.add('o_page_toc_title');
    }

})();
