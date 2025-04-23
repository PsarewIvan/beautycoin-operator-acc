(function () {
    const tableRows = document.querySelectorAll('.index-table tr');

    tableRows.forEach((row) => {
        row.addEventListener('click', () => {
            const url = row.dataset.href;

            if (url) {
                window.location.href = url;
            }
        });
    });
})();
