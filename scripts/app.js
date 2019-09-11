(async function() {
  let degreeUnityIsC = true;
  const querry = document.querySelector.bind(document);

  const position = await getGeo();
  if (!position) return;
  const { latitude: lat, longitude: lon } = position.coords;
  log(`Geolocation: ${lat}, ${lon}`, 'geolocation');

  const response = await getForecast(lat, lon);
  if (!response) return;
  const { icon, summary, temperature } = response;
  log('Weather forecast obtained', 'forecast');

  // set geolocation
  const latCoord = querry('.geo-sec #lat');
  latCoord.innerHTML = `lat: ${lat.toFixed(2)}`;
  const lonCoord = querry('.geo-sec #lon');
  lonCoord.innerHTML = `lon: ${lon.toFixed(2)}`;

  // set description
  const description = querry('#description');
  description.innerHTML = summary;

  function swap(temperature) {
    const degree = querry('.temp-sec #degree');
    const unit = querry('.temp-sec #unity');

    degree.innerHTML =
      degreeUnityIsC == true
        ? (((temperature - 32) * 5) / 9).toFixed(2)
        : temperature.toFixed(2);
    unit.innerHTML = degreeUnityIsC == true ? 'ºC' : 'ºF';

    degreeUnityIsC = degreeUnityIsC != true;
    if (typeof Storage !== undefined)
      localStorage.setItem('defaultIsC', degreeUnityIsC == true);
  }

  document
    .querySelector('.temp-sec')
    .addEventListener('click', () => swap(temperature));

  if (
    typeof Storage !== undefined &&
    localStorage.getItem('defaultIsC') != undefined
  )
    degreeUnityIsC = localStorage.getItem('defaultIsC') != 'true';

  swap(temperature);

  setIcon(icon);
})();
