/* ===========================================
   Internship Portal
   bookmark.js
   Handles Save / Unsave Functionality
=========================================== */

// ===========================================
// Toggle Bookmark
// ===========================================

function toggleBookmark(id, button) {

    if (isBookmarked(id)) {

        removeBookmark(id);

        button.classList.remove("btn-success");
        button.classList.add("btn-outline-success");

        button.innerHTML = `
            <i class="bi bi-bookmark-heart"></i>
            Save
        `;

    } else {

        addBookmark(id);

        button.classList.remove("btn-outline-success");
        button.classList.add("btn-success");

        button.innerHTML = `
            <i class="bi bi-bookmark-heart-fill"></i>
            Saved
        `;

    }

    updateSavedCount();

}

// ===========================================
// Get Saved Internship Objects
// ===========================================

function getSavedInternships() {

    const bookmarks = getBookmarks();

    if (typeof internships === "undefined") return [];

    return internships.filter(internship =>
        bookmarks.includes(internship.id)
    );

}

// ===========================================
// Remove Bookmark From Saved Page
// ===========================================

function removeSavedInternship(id) {

    removeBookmark(id);

    updateSavedCount();

    if (typeof loadSavedInternships === "function") {
        loadSavedInternships();
    }

}

// ===========================================
// Clear All Saved Internships
// ===========================================

function clearAllBookmarks() {

    const confirmDelete = confirm(
        "Are you sure you want to remove all saved internships?"
    );

    if (!confirmDelete) return;

    clearBookmarks();

    updateSavedCount();

    if (typeof loadSavedInternships === "function") {
        loadSavedInternships();
    }

}

// ===========================================
// Export Functions
// ===========================================

window.toggleBookmark = toggleBookmark;
window.getSavedInternships = getSavedInternships;
window.removeSavedInternship = removeSavedInternship;
window.clearAllBookmarks = clearAllBookmarks;