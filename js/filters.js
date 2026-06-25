/* ===========================================
   Internship Portal
   filters.js
   Search, Filter & Sort
=========================================== */

// ===========================================
// DOM Elements
// ===========================================

const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");
const durationFilter = document.getElementById("durationFilter");
const sortSelect = document.getElementById("sortSelect");
const resetFiltersBtn = document.getElementById("resetFilters");

// ===========================================
// Event Listeners
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    searchInput.addEventListener("input", applyFilters);

    fieldFilter.addEventListener("change", applyFilters);

    locationFilter.addEventListener("change", applyFilters);

    typeFilter.addEventListener("change", applyFilters);

    durationFilter.addEventListener("change", applyFilters);

    sortSelect.addEventListener("change", applyFilters);

    resetFiltersBtn.addEventListener("click", resetFilters);

});

// ===========================================
// Apply All Filters
// ===========================================

function applyFilters() {

    let filtered = [...internships];

    // -----------------------------
    // Search
    // -----------------------------

    const keyword = searchInput.value.trim().toLowerCase();

    if (keyword !== "") {

        filtered = filtered.filter(item =>

            item.title.toLowerCase().includes(keyword) ||

            item.company.toLowerCase().includes(keyword)

        );

    }

    // -----------------------------
    // Field
    // -----------------------------

    if (fieldFilter.value !== "") {

        filtered = filtered.filter(item =>

            item.field === fieldFilter.value

        );

    }

    // -----------------------------
    // Location
    // -----------------------------

    if (locationFilter.value !== "") {

        filtered = filtered.filter(item =>

            item.location === locationFilter.value

        );

    }

    // -----------------------------
    // Type
    // -----------------------------

    if (typeFilter.value !== "") {

        filtered = filtered.filter(item =>

            item.type === typeFilter.value

        );

    }

    // -----------------------------
    // Duration
    // -----------------------------

    if (durationFilter.value !== "") {

        filtered = filtered.filter(item =>

            item.duration === durationFilter.value

        );

    }

    // -----------------------------
    // Sorting
    // -----------------------------

    switch (sortSelect.value) {

        case "stipendHigh":

            filtered.sort((a, b) => b.stipend - a.stipend);

            break;

        case "stipendLow":

            filtered.sort((a, b) => a.stipend - b.stipend);

            break;

        case "date":

            filtered.sort((a, b) =>

                new Date(b.datePosted) - new Date(a.datePosted)

            );

            break;

        case "durationShort":

            filtered.sort((a, b) =>

                parseInt(a.duration) - parseInt(b.duration)

            );

            break;

        case "durationLong":

            filtered.sort((a, b) =>

                parseInt(b.duration) - parseInt(a.duration)

            );

            break;

    }

    // Store globally
    filteredInternships = filtered;

    // Display
    displayInternships(filtered);

}

// ===========================================
// Reset Filters
// ===========================================

function resetFilters() {

    searchInput.value = "";

    fieldFilter.value = "";

    locationFilter.value = "";

    typeFilter.value = "";

    durationFilter.value = "";

    sortSelect.value = "";

    filteredInternships = [...internships];

    displayInternships(filteredInternships);

}

// ===========================================
// Export
// ===========================================

window.applyFilters = applyFilters;
window.resetFilters = resetFilters;