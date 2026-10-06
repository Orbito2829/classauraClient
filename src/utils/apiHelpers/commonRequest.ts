import routes from './routesMapping';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type R = {
   code: number;
   message: string;
   data: any;
   lastUpdateTime?: string;
   lastCachedTime?: string;
};

export const commonRequest = async <T extends Record<string, any>>(
   module: keyof typeof routes,
   endpoint: string,
   method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'QUERY' | 'PATCH' = 'GET',
   params?: T
): Promise<R> => {
   try {
      const url = `${process.env.NEXT_BASE_URL}${module}${routes[endpoint]}`;
      const config: AxiosRequestConfig = { url, method, };

      if (method === 'GET') {
         config.params = params;
      } else {
         config.data = params;
      };

      const res = await axios<R>(config);

      if (res.data.code === 0) {
         // SET SNACK BAR HERE
      };

      return res.data.data;
   }
   catch (err) {
      throw err;
      // IMPLMENT GLOBAL ERROR DAILOG BOX HERE
   }
};