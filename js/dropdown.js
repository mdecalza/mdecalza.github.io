/* Copyright 2024 Matthew DeCalzadilla */

const dropdownButtons = document.getElementsByClassName("dropdown-btn");
const dropdownElements = document.getElementsByClassName("dropdown-element");
const dropdownMap = new Map();

// Maps each dropdown button to a dropdown element to be displayed on click
for (let i = 0; i < dropdownButtons.length && i < dropdownElements.length; i++) {
    dropdownMap.set(dropdownButtons[i], dropdownElements[i]);
}

// Toggles whether a dropdown element is displayed
for (let [button, elem] of dropdownMap) {
    button.addEventListener("click", () => {
        // Close all other dropdown elements
        for (let i = 0; i < dropdownElements.length; i++) {
            if (dropdownElements[i] !== elem) {
                dropdownElements[i].style.display = 'none';
            }
        }

        // Toggle current dropdown element
        if (elem.style.display === "none") {
            elem.style.display = "block";
        }
        else {
            elem.style.display = "none";
        }
    });
}