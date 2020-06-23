let locationStorage = JSON.parse(localStorage.getItem('city'));
locationStorage == null ? locationStorage = [] : locationStorage;
locationStorage.push({
    text: targetValue,
    url: cities[targetValue].url
});



localStorage.setItem('city', JSON.stringify(locationStorage));

let locationStorage = JSON.parse(localStorage.getItem('city'));

for (let i = 0; i < locationStorage.length; i++) {
    getCity(locationStorage[i].text, locationStorage[i].url);
}
