import {Routes} from "./components/index.js";
import {Header} from "./components/Header.js";
import {showChart} from "./assets/js/charts.js";

export const startApp = () => {
    document.getElementById('top-nav').innerHTML = Header;
    document.getElementById('root').innerHTML = Routes[window.location.pathname]
}

export function clientSideNavigation() {
    const navListItems = document.querySelectorAll('#navigation li');
    document.querySelectorAll('.nav-links').forEach(nav => {
        nav.addEventListener('click', (e) => {
            navListItems.forEach(li => li.removeAttribute("class"))
            nav.parentElement.setAttribute("class", "active")
            const pathName = e.target.getAttribute("data-url");
            if(pathName.indexOf("index")) {
              setTimeout(showChart, 100)
            }
            navigate(pathName)
        })
    })
}

export function subNavigation() {
    const navListItems = document.querySelectorAll('#navigation li');
    document.querySelectorAll('.sub-nav-links').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navListItems.forEach(li => li.removeAttribute("class"))
            document.querySelector('a[data-url="/dashboard/activity"]').parentElement.setAttribute("class", "active")
            const pathName = e.target.getAttribute("data-url");
            if(pathName.indexOf("index")) {setTimeout(showChart, 100)}
            navigate(pathName)
        })
    })
}

const currentPath = window.location.pathname;
let onLoadFunctions = [clientSideNavigation, subNavigation];
if(currentPath.indexOf("index") !== 0) {onLoadFunctions.push(showChart)}

export function attachEventHandlers(onLoadFunctions) {
    onLoadFunctions.forEach((fn) => {
        document.addEventListener("DOMContentLoaded", fn)
    })
}

export const navigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    document.getElementById('top-nav').innerHTML = Header;
    document.getElementById('root').innerHTML  = Routes[pathname]
    attachEventHandlers(onLoadFunctions)
}

window.onpopstate = () => {
    document.getElementById('top-nav').innerHTML = Header;
    document.getElementById('root').innerHTML = Routes[window.location.pathname]
    attachEventHandlers(onLoadFunctions)
}