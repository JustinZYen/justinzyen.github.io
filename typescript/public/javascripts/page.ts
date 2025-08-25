
// Event listeners for the buttons that load the iframes on the page
const iframeButtons = document.querySelectorAll<HTMLButtonElement>(".iframe-wrapper button");
for (const button of iframeButtons) {
    button.addEventListener("click",()=>{
        button.classList.add("hidden");
        const currentIFrame = <HTMLIFrameElement>button.nextElementSibling;
        currentIFrame.classList.remove("hidden");
        currentIFrame.src=button.name;
    })
}