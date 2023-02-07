import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const createConfig = (baseURL: string) => {
  return {
    baseURL,
    timeout: 30 * 1000,
    withCredentials: true
  };
};

const onFulfilled = (response: AxiosResponse) => {
  return response;
};

const onRejected = (error: AxiosError) => {
  return Promise.reject(error);
};

export const createHttpClient = ({ baseUrl }: { baseUrl: string }): AxiosInstance => {
  const client = axios.create(createConfig(`${baseUrl}/api`));

  client.interceptors.response.use(onFulfilled, onRejected);

  return client;
};
