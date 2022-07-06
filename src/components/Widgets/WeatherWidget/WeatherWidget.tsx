import AirIcon from '@mui/icons-material/Air';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CompressIcon from '@mui/icons-material/Compress';
import OpacityIcon from '@mui/icons-material/Opacity';
import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import selectWeather from '../../../store/weather/selectors';

import styles from './Weather.module.scss';

const WeatherWidget: React.FC = () => {
  const weather = useSelector(selectWeather);
  const img = weather.weather[0].icon;

  return (
    <Box className={styles.wrapper}>
      <div className={styles.data}>
        <div className={styles.left}>
          <h3 className={styles.city}>{weather.name}</h3>
          <div className={styles.weather}>
            <img
              className={styles.img}
              src={`https://openweathermap.org/img/wn/${img}@2x.png`}
              alt=""
            />
            <span className={styles.temperature}>
              {weather.main.temp}
              <sup>°</sup>
            </span>
          </div>
          <span className={styles.weatherDesc}>
            {weather.weather[0].description}
          </span>
        </div>
        <div className={styles.right}>
          <span className={styles.feels}>
            {`Feels like ${weather.main.feels_like}`}
            <sup>°</sup>
          </span>
          <div className={styles.tempRange}>
            <span className={styles.tempMax}>
              <ArrowUpwardIcon className={styles.tempIcon} />
              {weather.main.temp_max}
              <sup>°</sup>
            </span>
            <span className={styles.tempMin}>
              <ArrowDownwardIcon className={styles.tempIcon} />
              {weather.main.temp_min}
              <sup>°</sup>
            </span>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.itemName}>
                <OpacityIcon className={styles.tempIcon} />
                Humidity
              </div>
              <span className={styles.itemValue}>{weather.main.humidity}%</span>
            </li>
            <li className={styles.item}>
              <div className={styles.itemName}>
                <AirIcon className={styles.tempIcon} />
                Wind
              </div>
              <span className={styles.itemValue}>{weather.wind.speed}kph</span>
            </li>
            <li className={styles.item}>
              <div className={styles.itemName}>
                <CompressIcon className={styles.tempIcon} />
                Pressure
              </div>
              <span className={styles.itemValue}>
                {weather.main.pressure}hPa
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default WeatherWidget;
