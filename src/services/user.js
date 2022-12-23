import {
  req
} from '@/utils/request';

export const regester = p => req.post(`regester`, p);
export const login = p => req.post(`login`, p);

export const getUserInfo = p => req.get(`userCenter`, p);
export const editUserInfo = p => req.put(`userCenter`, p);
