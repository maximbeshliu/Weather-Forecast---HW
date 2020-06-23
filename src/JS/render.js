import { dateConverter, dropdownRender as renderDrop, } from './utils.js';

export function RenderPage() {
    let body = document.body;
    let header = document.querySelector('.header');
    this.container = document.querySelector('.main');
    let date = document.createElement('div');
    date.setAttribute('class', 'date');
    let currentDate = dateConverter();
    this.dropdown = renderDrop;
    date.append(currentDate);
    header.append(date);
    body.append(header);
    body.append(this.container);
    this.dropdown();
}






