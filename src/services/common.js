import {
  req
} from '@/utils/request';

export const getCalled = p => req.get(`call`, p);
export const getIdentity = p => req.get(`title`, p);
export const getuserInfo = p => req.get(`userCenter`, p);