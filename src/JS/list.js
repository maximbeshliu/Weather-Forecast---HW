import { getForecast, renderForecast } from './api.js';
import { cities, selectedCity } from './utils.js';

function renderCityList(data) {
    let container = document.createElement('div');
    container.setAttribute('class', 'weather-container');
    let mainList = document.querySelector('.container-list');
    let weatherInfo = document.createElement('div');
    weatherInfo.setAttribute('class', 'about-weather');
    let dataName = document.createElement('h3');
    let dataTemp = document.createElement('span');
    let dataDescription = document.createElement('span');
    let dataWind = document.createElement('span');
    dataName.innerText = data.name;
    dataTemp.innerText = `Temperature: ${Math.floor(data.main.temp)} ${"°C"}`;
    dataDescription.innerText = data.weather[0].description;
    dataWind.innerText = `${"Wind"}: ${data.wind.speed} ${"m/s"} `;
    let clouds = document.createElement('img');
    container.append(clouds);
    container.append(weatherInfo);
    mainList.append(container);
    weatherInfo.append(dataName);
    weatherInfo.append(dataTemp);
    weatherInfo.append(dataDescription);
    weatherInfo.append(dataWind);

    for (let i = 500; i <= 504; i++) {
        if (data.weather[0].id === i) {
            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/10d@2x.png');
        }
    }
    for (let l = 520; l <= 531; l++) {
        if (data.weather[0].id === l) {
            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/09d@2x.png');
        }
    }

    if (data.weather[0].id === 501) {
        clouds.setAttribute('src', 'http://openweathermap.org/img/wn/13d@2x.png');
    }

    if (data.weather[0].id === 800) {
        clouds.setAttribute('src', 'http://openweathermap.org/img/wn/01d@2x.png');
    }

    if (data.weather[0].id === 801) {
        clouds.setAttribute('src', 'http://openweathermap.org/img/wn/02d@2x.png');
    }
    if (data.weather[0].id === 802) {
        clouds.setAttribute('src', 'http://openweathermap.org/img/wn/03d@2x.png');
    }
    for (let j = 803; j <= 804; j++) {
        if (data.weather[0].id === j) {
            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/04d@2x.png');
        }
    }
    for (let a = 701; a <= 781; a++) {
        if (data.weather[0].id === a) {
            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/50d@2x.png');
        }
    }
    for (let s = 600; s <= 622; s++) {
        if (data.weather[0].id === s) {
            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/13d@2x.png');
        }
    }
    for (let d = 300; d <= 321; d++) {
        if (data.weather[0].id === d) {
            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/09d@2x.png');
        }
    }

    for (let b = 200; b <= 232; b++) {
        if (data.weather[0].id === b) {
            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/11d@2x.png');
        }
    }

}

let arrayOfPromises = [];

for (let city in cities) {
    arrayOfPromises.push(getForecast(cities[city].name));
    if (city === selectedCity) {
        arrayOfPromises.pop(getForecast(cities[city].name));
    }
}

Promise.all(arrayOfPromises).then(data => data.map(item => renderCityList(item)));;;