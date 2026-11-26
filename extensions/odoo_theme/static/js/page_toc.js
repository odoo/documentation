(function () {

    // Customize the page TOC
    document.addEventListener('DOMContentLoaded', () => {
        // Loop on all tree of content of the page. There may be from 0 to 2 depending on the page.
        document.querySelectorAll('.o_page_toc_nav').forEach(pageToc => {
            const headingRefs = pageToc.querySelectorAll('a'); // The references to all headings.

            // If the page TOC has less than 2 headings, in addition to the title, keep it hidden.
            if (headingRefs.length <= 2) {
                return;
            }
            pageToc.removeAttribute('hidden');
            _flagActiveTocEntry(pageToc, headingRefs);
        });
    });

    /**
     * Add the class `o_active_toc_entry` on the TOC entry of the section in view.
     *
     * The page TOC only shows two levels of headings (see style.scss): the section in view is
     * flagged through the closest of its shown ancestors.
     *
     * @param {HTMLElement} pageToc - The tree of content of the page.
     * @param {NodeList} headingRefs - The references to all headings.
     */
    const _flagActiveTocEntry = (pageToc, headingRefs) => {
        const header = document.querySelector('header.o_headers');
        const sectionRefs = [...headingRefs].filter(headingRef => {
            // The DOM is searched with querySelector rather than getElementById because
            // auto-documented modules generate ids containing a '.' which would make the search
            // fail.
            const href = headingRef.getAttribute('href');
            headingRef.section = href !== '#' && document.querySelector(
                `section[id="${href.replace('#', '')}"]`
            );
            return headingRef.section;
        });

        const _findActiveHeadingRef = () => {
            // The last section that starts right below the header or above (or the last one, at
            // the bottom of the page, where the last sections can't reach the header).
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
                return sectionRefs[sectionRefs.length - 1];
            }
            const threshold = header.getBoundingClientRect().bottom + 32;
            return sectionRefs.findLast(
                headingRef => headingRef.section.getBoundingClientRect().top <= threshold
            ) || sectionRefs[0];
        };

        const _findShownTocEntry = headingRef => {
            let entry = headingRef;
            while (entry && !entry.checkVisibility()) {
                entry = entry.parentElement.parentElement.closest('li')?.querySelector(':scope > a');
            }
            return entry;
        };

        let clickedHeadingRef = undefined;
        let activeTocEntry = undefined;
        const _updateFlags = () => {
            const tocEntry = _findShownTocEntry(clickedHeadingRef || _findActiveHeadingRef());
            if (tocEntry !== activeTocEntry) {
                activeTocEntry?.classList.remove('o_active_toc_entry');
                tocEntry?.classList.add('o_active_toc_entry');
                activeTocEntry = tocEntry;
            }
        };

        pageToc.addEventListener('click', ev => {
            clickedHeadingRef = ev.target.closest('a[href^="#"]'); // Highlight the clicked ref
            _updateFlags();
        });
        let timeoutId = undefined;
        document.addEventListener('scroll', () => {
            clearTimeout(timeoutId); // For each scroll event, cancel the previous timeout callback
            timeoutId = setTimeout(() => {
                clickedHeadingRef = undefined; // Go back to highlighting the heading ref in view
                _updateFlags();
            }, 100);
            _updateFlags();
        });
        _updateFlags(); // Flag the initially active section before the first scroll event
    };

})();
