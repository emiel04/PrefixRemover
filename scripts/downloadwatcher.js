"use strict";
const siteMap = {
    "y2mate": "y2mate.com - ",
};
chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    console.log("test");
    console.log(item);
    let shouldSuggest = false;
    let newFilename = '';
    Object.entries(siteMap).forEach(([siteName, prefix]) => {
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
self.addEventListener('message', (event) => {
    if (event.data.action === 'getMap') {
        event.source?.postMessage({ mapData: siteMap });
    }
});
