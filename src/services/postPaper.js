import { req } from '@/utils/request';

export const getPaperList = p => req.get(`submitPaper`, p);
export const addPaper = p => req.noTipsPost(`submitPaper`, p);
export const removePaper = p => req.remove(`submitPaper`, p);

export const getPayResult = p => req.get(`payCheck`, p);
export const batchDownPaper = p => req.post(`downloadFiles`, p);
