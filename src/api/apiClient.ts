import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { WaitlistPayload, WaitlistVerifyPayload } from '../types';

export default class APIClient {
  instance: AxiosInstance;

  constructor(baseURL?: string) {
    this.instance = axios.create({
      baseURL: baseURL || 'https://kilowish-be.herokuapp.com',
      timeout: 60000,
      headers: {
        Accept: 'application/json',
      },
    });

    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        return Promise.reject(error.response);
      }
    );
  }

  async addToWaitlist(payload: WaitlistPayload): Promise<AxiosResponse> {
    const response = await this.instance.post('/api/v1/waitlist', payload);
    return response.data;
  }

  async checkWaitlist(payload: WaitlistPayload): Promise<AxiosResponse> {
    const response = await this.instance.post('/api/v1/waitlist/check', payload);
    return response.data;
  }

  async resendWaitlistCode(payload: WaitlistPayload): Promise<AxiosResponse> {
    const response = await this.instance.post('/api/v1/waitlist/resend', payload);
    return response.data;
  }

  async verfifyWaitlist(payload: WaitlistVerifyPayload): Promise<AxiosResponse> {
    const response = await this.instance.post('/api/v1/waitlist/verify', payload);
    return response.data;
  }
}
