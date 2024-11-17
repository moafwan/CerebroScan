

// Go back to the previous page
function goBack() {
    window.history.back();
}

// Smooth scroll to a specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
// Redirect to tumor detection process
function checkTumor() {
    window.location.href = "check-tumor.html";
}

// Redirect to Alzheimer's detection process
function checkAlzheimers() {
    window.location.href = "check-alzheimer.html";
}