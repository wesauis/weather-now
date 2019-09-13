const ERROR = {
  'no-geolocation-support': 'no-geolocation-support',
  'cant-get-geolocation': 'cant-get-geolocation',
  'cant-fetch-forecast': 'cant-fetch-forecast',
};

const $ = document.querySelector.bind(document);

async function getGeo() {
  if (!('geolocation' in navigator)) throw ERROR['no-geolocation-support'];
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).catch(() => {
    throw ERROR['cant-get-geolocation'];
  });
}

async function getForecast(latitude, longitude) {
  const API_URL = `${PROXY}https://api.darksky.net/forecast/${DARKSKY_APIKEY}`;
  const options = 'exclude=minutely,hourly,daily,alerts,flags';

  const request = `${API_URL}/${latitude},${longitude}?${options}`;
  return await fetch(request)
    .then(res => res.json())
    .catch(() => {
      throw ERROR['cant-fetch-forecast'];
    });
}

function DegreeSwapper(DOMElement, fahrenheit) {
  const KEY = 'weather-now.defaultUnity';
  const CAN_SAVE = typeof Storage !== 'undefined';
  const degC = `${(((fahrenheit - 32) * 5) / 9).toFixed(2)}ºC`;
  const degF = `${fahrenheit.toFixed(2)}ºF`;
  let degreeUnity = (CAN_SAVE && localStorage.getItem(KEY)) || 'ºC';

  this.swap = (onlySet = false) => {
    if (!onlySet) degreeUnity = degreeUnity !== 'ºC' ? 'ºC' : 'ºF';
    DOMElement.innerHTML = degreeUnity === 'ºC' ? degC : degF;
    if (CAN_SAVE) localStorage.setItem(KEY, degreeUnity);
  };
  this.swap(true);
}

async function setIcon(icon) {
  var skycons = new Skycons({ color: 'white' });
  const iconID = icon.replace(/-/g, '_').toUpperCase();
  skycons.add('icon', Skycons[iconID || 'PARTLY_CLOUDY_DAY']);
  skycons.play();
}
