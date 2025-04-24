(function () {
    const tableRows = document.querySelectorAll('.js-index-table-row');

    tableRows.forEach((row) => {
        row.addEventListener('click', () => {
            const url = row.dataset.href;

            if (url) {
                window.location.href = url;
            }
        });
    });
})();
