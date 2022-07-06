import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import { useSelector } from 'react-redux';

import selectBored from '../../../store/bored/selectors';

import styles from './BoredWidget.module.scss';

const BoredWidget: React.FC = () => {
  const { bored } = useSelector(selectBored);

  return (
    <Box className={styles.root}>
      <h3 className={styles.title}>Are you bored? Try this</h3>
      <Box className={styles.wrapper}>
        <span className={styles.text}>{bored.activity}</span>
        <span>
          <span className={styles.type}>{bored.type}</span>
        </span>
      </Box>
      <Box className={styles.participants}>
        <span className={styles.name}>Number of participants :</span>
        <span className={styles.value}>{bored.participants}</span>
      </Box>
      <Box className={styles.complexity}>
        <span className={styles.name}>Complexity :</span>
        <LinearProgress
          variant="determinate"
          value={bored.accessibility * 100}
        />
      </Box>
    </Box>
  );
};

export default BoredWidget;
