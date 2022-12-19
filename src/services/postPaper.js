import {
  req
} from '@/utils/request';


export const getSubmitPaper = p => req.get(`submitPaper`, p);
export const getPayResult = p => req.get(`payCheck`, p);
