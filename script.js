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
}

// Hide all tabs at the start
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
});
