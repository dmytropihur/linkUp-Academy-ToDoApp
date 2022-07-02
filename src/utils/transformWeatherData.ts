import { WeatherObject } from '../store/weather/types';

import { kelvinToCelcius } from './unitWeatherCoversion';

const transformWeatherData = (obj: WeatherObject): WeatherObject => {
  const weather = obj;

  weather.main = {
    ...weather.main,
    temp: kelvinToCelcius(weather.main.temp),
    feels_like: kelvinToCelcius(weather.main.feels_like),
    temp_max: kelvinToCelcius(weather.main.temp_max),
    temp_min: kelvinToCelcius(weather.main.temp_min),
  };
  weather.wind.speed = Math.round(weather.wind.speed * 3.6);

  return weather;
};

export default transformWeatherData;
