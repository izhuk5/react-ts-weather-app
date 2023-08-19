import { FC } from 'react';
// import { AButton, AInput } from '@/components/ui';
import { BaseLayout } from '@/components/layouts';
import { HomeTrips } from './ui/home-trips/HomeTrips';

export const Home: FC = () => {
  // const handleButtonClick = () => {
  //   console.log('Here should be popup with form...');
  // };

  return (
    <BaseLayout>
      <HomeTrips />
    </BaseLayout>
  );
};
