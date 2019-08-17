(function() {
  async function fetchWeather() {
    const position = await getGeo();

    const { latitude: lat, longitude: lon } = position.coords;
    const apiKey = "72f8ea053a2b1d9bb5209c9d4935727";
    const apiUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`;

    console.log(await fetch(apiUrl));

    var skycons = new Skycons({ color: "white" });
    skycons.add("icon", Skycons.PARTLY_CLOUDY_DAY);
    skycons.play();
  }

  async function getGeo() {
    if (!("geolocation" in navigator)) {
      return null;
    }
    return new Promise((resolve, reject, options = {}) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    }).catch(error => console.error(error));
  }
})();
