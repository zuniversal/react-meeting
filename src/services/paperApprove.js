import { req } from '@/utils/request';

export const getPaperApproveList = p => req.get(`reviewPaper`, p);
export const editPaperApprove = p => req.put(`reviewPaper`, p);
export const getPaperApproverList = p => req.get(`reviewPaper`, p);
export const paperApprover = p => req.post(`reviewPaper`, p);
export const batchDownPaper = p => req.post(`downloadFiles`, p);
