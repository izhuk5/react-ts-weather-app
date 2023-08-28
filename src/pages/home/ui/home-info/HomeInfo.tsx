import { useEffect, useState } from 'react';
import styles from './home-info.module.scss';
import { weatherApi } from '@/entities/weather';
import { WeatherResponse } from '@/entities/weather/models/weather-response';
import { useErrorHandler } from '@/hooks';

interface HomeInfoProps {
  city: string;
}

export const HomeInfo: React.FC<HomeInfoProps> = ({ city }) => {
  const { handleError } = useErrorHandler();
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await weatherApi.getWeatherToday(city);
        setWeatherData(data);
      } catch (error) {
        handleError(error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const todayWeather = weatherData;
  console.log(todayWeather);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(todayWeather.days[0].datetime);
  const dayName = days[date.getDay()];

  return (
    <div>
      {<h3>{dayName}</h3>}
      {
        <h2>
          icon: {todayWeather.days[0].icon} {todayWeather.days[0].temp} {'℃'}
        </h2>
      }
      {<h1>{todayWeather.address}</h1>}
      {/* <h2>Weather in {weatherData.resolvedAddress}</h2>
      <p>Date: {todayWeather.datetimeStr}</p>
      <p>Temperature: {todayWeather.temp}</p> */}
      {/* Another fields for weather */}
    </div>
  );
};
