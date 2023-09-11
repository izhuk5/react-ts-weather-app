import { FC } from 'react';
import { HomeTrips } from './ui/home-trips/HomeTrips';
import { HomeInfo } from './ui/home-info/HomeInfo';
import styles from './home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_content}>
        <HomeTrips />
      </div>
      <div className={styles.home__info}>
        <HomeInfo dateFrom="2021-08-01" dateTo="2021-08-7" />
      </div>
    </div>
  );
};
