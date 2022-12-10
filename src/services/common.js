import {
  req
} from '@/utils/request';

export const getCalled = p => req.get(`title`, p);
export const getIdentity = p => req.get(`title`, p);