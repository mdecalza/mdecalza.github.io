/* Copyright 2024 Matthew DeCalzadilla */

// Update the copyright year in the footer
const today = new Date(Date.now());
const thisYear = today.getFullYear().toString();

const divs = document.getElementsByClassName("copyright-text");
for (let i = 0; i < divs.length; i++) {
    divs.item(i).innerText = thisYear === "2024" ? "© Matthew DeCalzadilla 2024" : "© Matthew DeCalzadilla 2024 - " + thisYear;
}