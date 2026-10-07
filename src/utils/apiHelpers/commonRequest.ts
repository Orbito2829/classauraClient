import routes from './routesMapping';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type R = {
   code: number;
   message: string;
   data: any;
   lastUpdateTime?: string;
   lastCachedTime?: string;
};

const apiClient = axios.create({
   withCredentials: true
});

export const commonRequest = async <T extends Record<string, any>>(
   module: keyof typeof routes,
   endpoint: string,
   method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'QUERY' | 'PATCH' = 'GET',
   params?: T
): Promise<R> => {
   try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const route = routes[module]?.[endpoint];

      if (!baseUrl) {
         throw new Error('NEXT_PUBLIC_BASE_URL is not configured.');
      };

      if (!route) {
         throw new Error(`API route is not configured for ${module}.${endpoint}.`);
      };

      const url = `${baseUrl.replace(/\/+$/, '')}/${module}/${route.replace(/^\/+/, '')}`;
      const config: AxiosRequestConfig = { url, method, };

      if (method === 'GET') {
         config.params = params;
      } else {
         config.data = params;
      };

      const res = await apiClient<R>(config);

      if (res.data.code === 0) {
         // SET SNACK BAR HERE
      };

      return res.data;
   }
   catch (err) {
      throw err;
      // IMPLMENT GLOBAL ERROR DAILOG BOX HERE
   }
};