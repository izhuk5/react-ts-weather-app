import { FC } from 'react';
import { useCalcTime } from '@/hooks';
import styles from './home-time.module.scss';

export const HomeTime: FC = () => {
  const { days, hours, minutes, seconds } = useCalcTime('2023-10-04 12:46:21');

  return (
    <div className={styles.time}>
      <div className={styles.time__item}>
        <div>{days}</div>
        <span>Days</span>
      </div>
      <div className={styles.time__item}>
        <div>{hours}</div>
        <span>Hours</span>
      </div>
      <div className={styles.time__item}>
        <div>{minutes}</div>
        <span>Minutes</span>
      </div>
      <div className={styles.time__item}>
        <div>{seconds}</div>
        <span>Seconds</span>
      </div>
    </div>
  );
};
