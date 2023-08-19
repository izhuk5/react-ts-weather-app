import axios from 'axios';
import { WeatherResponse } from '..';

export const weatherApi = {
  async getWeatherTimeLine(city: string, dateFrom: string, dateTo: string) {
    const { data } = await axios.get<WeatherResponse>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${dateFrom}/${dateTo}`,
      {
        params: {
          key: import.meta.env.VITE_VISUAL_CROSSING_API_KEY,
          unitGroup: 'metric',
          include: 'days',
          contentType: 'json',
        },
      },
    );

    return data;
  },

  async getWeatherToday(city: string) {
    const { data } = await axios.get<WeatherResponse>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today`,
      {
        params: {
          key: import.meta.env.VITE_VISUAL_CROSSING_API_KEY,
          unitGroup: 'metric',
          include: 'days',
          contentType: 'json',
        },
      },
    );

    return data;
  },
};
