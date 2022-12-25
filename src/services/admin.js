import { req } from '@/utils/request';

export const getCount = p => req.get(`statistics`, p);
