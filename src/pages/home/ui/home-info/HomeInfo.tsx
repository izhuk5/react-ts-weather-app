import { FC, useEffect, useState } from 'react';
import styles from './home-info.module.scss';
import { weatherApi } from '@/entities/weather';
import { WeatherResponse } from '@/entities/weather/models/weather-response';

interface HomeInfoProps {
  city: string;
  dateFrom: string;
  dateTo: string;
}

interface ElapsedTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const HomeInfo: FC<HomeInfoProps> = ({ city, dateFrom, dateTo }) => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [elapsedTime, setElapsedTime] = useState<ElapsedTime | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await weatherApi.getWeatherTimeLine(city, dateFrom, dateTo);
        setWeatherData(data);

        const dateFromObj = new Date(dateFrom);
        const dateToObj = new Date(dateTo);

        const timeDifference = dateToObj.getTime() - dateFromObj.getTime();
        const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setElapsedTime({ days, hours, minutes, seconds });
      } catch (e) {
        console.log(e);
      }
    };

    fetchWeatherData();
  }, [city, dateFrom, dateTo]);

  if (!weatherData || !elapsedTime) {
    return <div>Loading weather data...</div>;
  }

  console.log(weatherData);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(weatherData.days[0].datetime);
  const dayName = daysOfWeek[date.getDay()];

  return (
    <div className={styles.container}>
      <h3>{dayName}</h3>
      <h2>
        icon: {weatherData.days[0].icon} {weatherData.days[0].temp} {<span>℃</span>}
      </h2>
      <h1>{weatherData.address}</h1>
      <div className={styles.time__wrapper}>
        <div className={styles.time__item}>
          <h4>{elapsedTime.days}</h4>
          <span>Days</span>
        </div>
        <div className={styles.time__item}>
          <h4>{elapsedTime.hours}</h4>
          <span>Hours</span>
        </div>
        <div className={styles.time__item}>
          <h4>{elapsedTime.minutes}</h4>
          <span>Minutes</span>
        </div>
        <div className={styles.time__item}>
          <h4>{elapsedTime.seconds}</h4>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};
