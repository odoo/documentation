let tocEntryListId = 0; // Used to generate IDs of toc entry lists for both the menu and page TOC

/**
 * Update the provided TOC to allow collapsing its entries with Bootstrap's accordion.
 *
 * The typical structure of a TOC menu is a follows:
 * <ul><li>
 *     <a href="#"/>
 *     <ul>
 *         <li><a href="#heading_without_child"/></li>
 *         <li>
 *             <a href="#heading_with_children"/>
 *             <ul>...</ul>
 *         </li>
 *     </ul>
 * </li></ul>
 *
 * Since a <ul> is always preceded by a <a>, and since we only need to make change to <a>
 * elements followed by a <ul>, we simply loop on <ul> elements to access all parts of the DOM
 * that need to be modified.
 *
 * The final structure must look like this:
 * <ul><li>
 *     <!-- Only <a> element with empty href must expand/collapse on click -->
 *     <a href="#" data-bs-target="#o_target_{id}>" data-bs-toggle="collapse"/>
 *     <ul>
 *         <li><a href="#heading_without_child"/></li>
 *         <li>
 *             <div class="o_toc_entry_wrapper">
 *                 <i class="i-chevron-right" data-bs-target="#o_target_{id}" data-bs-toggle="collapse"/>
 *                 <a href="#heading_with_children"/>
 *             </div>
 *             <ul id="o_target_{id}" class="collapse">...</ul>
 *         </li>
 *     </ul>
 * </li></ul>
 *
 * @param {HTMLElement} tocElement - The element containing the TOC
 */
const _prepareAccordion = (tocElement) => {
    // Start at the second TOC entry list (<ul>) to avoid collapsing the entire TOC
    const tocRoot = tocElement.querySelector('ul');
    tocRoot.querySelectorAll('ul').forEach(tocEntryList => {
        // Modify the <ul> element
        tocEntryList.id = `o_target_${tocEntryListId++}`;
        tocEntryList.classList.add('collapse');
        // Create and configure an <i> element
        const arrowButton = document.createElement('I');
        arrowButton.setAttribute('data-bs-target', `#${tocEntryList.id}`);
        arrowButton.setAttribute('data-bs-toggle', 'collapse');
        arrowButton.classList.add('i-chevron-right');
        // Modify the <a> element (only if it has no href, otherwise let the redirection happen)
        const relatedHeadingRef = tocEntryList.previousSibling;
        if (relatedHeadingRef.getAttribute('href') === '#') {
            relatedHeadingRef.setAttribute('data-bs-target', `#${tocEntryList.id}`);
            relatedHeadingRef.setAttribute('data-bs-toggle', 'collapse');
        }
        // Create a <div> element
        const tocEntryWrapper = document.createElement('DIV');
        tocEntryWrapper.classList.add('o_toc_entry_wrapper');
        // Insert the <i> and <a> elements inside the <div> and prepend the <div> to the <ul>
        tocEntryWrapper.append(arrowButton, relatedHeadingRef);
        tocEntryList.parentNode.insertBefore(tocEntryWrapper, tocEntryList);
    });
};

/**
 * Generate a list of fallback URLs from the closest to the furthest of the target URL and
 * return the first one that points to an existing resource.
 *
 * The generation consists of starting with the target URL and walking back toward the root of
 * the documentation while alternating between including the original language or not, if it was
 * included in the original URL. The last fallback URL is the root of the documentation with the
 * version stripped off to redirect the user to the index of the default version.
 *
 * Example:
 * 1. .../documentation/13.0/contributing/documentation.html
 * 2. .../documentation/13.0/contributing.html
 * 3. .../documentation/13.0
 * 4. .../documentation/
 *
 * Example:
 * 1. .../documentation/15.0/fr/administration/install.html
 * 2. .../documentation/15.0/administration/install.html
 * 3. .../documentation/15.0/fr/administration.html
 * 4. .../documentation/15.0/administration.html
 * 5. .../documentation/15.0/fr/
 * 6. .../documentation/15.0/
 * 7. .../documentation/
 */
const _generateFallbackUrls = (targetUrl) => {

    const _deconstructUrl = (url) => {  // TODO test when no version
        let version = '';
        let language = '';
        const originalPathParts = [];
        for (let fragment of url.split('/').reverse()) {
            if (fragment.match(/^(?:saas-)?\d{2}.\d|master$/)) {
                version = fragment;
                break; // The remaining fragments are not part of the original path.
            } else if (fragment.match(/^[a-z]{2}(?:_[A-Z]{2})?$/)) {
                language = fragment;
            } else {
                originalPathParts.unshift(fragment);
            }
        }
        return [version, language, originalPathParts];
    };

    const [version, language, originalPathParts] = _deconstructUrl(targetUrl);
    const urlParts = targetUrl.split('/');
    const urlBaseParts = urlParts.slice(
        0, urlParts.length - originalPathParts.length - (version ? 1 : 0) - (language ? 1 : 0)
    );
    const urlBase = urlBaseParts.join('/');

    // Generate the fallback URLs.
    const fallbackUrls = [];
    for (let i = originalPathParts.length; i >= 0; i--) {
        const fallbackPathParts = originalPathParts.slice(0, i);

        // Append '.html' to the last path part if it is missing and the part is not the root.
        if (
            fallbackPathParts.length > 0
            && !fallbackPathParts[fallbackPathParts.length - 1].endsWith('.html')
        ) {
            fallbackPathParts[fallbackPathParts.length - 1] += '.html';
        }

        // Build the fallback URL from the version, language and path parts, if any.
        if (version && language)
            fallbackUrls.push(
                `${urlBase}/${version}/${language}/${fallbackPathParts.join('/')}`,
                `${urlBase}/${version}/${fallbackPathParts.join('/')}`,
            );
        else if (version && !language)
            fallbackUrls.push(`${urlBase}/${version}/${fallbackPathParts.join('/')}`);
        else if (!version && !language)
            fallbackUrls.push(`${urlBase}/${fallbackPathParts.join('/')}`);
    }
    fallbackUrls.push(`${urlBase}/`);
    return fallbackUrls;
};

/**
 * Iterate over the provided URLs and return the first one that points to a valid resource.
 */
const _getFirstValidUrl = (urls) => {
    for (let url of urls) {
        if (url.startsWith('file:///')) { // TODO MAT when does it starts with file:/// ?
            return url;
        } else {
            fetch(url).then(response => {
                if (response.ok) {
                    return url;
                }
            });
        }
    }
    return urls[0]; // No valid url found, return the first one.
};
