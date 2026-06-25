# Internship Portal (Frontend Only)

A responsive frontend internship portal built using **HTML, CSS, Bootstrap, and JavaScript**. The application allows students to browse internship opportunities, search and filter listings, bookmark internships for later, and apply through a simulated application form—all without a backend.

---

## 🌐 Live Demo

**GitHub Pages:**
https://denver-dude.github.io/internship-portal

**GitHub Repository:**
https://github.com/denver-dude/internship-portal

---

## 👨‍🎓 Student Details

* **Student Name:** Denver John Demis
* **Project Title:** Internship Portal (Frontend Only)
* **Course:** Full Stack Development – JavaScript Capstone Project

---

# 📖 Project Overview

Finding internship opportunities often requires students to visit multiple websites, making the process time-consuming and confusing. This project provides a single platform where students can search, filter, bookmark, and apply for internships through a clean and responsive interface.

The project is completely frontend-based and demonstrates modern JavaScript concepts without using any backend or database.

---

# 🎯 Objectives

* Display internship opportunities from a JSON data source.
* Provide real-time search functionality.
* Allow filtering by field, location, internship type, and duration.
* Enable sorting based on stipend, duration, and date posted.
* Allow users to bookmark internships using LocalStorage.
* Provide an internship details view.
* Include an application form with validation.
* Support Light Mode and Dark Mode.
* Ensure a fully responsive user experience.

---

# ✨ Features

### 📋 Internship Listings

* Dynamic internship cards loaded from a JSON file
* Company logo
* Internship title
* Company name
* Location
* Internship type
* Duration
* Stipend
* Short description

### 🔍 Search

* Real-time search
* Searches internship title
* Searches company name
* Case-insensitive

### 📂 Filters

* Field
* Location
* Internship Type
* Duration

### ↕️ Sorting

* Newest First
* Highest Stipend
* Lowest Stipend
* Shortest Duration
* Longest Duration

### ❤️ Bookmark System

* Save internships
* Remove saved internships
* Stored using LocalStorage
* Bookmark count displayed in navbar

### 📄 Internship Details

* Company logo
* Internship information
* Skills required
* Description
* Stipend
* Deadline
* Apply button

### 📝 Application Form

* Full Name
* Email
* Phone Number
* Field of Study
* Cover Message
* Resume Upload
* Form validation
* Resume preview
* Success confirmation

### 🌙 Dark Mode

* Light/Dark mode toggle
* Saved using LocalStorage
* Automatically restored on next visit

### 📱 Responsive Design

* Desktop
* Tablet
* Mobile

---

# 🛠 Technologies Used

* HTML5
* CSS3
* Bootstrap 5
* Bootstrap Icons
* JavaScript (ES6)
* JSON
* LocalStorage
* Git
* GitHub
* VS Code

---

# 📁 Project Structure

```
internship-portal/
│
├── index.html
├── saved.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── storage.js
│   ├── bookmark.js
│   ├── filters.js
│   ├── details.js
│   ├── form.js
│   └── darkmode.js
│
├── data/
│   └── internships.json
│
├── images/
│
└── README.md
```

---

# ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/denver-dude/internship-portal.git
```

### Navigate into the project

```bash
cd internship-portal
```

### Run the project

Open `index.html` directly in your browser or use the **Live Server** extension in Visual Studio Code.

---

# 🚀 How to Use

1. Open the Internship Portal.
2. Browse available internship listings.
3. Use the search bar to find internships.
4. Apply filters to narrow the results.
5. Sort internships based on your preference.
6. Click **View Details** for more information.
7. Bookmark internships you want to save.
8. Click **Apply Now** to fill out the application form.
9. Toggle Dark Mode if desired.

---

# 💾 LocalStorage Usage

The application stores:

* Saved internships
* Selected theme (Light/Dark)

No personal application data is permanently stored.

---

# 📌 Project Limitations

* Frontend only
* No backend server
* No database
* Applications are not actually submitted
* Internship data is static
* No employer or admin login

---

# 🔮 Future Enhancements

* Backend integration
* User authentication
* Admin dashboard
* Employer login
* Company profile pages
* AI-powered cover letter generator
* Internship recommendation system
* Pagination
* Email notifications
* Advanced filtering

---

# 📸 Screenshots

You can add screenshots here after completing the project.

* Home Page
* Search & Filters
* Internship Details Modal
* Application Form
* Saved Internships
* Dark Mode

---

# 🧠 Concepts Demonstrated

* DOM Manipulation
* Fetch API
* JSON Data Handling
* LocalStorage
* Event Handling
* ES6 JavaScript
* Array Methods
* Form Validation
* Responsive Design
* Bootstrap Components

---

# 📄 License

This project was developed for educational purposes as part of a JavaScript Capstone Project.

---

# 👨‍💻 Author

**Denver John Demis**

GitHub: https://github.com/denver-dude

Live Project: https://denver-dude.github.io/internship-portal

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!
