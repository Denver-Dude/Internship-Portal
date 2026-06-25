/* ===========================================
   Internship Portal
   form.js
   Application Form Handling
=========================================== */

const applicationForm = document.getElementById("applicationForm");
const resumeInput = document.getElementById("resume");
const resumePreview = document.getElementById("resumePreview");

// ===========================================
// Resume Preview
// ===========================================

resumeInput.addEventListener("change", () => {

    if (resumeInput.files.length === 0) {

        resumePreview.textContent = "";

        return;

    }

    const file = resumeInput.files[0];

    const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(file.type)) {

        alert("Please upload a PDF or Word document.");

        resumeInput.value = "";

        resumePreview.textContent = "";

        return;

    }

    const maxSize = 2 * 1024 * 1024;

    if (file.size > maxSize) {

        alert("Resume must be smaller than 2 MB.");

        resumeInput.value = "";

        resumePreview.textContent = "";

        return;

    }

    resumePreview.innerHTML = `
        <i class="bi bi-file-earmark-text-fill text-success"></i>
        ${file.name}
    `;

});

// ===========================================
// Form Submit
// ===========================================

applicationForm.addEventListener("submit", function (e) {

    e.preventDefault();

    if (!validateForm()) {

        return;

    }

    const internship = getSelectedInternship();

    bootstrap.Modal.getInstance(
        document.getElementById("applyModal")
    ).hide();

    setTimeout(() => {

        alert(
`🎉 Application Submitted Successfully!

Thank you for applying.

Internship:
${internship.title}

Company:
${internship.company}

We wish you all the best!`
        );

    }, 300);

    applicationForm.reset();

    resumePreview.textContent = "";

});

// ===========================================
// Validation
// ===========================================

function validateForm() {

    const fullName = document
        .getElementById("fullName")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const phone = document
        .getElementById("phone")
        .value
        .trim();

    const studyField = document
        .getElementById("studyField")
        .value
        .trim();

    const message = document
        .getElementById("message")
        .value
        .trim();

    // Name

    if (fullName.length < 3) {

        alert("Enter your full name.");

        return false;

    }

    // Email

    const emailRegex =

        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        alert("Please enter a valid email.");

        return false;

    }

    // Phone

    const phoneRegex =

        /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {

        alert("Enter a valid 10-digit mobile number.");

        return false;

    }

    // Field

    if (studyField.length < 2) {

        alert("Enter your field of study.");

        return false;

    }

    // Message

    if (message.length < 20) {

        alert("Please write at least 20 characters.");

        return false;

    }

    // Resume

    if (resumeInput.files.length === 0) {

        alert("Please upload your resume.");

        return false;

    }

    return true;

}

// ===========================================
// Export
// ===========================================

window.validateForm = validateForm;