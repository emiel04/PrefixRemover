"use strict";

function insertNames(names) {
    const $ul = document.querySelector("#pr-site-list");
    names.forEach((siteName) => {
        const $li = document.createElement("li");
        $li.textContent = siteName;
        $ul?.appendChild($li);
    });
}

//get the data from the downloadwatcher
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
        registration.active.postMessage({ action: "getMap" });

        navigator.serviceWorker.addEventListener("message", (event) => {
            if (event.data.mapData) {
                const map = event.data.mapData;
                insertNames(Object.keys(map));
            }
        });
    });
}
