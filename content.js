/*
  Made by: mgachiee
  GitHub: github.com/mgachiee
  Date: 2024-09-22
*/

// For login page
const background = document.getElementById("bgslider");

const setBackgroundSlider = () => {
  const bgImage = chrome.runtime.getURL("assets/olivia_bg.png");
  background.style.backgroundImage = `url(${bgImage})`; 
  background.style.backgroundSize = "cover";
  background.style.mixBlendMode = "darken";
}

if (background) setBackgroundSlider();
else {
  console.error("Error: Background slider not found. Ignore if you're not in the login page.");
}

// For future updates
// const validDomains = Array.from({ length: 8 }, (_, i) => `sis${i + 1}.pup.edu.ph`);
// const inLoginPage = validDomains.includes(currentDomain) && urlPath.includes("/student");

// For pages after login
const wrapperElement = document.querySelector(".wrapper .content-wrapper");

const setHomeBackground = () => {
  const bgImage = chrome.runtime.getURL("assets/sour_bg.jpg");
  wrapperElement.style.backgroundImage = `url(${bgImage})`; 
  wrapperElement.style.backgroundSize = "cover";
  wrapperElement.style.backgroundPosition = "center";
}

const validPaths = ['home', 'enrollment', 'accounts', 'schedule', 'grades', 'forms', 'hdf'];
const currentUrlPath = window.location.pathname;
const isLoggedIn = validPaths.some(path => currentUrlPath.includes(`/student/${path}`));

if (isLoggedIn) setHomeBackground();