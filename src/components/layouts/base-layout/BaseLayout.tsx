import { FC } from 'react';
import styles from './base-layout.module.scss';
import { WeatherInfo } from '@/features/weather-info/WeatherInfo';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      <div className={styles.info}>
        <WeatherInfo />
      </div>
    </div>
  );
};
