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
