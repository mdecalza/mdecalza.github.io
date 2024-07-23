/* Copyright 2024 Matthew DeCalzadilla */

// Add some padding underneath the navbar
// equal to the height of the navbar in pixels
function navbarPad() {
    document.getElementById("navpad").style.height = document.getElementById("navi").offsetHeight + "px";
}

navbarPad();  // on start
window.onresize = function() {
    navbarPad();
}