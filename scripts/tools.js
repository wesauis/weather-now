const ERROR = {
  NO_GEOLOCATION_SUPPORT: 'NO_GEOLOCATION_SUPPORT',
  CANT_GET_GEOLOCATION: 'CANT_GET_GEOLOCATION',
  CANT_FETCH_FORECAST: 'CANT_FETCH_FORECAST',
};

const $ = document.querySelector.bind(document);

async function getGeo() {
  if (!('geolocation' in navigator)) throw ERROR.NO_GEOLOCATION_SUPPORT;
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).catch(() => {
    throw ERROR.CANT_GET_GEOLOCATION;
  });
}

async function getForecast(latitude, longitude) {
  // only use cors-anywhere if https is off
  const proxy = location.protocol === 'https:' ? '' : PROXY;
  const API_URL = `${proxy}https://api.darksky.net/forecast/${DARKSKY_APIKEY}`;
  const options = 'exclude=minutely,hourly,daily,alerts,flags';

  const request = `${API_URL}/${latitude},${longitude}?${options}`;
  return await fetch(request)
    .then(res => res.json())
    .catch(() => {
      throw ERROR.CANT_FETCH_FORECAST;
    });
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
  skycons.add('icon', Skycons[iconID || 'PARTLY_CLOUDY_DAY']);
  skycons.play();
}
