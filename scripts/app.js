(async function() {
  const position = await getGeo();
  if (!position) return;
  const { latitude: lat, longitude: lon } = position.coords;
  log(`Geolocation: ${lat}, ${lon}`, 'geolocation');

  const response = await getForecast(lat, lon);
  if (!response) return;
  const { icon, summary, temperature } = response;
  log('Weather forecast obtained');

  // set geolocation
  const latCoord = document.querySelector('#geo #lat');
  latCoord.innerHTML = `lat: ${lat.toFixed(2)}`;
  const lonCoord = document.querySelector('#geo #lon');
  lonCoord.innerHTML = `lon: ${lon.toFixed(2)}`;

  // set description
  const description = document.querySelector('#desc');
  description.innerHTML = summary;

  function swap(temperature) {
    const degree = document.querySelector('#temp #degree');
    const unit = document.querySelector('#temp #unit');

    let isC = unit.innerHTML === '??' ? true : unit.innerHTML === 'ºC';

    degree.innerHTML = isC
      ? temperature.toFixed(2)
      : (((temperature - 32) * 5) / 9).toFixed(2);
    unit.innerHTML = isC ? 'ºF' : 'ºC';
  }

  document
    .querySelector('#temp')
    .addEventListener('click', () => swap(temperature));
  swap(temperature);

  setIcon(icon);
})();
