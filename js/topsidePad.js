/* Copyright 2024 Matthew DeCalzadilla */

// Add some padding underneath the navbar
// equal to the height of the navbar in pixels

// Add or remove padding from the topside div
// depending on how wide the info card element is.
function topsidePad() {
    if (window.innerWidth / window.innerHeight < .85) {
        document.getElementById("topside").className = "";
    }
    else {
        document.getElementById("topside").className = "py-5";
    }
}

topsidePad();  // on start
window.onresize = () => {
    topsidePad();
}