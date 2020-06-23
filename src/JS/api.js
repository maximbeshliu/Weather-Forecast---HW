export function renderForecast(data) {
    let nameOfCity = document.querySelector('.city');
    nameOfCity.innerText = data.name;
    let temperature = document.querySelector('.temperature');
    temperature.innerText = "Temperature " + data.main.temp + "°C";
    let clouds = document.querySelector('.clouds');
    let weatherDescription = document.querySelector('.weather-description');
    weatherDescription.innerText = data.weather[0].description;
    let sentece = weatherDescription.innerText;
    let wind = document.querySelector('.wind-speed');
    wind.innerText = "Wind: " + data.wind.speed + " m/s";


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


    function capitalizeFirstLetter() {

        weatherDescription.innerHTML = sentece[0].toUpperCase() + sentece.slice(1);

    }
    capitalizeFirstLetter();

}



