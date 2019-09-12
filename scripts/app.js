async function start() {
  $('#reload').onclick = location.reload.bind(location);

  try {
    const { latitude, longitude } = await getGeo().then(pos => pos.coords);
    console.log(`Geolocation: ${latitude}, ${longitude}`);
    const { icon, summary, temperature } = await getForecast(
      latitude,
      longitude
    ).then(forecast => forecast.currently);
    console.log('Weather forecast obtained');
    // FETCH: SUCESS
    setThings({
      latitude,
      longitude,
      icon,
      summary,
      temperature,
    });
  } catch (error) {
    const help = $('#loading #help');
    help.classList.toggle('hidden');
    const helpLink =
      'https://github.com/wesauis/weather-now/blob/master/HELP.md';
    const message = $('#loading #message');

    console.error(ERROR[error]);
    if (ERROR[error] === undefined) {
      message.innerHTML = 'UNKNOWN_ERROR';
      help.href = helpLink;
      return;
    }

    message.innerHTML = `error: ${ERROR[error]}`;
    help.href = `${helpLink}#${ERROR[error]}`;
  }
}

async function setThings({ latitude, longitude, summary, temperature, icon }) {
  // set geolocation
  $('.geo-sec #lat').innerHTML = `lat: ${latitude.toFixed(2)}`;
  $('.geo-sec #lon').innerHTML = `lon: ${longitude.toFixed(2)}`;
  // set description
  $('#description').innerHTML = summary;
  // set degree and add option to swap beetwen ºC and ºF onClick
  const degreeEl = $('.temp-sec #degree');
  const swapper = new DegreeSwapper(degreeEl, temperature);
  degreeEl.addEventListener('click', () => swapper.swap(false));
  // setIcon
  setIcon(icon).then(() => console.log('Weather Icon Set'));
  // animations
  setTimeout(() => {
    $('#loading').classList.toggle('animated-hide');
    setTimeout(() => {
      $('body').classList.toggle('auto-overflow');
      $('#app').classList.toggle('hidden');
      $('#app').classList.toggle('animated-show');
      $('#loading').classList.toggle('hidden');
    }, 600);
  }, 1200);
}
