import { FC } from 'react';
import { Home } from './pages/home/Home';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Home />
    </Provider>
  );
};
