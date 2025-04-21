

import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse  } from 'axios';
export function useApi(){

    // Create Axios instance with default configuration
    const apiClient: AxiosInstance = axios.create({
      baseURL:'https://jsonplaceholder.typicode.com/',
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // Set a timeout
    });
    
    
    apiClient.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        // Handle errors globally
    
    
        if (error.response) {
          console.error(`API Error: ${error.response.status} - ${error.response.data.message}`);
        } else {
          console.error(`API Error: ${error.message}`);
        }
        return Promise.reject(error);
      }
    );

    return{
        get: async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
          const response = await apiClient.get<T>(url, config);
          return response;
        },
        post: async <T>(url: string, data: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
          const isFormData = data instanceof FormData;
          const response = await apiClient.post<T>(url, data, {
            ...config,
            headers: {
              'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
              ...config.headers, // ✅ Now this will always be defined
            },
          });
          return response;
        },
        put: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
          const response = await apiClient.put<T>(url, data, config);
          return response;
        },
        delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
          const response = await apiClient.delete<T>(url, config);
          return response;
        },

    }

}