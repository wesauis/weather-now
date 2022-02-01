/**
 * https://www.weatherapi.com/api-explorer.aspx#forecast
 */

namespace Weather {
  export interface Forecast {
    location: Location;
    current: Current;
    forecast: Forecasts;
    alerts: Alerts;
  }

  export interface Location {
    /** @example "Itapuca" */
    name: string;
    /** @example "Rio Grande do Sul" */
    region: string;
    /** @example "Brazil" */
    country: string;
    /** @example -28.89 */
    lat: number;
    /** @example -52.04 */
    lon: number;
    /** @example "America/Sao_Paulo" */
    tz_id: string;
    /** @example 1643573983 */
    localtime_epoch: number;
    /** @example "2022-01-30 17:19" */
    localtime: string;
  }

  export interface Current {
    /** @example 1643573700 */
    last_updated_epoch: number;
    /** @example "2022-01-30 17:15" */
    last_updated: string;
    /** @example 24.6 */
    temp_c: number;
    /** @example 76.3 */
    temp_f: number;
    /** @example 1 */
    is_day: number;
    condition: Condition;
    /** @example 0.2 */
    wind_mph: number;
    /** @example 0.4 */
    wind_kph: number;
    /** @example 161 */
    wind_degree: number;
    /** @example "SSE" */
    wind_dir: string;
    /** @example 1007.0 */
    pressure_mb: number;
    /** @example 29.74 */
    pressure_in: number;
    /** @example 0.1 */
    precip_mm: number;
    /** @example 0.0 */
    precip_in: number;
    /** @example 63 */
    humidity: number;
    /** @example 81 */
    cloud: number;
    /** @example 26.0 */
    feelslike_c: number;
    /** @example 78.8 */
    feelslike_f: number;
    /** @example 10.0 */
    vis_km: number;
    /** @example 6.0 */
    vis_miles: number;
    /** @example 5.0 */
    uv: number;
    /** @example 0.4 */
    gust_mph: number;
    /** @example 0.7 */
    gust_kph: number;
    air_quality: Airquality;
  }

  export interface Condition {
    /** @example "Patchy rain possible" */
    text: string;
    /** @example "//cdn.weatherapi.com/weather/64x64/day/176.png" */
    icon: string;
    /** @example 1063 */
    code: number;
  }

  export interface Airquality {
    /** @example 176.89999389648438 */
    co: number;
    /** @example 0.6000000238418579 */
    no2: number;
    /** @example 43.29999923706055 */
    o3: number;
    /** @example 0.20000000298023224 */
    so2: number;
    /** @example 0.8999999761581421 */
    pm2_5: number;
    /** @example 2.4000000953674316 */
    pm10: number;
    /** @example 1 */
    "us-epa-index": number;
    /** @example 1 */
    "gb-defra-index": number;
  }

  export interface Forecasts {
    forecastday: Forecastday[];
  }

  export interface Forecastday {
    /** @example "2022-01-30" */
    date: string;
    /** @example 1643500800 */
    date_epoch: number;
    day: Day;
    astro: Astro;
    hour: Hour[];
  }

  export interface Day {
    /** @example 27.7 */
    maxtemp_c: number;
    /** @example 81.9 */
    maxtemp_f: number;
    /** @example 15.3 */
    mintemp_c: number;
    /** @example 59.5 */
    mintemp_f: number;
    /** @example 20.3 */
    avgtemp_c: number;
    /** @example 68.6 */
    avgtemp_f: number;
    /** @example 4.3 */
    maxwind_mph: number;
    /** @example 6.8 */
    maxwind_kph: number;
    /** @example 2.1 */
    totalprecip_mm: number;
    /** @example 0.08 */
    totalprecip_in: number;
    /** @example 8.7 */
    avgvis_km: number;
    /** @example 5.0 */
    avgvis_miles: number;
    /** @example 77.0 */
    avghumidity: number;
    /** @example 1 */
    daily_will_it_rain: number;
    /** @example 88 */
    daily_chance_of_rain: number;
    /** @example 0 */
    daily_will_it_snow: number;
    /** @example 0 */
    daily_chance_of_snow: number;
    condition: Condition;
    /** @example 11.0 */
    uv: number;
  }

  export interface Astro {
    /** @example "05:56 AM" */
    sunrise: string;
    /** @example "07:25 PM" */
    sunset: string;
    /** @example "03:47 AM" */
    moonrise: string;
    /** @example "06:27 PM" */
    moonset: string;
    /** @example "Waning Crescent" */
    moon_phase: string;
    /** @example "5" */
    moon_illumination: string;
  }

  export interface Hour {
    /** @example 1643511600 */
    time_epoch: number;
    /** @example "2022-01-30 00:00" */
    time: string;
    /** @example 16.9 */
    temp_c: number;
    /** @example 62.4 */
    temp_f: number;
    /** @example 0 */
    is_day: number;
    condition: Condition;
    /** @example 2.0 */
    wind_mph: number;
    /** @example 3.2 */
    wind_kph: number;
    /** @example 109 */
    wind_degree: number;
    /** @example "ESE" */
    wind_dir: string;
    /** @example 1012.0 */
    pressure_mb: number;
    /** @example 29.89 */
    pressure_in: number;
    /** @example 0.0 */
    precip_mm: number;
    /** @example 0.0 */
    precip_in: number;
    /** @example 84 */
    humidity: number;
    /** @example 28 */
    cloud: number;
    /** @example 16.9 */
    feelslike_c: number;
    /** @example 62.4 */
    feelslike_f: number;
    /** @example 16.9 */
    windchill_c: number;
    /** @example 62.4 */
    windchill_f: number;
    /** @example 16.9 */
    heatindex_c: number;
    /** @example 62.4 */
    heatindex_f: number;
    /** @example 14.1 */
    dewpoint_c: number;
    /** @example 57.4 */
    dewpoint_f: number;
    /** @example 0 */
    will_it_rain: number;
    /** @example 0 */
    chance_of_rain: number;
    /** @example 0 */
    will_it_snow: number;
    /** @example 0 */
    chance_of_snow: number;
    /** @example 10.0 */
    vis_km: number;
    /** @example 6.0 */
    vis_miles: number;
    /** @example 3.6 */
    gust_mph: number;
    /** @example 5.8 */
    gust_kph: number;
    /** @example 1.0 */
    uv: number;
  }

  export interface Alerts {
    alert: any[];
  }
}

export default Weather;
