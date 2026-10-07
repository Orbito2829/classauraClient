import { createAction } from "@/utils/apiHelpers/createActions";
const MODULE: string = 'profile';

export const getProfile = (params?: any) => createAction(MODULE, 'getProfile', 'GET', params);
export const logout = (params?: any) => createAction('auth', 'logoutUser', 'POST', params);