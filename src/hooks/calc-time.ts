import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_SECOND } from '@/utils/time';

const fixNumber = (num: number) => (num > 9 ? String(num) : `0${num}`);

export const useCalcTime = (from: string) => {
  const dateFrom = dayjs(from);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calcTime = () => {
    const diff = dateFrom.diff(dayjs());

    setDays(diff / ONE_DAY);
    setHours((diff % ONE_DAY) / ONE_HOUR);
    setMinutes((diff % ONE_HOUR) / ONE_MINUTE);
    setSeconds((diff % ONE_MINUTE) / ONE_SECOND);
  };

  useEffect(() => {
    calcTime();
    const interval = setInterval(calcTime, ONE_SECOND);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    days: fixNumber(+days.toFixed()),
    hours: fixNumber(+hours.toFixed()),
    minutes: fixNumber(+minutes.toFixed()),
    seconds: fixNumber(+seconds.toFixed()),
  };
};
