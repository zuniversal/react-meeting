import {
  req
} from '@/utils/request';

export const regester = p => req.post(`regester`, p);
export const login = p => req.post(`login`, p);
export const userCenter = p => req.post(`userCenter`, p);
export const getCalled = p => req.get(`title`, p);
export const getIdentity = p => req.get(`title`, p);
