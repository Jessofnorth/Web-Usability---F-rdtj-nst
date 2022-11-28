"use strict";
// collect the elements with query selectors, add eventlisteners and toggle the class "is-active" on and off. 
// css regulates if it showes or hides.
//hamburger menu, get button, show/hide menu on click
const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobilenav.classList.toggle("is-active");
    hamburger.setAttribute("aria-expanded", "true");
});
//search button show/hide input
const src = document.querySelector(".search");
const searchbar = document.querySelector(".search-padd");
const srcclose = document.querySelector(".searchclose");
const cls = document.querySelector(".close");
src.addEventListener("click", function() {
    searchbar.classList.toggle("is-active");
    src.classList.toggle("is-active");
    cls.classList.toggle("is-active");
    srcclose.classList.toggle("is-active");
});
// for the X button on search
cls.addEventListener("click", function() {
    searchbar.classList.toggle("is-active");
    src.classList.toggle("is-active");
    cls.classList.toggle("is-active");
    srcclose.classList.toggle("is-active");
});
// if search button is clicked, close search
srcclose.addEventListener("click", function() {
    searchbar.classList.toggle("is-active");
    src.classList.toggle("is-active");
    cls.classList.toggle("is-active");
    srcclose.classList.toggle("is-active");
});

//Menu dropdown
const menubtn = document.querySelector(".menubtn");
const dropdown = document.querySelector(".dropdown");
menubtn.addEventListener("click", function() {
    menubtn.classList.toggle("is-active");
    dropdown.classList.toggle("is-active");
});

// show hide time when SNARAST is checked
function snarast() {
    if (document.getElementById('now').click) {
        const snarasthide = document.querySelector(".snarasthide");
        const snarastradio = document.querySelector(".snarastradio");
        snarasthide.classList.toggle("is-active");
        snarastradio.classList.toggle("is-active");
    }
};

// show hide returresa on click in checkbox
function returntrip() {
    if (document.getElementById('return').click) {
        const returresa = document.querySelector(".returresa");
        returresa.classList.toggle("is-active");
    }
};
// shiw/hide recurring trips optioins on click
function recurringtrip() {
    if (document.getElementById('recurr').click) {
        const recurring = document.querySelector(".recurring");
        recurring.classList.toggle("is-active");
    }

};