import '../styles/style.scss';
import '../images/img.jpg';
import { RederHeader } from './render.js';
import { routes } from './route.js';

function changePage() {
    let route = null;
    for (let item in routes) {
        if (location.pathname.includes(item)) {
            route = item;
        }
    }
    document.getElementById(route).classList.add('active');

}

changePage();


window.create = new RederHeader;

