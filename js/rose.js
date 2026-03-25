function updateNavHeight() {
    const header = document.querySelector("nav");
    document.documentElement.style.setProperty(
        "--nav-height",
        header.offsetHeight + "px"
    );
}

window.addEventListener("load", updateNavHeight);
window.addEventListener("resize", updateNavHeight);