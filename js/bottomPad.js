/* Copyright 2024 Matthew DeCalzadilla */

// Creates a div to fill out the bottom of the page
// and add to topside container
const topsideDiv = document.getElementById("topside");
const bottomPad = document.createElement("div");
bottomPad.id = "bottom-pad";
topsideDiv.appendChild(bottomPad);