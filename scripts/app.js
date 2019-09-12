async function start() {
  try {
    const { latitude, longitude } = await getGeo().then(pos => pos.coords);
    console.log(`Geolocation: ${latitude}, ${longitude}`);

    const { icon, summary, temperature } = await getForecast(
      latitude,
      longitude
    ).then(forecast => forecast.currently);
    console.log('Weather forecast obtained');

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
    $('#description').innerHTML = summary;
    // set degree and add option to swap beetwen ºC and ºF onClick
    const degreeEl = $('.temp-sec #degree');
    const swapper = new DegreeSwapper(degreeEl, temperature);
    degreeEl.addEventListener('click', () => swapper.swap(false));

    setIcon(icon).then(() => console.log('Weather Icon Set'));
  } catch (error) {
    switch (error) {
      case ERROR.NO_GEOLOCATION_SUPPORT:
        console.log(error);
        break;
      case ERROR.CANT_GET_GEOLOCATION:
        console.log(error);
        break;
      case ERROR.CANT_FETCH_FORECAST:
        console.log(error);
        break;

      default:
        console.error(error);
    }
  }
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
