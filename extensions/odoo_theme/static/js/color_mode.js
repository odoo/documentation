(function () {

    // The color mode is applied before the page is painted by a script in the <head>: this only
    // switches it, and follows the system preference until the user chooses.
    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.querySelector('.o_color_mode_toggle');
        const _applyColorMode = colorMode => {
            document.documentElement.dataset.bsTheme = colorMode;
            toggle.setAttribute('aria-pressed', colorMode === 'dark');
        };
        _applyColorMode(document.documentElement.dataset.bsTheme);

        toggle.addEventListener('click', () => {
            const colorMode = document.documentElement.dataset.bsTheme === 'dark' ? 'light' : 'dark';
            _applyColorMode(colorMode);
            try {
                localStorage.setItem('o_color_mode', colorMode);
            } catch {
                // The choice only lasts for the page.
            }
        });

        matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            let storedColorMode = null;
            try {
                storedColorMode = localStorage.getItem('o_color_mode');
            } catch {
                // Follow the system preference.
            }
            if (!storedColorMode) {
                _applyColorMode(event.matches ? 'dark' : 'light');
            }
        });
    });

})();
