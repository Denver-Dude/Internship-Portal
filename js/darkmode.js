/* ===========================================
   Internship Portal
   darkmode.js
   Dark Mode Toggle
=========================================== */

// ===========================================
// DOM Elements
// ===========================================

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// ===========================================
// Apply Theme
// ===========================================

function applyTheme(theme) {

    html.setAttribute("data-bs-theme", theme);

    saveTheme(theme);

    updateThemeIcon(theme);

}

// ===========================================
// Toggle Theme
// ===========================================

function toggleTheme() {

    const currentTheme = html.getAttribute("data-bs-theme");

    if (currentTheme === "light") {

        applyTheme("dark");

    } else {

        applyTheme("light");

    }

}

// ===========================================
// Update Icon
// ===========================================

function updateThemeIcon(theme) {

    if (!themeToggle) return;

    if (theme === "dark") {

        themeToggle.innerHTML = `
            <i class="bi bi-sun-fill"></i>
        `;

    } else {

        themeToggle.innerHTML = `
            <i class="bi bi-moon-stars-fill"></i>
        `;

    }

}

// ===========================================
// Initialize Theme
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = getTheme();

    applyTheme(savedTheme);

    if (themeToggle) {

        themeToggle.addEventListener("click", toggleTheme);

    }

});

// ===========================================
// Export
// ===========================================

window.toggleTheme = toggleTheme;
window.applyTheme = applyTheme;