import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import selectDogImage from '../../../store/dogImage/selectors';

import styles from './DogWidget.module.scss';

const DogWidget: React.FC = () => {
  const { dogImage } = useSelector(selectDogImage);

  return (
    <Box className={styles.wrapper}>
      <img className={styles.img} src={dogImage.message} alt="Dog" />
    </Box>
  );
};

export default DogWidget;
