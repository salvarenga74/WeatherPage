let apiKey = "650a47000924349e89d41d97ff6cc517";
let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=${apiKey}`;

let searchBarEl = document.querySelector("#searchCityBar");
let searchVal = "";
let searchBtnEl = document.querySelector(".searchBtn");



function whatCity(){
    let searchVal = searchBarEl.nodeValue;
}

let weatherInfo = function(event){
    fetch(queryUrl)
    .then(function (response){
        console.log("response: " + response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    
// .then(function(city){
    
// })
}



searchBtnEl.addEventListener("click", weatherInfo)