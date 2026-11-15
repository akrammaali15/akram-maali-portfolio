/* ===============================
   1. HAMBURGER MENU
================================ */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuBtn.textContent = isOpen ? "✕" : "☰";
        menuBtn.setAttribute("aria-expanded", isOpen);

    });

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}


/* ===============================
   2. LANGUAGE SWITCHER
================================ */

const langBtn = document.getElementById("lang-btn");

let currentLang = "en";

if (langBtn) {

    langBtn.addEventListener("click", function () {

        currentLang = currentLang === "en" ? "fr" : "en";

        document.querySelectorAll("[data-en]").forEach(function (element) {

            const translation = element.getAttribute("data-" + currentLang);

            if (translation !== null) {
                element.textContent = translation;
            }

        });

        langBtn.textContent = currentLang === "en" ? "FR" : "EN";

    });

}


/* ===============================
   3. SCROLL ANIMATION
================================ */

const sections = document.querySelectorAll("section");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });

} else {

    sections.forEach(function (section) {
        section.classList.add("show");
    });

}


/* ===============================
   4. DARK MODE
================================ */

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem("theme", isDark ? "dark" : "light");

        themeBtn.textContent = isDark ? "☀️" : "🌙";

    });

}


/* ===============================
   5. CONSOLE MESSAGE
================================ */

console.log("Portfolio JavaScript loaded successfully!");