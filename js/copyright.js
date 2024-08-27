/* Copyright 2024 Matthew DeCalzadilla */

// Update the copyright year in the footer
const today = new Date(Date.now());
const thisYear = today.getFullYear().toString();

if (thisYear === "2024") {
    document.getElementById("footer-copyright").innerText = "© Matthew DeCalzadilla 2024";
}
else {
    document.getElementById("footer-copyright").innerText = "© Matthew DeCalzadilla 2024 - " + thisYear;
}