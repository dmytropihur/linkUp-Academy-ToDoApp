import { RootState } from '../store';

const selectWeather = (state: RootState) => state.weather.weather;

export default selectWeather;
