import { req } from '@/utils/request';

export const generate = p =>
  req.post(`pay/generate`, { ...p, baseURL: '/java' });
export const getPayResult = p =>
  req.get(`pay/orderqry`, { ...p, baseURL: '/java' });
