import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import selectCatFact from '../../../store/catFact/selectors';

import styles from './CatFactWidget.module.scss';

const CatFactWidget: React.FC = () => {
  const { catFact } = useSelector(selectCatFact);

  return (
    <Box className={styles.box}>
      <h3 className={styles.title}>Interesting fact about cats</h3>
      <p className={styles.text}>{catFact.fact}</p>
    </Box>
  );
};

export default CatFactWidget;
