// ==UserScript==
// @name         ImStiven RPlace Twitch COL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  On va récuperer ce qui nous est du de droit.
// @author       Adcoss95
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://styles.redditmedia.com/t5_4eiiz1/styles/communityIcon_ojy24r8j90o81.jpg
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://user-images.githubusercontent.com/102952689/161640295-df75122a-6be5-437d-a7a1-c36465d70c20.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}