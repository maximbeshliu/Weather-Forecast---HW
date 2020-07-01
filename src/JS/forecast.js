import { getWeeklyForecast } from './api.js';
import { selectedCity, cities, dateConverter } from './utils.js';

if (selectedCity) {
    getWeeklyForecast(cities[selectedCity].name).then(data => {
        console.log(data);
        return data.list.reduce((accumulator, item) => {
            const date = new Date(item.dt_txt).getDate();
            if (!accumulator[date]) {
                accumulator[date] = [];
            }
            accumulator[date].push(item);
            return accumulator;
        }, {});
    }).then(result => {
        for (let day in result) {
            result[day].map((item) => {
                let certainTime = new Date(item.dt_txt).getHours();
                if (certainTime === 12) {
                    let container = document.createElement('div');
                    container.setAttribute('class', 'weather-container');
                    let mainList = document.querySelector('.container-list');
                    let weatherInfo = document.createElement('div');
                    weatherInfo.setAttribute('class', 'about-weather');
                    let dataName = document.createElement('h3');
                    let dataTemp = document.createElement('span');
                    let dataDescription = document.createElement('span');
                    let dataWind = document.createElement('span');
                    let weatherDate = document.createElement('span');
                    let day = new Date(item.dt_txt).getDate();
                    let month = new Date(item.dt_txt).getMonth() + 1;
                    let year = new Date(item.dt_txt).getFullYear();
                    let mm = month < 10 ? '0' + month : month;
                    let dd = day < 10 ? '0' + day : day;
                    weatherDate.innerText = dd + "." + mm + "." + year;
                    dataName.innerText = cities[selectedCity].name;
                    dataTemp.innerText = `Temperature: ${Math.floor(item.main.temp)} ${"°C"}`;
                    dataDescription.innerText = item.weather[0].description;
                    dataWind.innerText = `${"Wind"}: ${item.wind.speed} ${"m/s"} `;
                    let clouds = document.createElement('img');
                    container.append(clouds);
                    container.append(weatherInfo);
                    mainList.append(container);
                    weatherInfo.append(weatherDate);
                    weatherInfo.append(dataName);
                    weatherInfo.append(dataTemp);
                    weatherInfo.append(dataDescription);
                    weatherInfo.append(dataWind);

                    for (let i = 500; i <= 504; i++) {
                        if (item.weather[0].id === i) {
                            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/10d@2x.png');
                        }
                    }
                    for (let l = 520; l <= 531; l++) {
                        if (item.weather[0].id === l) {
                            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/09d@2x.png');
                        }
                    }

                    if (item.weather[0].id === 501) {
                        clouds.setAttribute('src', 'http://openweathermap.org/img/wn/13d@2x.png');
                    }

                    if (item.weather[0].id === 800) {
                        clouds.setAttribute('src', 'http://openweathermap.org/img/wn/01d@2x.png');
                    }

                    if (item.weather[0].id === 801) {
                        clouds.setAttribute('src', 'http://openweathermap.org/img/wn/02d@2x.png');
                    }
                    if (item.weather[0].id === 802) {
                        clouds.setAttribute('src', 'http://openweathermap.org/img/wn/03d@2x.png');
                    }
                    for (let j = 803; j <= 804; j++) {
                        if (item.weather[0].id === j) {
                            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/04d@2x.png');
                        }
                    }
                    for (let a = 701; a <= 781; a++) {
                        if (item.weather[0].id === a) {
                            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/50d@2x.png');
                        }
                    }
                    for (let s = 600; s <= 622; s++) {
                        if (item.weather[0].id === s) {
                            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/13d@2x.png');
                        }
                    }
                    for (let d = 300; d <= 321; d++) {
                        if (item.weather[0].id === d) {
                            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/09d@2x.png');
                        }
                    }

                    for (let b = 200; b <= 232; b++) {
                        if (item.weather[0].id === b) {
                            clouds.setAttribute('src', 'http://openweathermap.org/img/wn/11d@2x.png');
                        }
                    }

                }
            });

        }

    });
}





