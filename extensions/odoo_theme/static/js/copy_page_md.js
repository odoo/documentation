(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('o_copy_markdown');
    const content = document.getElementById('o_content');
    if (!btn || !content || typeof TurndownService === 'undefined') return;

    const originalHtml = btn.innerHTML;
    const baseUrl = window.location.href;
    const ATTRS = ['src', 'href', 'poster', 'data', 'action', 'formaction'];

    btn.addEventListener('click', () => {
      content.querySelectorAll('.headerlink, .modal img').forEach(el => el.remove());

      const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });

      td.addRule('code', {
        filter: n => n.nodeName === 'DIV' && n.className.includes('highlight') && n.querySelector('pre'),
        replacement: (_, n) => {
          const lang = n.className.match(/highlight-(\w+)/)?.[1] || '';
          const code = n.querySelector('pre').textContent.trim();
          return `\n\`\`\`${lang}\n${code}\n\`\`\`\n`;
        }
      });

      let html = content.innerHTML;
      try {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        ATTRS.forEach(attr => {
          doc.querySelectorAll(`[${attr}]`).forEach(el => {
            const val = el.getAttribute(attr);
            if (val && !/^https?:|^data:|^#/.test(val)) {
              el.setAttribute(attr, new URL(val, baseUrl).href);
            }
          });
        });
        html = doc.body.innerHTML;
      } catch (e) {}

      const markdown = td.turndown(html);
      navigator.clipboard.writeText(markdown).then(() => {
        btn.innerHTML = 'Copied!';
        setTimeout(() => (btn.innerHTML = originalHtml), 2000);
      });
    });
  });
})();
