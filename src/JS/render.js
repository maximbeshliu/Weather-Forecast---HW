import { dateConverter, dropdownRender as renderDrop, } from './utils.js';

export function RenderPage() {
    let body = document.body;
    this.container = document.querySelector('.main');
    let header = RederHeader();
    this.dropdown = renderDrop;
    body.append(this.container);
    this.dropdown();
    body.append(header);
}

export function RederHeader() {
    let body = document.body;
    let header = document.querySelector('.header');
    let date = document.querySelector('.date');
    let currentDate = dateConverter();
    date.innerHTML = currentDate;

}






