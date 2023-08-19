import axios from 'axios';
import { toast } from 'react-toastify';

export const useErrorHandler = () => {
  const handleError = (error: any) => {
    const axiosErrorData = axios.isAxiosError(error) ? error.response?.data : null;

    const possibleErrors = [
      typeof error === 'string' && error,
      axiosErrorData && typeof axiosErrorData === 'string' && axiosErrorData,
      typeof error === 'object' && error.message,
    ];

    const message = possibleErrors.find(Boolean) || 'Something went wrong';

    toast.error(message);
  };

  return { handleError };
};
