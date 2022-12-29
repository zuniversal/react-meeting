import { req } from '@/utils/request';

export const getApproverList = p => req.get(`reviewerList`, p);
