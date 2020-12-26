//Initialize app
function init () {
  //Create variables 
  var cityInput = document.getElementById('city-input');
  var searchBtn = document.getElementById('search-button');
  var clearBtn = document.getElementById('clear-history');
  var cityName = document.getElementById('city-name');
  var currentPic = document.getElementById('current-pic');
  var currentTemp = document.getElementById('temperature');
  var currentHum = document.getElementById('humidity');
  var currentWind = document.getElementById('wind-speed');
  var currentUV = document.getElementById('UV-index');
  var history = document.getElementById('history');

  //Local Storage 
  let searchHistory = JSON.parse(localStorage.getitem('search')) || [];
  console.log(searchHistory);

  const APIKey = "06e59bb76a774c5e875debcf87e08783"

  //Create a function for the search button
  function getWeather(cityName) {
    // Make a request to the open weather map API
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    axios.get(queryURL)
  }
}