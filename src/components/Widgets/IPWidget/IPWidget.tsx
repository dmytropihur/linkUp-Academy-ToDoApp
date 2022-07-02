import SearchIcon from '@mui/icons-material/Search';
import { isIP } from 'is-ip';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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
            placeholder="Type your IP address"
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
