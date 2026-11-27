(function () {

    // The labels of the languages of code blocks, shown in their header.
    const LANGUAGE_NAMES = {
        bash: 'Bash', console: 'Console', css: 'CSS', csv: 'CSV', doscon: 'Console', html: 'HTML',
        http: 'HTTP', ini: 'INI', java: 'Java', javascript: 'JavaScript', js: 'JavaScript',
        json: 'JSON', nginx: 'Nginx', py: 'Python', pycon: 'Python', python: 'Python',
        python3: 'Python', rst: 'RST', scss: 'SCSS', sh: 'Shell', shell: 'Shell', sql: 'SQL',
        toml: 'TOML', ts: 'TypeScript', xml: 'XML', yaml: 'YAML',
    };

    document.addEventListener('DOMContentLoaded', () => {
        // Add a copy button to the code blocks, in a header with their caption (often a file name)
        // or language, if any. The code blocks of code tabs share the header of the tabs.
        document.querySelectorAll('div[class^="highlight-"]').forEach(codeBlock => {
            const pre = codeBlock.querySelector('pre');
            if (!pre || codeBlock.parentElement.matches('.sphinx-tabs-panel.code-tab')) {
                return;
            }
            const copyButton = _createCopyButton(() => _getCode(pre));
            let label = codeBlock.parentElement.querySelector(':scope > .code-block-caption');
            const languageName = LANGUAGE_NAMES[codeBlock.className.match(/highlight-(\S+)/)[1]];
            if (!label && languageName) {
                label = document.createElement('span');
                label.textContent = languageName;
            }
            if (label) {
                const header = document.createElement('div');
                header.classList.add('o_code_header');
                label.classList.add('o_code_language');
                header.append(label, copyButton);
                codeBlock.prepend(header);
            } else {
                codeBlock.prepend(copyButton);
            }
        });
        document.querySelectorAll('.sphinx-tabs').forEach(tabs => {
            const panels = [...tabs.children].filter(child => child.matches('.sphinx-tabs-panel'));
            if (panels.length && panels.every(panel => panel.matches('.code-tab'))) {
                tabs.classList.add('o_code_tabs');
                tabs.append(_createCopyButton(
                    () => _getCode(panels.find(panel => !panel.hidden).querySelector('pre'))
                ));
            }
        });

        // Copy the source of the page, or its text if the source can't be fetched (local build).
        document.querySelectorAll('.o_copy_page').forEach(button => {
            button.addEventListener('click', () => _copyWithFeedback(button, async () => {
                try {
                    const response = await fetch(button.dataset.source);
                    if (response.ok) {
                        return response.text();
                    }
                } catch {
                    // Fall back on the text of the page.
                }
                return document.querySelector('#o_content [role="main"]').innerText;
            }));
        });
    });

    /**
     * Return the code of a code block, without its line numbers.
     *
     * @param {HTMLElement} pre - The <pre> element of the code block.
     */
    const _getCode = pre => {
        const code = pre.cloneNode(true);
        code.querySelectorAll('.lineno, .linenos').forEach(lineNumber => lineNumber.remove());
        return code.textContent;
    };

    const _createCopyButton = getText => {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('o_copy_code');
        button.setAttribute('aria-label', 'Copy');
        button.innerHTML = '<i class="o_icon" data-icon="content_copy" aria-hidden="true"></i>';
        button.addEventListener('click', () => _copyWithFeedback(button, getText));
        return button;
    };

    /**
     * Copy the text to the clipboard and show a check icon in the button for a moment.
     *
     * The text is given as a promise to the clipboard so that the copy still counts as a reaction
     * to the click in Safari.
     *
     * @param {HTMLElement} button - The button with the `content_copy` icon.
     * @param {Function} getText - Returns (a promise of) the text to copy.
     */
    const _copyWithFeedback = async (button, getText) => {
        const blob = Promise.resolve(getText()).then(text => new Blob([text], { type: 'text/plain' }));
        try {
            await navigator.clipboard.write([new ClipboardItem({ 'text/plain': blob })]);
        } catch {
            return;
        }
        const icon = button.querySelector('.o_icon');
        icon.dataset.icon = 'check';
        clearTimeout(button.copyTimeoutId);
        button.copyTimeoutId = setTimeout(() => icon.dataset.icon = 'content_copy', 1500);
    };

})();
