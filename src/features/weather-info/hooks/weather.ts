import { useEffect, useState } from 'react';
import { weatherApi } from '../../../api/weather-api';

export const useWeather = () => {
  const [weather, setWeather] = useState({
    temperature: 0,
  });

  const fetchWeather = async () => {
    const data = await weatherApi.getWeather();

    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return { weather };
};
