import { FC } from 'react';
import { AButton, AInput } from '@/components/ui';
import { BaseLayout } from '@/components/layouts';

export const Home: FC = () => {
  const handleButtonClick = () => {
    console.log('Here should be popup with form...');
  };

  return (
    <BaseLayout>
      <AInput />
      <AButton onClick={handleButtonClick} text={'Add trip'} />
    </BaseLayout>
  );
};
