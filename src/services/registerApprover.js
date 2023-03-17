import { req } from '@/utils/request';

export const getRegesterApproveList = p => req.get(`regesterShengaoren`, p);
export const addRegesterApprove = p => req.post(`regesterShengaoren`, p);
export const editRegesterApprove = p => req.put(`regesterShengaoren`, p);
export const removeRegesterApprove = p => req.remove(`regesterShengaoren`, p);
