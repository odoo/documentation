(function ($) {

    document.addEventListener('DOMContentLoaded', () => {
        // Enable fallback URLs for broken redirects from the version or language switchers.
        _prepareSwitchersFallbacks();
    });

    /**
     * Add event listeners on links in the version and language switchers.
     *
     * If a link is clicked, the user is redirected to the closest fallback URL (including the
     * original target URL) that is available.
     */
    const _prepareSwitchersFallbacks = () => {
        document.querySelectorAll('a.o_switcher_item').forEach(element => {
            element.addEventListener('click', async event => {
                if (element.hasAttribute('href')) {
                    const targetUrl = element.getAttribute('href');
                    if (!targetUrl.startsWith('/')) {  // Don't test for valid URLs if in localhost.
                        event.preventDefault();
                        const fallbackUrls = await _generateFallbackUrls(targetUrl);
                        const fallbackUrl = await _getFirstValidUrl(fallbackUrls) ?? targetUrl;
                        window.location.href = fallbackUrl;
                    }
                }
            });
        });
    };

})();
