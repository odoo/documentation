let tocEntryListId = 0; // Used to generate IDs of toc entry lists for both the menu and page TOC

/**
 * Update the provided TOC to allow collapsing its entries with Bootstrap's accordion.
 *
 * The typical structure of a TOC menu is a follows:
 * <ul>
 *     <li>
 *         <a name="heading_without_children" href="something.html">Something</a>
 *     </li>
 *     <li>
 *         <a name="non-clickable_heading_with_children" href="#">Something</a>
 *         <ul>...</ul>
 *     </li>
 *     <li>
 *         <a name="clickable_heading_with_children" href="something.html">Something</a>
 *         <ul>...</ul>
 *     </li>
 * </ul>
 *
 * Since a <ul> is always preceded by a <a>, and since we only need to make change to <a>
 * elements followed by a <ul>, we simply loop on <ul> elements to access all parts of the DOM
 * that need to be modified.
 *
 * The final structure must look like this:
 * <ul>
 *     <!-- Unchanged -->
 *     <li>
 *         <a name="heading_without_children" href="something.html">Something</a>
 *     </li>
 *     <!-- Create a <div>; append <i> and <a> to <div>; set BS target on <a> and <i>; set id on <ul> -->
 *     <li>
 *         <div class="o_toc_entry_wrapper">
 *             <i class="i-chevron-right" data-bs-target="#o_target_123" data-bs-toggle="collapse"/>
 *             <a name="non-clickable_heading_with_children" href="#" data-bs-target="#o_target_123>" data-bs-toggle="collapse">Something</a>
 *         </div>
 *         <ul id="o_target_123" class="collapse">...</ul>
 *     </li>
 *     <!-- Create a <div>; append <i> and <a> to <div>; set BS target on only <i> to let the <a> redirect; set id on <ul> -->
 *     <li>
 *         <div class="o_toc_entry_wrapper">
 *             <i class="i-chevron-right" data-bs-target="#o_target_456" data-bs-toggle="collapse"/>
 *             <a name="clickable_heading_with_children" href="something.html">Something</a>
 *         </div>
 *         <ul id="o_target_456" class="collapse">...</ul>
 *     </li>
 *</ul>
 *
 * @param {HTMLElement} tocElement - The element containing the TOC.
 */
const _prepareAccordion = (tocElement) => {
    // Start at the second TOC entry list (<ul>) to avoid collapsing the entire TOC.
    const tocRoot = tocElement.querySelector('ul');
    tocRoot.querySelectorAll('ul').forEach(tocEntryList => {
        // Modify the <ul> element.
        tocEntryList.id = `o_target_${tocEntryListId++}`;
        tocEntryList.classList.add('collapse');

        // Modify the <a> element only if it has no href; otherwise, let the redirection happen.
        const relatedHeadingRef = tocEntryList.previousSibling;
        if (relatedHeadingRef.getAttribute('href') === '#') {
            relatedHeadingRef.setAttribute('data-bs-target', `#${tocEntryList.id}`);
            relatedHeadingRef.setAttribute('data-bs-toggle', 'collapse');
        }

        // Create and configure a <div> element.
        const tocEntryWrapper = document.createElement('DIV');
        tocEntryWrapper.classList.add('o_toc_entry_wrapper');
        tocEntryList.parentElement.insertBefore(tocEntryWrapper, tocEntryList);

        // Create and configure an <i> element.
        const arrowButton = document.createElement('I');
        arrowButton.setAttribute('data-bs-target', `#${tocEntryList.id}`);
        arrowButton.setAttribute('data-bs-toggle', 'collapse');
        arrowButton.classList.add('i-chevron-right');

        // Insert the <i> and <a> elements inside the <div>.
        tocEntryWrapper.append(arrowButton, relatedHeadingRef);
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
const _generateFallbackUrls = async (targetUrl) => {

    const _deconstructUrl = (urlObject) => {
        let urlBase = urlObject.origin;
        let version = '';
        let language = '';
        const originalPathParts = [];
        for (let fragment of urlObject.pathname.split('/').reverse()) {
            if (fragment.length > 0) {
                if (fragment.match(/^(?:saas-)?\d{2}\.\d$|^master$/)) {
                    // Try to match the version before considering the fragment part of the path.
                    version = fragment;
                } else if (fragment.match(/^[a-z]{2}(?:_[A-Z]{2})?$/)) {
                    // Try to match the language before considering the fragment part of the path.
                    language = fragment;
                } else if (version || language) {
                    // The fragment is part of the base URL but cannot be part of the part anymore.
                    urlBase += `/${fragment}`;
                } else {
                    // The fragment is part of the original path.
                    originalPathParts.unshift(fragment);
                }
            }
        }
        return [urlBase, version, language, originalPathParts];
    };

    const targetUrlObject = new URL(targetUrl);
    const [urlBase, version, language, originalPathParts] = _deconstructUrl(targetUrlObject);

    // Generate the fallback URLs.
    const fallbackUrls = [targetUrl]; // Start with the original URL in case we rebuild it wrong.
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
        if (version && language) {
            fallbackUrls.push(
                `${urlBase}/${version}/${language}/${fallbackPathParts.join('/')}`,
                `${urlBase}/${version}/${fallbackPathParts.join('/')}`,
            );
        } else if (version && !language) {
            fallbackUrls.push(`${urlBase}/${version}/${fallbackPathParts.join('/')}`);
        } else if (!version && language) {
            fallbackUrls.push(
                `${urlBase}/${language}/${fallbackPathParts.join('/')}`,
                `${urlBase}/${fallbackPathParts.join('/')}`,
            );
        } else if (!version && !language) {
            fallbackUrls.push(`${urlBase}/${fallbackPathParts.join('/')}`);
        }
    }
    fallbackUrls.push(`${urlBase}/`);
    return fallbackUrls;
};

/**
 * Iterate over the provided URLs and return the first one that points to a valid resource, if any.
 *
 * Since URLs don't have a protocol and cannot be fetched when the documentation is built locally
 * without the `ROOT` and `IS_REMOTE_BUILD` Make arguments, the URLs that don't have the protocol
 * 'http' or 'https' are not tested.
 */
const _getFirstValidUrl = async (urls) => {
    for (let url of urls) {
        if (url.startsWith('http')) {
            const response = await fetch(url);
            if (response.ok) {
                return url;
            }
        }
    }
    return null; // No valid URL found.
};
