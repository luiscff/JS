
function getCity() { //gets the city, state and country from the form and calls the functions in apiCall.js
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    console.log(city, state, country);
    fetchCoordsOfCity(city, state, country) //gets the coordinates of the city
  .then((coords) => { //then uses the coordinates to get the weather info
    const { lat, lon } = coords;
    fetchWeatherOfCoords(lat, lon);
  })
  .catch((error) => console.log('ERROR', error));
  //TODO catch errors (like Location not Found) and display them in the website
  //TODO maybe later add more API calls (like the forecast for the next days)
}

function displayWeatherInfo(json) {
  const display = document.getElementById('display');
  console.log(json); //para ver json na consola (ajuda a ver a info que tem no json)
  display.innerHTML = json.name + " " + json.main.temp + "ºC";
    //TODO display more info in the website
}