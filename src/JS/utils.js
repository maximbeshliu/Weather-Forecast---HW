import { getForecast, renderForecast, getWeeklyForecast } from './api.js';


export function dateConverter() {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var mm = m < 10 ? '0' + m : m;
    var dd = d < 10 ? '0' + d : d;
    return '' + dd + '-' + mm + '-' + y;
}

export function dropdownRender() {
    let dropdown = document.createElement('select');
    dropdown.setAttribute('class', 'dropdown');
    this.container.append(dropdown);
    let selector = document.querySelector('.dropdown');
    let emptyOption = document.createElement('option');
    emptyOption.innerText = "---select---";
    dropdown.append(emptyOption);


    for (var keyCity in cities) {
        var option = document.createElement('option');
        option.setAttribute('value', keyCity);
        option.setAttribute('id', keyCity);
        option.innerText = cities[keyCity].name;
        dropdown.append(option);
    }

    selector.addEventListener('change', () => {
        let city = event.target.value;
        getCity(city);
        localStorage.setItem('selectedCity', city);
    });

    function getCity(city) {
        let citiesUrl = cities[city].url;
        let image = document.querySelector('.picture');
        image.setAttribute('src', citiesUrl);
        let cityName = cities[city].name;
        document.getElementById('info').style.visibility = "visible";
        getForecast(cityName).then(data => renderForecast(data));

    }



    if (selectedCity) {
        let optionStorage = document.getElementById(selectedCity);
        if (optionStorage) {
            getCity(selectedCity);
            optionStorage.selected = true;
        }

    }

}

export const selectedCity = localStorage.getItem('selectedCity');






export const cities = {

    london: {

        name: "London",

        url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"

    },

    chisinau: {

        url: "https://sx-content-labs.sixt.io/chisinau-city-header.jpg",

        name: "Chisinau"

    },

    moscow: {

        url: "https://cdn.getyourguide.com/img/tour_img-1233054-98.jpg",

        name: "Moscow"

    },

    ny: {

        url: "https://d12dkjq56sjcos.cloudfront.net/pub/media/wysiwyg/newyork/01-city-landing/New-York-Skyline-Big-Bus-Tours-Jan-2018.jpg",

        name: "New York"

    },

    paris: {

        url: "https://imgix.bustle.com/uploads/shutterstock/2019/9/19/a49124d9-5f62-47a5-b5ec-8dd3a3066b30-shutterstock-1420728554.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70&dpr=2",

        name: "Paris"

    },

};