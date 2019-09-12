async function start() {
  try {
    const { latitude, longitude } = await getGeo().then(pos => pos.coords);
    console.log(`Geolocation: ${latitude}, ${longitude}`);

    const { icon, summary, temperature } = await getForecast(
      latitude,
      longitude
    ).then(forecast => forecast.currently);
    console.log('Weather forecast obtained');

    // set geolocation
    $('.geo-sec #lat').innerHTML = `lat: ${latitude.toFixed(2)}`;
    $('.geo-sec #lon').innerHTML = `lon: ${longitude.toFixed(2)}`;
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
