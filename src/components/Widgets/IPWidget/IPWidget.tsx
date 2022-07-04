import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { isIP } from 'is-ip';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { BASE_USER_IP_GEO_URL } from '../../../constants/constants';
import selectIpGeo from '../../../store/ipGeo/selectors';
import { fetchIpGeo } from '../../../store/ipGeo/slice';
import { useAppDispatch } from '../../../store/store';

import styles from './IPWidget.module.scss';

const IPWidget: React.FC = () => {
  const dispatch = useAppDispatch();
  const [ip, setIp] = useState('');
  const { ipGeo } = useSelector(selectIpGeo);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIp(e.target.value);
  };

  const onSubmitInput = () => {
    dispatch(fetchIpGeo(ip));
  };

  useEffect(() => {
    (async () => {
      await axios
        .get(BASE_USER_IP_GEO_URL)
        .then((response) => response.data)
        .then((response) => dispatch(fetchIpGeo(response.dns.ip)));
    })();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.title}>Check your IP Address location</h3>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            value={ip}
            onChange={onInputChange}
            placeholder={ipGeo.query}
          />
          <button
            className={styles.button}
            type="button"
            disabled={!isIP(ip)}
            onClick={onSubmitInput}
          >
            <SearchIcon className={styles.icon} />
          </button>
        </div>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.name}>Country :</span>
            <span className={styles.desc}>{ipGeo.country || '-'}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.name}>City :</span>
            <span className={styles.desc}>{ipGeo.city || '-'}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.name}>Region :</span>
            <span className={styles.desc}>{ipGeo.regionName || '-'}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.name}>Zip Code :</span>
            <span className={styles.desc}>{ipGeo.zip || '-'}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.name}>Organization :</span>
            <span className={styles.desc}>{ipGeo.org || '-'}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IPWidget;
