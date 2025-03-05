// Display a dynamic welcome message
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("welcomeText").innerText = "Hello, RUETians!";
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!"); // Debugging: Check if script is running

    let uploadBtn = document.getElementById("uploadBtn");

    if (uploadBtn) {
        uploadBtn.addEventListener("click", function() {
            alert("Upload feature will be added soon!");
            console.log("Upload button clicked!"); // Debugging: Check if event fires
        });
    } else {
        console.error("Upload button not found!");
    }
});