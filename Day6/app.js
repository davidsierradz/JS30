let cities;
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    cities = json.filter((city) => {
      return city.population > 1;
    });
  });

let citiesInput = document.querySelector('#cities-input');
let citiesList = document.querySelector('#cities-list');

citiesInput.addEventListener('keyup', (e) => {
  while(citiesList.firstChild) {
    citiesList.removeChild(citiesList.firstChild);
  }
  let filteredCities = cities.filter((element) => {
    return element.city.toLowerCase().includes(citiesInput.value.toLowerCase());
  });
  console.log(filteredCities);
  filteredCities.forEach((element) => {
    let cityItem = document.createElement('li');
    cityItem.textContent = element.city;
    citiesList.appendChild(cityItem);
  });
});
