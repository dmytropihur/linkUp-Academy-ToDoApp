import { Box } from '@mui/material';
import React from 'react';

import BoredWidget from '../Widgets/BoredWidget/BoredWidget';
import CatFactWidget from '../Widgets/CatFactWidget/CatFactWidget';
import DogWidget from '../Widgets/DogWidget/DogWidget';
import IPWidget from '../Widgets/IPWidget/IPWidget';
import WeatherWidget from '../Widgets/WeatherWidget/WeatherWidget';

import styles from './SideBar.module.scss';

const SideBar: React.FC = () => {
  return (
    <aside>
      <Box className={styles.aside}>
        <WeatherWidget />
        <CatFactWidget />
        <DogWidget />
        <BoredWidget />
        <IPWidget />
      </Box>
    </aside>
  );
};

export default SideBar;
