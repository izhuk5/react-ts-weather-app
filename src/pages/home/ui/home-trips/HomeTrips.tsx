import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { TripCard, TripModal } from '@/entities/trip';
import styles from './home-trips.module.scss';
// import { weatherApi } from '@/entities/weather';
// import { useErrorHandler } from '@/hooks';
import { addTrip } from '@/store/tripsSlice';
import { useAppDispatch, useAppSelector } from '@/store';

export const HomeTrips: FC = () => {
  // const { handleError } = useErrorHandler();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const trips = useAppSelector((state) => state.trips);

  // const getWeatherToday = async () => {
  //   try {
  //     const weather = await weatherApi.getWeatherToday('Kyiv');

  //     console.log(weather);
  //   } catch (e) {
  //     handleError(e);
  // }
  // };

  const getTrip = () => {
    dispatch(
      addTrip({
        city: 'Kyiv',
        dateFrom: '2021-08-01',
        dateTo: '2021-08-07',
        image:
          'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
        id: v4(),
      }),
    );
  };

  useEffect(() => {
    getTrip();
    // getWeatherToday();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {trips.map((trip) => (
          <TripCard
            key={trip.id}
            image={trip.image}
            city={trip.city}
            dateFrom={trip.dateFrom}
            dateTo={trip.dateTo}
          />
        ))}
        <button className={styles.addButton} onClick={() => setIsOpen(true)}>
          Add Trip
        </button>
      </div>
      <TripModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
