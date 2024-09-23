function refreshWeather(response) {
  let temparatureElement = document.querySelector("#temparature");
  let temparature= response.data.temparature.current;
   let cityElement =document.querySelector ("#city");

   cityElement.innerHHTML=response.data.city;
   temparatureElement.innerHTML=Math.round(temparature);

}

function searchCity(city) {
  let apiKey="53242481c00572faoba42c192d37atb8";
  let apiUrl='https://api.shecodes.io/weather/v1/current?query=${city}&key={apiKey}';
  Axio.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit (event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Nairobi");
