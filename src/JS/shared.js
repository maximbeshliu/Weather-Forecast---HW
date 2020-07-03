import '../styles/style.scss';
import '../images/img.jpg';
import { RederHeader } from './render.js';
import { routes } from './route.js';

function changePage() {
    let route = null;

    if (location.pathname === '/') {
        route = routes.index;
    }

    for (let item in routes) {
        if (location.pathname.includes(item)) {
            route = item;
        }
    }
    document.getElementById(route).classList.add('active');

}

changePage();

function burgerMenu() {
    let burger = document.querySelector('.burger-menu');
    let btnMenu = document.querySelector('.burger-menu__button');
    let menuItem = document.querySelector('.menu');
    let overlay = document.querySelector('.burger-menu__overlay');

    btnMenu.addEventListener('click', (event) => {
        if (event.target) {
            burger.classList.toggle('burger-menu__active');
        }
    });
    overlay.addEventListener('click', (event) => {
        if (event.target) {
            burger.classList.remove('burger-menu__active');
        }
    });

    menuItem.addEventListener('click', (event) => {
        if (event.target) {
            burger.classList.remove('burger-menu__active');
        }
    });
}

burgerMenu();


window.create = new RederHeader;

