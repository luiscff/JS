
function getCity() { //gets the city, state and country from the form and calls the functions in apiCall.js
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    console.log(city, country);
    fetchCoordsOfCity(city, country) //gets the coordinates of the city
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
  display.innerHTML = json.name + "<br>" + json.main.temp + "ºC";
  display.innerHTML += "<br>" + json.weather[0].description; 
  display.innerHTML += "<br>Feels like: " + json.main.feels_like + "ºC";
  display.innerHTML += "<br>Humidity: " + json.main.humidity + "%";
  display.innerHTML += "<br>Cloudiness: " + json.clouds.all + "%";
  display.innerHTML += "<br>Country: " + json.sys.country;
  display.innerHTML += "<br>Sunrise: " + new Date(json.sys.sunrise * 1000).toLocaleTimeString();
  display.innerHTML += "<br>Sunset: " + new Date(json.sys.sunset * 1000).toLocaleTimeString();
  display.innerHTML += "<br>Time: " + new Date(json.dt * 1000).toLocaleTimeString();
}

// this function gets the coordinates of the city using the OpenWeatherMap API
function fetchCoordsOfCity(city, state, country) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  return fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + ",," + country + "&limit=1&appid=6f02f16fbb21d6c9f5b0d019e62daf21", requestOptions)
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

// this function gets the weather info using the OpenWeatherMap API
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