import { req } from '@/utils/request';

export const getPaperList = p => req.get(`submitPaper`, p);
export const addPaper = p => req.post(`submitPaper`, p);

export const getPayResult = p => req.get(`payCheck`, p);
