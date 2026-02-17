const colorSettings = document.querySelector(".main-txt-toggler");
const pageThemes = document.querySelector(".page-themes");
const themeTxtColors = document.querySelectorAll(".theme-txt-color");
const toggleBg = document.querySelector(".background-toggler");

// Toggle theme menu
colorSettings.addEventListener("click", () => {
    pageThemes.classList.toggle("open");
});

// Close themes on scroll
window.addEventListener("scroll", () => {
    if (pageThemes.classList.contains("open")) {
        pageThemes.classList.remove("open");
    }
});

// Change main color and Save to LocalStorage
function changeTxtColor(color) {
    themeTxtColors.forEach((txtColor) => {
        if (txtColor.getAttribute("title") === color) {
            txtColor.removeAttribute("disabled");
        } else {
            txtColor.setAttribute("disabled", true);
        }
    });
    localStorage.setItem("portfolio-color", color);
}

// Toggle background color and Save to LocalStorage
toggleBg.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
});

// Load preferences on startup
document.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem("portfolio-color");
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedColor) {
        changeTxtColor(savedColor);
    }
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});
