import { req } from '@/utils/request';

export const getAdminHomeCount = p => req.get(`statistics`, p);
