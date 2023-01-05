import { req } from '@/utils/request';

export const regester = p => req.post(`regester`, p);
export const login = p => req.noTipsPost(`login`, p);
export const forgetPwd = p => req.post(`forgetPassword`, p);
export const setPwd = p => req.post(`setPassword`, p);

export const getUserInfo = p => req.get(`userCenter`, p);
export const editUserInfo = p => req.put(`userCenter`, p);

export const getJoinMeetingList = p => req.get(`joinMeeting`, p);
export const addJoinMeeting = p => req.post(`joinMeeting`, p);
