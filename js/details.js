/* ===========================================
   Internship Portal
   details.js
   Internship Details Modal
=========================================== */

// Bootstrap Modal Instances
const detailsModal = new bootstrap.Modal(
    document.getElementById("detailsModal")
);

const applyModal = new bootstrap.Modal(
    document.getElementById("applyModal")
);

// Store selected internship
let selectedInternship = null;

// ===========================================
// Show Details
// ===========================================

function showDetails(id) {

    const internship = getInternshipById(id);

    if (!internship) return;

    selectedInternship = internship;

    document.getElementById("modalTitle").textContent =
        internship.title;

    document.getElementById("modalBody").innerHTML = `

<div class="container-fluid">

<div class="row">

<div class="col-md-3 text-center">

<img
src="${internship.logo}"
class="img-fluid rounded shadow-sm mb-3"
alt="${internship.company}">

<h5>${internship.company}</h5>

</div>

<div class="col-md-9">

<h3 class="fw-bold">

${internship.title}

</h3>

<div class="my-3">

<span class="badge bg-primary">

${internship.field}

</span>

<span class="badge bg-success">

${internship.location}

</span>

<span class="badge bg-warning text-dark">

${internship.type}

</span>

<span class="badge bg-secondary">

${internship.duration}

</span>

</div>

<div class="detail-item">

<span class="detail-label">

💰 Stipend:

</span>

₹${internship.stipend.toLocaleString()}

</div>

<div class="detail-item">

<span class="detail-label">

📅 Date Posted:

</span>

${formatDate(internship.datePosted)}

</div>

<div class="detail-item">

<span class="detail-label">

⏰ Deadline:

</span>

${formatDate(internship.deadline)}

</div>

<hr>

<h5>

Required Skills

</h5>

<div class="mb-3">

${internship.skills.map(skill =>

`<span class="skill-badge">${skill}</span>`

).join("")}

</div>

<h5>

Job Description

</h5>

<p>

${internship.description}

</p>

<div class="d-grid mt-4">

<button
class="btn btn-primary btn-lg"
onclick="openApplication()">

<i class="bi bi-send-fill"></i>

Apply Now

</button>

</div>

</div>

</div>

</div>

`;

    detailsModal.show();

}

// ===========================================
// Open Application Form
// ===========================================

function openApplication() {

    detailsModal.hide();

    document.getElementById("applicationForm").reset();

    document.getElementById("resumePreview").textContent = "";

    // Optional: show internship name
    document.querySelector("#applyModal .modal-title").textContent =
        `Apply for ${selectedInternship.title}`;

    applyModal.show();

}

// ===========================================
// Date Formatting
// ===========================================

function formatDate(dateString) {

    const options = {

        day: "numeric",
        month: "long",
        year: "numeric"

    };

    return new Date(dateString).toLocaleDateString(
        "en-IN",
        options
    );

}

// ===========================================
// Get Selected Internship
// ===========================================

function getSelectedInternship() {

    return selectedInternship;

}

// ===========================================
// Export
// ===========================================

window.showDetails = showDetails;
window.openApplication = openApplication;
window.getSelectedInternship = getSelectedInternship;