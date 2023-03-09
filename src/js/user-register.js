/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

// Get reference to all elements in register tab
const registerTab = document.getElementsByClassName("register");
console.log(registerTab);

// Get reference to all elements in userList tab
const userTabs = document.getElementsByClassName("users");
console.log(userTabs);



/* --- Nav references --- */

// code here...


/* --- Form field references --- */

// code here...


/* --- Table list reference --- */

// code here...



/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

// code here...



/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */
//Select the DOM elements

const revealButton = document.querySelector(".registers");
const hiddenSection = document.querySelector(".users");

//Callback Function
function revealSection() {
    if (hiddenSection.classList.contains('visible')) {
        hiddenSection.classList.remove('visible');
    } else {
        hiddenSection.classList.add('visible');
    }

}
// Event listener

revealButton.addEventListener('click', revealSection, false);

//Select DOM elements

const revButton = document.querySelector(".registers");
const hidSection = document.querySelector(".register");

//Callback Function
function revSection() {
    if (hidSection.classList.contains('visible')) {
        hidSection.classList.remove('visible');
    } else {
        hidSection.classList.add('visible');
    }

}
// Event listener

revButton.addEventListener('click', revSection, false);

//Select DOM elements

const reveButton = document.querySelector(".registers");
const hiddSection = document.querySelector(".user");

//Callback Function
function reveSection() {
    if (hiddSection.classList.contains('visible')) {
        hiddSection.classList.remove('visible');
    } else {
        hiddSection.classList.add('visible');
    }

}
// Event listener

reveButton.addEventListener('click', reveSection, false);

// Register user button


//Select DOM elements

//Select DOM elements

const rButton = document.querySelector("users-tab-button");
const hSection = document.querySelector(".register");

//Callback Function
function rSection() {
    if (hSection.classList.contains('visible')) {
        hSection.classList.remove('visible');
    } else {
        hSection.classList.add('visible');
    }

}
// Event listener

rButton.addEventListener('click', rSection, false);