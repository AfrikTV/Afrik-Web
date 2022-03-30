import {Links} from './index.js';

let navLinks = Links.map((page, index) => {
    let cleanPageTitle = page.path.split('/').pop().replace('/', '');
    let title = cleanPageTitle.replace('.html','');
    let path = title === '' || title === '/dashboard' ? 'home' : title;
    let active = window.location.pathname === page.path ? 'active' : '';
    return `<li class="${active}"><a href"#" data-url="${page.path}" class="${page.icon} nav-links" tabindex="0" role="link">${path}</a></li>`
}).join('')

export const Nav = navLinks;