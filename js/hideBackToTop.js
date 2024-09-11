/* Copyright 2024 Matthew DeCalzadilla */

// Hide back to top link when at top of page
const backToTop = document.getElementById("back-to-top");

setInterval(() => {
    if (window.scrollY >= window.innerHeight) {
        backToTop.style.display = "block";
    }
    else {
        backToTop.style.display = "none";
    }
}, 200);