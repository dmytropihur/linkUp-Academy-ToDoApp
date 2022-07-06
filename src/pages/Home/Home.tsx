import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import List from '../../components/List/List';
import SideBar from '../../components/SideBar/SideBar';
import selectUser from '../../store/user/selectors';

import styles from './Home.module.scss';

const HomePage: React.FC = () => {
  const user = useSelector(selectUser);

  return user.name ? (
    <div className={styles.container}>
      <List />
      <SideBar />
    </div>
  ) : (
    <Typography className={styles.text} variant="h3">
      You have to log in to get access
    </Typography>
  );
};

export default HomePage;
