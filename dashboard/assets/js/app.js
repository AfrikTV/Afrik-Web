import {Nav} from "../../components/nav.js";
import {startApp, navigate, subNavigation} from "../../Root.js";
document.getElementById("navigation").innerHTML = Nav;

// loads the main dynamic sections of the app
startApp()

// adding an array in case there are more functions to run onload in the future
const currentPath = window.location.pathname;
navigate(currentPath);

// Re-attach event listeners to sub navigation elements
const reAddEventListeners = () => document.querySelector('a[data-url="/dashboard/"]').addEventListener('click', subNavigation);
document.addEventListener("DOMContentLoaded", reAddEventListeners);