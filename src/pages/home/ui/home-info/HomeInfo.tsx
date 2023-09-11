import { FC, useEffect, useState } from 'react';
import styles from './home-info.module.scss';
import { weatherApi } from '@/entities/weather';
import { WeatherResponse } from '@/entities/weather/models/weather-response';

interface HomeInfoProps {
  city: string;
  dateFrom: string;
  dateTo: string;
}

export const HomeInfo: FC<HomeInfoProps> = ({ city, dateFrom, dateTo }) => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await weatherApi.getWeatherTimeLine(city, dateFrom, dateTo);
        setWeatherData(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchWeatherData();
  }, [city, dateFrom, dateTo]);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  console.log(weatherData);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(weatherData.days[0].datetime);
  const dayName = daysOfWeek[date.getDay()];

  const date1 = new Date(dateFrom);
  const date2 = new Date(dateTo);

  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  const diffMinutes = Math.ceil(diffTime / (1000 * 60));
  const diffSeconds = Math.ceil(diffTime / 1000);

  return (
    <div className={styles.container}>
      <h3>{dayName}</h3>
      <h2>
        icon: {weatherData.days[0].icon} {weatherData.days[0].temp} {<span>℃</span>}
      </h2>
      <h1>{weatherData.address}</h1>
      <div className={styles.time__wrapper}>
        <div className={styles.time__item}>
          <h4>{diffDays}</h4>
          <span>Days</span>
        </div>
        <div className={styles.time__item}>
          <h4>{diffHours}</h4>
          <span>Hours</span>
        </div>
        <div className={styles.time__item}>
          <h4>{diffMinutes}</h4>
          <span>Minutes</span>
        </div>
        <div className={styles.time__item}>
          <h4>{diffSeconds}</h4>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};
