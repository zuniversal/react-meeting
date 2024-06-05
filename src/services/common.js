import { req } from '@/utils/request';
import { formatSelectList } from '@/utils';
import { attendMethodListUrl } from '@/constants';

export const getCalledList = p => req.get(`call`, p);
export const getIdentityList = p => req.get(`title`, p);
export const getHotelList = p => req.get(`hotel`, p);
// .then(res => {
//   console.log(' getHotelList   ： ', formatSelectList(res.data, 'hotelName')    )//
//   return formatSelectList(res.data, 'hotelName')
// });
export const getPaperTypeList = p => req.get(`submitPaperCate`, p);
export const getPaperCateList = p => req.get(`paperCate`, p);
export const getUserInfo = p => req.get(`userCenter`, p);

export const getAttendMethodList = p =>
  req.get(`${attendMethodListUrl}/attendMethodList.json`, p);
