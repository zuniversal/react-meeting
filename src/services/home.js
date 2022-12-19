import {
  req
} from '@/utils/request';

export const getMeetingImg = p => req.get(`meetingImage`, p);