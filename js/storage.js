/* ===========================================
   Internship Portal
   storage.js
   LocalStorage Utility Functions
=========================================== */

const STORAGE_KEYS = {
    BOOKMARKS: "savedInternships",
    THEME: "theme"
};

// ===========================================
// Bookmarks
// ===========================================

// Get all bookmarked internship IDs
function getBookmarks() {

    const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);

    return data ? JSON.parse(data) : [];

}

// Save bookmark array
function saveBookmarks(bookmarks) {

    localStorage.setItem(
        STORAGE_KEYS.BOOKMARKS,
        JSON.stringify(bookmarks)
    );

}

// Check if internship is bookmarked
function isBookmarked(id) {

    return getBookmarks().includes(id);

}

// Add bookmark
function addBookmark(id) {

    const bookmarks = getBookmarks();

    if (!bookmarks.includes(id)) {

        bookmarks.push(id);

        saveBookmarks(bookmarks);

    }

}

// Remove bookmark
function removeBookmark(id) {

    const bookmarks = getBookmarks().filter(item => item !== id);

    saveBookmarks(bookmarks);

}

// Clear all bookmarks (optional utility)
function clearBookmarks() {

    localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);

}

// Number of saved internships
function getBookmarkCount() {

    return getBookmarks().length;

}

// ===========================================
// Theme
// ===========================================

// Save selected theme
function saveTheme(theme) {

    localStorage.setItem(STORAGE_KEYS.THEME, theme);

}

// Get current theme
function getTheme() {

    return localStorage.getItem(STORAGE_KEYS.THEME) || "light";

}

// ===========================================
// Update Saved Badge
// ===========================================

function updateSavedCount() {

    const badge = document.getElementById("savedCount");

    if (!badge) return;

    badge.textContent = getBookmarkCount();

}

// ===========================================
// Initialize Storage
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    updateSavedCount();

});

// ===========================================
// Export to Global Scope
// ===========================================

window.getBookmarks = getBookmarks;
window.saveBookmarks = saveBookmarks;

window.addBookmark = addBookmark;
window.removeBookmark = removeBookmark;
window.clearBookmarks = clearBookmarks;

window.isBookmarked = isBookmarked;
window.getBookmarkCount = getBookmarkCount;

window.saveTheme = saveTheme;
window.getTheme = getTheme;

window.updateSavedCount = updateSavedCount;