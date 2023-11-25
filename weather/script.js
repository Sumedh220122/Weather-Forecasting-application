
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e432b0e9efmshb5b9d62e77e42c1p14875ejsn117a50acc3c7",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;

      const humidityValue = response.humidity;
      let weatherCondition = '';

      if (humidityValue < 30) {
        weatherCondition = 'Low humidity: Dry and arid weather.';
      } else if (humidityValue < 50) {
        weatherCondition = 'Moderate humidity: Pleasant weather.';
      } else if (humidityValue < 70) {
        weatherCondition = 'Moderate to high humidity: Possibly cloudy with a chance of rain.';
      } else if(humidityValue >= 70){
        weatherCondition = 'High humidity: Humid and potentially stormy weather.';
      }else {
        weatherCondition = 'undefined';
      }

      broadcastWeatherCondition(weatherCondition);

    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

const broadcastWeatherCondition = (condition) =>{
    setTimeout(function() {alert(condition)}, 2000);
}