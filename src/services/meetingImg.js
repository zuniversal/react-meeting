import { req } from '@/utils/request';

export const getMeetingImgList = p => req.get(`meetingImage`, p);
export const addMeetingImg = p => req.post(`meetingImage`, p);
export const editMeetingImg = p => req.put(`meetingImage`, p);
export const removeMeetingImg = p => req.remove(`meetingImage`, p);
