


let searchBtnEl = document.querySelector(".searchBtn");

searchBtnEl.addEventListener("click", whatCity);

function whatCity(event){
    event.preventDefault()
    let searchBarEl = document.querySelector("#searchCityBar");
    let searchVal = searchBarEl.value;

    weatherInfo(searchVal);
};
change 
function weatherInfo(city){
   console.log(city)
    let apiKey = "650a47000924349e89d41d97ff6cc517";
    let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(queryUrl)
        .then(headers => headers.json())
        .then(weatherData => {
            console.log(weatherData);
            document.querySelector("#currentPlace").innerHTML = weatherData["city"]["name"];

        })
    }