import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../store/store';
import selectUser from '../../store/user/selectors';
import { logout } from '../../store/user/slice';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
  };

  return (
    <AppBar className={styles.root} position="static">
      <Toolbar className={styles.wrapper}>
        <Link to="/">Todo</Link>
        {!user.name && (
          <Link to="/login" color="inherit">
            Login
          </Link>
        )}
        {!!user.name && (
          <Box className={styles.box}>
            <span>{user.name}</span>
            <LogoutIcon className={styles.icon} onClick={onLogout} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
