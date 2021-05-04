(function ($) {

    // TODO EDI custom css for content-switcher logic
    // can be placed as css inside the extension ideally
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.content-switcher').forEach(switcher => {
            const links = switcher.querySelectorAll('ul li');
            const linksArray = Array.from(links);
            const tabs = switcher.querySelectorAll('.tab-content > div');

            tabs.forEach(tab => {
                tab.classList.add('tab-pane');
            });

            function select(index) {
                links.forEach(link => {
                    link.classList.remove('active');
                });
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                });
                links[index].classList.add('active');
                tabs[index].classList.add('active');
            }

            select(0);
            links.forEach(link => {
                link.addEventListener('click', ev => {
                    // const clickedLink = ev.target.closest('ul li');
                    select(linksArray.indexOf(link));
                });
            });
        });
    });

})();
