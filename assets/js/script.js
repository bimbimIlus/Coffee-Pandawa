const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
const navbar = document.getElementById("navbar");

feather.replace();

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("is-active");

    navMenu.classList.toggle("-left-full");
    navMenu.classList.toggle("left-0");
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
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





const aboutSection = document.querySelector("#about");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        // =========================
        // SAAT MASUK VIEWPORT
        // =========================
        if (entry.isIntersecting) {

            // SUSU
            setTimeout(() => {
                document.querySelector(".about-left")
                    .classList.add("show-left");
            }, 100);

            // WAYANG
            setTimeout(() => {
                document.querySelector(".about-right")
                    .classList.add("show-right");
            }, 300);

            // CLOUD BOTTOM
            setTimeout(() => {
                document.querySelector(".cloud-bottom")
                    .classList.add("show-cloud");
            }, 500);

            // CLOUD TOP
            setTimeout(() => {
                document.querySelector(".cloud-top")
                    .classList.add("show-cloud");
            }, 800);

            // BULAT
            setTimeout(() => {
                document.querySelector(".circle-bg")
                    .classList.add("show-circle");
            }, 1000);

            // IMAGE
            setTimeout(() => {
                document.querySelector(".main-image")
                    .classList.add("show-image");
            }, 1300);

            // DAUN KIRI
            setTimeout(() => {
                document.querySelector(".mint-left")
                    .classList.add("show-mint-left");
            }, 1600);

            // DAUN KANAN
            setTimeout(() => {
                document.querySelector(".mint-right")
                    .classList.add("show-mint-right");
            }, 1900);

            // TEXT
            const texts = document.querySelectorAll(".about-text");

            texts.forEach((text, index) => {

                setTimeout(() => {
                    text.classList.add("show-text");
                }, 2200 + (index * 250));

            });

        }

        // =========================
        // SAAT KELUAR VIEWPORT
        // =========================
        else {

            document.querySelector(".about-left")
                .classList.remove("show-left");

            document.querySelector(".about-right")
                .classList.remove("show-right");

            document.querySelector(".cloud-bottom")
                .classList.remove("show-cloud");

            document.querySelector(".cloud-top")
                .classList.remove("show-cloud");

            document.querySelector(".circle-bg")
                .classList.remove("show-circle");

            document.querySelector(".main-image")
                .classList.remove("show-image");

            document.querySelector(".mint-left")
                .classList.remove("show-mint-left");

            document.querySelector(".mint-right")
                .classList.remove("show-mint-right");

            document.querySelectorAll(".about-text")
                .forEach(text => {
                    text.classList.remove("show-text");
                });

        }

    });

}, {
    threshold: 0.35
});

observer.observe(aboutSection);




// ==========================
// ==========================
// SECTION MENU
// ==========================
// ==========================

// ==========================
// DRAG SCROLL MENU
// ==========================

const slider = document.querySelector('.custom-scroll');

if (slider) {

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;

        slider.classList.add('dragging');

        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('dragging');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('dragging');
    });

    slider.addEventListener('mousemove', (e) => {

        if (!isDown) return;

        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;

        slider.scrollLeft = scrollLeft - walk;

    });

}




// ==========================
// ==========================
// SECTION TESTIMONIAL
// ==========================
// ==========================

const testimonialSection = document.querySelector("#testimonial-section");

const testimonialObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        const animatedElements = testimonialSection.querySelectorAll(
            ".testimonial-top, .testimonial-fade, .cloud-left, .cloud-right, .wayang-left, .wayang-right"
        );

        // =========================
        // SAAT MASUK VIEWPORT
        // =========================
        if(entry.isIntersecting){

            animatedElements.forEach((el, index) => {

                el.style.transitionDelay = `${index * 0.08}s`;

                el.classList.add("show-animate");

            });

        }

        // =========================
        // SAAT KELUAR VIEWPORT
        // =========================
        else {

            animatedElements.forEach((el) => {

                el.classList.remove("show-animate");

            });

        }

    });

}, {
    threshold: 0.25
});

testimonialObserver.observe(testimonialSection);