import { FC, useEffect, useState } from 'react';
import { TripCard, TripModal } from '@/entities/trip';
import styles from './home-trips.module.scss';
import { weatherApi } from '@/entities/weather';
import { useErrorHandler } from '@/hooks';

export const HomeTrips: FC = () => {
  const { handleError } = useErrorHandler();
  const [isOpen, setIsOpen] = useState(false);

  const getWeatherToday = async () => {
    try {
      const weather = await weatherApi.getWeatherToday('Kyiv');

      // console.log(weather);
    } catch (e) {
      handleError(e);
    }
  };

  useEffect(() => {
    getWeatherToday();
  });

  return (
    <>
      <div className={styles.container}>
        <TripCard
          image="https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/"
          city="Berlin"
          dateFrom="2021-08-01"
          dateTo="2021-08-7"
        />
        <button className={styles.addButton} onClick={() => setIsOpen(true)}>
          Add Trip
        </button>
      </div>
      <TripModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
