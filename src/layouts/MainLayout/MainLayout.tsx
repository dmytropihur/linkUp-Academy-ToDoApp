import React from 'react';

import SideBar from '../../components/SideBar/SideBar';

import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
          <SideBar />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
