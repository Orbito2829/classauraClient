import routes from './routesMapping';
import axios from 'axios';

export const commonRequest = async <T extends Record<string, any>>(
   module: keyof typeof routes,
   endPoint: string,
   method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'QUERY' | 'PATCH',
   params?: T
): Promise<AxiosResponse<R>> => {
   try {
      const url = `${process.env.NEXT_BASE_URL}${routes[module]}${endPoint}`;

      const config: AxiosRequestConfig = { url, method, };

      if (method === 'GET') {
         config.params = params;
      } else {
         config.data = params;
      };

      const res = await axios(config);

      if (res.code === 0) {
         return res.message;
      };

      return res;
   }
   catch (err) {
      throw err;
   }
};