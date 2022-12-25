import { req } from '@/utils/request';

export const getCalledList = p => req.get(`call`, p);
export const getIdentityList = p => req.get(`title`, p);
export const getPaperTypeList = p => req.get(`submitPaperCate`, p);
export const getUserInfo = p => req.get(`userCenter`, p);
