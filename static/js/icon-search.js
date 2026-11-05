document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('icon-search').addEventListener('input', function (e) {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.o_icon_card').forEach(card => {
            const name = card.querySelector('code').textContent.toLowerCase();
            card.style.display = name.includes(query) ? '' : 'none';
        });
    });
});
