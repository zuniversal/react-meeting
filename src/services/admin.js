import { req } from '@/utils/request';

export const getAdminHomeCount = p => req.get(`statistics`, p);
export const getJoinCountList = p => req.get(`joinMeetingUsers`, p);
export const getRegisterCountList = p => req.get(`regester`, p);
