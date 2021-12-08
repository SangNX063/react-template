import { ENVS } from '@configs/Configs.env';
import { camelCaseKeys } from '@utils/camelcase';
import axios, { AxiosError } from 'axios';

const TIMEOUT = 20000;

const HEADERS = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Headers':
    'Content-Type, Cache-Control, X-Requested-With, X-CSRF-Token, Discourse-Visible, User-Api-Key, User-Api-Client-Id, *',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS, DELETE',
};

const createAxiosInstance = ({ baseURL = '' }: { baseURL: string }) => {
  const instance = axios.create({
    baseURL,
    timeout: TIMEOUT,
    headers: {
      ...HEADERS,
    },
  });

  instance.interceptors.request.use(
    (req) => {
      req.headers = {
        ...req.headers,
      };
      return req;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (res) => {
      const result = res?.data?.result;
      const error = res?.data?.error;
      if (error) {
        return Promise.reject(camelCaseKeys(error));
      }
      return Promise.resolve(result);
    },
    (axiosError: AxiosError) => {
      if (axiosError?.isAxiosError && !axiosError?.response) {
        throw new Error('Send request API failed');
      }
      const { response: { data } = {} } = axiosError;
      const { error } = data || {};
      return Promise.reject(camelCaseKeys(error || axiosError));
    },
  );

  return instance;
};

export default createAxiosInstance;
