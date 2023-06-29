// Description: This file contains the functions that make the API calls to the OpenWeatherMap API
function fetchCoordsOfCity(city, state, country) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  return fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "," + state + "," + country + "&limit=1&appid=6f02f16fbb21d6c9f5b0d019e62daf21", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.length > 0) {
        var { lat, lon } = result[0];
        console.log(lat, lon);
        return { lat, lon };
      } else {
        throw new Error('No location found');
      }
    })
    .catch(error => console.log('ERROR', error));
}

function fetchWeatherOfCoords(lat, lon) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=6f02f16fbb21d6c9f5b0d019e62daf21", requestOptions)
    .then(response => response.json())
    .then(result => displayWeatherInfo(result))
    .catch(error => console.log('error', error));
}