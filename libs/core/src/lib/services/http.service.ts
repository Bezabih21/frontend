import axios from 'axios';
import { constants } from '../constants/constants';
import { storage } from './storage.service';

const axiosService = (environment?: any) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(async (config) => {
    const token = await storage.getItem('token');

    if (publicUrls.some((urlStr) => config?.url?.includes(urlStr))) {
      return config;
    }

    if (token) {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
    }

    return config;
  });

  return instance;
};
export const httpService = axiosService();

const publicUrls = [constants.publicUrls.ACCOUNT_API]; // URLs that don't need authorization header
