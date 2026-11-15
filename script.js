// Hamburger Menu
// ===============================
// Hamburger Menu

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function() {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuBtn.textContent = isOpen ? "✕" : "☰";
        menuBtn.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}

// ===============================
// 2. Language Switcher
// ===============================

const langBtn = document.getElementById("lang-btn");
let currentLang = "en";

if (langBtn) {
    langBtn.addEventListener("click", function() {
        currentLang = currentLang === "en" ? "fr" : "en";

        document.querySelectorAll("[data-en]").forEach(function(element) {
            element.textContent = element.getAttribute("data-" + currentLang);
        });

        langBtn.textContent = currentLang === "en" ? "FR" : "EN";
    });
}


// 3. Scroll Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    observer.observe(section);
});


// ===============================
// 4. Dark Mode
// ===============================

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");



        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.textContent = "🌙";
        }
    });
}

console.log("Portfolio JavaScript loaded successfully!");
console.log(document.body.className);
console.log(getComputedStyle(document.body).backgroundColor);