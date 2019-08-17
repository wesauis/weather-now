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

  // set degree
  // TODO(wesauis): toggle ºC / ºF
  // async function degreeSwap() {
  // }
  const degree = document.querySelector('#temp #degree');
  degree.innerHTML = temperature;
  // ºF
  const temp = document.querySelector('#temp #unit');
  temp.innerHTML = 'ºF';

  await setIcon(icon);
})();
