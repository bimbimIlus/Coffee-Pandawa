const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("is-active");

    navMenu.classList.toggle("-left-full");
    navMenu.classList.toggle("left-0");
});

window.addEventListener("scroll", () => {
    if (window.scollY > 50) {
        navbar.classList.add("bg-black/70", "backdrop-blur-md", "shadow-lg");
    } else {
        navbar.classList.remove("bg-black/70", "backdrop-blur-md", "shadow-lg");
    }
});

document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.add("-left-full");
        navMenu.classList.remove("left-0");
        menuButton.classList.remove("is-active");
    });
});