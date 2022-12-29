import { req } from '@/utils/request';

export const getPaperApproverList = p => req.get(`payCheck`, p);
export const editPaperApprover = p => req.put(`payCheck`, p);
