import { commonRequest } from "@/utils/apiHelpers/commonRequest";

export const createAction = <T extends Record<string, any>>(
   module: string,
   endpoint: string, 
   method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'QUERY' | 'PATCH' = 'GET', 
   params?: T
) => {
   return commonRequest(module, endpoint, method, params);
};