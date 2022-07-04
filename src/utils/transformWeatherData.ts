import { WeatherObject } from '../store/weather/types';

import { kelvinToCelcius } from './unitWeatherCoversion';

const transformWeatherData = (obj: WeatherObject): WeatherObject => {
  // eslint-disable-next-line no-param-reassign
  obj.main = {
    ...obj.main,
    temp: kelvinToCelcius(obj.main.temp),
    feels_like: kelvinToCelcius(obj.main.feels_like),
    temp_max: kelvinToCelcius(obj.main.temp_max),
    temp_min: kelvinToCelcius(obj.main.temp_min),
  };
  // eslint-disable-next-line no-param-reassign
  obj.wind.speed = Math.round(obj.wind.speed * 3.6);

  return obj;
};

export default transformWeatherData;
