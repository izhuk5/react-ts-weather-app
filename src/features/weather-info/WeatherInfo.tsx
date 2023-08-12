import { useWeather } from './hooks/weather';
import styles from './weather-info.module.scss';

export const WeatherInfo = () => {
  const { weather } = useWeather();

  return (
    <div>
      <div className={styles.title}>Sunday</div>
      {weather.temperature}
    </div>
  );
};
