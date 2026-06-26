/* ===========================================
   Internship Portal
   app.js
   Main Application File
=========================================== */

// ===========================================
// Global Data
// ===========================================

let internships = [];
let filteredInternships = [];

// ===========================================
// DOM Elements
// ===========================================

const internshipContainer = document.getElementById("internshipContainer");
const resultsInfo = document.getElementById("resultsInfo");
const noResults = document.getElementById("noResults");
const fieldFilter = document.getElementById("fieldFilter");

// ===========================================
// Initialize App
// ===========================================

document.addEventListener("DOMContentLoaded", () => {
    loadInternships();
});

// ===========================================
// Load Internship Data
// ===========================================

async function loadInternships() {

    try {

        const response = await fetch("data/internships.json");

        if (!response.ok) {
            throw new Error("Failed to load internship data.");
        }

        internships = await response.json();

        // Make available to other JS files
        window.internships = internships;

        filteredInternships = [...internships];

        populateFieldFilter();

        displayInternships(filteredInternships);

    } catch (error) {

        console.error(error);

        internshipContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger">
                    Unable to load internship data.
                </div>
            </div>
        `;

        resultsInfo.textContent = "Unable to load internships.";

    }

}

// ===========================================
// Populate Field Dropdown
// ===========================================

function populateFieldFilter() {

    fieldFilter.innerHTML = `<option value="">All Fields</option>`;

    const fields = [...new Set(internships.map(item => item.field))];

    fields.sort();

    fields.forEach(field => {

        const option = document.createElement("option");

        option.value = field;

        option.textContent = field;

        fieldFilter.appendChild(option);

    });

}

// ===========================================
// Display Internship Cards
// ===========================================

function displayInternships(data) {

    internshipContainer.innerHTML = "";

    if (data.length === 0) {

        noResults.classList.remove("d-none");

        resultsInfo.textContent = "0 Internship(s) Found";

        return;

    }

    noResults.classList.add("d-none");

    resultsInfo.textContent = `${data.length} Internship(s) Found`;

    data.forEach(internship => {

        internshipContainer.insertAdjacentHTML(
            "beforeend",
            createCard(internship)
        );

    });

    updateSavedCount();

}

// ===========================================
// Create Internship Card
// ===========================================

function createCard(internship) {

    const saved = isBookmarked(internship.id);

    const shortDescription =
        internship.description.length > 90
            ? internship.description.substring(0, 90) + "..."
            : internship.description;

    return `

<div class="col-lg-4 col-md-6 fade-in">

    <div class="card internship-card shadow-sm h-100">

        <div class="card-body">

            <div class="d-flex justify-content-between align-items-center mb-3">

                <img
                    src="${internship.logo}"
                    class="company-logo"
                    alt="${internship.company}">

                <span class="stipend">
                    ₹${internship.stipend.toLocaleString()}
                </span>

            </div>

            <h5 class="fw-bold">
                ${internship.title}
            </h5>

            <h6 class="text-secondary">
                ${internship.company}
            </h6>

            <div class="my-3">

                <span class="badge badge-location">
                    ${internship.location}
                </span>

                <span class="badge badge-type">
                    ${internship.type}
                </span>

                <span class="badge badge-duration">
                    ${internship.duration}
                </span>

            </div>

            <p class="card-description">
                ${shortDescription}
            </p>

            <div class="d-grid gap-2 mt-4">

                <button
                    class="btn btn-primary btn-view"
                    onclick="showDetails(${internship.id})">

                    <i class="bi bi-eye"></i>
                    View Details

                </button>

                <button
                    class="btn ${saved ? "btn-success" : "btn-outline-success"} btn-save"
                    onclick="toggleBookmark(${internship.id}, this)">

                    <i class="bi ${saved ? "bi-bookmark-heart-fill" : "bi-bookmark-heart"}"></i>

                    ${saved ? "Saved" : "Save"}

                </button>

            </div>

        </div>

    </div>

</div>

`;

}

// ===========================================
// Get Internship By ID
// ===========================================

function getInternshipById(id) {

    return internships.find(item => item.id === id);

}

// ===========================================
// Refresh Cards
// ===========================================

function refreshCards() {

    displayInternships(filteredInternships);

}

// ===========================================
// Export Functions
// ===========================================

window.getInternshipById = getInternshipById;
window.displayInternships = displayInternships;
window.refreshCards = refreshCards;