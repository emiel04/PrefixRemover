document.addEventListener('DOMContentLoaded', function () {
    insertNames();
});

function insertNames() {
    const $ul = document.querySelector('#pr-site-list');
    Object.keys(map).forEach((siteName) => {
        const $li = document.createElement('li');
        $li.textContent = siteName;
        $ul?.appendChild($li);
    });
}
