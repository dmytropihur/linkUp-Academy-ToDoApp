import { WeatherObject } from '../store/weather/types';

import { kelvinToCelcius } from './unitWeatherCoversion';

const transformWeatherData = (obj: WeatherObject): WeatherObject => {
  const newObj = { ...obj };

  // eslint-disable-next-line no-param-reassign
  newObj.main = {
    ...newObj.main,
    temp: kelvinToCelcius(newObj.main.temp),
    feels_like: kelvinToCelcius(newObj.main.feels_like),
    temp_max: kelvinToCelcius(newObj.main.temp_max),
    temp_min: kelvinToCelcius(newObj.main.temp_min),
  };
  // eslint-disable-next-line no-param-reassign
  newObj.wind.speed = Math.round(newObj.wind.speed * 3.6);

  return newObj;
};

export default transformWeatherData;
