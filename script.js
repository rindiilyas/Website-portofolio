// Toggel menu mobile
const mobileMenu = document.querySelector(".mobile-menu");
const navMenu = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Animasi saat scroll
const scrollElements = document.querySelectorAll(".about-content, .biodata-wrapper, .gallery-grid, .skills-box, .contact-wrapper");

function reveal() {
    scrollElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 120) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}
window.addEventListener("scroll", reveal);

// Set default animasi nilai awal
scrollElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .6s ease";
});
