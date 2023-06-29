//TODO make city, state and country be given by user input
var city = "Viseu"; // City name
var state = ""; // State code (only for the US)
var country = "620"; // ISO 3166 country codes

fetchCoordsOfCity(city, state, country)
  .then((coords) => {
    const { lat, lon } = coords;
    fetchWeatherOfCoords(lat, lon);
  })
  .catch((error) => console.log('ERROR', error));

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
    .then(result => console.log(result)) // TODO here it gives me the weather info. Later display info in the website
    .catch(error => console.log('error', error));
}