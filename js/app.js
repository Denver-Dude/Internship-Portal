```javascript
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
// Load JSON
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    loadInternships();

});

// ===========================================
// Fetch Internship Data
// ===========================================

async function loadInternships() {

    try {

        const response = await fetch("data/internships.json");

        // Make internship data available globally
        window.internships = await response.json();

        internships = window.internships;

        filteredInternships = [...internships];

        populateFieldFilter();

        displayInternships(filteredInternships);

    }

    catch (error) {

        console.error("Error loading internship data:", error);

        internshipContainer.innerHTML = `

            <div class="col-12">

                <div class="alert alert-danger">

                    Unable to load internship data.

                </div>

            </div>

        `;

    }

}

// ===========================================
// Populate Field Filter
// ===========================================

function populateFieldFilter() {

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

        internshipContainer.innerHTML += createCard(internship);

    });

    updateSavedCount();

}

// ===========================================
// Create Internship Card
// ===========================================

function createCard(internship) {

    const saved = isBookmarked(internship.id);

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

                ${
                    internship.description.length > 90
                        ? internship.description.substring(0, 90) + "..."
                        : internship.description
                }

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
```
