import { FC, useEffect, useState } from 'react';
import styles from './home-info.module.scss';
import { weatherApi } from '@/entities/weather';
import { WeatherResponse } from '@/entities/weather/models/weather-response';
import { useErrorHandler } from '@/hooks';
import { HomeTime } from '../home-time/HomeTime';

interface HomeInfoProps {
  dateFrom: string;
  dateTo: string;
}

export const HomeInfo: FC<HomeInfoProps> = ({ dateFrom, dateTo }) => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const { handleError } = useErrorHandler();
  const city = 'Berlin';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await weatherApi.getWeatherTimeLine(city, dateFrom, dateTo);
        setWeatherData(data);
      } catch (e) {
        handleError(e);
      }
    };

    fetchWeatherData();
  }, [city, dateFrom, dateTo]);

  if (!weatherData) {
    return <div className={styles.homeInfo}>Loading weather data...</div>;
  }

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(weatherData.days[0].datetime);
  const dayName = daysOfWeek[date.getDay()];

  return (
    <div className={styles.homeInfo}>
      <div>{dayName}</div>
      <div>
        icon: {weatherData.days[0].icon} {weatherData.days[0].temp}
        <span>°C</span>
      </div>
      <div>{weatherData.address}</div>
      <HomeTime />
    </div>
  );
};
