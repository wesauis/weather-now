function log(message, from = 'app.js', level = 'INFO') {
  console.log(`[${from}] [${level.toUpperCase()}] `, message);
}

async function getForecast(lat, lon) {
  const apiKey = '70ef7036a148224fde5386598ecff3fe';
  const apiUrl = `https://api.darksky.net/forecast/${apiKey}`;

  const apiOpt = 'exclude=minutely,hourly,daily,alerts,flags';
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const apiReqUrl = `${proxy}${apiUrl}/${lat},${lon}?${apiOpt}`;

  const response = await fetch(apiReqUrl).catch(error =>
    log(error.message, 'forecast', 'error')
  );

  if (response.status !== 200) {
    log(
      `Error getting weather forecast, status: ${response.status}`,
      'forecast',
      'error'
    );
    return undefined;
  }

  return (await response.json()).currently;
}

async function getGeo() {
  if (!('geolocation' in navigator)) {
    log('Browser does not support geolocation', 'error');
    return;
  }
  return new Promise((resolve, reject, options = {}) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  }).catch(error => log(error.message, 'geolocation', 'error'));
}

async function setIcon(icon) {
  var skycons = new Skycons({ color: 'white' });
  const iconID = icon.replace(/-/g, '_').toUpperCase();
  skycons.add('icon', Skycons[iconID]);
  skycons.play();
}
