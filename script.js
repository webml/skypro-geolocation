navigator.geolocation.getCurrentPosition(function (data) {
  const latitude = data.coords.latitude;
  const longitude = data.coords.longitude;

  let currentCity;
  let current = 0;
  let min = 10000;

  for (let i = 0; i < window.cities.length; i++) {
    current =
      Math.abs(latitude - Number(window.cities[i].lat)) +
      Math.abs(longitude - Number(window.cities[i].lng));
    if (current < min) {
      min = current;
      currentCity = window.cities[i].name;
    }
  }

  city = document.getElementById("cityName");
  city.textContent = currentCity;
});
