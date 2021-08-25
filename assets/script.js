const apiKey = "650a47000924349e89d41d97ff6cc517";

let searchBtnEl = document.querySelector(".searchBtn");
searchBtnEl.addEventListener("click", whatCity);

function whatCity(event) {
    event.preventDefault()
    let searchBarEl = document.querySelector("#searchCityBar");
    let searchCity = searchBarEl.value;
    searchBarEl.innerHTML = "";
    getCoordinates(searchCity);
};

function getCoordinates(city) {
    let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=minutely,hourly&appid=${apiKey}`;
    fetch(queryUrl)
        .then(headers => headers.json())
        .then(weatherData => {
            document.querySelector("#currentPlace").innerHTML = weatherData["city"]["name"];
            let cityLat = weatherData.city.coord.lat;
            let cityLon = weatherData.city.coord.lon;
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
            const formattedDate = moment().format("(L)");
            let currentImage = weatherData.current.weather[0].icon;
            document.querySelector("#currentDate").innerHTML = formattedDate;
            document.querySelector("#currentIcon").src= `http://openweathermap.org/img/wn/${currentImage}@2x.png`;
            document.querySelector("#currentTemp").innerHTML = weatherData.current.temp + " \u00B0F";
            document.querySelector("#currentWind").innerHTML = weatherData.current.wind_speed + " MPH";
            document.querySelector("#currentHumidity").innerHTML = weatherData.current.humidity + " %";
            document.querySelector(".uvChange").innerHTML = weatherData.current.uvi;

            // Forecast: card 1 
            let c1Dt = weatherData.daily[0].dt ;
            const c1formattedDate = moment(c1Dt).format("(L)");
            document.querySelector("#c1Date").innerHTML = c1formattedDate;

            let c1Image = weatherData.daily[1].weather[0].icon;
            document.querySelector("#c1Icon").src=`http://openweathermap.org/img/wn/${c1Image}@2x.png`;
        })
};

