# **Weather Forecast Dashboard: Code Creation HW06**
#### By Sally Alvarenga 🌺,
---
## Task and Expectation
In this activity I practiced retrieving data from a third-party API and using it to build a web application of my own. I used two API's from the OpenWeather database in combination with dynamically changing HTMl and CSS to create an over all clean and easy to use weather dashboard. 

This web application can be used to view the current weather and the forecast for the next five days of any city in the OpenWeather Data base of over 200,000 cities. So that when a user enters a city into the search bar, (regardless of spaces, capitalizations, or minor spelling errors), the user is able to see current weather information and the 5-day day forecast of that city. 

---

## Results
You can view my deployed Weather Dashboard here: https://salvarenga74.github.io/WeatherPage_HW06/

<img src="assets/image Kabul weather.png" alt="Screen grab of the current weather in Kabul, called from the list of previously searched cities."/>

I feel that I have created a great weather app that could use only minor future improvement to turn it into a commercial weather service application. I was able to take the user's input of any city of choice and use that value to call weather data information. 

Using the OneCall method from OpenWeather API i was able to pull current city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. I also added conditional formatting to the UV index badge to indicate weather the conditions are favorable, low risk, moderate, or severe based on the UV index.

I also successfully used local storage to create and display a list of previously searched cities on the left hand side of the page. And when any of the pervious searches are clicked, the weather dashboard will pull up the current weather and 5-day forecast for the city that was selected. 

In each section of weather information I was able to include an icon of the weather conditions by using string interpolation and the information from the API documentation. 

Additionally, my weather dashboard application looks almost identical to the example of what my page could look like. This further confirms that I have met all HTML and CSS qualities as required.

Future improvements could be made by including a webpage response if the user does not enter a city in the search bar or enters text that is not recognized as a city by the API function. 

---
© 2021 Sally Alvarenga 🌺, LLC.
Confidential and Proprietary. All Rights Reserved. 