(async function() {
  const position = await getGeo();

  const { latitude: lat, longitude: lon } = position.coords;

  const apiKey = "72f8ea053a2b1d9bb5209c9d4935727";
  const apiUrl = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${lat},${lon}/?exclude=minutely,hourly,daily,alerts,flags`;

  const response = await fetch(apiUrl);
  if (!response) return;

  const {
    currently: { icon, summary, temperature }
  } = await response.json();

  // set geolocation
  const coords = document.querySelector("#geo h3");
  coords.innerHTML = `lat: ${lat}  lon: ${lon}`;

  //
  const description = document.querySelector("#desc");
  description.innerHTML = summary;

  // degree
  const degree = document.querySelector("#temp #degree");
  degree.innerHTML = degree;

  // ºF
  const temp = document.querySelector("#temp unit");
  temp.innerHTML = temperature;

  // set icon
  var skycons = new Skycons({ color: "white" });
  skycons.add("icon", Skycons[icon.replace("-", "_").toUpperCase()]);
  skycons.play();

  async function getGeo() {
    if (!("geolocation" in navigator)) {
      return null;
    }
    return new Promise((resolve, reject, options = {}) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    }).catch(error => console.error(error));
  }
})();
