(function () {
    document.addEventListener('DOMContentLoaded', function () {
        alternatives();
        highlight();
        checks_handling();
    });

    function highlight() {
        $('.highlighter-list').each(function () {
            var $this = $(this),
                $target = $($this.data('target'));
            $this.on('mouseout', 'li', function (e) {
                $(e.currentTarget).removeClass('secondary');
                $target.find('.related').removeClass('related');
            }).on('mouseover', 'li', function (e) {
                if (!e.currentTarget.contains(e.target)) { return; }

                var $li = $(e.currentTarget);
                console.log($li, $li.data('highlight'), $target.find($li.data('highlight')));
                $li.addClass('secondary');
                $target.find($li.data('highlight')).addClass('related');
            });
        });
    }
    /** alternatives display:
     *  - prepend control for each <dt>
     *    - radio input with link to following dd
     *    - label is <dt> content
     *    - hide all first-level dt and dd (CSS)
     *  - on change
     *    - hide all dds
     *    - show dd corresponding to the selected radio
     *  - automatically select first control on startup
     */
    function alternatives() {
        [...document.querySelectorAll('dl.alternatives')].forEach((list, index) => {
            const contents = [...list.children].filter((el) => el.matches("dd"));
            const controls = document.createElement("div");
            controls.classList.add("alternatives-controls");
            const dts = [...list.children].filter((el) => el.matches("dt"));
            [...dts].map((el) => {
                const label = document.createElement('label'),
                    input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'alternatives-' + index);

                let sibling = el;
                while ((sibling = sibling.nextSibling) && sibling.nodeType !== 1);
                input.content = sibling;

                label.appendChild(input);
                label.appendChild(document.createTextNode(' '));
                label.appendChild(document.createTextNode(el.textContent));

                controls.appendChild(label);
            });
            list.parentNode.insertBefore(controls, list);
            [...controls.querySelectorAll("input")].forEach((input) => {
                input.addEventListener("change", (ev) => {
                    [...contents].forEach(el => el.style.display = "");
                    const content = ev.target.content;
                    content && (content.style.display = 'block');
                });
            });
            controls.querySelector("input").click();
        });
    }
    function checks_handling() {
        const section = document.querySelector(".checks-handling");
        if (!section) { return; }

        const ul = section.querySelector("ul");
        ul.querySelectorAll("li").forEach((li) => {
            const txt = li.textContent;
            while (li.firstChild) {
                li.removeChild(li.firstChild);
            }

            const label = document.createElement("label");
            label.style.display = "block";
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "checks-handling");
            label.appendChild(input);
            label.appendChild(document.createTextNode(" "));
            label.appendChild(document.createTextNode(txt));
            li.appendChild(label);
            li.querySelector("input").addEventListener("change", update);
        });
        update();

        function nextAll(node, selector) {
            let list = [];
            let nextSibling = node.nextElementSibling;
            while (nextSibling) {
                if (nextSibling.matches(selector)) {
                    list.push(nextSibling);
                }
                nextSibling = nextSibling.nextElementSibling;
            }
            return list;
        }
        function update() {
            const inputs = ul.querySelectorAll('input');
            let idx = 0;
            inputs.forEach((el, index) => {
                if (el.checked) {
                    idx = index;
                }
            });
            inputs[idx].checked = true;
            const nextElements = nextAll(ul, 'div');
            nextElements.forEach((div) => {
                div.style.display = "none";
            });
            nextElements[idx].style.display = "";
        }

    }
})();
