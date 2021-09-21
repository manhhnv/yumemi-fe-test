import { AxiosRequestConfig } from 'axios';
import { API_KEY } from 'constants/key';

export const headerConfig: AxiosRequestConfig = {
  headers: {
    'X-API-KEY': API_KEY,
  },
};
