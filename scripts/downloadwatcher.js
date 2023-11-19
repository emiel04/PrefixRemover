"use strict";
const map = {
    "y2mate": "y2mate.com - ",
};
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
chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    console.log("test");
    console.log(item);
    let shouldSuggest = false;
    let newFilename = '';
    Object.entries(map).forEach(([siteName, prefix]) => {
        if (item.filename.startsWith(prefix)) {
            newFilename = `${item.filename.replace(prefix, '')}}`;
            shouldSuggest = true;
        }
    });
    if (shouldSuggest) {
        suggest({
            filename: newFilename
        });
    }
});
