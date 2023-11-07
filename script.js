const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '542aabe52emsh876ffa9d7af380bp1e2559jsn9e8dfe77ddef',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
  
      // Assuming these are HTML elements you want to update
      // Make sure you have these elements with the specified IDs in your HTML
      document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
      document.getElementById('feels_like').innerHTML = response.feels_like;
      document.getElementById('humidity').innerHTML = response.humidity;
      document.getElementById('max_temp').innerHTML = response.max_temp;
      document.getElementById('min_temp').innerHTML = response.min_temp;
      document.getElementById('sunrise').innerHTML = response.sunrise;
      document.getElementById('sunset').innerHTML = response.sunset;
      document.getElementById('temp').innerHTML = response.temp;
      document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
      document.getElementById('wind_speed').innerHTML = response.wind_speed;
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault
    getWeather(city.value)
})

getWeather("Delhi")