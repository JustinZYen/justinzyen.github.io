"use strict";
// Event listeners for the buttons that load the iframes on the page
const iframeButtons = document.querySelectorAll(".iframe-wrapper button");
for (const button of iframeButtons) {
    button.addEventListener("click", () => {
        button.classList.add("hidden");
        const currentIFrame = button.nextElementSibling;
        currentIFrame.classList.remove("hidden");
        currentIFrame.src = button.name;
    });
}
