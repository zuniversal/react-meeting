import { req } from '@/utils/request';

export const getNewsCenterList = p =>
  req.noTipsFormPost(`/listCloudNewsTendency`, p);
export const getNewsDetail = p =>
  req.noTipsFormPost(`/getCloudNewsTendency`, p);
