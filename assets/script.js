const apiKey = "650a47000924349e89d41d97ff6cc517";

let searchBtnEl = document.querySelector(".searchBtn");
let pastCities = [];
searchBtnEl.addEventListener("click", whatCity);

init()

function init() {
    // Get stored cities from localStorage
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedCities !== null) {
      cities = storedCities;
    }
    renderCities();
};

function renderCities(){

};

function whatCity(event) {
    event.preventDefault()
    let searchBarEl = document.querySelector("#searchCityBar");
    let searchCity = searchBarEl.value;
    getCoordinates(searchCity);

    searchBarEl.value = "";
    if(pastCities!=0){

    }
};

function getCoordinates(city) {
    let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=minutely,hourly&appid=${apiKey}`;
    fetch(queryUrl)
        .then(headers => headers.json())
        .then(weatherData => {
            document.querySelector("#currentPlace").innerHTML = weatherData["city"]["name"];
            let cityLat = weatherData.city.coord.lat;
            let cityLon = weatherData.city.coord.lon;
            let pastCities = [];
            weatherInfo(cityLat, cityLon)

        })
};

function weatherInfo(cityLat, cityLon) {
    let queryUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
    fetch(queryUrl)
        .then(headers => headers.json())
        .then(weatherData => {
            console.log(weatherData);

            // mainForcastBox
            let currentDt = weatherData.current.dt ;
            let currentImage = weatherData.current.weather[0].icon;

            document.querySelector("#currentDate").innerHTML = moment().format("(L)");
            document.querySelector("#currentIcon").src= `http://openweathermap.org/img/wn/${currentImage}@2x.png`;
            document.querySelector("#currentTemp").innerHTML = weatherData.current.temp + " \u00B0F";
            document.querySelector("#currentWind").innerHTML = weatherData.current.wind_speed + " MPH";
            document.querySelector("#currentHumidity").innerHTML = weatherData.current.humidity + " %";
            document.querySelector(".uvChange").innerHTML = weatherData.current.uvi;

            // Forecast: card 1 
            let c1Dt = weatherData.daily[1].dt ;
            let c1Image = weatherData.daily[1].weather[0].icon;
            document.querySelector("#c1Date").innerHTML = moment.unix(c1Dt).format("(L)");
            document.querySelector("#c1Icon").src=`http://openweathermap.org/img/wn/${c1Image}@2x.png`;
            document.querySelector("#c1Temp").innerHTML = "Temp: "+ weatherData.daily[1].temp.day + " \u00B0F";
            document.querySelector("#c1Wind").innerHTML = "Wind: "+ weatherData.daily[1].wind_speed + " MPH";
            document.querySelector("#c1Humidity").innerHTML = "Humidity: "+ weatherData.daily[1].humidity + " %";

            // Forecast: card 2
            let c2Dt = weatherData.daily[2].dt ;
            let c2Image = weatherData.daily[2].weather[0].icon;
            document.querySelector("#c2Date").innerHTML = moment.unix(c2Dt).format("(L)");
            document.querySelector("#c2Icon").src=`http://openweathermap.org/img/wn/${c2Image}@2x.png`;
            document.querySelector("#c2Temp").innerHTML = "Temp: "+ weatherData.daily[2].temp.day + " \u00B0F";
            document.querySelector("#c2Wind").innerHTML = "Wind: "+ weatherData.daily[2].wind_speed + " MPH";
            document.querySelector("#c2Humidity").innerHTML = "Humidity: "+ weatherData.daily[2].humidity + " %";

            // Forecast: card 3
            let c3Dt = weatherData.daily[3].dt ;
            let c3Image = weatherData.daily[3].weather[0].icon;
            document.querySelector("#c3Date").innerHTML = moment.unix(c3Dt).format("(L)");
            document.querySelector("#c3Icon").src=`http://openweathermap.org/img/wn/${c3Image}@2x.png`;
            document.querySelector("#c3Temp").innerHTML = "Temp: "+ weatherData.daily[3].temp.day + " \u00B0F";
            document.querySelector("#c3Wind").innerHTML = "Wind: "+ weatherData.daily[3].wind_speed + " MPH";
            document.querySelector("#c3Humidity").innerHTML = "Humidity: "+ weatherData.daily[3].humidity + " %";

            // Forecast: card 4
            let c4Dt = weatherData.daily[4].dt ;
            let c4Image = weatherData.daily[4].weather[0].icon;
            document.querySelector("#c4Date").innerHTML = moment.unix(c4Dt).format("(L)");
            document.querySelector("#c4Icon").src=`http://openweathermap.org/img/wn/${c4Image}@2x.png`;
            document.querySelector("#c4Temp").innerHTML = "Temp: "+ weatherData.daily[4].temp.day + " \u00B0F";
            document.querySelector("#c4Wind").innerHTML = "Wind: "+ weatherData.daily[4].wind_speed + " MPH";
            document.querySelector("#c4Humidity").innerHTML = "Humidity: "+ weatherData.daily[4].humidity + " %";

            // Forecast: card 5
            let c5Dt = weatherData.daily[5].dt ;
            let c5Image = weatherData.daily[5].weather[0].icon;
            document.querySelector("#c5Date").innerHTML = moment.unix(c5Dt).format("(L)");
            document.querySelector("#c5Icon").src=`http://openweathermap.org/img/wn/${c5Image}@2x.png`;
            document.querySelector("#c5Temp").innerHTML = "Temp: "+ weatherData.daily[5].temp.day + " \u00B0F";
            document.querySelector("#c5Wind").innerHTML = "Wind: "+ weatherData.daily[5].wind_speed + " MPH";
            document.querySelector("#c5Humidity").innerHTML = "Humidity: "+ weatherData.daily[5].humidity + " %";

        })
};

