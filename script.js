// Function to open a specific tab
function openTab(event, tabId) {
    // Hide all tab content
    let tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(tab => tab.classList.remove("active"));

    // Remove "active" class from all buttons
    let tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => button.classList.remove("active"));

    // Show the selected tab content and highlight the button
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");

    // Show the "Hide All Tabs" button when a tab is opened
    document.querySelector(".hide-all-button").style.display = "block";
}

// Function to hide all tabs
function hideAllTabs() {
    let tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(tab => tab.classList.remove("active")); // Hide all tabs

    // Optionally, remove active state from tab buttons as well
    let tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => button.classList.remove("active"));

    // Hide the "Hide All Tabs" button when all tabs are hidden
    document.querySelector(".hide-all-button").style.display = "none";
}

// Hide all tabs at the start (optional)
document.addEventListener("DOMContentLoaded", () => {
    let tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(tab => tab.classList.remove("active")); // Hide all tabs initially

    // Make sure the "Hide All Tabs" button is hidden at the start
    document.querySelector(".hide-all-button").style.display = "none";
});
