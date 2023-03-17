import { req } from '@/utils/request';

export const getLogManageList = p => req.get(`logManage`, p);
