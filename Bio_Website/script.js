document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    // Adding an interactive welcome message
    setTimeout(() => {
        header.style.backgroundColor = "rgba(66, 65, 65, 0.2)";
        header.querySelector("h2").textContent = "Welcome to my Portfolio!";
    }, 2000);
});
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
