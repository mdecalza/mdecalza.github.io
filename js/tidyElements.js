// Add some padding underneath the navbar
// equal to the height of the navbar in pixels
function addPad() {
    document.getElementById("navpad").style.height = document.getElementById("navi").offsetHeight + "px";
}

// Add or remove padding from the intro div
// depending on how wide the info card element is.
function introPadding() {
    if (document.getElementById("info-card").scrollWidth + 45 >= window.innerWidth) {
        document.getElementById("intro").className = "";
    }
    else {
        document.getElementById("intro").className = "py-5";
    }
}

function tidyElements() {
    addPad();
    introPadding();
}

tidyElements();  // on start
window.onresize = function() {
    tidyElements();
}