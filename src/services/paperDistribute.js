import { req } from '@/utils/request';

export const getApproverList = p => req.get(`reviewerList`, p);

export const getPaperDistributeList = p => req.get(`allotTasks`, p);
export const addPaperDistribute = p => req.post(`allotTasks`, p);
export const editPaperDistribute = p => req.put(`allotTasks`, p);
