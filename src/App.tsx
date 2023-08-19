import { FC } from 'react';
import { Home } from './pages/home/Home';
import { ToastContainer } from 'react-toastify';

export const App: FC = () => {
  return (
    <>
      <ToastContainer />
      <Home />;
    </>
  );
};
