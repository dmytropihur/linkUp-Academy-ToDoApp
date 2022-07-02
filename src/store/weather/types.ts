type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherObject = {
  coord: {
    log: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
};

export interface WeatherSliceState {
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  weather: WeatherObject;
}
