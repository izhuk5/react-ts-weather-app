import { FC } from 'react';
import styles from './trip-card.module.scss';

interface TripCardProps {
  image: string;
  city: string;
  dateFrom: string;
  dateTo: string;
}

export const TripCard: FC<TripCardProps> = ({ image, city, dateFrom, dateTo }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={`Image of ${city}`} />
      <div className={styles.city}>{city}</div>
      <div className={styles.date}>
        {dateFrom} - {dateTo}
      </div>
    </div>
  );
};
